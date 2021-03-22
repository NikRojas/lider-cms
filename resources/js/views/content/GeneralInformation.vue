<template>
  <div>
    <div class="header pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center pt-0 pt-md-2 pb-4">
            <div class="col-6 col-md-7">
              <BreadCrumb
                :title="startBlock ? 'Información General' : 'Actualizar Información General'"
                parent="Contenido"
                active="Información General"
              ></BreadCrumb>
            </div>
            <div class="col-6 col-md-5 text-right">
              <a
                href="#"
                class="btn btn-icon btn-inverse-primary"
                @click.prevent="editEl"
                v-if="startBlock"
              >
                <span class="btn-inner--icon">
                  <jam-info class="current-color"></jam-info>
                </span>
                <span class="btn-inner--text">Editar Información</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid mt--6">
      <div class="card mb-4" v-if="startBlock">
        <div class="card-body" v-if="!loadingGet">
          <div class="row">
            <div class="col-12 col-md-6 col-lg-4">
              <div class="form-group">
                <label class="font-weight-bold">Ubicación</label>
                <div v-if="el.location" v-html="el.location">{{ el.location }}</div>
                <p v-else>No registrado</p>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
              <div class="form-group">
                <label class="font-weight-bold">Central de Ventas</label>
                <p v-if="el.central_phone">{{ el.central_phone_formatted }}</p>
                <p v-else>No registrado</p>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
              <div class="form-group">
                <label class="font-weight-bold">Oficina Principal</label>
                <p v-if="el.main_office">{{ el.main_office_formatted }}</p>
                <p v-else>No registrado</p>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
              <div class="form-group">
                <label class="font-weight-bold">Email</label>
                <p v-if="el.email">{{ el.email }}</p>
                <p v-else>No registrado</p>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
              <div class="form-group">
                <label class="font-weight-bold">Link de Comprobantes Electrónicos</label>
                <p v-if="el.billing_url"><a style="text-decoration: underline;" :href="el.billing_url" target="_blank">{{ el.billing_url }}</a></p>
                <p v-else>No registrado</p>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
              <div class="form-group">
                <label class="font-weight-bold">Link de Trabaja con Nosotros</label>
                <p v-if="el.link_jobs"><a style="text-decoration: underline;" :href="el.link_jobs" target="_blank">{{ el.link_jobs }}</a></p>
                <p v-else>No registrado</p>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
              <div class="form-group">
                <label class="font-weight-bold">Whatsapps</label>
                <p v-if="!el.whatsapp_numbers">No registrado</p>
                <p v-else> <span class="d-block" v-for="(el2,i) in el.whatsapp_formatted" :key="i">{{ el2.department }} - {{ el2.number }}</span> </p>
              </div>
            </div>

            <div class="col-12 col-md-6 col-lg-4">
              <div class="form-group">
                <label class="font-weight-bold">Oficinas</label>
                <p v-if="!el.phone_numbers">No registrado</p>
                <p v-else> <span class="d-block" v-for="(el2,i) in el.phone_numbers_formatted" :key="i">{{ el2.department }} - {{ el2.number }}</span> </p>
              </div>
            </div>

            

          </div>
        </div>
        <div class="card-body" v-else>
          <div class="row">
            <div class="col-12 col-lg-4" v-for="i in 3" :key="i">
              <div class="w-25">
                <Skeleton height="15px" />
              </div>
              <div class="w-75">
              <Skeleton height="50px" />

              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card mb-4" v-if="editBlock">
        <div class="card-body">
          <form @submit.prevent="update">
            <div class="row">
              <div class="col-12 col-md-6 col-lg-4">
                <div class="form-group">
                  <label class="font-weight-bold" for="location">Ubicación</label>
                  <!--<textarea
                    type="text"
                    class="form-control mb-2"
                    v-model="el.location"
                    id="location"
                    rows="3"
                  ></textarea>-->
                  <quill-Editor
                  @keydown.enter.prevent
                  v-model="el.location"
                  :options="editorOptions"
                  class="ql-height-10"
                  ref="ref_content"
                ></quill-Editor>
                  <label
                    v-if="errors && errors.location"
                    class="mt-2 text-danger text-sm"
                    for="location"
                  >{{ errors.location[0] }}</label>
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-4">
                <div class="form-group">
                  <label class="font-weight-bold" for="phone">Central de Ventas</label>
                  <input type="text" class="form-control" v-model="el.central_phone" id="central_phone" />
                  <small class="form-text d-block" style="opacity: 0.7;">Ingrese un número de 7 dígitos</small>
                  <label
                    v-if="errors && errors.central_phone"
                    class="mt-2 text-danger text-sm"
                    for="central_phone"
                  >{{ errors.central_phone[0] }}</label>
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-4">
                <div class="form-group">
                  <label class="font-weight-bold" for="phone">Oficina Principal</label>
                  <input type="text" class="form-control" v-model="el.main_office" id="main_office" />
                  <small class="form-text d-block" style="opacity: 0.7;">Ingrese un número de 7 dígitos</small>
                  <label
                    v-if="errors && errors.main_office"
                    class="mt-2 text-danger text-sm"
                    for="main_office"
                  >{{ errors.main_office[0] }}</label>
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-4">
                <div class="form-group">
                  <label class="font-weight-bold" for="email">Email</label>
                  <input type="text" class="form-control" v-model="el.email" id="email" />
                  <label
                    v-if="errors && errors.email"
                    class="mt-2 text-danger text-sm"
                    for="email"
                  >{{ errors.email[0] }}</label>
                </div>
              </div>

              <div class="col-12 col-md-6 col-lg-4">
                <div class="form-group">
                  <label class="font-weight-bold" for="billing_url">Link Facturación</label>
                  <input type="text" class="form-control" v-model="el.billing_url" id="billing_url" />
                  <label
                    v-if="errors && errors.billing_url"
                    class="mt-2 text-danger text-sm"
                    for="billing_url"
                  >{{ errors.billing_url[0] }}</label>
                </div>
              </div>

              <div class="col-12 col-md-6 col-lg-4">
                <div class="form-group">
                  <label class="font-weight-bold" for="link_jobs">Link Trabaja con Nosotros</label>
                  <input type="text" class="form-control" v-model="el.link_jobs" id="link_jobs" />
                  <label
                    v-if="errors && errors.link_jobs"
                    class="mt-2 text-danger text-sm"
                    for="link_jobs"
                  >{{ errors.link_jobs[0] }}</label>
                </div>
              </div>

              <div class="col-12 col-md-6 col-lg-4">
                <InputSelectArray fieldName="whatsapp_numbers"
                :errorsProp.sync="errors"
                 :headers="[{variable: 'number', label : 'Whatsapp'},{ variable: 'department', label: 'departamento'}]"
                        :array.sync="el.whatsapp_numbers"
                        :array-prop="el.whatsapp_numbers" :selectItems="departments"/>
              </div>

              <div class="col-12 col-md-6 col-lg-4">
                <InputSelectArray fieldName="phone_numbers"
                :errorsProp.sync="errors"
                 :headers="[{variable: 'number', label : 'teléfono'},{ variable: 'department', label: 'departamento'}]"
                        :array.sync="el.phone_numbers"
                        :array-prop="el.phone_numbers" :selectItems="departments"/>
              </div>

              

              <div class="col-12 text-right">
                <Button
                  :text="'Actualizar'"
                  :classes="['btn-inverse-primary']"
                  :request-server="requestSubmit"
                ></Button>
                <button type="button" class="btn btn-secondary" @click.prevent="restore">Cancelar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Skeleton } from "vue-loading-skeleton";
