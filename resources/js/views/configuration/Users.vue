<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-4">
            <div class="col-12 col-lg-7">
              <BreadCrumb :title="crearBloque ? 'Crear Usuario' : verBloque ? 'Ver Usuario' : editBlock ? 'Actualizar Usuario' : 'Usuarios'" parent="Configuración" active="Usuarios"></BreadCrumb>
            </div>
            <div class="col-12 col-lg text-right">
              <a
                href="#"
                class="btn btn-icon btn-inverse-primary"
                @click.prevent="()=>{showBlock = false; crearBloque = true;}"
                v-if="showBlock"
              >
                <span class="btn-inner--icon">
                  <jam-user-circle class="current-color" />
                </span>
                <span class="btn-inner--text">Nuevo Usuario</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid mt--6">
      <DataTable
        :object="usuarios"
        placeholder="Nombre Completo, Usuario"
        :button-update="true"
        :button-read="true"
        :button-delete="true"
        :button-disable="true"
        titulo="Usuarios"
        @get="getUsers"
        @read="showUser"
        @disable="disableUser"
        @delete="deleteUser"
        @update="editUser"
        v-show="showBlock"
      ></DataTable>

      <div class="card mb-4" v-if="editBlock">
        <!--<div class="card-header border-0">
          <h2 class="mb-0 text-uppercase text-primary">Actualizar Usuario</h2>
        </div>-->
        <div class="card-body">
          <form @submit.prevent="updateUser" enctype="multipart/form-data">
            <div class="row">
              <div class="col-12">
                <div class="form-group">
                  <label class="font-weight-bold" for="id_imagen">Avatar</label>
                  <vue-dropzone
                    ref="ref_image"
                    @vdropzone-file-added="$validateImageDropzone($event,$refs.ref_image.dropzone,1,100000,'100kb')"
                    id="id_imagen"
                    :options="dropzoneOptions"
                    :duplicateCheck="true"
                    :useCustomSlot="true"
                  >
                    <div class="dropzone-custom-content">
                      <h3
                        class="dropzone-custom-title text-primary"
                      >Suelte el archivo aquí o haga click para cargarlo.</h3>
                    </div>
                  </vue-dropzone>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label class="font-weight-bold" for="id_name">Nombre Completo:</label>
                  <input
                    type="text"
                    class="form-control "
                    id="id_name"
                    v-model="usuario.name"
                    placeholder="Nombre Completo"
                  />
                  <label
                    v-if="errores && errores.name"
                    class="mt-2 mb-0 text-danger"
                    for="id_name"
                  >{{ errores.name[0] }}</label>
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label class="font-weight-bold" for="id_email">
                    Correo
                    Electrónico:
                  </label>
                  <input
                    type="text"
                    class="form-control "
                    id="id_email"
                    v-model="usuario.email"
                    placeholder="Correo Electrónico"
                  />
                  <label
                    v-if="errores && errores.email"
                    class="mt-2 mb-0 text-danger"
                    for="id_email"
                  >{{ errores.email[0] }}</label>
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label class="font-weight-bold" for="id_password">Contraseña:</label>
                  <input
                    type="password"
                    class="form-control "
                    id="id_password"
                    v-model="usuario.contrasena"
                    placeholder="Contraseña"
                  />
                  <label
                    v-if="errores && errores.contrasena"
                    class="mt-2 mb-0 text-danger"
                    for="id_password"
                  >{{ errores.contrasena[0] }}</label>
                </div>
              </div>

              <div class="col-12 col-lg-6" v-if="!usuario.status">
                <div class="form-group">
                  <b-form-checkbox
                    id="id_checkbox_status"
                    v-model="usuario.available"
                    name="available"
                  >Activar</b-form-checkbox>
                </div>
              </div>

              <div class="col-12 text-right">
                <Boton
                  :text="'Actualizar'"
                  :classes="['btn-inverse-primary','mr-2']"
                  :request-server="requestServer"
                  º
                ></Boton>
                <button
                  type="button"
                  class="btn btn-secondary"
                  @click.prevent="restorePage"
                >Cancelar</button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div class="card mb-4" v-if="crearBloque">
        <!--<div class="card-header border-0">
          <h2 class="mb-0 text-uppercase text-primary">Crear Usuario</h2>
        </div>-->
        <div class="card-body">
          <form @submit.prevent="createUser" enctype="multipart/form-data">
            <div class="row">
              <div class="col-12">
                <div class="form-group">
                  <label class="font-weight-bold" for="id_imagen">Avatar:</label>
                  <vue-dropzone
                    ref="ref_image"
                    @vdropzone-file-added="$validateImageDropzone($event,$refs.ref_image.dropzone,1,100000,'100kb')"
                    id="id_imagen"
                    :options="dropzoneOptions"
                    :duplicateCheck="true"
                    :useCustomSlot="true"
                  >
                    <div class="dropzone-custom-content">
                      <h3
                        class="dropzone-custom-title text-primary"
                      >Suelte el archivo aquí o haga click para cargarlo.</h3>
                    </div>
                  </vue-dropzone>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label class="font-weight-bold" for="id_name">Nombre Completo:</label>
                  <input
                    type="text"
                    class="form-control "
                    id="id_name"
                    v-model="usuario.name"
                    placeholder="Nombre Completo"
                  />
                  <label
                    v-if="errores && errores.name"
                    class="mt-2 mb-0 text-danger"
                    for="id_name"
                  >{{ errores.name[0] }}</label>
                </div>
              </div>

              

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label class="font-weight-bold" for="id_password">Contraseña:</label>

                  <input
                    type="password"
                    class="form-control "
                    id="id_password"
                    v-model="usuario.password"
                    placeholder="Contraseña"
                  />
                  <label
                    v-if="errores && errores.password"
                    class="mt-2 mb-0 text-danger"
                    for="id_password"
                  >{{ errores.password[0] }}</label>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label class="font-weight-bold" for="id_email">Correo Electrónico:</label>

                  <input
                    type="text"
                    class="form-control "
                    id="id_email"
                    v-model="usuario.email"
                    placeholder="Correo Electrónico"
                  />
                  <label
                    v-if="errores && errores.email"
                    class="mt-2 mb-0 text-danger"
                    for="id_email"
                  >{{ errores.email[0] }}</label>
                </div>
              </div>

              <div class="col-12 text-right mt-2">
                <Boton
                  :text="'Guardar'"
                  :classes="['btn-inverse-primary','mr-2']"
                  :request-server="requestServer"
                ></Boton>
                <button
                  type="button"
                  class="btn btn-secondary"
                  @click.prevent="restorePage"
                >Cancelar</button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div class="card mb-4" v-if="verBloque">
        <!--<div class="card-header border-0">
          <h2 class="mb-0 text-uppercase text-primary">Ver Usuario</h2>
        </div>-->
        <div class="card-body">
          <div class="row">
            <div class="col-12" v-if="usuario.avatar">
              <div class="form-group text-center">
                <img
                  class="object-fit--cover shadow d-block mx-auto rounded-circle"
                  :src="rutaSistema + '/files/img/users/'+usuario.avatar" height="180" width="180"
                />
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="form-group">
                <label class="font-weight-bold" for="id_name">Nombre:</label>

                <p>{{ this.usuario.name }}</p>
              </div>
            </div>

            <div class="col-12 col-md-6">
              <div class="form-group">
                <label class="font-weight-bold" for="id_email">Correo Electrónico:</label>

                <p>{{ this.usuario.email }}</p>
              </div>
            </div>

            <div class="col-12 col-md-6">
              <div class="form-group">
                <label class="font-weight-bold" for="id_fecha_nacimiento">Registrado el:</label>
                <p v-if="this.usuario.created_at">{{ this.usuario.created_at }}</p>
                <p v-else>No registrado</p>
              </div>
            </div>

            <div class="col-12 text-right mt-2">
              <button type="button" class="btn btn-primary" @click.prevent="restorePage">Regresar</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <b-modal centered ref="modal-eliminar">
      <template slot="modal-title">
        <h2 class="mb-0 text-uppercase text-primary">Eliminar Usuario</h2>
      </template>
      <p class="mb-0">Esta seguro que desea eliminar el usuario?</p>
      <template slot="modal-footer" slot-scope="{ ok, cancel }">
        <Boton
          :classes="['btn-inverse-danger']"
          :text="'Eliminar'"
          @click="deleteUserConfirm"
          :request-server="requestServer"
        ></Boton>
        <button type="button" class="btn btn-secondary" @click="restoreEl">Cancelar</button>
      </template>
    </b-modal>

    <b-modal centered ref="modal-disable">
      <template slot="modal-title">
        <h2 class="mb-0 text-uppercase text-primary">Deshabilitar Usuario</h2>
      </template>
      <p class="mb-0">Esta seguro que desea deshabilitar el usuario?</p>
      <template slot="modal-footer" slot-scope="{ ok, cancel }">
        <Boton
          :classes="['btn-inverse-danger']"
          :text="'Deshabilitar'"
          @click="disableUserConfirm"
          :request-server="requestServer"
        ></Boton>
        <button type="button" class="btn btn-secondary" @click="restoreEl">Cancelar</button>
      </template>
    </b-modal>
  </div>
