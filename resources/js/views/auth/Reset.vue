<template>
  <div class="row py-5 py-lg-0 my-5 my-lg-0">
    <div class="col-12 pt-lg-5 mt-lg-5 px-lg-5">
      <img
        src="/storage/img/logo-pg.svg"
        height="auto"
        width="75"
        alt="Logo"
        class="d-block mx-auto mb-4 mt-lg-5"
      />
      <form role="form" v-on:submit.prevent="resetPassword">
        <div class="form-group">
          <label class="form-control-label" for="id_correo_electronico">Correo Electrónico</label>
          <input
            type="text"
            class="form-control "
            id="id_correo_electronico"
            placeholder="Ingrese su correo electrónico"
            v-model="email"
            disabled
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
        </div>
        <div class="form-group">
          <label class="form-control-label" for="id_password">Nueva Contraseña</label>
          <input
            type="password"
            class="form-control "
            id="id_password"
            placeholder="Ingrese su contraseña"
            v-model="restore.password"
          />
          <label
            v-if="errors && errors.password"
            class="mt-2 text-danger text-sm"
            for="id_password"
          >{{ errors.password[0] }}</label>
        </div>
        <div class="form-group">
          <label class="form-control-label" for="id_confirm_password">
            Confirmar Nueva
            Contraseña
          </label>
          <input
            type="password"
            class="form-control "
            id="id_confirm_password"
            placeholder="Ingrese su contraseña"
            v-model="restore.password_confirmation"
          />
          <label
            v-if="errors && errors.password_confirmation"
            class="mt-2 text-danger text-sm"
            for="id_confirm_password"
          >{{ errors.password_confirmation[0] }}</label>
        </div>
        <div class="form-group text-center">
          <Button
            :text="'Restablecer Contraseña'"
            :classes="['btn-primary']"
            :request-server="requestServer"
          ></Button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Button from "../../components/Button";
export default {
  props: {
    routeResetPassword: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    },
    email: {
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
      errors: {},
      messages: {},
      restore: {
        password: "",
        password_confirmation: ""
      }
    };
  },
  methods: {
    resetPassword() {
      this.requestServer = true;
      this.restore.token = this.token;
      this.restore.email = this.email;
      axios
        .post(this.routeResetPassword, this.restore)
        .then(response => {
          this.requestServer = false;
          this.errors = {};
          this.messages = {};
          document.location.href = response.data.route;
        })
        .catch(error => {
          this.requestServer = false;
          this.errors = {};
          this.messages = {};
          if (error.response.status === 422) {
            this.errors = error.response.data.errors || {};
            return;
          } else if (error.response.status == 400) {
            this.messages = error.response.data || {};
          } else {
            this.errors.email = [
              "Ocurrió un error en nuestros servidores. Por favor inténtelo de nuevo."
            ];
          }
        });
    }
  }
};
</script>
