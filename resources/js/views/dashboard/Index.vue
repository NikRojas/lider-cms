<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-4">
            <div class="col-12">
              <BreadCrumb title="Dashboard" active="Dashboard"></BreadCrumb>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid mt--6">
      <div class="row">
        <div class="col-lg-3 col-12">
          <div class="mb-4">
            <div class="card">
              <div class="card-body pb-2">
                <h2>Estadísticas de Ventas</h2>
                Ingresa a la sección <b>Estadísticas de Ventas</b>, para revisar
                las estadísticas de ventas de la Web.
                <ul class="mt-3">
                  <li>Ventas Totales</li>
                  <li>Reservas Totales</li>
                  <li>Reservas por Proyecto</li>
                  <li>Reservas por Inmuebles</li>
                  <li>Reservas por Tipos</li>
                </ul>
                <div class="text-center">
                  <a
                    href="/ventas-estadisticas/estadisticas"
                    class="btn btn-link text-primary"
                    style="text-decoration: underline"
                  >
                    Ir a Estadísticas de Ventas
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-4">
            <div class="card">
              <div class="card-body pb-2">
            <h2>Órdenes</h2>

                Ingresa a la sección <b>Órdenes</b>, para explorar las órdenes
                generadas a través de la Web.
                <div class="mt-3">
                  <h4 class="text-uppercase text-primary mb-0">Este Mes</h4>
                  <h1>
                    {{ statistics.orders }}
                  </h1>
                </div>
                <div class="text-center">
                  <a
                    href="/ventas-estadisticas/ventas"
                    class="btn btn-link text-primary"
                    style="text-decoration: underline"
                  >
                    Ir a Órdenes
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div class="mb-4">
            <div class="card">
              <div class="card-body pb-2">
            <h2>Clientes</h2>

                Ingresa a la sección <b>Clientes</b>, para explorar y exportar
                los clientes registrados a través la Web.
                <div class="mt-3">
                  <h4 class="text-uppercase text-primary mb-0">Este Mes</h4>
                  <h1>
                    {{ statistics.customers }}
                  </h1>
                </div>
                <div class="text-center">
                  <a
                    href="/clientes"
                    class="btn btn-link text-primary"
                    style="text-decoration: underline"
                  >
                    Ir a Clientes
                  </a>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        <div class="col-12 mb-4 mb-lg-0 col-lg-9">
          <div class="row mb-4">
            <div class="col-12">
              <h2>Resumen de Leads</h2>
            </div>
            <div class="col-12">
              <FilterDateRange
                :activeParent="filterDate.active"
                :active.sync="filterDate.active"
                :range.sync="filterDate.range"
                removeParent="all"
                @get="getStatisticsByDate()"
              />
            </div>
          </div>
          <!--<b-tabs
            pills
            nav-wrapper-class="mb-4"
            nav-class="border bg-white py-2"
            content-class=""
          >-->
          <b-tabs
            class="tab--dashboard"
            pills
            nav-wrapper-class="mb-4"
            lazy
            nav-class=""
            content-class=""
          >
            <b-tab
              title="Cotizaciones por Proyectos"
              active
              title-link-class="border-0 pt-0 bg-transparent shadow-none"
              title-item-class="my-0"
            >
              <div class="card">
                <div class="card-body">
                  <!--<h2 class="text-primary">Cotizaciones por proyecto</h2>-->

                  <skeleton height="300px" v-if="loadingByDate"></skeleton>
                  <div class="pt-4" v-else>
                    <ve-line
                      :data="charts.leadsQuotations"
                      :settings="chartSettings"
                      :colors="colors"
                      :loading="loadingByDate"
                    ></ve-line>
                  </div>
                </div>
              </div>
            </b-tab>
            <b-tab
              title="Cita Online por Proyecto"
              title-link-class="border-0 pt-0 bg-transparent shadow-none"
              title-item-class="my-0"
            >
              <div class="row">
                <div class="col-12">
                  <div class="card">
                    <div class="card-body">
                      <!--<h2 class="text-primary">Leads Cita Online</h2>-->

                      <skeleton height="300px" v-if="loadingByDate"></skeleton>
                      <div class="pt-4" v-else>
                        <ve-line
                          :data="charts.leadsVideocall"
                          :settings="chartSettings"
                          :colors="colors"
                          :loading="loadingByDate"
                        ></ve-line>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </b-tab>
            <!--<b-tab
              title="Suscripciones"
              title-link-class="border-0 pt-0 bg-transparent shadow-none"
              title-item-class="my-0"
            >
              <div class="row">
                <div class="col-12">
                  <div class="card">
                    <div class="card-body">
                      <skeleton height="300px" v-if="loadingByDate"></skeleton>
                      <div class="pt-4">
                        <ve-line
                          :legend-visible="false"
                          :data="charts.subscriptions"
                          :settings="chartSettings"
                          :colors="colors"
                          :loading="loadingByDate"
                          :extend="chartExtendBar"
                        ></ve-line>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </b-tab>-->
          </b-tabs>

          <div class="row mt-4">
            <div class="col-12">
              <h2>Proyectos Registrados</h2>

              <div class="row mb-4">
                <div class="col-12">
                  <div class="card">
                    <div v-if="loading">
                      <table class="table align-items-center">
                        <thead class="thead-light">
                          <tr>
                            <th class="border-0" v-for="i in 3" :key="i">
                              <Skeleton />
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="i in 3" :key="i">
                            <td v-for="j in 3" :key="j">
                              <Skeleton />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div v-else>
                      <div class="table-responsive">
                        <simplebar
                          data-simplebar-auto-hide="false"
                          style="height: 400px"
                        >
                          <table class="table align-items-center">
                            <thead class="thead-light">
                              <tr>
                                <th class="border-0">Proyecto</th>
                                <th class="border-0">Estado</th>
                                <th class="border-0">Total Inmuebles</th>
                                <th class="border-0">Inmuebles Disponibles</th>
                              </tr>
                            </thead>
                            <tbody v-if="statistics.projects.length">
                              <tr
                                v-for="el in statistics.projects"
                                :key="el.id"
                              >
                                <td>
                                  <div class="media align-items-center">
                                    <span class="mr-3"
                                      ><img
                                        height="55"
                                        width="auto"
                                        :src="
                                          imagesUrl +
                                          '/projects/' +
                                          el.images_format[0]
                                        " /></span
                                    >{{ el.name_es }}
                                  </div>
                                </td>
                                <td>
                                  <span
                                    class="badge text-white badge-md"
                                    style="background-color: black"
                                  >
                                    {{ el.status_rel.name_es }}
                                  </span>
                                </td>
                                <td>
                                  {{ el.departments_rel.length }}
                                </td>
                                <td>
                                  {{ el.departmentsActive }}
                                </td>
                              </tr>
                            </tbody>
                            <tbody v-else>
                              <tr>
                                <td class="text-center py-5" colspan="4">
                                  <NoData
                                    :show-title="false"
                                    customText="No hay proyectos registrados"
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </simplebar>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-12">

              <h2>Estadísticas de Contenido</h2>
            </div>

            <div class="col-12 col-lg-3 mb-4">
              <div class="card card-stats shadow">
                <!-- Card body -->
                <div class="card-body">
                  <div class="row">
                    <div class="col">
                      <h4 class="card-title  mb-0">
                        Post Publicados (Activos)
                      </h4>
                      <Loader
                        :iconClasses="['my-2']"
                        :iconHeight="20"
                        :iconWidth="20"
                        :estilo="{ display: 'inline-block' }"
                        v-if="loading"
                      />
                      <span class="h2 font-weight-bold mb-0" v-else>{{
                        statistics.posts
                      }}</span>
                    </div>
                    <div class="col-auto">
                      <div class="text-primary">
                        <jam-newspaper
                          height="24px"
                          width="24px"
                          class="current-color"
                        />
                      </div>
                    </div>
                  </div>
                  <p class="mt-3 mb-0 text-xs" style="opacity: 0.75">
                    <span class="text-uppercase text-primary font-weight-bold">Registrados totales</span>
                  </p>
                </div>
              </div>
            </div>

            <div class="col-12 col-lg-3 mb-4">
              <div class="card card-stats shadow">
                <!-- Card body -->
                <div class="card-body">
                  <div class="row">
                    <div class="col">
                      <h4 class="card-title  mb-0">
                        Suscriptores
                      </h4>
                      <Loader
                        :iconClasses="['my-2']"
                        :iconHeight="20"
                        :iconWidth="20"
                        :estilo="{ display: 'inline-block' }"
                        v-if="loading"
                      />
                      <span class="h2 font-weight-bold mb-0" v-else>{{
                        statistics.suscribers
                      }}</span>
                    </div>
                    <div class="col-auto">
                      <div class="text-primary">
                        <jam-database
                          height="24px"
                          width="24px"
                          class="current-color"
                        />
                      </div>
                    </div>
                  </div>
                  <p class="mt-3 mb-0 text-xs" style="opacity: 0.75">
                    <span class="text-uppercase text-primary font-weight-bold">Registrados totales</span>
                  </p>
                </div>
              </div>
            </div>

            <div class="col-12 col-lg-3 mb-4">
              <div class="card card-stats shadow">
                <!-- Card body -->
                <div class="card-body">
                  <div class="row">
                    <div class="col">
                      <h4 class="card-title  mb-0">Asesores</h4>
                      <Loader
                        :iconClasses="['my-2']"
                        :iconHeight="20"
                        :iconWidth="20"
                        :estilo="{ display: 'inline-block' }"
                        v-if="loading"
                      />
                      <span class="h2 font-weight-bold mb-0" v-else>{{
                        statistics.advisors
                      }}</span>
                    </div>
                    <div class="col-auto">
                      <div class="text-primary">
                        <jam-user-circle
                          height="24px"
                          width="24px"
                          class="current-color"
                        />
                      </div>
                    </div>
                  </div>
                  <p class="mt-3 mb-0 text-xs" style="opacity: 0.75">
                    <span class="text-uppercase text-primary font-weight-bold">Registrados totales</span>
                  </p>
                </div>
              </div>
            </div>

            <div class="col-12 col-lg-3 mb-4">
              <div class="card card-stats shadow">
                <!-- Card body -->
                <div class="card-body">
                  <div class="row">
                    <div class="col">
                      <h4 class="card-title  mb-0">
                        Entidades Financieras
                      </h4>
                      <Loader
                        :iconClasses="['my-2']"
                        :iconHeight="20"
                        :iconWidth="20"
                        :estilo="{ display: 'inline-block' }"
                        v-if="loading"
                      />
                      <span class="h2 font-weight-bold mb-0" v-else>{{
                        statistics.banks
                      }}</span>
                    </div>
                    <div class="col-auto">
                      <div class="text-primary">
                        <jam-credit-card
                          height="24px"
                          width="24px"
                          class="current-color"
                        />
                      </div>
                    </div>
                  </div>
                  <p class="mt-3 mb-0 text-xs" style="opacity: 0.75">
                    <span class="text-uppercase text-primary font-weight-bold">Registrados totales</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "v-charts/lib/style.css";
