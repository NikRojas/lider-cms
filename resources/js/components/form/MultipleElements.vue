<template>
  <div>
    <p>{{ messageOrder }}</p>
    <div class="card">
      <div
        v-if="showLoading"
        style="
          position: absolute;
          height: calc(100% - 41px);
          width: 100%;
          z-index: 99;
          top: 38px;
        "
      >
        <Skeleton height="100%" />
      </div>
      <table class="table align-items-center mb-3">
        <thead class="thead-light">
          <tr>
            <th>Elementos</th>
            <th></th>
          </tr>
        </thead>
      </table>
      <draggable @change="handleEnd" class="row" v-model="files">
        <div class="col-12" v-for="(el, i) in files" :key="i">
          <div class="row">
            <div class="col-10">
              <div class="col-12">
                <Input
                  label="Título"
                  :variable="'files.' + i + '.title'"
                  :errors="errors"
                  :valueEn.sync="el.title_en"
                  :valueEs.sync="el.title_es"
                  :valueEnParent="el.title_en"
                  :valueEsParent="el.title_es"
                />
              </div>
              <div class="col-12">
                <div class="row">
                  <div class="col-12">
                    <Editor
                      size="md"
                      label="Descripción"
                      :variable="'files.' + i + '.description'"
                      :errors="errors"
                      :valueEn.sync="el.description_en"
                      :valueEs.sync="el.description_es"
                      :valueEnParent="el.description_en"
                      :valueEsParent="el.description_es"
                    />
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="form-group">
                  <label class="font-weight-bold d-block">Imagen</label>
                  <!--
                  <a
                    style="text-decoration: underline"
                    v-if="typeof el.file == 'string' && el.file !== ''"
                    :href="imagesUrl + '/' + folder + '/' + el.file"
                    target="_blank"
                    >{{ el.file }}</a
                  >
                  -->
                  <img
                    v-if="typeof el.file == 'string' && el.file !== ''"
                    :src="imagesUrl + '/' + folder + '/' + el.file"
                    width="200px"
                    :alt="el.file"
                  />
                  <a
                    v-if="typeof el.file == 'string' && el.file !== ''"
                    target="_blank"
                    style="margin-left: 10px; top: 50%"
                    :href="imagesUrl + '/' + folder + '/' + el.file"
                    class="btn btn-sm btn-icon-only rounded-circle btn-inverse-info"
                  >
                    <jam-eye class="current-color" height="18" width="18" />
                  </a>
                  <vue-dropzone
                    v-else
                    :ref="`ref_file_${i}`"
                    @vdropzone-file-added="
                      $validateImageDropzone(
                        $event,
                        $refs['ref_file_' + i][0].dropzone,
                        1,
                        512000,
                        '500kb'
                      )
                    "
                    :id="'images' + i"
                    class="text-center multiple-files"
                    :options="dropzoneOptions"
                    @vdropzone-files-added="handleAddedFiles($event, i)"
                    :duplicateCheck="true"
                    :useCustomSlot="true"
                  >
                    <div class="dropzone-custom-content">
                      <h5 class="dropzone-custom-title text-primary">
                        Suelte los archivos aquí
                        <br />o haga click para cargarlos.
                      </h5>
                    </div>
                  </vue-dropzone>

                  <label
                    v-if="errors && errors['files.' + i + '.file']"
                    class="text-danger text-sm d-block mt-2"
                    for="image"
                    >{{ errors["files." + i + ".file"][0] }}</label
                  >
                </div>
              </div>
              <div class="col-12" v-if="showIconField">
                <div class="form-group">
                  <label class="font-weight-bold d-block">Icono</label>
                  <!--
                  <a
                    style="text-decoration: underline"
                    v-if="typeof el.icon == 'string' && el.icon !== ''"
                    :href="imagesUrl + '/' + folder + '/' + el.icon"
                    target="_blank"
                    >{{ el.icon }}</a
                  >
                  -->
                  <img
                    v-if="typeof el.icon == 'string' && el.icon !== ''"
                    :src="imagesUrl + '/' + folder + '/' + el.icon"
                    width="60px"
                    :alt="el.icon"
                  />
                  <a
                    v-if="typeof el.icon == 'string' && el.icon !== ''"
                    target="_blank"
                    style="margin-left: 10px; top: 50%"
                    :href="imagesUrl + '/' + folder + '/' + el.icon"
                    class="btn btn-sm btn-icon-only rounded-circle btn-inverse-info"
                  >
                    <jam-eye class="current-color" height="18" width="18" />
                  </a>
                  <vue-dropzone
                    v-else
                    :ref="`ref_icon_${i}`"
                    @vdropzone-file-added="
                      $validateImageDropzone(
                        $event,
                        $refs['ref_icon_' + i][0].dropzone,
                        1,
                        51200,
                        '50kb'
                      )
                    "
                    :id="'icon' + i"
                    class="text-center multiple-files"
                    :options="dropzoneOptions"
                    @vdropzone-files-added="handleAddedIcons($event, i)"
                    :duplicateCheck="true"
                    :useCustomSlot="true"
                  >
                    <div class="dropzone-custom-content">
                      <h5 class="dropzone-custom-title text-primary">
                        Suelte los archivos aquí
                        <br />o haga click para cargarlos.
                      </h5>
                    </div>
                  </vue-dropzone>

                  <label
                    v-if="errors && errors['files.' + i + '.icon']"
                    class="text-danger text-sm d-block mt-2"
                    for="image"
                    >{{ errors["files." + i + ".icon"][0] }}</label
                  >
                </div>
              </div>
            </div>
            <div class="col-2">
              <button
                class="btn btn-sm btn-icon-only rounded-circle btn-inverse-danger"
                @click.prevent="remove(i)"
                style="top: 50%"
              >
                <jam-trash class="current-color" height="18" width="18" />
              </button>
            </div>
          </div>
          <hr class="mt-1 mb-4" />
        </div>
      </draggable>
    </div>
    <div class="mt-3">
      <button
        class="btn btn-block btn-sm btn-icon btn-inverse-info"
        @click.prevent="add"
      >
        <span class="btn-inner--icon">
          <jam-plus class="current-color"></jam-plus>
        </span>
        <span class="btn-inner--text">Agregar</span>
      </button>
    </div>
    <div v-if="errors && errors[fieldName + '0']">
      <label class="mt-3 text-danger text-sm" :for="fieldName + '0'">{{
        errors[fieldName + "0"][0]
      }}</label>
    </div>
  </div>
