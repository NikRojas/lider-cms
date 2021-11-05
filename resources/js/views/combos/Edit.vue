<template>
  <div>
    <form @submit.prevent="submit">
      <div class="header pb-6">
        <div class="container-fluid">
          <div class="header-body">
            <div class="row align-items-center pt-0 pt-md-2 pb-4">
              <div class="col-6 col-md-7">
                <BreadCrumb
                  title="Actualizar Combo"
                  parent
                  active="Combos"
                ></BreadCrumb>
              </div>
              <div class="col-6 col-md text-right">
                <span
                  v-if="
                    Object.keys(errors).length === 0 &&
                    errors.constructor === Object
                  "
                ></span>
                <span v-else class="d-block text-danger mb-2"
                  >Algunos campos estan incorrectos</span
                >
                <Button
                  :text="'Actualizar'"
                  :classes="['btn-inverse-primary', 'mr-2']"
                  :request-server="requestServer"
                ></Button>
                <a type="button" class="btn btn-secondary" :href="routeReturn"
                  >Cancelar</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid mt--6">
        <div class="row mb-3">
          <div class="col-12 text-right">
            <b-form-checkbox
              size="lg"
              v-model="element.status"
              name="check-button"
              switch
            >
              Mostrar Combo en la Web
            </b-form-checkbox>
          </div>
        </div>
        <div class="row mb-4">
          <div class="col-12 col-lg-2">
            <h2>Datos Principales</h2>
            <p>Indica los datos principales del Combo</p>
          </div>
          <div class="col-12 col-lg-10">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-12">
                    <div class="form-group">
                      <label class="font-weight-bold" for="image"
                        >Imagen (Opcional):</label
                      >
                      <div class="row">
                        <div class="col-lg-4 mb-3 mb-lg-0">
                          <img
                            class="img-fluid"
                            :src="
                              imagesUrl + '/projects/combos/' + element.image
                            "
                            v-if="element.image"
                            alt
                          />
                        </div>
                        <div :class="element.image ? 'col-lg-8' : 'col-12'">
                          <vue-dropzone
                            ref="ref_image"
                            class="text-center"
                            @vdropzone-file-added="
                              $validateImageDropzone(
                                $event,
                                $refs.ref_image.dropzone,
                                1,
                                100000,
                                '100kb'
                              )
                            "
                            id="image"
                            :options="dropzoneOptions"
                            :duplicateCheck="true"
                            :useCustomSlot="true"
                          >
                            <div class="dropzone-custom-content">
                              <h5 class="dropzone-custom-title text-primary">
                                Suelte los archivos aquí o haga click para
                                cargarlos.
                              </h5>
                            </div>
                          </vue-dropzone>
                        </div>
                      </div>

                      <label
                        v-if="errors && errors.avatar"
                        class="text-danger text-sm d-block mt-2"
                        for="image"
                        >{{ errors.avatar[0] }}</label
                      >
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <label class="font-weight-bold" for="description"
                        >Descripción</label
                      >
                      <textarea
                        type="text"
                        class="form-control"
                        v-model="element.description"
                        id="description"
                      ></textarea>
                      <label
                        v-if="errors && errors.description"
                        class="mt-2 text-danger text-sm"
                        for="description"
                        >{{ errors.description[0] }}</label
                      >
                    </div>
                  </div>

                  <div class="col-12" v-if="project && project.price_separation">
                    <label class="font-weight-bold" for="price_separation"
                      >Precio de Separación de Combo</label
                    >
                    <money
                      disabled
                      class="form-control form-control-lg"
                      v-model="project.price_separation"
                      v-bind="
                        project && project.master_currency_id == 1
                          ? moneyLocal
                          : moneyForeign
                      "
                    ></money>
                    <label
                      v-if="errors && errors.price_separation"
                      class="mt-2 text-danger text-sm"
                      for="price_separation"
                      >{{ errors.price_separation[0] }}</label
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mb-4">
          <div class="col-12 col-lg-2">
            <h2>Datos de Inmuebles</h2>
            <p>Datos de los inmuebles del Combo</p>
          </div>
          <div class="col-12 col-lg-10">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-12">
                    <div class="form-group">
                      <label class="font-weight-bold" for="price_separation"
                        >Precio Total del Combo</label
                      >
                      <money
                        :disabled="true"
                        class="form-control form-control-lg"
                        v-model="element.price_total"
                        v-bind="
                          project && project.master_currency_id == 1
                            ? moneyLocal
                            : moneyForeign
                        "
                      ></money>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <label class="font-weight-bold" for="price_separation"
                        >Proyecto</label
                      >
                      <div class="text-right position-relative mb-1">
                          <img
                            class="position-absolute"
                            style="left: 5px; top: 5px;"
                            :src="imagesUrl + '/projects/' + element.project_rel.logo_colour"
                            height="25"
                          />
                        </div>
                        <img
                          style="max-height: 200px"
                          class="img-fluid d-block"
                          :src="imagesUrl + '/projects/' + element.project_rel.images_format[0]"
                          alt
                        />
                      <h2 class="mb-0">{{ element.project_rel.name_es }}</h2>
                      {{ element.project_rel.ubigeo_rel.district }} -
                      {{ element.project_rel.ubigeo_rel.department }}
                    </div>
                  </div>
                  <div class="col-12">
                    <label class="font-weight-bold" for="price_separation"
                        >Inmuebles</label
                      >
                  </div>
                  <div
                    class="col-12 col-lg-6 mb-2"
                    v-for="el in elementParent.departments_rel"
                    :key="'dep' + el.id"
                  >
                    <b>{{ el.description }}</b> <br />
                    {{ el.sap_code }} <br />
                    {{ el.area }}m2
                    <div>
                      {{
                        project.master_currency_id == 1
                          ? el.price_format
                          : el.price_foreign_format
                      }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<style>
.radio-customized .custom-control-label::after,
.radio-customized .custom-control-label::before {
  border-radius: 50%;
}
</style>
<script>
import BreadCrumb from "../../components/BreadCrumb";
import vue2Dropzone from "vue2-dropzone";
import { Money } from "v-money";
import Button from "../../components/Button";
import { Skeleton } from "vue-loading-skeleton";
import simplebar from "simplebar-vue";
import "simplebar/dist/simplebar.min.css";
export default {
  props: {
    projects: Array,
    appUrl: String,
    imagesUrl: String,
    routeUpdate: String,
    routeReturn: String,
    routeDepartmentsGetAll: String,
    elementParent: Object,
  },
  components: {
    BreadCrumb,
    vueDropzone: vue2Dropzone,
    Button,
    Money,
    Skeleton,
    simplebar,
  },
  data() {
    return {
      requestServer: false,
      errors: {},
      dropzoneOptions: {
        url: "/",
        maxFiles: 1,
        acceptedFiles: "image/png,image/jpeg,image/jpg,image/svg+xml",
        autoProcessQueue: false,
        thumbnailWidth: 150,
        addRemoveLinks: true,
        dictRemoveFile: "Remover",
      },
      moneyLocal: {
        thousands: ",",
        decimal: ".",
        prefix: "S/ ",
        //suffix: ' #',
        precision: 2,
        masked: false,
      },
      info: false,
      moneyForeign: {
        thousands: ",",
        decimal: ".",
        prefix: "$ ",
        //suffix: ' #',
        precision: 2,
        masked: false,
      },
      element: {
        project_id: "",
        status: true,
        warehouses: [],
        parkings: [],
        departments: [],
      },
      loadingDepartments: false,
      realStates: {
        departments: [],
        parkings: [],
        warehouses: [],
      },
      project: {
        id: null,
        master_currency_id: 1,
      },
      totalPriceDep: 0,
      totalPriceWar: 0,
      totalPricePark: 0,
      totalPrice: 0,
    };
  },
  methods: {
    submit() {
      this.requestServer = true;
      const fd = new FormData();
      if (this.element.description) {
        fd.append("description", this.element.description);
      }
      if (this.element.project_id) {
        fd.append("project_id", this.element.project_id);
      }
      if (this.element.status == true) {
        fd.append("status", 1);
      } else {
        fd.append("status", 0);
      }
      if (this.element.price_separation) {
        fd.append("price_separation", this.element.price_separation);
      }
      if (this.$refs.ref_image.dropzone.files[0]) {
        fd.append("image", this.$refs.ref_image.dropzone.files[0]);
      }
      /*let combined = this.element.departments.concat(
        this.element.parkings,
        this.element.warehouses
      );
      if (combined.length) {
        fd.append("real_states", JSON.stringify(combined));
      }*/
      fd.append("_method", "put");
      axios
        .post(this.routeUpdate + "/" + this.element.slug, fd)
        .then((response) => {
          this.requestServer = false;
          //document.location.href = response.data.route;
        })
        .catch((error) => {
          this.requestServer = false;
          if (error.response.status === 422) {
            this.errors = error.response.data.errors || {};
            return;
          }
          //document.location.href = error.response.data.route;
        });
    },
    /*getDepartments(id) {
      this.loadingDepartments = true;
      axios
        .get(this.routeDepartmentsGetAll, {
          params: {
            project: id,
          },
        })
        .then((response) => {
          this.realStates = response.data;
          this.loadingDepartments = false;
        })
        .catch((error) => {});
    },
    calculateTotal() {
      this.totalPrice =
        this.totalPriceDep + this.totalPriceWar + this.totalPricePark;
    },*/
  },
  watch: {
    elementParent: {
      immediate: true,
      handler: function (newValue) {
        //this.element = Object.assign({}, newValue);
        this.element = newValue;
        this.element.departments = newValue.departmentsEdited;
        this.element.parkings = newValue.parkingsEdited;
        this.element.warehouses = newValue.warehousesEdited;
      },
    },
    "element.project_id": {
      immediate: true,
      handler: function (newValue, oldValue) {
        //this.getDepartments(newValue);
        this.project = this.projects.find((el) => el.id == newValue);
        /*if(newValue && oldValue){
          this.element.warehouses = [];
          this.element.parkings = [];
          this.element.departments = [];
          this.totalPriceDep = this.totalPriceWar = this.totalPricePark = this.totalPrice = 0;
        }*/
      },
    },
    "element.parkings": {
      handler: function (newValue) {
        /*if (this.project && this.project.id) {
          let filterPark = this.realStates.parkings.filter((item) =>
            newValue.includes(item.id)
          );
          if (this.project.master_currency_id == 1) {
            this.totalPricePark = filterPark.reduce(
              (total, item) => total + Number(item.price),
              0
            );
          } else {
            this.totalPricePark = filterPark.reduce(
              (total, item) => total + Number(item.price_foreign),
              0
            );
          }
          this.calculateTotal()
        }*/
      },
    },
    "element.warehouses": {
      handler: function (newValue) {
        /*if (this.project && this.project.id) {
          let filterWarehouses = this.realStates.warehouses.filter((item) =>
            newValue.includes(item.id)
          );
          if (this.project.master_currency_id == 1) {
            this.totalPriceWar = filterWarehouses.reduce(
              (total, item) => total + Number(item.price),
              0
            );
          } else {
            this.totalPriceWar = filterWarehouses.reduce(
              (total, item) => total + Number(item.price_foreign),
              0
            );
          }
          this.calculateTotal()
        }*/
      },
    },
    "element.departments": {
      handler: function (newValue) {
        /*if (this.project && this.project.id) {
          let filterDepartments = this.realStates.departments.filter((item) =>
            newValue.includes(item.id)
          );
          if (this.project.master_currency_id == 1) {
            this.totalPriceDep = filterDepartments.reduce(
              (total, item) => total + Number(item.price),
              0
            );
          } else {
            this.totalPriceDep = filterDepartments.reduce(
              (total, item) => total + Number(item.price_foreign),
              0
            );
          }
          this.calculateTotal()
        }*/
      },
    },
  },
};
</script>