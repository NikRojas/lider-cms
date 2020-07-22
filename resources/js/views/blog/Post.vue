<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-4">
            <div class="col-6 col-md-7">
              <BreadCrumb title="Posts" parent="Blog" active="Posts"></BreadCrumb>
            </div>
            <div class="col-6 col-md-5 text-right">
              <a
                href="#"
                class="btn btn-icon btn-neutral"
                @click.prevent="newPost"
                v-if="startBlock"
              >
                <span class="btn-inner--icon">
                  <i class="fas fa-newspaper"></i>
                </span>
                <span class="btn-inner--text">Nuevo Post</span>
              </a>

              <Button
                :classes="['btn-primary']"
                :text="'Actualizar'"
                @click="updatePost()"
                :request-server="requestServer"
                v-if="editBlock"
              ></Button>

              <Button
                :classes="['btn-primary']"
                :text="'Registrar'"
                @click="createPost()"
                :request-server="requestServer"
                v-if="newBlock"
              ></Button>
              <button
                type="button"
                class="btn btn-danger"
                @click.prevent="restorePage"
                :request-server="requestServer"
                v-if="!startBlock"
              >Cancelar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid mt--6">
      <DataTable
        v-if="startBlock"
        placeholder="Titulo"
        :object.sync="posts"
        :buttonRead="true"
        :buttonUpdate="true"
        :buttonDelete="true"
        @update="editPost"
        @delete="deletePost"
        @read="detailPost"
        @get="getPosts"
      ></DataTable>
      <div class="row" v-if="newBlock">
        <div class="col-12 col-xl-8 mb-4 mb-xl-0">
          <div class="card shadow">
            <div class="card-body">
              <div>
                <form @submit.prevent="createPost">
                  <div class="row">
                    <div class="col-12">
                      <div class="form-group">
                        <InputSlug
                          :url="appUrl+'/blog/categoria/'"
                          :slug.sync="post.slug"
                          :name.sync="post.title"
                          :category-slug.sync="post.category.slug"
                        />
                        <label
                          v-if="errors && errors.title"
                          class="mt-2 text-danger text-sm"
                          for="id_title"
                        >{{ errors.title[0] }}</label>
                        <label
                          v-if="errors && errors.slug"
                          class="mt-2 text-danger text-sm"
                          for="id_name"
                        >{{ errors.slug[0] }}</label>
                      </div>
                    </div>
                    
                    <div class="col-12 ">
                      <div class="form-group">
                        <b-form-checkbox
                          id="id_checkbox_published"
                          v-model="post.published"
                          name="id_checkbox_published"
                        >Publicar</b-form-checkbox>
                      </div>
                    </div>

                    <div class="col-12 ">
                       <div class="form-group">
                         <label class="font-weight-bold" for="id_tags">Tags</label>
                        <vue-tags-input
                          v-model="post.tags"
                          :tags="tags"
                          @tags-changed="newTags => tags = newTags"
                          placeholder="Ingresa Tag"
                        />
                        <label
                          v-if="errors && errors.tags"
                          class="mt-2 text-danger text-sm"
                          for="id_tags"
                        >{{ errors.tags[0] }}</label>
                       </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <label class="font-weight-bold" for="id_category">Categoría</label>

                        <model-list-select
                          :list="categories"
                          id="id_category"
                          class="form-control"
                          v-model="post.category"
                          option-value="id"
                          option-text="name"
                          placeholder="Seleccion la Categoría"
                        ></model-list-select>

                        <label
                          v-if="errors && errors.category_id"
                          class="mt-2 text-danger text-sm"
                          for="id_category"
                        >{{ errors.category_id[0] }}</label>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <label class="font-weight-bold" for="id_excerpt">Breve Descripción</label>
                        <textarea
                          v-model="post.excerpt"
                          rows="2"
                          class="form-control form-control-alternative"
                          id="id_excerpt"
                          placeholder="Breve Descripción"
                        ></textarea>
                        <label
                          v-if="errors && errors.excerpt"
                          class="mt-2 text-danger text-sm"
                          for="id_excerpt"
                        >{{ errors.excerpt[0] }}</label>
                      </div>
                    </div>

                    <div class="col-12">
                      <div class="form-group mb-0">
                        <label class="font-weight-bold" for="id_content">Contenido</label>
                        <quill-Editor
                          class="ql-height-25"
                          @keydown.enter.prevent
                          v-model="post.content"
                          placeholder="Contenido"
                          :options="editorOptions"
                          ref="ref_content"
                        ></quill-Editor>
                        <label
                          v-if="errors && errors.content"
                          class="mt-2 text-danger text-sm"
                          for="id_content"
                        >{{ errors.content[0] }}</label>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-xl-4">
          <div class="card shadow">
            <div class="card-body">
              <div class="form-group">
                <label for="image" class="d-block">
                  <label class="font-weight-bold">Miniatura</label>
                  
                </label>
                

                <vue-dropzone
                  ref="ref_thumbnail"
                  @vdropzone-file-added="$validateImageDropzone($event,$refs.ref_thumbnail.dropzone,1,100000,'100kb')"
                  id="id_thumbnail"
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
                  v-if="errors && errors.thumbnail"
                  class="text-danger text-sm d-block mt-2"
                  for="file"
                >{{ errors.thumbnail[0] }}</label>
              </div>

