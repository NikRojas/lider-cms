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
        <div class="col-xl-3 col-lg-6 mb-4">
          <div class="card card-stats shadow">
            <!-- Card body -->
            <div class="card-body">
              <div class="row">
                <div class="col">
                  <h4 class="card-title text-uppercase text-muted mb-0">Clientes Home</h4>
                  <Loader
                    :iconClasses="['my-2']"
                    :iconHeight="20"
                    :iconWidth="20"
                    :estilo="{ display: 'inline-block' }"
                    v-if="loading"
                  />
                  <span class="h2 font-weight-bold mb-0" v-else>{{ statistics.customers }}</span>
                </div>
                <div class="col-auto">
                  <div class="icon icon-shape bg-warning text-white rounded-circle shadow">
                    <i class="fas fa-handshake"></i>
                  </div>
                </div>
              </div>
              <p class="mt-3 mb-0 text-muted text-sm">
                <span class="text-nowrap">Registrado(s) totales</span>
              </p>
            </div>
          </div>
        </div>

        <div class="col-xl-3 col-lg-6 mb-4">
          <div class="card card-stats shadow">
            <!-- Card body -->
            <div class="card-body">
              <div class="row">
                <div class="col">
                  <h4 class="card-title text-uppercase text-muted mb-0">Players</h4>
                  <Loader
                    :iconClasses="['my-2']"
                    :iconHeight="20"
                    :iconWidth="20"
                    :estilo="{ display: 'inline-block' }"
                    v-if="loading"
                  />
                  <span class="h2 font-weight-bold mb-0" v-else>{{ statistics.players }}</span>
                </div>
                <div class="col-auto">
                  <div class="icon icon-shape bg-success text-white rounded-circle shadow">
                    <i class="fas fa-ghost"></i>
                  </div>
                </div>
              </div>
              <p class="mt-3 mb-0 text-muted text-sm">
                <span class="text-nowrap">Registrado(s) totales</span>
              </p>
            </div>
          </div>
        </div>

        <div class="col-xl-3 col-lg-6 mb-4">
          <div class="card card-stats shadow">
            <!-- Card body -->
            <div class="card-body">
              <div class="row">
                <div class="col">
                  <h4 class="card-title text-uppercase text-muted mb-0">Postulantes</h4>
                  <Loader
                    :iconClasses="['my-2']"
                    :iconHeight="20"
                    :iconWidth="20"
                    :estilo="{ display: 'inline-block' }"
                    v-if="loading"
                  />
                  <span class="h2 font-weight-bold mb-0" v-else>{{ statistics.applicants }}</span>
                </div>
                <div class="col-auto">
                  <div class="icon icon-shape bg-default text-white rounded-circle shadow">
                    <i class="fas fa-users"></i>
                  </div>
                </div>
              </div>
              <p class="mt-3 mb-0 text-muted text-sm">
                <span class="text-nowrap">Registrado(s) totales</span>
              </p>
            </div>
          </div>
        </div>

        <div class="col-xl-3 col-lg-6 mb-4">
          <div class="card card-stats shadow">
            <!-- Card body -->
            <div class="card-body">
              <div class="row">
                <div class="col">
                  <h4 class="card-title text-uppercase text-muted mb-0">Notas Activas Blog</h4>
                  <Loader
                    :iconClasses="['my-2']"
                    :iconHeight="20"
                    :iconWidth="20"
                    :estilo="{ display: 'inline-block' }"
                    v-if="loading"
                  />
                  <span class="h2 font-weight-bold mb-0" v-else>{{ statistics.posts }}</span>
                </div>
                <div class="col-auto">
                  <div class="icon icon-shape bg-primary text-white rounded-circle shadow">
                    <i class="fas fa-newspaper"></i>
                  </div>
                </div>
              </div>
              <p class="mt-3 mb-0 text-muted text-sm">
                <span class="text-nowrap">Registrado(s) totales</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12 col-lg-7 col-xl-8 mb-4">
          <div class="card">
            <div class="card-header border-0">
              <h4 class="card-title text-uppercase text-muted mb-0">Leads</h4>
            </div>
            <div class="card-body pt-0">
              <Loader
                :iconClasses="['my-2']"
                :iconHeight="20"
                :iconWidth="20"
                :styles="{ display: 'inline-block', height: '300px' }"
                v-if="loading"
              />
              <ChartLine v-else :chartdata="statistics.leads" :options="chartOptions"></ChartLine>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-5 col-xl-4 mb-4">
          <div class="card">
            <div class="card-header border-0">
              <h4 class="card-title text-uppercase text-muted mb-0">Casos de Éxito</h4>
            </div>
            <div class="card-body pt-0">
              <Loader
                :iconClasses="['my-2']"
                :iconHeight="20"
                :iconWidth="20"
                :styles="{ display: 'inline-block', height: '300px' }"
                v-if="loading"
              />
              <ChartBar v-else :chartdata="statistics.success_stories" :options="chartOptions"></ChartBar>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BreadCrumb from "../components/BreadCrumb";
import Loader from "../components/Loader";
import ChartBar from "../components/charts/Bar.js";
import ChartLine from "../components/charts/Line.js";
export default {
  components: {
    //Footer,
    BreadCrumb,
    Loader,
    ChartBar,
    ChartLine
  },
  data() {
    return {
      statistics: {
        success_stories: []
      },
      loading: false,
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          yAxes: [
            {
              ticks: {
                precision: 0
              }
            }
          ]
        }
      }
    };
  },
  methods: {
    getStatistics() {
      this.loading = true;
      axios
        .get("json/dashboard")
        .then(response => {
          this.statistics = response.data;
          this.loading = false;
        })
        .catch(error => {});
    }
  },
  created() {
    this.getStatistics();
  }
};
</script>