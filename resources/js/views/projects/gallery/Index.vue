<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-3">
            <div class="col-6 col-md-7">
              <BreadCrumb :title="'Galeria '+project.name_es" parent active="Proyectos"></BreadCrumb>
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
            <div class="col-6 col-md text-right">
              <a  href="#"  class="btn btn-icon btn-inverse-primary"  @click.prevent="newEl">
                <span class="btn-inner--icon">
                  <jam-picture class="current-color" />
                </span>
                <span class="btn-inner--text">Nuevo Elemento</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid mt--6">
      <div class="row mb-4">
        <div class="col-12">
          <h2 class="mb-3">Áreas Comunes</h2>
        </div>
        <div class="col-12 col-lg-3 mb-4 text-center" v-for="i in 6" :key="i">
          <img
            class="img-fluid"
            src="https://images.unsplash.com/photo-1584535553837-33e69fc4ca4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt
          />
          <p class="d-block mt-2 mb-0">Sala comedor 2</p>
        </div>
      </div>

      <div class="row mb-4">
        <div class="col-12">
          <h2 class="mb-3">Interiores</h2>
        </div>
        <div class="col-12 col-lg-3 mb-4" v-for="i in 6" :key="i">
          <img
            class="img-fluid"
            src="https://images.unsplash.com/photo-1584535553837-33e69fc4ca4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt
          />
        </div>
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
                <label class="font-weight-bold" for="image">Imagen:</label>
                <div class="row">
                  <div class="col text-center" v-if="element.image">
                    <img :src="imagesUrl+'/features/'+element.image" height="75" :alt="element.name_es" />
                  </div>
                  <div class="col">
                    <vue-dropzone
                      ref="ref_image"
                      class="text-center"
                      @vdropzone-file-added="$validateImageDropzone($event,$refs.ref_image.dropzone,1,512000,'500kb')"
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
                label="Título"
                variable="title"
                :errors="errors"
                :valueEn.sync="element.title_en"
                :valueEs.sync="element.title_es"
                :valueEnParent="element.title_en"
                :valueEsParent="element.title_es"
              />
            </div>

            <div class="col-12">
              <label class="font-weight-bold" id="master_type_gallery_id">Tipo:</label>
              <select class="form-control" id="master_type_gallery_id" v-model="element.master_type_gallery_id">
                <option
                  :value="el.id"
                  v-for="(el,i) in types"
                  :key="i"
                >{{ el.name }}</option>
              </select>
              <label
                v-if="errors && errors.master_type_gallery_id"
                class="mt-2 text-danger text-sm"
                for="master_type_gallery_id"
              >{{ errors.master_type_gallery_id[0] }}</label>
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
  </div>
</template>
<script>
import vue2Dropzone from "vue2-dropzone";
import BreadCrumb from "../../../components/BreadCrumb";
import Button from "../../../components/Button";
import Input from "../../../components/form/Input";
import { Skeleton } from "vue-loading-skeleton";
import NoData from "../../../components/NoData";
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
    vueDropzone: vue2Dropzone,
    Button,
    Input,
    BreadCrumb,
    NoData,
    Skeleton,
  },
  data() {
    return {
      errors:{},
      loadingEls: false,
      elements: [],
      project: {},
      element: {},
      modalDestroy: false,
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
  methods:{
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
      if (this.element.title_es) {
        fd.append("title_es", this.element.title_es);
      }
      if (this.element.title_en) {
        fd.append("title_en", this.element.title_en);
      }
      if (this.$refs.ref_image.dropzone.files[0]) {
        fd.append("image", this.$refs.ref_image.dropzone.files[0]);
      }
      if (this.element.master_type_gallery_id) {
        fd.append("master_type_gallery_id", this.element.master_type_gallery_id);
      }
      fd.append('project_id',this.project.id);
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
    restore() {
      (this.element = {
        image: "",
      }),
        (this.modalCreateUpdate = this.modalDestroy = false);
      this.getEls();
      this.errors = {};
    },
    restoreEl() {
     (this.element = {
        image: "",
      }),
        (this.modalCreateUpdate = this.modalDestroy = false);
      //this.getEls();
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
    getEls() {
      this.loadingEls = true;
      axios
        .get(this.routeGetAll)
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