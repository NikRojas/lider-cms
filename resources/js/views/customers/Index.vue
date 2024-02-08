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
                <span class="btn-inner--text">Exportar {{ elements.total == 0 ? '(0 Clientes)' : '' }}</span>
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
    allExport: String,
    filterExport: String,
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
      modalDestroy: false,
      loadingGetAll: false,
      loadingGet: false,
      requestExport: false,
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
          link.setAttribute("download", "Líder Clientes.xlsx");
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
          link.setAttribute("download", "Líder Clientes.xlsx");
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