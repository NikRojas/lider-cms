<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-4">
            <div class="col-6 col-md-7">
              <BreadCrumb title="Clientes" active="Clientes"></BreadCrumb>
            </div>

            <div class="col-6 col-md-5 text-right">
              <a
                href="#"
                class="btn btn-icon btn-neutral"
                @click.prevent="newCustomer"
                v-if="startBlock"
              >
                <span class="btn-inner--icon">
                  <i class="fas fa-handshake"></i>
                </span>
                <span class="btn-inner--text">Nuevo Cliente</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid mt--6">
      <ElementsDraggable
        v-if="startBlock"
        type="customers"
        @delete="deleteCustomer"
        @edit="editCustomer"
        @drag="orderCustomers"
        :object.sync="customers"
        :classes="['col-6','col-lg-3','mb-4']"
      ></ElementsDraggable>
      <div class="card shadow mb-4" v-if="newBlock">
        <div class="card-header border-0">
          <h2 class="mb-0 text-uppercase text-primary">Crear Cliente</h2>
        </div>
        <div class="card-body">
          <form @submit.prevent="createCustomer">
            <div class="row">
              <div class="col-12 col-lg-8">
                <div class="form-group">
                  <label class="font-weight-bold d-block">Imagen</label>
                  <small>Tamaño Recomendado</small>
                  <vue-dropzone
                    ref="ref_image"
                    @vdropzone-file-added="$validateImageDropzone($event,$refs.ref_image.dropzone,1,124000,'100kb')"
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
                    class="text-danger text-sm mt-2 d-block"
                    for="id_image"
                  >{{ errors.image[0] }}</label>
                </div>
              </div>

              <div class="col-12 col-lg-4">
                <div class="form-group">
                  <label class="font-weight-bold" for="id_name">Nombre</label>
                  <input
                    type="text"
                    class="form-control form-control-alternative"
                    v-model="customer.name"
                    id="id_name"
                  />
                  <label
                    v-if="errors && errors.name"
                    class="mt-2 text-danger text-sm"
                    for="id_name"
                  >{{ errors.name[0] }}</label>
                </div>

                <div class="form-group">
                  <b-form-checkbox
                    id="id_checkbox_status"
                    v-model="customer.status"
                    name="status"
                  >Activar</b-form-checkbox>
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
      <div class="card shadow" v-if="editBlock">
        <div class="card-header bg-white border-0">
          <h2 class="mb-0 text-uppercase text-primary">Actualizar Cliente</h2>
        </div>
        <div class="card-body">
          <form @submit.prevent="updateCustomer">
            <div class="row">
              
              <div class="col-12 col-lg-8">
                <div class="form-group">
                  <label class="font-weight-bold" for="id_name">Nombre</label>
                  <input
                    type="text"
                    class="form-control form-control-alternative"
                    v-model="customer.name"
                    id="id_name"
                  />
                  <label
                    v-if="errors && errors.name"
                    class="mt-2 text-danger text-sm"
                    for="id_name"
                  >{{ errors.name[0] }}</label>
                </div>

                <div class="form-group">
                  <b-form-checkbox
                    id="id_checkbox_status"
                    v-model="customer.status"
                    name="status"
                  >Activar</b-form-checkbox>
                </div>
              </div>
              <div class="col-12 col-lg-4">
                <div class="row">
                  <div class="col-3">
                    <img
                      class="img-fluid img__customer shadow mx-auto d-block"
                      v-if="customer.image"
                      :src="'https://storage.googleapis.com/playgroup-web/img/customers/'+customer.image"
                      :alt="customer.image"
                    />
                  </div>
                  <div class="col-9">
                    <div class="form-group">
                      <label class="font-weight-bold d-block">Imagen</label>
                      <small>Tamaño Recomendado</small>
                      <vue-dropzone
                        ref="ref_image"
                        @vdropzone-file-added="$validateImageDropzone($event,$refs.ref_image.dropzone,1,100000,'100kb')"
                        id="id_image"
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
                      <label
                        v-if="errors && errors.image"
                        class="text-danger text-sm d-block"
                        for="id_image"
                      >{{ errors.image[0] }}</label>
                    </div>
                  </div>
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
      <Footer />
    </div>

    <b-modal centered ref="modal-delete">
      <template slot="modal-title">
        <h2 class="mb-0 text-uppercase text-primary">Eliminar cliente</h2>
      </template>
      <p class="mb-0">Esta seguro que desea eliminar el cliente?</p>
      <template slot="modal-footer" slot-scope="{ ok, cancel }">
        <Button
          :classes="['btn-danger']"
          :text="'Eliminar'"
          @click="deleteCustomerConfirm"
          :request-server="requestServer"
        ></Button>
        <button type="button" class="btn btn-secondary" @click="restoreEl">Cancelar</button>
      </template>
    </b-modal>
  </div>
