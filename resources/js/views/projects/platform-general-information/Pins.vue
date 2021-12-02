<template>
  <div class="row mb-5">
    <div class="col-12 col-lg-3">
      <h2>Pines en el Mapa</h2>
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
          <span class="btn-inner--text">Nuevo Pin</span>
        </a>
      </div>
      <DataTable
        :object="elements"
        :button-update="true"
        :button-delete="true"
        :button-read="false"
        placeholder="Nombre"
        @get="getEls"
        :entries-prop.sync="elementsPerPage"
        @update="editEl"
        @delete="deleteEl"
      ></DataTable>
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
        <div class="text-primary h2">{{ title }} Pin en el Mapa</div>
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
                <small class="d-block mb-0 lh-1">Formato: PNG, SVG</small>
                <small class="d-block mb-2 lh-1"
                  >Tamaño recomendado: No mayor a 200KB</small
                >
                <div class="row">
                  <div class="col text-center" v-if="element.image">
                    <img
                      :src="
                        imagesUrl +
                        '/projects/tps-pins/' +
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
             <div class="col-12">
                    <div class="form-group">
                      <label class="font-weight-bold" for="title"
                        >Nombre en el Mapa</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        v-model="element.title"
                        id="title"
                      />
                      <label
                        v-if="errors && errors.title"
                        class="mt-2 text-danger text-sm"
                        for="title"
                        >{{ errors.title[0] }}</label
                      >
                    </div>
                  </div>
            <div class="col-12 col-md-6 col-lg-6">
                    <div class="form-group">
                      <label class="font-weight-bold" for="tps_latitude"
                        >Latitud</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        v-model="element.tps_latitude"
                        id="tps_latitude"
                      />
                      <label
                        v-if="errors && errors.tps_latitude"
                        class="mt-2 text-danger text-sm"
                        for="tps_latitude"
                        >{{ errors.tps_latitude[0] }}</label
                      >
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-lg-6">
                    <div class="form-group">
                      <label class="font-weight-bold" for="tps_longitude"
                        >Longitud</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        v-model="element.tps_longitude"
                        id="tps_longitude"
                      />
                      <label
                        v-if="errors && errors.tps_longitude"
                        class="mt-2 text-danger text-sm"
                        for="tps_longitude"
                        >{{ errors.tps_longitude[0] }}</label
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
      element="pin"
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
import DataTable from "../../../components/DataTable";
import vue2Dropzone from "vue2-dropzone";
import SkeletonForm from "../../../components/skeleton/form";
import Destroy from "../../../components/modals/Destroy";
import Input from "../../../components/form/Input";
import { Skeleton } from "vue-loading-skeleton";
export default {
  props: {
    routeEl: String,
    elementParent: Object,
    routeGetAllEls: String,
    imagesUrl: String,
  },
  components: {
    Destroy,
    DataTable,
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
      elementsPerPage: 10,
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
        url = this.routeEl;
        method = "post";
      } else {
        url = this.routeEl + "/" + this.element.id;
        method = "post";
        fd.append("_method", "put");
      }
      if (this.$refs.ref_image.dropzone.files[0]) {
        fd.append("image", this.$refs.ref_image.dropzone.files[0]);
      }
      if (this.element.title) {
        fd.append("title", this.element.title);
      }
      if (this.element.tps_longitude) {
        fd.append("tps_longitude", this.element.tps_longitude);
      }
      if (this.element.tps_latitude) {
        fd.append("tps_latitude", this.element.tps_latitude);
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
      this.getEls(1,this.elementsPerPage);
    },
    editEl(id) {
      this.title = "Actualizar";
      this.modalCreateUpdate = true;
      this.getEl(id);
    },
    destroyConfirm() {
      this.requestSubmit = true;
      axios
        .delete(this.routeEl + "/" + this.element.id)
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
        .get(this.routeEl + "/json/get/" + id)
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
    //getEls() {
    getEls(page, itemsPerPage, q = null) {
      this.loadingGet = true;
      let url =
        this.routeGetAllEls + "?page=" + page + "&itemsPerPage=" + itemsPerPage;
      if (q) {
        url = url + "&q=" + q;
      }
      axios
        .get(url, {
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
    //this.getEls();
    this.getEls(1, this.elementsPerPage);
  },
}
</script>