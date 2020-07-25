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
                    class="img-holder bg-seo  card-img-top position-relative"
                    v-if="page.seo_image"
                    :style="{ 'background-image': 'url('+ 'https://storage.googleapis.com/playgroup-web/img/pages/' + page.seo_image +')' }"
                  >
                    <a
                      :href="'https://storage.googleapis.com/playgroup-web/img/pages/'+page.seo_image"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="btn btn-info btn-sm right position-absolute m-2"
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
                        <a target="_blank" rel="noopener noreferrer" :href="'https://playgroup.pe'+(page.slug ? '/' +page.slug : '' )" class="d-inline-block">https://playgroup.pe<small v-if="page.slug">/{{ page.slug }}</small></a>
                      </div>
                      <h4
                        class="mb-3 font-weight-bold"
                        v-if="pageSelected != page.id"
                      >{{ page.title }}</h4>
                      <div class="form-group" v-if="editBlock && pageSelected == page.id">
                        <label class="font-weight-bold" for="id_titulo">Título</label>
                        <input
                          type="text"
                          class="form-control "
                          v-model="page.title"
                          id="id_titulo"
                        />
                        <label
                          v-if="errors && errors.title"
                          class="text-danger text-sm d-block mt-2"
                          for="id_titulo"
                        >{{ errors.title[0] }}</label>
                      </div>
                      <div class="mb-2">
                        <div v-if="pageSelected != page.id">
                          <p class="mb-0 text-primary font-weight-bold">Descripción SEO</p>
                          <p class="project-description" v-if="page.seo_description">{{ page.seo_description }}</p>
                          <p class="mb-0" v-else>No registrado</p>
                        </div>
                        <div
                          class="form-group"
                          v-if="editBlock && pageSelected == page.id"
                        >
                          <label
                            class="font-weight-bold"
                            for="id_seo_description"
                          >Descripción SEO</label>
                          <textarea
                            type="text"
                            class="form-control "
                            v-model="page.seo_description"
                            id="id_seo_description"
                            rows="4"
                          ></textarea>
                          <label
                            v-if="errors && errors.seo_description"
                            class="text-danger text-sm d-block mt-2"
                            for="id_seo_description"
                          >{{ errors.seo_description[0] }}</label>
                        </div>
                      </div>
                      <div>
                        <div v-if="pageSelected != page.id">
                          <p class="mb-0 text-primary font-weight-bold">Keywords SEO</p>
                          <p class="mb-0" v-if="page.seo_keywords">{{ page.seo_keywords }}</p>
                          <p class="mb-0" v-else>No registrado</p>
                        </div>
                        <div
                          class="form-group"
                          v-if="editBlock && pageSelected == page.id"
                        >
                          <label class="font-weight-bold" for="id_seo_keywords">Keywords SEO</label>
                          <textarea
                            type="text"
                            class="form-control "
                            v-model="page.seo_keywords"
                            id="id_seo_keywords"
                            rows="4"
                          ></textarea>
                          <label
                            v-if="errors && errors.seo_keywords"
                            class="text-danger text-sm d-block mt-2"
                            for="id_seo_keywords"
                          >{{ errors.seo_keywords[0] }}</label>
                        </div>
                      </div>
                      <div class="text-right mt-2">
                        <a
                          href="#"
                          @click.prevent="editPage(page.id)"
                          class="btn btn-secondary"
                          v-if="pageSelected != page.id"
                        >
                        <i class="fas fa-pen-alt text-warning mr-1"></i> Editar</a>

                        <Button
                          v-if="editBlock && pageSelected == page.id"
                          :text="'Actualizar'"
                          :classes="['btn-primary']"
                          :request-server="requestServer"
                        ></Button>
                        <button
                          v-if="editBlock && pageSelected == page.id"
                          type="button"
                          class="btn btn-danger"
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
import Loader from "../../components/Loader";
import vue2Dropzone from "vue2-dropzone";
import Button from "../../components/Button";
import BreadCrumb from "../../components/BreadCrumb";
export default {
  props:{
    appUrl: { type: String }
  },
  components: {
    Button,
    vueDropzone: vue2Dropzone,
    Loader,
    BreadCrumb
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
        .get("json/seo")
        .then(response => {
          this.pages = response.data;
          this.requestServerGet = false;
        })
        .catch(error => {});
    },
    updatePage() {
      this.requestServer = true;
      const fd = new FormData();
      this.page.title
        ? fd.append("title", this.page.title)
        : fd.append("title", "");
      this.page.seo_keywords
        ? fd.append("seo_keywords", this.page.seo_keywords)
        : fd.append("seo_keywords", "");
      this.page.seo_description
        ? fd.append("seo_description", this.page.seo_description)
        : fd.append("seo_description", "");
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