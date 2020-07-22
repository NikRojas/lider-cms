<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-4">
            <div class="col-6 col-md-7">
              <BreadCrumb title="Players" parent="Información" active="Players"></BreadCrumb>
            </div>
            <div class="col-6 col-md-5 text-right">
              <a
                href="#"
                class="btn btn-icon  btn-neutral"
                @click.prevent="newPlayer"
                v-if="startBlock"
              >
                <span class="btn-inner--icon">
                  <i class="fas fa-info"></i>
                </span>
                <span class="btn-inner--text">Nuevo Player</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid mt--6">
      <ElementsDraggable
        v-if="startBlock"
        type="players"
        @delete="deleteService"
        @edit="editPlayer"
        @drag="orderPlayers"
        :object.sync="players"
        :classes="['col-6','col-lg-3','col-xl-2','mb-4']"
      ></ElementsDraggable>

      <div class="card shadow mb-4" v-if="editBlock">
        <div class="card-header border-0">
          <h2 class="mb-0 text-uppercase text-primary">Actualizar Player</h2>
        </div>
        <div class="card-body">
          <form @submit.prevent="updatePlayer">
            <div class="row">
              <div class="col-12 col-lg-6">
                <div class="form-group">
                  <label class="font-weight-bold" for="id_full_name">Nombre Completo</label>
                  <input
                    type="text"
                    class="form-control form-control-alternative"
                    v-model="service.full_name"
                    id="id_full_name"
                  />
                  <label
                    v-if="errors && errors.full_name"
                    class="mt-2 text-danger text-sm"
                    for="id_full_name"
                  >{{ errors.full_name[0] }}</label>
                </div>
              </div>
              <div class="col-12 col-lg-6">
                <div class="form-group">
                  <label class="font-weight-bold" for="id_job">Cargo</label>
                  <textarea
                    type="text"
                    class="form-control form-control-alternative"
                    v-model="service.job"
                    id="id_job"
                  />
                  <label  v-if="errors && errors.description"
                    class="mt-2 text-danger text-sm"
                    for="id_job"
                  >{{ errors.description[0] }}</label>
                </div>
              </div>

              <div class="col-12">
                <div class="form-group">
                  <label class="font-weight-bold" for="id_department">Especialidad:</label>
                  <Departments
                    @click="setDepartment"
                    v-if="departments && departments.length > 0"
                    :index="parseInt(service.department_id)"
                    :object.sync="departments"
                  ></Departments>
                  <label
                    v-if="errors && errors.department_id"
                    class="mt-2 text-danger text-sm"
                    for="id_department"
                  >{{ errors.department_id[0] }}</label>
                </div>
              </div>

              <div class="col-12 col-lg-6">
                <div class="form-group">
                  <label class="font-weight-bold mb-0" for="id_image_1">Imagen</label>
                  <!-- <small class="text-muted d-block mb-2 lh-1">Tamaño recomendado: 400×400px</small> -->
                  <div class="row">
                    <div class="col-3">
                      <img
                        class="img-fluid shadow mx-auto d-block"
                        v-if="service.image_1"
                        :src="'https://storage.googleapis.com/playgroup-web/img/players/'+service.image_1"
                        :alt="service.image_1"
                      />
                    </div>
                    <div class="col-9">
                      <vue-dropzone
                        ref="ref_image_1"
                        @vdropzone-file-added="$validateImageDropzone($event,$refs.ref_image_1.dropzone,1,512000,'500kb')"
                        id="id_image_1"
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
                    for="id_image_1"
                  >{{ errors.image[0] }}</label>
                </div>
              </div>
              <div class="col-12 col-lg-6">
                <div class="form-group">
                  <label class="font-weight-bold mb-0" for="id_image_2">Imagen Hover</label>
                  <!-- <small class="text-muted d-block mb-2 lh-1">Tamaño recomendado: 400×400px</small> -->
                  <div class="row">
                    <div class="col-3">
                      <img
                        class="img-fluid shadow mx-auto d-block"
                        v-if="service.image_2"
                        :src="'https://storage.googleapis.com/playgroup-web/img/players/'+service.image_2"
                        :alt="service.image_2"
                      />
                    </div>
                    <div class="col-9">
                      <vue-dropzone
                        ref="ref_image_2"
                        id="id_image_2"
                        :options="dropzoneOptions"
                        :useCustomSlot="true"
                        @vdropzone-file-added="$validateImageDropzone($event,$refs.ref_image_2.dropzone,1,512000,'500kb')"
                        :duplicateCheck="true"
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
                    v-if="errors && errors.image_hover"
                    class="text-danger text-sm d-block mt-2"
                    for="id_image_2"
                  >{{ errors.image_hover[0] }}</label>
                </div>
              </div>
              <div class="col-12 text-right">
                <Button
                  :text="'Actualizar'"
                  :classes="['btn-primary']"
                  :request-server="requestServer"
                ></Button>
                <button type="button" class="btn btn-danger" @click.prevent="restorePage">Cancelar</button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div class="card shadow mb-4" v-if="newBlock">
        <div class="card-header border-0">
          <h2 class="mb-0 text-uppercase text-primary">Crear Player</h2>
        </div>
        <div class="card-body">
          <form @submit.prevent="createPlayer">
            <div class="row">
              <div class="col-12 col-lg-6">
                <div class="form-group">
                  <label class="font-weight-bold" for="id_full_name">Nombre Completo:</label>
                  <input
                    type="text"
                    class="form-control form-control-alternative"
                    v-model="service.full_name"
                    placeholder="Nombre Completo"
                    id="id_full_name"
                  />
                  <label
                    v-if="errors && errors.full_name"
                    class="mt-2 text-danger text-sm"
                    for="id_full_name"
                  >{{ errors.full_name[0] }}</label>
                </div>
              </div>
              <div class="col-12 col-lg-6">
                <div class="form-group">
                  <label class="font-weight-bold" for="id_job">Cargo:</label>
                  <textarea
                    type="text"
                    class="form-control form-control-alternative"
                    v-model="service.job"
                    placeholder="Cargo"
                    id="id_job"
                  ></textarea>
                  <label
                    v-if="errors && errors.job"
                    class="mt-2 text-danger text-sm"
                    for="id_job"
                  >{{ errors.job[0] }}</label>
                </div>
              </div>
              <div class="col-12">
                <div class="form-group">
                  <label class="font-weight-bold" for="id_department">Especialidad:</label>
                  <Departments
                    @click="setDepartment"
                    v-if="departments && departments.length > 0"
                    :object.sync="departments"
                  ></Departments>
                  <label
                    v-if="errors && errors.department_id"
                    class="mt-2 text-danger text-sm"
                    for="id_department"
                  >{{ errors.department_id[0] }}</label>
                </div>
              </div>
              <div class="col-12 col-lg-6">
                <div class="form-group">
                  <label class="font-weight-bold mb-0" for="id_image_1">Imagen:</label>
                  <!-- <small class="text-muted d-block mb-2 lh-1">Tamaño recomendado: 400×400px</small> -->
                  <vue-dropzone
                    ref="ref_image_1"
                    @vdropzone-file-added="$validateImageDropzone($event,$refs.ref_image_1.dropzone,1,512000,'500kb')"
                    id="id_image_1"
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
                  <label
                    v-if="errors && errors.image"
                    class="text-danger text-sm d-block mt-2"
                    for="id_image_1"
                  >{{ errors.image[0] }}</label>
                </div>
              </div>
              <div class="col-12 col-lg-6">
                <div class="form-group">
                  <label class="font-weight-bold mb-0" for="id_image_2">Imagen Hover:</label>
                  <!-- <small class="text-muted d-block mb-2 lh-1">Tamaño recomendado: 400×400px</small> -->
                  <vue-dropzone
                    ref="ref_image_2"
                    id="id_image_2"
                    :options="dropzoneOptions"
                    :useCustomSlot="true"
                    @vdropzone-file-added="$validateImageDropzone($event,$refs.ref_image_2.dropzone,1,512000,'500kb')"
                    :duplicateCheck="true"
                  >
                    <div class="dropzone-custom-content">
                      <h5
                        class="dropzone-custom-title text-primary"
                      >Suelte los archivos aquí o haga click para cargarlos.</h5>
                    </div>
                  </vue-dropzone>
                  <label
                    v-if="errors && errors.image_hover"
                    class="text-danger text-sm d-block mt-2"
                    for="id_image_2"
                  >{{ errors.image_hover[0] }}</label>
                </div>
              </div>
              <div class="col-12 text-right">
                <Button
                  :text="'Registrar'"
                  :classes="['btn-primary']"
                  :request-server="requestServer"
                ></Button>
                <button type="button" class="btn btn-danger" @click.prevent="restorePage">Cancelar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <b-modal centered ref="modal-delete">
      <template slot="modal-title">
        <h2 class="mb-0 text-uppercase text-primary">Eliminar Player</h2>
      </template>
      <p class="mb-0">Esta seguro que desea eliminar el player?</p>
      <template slot="modal-footer" slot-scope="{ ok, cancel }">
        <Button
          :classes="['btn-danger']"
          :text="'Eliminar'"
          @click="deleteServiceConfirm()"
          :request-server="requestServer"
        ></Button>
        <button type="button" class="btn btn-secondary" @click="cancel()">Cancelar</button>
      </template>
    </b-modal>
  </div>
