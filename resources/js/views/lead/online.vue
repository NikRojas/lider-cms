<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-4">
            <div class="col-6 col-md-7">
              <BreadCrumb
                title="Cita Online"
                parent="Leads"
                active="Cita Online"
              ></BreadCrumb>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid mt--6">
      <b-tabs
        pills
        vertical
        nav-wrapper-class="col-12 col-lg-3 col-xl-2 mb-4 mb-lg-0"
        nav-class="border bg-white py-2"
        content-class="col-12 col-lg-9 col-xl-10"
      >
        <b-tab
          title="Leads"
          active
          title-link-class="border-0 shadow-none bg-white py-3"
          title-item-class="pr-0 my-0"
        >
          <div class="row">
            <div class="col-12 mb-4 text-right">
              <button
                type="button"
                class="btn btn-icon btn-inverse-primary"
                @click="openModalExport"
                :disabled="elements.total == 0 ? true : false"
                :style="elements.total == 0 ? 'opacity: 0.50' : ''"
              >
                <span class="btn-inner--icon">
                  <jam-download class="current-color" />
                </span>
                <span class="btn-inner--text"
                  >Exportar {{ elements.total == 0 ? "(0 Leads)" : "" }}</span
                >
              </button>
            </div>
            <div class="col-12">
              <DataTable
                :object="elements"
                placeholder="Nombre, DNI, Teléfono"
                :button-update="false"
                :button-read="false"
                :button-delete="true"
                @get="getElements"
                @delete="deleteEl"
                :entries-prop.sync="elementsPerPage"
                :messageCantDelete="messageCantDelete"
              ></DataTable>
            </div>
          </div>
        </b-tab>
        <b-tab
          title="Emails Destino"
          title-link-class="border-0 shadow-none bg-white py-3"
          title-item-class="my-0"
          ><div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-header border-0 pb-0">
                  <h2 class="mb-0 text-uppercase text-primary">
                    Emails Destino
                  </h2>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-12 mb-4">
                      Los leads se enviarán automáticamente a los asesores
                      respectivos asignados en cada Proyecto, se designará 1
                      lead por orden de llegada a cada asesor.
                    </div>
                    <div class="col-12 py-3">
                      <IconContact></IconContact>
                    </div>
                  </div>
                </div>
              </div>
            </div></div
        ></b-tab>
        <b-tab
          title="Webhook"
          title-link-class="border-0 shadow-none bg-white py-3"
          title-item-class="my-0"
        >
          <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-header border-0 pb-0">
                  <h2 class="mb-0 text-uppercase text-primary">Webhook</h2>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-12 mb-2">
                      <div class="form-group">
                        <label class="font-weight-bold">Webhook:</label>
                        <div class="mb-0">
                          <p>
                            Al habilitar esta opción la información de los leads
                            de las citas onlines registradas en la
                            <b>Web</b> serán enviadas a la URL correspondiente
                            del Proyecto que usted defina. Además de los datos
                            del lead se enviarán los siguentes datos.
                          </p>
                          <b>Parámetros UTM</b>
                          <ul>
                            <li>UTM Source</li>
                            <li>UTM Medium</li>
                            <li>UTM Campaign</li>
                            <li>UTM Term</li>
                            <li>UTM Content</li>
                          </ul>
                        </div>
                      </div>
                      <div>
                        <h2 class="mb-2">Lista de Proyectos</h2>
                        <p>
                          Los proyectos que se muestran a continuación son
                          aquellos que cuentan con Cita Online, si desear
                          activar esta opción para otros proyectos asegúrese de
                          habilitar la opción <b>Formulario Cita Online</b> el
                          mantenimiento del proyecto correspondiente.
                        </p>
                        <template v-if="loadingGetWebhook">
                          <div class="row">
                            <div class="col-12">
                              <Skeleton height="200px" />
                            </div>
                            <div class="col-12">
                              <Skeleton height="200px" />
                            </div>
                          </div>
                        </template>
                        <template v-else
                          ><div
                            class="row"
                            v-for="(el, i) in projects"
                            :key="el.id"
                          >
                            <form class="w-100">
                              <div class="col-12">
                                <h2 class="text-primary">{{ el.name_es }}</h2>

                                <b-form-checkbox
                                  class="ml-0 mb-3"
                                  size="lg"
                                  v-model="configWebhook[i].webhook_url_active"
                                  name="check-button"
                                  switch
                                >
                                  Habilitar</b-form-checkbox
                                >
                                <div
                                  class="form-group"
                                  v-if="configWebhook[i].webhook_url_active"
                                >
                                  <label
                                    class="font-weight-bold"
                                    :for="'webhook_url' + i"
                                    >URL Destino</label
                                  >
                                  <input
                                    type="text"
                                    class="form-control"
                                    v-model="configWebhook[i].webhook_url"
                                    :id="'webhook_url' + i"
                                  />
                                  <label
                                    v-if="errors && errors.webhook_url && configSelected == el.id"
                                    class="mt-2 text-danger text-sm"
                                    :for="'webhook_url' + i"
                                    >{{ errors.webhook_url[0] }}</label
                                  >
                                </div>
                              </div>
                              <div class="col-12 text-right">
                                <Button
                                  :text="'Actualizar'"
                                  :classes="['btn-inverse-primary']"
                                  :request-server="requestSubmit"
                                  @click="updateWebhook(configWebhook[i])"
                                ></Button>
                              </div>
                            </form></div
                        ></template>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </b-tab>
      </b-tabs>
    </div>

    <destroy
      element="lead"
      @cancel="restoreEl"
      :open="modalDestroy"
      @submit="destroyConfirm"
      :loading-get="loadingGet"
      :loading-submit="requestSubmit"
    ></destroy>

    <b-modal
      v-model="modalExport"
      @close="restoreEl"
      no-close-on-esc
      no-close-on-backdrop
      centered
      size="md"
      footer-class="border-0 pt-0"
      body-class="pt-0"
    >
      <template slot="modal-title">
        <div class="text-primary h2">Exportar Leads</div>
      </template>
      <template slot="modal-header-close">
        <button type="button" class="btn p-0 bg-transparent" @click="restoreEl">
          <jam-close></jam-close>
        </button>
      </template>
      <div class="row">
        <div class="col-12">
          <div class="form-group">
            <label class="font-weight-bold" for="from">Desde</label>
            <date-picker
              :input-attr="{ id: 'from' }"
              value-type="format"
              v-model="element_form.from"
              format="HH:mm DD-MM-YYYY"
              type="datetime"
              :time-picker-options="{
                start: '06:00',
                step: '00:05',
                end: '24:00',
              }"
              :first-day-of-week="1"
              lang="es"
              input-class="form-control"
              width="100%"
            >
              <jam-calendar></jam-calendar>
            </date-picker>
            <label
              v-if="errors_form && errors_form.from"
              class="mt-2 text-danger text-sm"
              for="from"
              >{{ errors_form.from[0] }}</label
            >
          </div>
        </div>

        <div class="col-12">
          <div class="form-group">
            <label class="font-weight-bold" for="to">Hasta</label>
            <date-picker
              :input-attr="{ id: 'to' }"
              value-type="format"
              v-model="element_form.to"
              format="HH:mm DD-MM-YYYY"
              type="datetime"
              :time-picker-options="{
                start: '06:00',
                step: '00:05',
                end: '24:00',
              }"
              :first-day-of-week="1"
              lang="es"
              input-class="form-control"
              width="100%"
            >
              <jam-calendar></jam-calendar>
            </date-picker>
            <label
              v-if="errors_form && errors_form.to"
              class="mt-2 text-danger text-sm"
              for="to"
              >{{ errors_form.to[0] }}</label
            >
          </div>
        </div>
      </div>
      <template v-slot:modal-footer="{ ok }">
        <button
          type="button"
          class="btn btn-inverse-primary"
          @click="allExportFunction"
          :disabled="request_todo"
        >
          <span v-if="request_todo">
            Cargando
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 40 40"
              class="ml-1 loading-svg"
            >
              <g fill="none" fill-rule="evenodd">
                <g transform="translate(1 1)" stroke-width="3">
                  <circle stroke-opacity="1" cx="0" cy="0" r="0" />
                  <path
                    d="M36 18c0-9.94-8.06-18-18-18"
                    transform="rotate(83.9974 18 18)"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="0 18 18"
                      to="360 18 18"
                      dur="1s"
                      repeatCount="indefinite"
                    />
                  </path>
                </g>
              </g>
            </svg>
          </span>
          <span v-else>Todo</span>
        </button>

        <button
          type="button"
          class="btn btn-inverse-info"
          @click="filterExportFunction"
          :disabled="request_filter"
        >
          <span v-if="request_filter">
            Cargando
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 40 40"
              class="ml-1 loading-svg"
            >
              <g fill="none" fill-rule="evenodd">
                <g transform="translate(1 1)" stroke-width="3">
                  <circle stroke-opacity="1" cx="0" cy="0" r="0" />
                  <path
                    d="M36 18c0-9.94-8.06-18-18-18"
                    transform="rotate(83.9974 18 18)"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="0 18 18"
                      to="360 18 18"
                      dur="1s"
                      repeatCount="indefinite"
                    />
                  </path>
                </g>
              </g>
            </svg>
          </span>
          <span v-else>Con Filtros</span>
        </button>

        <button type="button" class="btn btn-inverse-light" @click="restoreEl">
          Cerrar
        </button>
      </template>
    </b-modal>
  </div>
