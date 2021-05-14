<template>
  <div>
    <div class="header">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-3">
            <div class="col-6 col-md-7">
              <BreadCrumb
                :title="'Inmuebles Proyecto ' + project.name_es"
                parent
                active="Proyectos"
              ></BreadCrumb>
            </div>
          </div>
          <div class="row mb-5">
            <div class="col-6 col-md-5">
              <a
                :href="routeReturn"
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
    <div class="container-fluid mt--4">
      <b-tabs
        pills
        v-model="tabIndex"
        nav-wrapper-class="mb-4 mb-lg-0"
        nav-class="border bg-white px-2 mb-4"
        content-class=""
      >
        <b-tab
          title="Lista de Inmuebles"
          active
          title-link-class="border-0 shadow-none bg-white py-3"
          title-item-class="pr-0 my-0"
        >
          <div class="row mb-4">
            <div class="col-12 col-lg-2">
              <h2>Sincronizar Inmuebles</h2>
              <p>Realiza la sincronización de inmuebles con SAP.</p>
            </div>
            <div class="col-12 col-lg-10">
              <div class="card">
                <div class="card-body">
                  <p>
                    De click al botón "Obtener Inmuebles" para obtener el
                    listado de inmuebles del Proyecto registrado en SAP, la
                    disponibilidad de los mismos se actualizara automáticamente
                    cada 10 minutos.
                  </p>
                  <div class="text-right">
                    <Button
                      @click="getSapDepartments"
                      :text="'Obtener Inmuebles'"
                      :classes="['btn-primary']"
                      :request-server="requestServerSincronization"
                    ></Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <DataTable
                :object="elements"
                placeholder="Código SAP, Descripción"
                :button-update="false"
                :button-read="false"
                :button-delete="true"
                :button-disable="false"
                @get="getEls"
                @delete="deleteEl"
                :entries-prop.sync="elementsPerPage"
              ></DataTable>
            </div>
          </div>
        </b-tab>
        <b-tab
          title="Imágenes de Inmuebles"
          title-link-class="border-0 shadow-none bg-white py-3"
          title-item-class="pr-0 my-0"
        >
          <AddImages
            :imagesUrl="imagesUrl"
            :projectName="elementParent.name_es"
            :projectId="elementParent.id"
          />
        </b-tab>
      </b-tabs>
    </div>

    <destroy
      element="inmueble"
      @cancel="restoreEl"
      :open="modalDestroy"
      @submit="destroyConfirm"
      :loading-get="loadingGet"
      :loading-submit="requestSubmit"
    ></destroy>
  </div>
</template>
<style>
.nav-pills .nav-link.active {
  border-bottom: 4px solid #1762e6 !important;
  background-color: #fdfbfa !important;
}
</style>
    <script>
import BreadCrumb from "../../../components/BreadCrumb";
import Button from "../../../components/Button";
import DataTable from "../../../components/DataTable";
import { Skeleton } from "vue-loading-skeleton";
import NoData from "../../../components/NoData";
import AddImages from "./AddImages";
import Destroy from "../../../components/modals/Destroy";
export default {
  props: {
    elementParent: Object,
    imagesUrl: String,
    routeReturn: String,
    routeGetAll: String,
    routeGetSap: String,
  },
  components: {
    BreadCrumb,
    Button,
    Skeleton,
    NoData,
    DataTable,
    AddImages,
    Destroy
  },
  data() {
    return {
      requestSubmit: false,
      loadingGet: false,
      modalDestroy: false,
      tabIndex: 0,
      requestServerSincronization: false,
      project: {},
      elements: {},
      loadingEls: false,
      elementsPerPage: 10,
      deleteId: ''
    };
  },
  methods: {
    restoreEl(){
      this.deleteId = '';
      this.modalDestroy = false;
    },
    restore(){
      this.deleteId = '';
      this.requestSubmit = false;
      this.modalDestroy = false;
      this.getEls(1, this.elementsPerPage);
    },
    destroyConfirm(){
      this.requestSubmit = true;
      axios
        .delete(this.routeReturn + "/inmuebles/" + this.deleteId)
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
    deleteEl(id) {
      this.deleteId = id;
      this.modalDestroy = true;
    },
    getSapDepartments() {
      this.requestServerSincronization = true;
      axios
        .get(this.routeGetSap)
        .then((response) => {
          this.requestServerSincronization = false;
          Swal.fire({
            title: response.data.title,
            html: response.data.message,
            type: "success",
            confirmButtonText: "OK",
            buttonsStyling: false,
            customClass: {
              confirmButton: "btn btn-inverse-primary",
            },
          });
          this.getEls(1, this.elementsPerPage);
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
          this.requestServerSincronization = false;
        });
    },
    getEls(page, itemsPerPage, q = null) {
      this.loadingEls = true;
      let url =
        this.routeGetAll + "?page=" + page + "&itemsPerPage=" + itemsPerPage;
      if (q) {
        url = url + "&q=" + q;
      }
      axios
        .get(url, {
          params: {
            project_id: this.project.id,
          },
        })
        .then((response) => {
          this.elements = response.data;
          this.loadingEls = false;
        })
        .catch((error) => {});
    },
  },
  created() {
    this.getEls(1, this.elementsPerPage);
  },
  watch: {
    tabIndex:{
      handler: function (newValue) {
        if(newValue == 0){
          console.log("test");
          this.restore();
        }
      },
    },
    elementParent: {
      immediate: true,
      handler: function (newValue) {
        this.project = newValue;
      },
    },
  },
};
</script>
    
    <style>
</style>