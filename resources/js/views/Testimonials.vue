<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-4">
            <div class="col-6 col-md-7">
              <BreadCrumb title="Testimonios" active="Testimonios"></BreadCrumb>
            </div>

            <div class="col-6 col-md-5 text-right">
              <a
                href="#"
                class="btn btn-icon btn-neutral"
                @click.prevent="newElement"
                v-if="startBlock"
              >
                <span class="btn-inner--icon">
                  <i class="fas fa-award"></i>
                </span>
                <span class="btn-inner--text">Nuevo Testimonio</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid mt--6">
      <ElementsDraggable
        v-if="startBlock"
        type="testimonials"
        @delete="deleteElement"
        @edit="editElement"
        @drag="orderElements"
        :object.sync="testimonials"
        :classes="['col-12','col-sm-6','col-lg-6','col-xl-4','mb-4']"
      ></ElementsDraggable>
      <div class="card mb-4" v-if="newBlock">
        <div class="card-header border-0">
          <h2 class="mb-0 text-uppercase text-primary">Crear Testimonio</h2>
        </div>
        <div class="card-body">
          <form @submit.prevent="createElement">
            <div class="row">
              <div class="col-12 col-lg-3">
                <div class="form-group">
                  <label class="font-weight-bold d-block mb-0">Imagen</label>
                  <!--<small class="mb-2 d-block">Tamaño Recomendado</small>-->
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

              <div class="col-12 col-lg-9">
                <div class="row">
                  <div class="col-12">
                    <div class="form-group">
                      <label class="font-weight-bold" for="id_full_name">Nombre Completo</label>
                      <input
                        type="text"
                        class="form-control "
                        v-model="testimonial.full_name"
                        id="id_full_name"
                      />
                      <label
                        v-if="errors && errors.full_name"
                        class="mt-2 text-danger text-sm"
                        for="id_full_name"
                      >{{ errors.full_name[0] }}</label>
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="form-group">
                      <label class="font-weight-bold" for="id_job">Cargo</label>
                      <input
                        type="text"
                        class="form-control "
                        v-model="testimonial.job"
                        id="id_job"
                      />
                      <label
                        v-if="errors && errors.job"
                        class="mt-2 text-danger text-sm"
                        for="id_job"
                      >{{ errors.job[0] }}</label>
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="form-group">
                      <label class="font-weight-bold" for="id_company">Empresa</label>
                      <input
                        type="text"
                        class="form-control "
                        v-model="testimonial.company"
                        id="id_company"
                      />
                      <label
                        v-if="errors && errors.company"
                        class="mt-2 text-danger text-sm"
                        for="id_company"
                      >{{ errors.company[0] }}</label>
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="form-group">
                      <label class="font-weight-bold" for="id_message">Testimonio</label>
                      <textarea
                        class="form-control "
                        v-model="testimonial.message"
                        id="id_message"
                        rows="4"
                      />
                      <label
                        v-if="errors && errors.message"
                        class="mt-2 text-danger text-sm"
                        for="id_message"
                      >{{ errors.message[0] }}</label>
                    </div>
                  </div>
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
      <div class="card" v-if="editBlock">
        <div class="card-header bg-white border-0">
          <h2 class="mb-0 text-uppercase text-primary">Actualizar Testimonio</h2>
        </div>
        <div class="card-body">
          <form @submit.prevent="updateElement">
            <div class="row">
              <div class="col-12 col-lg-3">
                <div class="row">
                  <div class="col-3">
                    <img
                      class="img-fluid shadow mx-auto d-block"
                      v-if="testimonial.image"
                      :src="'https://storage.googleapis.com/playgroup-web/img/testimonials/'+testimonial.image"
                      :alt="testimonial.image"
                    />
                  </div>
                  <div class="col-9">
                    <div class="form-group">
                      <label class="font-weight-bold d-block mb-0">Imagen</label>
                      <!--<small class="mb-2 d-block">Tamaño Recomendado</small>-->
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

              <div class="col-12 col-lg-9">
                <div class="row">
                  <div class="col-12">
                    <div class="form-group">
                      <label class="font-weight-bold" for="id_full_name">Nombre Completo</label>
                      <input
                        type="text"
                        class="form-control "
                        v-model="testimonial.full_name"
                        id="id_full_name"
                      />
                      <label
                        v-if="errors && errors.full_name"
                        class="mt-2 text-danger text-sm"
                        for="id_full_name"
                      >{{ errors.full_name[0] }}</label>
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="form-group">
                      <label class="font-weight-bold" for="id_job">Cargo</label>
                      <input
                        type="text"
                        class="form-control "
                        v-model="testimonial.job"
                        id="id_job"
                      />
                      <label
                        v-if="errors && errors.job"
                        class="mt-2 text-danger text-sm"
                        for="id_job"
                      >{{ errors.job[0] }}</label>
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="form-group">
                      <label class="font-weight-bold" for="id_company">Empresa</label>
                      <input
                        type="text"
                        class="form-control "
                        v-model="testimonial.company"
                        id="id_company"
                      />
                      <label
                        v-if="errors && errors.company"
                        class="mt-2 text-danger text-sm"
                        for="id_company"
                      >{{ errors.company[0] }}</label>
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="form-group">
                      <label class="font-weight-bold" for="id_message">Testimonio</label>
                      <textarea
                        class="form-control "
                        v-model="testimonial.message"
                        id="id_message"
                        rows="4"
                      />
                      <label
                        v-if="errors && errors.message"
                        class="mt-2 text-danger text-sm"
                        for="id_message"
                      >{{ errors.message[0] }}</label>
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
        <h2 class="mb-0 text-uppercase text-primary">Eliminar Testimonio</h2>
      </template>
      <p class="mb-0">Esta seguro que desea eliminar el testimonio?</p>
      <template slot="modal-footer" slot-scope="{ ok, cancel }">
        <Button
          :classes="['btn-danger']"
          :text="'Eliminar'"
          @click="deleteElementConfirm"
          :request-server="requestServer"
        ></Button>
        <button type="button" class="btn btn-secondary" @click="restoreEl">Cancelar</button>
      </template>
    </b-modal>
  </div>
