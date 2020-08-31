<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-4">
            <div class="col-6 col-md-7">
              <BreadCrumb title="Posts" parent active="Blog"></BreadCrumb>
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
    
    <div class="container-fluid mt--6">
      <DataTable
        :object="elements"
        placeholder="Título ES, Título EN"
        :button-update="true"
        :button-read="true"
        :button-delete="true"
        :button-disable="false"
        @get="getEls"
        @read="showElement"
        @delete="deleteElement"
        @update="editElement" 
        :entries-prop.sync="elementsPerPage"
      ></DataTable>
    </div>
      <!--
       
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
    -->
    <destroy
      element="post"
      @cancel="restoreEl"
      :open="modalDestroy"
      @submit="destroyConfirm"
      :loading-get="loadingGet"
      :loading-submit="requestSubmit"
    ></destroy>
  </div>
</template>

<script>
import BreadCrumb from "../../../components/BreadCrumb";
import { Skeleton } from "vue-loading-skeleton";
import Destroy from "../../../components/modals/Destroy";
import DataTable from "../../../components/DataTable";
import NoData from "../../../components/NoData";
export default {
  components: {
    BreadCrumb,
    Destroy,
    DataTable,
    NoData,
    Skeleton
  },
  props: {
    routeCreate: String,
    routeGetAll: String,
    route: String,
    appUrl: String,
    imagesUrl: String
  },
  data() {
    return {
      loadingEls: false,
      elements: {},
      element: {},
      modalDestroy: false,
      loadingGet: false,
      requestSubmit: false,
      elementsPerPage: 10
    };
  },
  methods: {
    /*
    getEls() {
      this.loadingEls = true;
      axios
        .get(this.routeGetAll)
        .then(response => {
          this.elements = response.data;
          this.loadingEls = false;
        })
        .catch(error => {});
    },
    */
    getEls(page, itemsPerPage, q = null) {
      let url =
        this.routeGetAll + "?page=" + page + "&itemsPerPage=" + itemsPerPage;
      if (q) {
        url = url + "&q=" + q;
      }
      axios
        .get(url)
        .then(response => {
          this.elements = response.data;
        })
        .catch(error => {});
    },
    restoreEl() {
      this.element = {};
      this.modalDestroy = false;
    },
    restore() {
      this.modalDestroy = false;
      this.getEls(1, this.elementsPerPage);
    },
    showElement(id) {
      console.log("log");
    },
    editElement(id) {
      document.location.href = this.route + "/editar/" + id;
    },
    deleteElement(id) {
      this.modalDestroy = true;
      this.getEl(id);
    },
    getEl(id) {
      this.loadingGet = true;
      axios
        .get(this.route + "/json/get/" + id)
        .then(response => {
          this.element = response.data;
          this.loadingGet = false;
        })
        .catch(error => {});
    },
    destroyConfirm() {
      this.requestSubmit = true;
      axios
        .delete(this.route + "/" + this.element.id)
        .then(response => {
          this.requestSubmit = false;
          this.restore();
          Swal.fire({
            title: response.data.title,
            text: response.data.message,
            type: "success",
            confirmButtonText: "OK",
            buttonsStyling: false,
            customClass: {
              confirmButton: "btn btn-inverse-primary"
            }
          });
        })
        .catch(error => {
          Swal.fire({
            title: error.response.data.title,
            text: error.response.data.message,
            type: "error",
            confirmButtonText: "OK",
            buttonsStyling: false,
            customClass: {
              confirmButton: "btn btn-inverse-primary"
            }
          });
          this.restoreEl();
        });
    }
  },
  created() {
    this.getEls(1, this.elementsPerPage);
  }
};
</script>