<template>
  <div class="row py-5 py-lg-0 my-5 my-lg-0">
    <div class="col-12 pt-lg-5 mt-lg-5 px-lg-5">
      <img
        src="/storage/img/logo-pg.svg"
        height="80"
        width="auto"
        alt="Logo"
        class="d-block mx-auto mb-4 mt-lg-5"
      />
      <form class="px-sm-3 px-lg-4" @submit.prevent="login" v-if="loginBloque">
        <div class="form-group mb-3">
          <label for="email" class="form-control-label d-block">Email</label>
          <input
            class="form-control form-control-alternative"
            type="text"
            v-model="email"
            id="email"
          />
          <label
            v-if="errores && errores.email"
            class="mt-2 text-danger text-sm"
            for="email"
          >{{ errores.email[0] }}</label>
        </div>
        <div class="form-group">
          <label for="password" class="form-control-label d-block">Contraseña</label>
          <input
            class="form-control form-control-alternative"
            id="password"
            type="password"
            v-model="clave"
          />
          <label
            v-if="errores && errores.password"
            class="mt-2 text-danger text-sm"
            for="password"
          >{{ errores.password[0] }}</label>
        </div>
        <div class="custom-control custom-control-alternative custom-checkbox">
          <input
            class="custom-control-input"
            id="customCheckLogin"
            type="checkbox"
            v-model="token_recordar"
          />
          <label class="custom-control-label" for="customCheckLogin">
            <span class="text-dark">Recuérdame</span>
          </label>
        </div>
        <div class="text-center">
          <Button
            :text="'Iniciar Sesión'"
            :classes="['btn-primary','my-4']"
            :request-server="requestServer"
          ></Button>
        </div>
      </form>
      <form @submit.prevent="resetearClave" v-if="resetearBloque" class="px-lg-3">
        <div class="form-group">
          <label for="id_correo_electronico" class="form-control-label d-block">Correo Electronico</label>
          <input
            class="form-control form-control-alternative"
            type="email"
            id="id_correo_electronico"
            v-model="resetear.email"
          />
          <label
            v-if="errores && errores.email"
            class="mt-2 text-danger text-sm"
            for="id_correo_electronico"
          >{{ errores.email[0] }}</label>
          <label
            v-if="mensajes && mensajes.email"
            class="error mt-2 text-danger text-sm"
          >{{ mensajes.email }}</label>
          <label
            v-if="mensajes && mensajes.status"
            class="error mt-2 text-success text-sm"
          >{{ mensajes.status }}</label>
        </div>
        <div class="text-center">
          <Button :text="'Enviar'" :classes="['btn-primary']" :request-server="requestServer"></Button>
        </div>
      </form>
      <div class="row px-sm-3 px-lg-4" v-if="loginBloque">
        <div class="col-12">
          <a
            href="#"
            class="text-primary"
            @click.prevent="()=>{ loginBloque = false; resetearBloque = true; restaurarPagina() }"
          >
            <small>Olvidaste tu contraseña?</small>
          </a>
        </div>
      </div>
      <div class="row px-sm-3 px-lg-4" v-if="resetearBloque">
        <div class="col-12">
          <a
            href="#"
            class="text-primary"
            @click.prevent="()=>{ loginBloque = true; resetearBloque = false; restaurarPagina(); }"
          >
            <small>Regresar al Login</small>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../../components/Button";
export default {
  props: {
    rutaRestablecerContrasena: {
      type: String,
      required: true
    },
    rutaLogin: {
      type: String,
      required: true
    }
  },
  components: {
    Button
  },
  data() {
    return {
      requestServer: false,
      loginBloque: true,
      resetearBloque: false,
      email: "",
      clave: "",
      token_recordar: false,
      errores: {},
      resetear: {
        email: ""
      },
      mensajes: {}
    };
  },
  methods: {
    restaurarPagina() {
      this.errores = {};
      this.email = "";
      this.token_recordar = false;
      this.clave = "";
      this.resetear = {
        email: ""
      };
      this.mensajes = {};
    },
    login: function() {
      this.requestServer = true;
      axios
        .post(this.rutaLogin, {
          email: this.email,
          password: this.clave,
          remember: this.token_recordar
        })
        .then(response => {
          this.requestServer = false;
          document.location.href = response.data.route;
        })
        .catch(error => {
          this.requestServer = false;
          if (error.response.status === 422) {
            this.errores = error.response.data.errors || {};
            return;
          }
          if (error.response.status === 429) {
            this.errores = error.response.data.errors || {};
            return;
          }
          this.errores.email = [
            "Ocurrió un error en nuestros servidores. Por favor inténtelo de nuevo."
          ];
        });
    },
    resetearClave() {
      this.requestServer = true;
      axios
        .post(this.rutaRestablecerContrasena, this.resetear)
        .then(response => {
          this.requestServer = false;
          this.errores = {};
          this.mensajes = response.data || {};
        })
        .catch(error => {
          this.requestServer = false;
          this.errores = {};
          this.mensajes = {};
          this.mensajes = error.response.data || {};
          if (error.response.status === 422) {
            this.errores = error.response.data.errors || {};
            return;
          }
          /*if (error.response.status === 429) {
                        this.errores.email = ["Demasiados intentos fallidos de Logueo. Por favor inténtelo de nuevo en 60 segundos."];   
                        return;
                    }*/
          if (error.response.status === 500) {
            this.errores.email = [
              "Ocurrió un error en nuestros servidores. Por favor inténtelo de nuevo."
            ];
            return;
          }
        });
    }
  },
  watch: {
    username: function(val) {
      if (val.length) {
        this.errores.username = "";
      }
    },
    clave: function(val) {
      if (val.length) {
        this.errores.password = "";
      }
    }
  }
};
</script>