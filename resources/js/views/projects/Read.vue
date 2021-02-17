<template>
  <div>
    <form @submit.prevent="submit">
      <div class="header pb-6">
        <div class="container-fluid">
          <div class="header-body">
            <div class="row align-items-center pt-0 pt-md-2 pb-4">
              <div class="col-6 col-md-7">
                <BreadCrumb
                  :title="'Proyecto ' + element.name_es"
                  parent
                  active="Proyectos"
                ></BreadCrumb>
              </div>
              <div class="col-6 col-md text-right">
                <a
                  :href="routeReturn"
                  class="btn btn-icon btn-sm btn-inverse-light"
                >
                  <span class="btn-inner--icon">
                    <jam-arrow-left class="current-color" />
                  </span>
                  <span class="btn-inner--text">Regresar</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid mt--6">
        <div class="row mb-4">
          <div class="col-12 col-lg-2">
            <h2>Brief</h2>
            <p>Datos principales del Proyecto</p>
          </div>
          <div class="col-12 col-lg-10">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-12 col-lg-6 mb-3">
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold">Logo:</span>
                    </h3>
                    <img
                      class="p-2 bg-dark"
                      height="90"
                      :src="imagesUrl + '/projects/' + element.logo"
                      alt
                    />
                  </div>
                  <div class="col-12 col-lg-6 mb-3">
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold">Logo Color:</span>
                    </h3>
                    <img
                      class=""
                      height="90"
                      :src="imagesUrl + '/projects/' + element.logo_colour"
                      alt
                    />
                  </div>
                  <div class="col-12 col-lg-6 mb-3">
                    <h3 class="mb-1 font-weight-normal">
                      <span class="d-block font-weight-bold"
                        >Nombre del Proyecto ES:</span
                      >
                      {{ element.name_es }}
                    </h3>
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold"
                        >Nombre del Proyecto EN:</span
                      >
                      {{ element.name_en }}
                    </h3>
                  </div>
                  <div class="col-12 col-lg-6 mb-3">
                    <h3 class="mb-1 font-weight-normal">
                      <span class="d-block font-weight-bold"
                        >URL del Proyecto ES:</span
                      >
                      <a
                        target="_blank"
                        style="text-decoration: underline"
                        :href="appUrl + '/proyectos/' + element.slug_es"
                        >{{ appUrl }}/proyectos/{{ element.slug_es }}</a
                      >
                    </h3>
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold"
                        >URL del Proyecto EN:</span
                      >
                      <a
                        target="_blank"
                        style="text-decoration: underline"
                        :href="appUrl + '/projects/' + element.slug_en"
                        >{{ appUrl }}/projects/{{ element.slug_en }}</a
                      >
                    </h3>
                  </div>
                  
                  <div class="col-12 col-lg-6 mb-3">
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold">Imágenes:</span>
                    </h3>
                    <carousel :perPage="1">
                      <slide v-for="el in element.images_format" :key="el">
                        <img
                          class="img-fluid"
                          :src="imagesUrl + '/projects/' + el"
                          alt
                        />
                      </slide>
                    </carousel>
                  </div>
                  <div class="col-12 col-lg-6 mb-3">
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold"
                        >Estado del Proyecto ES:</span
                      >
                      {{ element.status_rel.name_es }}
                    </h3>
                  </div>
                  <div class="col-12 col-lg-6 mb-3">
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold"
                        >Estado del Proyecto EN:</span
                      >
                      {{ element.status_rel.name_en }}
                    </h3>
                  </div>
                  <div class="col-12 col-lg-6 mb-3">
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold"
                        >Descripción ES:</span
                      >
                    </h3>
                    <div v-html="element.description_es"></div>
                  </div>
                  <div class="col-12 col-lg-6 mb-3">
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold"
                        >Descripción EN:</span
                      >
                    </h3>
                    <div v-html="element.description_en"></div>
                  </div>

                  <div class="col-12 col-lg-6 mb-3">
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold"
                        >Habitaciones ES:</span
                      >
                      {{ element.rooms_es }}
                    </h3>
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold"
                        >Habitaciones EN:</span
                      >
                      {{ element.rooms_en }}
                    </h3>
                  </div>

                  <div class="col-12 col-lg-6 mb-3">
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold">Metraje ES:</span>
                      {{ element.footage_es }}
                    </h3>
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold">Metraje EN:</span>
                      {{ element.footage_en }}
                    </h3>
                  </div>

                  <div class="col-12 col-lg-6 mb-3">
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold">Metraje ES:</span>
                      {{ element.footage_es }}
                    </h3>
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold">Metraje EN:</span>
                      {{ element.footage_en }}
                    </h3>
                  </div>

                  <div class="col-12 col-lg-6 mb-3">
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold">Brochure:</span>
                    </h3>
                    <div class="mb-3 text-info">
                      <PdfIcon />
                    </div>
                    <a
                      :href="filesUrl + '/projects/' + element.brochure"
                      class="btn btn-inverse-info btn-sm d-inline"
                      target="_blank"
                      >Ver Brochure</a
                    >
                  </div>

                  <div class="col-12 col-lg-6 mb-3">
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold">Asesores:</span>
                    </h3>
                    <div class="row">
                      <div
                        class="col-12 col-lg-3 text-center"
                        v-for="el in element.advisors_rel"
                        :key="el.id"
                      >
                        <span
                          class="avatar avatar-lg rounded-circle bg-default object-fit--cover"
                          style="height: 80px; width: 80px"
                        >
                          <img
                            :src="imagesUrl + '/advisors/' + el.avatar"
                            :alt="el.name"
                          />
                        </span>
                        <small class="text-uppercase d-block">{{
                          el.name
                        }}</small>
                      </div>
                    </div>
                  </div>

                  <div class="col-12 col-lg-6 mb-3">
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold"
                        >Formulario Cita Online:</span
                      >
                      <p
                        :class="
                          element.form_videocall
                            ? 'text-success'
                            : 'text-danger'
                        "
                      >
                        {{ element.form_videocall ? "Sí" : "No" }}
                      </p>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mb-4">
          <div class="col-12 col-lg-2">
            <h2>Importes</h2>
            <p>Montos con los que cuenta el Proyecto</p>
          </div>
          <div class="col-12 col-lg-10">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-12 col-lg-6 mb-3 text-center">
                    <h2 class="font-weight-normal">
                      <span class="d-block h3 font-weight-bold"
                        >Precio Soles Desde:</span
                      >
                      {{ element.price_total ? element.price_total_format : 'No registrado' }}
                    </h2>
                  </div>
                  <div class="col-12 col-lg-6 mb-3 text-center">
                    <h2 class="font-weight-normal">
                      <span class="d-block h3 font-weight-bold"
                        >Precio Dólares Desde:</span
                      >
                      {{ element.price_total_foreign ? element.price_total_foreign_format : 'No registrado' }}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mb-4">
          <div class="col-12 col-lg-2">
            <h2>Atributos</h2>
            <p>Indica los atributos con los que cuenta el Proyecto</p>
          </div>
          <div class="col-12 col-lg-10">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-12 col-lg-6 mb-3">
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold">Banner:</span>
                    </h3>
                    <img
                      class="img-fluid"
                      :src="imagesUrl + '/projects/' + element.banner"
                      alt
                    />
                  </div>
                  <div class="col-12 col-lg-6 mb-3">
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold">Video:</span>
                    </h3>
                    <iframe
                      id="player"
                      type="text/html"
                      width="100%"
                      height="360"
                      v-if="element.url_video"
                      :src="'http://www.youtube.com/embed/' + element.id_video"
                      frameborder="0"
                    ></iframe>
                    <p v-else>No se ha registrado un video.</p>
                  </div>
                  <div class="col-12 mb-3">
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold"
                        >Características:</span
                      >
                    </h3>
                    <div class="row">
                      <div
                        class="col-12 col-lg-3 text-center"
                        v-for="el in element.features_rel"
                        :key="el.id"
                      >
                        <img
                          :src="imagesUrl + '/features/' + el.image"
                          height="50"
                          :alt="el.name_es"
                        />
                        <h3 class="mb-1 font-weight-normal mt-2">
                          <span class="font-weight-bold">Nombre ES:</span>
                          {{ el.name_es }}
                        </h3>
                        <h3 class="font-weight-normal">
                          <span class="font-weight-bold">Nombre EN:</span>
                          {{ el.name_en }}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 mb-3">
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold"
                        >Entidades Financieras:</span
                      >
                    </h3>
                    <div class="row">
                      <div
                        class="col-12 col-lg-3 text-center"
                        v-for="el in element.banks_rel"
                        :key="el.id"
                      >
                        <img
                          :src="imagesUrl + '/banks/' + el.logo"
                          height="50"
                          class="p-2 bg-dark"
                          :alt="el.name"
                        />
                        <small class="text-uppercase d-block">{{
                          el.name
                        }}</small>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 mb-3">
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold">Bonos:</span>
                    </h3>
                    <div class="row" v-if="element.bonds_rel.length">
                      <div
                        class="col-12 col-lg-3 text-center"
                        v-for="el in element.bonds_rel"
                        :key="el.id"
                      >
                        <img
                          :src="imagesUrl + '/bonds/' + el.logo"
                          height="50"
                          class="p-2 bg-dark"
                          :alt="el.name"
                        />
                        <small class="text-uppercase d-block">{{
                          el.name
                        }}</small>
                      </div>
                    </div>
                    <div class="row" v-else>
                      <div class="col-12 col-lg-6">
                        <p>No registrado</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-lg-6 mb-3">
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold"
                        >Speech Galeria ES:</span
                      >
                      {{ element.text_place_es }}
                    </h3>
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold"
                        >Speech Galeria EN:</span
                      >
                      {{ element.text_place_en }}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mb-4">
          <div class="col-12 col-lg-2">
            <h2>Atributos</h2>
            <p>Atributos con los que cuenta el Proyecto</p>
          </div>
          <div class="col-12 col-lg-10">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-12 mb-3">
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold">Dirección:</span>
                      {{ element.location }}
                    </h3>
                  </div>

                  <div class="col-12 col-lg-4 mb-3">
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold"
                        >Departamento:</span
                      >
                      {{ element.ubigeo_rel.department }}
                    </h3>
                  </div>
                  <div class="col-12 col-lg-4 mb-3">
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold">Provincia:</span>
                      {{ element.ubigeo_rel.province }}
                    </h3>
                  </div>
                  <div class="col-12 col-lg-4 mb-3">
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold">Distrito:</span>
                      {{ element.ubigeo_rel.district }}
                    </h3>
                  </div>

                  <div class="col-12 col-lg-6 mb-3">
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold"
                        >Indicaciones de Dirección ES:</span
                      >
                      <div
                        v-html="element.map_indications_es"
                        v-if="element.map_indications_es"
                      ></div>
                      <p v-else>No hay indicaciones registradas.</p>
                    </h3>
                  </div>

                  <div class="col-12 col-lg-6 mb-3">
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold"
                        >Indicaciones de Dirección EN:</span
                      >
                      <div
                        v-html="element.map_indications_en"
                        v-if="element.map_indications_en"
                      ></div>
                      <p v-else>No hay indicaciones registradas.</p>
                    </h3>
                  </div>

                  <div class="col-12 col-lg-6 mb-3">
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold"
                        >Sala de Ventas ES:</span
                      >
                      <div v-html="element.sales_room_es"></div>
                    </h3>
                  </div>

                  <div class="col-12 col-lg-6 mb-3">
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold"
                        >Sala de Ventas EN:</span
                      >
                      <div v-html="element.sales_room_en"></div>
                    </h3>
                  </div>

                  <div class="col-12 col-lg-6 mb-3">
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold"
                        >Horario de Atención ES:</span
                      >
                      <div v-html="element.schedule_attention_es"></div>
                    </h3>
                  </div>

                  <div class="col-12 col-lg-6 mb-3">
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold"
                        >Horario de Atención EN:</span
                      >
                      <div v-html="element.schedule_attention_en"></div>
                    </h3>
                  </div>
                  <div class="col-12 col-lg-6 mb-3">
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold">URL Waze:</span>
                      <a
                        style="text-decoration: underline"
                        :href="element.url_waze"
                        target="_blank"
                        v-if="element.url_waze"
                        >{{ element.url_waze }}</a
                      >
                      <p v-else>No registrado</p>
                    </h3>
                  </div>
                  <div class="col-12 col-lg-6 mb-3">
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold"
                        >URL Google Maps:</span
                      >
                      <a
                        style="text-decoration: underline"
                        :href="element.url_google_maps"
                        target="_blank"
                        v-if="element.url_google_maps"
                        >{{ element.url_google_maps }}</a
                      >
                      <p v-else>No registrado</p>
                    </h3>
                  </div>
                  <div class="col-12  col-lg-6">
                    <!--<h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold d-block mb-2"
                        >Iframe Mapa:</span
                      >
                      <div v-html="element.iframe_map"></div>
                    </h3>-->
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold">Mapa:</span>
                    </h3>
                    <img
                      class="img-fluid"
                      :src="imagesUrl + '/projects/' + element.iframe_map"
                      alt
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mb-4">
          <div class="col-12 col-lg-2">
            <h2>Cotización</h2>
            <p>Indica la Información de la cotización del Proyecto</p>
          </div>
          <div class="col-12 col-lg-10">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  
                  <div class="col-12 col-lg-6 mb-3">
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold"
                        >Resumen del Proyecto:</span
                      >
                      <div
                        v-html="element.excerpt_quotation"
                        v-if="element.excerpt_quotation"
                      ></div>
                      <p v-else>No registrado.</p>
                    </h3>
                  </div>


                  <div class="col-12 col-lg-6 mb-3">
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold"
                        >Precio Estacionamiento:</span
                      >
                      <div
                        v-html="element.price_parking"
                        v-if="element.price_parking"
                      ></div>
                      <p v-else>No registrado.</p>
                    </h3>
                  </div>

                  
                  <div class="col-12 col-lg-6 mb-3">
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold"
                        >Condiciones de la Proforma:</span
                      >
                      <div
                        v-html="element.condition_quotation"
                        v-if="element.condition_quotation"
                      ></div>
                      <p v-else>No registrado.</p>
                    </h3>
                  </div>

                  
                  <div class="col-12 col-lg-6 mb-3">
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold"
                        >Comentario que incluye el inmueble:</span
                      >
                      <div
                        v-html="element.commentary_quotation"
                        v-if="element.commentary_quotation"
                      ></div>
                      <p v-else>No registrado.</p>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-lg-2">
            <h2>Proyectos Relacionados</h2>
            <p>
              Indica los proyectos relacionados que se mostrarán en el
              <b>Detalle del Proyecto</b>
            </p>
          </div>
          <div class="col-12 col-lg-10">
            <div class="card">
              <div class="card-body">
                <h3 class="font-weight-normal">
                  <span class="d-block font-weight-bold mb-3"
                    >Proyectos Relacionados:</span
                  >
                </h3>
                <div
                  class="row"
                  v-if="projectsRelated && projectsRelated.length"
                >
                  <div
                    class="col-6 col-lg-3 text-center"
                    v-for="el in projectsRelated"
                    :key="el[0].id"
                  >
                    <img
                      :src="imagesUrl + '/projects/' + el[0].images_format[0]"
                      height="150"
                      width="auto"
                      class="mx-auto"
                      :alt="el[0].name"
                    />
                    <small class="text-uppercase d-block">{{
                      el[0].name_es
                    }}</small>
                  </div>
                </div>
                <div class="row" v-else>
                  <div class="col-12 col-lg-6">
                    <p>No hay proyectos relacionados registrados</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import BreadCrumb from "../../components/BreadCrumb";
import PdfIcon from "../../components/icons/Pdf";
import { Carousel, Slide } from "vue-carousel";
export default {
  components: {
    BreadCrumb,
    PdfIcon,
    Carousel,
    Slide,
  },
  props: {
    projectsRelated: Array,
    appUrl: String,
    elementParent: Object,
    imagesUrl: String,
    filesUrl: String,
    routeReturn: String,
  },
  data() {
    return {
      element: {},
    };
  },
  watch: {
    elementParent: {
      immediate: true,
      handler: function (newValue) {
        this.element = newValue;
      },
    },
  },
};
</script>