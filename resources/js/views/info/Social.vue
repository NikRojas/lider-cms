<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-4">
<div class="col-6 col-md-7">
            <BreadCrumb title="Redes Sociales" parent="Información" active="Redes Sociales"></BreadCrumb></div>
            <div class="col-6 col-md-5 text-right">
              <a
                href="#"
                class="btn btn-icon btn-neutral"
                @click.prevent="newNetwork"
                v-if="startBlock"
              >
                <span class="btn-inner--icon">
                  <i class="fas fa-info"></i>
                </span>
                <span class="btn-inner--text">Nueva Red Social</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid mt--6">
      <DataTableDraggable
            v-show="startBlock"
            :object.sync="networks"
            :buttonUpdate="true"
            :buttonDelete="true"
            :botonDetail="false"
            @drag="orderNetworks"
            @edit="editNetwork"
            @delete="deteleNetwork"
          ></DataTableDraggable>
    </div>
    <b-modal centered ref="modal-create">
      <template slot="modal-title">
        <h2 class="mb-0 text-uppercase text-primary">Crear Red Social</h2>
      </template>
      <form @keydown.enter.prevent="createNetwork">
        <div class="row">
          <div class="col-12">
            <div class="form-group">
              <label class="form-control-label d-block" for="id_name">Nombre</label>
              <select v-model="network.master_social_network_id" id="id_name" class="form-control ">
                <option value disabled>Seleccionar Red Social</option>
                <option
                  v-for="network in masterNetworks"
                  :key="network.id"
                  :value="network.id"
                >{{ network.name }}</option>
              </select>
              <label
                v-if="errors && errors.master_social_network_id"
                class="mt-2 text-danger text-sm"
                for="id_name"
              >{{ errors.master_social_network_id[0] }}</label>
            </div>
            <div class="form-group">
              <label class="form-control-label d-block" for="id_url">URL</label>
              <input type="text" class="form-control " placeholder="URL" v-model="network.url" id="id_url" />
              <label
                v-if="errors && errors.url"
                class="mt-2 text-danger text-sm"
                for="id_url"
              >{{ errors.url[0] }}</label>
            </div>
          </div>
        </div>
      </form>
      <template slot="modal-footer" slot-scope="{ ok, cancel }">
        <Button
          :classes="['btn-primary']"
          :text="'Registrar'"
          @click="createNetwork()"
          :request-server="requestServer"
        ></Button>
        <button type="button" class="btn btn-danger" @click="closeModal()">Cancelar</button>
      </template>
    </b-modal>
    <b-modal centered ref="modal-delete" title="Eliminar Red Social">
      <p class="mb-0">Esta seguro que desea eliminar la Red Social?</p>
      <template slot="modal-footer" slot-scope="{ ok, cancel }">
        <Button
          :classes="['btn-primary']"
          :text="'Eliminar'"
          @click="deleteNetworkConfirm()"
          :request-server="requestServer"
        ></Button>
        <button type="button" class="btn btn-secondary" @click="cancel()">Cancelar</button>
      </template>
    </b-modal>
    <b-modal centered ref="modal-edit">
      <template slot="modal-title">
        <h2 class="mb-0 text-uppercase text-primary">Actualizar Red Social</h2>
      </template>
      <form @keydown.enter.prevent="updateNetwork">
        <div class="row">
          <div class="col-12">
            <div class="form-group">
              <label class="form-control-label d-block" for="id_name">Nombre</label>
              <select v-model="network.master_social_network_id" id="id_name" class="form-control ">
                <option value disabled>Seleccionar Red Social</option>
                <option
                  v-for="network in masterNetworks"
                  :key="network.id"
                  :value="network.id"
                >{{ network.name }}</option>
              </select>
              <label
                v-if="errors && errors.master_social_network_id"
                class="mt-2 text-danger text-sm"
                for="id_name"
              >{{ errors.master_social_network_id[0] }}</label>
            </div>
            <div class="form-group">
              <label class="form-control-label d-block" for="id_url">URL</label>
              <input type="text" class="form-control " v-model="network.url" id="id_url" />
              <label
                v-if="errors && errors.url"
                class="mt-2 text-danger text-sm"
                for="id_url"
              >{{ errors.url[0] }}</label>
            </div>
          </div>
        </div>
      </form>
      <template slot="modal-footer" slot-scope="{ ok, cancel }">
        <Button
          :classes="['btn-primary']"
          :text="'Actualizar'"
          @click="updateNetwork()"
          :request-server="requestServer"
        ></Button>
        <button type="button" class="btn btn-danger" @click="closeModal()">Cancelar</button>
      </template>
    </b-modal>
  </div>

</template>
<script>
import Button from "../../components/Button";
import DataTableDraggable from "../../components/DataTableDraggable";
import BreadCrumb from "../../components/BreadCrumb";
export default {
  props: {
    masterNetworks: Array
  },
  components: {
    DataTableDraggable,
    Button,
    BreadCrumb
  },
  data() {
    return {
      networks: {},
      network: {
        master_social_network_id: "",
        url: ""
      },
      errors: {},
      startBlock: true,
      requestServer: false
    };
  },
  methods: {
    closeModal() {
      this.errors = {};
      this.requestServer = false;
      this.$refs["modal-create"].hide();
      this.$refs["modal-delete"].hide();
      this.$refs["modal-edit"].hide();
      this.network = {
        master_social_network_id: "",
        url: ""
      };
    },
    restorePage() {
      this.errors = {};
      this.networks = {};
      this.requestServer = false;
      this.$refs["modal-create"].hide();
      this.$refs["modal-delete"].hide();
      this.$refs["modal-edit"].hide();
      this.network = {
        master_social_network_id: "",
        url: ""
      };
      this.getNetworks();
    },
    createNetwork() {
      this.requestServer = true;
      axios
        .post("social", this.network)
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
          this.requestServer = false;
          if (error.response.status === 422) {
            this.errors = error.response.data.errors || {};
            return;
          }
          this.closeModal("modal-create");
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
    orderNetworks(elements) {
      axios
        .put("social/order", elements)
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
    editNetwork(id) {
      this.$refs["modal-edit"].show();
      this.getNetwork(id);
    },
    updateNetwork() {
      this.requestServer = true;
      axios
        .put("social/" + this.network.id, this.network)
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
          this.requestServer = false;
          if (error.response.status === 422) {
            this.errors = error.response.data.errors || {};
            return;
          }
          this.closeModal("modal-edit");
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
    deleteNetworkConfirm() {
      this.requestServer = true;
      axios
        .delete("social/" + this.network.id)
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
          this.closeModal("modal-eliminar");
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
    deteleNetwork(id) {
      this.$refs["modal-delete"].show();
      this.getNetwork(id);
    },
    getNetwork(id) {
      axios
        .get("json/social/" + id)
        .then(response => {
          this.network = response.data;
        })
        .catch(error => {});
    },
    newNetwork() {
      this.$refs["modal-create"].show();
    },
    getNetworks() {
      axios
        .get("json/social")
        .then(response => {
          this.networks = response.data;
        })
        .catch(error => {});
    }
  },
  created() {
    this.getNetworks();
  }
};
</script>
