<template>
  <div>
    <p>{{ messageOrder }}</p>

    <div class="card">
      <div class="table-responsive">
        <simplebar data-simplebar-auto-hide="false">
          <table class="table align-items-center">
            <thead class="thead-light">
              <tr>
                <th>Archivos Subidos</th>
                <th></th>
              </tr>
            </thead>
            <draggable @change="handleEnd" tag="tbody" v-model="files">
              <tr v-for="(el,i) in files" :key="i">
                <td>
                  <a
                    style="text-decoration:underline;"
                    v-if="typeof el == 'string' && el !== ''"
                    :href="imagesUrl+'/'+ folder +'/'+el"
                    target="_blank"
                  >{{ el }}</a>
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
                </td>
                <td>
                  <button  class="btn btn-sm btn-icon-only rounded-circle btn-inverse-danger" @click.prevent="remove(i)">
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
      <button class="btn btn-block btn-sm btn-icon btn-inverse-info" @click.prevent="add">
        <span class="btn-inner--icon">
          <jam-plus class="current-color"></jam-plus>
        </span>
        <span class="btn-inner--text">Agregar</span>
      </button>
    </div>
  </div>
</template>
<script>
import vue2Dropzone from "vue2-dropzone";
import draggable from "vuedraggable";
import simplebar from "simplebar-vue";
import "simplebar/dist/simplebar.min.css";
export default {
  props: {
    imagesUrl: String,
    folder: String,
    filesParent: Array,
    messageOrder: String,
  },
  components: {
    vueDropzone: vue2Dropzone,
    draggable,
    simplebar,
  },
  data() {
    return {
      files: [],
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
    handleEnd(added,removed,moved){
      //a veces se borra la imagen
      console.log(added)
      setTimeout(() => {
        if(this.files[added.moved.newIndex] instanceof File){
          this.$refs['ref_file_'+added.moved.newIndex][0].manuallyAddFile(this.files[added.moved.newIndex], "/");
          this.$refs['ref_file_'+added.moved.newIndex][0].dropzone.emit('thumbnail', this.files[added.moved.newIndex], this.files[added.moved.newIndex].dataURL)
          this.$refs['ref_file_'+added.moved.newIndex][0].dropzone.emit('complete', this.files[added.moved.newIndex])
        }
      }, 100);
    },
    add() {
      const lastItem = this.files[this.files.length - 1];
      if (!lastItem) {
        return false;
      }
      this.files.push("");
    },
    remove(index) {
      this.files.splice(index, 1);
    },
    handleAddedFiles(e, index) {
      setTimeout(() => {
        //this.$emit("update:valueEs", this.$refs.ref_image_es.dropzone.files[0]);
        console.log();
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
        this.files = newValue;
      },
    },
    files: function (newValue, oldValue) {
      this.$emit("update:files", newValue);
    },
  },
};
</script>