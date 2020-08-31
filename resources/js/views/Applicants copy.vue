<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center py-4">
            <div class="col-12">
              <BreadCrumb title="Postulantes" active="Postulantes"></BreadCrumb>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid mt--6">
      <div class="row">
        <div class="col-12 col-lg-8">
          <DataTable
            placeholder="Nombre Completo, Puesto"
            :object.sync="applicants"
            :buttonRead="true"
            :buttonUpdate="false"
            :buttonDelete="true"
            @delete="deleteApplicant"
            @read="showApplicant"
            @get="getApplicants"
          />
        </div>

         <div class="col-12 col-lg-4">
          <!--
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
                              :arreglo.sync="information.email_destination_job"
                              :arreglo-editar="information.email_destination_job_formatted"
                            ></InputArray>
                            <label for="id_email_destination_job" v-if="errors && Object.keys(errors).length" class="mt-2 mb-0 text-danger text-sm">
                              Los campos correo(s) electrónico(s) destino deben ser una dirección de correo válida.
                            </label>
                          </div>
                          <div
                            v-if="!editEmailBlock"
                          >
                            <div v-if="information.email_destination_job && information.email_destination_job.length > 0">
                              <p
                                class="d-block mb-1"
                                v-for="(element,index) in information.email_destination_job_formatted"
                                :key="index"
                              >{{ element }}</p>
                            </div>
                            <p v-else>No registrado</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="text-right">
                      <button
                        type="button"
                        class="btn btn-primary"
                        v-if="!editEmailBlock"
                        @click.prevent="editEmailDestination"
                      >Editar</button>

                      <Button
                        v-if="editEmailBlock"
                        :text="'Actualizar'"
                        :classes="['btn-primary','mr-2']"
                        :request-server="requestServer"
                        º
                      ></Button>
                      <button
                        v-if="editEmailBlock"
                        type="button"
                        class="btn btn-danger"
                        @click.prevent="restoreEmail"
                      >Cancelar</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          -->
        </div>
      </div>
    </div>


    <b-modal centered size="lg" ref="modal-show">
      <template slot="modal-title">
        <h2 class="mb-0 mb-0 text-uppercase text-primary">Detalle Postulante</h2>
      </template>
      <div class="row">
        <div class="col-12">
          <div class="form-group">
            <label class="form-control-label d-block">Nombre Completo</label>
            <p v-if="applicant.full_name">{{ applicant.full_name }}</p>
          </div>
        </div>
        <div class="col-6">
          <div class="form-group">
            <label class="form-control-label d-block">Teléfono</label>
            <p v-if="applicant.phone">{{ applicant.phone }}</p>
          </div>
        </div>
        <div class="col-6">
          <div class="form-group">
            <label class="form-control-label d-block">Correo Electrónico</label>
            <p v-if="applicant.email">{{ applicant.email }}</p>
          </div>
        </div>
        <div class="col-6">
          <div class="form-group">
            <label class="form-control-label d-block">Puesto</label>
            <p v-if="applicant.job">{{ applicant.job }}</p>
            <p v-else>No registrado</p>
          </div>
        </div>
        <div class="col-6">
          <div class="form-group">
            <label class="form-control-label d-block">PDF</label>
            <div v-html="applicant.pdf_formatted"></div>
          </div>
        </div>

        <div class="col-6">
          <div class="form-group">
            <label class="form-control-label d-block">Registrado el</label>
            <p v-if="applicant.created_at">{{ applicant.created_at }}</p>
          </div>
        </div>
       
      </div>

      <template slot="modal-footer" slot-scope="{ ok, cancel }">
        <button type="button" class="btn btn-primary" @click="restoreEl">Cerrar</button>
      </template>
    </b-modal>

    <b-modal centered ref="modal-delete">
      <template slot="modal-title">
        <h2 class="mb-0 mb-0 text-uppercase text-primary">Eliminar Postulante</h2>
      </template>
      <p class="mb-0">Esta seguro que desea eliminar el postulante?</p>
      <template slot="modal-footer" slot-scope="{ ok, cancel }">
        <Button
          :classes="['btn-danger']"
          :text="'Eliminar'"
          @click="deleteApplicantConfirm"
          :request-server="requestServer"
        ></Button>
        <button type="button" class="btn btn-secondary" @click="restoreEl">Cancelar</button>
      </template>
    </b-modal>

  </div>
