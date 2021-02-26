<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-4">
            <div class="col-6 col-md-7">
              <BreadCrumb title="Venta de Terreno" parent="Leads" active="Venta de Terreno"></BreadCrumb>
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
                <span class="btn-inner--text">Exportar {{ elements.total == 0 ? '(0 Leads)' : '' }}</span>
              </button>
            </div>
            <div class="col-12">
              <DataTable
                :object="elements"
                placeholder="Nombre, Móvil"
                :button-update="false"
                :button-read="true"
                :button-delete="true"
                @get="getElements"
                @delete="deleteEl"
                @read="showLead"
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
        >
          <div class="col-12">
            <div class="row">
              <div class="col-12">
                <div class="card">
                  <div class="card-header border-0">
                    <h2 class="mb-0 text-uppercase text-primary">Emails Destino</h2>
                  </div>
                  <div class="card-body">
                    <form @submit.prevent="updateEmail">
                      <div class="row">
                        <div class="col-12">
                          <div class="form-group">
                            <label class="font-weight-bold">Emails</label>
                            <div v-show="editEmailBlock">
                              <InputArray
                                :arreglo.sync="information.email_destination"
                                :arreglo-editar="information.email_destination_leads_saleland_formatted"
                              ></InputArray>
                              <label
                                for="id_email_destination_leads_saleland"
                                v-if="errors && Object.keys(errors).length"
                                class="mt-2 mb-0 text-danger text-sm"
                              >Los campos correo(s) electrónico(s) destino deben ser una dirección de correo válida.</label>
                            </div>
                            <div v-if="!editEmailBlock">
                              <div v-if="loadingEmails">
                                  <Skeleton height="100px"></Skeleton>
                                </div>
                                <div v-else>
                                  <div
                                    v-if="information.email_destination && information.email_destination.length > 0"
                                  >
                                    <p
                                      class="d-block mb-1"
                                      v-for="(element,index) in information.email_destination_leads_saleland_formatted"
                                      :key="index"
                                    >{{ element }}</p>
                                  </div>
                                  <p v-else>No registrado</p>
                                </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="text-right"  v-if="!loadingEmails">
                        <button
                          type="button"
                          class="btn btn-sm btn-inverse-primary"
                          v-if="!editEmailBlock"
                          @click.prevent="editEmailDestination"
                        >Editar</button>

                        <Button
                          v-if="editEmailBlock"
                          :text="'Actualizar'"
                          :classes="['btn-inverse-primary','mr-2']"
                          :request-server="requestServer"
                          º
                        ></Button>
                        <button
                          v-if="editEmailBlock"
                          type="button"
                          class="btn btn-secondary"
                          @click.prevent="restoreEmail"
                        >Cancelar</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </b-tab>
      </b-tabs>
    </div>

    <b-modal
      v-model="modalView"
      @close="restoreEl"
      no-close-on-esc
      no-close-on-backdrop
      centered
      footer-class="border-0 pt-0"
      body-class="pt-0"
    >
      <template slot="modal-title">
        <div class="text-primary h2">Lead</div>
      </template>
      <template slot="modal-header-close">
        <button type="button" class="btn p-0 bg-transparent" @click="restoreEl">
          <jam-close></jam-close>
        </button>
      </template>
      <div v-if="loadingGet">
        <SkeletonForm></SkeletonForm>
      </div>
      <div v-else>
        <div class="row">
          <div class="col-12 col-md-6">
            <div class="form-group">
              <label class="font-weight-bold" for="name">Nombre:</label>

              <p>{{ element.name }}</p>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="form-group">
              <label class="font-weight-bold" for="name">Teléfono:</label>

              <p>{{ element.mobile }}</p>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="form-group">
              <label class="font-weight-bold" for="name">Correo:</label>

              <p>{{ element.email }}</p>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="form-group">
              <label class="font-weight-bold" for="name">Área:</label>

              <p>{{ element.area }}</p>
            </div>
          </div>
          <div class="col-12 col-md-12">
            <div class="form-group">
              <label class="font-weight-bold" for="name">Mensaje:</label>
              <p>{{ element.message }}</p>
            </div>
          </div>
        </div>
      </div>
      <template v-slot:modal-footer="{ ok }">
        <button type="button" class="btn btn-primary" @click="restoreEl">Cerrar</button>
      </template>
    </b-modal>

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
    Skeleton,
    BreadCrumb,
    InputSlug,
    SkeletonForm,
    InputArray,
    Destroy,

    DatePicker,
  },
  props: {
    routeGetAll: String,
    route: String,
    messageCantDelete: String,

    routeUpdate: String,
    getEmailDestination: String,

    allExport: String,
    filterExport: String,
  },
  data() {
    return {
      request_todo: false,
      request_filter: false,
      errors_form: {},
      modalExport: false,
      element_form: {},


      elements: {},
      element: {},
      modalView: false,
      loadingGet: false,
      title: "",
      elementsPerPage: 10,
      errors: {},
      modalDestroy: false,
      requestSubmit: false,
      loadingEmails: false,
      information: {
        email_destination: [],
        email_destination_leads_saleland_formatted: [""],
      },
      requestServer: false,
      editEmailBlock: false,
    };
  },
  methods: {
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
          link.setAttribute("download", "Líder Leads Venta de Terreno.xlsx");
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
          link.setAttribute("download", "Líder Leads Venta de Terreno.xlsx");
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

    restoreEmail() {
      this.requestServer = this.editEmailBlock = false;
      this.errors = {};
      this.information = {
        email_destination: [],
        email_destination_leads_saleland_formatted: [""],
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
      this.modalDestroy = this.modalView = false;
      this.getElements(1, this.elementsPerPage);
    },
    deleteEl(id) {
      this.modalDestroy = true;
      this.getEl(id);
    },
    restoreEl() {
      this.errors = {};
      this.element = {};
      this.modalDestroy = this.modalView = false;
      this.modalExport = false;
      this.element_form = {};
      this.errors_form = {};
    },
    showLead(id) {
      this.modalView = true;
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
  },
  created() {
    this.getElements(1, this.elementsPerPage);
    this.getContactEmailDestination();
  },
};
</script>