<template>
  <div>
    <form @submit.prevent="submit">
      <div class="header pb-6">
        <div class="container-fluid">
          <div class="header-body">
            <div class="row align-items-center pt-0 pt-md-2 pb-4">
              <div class="col-6 col-md-7">
                <BreadCrumb
                  title="Crear Combo"
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
                  :text="'Guardar'"
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
                        >Imagen:</label
                      >

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
                  <div class="col-12">
                    <div class="form-group mb-0">
                      <label class="font-weight-bold" for="description"
                        >Selecciona el Proyecto</label
                      >
                      <div class="row">
                        <div
                          class="col-6 col-md-4 mb-4"
                          v-for="el in projects"
                          :key="el.id"
                        >
                          <b-form-radio
                            class="radio-customized"
                            v-model="element.project_id"
                            :value="el.id"
                          >
                            <b>{{ el.name_es }}</b> <br />
                            {{ el.ubigeo_rel.district }} -
                            {{ el.ubigeo_rel.department }}
                          </b-form-radio>
                        </div>
                      </div>
                      <label
                        v-if="errors && errors.project_id"
                        class="text-danger text-sm d-block mt-2"
                        >{{ errors.project_id[0] }}</label
                      >
                    </div>
                  </div>

                  <div class="col-12">
                    <label class="font-weight-bold" for="price_separation"
                      >Precio de Separación de Combo</label
                    >
                    <money
                      :disabled="project && project.id ? false : true"
                      class="form-control form-control-lg"
                      v-model="element.price_separation"
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
            <p>Indica los inmuebles del Combo</p>
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
                        v-model="totalPrice"
                        v-bind="
                          project && project.master_currency_id == 1
                            ? moneyLocal
                            : moneyForeign
                        "
                      ></money>
                      
                    </div>
                  </div>
                  <div class="col-12">
                    <label
                        v-if="errors && errors.real_states"
                        class="text-danger text-sm d-block  mb-2"
                        >{{ errors.real_states[0] }}</label
                      >
                  </div>
                  <div class="col-4">
                    <label class="font-weight-bold" for="description"
                      >Departamentos
                      <template v-if="element.departments.length"
                        >({{
                          element.departments.length
                        }}
                        seleccionados)</template
                      ></label
                    >
                    <div v-if="loadingDepartments">
                      <Skeleton height="200px" />
                    </div>
                    <div v-else>
                      <div v-if="realStates.departments.length">
                        <simplebar
                          data-simplebar-auto-hide="false"
                          style="max-height: 400px"
                        >
                          <div
                            v-for="el in realStates.departments"
                            :key="'dep' + el.id"
                            class="mb-2 d-flex position-relative"
                            :style="[el.package_rel.length ? { opacity: '.50'} : {}]"
                          >
                            <div>
                              <div
                                class="custom-control custom-checkbox"
                                style="margin-top: -10px"
                              >
                                <input
                                  :disabled="el.package_rel.length ? true : false"
                                  class="custom-control-input"
                                  :value="el.id"
                                  :id="'departments' + el.id"
                                  type="checkbox"
                                  v-model="element.departments"
                                />
                                <label
                                  class="custom-control-label"
                                  :for="'departments' + el.id"
                                >
                                </label>
                              </div>
                            </div>
                            <div>
                              <label
                                class="mb-0"
                                style="cursor: pointer"
                                :for="'departments' + el.id"
                              >
                                <div>{{ el.package_rel.length ? '(Ya se encuentra en otro combo)' : '' }}</div>
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
                              </label>
                            </div>
                          </div>
                        </simplebar>
                      </div>
                      <div v-else>No hay departamentos</div>
                    </div>
                  </div>
                  <div class="col-4">
                    <label class="font-weight-bold" for="description"
                      >Estacionamientos
                      <template v-if="element.parkings.length"
                        >({{ element.parkings.length }} seleccionados)</template
                      ></label
                    >
                    <div v-if="loadingDepartments">
                      <Skeleton height="200px" />
                    </div>
                    <div v-else>
                      <div v-if="realStates.parkings.length">
                        <simplebar
                          data-simplebar-auto-hide="false"
                          style="max-height: 400px"
                        >
                          <div
                            v-for="el in realStates.parkings"
                            :key="'par' + el.id"
                            class="mb-2 d-flex position-relative"
                            :style="[el.package_rel.length ? { opacity: '.50'} : {}]"
                          >
                            <div>
                              <div
                                class="custom-control custom-checkbox"
                                style="margin-top: -10px"
                              >
                                <input
                                  class="custom-control-input"
                                  :value="el.id"
                                  :disabled="el.package_rel.length ? true : false"
                                  :id="'parking' + el.id"
                                  type="checkbox"
                                  v-model="element.parkings"
                                />
                                <label
                                  class="custom-control-label"
                                  :for="'parking' + el.id"
                                >
                                </label>
                              </div>
                            </div>
                            <div>
                              <label
                                class="mb-0"
                                style="cursor: pointer"
                                :for="'parking' + el.id"
                              >
                                <div>{{ el.package_rel.length ? '(Ya se encuentra en otro combo)' : '' }}</div>
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
                              </label>
                            </div>
                          </div>
                        </simplebar>
                      </div>
                      <div v-else>No hay estacionamientos</div>
                    </div>
                  </div>
                  <div class="col-4">
                    <label class="font-weight-bold" for="description"
                      >Depósitos
                      <template v-if="element.warehouses.length"
                        >({{
                          element.warehouses.length
                        }}
                        seleccionados)</template
                      >
                    </label>
                    <div v-if="loadingDepartments">
                      <Skeleton height="200px" />
                    </div>
                    <div v-else>
                      <div v-if="realStates.warehouses.length">
                        <simplebar
                          data-simplebar-auto-hide="false"
                          style="max-height: 400px"
                        >
                          <div
                            v-for="el in realStates.warehouses"
                            :key="'war' + el.id"
                            class="mb-2 d-flex position-relative"
                            :style="[el.package_rel.length ? { opacity: '.50'} : {}]"
                          >
                            <div>
                              <div
                                class="custom-control custom-checkbox"
                                style="margin-top: -10px"
                              >
                                <input
                                  class="custom-control-input"
                                  :value="el.id"
                                  :disabled="el.package_rel.length ? true : false"
                                  :id="'warehouses' + el.id"
                                  type="checkbox"
                                  v-model="element.warehouses"
                                />
                                <label
                                  class="custom-control-label"
                                  :for="'warehouses' + el.id"
                                >
                                </label>
                              </div>
                            </div>
                            <div>
                              <label
                                class="mb-0"
                                style="cursor: pointer"
                                :for="'warehouses' + el.id"
                              >
                                <div>{{ el.package_rel.length ? '(Ya se encuentra en otro combo)' : '' }}</div>
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
                              </label>
                            </div>
                          </div>
                        </simplebar>
                      </div>
                      <div v-else>No hay depósitos</div>
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
    routeStore: String,
    routeReturn: String,
    routeDepartmentsGetAll: String,
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
      totalPrice: 0
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
      let combined = this.element.departments.concat(this.element.parkings, this.element.warehouses);
      if (combined.length) {
        fd.append(
          "real_states",
          JSON.stringify(combined)
        );
      }
      axios
        .post(this.routeStore, fd)
        .then((response) => {
          this.requestServer = false;
          document.location.href = response.data.route;
        })
        .catch((error) => {
          this.requestServer = false;
          if (error.response.status === 422) {
            this.errors = error.response.data.errors || {};
            return;
          }
          document.location.href = error.response.data.route;
        });
    },
    getDepartments(id) {
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
    calculateTotal(){
      this.totalPrice = this.totalPriceDep + this.totalPriceWar + this.totalPricePark;
    }
  },
  watch: {
    "element.project_id": {
      immediate: true,
      handler: function (newValue) {
        this.getDepartments(newValue);
        this.project = this.projects.find((el) => el.id == newValue);
        this.element.warehouses = [];
        this.element.parkings = [];
        this.element.departments = [];
        this.totalPriceDep = this.totalPriceWar = this.totalPricePark = this.totalPrice = 0;
      },
    },
    "element.parkings": {
      handler: function (newValue) {
        if (this.project && this.project.id) {
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
        }
      },
    },
    "element.warehouses": {
      handler: function (newValue) {
        if (this.project && this.project.id) {
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
        }
      },
    },
    "element.departments": {
      handler: function (newValue) {
        if (this.project && this.project.id) {
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
        }
      },
    },
  },
};
</script>