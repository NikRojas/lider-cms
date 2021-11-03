<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-3">
            <div class="col-6 col-md-7">
              <BreadCrumb
                :title="'Pisos de Depósitos Proyecto ' + project.name_es"
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
                  <jam-key class="current-color" />
                </span>
                <span class="btn-inner--text">Nuevo Piso Depósito</span>
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
      <DataTableDraggable
        :object.sync="elements"
        :buttonUpdate="true"
        :buttonDelete="true"
        :buttonDetail="false"
        @drag="handleChange"
        @edit="editEl"
        @delete="deleteEl"
        :message-order="messageOrder"
      ></DataTableDraggable>
    </div>
    <b-modal
      v-model="modalCreateUpdate"
      @close="restoreEl"
      no-close-on-esc
      no-close-on-backdrop
      centered
      size="lg"
      footer-class="border-0 pt-0"
      body-class="pt-0"
    >
      <template slot="modal-title">
        <div class="text-primary h2">{{ title }} Piso de Depósitos</div>
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
                <label class="font-weight-bold d-block" for="name"
                  >Nombre</label
                >
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
                <label class="font-weight-bold" for="banner">Imagen</label>
                <small class="d-block mb-0 lh-1"
                  >Resolución recomendada: 1100x680px</small
                >
                <small class="d-block mb-0 lh-1">Formato: JPG</small>
                <small class="d-block mb-2 lh-1"
                  >Tamaño recomendado: No mayor a 100KB</small
                >
                <div class="row">
                  <div class="col text-center" v-if="element.image">
                    <img
                      :src="imagesUrl + '/projects/floors/' +element.image"
                      class="img-fluid"
                    />
                  </div>
                  <div class="col">
                    <vue-dropzone
                      ref="ref_image"
                      @vdropzone-file-added="
                        $validateImageDropzone(
                          $event,
                          $refs.ref_image.dropzone,
                          1,
                          110000,
                          '100kb'
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
              <ParkingWarehouse label="Depósitos" :selected.sync="element.estates" :selectedParent="element.estates" :elements="estates.warehouse"/>
              <label
                  v-if="errors && errors.estates"
                  class="mt-2 text-danger text-sm"
                  for="estates"
                  >{{ errors.estates[0] }}</label
                >
            </div>
          </div>
        </form>
      </div>
      <template v-slot:modal-footer="{ ok }">
        <Button
          :classes="['btn-inverse-primary']"
          :text="title == 'Nuevo' ? 'Crear' : 'Actualizar'"
          @click="submit"
          :request-server="requestSubmit"
        ></Button>
        <button type="button" class="btn btn-secondary" @click="restoreEl">
          Cancelar
        </button>
      </template>
    </b-modal>
    <destroy
      element="piso"
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
import ParkingWarehouse from "../../../components/form/ParkingWarehouse";
import { Skeleton } from "vue-loading-skeleton";
import NoData from "../../../components/NoData";
import Destroy from "../../../components/modals/Destroy";
import DataTableDraggable from "../../../components/DataTableDraggable";
export default {
  props: {
    elementParent: Object,
    messageOrder: String,
    imagesUrl: String,
    routeReturn: String,
    routeGetAll: String,
    routeOrder: String,
    route: String,
    estates: Object,
  },
  components: {
    SkeletonForm,
    BreadCrumb,
    Button,
    Input,
    Skeleton,
    NoData,
    Destroy,
    DataTableDraggable,
    vueDropzone: vue2Dropzone,
    ParkingWarehouse
  },
  data() {
    return {
      project: {},
      elements: {},
      modalCreateUpdate: false,
      modalDestroy: false,
      title: "",
      element: {
        estates: []
      },
      loadingGet: false,
      errors: {},
      requestSubmit: false,
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
    submit() {
      this.requestSubmit = true;
      let url;
      let method;
      const fd = new FormData();
      if (this.title == "Nuevo") {
        url = this.route;
        method = "post";
      } else {
        url = this.route + "/" + this.element.id;
        method = "post";
        fd.append("_method", "put");
        fd.append("id",this.element.id);
      }
      if (this.element.name) {
        fd.append("name", this.element.name);
      }
      if (this.$refs.ref_image.dropzone.files[0]) {
        fd.append("image", this.$refs.ref_image.dropzone.files[0]);
      }
      if (this.element.estates.length) {
        fd.append("estates", JSON.stringify(this.element.estates));
      }
      fd.append("type","warehouse");
      fd.append("project_id", this.project.id);
      axios({
        method: method,
        url: url,
        data: fd,
      })
        .then((response) => {
          this.requestSubmit = false;
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
          this.restore();
        })
        .catch((error) => {
          this.requestSubmit = false;
          if (error.response.status === 422) {
            this.errors = error.response.data.errors || {};
            return;
          }
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
    restoreEl() {
      this.errors = {};
      this.modalCreateUpdate = this.modalDestroy = false;
      this.element = {
        estates: []
      };
    },
    restore(){
      (this.element = {
          estates: []
      }),
        (this.modalCreateUpdate = this.requestSubmit = this.modalDestroy = false);
      this.getEls();
      this.errors = {};
    },
    handleChange(elements) {
      axios
        .put(
          this.routeOrder,
          elements
        )
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
    deleteEl(id) {
      this.modalDestroy = true;
      this.getEl(id);
    },
    destroyConfirm(){
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
    getEl(id){
      this.loadingGet = true;
      axios
        .get(this.route + "/json/get/" + id)
        .then((response) => {
          this.element = response.data;
          this.loadingGet = false;
        })
        .catch((error) => {});
    },
    editEl(id) {
      this.title = "Actualizar";
      this.modalCreateUpdate = true;
      this.getEl(id);
    },
    newEl() {
      this.title = "Nuevo";
      this.modalCreateUpdate = true;
    },
    getEls() {
      axios
        .get(this.routeGetAll, {
          params: {
            type: "warehouse",
            project_id: this.elementParent.id
          },
        })
        .then((response) => {
          this.elements = response.data;
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