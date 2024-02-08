<template>
  <div class="row">
    <div class="col-12 col-lg-3">
      <h2>Servicio al Cliente</h2>
      <p>
        Actualiza la sección Servicio al Cliente, de la página <b>Nosotros</b>.
      </p>
    </div>
    <div class="col-12 col-lg-9">
      <div>
        <div class="text-right mb-3">
          <div class="d-inline-block mr-3 mb-3 mb-lg-0" style="opacity: 0.75">
          <a style="cursor: pointer" @click.prevent="info = !info"
            ><jam-info
              height="14px"
              class="current-color"
              width="14px"
            ></jam-info>
            Ver Página Nosotros - 5ta Sección
          </a>
        </div>

        <b-modal
          v-model="info"
          @close="info = false"
          no-close-on-esc
          no-close-on-backdrop
          centered
          size="xl"
          footer-class="border-0 pt-0"
          body-class="pt-0"
        >
          <template slot="modal-title">
            <div class="text-primary h2">Página Nosotros - 5ta Sección</div>
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
            <img src="/files/img/info/about-5.jpg" class="img-fluid" alt="" />
          </div>
          <template v-slot:modal-footer="{ ok }">
            <button type="button" class="btn btn-primary" @click="info = false">
              Aceptar
            </button>
          </template>
        </b-modal>
          <a
            href="#"
            class="btn btn-icon btn-inverse-primary"
            @click.prevent="editElText"
            v-if="startBlock"
          >
            <span class="btn-inner--icon">
              <jam-info class="current-color"></jam-info>
            </span>
            <span class="btn-inner--text">Editar Sección</span>
          </a>
        </div>
        <div class="card mb-4" v-if="startBlock">
          <div class="card-body" v-if="!loadingGetText">
            <div class="row">
              <div class="col-12 col-md-6 col-lg-6">
                <div class="form-group">
                  <label class="font-weight-bold">Título ES</label>
                  <p v-if="elText.title_es">{{ elText.title_es }}</p>
                  <p v-else>No registrado</p>
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-6">
                <div class="form-group">
                  <label class="font-weight-bold">Título EN</label>
                  <p v-if="elText.title_en">{{ elText.title_en }}</p>
                  <p v-else>No registrado</p>
                </div>
              </div>

              <div class="col-12 col-md-6 col-lg-6">
                <div class="form-group">
                  <label class="font-weight-bold">Descripción ES</label>
                  <div
                    v-if="elText.description_es"
                    v-html="elText.description_es"
                  ></div>
                  <p v-else>No registrado</p>
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-6">
                <div class="form-group">
                  <label class="font-weight-bold">Descripción EN</label>
                  <div
                    v-if="elText.description_en"
                    v-html="elText.description_en"
                  ></div>
                  <p v-else>No registrado</p>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body" v-else>
            <div class="row">
              <div class="col-12 mb-4" v-for="i in 2" :key="i">
                <div class="w-25">
                  <Skeleton height="15px" />
                </div>
                <div class="w-75">
                  <Skeleton height="50px" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-4" v-if="editBlock">
          <div class="card-body">
            <form @submit.prevent="updateText">
              <div class="row">
                <div class="col-12 col-md-12 col-lg-12">
                  <div class="form-group">
                    <Input
                      label="Título"
                      variable="title"
                      :errors="errorsText"
                      :valueEn.sync="elText.title_en"
                      :valueEs.sync="elText.title_es"
                      :valueEnParent="elText.title_en"
                      :valueEsParent="elText.title_es"
                    />
                  </div>
                </div>
                <div class="col-12 col-md-12 col-lg-12">
                  <div class="form-group">
                    <Editor
                      size="md"
                      label="Descripción"
                      variable="description"
                      :errors="errorsText"
                      :valueEn.sync="elText.description_en"
                      :valueEs.sync="elText.description_es"
                      :valueEnParent="elText.description_en"
                      :valueEsParent="elText.description_es"
                    />
                  </div>
                </div>

                <div class="col-12 text-right">
                  <Button
                    :text="'Actualizar'"
                    :classes="['btn-inverse-primary']"
                    :request-server="requestSubmit"
                  ></Button>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    @click.prevent="restoreText"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="text-right mb-4">
        <a
          href="#"
          class="btn btn-icon btn-inverse-primary"
          @click.prevent="newEl"
        >
          <span class="btn-inner--icon">
            <jam-plus class="current-color"></jam-plus>
          </span>
          <span class="btn-inner--text">Nuevo Servicio al Cliente</span>
        </a>
      </div>
      <DataTableDraggable
        :object.sync="elements"
        :buttonUpdate="true"
        :buttonDelete="true"
        :buttonDetail="false"
        @drag="orderElements"
        @edit="editEl"
        @delete="deleteEl"
        :message-order="messageOrder"
      ></DataTableDraggable>
    </div>
    <b-modal
      v-model="modalCreateUpdate"
      @close="restoreEl"
      no-close-on-esc
      no-close-on-backdrop
      centered
      size="lg"
      footer-class="border-0 pt-0"
      body-class="pt-0"
    >
      <template slot="modal-title">
        <div class="text-primary h2">{{ title }} Servicio al Cliente</div>
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
              <Input
                label="Título"
                variable="title"
                :errors="errors"
                :valueEn.sync="element.title_en"
                :valueEs.sync="element.title_es"
                :valueEnParent="element.title_en"
                :valueEsParent="element.title_es"
              />

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

    <destroy
      element="servicio al cliente"
      @cancel="restoreEl"
      :open="modalDestroy"
      @submit="destroyConfirm"
      :loading-get="loadingGet"
      :loading-submit="requestSubmit"
    ></destroy>
  </div>
