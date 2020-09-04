<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-4">
            <div class="col-12 col-lg-7">
              <BreadCrumb title="Suscriptores" parent active="Suscriptores"></BreadCrumb>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid mt--6">
      <DataTable
        :object="elements"
        placeholder="Nombre, Email"
        :button-update="false"
        :button-read="false"
        :button-delete="true"
        :button-disable="false"
        :loading-prop="loadingGetAll"
        @get="getEls"
        @delete="deleteEl"
        :entries-prop.sync="elementsPerPage"
      >
        <template slot="filters">
          <div class="row mb-3">
            <div class="col-6">
              <div class>
                <b-dropdown
                  left
                  id="dropdown-text"
                  :menu-class="['border','shadow-none']"
                  ref="dropdown"
                  :variant="activeFilter.value == 'all' ? 'inverse-light' : 'inverse-primary'"
                  :toggle-class="[]"
                >
                  <template v-slot:button-content>
                    <jam-calendar
                      height="18px"
                      width="18px"
                      style="margin-top: -4px;"
                      class="current-color"
                    ></jam-calendar>
                    <span class>{{ activeFilter.text }}</span>
                  </template>
                  <b-dropdown-text tag="div" class="px-2" style="width: 16rem;">
                    <button
                      :class="activeFilter.value == i.value ? 'btn-primary' : 'btn-inverse-primary'"
                      class="btn mb-1 btn-sm btn-block"
                      v-for="i in filters"
                      :key="i.value"
                      @click.prevent="handleFilter(i)"
                    >{{ i.text }}</button>
                    <date-picker
                      ref="datepicker"
                      @change="handleFilterRange"
                      placeholder="Personalizado"
                      :shortcuts="[]"
                      v-model="rangeDate"
                      lang="es"
                      input-class="form-control mt-1"
                      format="D MMM YYYY"
                      range-separator="-"
                      width="100%"
                      range
                    >
                      <slot name="icon-calendar">
                        <jam-users></jam-users>
                      </slot>
                    </date-picker>
                  </b-dropdown-text>
                </b-dropdown>
              </div>
            </div>
            <div class="col-6 text-right">
              <button class="btn btn-icon btn-inverse-primary" @click="exportData()">
                <span class="btn-inner--icon">
                  <jam-download class="current-color" />
                </span>
                Exportar
              </button>
            </div>
          </div>
        </template>
      </DataTable>
    </div>
    <destroy
      element="Suscriptor"
      @cancel="restoreEl"
      :open="modalDestroy"
      @submit="destroyConfirm"
      :loading-get="loadingGet"
      :loading-submit="requestSubmit"
    ></destroy>

    <b-modal
      v-model="modalExport"
      no-close-on-esc
      @close="restoreExport"
      no-close-on-backdrop
      centered
      footer-class="border-0 pt-0"
      body-class="pt-0"
    >
      <template slot="modal-title">
        <div class="text-primary h2">Exportar</div>
      </template>
      <template slot="modal-header-close">
        <button type="button" class="btn p-0 bg-transparent" @click="restoreExport">
          <jam-close></jam-close>
        </button>
      </template>
      <div class="row">
        <div class="col-12">
          <p>Seleccione una opción:</p>
          <b-form-radio-group
            id="radio-group-1"
            v-model="exportOptions.total"
            name="radios"
            plain
            stacked
            :options="options"
          ></b-form-radio-group>

          <div v-show="!exportOptions.total" class="mt-3">
            <label for="range">Indique el rango de fecha a Exportar</label>
            <date-picker
              ref="datepicker"
              placeholder="Personalizado"
              :shortcuts="[]"
              v-model="exportOptions.range"
              lang="es"
              id="range"
              input-class="form-control"
              format="D MMM YYYY"
              range-separator="-"
              width="100%"
              range
            >
              <slot name="icon-calendar">
                <jam-users></jam-users>
              </slot>
            </date-picker>
            <label
                  v-if="errors && errors.range"
                  class="text-danger text-sm d-block mt-2"
                  for="range"
                >{{ errors.range[0] }}</label>
          </div>
        </div>
      </div>
      <template v-slot:modal-footer="{ ok }">
        <button type="button" class="btn btn-secondary" @click="restoreExport">Cancelar</button>
        <Button
          :classes="['btn-inverse-primary']"
          text="Confirmar"
          @click="exportConfirm"
          :request-server="requestSubmit"
        ></Button>
      </template>
    </b-modal>
  </div>
