<template>
  <div class="row">
      <div class="col-12 text-right mb-4">
        <a href="#" class="btn btn-icon btn-neutral" @click.prevent="newElement">
          <span class="btn-inner--icon">
            <i class="fas fa-info"></i>
          </span>
          <span class="btn-inner--text">Nuevo Socio</span>
        </a>
      </div>
    <div class="col-12 mb-4">
      <DataTableDraggable
            v-show="startBlock"
            :object.sync="elements"
            :buttonUpdate="true"
            :buttonDelete="true"
            :botonDetail="false"
            title="Partners"
            @drag="orderElements"
            @edit="editElement"
            @delete="deteleElement"
          ></DataTableDraggable>
    </div>

    <b-modal centered ref="modal-create">
      <template slot="modal-title">
        <h2 class="mb-0 text-uppercase text-primary">Crear Socio</h2>
      </template>
      <form @keydown.enter.prevent="createElement">
        <div class="row">
          <div class="col-12">
            <div class="form-group">
              <label class="form-control-label d-block" for="id_name">Nombre</label>
              <input type="text" class="form-control form-control-alternative" placeholder="Nombre" v-model="element.name" id="id_name" />
              <label
                v-if="errors && errors.name"
                class="mt-2 text-danger text-sm"
                for="id_name"
              >{{ errors.name[0] }}</label>
            </div>

            
          </div>

          <div class="col-12">
                <div class="form-group">
                  <label class="font-weight-bold mb-0" for="id_image">Imagen:</label>
                  <!-- <small class="text-muted d-block mb-2 lh-1">Tamaño recomendado: 400×400px</small> -->
                  <vue-dropzone
                    ref="ref_image"
                    @vdropzone-file-added="$validateImageDropzone($event,$refs.ref_image.dropzone,1,512000,'500kb')"
                    id="id_image"
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
                    for="id_image"
                  >{{ errors.image[0] }}</label>
                </div>
              </div>
        </div>
      </form>
      <template slot="modal-footer" slot-scope="{ ok, cancel }">
        <Button
          :classes="['btn-primary']"
          :text="'Registrar'"
          @click="createElement()"
          :request-server="requestServer"
        ></Button>
        <button type="button" class="btn btn-danger" @click="closeModal()">Cancelar</button>
      </template>
    </b-modal>
    <b-modal centered ref="modal-delete">
        <template slot="modal-title">
        <h2 class="mb-0 text-uppercase text-primary">Eliminar Socio</h2>
      </template>
      <p class="mb-0">Esta seguro que desea eliminar el socio?</p>
      <template slot="modal-footer" slot-scope="{ ok, cancel }">
        <Button
          :classes="['btn-danger']"
          :text="'Eliminar'"
          @click="deleteElementConfirm()"
          :request-server="requestServer"
        ></Button>
        <button type="button" class="btn btn-secondary" @click="closeModal()">Cancelar</button>
      </template>
    </b-modal>
    <b-modal centered ref="modal-edit">
      <template slot="modal-title">
        <h2 class="mb-0 text-uppercase text-primary">Actualizar Socio</h2>
      </template>
      <form @keydown.enter.prevent="updateElement">
        <div class="row">
          <div class="col-12">
            <div class="form-group">
              <label class="form-control-label d-block" for="id_name">Nombre</label>
              <input type="text" class="form-control form-control-alternative" v-model="element.name" id="id_name" />
              <label
                v-if="errors && errors.name"
                class="mt-2 text-danger text-sm"
                for="id_name"
              >{{ errors.name[0] }}</label>
            </div>
          </div>

          <div class="col-12">
                <div class="form-group">
                  <label class="font-weight-bold mb-0" for="id_image">Imagen</label>
                  <!-- <small class="text-muted d-block mb-2 lh-1">Tamaño recomendado: 400×400px</small> -->
                  <div class="row">
                    <div class="col-3">
                      <img
                        class="img-fluid"
                        v-if="element.image"
                        :src="'https://storage.googleapis.com/playgroup-web/img/partners/'+element.image"
                        :alt="element.image"
                      />
                    </div>
                    <div class="col-9">
                      <vue-dropzone
                        ref="ref_image"
                        @vdropzone-file-added="$validateImageDropzone($event,$refs.ref_image.dropzone,1,512000,'500kb')"
                        id="id_image"
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
                    for="id_image"
                  >{{ errors.image[0] }}</label>
                </div>
              </div>
        </div>
      </form>
      <template slot="modal-footer" slot-scope="{ ok, cancel }">
        <Button
          :classes="['btn-primary']"
          :text="'Actualizar'"
          @click="updateElement()"
          :request-server="requestServer"
        ></Button>
        <button type="button" class="btn btn-danger" @click="closeModal()">Cancelar</button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import Button from "../../components/Button";
