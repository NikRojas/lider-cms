<template>
  <div>
    <div class="row">
      <div class="col-12 text-right mb-4" v-if="!deleteBlock">
        <button
          class="btn btn-inverse-danger mr-2"
          type="button"
          @click.prevent="deleteElsBlock"
          v-if="elements.length"
        >
          <span class="btn-inner--text">Eliminar Imágenes</span>
        </button>

        <button
          @click="modalAddImages = true"
          class="btn btn-icon btn-inverse-primary"
        >
          <span class="btn-inner--icon">
            <jam-picture class="current-color" />
          </span>
          <span class="btn-inner--text">Subir Imágenes</span>
        </button>
      </div>
      <div class="col-12 text-right mb-4" v-else>
           <div>
                    <label
                    v-if="errors && errors.images"
                    class="mb-2 text-danger text-sm"
                    for="images"
                    >{{ errors.images[0] }}</label
                  >
                  </div>

        <button
          type="button"
          class="btn btn-secondary"
          @click.prevent="restoreDelete"
        >
          Cancelar
        </button>

        <Button
          :classes="['btn-danger']"
          text="Confirmar Eliminar Imágenes"
          @click="deleteConfirm"
          :request-server="requestDelete"
        ></Button>
      </div>
      <div class="col-12">
        <div class="row" v-if="loadingEls">
          <div class="col-12 col-lg-3 mb-4" v-for="i in 12" :key="i">
            <Skeleton height="300px" />
          </div>
        </div>
        <div v-else>
          <div v-if="elements.length">
            <div class="" v-show="deleteBlock">
              <p>Selecciona las imágenes que quieres eliminar.</p>
            </div>
            <div class="row">
              <div
                class="col-6 col-md-4 col-lg-3 col-xl-2"
                v-for="el in elements"
                :key="el.id"
              >
                <div
                  class="position-absolute"
                  style="top: -13px; left: 16px; z-index: 99"
                  v-show="deleteBlock"
                >
                  <div class="custom-control custom-checkbox custom-control-lg">
                    <input
                      class="custom-control-input"
                      :value="el.id"
                      :id="'del' + el.id"
                      type="checkbox"
                      v-model="deleteEls"
                    />
                    <label class="custom-control-label" :for="'del' + el.id">
                    </label>
                  </div>
                </div>

                <div
                  class="card mb-4"
                  :class="deleteBlock ? 'opacity-card element-not-click' : ''"
                >
                  <div class="card-body text-center">
                    <img
                      :src="imagesUrl + '/projects/estates/' + el.image"
                      class="img-fluid"
                      alt=""
                    />
                    <h3 class="text-center mt-2 mb-0">
                      Código SAP:
                      <span class="font-weight-normal">{{ el.sap_code }}</span>
                    </h3>
                    <h3 class="font-weight-normal small">
                      {{ el.description }}
                    </h3>
                    <div class="text-center mt-1">
                      <a
                        :href="imagesUrl + '/projects/estates/' + el.image"
                        target="_blank"
                        class="btn btn-sm btn-inverse-primary"
                        >Ver Imagen</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <NoData
            customText="No hay imágenes de inmuebles registradas"
            v-else
          />
        </div>

        <b-modal
          v-model="modalAddImages"
          @close="restoreEl"
          no-close-on-esc
          no-close-on-backdrop
          centered
          size="xl"
          footer-class="border-0 pt-0"
          body-class="pt-0"
        >
          <template slot="modal-title">
            <div class="text-primary h2">Subir Imágenes Inmuebles</div>
          </template>
          <template slot="modal-header-close">
            <button
              type="button"
              class="btn p-0 bg-transparent"
              @click="restoreEl"
            >
              <jam-close></jam-close>
            </button>
          </template>

          <div class="card mb-4">
            <div class="card-body">
              <p class="mb-0">
                Registre las imágenes de los inmuebles del Proyecto
                {{ projectName }}. <br />
                <b>Importante: </b>El nombre de la imagen debe ser el Código SAP
                del inmueble de lo contrario la imagen no se podrá anidar al
                inmueble correspondiente.
              </p>
            </div>
          </div>
          <form @submit="storeImages">
            <div class="form-group mb-0">
              <label class="form-control-label d-block mb-0 text-md" for="file"
                >Imágenes</label
              >
              <div class="mb-3">
                <small class="mb-0">Resolución Recomendada: 1680x768px</small
                ><br />
                <small class="mb-0">Máximo número de imágenes: 20</small><br />
                <small class="mb-0">Tamaño Máximo de Imagen: 200kb</small>
              </div>
              <vue-dropzone
                ref="ref_images"
                @vdropzone-file-added="
                  $validateImageDropzone(
                    $event,
                    $refs.ref_images.dropzone,
                    20,
                    208000,
                    '200kb'
                  )
                "
                id="images"
                :options="dropzoneOptions"
                :duplicateCheck="true"
                :useCustomSlot="true"
              >
                <div class="dropzone-custom-content">
                  <h5 class="dropzone-custom-title text-primary">
                    Suelte los archivos aquí o haga click para cargarlo.
                  </h5>
                </div>
              </vue-dropzone>
              <label
                v-if="errors && errors.images"
                class="mt-2 text-danger text-sm"
                for="images"
                >{{ errors.images[0] }}</label
              >
            </div>
          </form>

          <template v-slot:modal-footer="{ ok }">
            <Button
              :classes="['btn-inverse-primary']"
              text="Registrar"
              @click="storeImages"
              :request-server="requestSubmit"
            ></Button>
            <button type="button" class="btn btn-secondary" @click="restoreEl">
              Cancelar
            </button>
          </template>
        </b-modal>
      </div>
    </div>
  </div>
