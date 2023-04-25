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
          <div class="row position-relative">
            <div class="position-absolute" style="top: 50%;
    left: 20px;">
              <svg style="height: 25px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.5 7C9.32843 7 10 6.32843 10 5.5C10 4.67157 9.32843 4 8.5 4C7.67157 4 7 4.67157 7 5.5C7 6.32843 7.67157 7 8.5 7ZM8.5 13.5C9.32843 13.5 10 12.8284 10 12C10 11.1716 9.32843 10.5 8.5 10.5C7.67157 10.5 7 11.1716 7 12C7 12.8284 7.67157 13.5 8.5 13.5ZM10 18.5C10 19.3284 9.32843 20 8.5 20C7.67157 20 7 19.3284 7 18.5C7 17.6716 7.67157 17 8.5 17C9.32843 17 10 17.6716 10 18.5ZM15.5 7C16.3284 7 17 6.32843 17 5.5C17 4.67157 16.3284 4 15.5 4C14.6716 4 14 4.67157 14 5.5C14 6.32843 14.6716 7 15.5 7ZM17 12C17 12.8284 16.3284 13.5 15.5 13.5C14.6716 13.5 14 12.8284 14 12C14 11.1716 14.6716 10.5 15.5 10.5C16.3284 10.5 17 11.1716 17 12ZM15.5 20C16.3284 20 17 19.3284 17 18.5C17 17.6716 16.3284 17 15.5 17C14.6716 17 14 17.6716 14 18.5C14 19.3284 14.6716 20 15.5 20Z"></path></svg>
            </div>
            <div class="col-10 pl-3">
              <div class="row pl-5 pr-3 px-lg-3">
              <div class="col-12 col-lg-6">
                <Input
                  label="Texto Botón"
                  :variable="'files.' + i + '.button'"
                  :errors="errors"
                  :valueEn.sync="el.button_en"
                  :valueEs.sync="el.button_es"
                  :valueEnParent="el.button_en"
                  :valueEsParent="el.button_es"
                />
              </div>
              <div class="col-12 col-lg-6">
                <div class="form-group">
                  <label class="font-weight-bold d-block">Archivo</label>
                  
                  <!--<img
                    v-if="typeof el.file == 'string' && el.file !== ''"
                    :src="imagesUrl + '/' + folder + '/' + el.file"
                    width="200px"
                    :alt="el.file"
                  />
                  <a
                    v-if="typeof el.file == 'string' && el.file !== ''"
                    target="_blank"
                    style="margin-left: 10px; top: 50%"
                    :href="multimediaUrl + '/' + el.file"
                    class="btn btn-sm btn-icon-only rounded-circle btn-inverse-info"
                  >
                    <jam-eye class="current-color" height="18" width="18" />
                  </a>-->

                  <embed v-if="typeof el.file == 'string' && el.file !== ''" 
                  :src="multimediaUrl + '/' + folder + '/' + el.file" width="100%" height= "375">
                  <vue-dropzone
                    v-else
                    :ref="`ref_file_${i}`"
                    @vdropzone-file-added="
                      $validatePDFDropzone(
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
              </div>
            </div>
            <div class="col-2 text-center d-flex pl-0 pl-lg-2" style="align-items: center;justify-content: center">
              <a
                    v-if="typeof el.file == 'string' && el.file !== ''"
                    target="_blank"
                    :href="multimediaUrl + '/' + folder + '/'  + el.file"
                    class="btn btn-sm btn-icon-only rounded-circle btn-inverse-info mr-2"
                  >
                    <jam-eye class="current-color" height="18" width="18" />
                  </a>
              <button
                class="btn btn-sm btn-icon-only rounded-circle btn-inverse-danger"
                @click.prevent="remove(i)"
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
    multimediaUrl: String,
    folder: String,
    filesParent: [String, Array],
    //iconsParent: Array,
    messageOrder: String,
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
        acceptedFiles: "application/pdf",
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
    /*updateIcons() {
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
    },*/
    handleEnd(added, removed, moved) {
      //this.updateImages();
      this.showLoading = true;
      setTimeout(() => {
        this.updateImages();
        /*if (this.showIconField) {
          this.updateIcons();
        }*/
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
        button_es: "",
        button_en: "",
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
    /*handleAddedIcons(e, index) {
      setTimeout(() => {
        this.files[index].icon = this.$refs[
          "ref_icon_" + index
        ][0].dropzone.files[0];
      }, 500);
    },*/
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
    /*icons: {
      immediate: true,
      deep: true,
      handler: function (newValue) {
        this.$emit("update:icons", newValue);
      },
    },*/
  },
};
</script>