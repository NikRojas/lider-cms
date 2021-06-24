<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-4">
            <div class="col-6 col-md-7">
              <BreadCrumb title="Asesores" parent="Administración" active="Asesores"></BreadCrumb>
            </div>
            <div class="col-6 col-md-5 text-right">
              <a href="#" class="btn btn-icon btn-inverse-primary" @click.prevent="newEl">
                <span class="btn-inner--icon">
                  <jam-user-square class="current-color" />
                </span>
                <span class="btn-inner--text">Nuevo Asesor</span>
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
                <div class="text-center mb-2">
                  <span class="avatar rounded-circle bg-default object-fit--cover" style="height: 80px; width: 80px;">
                    <img :src="imagesUrl+'/advisors/'+el.avatar" :alt="el.name" v-if="el.avatar"/>
                    <span style="font-size: 2.5rem; font-weight:medium;" v-else>{{ el.avatar_initials }}</span>
                  </span>
                </div>
                <h3 >
                  <span class="font-weight-normal">Nombre:</span>
                  {{ el.name }}
                </h3>
                <h3 >
                  <span class="font-weight-normal">Email:</span>
                  {{ el.email }}
                </h3>
                <h3 >
                  <span class="font-weight-normal">Móvil:</span>
                  {{ el.mobile_masked }}
                </h3>
                <h3>
                  <span class="font-weight-normal">Código SAP:</span>
                  {{ el.sap_code ? el.sap_code : 'No registrado' }}
                </h3>
                <h3 >
                  <span class="font-weight-normal">Tiene acceso al Sistema de Asesores:</span>
                  {{ el.tps_status ? 'Sí' : 'No' }}
                </h3>
                <div class="mt-4 text-center">
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
                  <button @click="editCredentials(el.id)" class="btn btn-inverse-primary btn-sm">Credenciales S. Asesores</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <NoData v-else/>
      </div>
    </div>

    <b-modal
      v-model="modalCredentials"
      @close="restoreEl"
      no-close-on-esc
      no-close-on-backdrop
      centered
      footer-class="border-0 pt-0"
      body-class="pt-0"
    >
      <template slot="modal-title">
        <div class="text-primary h2">Credenciales Asesor</div>
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
        <form @submit.prevent="submitCredentials">
          <div class="row">
            
            <div class="col-12">
              <div class="form-group">
                <label class="font-weight-bold" for="email">Email</label>
                <input type="text" class="form-control" v-model="element.email" disabled id="email" />
              </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                <label class="font-weight-bold" for="tps_password">Contraseña</label>
                <input type="password" class="form-control" v-model="element.tps_password" id="tps_password" />
                <small class="form-text d-block" style="opacity: 0.7;">Mínimo de longitud 8 caracteres</small>
                <label
                  v-if="errors && errors.tps_password"
                  class="mt-2 text-danger text-sm"
                  for="tps_password"
                >{{ errors.tps_password[0] }}</label>
              </div>
            </div>
            <div class="col-12">
              <b-form-checkbox
                size="lg"
                v-model="element.tps_status"
                name="check-button"
                switch
              >
                Puede acceder al Sistema de Asesores
              </b-form-checkbox>
            </div>
          </div>
        </form>
      </div>
      <template v-slot:modal-footer="{ ok }">
        <Button
          :classes="['btn-inverse-primary']"
          text="Actualizar"
          @click="submitCredentials"
          :request-server="requestSubmit"
        ></Button>
        <button type="button" class="btn btn-secondary" @click="restoreEl">Cancelar</button>
      </template>
    </b-modal>

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
        <div class="text-primary h2">{{ title }} Asesor</div>
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
                <label class="font-weight-bold" for="image">Avatar:</label>
                <div class="row">
                  <div class="col text-center" v-if="element.avatar">
                    <span class="avatar avatar-lg rounded-circle bg-default object-fit--cover" style="height: 80px; width: 80px;">
                      <img
                        :src="imagesUrl+'/advisors/'+element.avatar"
                        :alt="element.name"
                      />
                    </span>
                  </div>
                  <div class="col">
                    <vue-dropzone
                      ref="ref_image"
                      class="text-center"
                      @vdropzone-file-added="$validateImageDropzone($event,$refs.ref_image.dropzone,1,100000,'100kb')"
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
                  v-if="errors && errors.avatar"
                  class="text-danger text-sm d-block mt-2"
                  for="image"
                >{{ errors.avatar[0] }}</label>
              </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                <label class="font-weight-bold" for="name">Nombre</label>
                <input type="text" class="form-control" v-model="element.name" id="name" />
                <label
                  v-if="errors && errors.name"
                  class="mt-2 text-danger text-sm"
                  for="name"
                >{{ errors.name[0] }}</label>
              </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                <label class="font-weight-bold" for="email">Email</label>
                <input type="text" class="form-control" v-model="element.email" id="email" />
                <label
                  v-if="errors && errors.email"
                  class="mt-2 text-danger text-sm"
                  for="email"
                >{{ errors.email[0] }}</label>
              </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                <label class="font-weight-bold" for="mobile">Móvil</label>
                <input type="text" class="form-control" v-model="element.mobile" id="mobile" />
                <small class="form-text d-block" style="opacity: 0.7;">Ingrese un número de 9 dígitos</small>
                <label
                  v-if="errors && errors.mobile"
                  class="mt-2 text-danger text-sm"
                  for="mobile"
                >{{ errors.mobile[0] }}</label>
              </div>
            </div>
             <div class="col-12">
              <div class="form-group">
                <label class="font-weight-bold" for="sap_code">Código SAP</label>
                <input type="text" class="form-control" v-model="element.sap_code" id="sap_code" />
                <p class="mb-0 small" style="opacity: 0.7;">Código utilizado para determinar si la separación del inmueble se le asigna al asesor, cuando se anida el parámatero a la URL de separación de inmueble</p>

                <label
                  v-if="errors && errors.sap_code"
                  class="mt-2 text-danger text-sm"
                  for="sap_code"
                >{{ errors.sap_code[0] }}</label>
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
      element="asesor"
      @cancel="restoreEl"
      :open="modalDestroy"
      @submit="destroyConfirm"
      :loading-get="loadingGet"
      :loading-submit="requestSubmit"
    ></destroy>
  </div>
