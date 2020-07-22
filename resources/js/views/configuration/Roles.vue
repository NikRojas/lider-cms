<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-4">
            <div class="col-6 col-md-7">
              <BreadCrumb title="Roles" parent="Configuración" active="Roles"></BreadCrumb>
              </div>
            <div class="col-6 col-md-5 text-right">
              <a
                href="#"
                class="btn btn-icon btn-neutral"
                @click.prevent="()=>{showBlock = false; crearBloque = true;obtenerSelects()}"
                v-if="showBlock"
              >
                <span class="btn-inner--icon">
                  <i class="fas fa-cog"></i>
                </span>
                <span class="btn-inner--text">Nuevo Rol</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid mt--6">
      <DataTable
        :object="roles"
        :placeholder="'Nombre del Rol'"
        :button-update="true"
        :button-read="true"
        :button-delete="true"
        @get="getRoles"
        @read="showRole"
        @delete="deleteRole"
        @update="editRole"
        v-show="showBlock"
      ></DataTable>

      <div class="card shadow mb-4" v-if="crearBloque">
        <div class="card-header border-0">
          <h2 class="mb-0 text-uppercase text-primary">Crear Rol</h2>
        </div>
        <form @submit.prevent="createRole">
          <div class="card-body">
            <div class="row">
              <div class="col-lg-6">
                <div class="form-group">
                  <label class="font-weight-bold" for="id_name">Nombre:</label>
                  <input
                    type="text"
                    class="form-control form-control-alternative"
                    id="id_name"
                    v-model="rol.name"
                    placeholder="Nombre"
                  />
                  <label
                    v-if="errores && errores.name"
                    class="mt-2 mb-0 text-danger"
                    for="id_name"
                  >{{ errores.name[0] }}</label>
                </div>
              </div>

              
            </div>
          </div>

          <div class="table-responsive">
            <small
              class="d-block mr-4 mb-2 text-right"
              v-if="!requestServer2 && modulos.data.length"
            >
              Mostrando {{ modulos.from }} de {{ modulos.to }} de {{ modulos.total }}
              entradas
            </small>

            <table
              class="table align-items-center mb-3"
              v-if="!requestServer2 && modulos.data.length"
            >
              <thead class="thead-light">
                <tr>
                  <th>
                    <b-form-checkbox v-model="todoSeleccionado"></b-form-checkbox>
                  </th>
                  <th>Módulo</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="modulo in modulos.data" :key="modulo.id">
                  <td>
                    <b-form-checkbox v-model="rol.permisos" :value="modulo.id"></b-form-checkbox>
                  </td>
                  <td>{{ modulo.name }}</td>
                </tr>
              </tbody>
            </table>

            <div v-if="requestServer2">
              <Loader
                texto="Cargando..."
                :iconClasses="['ml-1']"
                :iconHeight="20"
                :iconWidth="20"
                :styles="{ height: '350px' }"
              />
            </div>

            <div class="row ml-0 mr-4" v-if="!requestServer2">
              <div class="col-6">
                <ul class="pagination justify-content-start mb-0">
                  <li class="page-item">
                    <a
                      v-if="modulos.current_page != 1"
                      href="#"
                      class="page-link rounded"
                      @click.prevent="getModules(modulos.current_page - 1)"
                    >
                      <i class="fas fa-angle-left"></i>
                    </a>
                  </li>
                  <li
                    class="page-item"
                    v-for="pagina in modulos.last_page"
                    :key="pagina"
                    v-bind:class="[ pagina == modulos.current_page ? 'active' : '']"
                  >
                    <a
                      class="page-link rounded"
                      href="#"
                      @click.prevent="getModules(pagina)"
                    >{{ pagina }}</a>
                  </li>
                  <li class="page-item">
                    <a
                      v-if="modulos.current_page != modulos.last_page"
                      href="#"
                      class="page-link rounded"
                      @click.prevent="getModules(modulos.current_page + 1)"
                    >
                      <i class="fas fa-angle-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-6 p-0">
                <label
                  v-if="errores && errores.permisos"
                  class="mb-2 text-danger text-right d-block"
                >{{ errores.permisos[0] }}</label>
              </div>
            </div>
          </div>

          <div class="card-body pt-2">
            <div class="col-12 pr-0">
              <div class="text-right">
                <Boton
                  :text="'Guardar'"
                  :classes="['btn-primary','mr-2']"
                  :request-server="requestServer"
                ></Boton>
                <button
                  type="button"
                  class="btn btn-danger"
                  @click.prevent="restablecerPagina"
                >Cancelar</button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div class="card shadow mb-4" v-if="editBlock">
        <div class="card-header border-0">
          <h2 class="mb-0 text-uppercase text-primary">Actualizar Rol</h2>
        </div>
        <form @submit.prevent="updateRole">
          <div class="card-body">
            <div class="row">
              <div class="col-12">
                <div class="form-group">
                  <label class="font-weight-bold" for="id_name">Nombre:</label>
                  <input
                    type="text"
                    class="form-control form-control-alternative"
                    id="id_name"
                    v-model="rol.name"
                    placeholder="Nombre"
                  />
                  <label
                    v-if="errores && errores.name"
                    class="mt-2 mb-0 text-danger"
                    for="id_name"
                  >{{ errores.name[0] }}</label>
                </div>
              </div>

              
            </div>
          </div>

          <div class="table-responsive">
            <small
              class="d-block mr-4 mb-2 text-right"
              v-if="!requestServer2 && modulos.data.length"
            >
              Mostrando {{ modulos.from }} de {{ modulos.to }} de {{ modulos.total }}
              entradas
            </small>

            <table
              class="table align-items-center mb-4"
              v-if="!requestServer2 && modulos.data.length"
            >
              <thead class="thead-light">
                <tr>
                  <th>
                     <b-form-checkbox v-model="todoSeleccionado"></b-form-checkbox>
                  </th>
                  <th>Módulo</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="modulo in modulos.data" :key="modulo.id">
                  <td>
                    <b-form-checkbox v-model="rol.permisos" :value="modulo.id"></b-form-checkbox>
                  </td>
                  <td>{{ modulo.name }}</td>
                </tr>
              </tbody>
            </table>

            <div v-if="requestServer2">
              <Loader
                texto="Cargando..."
                :iconClasses="['ml-1']"
                :iconHeight="20"
                :iconWidth="20"
                :styles="{ height: '350px' }"
              />
            </div>

            <!--<label v-if="errores && errores.permisos"
            class="ml-4 mt-2 mb-0 text-danger">{{ errores.permisos[0] }}</label>-->

            <div class="row ml-0 mr-4" v-if="!requestServer2">
              <div class="col-6">
                <ul class="pagination justify-content-start mb-0">
                  <li class="page-item">
                    <a
                      v-if="modulos.current_page != 1"
                      href="#"
                      class="page-link rounded"
                      @click.prevent="getModules(modulos.current_page - 1)"
                    >
                      <i class="fas fa-angle-left"></i>
                    </a>
                  </li>
                  <li
                    class="page-item"
                    v-for="pagina in modulos.last_page"
                    :key="pagina"
                    v-bind:class="[ pagina == modulos.current_page ? 'active' : '']"
                  >
                    <a
                      class="page-link rounded"
                      href="#"
                      @click.prevent="getModules(pagina)"
                    >{{ pagina }}</a>
                  </li>
                  <li class="page-item">
                    <a
                      v-if="modulos.current_page != modulos.last_page"
                      href="#"
                      class="page-link rounded"
                      @click.prevent="getModules(modulos.current_page + 1)"
                    >
                      <i class="fas fa-angle-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-6 p-0">
                <label
                  v-if="errores && errores.permisos"
                  class="mb-2 text-danger text-right d-block"
                >{{ errores.permisos[0] }}</label>
              </div>
            </div>
          </div>

          <div class="card-body pt-2">
            <div class="col-12 pr-0">
              <div class="text-right">
                <Boton
                  :text="'Guardar'"
                  :classes="['btn-primary','mr-2']"
                  :request-server="requestServer"
                ></Boton>
                <button
                  type="button"
                  class="btn btn-danger"
                  @click.prevent="restablecerPagina"
                >Cancelar</button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div class="card shadow mb-4" v-if="verBloque">
        <div class="card-header border-0">
          <h2 class="mb-0 text-uppercase text-primary">Detalle Rol</h2>
        </div>
        <form>
          <div class="card-body">
            <div class="row">
              <div class="col-12">
                <div class="form-group">
                  <label class="font-weight-bold">Nombre:</label>
                  <p>{{ rol.name }}</p>
                </div>
              </div>

            </div>
          </div>

          <div class="table-responsive">
            <small
              class="d-block mr-4 mb-2 text-right"
              v-if="!requestServer2 && rol.modulos_paginado.data.length"
            >
              Mostrando {{ rol.modulos_paginado.from }} de {{ rol.modulos_paginado.to }} de
              {{ rol.modulos_paginado.total }} entradas
            </small>

            <table
              class="table align-items-center mb-3"
              v-if="!requestServer2 && rol.modulos_paginado.data.length"
            >
              <thead class="thead-light">
                <tr>
                  <th>#</th>
                  <th>Módulo</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(modulo,i) in rol.modulos_paginado.data" :key="modulo.id">
                  <td>{{ rol.modulos_paginado.from + i }}</td>
                  <td>{{ modulo.name }}</td>
                </tr>
              </tbody>
            </table>

            <div v-if="requestServer2">
              <Loader
                texto="Cargando..."
                :iconClasses="['ml-1']"
                :iconHeight="20"
                :iconWidth="20"
                :styles="{ height: '350px' }"
              />
            </div>

            <!--<label v-if="errores && errores.permisos"
            class="ml-4 mt-2 mb-0 text-danger">{{ errores.permisos[0] }}</label>-->

            <div class="row ml-0 mr-4" v-if="!requestServer2">
              <div class="col-6">
                <ul class="pagination justify-content-start mb-0">
                  <li class="page-item">
                    <a
                      v-if="rol.modulos_paginado.current_page != 1"
                      href="#"
                      class="page-link rounded"
                      @click.prevent="getRole(rol.id,rol.modulos_paginado.current_page - 1)"
                    >
                      <i class="fas fa-angle-left"></i>
                    </a>
                  </li>

                  <li
                    class="page-item"
                    v-for="pagina in rol.modulos_paginado.last_page"
                    :key="pagina"
                    v-bind:class="[ pagina == rol.modulos_paginado.current_page ? 'active' : '']"
                  >
                    <a
                      class="page-link rounded"
                      href="#"
                      @click.prevent="getRole(rol.id,pagina)"
                    >{{ pagina }}</a>
                  </li>
                  <li class="page-item">
                    <a
                      v-if="rol.modulos_paginado.current_page != rol.modulos_paginado.last_page"
                      href="#"
                      class="page-link rounded"
                      @click.prevent="getRole(rol.id,rol.modulos_paginado.current_page + 1)"
                    >
                      <i class="fas fa-angle-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-6 p-0">
                <label
                  v-if="errores && errores.permisos"
                  class="mb-2 text-danger text-right d-block"
                >{{ errores.permisos[0] }}</label>
              </div>
            </div>
          </div>

          <div class="card-body pt-2">
            <div class="col-12 pr-0">
              <div class="text-right">
                <button
                  type="button"
                  class="btn btn-primary"
                  @click.prevent="restablecerPagina"
                >Regresar</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>

    <b-modal centered ref="modal-delete">
      <template slot="modal-title">
        <h2 class="mb-0 text-uppercase text-primary">Eliminar Rol</h2>
      </template>
      <p
        class="mb-0"
      >Esta seguro que desea eliminar el rol?, Aseguresé que ningun usuario este anidado a este rol. <span v-if="rol.usuarios" class="text-danger">({{rol.usuarios}} usuario(s) anidados)</span></p>
      <template slot="modal-footer" slot-scope="{ ok, cancel }">
        <Boton
          :classes="['btn-danger']"
          :text="'Eliminar'"
          @click="deleteRoleConfirmar"
          :request-server="requestServer"
        ></Boton>
        <button type="button" class="btn btn-secondary" @click="restoreEl">Cancelar</button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import BreadCrumb from "../../components/BreadCrumb";
