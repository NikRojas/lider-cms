<template>
  <div>
    <div class="text-center mt-3" v-if="!hideButtonSend">
      <Button
        @click="sendTest"
        :text="'Realizar Test'"
        :classes="['btn-primary']"
        :request-server="requestTest"
      ></Button>
    </div>
    <div v-if="hideButtonSend">
      <p>
        Ingrese las credenciales de su tarjeta.
      </p>
    </div>
    <div id="formprod" style="width: 296px; margin: auto"></div>
    <div v-if="message" class="mt-2 text-center">
      <b> {{ message }}!!! </b>
    </div>
  </div>
</template>
<script>
import KRGlue from "@lyracom/embedded-form-glue";
import Button from "../../../components/Button";
export default {
  components: {
    Button,
  },
  props: {
    route: String,
    project: Object,
  },
  data() {
    return {
      requestTest: false,
      modalTest: false,
      orderTest: {
        id: "",
      },
      message: "",
      hideButtonSend: false,
      endpoint: "https://static.micuentaweb.pe/",
    };
  },
  methods: {
    pay(event) {
      if (event.clientAnswer.orderStatus === "PAID") {
        this.message = "Pago Correcto";
      } else {
        this.message = "Pago Fallido";
      }
    },
    generateForm(token, tokenjs) {
      this.hideButtonSend = true;
      const formToken = token;
      KRGlue.loadLibrary(this.endpoint, tokenjs)
        .then(({ KR }) =>
          KR.setFormConfig({
            formToken: formToken,
          })
        )
        .then(({ KR }) => KR.addForm("#formprod"))
        .then(({ KR, result }) => KR.showForm(result.formId))
        .then(({ KR }) => KR.onSubmit(this.pay))
        .catch((error) => {
          this.promiseError = error + " (see console for more details)";
        });
    },
    sendTest() {
      this.requestTest = true;
      this.orderTest.project_id = this.project.id;
      axios({
        method: "post",
        url: this.route,
        data: this.orderTest,
      })
        .then((response) => {
          this.requestTest = false;
          console.log(response.data);
          if (response.data.token) {
            this.generateForm(response.data.token, response.data.tokenJs);
          }
        })
        .catch((error) => {
          this.requestTest = false;
          if (error.response.status === 422) {
            this.errors = error.response.data.errors || {};
            return;
          }
          Swal.fire({
            title: error.response.data.title,
            text: error.response.data.message,
            type: "error",
            confirmButtonText: "OK",
            buttonsStyling: false,
            customClass: {
              confirmButton: "btn btn-primary",
            },
          });
        });
    },
    restoreTest() {
      this.modalTest = false;
      this.orderTest = {};
    },
  },
};
</script>