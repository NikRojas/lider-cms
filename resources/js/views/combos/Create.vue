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
            <h2>Datos Principales</h2>
            <p>Indica los datos principales del Combo</p>
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
                            class="mb-2 d-flex"
                          >
                            <div>
                              <div
                                class="custom-control custom-checkbox"
                                style="margin-top: -10px"
                              >
                                <input
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
                            class="mb-2 d-flex"
                          >
                            <div>
                              <div
                                class="custom-control custom-checkbox"
                                style="margin-top: -10px"
                              >
                                <input
                                  class="custom-control-input"
                                  :value="el.id"
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
                            class="mb-2 d-flex"
                          >
                            <div>
                              <div
                                class="custom-control custom-checkbox"
                                style="margin-top: -10px"
                              >
                                <input
                                  class="custom-control-input"
                                  :value="el.id"
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
    };
  },
  methods: {
    submit() {},
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
      },
    },
  },
};
</script>