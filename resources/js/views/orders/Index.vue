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
        placeholder="Código"
        :button-update="false"
        :button-read="true"
        :button-delete="false"
        :button-disable="false"
        :loading-prop="loadingGetAll"
        @get="getEls"
        @read="showEl"
        :entries-prop.sync="elementsPerPage"
      >
        <template slot="filters">
          <div class="mb-2">
          <FilterDateRange  :active.sync="filterDate.active"  :range.sync="filterDate.range" @get="getEls(1, elementsPerPage)"/>
          </div>
        </template>
      </DataTable>
    </div>

  </div>
</template>
<script>
import FilterDateRange from "../../components/filters/DateRange"
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
  },
  data() {
    return {
      project: {},
      elements: {},
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
      requestSubmit: false,
    };
  },
  components: {
    Skeleton,
    BreadCrumb,
    DataTable,
    FilterDateRange,
  },
  methods: {
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