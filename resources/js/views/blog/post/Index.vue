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
                  <jam-newspaper class="current-color" />
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

    <b-modal
      v-model="modalView"
      @close="restoreEl"
      no-close-on-esc
      no-close-on-backdrop
      centered
      size="xl"
      footer-class="border-0 pt-0"
      body-class="pt-0"
    >
      <template slot="modal-title">
        <div class="text-primary h2">Post</div>
      </template>
      <template slot="modal-header-close">
        <button type="button" class="btn p-0 bg-transparent" @click="restoreEl">
          <jam-close></jam-close>
        </button>
      </template>
      <div v-if="loadingGet">
        <SkeletonForm></SkeletonForm>
      </div>
      <div v-else>
        <div class="row">
          <div class="col-12 col-lg-8 col-md-8">
            <div class="row">
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label class="font-weight-bold">Título ES:</label>
                  <p>{{ element.title_es }}</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label class="font-weight-bold">Título EN:</label>
                  <p>{{ element.title_en }}</p>
                </div>
              </div>
              <div class="col-12">
                <div class="form-group">
                  <label class="font-weight-bold">Publicado:</label>
                  <p>{{ element.published ? 'Sí' : 'No' }}</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label class="font-weight-bold">Seo Keywords ES:</label>
                  <p v-if="element.seo_keywords_es">{{ element.seo_keywords_es }}</p>
                  <p v-else>No registrado Seo Keywords ES</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label class="font-weight-bold">Seo Keywords EN:</label>
                  <p v-if="element.seo_keywords_en">{{ element.seo_keywords_en }}</p>
                  <p v-else>No registrado Seo Keywords EN</p>
                </div>
              </div>
              <!--<div class="col-12 col-md-6">
                <div class="form-group">
                  <label class="font-weight-bold">Tags ES:</label>
                  <p>
                    <template v-for="(tag,i) in element.tags">
                      <template v-if="i==element.tags.length-1">{{ tag.name_es }}</template>
                      <template v-else>{{ tag.name_es }},</template>
                    </template>
                  </p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label class="font-weight-bold">Tags EN:</label>
                  <p>
                    <template v-for="(tag,i) in element.tags">
                      <template v-if="i==element.tags.length-1">{{ tag.name_en }}</template>
                      <template v-else>{{ tag.name_en }},</template>
                    </template>
                  </p>
                </div>
              </div>-->

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label class="font-weight-bold">Categoría ES:</label>
                  <template v-if="element.category">
                    <p>{{ element.category.name_es }}</p>
                  </template>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label class="font-weight-bold">Categoría EN:</label>
                  <template v-if="element.category">
                    <p>{{ element.category.name_en }}</p>
                  </template>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label class="font-weight-bold">Descripción ES:</label>
                  <p>{{ element.excerpt_es }}</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label class="font-weight-bold">Descripción EN:</label>
                  <p>{{ element.excerpt_en }}</p>
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label class="font-weight-bold">Contenido ES:</label>
                  <p v-html="element.content_es"></p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label class="font-weight-bold">Contenido EN:</label>
                  <p v-html="element.content_en"></p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-4 col-md-4">
            <div class="row">
              <div class="col-12">
                <div class="form-group">
                  <label class="font-weight-bold d-block">Imagen:</label>
                  <img
                    :src="imagesUrl+'/posts/'+element.image"
                    :alt="element.name"
                    class="img-fluid"
                  />
                </div>
              </div>
              <div class="col-12">
                <div class="form-group">
                  <label class="font-weight-bold d-block">Miniatura:</label>
                  <img
                    :src="imagesUrl+'/posts/'+element.thumbnail"
                    :alt="element.name"
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <template v-slot:modal-footer="{ ok }">
        <button type="button" class="btn btn-primary" @click="restoreEl">Cerrar</button>
      </template>
    </b-modal>

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
import SkeletonForm from "../../../components/skeleton/form";
import Destroy from "../../../components/modals/Destroy";
import DataTable from "../../../components/DataTable";
import NoData from "../../../components/NoData";
export default {
  components: {
    BreadCrumb,
    Destroy,
    DataTable,
    NoData,
    SkeletonForm,
  },
  props: {
    routeCreate: String,
    routeGetAll: String,
    route: String,
    appUrl: String,
    imagesUrl: String,
  },
  data() {
    return {
      loadingEls: false,
      elements: {},
      element: {},
      modalDestroy: false,
      loadingGet: false,
      requestSubmit: false,
      elementsPerPage: 10,

      modalView: false,
    };
  },
  methods: {
    getEls(page, itemsPerPage, q = null) {
      let url =
        this.routeGetAll + "?page=" + page + "&itemsPerPage=" + itemsPerPage;
      if (q) {
        url = url + "&q=" + q;
      }
      axios
        .get(url)
        .then((response) => {
          this.elements = response.data;
        })
        .catch((error) => {});
    },
    restoreEl() {
      this.element = {};
      this.modalDestroy = this.modalView = false;
    },
    restore() {
      this.modalDestroy = false;
      this.getEls(1, this.elementsPerPage);
    },
    showElement(id) {
      this.modalView = true;
      this.getEl(id);
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
        .then((response) => {
          this.element = response.data;
          this.loadingGet = false;
        })
        .catch((error) => {});
    },
    destroyConfirm() {
      this.requestSubmit = true;
      axios
        .delete(this.route + "/" + this.element.id)
        .then((response) => {
          this.requestSubmit = false;
          this.restore();
          Swal.fire({
            title: response.data.title,
            text: response.data.message,
            type: "success",
            confirmButtonText: "OK",
            buttonsStyling: false,
            customClass: {
              confirmButton: "btn btn-inverse-primary",
            },
          });
        })
        .catch((error) => {
          Swal.fire({
            title: error.response.data.title,
            text: error.response.data.message,
            type: "error",
            confirmButtonText: "OK",
            buttonsStyling: false,
            customClass: {
              confirmButton: "btn btn-inverse-primary",
            },
          });
          this.restoreEl();
        });
    },
  },
  created() {
    this.getEls(1, this.elementsPerPage);
  },
};
</script>