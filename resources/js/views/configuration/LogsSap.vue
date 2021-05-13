<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-4">
            <div class="col-12 col-lg-7">
              <BreadCrumb
                title="Logs Sap"
                parent="Configuración"
                active="Logs Sap"
              ></BreadCrumb>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid mt--6">
      <DataTable
        :object="els"
        :showActions="false"
        placeholder="Tipo, Descripción"
        :button-update="false"
        :button-read="false"
        :button-delete="false"
        :button-disable="false"
        @get="getEls"
        :entries-prop.sync="elementsPerPage"
      ></DataTable>
    </div>
  </div>
</template>
<script>
import DataTable from "../../components/DataTable";
import BreadCrumb from "../../components/BreadCrumb";
export default {
  props: {
    routeGetAll: String,
    route: String,
  },
  components: {
    DataTable,
    BreadCrumb,
  },
  data() {
    return {
      els: {},
      elementsPerPage: 10,
      errors: {},
      requestLoading: false,
      requestServer: false,
      modalDestroy: false,
    };
  },
  methods: {
    getEls(page, itemsPerPage, q = null) {
      let url = this.routeGetAll + "?page=" + page + "&itemsPerPage=" + itemsPerPage;
      if (q) {
        url = url + "&q=" + q;
      }
      axios
        .get(url)
        .then((response) => {
          this.els = response.data;
        })
        .catch((error) => {});
    },
  },
  created() {
    this.getEls(1, this.elementsPerPage);
  },
};
</script>
