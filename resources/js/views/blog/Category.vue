<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-4">
            <div class="col-6 col-md-7">
              <BreadCrumb title="Categorías" parent="Blog" active="Categorías"></BreadCrumb>
            </div>
            <div class="col-6 col-md-5 text-right">
              <a href="#" class="btn btn-icon btn-neutral" @click.prevent="newCategory">
                <span class="btn-inner--icon">
                  <i class="fas fa-newspaper"></i>
                </span>
                <span class="btn-inner--text">Nueva Categoria</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid mt--6">
      <DataTable
        placeholder="Nombre"
        :object.sync="categories"
        :buttonRead="false"
        :buttonUpdate="true"
        :buttonDelete="true"
        @update="editCategory"
        @delete="deleteCategory"
        @get="getCategories"
      ></DataTable>
    </div>

    <b-modal centered ref="modal-create">
      <template slot="modal-title">
        <h2 class="mb-0 text-uppercase text-primary">Crear Categoria</h2>
      </template>
      <form @submit.prevent="createCategory">
        <div class="row">
          <div class="col-12">
            <div class="form-group">
              <label class="form-control-label d-block" for="id_name">Nombre</label>
              <input type="text" class="form-control form-control-alternative" v-model="category.name" id="id_name" />
              <label
                v-if="errors && errors.name"
                class="mt-2 text-danger text-sm"
                for="id_name"
              >{{ errors.name[0] }}</label>
            </div>
          </div>
        </div>
      </form>
      <template slot="modal-footer" slot-scope="{ ok, cancel }">
        <Button
          :classes="['btn-primary']"
          :text="'Registrar'"
          @click="createCategory()"
          :request-server="requestServer"
        ></Button>
        <button type="button" class="btn btn-outline-danger" @click="closeModal()">Cancelar</button>
      </template>
    </b-modal>
    <b-modal centered ref="modal-delete">
      <template slot="modal-title">
        <h2 class="mb-0 text-uppercase text-primary">Eliminar Categoria</h2>
      </template>
      <p class="my-3">Esta seguro que desea eliminar el categoria?</p>
      <template slot="modal-footer" slot-scope="{ ok, cancel }">
        <Button
          :classes="['btn-danger']"
          :text="'Eliminar'"
          @click="deleteCategoryConfirm()"
          :request-server="requestServer"
        ></Button>
        <button type="button" class="btn btn-secondary" @click="closeModal()">Cancelar</button>
      </template>
    </b-modal>
    <b-modal centered ref="modal-edit">
      <template slot="modal-title">
        <h2 class="mb-0 text-uppercase text-primary">Actualizar Categoria</h2>
      </template>
      <form @submit.prevent="updateCategory">
        <div class="row">
          <div class="col-12">
            <div class="form-group">
              <label class="form-control-label d-block" for="id_name">Nombre</label>
              <input type="text" class="form-control form-control-alternative" v-model="category.name" id="id_name" />
              <label
                v-if="errors && errors.name"
                class="mt-2 text-danger text-sm"
                for="id_name"
              >{{ errors.name[0] }}</label>
            </div>
          </div>
        </div>
      </form>
      <template slot="modal-footer" slot-scope="{ ok, cancel }">
        <Button
          :classes="['btn-primary']"
          :text="'Actualizar'"
          @click="updateCategory()"
          :request-server="requestServer"
        ></Button>
        <button type="button" class="btn btn-outline-danger" @click="closeModal()">Cancelar</button>
      </template>
    </b-modal>
  </div>
</template>
<script>
import BreadCrumb from "../../components/BreadCrumb";
import DataTable from "../../components/DataTable";
import Button from "../../components/Button";
export default {
  components: {
    DataTable,
    Button,
    BreadCrumb
  },
  data() {
    return {
      requestServer: false,
      errors: {},
      category: {
        id: "",
        name: ""
      },
      categories: {}
    };
  },
  methods: {
    closeModal() {
      this.errors = {};
      this.requestServer = false;
      this.$refs["modal-create"].hide();
      this.$refs["modal-delete"].hide();
      this.$refs["modal-edit"].hide();
      this.category = {
        id: "",
        nombre: ""
      };
    },
    deleteCategoryConfirm() {
      this.requestServer = true;
      axios
        .delete("categories/" + this.category.id)
        .then(response => {
          this.requestServer = false;
          this.$refs["modal-delete"].hide();
          this.restorePage();
          Swal.fire({
            title: response.data.title,
            text: response.data.message,
            type: "success",
            confirmButtonText: "OK",
            buttonsStyling: false,
            customClass: {
              confirmButton: "btn btn-primary"
            }
          });
        })
        .catch(error => {
          this.requestServer = false;
          this.$refs["modal-delete"].hide();
          Swal.fire({
            title: error.response.data.title,
            text: error.response.data.message,
            type: "error",
            confirmButtonText: "OK",
            buttonsStyling: false,
            customClass: {
              confirmButton: "btn btn-primary"
            }
          });
        });
    },
    getCategory(id) {
      axios
        .get("json/categories/" + id)
        .then(response => {
          this.category = response.data;
        })
        .catch(error => {});
    },
    deleteCategory(id) {
      this.$refs["modal-delete"].show();
      this.getCategory(id);
    },
    editCategory(id) {
      this.$refs["modal-edit"].show();
      this.getCategory(id);
    },
    restorePage() {
      this.errors = this.categories = {};
      this.requestServer = false;
      this.getCategories(1, 5);
      this.category = {
        id: "",
        nombre: ""
      };
    },
    createCategory() {
      this.requestServer = true;
      axios
        .post("categories", this.category)
        .then(response => {
          this.requestServer = false;
          this.$refs["modal-create"].hide();
          this.restorePage();
          Swal.fire({
            title: response.data.title,
            text: response.data.message,
            type: "success",
            confirmButtonText: "OK",
            buttonsStyling: false,
            customClass: {
              confirmButton: "btn btn-primary"
            }
          });
        })
        .catch(error => {
          this.requestServer = false;
          if (error.response.status === 422) {
            this.errors = error.response.data.errors || {};
            return;
          }
          this.$refs["modal-create"].hide();
          Swal.fire({
            title: error.response.data.title,
            text: error.response.data.message,
            type: "error",
            confirmButtonText: "OK",
            buttonsStyling: false,
            customClass: {
              confirmButton: "btn btn-primary"
            }
          });
        });
    },
    updateCategory() {
      this.requestServer = true;
      axios
        .put("categories/" + this.category.id, this.category)
        .then(response => {
          this.closeModal();
          this.restorePage();
          Swal.fire({
            title: response.data.title,
            text: response.data.message,
            type: "success",
            confirmButtonText: "OK",
            buttonsStyling: false,
            customClass: {
              confirmButton: "btn btn-primary"
            }
          });
        })
        .catch(error => {
          this.requestServer = false;
          if (error.response.status === 422) {
            this.errores = error.response.data.errors || {};
            return;
          }
          this.closeModal();
        });
    },
    getCategories(pagina, desde, search = null) {
      let url = "json/categories?page=" + pagina + "&desde=" + desde;
      if (search) {
        url = url + "&search=" + search;
      }
      axios
        .get(url)
        .then(response => {
          this.categories = response.data;
        })
        .catch(error => {});
    },
    newCategory() {
      this.$refs["modal-create"].show();
    }
  },
  created() {
    this.getCategories(1, 5);
  }
};
</script>