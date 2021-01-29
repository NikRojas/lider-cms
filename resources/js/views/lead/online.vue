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
      <b-tabs pills vertical  nav-wrapper-class="col-12 col-lg-3 col-xl-2 mb-4 mb-lg-0" nav-class="border bg-white py-2" content-class="col-12 col-lg-9 col-xl-10">
        <b-tab title="Leads" active title-link-class="border-0 shadow-none bg-white py-3" title-item-class="pr-0 my-0">
          <div class="row">
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
        <b-tab title="Emails Destino" title-link-class="border-0 shadow-none bg-white py-3" title-item-class="my-0"
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
      </b-tabs>
      <!--<div class="row">
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
        <div class="col-12 col-lg-4">
          <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-header border-0 pb-0">
                  <h2 class="mb-0 text-uppercase text-primary">Emails Destino</h2>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-12 mb-4">
                      Los leads se enviarán automáticamente a los asesores respectivos asignados en cada Proyecto, se designará de 1 lead por asesor.
                    </div>
                    <div class="col-12 py-3">
                      <IconContact></IconContact>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>-->
    </div>

    <destroy
      element="lead"
      @cancel="restoreEl"
      :open="modalDestroy"
      @submit="destroyConfirm"
      :loading-get="loadingGet"
      :loading-submit="requestSubmit"
    ></destroy>
  </div>
</template>
<style>
.nav-pills .nav-link.active{
  border-left: 4px solid #1762e6 !important;
  background-color: #FDFBFA  !important;
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
  },
  props: {
    routeGetAll: String,
    route: String,
    messageCantDelete: String,

    routeUpdate: String,
    getEmailDestination: String,
  },
  data() {
    return {
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
  },
  created() {
    this.getElements(1, this.elementsPerPage);
    this.getContactEmailDestination();
  },
};
</script>