import Button from "../../components/Button";
import BreadCrumb from "../../components/BreadCrumb";
import InputSelectArray from "../../components/form/InputSelectArray";
import Quill from "quill";
import PlainClipboard from "../../functions/PlainClipboard";
Quill.register("modules/clipboard", PlainClipboard, true);
import { quillEditor } from "vue-quill-editor";
export default {
  props: {
    routeGet: String,
    routeUpdate: String,
    departments: Array
  },
  components: {
    Button,
    BreadCrumb,
    Skeleton,
    InputSelectArray,
    quillEditor,
  },
  data() {
    return {
      editorOptions: {
        placeholder: "",
        modules: {
          toolbar: {
            container: [
              ["bold", "italic", "underline", "strike"],
              ["blockquote"],
              [{ header: 1 }, { header: 2 }],
              [{ list: "ordered" }, { list: "bullet" }],
              [{ indent: "-1" }, { indent: "+1" }],
              //[{ size: [false] }],
              [{ header: [1, 2, 3, 4, 5, false] }],
              //[{ font: [false] }],
              [{ color: [] }, { background: [] }],
              [{ align: [] }],
              //['clean'],
              ["link"],
            ],
          },
        },
      },
      el: {
        location: "",
        main_office: "",
         central_phone: "",
        email: "",
        //billing_url: "",
      },
      errors: {},
      requestSubmit: false,
      startBlock: true,
      editBlock: false,
      loadingGet: false
    };
  },
  methods: {
    update() {
      this.requestSubmit = true;
      axios
        .post(this.routeUpdate, this.el)
        .then((response) => {
          this.requestSubmit = false;
          this.restore();
          Swal.fire({
            title: response.data.title,
            text: response.data.message,
            type: "success",
            confirmButtonText: "Ok",
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
          this.restore();
          Swal.fire({
            title: error.response.data.title,
            text: error.response.data.message,
            type: "error",
            confirmButtonText: "Ok",
            buttonsStyling: false,
            customClass: {
              confirmButton: "btn btn-inverse-primary",
            },
          });
        });
    },
    restore() {
      this.el = {
        location: "",
        phone: "",
        email: "",
      };
      this.errors = {};
      (this.startBlock = true), (this.editBlock = false);
      this.getEl();
    },
    editEl() {
      this.startBlock = false;
      this.editBlock = true;
    },
    getEl() {
      this.loadingGet = true;
      axios
        .get(this.routeGet)
        .then((response) => {
          this.el = response.data;
          this.loadingGet = false;
        })
        .catch((error) => {});
    },
  },
  created() {
    this.getEl();
  },
};
</script>