</template>
<script>
import DatePicker from "vue2-datepicker";
import DataTable from "../components/DataTable";
import BreadCrumb from "../components/BreadCrumb";
import Destroy from "../components/modals/Destroy";
import { Skeleton } from "vue-loading-skeleton";
import Button from "../components/Button";
export default {
  props: {
    elementParent: Object,
    imagesUrl: String,
    routeReturn: String,
    routeGetAll: String,
    route: String,
    routeExport: String,
    routeExportTotal: String,
    routeExportFile: String
  },
  data() {
    return {
      errors: {},
      project: {},
      elements: {},
      rangeDate: null,
      modalExport: false,
      requestSubmit: false,
      filters: [
        { text: "Cualquier Fecha", value: "all" },
        { text: "Hoy", value: "today" },
        /*{ text: "Ayer", value: "yesterday" },
        { text: "Este Mes", value: "this_month" },
        { text: "El Mes Pasado", value: "past_month" },*/
        { text: "Últimos 7 días", value: "7" },
        { text: "Últimos 30 días", value: "30" },
        { text: "Últimos 90 días", value: "90" },
        { text: "Este Año", value: "this_year" },
      ],
      activeFilter: { text: "Cualquier Fecha", value: "all" },
      options: [
        { text: "Total", value: true },
        { text: "Rango Personalizado", value: false },
      ],
      exportOptions: {
        total: true,
        range: null
      },
      element: {},
      elementsPerPage: 10,
      modalShow: false,
      modalDestroy: false,
      loadingGetAll: false,
      loadingGet: false,
      requestSubmit: false,
    };
  },
  components: {
    DatePicker,
    Skeleton,
    BreadCrumb,
    DataTable,
    Destroy,
    Button,
  },
  methods: {
    exportConfirm() {
      this.requestSubmit = true;
      let url;
      if (this.exportOptions.total) {
        url = this.routeExportTotal;
      } else {
        url = this.routeExport;
      }
      axios
        .post(url, this.exportOptions)
        .then((response) => {
          this.requestSubmit = false;
          this.restoreExport();
          window.open(response.data.route);
          Swal.fire({
            title: response.data.title,
            text: response.data.message,
            type: "success",
            confirmButtonText: "Ok",
            buttonsStyling: false,
            customClass: {
              confirmButton: "btn btn-primary",
            },
          });
        })
        .catch((error) => {
          this.requestSubmit = false;
          if (error.response.status === 422) {
            this.errors = error.response.data.errors || {};
            return;
          }
          this.restoreExport();
          Swal.fire({
            title: error.response.data.title,
            text: error.response.data.message,
            type: "error",
            confirmButtonText: "Ok",
            buttonsStyling: false,
            customClass: {
              confirmButton: "btn btn-primary",
            },
          });
        });
    },
    exportData() {
      this.modalExport = true;
    },
    handleFilterRange() {
      if (!this.rangeDate[0]) {
        this.activeFilter = { text: "Cualquier Fecha", value: "all" };
        this.handleFilter(this.activeFilter);
        return false;
      }
      setTimeout(() => {
        //this.activeFilter = { text: this.$refs.datepicker.text, value: this.rangeDate};
        this.activeFilter = {
          text: this.$refs.datepicker.text,
          value: "range",
        };
        this.getEls(1, this.elementsPerPage);
      }, 50);
      this.$refs.dropdown.hide(true);
    },
    handleFilter(i) {
      this.rangeDate = [];
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
      (this.element = {}), (this.modalDestroy = this.modalExport = false);
      this.exportOptions = {total: true,
        range: null};
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
            ...(this.rangeDate ? { range: this.rangeDate } : {}),
          },
        })
        .then((response) => {
          this.elements = response.data;
          this.loadingGetAll = false;
        })
        .catch((error) => {});
    },
    restoreExport() {
      this.exportOptions = {total: true,
        range: null};
      this.modalExport = false;
      
    },
    restore() {
      this.elements = {};
      this.element = {};
      this.modalDestroy = false;
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