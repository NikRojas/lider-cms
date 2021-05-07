<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-3">
            <div class="col-6 col-md-7">
              <BreadCrumb
                :title="'Tipologías Proyecto ' + project.name_es"
                parent
                active="Proyectos"
              ></BreadCrumb>
            </div>
            <div class="col-6 col-md text-right">
              <a
                href="#"
                class="btn btn-icon btn-inverse-primary"
                @click.prevent="newEl"
              >
                <span class="btn-inner--icon">
                  <jam-layout class="current-color" />
                </span>
                <span class="btn-inner--text">Nueva Tipología</span>
              </a>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-6 col-md-5">
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
      <div class="row" v-if="loadingEls">
        <div class="col-12 col-lg-4 mb-4" v-for="i in 4" :key="i">
          <Skeleton height="300px" />
        </div>
      </div>
      <div v-else>
        <div v-if="elements.length">
          <p>{{ messageOrder }}</p>
          <draggable class="row" v-model="elements" @change="handleChange">
            <div
              class="col-12 col-lg-3 mb-4 text-center"
              v-for="(el, i) in elements"
              :key="i"
            >
              <div class="card">
                <div class="card-body">
                  <img
                    :src="imagesUrl + '/projects/tipologies/' + el.image"
                    alt
                    class="img-fluid"
                  />
                  <h3 class="mb-2 mt-3">
                    {{ el.name }}
                  </h3>
                  <div >
                    <span class="d-block font-weight-bold">Tipo de Inmueble: </span>
                    <div v-if="el.parent_type_department_id">
                      {{ el.parent_type_department_rel.name }} - {{ el.parent_type_department_rel.room}} Dormitorio(s)
                    </div>
                    <div v-else>
                      No Registrado
                    </div>
                  </div>

                  <div>
                    <span class="d-block font-weight-bold">Código SAP: </span>
                    <div v-if="el.sap_code">
                      {{ el.sap_code }}
                    </div>
                    <div>
                      No Registrado
                    </div>
                  </div>

                  <div>
                    <span class="d-block font-weight-bold">Precio: </span>
                    {{ el.price_format }}
                  </div>

                  <!--<div>
                    <span class="d-block font-weight-bold">Dormitorio: </span>
                    {{ el.room }}
                  </div>-->

                  <div>
                    <span class="d-block font-weight-bold">Metraje: </span>
                    {{ el.area }}
                  </div>
                  <div>
                    <span class="d-block font-weight-bold">Disponibilidad: </span>
                    <span
                      :class="el.available ? 'text-success' : 'text-danger'"
                      >{{ el.available ? "Disponible" : "No Disponible" }}</span
                    >
                  </div>

                  <div class="mt-4 text-center">
                    <button
                      @click="editEl(el.id)"
                      class="btn btn-inverse-info btn-sm"
                    >
                      Editar
                    </button>
                    <button
                      @click="deleteEl(el.id)"
                      class="btn btn-inverse-danger btn-sm"
                      v-if="el.can_delete"
                    >
                      Eliminar
                    </button>
                    <button
                      v-else
                      class="btn btn-sm btn-secondary"
                      v-b-tooltip.hover
                      title="No se puede eliminar debido a que está anidado en al menos una cotización de proyecto"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </draggable>
        </div>
        <NoData v-else />
      </div>
    </div>
    <b-modal
      v-model="modalCreateUpdate"
      @close="restoreEl"
      no-close-on-esc
      no-close-on-backdrop
      centered
      footer-class="border-0 pt-0"
      body-class="pt-0"
    >
      <template slot="modal-title">
        <div class="text-primary h2">{{ title }} Tipología</div>
      </template>
      <template slot="modal-header-close">
        <button type="button" class="btn p-0 bg-transparent" @click="restoreEl">
          <jam-close></jam-close>
        </button>
      </template>
      <div v-if="loadingGet">
        <SkeletonForm></SkeletonForm>
      </div>
      <div v-else>
        <form @submit.prevent="submit">
          <div class="row">
            <div class="col-12">
              <div class="form-group">
                <label class="font-weight-bold" for="image">Imagen:</label>
                 <small class="d-block mb-0 lh-1">Resolución recomendada: 1050x600px</small> 
                  <small class="d-block mb-0 lh-1">Formato: JPG</small> 
                  <small class="d-block mb-2 lh-1">Tamaño recomendado: No mayor a 300KB</small>
                <div class="row">
                  <div class="col text-center" v-if="element.image">
                    <img
                      :src="imagesUrl + '/projects/tipologies/' + element.image"
                      class="img-fluid"
                      :alt="element.title_es"
                    />
                  </div>
                  <div class="col">
                    <vue-dropzone
                      ref="ref_image"
                      class="text-center"
                      @vdropzone-file-added="
                        $validateImageDropzone(
                          $event,
                          $refs.ref_image.dropzone,
                          1,
                          310000,
                          '300kb'
                        )
                      "
                      id="image"
                      :options="dropzoneOptions"
                      :duplicateCheck="true"
                      :useCustomSlot="true"
                    >
                      <div class="dropzone-custom-content">
                        <h5 class="dropzone-custom-title text-primary">
                          Suelte los archivos aquí o haga click para cargarlos.
                        </h5>
                      </div>
                    </vue-dropzone>
                  </div>
                </div>

                <label
                  v-if="errors && errors.image"
                  class="text-danger text-sm d-block mt-2"
                  for="image"
                  >{{ errors.image[0] }}</label
                >
              </div>
            </div>
            

            <div class="col-12">
              <div class="form-group">
                <label class="font-weight-bold" for="name">Nombre</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="element.name"
                  id="name"
                />
                <label
                  v-if="errors && errors.name"
                  class="mt-2 text-danger text-sm"
                  for="name"
                  >{{ errors.name[0] }}</label
                >
              </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                <label class="font-weight-bold" for="parent_type_department_id">Tipo Inmueble</label>
                <select class="form-control" v-model="element.parent_type_department_id" id="parent_type_department_id">
                  <option value="">Seleccionar un Tipo de Inmueble</option>
                  <option :value="el.id" v-for="el in types" :key="el.slug">
                    {{ el.name }} - {{ el.room}} Dormitorio(s)
                  </option>
                </select>
                <label
                  v-if="errors && errors.parent_type_department_id"
                  class="mt-2 text-danger text-sm"
                  for="parent_type_department_id"
                  >{{ errors.parent_type_department_id[0] }}</label
                >
              </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                <label class="font-weight-bold" for="sap_code">Código SAP</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="element.sap_code"
                  id="sap_code"
                />
                <label
                  v-if="errors && errors.sap_code"
                  class="mt-2 text-danger text-sm"
                  for="sap_code"
                  >{{ errors.sap_code[0] }}</label
                >
              </div>
            </div>

            <!--<div class="col-12 col-lg-6">
              <div class="form-group">
                <label class="font-weight-bold" for="room">Dormitorios</label>
                <input
                  type="number"
                  class="form-control"
                  v-model="element.room"
                  id="room"
                />
                <small id="" class="form-text" style="opacity: 0.7"
                  >Debe ingresar un número entero "3".</small
                >
                <label
                  v-if="errors && errors.room"
                  class="mt-2 text-danger text-sm"
                  for="room"
                  >{{ errors.room[0] }}</label
                >
              </div>
            </div>-->
            <div class="col-12">
              <div class="form-group">
                <label class="font-weight-bold" for="area">Área</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="element.area"
                  id="area"
                />
                <small id="" class="form-text" style="opacity: 0.7"
                  >Debe ingresar un número entero o decimal "22.55".</small
                >
                <label
                  v-if="errors && errors.area"
                  class="mt-2 text-danger text-sm"
                  for="area"
                  >{{ errors.area[0] }}</label
                >
              </div>
            </div>
            <div class="col-12 col-lg-6">
              <div class="form-group">
                <p class="font-weight-bold mb-0">Elige el tipo de moneda</p>
                <b-form-radio-group
                  id="radio-group-1"
                  v-model="element.type_currency"
                  name="radios"
                  plain
                  :options="options"
                ></b-form-radio-group>
              </div>
            </div>
            <div class="col-12 col-lg-6" v-if="modalCreateUpdate">
              <div class="form-group">
                <label class="font-weight-bold" for="price_total"
                  >Precio:</label
                >
                <money
                  class="form-control"
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
            </div>

            <div class="col-12">
              <div class="form-group">
                <label class="font-weight-bold">Disponibilidad:</label>
                <b-form-radio-group
                  v-model="element.available"
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
        </form>
      </div>
      <template v-slot:modal-footer="{ ok }">
        <Button
          :classes="['btn-inverse-primary']"
          :text="title == 'Nueva' ? 'Crear' : 'Actualizar'"
          @click="submit"
          :request-server="requestSubmit"
        ></Button>
        <button type="button" class="btn btn-secondary" @click="restoreEl">
          Cancelar
        </button>
      </template>
    </b-modal>

    <destroy
      element="tipología"
      @cancel="restoreEl"
      :open="modalDestroy"
      @submit="destroyConfirm"
      :loading-get="loadingGet"
      :loading-submit="requestSubmit"
    ></destroy>
  </div>
