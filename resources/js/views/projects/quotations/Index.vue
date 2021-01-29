<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-4">
            <div class="col-12 col-lg-7">
              <BreadCrumb
                :title="'Cotizaciones Proyecto '+project.name_es"
                parent
                active="Proyectos"
              ></BreadCrumb>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-6 col-md-5">
              <a :href="routeReturn" class="btn btn-icon btn-sm btn-inverse-light">
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
      <b-tabs pills vertical  nav-wrapper-class="col-12 col-lg-3 col-xl-2 mb-4 mb-lg-0" nav-class="border bg-white py-2" content-class="col-12 col-lg-9 col-xl-10">
        <b-tab title="Leads" active title-link-class="border-0 shadow-none bg-white py-3" title-item-class="pr-0 my-0">
          <div class="row">
            <div class="col-12">
              <DataTable
                :object="elements"
                placeholder="Nombre, DNI"
                :button-update="false"
                :button-read="true"
                :button-delete="true"
                :button-disable="false"
                @get="getEls"
                @read="showEl"
                @delete="deleteEl"
                :entries-prop.sync="elementsPerPage"
              ></DataTable>
            </div>
          </div>
        </b-tab>
        <b-tab title="Emails Destino" title-link-class="border-0 shadow-none bg-white py-3" title-item-class="my-0"
          ><div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-header border-0 pb-0">
                  <h2 class="mb-0 text-uppercase text-primary">
                    Emails Destino
                  </h2>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-12 mb-4">
                      Los leads se enviarán automáticamente a los asesores
                      asignados al Proyecto <b>{{ project.name_es }}</b>, se designará 1
                      lead por orden de llegada a cada asesor.
                    </div>
                    <div class="col-12 py-3">
                      <IconContact></IconContact>
                    </div>
                  </div>
                </div>
              </div>
            </div></div
        ></b-tab>
      </b-tabs>
    </div>
    <destroy
      element="Lead"
      @cancel="restoreEl"
      :open="modalDestroy"
      @submit="destroyConfirm"
      :loading-get="loadingGet"
      :loading-submit="requestSubmit"
    ></destroy>

    <b-modal
      v-model="modalShow"
      @close="restoreEl"
      no-close-on-esc
      no-close-on-backdrop
      centered
      size="lg"
      footer-class="border-0 pt-0"
      body-class="pt-0"
    >
      <template slot="modal-title">
        <div class="text-primary h2">Detalle Cotización</div>
      </template>
      <template slot="modal-header-close">
        <button type="button" class="btn p-0 bg-transparent" @click="restoreEl">
          <jam-close></jam-close>
        </button>
      </template>
      <div v-if="loadingGet">
        <div class="w-25 mb-1">
          <Skeleton />
        </div>
        <div class="w-75">
          <Skeleton />
        </div>
        <div class="w-25 mb-1">
          <Skeleton />
        </div>
        <div class="w-75">
          <Skeleton />
        </div>
        <div class="w-25 mb-1">
          <Skeleton />
        </div>
        <div class="w-75">
          <Skeleton />
        </div>
      </div>
      <div v-else>
        <div class="row">
          <div class="col-lg-6">
            <div class="form-group">
              <label class="font-weight-bold">Nombre:</label>
              <p>{{ element.name}}</p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group">
              <label class="font-weight-bold">DNI:</label>
              <p>{{ element.document_number}}</p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group">
              <label class="font-weight-bold">Email:</label>
              <p>{{ element.email}}</p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group">
              <label class="font-weight-bold">Móvil:</label>
              <p>{{ element.mobile_formatted}}</p>
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <label class="font-weight-bold d-block">Asesor:</label>
              <div class="" v-if="element.advisor_rel">
                <!--<p class="mb-0">{{ }}</p>
                <img width="150" height="auto" :src="imagesUrl+'/projects/'+element.project_rel.images_format[0]" alt="">-->
                <div class="media align-items-center"><span class="avatar avatar-sm mr-3 rounded-circle bg-primary"><img :src="imagesUrl+'/advisors/'+element.advisor_rel.avatar"></span>{{ element.advisor_rel.name }}</div>
              </div>
              <div v-else>
                <p>Asesor no asignado aún.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group">
              <label class="font-weight-bold d-block">Proyecto:</label>
              <div class="" v-if="element.project_rel">
                <p class="mb-0">{{ element.project_rel.name_es}}</p>
                <img width="150" height="auto" v-if="element.project_rel.images_format" :src="imagesUrl+'/projects/'+element.project_rel.images_format[0]" alt="">
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group">
              <label class="font-weight-bold d-block">Tipología:</label>
              <div class="">
                <p class="mb-0">{{ element.project_type_department_rel.name}}</p>
                <img width="150" height="auto" :src="imagesUrl+'/projects/tipologies/'+element.project_type_department_rel.image" alt="">
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <label class="font-weight-bold">Mensaje:</label>
              <p v-if="element.message">{{ element.message}}</p>
              <p v-else>No hay mensaje registrado</p>
            </div>
          </div>
          
        </div>
      </div>
      <template v-slot:modal-footer="{ ok }">
        <button type="button" class="btn btn-inverse-primary" @click="restoreEl">Ok</button>
      </template>
    </b-modal>
  </div>
</template>
<style>
.nav-pills .nav-link.active{
  border-left: 4px solid #1762e6 !important;
  background-color: #FDFBFA  !important;
}
</style>
<script>
import IconContact from "../../../components/icons/Contact";
import DataTable from "../../../components/DataTable";
import BreadCrumb from "../../../components/BreadCrumb";
import Destroy from "../../../components/modals/Destroy";
import { Skeleton } from "vue-loading-skeleton";
export default {
  props: {
    elementParent: Object,
    imagesUrl: String,
    routeReturn: String,
    routeGetAll: String,
    route: String,
  },
  data() {
    return {
      project: {},
      elements: {},
      element: {
        project_rel: {},
        advisor_rel: {},
        project_type_department_rel:{}
      },
      elementsPerPage: 10,
      modalShow: false,
      modalDestroy: false,
      loadingGet: false,
      requestSubmit: false,
    };
  },
  components: {
    IconContact,
    Skeleton,
    BreadCrumb,
    DataTable,
    Destroy,
  },
  watch: {
    elementParent: {
      immediate: true,
      handler: function (newValue) {
        this.project = newValue;
      },
    },
  },
  methods: {
    destroyConfirm() {
      this.requestSubmit = true;
      axios
        .delete("/proyectos/cotizaciones/" + this.element.id)
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
    restoreEl() {
      (this.element = {project_type_department_rel:{}}), (this.modalDestroy = this.modalShow = false);
    },
    showEl(id) {
      this.modalShow = true;
      this.getEl(id);
    },
    deleteEl(id) {
      this.modalDestroy = true;
      this.getEl(id);
    },
    getEls(page, itemsPerPage, q = null) {
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
        })
        .catch((error) => {});
    },
    restore() {
      this.elements = {};
      this.element = {project_type_department_rel:{}};
      this.modalDestroy = this.modalShow = false;
      this.getEls(1, this.elementsPerPage);
    },
    getEl(id) {
      this.loadingGet = true;
      axios
        .get("json/get/" + id)
        .then((response) => {
          this.element = response.data;
            this.loadingGet = false;
        })
        .catch((error) => {});
    },
  },
  created() {
    this.getEls(1, this.elementsPerPage);
  },
};
</script>