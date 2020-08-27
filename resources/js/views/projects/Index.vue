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
        <div class="col-12 col-lg-4 mb-4" v-for="i in 6" :key="i">
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
              <div class="text-center position-absolute pl-3 pt-3">
                <img :src="imagesUrl+'/projects/'+el.logo" height="50" :alt="el.name_es" />
              </div>
              <img
                class="object-fit--cover"
                height="300"
                :src="imagesUrl + '/projects/'+ el.images_format[0]"
                alt
              />
              <div class="card-body">
                <div>
                  <div class="row">
                    
                    <div class="col-12 text-right">
                      <div class="ml-auto d-inline">
                        <a
                          :href="'proyectos/galeria/'+el.slug_es"
                          class="btn btn-sm mb-2 btn-inverse-primary"
                        >Ir a Tipologias</a>
                        <a
                          :href="'proyectos/documentos/'+el.slug_es"
                          class="btn btn-sm mb-2 btn-inverse-primary"
                        >Ir a Documentos</a>
                        <a
                          :href="'proyectos/galeria/'+el.slug_es"
                          class="btn btn-sm mb-2 btn-inverse-primary"
                        >Ir a Galeria</a>
                      </div>
                    </div>
                    <div class="col-12 mb-2">
                      <div class>
                        <a
                          style="text-decoration: underline;"
                          :href="appUrl+'/proyectos/'+el.slug_es"
                        >{{ appUrl }}/proyectos/{{ el.slug_es }}</a>
                        <br />
                        <a
                          style="text-decoration: underline;"
                          :href="appUrl+'/projects/'+el.slug_en"
                        >{{ appUrl }}/projects/{{ el.slug_en }}</a>
                      </div>
                    </div>
                  </div>

                  <span class="badge badge-warning badge-md">{{ el.status_rel.name_es}}</span>
                  <h2 class="mt-1">{{ el.name_es }}</h2>

                  <div class="mb-3">
                    <div>
                      <h4 class="d-inline-block font-weight-normal">Ubicación:</h4>
                      <h4
                        class="d-inline-block"
                      >{{ el.location}}, {{ el.ubigeo_rel.district}} - {{ el.ubigeo_rel.department}}</h4>
                    </div>
                    <div>
                      <div>
                        <h4 class="d-inline-block font-weight-normal">Precio Total Soles:</h4>
                        <h4 class="d-inline-block">S/{{ el.price_total_format}}</h4>
                      </div>
                      <div>
                        <h4 class="d-inline-block font-weight-normal">Precio Total Dolares:</h4>
                        <h4 class="d-inline-block">${{ el.price_total_foreign_format}}</h4>
                      </div>
                    </div>
                    <h4 class="d-inline-block font-weight-normal">Precio de Reserva:</h4>
                    <h2 class="d-inline-block">S/. {{ el.price_format}}</h2>
                  </div>
                  <div class="d-flex">
                    <div class="ml-auto d-inline">
                      <a
                        :href="route+'/'+el.slug_es"
                        class="btn btn-sm btn-inverse-primary"
                      >Ver Proyecto</a>
                      <a
                        :href="route+'/editar/'+el.slug_es"
                        class="btn btn-sm btn-inverse-info"
                      >Editar</a>
                    </div>
                  </div>
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
    appUrl: String,
    routeGetAll: String,
    routeOrder: String,
    messageOrder: String,
    imagesUrl: String,
  },
  data() {
    return {
      loadingEls: false,
      elements: [],
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