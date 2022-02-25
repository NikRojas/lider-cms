<template>
  <div class="row mb-4">
    <div class="col-12">
      <h2>Carrusel de Pestaña</h2>
      <p>Registra los items de la pestaña seleccionada</p>
    </div>
    <div class="col-12">
      <div class="row" v-if="navs.length">
        <div class="col-12 col-sm-4 mb-3">
          <select
            @change="getStepsChange"
            class="form-control"
            id="de"
            v-model="activeNav"
          >
            <option :value="el.id" v-for="(el, i) in navs" :key="i">
              {{ el.name }}
            </option>
          </select>
        </div>
        <div class="col-12">
          <div class="text-right">
            <a
              href="#"
              class="btn btn-icon btn-inverse-primary"
              @click.prevent="newEl"
            >
              <span class="btn-inner--icon">
                <jam-plus class="current-color"></jam-plus>
              </span>
              <span class="btn-inner--text">Nuevo Item</span>
            </a>
          </div>
          <DataTableDraggable
            :loading-prop.sync="loadingGetAll"
            :object.sync="elements"
            :buttonUpdate="true"
            :buttonDelete="true"
            :buttonDetail="false"
            @drag="handleChange"
            @edit="editEl"
            @delete="deleteEl"
            :message-order="messageOrder"
          ></DataTableDraggable>

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
              <div class="text-primary h2">{{ title }} Item</div>
            </template>
            <template slot="modal-header-close">
              <button
                type="button"
                class="btn p-0 bg-transparent"
                @click="restoreEl"
              >
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
                      <label class="font-weight-bold d-block" for="title"
                        >Titulo</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        v-model="element.title"
                        id="title"
                      />
                      <label
                        v-if="errors && errors.title"
                        class="mt-2 text-danger text-sm"
                        for="title"
                        >{{ errors.title[0] }}</label
                      >
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <label class="font-weight-bold d-block" for="description"
                        >Descripcion</label
                      >
                      <quill-Editor
                        @keydown.enter.prevent
                        v-model="element.description"
                        :options="editorOptions"
                        class="ql-height-5"
                        ref="ref_content"
                      ></quill-Editor>
                      <label
                        v-if="errors && errors.description"
                        class="mt-2 text-danger text-sm"
                        for="description"
                        >{{ errors.description[0] }}</label
                      >
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="form-group">
                      <label class="font-weight-bold" for="image"
                        >Imagen:</label
                      >
                      <div class="row">
                        <div class="col text-center" v-if="element.image">
                          <img
                            :src="'/storage/img/tps/info/' + element.image"
                            class="img-fluid"
                          />
                        </div>
                        <div class="col">
                          <vue-dropzone
                            ref="ref_image"
                            class="text-center"
                            @vdropzone-file-added="
                              $validateImageDropzone(
                                $event,
                                $refs.ref_image.dropzone,
                                1,
                                225000,
                                '200kb'
                              )
                            "
                            id="image"
                            :options="dropzoneOptions"
                            :duplicateCheck="true"
                            :useCustomSlot="true"
                          >
                            <div class="dropzone-custom-content">
                              <h5 class="dropzone-custom-title text-primary">
                                Suelte los archivos aquí o haga click para
                                cargarlos.
                              </h5>
                            </div>
                          </vue-dropzone>
                        </div>
                      </div>

                      <label
                        v-if="errors && errors.image"
                        class="text-danger text-sm d-block mt-2"
                        for="image"
                        >{{ errors.image[0] }}</label
                      >
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
              <button
                type="button"
                class="btn btn-secondary"
                @click="restoreEl"
              >
                Cancelar
              </button>
            </template>
          </b-modal>
          <destroy
            element="pestaña"
            @cancel="restoreEl"
            :open="modalDestroy"
            @submit="destroyConfirm"
            :loading-get="loadingGet"
            :loading-submit="requestSubmit"
          ></destroy>
        </div>
      </div>
      <div class="row" v-else>
          <div class="col-12 text-center">
              <h2 class="py-4">No hay pestañas creadas aún.</h2>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Skeleton } from "vue-loading-skeleton";
