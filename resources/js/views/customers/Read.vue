<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-4">
            <div class="col-12 col-lg-7">
              <BreadCrumb
                :title="'Cliente ' + element.name + ' ' +  element.lastname"
                parent
                active="Clientes"
              ></BreadCrumb>
            </div>
            <div class="col-6 col-md text-right">
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
          <div class="card mb-4">
            <div class="card-body">
              <div class="media align-items-center">
                <span
                  class="avatar avatar-lg rounded-circle bg-primary"
                  style="font-size: 26px !important;"
                >{{element.avatar_initials}}</span>
                <div class="media-body ml-3">
                  <span class="mb-0 h2 font-weight-semibold">{{ element.name}} {{ element.lastname}}</span>
                  <div>Registrado el {{ element.created_at_format }}</div>
                </div>
              </div>
              <div class="mt-4">
                <div class="row mb-3">
                  <div class="col-auto">
                    <jam-id-card
                      style="margin-top: -4px"
                      height="20px"
                      width="20px"
                      class="current-color mr-1 text-primary"
                    ></jam-id-card>
                  </div>
                  <div class="col pl-0">
                    <span class="h3 font-weight-normal">DNI</span>
                    <h3>{{ element.document_number}}</h3>
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-auto">
                    <jam-phone
                      style="margin-top: -4px"
                      height="20px"
                      width="20px"
                      class="current-color mr-1 text-primary"
                    ></jam-phone>
                  </div>
                  <div class="col pl-0">
                    <span class="h3 font-weight-normal">Móvil</span>
                    <h3>{{ element.mobile ? element.mobile_formatted : 'No Registrado'}}</h3>
                  </div>
                </div>
                <div class="row">
                  <div class="col-auto">
                    <jam-envelope
                      style="margin-top: -4px"
                      height="20px"
                      width="20px"
                      class="current-color mr-1 text-primary"
                    ></jam-envelope>
                  </div>
                  <div class="col pl-0">
                    <span class="h3 font-weight-normal">Email</span>
                    <h3>{{ element.email ? element.email : 'No Registrado'}}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h2 class>Reservas</h2>
              <div v-if="element.orders_rel && element.orders_rel.length">
                <div class="p-3" v-for="(el,i) in element.orders_rel" :key="el.id">
                  <div class="row mb-3">
                    <div class="col-12 col-lg-6">
                      <a style="text-decoration:underline;" href>Reserva #{{el.id}}</a>
                      <div class="mt-4">
                        <h3 class="font-weight-normal">S/ {{el.total_format}}</h3>
                      </div>
                    </div>
                    <div class="col-12 col-lg-6 text-right">{{ el.order_date_format }}</div>
                  </div>
                  <div class="row">
                    <div class="col-6 mb-4" v-for="el2 in el.order_details_rel" :key="el2.id">
                      <div class="card">
                        <div class="card-body d-flex">
                          <div class="d-inline-flex align-items-center">
                            <img
                              :src="imagesUrl+'/projects/'+el2.project_rel.images_format[0]"
                              height="75"
                              width="auto"
                              alt
                            />
                            <a
                              :href="routeProject+'/'+el2.project_rel.slug_es"
                              style="text-decoration:underline;"
                              class="ml-2"
                            >Proyecto {{el2.project_rel.name_es}}</a>
                          </div>
                          <div class="ml-3 d-inline-flex align-items-center">
                            <img
                              :src="imagesUrl+'/projects/tipologies/'+el2.tipology_rel.image"
                              height="35"
                              width="auto"
                              alt
                            />
                            <p class="ml-2 mb-0 d-inline">Tipología {{el2.tipology_rel.name}}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <NoData
                v-else
                custom-text="El cliente no ha realizado ninguna reserva"
                :show-title="false"
              />
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card">
            <div class="card-body">
              <h2>Información de Contacto</h2>

              <div class="mb-1">
                <a
                  class="h3 font-weight-normal"
                  style="text-decoration:underline;"
                  :href="'mailto:'+element.email"
                >{{ element.email}}</a>
              </div>
              <div class="mb-2">
                <a
                  class="h3 font-weight-normal"
                  style="text-decoration:underline;"
                  :href="'tel:+51'+element.mobile"
                >{{ element.mobile_formatted}}</a>
              </div>

              <Contact />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NoData from "../../components/NoData";
import BreadCrumb from "../../components/BreadCrumb";
import Contact from "../../components/icons/Contact";
export default {
  components: {
    BreadCrumb,
    NoData,
    Contact,
  },
  props: {
    imagesUrl: String,
    elementParent: Object,
    routeProject: String,
    routeReturn: String,
  },
  data() {
    return {
      element: {
        orders_rel: {
          order_details_rel: {
            project_rel: {
              images_format: [],
            },
          },
        },
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