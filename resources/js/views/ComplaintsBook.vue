<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-4">
            <div class="col-12 col-lg-7">
              <BreadCrumb title="Libro de Reclamaciones" parent active="Libro de Reclamaciones"></BreadCrumb>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid mt--6">
      <DataTable
        :object="elements"
        placeholder="Nombre, Apellido, Número Documento, Código de Reclamo"
        :button-update="false"
        :button-read="true"
        :button-delete="true"
        :button-disable="false"
        :loading-prop="loadingGetAll"
        @get="getEls"
        @read="showEl"
        @delete="deleteEl"
        :entries-prop.sync="elementsPerPage"
      >
        <template slot="filters">
          <div class="mb-2">
            <b-dropdown left id="dropdown-text" :menu-class="['border','shadow-none']" ref="dropdown" :variant="activeFilter.value == 'all' ? 'inverse-light' : 'inverse-primary'" :toggle-class="['btn-sm','py-2']">
              <template v-slot:button-content>
                <jam-calendar height="14px" width="14px" class="current-color"></jam-calendar><span class="">{{ activeFilter.text }}</span>
              </template>
              <b-dropdown-text tag="div" class="px-2">
                <button :class="activeFilter.value == i.value ? 'btn-primary' : 'btn-inverse-primary'" class="btn mb-1 btn-sm btn-block" v-for="i in filters" :key="i.value" @click.prevent="handleFilter(i)">{{ i.text }}</button>
              </b-dropdown-text>
            </b-dropdown>
          </div>
        </template>
      </DataTable>
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
        <div class="text-primary h2">Detalle del Reclamo</div>
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
          <div class="col-12 text-center mb-1">
            <h2 class="mb-0">Código de Registro</h2>
            <h3 class="font-weight-normal">{{ element.code }}</h3>
          </div>
          <div class="col-12 text-right">
            <p><span class="font-weight-bold">Registrado el: </span>{{ element.created_at_format}}</p>
          </div>
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
              <p>{{ element.mobile_formatted }}</p>
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
            <h2 class="mb-3 mt-2">Identificación del bien contratado</h2>
          </div>
          <div class="col-lg-6">
            <div class="form-group">
              <label class="font-weight-bold">Monto del bien objeto de Reclamo:</label>
              <p>{{ element.good_contracted_amount}}</p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group">
              <label class="font-weight-bold">Identificación del Bien contratado:</label>
              <p>{{ element.good_contracted_rel.name}}</p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group">
              <label class="font-weight-bold">Descripción:</label>
              <p>{{ element.good_contracted_description}}</p>
            </div>
          </div>

          <div class="col-12">
            <h2 class="mb-3 mt-2">Detalle de la reclamación</h2>
          </div>
          <div class="col-lg-6">
            <div class="form-group">
              <label class="font-weight-bold">Tipo de reclamación:</label>
              <p>{{ element.claim_type_rel.name}}</p>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="form-group">
              <label class="font-weight-bold">Detalle:</label>
              <p>{{ element.claim_detail}}</p>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="form-group">
              <label class="font-weight-bold">Pedido:</label>
              <p>{{ element.claim_order}}</p>
            </div>
          </div>

          <div class="col-12 mt-2">
            <h2 class="mb-3">Acciones adoptadas por el proveedor</h2>
          </div>
          <div class="col-lg-6">
            <div class="form-group">
              <label class="font-weight-bold">Detalle:</label>
              <p v-if="element.provider_detail">{{ element.provider_detail}}</p>
              <p v-else>No regitrado</p>
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
      filters: [
        {'text': 'Cualquier Fecha', 'value': 'all'},
        {'text': 'Hoy', 'value': 'today'},
        {'text': 'Ayer', 'value': 'yesterday'},
        {'text': 'Este Mes', 'value': 'this_month'},
        {'text': 'El Mes Pasado', 'value': 'past_month'},
        {'text': 'Este Año', 'value': 'this_year'}
      ],
      activeFilter: {'text': 'Cualquier Fecha', 'value': 'all'},
      element: {
        document_type_rel: {},
        claim_type_rel: {},
        good_contracted_rel: {},
        ubigeo_rel: {},
      },
      elementsPerPage: 10,
      modalShow: false,
      modalDestroy: false,
      loadingGetAll: false,
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
    handleFilter(i){
      this.activeFilter = i;
      this.$refs.dropdown.hide(true);
      this.getEls(1, this.elementsPerPage);
    },
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
    restoreEl() {
      (this.element = {
        document_type_rel: {},
        claim_type_rel: {},
        ubigeo_rel: {},
        good_contracted_rel: {},
      }),
        (this.modalDestroy = this.modalShow = false);
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
       this.loadingGetAll = true;
      let url =
        this.routeGetAll + "?page=" + page + "&itemsPerPage=" + itemsPerPage;
      if (q) {
        url = url + "&q=" + q;
      }
      axios
        .get(url, {
          params: {
            date: this.activeFilter.value,
          },
        })
        .then((response) => {
          this.elements = response.data;
           this.loadingGetAll = false;
        })
        .catch((error) => {});
    },
    restore() {
      this.elements = {};
      this.element = {
        document_type_rel: {},
        claim_type_rel: {},
        good_contracted_rel: {},
        ubigeo_rel: {},
      };
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