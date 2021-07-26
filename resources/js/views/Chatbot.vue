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
                @delete="deleteEl"
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
    deleteEl() {},
    openModalExport() {},
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
  },
  created() {
    this.getLeads(1, this.elementsPerPage);
    this.getQualification()
  },
};
</script>