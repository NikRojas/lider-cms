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
                    <div class="row p-md-3">
                      <div class="col-10 d-flex align-items-center">
                        <div class="row w-100">
                          <div class="col-6">
                            <img
                              height="50"
                              class="d-block d-md-inline"
                              :src="imagesUrl + '/projects/tipologies/'+el.tipology_rel.image"
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
                                  Tipología:
                                  <span class="font-weight-bold">{{ el.tipology_rel.name}}</span>
                                </h3>DETALLES ADICIONALES
                              </div>
                            </div>
                          </div>
                          <div
                            class="col-6 d-flex align-items-center justify-content-center"
                          >{{el.project_rel.price_format}} x 1 --- Desc</div>
                        </div>
                      </div>
                      <div
                        class="col-2 d-flex align-items-center justify-content-center"
                      >{{ element.total_format}}</div>
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
                  <h4 class="mb-4 text-dark" style="opacity: .6">15 de Diciembre</h4>
                  <div>
                    <a-timeline>
                      <a-timeline-item color="#1762e6">
                        <div class="px-2">
                          <div class="row">
                            <div
                              class="col-12 mb-2"
                            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat porro excepturi nisi cupiditate provident nobis necessitatibus maiores voluptatibus, assumenda velit qui veniam consequatur cum quisquam eum exercitationem libero, aut ex.</div>
                            <div class="col-12 text-dark" style="opacity: .6">13:08 p.m</div>
                          </div>
                        </div>
                      </a-timeline-item>
                      <a-timeline-item color="#1762e6">step3 2015-09-01</a-timeline-item>
                      <a-timeline-item color="#1762e6">step4 2015-09-01</a-timeline-item>
                    </a-timeline>
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

              <div class="row mb-2">
                <div class="col-6">Subtotal</div>
                <div class="col-6 text-right">{{ element.total_format}}----</div>
              </div>
              <div class="row mb-2">
                <div class="col-6">Descuento</div>
                <div class="col-6 text-right">{{ element.total_format}}---</div>
              </div>
              <hr class="mt-2 mb-3" />
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
  </div>
</template>
<script>
import "ant-design-vue/lib/timeline/style/css";
import NoData from "../../components/NoData";
import BreadCrumb from "../../components/BreadCrumb";
export default {
  components: {
    BreadCrumb,
    NoData,
  },
  props: {
    routeCustomer: String,
    imagesUrl: String,
    elementParent: Object,
    routeProject: String,
    routeReturn: String,
  },
  data() {
    return {
      element: {
        /*orders_rel: {
          order_details_rel: {
            project_rel: {
              images_format: [],
            },
          },
        },*/
      },
    };
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