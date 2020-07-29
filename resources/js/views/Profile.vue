<template>
  <div>
    <div class="container-fluid mt-0 mt-md-3">
      <div class="row">
        <div class="col-lg-12">
          <h1 class="h1 mb-4">Mi Perfil</h1>
        </div>
        <div class="col-lg-8 mx-auto">
          <div class="card mb-4">
            <form @submit.prevent="updateProfile">
              <div class="card-body" v-show="!requestLoading && startBlock">
                <div class="rounded-circle mx-auto d-flex avatar avatar-lg  text-center mb-2 bg-default" style="height:120px; width: 120px;" v-if="!editEmail && !editPassword">
                  <img
                    class="shadow rounded-circle object-fit--cover"
                    v-if="user.avatar"
                    :src="'/files/img/users/'+ user.avatar"
                    alt="Perfil"
                  />
                  <span v-else style="font-size: 54px;">{{ user.avatar_initials }}</span>
                </div>

                <div v-if="editEmail && !editPassword" class="text-center mb-3">
                  <span class="font-weight-bold mb-2 d-block">Avatar</span>
                  <div class="row">
                    <div class="col-lg"></div>
                    
                    <div class="col-12 col-lg-3 mb-3 mb-lg-0" v-if="user.avatar">
                      <img
                        class="rounded-circle object-fit--cover d-block mx-auto mb-3"
                        alt="Colaborador"
                        height="120"
                        width="120"
                        :src="'/files/img/users/' + user.avatar"
                      />
                      <a
                        class="btn btn-inverse-danger btn-sm"
                        href="#"
                        @click.prevent="() => { user.avatar = ''; user.eliminar_imagen = true;}"
                      >Eliminar Avatar Actual</a>
                    </div>
                    <div class="col-12 col-lg-3">
                      <vue-dropzone
                        ref="ref_image"
                        @vdropzone-file-added="$validateImageDropzone($event,$refs.ref_image.dropzone,1,100000,'100kb')"
                        id="id_image"
                        class="text-center"
                        :options="dropzoneOptions"
                        :duplicateCheck="true"
                        :useCustomSlot="true"
                      >
                        <div class="dropzone-custom-content">
                          <h5
                            class="dropzone-custom-title text-primary"
                          >Suelte el archivo aquí o haga click para cargarlo.</h5>
                        </div>
                      </vue-dropzone>
                    </div>
                    <div class="col-lg"></div>
                  </div>
                </div>

                <div class="mb-0">
                  <h2
                    class=" text-center mb-3"
                    v-if="!editEmail && !editPassword"
                  >{{ user.name }}</h2>

                  <div class="row" v-if="editEmail && !editPassword">
                    <div class="col-12">
                      <div class="form-group">
                        <span class="font-weight-bold">Nombre:</span>
                        <input
                          type="text"
                          class="d-inline-block form-control  w-100"
                          v-model="user.name"
                          v-if="editEmail && !editPassword"
                        />
                        <label
                          v-if="errors && errors.nombre"
                          class="d-block text-sm mt-2 mb-0 text-danger"
                        >{{ errors.nombre[0] }}</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="row">
                    <div class="col-12">
                      <span class="font-weight-bold">Email:</span>
                      <span
                        class=" mb-4 d-block"
                        v-if="!editEmail && !editPassword"
                      >{{ user.email }}</span>
                      <div class="form-group" v-if="editEmail && !editPassword">
                        <input
                          type="text"
                          class="mt-1  d-inline-block form-control w-100"
                          v-model="user.email"
                          v-if="editEmail && !editPassword"
                        />
                        <label
                          v-if="errors && errors.email"
                          class="d-block text-sm mt-2 mb-0 text-danger"
                        >{{ errors.email[0] }}</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-body" v-show="passwordBlock">
                <div class="row">
                  <div class="col-12">
                    <div class="form-group">
                      <label class="font-weight-bold" for="id_current_password">Contraseña Actual:</label>
                      <input
                        type="password"
                        
                        class="form-control "
                        id="id_current_password"
                        v-model="user.current_password"
                      />
                      <label
                        v-if="errors && errors.current_password"
                        class="mt-2 mb-0 d-block text-sm text-danger"
                        for="id_current_password"
                      >{{ errors.current_password[0] }}</label>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <label class="font-weight-bold" for="id_new_password">Contraseña Nueva:</label>
                      <input
                        type="password"
                        
                        class="form-control "
                        id="id_new_password"
                        v-model="user.new_password"
                      />
                      <label
                        v-if="errors && errors.new_password"
                        class="mt-2 mb-0 d-block text-sm text-danger"
                        for="id_new_password"
                      >{{ errors.new_password[0] }}</label>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <label
                        class="font-weight-bold"
                        for="id_confirmar_contrasena"
                      >Confirmar Nueva Contraseña:</label>
                      <input
                        type="password"
                        
                        class="form-control "
                        id="id_confirmar_contrasena"
                        v-model="user.new_password_confirmation"
                      />
                      <label
                        v-if="errors && errors.new_password_confirmation"
                        class="mt-2 mb-0 d-block text-sm text-danger"
                        for="id_confirmar_contrasena"
                      >{{ errors.new_password_confirmation[0] }}</label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-body" v-if="requestLoading && startBlock">
                <div class="row">
                  <div class="col-12 text-center mb-4">
                    <Skeleton circle height="120px" width="120px" />
                  </div>
                  <div class="col-6 mb-4">
                    <Skeleton />
                  </div>
                  <div class="col-6 mb-4">
                    <Skeleton />
                  </div>
                  <div class="col-6 mb-4">
                    <Skeleton />
                  </div>
                  <div class="col-6">
                    <Skeleton />
                  </div>
                </div>
              </div>
              <div
                class="card-footer border-0 pt-0"
                :class="!editEmail && !editPassword ? 'text-center' : 'text-right'"
              >
                <a
                  href="#"
                  @click.prevent="toggleEmail"
                  class="btn btn-inverse-info mr-2"
                  v-if="!editEmail && !editPassword"
                >Editar</a>
                <a
                  href="#"
                  @click.prevent="cambiarContrasena"
                  class="btn btn-inverse-dark"
                  v-if="!editPassword && !editEmail"
                >Cambiar Contraseña</a>
                <Button
                  :text="'Actualizar'"
                  :classes="['btn-inverse-primary','mr-2']"
                  :request-server="requestServer"
                  v-if="editPassword || editEmail"
                ></Button>
                <button
                  type="button"
                  class="btn btn-secondary"
                  @click.prevent="restorePage"
                  v-if="editPassword   || editEmail"
                >Cancelar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!--<Footer/>-->
    </div>
  </div>
