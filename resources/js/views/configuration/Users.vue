<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-4">
            <div class="col-12 col-lg-7">
              <BreadCrumb
                :title="createBlock ? 'Crear Usuario' : detailBlock ? 'Ver Usuario' : editBlock ? 'Actualizar Usuario' : 'Usuarios'"
                parent="Configuración"
                active="Usuarios"
              ></BreadCrumb>
            </div>
            <div class="col-12 col-lg text-right">
              
              <!--<a
                href="#"
                class="btn btn-icon btn-inverse-dark"
                v-if="showBlock"
                @click.prevent="getUsers(true)"
                >
                 <span class="btn-inner--icon">
                  <jam-trash class="current-color" width="22" height="22"/>
                </span><span class="btn-inner--text">Usuarios Eliminados</span>
              </a>-->
              <a
                href="#"
                class="btn btn-icon btn-inverse-primary"
                @click.prevent="()=>{showBlock = false; createBlock = true;}"
                v-if="showBlock"
              >
                <span class="btn-inner--icon">
                  <jam-user-circle class="current-color" />
                </span>
                <span class="btn-inner--text">Nuevo Usuario</span>
              </a>
              <button
                type="button"
                class="btn btn-secondary"
                @click.prevent="restoreEl"
                v-if="detailBlock"
              >
                <jam-arrow-left class="mr-2 current-color" />Regresar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid mt--6">
      <DataTable
        :object="users"
        placeholder="Nombre, Usuario"
        :button-update="true"
        :button-read="true"
        :button-delete="true"
        :button-disable="false"
        @get="getUsers"
        @read="showUser"
        @delete="deleteUser"
        @update="editUser"
        v-show="showBlock"
        :entries-prop.sync="elementsPerPage"
      ></DataTable>

      <div class="card" v-if="editBlock && requestLoading || detailBlock && requestLoading">
        <div class="card-body">
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
      </div>
      <div class="card mb-4" v-if="editBlock && !requestLoading">
        <div class="card-body">
          <form @submit.prevent="updateUser" enctype="multipart/form-data">
            <div class="row">
              <div class="col-12">
                <div class="form-group text-center">
                  <label class="font-weight-bold" for="id_imagen">Avatar</label>
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
                    </div>
                    <div class="col-12 col-lg-3">
                      <vue-dropzone
                        class="text-center"
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
                    <div class="col-lg"></div>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="form-group">
                  <label class="font-weight-bold" for="name">Nombre:</label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    v-model="user.name"
                    placeholder="Nombre"
                  />
                  <label
                    v-if="errors && errors.name"
                    class="mt-2 mb-0 text-danger"
                    for="name"
                  >{{ errors.name[0] }}</label>
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label class="font-weight-bold" for="email">Email:</label>
                  <input
                    type="text"
                    class="form-control"
                    id="email"
                    v-model="user.email"
                    placeholder="Email"
                  />
                  <label
                    v-if="errors && errors.email"
                    class="mt-2 mb-0 text-danger"
                    for="email"
                  >{{ errors.email[0] }}</label>
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label class="font-weight-bold" for="password">Contraseña:</label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    v-model="user.password"
                    placeholder="Contraseña"
                  />
                  <small id="password" class>La contraseña debe tener mínimo 8 caracteres.</small>
                  <label
                    v-if="errors && errors.password"
                    class="mt-2 mb-0 text-danger"
                    for="password"
                  >{{ errors.password[0] }}</label>
                </div>
              </div>

              <!--<div class="col-12 col-lg-6" v-if="!user.status">
                <div class="form-group">
                  <b-form-checkbox
                    id="id_checkbox_status"
                    v-model="user.available"
                    name="available"
                  >Activar</b-form-checkbox>
                </div>
              </div>-->

              <div class="col-12 text-right">
                <Button
                  :text="'Actualizar'"
                  :classes="['btn-inverse-primary','mr-2']"
                  :request-server="requestServer"
                  º
                ></Button>
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

      <div class="card mb-4" v-if="createBlock">
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
              <div class="col-12">
                <div class="form-group">
                  <label class="font-weight-bold" for="name">Nombre:</label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    v-model="user.name"
                    placeholder="Nombre"
                  />
                  <label
                    v-if="errors && errors.name"
                    class="mt-2 mb-0 text-danger"
                    for="name"
                  >{{ errors.name[0] }}</label>
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label class="font-weight-bold" for="password">Contraseña:</label>

                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    v-model="user.password"
                    placeholder="Contraseña"
                  />
                  <small id="password" class>La contraseña debe tener mínimo 8 caracteres.</small>
                  <label
                    v-if="errors && errors.password"
                    class="mt-2 mb-0 text-danger"
                    for="password"
                  >{{ errors.password[0] }}</label>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label class="font-weight-bold" for="email">Email:</label>

                  <input
                    type="text"
                    class="form-control"
                    id="email"
                    v-model="user.email"
                    placeholder="Email"
                  />
                  <label
                    v-if="errors && errors.email"
                    class="mt-2 mb-0 text-danger"
                    for="email"
                  >{{ errors.email[0] }}</label>
                </div>
              </div>

              <div class="col-12 text-right mt-2">
                <Button
                  :text="'Guardar'"
                  :classes="['btn-inverse-primary','mr-2']"
                  :request-server="requestServer"
                ></Button>
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

      <div class="card mb-4" v-if="detailBlock  && !requestLoading">
        <div class="card-body">
          <div class="row">
            <div class="col-12">
              <div class="form-group text-center">
                <div
                  class="rounded-circle mx-auto d-flex avatar avatar-lg text-center mb-2 bg-default"
                  style="height:120px; width: 120px;"
                >
                  <img
                    class="shadow rounded-circle object-fit--cover"
                    v-if="user.avatar"
                    :src="'/files/img/users/'+ user.avatar"
                    alt="Perfil"
                  />
                  <span v-else style="font-size: 54px;">{{ user.avatar_initials }}</span>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="form-group">
                <label class="font-weight-bold" for="name">Nombre:</label>

                <p>{{ this.user.name }}</p>
              </div>
            </div>

            <div class="col-12 col-md-6">
              <div class="form-group">
                <label class="font-weight-bold" for="email">Email:</label>

                <p>{{ this.user.email }}</p>
              </div>
            </div>

            <div class="col-12 col-md-6">
              <div class="form-group">
                <label class="font-weight-bold" for="id_fecha_nacimiento">Registrado el:</label>
                <p v-if="this.user.created_at">{{ this.user.created_at_format }}</p>
                <p v-else>No registrado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--<b-modal centered ref="modal-disable">
      <template slot="modal-title">
        <h2 class="mb-0 text-uppercase text-primary">Deshabilitar Usuario</h2>
      </template>
      <p class="mb-0">Esta seguro que desea deshabilitar el usuario?</p>
      <template slot="modal-footer" slot-scope="{ ok, cancel }">
        <Button
          :classes="['btn-inverse-danger']"
          :text="'Deshabilitar'"
          @click="disableUserConfirm"
          :request-server="requestServer"
        ></Button>
        <button type="button" class="btn btn-secondary" @click="restoreEl">Cancelar</button>
      </template>
    </b-modal>-->
    <destroy
      element="usuario"
      @cancel="restoreEl"
      :open="modalDestroy"
      @submit="destroyConfirm"
      :loading-get="requestLoading"
      :loading-submit="requestServer"
    ></destroy>
  </div>
