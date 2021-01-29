<template>
  <div>
    <form @submit.prevent="submit">
      <div class="header pb-6">
        <div class="container-fluid">
          <div class="header-body">
            <div class="row align-items-center pt-0 pt-md-2 pb-4">
              <div class="col-6 col-md-7">
                <BreadCrumb
                  title="Crear Proyecto"
                  parent
                  active="Proyectos"
                ></BreadCrumb>
              </div>
              <div class="col-6 col-md text-right">
                <span
                  v-if="
                    Object.keys(errors).length === 0 &&
                    errors.constructor === Object
                  "
                ></span>
                <span v-else class="d-block text-danger mb-2"
                  >Algunos campos estan incorrectos</span
                >
                <Button
                  :text="'Guardar'"
                  :classes="['btn-inverse-primary', 'mr-2']"
                  :request-server="requestServer"
                ></Button>
                <a type="button" class="btn btn-secondary" :href="routeReturn"
                  >Cancelar</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid mt--6">
        <div class="row mb-3">
          <div class="col-12 text-right">
            <b-form-checkbox
              size="lg"
              v-model="element.active"
              name="check-button"
              switch
            >
              Mostrar Proyecto en la Web
            </b-form-checkbox>
          </div>
        </div>
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
                  <div class="col-12 col-lg-6 vue-dropzone-dark">
                    <div class="form-group">
                      <label class="font-weight-bold" for="image">Logo:</label>
                      <vue-dropzone
                        ref="ref_logo"
                        @vdropzone-file-added="
                          $validateImageDropzone(
                            $event,
                            $refs.ref_logo.dropzone,
                            1,
                            51200,
                            '50kb'
                          )
                        "
                        id="image"
                        class="text-center"
                        :options="dropzoneOptions"
                        :duplicateCheck="true"
                        :useCustomSlot="true"
                      >
                        <div class="dropzone-custom-content">
                          <h5 class="dropzone-custom-title text-primary">
                            Suelte los archivos aquí o haga click para
                            cargarlos.
                          </h5>
                        </div>
                      </vue-dropzone>

                      <label
                        v-if="errors && errors.logo"
                        class="text-danger text-sm d-block mt-2"
                        for="logo"
                        >{{ errors.logo[0] }}</label
                      >
                    </div>
                  </div>
                  <div class="col-12 col-lg-6 mb-4 mb-lg-0">
                    <MultipleFiles
                      desc="La primera imagen se utilizará como cover del Proyecto"
                      fieldName="images"
                      :errors="errors"
                      :messageOrder="messageOrder"
                      :files.sync="element.files"
                      :imagesUrl="imagesUrl"
                      folder="projects"
                    />
                  </div>
                  <div class="col-12">
                    <Statuses
                      :selected.sync="element.project_status_id"
                      :errors="errors"
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
                      label="Dormitorios"
                      variable="rooms"
                      :errors="errors"
                      :valueEn.sync="element.rooms_en"
                      :valueEs.sync="element.rooms_es"
                      :valueEnParent="element.rooms_en"
                      :valueEsParent="element.rooms_es">
                      <small
                        class="form-text"
                        style="opacity: 0.7"
                        >Ingrese un resumen de los Dormitorios con lo que cuenta el Proyecto, por ejemplo "1 a 3 Dormitorios".</small>
                    </Input>
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
                    > 
                      <small
                        class="form-text"
                        style="opacity: 0.7"
                        >Ingrese un resumen del metraje con el que cuenta el Proyecto, por ejemplo "Desde 52 a 137m2".</small
                      >
                    </Input>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <label class="font-weight-bold" for="brochure"
                        >Brochure:</label
                      >
                      <vue-dropzone
                        ref="ref_brochure"
                        @vdropzone-file-added="
                          $validatePDFDropzone(
                            $event,
                            $refs.ref_brochure.dropzone,
                            1,
                            512000,
                            '500kb'
                          )
                        "
                        id="brochure"
                        class="text-center"
                        :options="dropzoneOptionsBrochure"
                        :duplicateCheck="true"
                        :useCustomSlot="true"
                      >
                        <div class="dropzone-custom-content">
                          <h5 class="dropzone-custom-title text-primary">
                            Suelte los archivos aquí o haga click para
                            cargarlos.
                          </h5>
                        </div>
                      </vue-dropzone>

                      <label
                        v-if="errors && errors.brochure"
                        class="text-danger text-sm d-block mt-2"
                        for="brochure"
                        >{{ errors.brochure[0] }}</label
                      >
                    </div>
                  </div>
                  <div class="col-12">
                    <Advisors
                      :errors="errors"
                      :selected.sync="element.advisors"
                      :images-url="imagesUrl"
                      :route-create="routeAdvisorsCreate"
                      :route-get-all="routeAdvisorsGetAll"
                    />
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <label class="font-weight-bold">Formulario Cita Online:</label>
                      <p>
                        Seleccione si el Proyecto cuanto con formulario de
                        Cita Online
                      </p>
                      <b-form-radio-group
                        v-model="element.form_videocall"
                        :options="elementsQuotation"
                        text-field="text"
                        value-field="value"
                        size="lg"
                        name="radiosQuotation"
                        plain
                        stacked
                      />
                    </div>
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
                      <label class="font-weight-bold" for="price_total"
                        >Precio Soles Desde:</label
                      >
                      <money
                        class="form-control"
                        v-model="element.price_total"
                        v-bind="moneyLocal"
                      ></money>
                      <label
                        v-if="errors && errors.price_total"
                        class="text-danger text-sm d-block mt-2"
                        for="price_total"
                        >{{ errors.price_total[0] }}</label
                      >
                    </div>
                  </div>
                  <div class="col-12 col-lg-6">
                    <div class="form-group">
                      <label class="font-weight-bold" for="price_total_foreign"
                        >Precio Dólares Desde:</label
                      >
                      <money
                        class="form-control"
                        v-model="element.price_total_foreign"
                        v-bind="moneyForeign"
                      ></money>
                      <label
                        v-if="errors && errors.price_total_foreign"
                        class="text-danger text-sm d-block mt-2"
                        for="price_total_foreign"
                        >{{ errors.price_total_foreign[0] }}</label
                      >
                    </div>
                  </div>
                  <!--<div class="col-12">
                    <div class="form-group">
                      <label class="font-weight-bold" for="price"
                        >Precio Reserva:</label
                      >
                      <money
                        class="form-control form-control-lg"
                        v-model="element.price"
                        v-bind="moneyLocal"
                      ></money>
                      <label
                        v-if="errors && errors.price"
                        class="text-danger text-sm d-block mt-2"
                        for="price"
                        >{{ errors.price[0] }}</label
                      >
                    </div>
                  </div>-->
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
                    <div class="form-group">
                      <label class="font-weight-bold" for="banner"
                        >Banner</label
                      >
                      <vue-dropzone
                        ref="ref_banner"
                        @vdropzone-file-added="
                          $validateImageDropzone(
                            $event,
                            $refs.ref_banner.dropzone,
                            1,
                            512000,
                            '500kb'
                          )
                        "
                        id="image"
                        class="text-center"
                        :options="dropzoneOptions"
                        :duplicateCheck="true"
                        :useCustomSlot="true"
                      >
                        <div class="dropzone-custom-content">
                          <h5 class="dropzone-custom-title text-primary">
                            Suelte los archivos aquí o haga click para
                            cargarlos.
                          </h5>
                        </div>
                      </vue-dropzone>

                      <label
                        v-if="errors && errors.banner"
                        class="text-danger text-sm d-block mt-2"
                        for="banner"
                        >{{ errors.banner[0] }}</label
                      >
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <label class="font-weight-bold" for="url_video"
                        >URL Video Youtube (Opcional)</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        v-model="element.url_video"
                        id="url_video"
                      />
                      <small
                        id="url_video"
                        class="form-text"
                        style="opacity: 0.7"
                        >El formato de la URL debe ser
                        "https://www.youtube.com/watch?v=N1bWwEfIDP0".</small
                      >
                      <label
                        v-if="errors && errors.url_video"
                        class="mt-2 text-danger text-sm"
                        for="url_video"
                        >{{ errors.url_video[0] }}</label
                      >
                    </div>
                  </div>
                  <div class="col-12">
                    <Features
                      :errors="errors"
                      :selected.sync="element.features"
                      :images-url="imagesUrl"
                      :route-create="routeFeaturesCreate"
                      :route-get-all="routeFeaturesGetAll"
                    />
                  </div>
                  <div class="col-12">
                    <FinancialEntities
                      :errors="errors"
                      :selected.sync="element.financial_entities"
                      :images-url="imagesUrl"
                      :route-create="routeFinancialCreate"
                      :route-get-all="routeFinancialGetAll"
                    />
                  </div>
                  <div class="col-12">
                    <Bonds
                      :errors="errors"
                      :selected.sync="element.bonds"
                      :images-url="imagesUrl"
                      :route-create="routeBondsCreate"
                      :route-get-all="routeBondsGetAll"
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
        <div class="row mb-4">
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
                      <label class="font-weight-bold" for="location"
                        >Dirección</label
                      >
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
                        >{{ errors.location[0] }}</label
                      >
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
                      <label class="font-weight-bold" for="url_waze"
                        >URL Waze (Opcional)</label
                      >
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
                        >{{ errors.url_waze[0] }}</label
                      >
                    </div>
                  </div>
                  <div class="col-12 col-lg-6">
                    <div class="form-group">
                      <label class="font-weight-bold" for="url_google_maps"
                        >URL Google Maps (Opcional)</label
                      >
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
                        >{{ errors.url_google_maps[0] }}</label
                      >
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <label class="font-weight-bold" for="iframe_map"
                        >Iframe Google Maps</label
                      >
                      <textarea
                        class="form-control"
                        v-model="element.iframe_map"
                        id="iframe_map"
                        cols="30"
                        rows="5"
                      ></textarea>
                      <div class="mt-2" style="opacity: 0.75">
                        <a style="cursor: pointer" @click.prevent="info = !info"
                          ><jam-info
                            height="14px"
                            class="current-color"
                            width="14px"
                          ></jam-info>
                          Más Información
                        </a>
                      </div>
                      <div class="mt-2" v-show="info">
                        <div class="mb-2">
                          Ir a Google Maps, buscar el proyecto que desee,
                          seleccionar "Compartir -> Insertar Mapa" y darle click
                          a "Copiar HTML"
                        </div>
                        <img src="/files/img/info/iframe.jpg" alt="" />
                      </div>
                      <label
                        v-if="errors && errors.iframe_map"
                        class="mt-2 text-danger text-sm"
                        for="iframe_map"
                        >{{ errors.iframe_map[0] }}</label
                      >
                    </div>
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
                  <div class="col-12">
                    <div class="form-group">
                      <label class="font-weight-bold" for="excerpt_quotation"
                        >Resumen del Proyecto</label
                      >
                      <quill-Editor
                        @keydown.enter.prevent
                        v-model="element.excerpt_quotation"
                        :options="editorOptions"
                        class="ql-height-5"
                        ref="ref_excerpt_quotation"
                      ></quill-Editor>
                      <label
                        v-if="errors && errors.excerpt_quotation"
                        class="mt-2 text-danger text-sm"
                        for="excerpt_quotation"
                        >{{ errors.excerpt_quotation[0] }}</label
                      >
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <label class="font-weight-bold" for="price_parking"
                        >Precio Estacionamiento</label
                      >
                      <textarea
                        class="form-control"
                        v-model="element.price_parking"
                        id="price_parking"
                        cols="30"
                        rows="3"
                      ></textarea>
                      <label
                        v-if="errors && errors.price_parking"
                        class="mt-2 text-danger text-sm"
                        for="price_parking"
                        >{{ errors.price_parking[0] }}</label
                      >
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <label class="font-weight-bold" for="condition_quotation"
                        >Condiciones de la Proforma</label
                      >
                      <quill-Editor
                        @keydown.enter.prevent
                        v-model="element.condition_quotation"
                        :options="editorOptions"
                        class="ql-height-5"
                        ref="ref_condition_quotation"
                      ></quill-Editor>
                      <label
                        v-if="errors && errors.condition_quotation"
                        class="mt-2 text-danger text-sm"
                        for="condition_quotation"
                        >{{ errors.condition_quotation[0] }}</label
                      >
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <label class="font-weight-bold" for="commentary_quotation"
                        >Comentario que incluye el inmueble</label
                      >
                      <textarea
                        class="form-control"
                        v-model="element.commentary_quotation"
                        id="commentary_quotation"
                        cols="30"
                        rows="1"
                      ></textarea>
                      <label
                        v-if="errors && errors.commentary_quotation"
                        class="mt-2 text-danger text-sm"
                        for="commentary_quotation"
                        >{{ errors.commentary_quotation[0] }}</label
                      >
                    </div>
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
                <ProjectsRelated
                  :errors="errors"
                  :selected.sync="element.projects_related"
                  :images-url="imagesUrl"
                  :route-get-all="routeProjectsGetAll"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import { quillEditor } from "vue-quill-editor";
