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
        <div class="col-12 col-lg-8 stretch-card  mb-4">
          <div class="card">
            <div class="card-body">
              <h2 class="text-primary">Ventas Totales</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore numquam fuga exercitationem eaque, eum cumque dolor quisquam doloremque ratione voluptatibus. Eum eos, minima porro maxime modi dolorem numquam a quam?</p>
              <skeleton height="350px" v-if="loadingEls"></skeleton>
              <div v-else>
                <h1>{{ charts.total_sales.value}}</h1>
                <ve-line
                  :legend-visible="false"
                  :data="charts.total_sales"
                  :settings="chartSettings"
                  :colors="colors"
                  :loading="loadingEls"
                  :extend="chartExtend"
                ></ve-line>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-4 stretch-card  mb-4">
          <div class="card">
            <div class="card-body">
              <h2 class="text-primary">Reservas por Proyecto</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore numquam fuga exercitationem eaque, eum cumque dolor quisquam doloremque ratione voluptatibus. Eum eos, minima porro maxime modi dolorem numquam a quam?</p>
              <skeleton height="300px" v-if="loadingEls"></skeleton>
              <div v-else>
                <div class="card mb-4">
                  <table class="table align-items-center">
                    <thead class="thead-light">
                      <tr>
                        <th class="border-0">Nombre ES</th>
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
                <!--<ve-bar
                  style="margin-top: -50px;"
                  :data="charts.reservers_per_project"
                  :legend="chartLegendPie"
                  :colors="colors"
                  :settings="chartSettingsPie"
                ></ve-bar>-->
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-8 stretch-card mb-4">
          <div class="card">
            <div class="card-body">
              <h2 class="text-primary">Reservas Totales</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore numquam fuga exercitationem eaque, eum cumque dolor quisquam doloremque ratione voluptatibus. Eum eos, minima porro maxime modi dolorem numquam a quam?</p>
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
        <div class="col-12 col-lg-4 stretch-card mb-4">
          <div class="card">
            <div class="card-body">
              <h2 class="text-primary">Reservas por Típologias</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore numquam fuga exercitationem eaque, eum cumque dolor quisquam doloremque ratione voluptatibus. Eum eos, minima porro maxime modi dolorem numquam a quam?</p>
              <skeleton height="300px" v-if="loadingEls"></skeleton>
              <div v-else>
                <div class="card">
                  <table class="table align-items-center">
                    <thead class="thead-light">
                      <tr>
                        <th class="border-0">Nombre</th>
                        <th class="border-0">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(el,i) in charts.reservers_per_tipology.rows" :key="i">
                        <td>{{el.name_format }}</td>
                        <td>{{el.value}}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--<ve-pie
                    style="margin-top: -50px;"
                    :data="charts.reservers_per_tipology"
                    :legend="chartLegendPie"
                    :colors="colors"
                    :settings="chartSettingsPie"
                  ></ve-pie>-->
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
    VeBar
  },
  data() {
    return {
      chartLegendPie: { bottom: 10, left: "center" },
      filterDate: {
        active: { text: "Hoy", value: "today" },
        range: null,
      },
      loadingEls: false,
      charts: {},
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
   