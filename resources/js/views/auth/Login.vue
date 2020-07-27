<template>
  <div class="row py-lg-0 my-lg-0 h-100 d-flex align-items-center mx-lg-5">
    <div class="col-12 px-lg-5 w-100 ">
      <img
        src="/storage/img/logo.png"
        height="60"
        width="auto"
        alt="Logo"
        class="d-block mx-auto mb-4"
      />
      <form class="px-sm-3 px-lg-4" @submit.prevent="login" v-if="loginBlock">
        <div class="form-group mb-3">
          <label for="email" class="form-control-label d-block">Email</label>
          <input
            class="form-control "
            type="text"
            v-model="email"
            id="email"
          />
          <label
            v-if="errors && errors.email"
            class="mt-2 text-danger text-sm"
            for="email"
          >{{ errors.email[0] }}</label>
        </div>
        <div class="form-group">
          <label for="password" class="form-control-label d-block">Contraseña</label>
          <input
            class="form-control "
            id="password"
            type="password"
            v-model="password"
          />
          <label
            v-if="errors && errors.password"
            class="mt-2 text-danger text-sm"
            for="password"
          >{{ errors.password[0] }}</label>
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
            :classes="['btn-primary','my-4','btn-block']"
            :request-server="requestServer"
          ></Button>
        </div>
      </form>
      <form @submit.prevent="resetPassword" v-if="resetearBlock" class="px-sm-3 px-lg-4">
        <div class="form-group">
          <label for="id_correo_electronico" class="form-control-label d-block">Correo Electronico</label>
          <input
            class="form-control "
            type="email"
            id="id_correo_electronico"
            v-model="resetear.email"
          />
          <label
            v-if="errors && errors.email"
            class="mt-2 text-danger text-sm"
            for="id_correo_electronico"
          >{{ errors.email[0] }}</label>
          <label
            v-if="messages && messages.email"
            class="error mt-2 text-danger text-sm"
          >{{ messages.email }}</label>
          <label
            v-if="messages && messages.status"
            class="error mt-2 text-success text-sm"
          >{{ messages.status }}</label>
        </div>
        <div class="text-center">
          <Button :text="'Enviar'" :classes="['btn-primary','btn-block','mb-4']" :request-server="requestServer"></Button>
        </div>
      </form>
      <div class="row px-sm-3 px-lg-4" v-if="loginBlock">
        <div class="col-12">
          <a
            href="#"
            class="text-primary"
            @click.prevent="()=>{ loginBlock = false; resetearBlock = true; restorePage() }"
          >
            <small>Olvidaste tu contraseña?</small>
          </a>
        </div>
      </div>
      <div class="row px-sm-3 px-lg-4" v-if="resetearBlock">
        <div class="col-12">
          <a
            href="#"
            class="text-primary"
            @click.prevent="()=>{ loginBlock = true; resetearBlock = false; restorePage(); }"
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
      loginBlock: true,
      resetearBlock: false,
      email: "",
      password: "",
      token_recordar: false,
      errors: {},
      resetear: {
        email: ""
      },
      messages: {}
    };
  },
  methods: {
    restorePage() {
      this.errors = {};
      this.email = "";
      this.token_recordar = false;
      this.password = "";
      this.resetear = {
        email: ""
      };
      this.messages = {};
    },
    login: function() {
      this.requestServer = true;
      axios
        .post(this.rutaLogin, {
          email: this.email,
          password: this.password,
          remember: this.token_recordar
        })
        .then(response => {
          this.requestServer = false;
          document.location.href = response.data.route;
        })
        .catch(error => {
          this.requestServer = false;
          if (error.response.status === 422) {
            this.errors = error.response.data.errors || {};
            return;
          }
          if (error.response.status === 429) {
            this.errors = error.response.data.errors || {};
            return;
          }
          this.errors.email = [
            "Ocurrió un error en nuestros servidores. Por favor inténtelo de nuevo."
          ];
        });
    },
    resetPassword() {
      this.requestServer = true;
      axios
        .post(this.rutaRestablecerContrasena, this.resetear)
        .then(response => {
          this.requestServer = false;
          this.errors = {};
          this.messages = response.data || {};
        })
        .catch(error => {
          this.requestServer = false;
          this.errors = {};
          this.messages = {};
          this.messages = error.response.data || {};
          if (error.response.status === 422) {
            this.errors = error.response.data.errors || {};
            return;
          }
          /*if (error.response.status === 429) {
                        this.errors.email = ["Demasiados intentos fallidos de Logueo. Por favor inténtelo de nuevo en 60 segundos."];   
                        return;
                    }*/
          if (error.response.status === 500) {
            this.errors.email = [
              "Ocurrió un error en nuestros servidores. Por favor inténtelo de nuevo."
            ];
            return;
          }
        });
    }
  },
  watch: {
    email: function(val) {
      if (val.length) {
        this.errors.email = "";
      }
    },
    password: function(val) {
      if (val.length) {
        this.errors.password = "";
      }
    }
  }
};
</script>