<file-upload
                                                extensions="jpg,jpeg,png"
                                                accept="image/png,image/jpeg,image/jpg"
                                                class="d-none"
                                                :drop="false"
                                                :multiple="true"
                                                v-model="post.images"
                                                @input-filter="$uploadImageUploadComponent($event,$refs.ref_content,100000,'100kb','posts')"
                                                ref="ref_content_images"
                                                input-id="id_content_images">
                                            </file-upload>

              <div class="form-group mb-0">
                <label for="image" class="d-block">
                  <label class="font-weight-bold">Imagen</label>
                  
                </label>
                

                <vue-dropzone
                  ref="ref_image"
                  @vdropzone-file-added="$validateImageDropzone($event,$refs.ref_image.dropzone,1,100000,'100kb')"
                  id="id_image"
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
                  class="text-danger text-sm d-block mt-2"
                  for="file"
                >{{ errors.image[0] }}</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row" v-if="editBlock">
        <div class="col-12 col-xl-8 mb-4 mb-xl-0">
          <div class="card shadow">
            <div class="card-body">
              <div>
                <form @submit.prevent="createPost">
                  <div class="row">
                    <div class="col-12">
                      <div class="form-group">
                        <InputSlug
                          :url="appUrl+'/blog/categoria/'"
                          :slug.sync="post.slug"
                          :name.sync="post.title"
                          :name-prop="post.title"
                          :slug-prop="post.slug"
                          :category-slug.sync="post.category.slug"
                        />
                        <label
                          v-if="errors && errors.title"
                          class="mt-2 text-danger text-sm"
                          for="id_title"
                        >{{ errors.title[0] }}</label>
                        <label
                          v-if="errors && errors.slug"
                          class="mt-2 text-danger text-sm"
                          for="id_name"
                        >{{ errors.slug[0] }}</label>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <b-form-checkbox
                          id="id_checkbox_published"
                          v-model="post.published"
                          name="id_checkbox_published"
                        >Publicar</b-form-checkbox>
                      </div>
                    </div>


                    <div class="col-12 ">
                       <div class="form-group">
                         <label class="font-weight-bold" for="id_tags">Tags</label>
                        <vue-tags-input
                          v-model="post.tags"
                          :tags="tags"
                          @tags-changed="newTags => tags = newTags"
                          placeholder="Ingresa Tag"
                        />
                        <label
                          v-if="errors && errors.tags"
                          class="mt-2 text-danger text-sm"
                          for="id_tags"
                        >{{ errors.tags[0] }}</label>
                       </div>
                    </div>

                    <div class="col-12">
                      <div class="form-group">
                        <label class="font-weight-bold" for="id_category">Categoría</label>

                        <model-list-select
                          :list="categories"
                          id="id_category"
                          class="form-control"
                          v-model="post.category"
                          option-value="id"
                          option-text="name"
                          placeholder="Seleccion la Categoría"
                        ></model-list-select>

                        <label
                          v-if="errors && errors.category_id"
                          class="mt-2 text-danger text-sm"
                          for="id_category"
                        >{{ errors.category_id[0] }}</label>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <label class="font-weight-bold" for="id_excerpt">Breve Descripción</label>
                        <textarea
                          v-model="post.excerpt"
                          rows="2"
                          class="form-control form-control-alternative"
                          id="id_excerpt"
                          placeholder="Breve Descripción"
                        ></textarea>
                        <label
                          v-if="errors && errors.excerpt"
                          class="mt-2 text-danger text-sm"
                          for="id_excerpt"
                        >{{ errors.excerpt[0] }}</label>
                      </div>
                    </div>

                    <div class="col-12">
                      <div class="form-group mb-0">
                        <label class="font-weight-bold" for="id_content">Contenido</label>

                        <file-upload
                                                extensions="jpg,jpeg,png"
                                                accept="image/png,image/jpeg,image/jpg"
                                                class="d-none"
                                                :drop="false"
                                                :multiple="true"
                                                v-model="post.images"
                                                @input-filter="$uploadImageUploadComponent($event,$refs.ref_content,100000,'100kb','posts')"
                                                ref="ref_content_images"
                                                input-id="id_content_images">
                                            </file-upload>

                        <quill-Editor
                          class="ql-height-25"
                          @keydown.enter.prevent
                          v-model="post.content"
                          placeholder="Contenido"
                          :options="editorOptions"
                          ref="ref_content"
                        ></quill-Editor>
                        <label
                          v-if="errors && errors.content"
                          class="mt-2 text-danger text-sm"
                          for="id_content"
                        >{{ errors.content[0] }}</label>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-xl">
          <div class="card shadow">
            <div class="card-body">

              <div class="form-group">
                <!--<label for="image" class="d-block">-->
                  <label class="font-weight-bold d-block"  for="thumbnail">Miniatura</label>

                  <img
                    class="img-fluid mb-2"
                    v-if="post.thumbnail"
                    :src="'https://storage.googleapis.com/playgroup-web/img/posts/'+post.thumbnail"
                    alt="Post"
                  />

                 <vue-dropzone
                  ref="ref_thumbnail"
                  @vdropzone-file-added="$validatethumbnailDropzone($event,$refs.ref_thumbnail.dropzone,1,100000,'100kb')"
                  id="id_thumbnail"
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
                  v-if="errors && errors.thumbnail"
                  class="text-danger text-sm d-block mt-2"
                  for="file"
                >{{ errors.thumbnail[0] }}</label>
              </div>


              <div class="form-group mb-0">
                <!--<label for="image" class="d-block">-->
                  <label class="font-weight-bold d-block"  for="image">Imagen</label>

                  <img
                    class="img-fluid mb-2"
                    v-if="!image.length && post.image"
                    :src="'https://storage.googleapis.com/playgroup-web/img/posts/'+post.image"
                    alt="Post"
                  />

                 <vue-dropzone
                  ref="ref_image"
                  @vdropzone-file-added="$validateImageDropzone($event,$refs.ref_image.dropzone,1,100000,'100kb')"
                  id="id_image"
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
                  class="text-danger text-sm d-block mt-2"
                  for="file"
                >{{ errors.image[0] }}</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <b-modal centered ref="modal-delete">
        <template slot="modal-title">
          <h2 class="mb-0 text-uppercase text-primary">Eliminar Post</h2>
        </template>
        <p class="my-3">Esta seguro que desea eliminar el post?</p>
        <template slot="modal-footer" slot-scope="{ ok, cancel }">
          <Button
            :classes="['btn-primary']"
            :text="'Eliminar'"
            @click="deletePostConfirm()"
            :request-server="requestServer"
          ></Button>
          <button type="button" class="btn btn-secondary" @click="cancel()">Cancelar</button>
        </template>
      </b-modal>
      <b-modal size="lg" centered ref="modal-detail">
        <template slot="modal-title">
          <h2 class="mb-0 text-uppercase text-primary">Detalle Post</h2>
        </template>
        <div v-if="requestLoading">
          <Loader
            text="Cargando..."
            :iconHeight="20"
            :iconWidth="20"
            :styles="{ height: '300px' }"
          />
        </div>
        <div class="row" v-else>
          <div class="col-12 col-lg-8">
            <div class="row">
              <div class="col-12 col-lg-6">
                <div class="form-group">
                  <label class="font-weight-bold font-weight-bold">Título</label>
                  <p>{{ post.title }}</p>
                </div>
              </div>
              <div class="col-12 col-lg-6">
                <div class="form-group">
                  <label class="font-weight-bold font-weight-bold">Categoría</label>
                  <p v-if="post.category">{{ post.category.name }}</p>
                </div>
              </div>
            </div>

            <div class="form-group">
              <label class="font-weight-bold font-weight-bold">URL</label>
              <p>
                <a
                  target="_blank"
                  :href="appUrl+'/blog/categoria/'+post.slug"
                >{{appUrl}}/blog/{{ post.category.slug }}/{{ post.slug }}</a>
              </p>
            </div>

            <div class="row">
              <div class="col-6">
                <div class="form-group">
                  <label class="font-weight-bold font-weight-bold">Registrado el</label>
                  <p>{{ post.created_at }}</p>
                </div>
              </div>
              <div class="col-6">
                <div class="form-group">
                  <label class="font-weight-bold font-weight-bold">Estado</label>
                  <p v-html="post.published_format"></p>
                </div>
              </div>
            </div>

            <div class="form-group">
              <label class="font-weight-bold font-weight-bold">Tags</label>
              <div>
                <span class="badge badge-pill badge-info mr-1" v-for="tag in tags" :key="tag.id">
                  {{ tag.text }}
                </span>
              </div>
              <!--<p v-if="post.excerpt">{{ post.excerpt }}</p>
              <p v-else>No registrado</p>-->
            </div>

            <div class="form-group">
              <label class="font-weight-bold font-weight-bold">Breve Descripción</label>
              <p v-if="post.excerpt">{{ post.excerpt }}</p>
              <p v-else>No registrado</p>
            </div>
            <div class="form-group">
              <label class="font-weight-bold font-weight-bold">Contenido</label>
              <p v-html="post.content"></p>
            </div>
          </div>
          <div class="col-12 col-lg">
            <div class="form-group">
              <label class="font-weight-bold font-weight-bold">Miniatura</label>
              <img
                :src="'https://storage.googleapis.com/playgroup-web/img/posts/' + post.thumbnail"
                alt="Miniatura"
                class="img-fluid"
                v-if="post.thumbnail"
              />
            </div>

            <div class="form-group">
              <label class="font-weight-bold font-weight-bold">Imagen</label>
              <img
                :src="'https://storage.googleapis.com/playgroup-web/img/posts/' + post.image"
                alt="Imagen"
                class="img-fluid"
                v-if="post.image"
              />
            </div>
          </div>
        </div>
        <template slot="modal-footer" slot-scope="{ ok, cancel }">
          <button type="button" class="btn btn-primary" @click="ok()">Continuar</button>
          <button
            type="button"
            class="btn btn-danger"
            @click="() => { restoreEl();cancel(); }"
          >Cancelar</button>
        </template>
      </b-modal>
    </div>
  </div>
