<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-4">
            <div class="col-6 col-md-7">
              <BreadCrumb title="Crear Slide" parent active="Slider"></BreadCrumb>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid mt--6">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <form @submit.prevent="submit">
                <div class="row">

                  <div class="col-12 col-md-6">
                      <small class="d-block mb-0 lh-1">Resolución recomendada: 1920×969px</small> 
                  <small class="d-block mb-0 lh-1">Formato: JPG</small> 
                  <small class="d-block mb-2 lh-1">Tamaño recomendado: No mayor a 300KB</small>
                    <ImageForm label="Imagen"
                    variable="image"
                    folder="slider"
                    :errors="errors"
                    :valueEn.sync="element.image_en"
                    :valueEs.sync="element.image_es"
                    :valueEnParent="element.image_en"
                    :imagesUrl="imagesUrl"
                    :valueEsParent="element.image_es"></ImageForm>
                  </div>

                  <div class="col-12 col-md-6">
                     <small class="d-block mb-0 lh-1">Resolución recomendada: 600×965px</small> 
                  <small class="d-block mb-0 lh-1">Formato: JPG</small> 
                  <small class="d-block mb-2 lh-1">Tamaño recomendado: No mayor a 200KB</small>
                    <ImageForm label="Imagen Responsive"
                    variable="image_responsive"
                    :errors="errors"
                    folder="slider"
                    :valueEn.sync="element.image_responsive_en"
                    :valueEs.sync="element.image_responsive_es"
                    :valueEnParent="element.image_responsive_en"
                    :imagesUrl="imagesUrl"
                    :valueEsParent="element.image_responsive_es"></ImageForm>
                  </div>

                  <!--<div class="col-12 col-lg-6">
                      <div class="form-group">
                        <label class="font-weight-bold d-block" for="id_url">URL</label>
                        <input
                          type="text"
                          class="form-control form-control-alternative"
                          v-model="element.url"
                          id="id_url"
                        />
                        <label
                          v-if="errors && errors.url"
                          class="mt-2 text-danger text-sm"
                          for="id_url"
                        >{{ errors.url[0] }}</label>
                      </div>
                  </div>-->

                  <div class="col-12 col-lg-6">
                    
                    <div class="form-group">
                      <label class="font-weight-bold" for="from">Válido desde</label>
                      <date-picker
                        :input-attr="{id: 'from'}"
                        value-type="format"
                        v-model="element.from"
                        format="HH:mm DD-MM-YYYY"
                        type="datetime"
                        :time-picker-options="{ start: '06:00', step: '00:05', end: '24:00' }"
                        :first-day-of-week="1"
                        lang="es"
                        input-class="form-control"
                        width="100%"
                      >
                        <jam-calendar></jam-calendar>
                      </date-picker>
                      <label
                        v-if="errors && errors.from"
                        class="mt-2 text-danger text-sm"
                        for="from"
                      >{{ errors.from[0] }}</label>
                    </div>
                  </div>

                  <div class="col-12 col-lg-6">
                    <div class="form-group">
                      <label class="font-weight-bold" for="to">Válido hasta</label>
                      <date-picker
                        :input-attr="{id: 'to'}"
                        value-type="format"
                        v-model="element.to"
                        format="HH:mm DD-MM-YYYY"
                        type="datetime"
                        :time-picker-options="{ start: '06:00', step: '00:05', end: '24:00' }"
                        :first-day-of-week="1"
                        lang="es"
                        input-class="form-control"
                        width="100%"
                      >
                        <jam-calendar></jam-calendar>
                      </date-picker>
                      <label
                        v-if="errors && errors.to"
                        class="mt-2 text-danger text-sm"
                        for="to"
                      >{{ errors.to[0] }}</label>
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="form-group">
                      <label class="font-weight-bold" for="link">Link</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="element.link"
                        id="link"
                      />
                      <label
                        v-if="errors && errors.link"
                        class="mt-2 text-danger text-sm"
                        for="link"
                        >{{ errors.link[0] }}</label
                      >
                    </div>
                  </div>

                  <div class="col-12 text-right">
                    <Button
                      :text="'Actualizar'"
                      :classes="['btn-inverse-primary','mr-2']"
                      :request-server="requestServer"
                    ></Button>
                    <a type="button" class="btn btn-secondary" :href="routeReturn">Cancelar</a>
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
import Button from "../../components/Button";
import BreadCrumb from "../../components/BreadCrumb";
import vue2Dropzone from "vue2-dropzone";
import DatePicker from "vue2-datepicker";
import ImageForm from "../../components/form/Image";
export default {
  components: {
    BreadCrumb,
    Button,
    vueDropzone: vue2Dropzone,
    DatePicker,
    ImageForm
  },
  props: {
    imagesUrl: String,
    routeUpdate: String,
    routeReturn: String,
    elementParent: Object
  },
  data() {
    return {
      element: {},
      errors: {},
      dropzoneOptions: {
        url: "/",
        maxFiles: 1,
        acceptedFiles: "image/png,image/jpeg,image/jpg",
        autoProcessQueue: false,
        thumbnailWidth: 400,
        addRemoveLinks: true,
      },
      requestServer: false,
    };
  },
  methods: {
    submit() {
      this.requestServer = true;
      const fd = new FormData();
      if (this.element.from) {
        fd.append("from", this.element.from);
      }
      if (this.element.to) {
        fd.append("to", this.element.to);
      }
      if(this.element.image_en){
        fd.append("image_en", this.element.image_en);
      }
      if(this.element.image_es){
        fd.append("image_es", this.element.image_es);
      }
       if(this.element.image_responsive_en){
        fd.append("image_responsive_en", this.element.image_responsive_en);
      }
      if(this.element.image_responsive_es){
        fd.append("image_responsive_es", this.element.image_responsive_es);
      }
      if (this.element.link) {
        fd.append("link", this.element.link);
      }
      else{
        fd.append("link", "");
      }
      fd.append("_method","put");
      axios
        .post(this.routeUpdate + '/' + this.element.id, fd)
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
  }
};
</script>