<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-4">
            <div class="col-12">
              <BreadCrumb title="Especialidades" active="Especialidades"></BreadCrumb>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid mt--6">
      <Loader
        :iconHeight="30"
        :iconWidth="30"
        :style="{ display: 'inline-block', height: '400px' }"
        v-if="requestServerGet"
      />
      <form @submit.prevent="updateDepartment" v-else>
        <div class="row">
          <div class="col-12 col-sm-6 mb-4" v-for="department in departments" :key="department.id">
            <div class="card shadow">
              <div class="card-header border-0">
                <h2 class="mb-0 text-center">{{ department.title }}</h2>
                <h3 class="mb-0 text-center">{{ department.excerpt }}</h3>
              </div>
              <div class="card-body pt-0">
                <div class="row">
                  <div class="col-12 col-sm-6">
                    <div class="form-group" v-if="editBlock && departmentSelected == department.id">
                      <label for="id_image" class="font-weight-bold mb-0">Logo</label>
                      <!-- <small class="text-muted d-block mb-0 lh-1">Resolución recomendada: 200x200px</small> -->
                      <!--<small class="text-muted d-block mb-2 lh-1">Tamaño recomendado: Menor a 50kb</small>-->
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
                        v-if="errors && errors.image"
                        class="text-danger text-sm d-block"
                        for="id_image"
                      >{{ errors.image[0] }}</label>
                    </div>

                    <div class="mb-3 text-center" v-if="!editBlock && department.logo">
                      <img
                        height="80"
                        width="auto"
                        :src=" 'https://storage.googleapis.com/playgroup-web/img/departments/'+ department.logo"
                        :alt="department.name"
                      />
                    </div>
                  </div>
                  <div class="col-12 col-sm-6">
                    <div class="form-group" v-if="editBlock && departmentSelected == department.id">
                      <label for="id_image" class="font-weight-bold mb-0">Logo Blanco</label>
                      <!-- <small class="text-muted d-block mb-0 lh-1">Resolución recomendada: 200x200px</small> -->
                      <!--<small class="text-muted d-block mb-2 lh-1">Tamaño recomendado: Menor a 50kb</small>-->
                      <vue-dropzone
                        ref="ref_logo_white"
                        @vdropzone-file-added="$validateImageDropzone($event,$refs.ref_logo_white[0].dropzone,1,100000,'100kb')"
                        id="id_logo_white"
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
                        v-if="errors && errors.logo_white"
                        class="text-danger text-sm d-block"
                        for="id_logo_white"
                      >{{ errors.logo_white[0] }}</label>
                    </div>

                    <div class="mb-3 text-center" v-if="!editBlock && department.logo_white">
                      <img
                        height="80"
                        width="auto"
                        class="logo-white"
                        :src=" 'https://storage.googleapis.com/playgroup-web/img/departments/'+ department.logo_white"
                        :alt="department.name+' White'"
                      />
                    </div>
                  </div>
                </div>

                <div class="form-group" v-if="editBlock && departmentSelected == department.id">
                  <label class="font-weight-bold" for="id_title">Título</label>
                  <input
                    type="text"
                    class="form-control form-control-alternative"
                    v-model="department.title"
                    id="id_title"
                  />
                  <label
                    v-if="errors && errors.title"
                    class="text-danger text-sm d-block mt-2"
                    for="id_title"
                  >{{ errors.title[0] }}</label>
                </div>

                <div class="form-group" v-if="editBlock && departmentSelected == department.id">
                  <label class="font-weight-bold" for="id_excerpt">Eslogan</label>
                  <input
                    type="text"
                    class="form-control form-control-alternative"
                    v-model="department.excerpt"
                    id="id_excerpt"
                  />
                  <label
                    v-if="errors && errors.excerpt"
                    class="text-danger text-sm d-block mt-2"
                    for="id_excerpt"
                  >{{ errors.excerpt[0] }}</label>
                </div>

                <div
                  class="form-group"
                  v-if="editBlock && departmentSelected == department.id && departmentSelected != 1"
                >
                  <label for="id_image" class="font-weight-bold">Banner Home</label>
                  <!-- <small class="text-muted d-block mb-0 lh-1">Resolución recomendada: 200x200px</small> -->
                  <!--<small class="text-muted d-block mb-2 lh-1">Tamaño recomendado: Menor a 50kb</small>-->
                  <vue-dropzone
                    ref="ref_banner"
                    @vdropzone-file-added="$validateImageDropzone($event,$refs.ref_banner[0].dropzone,1,100000,'100kb')"
                    id="id_banner"
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
                    v-if="errors && errors.banner"
                    class="text-danger text-sm d-block"
                    for="id_banner"
                  >{{ errors.banner[0] }}</label>
                </div>

                <div
                  class="form-group"
                  v-if="editBlock && departmentSelected == department.id && departmentSelected != 1"
                >
                  <label for="id_image" class="font-weight-bold mb-0">Imagen Menu</label>
                  <!-- <small class="text-muted d-block mb-0 lh-1">Resolución recomendada: 200x200px</small> -->
                  <!--<small class="text-muted d-block mb-2 lh-1">Tamaño recomendado: Menor a 50kb</small>-->
                  <vue-dropzone
                    ref="ref_image_menu"
                    @vdropzone-file-added="$validateImageDropzone($event,$refs.ref_image_menu[0].dropzone,1,100000,'100kb')"
                    id="id_image_menu"
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
                    v-if="errors && errors.image_menu"
                    class="text-danger text-sm d-block"
                    for="id_image_menu"
                  >{{ errors.image_menu[0] }}</label>
                </div>

                <div class="row" :class="{'mb-3' : department.image_menu || department.banner }">
                  <div class="col-12 col-lg-3" v-if="!editBlock && department.image_menu">
                    <label class="font-weight-bold d-block">Imagen Menú</label>
                    <img
                      height="50"
                      width="auto"
                      :src=" 'https://storage.googleapis.com/playgroup-web/img/departments/'+ department.image_menu"
                      :alt="department.name+' Menu'"
                    />
                  </div>
                  <div class="col-12 col-lg-9" v-if="!editBlock && department.banner">
                    <label class="font-weight-bold d-block">Banner Home</label>
                    <img
                      class="img-fluid"
                      :src=" 'https://storage.googleapis.com/playgroup-web/img/departments/'+ department.banner"
                      :alt="department.name+' Banner'"
                    />
                  </div>
                </div>

                <div class="text-right">
                  <a
                    href="#"
                    class="btn btn-secondary"
                    @click.prevent="editDepartment(department.id)"
                    v-if="departmentSelected != department.id"
                  >
                    <i class="fas fa-pen-alt text-warning mr-1"></i> Editar
                  </a>

                  <Button
                    v-if="editBlock && departmentSelected == department.id"
                    :text="'Actualizar'"
                    :classes="['btn-primary']"
                    :request-server="requestServer"
                  ></Button>
                  <button
                    v-if="editBlock && departmentSelected == department.id"
                    type="button"
                    class="btn btn-danger"
                    @click.prevent="restoreEl"
                  >Cancelar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.logo-white {
  background-color: black;
  padding: 10px;
  border-radius: 0.375rem;
}
</style>
<script>
import Loader from "../components/Loader";
import vue2Dropzone from "vue2-dropzone";
import Button from "../components/Button";
import BreadCrumb from "../components/BreadCrumb";
export default {
  components: {
    Button,
    vueDropzone: vue2Dropzone,
    Loader,
    BreadCrumb
  },
  data() {
    return {
      department: {
        excerpt: "",
        title: ""
      },
      dropzoneOptions: {
        url: "/",
        maxFiles: 1,
        acceptedFiles: "image/png,image/jpeg,image/jpg,image/svg+xml",
        autoProcessQueue: false,
        thumbnailWidth: 200,
        addRemoveLinks: true,
        dictRemoveFile: "Remover"
      },
      errors: {},
      editBlock: false,
      departments: [],
      requestServer: false,
      departmentSelected: 0,
      requestServer: false,
      requestServerGet: false
    };
  },
  methods: {
    restoreEl() {
      //this.getDepartments();
      this.errors = {};
      this.departments = [];
      this.getDepartments();
      this.department = {
        excerpt: ""
      };
      this.editBlock = false;
      this.departmentSelected = 0;
    },
    getDepartments() {
      this.requestServerGet = true;
      axios
        .get("json/departments")
        .then(response => {
          this.departments = response.data;
          this.requestServerGet = false;
        })
        .catch(error => {});
    },
    editDepartment(id) {
      this.editBlock = true;
      this.departmentSelected = id;
      this.department = {};
      this.department = this.departments.find(item => item.id === id);
    },
    restorePage() {
      this.departments = [];
      this.getDepartments();
      this.errors = this.departments = {};
      this.editBlock = this.requestServer = false;
      this.departmentSelected = 0;
      this.department = {
        excerpt: ""
      };
    },
    updateDepartment() {
      this.requestServer = true;
      const fd = new FormData();
      /*this.page.title
        ? fd.append("title", this.page.title)
        : fd.append("title", "");
      this.page.seo_keywords
        ? fd.append("seo_keywords", this.page.seo_keywords)
        : fd.append("seo_keywords", "");*/
      this.department.excerpt
        ? fd.append("excerpt", this.department.excerpt)
        : fd.append("excerpt", "");

      this.department.title
        ? fd.append("title", this.department.title)
        : fd.append("title", "");
      if (this.$refs.ref_image && this.$refs.ref_image[0] && this.$refs.ref_image[0].dropzone.files[0]) {
        fd.append("image", this.$refs.ref_image[0].dropzone.files[0]);
      }

      if (this.$refs.ref_logo_white && this.$refs.ref_logo_white[0] && this.$refs.ref_logo_white[0].dropzone.files[0]) {
        fd.append("logo_white", this.$refs.ref_logo_white[0].dropzone.files[0]);
      }

      if (this.$refs.ref_banner && this.$refs.ref_banner[0] && this.$refs.ref_banner[0].dropzone.files[0]) {
        fd.append("banner", this.$refs.ref_banner[0].dropzone.files[0]);
      }

      if (
        this.$refs.ref_image_menu &&
        this.$refs.ref_image_menu[0] &&
        this.$refs.ref_image_menu[0].dropzone.files[0]
      ) {
        fd.append("image_menu", this.$refs.ref_image_menu[0].dropzone.files[0]);
      }

      fd.append("_method", "PUT");
      axios
        .post("departments/" + this.department.id, fd)
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
              confirmButton: "btn btn-primary"
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
              confirmButton: "btn btn-primary"
            }
          });
        });
    }
  },
  created() {
    this.getDepartments();
  }
};
</script>