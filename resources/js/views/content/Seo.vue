<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-4">
            <div class="col-12"> <BreadCrumb title="SEO" parent="Información" active="SEO"></BreadCrumb></div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid mt--6">
      <Loader :iconHeight="30" :iconWidth="30" :style="{ display: 'inline-block', height: '400px' }" v-if="requestServerGet"/>
          <div class="row" v-else>
            <div class="col-lg-4 col-md-6 col-12 mb-4" v-for="page in pages" :key="page.id">
              <form @submit.prevent="updatePage">
                <div v-if="pageSelected != page.id">
                  <div
                    class="img-holder bg-seo card-img-top position-relative"
                    v-if="page.seo_image"
                    :style="{ 'background-image': 'url('+ assetUrl + '/storage/img/pages/' + page.seo_image +')' }"
                  >
                    <a
                      :href="assetUrl + '/storage/img/pages/'+page.seo_image"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="btn btn-primary btn-sm right position-absolute m-2"
                    >Ver Imagen</a>
                  </div>

                </div>


                <div class="card">
                  <div class="card-body ">

                    <div>

                      <div class="form-group" v-if="editBlock && pageSelected == page.id">
                          <label for="id_imagen" class="font-weight-bold mb-0">Imagen</label>
                          <small class="text-muted d-block mb-0 lh-1">Resolución recomendada: 1200x900px</small>
                          <small class="text-muted d-block mb-2 lh-1">Tamaño recomendado: Menor a 100kb</small>
                          <vue-dropzone
                            ref="ref_image"
                            @vdropzone-file-added="$validateImageDropzone($event,$refs.ref_image[0].dropzone,1,100000,'100kb')"
                            id="id_imagen"
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
                            v-if="errors && errors.imagen"
                            class="text-danger text-sm d-block"
                            for="id_imagen"
                          >{{ errors.imagen[0] }}</label>
                        </div>
                  
                      <div class="text-right" v-if="!editBlock">
                        <a style="text-decoration: underline;" target="_blank" rel="noopener noreferrer" :href="appUrl+(page.slug_es ? '/' +page.slug_es : '' )" class="d-inline-block">{{ appUrl}}<small v-if="page.slug_es">/{{ page.slug_es }}</small></a> <br>
                        <a style="text-decoration: underline;" target="_blank" rel="noopener noreferrer" :href="appUrl+(page.slug_en ? '/en/' +page.slug_en : '/en' )" class="d-inline-block">{{ appUrl}}<small v-if="page.slug_en">/en/{{ page.slug_en }}</small ><small v-else>/en</small></a>
                      </div>
                      <h4
                        class="mb-3 font-weight-bold"
                        v-if="pageSelected != page.id"
                      >Título ES: {{ page.title_es }} <br> Título EN: {{ page.title_en }}</h4>
                      <div class="form-group" v-if="editBlock && pageSelected == page.id">
                        <Input
                          label="Título"
                          variable="title"
                          :errors="errors"
                          :valueEn.sync="page.title_en"
                          :valueEs.sync="page.title_es"
                          :valueEnParent="page.title_en"
                          :valueEsParent="page.title_es"
                        />
                      </div>
                      <div class="mb-2">
                        <div v-if="pageSelected != page.id">
                          <p class="mb-0 text-primary font-weight-bold">Descripción SEO</p>
                          <div>
                            <p class="project-description mb-0" v-if="page.seo_description_es">ES: {{ page.seo_description_es }}</p>
                            <p class="mb-0" v-else>ES: No registrado</p>
                          </div>
                          <div>
                            <p class="project-description mb-0" v-if="page.seo_description_en">EN: {{ page.seo_description_en }}</p>
                            <p class="mb-0" v-else>ES: No registrado</p>
                          </div>
                        </div>
                        <div
                          class="form-group"
                          v-if="editBlock && pageSelected == page.id"
                        >
                          <Textarea
                          label="Descripción SEO"
                          variable="seo_description"
                          :errors="errors"
                          :valueEn.sync="page.seo_description_en"
                          :valueEs.sync="page.seo_description_es"
                          :valueEnParent="page.seo_description_en"
                          :valueEsParent="page.seo_description_es"
                          />
                        </div>
                      </div>
                      <div>
                        <div v-if="pageSelected != page.id">
                          <p class="mb-0 text-primary font-weight-bold">Keywords SEO</p>
                          <div>
                            <p class="mb-0" v-if="page.seo_keywords_es">ES: {{ page.seo_keywords_es }}</p>
                            <p class="mb-0" v-else>ES: No registrado</p>
                          </div>
                          <div>
                            <p class="mb-0" v-if="page.seo_keywords_en">EN: {{ page.seo_keywords_en }}</p>
                            <p class="mb-0" v-else>EN: No registrado</p>
                          </div>
                        </div>
                        <div
                          class="form-group"
                          v-if="editBlock && pageSelected == page.id"
                        >
                          <Textarea
                          label="Keywords SEO"
                          variable="seo_keywords"
                          :errors="errors"
                          :valueEn.sync="page.seo_keywords_en"
                          :valueEs.sync="page.seo_keywords_es"
                          :valueEnParent="page.seo_keywords_en"
                          :valueEsParent="page.seo_keywords_es"
                          />
                        </div>
                      </div>
                      <div class="text-right mt-2">
                        <a
                          href="#"
                          @click.prevent="editPage(page.id)"
                          class="btn btn-inverse-info btn-sm"
                          v-if="pageSelected != page.id"
                        >
                        <i class="fas fa-pen-alt text-warning mr-1"></i> Editar</a>

                        <Button
                          v-if="editBlock && pageSelected == page.id"
                          :text="'Actualizar'"
                          :classes="['btn-inverse-primary']"
                          :request-server="requestServer"
                        ></Button>
                        <button
                          v-if="editBlock && pageSelected == page.id"
                          type="button"
                          class="btn btn-secondary"
                          @click.prevent="restoreEl"
                        >Cancelar</button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.right {
  right: 0;
}
.bg-seo {
  height: 300px;
  background-position: center;
  background-size: cover;
}
</style>
<script>
import Input from "../../components/form/Input";
import Textarea from "../../components/form/Textarea";
import Loader from "../../components/Loader";
import vue2Dropzone from "vue2-dropzone";
import Button from "../../components/Button";
import BreadCrumb from "../../components/BreadCrumb";
export default {
  props:{
    appUrl: { type: String },
    assetUrl: { type: String }
  },
  components: {
    Button,
    vueDropzone: vue2Dropzone,
    Loader,
    BreadCrumb,
    Input,
    Textarea
  },
  data() {
    return {
      pages: {},
      editBlock: false,
      pageSelected: 0,
      requestServer: false,
      requestServerGet: false,
      errors: {},
      dropzoneOptions: {
        url: "/",
        maxFiles: 1,
        acceptedFiles: "image/png,image/jpeg,image/jpg,image/svg+xml",
        autoProcessQueue: false,
        thumbnailWidth: 400,
        addRemoveLinks: true,
        dictRemoveFile: "Remover"
      },
      page: {
        title: "",
        seo_description: "",
        seo_keywords: "",
        seo_image: ""
      }
    };
  },
  methods: {
    restoreEl() {
      //this.getPages();
      this.errors = {};
      this.page = {
        title: "",
        seo_description: "",
        seo_keywords: "",
        seo_image: ""
      };
      this.editBlock = false;
      this.pageSelected = 0;
    },
    restorePage(){
      this.getPages();
      this.errors = this.pages = {};
      this.editBlock = this.requestServer = false;
      this.pageSelected = 0;
      this.page = {
        title: "",
        seo_description: "",
        seo_keywords: "",
        seo_image: ""
      };
    },
    getPages() {
      this.requestServerGet = true;
      axios
        .get("seo/json/get-all")
        .then(response => {
          this.pages = response.data;
          this.requestServerGet = false;
        })
        .catch(error => {});
    },
    updatePage() {
      this.requestServer = true;
      const fd = new FormData();
      this.page.title_es
        ? fd.append("title_es", this.page.title_es)
        : fd.append("title_es", "");
        this.page.title_en
        ? fd.append("title_en", this.page.title_en)
        : fd.append("title_en", "");
      this.page.seo_keywords_es
        ? fd.append("seo_keywords_es", this.page.seo_keywords_es)
        : fd.append("seo_keywords_es", "");
        this.page.seo_keywords_en
        ? fd.append("seo_keywords_en", this.page.seo_keywords_en)
        : fd.append("seo_keywords_en", "");
      this.page.seo_description_es
        ? fd.append("seo_description_es", this.page.seo_description_es)
        : fd.append("seo_description_es", "");
        this.page.seo_description_en
        ? fd.append("seo_description_en", this.page.seo_description_en)
        : fd.append("seo_description_en", "");
      if (this.$refs.ref_image[0].dropzone.files[0]) {
        fd.append("seo_image", this.$refs.ref_image[0].dropzone.files[0]);
      }
      fd.append("_method", "PUT");
      axios
        .post("seo/" + this.page.id, fd)
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
    editPage(id) {
      this.editBlock = true;
      this.pageSelected = id;
      this.page = {};
      this.page = this.pages.find(item => item.id === id);
    }
  },
  created() {
    this.getPages();
  }
};
</script>