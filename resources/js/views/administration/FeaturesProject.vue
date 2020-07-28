<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-4">
            <div class="col-6 col-md-7">
              <BreadCrumb
                title="Características de Proyectos"
                parent="Administración"
                active="Características de Proyectos"
              ></BreadCrumb>
            </div>
            <div class="col-6 col-md-5 text-right">
              <a href="#" class="btn btn-icon btn-inverse-primary" @click.prevent="newEl">
                <span class="btn-inner--icon">
                  <jam-star class="current-color" />
                </span>
                <span class="btn-inner--text">Nueva Característica</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid mt--6">
      <form @submit.prevent="submit">
        <div class="row">
          <div class="col-12">
            <div class="form-group">
              <label class="font-weight-bold" for="image">Imagen:</label>
              <vue-dropzone
                ref="ref_image"
                @vdropzone-file-added="$validateImageDropzone($event,$refs.ref_image.dropzone,1,512000,'500kb')"
                id="image"
                :options="dropzoneOptions"
                :duplicateCheck="true"
                :useCustomSlot="true"
              >
                <div class="dropzone-custom-content">
                  <h5
                    class="dropzone-custom-title text-primary"
                  >Suelte los archivos aquí o haga click para cargarlos.</h5>
                </div>
              </vue-dropzone>
              <label
                    v-if="errors && errors.image"
                    class="text-danger text-sm d-block mt-2"
                    for="image"
              >{{ errors.image[0] }}</label>
            </div>
          </div>
          <div class="col-12">
            <Input label="Nombre" variable="name" :errors="errors" :valueEn.sync="element.name_en" :valueEs.sync="element.name_es"/>
          </div>
          <div class="col-12 text-right">
            <Button
              :text="'Crear'"
              :classes="['btn-inverse-primary']"
              :request-server="requestSubmit"
            ></Button>
            <button type="button" class="btn btn-secondary" @click.prevent="restore">Cancelar</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import BreadCrumb from "../../components/BreadCrumb";
import Input from "../../components/form/Input";
import vue2Dropzone from "vue2-dropzone";
import Button from "../../components/Button";
export default {
  components: {
    BreadCrumb,
    Button,
    Input,
    vueDropzone: vue2Dropzone,
  },
  props:{
    route: String
  },
  data() {
    return {
      errors: {},
      requestSubmit: false,
      title: "",
      element: {
        image: "",
      },
      dropzoneOptions: {
        url: "/",
        maxFiles: 1,
        acceptedFiles: "image/png,image/jpeg,image/jpg,image/svg+xml",
        autoProcessQueue: false,
        thumbnailWidth: 150,
        addRemoveLinks: true,
        dictRemoveFile: "Remover Imagen",
      },
    };
  },
  methods: {
    newEl() {
      this.title = "Nuevo";
    },
    submit() {
      this.requestSubmit = true;
      let url;
      let method;
      if (this.title == "Nuevo") {
        url = this.route;
        method = "post";
      } else {
        url = this.route + '/' +this.element.id;
        method = "put";
      }
      const fd = new FormData();
      if (this.element.name_es) {
        fd.append("name_es", this.element.name_es);
      }
      if (this.element.name_en) {
        fd.append("name_en", this.element.name_en);
      }
      if (this.$refs.ref_image.dropzone.files[0]) {
        fd.append("image", this.$refs.ref_image.dropzone.files[0]);
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
    restore() {},
    restoreEl() {},
  }
};
</script>