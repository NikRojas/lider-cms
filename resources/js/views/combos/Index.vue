<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-4">
            <div class="col-6 col-md-7">
              <BreadCrumb title="Combos" parent active="Combos"></BreadCrumb>
            </div>
            <div class="col-6 col-md-5 text-right">
              <a :href="routeCreate" class="btn btn-icon btn-inverse-primary">
                <span class="btn-inner--icon">
                  <jam-tag class="current-color" />
                </span>
                <span class="btn-inner--text">Nuevo Combo</span>
              </a>
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
      </DataTable>
    </div>
  </div>
</template> 
<script>
import BreadCrumb from "../../components/BreadCrumb";
import { Skeleton } from "vue-loading-skeleton";
import NoData from "../../components/NoData";
import DataTable from "../../components/DataTable";
export default {
  components: {
    BreadCrumb,
    Skeleton,
    NoData,
    DataTable
  },
  props: {
    routeCreate: String,
    route: String,
    appUrl: String,
    routeGetAll: String,
    routeOrder: String,
    messageOrder: String,
    imagesUrl: String,
  },
  data() {
    return {
       elements: {},
       project: {},
      element: {},
      modalDestroy: false,
      requestSubmit: false,
      elementsPerPage: 10,
      modalDestroy: false,
      loadingGetAll: false,
      loadingGet: false,
    };
  },
  methods: {
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
            /*date: this.filterDate.active.value,
            ...(this.filterDate.range ? { range: this.filterDate.range } : {}),*/
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