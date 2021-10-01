<template>
  <div class="row mb-5">
    <div class="col-12 col-lg-3">
      <h2>Slider de Ubicación</h2>
    </div>
    <div class="col-12 col-lg-9">
      <div class="text-right mb-3">
        <a
          href="#"
          class="btn btn-icon btn-inverse-primary"
          @click.prevent="newEl"
        >
          <span class="btn-inner--icon">
            <jam-plus class="current-color"></jam-plus>
          </span>
          <span class="btn-inner--text">Nuevo Slide de Ubicación</span>
        </a>
      </div>
      <DataTableDraggable
        :object.sync="elements"
        :buttonUpdate="true"
        :buttonDelete="true"
        :buttonDetail="false"
        @drag="orderElements"
        @edit="editEl"
        @delete="deleteEl"
        :message-order="messageOrderLocation"
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
        <div class="text-primary h2">{{ title }} Slide de Ubicación</div>
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
                <!--<small class="d-block mb-0 lh-1"
                  >Resolución recomendada: 700x420px</small
                >-->
                <small class="d-block mb-0 lh-1">Formato: JPG</small>
                <small class="d-block mb-2 lh-1"
                  >Tamaño recomendado: No mayor a 200KB</small
                >
                <div class="row">
                  <div class="col text-center" v-if="element.image">
                    <img
                      :src="
                        imagesUrlLocation +
                        '/projects/tps-location/' +
                        element.image
                      "
                      height="150"
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
                          210000,
                          '200kb'
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
      element="ubicación"
      @cancel="restoreEl"
      :open="modalDestroy"
      @submit="destroyConfirm"
      :loading-get="loadingGet"
      :loading-submit="requestSubmit"
    ></destroy>
  </div>
</template>

<script>
import Button from "../../../components/Button";
import DataTableDraggable from "../../../components/DataTableDraggable";
import vue2Dropzone from "vue2-dropzone";
import SkeletonForm from "../../../components/skeleton/form";
import Destroy from "../../../components/modals/Destroy";
import Input from "../../../components/form/Input";
import { Skeleton } from "vue-loading-skeleton";
export default {
  props: {
    routeLocation: String,
    elementParent: Object,
    routeGetAllLocation: String,
    routeOrderLocation: String,
    messageOrderLocation: String,
    imagesUrlLocation: String,
  },
  components: {
    Destroy,
    DataTableDraggable,
    vueDropzone: vue2Dropzone,
    Button,
    SkeletonForm,
    Input,
    Skeleton,
  },
  data() {
    return {
      modalCreateUpdate: false,
      loadingGet: false,
      elements: {},
      element: {},
      title: "",
      project: {},
      dropzoneOptions: {
        url: "/",
        maxFiles: 1,
        acceptedFiles: "image/png,image/jpeg,image/jpg,image/svg+xml",
        autoProcessQueue: false,
        thumbnailWidth: 150,
        addRemoveLinks: true,
        dictRemoveFile: "Remover",
      },
      errors: {},
      requestSubmit: false,
      modalDestroy: false,
      info: false,
    };
  },
  methods: {
    submit() {
      this.requestSubmit = true;
      let url;
      let method;
      const fd = new FormData();
      if (this.title == "Nuevo") {
        url = this.routeLocation;
        method = "post";
      } else {
        url = this.routeLocation + "/" + this.element.id;
        method = "post";
        fd.append("_method", "put");
      }
      if (this.$refs.ref_image.dropzone.files[0]) {
        fd.append("image", this.$refs.ref_image.dropzone.files[0]);
      }
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
      this.requestSubmit = this.modalCreateUpdate = this.modalDestroy = false;
      this.element = {};
    },
    restore() {
      this.errors = {};
      this.elements = {};
      this.requestSubmit = this.modalCreateUpdate = this.modalDestroy = false;
      this.element = {};
      this.getEls();
    },
    orderElements(elements) {
      axios
        .put(this.routeOrderLocation, elements)
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
          this.restore();
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
    editEl(id) {
      this.title = "Actualizar";
      this.modalCreateUpdate = true;
      this.getEl(id);
    },
    destroyConfirm() {
      this.requestSubmit = true;
      axios
        .delete(this.routeLocation + "/" + this.element.id)
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
          this.restoreEl();
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
    getEl(id) {
      this.loadingGet = true;
      axios
        .get(this.routeLocation + "/json/get/" + id)
        .then((response) => {
          this.element = response.data;
          this.loadingGet = false;
        })
        .catch((error) => {});
    },
    newEl() {
      this.title = "Nuevo";
      this.modalCreateUpdate = true;
    },
    getEls() {
      this.loadingGet = true;
      axios
        .get(this.routeGetAllLocation, {
          params: {
            project_id: this.project.id,
          },
        })
        .then((response) => {
          this.elements = response.data;
          this.loadingGet = false;
        })
        .catch((error) => {});
    },
  },
  watch: {
    elementParent: {
      immediate: true,
      handler: function (newValue) {
        this.project = newValue;
      },
    },
  },
  created() {
    this.getEls();
  },
};
</script>
