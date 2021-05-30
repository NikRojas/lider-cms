<template>
  <div>
    <div class="header">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-3">
            <div class="col-6 col-md-7">
              <BreadCrumb
                :title="'Credenciales Pasarela Proyecto ' + project.name_es"
                parent
                active="Proyectos"
              ></BreadCrumb>
            </div>
          </div>
          <div class="row mb-5">
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
    <div class="container-fluid mt--4">
      <div class="row mb-4">
        <div class="col-12 col-lg-2">
          <h2>Credenciales</h2>
          <p>
            Ingresa las credenciales del Proyecto (Tienda) de la Pasarela de
            Izipay.
          </p>
        </div>
        <div class="col-12 col-lg-10">
          <div class="card">
            <div class="card-body">
              <div v-if="!updateCrendialsBlock">
                <h3 class="font-weight-normal">
                  <div class="font-weight-bold">Usuario (Id de la Tienda):</div>
                  {{ credential.user ? credential.user : "No registrado" }}
                </h3>
                <h3 class="font-weight-normal">
                  <div class="font-weight-bold">Contraseña Test:</div>
                  {{
                    credential.password_test ? credential.password_test : "No registrado"
                  }}
                </h3>
                <h3 class="font-weight-normal">
                  <div class="font-weight-bold">Contraseña Prod:</div>
                  {{
                    credential.password_prod ? credential.password_prod : "No registrado"
                  }}
                </h3>
                <div class="text-right">
                  <button
                    class="btn btn-inverse-info btn-sm"
                    @click="editBlockCredentials"
                  >
                    Editar Crendeciales
                  </button>
                </div>
              </div>
              <div v-else>
                <div class="form-group">
                  <label class="font-weight-bold" for="user"
                    >Id de la Tienda</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    v-model="credential.user"
                    id="user"
                  />
                  <label
                    v-if="errors && errors.user"
                    class="mt-2 text-danger text-sm"
                    for="user"
                    >{{ errors.user[0] }}</label
                  >
                </div>
                <div class="form-group">
                  <label class="font-weight-bold" for="password_test"
                    >Contraseña Test</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    v-model="credential.password_test"
                    id="password_test"
                  />
                  <label
                    v-if="errors && errors.password_test"
                    class="mt-2 text-danger text-sm"
                    for="password_test"
                    >{{ errors.password_test[0] }}</label
                  >
                </div>
                <div class="form-group">
                  <label class="font-weight-bold" for="password_prod"
                    >Contraseña Producción</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    v-model="credential.password_prod"
                    id="password_prod"
                  />
                  <label
                    v-if="errors && errors.password_prod"
                    class="mt-2 text-danger text-sm"
                    for="password_prod"
                    >{{ errors.password_prod[0] }}</label
                  >
                </div>
                <div class="text-right">
                  <Button
                    @click="updateCredentials"
                    :text="'Actualizar Credenciales'"
                    :classes="['btn-primary']"
                    :request-server="requestUpdate"
                  ></Button>
                  <button
                    type="button"
                    class="btn btn-secondary ml-2"
                    @click.prevent="restoreBlockCredentials"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row mb-4" v-if="credentialParent">
        <div class="col-12 col-lg-2">
          <h2>Modo</h2>
          <p>Indique el modo en el que se encuentra el Proyecto (Tienda).</p>
        </div>
        <div class="col-12 col-lg-10">
          <div class="card">
            <div class="card-body">
                <p>
                    Al estar en Modo Producción deberá haber ingresado la <b>Contraseña de Producción </b> en el sección superior y el <b>Token Cliente Javascript Producción</b> en la sección inferior.
                </p>
                <div class="ml-2">
                <b-form-checkbox
                    size="lg"
                    v-model="credential.active"
                    name="check-button"
                    switch
                >
                    Modo {{ !credential.active ? "Test" : "Producción" }}
                </b-form-checkbox>
              </div>
              <div class="text-right">
                <Button
                  @click="activate"
                  :text="'Actualizar Modo'"
                  :classes="['btn-primary']"
                  :request-server="requestActive"
                ></Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row mb-4" v-if="credentialParent">
        <div class="col-12 col-lg-2">
          <h2>Tokens</h2>
          <p>
            Ingresa los tokens del Proyecto (Tienda) de la Pasarela de Izipay.
          </p>
        </div>
        <div class="col-12 col-lg-10">
          <div class="card">
            <div class="card-body">
              <div v-if="!updateTokensBlock">
                <h3 class="font-weight-normal">
                  <div class="font-weight-bold">
                    Token Cliente Javascript Test:
                  </div>
                  {{
                    credential.token_js_test
                      ? credential.token_js_test
                      : "No registrado"
                  }}
                </h3>
                <h3 class="font-weight-normal">
                  <div class="font-weight-bold">
                    Token Cliente Javascript Producción:
                  </div>
                  {{
                    credential.token_js_prod
                      ? credential.token_js_prod
                      : "No registrado"
                  }}
                </h3>
                <hr class="my-3">
                <p >Tokens utilizados para calcular/verificar el campo kr-hash cuando se obtiene respuesta de la IPN(URL de notificación instantánea)</p>
                <h3 class="font-weight-normal">
                  <div class="font-weight-bold">
                    Token HMAC-SHA-256 Test:
                  </div>
                  {{
                    credential.token_sha_256_test
                      ? credential.token_sha_256_test
                      : "No registrado"
                  }}
                </h3>
                <h3 class="font-weight-normal">
                  <div class="font-weight-bold">
                    Token HMAC-SHA-256 Producción:
                  </div>
                  {{
                    credential.token_sha_256_prod
                      ? credential.token_sha_256_prod
                      : "No registrado"
                  }}
                </h3>
                <div class="text-right">
                  <button
                    class="btn btn-inverse-info btn-sm"
                    @click="editBlockTokens"
                  >
                    Editar Tokens
                  </button>
                </div>
              </div>
              <div v-else>
                <!--<div class="form-group">
                  <label class="font-weight-bold" for="token_test"
                    >Token API REST Test</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    v-model="credential.token_test"
                    id="token_test"
                  />
                  <label
                    v-if="errors && errors.token_test"
                    class="mt-2 text-danger text-sm"
                    for="token_test"
                    >{{ errors.token_test[0] }}</label
                  >
                </div>
                <div class="form-group">
                  <label class="font-weight-bold" for="token_prod"
                    >Token API REST Producción</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    v-model="credential.token_prod"
                    id="token_prod"
                  />
                  <label
                    v-if="errors && errors.token_prod"
                    class="mt-2 text-danger text-sm"
                    for="token_prod"
                    >{{ errors.token_prod[0] }}</label
                  >
                </div>-->
                <div class="form-group">
                  <label class="font-weight-bold" for="token_js_test"
                    >Token Cliente Javascript Test</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    v-model="credential.token_js_test"
                    id="token_js_test"
                  />
                  <label
                    v-if="errors && errors.token_js_test"
                    class="mt-2 text-danger text-sm"
                    for="token_js_test"
                    >{{ errors.token_js_test[0] }}</label
                  >
                </div>
                
                <div class="form-group">
                  <label class="font-weight-bold" for="token_js_prod"
                    >Token Cliente Javascript Producción</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    v-model="credential.token_js_prod"
                    id="token_js_prod"
                  />
                  <label
                    v-if="errors && errors.token_js_prod"
                    class="mt-2 text-danger text-sm"
                    for="token_js_prod"
                    >{{ errors.token_js_prod[0] }}</label
                  >
                </div>

                <div class="form-group">
                  <label class="font-weight-bold" for="token_sha_256_test"
                    >Token HMAC-SHA-256 Test</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    v-model="credential.token_sha_256_test"
                    id="token_sha_256_test"
                  />
                  <label
                    v-if="errors && errors.token_sha_256_test"
                    class="mt-2 text-danger text-sm"
                    for="token_sha_256_test"
                    >{{ errors.token_sha_256_test[0] }}</label
                  >
                </div>
                
                <div class="form-group">
                  <label class="font-weight-bold" for="token_sha_256_prod"
                    >Token HMAC-SHA-256 Producción</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    v-model="credential.token_sha_256_prod"
                    id="token_sha_256_prod"
                  />
                  <label
                    v-if="errors && errors.token_sha_256_prod"
                    class="mt-2 text-danger text-sm"
                    for="token_sha_256_prod"
                    >{{ errors.token_sha_256_prod[0] }}</label
                  >
                </div>


                <div class="text-right">
                  <Button
                    @click="updateTokens"
                    :text="'Actualizar Tokens'"
                    :classes="['btn-primary']"
                    :request-server="requestTokens"
                  ></Button>
                  <button
                    type="button"
                    class="btn btn-secondary ml-2"
                    @click.prevent="restoreBlockTokens"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row mb-4" v-if="credentialParent">
        <div class="col-12 col-lg-2">
          <h2>Pruebas</h2>
          <p>
            Realizar las pruebas, para despues pasar a la etapa de Producción.
          </p>
        </div>
        <div class="col-12 col-lg-10">
          <div class="card">
            <div class="card-body">
              <p>Listado de Tarjetas de Prueba</p>
              <ul>
                <li>111111-11111-11111-11111</li>
                <li>111111-11111-11111-11111</li>
                <li>111111-11111-11111-11111</li>
                <li>111111-11111-11111-11111</li>
              </ul>
              <div class="text-right">
                <Button
                  @click="testCredentials"
                  :text="'Realizar Test'"
                  :classes="['btn-primary']"
                  :request-server="requestTest"
                ></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BreadCrumb from "../../../components/BreadCrumb";