</template>
<style scoped>
.opacity-card {
  opacity: 0.5;
}
.element-not-click {
  pointer-events: none;
}
.custom-checkbox.custom-control-lg .custom-control-label:before {
  width: 1.75rem;
  height: 1.75rem;
}
.custom-checkbox.custom-control-lg .custom-control-label:after {
  width: 1.75rem;
  height: 1.75rem;
  background-size: 50% 50%;
}
.custom-control-label:before {
  border: 2px solid #1762e6 !important;
}
</style>
<script>
import NoData from "../../../components/NoData";
import vue2Dropzone from "vue2-dropzone";
import Button from "../../../components/Button";
import { Skeleton } from "vue-loading-skeleton";
export default {
  props: {
    projectId: Number,
    imagesUrl: String,
    projectName: String,
  },
  components: {
    NoData,
    Button,
    vueDropzone: vue2Dropzone,
    Skeleton,
  },
  data() {
    return {
      modalAddImages: false,
      requestSubmit: false,
      loadingEls: false,
      errors: {},
      elements: [],
      deleteEls: [],
      requestDelete: false,
      dropzoneOptions: {
        url: "/",
        maxFiles: 20,
        acceptedFiles: "image/png,image/jpeg,image/jpg",
        autoProcessQueue: false,
        thumbnailWidth: 150,
        addRemoveLinks: true,
        dictRemoveFile: "Remover",
      },
      deleteBlock: false,
    };
  },
  methods: {
    restoreDelete() {
      this.deleteBlock = false;
      this.requestDelete = false;
      this.deleteEls = [];
      this.errors = {};
    },
    deleteElsBlock() {
      this.deleteBlock = true;
    },
    deleteConfirm() {
      this.requestDelete = true;
      axios
        .delete("/proyectos/inmuebles/images", {
          params: { images: this.deleteEls },
        })
        .then((response) => {
          this.restorePage();
          Swal.fire({
            title: response.data.title,
            text: response.data.message,
            type: "success",
            confirmButtonText: "Ok",
            buttonsStyling: false,
            customClass: {
              confirmButton: "btn btn-primary",
            },
          });
        })
        .catch((error) => {
          this.requestDelete = false;
          if (error.response.status === 422) {
            this.errors = error.response.data.errors || {};
            return;
          }
          this.restoreDelete();
          Swal.fire({
            title: error.response.data.title,
            text: error.response.data.message,
            type: "error",
            confirmButtonText: "Ok",
            buttonsStyling: false,
            customClass: {
              confirmButton: "btn btn-primary",
            },
          });
        });
    },
    restorePage() {
      this.elements = [];
      this.requestSubmit = false;
      this.errors = {};
      this.requestDelete = false;
      if(this.$refs.ref_images){
          this.$refs.ref_images.removeAllFiles();
      }
      this.modalAddImages = false;
      this.deleteBlock = false;
      this.deleteEls = [];
      this.getEls();
    },
    restoreEl() {
      this.requestSubmit = false;
      this.requestDelete = false;
      this.errors = {};
      if(this.$refs.ref_images){
          this.$refs.ref_images.removeAllFiles();
      }
      this.modalAddImages = false;
    },
    getEls() {
      this.loadingEls = true;
      axios
        .get("/proyectos/inmuebles/images/json/get-all/" + this.projectId)
        .then((response) => {
          this.elements = response.data;
          this.loadingEls = false;
        })
        .catch((error) => {});
    },
    storeImages() {
      this.requestSubmit = true;
      const fd = new FormData();
      if (this.$refs.ref_images.dropzone.files[0]) {
        var count = this.$refs.ref_images.dropzone.files.length;
        fd.append("elements_count", count);
        fd.append("images", "filled");
        this.$refs.ref_images.dropzone.files.forEach((el, i) => {
          fd.append("images" + i, el);
        });
      }
      fd.append("project_id", this.projectId);
      axios
        .post("/proyectos/inmuebles/images", fd)
        .then((response) => {
          this.requestSubmit = false;
          Swal.fire({
            title: response.data.title,
            html: response.data.message,
            type: "success",
            confirmButtonText: "Ok",
            buttonsStyling: false,
            customClass: {
              confirmButton: "btn btn-primary",
            },
          });
          this.restorePage();
        })
        .catch((error) => {
          this.requestSubmit = false;
          if (error.response.status === 422) {
            this.errors = error.response.data.errors || {};
            return;
          }
          Swal.fire({
            title: error.response.data.title,
            html: error.response.data.message,
            type: "error",
            confirmButtonText: "Ok",
            buttonsStyling: false,
            customClass: {
              confirmButton: "btn btn-primary",
            },
          });
          this.restoreEl();
        });
    },
  },
  created() {
    this.getEls();
  },
};
</script>