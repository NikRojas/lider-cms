<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-4">
            <div class="col-6 col-md-7">
              <BreadCrumb title="Slider" parent active="Slider"></BreadCrumb>
            </div>
            <div class="col-6 col-md-5 text-right">
              <a :href="routeCreate" class="btn btn-icon btn-inverse-primary">
                <span class="btn-inner--icon">
                  <jam-pictures class="current-color" />
                </span>
                <span class="btn-inner--text">Nuevo Slide</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid mt--6">
      <div class="row" v-if="loadingEls">
        <div class="col-12 mb-4" v-for="i in 4" :key="i">
          <Skeleton height="150px" />
        </div>
      </div>
      <div v-else>
        <div class="row" v-if="elements.length">
          <div class="col-12">
            <p> {{ messageOrder}} </p>
          </div>
        </div>
        <draggable class="row" v-if="elements.length" v-model="elements" @change="handleChange">
          <div class="col-12 mb-4" v-for="el in elements" :key="el.id">
            <div class="card">
              <div class="card-body position-relative">
                <div class="text-right">
                  <a :href="route + '/editar/' +  el.id" class="btn btn-sm btn-inverse-info">Editar</a>
                  <button class="btn btn-sm btn-inverse-danger" @click="deleteEl(el.id)">Eliminar</button>
                </div>
                <div class="row">
                  <div class="col-12 col-lg-6 mb-3 mb-lg-0">
                    <div class=" mb-2">
                      <label class="font-weight-bold">Banner ES</label>
                      <a
                        :href="imagesUrl + '/slider/'+ el.image_es"
                        target="_blank"
                        class="btn btn-outline-info btn-sm ml-3"
                      >Ver imagen</a>
                    </div>
                    <img :src="imagesUrl + '/slider/'+ el.image_es" height="400" alt class="img-fluid" />
                  </div>
                  <div class="col-12 col-lg-6">
                    <div class="row">
                      <div class="col-12 mb-3">
                        <div class=" mb-2">
                          <label class="font-weight-bold">Banner EN</label>
                          <a
                            :href="imagesUrl + '/slider/'+ el.image_en"
                            target="_blank"
                            class="btn btn-outline-info btn-sm ml-3"
                          >Ver imagen</a>
                        </div>
                        <img :src="imagesUrl + '/slider/'+ el.image_en" height="100" alt class />
                      </div>
                      <div class="col col-lg-6 mb-3">
                        <div class=" mb-2">
                          <label class="font-weight-bold">Banner Responsive ES</label>
                          <a
                            :href="imagesUrl + '/slider/'+ el.image_responsive_es"
                            target="_blank"
                            class="btn btn-outline-info btn-sm ml-3"
                          >Ver imagen</a>
                        </div>
                        <img
                          :src="imagesUrl + '/slider/'+ el.image_responsive_es"
                          alt
                          height="75"
                          class
                        />
                      </div>
                      <div class="col col-lg-6 mb-3">
                        <div class=" mb-2">
                          <label class="font-weight-bold">Banner Responsive EN</label>
                          <a
                            :href="imagesUrl + '/slider/'+ el.image_responsive_en"
                            target="_blank"
                            class="btn btn-outline-info btn-sm ml-3"
                          >Ver imagen</a>
                        </div>
                        <img
                          :src="imagesUrl + '/slider/'+ el.image_responsive_en"
                          alt
                          height="75"
                          class
                        />
                      </div>
                      <div class="col-12">
                        <label class="font-weight-bold d-block">Válido</label>
                        <p>Desde {{ el.from_format }} hasta {{ el.to_format }}</p>
                      </div>
                      <div class="col-12 mb-3">
                        <label class="font-weight-bold d-block">Link</label>
                        <div v-if="el.link"><a style="text-decoration: underline;" :href="el.link" target="_blank">{{ el.link }}</a></div>
                        <p v-else>No registrado</p>
                      </div>
                      <div class="col-12 col-lg-6">
                        <label class="font-weight-bold">Estado</label>
                        <p class="mb-0"><jam-check class="text-success current-color" v-if="el.active"></jam-check><jam-close class="text-danger current-color" v-else></jam-close>{{ el.active ? 'Activo' : 'Inactivo'}}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </draggable>
        <NoData v-else />
      </div>
    </div>
    <destroy
      element="slide"
      @cancel="restoreEl"
      :open="modalDestroy"
      @submit="destroyConfirm"
      :loading-get="loadingGet"
      :loading-submit="requestSubmit"
    ></destroy>
  </div>
</template>
<script>
import BreadCrumb from "../../components/BreadCrumb";
import { Skeleton } from "vue-loading-skeleton";
import Destroy from "../../components/modals/Destroy";
import draggable from "vuedraggable";
import NoData from "../../components/NoData";
export default {
  components: {
    BreadCrumb,
    Skeleton,
    Destroy,
    draggable,
    NoData
  },
  props: {
    routeCreate: String,
    route: String,
    routeGetAll: String,
    routeOrder: String,
    messageOrder: String,
    imagesUrl: String
  },
  data() {
    return {
      loadingEls: false,
      elements: [],
      element: {},
      modalDestroy: false,
      loadingGet: false,
      requestSubmit: false
    };
  },
  methods: {
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
    },
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
    deleteEl(id) {
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
    handleChange() {
      axios
        .put(this.routeOrder, this.elements)
        .then(response => {
          this.restore();
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
    restoreEl() {
      this.element = {};
      this.modalDestroy = false;
    },
    restore() {
      this.modalDestroy = false;
      this.getEls();
    }
  },
  created() {
    this.getEls();
  }
};
</script>