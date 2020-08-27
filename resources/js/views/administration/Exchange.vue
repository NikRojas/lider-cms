<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-4">
            <div class="col-6 col-md-7">
              <BreadCrumb title="Tipo de Cambio" parent="Administración" active="Tipo de Cambio"></BreadCrumb>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid mt--6">
      <div class="row">
        <div class="col-lg-3 mb-4 mb-lg-0">
          <p
            v-if="!loadingEls"
          >En este apartado usted puede modificar el cambio de las moneda, tomar en consideración que el cambio se redondea a Entero Superior.</p>
          <h4 class="text-uppercase" v-if="!loadingEls">Moneda Predeterminada</h4>
          <div class="card" v-if="!loadingEls">
            <div class="card-body">
              <div class="text-center mb-4">
                <gb-flag code="pe" size="huge" />
                <h1>{{ currencyDefault.name }}</h1>
              </div>
              <h3 class="text-center">
                <span class="font-weight-normal">Abreviación:</span>
                {{ currencyDefault.abbreviation }}
              </h3>
              <h3 class="text-center">
                <span class="font-weight-normal">Símbolo:</span>
                {{ currencyDefault.symbol }}
              </h3>
            </div>
          </div>
          <div v-if="loadingEls">
            <skeleton height="300px"></skeleton>
          </div>
        </div>
        <div class="col-lg">
          <div class="row" v-if="!loadingEls">
            <div class="col-12 mb-4" v-for="(el,i) in currencies" :key="i">
              <form @submit.prevent="update">
                <div class="card">
                  <div class="card-body pb-0">
                    <div class="row">
                      <div class="col-12 col-lg-4">
                        <gb-flag code="pe" size="medium" v-if="el.abbreviation == 'PEN'" />
                        <gb-flag code="us" size="medium" v-else />
                        <h2>{{ el.name }}</h2>
                        <h3>
                          <span class="font-weight-normal">Abreviación:</span>
                          {{ el.abbreviation }}
                        </h3>
                        <h3>
                          <span class="font-weight-normal">Símbolo:</span>
                          {{ el.symbol }}
                        </h3>
                      </div>
                      <div class="col-12 col-lg d-flex align-items-center justify-content-center">
                        <div class="text-center h2 font-weight-normal">
                          {{ el.symbol }}{{ unit }} equivale a
                          <h1
                            class="text-primary text-center"
                            v-if="elementSelected != el.id"
                          >{{ currencyDefault.symbol }} {{ el.value }}</h1>
                          <div class="form-group" v-if="editBlock && elementSelected == el.id">
                            {{ currencyDefault.symbol }}
                            <input
                              type="text"
                              class="form-control d-inline-block w-50"
                              v-model="element.value"
                              id="value"
                            />
                            <label v-if="errors && errors.value" class="text-danger text-sm d-block mt-2" for="value">{{ errors.value[0] }}</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-footer pt-0 border-0 text-right">
                    <Button
                            v-if="editBlock && elementSelected == el.id"
                            :text="'Actualizar'"
                            :classes="['btn-inverse-primary','btn-sm']"
                            :request-server="requestSubmit"
                    ></Button>
                    <button
                      class="btn btn-inverse-info btn-sm"
                      @click.prevent="edit(el.id)"
                      v-if="elementSelected != el.id"
                    >Editar</button>
                    <button
                      v-if="editBlock && elementSelected == el.id"
                      type="button"
                      class="btn btn-secondary btn-sm"
                      @click.prevent="restoreEl"
                    >Cancelar</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="row" v-else>
            <div class="col-12 mb-4">
              <skeleton height="200px"></skeleton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BreadCrumb from "../../components/BreadCrumb";
import { Skeleton } from "vue-loading-skeleton";
import Button from "../../components/Button";
export default {
  components: {
    BreadCrumb,
    Skeleton,
    Button
  },
  data() {
    return {
      elements: {},
      errors: {},
      loadingEls: false,
      unit: 1,
      element: {},
      elementSelected: 0,
      editBlock: false,
      requestSubmit: false
    };
  },
  props: {
    route: String,
    routeGetAll: String,
  },
  methods: {
    restoreEl() {
      this.errors = {};
      this.element = {
      };
      this.editBlock = false;
      this.elementSelected = 0;
    },
    restore(){
      this.errors = {};
      this.element = {
      };
      this.editBlock = false;
      this.elementSelected = 0;
      this.getEls();
    },
    edit(id) {
      this.editBlock = true;
      this.elementSelected = id;
      this.element = Object.assign(
        {},
        this.elements.find((item) => item.id === id)
      );
    },
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
    update(){
      this.requestSubmit = true;
      let url;
      let method;
      url = this.route + "/" + this.element.id;
      method = "put";
      axios({
        method: method,
        url: url,
        data: this.element,
      })
        .then((response) => {
          this.requestSubmit = false;
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
          this.restore();
        })
        .catch((error) => {
          this.requestSubmit = false;
          if (error.response.status === 422) {
            this.errors = error.response.data.errors || {};
            return;
          }
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
    }
  },
  created() {
    this.getEls();
  },
  computed: {
    currencyDefault: function () {
      if (this.elements.length) {
        return this.elements.find((element) => element.default == 1);
      }
    },
    currencies: function () {
      if (this.elements.length) {
        return this.elements.filter((element) => element.default != 1);
      }
    },
  },
};
</script>