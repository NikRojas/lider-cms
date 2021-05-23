<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-4">
            <div class="col-12 col-lg-7">
              <BreadCrumb
                :title="'Reserva #' + element.id"
                parent="Ventas y Estadísticas"
                active="Ventas"
              ></BreadCrumb>
              <h3
                class="font-weight-normal mb-1"
                v-if="element.proforma_number"
              >Número de Proforma: {{ element.proforma_number}}</h3>
              <h3 class="font-weight-normal mb-1" v-else>No hay Número de Proforma</h3>
              Registrado el {{element.order_date_format}}
            </div>
            <div class="col-12 col-lg text-right">
              <a :href="routeReturn" class="btn btn-icon btn-sm btn-inverse-light">
                <span class="btn-inner--icon">
                  <jam-arrow-left class="current-color" />
                </span>
                <span class="btn-inner--text">Regresar</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid mt--6">
      <div class="row">
        <div class="col-lg-8">
          <div class="row mb-4">
            <div class="col-12">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-12 mb-2">
                      <h2 class>Detalle de Reserva</h2>
                    </div>
                  </div>
                  <div class="card mb-4" v-for="el in element.order_details_rel" :key="el.id">
                    <div class="row p-2 p-md-3">
                      <div class="col-10 d-flex align-items-center">
                        <div class="row w-100">
                          <div class="col-6">
                            <img
                              height="50"
                              class="ml-md-0 ml-3 d-block d-md-inline"
                              :src="imagesUrl + '/projects/estates/'+el.department_rel.image"
                              alt
                            />
                            <div class="ml-md-0 ml-3 mt-1">
                              <a
                                style="text-decoration: underline;"
                                :href="routeProject+'/'+el.project_rel.slug_es"
                                class="h3 text-primary"
                              >Projecto {{ el.project_rel.name_es}}</a>
                              <div class="mt-2">
                                <h3 class="font-weight-normal">
                                  Inmueble:
                                  <span class="font-weight-bold">{{ el.department_rel.description}}</span>
                                </h3>
                                <h3 class="font-weight-normal" v-if="el.department_rel.type_department_id">
                                  Tipología:
                                  <span class="font-weight-bold">{{ el.department_rel.tipology_rel.name}}</span>
                                </h3>
                                <h3 class="font-weight-normal">
                                  Vista:
                                  <span class="font-weight-bold">{{ el.department_rel.view_rel.name}}</span>
                                </h3>
                                <h3 class="font-weight-normal">
                                  Piso:
                                  <span class="font-weight-bold">{{ el.department_rel.floor}}</span>
                                </h3>
                                <h3 class="font-weight-normal">
                                  Área:
                                  <span class="font-weight-bold">{{ el.department_rel.area}}m2</span>
                                </h3>
                              </div>
                            </div>
                          </div>
                          <div
                            class="col-6 d-flex align-items-center justify-content-center"
                          >{{el.price_element_format}} <span v-if="el.discount_price"> - {{ el.discount_price_format }}</span></div>
                        </div>
                      </div>
                      <!--Cuando haya descuento, restar el precio del elemento menos precio de descuento -->
                      <div
                        class="col-2 d-flex align-items-center justify-content-center"
                      >{{ el.total_price_format}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <h2 class="mb-3">Historial de la Reserva</h2>

              <div class="card">
                <div class="card-body">
                  <div v-for="(el,i) in timelineParent" :key="i">
                    <h3 class="text-primary">{{i}}</h3>
                    <div v-for="(el2,j) in el" :key="j">
                      <h4 class="mb-4 text-dark" style="opacity: .6">{{j}}</h4>
                      <a-timeline>
                        <a-timeline-item color="#1762e6" v-for="(el3,k) in el2" :key="k">
                          <div class="px-2">
                            <div class="row">
                              <div
                                class="col-12 mb-2"
                              >
                              {{ el3.message}}
                              </div>
                              <div class="col-12 mb-2" v-if="el3.type != 'Reserve Created'">
                                <button class="btn btn-sm btn-outline-primary" @click.prevent="resend(el3)">Reenviar email</button>
                              </div>
                              <div class="col-12 text-dark" style="opacity: .6">{{el3.time_format}}</div>
                            </div>
                          </div>
                        </a-timeline-item>
                      </a-timeline>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card mb-4">
            <div class="card-body">
              <div class="mb-2">
                <h2 class="d-inline mr-1">Estado de Pago:</h2>
                <div class="d-inline-block" v-html="element.transaction_latest_rel.status_rel.name_format"></div>
              </div>
              <div class="row mb-4">
                <div class="col-12">Procesado el {{ element.transaction_latest_rel.transaction_date_format }}</div>
              </div>
            <!-- Ver que precios pongo aca si tengo que poner el precio de la transaccion como total y el subtotal y descuento segun los elementos de la orden -->
              <div class="row mb-2">
                <div class="col-6">Subtotal</div>
                <div class="col-6 text-right">{{ element.total_format}}----</div>
              </div>
              <div class="row mb-2">
                <div class="col-6">Descuento</div>
                <div class="col-6 text-right">{{ element.total_format}}---</div>
              </div>
              <hr class="mt-2 mb-3"/>
              <div class="row">
                <div class="col-6">Total</div>
                <div class="col-6 text-right">{{ element.total_format}}</div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <h2>Cliente</h2>
              <a
                :href="routeCustomer+'/'+element.customer_rel.slug"
                class="h3 text-primary"
                style="text-decoration:underline;"
              >{{element.customer_rel.name +' '+element.customer_rel.lastname}}</a>
              <h3 class="font-weight-normal">DNI {{element.customer_rel.document_number}}</h3>

              <div class="mb-1">
                <a
                  class="h3 font-weight-normal text-primary"
                  style="text-decoration:underline;"
                  :href="'mailto:'+element.customer_rel.email"
                >{{ element.customer_rel.email}}</a>
              </div>
              <div class="mb-2">
                <a
                  class="h3 font-weight-normal text-primary"
                  style="text-decoration:underline;"
                  :href="'tel:+51'+element.customer_rel.mobile"
                >{{ element.customer_rel.mobile_formatted}}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <b-modal
    v-model="modalResend"
    @close="restoreResend"
    no-close-on-esc
    no-close-on-backdrop
    centered
    footer-class="border-0 pt-0"
    body-class="pt-0"
  >
    <template slot="modal-title">
      <div class="text-primary h2">Reenviar Email</div>
    </template>
    <template slot="modal-header-close">
      <button type="button" class="btn p-0 bg-transparent" @click="restoreResend">
        <jam-close></jam-close>
      </button>
    </template>
    <div class="row">
      <div class="col-12">
        <p>Esta seguro que desea reenviar el correo?</p>
      </div>
    </div>
    <template v-slot:modal-footer="{ ok }">
      <Button
        :classes="['btn-primary']"
        text="Enviar"
        @click="resendConfirm"
        :request-server="requestSubmit"
      ></Button>
      <button type="button" class="btn btn-secondary" @click="restoreResend">Cancelar</button>
    </template>
  </b-modal>
  </div>
</template>
<script>
import "ant-design-vue/lib/timeline/style/css";
import NoData from "../../components/NoData";
import BreadCrumb from "../../components/BreadCrumb";
import Button from "../../components/Button";
export default {
  components: {
    BreadCrumb,
    NoData,
    Button
  },
  props: {
    routeCustomer: String,
    routeResend: String,
    timelineParent: Object,
    imagesUrl: String,
    elementParent: Object,
    routeProject: String,
    routeReturn: String,
  },
  data() {
    return {
      element: {
      },
      modalResend: false,
      resendElement: {},
      requestSubmit: false
    };
  },
  methods:{
    resendConfirm(){
      this.requestSubmit = true;
      axios
        .post(this.routeResend + '/resend/' + this.resendElement.data.order_id, this.resendElement)
        .then((response) => {
          this.requestServer = false;
          document.location.href = response.data.route;
        })
        .catch((error) => {
          this.requestServer = false;
          document.location.href = error.response.data.route;
        });
    },
    resend(value){
      this.resendElement = value;
      this.modalResend = true;
    },
    restoreResend(){
      this.resendElement = {};
      this.modalResend = false;
    }
  },
  watch: {
    elementParent: {
      immediate: true,
      handler: function (newValue) {
        this.element = newValue;
      },
    },
  },
};
</script>