</template>
<script>
import { Skeleton } from "vue-loading-skeleton";
import vue2Dropzone from "vue2-dropzone";
import draggable from "vuedraggable";
import Input from "../form/Input";
import Editor from "../form/Editor";
import simplebar from "simplebar-vue";
import "simplebar/dist/simplebar.min.css";
export default {
  props: {
    errors: Object,
    fieldName: String,
    imagesUrl: String,
    folder: String,
    filesParent: Array,
    iconsParent: Array,
    messageOrder: String,
    showIconField: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    vueDropzone: vue2Dropzone,
    draggable,
    Input,
    Editor,
    simplebar,
    Skeleton,
  },
  data() {
    return {
      files: [],
      images: [],
      //countImages: 0,
      showLoading: false,
      elements: {},
      dropzoneOptions: {
        url: "/",
        maxFiles: 1,
        acceptedFiles: "image/png,image/jpeg,image/jpg,image/svg+xml",
        autoProcessQueue: false,
        thumbnailWidth: 150,
        addRemoveLinks: true,
        dictRemoveFile: "Remover",
      },
    };
  },
  methods: {
    updateImages() {
      this.files.forEach((element, i) => {
        if (element.file instanceof File) {
          this.$refs["ref_file_" + i][0].dropzone.files.pop();
          document
            .querySelectorAll("#images" + i + ">.dz-preview")
            .forEach(function (a) {
              a.remove();
            });
          //Add File
          this.$refs["ref_file_" + i][0].manuallyAddFile(element.file, "/");
          this.$refs["ref_file_" + i][0].dropzone.emit(
            "thumbnail",
            element.file,
            element.file.dataURL
          );
          this.$refs["ref_file_" + i][0].dropzone.emit(
            "complete",
            element.file
          );
        }
      });
    },
    updateIcons() {
      this.icons.forEach((element, i) => {
        if (element.file instanceof File) {
          this.$refs["ref_icon_" + i][0].dropzone.icons.pop();
          document
            .querySelectorAll("#icon" + i + ">.dz-preview")
            .forEach(function (a) {
              a.remove();
            });
          //Add File
          this.$refs["ref_icon_" + i][0].manuallyAddFile(element.file, "/");
          this.$refs["ref_icon_" + i][0].dropzone.emit(
            "thumbnail",
            element.file,
            element.file.dataURL
          );
          this.$refs["ref_icon_" + i][0].dropzone.emit(
            "complete",
            element.file
          );
        }
      });
    },
    handleEnd(added, removed, moved) {
      //this.updateImages();
      this.showLoading = true;
      setTimeout(() => {
        this.updateImages();
        if (this.showIconField) {
          this.updateIcons();
        }
        this.showLoading = false;
      }, 500);
    },
    add() {
      if (this.files.length) {
        const lastItem = this.files[this.files.length - 1].file;
        if (!lastItem) {
          return false;
        }
      }
      this.files.push({
        file: "",
        title_es: "",
        title_en: "",
        description_es: "",
        description_en: "",
      });
    },
    remove(index) {
      this.files.splice(index, 1);
      this.showLoading = true;
      setTimeout(() => {
        this.updateImages();
        this.showLoading = false;
      }, 500);
    },
    handleAddedFiles(e, index) {
      setTimeout(() => {
        this.files[index].file = this.$refs[
          "ref_file_" + index
        ][0].dropzone.files[0];
      }, 500);
    },
    handleAddedIcons(e, index) {
      setTimeout(() => {
        this.files[index].icon = this.$refs[
          "ref_icon_" + index
        ][0].dropzone.files[0];
      }, 500);
    },
  },
  watch: {
    filesParent: {
      immediate: true,
      handler: function (newValue) {
        if (newValue) {
          this.files = newValue;
        }
      },
    },
    files: {
      immediate: true,
      deep: true,
      handler: function (newValue) {
        this.$emit("update:files", newValue);
      },
    },
    icons: {
      immediate: true,
      deep: true,
      handler: function (newValue) {
        this.$emit("update:icons", newValue);
      },
    },
  },
};
</script>