<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-2">
            <div class="col-12 col-lg-7">
              <BreadCrumb
                title="Libro de Reclamaciones"
                parent
                active="Libro de Reclamaciones"
              ></BreadCrumb>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid mt--6">
      <DataTable
        :object="elements"
        placeholder="Nombre, Nùmero Documento"
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
        <div class="text-primary h2">Detalle Lead</div>
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
          <div class="col-12">
            <h2 class="mb-3">Identificación del consumidor reclamante</h2>
          </div>
          <div class="col-lg-6">
            <div class="form-group">
              <label class="font-weight-bold">Nombre Completo:</label>
              <p>{{ element.name}} {{element.lastname}}</p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group">
              <label class="font-weight-bold">Documento:</label>
              <p>{{ element.document_type_rel.description }} - {{ element.document_number}}</p>
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
              <p>{{ }}</p>
            </div>
          </div>

          <div class="col-12">
            <div class="form-group">
              <label class="font-weight-bold">Dirección:</label>
              <p>{{ element.address}}</p>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="form-group">
              <label class="font-weight-bold">Departamento:</label>
              <p>{{ element.ubigeo_rel.department}}</p>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="form-group">
              <label class="font-weight-bold">Provincia:</label>
              <p>{{ element.ubigeo_rel.province}}</p>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="form-group">
              <label class="font-weight-bold">Distrito:</label>
              <p>{{ element.ubigeo_rel.district}}</p>
            </div>
          </div>

          <div class="col-12">
          <h2 class="mb-3">Identificación del bien contratado</h2>
            
          </div>

          <div class="col-12">
          <h2 class="mb-3">Detalle de la reclamación</h2>
            
          </div>

          <div class="col-12">
          <h2 class="mb-3">Acciones adoptadas por el proveedor</h2>
            
          </div>



        </div>
      </div>
      <template v-slot:modal-footer="{ ok }">
        <button type="button" class="btn btn-inverse-primary" @click="restoreEl">Ok</button>
      </template>
    </b-modal>
  </div>
</template>
<script>
import DataTable from "../components/DataTable";
import BreadCrumb from "../components/BreadCrumb";
import Destroy from "../components/modals/Destroy";
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
        document_type_rel: {},
        claim_type_rel: {},
        good_contracted_rel: {},
        ubigeo_rel: {}
      },
      elementsPerPage: 10,
      modalShow: false,
      modalDestroy: false,
      loadingGet: false,
      requestSubmit: false,
    };
  },
  components: {
    Skeleton,
    BreadCrumb,
    DataTable,
    Destroy,
  },
  methods: {
    destroyConfirm() {
      this.requestSubmit = true;
      axios
        .delete(this.route + this.element.id)
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
      (this.element = {document_type_rel: {},
        claim_type_rel: {},
        ubigeo_rel: {},
        good_contracted_rel: {}}), (this.modalDestroy = this.modalShow = false);
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
      this.element = {document_type_rel: {},
        claim_type_rel: {},
        good_contracted_rel: {},
        ubigeo_rel: {}};
      this.modalDestroy = this.modalShow = false;
      this.getEls(1, this.elementsPerPage);
    },
    getEl(id) {
      this.loadingGet = true;
      axios
        .get(this.route + "/json/get/" + id)
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