<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-4">
            <div class="col-12 col-lg-7">
              <BreadCrumb
                :title="'Cotizaciones Proyecto ' + project.name_es"
                parent
                active="Proyectos"
              ></BreadCrumb>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-6 col-md-5">
              <a
                :href="routeReturn"
                class="btn btn-icon btn-sm btn-inverse-light"
              >
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
                placeholder="Nombre, DNI"
                :button-update="false"
                :button-read="true"
                :button-delete="true"
                :button-disable="false"
                @get="getEls"
                @read="showEl"
                @delete="deleteEl"
                :entries-prop.sync="elementsPerPage"
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
                      asignados al Proyecto <b>{{ project.name_es }}</b
                      >, se designará 1 lead por orden de llegada a cada asesor.
                    </div>
                    <div class="col-12 py-3">
                      <IconContact></IconContact>
                    </div>
                  </div>
                </div>
              </div>
            </div></div
        ></b-tab>
      </b-tabs>
    </div>
    <destroy
      element="Lead"
      @cancel="restoreEl"
      :open="modalDestroy"
      @submit="destroyConfirm"
      :loading-get="loadingGet"
      :loading-submit="requestSubmit"
    ></destroy>

    <b-modal
      v-model="modalShow"
      @close="restoreEl"
      no-close-on-esc
      no-close-on-backdrop
      centered
      size="lg"
      footer-class="border-0 pt-0"
      body-class="pt-0"
    >
      <template slot="modal-title">
        <div class="text-primary h2">Detalle Cotización</div>
      </template>
      <template slot="modal-header-close">
        <button type="button" class="btn p-0 bg-transparent" @click="restoreEl">
          <jam-close></jam-close>
        </button>
      </template>
      <div v-if="loadingGet">
        <div class="w-25 mb-1">
          <Skeleton />
        </div>
        <div class="w-75">
          <Skeleton />
        </div>
        <div class="w-25 mb-1">
          <Skeleton />
        </div>
        <div class="w-75">
          <Skeleton />
        </div>
        <div class="w-25 mb-1">
          <Skeleton />
        </div>
        <div class="w-75">
          <Skeleton />
        </div>
      </div>
      <div v-else>
        <div class="row">
          <div class="col-lg-6">
            <div class="form-group">
              <label class="font-weight-bold">Nombre:</label>
              <p>{{ element.fullname }}</p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group">
              <label class="font-weight-bold">DNI:</label>
              <p>{{ element.document_number }}</p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group">
              <label class="font-weight-bold">Email:</label>
              <p>{{ element.email }}</p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group">
              <label class="font-weight-bold">Móvil:</label>
              <p>{{ element.mobile_formatted }}</p>
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <label class="font-weight-bold d-block">Asesor:</label>
              <div class="" v-if="element.advisor_rel">
                <!--<p class="mb-0">{{ }}</p>
                <img width="150" height="auto" :src="imagesUrl+'/projects/'+element.project_rel.images_format[0]" alt="">-->
                <div class="media align-items-center">
                  <span
                    v-if="element.advisor_rel.avatar"
                    class="avatar avatar-sm mr-3 rounded-circle bg-primary"
                    ><img
                      :src="
                        imagesUrl + '/advisors/' + element.advisor_rel.avatar
                      " /></span
                  >{{ element.advisor_rel.name }}
                </div>
              </div>
              <div v-else>
                <p>Asesor no asignado aún.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group">
              <label class="font-weight-bold d-block">Proyecto:</label>
              <div class="" v-if="element.project_rel">
                <p class="mb-0">{{ element.project_rel.name_es }}</p>
                <img
                  width="150"
                  height="auto"
                  v-if="element.project_rel.images_format"
                  :src="
                    imagesUrl +
                    '/projects/' +
                    element.project_rel.images_format[0]
                  "
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group">
              <label class="font-weight-bold d-block">Tipología:</label>
              <div class="">
                <p class="mb-0">
                  {{ element.project_type_department_rel.name }}
                </p>
                <img
                  width="150"
                  height="auto"
                  :src="
                    imagesUrl +
                    '/projects/tipologies/' +
                    element.project_type_department_rel.image
                  "
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <label class="font-weight-bold">Mensaje:</label>
              <p v-if="element.message">{{ element.message }}</p>
              <p v-else>No hay mensaje registrado</p>
            </div>
          </div>

          <div class="col-12">
            <div class="form-group mb-0">
              <label class="font-weight-bold">Parámetros UTM:</label>
            </div>
          </div>
          <div class="col-6">
            <div class="form-group">
              <label class="font-weight-bold">UTM Source:</label>
              <p v-if="element.utm_source">{{ element.utm_source }}</p>
              <p v-else>No registrado</p>
            </div>
          </div>
          <div class="col-6">
            <div class="form-group">
              <label class="font-weight-bold">UTM Medium:</label>
              <p v-if="element.utm_medium">{{ element.utm_medium }}</p>
              <p v-else>No registrado</p>
            </div>
          </div>
          <div class="col-6">
            <div class="form-group">
              <label class="font-weight-bold">UTM Campaign:</label>
              <p v-if="element.utm_campaign">{{ element.utm_campaign }}</p>
              <p v-else>No registrado</p>
            </div>
          </div>
          <div class="col-6">
            <div class="form-group">
              <label class="font-weight-bold">UTM Term:</label>
              <p v-if="element.utm_term">{{ element.utm_term }}</p>
              <p v-else>No registrado</p>
            </div>
          </div>
          <div class="col-6">
            <div class="form-group">
              <label class="font-weight-bold">UTM Content:</label>
              <p v-if="element.utm_content">{{ element.utm_content }}</p>
              <p v-else>No registrado</p>
            </div>
          </div>
        </div>
      </div>
      <template v-slot:modal-footer="{ ok }">
        <button
          type="button"
          class="btn btn-inverse-primary"
          @click="restoreEl"
        >
          Ok
        </button>
      </template>
    </b-modal>

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
import IconContact from "../../../components/icons/Contact";
import DataTable from "../../../components/DataTable";
import BreadCrumb from "../../../components/BreadCrumb";
import Destroy from "../../../components/modals/Destroy";
import { Skeleton } from "vue-loading-skeleton";
import DatePicker from "vue2-datepicker";
export default {
  props: {
    elementParent: Object,
    imagesUrl: String,
    routeReturn: String,
    routeGetAll: String,
    route: String,

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

      project: {},
      elements: {},
      element: {
        project_rel: {},
        advisor_rel: {},
        project_type_department_rel: {},
      },
      elementsPerPage: 10,
      modalShow: false,
      modalDestroy: false,
      loadingGet: false,
      requestSubmit: false,
    };
  },
  components: {
    IconContact,
    Skeleton,
    BreadCrumb,
    DataTable,
    Destroy,
    DatePicker,
  },
  watch: {
    elementParent: {
      immediate: true,
      handler: function (newValue) {
        this.project = newValue;
      },
    },
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
          link.setAttribute(
            "download",
            "Líder Cotizaciones Proyecto " + this.project.name_es + ".xlsx"
          );
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
          link.setAttribute(
            "download",
            "Líder Cotizaciones Proyecto " + this.project.name_es + ".xlsx"
          );
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

    destroyConfirm() {
      this.requestSubmit = true;
      axios
        .delete("/proyectos/cotizaciones/" + this.element.id)
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
    restoreEl() {
      (this.element = { project_type_department_rel: {} }),
        (this.modalDestroy = this.modalShow = false);
      this.modalExport = false;
      this.element_form = {};
      this.errors_form = {};
    },
    showEl(id) {
      this.modalShow = true;
      this.getEl(id);
    },
    deleteEl(id) {
      this.modalDestroy = true;
      this.getEl(id);
    },
    getEls(page, itemsPerPage, q = null) {
      let url =
        this.routeGetAll + "?page=" + page + "&itemsPerPage=" + itemsPerPage;
      if (q) {
        url = url + "&q=" + q;
      }
      axios
        .get(url, {
          params: {
            project_id: this.project.id,
          },
        })
        .then((response) => {
          this.elements = response.data;
        })
        .catch((error) => {});
    },
    restore() {
      this.elements = {};
      this.element = { project_type_department_rel: {} };
      this.modalDestroy = this.modalShow = false;
      this.getEls(1, this.elementsPerPage);
    },
    getEl(id) {
      this.loadingGet = true;
      axios
        .get("json/get/" + id)
        .then((response) => {
          this.element = response.data;
          this.loadingGet = false;
        })
        .catch((error) => {});
    },
  },
  created() {
    this.getEls(1, this.elementsPerPage);
  },
};
</script>