import NoData from "../../../components/NoData";
import DataTableDraggable from "../../../components/DataTableDraggable";
import Destroy from "../../../components/modals/Destroy";
import Button from "../../../components/Button";
import SkeletonForm from "../../../components/skeleton/form";
import vue2Dropzone from "vue2-dropzone";
import Quill from "quill";
import PlainClipboard from "../../../functions/PlainClipboard";
Quill.register("modules/clipboard", PlainClipboard, true);
import { quillEditor } from "vue-quill-editor";
export default {
  components: {
    Button,
    Skeleton,
    DataTableDraggable,
    NoData,
    Destroy,
    SkeletonForm,
    vueDropzone: vue2Dropzone,
    quillEditor,
  },
  props: {
    messageOrder: String,
  },
  data() {
    return {
      activeNav: 0,
      navs: [],
      elements: {},
      title: "",
      element: {},
      errors: {},
      loadingGet: false,
      loadingGetAll: false,
      requestSubmit: false,
      modalCreateUpdate: false,
      modalDestroy: false,
      dropzoneOptions: {
        url: "/",
        maxFiles: 1,
        acceptedFiles: "image/png,image/jpeg,image/jpg,image/svg+xml",
        autoProcessQueue: false,
        thumbnailWidth: 150,
        addRemoveLinks: true,
        dictRemoveFile: "Remover",
      },
      editorOptions: {
        placeholder: "",
        modules: {
          toolbar: {
            container: [
              ["bold", "italic", "underline", "strike"],
              ["blockquote"],
              [{ header: 1 }, { header: 2 }],
              //[{ list: "ordered" }, { list: "bullet" }],
              //[{ indent: "-1" }, { indent: "+1" }],
              //[{ size: [false] }],
              [{ header: [1, 2, 3, 4, 5, false] }],
              //[{ font: [false] }],
              [{ color: [] }, { background: [] }],
              [{ align: [] }],
              //['clean'],
              ["link"],
            ],
          },
        },
      },
    };
  },
  methods: {
    submit() {
      this.requestSubmit = true;
      let url;
      let method;
      const fd = new FormData();
      if (this.title == "Nuevo") {
        url = "informacion-cotizar/steps";
        method = "post";
      } else {
        url = "informacion-cotizar/steps" + "/" + this.element.id;
        method = "post";
        fd.append("_method", "put");
      }
      if (this.element.title) {
        fd.append("title", this.element.title);
      }
      if (this.element.description) {
        fd.append("description", this.element.description);
      }
      if (this.$refs.ref_image.dropzone.files[0]) {
        fd.append("image", this.$refs.ref_image.dropzone.files[0]);
      }
      fd.append("nav_id", this.activeNav);
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
      this.errors = {};
      this.elements = {};
      this.modalCreateUpdate = this.modalDestroy = false;
      this.element = {};
      this.getSteps(this.activeNav);
    },
    restoreEl() {
      this.errors = {};
      this.modalCreateUpdate = this.modalDestroy = false;
      this.element = {};
    },
    handleChange(elements) {
      axios
        .put("informacion-cotizar/steps/order", elements)
        .then((response) => {
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
        });
    },
    editEl(id) {
      this.title = "Actualizar";
      this.modalCreateUpdate = true;
      this.getEl(id);
    },
    destroyConfirm() {
      this.requestSubmit = true;
      axios
        .delete("informacion-cotizar/steps/delete/" + this.element.id)
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
    deleteEl(id) {
      this.modalDestroy = true;
      this.getEl(id);
    },
    getEl(id) {
      this.loadingGet = true;
      axios
        .get("informacion-cotizar/steps/json/get/" + id)
        .then((response) => {
          this.element = response.data;
          this.loadingGet = false;
        })
        .catch((error) => {});
    },
    newEl() {
      this.title = "Nuevo";
      this.modalCreateUpdate = true;
    },
    getNavs() {
      this.loadingNavs = true;
      axios
        .get("informacion-cotizar/navs/json/get-all")
        .then((response) => {
          this.navs = response.data.data;
          if (this.navs.length) {
            this.activeNav = this.navs[0].id;
            this.getSteps(this.activeNav);
          }
          this.loadingNavs = false;
        })
        .catch((error) => {});
    },
    getStepsChange(e) {
      this.getSteps(e.target.value);
    },
    getSteps(id) {
      this.elements.data = [];
      this.loadingGetAll = true;
      axios
        .get("informacion-cotizar/steps/json/get-all/" + id)
        .then((response) => {
          this.elements = response.data;
          this.loadingGetAll = false;
        })
        .catch((error) => {});
    },
  },
  created() {
    this.getNavs();
  },
};
</script>