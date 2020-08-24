<template>
    <div>
        <form @submit.prevent="submit">
            <div class="header pb-6">
                <div class="container-fluid">
                <div class="header-body">
                    <div class="row align-items-center pt-0 pt-md-2 pb-4">
                    <div class="col-6 col-md-7">
                        <BreadCrumb title="Crear Proyecto" parent active="Proyectos"></BreadCrumb>
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
                            <div> 
                                <div class="row">
                                    <div class="col-12">
                                    <div class="form-group">
                                        <InputSlug
                                        :url="appUrl+'/blog/categoria/'"
                                        :slug.sync="post.slug"
                                        :name.sync="post.title"
                                        :name-prop="post.title"
                                        :slug-prop="post.slug"
                                        :category-slug.sync="post.category.slug"
                                        />
                                        <label
                                        v-if="errors && errors.title"
                                        class="mt-2 text-danger text-sm"
                                        for="id_title"
                                        >{{ errors.title[0] }}</label>
                                        <label
                                        v-if="errors && errors.slug"
                                        class="mt-2 text-danger text-sm"
                                        for="id_name"
                                        >{{ errors.slug[0] }}</label>
                                    </div>
                                    </div>
                                    <div class="col-12">
                                    <div class="form-group">
                                        <b-form-checkbox
                                        id="id_checkbox_published"
                                        v-model="post.published"
                                        name="id_checkbox_published"
                                        >Publicar</b-form-checkbox>
                                    </div>
                                    </div>


                                    <div class="col-12 ">
                                    <div class="form-group">
                                        <label class="font-weight-bold" for="id_tags">Tags</label>
                                        <vue-tags-input
                                        v-model="post.tags"
                                        :tags="tags"
                                        @tags-changed="newTags => tags = newTags"
                                        placeholder="Ingresa Tag"
                                        />
                                        <label
                                        v-if="errors && errors.tags"
                                        class="mt-2 text-danger text-sm"
                                        for="id_tags"
                                        >{{ errors.tags[0] }}</label>
                                    </div>
                                    </div>

                                    <div class="col-12">
                                    <div class="form-group">
                                        <label class="font-weight-bold" for="id_category">Categoría</label>

                                        <model-list-select
                                        :list="categories"
                                        id="id_category"
                                        class="form-control"
                                        v-model="post.category"
                                        option-value="id"
                                        option-text="name"
                                        placeholder="Seleccion la Categoría"
                                        ></model-list-select>

                                        <label
                                        v-if="errors && errors.category_id"
                                        class="mt-2 text-danger text-sm"
                                        for="id_category"
                                        >{{ errors.category_id[0] }}</label>
                                    </div>
                                    </div>
                                    <div class="col-12">
                                    <div class="form-group">
                                        <label class="font-weight-bold" for="id_excerpt">Breve Descripción</label>
                                        <textarea
                                        v-model="post.excerpt"
                                        rows="2"
                                        class="form-control "
                                        id="id_excerpt"
                                        placeholder="Breve Descripción"
                                        ></textarea>
                                        <label
                                        v-if="errors && errors.excerpt"
                                        class="mt-2 text-danger text-sm"
                                        for="id_excerpt"
                                        >{{ errors.excerpt[0] }}</label>
                                    </div>
                                    </div>

                                    <div class="col-12">
                                    <div class="form-group mb-0">
                                        <label class="font-weight-bold" for="id_content">Contenido</label>

                                        <file-upload
                                                                extensions="jpg,jpeg,png"
                                                                accept="image/png,image/jpeg,image/jpg"
                                                                class="d-none"
                                                                :drop="false"
                                                                :multiple="true"
                                                                v-model="post.images"
                                                                @input-filter="$uploadImageUploadComponent($event,$refs.ref_content,100000,'100kb','posts')"
                                                                ref="ref_content_images"
                                                                input-id="id_content_images">
                                                            </file-upload>

                                        <quill-Editor
                                        class="ql-height-25"
                                        @keydown.enter.prevent
                                        v-model="post.content"
                                        placeholder="Contenido"
                                        :options="editorOptions"
                                        ref="ref_content"
                                        ></quill-Editor>
                                        <label
                                        v-if="errors && errors.content"
                                        class="mt-2 text-danger text-sm"
                                        for="id_content"
                                        >{{ errors.content[0] }}</label>
                                    </div>
                                    </div>
                                </div> 
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-xl">
                        <div class="card">
                            <div class="card-body">

                            <div class="form-group">
                                <!--<label for="image" class="d-block">-->
                                <label class="font-weight-bold d-block"  for="thumbnail">Miniatura</label>

                                <img
                                    class="img-fluid mb-2"
                                    v-if="post.thumbnail"
                                    :src="'https://storage.googleapis.com/playgroup-web/img/posts/'+post.thumbnail"
                                    alt="Post"
                                />

                                <vue-dropzone
                                ref="ref_thumbnail"
                                @vdropzone-file-added="$validatethumbnailDropzone($event,$refs.ref_thumbnail.dropzone,1,100000,'100kb')"
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


                            <div class="form-group mb-0">
                                <!--<label for="image" class="d-block">-->
                                <label class="font-weight-bold d-block"  for="image">Imagen</label>

                                <img
                                    class="img-fluid mb-2"
                                    v-if="!image.length && post.image"
                                    :src="'https://storage.googleapis.com/playgroup-web/img/posts/'+post.image"
                                    alt="Post"
                                />

                                <vue-dropzone
                                ref="ref_image"
                                @vdropzone-file-added="$validateImageDropzone($event,$refs.ref_image.dropzone,1,100000,'100kb')"
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
        </form>
    </div>
