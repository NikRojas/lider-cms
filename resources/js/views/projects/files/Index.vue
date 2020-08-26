<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-3">
            <div class="col-6 col-md-7">
              <BreadCrumb :title="'Documentos Proyecto '+project.name_es" parent active="Proyectos"></BreadCrumb>
            </div>
            <div class="col-6 col-md text-right">
              <a href="#" class="btn btn-icon btn-inverse-primary" @click.prevent="newEl">
                <span class="btn-inner--icon">
                  <jam-files class="current-color" />
                </span>
                <span class="btn-inner--text">Nuevo Documento</span>
              </a>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-6 col-md-5">
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
      <div class="row" v-if="loadingEls">
        <div class="col-12 col-lg-4 mb-4" v-for="i in 4" :key="i">
          <Skeleton height="300px" />
        </div>
      </div>
      <div v-else>
        <div v-if="elements.length">
          <p>{{ messageOrder }}</p>
          <draggable class="row" v-model="elements" @change="handleChange">
            <div class="col-12 col-lg-3 mb-4 text-center" v-for="(el,i) in elements" :key="i">
              <div class="card">
                <div class="card-body">
                  <div class="mb-3 text-info">
                    <PdfIcon />
                  </div>
                  <h3 class="mb-1 mt-2">
                    <span class="font-weight-normal">Nombre ES:</span>
                    {{ el.name_es }}
                  </h3>
                  <h3>
                    <span class="font-weight-normal">Nombre EN:</span>
                    {{ el.name_en }}
                  </h3>
                  <div class="mt-4 text-center">
                    <a target="_blank" :href="filesUrl + '/projects/documents/'+ el.file" class="btn btn-inverse-primary btn-sm">Ver Archivo</a>
                    <button @click="editEl(el.id)" class="btn btn-inverse-info btn-sm">Editar</button>
                    <button @click="deleteEl(el.id)" class="btn btn-inverse-danger btn-sm">Eliminar</button>
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
        <div class="text-primary h2">{{ title }} Elemento</div>
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
                <label class="font-weight-bold" for="image">PDF:</label>
                <div class="row">
                  <div class="col text-center" v-if="element.file">
                    <div>
                            <div class="text-center mb-3 text-info">
                            <PdfIcon/>
                            </div>
                          <a :href="filesUrl+'/projects/documents/'+element.file" class="btn btn-inverse-info btn-sm d-inline" target="_blank">Ver Archivo</a>
                    </div>
                  </div>
                  <div class="col">
                    <vue-dropzone
                      ref="ref_file"
                      class="text-center"
                      @vdropzone-file-added="$validatePDFDropzone($event,$refs.ref_file.dropzone,1,512000,'500kb')"
                      id="image"
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
                  </div>
                </div>

                <label
                  v-if="errors && errors.image"
                  class="text-danger text-sm d-block mt-2"
                  for="image"
                >{{ errors.image[0] }}</label>
              </div>
            </div>
            <div class="col-12">
              <Input
                label="Nombre"
                variable="name"
                :errors="errors"
                :valueEn.sync="element.name_en"
                :valueEs.sync="element.name_es"
                :valueEnParent="element.name_en"
                :valueEsParent="element.name_es"
              />
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
        <button type="button" class="btn btn-secondary" @click="restoreEl">Cancelar</button>
      </template>
    </b-modal>

    <destroy
      element="documento"
      @cancel="restoreEl"
      :open="modalDestroy"
      @submit="destroyConfirm"
      :loading-get="loadingGet"
      :loading-submit="requestSubmit"
    ></destroy>
  </div>
</template>
<script>
import PdfIcon from "../../../components/icons/Pdf";
import SkeletonForm from "../../../components/skeleton/form";
import vue2Dropzone from "vue2-dropzone";
import BreadCrumb from "../../../components/BreadCrumb";
import Button from "../../../components/Button";
import Input from "../../../components/form/Input";
import { Skeleton } from "vue-loading-skeleton";
import NoData from "../../../components/NoData";
import Destroy from "../../../components/modals/Destroy";
import draggable from "vuedraggable";
export default {
  props: {
    elementParent: Object,
    messageOrder: String,
    filesUrl: String,
    routeReturn: String,
    routeGetAll: String,
    routeOrder: String,
    route: String,
  },
  components: {
    PdfIcon,
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
      errors: {},
      loadingEls: false,
      elements: {},
      project: {},
      element: {},
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
        acceptedFiles: "application/pdf",
        autoProcessQueue: false,
        thumbnailWidth: 150,
        addRemoveLinks: true,
        dictRemoveFile: "Remover",
      },
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
      }
      if (this.element.name_es) {
        fd.append("name_es", this.element.name_es);
      }
      if (this.element.name_en) {
        fd.append("name_en", this.element.name_en);
      }
      if (this.$refs.ref_file.dropzone.files[0]) {
        fd.append("file", this.$refs.ref_file.dropzone.files[0]);
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
    deleteEl(id) {
      this.modalDestroy = true;
      this.getEl(id);
    },
    restore() {
      (this.element = {
        image: "",
      }),
        (this.modalCreateUpdate = this.requestSubmit = this.modalDestroy = false);
      this.getEls();
      this.errors = {};
    },
    restoreEl() {
      (this.element = {
        image: "",
      }),
        (this.modalCreateUpdate = this.modalDestroy = this.requestSubmit = false);
      this.errors = {};
    },
    newEl() {
      this.title = "Nuevo";
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