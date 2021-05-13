<template>
  <div>
    <div class="header pb-6">
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
    <div class="container-fluid mt--6">
      <div class="row mb-4">
        <div class="col-12 col-lg-2">
          <h2>Sincronizar Inmuebles</h2>
          <p>Realiza la sincronización de inmuebles con SAP.</p>
        </div>
        <div class="col-12 col-lg-10">
          <div class="card">
            <div class="card-body">
              <p>
                De click al botón "Obtener Inmuebles" para obtener el listado de
                inmuebles del Proyecto registrado en SAP, la disponibilidad de
                los mismos se actualizara automáticamente cada 10 minutos.
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
    </div>
  </div>
</template>
    <script>
import BreadCrumb from "../../../components/BreadCrumb";
import Button from "../../../components/Button";
import DataTable from "../../../components/DataTable";
import { Skeleton } from "vue-loading-skeleton";
import NoData from "../../../components/NoData";
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
    DataTable
  },
  data() {
    return {
      requestServerSincronization: false,
      project: {},
      elements: {},
      loadingEls: false,
      elementsPerPage: 10,
    };
  },
  methods: {
      deleteEl(){

      },
    getSapDepartments() {
      this.requestServerSincronization = true;
      axios
        .get(this.routeGetSap, {
          params: {
            project_id: this.project.id,
          },
        })
        .then((response) => {
          this.requestServerSincronization = false;
          this.getEls(1, this.elementsPerPage);
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
      console.log(q);
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
        .catch((error) => {
          
        });
    },
  },
  created() {
    this.getEls(1, this.elementsPerPage);
  },

  watch: {
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