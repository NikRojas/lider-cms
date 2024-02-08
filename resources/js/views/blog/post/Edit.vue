<template>
  <div>
    <form @submit.prevent="submit">
      <div class="header pb-6">
        <div class="container-fluid">
          <div class="header-body">
            <div class="row align-items-center pt-0 pt-md-2 pb-4">
              <div class="col-6 col-md-7">
                <BreadCrumb title="Editar Post" parent active="Post"></BreadCrumb>
              </div>
              <div class="col-6 col-md text-right">
                <Button
                  :text="'Guardar'"
                  :classes="['btn-inverse-primary','mr-2']"
                  :request-server="requestServer"
                ></Button>
                <a type="button" class="btn btn-secondary" :href="routeReturn">Cancelar</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid mt--6">
        <div class="row">
          <div class="col-12 col-xl-8 mb-4 mb-xl-0">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-12">
                    <InputSlug
                      label="Titulo"
                      variable="title"
                      type="Ruta"
                      :errors="errors"
                      :valueEn.sync="element.title_en"
                      :valueEs.sync="element.title_es"
                      :slugEn.sync="element.slug_en"
                      :slugEs.sync="element.slug_es"
                      :valueEnParent="element.title_en"
                      :valueEsParent="element.title_es"
                      :slugEnParent="element.slug_en"
                      :slugEsParent="element.slug_es"
                    />
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <b-form-checkbox
                        id="id_checkbox_published"
                        v-model="element.published"
                        name="id_checkbox_published"
                      >Publicar</b-form-checkbox>
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="form-group">
                      <label class="font-weight-bold" for="created_at"
                        >Fecha de Publicación</label
                      >
                      <date-picker
                        :input-attr="{ id: 'created_at' }"
                        value-type="format"
                        v-model="element.created_at_format"
                        format="DD-MM-YYYY"
                        :first-day-of-week="1"
                        lang="es"
                        input-class="form-control"
                        width="100%"
                      >
                        <jam-calendar></jam-calendar>
                      </date-picker>
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="form-group">
                      <Input
                        label="Seo Keywords"
                        variable="seo_keywords"
                        :errors="errors"
                        :valueEn.sync="element.seo_keywords_en"
                        :valueEs.sync="element.seo_keywords_es"
                        :valueEnParent="element.seo_keywords_en"
                        :valueEsParent="element.seo_keywords_es"
                      />
                    </div>
                  </div>
                  <!--<div class="col-12">
                    <InputArray
                      fieldName="tags"
                      label="Tags"
                      :errorsProp.sync="errors"
                      :headers="[{variable: 'tag_es', label : 'Tag Español'},{ variable: 'tag_en', label: 'Tag Inglés'}]"
                      :array.sync="element.tags"
                      :array-prop="element.tags"
                    />
                  </div>-->

                  <div class="col-12">
                    <div class="form-group">
                      <label class="font-weight-bold" for="id_category">Categoría</label>

                      <model-list-select
                        :list="categories"
                        id="id_category_id"
                        class="form-control"
                        v-model="element.category"
                        option-value="id"
                        option-text="name_es"
                        placeholder="Seleccion la Categoría"
                      ></model-list-select>

                      <label
                        v-if="errors && errors.category_id"
                        class="mt-2 text-danger text-sm"
                        for="id_category_id"
                      >{{ errors.category_id[0] }}</label>
                    </div>
                  </div>
                  <div class="col-12">
                    <Textarea
                      label="Descripción"
                      variable="excerpt"
                      :errors="errors"
                      :valueEn.sync="element.excerpt_en"
                      :valueEs.sync="element.excerpt_es"
                      :valueEnParent="element.excerpt_en"
                      :valueEsParent="element.excerpt_es"
                    />
                  </div>

                  <div class="col-12">
                    <Editor
                      size="md"
                      label="Contenido"
                      variable="content"
                      :errors="errors"
                      :valueEn.sync="element.content_en"
                      :valueEs.sync="element.content_es"
                      :valueEnParent="element.content_en"
                      :valueEsParent="element.content_es"
                      :url="'/blog/posts/posts'"
                      :text-image="'image'"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-xl">
            <div class="card">
              <div class="card-body">
                <div class="form-group">
                  <label class="font-weight-bold d-block" for="thumbnail">Miniatura</label>
                  <small class=" d-block mb-0 lh-1">Resolución recomendada: 590x330px</small> 
                  <small class=" d-block mb-0 lh-1">Formato: JPG</small> 
                  <small class=" d-block mb-2 lh-1">Tamaño recomendado: No mayor a 150KB</small>
                  <div class="row">
                    <div class="col-lg-4 mb-3 mb-lg-0">
                      <img :src="imagesUrl+'/posts/'+element.thumbnail" alt class="img-fluid" />
                    </div>
                    <div class="col-lg-8">
                      <vue-dropzone
                        ref="ref_thumbnail"
                        @vdropzone-file-added="$validateImageDropzone($event,$refs.ref_thumbnail.dropzone,1,160000,'150kb')"
                        id="id_thumbnail"
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
                        v-if="errors && errors.thumbnail"
                        class="text-danger text-sm d-block mt-2"
                        for="file"
                      >{{ errors.thumbnail[0] }}</label>
                    </div>
                  </div>
                </div>

                <div class="form-group mb-0">
                  <label class="font-weight-bold d-block" for="image">Imagen</label>
                  <small class="d-block mb-0 lh-1">Resolución recomendada: 900x500px</small> 
                  <small class="d-block mb-0 lh-1">Formato: JPG</small> 
                  <small class="d-block mb-2 lh-1">Tamaño recomendado: No mayor a 250KB</small>
                  <div class="row">
                    <div class="col-lg-4 mb-3 mb-lg-0">
                      <img :src="imagesUrl+'/posts/'+element.image" alt class="img-fluid" />
                    </div>
                    <div class="col-lg-8">
                      <vue-dropzone
                        ref="ref_image"
                        @vdropzone-file-added="$validateImageDropzone($event,$refs.ref_image.dropzone,1,260000,'250kb')"
                        id="id_image"
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
                        v-if="errors && errors.image"
                        class="text-danger text-sm d-block mt-2"
                        for="file"
                      >{{ errors.image[0] }}</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import vue2Dropzone from "vue2-dropzone";