</template>
<script>
import { Skeleton } from "vue-loading-skeleton";
import Button from "../../components/Button";
import DataTable from "../../components/DataTable";
import vue2Dropzone from "vue2-dropzone";
import BreadCrumb from "../../components/BreadCrumb";
import Destroy from "../../components/modals/Destroy";
export default {
  props: {
    routeGetAll: String,
    route: String,
  },
  components: {
    DataTable,
    Button,
    BreadCrumb,
    Skeleton,
    vueDropzone: vue2Dropzone,
    Destroy,
  },
  data() {
    return {
      users: {},
      showBlock: true,
      createBlock: false,
      editBlock: false,
      detailBlock: false,
      dropzoneOptions: {
        url: "/",
        maxFiles: 1,
        acceptedFiles: "image/png,image/jpeg,image/jpg,image/svg+xml",
        autoProcessQueue: false,
        thumbnailWidth: 150,
        addRemoveLinks: true,
        dictRemoveFile: "Remover",
      },
      user: {
        rel_role: {},
        role_id: "",
        password: "",
        name: "",
        email: "",
        status: false,
        available: false,
      },
      elementsPerPage: 10,
      errors: {},
      requestLoading: false,
      requestServer: false,
      modalDestroy: false,
    };
  },
  methods: {
    restoreEl() {
      this.showBlock = true;
      this.createBlock = this.editBlock = this.detailBlock = this.requestServer = this.modalDestroy = false;
      (this.errors = {}),
        (this.user = {
          rel_role: {},
          role_id: "",
          password: "",
          name: "",
          email: "",
        });
    },
    restorePage() {
      this.showBlock = true;
      this.getUsers(1, this.elementsPerPage);
      this.createBlock = this.editBlock = this.detailBlock = this.requestServer = this.modalDestroy = false;
      (this.errors = {}),
        (this.user = {
          rel_role: {},
          role_id: "",
          password: "",
          name: "",
          email: "",
        });
    },
    getUser(id) {
      this.requestLoading = true;
      axios
        .get(this.route + '/json/get/' + id)
        .then((response) => {
          this.user = response.data;
          this.requestLoading = false;
        })
        .catch((error) => {});
    },
    getUsers(page, itemsPerPage, q = null) {
      let url = this.routeGetAll + "?page=" + page + "&itemsPerPage=" + itemsPerPage;
      if (q) {
        url = url + "&q=" + q;
      }
      axios
        .get(url)
        .then((response) => {
          this.users = response.data;
        })
        .catch((error) => {});
    },
    showUser(id) {
      this.getUser(id);
      this.showBlock = false;
      this.detailBlock = true;
    },
    editUser(id) {
      this.getUser(id);
      this.showBlock = false;
      this.editBlock = true;
    },
    deleteUser(id) {
      //this.$refs["modal-eliminar"].show();
      this.modalDestroy = true;
      this.getUser(id);
    },
    /*disableUser(id) {
      this.$refs["modal-disable"].show();
      this.getUser(id);
    },
    disableUserConfirm() {
      this.requestServer = true;
      axios
        .put("usuarios/deshabilitar/" + this.user.id)
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
    },*/
    destroyConfirm() {
      this.requestServer = true;
      axios
        .delete("usuarios/" + this.user.id)
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
      fd.append("name", this.user.name);
      fd.append("username", this.user.username);
      fd.append("email", this.user.email);
      if (this.user.password) {
        fd.append("password", this.user.password);
      }

      if (this.user.available) {
        fd.append("available", 1);
      }
      fd.append("id", this.user.id);
      if (this.$refs.ref_image.dropzone.files[0]) {
        fd.append("avatar", this.$refs.ref_image.dropzone.files[0]);
      }
      fd.append("_method", "put");
      axios
        .post("usuarios/" + this.user.id, fd)
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
          this.restorePage();
        });
    },
    createUser() {
      this.requestServer = true;
      const fd = new FormData();
      fd.append("name", this.user.name);
      fd.append("email", this.user.email);
      fd.append("password", this.user.password);
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
          this.restorePage();
        });
    },
  },
  created() {
    this.getUsers(1, this.elementsPerPage);
  },
};
</script>