</template>
<script>
import BreadCrumb from "../../components/BreadCrumb";
import Loader from "../../components/Loader";
import DataTable from "../../components/DataTable";
import Button from "../../components/Button";
import InputSlug from "../../components/form/InputSlug";
import FileUpload from "vue-upload-component";
import { ModelListSelect } from "vue-search-select";
import { quillEditor } from "vue-quill-editor";
import vue2Dropzone from "vue2-dropzone";
import VueTagsInput from '@johmun/vue-tags-input';
export default {
  props: {
    appUrl: { type: String }
  },
  components: {
    InputSlug,
    Button,
    FileUpload,
    vueDropzone: vue2Dropzone,
    quillEditor,
    DataTable,
    Loader,
    BreadCrumb,
    ModelListSelect,
    VueTagsInput
  },
  data() {
    return {
      newBlock: false,
      startBlock: true,
      editBlock: false,
      requestServer: false,
      requestLoading: false,
      image: [],
      posts: {},
      dropzoneOptions: {
        url: "/",
        maxFiles: 1,
        acceptedFiles: "image/png,image/jpeg,image/jpg,image/svg+xml",
        autoProcessQueue: false,
        thumbnailWidth: 100,
        addRemoveLinks: true,
        dictRemoveFile: "Remover"
      },
      editorOptions: {
        placeholder: "",
        modules: {
          toolbar: {
            handlers: {
                            image: function(value) {
                              console.log(document.getElementById('id_content_images'));
                                document.getElementById('id_content_images').click();
                            }
                        },
                        
            container: [
              ["bold", "italic", "underline", "strike"],
              ["blockquote"],
              [{ header: 1 }, { header: 2 }],
              [{ list: "ordered" }, { list: "bullet" }],
              [{ indent: "-1" }, { indent: "+1" }],
              [{ size: [false] }],
              [{ header: [1, 2, 3, 4, 5, false] }],
              [{ font: [false] }],
              [{ color: [] }, { background: [] }],
              [{ align: [] }],
              //['clean'],
              ["link", "image", "video"]
            ]
          }
        }
      },
      post: {
        id: "",
        title: "",
        slug: "",
        excerpt: "",
        content: "",
        published: true,
        image: "",
        thumbnail: "",
        category: {},
        category_id: {},
        tags: '',
      },
      tags:[],
      errors: {},
      categories: []
    };
  },
  methods: {
    getPost(id) {
      axios
        .get("json/posts/" + id)
        .then(response => {
          this.post = response.data.post;
          this.tags = response.data.tags;
          this.requestLoading = false;
        })
        .catch(error => {});
    },
    deletePost(id) {
      this.$refs["modal-delete"].show();
      this.getPost(id);
    },
    deletePostConfirm() {
      this.requestServer = true;
      axios
        .delete("posts/" + this.post.id)
        .then(response => {
          this.$refs["modal-delete"].hide();
          this.restoreEl();
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
          this.$refs["modal-delete"].hide();
          this.restorePage();
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
    },
    editPost(id) {
      this.editBlock = true;
      this.getCategories();
      this.getPost(id);
      this.startBlock = false;
    },
    detailPost(id) {
      this.requestLoading = true;
      this.$refs["modal-detail"].show();
      this.getPost(id);
    },
    getPosts(pagina, desde, search = null) {
      let url = "json/posts?page=" + pagina + "&desde=" + desde;
      if (search) {
        url = url + "&search=" + search;
      }
      axios
        .get(url)
        .then(response => {
          this.posts = response.data;
        })
        .catch(error => {});
    },

    getCategories() {
      axios
        .get("/json/select/categories")
        .then(response => {
          this.categories = response.data;
        })
        .catch(err => {});
    },
    newPost() {
      this.startBlock = false;
      this.newBlock = true;
      this.getCategories();
    },
    restoreEl() {
      this.post = {
        title: "",
        slug: "",
        excerpt: "",
        content: "",
        published: true,
        image: "",
        thumbnail: "",
        category: {},
        category_id: {},
        tags: '',
      };
      this.tags = [];
      this.errors = {};
      this.requestServer = false;
    },
    restorePage() {
      this.requestServer = false;
      this.newBlock = this.editBlock = false;
      this.startBlock = true;
      this.post = {
        title: "",
        slug: "",
        excerpt: "",
        content: "",
        published: true,
        image: "",
         thumbnail: "",
        category: {},
        category_id: {},
        tags: '',
      };
      this.tags = [];
      this.categories = this.image = [];
      this.errors = {};
      this.posts = {};
      this.getPosts(1, 5);
    },
    updatePost(){
      this.requestServer = true;
      const fd = new FormData();
      fd.append("id", this.post.id);
      (this.post.title ? fd.append("title", this.post.title) :  fd.append("title", ""));
      if (this.post.excerpt) {
        fd.append("excerpt", this.post.excerpt);
      } else {
        fd.append("excerpt", "");
      }
      (this.post.slug ? fd.append("slug", this.post.slug) :  fd.append("slug", ""));
      (this.post.content ? fd.append("content", this.post.content) :  fd.append("content", ""));
      if (this.$refs.ref_image.dropzone.files[0]) {
        fd.append("image", this.$refs.ref_image.dropzone.files[0]);
      }

      if (this.$refs.ref_thumbnail.dropzone.files[0]) {
        fd.append("thumbnail", this.$refs.ref_thumbnail.dropzone.files[0]);
      }

       if (this.post.category && this.post.category.id) {
        fd.append("category_id", this.post.category.id);
      } else {
        fd.append("category_id", "");
      }
      if (this.post.published) {
        fd.append("published", 1);
      } else {
        fd.append("published", 0);
      }
      if(this.tags.length > 0){
        fd.append("tags",  JSON.stringify(this.tags));
      }
      fd.append("_method", "PUT");

      axios
        .post("posts/" + this.post.id, fd)
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
          this.restorePage();
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
    },
    createPost() {
      this.requestServer = true;
      const fd = new FormData();
      fd.append("title", this.post.title);
      if (this.post.excerpt) {
        fd.append("excerpt", this.post.excerpt);
      } else {
        fd.append("excerpt", "");
      }
      fd.append("slug", this.post.slug);
      fd.append("content", this.post.content);
      
      if (this.$refs.ref_image.dropzone.files[0]) {
        fd.append("image", this.$refs.ref_image.dropzone.files[0]);
      }

      if (this.$refs.ref_thumbnail.dropzone.files[0]) {
        fd.append("thumbnail", this.$refs.ref_thumbnail.dropzone.files[0]);
      }
      if (this.post.published) {
        fd.append("published", 1);
      } else {
        fd.append("published", 0);
      }
      if (this.post.category && this.post.category.id) {
        fd.append("category_id", this.post.category.id);
      } else {
        fd.append("category_id", "");
      }
      if(this.tags.length > 0){
        fd.append("tags",  JSON.stringify(this.tags));
      }
      axios
        .post("posts", fd)
        .then(response => {
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
          this.restorePage();
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
    this.getPosts(1, 5);
  }
};
</script>