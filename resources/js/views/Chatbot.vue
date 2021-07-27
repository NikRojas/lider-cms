<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-4">
            <div class="col-6 col-md-7">
              <BreadCrumb title="Chatbot" active="Chatbot"></BreadCrumb>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid mt--6">
      <b-tabs
        pills
        vertical
        nav-wrapper-class="col-12 col-lg-3 col-xl-2 mb-4 mb-lg-0"
        nav-class="border bg-white py-2"
        content-class="col-12 col-lg-9 col-xl-10"
      >
        <b-tab
          title="Leads"
          active
          title-link-class="border-0 shadow-none bg-white py-3"
          title-item-class="pr-0 my-0"
        >
          <div class="row">
            <div class="col-12 mb-4 text-right">
              <button
                type="button"
                class="btn btn-icon btn-inverse-primary"
                @click="openModalExport"
                :disabled="leads.total == 0 ? true : false"
                :style="leads.total == 0 ? 'opacity: 0.50' : ''"
              >
                <span class="btn-inner--icon">
                  <jam-download class="current-color" />
                </span>
                <span class="btn-inner--text"
                  >Exportar {{ leads.total == 0 ? "(0 Leads)" : "" }}</span
                >
              </button>
            </div>
            <div class="col-12">
              <DataTable
                :object="leads"
                placeholder="Nombre, Email, Móvil, Proyecto, Host"
                :button-update="false"
                :button-read="false"
                :button-delete="true"
                @get="getLeads"
                @delete="deleteLead"
                :entries-prop.sync="elementsPerPage"
              ></DataTable>
            </div>
          </div>
        </b-tab>
        <b-tab
          title="Calificaciones"
          title-link-class="border-0 shadow-none bg-white py-3"
          title-item-class="pr-0 my-0"
        >
          <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-header border-0 pb-0">
                  <h2 class="mb-0 text-uppercase text-primary">
                    Calificaciones
                  </h2>
                </div>
                <div class="card-body">
                  <div class="row">
                      <div class="col-12">
                           <FilterDateRange
                            :active.sync="filterDate.active"
                            :range.sync="filterDate.range"
                            @get="getQualification()"
                            />
                            <div class="mt-4">
                                
                                <div style="width:300px;display:inline-block;" v-if="loadingQualification">
                                    <skeleton height="320px"></skeleton>
                                </div>
                                <table class="table table-bordered" style="width:300px;" v-else>
                                    <tr v-for="el in qualification" :key="el.name">
                                        <td style="background: #fdfbfa">
                                            <strong>{{ el.name }}</strong>
                                        </td>
                                        <td class="text-center">
                                            {{ el.count }}
                                        </td>
                                    </tr>
                                </table>
                            </div>
                      </div>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </b-tab>
      </b-tabs>
    </div>

    <destroy
      element="lead"
      @cancel="restoreLeads"
      :open="modalDestroy"
      @submit="destroyLeadConfirm"
      :loading-get="loadingLead"
      :loading-submit="requestLead"
    ></destroy>

     <b-modal
      v-model="modalExport"
      @close="restoreEl"
      no-close-on-esc
      no-close-on-backdrop
      centered
      size="md"
      footer-class="border-0 pt-0"
      body-class="pt-0"
    >
      <template slot="modal-title">
        <div class="text-primary h2">Exportar Leads</div>
      </template>
      <template slot="modal-header-close">
        <button type="button" class="btn p-0 bg-transparent" @click="restoreEl">
          <jam-close></jam-close>
        </button>
      </template>
      <div class="row">
        <div class="col-12">
          <div class="form-group">
            <label class="font-weight-bold" for="from">Desde</label>
            <date-picker
              :input-attr="{ id: 'from' }"
              value-type="format"
              v-model="element_form.from"
              format="HH:mm DD-MM-YYYY"
              type="datetime"
              :time-picker-options="{
                start: '06:00',
                step: '00:05',
                end: '24:00',
              }"
              :first-day-of-week="1"
              lang="es"
              input-class="form-control"
              width="100%"
            >
              <jam-calendar></jam-calendar>
            </date-picker>
            <label
              v-if="errors_form && errors_form.from"
              class="mt-2 text-danger text-sm"
              for="from"
              >{{ errors_form.from[0] }}</label
            >
          </div>
        </div>

        <div class="col-12">
          <div class="form-group">
            <label class="font-weight-bold" for="to">Hasta</label>
            <date-picker
              :input-attr="{ id: 'to' }"
              value-type="format"
              v-model="element_form.to"
              format="HH:mm DD-MM-YYYY"
              type="datetime"
              :time-picker-options="{
                start: '06:00',
                step: '00:05',
                end: '24:00',
              }"
              :first-day-of-week="1"
              lang="es"
              input-class="form-control"
              width="100%"
            >
              <jam-calendar></jam-calendar>
            </date-picker>
            <label
              v-if="errors_form && errors_form.to"
              class="mt-2 text-danger text-sm"
              for="to"
              >{{ errors_form.to[0] }}</label
            >
          </div>
        </div>
      </div>
      <template v-slot:modal-footer="{ ok }">
        <button
          type="button"
          class="btn btn-inverse-primary"
          @click="allExportFunction"
          :disabled="request_todo"
        >
          <span v-if="request_todo">
            Cargando
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 40 40"
              class="ml-1 loading-svg"
            >
              <g fill="none" fill-rule="evenodd">
                <g transform="translate(1 1)" stroke-width="3">
                  <circle stroke-opacity="1" cx="0" cy="0" r="0" />
                  <path
                    d="M36 18c0-9.94-8.06-18-18-18"
                    transform="rotate(83.9974 18 18)"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="0 18 18"
                      to="360 18 18"
                      dur="1s"
                      repeatCount="indefinite"
                    />
                  </path>
                </g>
              </g>
            </svg>
          </span>
          <span v-else>Todo</span>
        </button>

        <button
          type="button"
          class="btn btn-inverse-info"
          @click="filterExportFunction"
          :disabled="request_filter"
        >
          <span v-if="request_filter">
            Cargando
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 40 40"
              class="ml-1 loading-svg"
            >
              <g fill="none" fill-rule="evenodd">
                <g transform="translate(1 1)" stroke-width="3">
                  <circle stroke-opacity="1" cx="0" cy="0" r="0" />
                  <path
                    d="M36 18c0-9.94-8.06-18-18-18"
                    transform="rotate(83.9974 18 18)"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="0 18 18"
                      to="360 18 18"
                      dur="1s"
                      repeatCount="indefinite"
                    />
                  </path>
                </g>
              </g>
            </svg>
          </span>
          <span v-else>Con Filtros</span>
        </button>

        <button type="button" class="btn btn-inverse-light" @click="restoreEl">
          Cerrar
        </button>
      </template>
    </b-modal>
  </div>
