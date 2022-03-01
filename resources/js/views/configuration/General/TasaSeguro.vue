<template>
  <div class="row mb-4">
    <div class="col-12 col-lg-3">
      <h2>Tasa Seguro del Bien</h2>
      <p>
        Actualiza las tasas de seguro que se utilizan en la seccion
        <b>Simulador de Cuotas</b> en la Plataforma.
      </p>
    </div>
    <div class="col-12 col-lg-9">
      <div class="text-right mb-3">
        <a
          href="#"
          class="btn btn-icon btn-inverse-primary"
          @click.prevent="editElText"
          v-if="startBlock"
        >
          <span class="btn-inner--text">Editar</span>
        </a>
      </div>
      <div class="card mb-4" v-if="startBlock">
        <div class="card-body" v-if="!loadingGet">
          <div class="row">
            <div class="col-12" v-for="el in elements" :key="el.id">
              <div class="form-group">
                <label class="font-weight-bold"
                  >Tasa de {{ el.sector_rel.name }}:</label
                >
                <p v-if="el.value">
                  {{ el.value }}
                </p>
                <p v-else>No registrado</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card-body" v-else>
          <div class="row">
            <div class="col-12 mb-4" v-for="i in 2" :key="i">
              <div class="w-25">
                <Skeleton height="15px" />
              </div>
              <div class="w-75">
                <Skeleton height="50px" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card mb-4" v-if="editBlock">
        <div class="card-body">
          <form @submit.prevent="update">
            <div class="row">
              <div class="col-12">
                <div class="form-group">
                  <label class="font-weight-bold" for="tasa_seguro_depa"
                    >Tasa Seguro Departamento</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    v-model="element.tasa_seguro_depa"
                    id="tasa_seguro_depa"
                  />
                  <small style="opacity: 0.7">El formato del input debe ser 0.00</small>
                  <label
                    v-if="errors && errors.tasa_seguro_depa"
                    class="mt-2 text-danger text-sm"
                    for="tasa_seguro_depa"
                    >{{ errors.tasa_seguro_depa[0] }}</label
                  >
                </div>
              </div>
              <div class="col-12">
                <div class="form-group">
                  <label class="font-weight-bold" for="tasa_seguro_casa"
                    >Tasa Seguro Casa</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    v-model="element.tasa_seguro_casa"
                    id="tasa_seguro_casa"
                  />
                  <small style="opacity: 0.7">El formato del input debe ser 0.00</small>
                  <label
                    v-if="errors && errors.tasa_seguro_casa"
                    class="mt-2 text-danger text-sm"
                    for="tasa_seguro_casa"
                    >{{ errors.tasa_seguro_casa[0] }}</label
                  >
                </div>
              </div>
              <div class="col-12 text-right">
                    <Button
                      :text="'Actualizar'"
                      :classes="['btn-inverse-primary']"
                      :request-server="requestSubmit"
                    ></Button>
                    <button
                      type="button"
                      class="btn btn-secondary"
                      @click.prevent="restore"
                    >
                      Cancelar
                    </button>
                  </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Skeleton } from "vue-loading-skeleton";
import NoData from "../../../components/NoData";
import Button from "../../../components/Button";
export default {
  components: {
    Button,
    NoData,
    Skeleton,
  },
  props: {
    messageOrder: String,
    routeGet: String,
    route: String,
  },
  data() {
    return {
      elements: {},
      title: "",
      element: {
          tasa_seguro_depa : 0,
          tasa_seguro_casa : 0,
      },
      errors: {},
      loadingGet: false,
      requestSubmit: false,
      modalCreateUpdate: false,
      modalDestroy: false,
      editBlock: false,
      startBlock: true,
    };
  },
  methods: {
    restore() {
      this.elements = {};
      this.element = {
           tasa_seguro_depa : 0,
          tasa_seguro_casa : 0,
      }
      this.errors = {};
      this.startBlock = true;
      this.editBlock = false;
      this.getEls();
    },
    update() {
      this.requestSubmit = true;
      axios
        .put(this.routeGet, this.element)
        .then((response) => {
          this.requestSubmit = false;
          this.restore();
          Swal.fire({
            title: response.data.title,
            text: response.data.message,
            type: "success",
            confirmButtonText: "Ok",
            buttonsStyling: false,
            customClass: {
              confirmButton: "btn btn-inverse-primary",
            },
          });
        })
        .catch((error) => {
          this.requestSubmit = false;
          if (error.response.status === 422) {
            this.errorsText = error.response.data.errors || {};
            return;
          }
          this.restore();
          Swal.fire({
            title: error.response.data.title,
            text: error.response.data.message,
            type: "error",
            confirmButtonText: "Ok",
            buttonsStyling: false,
            customClass: {
              confirmButton: "btn btn-inverse-primary",
            },
          });
        });
    },
    editElText() {
      this.startBlock = false;
      this.editBlock = true;
    },
    getEls() {
      this.loadingGet = true;
      axios
        .get(this.routeGet)
        .then((response) => {
          this.elements = response.data;
          this.element.tasa_seguro_depa = response.data[0].value;
           this.element.tasa_seguro_casa = response.data[1].value;
          this.loadingGet = false;
        })
        .catch((error) => {});
    },
  },
  created() {
    this.getEls();
  },
};
</script>
