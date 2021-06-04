<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-4">
            <div class="col-12 col-lg-7">
              <BreadCrumb title="Ventas" parent active="Ventas y Estadísticas"></BreadCrumb>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid mt--6">
      <DataTable
        :object="elements"
        placeholder="Nombres, Apellidos, Número Documento o Código de Orden"
        :button-update="false"
        :button-read="true"
        :button-delete="false"
        :button-disable="false"
        :loading-prop="loadingGetAll"
        @get="getEls"
        @read="showEl"
        :q-prop.sync="q"
        :entries-prop.sync="elementsPerPage"
      >
        <template slot="filters">
          <div class="row mb-3">
            <div class="col-12 col-md-9 mb-2 mb-md-0">
              <div class="d-inline-block mb-2 mb-sm-0 mr-2">
              <FilterDateRange  :active.sync="filterDate.active" :range.sync="filterDate.range" @get="getEls(1, elementsPerPage, q)"/>
              </div>
              <div class="d-inline-block mb-2 mb-sm-0 mr-2">
              <FilterProjects :projects="projects" :active.sync="filterProjects.active" @get="getEls(1, elementsPerPage, q)"/>
              </div>
               <div class="d-inline-block mb-2 mb-sm-0">
              <FilterStatusTransactions :transactions="transactions" :active.sync="filterTransactions.active" @get="getEls(1, elementsPerPage, q)"/>
              </div>
            </div>
            <div class="col-12 col-md-3 text-right">
              <!--<button class="btn btn-icon btn-inverse-primary" @click="exportData()">
                <span class="btn-inner--icon">
                  <jam-download class="current-color" />
                </span>
                Exportar
              </button>-->
              <button
                type="button"
                class="btn btn-icon btn-inverse-primary"
                @click="exportData"
                :disabled="elements.total == 0 ? true : false"
                :style="elements.total == 0 ? 'opacity: 0.75' : ''"
              >
                <span class="btn-inner--icon">
                  <jam-download class="current-color" />
                </span>
                <span class="btn-inner--text">Exportar {{ elements.total == 0 ? '(0 Ventas)' : '' }}</span>
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
              value-type="format"
              input-class="form-control"
              format="HH:mm DD-MM-YYYY"
              range-separator="-"
              width="100%"
              type="datetime"
              range
              :show-second="false"
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
        <!--<Button
          :classes="['btn-inverse-primary']"
          text="Confirmar"
          @click="exportConfirm"
          :request-server="requestExport"
        ></Button>-->
        <Button
          v-if="exportOptions.total"
          :classes="['btn-inverse-primary']"
          text="Confirmar"
          @click="allExportFunction"
          :request-server="requestExport"
        ></Button>
        <Button
          v-else
          :classes="['btn-inverse-primary']"
          text="Confirmar"
          @click="filterExportFunction"
          :request-server="requestExport"
        ></Button>
      </template>
    </b-modal>

  </div>
</template>
<script>
import Button from "../../components/Button";
import DatePicker from "vue2-datepicker";
import FilterDateRange from "../../components/filters/DateRange"
import FilterProjects from "../../components/filters/Projects"
import FilterStatusTransactions from "../../components/filters/StatusTransactions"
import DataTable from "../../components/DataTable";
import BreadCrumb from "../../components/BreadCrumb";
import { Skeleton } from "vue-loading-skeleton";
export default {
  props: {
    elementParent: Object,
    imagesUrl: String,
    routeReturn: String,
    routeGetAll: String,
    route: String,    
    allExport: String,
    filterExport: String,
    projects: Array,
    transactions: Array
  },
  data() {
    return {
      q: null,
      errors:{},
      exportOptions: {
        total: true,
        range: null
      },
      options: [
        { text: "Total", value: true },
        { text: "Rango Personalizado", value: false },
      ],
      modalExport: false,
      project: {},
      elements: {},
      filterProjects: {
        active: []
      },
      filterTransactions: {
        active: []
      },
      filterDate: {
        active: {},
        range: null
      },
      element: {
        document_type_rel: {},
        claim_type_rel: {},
        good_contracted_rel: {},
        ubigeo_rel: {},
      },
      elementsPerPage: 10,
      modalShow: false,
      loadingGetAll: false,
      loadingGet: false,
      requestExport: false,
    };
  },
  components: {
    Button,
    Skeleton,
    BreadCrumb,
    DataTable,
    FilterDateRange,
    FilterProjects,
    FilterStatusTransactions
  },
  methods: {
    restoreExport() {
      this.exportOptions = {total: true,
        range: null};
      this.modalExport = false;
    },
    allExportFunction() {
      this.requestExport = true;
      axios
        .get(this.allExport, {
          responseType: "arraybuffer", //necesaario
        })
        .then((response) => {
          const downloadUrl = window.URL.createObjectURL(
            new Blob([response.data])
          );
          const link = document.createElement("a");
          link.href = downloadUrl;
          link.setAttribute("download", "Líder Ventas.xlsx");
          document.body.appendChild(link);
          link.click();
          link.remove();
          this.requestExport = false;
        })
        .catch((error) => {
          this.requestExport = false;
        });
    },
    filterExportFunction() {
      this.requestExport = true;
      const fd = new FormData();
      if (this.exportOptions.range && this.exportOptions.range[0]) {
        fd.append("from", this.exportOptions.range[0]);
      }
      if (this.exportOptions.range && this.exportOptions.range[1]) {
        fd.append("to", this.exportOptions.range[1]);
      }
      axios
        .post(this.filterExport, fd, {
          responseType: "arraybuffer", //necesaario
        })
        .then((response) => {
          const downloadUrl = window.URL.createObjectURL(
            new Blob([response.data])
          );
          const link = document.createElement("a");
          link.href = downloadUrl;
          link.setAttribute("download", "Líder Ventas.xlsx");
          document.body.appendChild(link);
          link.click();
          link.remove();
          this.requestExport = false;
        })
        .catch((error) => {
          this.requestExport = false;
          if (error.response.status === 422) {
            this.errors = { range : ["Ingrese un rango válido"]};
            return;
          }
        });
    },
    exportData() {
      this.modalExport = true;
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
     window.location.href = this.route + '/' + id;
    },
    getEls(page, itemsPerPage, q = null) {
       this.loadingGetAll = true;
      let url =
        this.routeGetAll + "?page=" + page + "&itemsPerPage=" + itemsPerPage;
      if (q) {
        //url = url + "&q=" + q;
        this.q = q;
      }
      else{
        this.q = null;
      }
      axios
        .get(url, {
          params: {
            date: this.filterDate.active.value,
            ...(this.q ? { q: this.q } : {}),
            ...(this.filterDate.range ? { range: this.filterDate.range } : {}),
            ...(this.filterProjects.active ? { projects: this.filterProjects.active } : {}),
            ...(this.filterTransactions.active ? { transactions: this.filterTransactions.active } : {}),
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