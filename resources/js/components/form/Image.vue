<template>
  <div class="form-group">
    <div class="d-flex">
      <a
        href="#"
        class="btn btn-sm py-0 px-2 btn-icon mr-1"
        :class="active == 'es' ? 'btn-primary' : 'btn-outline-primary'"
        @click.prevent="toggle('es')"
      >
        <span class="btn-inner--icon">
          <gb-flag code="es" size="small" />
        </span>
        <span class="btn-inner--text">Español</span>
      </a>
      <a
        href="#"
        class="btn btn-sm py-0 px-2 btn-icon"
        :class="active == 'en' ? 'btn-primary' : 'btn-outline-primary'"
        @click.prevent="toggle('en')"
      >
        <span class="btn-inner--icon">
          <gb-flag code="gb" size="small" />
        </span>
        <span class="btn-inner--text">Inglés</span>
      </a>
      <div class="d-inline-block ml-auto text-danger mt-1" v-if="countErrors">
        {{ countErrors }} {{ countErrors > 1 ? "Errores" : "Error" }}
      </div>
    </div>
    <div class="mt-2">
      <label class="font-weight-bold" :for="label + active + random"
        >{{ label }} {{ active.toUpperCase() }}:</label
      >
    </div>
    <div v-show="active == 'es'">
      <div class="row">
        <div class="col" v-if="value.es">
          <img
            :src="imagesUrl + '/' + folder + '/' + value.es"
            alt=""
            class="img-fluid"
          />
        </div>
        <div class="col">
          <vue-dropzone
            class
            ref="ref_image_es"
            @vdropzone-file-added="
              $validateImageDropzone(
                $event,
                $refs.ref_image_es.dropzone,
                1,
                1024000,
                '1mb'
              )
            "
            :id="label + random"
            :options="dropzoneOptions"
            @vdropzone-files-added="handleAddedFiles($event, 'es')"
            :duplicateCheck="true"
            :useCustomSlot="true"
          >
            <div class="dropzone-custom-content">
              <h5 class="dropzone-custom-title text-primary">
                Suelte el archivo aquí o haga click para cargarlo.
              </h5>
            </div>
          </vue-dropzone>
        </div>
      </div>
    </div>
    <div v-show="active == 'en'">
      <div class="row">
        <div class="col" v-if="value.en">
          <img
            :src="imagesUrl + '/' + folder + '/' + value.en"
            alt=""
            class="img-fluid"
          />
        </div>
        <div class="col">
          <vue-dropzone
            class
            ref="ref_image_en"
            @vdropzone-file-added="
              $validateImageDropzone(
                $event,
                $refs.ref_image_en.dropzone,
                1,
                1024000,
                '1mb'
              )
            "
            @vdropzone-files-added="handleAddedFiles($event, 'en')"
            :id="label + random"
            :options="dropzoneOptions"
            :duplicateCheck="true"
            :useCustomSlot="true"
          >
            <div class="dropzone-custom-content">
              <h5 class="dropzone-custom-title text-primary">
                Suelte el archivo aquí o haga click para cargarlo.
              </h5>
            </div>
          </vue-dropzone>
        </div>
      </div>
    </div>
    <div v-for="(el, i) in errors" :key="i">
      <label
        class="text-danger text-sm d-block mt-2"
        v-if="i == variable + '_' + active"
        >{{ el[0] }}</label
      >
    </div>
  </div>
</template>
<script>
import vue2Dropzone from "vue2-dropzone";
export default {
  props: {
    label: String,
    folder: String,
    variable: String,
    errors: Object,
    valueEnParent: null,
    valueEsParent: null,
    imagesUrl: String,
  },
  components: {
    vueDropzone: vue2Dropzone,
  },
  data() {
    return {
      active: "es",
      value: {
        en: "",
        es: "",
      },
      dropzoneOptions: {
        url: "/",
        maxFiles: 1,
        acceptedFiles: "image/png,image/jpeg,image/jpg",
        autoProcessQueue: false,
        thumbnailWidth: 400,
        addRemoveLinks: true,
      },
      random: Math.ceil(Math.random() * 10),
    };
  },
  methods: {
    toggle(lang) {
      this.active = lang;
    },
    handleAddedFiles(e, lang) {
      setTimeout(() => {
        if (lang == "es") {
          this.$emit(
            "update:valueEs",
            this.$refs.ref_image_es.dropzone.files[0]
          );
        } else if (lang == "en") {
          this.$emit(
            "update:valueEn",
            this.$refs.ref_image_en.dropzone.files[0]
          );
        }
      }, 500);
    },
  },
  watch: {
    valueEnParent: {
      immediate: true,
      handler: function (newValue) {
        if (newValue instanceof File) {
        } else {
          this.value.en = newValue;
        }
      },
    },
    valueEsParent: {
      immediate: true,
      handler: function (newValue) {
        if (newValue instanceof File) {
        } else {
          this.value.es = newValue;
        }
      },
    },
  },
  computed: {
    countErrors: function () {
      if (Object.keys(this.errors).length) {
        let total = 0;
        for (const el in this.errors) {
          if (el == this.variable + "_en" || el == this.variable + "_es") {
            total++;
          }
        }
        return total;
      }
    },
  },
};
</script>