</template>
<script>
import Button from "../components/Button";
import vue2Dropzone from "vue2-dropzone";
import { Skeleton } from "vue-loading-skeleton";
export default {
  props: {
    routeLogin: {
      type: String,
      required: true,
    },
    routeLogout: {
      type: String,
      required: true,
    },
  },
  components: {
    //Footer,
    Skeleton,
    Button,
    vueDropzone: vue2Dropzone,
  },
  data() {
    return {
      errors: {},
      startBlock: true,
      editEmail: false,
      editPassword: false,
      user: {
        rel_role: {
          name: "",
        },
        name: "",
        username: "",
        email: "",
        current_password: "",
        new_password: "",
        new_password_confirmation: "",
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
      requestLoading: false,
      startBlock: true,
      passwordBlock: false,
      requestServer: false,
    };
  },
  methods: {
    getUser() {
      this.requestLoading = true;
      axios
        .get("json/profile")
        .then((response) => {
          this.user = response.data;
          this.requestLoading = false;
        })
        .catch((error) => {});
    },
    restorePage() {
      this.errors = {};
      this.startBlock = true;
      this.editPassword = this.editEmail = this.passwordBlock = this.requestServer = false;
      this.user = {
        rel_role: {
          name: "",
        },
        name: "",
        username: "",
        email: "",
        current_password: "",
        new_password: "",
        new_password_confirmation: "",
      };
      this.getUser();
    },
    toggleEmail() {
      this.editEmail = true;
    },

    updateProfile() {
      this.requestServer = true;

      if (this.editEmail) {
        const fd = new FormData();
        fd.append("id", this.user.id);
        if (this.user.username) {
          fd.append("username", this.user.username);
        } else {
          fd.append("username", "");
        }
        if (this.user.email) {
          fd.append("email", this.user.email);
        } else {
          fd.append("email", "");
        }
        if (this.user.name) {
          fd.append("name", this.user.name);
        } else {
          fd.append("name", "");
        }

        if (this.$refs.ref_image.dropzone.files[0]) {
          fd.append("avatar", this.$refs.ref_image.dropzone.files[0]);
        }

        if (this.user.eliminar_imagen) {
          fd.append("eliminar_imagen", this.user.eliminar_imagen);
        }
        fd.append("_method", "put");
        axios
          .post("profile", fd)
          .then((response) => {
            this.requestServer = false;
            this.restorePage();
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
            this.requestServer = false;
            if (error.response.status === 422) {
              this.errors = error.response.data.errors || {};
              return;
            }
            this.restorePage();
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
          });
      }
      if (this.editPassword) {
        axios
          .put("change-password", this.user)
          .then((response) => {
            this.requestServer = false;
            this.restorePage();
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
            setTimeout(
              () =>
                axios
                  .post(this.routeLogout)
                  .then((response) => {
                    document.location.href = this.routeLogin;
                  })
                  .catch((error) => {}),
              5000
            );
          })
          .catch((error) => {
            this.requestServer = false;
            if (error.response.status === 422) {
              this.errors = error.response.data.errors || {};
              return;
            }
            this.restorePage();
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
          });
      }
    },
    cambiarContrasena() {
      this.startBlock = false;
      this.passwordBlock = true;
      this.editPassword = true;
    },
  },
  created() {
    this.getUser();
  },
};
</script>