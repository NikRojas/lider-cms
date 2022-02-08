<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-4">
            <div class="col-6 col-md-7">
              <BreadCrumb :title="'Etapas Proyecto ' + elementParent.name_es" parent active="Etapas"></BreadCrumb>
            </div>
            <div class="col-6 col-md-5 text-right">
              <a href="#" class="btn btn-icon btn-inverse-primary" @click.prevent="newEl">
                <span class="btn-inner--text">Nueva Etapa</span>
              </a>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-6 col-md-5">
              <a
                :href="'/proyectos'"
                class="btn btn-icon btn-sm btn-inverse-light"
              >
                <span class="btn-inner--icon">
                  <jam-arrow-left class="current-color" />
                </span>
                <span class="btn-inner--text">Regresar</span>
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
        :messageCantDelete="'No se puede eliminar la etapa porque esta anidado en al menos un departamneto'"
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
        <div class="text-primary h2">{{ title }} Etapa del Proyecto</div>
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
                <p class="mb-0 small" style="opacity: 0.7;">Utilizado para la obtención de departamentos vía SAP</p>
                <label
                  v-if="errors && errors.sap_code"
                  class="mt-2 text-danger text-sm"
                  for="sap_code"
                >{{ errors.sap_code[0] }}</label>
              </div>
            </div>
            <div class="col-12">
              <label class="font-weight-bold" id="project_status_id"
                >Estado:</label
              >
              <select
                class="form-control"
                id="project_status_id"
                v-model="element.project_status_id"
              >
                <option :value="el.id" v-for="(el, i) in estadosParent" :key="i">
                  {{ el.name_es }}
                </option>
              </select>
              <label
                v-if="errors && errors.project_status_id"
                class="mt-2 text-danger text-sm"
                for="project_status_id"
                >{{ errors.project_status_id[0] }}</label
              >
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
      element="etapa del proyecto"
      @cancel="restoreEl"
      :open="modalDestroy"
      @submit="destroyConfirm"
      :loading-get="loadingGet"
      :loading-submit="requestSubmit"
    ></destroy>
  </div>
</template>
<script>
import Button from "../../../components/Button";
import DataTable from "../../../components/DataTable";
import BreadCrumb from "../../../components/BreadCrumb";
import InputSlug from "../../../components/form/InputSlug";
import SkeletonForm from "../../../components/skeleton/form";
import Destroy from "../../../components/modals/Destroy";
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
    elementParent: Object,
    routeGetAll: String,
    route: String,
    messageCantDelete: String,
    estadosParent: Array
  },
  data() {
    return {
      elements: {},
      element: {
        slug_en: '',
        slug_es: '',
        name_en: '',
        name_es: ''
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
        .delete("/proyectos/etapas/eliminar/" + this.elementParent.id + "/" + this.element.id)
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
        slug_en: '',
        slug_es: '',
        name_en: '',
        name_es: ''
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
      if (this.title == "Nueva") {
        url = this.route;
        method = "post";
      } else {
        url = "/proyectos/etapas/actualizar/" + this.elementParent.id + "/" + this.element.id;
        method = "put";
      }
      this.element.project_id = this.elementParent.id;
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
        slug_en: '',
        slug_es: '',
        name_en: '',
        name_es: ''
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
      this.title = "Nueva";
      this.modalCreateUpdate = true;
    }
  },
  created() {
    this.getElements(1, this.elementsPerPage);
  },
}
</script>