</template>

<script>
import vue2Dropzone from "vue2-dropzone";
import BreadCrumb from "../../components/BreadCrumb";
import ImageForm from "../../components/form/Image";
import FinancialEntities from "../../components/form/FinancialEntities";
import Advisors from "../../components/form/Advisors";
import Statuses from "../../components/form/Statuses";
import Features from "../../components/form/Features";
import Ubigeo from "../../components/form/Ubigeo";
import Input from "../../components/form/Input";
import Button from "../../components/Button";
import Editor from "../../components/form/Editor";
import InputSlug from "../../components/form/InputSlug";
import { Money } from "v-money";
export default {
  components: {
    BreadCrumb,
    Money,
    Editor,
    Statuses,
    Ubigeo,
    vueDropzone: vue2Dropzone,
    ImageForm,
    Input,
    Button,
    FinancialEntities,
    Advisors,
    Features,
    InputSlug
  },
  props: {
    imagesUrl: String,
    routeStore: String,
    routeReturn: String,
    routeAdvisorsGetAll: String,
    routeFeaturesGetAll: String,
    routeFinancialGetAll: String,
    routeStatusesGetAll: String,
    routeFinancialCreate: String,
    routeStatusesCreate: String,
    routeFeaturesCreate: String,
    routeAdvisorsCreate: String,
    routeDepartmentsGet: String,
    routeDistrictsGet: String,
    routeProvincesGet: String,
  },
  data() {
    return {
      element: {},
      moneyLocal: {
        decimal: ",",
        thousands: ".",
        prefix: "S/ ",
        //suffix: ' #',
        precision: 2,
        masked: false,
      },
      moneyForeign: {
        decimal: ",",
        thousands: ".",
        prefix: "$ ",
        //suffix: ' #',
        precision: 2,
        masked: false,
      },
      requestServer: false,
      dropzoneOptions: {
        url: "/",
        maxFiles: 1,
        acceptedFiles: "image/png,image/jpeg,image/jpg,image/svg+xml",
        autoProcessQueue: false,
        thumbnailWidth: 150,
        addRemoveLinks: true,
        dictRemoveFile: "Remover",
      },
      dropzoneOptionsBrochure: {
        url: "/",
        maxFiles: 1,
        acceptedFiles: "application/pdf",
        autoProcessQueue: false,
        thumbnailWidth: 150,
        addRemoveLinks: true,
        dictRemoveFile: "Remover",
      },
      dropzoneOptionsMultiple: {
        url: "/",
        maxFiles: 4,
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
    submit() {
      this.requestServer = true;
      const fd = new FormData();
      if(this.$refs.ref_images.dropzone.files.length){
        this.$refs.ref_images.dropzone.files.forEach( (el, i) => {
          fd.append("images"+i,el);
        });
        fd.append('images_count',this.$refs.ref_images.dropzone.files.length);
      }
      if (this.element.name_en) {
        fd.append("name_en", this.element.name_en);
      }
      if (this.element.name_es) {
        fd.append("name_es", this.element.name_es);
      }
      if (this.element.slug_en) {
        fd.append("slug_en", this.element.slug_en);
      }
      if (this.element.slug_es) {
        fd.append("slug_es", this.element.slug_es);
      }
      if (this.element.banner_en) {
        fd.append("banner_en", this.element.banner_en);
      }
      if (this.element.banner_es) {
        fd.append("banner_es", this.element.banner_es);
      }
      if (this.$refs.ref_logo.dropzone.files[0]) {
        fd.append("logo", this.$refs.ref_logo.dropzone.files[0]);
      }
      if(this.element.project_status_id){
        fd.append("project_status_id", this.element.project_status_id);
      }
      if (this.element.description_en) {
        fd.append("description_en", this.element.description_en);
      }
      if (this.element.description_es) {
        fd.append("description_es", this.element.description_es);
      }
       if (this.element.location) {
        fd.append("location", this.element.location);
      }
      if (this.element.rooms_en) {
        fd.append("rooms_en", this.element.rooms_en);
      }
      if (this.element.rooms_es) {
        fd.append("rooms_es", this.element.rooms_es);
      }
      if (this.element.footage_en) {
        fd.append("footage_en", this.element.footage_en);
      }
      if (this.element.footage_es) {
        fd.append("footage_es", this.element.footage_es);
      }
      if (this.$refs.ref_brochure.dropzone.files[0]) {
        fd.append("brochure", this.$refs.ref_brochure.dropzone.files[0]);
      }
      if (this.element.text_place_en) {
        fd.append("text_place_en", this.element.text_place_en);
      }
      if (this.element.text_place_es) {
        fd.append("text_place_es", this.element.text_place_es);
      }
      if (this.element.url_google_maps) {
        fd.append("url_google_maps", this.element.url_google_maps);
      }
      if (this.element.url_waze) {
        fd.append("url_waze", this.element.url_waze);
      }
      if (this.element.map_indication_en) {
        fd.append("map_indication_en", this.element.map_indication_en);
      }
      if (this.element.map_indication_es) {
        fd.append("map_indication_es", this.element.map_indication_es);
      }
      if (this.element.sales_room_en) {
        fd.append("sales_room_en", this.element.sales_room_en);
      }
      if (this.element.sales_room_es) {
        fd.append("sales_room_es", this.element.sales_room_es);
      }
      if (this.element.schedule_attention_en) {
        fd.append("schedule_attention_en", this.element.schedule_attention_en);
      }
      if (this.element.schedule_attention_es) {
        fd.append("schedule_attention_es", this.element.schedule_attention_es);
      }
      if (this.element.map_indications_en) {
        fd.append("map_indications_en", this.element.map_indications_en);
      }
      if (this.element.map_indications_es) {
        fd.append("map_indications_es", this.element.map_indications_es);
      }
      if (this.element.price_total) {
        fd.append("price_total", this.element.price_total);
      }
      if (this.element.price_total_foreign) {
        fd.append("price_total_foreign", this.element.price_total_foreign);
      }
      if (this.element.price) {
        fd.append("price", this.element.price);
      }
      if (this.element.latitude) {
        fd.append("latitude", this.element.latitude);
      }
      if (this.element.longitude) {
        fd.append("longitude", this.element.longitude);
      }
      if (this.element.district) {
        fd.append("district", this.element.district);
      }
      if (this.element.department) {
        fd.append("department", this.element.department);
      }
      if (this.element.province) {
        fd.append("province", this.element.province);
      }
      if (this.element.advisors) {
        fd.append("advisors", JSON.stringify(this.element.advisors));
      }
      if (this.element.features) {
        fd.append("features", JSON.stringify(this.element.features));
      }
      if (this.element.financial_entities) {
        fd.append("financial_entities", JSON.stringify(this.element.financial_entities));
      }
      axios
        .post(this.routeStore, fd)
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
};
</script>