import vue2Dropzone from "vue2-dropzone";
import BreadCrumb from "../../components/BreadCrumb";
import ImageForm from "../../components/form/Image";
import FinancialEntities from "../../components/form/FinancialEntities";
import ProjectsRelated from "../../components/form/ProjectsRelated";
import Advisors from "../../components/form/Advisors";
import Statuses from "../../components/form/Statuses";
import Features from "../../components/form/Features";
import Bonds from "../../components/form/Bonds";
import Ubigeo from "../../components/form/Ubigeo";
import Input from "../../components/form/Input";
import Button from "../../components/Button";
import Editor from "../../components/form/Editor";
import InputSlug from "../../components/form/InputSlug";
import MultipleFiles from "../../components/form/MultipleFiles";
import { Money } from "v-money";
export default {
  components: {
    BreadCrumb,
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
    Bonds,
    ProjectsRelated,
    quillEditor,
  },
  props: {
    imagesUrl: String,
    routeStore: String,
    routeReturn: String,
    messageOrder: String,
    routeAdvisorsGetAll: String,
    routeFeaturesGetAll: String,
    routeFinancialGetAll: String,
    routeProjectsGetAll: String,
    routeStatusesGetAll: String,
    routeBondsGetAll: String,
    routeFinancialCreate: String,
    routeStatusesCreate: String,
    routeBondsCreate: String,
    routeFeaturesCreate: String,
    routeAdvisorsCreate: String,
    routeDepartmentsGet: String,
    routeDistrictsGet: String,
    routeProvincesGet: String,
  },
  data() {
    return {
      
      editorOptions: {
        placeholder: "",
        modules: {
          toolbar: {
            /*handlers: {
              image: function (value) {
                document.getElementById("id_content_images").click();
              },
            },*/
            container: [
              ["bold", "italic", "underline", "strike"],
              ["blockquote"],
              [{ header: 1 }, { header: 2 }],
              [{ list: "ordered" }, { list: "bullet" }],
              [{ indent: "-1" }, { indent: "+1" }],
              //[{ size: [false] }],
              [{ header: [1, 2, 3, 4, 5, false] }],
              //[{ font: [false] }],
              [{ color: [] }, { background: [] }],
              [{ align: [] }],
              //['clean'],
              ["link"],
            ],
          },
        },
      },
      element: {
        active: true,
        bonds: [],
        form_videocall: true,
        projects_related : []
      },
      elementsQuotation: [
        { text: "Sí", value: true },
        { text: "No", value: false },
      ],
      moneyLocal: {
        decimal: ",",
        thousands: ".",
        prefix: "S/ ",
        //suffix: ' #',
        precision: 2,
        masked: false,
      },
      info: false,
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
      if (this.element.files && this.element.files.length) {
        this.element.files.forEach((el, i) => {
          fd.append("images" + i, el);
        });
        fd.append("images_count", this.element.files.length);
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
      if (this.element.url_video) {
        fd.append("url_video", this.element.url_video);
      }
      if (this.$refs.ref_brochure.dropzone.files[0]) {
        fd.append("brochure", this.$refs.ref_brochure.dropzone.files[0]);
      }
      if (this.$refs.ref_banner.dropzone.files[0]) {
        fd.append("banner", this.$refs.ref_banner.dropzone.files[0]);
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
      if (this.element.active == true) {
        fd.append("active", 1);
      } else {
        fd.append("active", 0);
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
      if (this.element.iframe_map) {
        fd.append("iframe_map", this.element.iframe_map);
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
      if (this.element.bonds.length) {
        fd.append("bonds", JSON.stringify(this.element.bonds));
      }
      if (this.element.projects_related.length) {
        fd.append("projects_related", JSON.stringify(this.element.projects_related));
      }
      if (this.element.price_parking) {
        fd.append("price_parking", this.element.price_parking);
      }
      if (this.element.commentary_quotation) {
        fd.append("commentary_quotation", this.element.commentary_quotation);
      }
      if (this.element.condition_quotation) {
        fd.append("condition_quotation", this.element.condition_quotation);
      }
      if (this.element.excerpt_quotation) {
        fd.append("excerpt_quotation", this.element.excerpt_quotation);
      }
       if (this.element.form_videocall == true) {
        fd.append("form_videocall", 1);
      } else {
        fd.append("form_videocall", 0);
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
};
</script>