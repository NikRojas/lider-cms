<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-4">
            <div class="col-6 col-md-7">
              <BreadCrumb title="Galería" parent="Cooltura Play" active="Galería"></BreadCrumb>
            </div>
            <div class="col-6 col-md-5 text-right">
              <a
                href="#"
                class="btn btn-icon  btn-neutral"
                @click.prevent="newItem"
                v-if="startBlock"
              >
                <span class="btn-inner--icon">
                  <i class="fas fa-info"></i>
                </span>
                <span class="btn-inner--text">Nuevo Elemento</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid mt--6">
      <ElementsDraggable
        v-if="startBlock"
        type="cooltura"
        @delete="deleteItem"
        @edit="editItem"
        @drag="orderItems"
        :object.sync="items"
        :classes="['col-6','col-lg-3','mb-4']"
      ></ElementsDraggable>

      <div class="card shadow mb-4" v-if="editBlock">
        <div class="card-header border-0">
          <h2 class="mb-0 text-uppercase text-primary">Actualizar Elemento</h2>
        </div>
        <div class="card-body">
          <form @submit.prevent="updateItem">
            <div class="row">
              <div class="col-12">
                <div class="form-group">
                  <label class="font-weight-bold" for="id_title">Título</label>
                  <input
                    type="text"
                    class="form-control form-control-alternative"
                    v-model="service.title"
                    id="id_title"
                  />
                  <label
                    v-if="errors && errors.title"
                    class="mt-2 text-danger text-sm"
                    for="id_title"
                  >{{ errors.title[0] }}</label>
                </div>
              </div>

              <div class="col-12">
                <div class="form-group">
                  <label class="font-weight-bold" for="id_description">Descripción</label>
                  <textarea
                    type="text"
                    class="form-control form-control-alternative"
                    v-model="service.description"
                    id="id_description"
                  ></textarea>
                  <label
                    v-if="errors && errors.description"
                    class="mt-2 text-danger text-sm"
                    for="id_description"
                  >{{ errors.description[0] }}</label>
                </div>
              </div>
              
              

              <div class="col-12">
                <div class="form-group">
                  <label class="font-weight-bold mb-0" for="id_image_1">Imagen</label>
                  <!-- <small class="text-muted d-block mb-2 lh-1">Tamaño recomendado: 400×400px</small> -->
                  <div class="row">
                    <div class="col-3">
                      <img
                        class="img-fluid mx-auto d-block"
                        v-if="service.image"
                        :src="'https://storage.googleapis.com/playgroup-web/img/cooltura/'+service.image"
                        :alt="service.image"
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
          <h2 class="mb-0 text-uppercase text-primary">Crear Elemento</h2>
        </div>
        <div class="card-body">
          <form @submit.prevent="createItem">
            <div class="row">
              <div class="col-12">
                <div class="form-group">
                  <label class="font-weight-bold" for="id_title">Título:</label>
                  <input
                    type="text"
                    class="form-control form-control-alternative"
                    v-model="service.title"
                    placeholder="Título"
                    id="id_title"
                  />
                  <label
                    v-if="errors && errors.title"
                    class="mt-2 text-danger text-sm"
                    for="id_title"
                  >{{ errors.title[0] }}</label>
                </div>
              </div>

              <div class="col-12">
                <div class="form-group">
                  <label class="font-weight-bold" for="id_description">Descripción</label>
                  <textarea
                    type="text"
                    class="form-control form-control-alternative"
                    v-model="service.description"
                    id="id_description"
                  ></textarea>
                  <label
                    v-if="errors && errors.description"
                    class="mt-2 text-danger text-sm"
                    for="id_description"
                  >{{ errors.description[0] }}</label>
                </div>
              </div>
             
              
              <div class="col-12">
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
        <h2 class="mb-0 text-uppercase text-primary">Eliminar Elemento</h2>
      </template>
      <p class="mb-0">Esta seguro que desea eliminar el elemento?</p>
      <template slot="modal-footer" slot-scope="{ ok, cancel }">
        <Button
          :classes="['btn-danger']"
          :text="'Eliminar'"
          @click="deleteItemConfirm()"
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
import draggable from "vuedraggable";
import vue2Dropzone from "vue2-dropzone";
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
        title: "",
        image: "",
        description: ''
      },
      errors: {},
      items: [],
      dropzoneOptions: {
        url: "/",
        maxFiles: 1,
        acceptedFiles: "image/png,image/jpeg,image/jpg,image/svg+xml",
        autoProcessQueue: false,
        thumbnailWidth: 400,
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
    draggable
  },
  methods: {
    updateItem() {
      this.requestServer = true;
      const fd = new FormData();
      fd.append("id", this.service.id);
      if (this.service.title) {
        fd.append("title", this.service.title);
      }
      if (this.service.description) {
        fd.append("description", this.service.description);
      }
     
      
      if (this.$refs.ref_image_1.dropzone.files[0]) {
        fd.append("image", this.$refs.ref_image_1.dropzone.files[0]);
      }
     
      fd.append("_method", "PUT");
      axios
        .post("/cooltura-play/gallery/" + this.service.id, fd)
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
    editItem(id) {
      this.editBlock = true;
      this.startBlock = false;
      this.getItem(id);
    },
    newItem() {
      this.newBlock = true;
      this.startBlock = false;
    },
    restorePage() {
      this.errors = {};
      this.requestServer = false;
      this.newBlock = this.detailBlock = this.editBlock = false;
      this.startBlock = true;
      this.service = {
        title: "",
        image: "",
        description: ''
      };
      this.items = [];
      this.getItems(1, 5);
    },
    createItem() {
      this.requestServer = true;
      const fd = new FormData();
      if (this.service.title) {
        fd.append("title", this.service.title);
      }
     
      if (this.service.description) {
        fd.append("description", this.service.description);
      }
     
      
      if (this.$refs.ref_image_1.dropzone.files[0]) {
        fd.append("image", this.$refs.ref_image_1.dropzone.files[0]);
      } else {
        fd.append("image", "");
      }
      
      axios
        .post("/cooltura-play/gallery", fd)
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
    getItems() {
      axios
        .get("/cooltura-play/json/gallery")
        .then(response => {
          this.items = response.data;
        })
        .catch(error => {});
    },
    orderItems(elements) {
      axios
        .put("/cooltura-play/gallery/order", elements)
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
    deleteItemConfirm() {
      this.requestServer = true;
      axios
        .delete("/cooltura-play/gallery/" + this.service.id)
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
    getItem(id) {
      axios
        .get("/cooltura-play/json/gallery/" + id)
        .then(response => {
          this.service = response.data;
        })
        .catch(error => {});
    },
    deleteItem(id) {
      this.$refs["modal-delete"].show();
      //console.log(id);
      this.getItem(id);
    },
  },
  created() {
    this.getItems();
  }
};
</script>