</template>
<script>
import Button from "../../components/Button";
import ElementsDraggable from "../../components/ElementsDraggable";
import vue2Dropzone from "vue2-dropzone";
import Departments from "../../components/form/Departments";
import BreadCrumb from "../../components/BreadCrumb";
export default {
  data() {
    return {
      startBlock: true,
      newBlock: false,
      requestServer: false,
      detailBlock: false,
      editBlock: false,
      service: {
        full_name: "",
        job: "",
        department_id: "",
        image_1: "",
        image_2: ""
      },
      errors: {},
      departments: [],
      players: [],
      dropzoneOptions: {
        url: "/",
        maxFiles: 1,
        acceptedFiles: "image/png,image/jpeg,image/jpg,image/svg+xml",
        autoProcessQueue: false,
        thumbnailWidth: 250,
        addRemoveLinks: true,
        dictRemoveFile: "Remover Imagen"
      }
    };
  },
  components: {
    vueDropzone: vue2Dropzone,
    Button,
    BreadCrumb,
    ElementsDraggable,
    Departments
  },
  methods: {
    updatePlayer() {
      this.requestServer = true;
      const fd = new FormData();
      fd.append("id", this.service.id);
      if (this.service.full_name) {
        fd.append("full_name", this.service.full_name);
      }
      if (this.service.job) {
        fd.append("job", this.service.job);
      }
      if (this.service.department_id) {
        fd.append("department_id", this.service.department_id);
      }
      if (this.$refs.ref_image_1.dropzone.files[0]) {
        fd.append("image", this.$refs.ref_image_1.dropzone.files[0]);
      }
      if (this.$refs.ref_image_2.dropzone.files[0]) {
        fd.append("image_hover", this.$refs.ref_image_2.dropzone.files[0]);
      }
      fd.append("_method", "PUT");
      axios
        .post("players/" + this.service.id, fd)
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
    },
    editPlayer(id) {
      console.log(id)
      this.editBlock = true;
      this.startBlock = false;
      this.getService(id);
    },
    newPlayer() {
      this.newBlock = true;
      this.startBlock = false;
    },
    restorePage() {
      this.errors = {};
      this.requestServer = false;
      this.newBlock = this.detailBlock = this.editBlock = false;
      this.startBlock = true;
      this.service = {
        full_name: "",
        job: "",
        department_id: "",
        image_1: "",
        image_2: ""
      };
      this.players = [];
      this.getPlayers(1, 5);
    },
    createPlayer() {
      this.requestServer = true;
      const fd = new FormData();
      if (this.service.full_name) {
        fd.append("full_name", this.service.full_name);
      }
      if (this.service.job) {
        fd.append("job", this.service.job);
      }
      if (this.service.department_id) {
        fd.append("department_id", this.service.department_id);
      }
      if (this.$refs.ref_image_1.dropzone.files[0]) {
        fd.append("image", this.$refs.ref_image_1.dropzone.files[0]);
      } else {
        fd.append("image", "");
      }
      if (this.$refs.ref_image_2.dropzone.files[0]) {
        fd.append("image_hover", this.$refs.ref_image_2.dropzone.files[0]);
      } else {
        fd.append("image_hover", "");
      }
      axios
        .post("players", fd)
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
    },
    getPlayers() {
      axios
        .get("json/players")
        .then(response => {
          this.players = response.data;
        })
        .catch(error => {});
    },
    setDepartment(id) {
      this.service.department_id = id;
    },
    orderPlayers(elements) {
      axios
        .put("players/order", elements)
        .then(response => {
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
    },
    deleteServiceConfirm() {
      this.requestServer = true;
      axios
        .delete("players/" + this.service.id)
        .then(response => {
          this.$refs["modal-delete"].hide();
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
          this.$refs["modal-delete"].hide();
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
    },
    detailService(id) {
      this.detailBlock = true;
      this.startBlock = false;
      this.getService(id);
    },
    getService(id) {
      axios
        .get("json/players/" + id)
        .then(response => {
          this.service = response.data;
        })
        .catch(error => {});
    },
    deleteService(id) {
      this.$refs["modal-delete"].show();
      //console.log(id);
      this.getService(id);
    },
    getDepartments() {
      axios
        .get("/json/select/departments")
        .then(response => {
          this.departments = response.data;
        })
        .catch(error => {});
    }
  },
  created() {
    this.getPlayers();
    this.getDepartments();
  }
};
</script>
