<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-4">
            <div class="col-6 col-md-7">
              <BreadCrumb
                :show-bread-crumb="false"
                title="Proyectos en los que interviene CAMI"
              ></BreadCrumb>
            </div>
            <div class="col-6 col-md-5 text-right">
              <div
                class="d-inline-block mr-3 mb-3 mb-lg-0"
                style="opacity: 0.75"
              >
                <a style="cursor: pointer" @click.prevent="info = !info"
                  ><jam-info
                    height="14px"
                    class="current-color"
                    width="14px"
                  ></jam-info>
                  Ver Página Cami - 2da Sección
                </a>
              </div>

              <b-modal
                v-model="info"
                @close="info = false"
                no-close-on-esc
                no-close-on-backdrop
                centered
                size="lg"
                footer-class="border-0 pt-0"
                body-class="pt-0"
              >
                <template slot="modal-title">
                  <div class="text-primary h2">Página Cami - 2da Sección</div>
                </template>
                <template slot="modal-header-close">
                  <button
                    type="button"
                    class="btn p-0 bg-transparent"
                    @click="info = false"
                  >
                    <jam-close></jam-close>
                  </button>
                </template>
                <div class="my-2">
                  <img
                    src="/files/img/info/cami-2.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <template v-slot:modal-footer="{ ok }">
                  <button
                    type="button"
                    class="btn btn-primary"
                    @click="info = false"
                  >
                    Aceptar
                  </button>
                </template>
              </b-modal>

              <a
                href="#"
                class="btn btn-icon btn-inverse-primary"
                @click.prevent="newEl"
              >
                <span class="btn-inner--icon">
                  <jam-heart class="current-color" />
                </span>
                <span class="btn-inner--text">Nuevo Proyecto</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid mt--6">
      <div class="row" v-if="loadingEls">
        <div class="col-12 col-md-6 col-lg-3 mb-4" v-for="i in 8" :key="i">
          <Skeleton height="150px" />
        </div>
      </div>
      <div v-else>
        <div class="row" v-if="elements.length">
          <div class="col-12">
            <p>{{ messageOrder }}</p>
          </div>
        </div>
        <draggable
          class="row"
          v-if="elements.length"
          v-model="elements"
          @change="handleChange"
        >
          <div
            class="col-12 col-md-6 col-lg-3 mb-4"
            v-for="(el, i) in elements"
            :key="el.id"
          >
            <div class="card">
              <div class="card-body">
                <div class="text-center mb-3">
                  <img
                    :src="imagesUrl + '/cami-elements/' + el.image"
                    :alt="el.name"
                    class="img-fluid"
                  />
                </div>
                <h3 class="mb-1">
                  <span class="font-weight-normal">Nombre ES:</span>
                  {{ el.name_es }}
                </h3>
                <h3 class="mb-1">
                  <span class="font-weight-normal">Nombre EN:</span>
                  {{ el.name_en }}
                </h3>
                <div class="mt-4 text-center">
                  <button
                    @click="detailEl(el.id)"
                    class="btn btn-inverse-primary btn-sm"
                  >
                    Ver
                  </button>
                  <button
                    @click="editEl(el.id)"
                    class="btn btn-inverse-info btn-sm"
                  >
                    Editar
                  </button>
                  <button
                    @click="deleteEl(el.id)"
                    class="btn btn-inverse-danger btn-sm"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </draggable>
        <NoData v-else />
      </div>
    </div>

    <b-modal
      v-model="modalCreateUpdate"
      @close="restoreEl"
      no-close-on-esc
      no-close-on-backdrop
      centered
      size="xl"
      footer-class="border-0 pt-0"
      body-class="pt-0"
    >
      <template slot="modal-title">
        <div class="text-primary h2">{{ title }} Proyecto</div>
      </template>
      <template slot="modal-header-close">
        <button type="button" class="btn p-0 bg-transparent" @click="restoreEl">
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
                <Input
                  label="Nombre"
                  variable="name"
                  :errors="errors"
                  :valueEn.sync="element.name_en"
                  :valueEs.sync="element.name_es"
                  :valueEnParent="element.name_en"
                  :valueEsParent="element.name_es"
                />
              </div>
            </div>

            <div class="col-12">
              <div class="form-group">
                <Editor
                  size="md"
                  label="Descripción"
                  variable="description"
                  :errors="errors"
                  :valueEn.sync="element.description_en"
                  :valueEs.sync="element.description_es"
                  :valueEnParent="element.description_en"
                  :valueEsParent="element.description_es"
                />
              </div>
            </div>

            <div class="col-12 col-lg-6">
              <div class="form-group">
                <label class="font-weight-bold" for="image"
                  >Imagen Video:</label
                >
                <div class="row">
                  <div class="col text-center" v-if="element.image">
                    <img
                      :src="imagesUrl + '/cami-elements/' + element.image"
                      :alt="element.name"
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
                          100000,
                          '100kb'
                        )
                      "
                      id="image"
                      :options="dropzoneOptions"
                      :duplicateCheck="true"
                      :useCustomSlot="true"
                    >
                      <div class="dropzone-custom-content">
                        <h5 class="dropzone-custom-title text-primary">
                          Suelte los archivos aquí o haga click para cargarlos.
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

            <div class="col-12 col-lg-6">
              <div class="form-group">
                <label class="font-weight-bold" for="url"
                  >URL Video Youtube</label
                >
                <input
                  type="text"
                  class="form-control"
                  v-model="element.url_video"
                  id="url_video"
                />
                <small id="url_video" class="form-text" style="opacity: 0.7"
                  >El formato de la URL debe ser
                  "https://www.youtube.com/watch?v=N1bWwEfIDP0".</small
                >
                <label
                  v-if="errors && errors.url_video"
                  class="mt-2 text-danger text-sm"
                  for="url_video"
                  >{{ errors.url_video[0] }}</label
                >
              </div>
            </div>

            <div class="col-12">
              <div class="form-group">
                <Editor
                  size="md"
                  label="Descripción Video"
                  variable="description_video"
                  :errors="errors"
                  :valueEn.sync="element.description_video_en"
                  :valueEs.sync="element.description_video_es"
                  :valueEnParent="element.description_video_en"
                  :valueEsParent="element.description_video_es"
                />
              </div>
            </div>

            <div class="col-12">
              <div class="form-group">
                <Input
                  label="Titulo Elementos"
                  variable="title_elements"
                  :errors="errors"
                  :valueEn.sync="element.title_elements_en"
                  :valueEs.sync="element.title_elements_es"
                  :valueEnParent="element.title_elements_en"
                  :valueEsParent="element.title_elements_es"
                />
              </div>
            </div>

            <div class="col-12">
              <MultipleElements
                fieldName="images"
                :errors="errors"
                :showIconField="true"
                :messageOrder="messageOrder"
                :files.sync="element.files"
                :icons.sync="element.icons"
                :imagesUrl="imagesUrl"
                :filesParent="element.files"
                :iconsParent="element.icons"
                folder="cami-elements"
              />
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
        <button type="button" class="btn btn-secondary" @click="restoreEl">
          Cancelar
        </button>
      </template>
    </b-modal>

    <b-modal
      v-model="modalDetail"
      @close="restoreEl"
      no-close-on-esc
      no-close-on-backdrop
      centered
      size="xl"
      footer-class="border-0 pt-0"
      body-class="pt-0"
    >
      <template slot="modal-title">
        <div class="text-primary h2">{{ title }} Proyecto</div>
      </template>
      <template slot="modal-header-close">
        <button type="button" class="btn p-0 bg-transparent" @click="restoreEl">
          <jam-close></jam-close>
        </button>
      </template>
      <div v-if="loadingGet">
        <SkeletonForm></SkeletonForm>
      </div>
      <div v-else>
        <div class="row">
          <div class="col-12 col-md-6">
            <div class="form-group">
              <label class="font-weight-bold">Nombre Español:</label>
              <template v-if="element.name_es">
                <p>{{ element.name_es }}</p>
              </template>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="form-group">
              <label class="font-weight-bold">Nombre Inglés:</label>
              <template v-if="element.name_en">
                <p>{{ element.name_en }}</p>
              </template>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="form-group">
              <label class="font-weight-bold">Descripción Español:</label>
              <template v-if="element.description_es">
                <div v-html="element.description_es"></div>
              </template>
            </div>
          </div>

          <div class="col-12 col-md-6">
            <div class="form-group">
              <label class="font-weight-bold">Descripción Inglés:</label>
              <template v-if="element.description_en">
                <div v-html="element.description_en"></div>
              </template>
            </div>
          </div>

          <div class="col-12 col-lg-6">
            <div class="form-group">
              <label class="font-weight-bold" for="image">Imagen Video:</label>
              <div class="row">
                <div class="col" v-if="element.image">
                  <img
                    :src="imagesUrl + '/cami-elements/' + element.image"
                    class="img-fluid"
                    :alt="element.name"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-lg-6">
            <div class="form-group">
              <h3 class="font-weight-normal">
                <span class="d-block font-weight-bold">Video:</span>
              </h3>
              <iframe
                id="player"
                type="text/html"
                width="100%"
                height="360"
                v-if="element.url_video"
                :src="'https://www.youtube.com/embed/' + element.id_video"
                frameborder="0"
              ></iframe>
              <p v-else>No se ha registrado un video.</p>
            </div>
          </div>

          <div class="col-12 col-md-6">
            <div class="form-group">
              <label class="font-weight-bold">Descripción Video Español:</label>
              <template v-if="element.description_video_es">
                <div v-html="element.description_video_es"></div>
              </template>
            </div>
          </div>

          <div class="col-12 col-md-6">
            <div class="form-group">
              <label class="font-weight-bold">Descripción Video Inglés:</label>
              <template v-if="element.description_video_en">
                <div v-html="element.description_video_en"></div>
              </template>
            </div>
          </div>

          <div class="col-12 col-md-6">
            <div class="form-group">
              <label class="font-weight-bold">Titulo Elementos Español:</label>
              <template v-if="element.title_elements_es">
                <div v-html="element.title_elements_es"></div>
              </template>
              <p v-else>No registrado</p>
            </div>
          </div>

          <div class="col-12 col-md-6">
            <div class="form-group">
              <label class="font-weight-bold">Titulo Elementos Inglés:</label>
              <template v-if="element.title_elements_en">
                <div v-html="element.title_elements_en"></div>
              </template>
              <p v-else>No registrado</p>
            </div>
          </div>

          <div class="col-12">
            <div class="card">
              <div class="table-responsive">
                <table class="table align-items-center mb-3">
                  <thead class="thead-light">
                    <tr>
                      <th>Elementos</th>
                      <th></th>
                    </tr>
                  </thead>
                </table>

                <template class="row" v-for="(el, index) in element.files">
                  <div class="col-12" :key="index">
                    <div class="row">
                      <div class="col-12 col-lg-6">
                        <div class="form-group">
                          <label class="font-weight-bold" for="image"
                            >Imagen:</label
                          >
                          <div class="row">
                            <div class="col text-center" v-if="el.file">
                              <img
                                :src="imagesUrl + '/cami-elements/' + el.file"
                                class="img-fluid"
                                :alt="el.name"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 col-lg-6">
                        <div class="row">
                          <div class="col-12">
                            <div class="form-group">
                              <label class="font-weight-bold">Icono:</label>
                              <div class="text-center">
                                <img
                                  :src="imagesUrl + '/cami-elements/' + el.icon"
                                  :alt="el.name"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="col-12 col-lg-6">
                            <div class="form-group">
                              <label class="font-weight-bold"
                                >Título Español:</label
                              >
                              <template v-if="el.title_es">
                                <p>{{ el.title_es }}</p>
                              </template>
                            </div>
                          </div>
                          <div class="col-12 col-lg-6">
                            <div class="form-group">
                              <label class="font-weight-bold"
                                >Título Inglés:</label
                              >
                              <template v-if="el.title_en">
                                <p>{{ el.title_en }}</p>
                              </template>
                            </div>
                          </div>
                          <div class="col-12 col-lg-6">
                            <div class="form-group">
                              <label class="font-weight-bold"
                                >Descripción Español:</label
                              >
                              <template v-if="el.description_es">
                                <div v-html="el.description_es"></div>
                              </template>
                            </div>
                          </div>
                          <div class="col-12 col-lg-6">
                            <div class="form-group">
                              <label class="font-weight-bold"
                                >Descripción Inglés:</label
                              >
                              <template v-if="el.description_en">
                                <div v-html="el.description_en"></div>
                              </template>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
      <template v-slot:modal-footer="{ ok }">
        <button type="button" class="btn btn-primary" @click="restoreEl">
          Aceptar
        </button>
      </template>
    </b-modal>

    <destroy
      element="elemento"
      @cancel="restoreEl"
      :open="modalDestroy"
      @submit="destroyConfirm"
      :loading-get="loadingGet"
      :loading-submit="requestSubmit"
    ></destroy>
  </div>