</template>

<script>
import Button from "../../../components/Button";
import DataTableDraggable from "../../../components/DataTableDraggable";
import BreadCrumb from "../../../components/BreadCrumb";
import SkeletonForm from "../../../components/skeleton/form";
import Destroy from "../../../components/modals/Destroy";
import Editor from "../../../components/form/Editor";
import Input from "../../../components/form/Input";
import { Skeleton } from "vue-loading-skeleton";
export default {
  props: {
    route: String,
    routeGetAll: String,
    routeOrder: String,
    messageOrder: String,
    imagesUrl: String,
    routeGetText: String,
    routeUpdateText: String,
  },
  components: {
    Skeleton,
    Destroy,
    DataTableDraggable,
    Button,
    BreadCrumb,
    SkeletonForm,
    Editor,
    Input,
  },
  data() {
    return {
      startBlock: true,
      editBlock: false,
      modalCreateUpdate: false,
      loadingGet: false,
      loadingGetText: false,
      elements: {},
      element: {
        name: "",
        image: "",
        active: true,
      },
      elText: {},
      title: "",
      errors: {},
      errorsText: {},
      requestSubmit: false,
      modalDestroy: false,
      info: false,
    };
  },
  methods: {
    restoreText() {
      this.elText = {};
      this.errorsText = {};
      (this.startBlock = true), (this.editBlock = false);
      this.getElText();
    },
    editElText() {
      this.startBlock = false;
      this.editBlock = true;
    },
    updateText() {
      this.requestSubmit = true;
      axios
        .post(this.routeUpdateText, this.elText)
        .then((response) => {
          this.requestSubmit = false;
          this.restoreText();
          Swal.fire({
            title: response.data.title,
            text: response.data.message,
            type: "success",
            confirmButtonText: "Ok",
            buttonsStyling: false,
            customClass: {
              confirmButton: "btn btn-inverse-primary",
            },
          });
        })
        .catch((error) => {
          this.requestSubmit = false;
          if (error.response.status === 422) {
            this.errorsText = error.response.data.errors || {};
            return;
          }
          this.restoreText();
          Swal.fire({
            title: error.response.data.title,
            text: error.response.data.message,
            type: "error",
            confirmButtonText: "Ok",
            buttonsStyling: false,
            customClass: {
              confirmButton: "btn btn-inverse-primary",
            },
          });
        });
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
      if (this.element.title_es) {
        fd.append("title_es", this.element.title_es);
      }
      if (this.element.title_en) {
        fd.append("title_en", this.element.title_en);
      }
      if (this.element.description_es) {
        fd.append("description_es", this.element.description_es);
      }
      if (this.element.description_en) {
        fd.append("description_en", this.element.description_en);
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
    restoreEl() {
      this.errors = {};
      this.requestSubmit = this.modalCreateUpdate = this.modalDestroy = false;
      this.element = {
        name: "",
        image: "",
        active: true,
      };
    },
    restore() {
      this.errors = {};
      this.elements = {};
      this.requestSubmit = this.modalCreateUpdate = this.modalDestroy = false;
      this.element = {
        name: "",
        image: "",
        active: true,
      };
      this.getEls();
    },
    orderElements(elements) {
      axios
        .put(this.routeOrder, elements)
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
          this.restore();
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
    editEl(id) {
      this.title = "Actualizar";
      this.modalCreateUpdate = true;
      this.getEl(id);
    },
    destroyConfirm() {
      this.requestSubmit = true;
      axios
        .delete(this.route + "/" + this.element.id)
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
          this.restoreEl();
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
    deleteEl(id) {
      this.modalDestroy = true;
      this.getEl(id);
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
    newEl() {
      this.title = "Nuevo";
      this.modalCreateUpdate = true;
    },
    getEls() {
      this.loadingGet = true;
      axios
        .get(this.routeGetAll)
        .then((response) => {
          this.elements = response.data;
          this.loadingGet = false;
        })
        .catch((error) => {});
    },
    getElText() {
      this.loadingGetText = true;
      axios
        .get(this.routeGetText)
        .then((response) => {
          if (response.data) {
            this.elText = response.data;
          }
          this.loadingGetText = false;
        })
        .catch((error) => {});
    },
  },
  created() {
    this.getElText();
    this.getEls();
  },
};
</script>
