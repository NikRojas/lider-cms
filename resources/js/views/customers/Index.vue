<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-4">
            <div class="col-12 col-lg-7">
              <BreadCrumb title="Clientes" parent active="Clientes"></BreadCrumb>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid mt--6">
      <DataTable
        :object="elements"
        placeholder="Nombre, Apellido, Número Documento"
        :button-update="false"
        :button-read="true"
        :button-delete="false"
        :button-disable="false"
        :loading-prop="loadingGetAll"
        @read="showEl"
        @get="getEls"
        :entries-prop.sync="elementsPerPage"
      >
        <template slot="filters">
           <div class="row mb-3">
            <div class="col-6">
          <FilterDateRange  :active.sync="filterDate.active"  :range.sync="filterDate.range" @get="getEls(1, elementsPerPage)"/>
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
import Button from "../../components/Button";
import FilterDateRange from "../../components/filters/DateRange"
import DataTable from "../../components/DataTable";
import BreadCrumb from "../../components/BreadCrumb";
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
      project: {},
      elements: {},
      modalExport: false,
      filterDate: {
        active: {},
        range: null
      },
      exportOptions: {
        total: true,
        range: null
      },
      options: [
        { text: "Total", value: true },
        { text: "Rango Personalizado", value: false },
      ],
      errors:{},
      elementsPerPage: 10,
      modalShow: false,
      modalDestroy: false,
      loadingGetAll: false,
      loadingGet: false,
      requestSubmit: false,
    };
  },
  components: {
    BreadCrumb,
    DataTable,
    FilterDateRange,
    Button
  },
  methods: {
    restoreExport() {
      this.exportOptions = {total: true,
        range: null};
      this.modalExport = false;
      
    },
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
            date: this.filterDate.active.value,
            ...(this.filterDate.range ? { range: this.filterDate.range } : {}),
          },
        })
        .then((response) => {
          this.elements = response.data;
           this.loadingGetAll = false;
        })
        .catch((error) => {});
    },
  },
  created() {
    this.getEls(1, this.elementsPerPage);
  },
};
</script>