import Button from "../../../components/Button";
export default {
  components: {
    BreadCrumb,
    Button,
  },
  props: {
    elementParent: Object,
    routeReturn: String,
    credentialParent: Object,
    routeUpdate: String,
    routeUpdateTokens: String,
    routeActivate: String,
    //routeGetAll: String,
  },
  data() {
    return {
      updateTokensBlock: false,
      updateCrendialsBlock: false,
      requestTest: false,
      requestTokens: false,
      requestActive: false,
      credential: {
        user: "",
        password: "",
      },
      errors: {},
      requestUpdate: false,
    };
  },
  methods: {
    activate() {
      this.requestActive = true;
      axios({
        method: "post",
        url: this.routeActivate,
        data: this.credential,
      })
        .then((response) => {
          this.requestActive = false;
          document.location.href = response.data.route;
        })
        .catch((error) => {
          this.requestActive = false;
          if (error.response.status === 422) {
            this.errors = error.response.data.errors || {};
            return;
          }
          document.location.href = error.response.data.route;
        });
    },
    editBlockCredentials() {
      this.updateCrendialsBlock = true;
    },
    restoreBlockCredentials() {
      if (this.credentialParent) {
        this.credential.user = this.credentialParent.user;
        this.credential.password = this.credentialParent.password;
      } else {
        this.credential.user = "";
        this.credential.password = "";
      }
      this.updateCrendialsBlock = false;
    },
    updateCredentials() {
      this.requestUpdate = true;
      this.credential.project = this.elementParent.id;
      this.requestSubmit = true;
      axios({
        method: "post",
        url: this.routeUpdate,
        data: this.credential,
      })
        .then((response) => {
          this.requestUpdate = false;
          document.location.href = response.data.route;
        })
        .catch((error) => {
          this.requestUpdate = false;
          if (error.response.status === 422) {
            this.errors = error.response.data.errors || {};
            return;
          }
          document.location.href = error.response.data.route;
        });
    },
    editBlockTokens() {
      this.updateTokensBlock = true;
    },
    restoreBlockTokens() {
      if (this.credentialParent) {
        this.credential.token_test = this.credentialParent.token_test;
        this.credential.token_prod = this.credentialParent.token_prod;
        this.credential.token_js_test = this.credentialParent.token_js_test;
        this.credential.token_js_test = this.credentialParent.token_js_test;
      }
      this.updateTokensBlock = false;
    },
    updateTokens() {
      this.requestTokens = true;
      this.credential.project = this.elementParent.id;
      this.requestSubmit = true;
      axios({
        method: "post",
        url: this.routeUpdateTokens,
        data: this.credential,
      })
        .then((response) => {
          this.requestTokens = false;
          document.location.href = response.data.route;
        })
        .catch((error) => {
          this.requestTokens = false;
          if (error.response.status === 422) {
            this.errors = error.response.data.errors || {};
            return;
          }
          document.location.href = error.response.data.route;
        });
    },
    testCredentials() {
      this.requestTest = true;
      let credential = {};
      credential.project = this.elementParent.id;
      axios({
        method: "post",
        url: this.routeTest,
        data: credential,
      })
        .then((response) => {
          this.requestTest = false;
          document.location.href = response.data.route;
        })
        .catch((error) => {
          this.requestTest = false;
          if (error.response.status === 422) {
            this.errors = error.response.data.errors || {};
            return;
          }
          document.location.href = error.response.data.route;
        });
    },
  },
  watch: {
    elementParent: {
      immediate: true,
      handler: function (newValue) {
        this.project = newValue;
      },
    },
    credentialParent: {
      immediate: true,
      handler: function (newValue) {
        if (newValue) {
          this.credential = Object.assign({}, newValue);
        }
      },
    },
  },
};
</script>