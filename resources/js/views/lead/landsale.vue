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
      <div class="row">
        <div class="col-12 col-lg-8">
          <DataTable
            :object="elements"
            placeholder="Nombre , Telefono"
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
        <div class="col-12 col-lg-4">
          <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-header border-0">
                  <h2 class="mb-0 text-uppercase text-primary">Correos Destino</h2>
                </div>
                <div class="card-body">
                  <form @submit.prevent="updateEmail">
                    <div class="row">
                      <div class="col-12">
                        <div class="form-group">
                          <label class="font-weight-bold">Correos</label>
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
      </div>
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
  </div>
</template>
<script>
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
    Skeleton,
    BreadCrumb,
    InputSlug,
    SkeletonForm,
    InputArray,
    Destroy,
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