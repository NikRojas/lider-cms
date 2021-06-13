<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-4">
            <div class="col-12 col-lg-7">
              <BreadCrumb title="Estadísticas" parent active="Ventas y Estadísticas"></BreadCrumb>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid mt--6">
      <div class="row">
        <div class="col-12 mb-4">
          <FilterDateRange
            :activeParent="filterDate.active"
            :active.sync="filterDate.active"
            :range.sync="filterDate.range"
            removeParent="all"
            @get="getEls()"
          />
        </div>
      </div>

      <div class="row">
        <div class="col-12 stretch-card  mb-4">
          <div class="card w-100">
            <div class="card-body">
              <h2 class="text-primary">Ventas Totales</h2>
              <p>Reporte de ventas totales según el rango de fecha seleccionado y divido según la moneda.</p>
              <div class="row"  v-if="loadingEls">
                <div class="col-12 col-lg-6">
                  <skeleton height="350px"></skeleton>
                </div>
                 <div class="col-12 col-lg-6">
                  <skeleton height="350px"></skeleton>
                </div>
                
              </div>
              <div class="row" v-else>
                <div class="col-12 col-lg-6">
                  <h1>{{ charts.total_sales.chartData.value}}</h1>
                  <ve-line
                    :legend-visible="false"
                    :data="charts.total_sales.chartData"
                    :settings="chartSettings"
                    :colors="colors"
                    :loading="loadingEls"
                    :extend="chartExtend"
                  ></ve-line>
                </div>
                <div class="col-12 col-lg-6">
                   <h1>{{ charts.total_sales.chartDataForeign.value}}</h1>
                  <ve-line
                    :legend-visible="false"
                    :data="charts.total_sales.chartDataForeign"
                    :settings="chartSettings"
                    :colors="colors"
                    :loading="loadingEls"
                    :extend="chartExtend"
                  ></ve-line>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6 stretch-card mb-4">
          <div class="card w-100">
            <div class="card-body">
              <h2 class="text-primary">Reservas Totales</h2>
              <p>Reporte del total de las reservas totales según el rango de fecha seleccionado.</p>
              <skeleton height="350px" v-if="loadingEls"></skeleton>
              <div v-else>
                <h1>{{ charts.total_orders.value}}</h1>
                <ve-line
                  :legend-visible="false"
                  :data="charts.total_orders"
                  :settings="chartSettings"
                  :colors="colors"
                  :loading="loadingEls"
                  :extend="chartExtend"
                ></ve-line>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6 stretch-card  mb-4">
          <div class="card w-100">
            <div class="card-body">
              <h2 class="text-primary">Reservas por Proyecto</h2>
              <p>Reporte del total de las reservas por Proyecto según el rango de fecha seleccionado.</p>
              <skeleton height="300px" v-if="loadingEls"></skeleton>
              <div v-else>
                <div class="card mb-4">
                  <table class="table align-items-center">
                    <thead class="thead-light">
                      <tr>
                        <th class="border-0">Nombre</th>
                        <th class="border-0">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(el,i) in charts.reservers_per_project.rows" :key="i">
                        <td>{{el.name_es}}</td>
                        <td>{{el.value}}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <ve-pie
                  style="margin-top: -50px;"
                  :data="charts.reservers_per_project"
                  :legend="chartLegendPie"
                  :colors="colors"
                  :settings="chartSettingsPie"
                ></ve-pie>
              </div>
            </div>
          </div>
        </div>
        
        <div class="col-12 col-lg-12 mb-4">
          
           <div class="card w-100  mb-4">
            <div class="card-body">
              <h2 class="text-primary">Reservas por Tipo</h2>
              <p>Reporte descriptivo de los inmuebles reservados por Tipo según el rango de fecha seleccionado.</p>
              <skeleton height="300px" v-if="loadingEls"></skeleton>
              <div v-else>
                <div class="card w-100">
                  <table class="table align-items-center">
                    <thead class="thead-light">
                      <tr>
                        <th class="border-0">Nombre</th>
                        <th class="border-0">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(el,i) in charts.reservers_per_type.rows" :key="i">
                        <td>{{el.name }}</td>
                        <td>{{el.value}}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="card w-100">
            <div class="card-body">
              <h2 class="text-primary">Reservas por Inmuebles</h2>
              <p>Reporte descriptivo de los inmuebles reservados según el rango de fecha seleccionado.</p>
              <skeleton height="300px" v-if="loadingEls"></skeleton>
              <div v-else>
                <div class="card w-100">
                  <table class="table align-items-center">
                    <thead class="thead-light">
                      <tr>
                        <th class="border-0">Descripción</th>
                        <th class="border-0">Proyecto</th>
                        <th class="border-0">Tipología</th>
                        <th class="border-0">Tipo</th>
                        <th class="border-0">Precio</th>
                      </tr>
                    </thead>
                    <template v-if="charts.reservers_per_tipology.rows.length">
                      <tbody >
                        <tr v-for="(el,i) in charts.reservers_per_tipology.rows" :key="i">
                          <td>{{el.name }}</td>
                          <td>{{el.project}}</td>
                          <td>{{el.tipology}}</td>
                          <td>{{el.tipo}}</td>
                          <td>{{ el.price }}</td>
                        </tr>
                      </tbody>
                    </template>
                    <tbody v-else>
                       <tr>
                        <td colspan="5">
                          <NoData/>
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
import VePie from "v-charts/lib/pie.common";
import VeBar from "v-charts/lib/bar.common";
import FilterDateRange from "../../components/filters/DateRange";
import BreadCrumb from "../../components/BreadCrumb";
import { Skeleton } from "vue-loading-skeleton";
import NoData from "../../components/NoData.vue";
export default {
  props: {
    routeGetAll: String,
  },
  components: {
    Skeleton,
    FilterDateRange,
    BreadCrumb,
    VeLine,
    VePie,
    VeBar,
    NoData
  },
  data() {
    return {
      chartLegendPie: { bottom: 10, left: "center" },
      filterDate: {
        active: { text: "Hoy", value: "today" },
        range: null,
      },
      loadingEls: false,
      charts: {
        total_sales:{
          chartData: {},
          chartDataForeign: {}
        }
      },
      colors: ["#1762e6", "#44CCF2","#0728FA","#060726","#254B85"],
      chartSettings: {
        yAxisType: ["KMB"],
        area: true,
      },
      chartSettingsPie: {
      },
      chartExtend: {
        series: {
          smooth: false,
          type: "line",
        },
      },
    };
  },
  methods: {
    getEls() {
      this.loadingEls = true;
      axios
        .get(this.routeGetAll, {
          params: {
            date: this.filterDate.active.value,
            ...(this.filterDate.range ? { range: this.filterDate.range } : {}),
          },
        })
        .then((response) => {
          this.charts = response.data;
          this.loadingEls = false;
        })
        .catch((error) => {});
    },
  },
  created() {
    this.getEls();
  },
};
</script>
   