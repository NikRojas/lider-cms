<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-4">
            <div class="col-6 col-md-7">
              <BreadCrumb title="Vistas Inmueble" parent="Administración" active="Vistas Inmueble"></BreadCrumb>
            </div>
            <div class="col-6 col-md-5 text-right">
              <a href="#" class="btn btn-icon btn-inverse-primary" @click.prevent="newEl">
                <span class="btn-inner--icon">
                  <jam-magic class="current-color" />
                </span>
                <span class="btn-inner--text">Nuevo Vista</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid mt--6">
      <DataTable
        :object="elements"
        placeholder="Nombre, Código SAP"
        :button-update="true"
        :button-read="false"
        :button-delete="true"
        @get="getElements"
        @delete="deleteEl"
        @update="editEl"
        :entries-prop.sync="elementsPerPage"
        :messageCantDelete="messageCantDelete"
      ></DataTable>
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
        <div class="text-primary h2">{{ title }} Vista Inmueble</div>
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
                <label class="font-weight-bold" for="name">Nombre</label>
                <input type="text" class="form-control" v-model="element.name" id="name" />
                <label
                  v-if="errors && errors.name"
                  class="mt-2 text-danger text-sm"
                  for="name"
                >{{ errors.name[0] }}</label>
              </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                <label class="font-weight-bold" for="sap_code">Código SAP</label>
                <input type="text" class="form-control" v-model="element.sap_code" id="sap_code" />
                <label
                  v-if="errors && errors.sap_code"
                  class="mt-2 text-danger text-sm"
                  for="sap_code"
                >{{ errors.sap_code[0] }}</label>
              </div>
            </div>
          </div>
        </form>
      </div>
      <template v-slot:modal-footer="{ ok }">
        <Button
          :classes="['btn-inverse-primary']"
          :text="title == 'Nuevo' ? 'Crear' : 'Actualizar'"
          @click="submit"
          :request-server="requestSubmit"
        ></Button>
        <button type="button" class="btn btn-secondary" @click="restoreEl">Cancelar</button>
      </template>
    </b-modal>
    <destroy
      element="vista de Inmueble"
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
import DataTable from "../../components/DataTable";
import BreadCrumb from "../../components/BreadCrumb";
import InputSlug from "../../components/form/InputSlug";
import SkeletonForm from "../../components/skeleton/form";
import Destroy from "../../components/modals/Destroy";
export default {
  components:{
    BreadCrumb,
    DataTable,
    Button,
    InputSlug,
    SkeletonForm,
    Destroy
  },
  props: {
    routeGetAll: String,
    route: String,
    messageCantDelete: String,
  },
  data() {
    return {
      elements: {},
      element: {
        name: '',
        sap_code: '',
      },
      loadingGet: false,
      title: '',
      elementsPerPage: 10,
      errors: {},
      modalCreateUpdate: false,
      modalDestroy: false,
      requestSubmit: false
    }
  },
  methods:{
    destroyConfirm() {
      this.requestSubmit = true;
      axios
        .delete(this.route + "/" + this.element.id)
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
    restore(){
      this.errors = {};
      this.element = {
        name: '',
        sap_code: '',
      };
      this.modalCreateUpdate = this.modalDestroy = false;
      this.getElements(1, this.elementsPerPage);
    },
    editEl(id) {
      this.title = "Actualizar";
      this.modalCreateUpdate = true;
      this.getEl(id);
    },
    submit(){
      this.requestSubmit = true;
      let url;
      let method;
      if (this.title == "Nuevo") {
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
    restoreEl(){
      this.errors = {};
      this.element = {
        name: '',
        sap_code: '',
      };
      this.modalCreateUpdate = false;
    },
    deleteEl(id){
      this.modalDestroy = true;
      this.getEl(id);
    },
    getElements(page, itemsPerPage, q = null) {
      let url = this.routeGetAll + "?page=" + page + "&itemsPerPage=" + itemsPerPage;
      if (q) {
        url = url + "&q=" + q;
      }
      axios
        .get(url)
        .then((response) => {
          this.elements = response.data;
        })
        .catch((error) => {});
    },
    getEl(id){
      this.loadingGet = true;
      axios
        .get(this.route + '/json/get/' + id)
        .then((response) => {
          this.element = response.data;
          this.loadingGet = false;
        })
        .catch((error) => {});
    },
    newEl(){
      this.title = "Nuevo";
      this.modalCreateUpdate = true;
    }
  },
  created() {
    this.getElements(1, this.elementsPerPage);
  },
}
</script>