<template>
  <div class="row mb-5">
    <div class="col-12 col-lg-3">
      <h2>Garantía Lider</h2>
      <p>Actualiza la sección Garantía Lider, de la página <b>Nosotros</b>.</p>
    </div>
    <div class="col-12 col-lg-9">
      <div class="text-right mb-3">
        <div class="d-inline-block mr-3 mb-3 mb-lg-0" style="opacity: 0.75">
          <a style="cursor: pointer" @click.prevent="info = !info"
            ><jam-info
              height="14px"
              class="current-color"
              width="14px"
            ></jam-info>
            Ver Página Nosotros - 4ta Sección
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
            <div class="text-primary h2">Página Nosotros - 4ta Sección</div>
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
            <img src="/files/img/info/about-4.jpg" class="img-fluid" alt="" />
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
          @click.prevent="newEl"
        >
          <span class="btn-inner--icon">
            <jam-plus class="current-color"></jam-plus>
          </span>
          <span class="btn-inner--text">Nuevo Elemento</span>
        </a>
      </div>
      <DataTableDraggable
        v-show="startBlock"
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
        <div class="text-primary h2">{{ title }} Elemento</div>
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
                <Editor
                  size="sm"
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
import Button from "../../../components/Button";
import DataTableDraggable from "../../../components/DataTableDraggable";
import BreadCrumb from "../../../components/BreadCrumb";
import SkeletonForm from "../../../components/skeleton/form";
import Destroy from "../../../components/modals/Destroy";
import Editor from "../../../components/form/Editor";
import Input from "../../../components/form/Input";
export default {
  props: {
    route: String,
    routeGetAll: String,
    routeOrder: String,
    messageOrder: String,
    imagesUrl: String,
  },
  components: {
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
      modalCreateUpdate: false,
      loadingGet: false,
      elements: {},
      element: {
        name: "",
        image: "",
        active: true,
      },
      title: "",
      errors: {},
      startBlock: true,
      requestSubmit: false,
      modalDestroy: false,
      info: false
    };
  },
  methods: {
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
  },
  created() {
    this.getEls();
  },
};
</script>
