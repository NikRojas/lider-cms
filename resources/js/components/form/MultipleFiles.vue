<template>
  <div>
    <p :class="desc ? 'mb-0' : ''">{{ messageOrder }}</p>
    <small
      style="opacity: 0.7"
      class="form-text mb-2 mt-0 d-block"
      v-if="desc"
      >{{ desc }}</small
    >
    <div class="card">
      <div class="table-responsive">
        <div
          v-if="showLoading"
          style="
            position: absolute;
            height: calc(100% - 41px);
            width: 100%;
            z-index: 1;
            top: 38px;
          "
        >
          <Skeleton height="100%" />
        </div>
        <simplebar data-simplebar-auto-hide="false">
          <table class="table align-items-center">
            <thead class="thead-light">
              <tr>
                <th>Archivos Subidos</th>
                <th></th>
              </tr>
            </thead>
            <draggable @change="handleEnd" tag="tbody" v-model="files">
              <tr v-for="(el, i) in files" :key="i">
                <td>
                  <!--
                  <a
                    style="text-decoration:underline;"
                    v-if="typeof el == 'string' && el !== ''"
                    :href="imagesUrl+'/'+ folder +'/'+el"
                    target="_blank"
                  >{{ el }}</a>
                  -->
                  <img
                    v-if="typeof el == 'string' && el !== ''"
                    :src="imagesUrl + '/' + folder + '/' + el"
                    width="200px"
                    :alt="el"
                  />

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
                </td>
                <td class="text-center">
                  <a
                    v-if="typeof el == 'string' && el !== ''"
                    target="_blank"
                    :href="imagesUrl + '/' + folder + '/' + el"
                    class="btn btn-sm btn-icon-only rounded-circle btn-inverse-info"
                  >
                    <jam-eye class="current-color" height="18" width="18" />
                  </a>
                  <button
                    class="btn btn-sm btn-icon-only rounded-circle btn-inverse-danger"
                    @click.prevent="remove(i)"
                  >
                    <jam-trash class="current-color" height="18" width="18" />
                  </button>
                </td>
              </tr>
            </draggable>
          </table>
        </simplebar>
      </div>
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
    desc: String,
  },
  components: {
    vueDropzone: vue2Dropzone,
    draggable,
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
        if (element instanceof File) {
          this.$refs["ref_file_" + i][0].dropzone.files.pop();
          document
            .querySelectorAll("#images" + i + ">.dz-preview")
            .forEach(function (a) {
              console.log(a);
              a.remove();
            });
          //Add File
          this.$refs["ref_file_" + i][0].manuallyAddFile(element, "/");
          this.$refs["ref_file_" + i][0].dropzone.emit(
            "thumbnail",
            element,
            element.dataURL
          );
          this.$refs["ref_file_" + i][0].dropzone.emit("complete", element);
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
        const lastItem = this.files[this.files.length - 1];
        if (!lastItem) {
          return false;
        }
      }
      this.files.push("");
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
        this.files[index] = this.$refs[
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