</template>
<script>
import Button from "../components/Button";
import BreadCrumb from "../components/BreadCrumb";
import ElementsDraggable from "../components/ElementsDraggable";
import vue2Dropzone from "vue2-dropzone";
export default {
  data() {
    return {
      errors: {},
      testimonial: {
        image: "",
        index: "",
        full_name: "",
        job: "",
        company: "",
        message: ""
      },
      startBlock: true,
      testimonials: [],

      newBlock: false,
      editBlock: false,
      requestServer: false,
      dropzoneOptions: {
        url: "/",
        maxFiles: 1,
        acceptedFiles: "image/png,image/jpeg,image/jpg,image/svg+xml",
        autoProcessQueue: false,
        thumbnailWidth: 150,
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
        (this.testimonial = {
          image: "",
          index: "",
          full_name: "",
          job: "",
          company: "",
          message: ""
        });
      this.$refs["modal-delete"].hide();
    },

    getElement(id) {
      axios
        .get("json/testimonials/" + id)
        .then(response => {
          this.testimonial = response.data;
        })
        .catch(error => {});
    },
    deleteElementConfirm() {
      this.requestServer = true;
      axios
        .delete("testimonials/" + this.testimonial.id)
        .then(response => {
          this.restorePage();
          Swal.fire({
            title: response.data.title,
            text: response.data.message,
            type: "success",
            confirmButtonText: "OK",
            buttonsStyling: false,
            customClass: {
              confirmButton: "btn btn-inverse-primary"
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
              confirmButton: "btn btn-inverse-primary"
            }
          });
        });
    },
    deleteElement(id) {
      this.$refs["modal-delete"].show();
      this.getElement(id);
    },
    newElement() {
      this.newBlock = true;
      this.startBlock = false;
    },
    editElement(id) {
      this.editBlock = true;
      this.startBlock = false;
      this.getElement(id);
    },
    restorePage() {
      this.image = [];
      this.startBlock = true;
      this.newBlock = this.editBlock = this.requestServer = false;
      this.errors = {};
      this.testimonials = [];
      this.getElements();
      this.$refs["modal-delete"].hide();
      this.testimonial = {
        image: "",
        index: "",
        full_name: "",
        job: "",
        company: "",
        message: ""
      };
    },
    getElements() {
      axios
        .get("json/testimonials")
        .then(response => {
          this.testimonials = response.data;
        })
        .catch(error => {});
    },
    updateElement() {
      this.requestServer = true;
      const fd = new FormData();
      fd.append("id", this.testimonial.id);

      this.testimonial.full_name
        ? fd.append("full_name", this.testimonial.full_name)
        : fd.append("full_name", "");
      this.testimonial.job
        ? fd.append("job", this.testimonial.job)
        : fd.append("job", "");
      this.testimonial.company
        ? fd.append("company", this.testimonial.company)
        : fd.append("company", "");
      this.testimonial.message
        ? fd.append("message", this.testimonial.message)
        : fd.append("message", "");

      if (this.$refs.ref_image.dropzone.files[0]) {
        fd.append("image", this.$refs.ref_image.dropzone.files[0]);
      }

      fd.append("_method", "PUT");
      axios
        .post("testimonials/" + this.testimonial.id, fd)
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
              confirmButton: "btn btn-inverse-primary"
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
              confirmButton: "btn btn-inverse-primary"
            }
          });
        });
    },
    createElement() {
      this.requestServer = true;
      const fd = new FormData();

      this.testimonial.full_name
        ? fd.append("full_name", this.testimonial.full_name)
        : fd.append("full_name", "");
      this.testimonial.job
        ? fd.append("job", this.testimonial.job)
        : fd.append("job", "");
      this.testimonial.company
        ? fd.append("company", this.testimonial.company)
        : fd.append("company", "");
      this.testimonial.message
        ? fd.append("message", this.testimonial.message)
        : fd.append("message", "");

      if (this.$refs.ref_image.dropzone.files[0]) {
        fd.append("image", this.$refs.ref_image.dropzone.files[0]);
      }

      axios
        .post("testimonials", fd)
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
              confirmButton: "btn btn-inverse-primary"
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
              confirmButton: "btn btn-inverse-primary"
            }
          });
        });
    },
    orderElements(elements) {
      axios
        .put("testimonials/order", elements)
        .then(response => {
          this.restorePage();
          Swal.fire({
            title: response.data.title,
            text: response.data.message,
            type: "success",
            confirmButtonText: "OK",
            buttonsStyling: false,
            customClass: {
              confirmButton: "btn btn-inverse-primary"
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
              confirmButton: "btn btn-inverse-primary"
            }
          });
        });
    }
  },
  created() {
    this.getElements();
  }
};
</script>
