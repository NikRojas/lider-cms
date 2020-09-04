<template>
  <div>
    <p>{{ messageOrder }}</p>
    <div class="card">
      <div
        v-if="showLoading"
        style="position: absolute;
              height: calc(100% - 41px);
              width: 100%;
              z-index: 1;
              top: 38px;"
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
        <div class="col-12" v-for="(el,i) in files" :key="i">
          <div class="row">
            <div class="col-10">
              <div class="col-12">
                <div class="form-group">
                  <Input
                    label="Título"
                    :variable="'files.'+i+'.title'"
                    :errors="errors"
                    :valueEn.sync="el.title_en"
                    :valueEs.sync="el.title_es"
                    :valueEnParent="el.title_en"
                    :valueEsParent="el.title_es"
                  />
                </div>
              </div>
              <div class="col-12">
                <div class="row">
                  <div class="col-12">
                    <div class="form-group">
                      <Editor
                        size="sm"
                        label="Descripción"
                        :variable="'files.'+i+'.description'"
                        :errors="errors"
                        :valueEn.sync="el.description_en"
                        :valueEs.sync="el.description_es"
                        :valueEnParent="el.description_en"
                        :valueEsParent="el.description_es"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="form-group">
                  <a
                    style="text-decoration:underline;"
                    v-if="typeof el.file == 'string' && el.file !== ''"
                    :href="imagesUrl+'/'+ folder +'/'+el.file"
                    target="_blank"
                  >{{ el.file }}</a>
                  <vue-dropzone
                    v-else
                    :ref="`ref_file_${i}`"
                    @vdropzone-file-added="$validateImageDropzone($event,$refs['ref_file_'+i][0].dropzone,1,512000,'500kb')"
                    :id="'images'+i"
                    class="text-center multiple-files"
                    :options="dropzoneOptions"
                    @vdropzone-files-added="handleAddedFiles($event,i)"
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
                </div>
              </div>
            </div>
            <div class="col-2">
              <a
                v-if="typeof el.file == 'string' && el.file !== ''"
                target="_blank"
                style="top: 50%;"
                :href="imagesUrl+'/'+ folder +'/'+el.file"
                class="btn btn-sm btn-icon-only rounded-circle btn-inverse-info"
              >
                <jam-eye class="current-color" height="18" width="18" />
              </a>
              <button
                class="btn btn-sm btn-icon-only rounded-circle btn-inverse-danger"
                @click.prevent="remove(i)"
                style="top: 50%;"
              >
                <jam-trash class="current-color" height="18" width="18" />
              </button>
            </div>
          </div>
        </div>
      </draggable>
    </div>
    <div class="mt-3">
      <button class="btn btn-block btn-sm btn-icon btn-inverse-info" @click.prevent="add">
        <span class="btn-inner--icon">
          <jam-plus class="current-color"></jam-plus>
        </span>
        <span class="btn-inner--text">Agregar</span>
      </button>
    </div>
    <div v-if="errors && errors[fieldName]">
      <label class="mt-3 text-danger text-sm" :for="fieldName">{{ errors[fieldName][0] }}</label>
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
              console.log(a);
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
    handleEnd(added, removed, moved) {
      //this.updateImages();
      this.showLoading = true;
      setTimeout(() => {
        this.updateImages();
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
  },
};
</script>