</template>
<script>
import Boton from "../../components/Button";
import DataTable from "../../components/DataTable";
import vue2Dropzone from "vue2-dropzone";
import { ModelListSelect } from "vue-search-select";
import BreadCrumb from "../../components/BreadCrumb";
export default {
  props: {
    rutaSistema: {
      type: String,
      required: true,
    },
  },
  components: {
    DataTable,
    Boton,
    BreadCrumb,
    ModelListSelect,
    vueDropzone: vue2Dropzone,
  },
  data() {
    return {
      usuarios: {},
      showBlock: true,
      crearBloque: false,
      editBlock: false,
      verBloque: false,
      dropzoneOptions: {
        url: "/",
        maxFiles: 1,
        acceptedFiles: "image/png,image/jpeg,image/jpg,image/svg+xml",
        autoProcessQueue: false,
        thumbnailWidth: 100,
        addRemoveLinks: true,
        dictRemoveFile: "Remover",
      },
      usuario: {
        rel_role: {},
        role_id: "",
        username: "",
        password: "",
        name: "",
        email: "",
        status: false,
        available: false,
      },
      errores: {},
      requestServer: false,
    };
  },
  methods: {
    restoreEl() {
      this.crearBloque = this.editBlock = this.verBloque = this.requestServer = false;
      (this.errores = {}),
        (this.usuario = {
          rel_role: {},
          role_id: "",
          username: "",
          password: "",
          name: "",
          email: "",
        });
      this.$refs["modal-eliminar"].hide();
      this.$refs["modal-disable"].hide();
    },
    restorePage() {
      this.showBlock = true;
      this.getUsers(1, 5);
      this.crearBloque = this.editBlock = this.verBloque = this.requestServer = false;
      this.$refs["modal-eliminar"].hide();
      this.$refs["modal-disable"].hide();
      (this.errores = {}),
        (this.usuario = {
          rel_role: {},
          role_id: "",
          username: "",
          password: "",
          name: "",
          email: "",
        });
    },
    getUser(id) {
      axios
        .get("json/usuarios/" + id)
        .then((response) => {
          this.usuario = response.data;
        })
        .catch((error) => {});
    },
    getUsers(pagina, desde, buscar = null) {
      let url = "json/usuarios?page=" + pagina + "&desde=" + desde;
      if (buscar) {
        url = url + "&buscar=" + buscar;
      }
      axios
        .get(url)
        .then((response) => {
          this.usuarios = response.data;
        })
        .catch((error) => {});
    },

    showUser(id) {
      this.getUser(id);
      this.showBlock = false;
      this.verBloque = true;
    },
    editUser(id) {
      this.getUser(id);
      this.showBlock = false;
      this.editBlock = true;
    },
    deleteUser(id) {
      this.$refs["modal-eliminar"].show();
      this.getUser(id);
    },
    disableUser(id) {
      this.$refs["modal-disable"].show();
      this.getUser(id);
    },
    disableUserConfirm() {
      this.requestServer = true;
      axios
        .put("usuarios/deshabilitar/" + this.usuario.id)
        .then((response) => {
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
          this.restoreEl();
        });
    },
    deleteUserConfirm() {
      this.requestServer = true;
      axios
        .delete("usuarios/" + this.usuario.id)
        .then((response) => {
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
          this.restoreEl();
        });
    },
    updateUser() {
      this.requestServer = true;
      const fd = new FormData();
      fd.append("name", this.usuario.name);
      fd.append("username", this.usuario.username);
      fd.append("email", this.usuario.email);
      /*if (this.eliminarImagen === true) {
        fd.append("eliminar", this.eliminarImagen);
      }*/
      if (this.usuario.password) {
        fd.append("password", this.usuario.password);
      }

      if (this.usuario.available) {
        fd.append("available", 1);
      }

      fd.append("role_id", this.usuario.role_id);
      fd.append("id", this.usuario.id);
      if (this.$refs.ref_image.dropzone.files[0]) {
        fd.append("avatar", this.$refs.ref_image.dropzone.files[0]);
      }
      fd.append("_method", "put");
      axios
        .post("usuarios/" + this.usuario.id, fd)
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
          if (error.response.status === 422) {
            this.requestServer = false;
            this.errores = error.response.data.errors || {};
            return;
          }
          this.restorePage();
        });
    },
    createUser() {
      this.requestServer = true;
      const fd = new FormData();
      fd.append("name", this.usuario.name);
      //fd.append("username", this.usuario.username);
      fd.append("email", this.usuario.email);
      fd.append("password", this.usuario.password);
      if (this.$refs.ref_image.dropzone.files[0]) {
        fd.append("avatar", this.$refs.ref_image.dropzone.files[0]);
      }
      axios
        .post("usuarios", fd)
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
            this.errores = error.response.data.errors || {};
            return;
          }
          this.restorePage();
        });
    },
  },
  created() {
    this.getUsers(1, 5);
  },
};
</script>
