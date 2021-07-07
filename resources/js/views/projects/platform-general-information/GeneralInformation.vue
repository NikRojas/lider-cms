<template>
  <div>
    <div class="row mb-5">
      <div class="col-12 col-lg-3">
        <h2>Información de plataforma comercial</h2>
      </div>
      <div class="col-12 col-lg-9">
        <div>
          <div class="text-right mb-3">
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
                <div class="col-12 ">
                  <div class="form-group">
                    <label class="font-weight-bold">Título principal:</label>
                    <p v-if="elText.tps_principal_title">
                      {{ elText.tps_principal_title }}
                    </p>
                    <p v-else>No registrado</p>
                  </div>
                </div>
                <div class="col-12 ">
                  <div class="form-group">
                    <label class="font-weight-bold">Descripción:</label>
                    <p
                      v-if="elText.tps_location_description"
                      v-html="elText.tps_location_description"
                    ></p>
                    <p v-else>No registrado</p>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-6">
                  <div class="form-group">
                    <label class="font-weight-bold">Latitud:</label>
                    <p v-if="elText.tps_latitude">
                      {{ elText.tps_latitude }}
                    </p>
                    <p v-else>No registrado</p>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-6">
                  <div class="form-group">
                    <label class="font-weight-bold">Longitud:</label>
                    <p v-if="elText.tps_longitude">
                      {{ elText.tps_longitude }}
                    </p>
                    <p v-else>No registrado</p>
                  </div>
                </div>

                <div class="col-12 ">
                  <div class="form-group">
                    <label class="font-weight-bold">Base Dscto CI(%):</label>
                    <p v-if="elText.tps_base_dsct_ci">
                      {{ elText.tps_base_dsct_ci }}
                    </p>
                    <p v-else>No registrado</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body" v-else>
              <div class="row">
                <div
                  class="col-12 col-md-6 col-lg-6 mb-4"
                  v-for="i in 4"
                  :key="i"
                >
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
                  <div class="col-12 ">
                    <div class="form-group">
                      <label class="font-weight-bold" for="tps_principal_title"
                        >Título Principal</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        v-model="elText.tps_principal_title"
                        id="tps_principal_title"
                      />
                      <label
                        v-if="errorsText && errorsText.tps_principal_title"
                        class="mt-2 text-danger text-sm"
                        for="tps_principal_title"
                        >{{ errorsText.tps_principal_title[0] }}</label
                      >
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="form-group">
                      <label
                        class="font-weight-bold"
                        for="tps_location_description"
                        >Descripción</label
                      >
                      <quill-Editor
                        @keydown.enter.prevent
                        v-model="elText.tps_location_description"
                        :options="editorOptions"
                        class="ql-height-10"
                        ref="ref_content"
                      ></quill-Editor>
                      <label
                        v-if="errorsText && errorsText.tps_location_description"
                        class="mt-2 text-danger text-sm"
                        for="tps_location_description"
                        >{{ errorsText.tps_location_description[0] }}</label
                      >
                    </div>
                  </div>

                  <div class="col-12 col-md-6 col-lg-6">
                    <div class="form-group">
                      <label class="font-weight-bold" for="tps_latitude"
                        >Latitud</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        v-model="elText.tps_latitude"
                        id="tps_latitude"
                      />
                      <label
                        v-if="errorsText && errorsText.tps_latitude"
                        class="mt-2 text-danger text-sm"
                        for="tps_latitude"
                        >{{ errorsText.tps_latitude[0] }}</label
                      >
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-lg-6">
                    <div class="form-group">
                      <label class="font-weight-bold" for="tps_longitude"
                        >Longitud</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        v-model="elText.tps_longitude"
                        id="tps_longitude"
                      />
                      <label
                        v-if="errorsText && errorsText.tps_longitude"
                        class="mt-2 text-danger text-sm"
                        for="tps_longitude"
                        >{{ errorsText.tps_longitude[0] }}</label
                      >
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="form-group">
                      <label class="font-weight-bold" for="tps_base_dsct_ci"
                        >Base Dscto CI(%)</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        v-model="elText.tps_base_dsct_ci"
                        id="tps_base_dsct_ci"
                      />
                      <label
                        v-if="errorsText && errorsText.tps_base_dsct_ci"
                        class="mt-2 text-danger text-sm"
                        for="tps_base_dsct_ci"
                        >{{ errorsText.tps_base_dsct_ci[0] }}</label
                      >
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
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../../../components/Button";
import BreadCrumb from "../../../components/BreadCrumb";
import SkeletonForm from "../../../components/skeleton/form";
import Input from "../../../components/form/Input";
import { Skeleton } from "vue-loading-skeleton";

import Quill from "quill";
import PlainClipboard from "../../../functions/PlainClipboard";
Quill.register("modules/clipboard", PlainClipboard, true);
import { quillEditor } from "vue-quill-editor";

export default {
  props: {
    elementParent: Object,
    routeGetText: String,
    routeUpdateText: String,
  },
  components: {
    Button,
    BreadCrumb,
    SkeletonForm,
    Input,
    Skeleton,
    quillEditor,
  },
  data() {
    return {
      editorOptions: {
        placeholder: "",
        modules: {
          toolbar: {
            container: [
              ["bold", "italic", "underline", "strike"],
              ["blockquote"],
              [{ header: 1 }, { header: 2 }],
              [{ list: "ordered" }, { list: "bullet" }],
              [{ indent: "-1" }, { indent: "+1" }],
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
      loadingGetText: false,
      elText: {},
      errorsText: {},
      editBlock: false,
      loadingGet: false,
      title: "",
      errors: {},
      startBlock: true,
      requestSubmit: false,
      info: false,
      project: {},
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

    getElText() {
      this.loadingGetText = true;
      axios
        .get(this.routeGetText, {
          params: {
            project_id: this.project.id,
          },
        })
        .then((response) => {
          if (response.data) {
            this.elText = response.data;
          }
          this.loadingGetText = false;
        })
        .catch((error) => {});
    },
  },
  watch: {
    elementParent: {
      immediate: true,
      handler: function (newValue) {
        this.project = newValue;
      },
    },
  },
  created() {
    this.getElText();
  },
};
</script>
