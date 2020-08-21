<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-4">
            <div class="col-6 col-md-7">
              <BreadCrumb title="Proyectos" parent active="Proyectos"></BreadCrumb>
            </div>
            <div class="col-6 col-md-5 text-right">
              <a :href="routeCreate" class="btn btn-icon btn-inverse-primary">
                <span class="btn-inner--icon">
                  <jam-building class="current-color" />
                </span>
                <span class="btn-inner--text">Nuevo Proyecto</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid mt--6">
      <div class="row" v-if="loadingEls">
        <div class="col-12 col-lg-4 mb-4" v-for="i in 4" :key="i">
          <Skeleton height="400px" />
        </div>
      </div>
      <div v-else>
        <div class="row" v-if="elements.length">
          <div class="col-12">
            <p>{{ messageOrder}}</p>
          </div>
          <div class="col-12 col-lg-4 mb-4" v-for="el in elements" :key="el.id">
            <div class="card position-relative">
              <div class="text-center position-absolute pl-2 pt-2">
                  <img :src="imagesUrl+'/projects/'+el.logo" height="50" :alt="el.name_es" />
                </div>
              <img class="object-fit--cover" height="300" :src="imagesUrl + '/projects/'+ el.images_format[0]" alt="">
              <div class="card-body">
                
                <div>
                  <span class="badge badge-info badge-md">{{ el.status_rel.name_es}}</span>
                  <h2 class="mt-1">{{ el.name_es }}</h2>
                  <div class="mb-2">
                    <div><h4 class="d-inline-block font-weight-normal">Ubicación:</h4> <h4 class="d-inline-block">{{ el.location}}</h4></div>
                  <div><h4 class="d-inline-block font-weight-normal">Habitaciones:</h4> <h4 class="d-inline-block">{{ el.rooms_es}}</h4></div>
                  <div><h4 class="d-inline-block font-weight-normal">Metraje:</h4> <h4 class="d-inline-block">{{ el.footage_es}}</h4></div>
                  </div>
                  
                  <div class="text-right">
                    <div>
                  <div><h4 class="d-inline-block font-weight-normal">Precio Total Soles:</h4> <h4 class="d-inline-block">S/{{ el.price_total}}</h4></div>
                  <div><h4 class="d-inline-block font-weight-normal">Precio Total Dolares:</h4> <h4 class="d-inline-block">${{ el.price_total_foreign}}</h4></div>
                  </div><h4 class="d-inline-block font-weight-normal">Precio de Reserva:</h4> <h2 class="d-inline-block">S/. {{ el.price}}</h2></div>

                </div>
              </div>
            </div>
          </div>
        </div>
        <NoData v-else />
      </div>
    </div>
  </div>
</template>
<script>
import BreadCrumb from "../../components/BreadCrumb";
import { Skeleton } from "vue-loading-skeleton";
import NoData from "../../components/NoData";
export default {
  components: {
    BreadCrumb,
    NoData,
    Skeleton,
  },
  props: {
    routeCreate: String,
    route: String,
    routeGetAll: String,
    routeOrder: String,
    messageOrder: String,
    imagesUrl: String,
  },
  data() {
    return {
      loadingEls: false,
      elements: [
      ],
      element: {},
      modalDestroy: false,
      loadingGet: false,
      requestSubmit: false,
    };
  },
  methods: {
    getEls() {
      this.loadingEls = true;
      axios
        .get(this.routeGetAll)
        .then((response) => {
          this.elements = response.data;
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