</template>
<script>
import BreadCrumb from "../../components/BreadCrumb";
import Input from "../../components/form/Input";
import vue2Dropzone from "vue2-dropzone";
import Button from "../../components/Button";
import { Skeleton } from "vue-loading-skeleton";
import Destroy from "../../components/modals/Destroy";
import SkeletonForm from "../../components/skeleton/form";
import NoData from "../../components/NoData";
export default {
  components: {
    BreadCrumb,
    messageCantDelete: String,
    Destroy,
    Button,
    Input,
    vueDropzone: vue2Dropzone,
    Skeleton,
    SkeletonForm,
    NoData
  },
  props: {
    route: String,
    routeGetAll: String,
    imagesUrl: String,
    messageCantDelete: String
  },
  data() {
    return {
      errors: {},
      requestSubmit: false,
      modalCreateUpdate: false,
      modalDestroy: false,
      loadingGet: false,
      loadingEls: false,
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
      modalCredentials: false,
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
      if (this.element.email) {
        fd.append("email", this.element.email);
      }
      if (this.element.sap_code) {
        fd.append("sap_code", this.element.sap_code);
      }
      if (this.element.mobile) {
        fd.append("mobile", this.element.mobile);
      }
      if (this.$refs.ref_image.dropzone.files[0]) {
        fd.append("avatar", this.$refs.ref_image.dropzone.files[0]);
      }
      if(this.element.id){
         fd.append("id", this.element.id);
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
      this.modalCredentials = false;
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
      this.modalCredentials = false;
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
    editCredentials(id){
      this.modalCredentials = true;
      this.getEl(id);
    },
    submitCredentials(){
      this.requestSubmit = true;
      axios({
        method: 'PUT',
        url: this.route + "/credentials/" + this.element.id,
        data: this.element,
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
    }
  },
  created() {
    this.getEls();
  },
};
</script>