<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-4">
            <div class="col-6 col-md-7">
              <BreadCrumb title="Blog" parent active="Posts"></BreadCrumb>
            </div>
            <div class="col-6 col-md-5 text-right">
              <a :href="routeCreate" class="btn btn-icon btn-inverse-primary">
                <span class="btn-inner--icon">
                  <jam-building class="current-color" />
                </span>
                <span class="btn-inner--text">Nuevo Post</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--
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
          <div class="card">
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
                          class="form-control "
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
          <div class="card">
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
          <div class="card">
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
                          class="form-control "
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
          <div class="card">
            <div class="card-body">

              <div class="form-group"> 
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
    -->
  </div>
</template>

<script>import BreadCrumb from "../../../components/BreadCrumb";
import { Skeleton } from "vue-loading-skeleton";
import NoData from "../../../components/NoData";
export default {
  components: {
    BreadCrumb,
    NoData,
    Skeleton,
  },
  props: {
    routeCreate: String,
    route: String,
    appUrl: String,   
    imagesUrl: String,
  },
  data() {
    return {
      loadingEls: false,
      elements: [],
      element: {},
      modalDestroy: false,
      loadingGet: false,
      requestSubmit: false,
    };
  },
  methods: {
    getEls() {
      this.loadingEls = true;
      axios
        .get(this.routeGetAll)
        .then((response) => {
          this.elements = response.data;
          this.loadingEls = false;
        })
        .catch((error) => {});
    },
  },
  created() {
    this.getEls();
  },
};
</script>