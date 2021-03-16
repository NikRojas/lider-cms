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
      <div
        class="d-inline-block ml-auto text-danger mt-1"
        v-if="countErrors"
      >{{ countErrors }} {{ countErrors > 1 ? 'Errores' : 'Error'}}</div>
    </div>
    <div class="mt-2">
      <label class="font-weight-bold" :for="label+random">{{ label }}:</label>
    </div>
    <quill-Editor
      @keydown.enter.prevent
      v-model="value[ active ]"
      :options="editorOptions"
      :class="size == 'sm' ? 'ql-height-5' : size == 'md' ? 'ql-height-10' : 'ql-height-25'"
      ref="ref_content"
    ></quill-Editor>

    <file-upload
      extensions="jpg,jpeg,png"
      accept="image/png, image/jpeg, image/jpg"
      class="d-none"
      :drop="false"
      :multiple="true"
      @input-filter="$uploadImageUploadComponent($event,$refs.ref_content,250000,'250kb',url)"
      ref="ref_content_f"
      input-id="id_content_images"
    ></file-upload>
    <!--<input type="text" class="form-control" v-model="value[ active ]" />-->
    <div class="mt-2" v-for="(el,i) in errors" :key="i">
      <label class="text-danger text-sm d-block" v-if="i == variable+'_'+active">{{ el[0] }}</label>
    </div>
  </div>
</template>
<script>
import Quill from "quill";
import PlainClipboard from "../../functions/PlainClipboard";
Quill.register("modules/clipboard", PlainClipboard, true);
import { quillEditor } from "vue-quill-editor";
import FileUpload from "vue-upload-component";
export default {
  components: {
    quillEditor,
    FileUpload,
  },
  props: {
    size: String,
    label: String,
    variable: String,
    errors: Object,
    valueEnParent: String,
    valueEsParent: String,

    url: {
      type: String,
      required: false,
    },
    textImage: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      editorOptions: {
        placeholder: "",
        modules: {
          toolbar: {
            handlers: {
              image: function (value) {
                document.getElementById("id_content_images").click();
              },
            },
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
              ["link", "video", this.textImage],
            ],
          },
        },
      },
      active: "es",
      value: {
        en: "",
        es: "",
      },
      random: Math.ceil(Math.random() * 10),
    };
  },
  methods: {
    toggle(lang) {
      this.active = lang;
    },
  },
  watch: {
    valueEnParent: {
      immediate: true,
      handler: function (newValue) {
        this.value.en = newValue;
      },
    },
    valueEsParent: {
      immediate: true,
      handler: function (newValue) {
        this.value.es = newValue;
      },
    },
    "value.en": function (newValue, oldValue) {
      this.$emit("update:valueEn", newValue);
    },
    "value.es": function (newValue, oldValue) {
      this.$emit("update:valueEs", newValue);
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