import DataTableDraggable from "../../components/DataTableDraggable";
import BreadCrumb from "../../components/BreadCrumb";
import vue2Dropzone from "vue2-dropzone";
export default {
  components: {
    DataTableDraggable,
     vueDropzone: vue2Dropzone,
    Button,
    BreadCrumb
  },
  data() {
    return {
      elements: {},
      element: {
        name: "",
        image: ""
      },
       dropzoneOptions: {
        url: "/",
        maxFiles: 1,
        acceptedFiles: "image/png,image/jpeg,image/jpg,image/svg+xml",
        autoProcessQueue: false,
        thumbnailWidth: 150,
        addRemoveLinks: true,
        dictRemoveFile: "Remover Imagen"
      },
      errors: {},
      startBlock: true,
      requestServer: false
    };
  },
  methods: {
    closeModal() {
      this.errors = {};
      this.requestServer = false;
      this.$refs["modal-create"].hide();
      this.$refs["modal-delete"].hide();
      this.$refs["modal-edit"].hide();
      this.element = {
        name: "",
        image: ""
      };
    },
    restorePage() {
      this.errors = {};
      this.elements = {};
      this.requestServer = false;
      this.$refs["modal-create"].hide();
      this.$refs["modal-delete"].hide();
      this.$refs["modal-edit"].hide();
      this.element = {
               name: "",
        image: ""
      };
      this.getElements();
    },
    createElement() {
      this.requestServer = true;

        const fd = new FormData();
        if (this.element.name) {
        fd.append("name", this.element.name);
      }
      if (this.$refs.ref_image.dropzone.files[0]) {
        fd.append("image", this.$refs.ref_image.dropzone.files[0]);
      }
      axios
        .post("partners", fd)
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
          this.requestServer = false;
          if (error.response.status === 422) {
            this.errors = error.response.data.errors || {};
            return;
          }
          this.closeModal();
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
    orderElements(elements) {
      axios
        .put("partners/order", elements)
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
    editElement(id) {
      this.$refs["modal-edit"].show();
      this.getElement(id);
    },
    updateElement() {
      this.requestServer = true;
 const fd = new FormData();
        if (this.element.name) {
        fd.append("name", this.element.name);
      }
      if (this.$refs.ref_image.dropzone.files[0]) {
        fd.append("image", this.$refs.ref_image.dropzone.files[0]);
      }

      fd.append("_method", "PUT");
      axios
        .post("partners/" + this.element.id, fd)
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
          this.requestServer = false;
          if (error.response.status === 422) {
            this.errors = error.response.data.errors || {};
            return;
          }
          this.closeModal();
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
    deleteElementConfirm() {
      this.requestServer = true;
      axios
        .delete("partners/" + this.element.id)
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
          this.closeModal();
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
    deteleElement(id) {
      this.$refs["modal-delete"].show();
      this.getElement(id);
    },
    getElement(id) {
      axios
        .get("json/partners/" + id)
        .then(response => {
          this.element = response.data;
        })
        .catch(error => {});
    },
    newElement() {
      this.$refs["modal-create"].show();
    },
    getElements() {
      axios
        .get("json/partners")
        .then(response => {
          this.elements = response.data;
        })
        .catch(error => {});
    }
  },
  created() {
    this.getElements();
  }
};
</script>