import DataTable from "../../components/DataTable";
import Boton from "../../components/Button";
import { ModelListSelect } from "vue-search-select";
import Loader from "../../components/Loader";
export default {
  components: {
    DataTable,
    ModelListSelect,
    Loader,
    Boton,
    BreadCrumb
  },
  data() {
    return {
      showBlock: true,
      crearBloque: false,
      verBloque: false,
      editBlock: false,
      requestServer: false,
      requestServer2: false,
      modulos: {
        data: ""
      },
      roles: {},
      empresas: [],
      total_permisos: 0,
      rol: {
        id: "",
        id_empresa: "",
        nombre: "",
        permisos: [],
        empresa: "",
        modulos: {
          pivot: {}
        },
        modulos_paginado: {}
      },
      todoSeleccionado: false,
      errores: {}
    };
  },
  methods: {
    getRole(id, pagina = false) {
      this.requestServer2 = true;
      let url = "roles/" + id;
      if (pagina) {
        url = url + "?page=" + pagina;
      }
      axios
        .get("json/" + url)
        .then(response => {
          this.rol = response.data;
          if (this.editBlock) {
            if (this.rol.permisos.length == this.total_permisos) {
              this.todoSeleccionado = true;
            }
          }
          this.requestServer2 = false;
        })
        .catch(error => {});
    },
    showRole(id) {
      this.getRole(id);
      this.showBlock = false;
      this.verBloque = true;
    },
    deleteRole(id) {
      this.$refs["modal-delete"].show();
      this.getRole(id);
    },
    deleteRoleConfirmar() {
      this.requestServer = true;
      axios
        .delete("roles/" + this.rol.id)
        .then(response => {
          this.restablecerPagina();
          Swal.fire({
            title: response.data.title,
            text: response.data.message,
            type: "success",
            confirmButtonText: "Ok",
            buttonsStyling: false,
            customClass: {
              confirmButton: "btn btn-primary"
            }
          });
        })
        .catch(error => {
          this.restablecerPagina();
          Swal.fire({
            title: error.response.data.title,
            text: error.response.data.message,
            type: "error",
            confirmButtonText: "Ok",
            buttonsStyling: false,
            customClass: {
              confirmButton: "btn btn-primary"
            }
          });
        });
    },
    createRole() {
      this.requestServer = true;
      axios
        .post("roles", this.rol)
        .then(response => {
          this.requestServer = false;
          this.restablecerPagina();
          Swal.fire({
            title: response.data.title,
            text: response.data.message,
            type: "success",
            confirmButtonText: "Ok",
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
          this.restablecerPagina();
          Swal.fire({
            title: error.response.data.title,
            text: error.response.data.message,
            type: "error",
            confirmButtonText: "Ok",
            buttonsStyling: false,
            customClass: {
              confirmButton: "btn btn-primary"
            }
          });
        });
    },
    restoreEl() {
      this.showBlock = true;
      this.crearBloque = this.editBlock = this.verBloque = false;
      this.rol = {
        nombre: "",
        permisos: [],
        empresa: ""
      };
      this.$refs["modal-delete"].hide();
      this.requestServer = this.requestServer2 = false;
    },
    restablecerPagina() {
      this.showBlock = true;
      this.getRoles(1, 5);
      this.crearBloque = this.verBloque = this.todoSeleccionado = this.editBlock = false;
      this.modulos = this.errores = {};
      this.rol = {
        nombre: "",
        permisos: [],
        empresa: ""
      };
      this.$refs["modal-delete"].hide();
      this.requestServer = this.requestServer2 = false;
    },
    getRoles(pagina, desde, buscar = null) {
      let url = "json/roles?page=" + pagina + "&desde=" + desde;
      if (buscar) {
        url = url + "&buscar=" + buscar;
      }
      axios
        .get(url)
        .then(response => {
          this.roles = response.data;
        })
        .catch(error => {});
    },
    obtenerSelects() {
      this.getModules();
    },
    getModules(pagina) {
      this.requestServer2 = true;
      axios
        .get("json/modulos?page=" + pagina)
        .then(response => {
          if (response.data.data) {
            this.modulos = response.data;
          }
          this.total_permisos = response.data.total;
          /*if (this.todoSeleccionado) {
            this.clickSeleccionarTodo();
          }*/
          this.requestServer2 = false;
        })
        .catch(error => {});
    },
    obtenerEmpresas() {
      axios
        .get("json/autocompletar/empresas")
        .then(response => {
          this.empresas = response.data;
        })
        .catch(err => {});
    },
    editRole(id) {
      this.obtenerSelects();
      this.getRole(id);
      this.showBlock = false;
      this.editBlock = true;
    },
    updateRole() {
      this.requestServer = true;
      axios
        .put("roles/" + this.rol.id, this.rol)
        .then(response => {
          this.requestServer = false;
          this.restablecerPagina();
          Swal.fire({
            title: response.data.title,
            text: response.data.message,
            type: "success",
            confirmButtonText: "Ok",
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
          this.restablecerPagina();
          Swal.fire({
            title: error.response.data.title,
            text: error.response.data.message,
            type: "error",
            confirmButtonText: "Ok",
            buttonsStyling: false,
            customClass: {
              confirmButton: "btn btn-primary"
            }
          });
        });
    }
  },
  created() {
    this.getRoles(1, 5);
  },
  watch: {
    todoSeleccionado: function(newValue, oldValue) {
      if(newValue){
        this.rol.permisos = [];
        //if (this.todoSeleccionado && this.modulos.modulos_total) {
        if (this.todoSeleccionado) {
          for (var i = 0; i < this.modulos.modulos_total.length; i++) {
            this.rol.permisos.push(this.modulos.modulos_total[i].id);
          }
        }
      }
    },
    "rol.permisos": {
      handler: function(newValue, oldValue) {
        if (newValue && newValue.length != this.total_permisos) {
          this.todoSeleccionado = false;
        }
        if (newValue && newValue.length == this.total_permisos) {
          this.todoSeleccionado = true;
        }
      },
      deep: true
    }
  }
};
</script>

