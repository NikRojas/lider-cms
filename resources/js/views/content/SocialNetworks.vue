<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-4">
            <div class="col-6 col-md-7">
              <BreadCrumb title="Redes Sociales" parent="Información" active="Redes Sociales"></BreadCrumb>
            </div>
            <div class="col-6 col-md-5 text-right">
              <a href="#" class="btn btn-icon btn-inverse-primary" @click.prevent="newEl">
                <span class="btn-inner--icon">
                  <jam-facebook class="current-color"></jam-facebook>
                </span>
                <span class="btn-inner--text">Nueva Red Social</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid mt--6">
      <DataTableDraggable
        :object.sync="elements"
        :buttonUpdate="true"
        :buttonDelete="true"
        :buttonDetail="false"
        @drag="handleChange"
        @edit="editEl"
        @delete="deleteEl"
        :message-order="messageOrder"
      ></DataTableDraggable>
    </div>

    <b-modal
      v-model="modalCreateUpdate"
      @close="restoreEl"
      no-close-on-esc
      no-close-on-backdrop
      centered
      footer-class="border-0 pt-0"
      body-class="pt-0"
    >
      <template slot="modal-title">
        <div class="text-primary h2">{{ title }} Red Social</div>
      </template>
      <template slot="modal-header-close">
        <button type="button" class="btn p-0 bg-transparent" @click="restoreEl">
          <jam-close></jam-close>
        </button>
      </template>
      <div v-if="loadingGet">
        <SkeletonForm></SkeletonForm>
      </div>
      <div v-else>
        <form @submit.prevent="submit">
          <div class="row">
            <div class="col-12">
              <div class="form-group">
              <label class="font-weight-bold d-block" for="name">Nombre</label>
              <select v-model="element.master_social_network_id" id="name" class="form-control">
                <option value disabled>Seleccionar Red Social</option>
                <option
                  v-for="el in masterNetworks"
                  :key="el.id"
                  :value="el.id"
                >{{ el.name }}</option>
              </select>
              <label
                v-if="errors && errors.master_social_network_id"
                class="mt-2 text-danger text-sm"
                for="name"
              >{{ errors.master_social_network_id[0] }}</label>
            </div>
            <div class="form-group">
              <label class="font-weight-bold d-block" for="url">URL</label>
              <input
                type="text"
                class="form-control"
                v-model="element.url"
                id="url"
              />
              <label
                v-if="errors && errors.url"
                class="mt-2 text-danger text-sm"
                for="url"
              >{{ errors.url[0] }}</label>
            </div>
            </div>
          </div>
        </form>
      </div>
      <template v-slot:modal-footer="{ ok }">
        <Button
          :classes="['btn-inverse-primary']"
          :text="title == 'Nueva' ? 'Crear' : 'Actualizar'"
          @click="submit"
          :request-server="requestSubmit"
        ></Button>
        <button type="button" class="btn btn-secondary" @click="restoreEl">Cancelar</button>
      </template>
    </b-modal>
    <destroy
      element="red social"
      @cancel="restoreEl"
      :open="modalDestroy"
      @submit="destroyConfirm"
      :loading-get="loadingGet"
      :loading-submit="requestSubmit"
    ></destroy>
  </div>
</template>
<script>
import Button from "../../components/Button";
import DataTableDraggable from "../../components/DataTableDraggable";
import BreadCrumb from "../../components/BreadCrumb";
import SkeletonForm from "../../components/skeleton/form";
import Destroy from "../../components/modals/Destroy";
export default {
  props: {
    masterNetworks: Array,
    route: String,
    routeGetAll: String,
    routeOrder: String,
    messageOrder: String,
  },
  components: {
    SkeletonForm,
    DataTableDraggable,
    Button,
    BreadCrumb,
    Destroy
  },
  data() {
    return {
      elements: {},
      title: "",
      element: {
        master_social_network_id: "",
        url: "",
      },
      errors: {},
      loadingGet: false,
      requestSubmit: false,
      modalCreateUpdate: false,
      modalDestroy: false
    };
  },
  methods: {
    submit(){
      this.requestSubmit = true;
      let url;
      let method;
      if (this.title == "Nueva") {
        url = this.route;
        method = "post";
      } else {
        url = this.route + "/" + this.element.id;
        method = "put";
      }
      axios({
        method: method,
        url: url,
        data: this.element,
      })
        .then((response) => {
          this.requestSubmit = false;
          Swal.fire({
            title: response.data.title,
            text: response.data.message,
            type: "success",
            confirmButtonText: "OK",
            buttonsStyling: false,
            customClass: {
              confirmButton: "btn btn-inverse-primary",
            },
          });
          this.restore();
        })
        .catch((error) => {
          this.requestSubmit = false;
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
              confirmButton: "btn btn-inverse-primary",
            },
          });
          this.restoreEl();
        });
    },
    restore() {
      this.errors = {};
      this.elements = {};
      this.modalCreateUpdate = this.modalDestroy = false;
      this.element = {
        master_social_network_id: "",
        url: "",
      };
      this.getEls();
    },
    restoreEl() {
      this.errors = {};
      this.modalCreateUpdate = this.modalDestroy = false;
      this.element = {
        master_social_network_id: "",
        url: "",
      };
    },
    handleChange(elements) {
      axios
        .put(this.routeOrder, elements)
        .then((response) => {
          this.restore();
          Swal.fire({
            title: response.data.title,
            text: response.data.message,
            type: "success",
            confirmButtonText: "OK",
            buttonsStyling: false,
            customClass: {
              confirmButton: "btn btn-inverse-primary",
            },
          });
        })
        .catch((error) => {
          Swal.fire({
            title: error.response.data.title,
            text: error.response.data.message,
            type: "error",
            confirmButtonText: "OK",
            buttonsStyling: false,
            customClass: {
              confirmButton: "btn btn-inverse-primary",
            },
          });
        });
    },
    editEl(id) {
      this.modalCreateUpdate = true;
      this.getEl(id);
    },
    destroyConfirm() {
      this.requestSubmit = true;
      axios
        .delete(this.route + '/' + this.element.id)
        .then((response) => {
          this.requestSubmit = false;
          this.restore();
          Swal.fire({
            title: response.data.title,
            text: response.data.message,
            type: "success",
            confirmButtonText: "OK",
            buttonsStyling: false,
            customClass: {
              confirmButton: "btn btn-inverse-primary",
            },
          });
        })
        .catch((error) => {
          Swal.fire({
            title: error.response.data.title,
            text: error.response.data.message,
            type: "error",
            confirmButtonText: "OK",
            buttonsStyling: false,
            customClass: {
              confirmButton: "btn btn-inverse-primary",
            },
          });
          this.restoreEl();
        });
    },
    deleteEl(id){
      this.modalDestroy = true;
      this.getEl(id);
    },
    getEl(id) {
      this.loadingGet = true;
      axios
        .get(this.route + '/json/get/' + id)
        .then((response) => {
          this.element = response.data;
          this.loadingGet = false;
        })
        .catch((error) => {});
    },
    newEl() {
      this.title = "Nueva";
      this.modalCreateUpdate = true;
    },
    getEls() {
      axios
        .get(this.routeGetAll)
        .then((response) => {
          this.elements = response.data;
        })
        .catch((error) => {});
    },
  },
  created() {
    this.getEls();
  },
};
</script>
