<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-4">
            <div class="col-6 col-md-7">
              <BreadCrumb :title="startBlock ? 'Cami' : 'Actualizar Cami'" parent active="Cami"></BreadCrumb>
            </div>
            <div class="col-6 col-md-5 text-right">
              <a
                href="#"
                class="btn btn-icon btn-inverse-primary"
                @click.prevent="editEl"
                v-if="startBlock"
              >
                <span class="btn-inner--icon">
                  <jam-info class="current-color"></jam-info>
                </span>
                <span class="btn-inner--text">Editar Cami</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid mt--6">
      <div class="card mb-4" v-if="startBlock">
        <div class="card-body" v-if="!loadingGet">
          <div class="row">
            <div class="col-12 col-md-7 col-lg-7">
              <div class="form-group">
                <div class="form-group">
                  <label class="font-weight-bold d-block">Logo:</label>
                  <img
                    v-if="el.logo"
                    :src="imagesUrl+'/cami/'+el.logo"
                    :alt="el.title_es"
                    class="img-fluid"
                  />
                  <p v-else>No registrado</p>
                </div>
              </div>
            </div>
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

            <div class="col-12 col-md-6 col-lg-6">
              <div class="form-group">
                <label class="font-weight-bold">Título Team ES</label>
                <p v-if="el.title_team_es">{{ el.title_team_es }}</p>
                <p v-else>No registrado</p>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-6">
              <div class="form-group">
                <label class="font-weight-bold">Título Team EN</label>
                <p v-if="el.title_team_en">{{ el.title_team_en }}</p>
                <p v-else>No registrado</p>
              </div>
            </div>

            <div class="col-12 col-md-6 col-lg-6">
              <div class="form-group">
                <label class="font-weight-bold">Descripción Team ES</label>
                <div v-if="el.description_team_es" v-html="el.description_team_es"></div>
                <p v-else>No registrado</p>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-6">
              <div class="form-group">
                <label class="font-weight-bold">Descripción Team EN</label>
                <div v-if="el.description_team_en" v-html="el.description_team_en"></div>
                <p v-else>No registrado</p>
              </div>
            </div>

            <div class="col-12 col-md-6 col-lg-6">
              <div class="form-group">
                <label class="font-weight-bold">Título de Proyecto ES</label>
                <p v-if="el.title_projects_es">{{ el.title_projects_es }}</p>
                <p v-else>No registrado</p>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-6">
              <div class="form-group">
                <label class="font-weight-bold">Título de Proyecto EN</label>
                <p v-if="el.title_projects_en">{{ el.title_projects_en }}</p>
                <p v-else>No registrado</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card-body" v-else>
          <div class="row">
            <div class="col-12 col-lg-4" v-for="i in 3" :key="i">
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
                  <label class="font-weight-bold d-block" for="logo">Logo</label>
                  <div class="row">
                    <div v-bind:class="[ el.logo ? 'col-lg-4 mb-3 mb-lg-0' : '']">
                      <img v-if="el.logo" :src="imagesUrl+'/cami/'+el.logo" alt class="img-fluid" />
                    </div>
                    <div v-bind:class="[ el.logo ? 'col-lg-8' : 'col-lg-12']">
                      <vue-dropzone
                        ref="ref_logo"
                        @vdropzone-file-added="$validateImageDropzone($event,$refs.ref_logo.dropzone,1,100000,'100kb')"
                        id="id_logo"
                        :options="dropzoneOptions"
                        :duplicateCheck="true"
                        :useCustomSlot="true"
                      >
                        <div class="dropzone-custom-content">
                          <h5
                            class="dropzone-custom-title text-primary"
                          >Suelte el archivo aquí o haga click para cargarlo.</h5>
                        </div>
                      </vue-dropzone>

                      <label
                        v-if="errors && errors.logo"
                        class="text-danger text-sm d-block mt-2"
                        for="file"
                      >{{ errors.logo[0] }}</label>
                    </div>
                  </div>
                </div>
              </div>
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
                    size="sm"
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
              <div class="col-12 col-md-12 col-lg-12">
                <div class="form-group">
                  <Input
                    label="Título Team"
                    variable="title_team"
                    :errors="errors"
                    :valueEn.sync="el.title_team_en"
                    :valueEs.sync="el.title_team_es"
                    :valueEnParent="el.title_team_en"
                    :valueEsParent="el.title_team_es"
                  />
                </div>
              </div>

              <div class="col-12 col-md-12 col-lg-12">
                <div class="form-group">
                  <Editor
                    size="sm"
                    label="Descripción Team"
                    variable="description_team"
                    :errors="errors"
                    :valueEn.sync="el.description_team_en"
                    :valueEs.sync="el.description_team_es"
                    :valueEnParent="el.description_team_en"
                    :valueEsParent="el.description_team_es"
                  />
                </div>
              </div>

              <div class="col-12 col-md-12 col-lg-12">
                <div class="form-group">
                  <Input
                    label="Título de Proyecto"
                    variable="title_projects"
                    :errors="errors"
                    :valueEn.sync="el.title_projects_en"
                    :valueEs.sync="el.title_projects_es"
                    :valueEnParent="el.title_projects_en"
                    :valueEsParent="el.title_projects_es"
                  />
                </div>
              </div>

              <div class="col-12 text-right">
                <Button
                  :text="'Actualizar'"
                  :classes="['btn-inverse-primary']"
                  :request-server="requestSubmit"
                ></Button>
                <button type="button" class="btn btn-secondary" @click.prevent="restore">Cancelar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import vue2Dropzone from "vue2-dropzone";