</template>

<style>
.nav-pills .nav-link.active {
  border-left: 4px solid #1762e6 !important;
  background-color: #fdfbfa !important;
}
</style>
<script>
import { Skeleton } from "vue-loading-skeleton";
import BreadCrumb from "../components/BreadCrumb";
import DataTable from "../components/DataTable";
import Button from "../components/Button";
import FilterDateRange from "../components/filters/DateRange";
import Destroy from "../components/modals/Destroy";
//import Destroy from "../components/modals/Destroy";
import DatePicker from "vue2-datepicker";
export default {
  components: {
    DataTable,
    Button,
    BreadCrumb,
    Skeleton,
    DatePicker,
    FilterDateRange,
    Destroy
  },
  props: {
    routeLeadsGetAll: String,
    routeQualificationGetAll: String,
    route: String,
    //allExport: String,
    //filterExport: String,
  },
  data() {
    return {
      modalDestroy: false, 
      loadingLead: false,
      requestLead: false,

      request_todo: false,
      request_filter: false,
      errors_form: {},
      modalExport: false,
      element_form: {},

      leads: {},
      lead: {},
      loadingLeadsGet: false,
      loadingQualification: false,
      title: "",
      elementsPerPage: 10,
      filterDate: {
        active: {},
        range: null,
      },
      qualification: []
    };
  },
  methods: {
    restoreLeads(){
      this.lead = {};
      this.modalDestroy = false;
      this.getLeads(1, this.elementsPerPage);
    },
    destroyLeadConfirm(){
      this.requestLead = true;
      axios
        .delete("/chatbot/leads/" + this.lead.id)
        .then((response) => {
          this.requestLead = false;
          this.restoreLeads();
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
    openModalExport() {
      this.modalExport = true;
    },
    restoreEl(){
      this.lead = {};
      this.modalDestroy = false;
      this.modalExport = false;
    },
    allExportFunction() {
      this.request_todo = true;
      axios
        .get('/chatbot/leads/all-export', {
          headers: {
            "Content-Disposition": "attachment; filename=template.xlsx", //no es tan necesario, lo quité y siguio funcionando
            "Content-Type":
              "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", //no es tan necesario, lo quité y siguio funcionando
          },
          responseType: "arraybuffer", //necesaario
        })
        .then((response) => {
          const downloadUrl = window.URL.createObjectURL(
            new Blob([response.data])
          );
          const link = document.createElement("a");
          link.href = downloadUrl;
          link.setAttribute("download", "Líder Leads Chatbot.xlsx");
          document.body.appendChild(link);
          link.click();
          link.remove();
          this.request_todo = false;
          this.restoreEl();
        })
        .catch((error) => {
          this.request_todo = false;
          if (error.response.status === 422) {
            this.errors_form = error.response.data.errors || {};
            return;
          }
        });
    },
    filterExportFunction() {
      this.request_filter = true;
      const fd = new FormData();
      if (this.element_form.from) {
        fd.append("from", this.element_form.from);
      }
      if (this.element_form.to) {
        fd.append("to", this.element_form.to);
      }
      axios
        .post('/chatbot/leads/filter-export', fd, {
          headers: {
            "Content-Disposition": "attachment; filename=template.xlsx", //no es tan necesario, lo quité y siguio funcionando
            "Content-Type":
              "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", //no es tan necesario, lo quité y siguio funcionando
          },
          responseType: "arraybuffer", //necesaario
        })
        .then((response) => {
          const downloadUrl = window.URL.createObjectURL(
            new Blob([response.data])
          );
          const link = document.createElement("a");
          link.href = downloadUrl;
          link.setAttribute("download", "Líder Leads Chatbot.xlsx");
          document.body.appendChild(link);
          link.click();
          link.remove();
          this.request_filter = false;
          this.restoreEl();
        })
        .catch((error) => {
          this.request_filter = false;
          if (error.response.status === 422) {
            this.errors_form = {
              from: [],
              to: [],
            };
            if (
              this.element_form.from == "" ||
              this.element_form.from == null
            ) {
              this.errors_form.from = ["El campo desde es requerido"];
            }

            if (this.element_form.to == "" || this.element_form.to == null) {
              this.errors_form.to = ["El campo hasta es requerido"];
            }
            console.log(this.errors_form);
            return;
          }
        });
    },
    getLeads(page, itemsPerPage, q = null) {
      let url =
        this.routeLeadsGetAll +
        "?page=" +
        page +
        "&itemsPerPage=" +
        itemsPerPage;
      if (q) {
        url = url + "&q=" + q;
      }
      axios
        .get(url)
        .then((response) => {
          this.leads = response.data;
        })
        .catch((error) => {});
    },
    getQualification() {
        this.loadingQualification = true;
      let url =
        this.routeQualificationGetAll;
      axios
        .get(url, {
          params: {
            date: this.filterDate.active.value,
            ...(this.filterDate.range ? { range: this.filterDate.range } : {}),
          },
        })
        .then((response) => {
          this.qualification = response.data;
          this.loadingQualification = false;
        })
        .catch((error) => {});
    },
    deleteLead(id) {
      this.modalDestroy = true;
      this.getLead(id);
    },
    getLead(id) {
      this.loadingGet = true;
      axios
        .get(this.route + "/leads/json/get/" + id)
        .then((response) => {
          this.lead = response.data;
          this.loadingGet = false;
        })
        .catch((error) => {});
    },
  },
  created() {
    this.getLeads(1, this.elementsPerPage);
    this.getQualification()
  },
};
</script>