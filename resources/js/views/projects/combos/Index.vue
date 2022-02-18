<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-4">
            <div class="col-6 col-md-7">
              <BreadCrumb :title="'Combos Proyecto ' + elementParent.name_es" parent active="Combos"></BreadCrumb>
            </div>
            <div class="col-6 col-md-5 text-right">
              <a :href="routeCreate" class="btn btn-icon btn-inverse-primary">
                <span class="btn-inner--icon">
                  <jam-tag class="current-color" />
                </span>
                <span class="btn-inner--text">Nuevo Combo</span>
              </a>
            </div>
          </div>
          <div class="row mb-3">
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
    <div class="container-fluid mt--6">
      <DataTable
        :object="elements"
        placeholder="Descripción"
        :button-update="true"
        :button-read="false"
        :button-delete="true"
        :is-combo="true"
        :loading-prop="loadingGetAll"
        @read="showEl"
        @update="editEl"
        @get="getEls"
        @delete="deleteEl"
        :entries-prop.sync="elementsPerPage"
        messageCantDelete="No se puede eliminar debido a que ya ha sido adquirido por un cliente"
      >
      </DataTable>
    </div>
    <destroy
      element="combo"
      @cancel="restoreEl"
      :open="modalDestroy"
      @submit="destroyConfirm"
      :loading-get="loadingGet"
      :loading-submit="requestSubmit"
    ></destroy>
  </div>
</template> 
<script>
import BreadCrumb from "../../../components/BreadCrumb";
import { Skeleton } from "vue-loading-skeleton";
import NoData from "../../../components/NoData";
import DataTable from "../../../components/DataTable";
import Destroy from "../../../components/modals/Destroy";
export default {
  components: {
    BreadCrumb,
    Skeleton,
    NoData,
    DataTable,
    Destroy
  },
  props: {
    elementParent: Object,
    routeCreate: String,
    route: String,
    appUrl: String,
    routeGetAll: String,
    routeOrder: String,
    messageOrder: String,
    imagesUrl: String,
    routeSlug: String,
    routeReturn: String
  },
  data() {
    return {
      elements: {},
      project: {},
      element: {},
      modalDestroy: false,
      requestSubmit: false,
      elementsPerPage: 10,
      modalDestroy: false,
      loadingGetAll: false,
      loadingGet: false,
    };
  },
  methods: {
    showEl(id) {      
     window.location.href = this.route + '/' + id;
    },
    getEls(page, itemsPerPage, q = null) {
       this.loadingGetAll = true;
      let url =
        this.routeGetAll + "?page=" + page + "&itemsPerPage=" + itemsPerPage;
      if (q) {
        url = url + "&q=" + q;
      }
      axios
        .get(url, {
          params: {
            /*date: this.filterDate.active.value,
            ...(this.filterDate.range ? { range: this.filterDate.range } : {}),*/
          },
        })
        .then((response) => {
          this.elements = response.data;
           this.loadingGetAll = false;
        })
        .catch((error) => {});
    },
    restoreEl() {
      this.modalCreateUpdate = this.modalDestroy = false;
      this.element = {
      };
    },
    restore(){
      (this.element = {
      }),
        (this.requestSubmit = this.modalDestroy = false);
      this.getEls(1, this.elementsPerPage);
    },
    deleteEl(id) {
      this.modalDestroy = true;
      this.getEl(id);
    },
    getEl(id){
      this.loadingGet = true;
      axios
        .get(this.route + "/json/get/" + id)
        .then((response) => {
          this.element = response.data;
          this.loadingGet = false;
        })
        .catch((error) => {});
    },
    editEl(id){
      window.location.href = this.routeSlug + '/editar/' + id;
    },
    destroyConfirm(){
      this.requestSubmit = true;
      axios
        .delete(this.routeSlug + "/eliminar/" + this.element.slug)
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
  },
  created() {
    this.getEls(1, this.elementsPerPage);
  },
};
</script>