import VeLine from "v-charts/lib/line.common";
import VeBar from "v-charts/lib/bar.common";
import BreadCrumb from "../../components/BreadCrumb";
import Loader from "../../components/Loader";
import { Skeleton } from "vue-loading-skeleton";
import simplebar from "simplebar-vue";
import "simplebar/dist/simplebar.min.css";
import FilterDateRange from "../../components/filters/DateRange";
import NoData from "../../components/NoData";
/*import ChartBar from "../components/charts/Bar.js";
import ChartLine from "../components/charts/Line.js";*/
export default {
  props: {
    imagesUrl: String,
  },
  components: {
    //Footer,
    NoData,
    BreadCrumb,
    Loader,
    FilterDateRange,
    Skeleton,
    VeLine,
    simplebar,
    VeBar,
    /*ChartBar,
    ChartLine*/
  },
  data() {
    return {
      statistics: {},
      loading: false,
      loadingByDate: false,
      charts: {},
      filterDate: {
        active: { text: "Hoy", value: "today" },
        range: null,
      },
      colors: ["#1762e6", "#44CCF2", "#0728FA", "#060726", "#254B85"],
      /*chartSettings: {
        yAxisType: ["normal"],
        //area: true,
      },*/
      /*chartExtend: {
        series: {
          //smooth: true,
          type: "bar",
        },
      },*/

      chartSettings: {
        //yAxisType: ["normal"],
        area: true,
      },
      chartExtendBar: {
        series: {
          //smooth: true,
          type: "bar",
        },
      },
    };
  },
  methods: {
    getStatisticsByDate() {
      this.loadingByDate = true;
      axios
        .get("json/dashboard-by-date", {
          params: {
            date: this.filterDate.active.value,
            ...(this.filterDate.range ? { range: this.filterDate.range } : {}),
          },
        })
        .then((response) => {
          this.charts = response.data;
          this.loadingByDate = false;
        })
        .catch((error) => {});
    },
    getStatistics() {
      this.loading = true;
      axios
        .get("json/dashboard")
        .then((response) => {
          this.statistics = response.data;
          this.loading = false;
        })
        .catch((error) => {});
    },
  },
  created() {
    this.getStatistics();
    this.getStatisticsByDate();
  },
};
</script>
<style lang="scss">
.tab--dashboard {
  .nav-pills {
    border-bottom: 1px solid #e9ecef;
  }
  .nav-link.active {
    border-bottom: 2px solid #1762e6 !important;
  }
}
</style>