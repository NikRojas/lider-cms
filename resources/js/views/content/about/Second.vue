<template>
  <div class="row mb-5">
    <div class="col-12 col-lg-3">
      <h2>Compromiso con la calidad</h2>
      <p>
        Actualiza la sección Compromiso con la calidad, de la página
        <b>Nosotros</b>.
      </p>
    </div>
    <div class="col-12 col-lg-9">
      <div class="text-right mb-4">
        <div class="d-inline-block mr-3 mb-3 mb-lg-0" style="opacity: 0.75">
          <a style="cursor: pointer" @click.prevent="info = !info"
            ><jam-info
              height="14px"
              class="current-color"
              width="14px"
            ></jam-info>
            Ver Página Nosotros - 2da Sección
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
            <div class="text-primary h2">Página Nosotros - 2da Sección</div>
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
            <img src="/files/img/info/about-2.jpg" class="img-fluid" alt="" />
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
          @click.prevent="editEl"
          v-if="startBlock"
        >
          <span class="btn-inner--icon">
            <jam-info class="current-color"></jam-info>
          </span>
          <span class="btn-inner--text">Editar Sección</span>
        </a>
      </div>
      <div class="card mb-4" v-if="startBlock">
        <div class="card-body" v-if="!loadingGet">
          <div class="row">
            <div class="col-12 col-md-6 col-lg-6">
              <div class="form-group">
                <label class="font-weight-bold">Título ES</label>
                <p v-if="el.title_es">{{ el.title_es }}</p>
                <p v-else>No registrado</p>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-6">
              <div class="form-group">
                <label class="font-weight-bold">Título EN</label>
                <p v-if="el.title_en">{{ el.title_en }}</p>
                <p v-else>No registrado</p>
              </div>
            </div>

            <div class="col-12 col-md-6 col-lg-6">
              <div class="form-group">
                <label class="font-weight-bold">Descripción ES</label>
                <div v-if="el.description_es" v-html="el.description_es"></div>
                <p v-else>No registrado</p>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-6">
              <div class="form-group">
                <label class="font-weight-bold">Descripción EN</label>
                <div v-if="el.description_en" v-html="el.description_en"></div>
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
          <form @submit.prevent="update">
            <div class="row">
              <div class="col-12 col-md-12 col-lg-12">
                <div class="form-group">
                  <Input
                    label="Título"
                    variable="title"
                    :errors="errors"
                    :valueEn.sync="el.title_en"
                    :valueEs.sync="el.title_es"
                    :valueEnParent="el.title_en"
                    :valueEsParent="el.title_es"
                  />
                </div>
              </div>
              <div class="col-12 col-md-12 col-lg-12">
                <div class="form-group">
                  <Editor
                    size="md"
                    label="Descripción"
                    variable="description"
                    :errors="errors"
                    :valueEn.sync="el.description_en"
                    :valueEs.sync="el.description_es"
                    :valueEnParent="el.description_en"
                    :valueEsParent="el.description_es"
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
                  @click.prevent="restore"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Skeleton } from "vue-loading-skeleton";
import Editor from "../../../components/form/Editor";
import Input from "../../../components/form/Input";
import Button from "../../../components/Button";
export default {
  components: {
    Skeleton,
    Editor,
    Input,
    Button,
  },
  props: {
    routeGet: String,
    routeUpdate: String,
  },
  data() {
    return {
      startBlock: true,
      editBlock: false,
      el: {},
      loadingGet: false,
      requestSubmit: false,
      errors: {},
      info: false,
    };
  },
  methods: {
    restore() {
      this.el = {};
      this.errors = {};
      (this.startBlock = true), (this.editBlock = false);
      this.getEl();
    },
    editEl() {
      this.startBlock = false;
      this.editBlock = true;
    },
    getEl() {
      this.loadingGet = true;
      axios
        .get(this.routeGet)
        .then((response) => {
          if (response.data) {
            this.el = response.data;
          }
          this.loadingGet = false;
        })
        .catch((error) => {});
    },
    update() {
      this.requestSubmit = true;
      axios
        .post(this.routeUpdate, this.el)
        .then((response) => {
          this.requestSubmit = false;
          this.restore();
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
            this.errors = error.response.data.errors || {};
            return;
          }
          this.restore();
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
  },
  created() {
    this.getEl();
  },
};
</script>