import BreadCrumb from "../../../components/BreadCrumb";
import Features from "../../../components/form/Features";
import Input from "../../../components/form/Input";
import Textarea from "../../../components/form/Textarea";
import Button from "../../../components/Button";
import Editor from "../../../components/form/Editor";
import InputSlug from "../../../components/form/InputSlug";
import InputArray from "../../../components/form/InputArray2";
import { ModelListSelect } from "vue-search-select";
export default {
  components: {
    BreadCrumb,
    DatePicker,
    Editor,
    vueDropzone: vue2Dropzone,
    Input,
    Textarea,
    Button,
    Features,
    InputSlug,
    InputArray,
    ModelListSelect,
  },
  props: {
    imagesUrl: String,
    routeUpdate: String,
    routeReturn: String,
    elementParent: Object,
  },
  data() {
    return {
      element: {},
      requestServer: false,
      categories: [],
      tags: [],
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
    };
  },
  methods: {
    getCategories() {
      axios
        .get("/json/select/categories")
        .then((response) => {
          this.categories = response.data;
        })
        .catch((err) => {});
    },
    submit() {
      this.requestServer = true;
      const fd = new FormData();

      if (this.$refs.ref_image.dropzone.files[0]) {
        fd.append("image", this.$refs.ref_image.dropzone.files[0]);
      }
      if (this.$refs.ref_thumbnail.dropzone.files[0]) {
        fd.append("thumbnail", this.$refs.ref_thumbnail.dropzone.files[0]);
      }

      if (this.element.title_en) {
        fd.append("title_en", this.element.title_en);
      }
      if (this.element.title_es) {
        fd.append("title_es", this.element.title_es);
      }

      if (this.element.seo_keywords_en) {
        fd.append("seo_keywords_en", this.element.seo_keywords_en);
      }
      if (this.element.seo_keywords_es) {
        fd.append("seo_keywords_es", this.element.seo_keywords_es);
      }

      if (this.element.slug_en) {
        fd.append("slug_en", this.element.slug_en);
      }
      if (this.element.slug_es) {
        fd.append("slug_es", this.element.slug_es);
      }

      if (this.element.created_at_format) {
        fd.append("created_at_format", this.element.created_at_format);
      }

      if (this.element.published) {
        fd.append("published", 1);
      } else {
        fd.append("published", 0);
      }

      /*if (this.element.tags) {
        fd.append("tags", JSON.stringify(this.element.tags));
      } else {
        fd.append("tags", JSON.stringify([{ tag_en: "", tag_es: "" }]));
      }*/

      if (this.element.category && this.element.category.id) {
        fd.append("category_id", this.element.category.id);
      } else {
        fd.append("category_id", "");
      }

      if (this.element.excerpt_en) {
        fd.append("excerpt_en", this.element.excerpt_en);
      }
      if (this.element.excerpt_es) {
        fd.append("excerpt_es", this.element.excerpt_es);
      }

      if (this.element.content_es) {
        fd.append("content_es", this.element.content_es);
      }
      if (this.element.content_en) {
        fd.append("content_en", this.element.content_en);
      }
      fd.append("id", this.element.id);

      fd.append("_method", "put");
      axios
        .post(this.routeUpdate + "/" + this.element.id, fd)
        .then((response) => {
          this.requestServer = false;
          document.location.href = response.data.route;
        })
        .catch((error) => {
          this.requestServer = false;
          if (error.response.status === 422) {
            this.errors = error.response.data.errors || {};
            return;
          }
          document.location.href = error.response.data.route;
        });
    },
  },
  watch: {
    elementParent: {
      immediate: true,
      handler: function (newValue) {
        this.element = newValue;
      },
    },
  },
  created() {
    this.getCategories();
  },
};
</script>