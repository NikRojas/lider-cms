<template>
  <div>
    <div class="container-fluid mt-0 mt-md-3">
      <div class="row">
        <div class="col-lg-12">
          <div class="card shadow mb-4">
            <div class="card-header border-0">
              <h2 class="h2 text-primary text-uppercase mb-0">Mi Perfil</h2>
            </div>
            <form @submit.prevent="updateProfile">
              <div class="card-body" v-show="startBlock">
                <div class="rounded-circle text-center mb-2" v-if="!editEmail && !editPassword">
                  <img
                    class="shadow rounded-circle shadow object-fit--cover"
                    v-if="usuario.avatar"
                    height="120"
                    width="120"
                    :src="'/files/img/users/'+ usuario.avatar"
                    alt="Perfil"
                  />
                  <img
                    class="shadow rounded-circle shadow object-fit--cover"
                    v-else
                    height="120"
                    width="120"
                    src="/files/img/users/avatar.jpg"
                    alt="Perfil"
                  />
                </div>

                <div v-if="editEmail && !editPassword" class="text-center mb-3">
                  <span class="font-weight-bold mb-2 d-block">Avatar</span>
                  <a
                    v-if="usuario.avatar"
                    class="btn btn-danger btn-sm mb-3"
                    href="#"
                    @click.prevent="() => { usuario.avatar = ''; usuario.eliminar_imagen = true;}"
                  >Eliminar Imagen Actual</a>
                  <img
                    v-if="usuario.avatar"
                    class="rounded-circle shadow object-fit--cover d-block mx-auto mb-3"
                    alt="Colaborador"
                    height="120"
                    width="120"
                    :src="'/files/img/users/' + usuario.avatar"
                  />
                  <div class="row">
                    <div class="col-lg"></div>
                    <div class="col-12 col-lg-3">
                      <vue-dropzone
                        ref="ref_image"
                        @vdropzone-file-added="$validateImageDropzone($event,$refs.ref_image.dropzone,1,100000,'100kb')"
                        id="id_image"
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
                    class="font-weight-light text-center mb-3"
                    v-if="!editEmail && !editPassword"
                  >{{ usuario.name }}</h2>

                  <div class="row" v-if="editEmail && !editPassword">
                    <div class="col-12">
                      <div class="form-group">
                        <span class="font-weight-bold">Nombre Completo:</span>
                        <input
                          type="text"
                          class="d-inline-block form-control form-control-alternative w-100"
                          v-model="usuario.name"
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
                      <span class="font-weight-bold">Correo Electrónico:</span>
                      <span
                        class="font-weight-light mb-4 d-block"
                        v-if="!editEmail && !editPassword"
                      >{{ usuario.email }}</span>
                      <div class="form-group" v-if="editEmail && !editPassword">
                        <input
                          type="text"
                          class="mt-1 form-control-alternative d-inline-block form-control w-100"
                          v-model="usuario.email"
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
                      <label class="font-weight-bold" for="id_contrasena_actual">Contraseña Actual:</label>
                      <input
                        type="password"
                        placeholder="Contraseña Actual"
                        class="form-control form-control-alternative"
                        id="id_contrasena_actual"
                        v-model="usuario.contrasena_actual"
                      />
                      <label
                        v-if="errors && errors.contrasena_actual"
                        class="mt-2 mb-0 d-block text-sm text-danger"
                        for="id_contrasena_actual"
                      >{{ errors.contrasena_actual[0] }}</label>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <label class="font-weight-bold" for="id_contrasena_nueva">Contraseña Nueva:</label>
                      <input
                        type="password"
                        placeholder="Contraseña Nueva"
                        class="form-control form-control-alternative"
                        id="id_contrasena_nueva"
                        v-model="usuario.contrasena_nueva"
                      />
                      <label
                        v-if="errors && errors.contrasena_nueva"
                        class="mt-2 mb-0 d-block text-sm text-danger"
                        for="id_contrasena_nueva"
                      >{{ errors.contrasena_nueva[0] }}</label>
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
                        placeholder="Confirmar Nueva Contraseña"
                        class="form-control form-control-alternative"
                        id="id_confirmar_contrasena"
                        v-model="usuario.contrasena_nueva_confirmation"
                      />
                      <label
                        v-if="errors && errors.contrasena_nueva_confirmation"
                        class="mt-2 mb-0 d-block text-sm text-danger"
                        for="id_confirmar_contrasena"
                      >{{ errors.contrasena_nueva_confirmation[0] }}</label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-footer text-right border-0">
                <a
                  href="#"
                  @click.prevent="toggleEmail"
                  class="btn btn-info mr-2"
                  v-if="!editEmail && !editPassword"
                >Editar</a>
                <a
                  href="#"
                  @click.prevent="cambiarContrasena"
                  class="btn btn-neutral"
                  v-if="!editPassword && !editEmail"
                >Cambiar Contraseña</a>
                <Button
                  :text="'Actualizar'"
                  :classes="['btn-primary','mr-2']"
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
export default {
  props: {
    routeLogin: {
      type: String,
      required: true
    },
    routeLogout: {
      type: String,
      required: true
    }
  },
  components: {
    //Footer,
    Button,
    vueDropzone: vue2Dropzone
  },
  data() {
    return {
      errors: {},
      startBlock: true,
      editEmail: false,
      editPassword: false,
      usuario: {
        rel_role: {
          name: ""
        },
        name: "",
        username: "",
        email: "",
        contrasena_actual: "",
        contrasena_nueva: "",
        contrasena_nueva_confirmation: ""
      },
      dropzoneOptions: {
        url: "/",
        maxFiles: 1,
        acceptedFiles: "image/png,image/jpeg,image/jpg,image/svg+xml",
        autoProcessQueue: false,
        thumbnailWidth: 100,
        addRemoveLinks: true,
        dictRemoveFile: "Remover"
      },
      startBlock: true,
      passwordBlock: false,
      requestServer: false
    };
  },
  methods: {
    getUser() {
      axios
        .get("json/profile")
        .then(response => {
          this.usuario = response.data;
        })
        .catch(error => {});
    },
    restorePage() {
      this.errors = {};
      this.startBlock = true;
      this.editPassword = this.editEmail = this.passwordBlock = this.requestServer = false;
      this.usuario = {
        rel_role: {
          name: ""
        },
        name: "",
        username: "",
        email: "",
        contrasena_actual: "",
        contrasena_nueva: "",
        contrasena_nueva_confirmation: ""
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
        fd.append("id", this.usuario.id);
        if (this.usuario.username) {
          fd.append("username", this.usuario.username);
        } else {
          fd.append("username", "");
        }
        if (this.usuario.email) {
          fd.append("email", this.usuario.email);
        } else {
          fd.append("email", "");
        }
        if (this.usuario.name) {
          fd.append("name", this.usuario.name);
        } else {
          fd.append("name", "");
        }

        if (this.$refs.ref_image.dropzone.files[0]) {
            fd.append("avatar", this.$refs.ref_image.dropzone.files[0]);
        }

        if (this.usuario.eliminar_imagen) {
          fd.append("eliminar_imagen", this.usuario.eliminar_imagen);
        }
        fd.append("_method", "put");
        axios
          .post("profile", fd)
          .then(response => {
            this.requestServer = false;
            this.restorePage();
            Swal.fire({
              title: response.data.title,
              text: response.data.message,
              type: "success",
              confirmButtonText: "OK",
              buttonsStyling: false,
              customClass: {
                confirmButton: "btn btn-primary"
              }
            });
          })
          .catch(error => {
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
                confirmButton: "btn btn-primary"
              }
            });
          });
      }
      if (this.editPassword) {
        axios
          .put("change-password", this.usuario)
          .then(response => {
            this.requestServer = false;
            this.restorePage();
            Swal.fire({
              title: response.data.title,
              text: response.data.message,
              type: "success",
              confirmButtonText: "OK",
              buttonsStyling: false,
              customClass: {
                confirmButton: "btn btn-primary"
              }
            });
            setTimeout(
              () =>
                axios
                  .post(this.routeLogout)
                  .then(response => {
                    document.location.href = this.routeLogin;
                  })
                  .catch(error => {}),
              5000
            );
          })
          .catch(error => {
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
                confirmButton: "btn btn-primary"
              }
            });
          });
      }
    },
    cambiarContrasena() {
      this.startBlock = false;
      this.passwordBlock = true;
      this.editPassword = true;
    }
  },
  created() {
    this.getUser();
  }
};
</script>