</template>
<style lang="scss">
.img__customer {
  background: black;
  padding: 5%;
  border-radius: 0.375rem;
}
</style>
<script>
import Button from "../components/Button";
import BreadCrumb from "../components/BreadCrumb";
import ElementsDraggable from "../components/ElementsDraggable";
import vue2Dropzone from "vue2-dropzone";
export default {
  data() {
    return {
      errors: {},
      customer: {
        image: "",
        index: "",
        name: "",
        status: true
      },
      imagen: [],
      startBlock: true,
      customers: [],

      newBlock: false,
      editBlock: false,
      requestServer: false,
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
    //Footer,
    vueDropzone: vue2Dropzone,
    BreadCrumb,
    Button,
    ElementsDraggable
  },
  methods: {
    restoreEl() {
      this.editBlock = this.requestServer = false;
      this.startBlock = true;
      (this.errors = {}),
        (this.customer = {
          image: "",
          index: "",
          name: "",
          status: true
        });
      this.$refs["modal-delete"].hide();
    },

    getCustomer(id) {
      axios
        .get("json/customers/" + id)
        .then(response => {
          this.customer = response.data;
        })
        .catch(error => {});
    },
    deleteCustomerConfirm() {
      this.requestServer = true;
      axios
        .delete("customers/" + this.customer.id)
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
          this.restoreEl();
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
    deleteCustomer(id) {
      this.$refs["modal-delete"].show();
      this.getCustomer(id);
    },
    newCustomer() {
      this.newBlock = true;
      this.startBlock = false;
    },
    editCustomer(id) {
      this.editBlock = true;
      this.startBlock = false;
      this.getCustomer(id);
    },
    restorePage() {
      this.image = [];
      this.startBlock = true;
      this.newBlock = this.editBlock = this.requestServer = false;
      this.errors = {};
      this.customers = [];
      this.getCustomers();
      this.$refs["modal-delete"].hide();
      this.customer = {
        image: "",
        index: "",
        name: "",
        status: false,
        status: false
      };
    },
    getCustomers() {
      axios
        .get("json/customers")
        .then(response => {
          this.customers = response.data;
        })
        .catch(error => {});
    },
    updateCustomer() {
      this.requestServer = true;
      const fd = new FormData();
      fd.append("id", this.customer.id);
      if (this.customer.name) {
        fd.append("name", this.customer.name);
      } else {
        fd.append("name", "");
      }
      if (this.customer.status) {
        fd.append("status", 1);
      } else {
        fd.append("status", 0);
      }

      if (this.$refs.ref_image.dropzone.files[0]) {
        fd.append("image", this.$refs.ref_image.dropzone.files[0]);
      }

      fd.append("_method", "PUT");
      axios
        .post("customers/" + this.customer.id, fd)
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
    createCustomer() {
      this.requestServer = true;
      const fd = new FormData();
      if (this.customer.name) {
        fd.append("name", this.customer.name);
      } else {
        fd.append("name", "");
      }
      if (this.customer.status) {
        fd.append("status", 1);
      } else {
        fd.append("status", 0);
      }

      if (this.$refs.ref_image.dropzone.files[0]) {
        fd.append("image", this.$refs.ref_image.dropzone.files[0]);
      }

      axios
        .post("customers", fd)
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
    orderCustomers(elements) {
      axios
        .put("customers/order", elements)
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
    }
  },
  created() {
    this.getCustomers();
  }
};
</script>