</template>
<script>
import BreadCrumb from "../components/BreadCrumb";
import draggable from "vuedraggable";
import vue2Dropzone from "vue2-dropzone";
import Button from "../components/Button";
import Input from "../components/form/Input";
import { Skeleton } from "vue-loading-skeleton";
import Editor from "../components/form/Editor";
import Destroy from "../components/modals/Destroy";
import SkeletonForm from "../components/skeleton/form";
import MultipleElements from "../components/form/MultipleElements";
import NoData from "../components/NoData";
export default {
  components: {
    BreadCrumb,
    messageCantDelete: String,
    Destroy,
    Button,
    Input,
    vueDropzone: vue2Dropzone,
    Skeleton,
    SkeletonForm,
    MultipleElements,
    draggable,
    Input,
    Editor,
    NoData,
  },
  props: {
    route: String,
    routeGetAll: String,
    routeOrder: String,
    imagesUrl: String,
    messageOrder: String,
  },
  data() {
    return {
      info: false,
      errors: {},
      requestSubmit: false,
      modalCreateUpdate: false,
      modalDetail: false,
      modalDestroy: false,
      loadingGet: false,
      loadingEls: false,
      loadingSubmit: false,
      //showLoading: false,
      elements: {},
      title: "",
      element: {
        image: "",
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
    };
  },
  methods: {
    handleChange() {
      axios
        .put(this.routeOrder, this.elements)
        .then((response) => {
          this.restore();
          Swal.fire({
            title: response.data.title,
            text: response.data.message,
            type: "success",
            confirmButtonText: "OK",
            buttonsStyling: false,
            customClass: {
              confirmButton: "btn btn-primary",
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
              confirmButton: "btn btn-primary",
            },
          });
        });
    },
    destroyConfirm() {
      this.requestSubmit = true;
      axios
        .delete(this.route + "/" + this.element.id)
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
    newEl() {
      this.title = "Nuevo";
      this.modalCreateUpdate = true;
    },
    editEl(id) {
      this.title = "Actualizar";
      this.modalCreateUpdate = true;
      this.getEl(id);
    },
    detailEl(id) {
      this.title = "Detalle de ";
      this.modalDetail = true;
      this.getEl(id);
    },
    submit() {
      this.requestSubmit = true;
      let url;
      let method;
      const fd = new FormData();
      if (this.title == "Nuevo") {
        url = this.route;
        method = "post";
      } else {
        url = this.route + "/" + this.element.id;
        method = "post";
        fd.append("_method", "put");
      }
      if (this.element.name_es) {
        fd.append("name_es", this.element.name_es);
      }
      if (this.element.name_en) {
        fd.append("name_en", this.element.name_en);
      }
      if (this.element.description_es) {
        fd.append("description_es", this.element.description_es);
      }
      if (this.element.description_en) {
        fd.append("description_en", this.element.description_en);
      }
      if (this.element.url_video) {
        fd.append("url_video", this.element.url_video);
      }
      if (this.element.description_video_es) {
        fd.append("description_video_es", this.element.description_video_es);
      }
      if (this.element.description_video_en) {
        fd.append("description_video_en", this.element.description_video_en);
      }
      if (this.element.title_elements_es) {
        fd.append("title_elements_es", this.element.title_elements_es);
      }
      if (this.element.title_elements_en) {
        fd.append("title_elements_en", this.element.title_elements_en);
      }
      if (this.$refs.ref_image.dropzone.files[0]) {
        fd.append("image", this.$refs.ref_image.dropzone.files[0]);
      }
      /*if (this.$refs.ref_icon.dropzone.files[0]) {
        fd.append("icon", this.$refs.ref_icon.dropzone.files[0]);
      }*/

      if (this.element.files && this.element.files.length) {
        fd.append("elements_count", this.element.files.length);
        fd.append("files", JSON.stringify(this.element.files));
        fd.append("icons", JSON.stringify(this.element.icons));
      }

      if (this.element.files && this.element.files.length) {
        this.element.files.forEach((el, i) => {
          fd.append("images" + i, el.file);
          fd.append("icons" + i, el.icon);
          fd.append("title_es" + i, el.title_es);
          fd.append("title_en" + i, el.title_en);
          fd.append("description_es" + i, el.description_es);
          fd.append("description_en" + i, el.description_en);
        });
      }
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
      (this.element = {
        image: "",
      }),
        (this.modalCreateUpdate = this.modalDestroy = false);
      this.getEls();
      this.errors = {};
    },
    deleteEl(id) {
      this.modalDestroy = true;
      this.getEl(id);
    },
    restoreEl() {
      (this.element = {
        image: "",
      }),
        (this.modalCreateUpdate = this.modalDestroy = this.modalDetail = false);
      this.errors = {};
    },
    getEls() {
      this.loadingEls = true;
      axios
        .get(this.routeGetAll)
        .then((response) => {
          this.elements = response.data;
          this.loadingEls = false;
        })
        .catch((error) => {});
    },
    getEl(id) {
      this.loadingGet = true;
      axios
        .get(this.route + "/json/get/" + id)
        .then((response) => {
          this.element = response.data;
          this.loadingGet = false;
        })
        .catch((error) => {});
    },
  },
  created() {
    this.getEls();
  },
};
</script>