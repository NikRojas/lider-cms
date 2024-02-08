<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-4">
            <div class="col-6 col-md-7">
              <BreadCrumb
                title="Proyectos"
                parent
                active="Proyectos"
              ></BreadCrumb>
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
        <div class="col-12 col-lg-6 mb-4" v-for="i in 6" :key="i">
          <Skeleton height="400px" />
        </div>
      </div>
      <div v-else>
        <div class="row" v-if="elements.length">
          <div class="col-12">
            <p>{{ messageOrder }}</p>
          </div>
          <div class="col-12">
            <draggable class="row" v-model="elements" @change="handleChange">
              <div
                class="col-12 col-lg-6 mb-4"
                v-for="el in elements"
                :key="el.id"
              >
                <div class="card">
                  <div class="card-body">
                    <div class="row mb-2">
                      <div class="col-12 mb-lg position-relative">
                        <div class="text-right position-relative">
                          <img
                            class="position-absolute"
                            style="right: 0"
                            :src="imagesUrl + '/projects/' + el.logo_colour" 
                            height="25"
                            :alt="el.name_es"
                          />
                        </div>
                        <img
                          style="max-height: 150px"
                          class="img-fluid d-block"
                          :src="imagesUrl + '/projects/' + el.images_format[0]"
                          alt
                        />
                      </div>
                      <div class="col-12">
                        <div class="row mt-2">
                          <div class="col-12 mb-2">
                            <div class>
                              <a
                                target="_blank"
                                style="text-decoration: underline"
                                :href="appUrl + '/' + el.slug_es"
                                >{{ appUrl }}/{{ el.slug_es }}</a
                              >
                              <br />
                              <a
                                target="_blank"
                                style="text-decoration: underline"
                                :href="appUrl + '/en/' + el.slug_en"
                                >{{ appUrl }}/en/{{ el.slug_en }}</a
                              >
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-12">
                            <span
                              class="badge text-white badge-md"
                              style="background-color: black"
                              >{{ el.status_rel.name_es }}</span
                            >

                            <h1 class="my-0">{{ el.name_es }}</h1>

                            <div class="">
                              <div class="row">
                                <div class="col-12 h3 font-weight-normal mb-0">
                                  Mostrar en la Web:
                                  <span
                                    :class="
                                      el.active
                                        ? 'font-weight-bold text-success'
                                        : 'font-weight-bold text-danger'
                                    "
                                    >{{
                                      el.active ? "Habilitado" : "Deshabilitado"
                                    }}</span
                                  >
                                </div>

                                <div class="col-6">
                                  <div>
                                    <h3
                                      class="d-inline-block font-weight-normal mb-0"
                                    >
                                      Código SAP:
                                    </h3>
                                    <h3
                                      class="d-inline-block mb-0"
                                      v-if="el.sap_code"
                                    >
                                      {{ el.sap_code }}
                                    </h3>
                                    <h3 class="d-inline-block mb-0" v-else>
                                      No registrado
                                    </h3>
                                  </div>
                                </div>
                                  <div class="col-6">
                                    <h3
                                      class="d-inline-block font-weight-normal mb-0"
                                    >
                                      Precio Separación Inmueble:
                                    </h3>
                                    <h3
                                      class="d-inline-block mb-0"
                                      v-if="el.price_separation"
                                    >
                                      {{ el.price_separation_format }}
                                    </h3>
                                    <h3 class="d-inline-block mb-0" v-else>
                                      No registrado
                                    </h3>
                                  </div>

                                  <div class="col-6">
                                    <h3
                                      class="d-inline-block font-weight-normal mb-0"
                                    >
                                      N° Tipologias:
                                    </h3>
                                    <h3 class="d-inline-block mb-0">
                                      {{ el.tipologies_rel_count }}
                                    </h3>
                                  </div>
                                  <div class="col-6">
                                    <h3
                                      class="d-inline-block font-weight-normal mb-0"
                                    >
                                      N° Inmuebles:
                                    </h3>
                                    <h3 class="d-inline-block mb-0">
                                      {{ el.departments_rel_count }}
                                    </h3>
                                  </div>

                                <div class="col-12">
                                  <hr class="mt-2 mb-2" />
                                </div>

                                <div class="col-6">
                                  <div>
                                    <h4
                                      class="d-inline-block mb-0 font-weight-normal"
                                    >
                                      N° Cotizaciones:
                                    </h4>
                                    <h4 class="d-inline-block mb-0">
                                      {{ el.quotations_rel_count }}
                                    </h4>
                                  </div>
                                </div>
                                <div class="col-6">
                                  <div>
                                    <h4
                                      class="d-inline-block mb-0 font-weight-normal"
                                    >
                                      N° Documentos:
                                    </h4>
                                    <h4 class="d-inline-block mb-0">
                                      {{ el.files_rel_count }}
                                    </h4>
                                  </div>
                                </div>
                                <div class="col-6">
                                  <div>
                                    <h4
                                      class="d-inline-block mb-0 font-weight-normal"
                                    >
                                      N° Imágenes en la Galeria:
                                    </h4>
                                    <h4 class="d-inline-block mb-0">
                                      {{ el.gallery_rel_count }}
                                    </h4>
                                  </div>
                                </div>
                                <div class="col-6">
                                  <div>
                                    <div v-if="el.price_total">
                                      <h4
                                        class="d-inline-block mb-0 font-weight-normal"
                                      >
                                        Precio Soles Desde:
                                      </h4>
                                      <h4 class="d-inline-block mb-0">
                                        {{ el.price_total_format }}
                                      </h4>
                                    </div>
                                    <div v-if="el.price_total_foreign">
                                      <h4
                                        class="d-inline-block mb-0 font-weight-normal"
                                      >
                                        Precio Dólares Desde:
                                      </h4>
                                      <h4 class="d-inline-block mb-0">
                                        {{ el.price_total_foreign_format }}
                                      </h4>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-6 h4 font-weight-normal mb-0">
                                  Envio de Información de Cotizaciones al email
                                  de los asesores:
                                  <span
                                    :class="
                                      el.send_to_email
                                        ? 'font-weight-bold text-success'
                                        : 'font-weight-bold text-danger'
                                    "
                                    >{{
                                      el.send_to_email
                                        ? "Habilitado"
                                        : "Deshabilitado"
                                    }}</span
                                  >
                                </div>
                                <div class="col-6 h4 font-weight-normal">
                                  Envio de Información de Cotizaciones por
                                  Webhook:
                                  <span
                                    :class="
                                      el.webhook_url_active
                                        ? 'font-weight-bold text-success'
                                        : 'font-weight-bold text-danger'
                                    "
                                    >{{
                                      el.webhook_url_active
                                        ? "Habilitado"
                                        : "Deshabilitado"
                                    }}</span
                                  >
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12">
                        <div class="row">
                          <div class="col-12 col-md-6 col-lg-4">
                            <a
                              :href="'proyectos/tipologias/' + el.slug_es"
                              class="btn btn-sm mb-2 btn-inverse-primary btn-block"
                              ><jam-pencil class="current-color" height="18" width="18" /> Tipologias</a
                            >
                          </div>
                          <div class="col-12 col-md-6 col-lg-4">
                            <a
                              :href="'proyectos/inmuebles/' + el.slug_es"
                              class="btn btn-sm mb-2 btn-inverse-primary btn-block"
                              ><jam-pencil class="current-color" height="18" width="18" /> Inmuebles</a
                            >
                          </div>
                          <div class="col-12 col-md-6 col-lg-4">
                            <a
                              :href="
                                'proyectos/pisos-estacionamientos-depositos/' + el.slug_es
                              "
                              class="btn btn-sm mb-2 btn-inverse-primary btn-block"
                            >
                              <jam-pencil class="current-color" height="18" width="18" /> Estacionamientos y Depósitos
                            </a>
                          </div>
                          <div class="col-12 col-md-6 col-lg-4">
                            <a
                              :href="
                                'proyectos/combos/' + el.slug_es
                              "
                              class="btn btn-sm mb-2 btn-inverse-primary btn-block"
                            >
                              <jam-pencil class="current-color" height="18" width="18" /> Combos
                            </a>
                          </div>
                          <div class="col-12 col-md-6 col-lg-4">
                            <a
                              :href="
                                'proyectos/etapas/' + el.slug_es
                              "
                              class="btn btn-sm mb-2 btn-inverse-primary btn-block"
                            >
                              <jam-pencil class="current-color" height="18" width="18" /> Etapas
                            </a>
                          </div>
                          <div class="col-12 col-md-6 col-lg-4">
                            <a
                              :href="
                                'proyectos/credenciales-pasarela/' + el.slug_es
                              "
                              class="btn btn-sm mb-2 btn-inverse-primary btn-block"
                            >
                              <jam-pencil class="current-color" height="18" width="18" /> Credenciales Pasarela
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 col-md-6 col-lg-4">
                          <a
                            :href="'proyectos/banners/' + el.slug_es"
                            class="btn btn-sm mb-2 btn-outline-primary btn-block"
                            ><jam-pencil class="current-color" height="18" width="18" /> Banners</a
                          >

                      </div>
                      <div class="col-12 col-md-6 col-lg-4">
                          <a
                            :href="'proyectos/documentos/' + el.slug_es"
                            class="btn btn-sm mb-2 btn-outline-primary btn-block"
                            ><jam-pencil class="current-color" height="18" width="18" /> Documentos</a
                          >
                      </div>
                          <div class="col-12 col-md-6 col-lg-4">
                          <a
                            :href="'proyectos/galeria/' + el.slug_es"
                            class="btn btn-sm mb-2 btn-outline-primary btn-block"
                            ><jam-pencil class="current-color" height="18" width="18" /> Galería</a
                          >
                      </div>
                          <div class="col-12 col-md-6 col-lg-4">
                          <a
                            :href="'proyectos/tour-virtual/' + el.slug_es"
                            class="btn btn-sm mb-2 btn-outline-primary btn-block"
                            ><jam-pencil class="current-color" height="18" width="18" /> Tour Virtual</a
                          >
                      </div>
                          <div class="col-12 col-md-6 col-lg-4">
                          <a
                            :href="'proyectos/cotizaciones/' + el.slug_es"
                            class="btn btn-sm mb-2 btn-outline-primary btn-block"
                            ><jam-eye class="current-color" height="18" width="18" /> Cotizaciones</a
                          >
                      </div>
                          <div class="col-12 col-md-6 col-lg-4">
                          <a
                            :href="
                              'proyectos/informacion-plataforma-comercial/' +
                              el.slug_es
                            "

                        
                            class="btn btn-sm mb-2 btn-outline-primary btn-block"
                            ><jam-pencil class="current-color" height="18" width="18" /> Plataforma Comercial</a
                          >
                          </div>
                          
                        

                      <div class="col-12 col-lg-6">
                            <a
                              :href="route + '/' + el.slug_es"
                              class="btn btn-sm mb-2 btn-inverse-primary btn-block"
                              >Ver Proyecto</a
                            >
                      </div>
                      <div class="col-12 col-lg-6">
                            <a
                              :href="route + '/editar/' + el.slug_es"
                              class="btn btn-sm btn-inverse-info btn-block"
                              >Editar Proyecto</a
                            >
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </draggable>
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
import draggable from "vuedraggable";
export default {
  components: {
    BreadCrumb,
    NoData,
    Skeleton,
    draggable,
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
    handleChange() {
      axios
        .put(this.routeOrder, this.elements)
        .then((response) => {
          this.restore();
          Swal.fire({
            title: response.data.title,
            text: response.data.message,
            type: "success",
            confirmButtonText: "OK",
            buttonsStyling: false,
            customClass: {
              confirmButton: "btn btn-primary",
            },
          });
        })
        .catch((error) => {
          Swal.fire({
            title: error.response.data.title,
            text: error.response.data.message,
            type: "error",
            confirmButtonText: "OK",
            buttonsStyling: false,
            customClass: {
              confirmButton: "btn btn-primary",
            },
          });
        });
    },
    restore() {
      this.getEls();
    },
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