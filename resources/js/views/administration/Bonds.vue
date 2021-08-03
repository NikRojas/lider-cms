<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-4">
            <div class="col-6 col-md-7">
              <BreadCrumb
                title="Bonos"
                parent="Administración"
                active="Bonos"
              ></BreadCrumb>
            </div>
            <div class="col-6 col-md-5 text-right">
              <a href="#" class="btn btn-icon btn-inverse-primary" @click.prevent="newEl">
                <span class="btn-inner--icon">
                  <jam-magic class="current-color" />
                </span>
                <span class="btn-inner--text">Nuevo Bono</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid mt--6">
      <div class="row" v-if="loadingEls">
        <div class="col-12 col-md-6 col-lg-3 mb-4" v-for="i in 8" :key="i">
          <Skeleton height="150px" />
        </div>
      </div>
      <div v-else>
        <div class="row" v-if="elements.length">
          <div class="col-12 col-md-6 col-lg-3 mb-4" v-for="(el,i) in elements" :key="el.id">
            <div class="card">
              <div class="card-body">
                <div class="mb-3">
                  <div class="d-inline-block bg-dark p-3">
                  <img :src="imagesUrl+'/bonds/'+el.logo" height="30" :alt="el.name" />
                  </div>
                </div>
                <h3 class="mb-1 font-weight-bold">
                  <span class="font-weight-normal">Nombre:</span>
                  {{ el.name }}
                </h3>
                <h3 class="mb-1">
                  <span class="font-weight-normal">Descripción:</span>
                  <p v-if="el.description" v-html="el.description">
                  </p>
                  <p v-else>No registrado</p>
                </h3>
                <div class="mt-4 text-right">
                  <button @click="editEl(el.id)" class="btn btn-inverse-info btn-sm">Editar</button>
                  <button
                    @click="deleteEl(el.id)"
                    class="btn btn-inverse-danger btn-sm"
                    v-if="el.can_delete"
                  >Eliminar</button>
                  <button
                    v-else
                    class="btn btn-sm btn-secondary"
                    v-b-tooltip.hover
                    :title="messageCantDelete"
                  >Eliminar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <NoData v-else/>
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
        <div class="text-primary h2">{{ title }} Bono</div>
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
                <small class="d-block mb-0 lh-1">Resolución recomendada: 100x80px</small> 
                  <small class="d-block mb-0 lh-1">Formato: PNG</small> 
                  <small class="d-block mb-2 lh-1">Tamaño recomendado: No mayor a 100KB</small>
                <div class="row">
                  <div class="col " v-if="element.logo">
                    <div class="mt-2 bg-dark p-3 d-inline-block">
                    <img
                      :src="imagesUrl+'/bonds/'+element.logo"
                      height="30"
                      :alt="element.name"
                    />
                    </div>
                  </div>
                  <div class="col vue-dropzone-dark">
                    <vue-dropzone
                      ref="ref_image"
                      class="text-center"
                      @vdropzone-file-added="$validateImageDropzone($event,$refs.ref_image.dropzone,1,110000,'100kb')"
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
                  v-if="errors && errors.logo"
                  class="text-danger text-sm d-block mt-2"
                  for="image"
                >{{ errors.logo[0] }}</label>
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
                >{{ errors.name[0] }}</label>
              </div>
              <div class="form-group">
                <label class="font-weight-bold" for="description">Descripción</label>
                <textarea
                  type="text"
                  class="form-control"
                  v-model="element.description"
                  id="description"
                ></textarea>
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
        <button type="button" class="btn btn-secondary" @click="restoreEl">Cancelar</button>
      </template>
    </b-modal>
    <destroy
      element="entidad financiera"
      @cancel="restoreEl"
      :open="modalDestroy"
      @submit="destroyConfirm"
      :loading-get="loadingGet"
      :loading-submit="requestSubmit"
    ></destroy>
  </div>
</template>
<style>
.vue-dropzone-dark .dz-image{
  padding: .5rem;
  background: black;
}
</style>
<script>
import BreadCrumb from "../../components/BreadCrumb";
import Input from "../../components/form/Input";
import vue2Dropzone from "vue2-dropzone";
import Button from "../../components/Button";
import { Skeleton } from "vue-loading-skeleton";
import Destroy from "../../components/modals/Destroy";
import SkeletonForm from "../../components/skeleton/form";
import NoData from "../../components/NoData";
import Textarea from '../../components/form/Textarea.vue';
export default {
  components: {
    BreadCrumb,
    Destroy,
    Button,
    Input,
    vueDropzone: vue2Dropzone,
    Skeleton,
    SkeletonForm,
    NoData,
    Textarea
  },
  props: {
    route: String,
    routeGetAll: String,
    imagesUrl: String,
    messageCantDelete: String,
  },
  data() {
    return {
      errors: {},
      requestSubmit: false,
      modalCreateUpdate: false,
      modalDestroy: false,
      loadingGet: false,
      loadingEls: false,
      loadingSubmit: false,
      //showLoading: false,
      elements: {},
      title: "",
      element: {
        image: "",
      },
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
    newEl() {
      this.title = "Nuevo";
      this.modalCreateUpdate = true;
    },
    editEl(id) {
      this.title = "Actualizar";
      this.modalCreateUpdate = true;
      this.getEl(id);
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
      if (this.element.name) {
        fd.append("name", this.element.name);
      }
      if (this.element.description) {
        fd.append("description", this.element.description);
      }
      if (this.$refs.ref_image.dropzone.files[0]) {
        fd.append("logo", this.$refs.ref_image.dropzone.files[0]);
      }
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
    deleteEl(id) {
      this.modalDestroy = true;
      this.getEl(id);
    },
    restoreEl() {
      (this.element = {
        image: "",
      }),
        (this.modalCreateUpdate = this.modalDestroy = false);
      this.errors = {};
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
};
</script>