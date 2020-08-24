<template>
  <div>
    <form @submit.prevent="submit">
      <div class="header pb-6">
        <div class="container-fluid">
          <div class="header-body">
            <div class="row align-items-center pt-0 pt-md-2 pb-4">
              <div class="col-6 col-md-7">
                <BreadCrumb title="Crear Proyecto" parent active="Proyectos"></BreadCrumb>
              </div>
              <div class="col-6 col-md text-right">
                <Button
                  :text="'Actualizar'"
                  :classes="['btn-inverse-primary','mr-2']"
                  :request-server="requestServer"
                ></Button>
                <a type="button" class="btn btn-secondary" :href="routeReturn">Cancelar</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid mt--6">
        <div class="row mb-4">
          <div class="col-12 col-lg-2">
            <h2>Brief</h2>
            <p>Indica los datos principales del Proyecto</p>
          </div>
          <div class="col-12 col-lg-10">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-12">
                    <InputSlug
                      label="Nombre"
                      variable="name"
                      type="Ruta"
                      :errors="errors"
                      :valueEn.sync="element.name_en"
                      :valueEs.sync="element.name_es"
                      :slugEn.sync="element.slug_en"
                      :slugEs.sync="element.slug_es"
                      :valueEnParent="element.name_en"
                      :valueEsParent="element.name_es"
                      :slugEnParent="element.slug_en"
                      :slugEsParent="element.slug_es"
                    />
                  </div>
                  <div class="col-12 col-lg-6">
                    <div class="form-group">
                      <label class="font-weight-bold" for="image">Logo:</label>
                      <div class="row">
                        <div class="col-lg-4 mb-3 mb-lg-0">
                          <img :src="imagesUrl+'/projects/'+element.logo" alt />
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
                  <div class="col-12 col-lg-6">
                    <div class="form-group">
                      <label class="font-weight-bold" for="images">Imágenes:</label>
                      <div class="row">
                        <!--<div class="col-lg-4 mb-3 mb-lg-0 d-flex justify-content-center align-items-center">
                          <div class="text-center">
                            <a v-for="(el,i) in element.images_format" :key="i" :href="imagesUrl+'/projects/'+el" 
                            class="btn btn-inverse-info btn-sm mr-0 mb-2 d-block" target="_blank">Ver Imagen {{ i + 1 }}</a>
                          </div>
                        </div>-->
                        <div class="col-12 mb-3">
                          <MultipleFiles :messageOrder="messageOrder" :imagesUrl="imagesUrl" folder="projects" :filesParent="element.images_format"/>
                        </div>
                        <!--<div class="col-12">
                          <vue-dropzone
                            ref="ref_images"
                            @vdropzone-file-added="$validateImageDropzone($event,$refs.ref_images.dropzone,4,512000,'500kb')"
                            id="images"
                            class="text-center"
                            :options="dropzoneOptionsMultiple"
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
                            v-if="errors && errors.images"
                            class="text-danger text-sm d-block mt-2"
                            for="images"
                          >{{ errors.images[0] }}</label>
                        </div>-->
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <Statuses
                      :selected.sync="element.project_status_id"
                      :errors="errors"
                      :selectedParent="element.project_status_id"
                      :route-create="routeStatusesCreate"
                      :route-get-all="routeStatusesGetAll"
                    />
                  </div>
                  <div class="col-12">
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
                  <div class="col-12 col-lg-6">
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
                  <div class="col-12 col-lg-6">
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
                  <div class="col-12">
                    <div class="form-group">
                      <label class="font-weight-bold" for="brochure">Brochure:</label>
                      <div class="row">
                        <div class="col-lg-2 mb-3 mb-lg-0 d-flex align-items-center justify-content-center">
                          <div>
                            <div class="text-center mb-3 text-info">
                            <!--<jam-file-f height="32px" class="current-color" width="32px"></jam-file-f>-->
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
                  <div class="col-12">
                    <Advisors
                      :selectedParent="element.advisors"
                      :errors="errors"
                      :selected.sync="element.advisors"
                      :images-url="imagesUrl"
                      :route-create="routeAdvisorsCreate"
                      :route-get-all="routeAdvisorsGetAll"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mb-4">
          <div class="col-12 col-lg-2">
            <h2>Importes</h2>
            <p>Indica los montos que tendrá el Proyecto</p>
          </div>
          <div class="col-12 col-lg-10">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-12 col-lg-6">
                    <div class="form-group">
                      <label class="font-weight-bold" for="price_total">Precio Total Soles:</label>
                      <money class="form-control" v-model="element.price_total" v-bind="moneyLocal"></money>
                      <label
                        v-if="errors && errors.price_total"
                        class="text-danger text-sm d-block mt-2"
                        for="price_total"
                      >{{ errors.price_total[0] }}</label>
                    </div>
                  </div>
                  <div class="col-12 col-lg-6">
                    <div class="form-group">
                      <label
                        class="font-weight-bold"
                        for="price_total_foreign"
                      >Precio Total Dolares:</label>
                      <money
                        class="form-control"
                        v-model="element.price_total_foreign"
                        v-bind="moneyForeign"
                      ></money>
                      <label
                        v-if="errors && errors.price_total_foreign"
                        class="text-danger text-sm d-block mt-2"
                        for="price_total_foreign"
                      >{{ errors.price_total_foreign[0] }}</label>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <label class="font-weight-bold" for="price">Precio Reserva:</label>
                      <money
                        class="form-control form-control-lg"
                        v-model="element.price"
                        v-bind="moneyLocal"
                      ></money>
                      <label
                        v-if="errors && errors.price"
                        class="text-danger text-sm d-block mt-2"
                        for="price"
                      >{{ errors.price[0] }}</label>
                    </div>
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
                  <div class="col-12">
                    <ImageForm
                      label="Banner"
                      variable="banner"
                      :errors="errors"
                      folder="projects"
                      :imagesUrl="imagesUrl"
                      :valueEsParent="element.banner_en"
                      :valueEnParent="element.banner_es"
                      :valueEn.sync="element.banner_en"
                      :valueEs.sync="element.banner_es"
                    ></ImageForm>
                  </div>
                  <div class="col-12">
                    <Features
                      :errors="errors"
                      :selectedParent="element.features"
                      :selected.sync="element.features"
                      :images-url="imagesUrl"
                      :route-create="routeFeaturesCreate"
                      :route-get-all="routeFeaturesGetAll"
                    />
                  </div>
                  <div class="col-12">
                    <FinancialEntities
                      :errors="errors"
                      :selectedParent="element.financial_entities"
                      :selected.sync="element.financial_entities"
                      :images-url="imagesUrl"
                      :route-create="routeFinancialCreate"
                      :route-get-all="routeFinancialGetAll"
                    />
                  </div>
                  <div class="col-12">
                    <Input
                      label="Speech Galeria"
                      variable="text_place"
                      :errors="errors"
                      :valueEn.sync="element.text_place_en"
                      :valueEs.sync="element.text_place_es"
                      :valueEnParent="element.text_place_en"
                      :valueEsParent="element.text_place_es"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-lg-2">
            <h2>Ubicación</h2>
            <p>Indica los datos de ubicación del Proyecto</p>
          </div>
          <div class="col-12 col-lg-10">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-12">
                    <div class="form-group">
                      <label class="font-weight-bold" for="location">Dirección</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="element.location"
                        id="location"
                      />
                      <label
                        v-if="errors && errors.location"
                        class="mt-2 text-danger text-sm"
                        for="location"
                      >{{ errors.location[0] }}</label>
                    </div>
                  </div>
                  <div class="col-12">
                    <Editor
                      size="sm"
                      label="Indicaciones de Dirección (Opcional)"
                      variable="map_indications"
                      :errors="errors"
                      :valueEn.sync="element.map_indications_en"
                      :valueEs.sync="element.map_indications_es"
                      :valueEnParent="element.map_indications_en"
                      :valueEsParent="element.map_indications_es"
                    />
                  </div>
                  <div class="col-12">
                    <Ubigeo
                      :errors="errors"
                      :route-department="routeDepartmentsGet"
                      :route-district="routeDistrictsGet"
                      :route-province="routeProvincesGet"
                      :codeUbigeoParent="element.code_ubigeo"
                      :codeDepartment.sync="element.department"
                      :codeProvince.sync="element.province"
                      :codeDistrict.sync="element.district"
                    />
                  </div>
                  <div class="col-12 col-lg-6">
                    <Editor
                      size="sm"
                      label="Sala de Ventas"
                      variable="sales_room"
                      :errors="errors"
                      :valueEn.sync="element.sales_room_en"
                      :valueEs.sync="element.sales_room_es"
                      :valueEnParent="element.sales_room_en"
                      :valueEsParent="element.sales_room_es"
                    />
                  </div>
                  <div class="col-12 col-lg-6">
                    <Editor
                      size="sm"
                      label="Horario de Atención"
                      variable="schedule_attention"
                      :errors="errors"
                      :valueEn.sync="element.schedule_attention_en"
                      :valueEs.sync="element.schedule_attention_es"
                      :valueEnParent="element.schedule_attention_en"
                      :valueEsParent="element.schedule_attention_es"
                    />
                  </div>

                  <div class="col-12 col-lg-6">
                    <div class="form-group">
                      <label class="font-weight-bold" for="url_waze">URL Waze</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="element.url_waze"
                        id="url_waze"
                      />
                      <label
                        v-if="errors && errors.url_waze"
                        class="mt-2 text-danger text-sm"
                        for="url_waze"
                      >{{ errors.url_waze[0] }}</label>
                    </div>
                  </div>
                  <div class="col-12 col-lg-6">
                    <div class="form-group">
                      <label class="font-weight-bold" for="url_google_maps">URL Google Maps</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="element.url_google_maps"
                        id="url_google_maps"
                      />
                      <label
                        v-if="errors && errors.url_google_maps"
                        class="mt-2 text-danger text-sm"
                        for="url_google_maps"
                      >{{ errors.url_google_maps[0] }}</label>
                    </div>
                  </div>
                  <div class="col-12 col-lg-6">
                    <div class="form-group">
                      <label class="font-weight-bold" for="latitude">Latitud</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="element.latitude"
                        id="latitude"
                      />
                      <label
                        v-if="errors && errors.latitude"
                        class="mt-2 text-danger text-sm"
                        for="latitude"
                      >{{ errors.latitude[0] }}</label>
                    </div>
                  </div>
                  <div class="col-12 col-lg-6">
                    <div class="form-group">
                      <label class="font-weight-bold" for="longitude">Longitud</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="element.longitude"
                        id="longitude"
                      />
                      <label
                        v-if="errors && errors.longitude"
                        class="mt-2 text-danger text-sm"
                        for="longitude"
                      >{{ errors.longitude[0] }}</label>
                    </div>
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
import vue2Dropzone from "vue2-dropzone";
import BreadCrumb from "../../components/BreadCrumb";
import ImageForm from "../../components/form/Image";
import FinancialEntities from "../../components/form/FinancialEntities";
import Advisors from "../../components/form/Advisors";
import Statuses from "../../components/form/Statuses";
import Features from "../../components/form/Features";
import Ubigeo from "../../components/form/Ubigeo";
import Input from "../../components/form/Input";
import Button from "../../components/Button";
import Editor from "../../components/form/Editor";
import MultipleFiles from "../../components/form/MultipleFiles";
import PdfIcon from "../../components/icons/Pdf";
import InputSlug from "../../components/form/InputSlug";
import { Money } from "v-money";
export default {
  components: {
    BreadCrumb,
    PdfIcon,
    MultipleFiles,
    Money,
    Editor,
    Statuses,
    Ubigeo,
    vueDropzone: vue2Dropzone,
    ImageForm,
    Input,
    Button,
    FinancialEntities,
    Advisors,
    Features,
    InputSlug,
  },
  props: {
    elementParent: Object,
    imagesUrl: String,
    filesUrl: String,
    messageOrder: String,
    routeStore: String,
    routeReturn: String,
    routeAdvisorsGetAll: String,
    routeFeaturesGetAll: String,
    routeFinancialGetAll: String,
    routeStatusesGetAll: String,
    routeFinancialCreate: String,
    routeStatusesCreate: String,
    routeFeaturesCreate: String,
    routeAdvisorsCreate: String,
    routeDepartmentsGet: String,
    routeDistrictsGet: String,
    routeProvincesGet: String,
  },
  data() {
    return {
      element: {},
      moneyLocal: {
        decimal: ",",
        thousands: ".",
        prefix: "S/ ",
        //suffix: ' #',
        precision: 2,
        masked: false,
      },
      moneyForeign: {
        decimal: ",",
        thousands: ".",
        prefix: "$ ",
        //suffix: ' #',
        precision: 2,
        masked: false,
      },
      requestServer: false,
      dropzoneOptions: {
        url: "/",
        maxFiles: 1,
        acceptedFiles: "image/png,image/jpeg,image/jpg,image/svg+xml",
        autoProcessQueue: false,
        thumbnailWidth: 150,
        addRemoveLinks: true,
        dictRemoveFile: "Remover",
      },
      dropzoneOptionsBrochure: {
        url: "/",
        maxFiles: 1,
        acceptedFiles: "application/pdf",
        autoProcessQueue: false,
        thumbnailWidth: 150,
        addRemoveLinks: true,
        dictRemoveFile: "Remover",
      },
      dropzoneOptionsMultiple: {
        url: "/",
        maxFiles: 4,
        acceptedFiles: "image/png,image/jpeg,image/jpg,image/svg+xml",
        autoProcessQueue: false,
        thumbnailWidth: 150,
        addRemoveLinks: true,
        dictRemoveFile: "Remover",
      },
      errors: {},
    };
  },
  methods: {
    submit() {
      this.requestServer = true;
      const fd = new FormData();
      if (this.$refs.ref_images.dropzone.files.length) {
        this.$refs.ref_images.dropzone.files.forEach((el, i) => {
          fd.append("images" + i, el);
        });
        fd.append("images_count", this.$refs.ref_images.dropzone.files.length);
      }
      if (this.element.name_en) {
        fd.append("name_en", this.element.name_en);
      }
      if (this.element.name_es) {
        fd.append("name_es", this.element.name_es);
      }
      if (this.element.slug_en) {
        fd.append("slug_en", this.element.slug_en);
      }
      if (this.element.slug_es) {
        fd.append("slug_es", this.element.slug_es);
      }
      if (this.element.banner_en) {
        fd.append("banner_en", this.element.banner_en);
      }
      if (this.element.banner_es) {
        fd.append("banner_es", this.element.banner_es);
      }
      if (this.$refs.ref_logo.dropzone.files[0]) {
        fd.append("logo", this.$refs.ref_logo.dropzone.files[0]);
      }
      if (this.element.project_status_id) {
        fd.append("project_status_id", this.element.project_status_id);
      }
      if (this.element.description_en) {
        fd.append("description_en", this.element.description_en);
      }
      if (this.element.description_es) {
        fd.append("description_es", this.element.description_es);
      }
      if (this.element.location) {
        fd.append("location", this.element.location);
      }
      if (this.element.rooms_en) {
        fd.append("rooms_en", this.element.rooms_en);
      }
      if (this.element.rooms_es) {
        fd.append("rooms_es", this.element.rooms_es);
      }
      if (this.element.footage_en) {
        fd.append("footage_en", this.element.footage_en);
      }
      if (this.element.footage_es) {
        fd.append("footage_es", this.element.footage_es);
      }
      if (this.$refs.ref_brochure.dropzone.files[0]) {
        fd.append("brochure", this.$refs.ref_brochure.dropzone.files[0]);
      }
      if (this.element.text_place_en) {
        fd.append("text_place_en", this.element.text_place_en);
      }
      if (this.element.text_place_es) {
        fd.append("text_place_es", this.element.text_place_es);
      }
      if (this.element.url_google_maps) {
        fd.append("url_google_maps", this.element.url_google_maps);
      }
      if (this.element.url_waze) {
        fd.append("url_waze", this.element.url_waze);
      }
      if (this.element.map_indication_en) {
        fd.append("map_indication_en", this.element.map_indication_en);
      }
      if (this.element.map_indication_es) {
        fd.append("map_indication_es", this.element.map_indication_es);
      }
      if (this.element.sales_room_en) {
        fd.append("sales_room_en", this.element.sales_room_en);
      }
      if (this.element.sales_room_es) {
        fd.append("sales_room_es", this.element.sales_room_es);
      }
      if (this.element.schedule_attention_en) {
        fd.append("schedule_attention_en", this.element.schedule_attention_en);
      }
      if (this.element.schedule_attention_es) {
        fd.append("schedule_attention_es", this.element.schedule_attention_es);
      }
      if (this.element.map_indications_en) {
        fd.append("map_indications_en", this.element.map_indications_en);
      }
      if (this.element.map_indications_es) {
        fd.append("map_indications_es", this.element.map_indications_es);
      }
      if (this.element.price_total) {
        fd.append("price_total", this.element.price_total);
      }
      if (this.element.price_total_foreign) {
        fd.append("price_total_foreign", this.element.price_total_foreign);
      }
      if (this.element.price) {
        fd.append("price", this.element.price);
      }
      if (this.element.latitude) {
        fd.append("latitude", this.element.latitude);
      }
      if (this.element.longitude) {
        fd.append("longitude", this.element.longitude);
      }
      if (this.element.district) {
        fd.append("district", this.element.district);
      }
      if (this.element.department) {
        fd.append("department", this.element.department);
      }
      if (this.element.province) {
        fd.append("province", this.element.province);
      }
      if (this.element.advisors) {
        fd.append("advisors", JSON.stringify(this.element.advisors));
      }
      if (this.element.features) {
        fd.append("features", JSON.stringify(this.element.features));
      }
      if (this.element.financial_entities) {
        fd.append(
          "financial_entities",
          JSON.stringify(this.element.financial_entities)
        );
      }
      axios
        .post(this.routeStore, fd)
        .then((response) => {
          this.requestServer = false;
          document.location.href = response.data.route;
        })
        .catch((error) => {
          this.requestServer = false;
          if (error.response.status === 422) {
            this.errors = error.response.data.errors || {};
            return;
          }
          document.location.href = error.response.data.route;
        });
    },
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