</template>
<script>
import SkeletonForm from "../../../components/skeleton/form";
import vue2Dropzone from "vue2-dropzone";
import BreadCrumb from "../../../components/BreadCrumb";
import Button from "../../../components/Button";
import Input from "../../../components/form/Input";
import { Skeleton } from "vue-loading-skeleton";
import NoData from "../../../components/NoData";
import Destroy from "../../../components/modals/Destroy";
import draggable from "vuedraggable";
import { Money } from "v-money";
export default {
  props: {
    elementParent: Object,
    messageOrder: String,
    imagesUrl: String,
    routeReturn: String,
    routeGetAll: String,
    routeOrder: String,
    route: String,
    types: Array,
  },
  components: {
    Money,
    SkeletonForm,
    vueDropzone: vue2Dropzone,
    Button,
    Input,
    BreadCrumb,
    NoData,
    Skeleton,
    Destroy,
    draggable,
  },
  data() {
    return {
      options: [
        { text: "Soles", value: true },
        { text: "Dólares", value: false },
      ],
      moneyLocal: {
        decimal: ",",
        thousands: ".",
        //prefix: "S/ ",
        //suffix: ' #',
        precision: 2,
        masked: false,
      },
      elementsQuotation: [
        { text: "Disponible", value: true },
        { text: "No Disponible", value: false },
      ],
      errors: {},
      loadingEls: false,
      elements: {},
      project: {},
      element: {
        available: true,
        type_currency: true,
        parent_type_department_id: ''
      },
      loadingGet: false,
      requestSubmit: false,
      modalCreateUpdate: false,
      modalDestroy: false,
      loadingGet: false,
      loadingEls: false,
      title: "",
      dropzoneOptions: {
        url: "/",
        maxFiles: 1,
        acceptedFiles: "image/png,image/jpeg,image/jpg,image/svg+xml",
        autoProcessQueue: false,
        thumbnailWidth: 150,
        addRemoveLinks: true,
        dictRemoveFile: "Remover",
      },
    };
  },
  methods: {
    handleChange(event) {
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
    submit() {
      this.requestSubmit = true;
      let url;
      let method;
      const fd = new FormData();
      if (this.title == "Nueva") {
        url = this.route;
        method = "post";
      } else {
        url = this.route + "/" + this.element.id;
        method = "post";
        fd.append("_method", "put");
        fd.append("id", this.element.id);
      }
      if (this.element.name) {
        fd.append("name", this.element.name);
      }
      if (this.element.available == true) {
        fd.append("available", 1);
      } else {
        fd.append("available", 0);
      }
      if (this.element.room) {
        fd.append("room", this.element.room);
      }
      if (this.element.price) {
        fd.append("price", this.element.price);
      }
      if (this.element.area) {
        fd.append("area", this.element.area);
      }
      if (this.element.parent_type_department_id) {
        fd.append("parent_type_department_id", this.element.parent_type_department_id);
      }
      if (this.element.sap_code) {
        fd.append("sap_code", this.element.sap_code);
      }
      if (this.$refs.ref_image.dropzone.files[0]) {
        fd.append("image", this.$refs.ref_image.dropzone.files[0]);
      }
      fd.append("type_currency", this.element.type_currency ? 1 : 0);
      fd.append("project_id", this.project.id);
      fd.append("slug_es", this.project.slug_es);
      axios({
        method: method,
        url: url,
        data: fd,
      })
        .then((response) => {
          this.requestSubmit = false;
          document.location.href = response.data.route;
        })
        .catch((error) => {
          this.requestSubmit = false;
          if (error.response.status === 422) {
            this.errors = error.response.data.errors || {};
            return;
          }
          document.location.href = error.response.data.route;
        });
    },
    deleteEl(id) {
      this.modalDestroy = true;
      this.getEl(id);
    },
    restore() {
      this.element = {
        image: "",
        available: true,
        parent_type_department_id: '',
        //price: 0,
        type_currency: true,
      };
      this.$nextTick(() => {
        this.element.price = 0;
      })
      this.modalCreateUpdate = this.requestSubmit = this.modalDestroy = false;
      this.getEls();
      this.errors = {};
    },
    restoreEl() {
      this.element = {
        image: "",
        available: true,
        parent_type_department_id: '',
        //price: 0,
        type_currency: true,
      };
      this.$nextTick(() => {
        this.element.price = 0;
      })
      this.modalCreateUpdate = this.modalDestroy = this.requestSubmit = false;
      //this.getEls();
      this.errors = {};
    },
    newEl() {
      this.title = "Nueva";
      this.modalCreateUpdate = true;
    },
    editEl(id) {
      this.title = "Actualizar";
      this.modalCreateUpdate = true;
      this.getEl(id);
    },
    destroyConfirm() {
      this.requestSubmit = true;
      axios
        .delete(this.route + "/" + this.element.id)
        .then((response) => {
          this.requestSubmit = false;
          this.restore();
          Swal.fire({
            title: response.data.title,
            text: response.data.message,
            type: "success",
            confirmButtonText: "OK",
            buttonsStyling: false,
            customClass: {
              confirmButton: "btn btn-inverse-primary",
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
              confirmButton: "btn btn-inverse-primary",
            },
          });
          this.restoreEl();
        });
    },
    getEls() {
      this.loadingEls = true;
      axios
        .get(this.routeGetAll, {
          params: {
            project_id: this.project.id,
          },
        })
        .then((response) => {
          this.elements = response.data;
          this.loadingEls = false;
        })
        .catch((error) => {});
    },
    getEl(id) {
      this.loadingGet = true;
      axios
        .get(this.route + "/json/get/" + id)
        .then((response) => {
          this.element = response.data;
          this.loadingGet = false;
        })
        .catch((error) => {});
    },
  },
  created() {
    this.getEls();
  },
  watch: {
    elementParent: {
      immediate: true,
      handler: function (newValue) {
        this.project = newValue;
      },
    },
  },
};
</script>