import { Skeleton } from "vue-loading-skeleton";
import Button from "../components/Button";
import Input from "../components/form/Input";
import BreadCrumb from "../components/BreadCrumb";
import Editor from "../components/form/Editor";
import InputSelectArray from "../components/form/InputSelectArray";
export default {
  props: {
    routeGet: String,
    routeUpdate: String,
    imagesUrl: String,
  },
  components: {
    Button,
    vueDropzone: vue2Dropzone,
    BreadCrumb,
    Editor,
    Input,
    Skeleton,
    InputSelectArray,
  },
  data() {
    return {
      el: {},
      dropzoneOptions: {
        url: "/",
        maxFiles: 1,
        acceptedFiles: "image/png,image/jpeg,image/jpg,image/svg+xml",
        autoProcessQueue: false,
        thumbnailWidth: 150,
        addRemoveLinks: true,
        dictRemoveFile: "Remover",
      },
      errors: {},
      requestSubmit: false,
      startBlock: true,
      editBlock: false,
      loadingGet: false,
    };
  },
  methods: {
    update() {
      this.requestSubmit = true;
      const fd = new FormData();

      if (this.$refs.ref_logo.dropzone.files[0]) {
        fd.append("logo", this.$refs.ref_logo.dropzone.files[0]);
      }

      if (this.el.title_en) {
        fd.append("title_en", this.el.title_en);
      }
      if (this.el.title_es) {
        fd.append("title_es", this.el.title_es);
      }

      if (this.el.description_es) {
        fd.append("description_es", this.el.description_es);
      }
      if (this.el.description_en) {
        fd.append("description_en", this.el.description_en);
      }

      if (this.el.title_team_es) {
        fd.append("title_team_es", this.el.title_team_es);
      }
      if (this.el.title_team_en) {
        fd.append("title_team_en", this.el.title_team_en);
      }

      if (this.el.description_team_es) {
        fd.append("description_team_es", this.el.description_team_es);
      }
      if (this.el.description_team_en) {
        fd.append("description_team_en", this.el.description_team_en);
      }

      if (this.el.title_projects_es) {
        fd.append("title_projects_es", this.el.title_projects_es);
      }
      if (this.el.title_projects_en) {
        fd.append("title_projects_en", this.el.title_projects_en);
      }

      if (this.el.id) {
        fd.append("id", this.el.id);
      }

      axios
        .post(this.routeUpdate, fd)
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
          this.el = response.data;
          this.loadingGet = false;
        })
        .catch((error) => {});
    },
  },
  created() {
    this.getEl();
  },
};
</script>