</template>
<style>
.nav-pills .nav-link.active {
  border-left: 4px solid #1762e6 !important;
  background-color: #fdfbfa !important;
}
</style>
<script>
import IconContact from "../../components/icons/Contact";
import { Skeleton } from "vue-loading-skeleton";
import BreadCrumb from "../../components/BreadCrumb";
import DataTable from "../../components/DataTable";
import Button from "../../components/Button";
import InputSlug from "../../components/form/InputSlug";
import SkeletonForm from "../../components/skeleton/form";
import Destroy from "../../components/modals/Destroy";
import InputArray from "../../components/form/InputArray";
import DatePicker from "vue2-datepicker";
export default {
  components: {
    DataTable,
    Button,
    BreadCrumb,
    Skeleton,
    InputSlug,
    SkeletonForm,
    InputArray,
    Destroy,
    IconContact,
    DatePicker,
  },
  props: {
    projects: Array,
    routeGetAll: String,
    route: String,
    messageCantDelete: String,
    config: Array,
    routeUpdate: String,
    getEmailDestination: String,
    allExport: String,
    filterExport: String,
  },
  data() {
    return {
      configWebhook: [],

      configSelected: '',
      /*configWebhook: {
        webhook_url: "",
        webhook_url_active: false,
      },*/
      /*configWebhook: [ {
        webhook_url: "",
        webhook_url_active: false,
      }],*/

      request_todo: false,
      request_filter: false,
      errors_form: {},
      modalExport: false,
      element_form: {},

      elements: {},
      element: {},
      loadingGet: false,
      title: "",
      elementsPerPage: 10,
      errors: {},
      modalDestroy: false,
      requestSubmit: false,
      loadingEmails: false,
      information: {
        email_destination: [],
        email_destination_leads_videocall_formatted: [""],
      },
      requestServer: false,
      editEmailBlock: false,
      loadingGetWebhook: false,
    };
  },
  methods: {
    getContactEmailDestination() {
      this.loadingEmails = true;
      axios
        .get(this.getEmailDestination)
        .then((response) => {
          if (response.data.id) {
            this.information = response.data;
          }
          this.loadingEmails = false;
        })
        .catch((error) => {});
    },
    editEmailDestination() {
      this.editEmailBlock = true;
    },
    openModalExport() {
      this.modalExport = true;
    },
    allExportFunction() {
      this.request_todo = true;
      axios
        .get(this.allExport, {
          headers: {
            "Content-Disposition": "attachment; filename=template.xlsx", //no es tan necesario, lo quité y siguio funcionando
            "Content-Type":
              "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", //no es tan necesario, lo quité y siguio funcionando
          },
          responseType: "arraybuffer", //necesaario
        })
        .then((response) => {
          const downloadUrl = window.URL.createObjectURL(
            new Blob([response.data])
          );
          const link = document.createElement("a");
          link.href = downloadUrl;
          link.setAttribute("download", "Líder Leads Cita Online.xlsx");
          document.body.appendChild(link);
          link.click();
          link.remove();
          this.request_todo = false;
        })
        .catch((error) => {
          this.request_todo = false;
          if (error.response.status === 422) {
            this.errors_form = error.response.data.errors || {};
            return;
          }
        });
    },
    filterExportFunction() {
      this.request_filter = true;
      const fd = new FormData();
      if (this.element_form.from) {
        fd.append("from", this.element_form.from);
      }
      if (this.element_form.to) {
        fd.append("to", this.element_form.to);
      }
      axios
        .post(this.filterExport, fd, {
          headers: {
            "Content-Disposition": "attachment; filename=template.xlsx", //no es tan necesario, lo quité y siguio funcionando
            "Content-Type":
              "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", //no es tan necesario, lo quité y siguio funcionando
          },
          responseType: "arraybuffer", //necesaario
        })
        .then((response) => {
          const downloadUrl = window.URL.createObjectURL(
            new Blob([response.data])
          );
          const link = document.createElement("a");
          link.href = downloadUrl;
          link.setAttribute("download", "Líder Leads Cita Online.xlsx");
          document.body.appendChild(link);
          link.click();
          link.remove();
          this.request_filter = false;
        })
        .catch((error) => {
          this.request_filter = false;
          if (error.response.status === 422) {
            this.errors_form = {
              from: [],
              to: [],
            };
            if (
              this.element_form.from == "" ||
              this.element_form.from == null
            ) {
              this.errors_form.from = ["El campo desde es requerido"];
            }

            if (this.element_form.to == "" || this.element_form.to == null) {
              this.errors_form.to = ["El campo hasta es requerido"];
            }
            console.log(this.errors_form);
            return;
          }
        });
    },

    restoreEmail() {
      this.requestServer = this.editEmailBlock = false;
      this.errors = {};
      this.information = {
        email_destination: [],
        email_destination_leads_videocall_formatted: [""],
      };
      this.getContactEmailDestination();
    },
    updateEmail() {
      this.requestServer = true;
      axios
        .put(this.routeUpdate, this.information)
        .then((response) => {
          this.requestServer = false;
          this.restoreEmail();
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
          this.requestServer = false;
          if (error.response.status === 422) {
            this.errors = error.response.data.errors || {};
            return;
          }
          this.restorePage();
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
        });
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
    restore() {
      this.errors = {};
      this.element = {};
      this.modalDestroy = false;
      this.getElements(1, this.elementsPerPage);
    },
    restoreEl() {
      this.errors = {};
      this.element = {};
      this.modalDestroy = false;
      this.modalExport = false;
      this.element_form = {};
      this.errors_form = {};
    },
    deleteEl(id) {
      this.modalDestroy = true;
      this.getEl(id);
    },
    getElements(page, itemsPerPage, q = null) {
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
    restoreWebhook() {
      this.errors = {};
      this.requestSubmit = false;
      this.loadingGetWebhook = true;
      this.configSelected = '';
      axios
        .get("/leads/cita-online/webhook")
        .then((response) => {
          this.configWebhook = response.data;
          this.loadingGetWebhook = false;
        })
        .catch((error) => {});
    },
    updateWebhook(el) {
      this.requestSubmit = true;
      this.configSelected = el.project_id;
      axios
        .put("/leads/cita-online/webhook", el)
        .then((response) => {
          this.requestSubmit = false;
          this.restoreWebhook();
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
          this.requestSubmit = false;
          if (error.response.status === 422) {
            this.errors = error.response.data.errors || {};
            return;
          }
          this.errors = {};
          //this.restorePage();
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
        });
    },
  },
  created() {
    this.getElements(1, this.elementsPerPage);
    this.getContactEmailDestination();
  },
  watch: {
    config: {
      immediate: true,
      handler: function (newValue) {
        if (newValue) {
          this.configWebhook = newValue;
        }
      },
    },
  },
};
</script>