</template>
<script>
import Button from "../components/Button";
import DataTable from "../components/DataTable";
import BreadCrumb from "../components/BreadCrumb";
import InputArray from "../components/form/InputArray";
export default {
  components:{
    DataTable,
    BreadCrumb,
    Button,
    InputArray
  },
   data() {
    return {
      applicants: {},
      applicant:{},
      information: {
        email_destination_job: [],
        email_destination_job_formatted: [""]
      },
       editEmailBlock: false,
      requestServer: false,
      errors: {}
    };
  },
  methods:{
    restorePage(){
      this.applicant = this.applicants = {};
      this.requestServer = false;
      this.getApplicants(1,5);
      this.$refs["modal-show"].hide();
      this.$refs["modal-delete"].hide();
      this.errors = {};
    },
    restoreEl(){
      this.applicant = {};
      this.$refs["modal-show"].hide();
      this.$refs["modal-delete"].hide();
      this.errors = {};
    },
    deleteApplicant(id){
      this.getApplicant(id);
      this.$refs["modal-delete"].show();
    },
    showApplicant(id){
      this.$refs["modal-show"].show();
      this.getApplicant(id);
    },
    getApplicant(id) {
      axios
        .get("json/applicants/" + id)
        .then(response => {
          this.applicant = response.data;
        })
        .catch(error => {});
    },
    getApplicants(pagina, desde, buscar = null) {
      let url = "json/applicants?page=" + pagina + "&desde=" + desde;
      if (buscar) {
        url = url + "&buscar=" + buscar;
      }
      axios
        .get(url)
        .then(response => {
          this.applicants = response.data;
        })
        .catch(error => {});
    },
    deleteApplicantConfirm(){
      this.requestServer = true;
      axios
        .delete("applicants/" + this.applicant.id)
        .then(response => {
          this.restorePage();
          Swal.fire({
            title: response.data.title,
            text: response.data.message,
            type: "success",
            confirmButtonText: "OK",
            buttonsStyling: false,
            customClass: {
              confirmButton: "btn btn-inverse-primary"
            }
          });
        })
        .catch(error => {
          this.restoreEl();
          Swal.fire({
            title: error.response.data.title,
            text: error.response.data.message,
            type: "error",
            confirmButtonText: "OK",
            buttonsStyling: false,
            customClass: {
              confirmButton: "btn btn-inverse-primary"
            }
          });
        });   
    },

    restoreEmail() {
      this.information = {
        email_destination_job: [],
        email_destination_job_formatted: [""]
      };
      this.editEmailBlock = false;
      this.getContactEmailDestination();
    },
    getContactEmailDestination() {
      axios
        .get("applicants/json/contact-email-destination")
        .then(response => {
           if(response.data.id){
            this.information = response.data;
           }
        })
        .catch(error => {});
    },
    editEmailDestination() {
      this.editEmailBlock = true;
    },

    restoreEmail() {
      this.requestServer = this.editEmailBlock = false;
      this.errors = {};
      this.information = {
        email_destination_job: [],
        email_destination_job_formatted: [""]
      };
      this.getContactEmailDestination();
    },
    updateEmail() {
      this.requestServer = true;
      axios
        .put("applicants", this.information)
        .then(response => {
          this.requestServer = false;
          this.restoreEmail();
          Swal.fire({
            title: response.data.title,
            text: response.data.message,
            type: "success",
            confirmButtonText: "OK",
            buttonsStyling: false,
            customClass: {
              confirmButton: "btn btn-inverse-primary"
            }
          });
        })
        .catch(error => {
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
              confirmButton: "btn btn-inverse-primary"
            }
          });
        });
    }
  },
  created() {
    this.getApplicants(1, 5);
    this.getContactEmailDestination();
  }
}
</script>