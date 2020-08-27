<template>
  <div>
    <form @submit.prevent="submit">
      <div class="header pb-6">
        <div class="container-fluid">
          <div class="header-body">
            <div class="row align-items-center pt-0 pt-md-2 pb-4">
              <div class="col-6 col-md-7">
                <BreadCrumb :title="'Proyecto '+element.name_es" parent active="Proyectos"></BreadCrumb>
              </div>
              <div class="col-6 col-md text-right">
                <a :href="routeReturn" class="btn btn-icon btn-sm btn-inverse-light">
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
                    <h3 class="mb-1 font-weight-normal">
                      <span class="d-block font-weight-bold">Nombre ES:</span>
                      {{ element.name_es }}
                    </h3>
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold">Nombre EN:</span>
                      {{ element.name_en }}
                    </h3>
                  </div>
                  <div class="col-12 col-lg-6 mb-3">
                    <h3 class="mb-1 font-weight-normal">
                      <span class="d-block font-weight-bold">URL ES:</span>
                      <a target="_blank" style="text-decoration: underline;" :href="appUrl+'/proyectos/'+element.slug_es">{{ appUrl }}/proyectos/{{ element.slug_es }}</a>
                    </h3>
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold">URL EN:</span>
                      <a target="_blank" style="text-decoration: underline;" :href="appUrl+'/projects/'+element.slug_en">{{ appUrl }}/projects/{{ element.slug_en }}</a>
                    </h3>
                  </div>
                  <div class="col-12 col-lg-6 mb-3">
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold">Logo:</span>
                    </h3>
                    <img class="img-fluid" :src="imagesUrl+'/projects/'+element.logo" alt />
                  </div>
                  <div class="col-12">
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold">Imágenes:</span>
                    </h3>
                    <img
                      class="img-fluid"
                      v-for="el in element.images_format"
                      :key="el"
                      :src="imagesUrl+'/projects/'+el"
                      alt
                    />
                  </div>
                  <div class="col-12 col-lg-6 mb-3">
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold">Estado del Proyecto ES:</span>
                      {{ element.status_rel.name_es }}
                    </h3>
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold">Estado del Proyecto EN:</span>
                      {{ element.status_rel.name_en }}
                    </h3>
                  </div>
                  <div class="col-12 col-lg-6 mb-3">
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold">Descripción ES:</span>
                    </h3>
                    <div v-html="element.description_es"></div>
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold">Descripción EN:</span>
                    </h3>
                    <div v-html="element.description_en"></div>
                  </div>

                  <div class="col-12 col-lg-6 mb-3">
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold">Habitaciones ES:</span>
                      {{ element.rooms_es }}
                    </h3>
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold">Habitaciones EN:</span>
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
                    <a
                      :href="filesUrl+'/projects/'+element.brochure"
                      class="btn btn-inverse-info btn-sm d-inline"
                      target="_blank"
                    >Ver Brochure</a>
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
                          style="height:80px; width:80px;"
                        >
                          <img :src="imagesUrl+'/advisors/'+el.avatar" :alt="el.name" />
                        </span>
                        <small class="text-uppercase d-block">{{ el.name }}</small>
                      </div>
                    </div>
                  </div>

                  <!--<div class="col-12 col-lg-6 mb-3">
                    <div class="form-group">
                      <label class="font-weight-bold" for="image">Logo:</label>
                      <div class="row">
                        <div class="col-lg-4 mb-3 mb-lg-0">
                          <img class="img-fluid" :src="imagesUrl+'/projects/'+element.logo" alt />
                        </div>
                        <div class="col-lg-8">
                          <vue-dropzone
                            ref="ref_logo"
                            @vdropzone-file-added="$validateImageDropzone($event,$refs.ref_logo.dropzone,1,512000,'500kb')"
                            id="image"
                            class="text-center"
                            :options="dropzoneOptions"
                            :duplicateCheck="true"
                            :useCustomSlot="true"
                          >
                            <div class="dropzone-custom-content">
                              <h5
                                class="dropzone-custom-title text-primary"
                              >Suelte los archivos aquí o haga click para cargarlos.</h5>
                            </div>
                          </vue-dropzone>

                          <label
                            v-if="errors && errors.logo"
                            class="text-danger text-sm d-block mt-2"
                            for="logo"
                          >{{ errors.logo[0] }}</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-lg-6 mb-3">
                    <div class="form-group">
                      <label class="font-weight-bold" for="images">Imágenes:</label>
                      <div class="row">
                        <div class="col-12 mb-3">
                          <MultipleFiles fieldName="images" :errors="errors" :messageOrder="messageOrder" :files.sync="element.files" :imagesUrl="imagesUrl" folder="projects" :filesParent="element.images_format"/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-lg-6 mb-3">
                    <Statuses
                      :selected.sync="element.project_status_id"
                      :errors="errors"
                      :selectedParent="element.project_status_id"
                      :route-create="routeStatusesCreate"
                      :route-get-all="routeStatusesGetAll"
                    />
                  </div>
                  <div class="col-12 col-lg-6 mb-3">
                    <Editor
                      size="sm"
                      label="Descripción"
                      variable="description"
                      :errors="errors"
                      :valueEn.sync="element.description_en"
                      :valueEs.sync="element.description_es"
                      :valueEnParent="element.description_en"
                      :valueEsParent="element.description_es"
                    />
                  </div>
                  <div class="col-12 col-lg-6 mb-3">
                    <Input
                      label="Habitaciones"
                      variable="rooms"
                      :errors="errors"
                      :valueEn.sync="element.rooms_en"
                      :valueEs.sync="element.rooms_es"
                      :valueEnParent="element.rooms_en"
                      :valueEsParent="element.rooms_es"
                    />
                  </div>
                  <div class="col-12 col-lg-6 mb-3">
                    <Input
                      label="Metraje"
                      variable="footage"
                      :errors="errors"
                      :valueEn.sync="element.footage_en"
                      :valueEs.sync="element.footage_es"
                      :valueEnParent="element.footage_en"
                      :valueEsParent="element.footage_es"
                    />
                  </div>
                  <div class="col-12 col-lg-6 mb-3">
                    <div class="form-group">
                      <label class="font-weight-bold" for="brochure">Brochure:</label>
                      <div class="row">
                        <div class="col-lg-2 mb-3 mb-lg-0 d-flex align-items-center justify-content-center">
                          <div>
                            <div class="text-center mb-3 text-info">
                            <PdfIcon/>
                            </div>
                          <a :href="filesUrl+'/projects/'+element.brochure" class="btn btn-inverse-info btn-sm d-inline" target="_blank">Ver Brochure</a>
                          </div>
                        </div>
                        <div class="col-lg-10">
                          <vue-dropzone
                            ref="ref_brochure"
                            @vdropzone-file-added="$validatePDFDropzone($event,$refs.ref_brochure.dropzone,1,512000,'500kb')"
                            id="brochure"
                            class="text-center"
                            :options="dropzoneOptionsBrochure"
                            :duplicateCheck="true"
                            :useCustomSlot="true"
                          >
                            <div class="dropzone-custom-content">
                              <h5
                                class="dropzone-custom-title text-primary"
                              >Suelte los archivos aquí o haga click para cargarlos.</h5>
                            </div>
                          </vue-dropzone>

                          <label
                            v-if="errors && errors.brochure"
                            class="text-danger text-sm d-block mt-2"
                            for="brochure"
                          >{{ errors.brochure[0] }}</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-lg-6 mb-3">
                    <Advisors
                      :selectedParent="element.advisors"
                      :errors="errors"
                      :selected.sync="element.advisors"
                      :images-url="imagesUrl"
                      :route-create="routeAdvisorsCreate"
                      :route-get-all="routeAdvisorsGetAll"
                    />
                  </div>-->
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
                  <div class="col-12 col-lg-6 mb-3">
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold">Precio Total Soles:</span>
                      {{ element.price_total_format }}
                    </h3>
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold">Precio Total Dolares:</span>
                      {{ element.price_total_foreign_format }}
                    </h3>
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold">Precio:</span>
                      {{ element.price_format }}
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
            <p>Indica los atributos con los que cuenta el Proyecto</p>
          </div>
          <div class="col-12 col-lg-10">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-12 col-lg-6 mb-3">
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold">Banner ES:</span>
                    </h3>
                    <img class="img-fluid" :src="imagesUrl+'/projects/'+element.banner_es" alt />
                  </div>
                  <div class="col-12 col-lg-6 mb-3">
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold">Banner EN:</span>
                    </h3>
                    <img class="img-fluid" :src="imagesUrl+'/projects/'+element.banner_en" alt />
                  </div>
                  <div class="col-12 mb-3">
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold">Características:</span>
                    </h3>
                    <div class="row">
                      <div
                        class="col-12 col-lg-3 text-center"
                        v-for="el in element.features_rel"
                        :key="el.id"
                      >
                        <img :src="imagesUrl+'/features/'+el.image" height="50" :alt="el.name_es" />
                        <small class="text-uppercase d-block">{{ el.name_es }}</small>
                        <small class="text-uppercase d-block">{{ el.name_en }}</small>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 mb-3">
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold">Entidades Financieras:</span>
                    </h3>
                    <div class="row">
                      <div
                        class="col-12 col-lg-3 text-center"
                        v-for="el in element.banks_rel"
                        :key="el.id"
                      >
                        <img :src="imagesUrl+'/banks/'+el.logo" height="50" :alt="el.name" />
                        <small class="text-uppercase d-block">{{ el.name }}</small>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-lg-6 mb-3">
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold">Speech Galeria ES:</span>
                      {{ element.text_place_es }}
                    </h3>
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold">Speech Galeria EN:</span>
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
                  <div class="col-12 col-lg-6 mb-3">
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold">Dirección:</span>
                      {{ element.location }}
                    </h3>
                  </div>
                  

                  <div class="col-12 col-lg-6 mb-3">
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold">Departamento:</span>
                      {{ element.ubigeo_rel.department }}
                    </h3>
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold">Provincia:</span>
                      {{ element.ubigeo_rel.province }}
                    </h3>
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold">Distrito:</span>
                      {{ element.ubigeo_rel.district }}
                    </h3>
                  </div>

                  <div class="col-12 col-lg-6 mb-3">
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold">Indicaciones de Dirección ES:</span>
                      <div v-html="element.map_indications_es"></div>
                    </h3>
                  </div>

                  <div class="col-12 col-lg-6 mb-3">
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold">Indicaciones de Dirección EN:</span>
                      <div v-html="element.map_indications_en"></div>
                    </h3>
                  </div>

                  <div class="col-12 col-lg-6 mb-3">
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold">Sala de Ventas ES:</span>
                      <div v-html="element.sales_room_es"></div>
                    </h3>
                  </div>

                  <div class="col-12 col-lg-6 mb-3">
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold">Sala de Ventas EN:</span>
                      <div v-html="element.sales_room_en"></div>
                    </h3>
                  </div>

                  <div class="col-12 col-lg-6 mb-3">
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold">Horario de Atención ES:</span>
                      <div v-html="element.schedule_attention_es"></div>
                    </h3>
                  </div>

                  <div class="col-12 col-lg-6 mb-3">
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold">Horario de Atención EN:</span>
                      <div v-html="element.schedule_attention_en"></div>
                    </h3>
                  </div>
                  <div class="col-12 col-lg-6 mb-3">
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold">URL Waze:</span>
                      <a :href="element.url_waze" target="_blank">{{ element.url_waze }}</a>
                    </h3>
                  </div>
                  <div class="col-12 col-lg-6 mb-3">
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold">URL Google Maps:</span>
                      <a :href="element.url_google_maps" target="_blank">{{ element.url_google_maps }}</a>
                    </h3>
                  </div>
                  <div class="col-12 col-lg-6 mb-3">
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold">Latitud:</span>
                      {{ element.latitude }}
                    </h3>
                  </div>
                  <div class="col-12 col-lg-6 mb-3">
                    <h3 class="font-weight-normal">
                      <span class="d-block font-weight-bold">Longitud:</span>
                      {{ element.longitude }}
                    </h3>
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
export default {
  components: {
    BreadCrumb,
    PdfIcon,
  },
  props: {
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