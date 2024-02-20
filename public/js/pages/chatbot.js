(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/pages/chatbot"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/filters/DateRange.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/filters/DateRange.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue2_datepicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue2-datepicker */ "./node_modules/vue2-datepicker/lib/index.js");
/* harmony import */ var vue2_datepicker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue2_datepicker__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    activeParent: Object,
    removeParent: String
  },
  components: {
    DatePicker: vue2_datepicker__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      range: null,
      filters: [{
        text: "Cualquier Fecha",
        value: "all"
      }, {
        text: "Hoy",
        value: "today"
      }, {
        text: "Últimos 7 días",
        value: "7"
      }, {
        text: "Últimos 30 días",
        value: "30"
      }, {
        text: "Últimos 90 días",
        value: "90"
      }, {
        text: "Este Año",
        value: "this_year"
      }],
      active: {
        text: "Cualquier Fecha",
        value: "all"
      }
    };
  },
  methods: {
    handleFilterRange: function handleFilterRange() {
      var _this = this;

      if (!this.range[0]) {
        if (this.removeParent) {
          this.active = {
            text: "Hoy",
            value: "today"
          };
        } else {
          this.active = {
            text: "Cualquier Fecha",
            value: "all"
          };
        }

        this.handleFilter(this.active);
        return false;
      }

      setTimeout(function () {
        _this.active = {
          text: _this.$refs.datepicker.text,
          value: "range"
        };
      }, 50);
      this.$refs.dropdown.hide(true);
    },
    handleFilter: function handleFilter(i) {
      this.range = [];
      this.active = i;
      this.$refs.dropdown.hide(true);
    }
  },
  watch: {
    activeParent: {
      immediate: true,
      handler: function handler(newValue) {
        if (newValue) {
          this.active = newValue;
        }
      }
    },
    removeParent: {
      immediate: true,
      handler: function handler(newValue) {
        if (newValue) {
          this.filters = this.filters.filter(function (el) {
            return el.value != newValue;
          });
        }
      }
    },
    active: function active(newValue, oldValue) {
      this.$emit("update:active", newValue);
      this.$emit("get");
    },
    range: function range(newValue, oldValue) {
      this.$emit("update:range", newValue);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/skeleton/form.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/skeleton/form.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-loading-skeleton */ "./node_modules/vue-loading-skeleton/dist/vue-loading-skeleton.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Skeleton: vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_0__["Skeleton"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Chatbot.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Chatbot.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-loading-skeleton */ "./node_modules/vue-loading-skeleton/dist/vue-loading-skeleton.esm.js");
/* harmony import */ var _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/BreadCrumb */ "./resources/js/components/BreadCrumb.vue");
/* harmony import */ var _components_DataTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/DataTable */ "./resources/js/components/DataTable.vue");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Button */ "./resources/js/components/Button.vue");
/* harmony import */ var _components_filters_DateRange__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/filters/DateRange */ "./resources/js/components/filters/DateRange.vue");
/* harmony import */ var _components_modals_Destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/modals/Destroy */ "./resources/js/components/modals/Destroy.vue");
/* harmony import */ var _components_NoData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/NoData */ "./resources/js/components/NoData.vue");
/* harmony import */ var vue2_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue2-datepicker */ "./node_modules/vue2-datepicker/lib/index.js");
/* harmony import */ var vue2_datepicker__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vue2_datepicker__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_skeleton_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/skeleton/form */ "./resources/js/components/skeleton/form.vue");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.umd.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! quill */ "./node_modules/quill/dist/quill.js");
/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(quill__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _functions_PlainClipboard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../functions/PlainClipboard */ "./resources/js/functions/PlainClipboard.js");
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vue-quill-editor */ "./node_modules/vue-quill-editor/dist/vue-quill-editor.js");
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(vue_quill_editor__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var vue_upload_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vue-upload-component */ "./node_modules/vue-upload-component/dist/vue-upload-component.js");
/* harmony import */ var vue_upload_component__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(vue_upload_component__WEBPACK_IMPORTED_MODULE_13__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





 //import Destroy from "../components/modals/Destroy";







quill__WEBPACK_IMPORTED_MODULE_10___default.a.register("modules/clipboard", _functions_PlainClipboard__WEBPACK_IMPORTED_MODULE_11__["default"], true);


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    draggable: vuedraggable__WEBPACK_IMPORTED_MODULE_9___default.a,
    DataTable: _components_DataTable__WEBPACK_IMPORTED_MODULE_2__["default"],
    Button: _components_Button__WEBPACK_IMPORTED_MODULE_3__["default"],
    BreadCrumb: _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_1__["default"],
    Skeleton: vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_0__["Skeleton"],
    DatePicker: vue2_datepicker__WEBPACK_IMPORTED_MODULE_7___default.a,
    FilterDateRange: _components_filters_DateRange__WEBPACK_IMPORTED_MODULE_4__["default"],
    Destroy: _components_modals_Destroy__WEBPACK_IMPORTED_MODULE_5__["default"],
    NoData: _components_NoData__WEBPACK_IMPORTED_MODULE_6__["default"],
    SkeletonForm: _components_skeleton_form__WEBPACK_IMPORTED_MODULE_8__["default"],
    quillEditor: vue_quill_editor__WEBPACK_IMPORTED_MODULE_12__["quillEditor"],
    FileUpload: vue_upload_component__WEBPACK_IMPORTED_MODULE_13___default.a
  },
  props: {
    routeLeadsGetAll: String,
    routeQualificationGetAll: String,
    route: String,
    routeFaqGetAll: String //allExport: String,
    //filterExport: String,

  },
  data: function data() {
    return {
      modalDestroy: false,
      loadingLead: false,
      requestLead: false,
      request_todo: false,
      request_filter: false,
      errors_form: {},
      modalExport: false,
      element_form: {},
      leads: {},
      lead: {},
      loadingLeadsGet: false,
      loadingQualification: false,
      title: "",
      elementsPerPage: 10,
      filterDate: {
        active: {},
        range: null
      },
      qualification: [],
      faqs: [],
      titleFaq: "",
      modalCreateUpdateFaq: false,
      faqElement: {},
      loadingGetFaq: false,
      requestSubmitFaq: false,
      errorsFaq: {},
      modalDestroyFaq: false,
      editorOptions: {
        placeholder: "",
        modules: {
          toolbar: {
            handlers: {
              image: function image(value) {
                document.getElementById("id_content_images").click();
              }
            },
            container: [["bold", "italic", "underline", "strike"], ["blockquote"], [{
              header: 1
            }, {
              header: 2
            }], [{
              list: "ordered"
            }, {
              list: "bullet"
            }], [{
              indent: "-1"
            }, {
              indent: "+1"
            }], //[{ size: [false] }],
            [{
              header: [1, 2, 3, 4, 5, false]
            }], //[{ font: [false] }],
            [{
              color: []
            }, {
              background: []
            }], [{
              align: []
            }], //['clean'],
            ["link", "video", 'image']]
          }
        }
      }
    };
  },
  methods: {
    restoreLeads: function restoreLeads() {
      this.lead = {};
      this.modalDestroy = false;
      this.getLeads(1, this.elementsPerPage);
    },
    destroyLeadConfirm: function destroyLeadConfirm() {
      var _this = this;

      this.requestLead = true;
      axios["delete"]("/chatbot/leads/" + this.lead.id).then(function (response) {
        _this.requestLead = false;

        _this.restoreLeads();

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
      })["catch"](function (error) {
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

        _this.restoreEl();
      });
    },
    openModalExport: function openModalExport() {
      this.modalExport = true;
    },
    restoreEl: function restoreEl() {
      this.lead = {};
      this.modalDestroy = false;
      this.modalExport = false;
    },
    allExportFunction: function allExportFunction() {
      var _this2 = this;

      this.request_todo = true;
      axios.get("/chatbot/leads/all-export", {
        headers: {
          "Content-Disposition": "attachment; filename=template.xlsx",
          //no es tan necesario, lo quité y siguio funcionando
          "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" //no es tan necesario, lo quité y siguio funcionando

        },
        responseType: "arraybuffer" //necesaario

      }).then(function (response) {
        var downloadUrl = window.URL.createObjectURL(new Blob([response.data]));
        var link = document.createElement("a");
        link.href = downloadUrl;
        link.setAttribute("download", "Líder Leads Chatbot.xlsx");
        document.body.appendChild(link);
        link.click();
        link.remove();
        _this2.request_todo = false;

        _this2.restoreEl();
      })["catch"](function (error) {
        _this2.request_todo = false;

        if (error.response.status === 422) {
          _this2.errors_form = error.response.data.errors || {};
          return;
        }
      });
    },
    filterExportFunction: function filterExportFunction() {
      var _this3 = this;

      this.request_filter = true;
      var fd = new FormData();

      if (this.element_form.from) {
        fd.append("from", this.element_form.from);
      }

      if (this.element_form.to) {
        fd.append("to", this.element_form.to);
      }

      axios.post("/chatbot/leads/filter-export", fd, {
        headers: {
          "Content-Disposition": "attachment; filename=template.xlsx",
          //no es tan necesario, lo quité y siguio funcionando
          "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" //no es tan necesario, lo quité y siguio funcionando

        },
        responseType: "arraybuffer" //necesaario

      }).then(function (response) {
        var downloadUrl = window.URL.createObjectURL(new Blob([response.data]));
        var link = document.createElement("a");
        link.href = downloadUrl;
        link.setAttribute("download", "Líder Leads Chatbot.xlsx");
        document.body.appendChild(link);
        link.click();
        link.remove();
        _this3.request_filter = false;

        _this3.restoreEl();
      })["catch"](function (error) {
        _this3.request_filter = false;

        if (error.response.status === 422) {
          _this3.errors_form = {
            from: [],
            to: []
          };

          if (_this3.element_form.from == "" || _this3.element_form.from == null) {
            _this3.errors_form.from = ["El campo desde es requerido"];
          }

          if (_this3.element_form.to == "" || _this3.element_form.to == null) {
            _this3.errors_form.to = ["El campo hasta es requerido"];
          }

          console.log(_this3.errors_form);
          return;
        }
      });
    },
    getLeads: function getLeads(page, itemsPerPage) {
      var _this4 = this;

      var q = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var url = this.routeLeadsGetAll + "?page=" + page + "&itemsPerPage=" + itemsPerPage;

      if (q) {
        url = url + "&q=" + q;
      }

      axios.get(url).then(function (response) {
        _this4.leads = response.data;
      })["catch"](function (error) {});
    },
    getQualification: function getQualification() {
      var _this5 = this;

      this.loadingQualification = true;
      var url = this.routeQualificationGetAll;
      axios.get(url, {
        params: _objectSpread({
          date: this.filterDate.active.value
        }, this.filterDate.range ? {
          range: this.filterDate.range
        } : {})
      }).then(function (response) {
        _this5.qualification = response.data;
        _this5.loadingQualification = false;
      })["catch"](function (error) {});
    },
    deleteLead: function deleteLead(id) {
      this.modalDestroy = true;
      this.getLead(id);
    },
    getLead: function getLead(id) {
      var _this6 = this;

      this.loadingGet = true;
      axios.get(this.route + "/leads/json/get/" + id).then(function (response) {
        _this6.lead = response.data;
        _this6.loadingGet = false;
      })["catch"](function (error) {});
    },
    getFaqs: function getFaqs() {
      var _this7 = this;

      this.loadingFaq = true;
      var url = this.routeFaqGetAll;
      axios.get(url).then(function (response) {
        _this7.faqs = response.data;
        _this7.loadingFaq = false;
      })["catch"](function (error) {});
    },
    newFaq: function newFaq() {
      this.titleFaq = "Nueva";
      this.modalCreateUpdateFaq = true;
    },
    submitFaq: function submitFaq() {
      var _this8 = this;

      this.requestSubmitFaq = true;
      var url;
      var method;
      var fd = new FormData();

      if (this.titleFaq == "Nueva") {
        url = "/chatbot/faq";
        method = "post";
      } else {
        url = "/chatbot/faq" + "/" + this.faqElement.id;
        method = "post";
        fd.append("_method", "put");
      }

      if (this.faqElement.question) {
        fd.append("question", this.faqElement.question);
      }

      if (this.faqElement.answer) {
        fd.append("answer", this.faqElement.answer);
      }

      axios({
        method: method,
        url: url,
        data: fd
      }).then(function (response) {
        _this8.requestSubmitFaq = false;
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

        _this8.restoreFaq();
      })["catch"](function (error) {
        _this8.requestSubmitFaq = false;

        if (error.response.status === 422) {
          _this8.errorsFaq = error.response.data.errors || {};
          return;
        }

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

        _this8.restoreElFaq();
      });
    },
    restoreElFaq: function restoreElFaq() {
      this.faqElement = {};
      this.errorsFaq = {};
      this.titleFaq = "";
      this.modalDestroyFaq = false;
      this.modalCreateUpdateFaq = false;
    },
    restoreFaq: function restoreFaq() {
      this.requestSubmitFaq = false;
      this.loadingGetFaq = false;
      this.errorsFaq = {};
      this.titleFaq = "";
      this.faqElement = {};
      this.modalCreateUpdateFaq = false;
      this.modalDestroyFaq = false;
      this.getFaqs();
    },
    editFaq: function editFaq(id) {
      this.titleFaq = "Actualizar";
      this.modalCreateUpdateFaq = true;
      this.getFaq(id);
    },
    getFaq: function getFaq(id) {
      var _this9 = this;

      this.loadingGetFaq = true;
      axios.get("/chatbot/faq/json/get/" + id).then(function (response) {
        _this9.faqElement = response.data;
        _this9.loadingGetFaq = false;
      })["catch"](function (error) {});
    },
    deleteFaq: function deleteFaq(id) {
      this.modalDestroyFaq = true;
      this.getFaq(id);
    },
    destroyFaqConfirm: function destroyFaqConfirm() {
      var _this10 = this;

      this.requestSubmitFaq = true;
      axios["delete"]("/chatbot/faq/delete/" + this.faqElement.id).then(function (response) {
        _this10.requestSubmitFaq = false;

        _this10.restoreFaq();

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
      })["catch"](function (error) {
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

        _this10.restoreElFaq();
      });
    },
    handleChangeFaq: function handleChangeFaq() {
      var _this11 = this;

      axios.put("/chatbot/faq/order", this.faqs).then(function (response) {
        _this11.restoreFaq();

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
      })["catch"](function (error) {
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
    }
  },
  created: function created() {
    //this.getLeads(1, this.elementsPerPage);
    this.getQualification();
    this.getFaqs();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Chatbot.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Chatbot.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.nav-pills .nav-link.active {\n  border-left: 4px solid #1762e6 !important;\n  background-color: #fdfbfa !important;\n}\n.ql-tooltip.ql-editing{\n  left: 0 !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Chatbot.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Chatbot.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Chatbot.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Chatbot.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/filters/DateRange.vue?vue&type=template&id=52dcee80&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/filters/DateRange.vue?vue&type=template&id=52dcee80& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {},
    [
      _c(
        "b-dropdown",
        {
          ref: "dropdown",
          attrs: {
            left: "",
            id: "dropdown-text",
            "menu-class": ["border", "shadow-none"],
            variant:
              _vm.active.value == "all" ? "inverse-light" : "inverse-primary",
            "toggle-class": []
          },
          scopedSlots: _vm._u([
            {
              key: "button-content",
              fn: function() {
                return [
                  _c("jam-calendar", {
                    staticClass: "current-color",
                    staticStyle: { "margin-top": "-4px" },
                    attrs: { height: "18px", width: "18px" }
                  }),
                  _vm._v(" "),
                  _c("span", {}, [_vm._v(_vm._s(_vm.active.text))])
                ]
              },
              proxy: true
            }
          ])
        },
        [
          _vm._v(" "),
          _c(
            "b-dropdown-text",
            {
              staticClass: "px-2",
              staticStyle: { width: "16rem" },
              attrs: { tag: "div" }
            },
            [
              _vm._l(_vm.filters, function(i) {
                return _c(
                  "button",
                  {
                    key: i.value,
                    staticClass: "btn mb-1 btn-sm btn-block",
                    class:
                      _vm.active.value == i.value
                        ? "btn-primary"
                        : "btn-inverse-primary",
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.handleFilter(i)
                      }
                    }
                  },
                  [_vm._v(_vm._s(i.text))]
                )
              }),
              _vm._v(" "),
              _c(
                "date-picker",
                {
                  ref: "datepicker",
                  attrs: {
                    placeholder: "Personalizado",
                    shortcuts: [],
                    lang: "es",
                    "input-class": "form-control mt-1",
                    format: "D MMM YYYY",
                    "range-separator": "-",
                    width: "100%",
                    range: ""
                  },
                  on: { change: _vm.handleFilterRange },
                  model: {
                    value: _vm.range,
                    callback: function($$v) {
                      _vm.range = $$v
                    },
                    expression: "range"
                  }
                },
                [
                  _c("jam-calendar", {
                    staticClass: "current-color mt-2",
                    attrs: { slot: "calendar-icon", height: "18", width: "18" },
                    slot: "calendar-icon"
                  })
                ],
                1
              )
            ],
            2
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/skeleton/form.vue?vue&type=template&id=8df953ea&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/skeleton/form.vue?vue&type=template&id=8df953ea& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "w-25 mb-2" }, [_c("Skeleton")], 1),
    _vm._v(" "),
    _c("div", { staticClass: "mb-2" }, [_c("Skeleton")], 1),
    _vm._v(" "),
    _c("div", { staticClass: "w-25 mb-2" }, [_c("Skeleton")], 1),
    _vm._v(" "),
    _c("div", { staticClass: "mb-2" }, [_c("Skeleton")], 1),
    _vm._v(" "),
    _c("div", { staticClass: "w-25 mb-2" }, [_c("Skeleton")], 1),
    _vm._v(" "),
    _c("div", { staticClass: "mb-2" }, [_c("Skeleton")], 1),
    _vm._v(" "),
    _c("div", { staticClass: "w-25 mb-2" }, [_c("Skeleton")], 1),
    _vm._v(" "),
    _c("div", { staticClass: "mb-2" }, [_c("Skeleton")], 1),
    _vm._v(" "),
    _c("div", { staticClass: "text-right" }, [
      _c("div", { staticClass: "w-25 ml-auto" }, [_c("Skeleton")], 1)
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Chatbot.vue?vue&type=template&id=31765020&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Chatbot.vue?vue&type=template&id=31765020& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("div", { staticClass: "header pb-6" }, [
        _c("div", { staticClass: "container-fluid" }, [
          _c("div", { staticClass: "header-body" }, [
            _c(
              "div",
              { staticClass: "row align-items-center pt-0 pt-md-2 pb-4" },
              [
                _c(
                  "div",
                  { staticClass: "col-6 col-md-7" },
                  [
                    _c("BreadCrumb", {
                      attrs: { title: "Chatbot", active: "Chatbot" }
                    })
                  ],
                  1
                )
              ]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "container-fluid mt--6" },
        [
          _c(
            "b-tabs",
            {
              attrs: {
                pills: "",
                vertical: "",
                "nav-wrapper-class": "col-12 col-lg-3 col-xl-2 mb-4 mb-lg-0",
                "nav-class": "border bg-white py-2",
                "content-class": "col-12 col-lg-9 col-xl-10"
              }
            },
            [
              _c(
                "b-tab",
                {
                  attrs: {
                    title: "Calificaciones",
                    "title-link-class": "border-0 shadow-none bg-white py-3",
                    "title-item-class": "pr-0 my-0"
                  }
                },
                [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-12" }, [
                      _c("div", { staticClass: "card" }, [
                        _c(
                          "div",
                          { staticClass: "card-header border-0 pb-0" },
                          [
                            _c(
                              "h2",
                              {
                                staticClass: "mb-0 text-uppercase text-primary"
                              },
                              [
                                _vm._v(
                                  "\n                  Calificaciones\n                "
                                )
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "card-body" }, [
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-12" },
                              [
                                _c("FilterDateRange", {
                                  attrs: {
                                    active: _vm.filterDate.active,
                                    range: _vm.filterDate.range
                                  },
                                  on: {
                                    "update:active": function($event) {
                                      return _vm.$set(
                                        _vm.filterDate,
                                        "active",
                                        $event
                                      )
                                    },
                                    "update:range": function($event) {
                                      return _vm.$set(
                                        _vm.filterDate,
                                        "range",
                                        $event
                                      )
                                    },
                                    get: function($event) {
                                      return _vm.getQualification()
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("div", { staticClass: "mt-4" }, [
                                  _vm.loadingQualification
                                    ? _c(
                                        "div",
                                        {
                                          staticStyle: {
                                            width: "300px",
                                            display: "inline-block"
                                          }
                                        },
                                        [
                                          _c("skeleton", {
                                            attrs: { height: "320px" }
                                          })
                                        ],
                                        1
                                      )
                                    : _c(
                                        "table",
                                        {
                                          staticClass: "table table-bordered",
                                          staticStyle: { width: "300px" }
                                        },
                                        _vm._l(_vm.qualification, function(el) {
                                          return _c("tr", { key: el.name }, [
                                            _c(
                                              "td",
                                              {
                                                staticStyle: {
                                                  background: "#fdfbfa"
                                                }
                                              },
                                              [
                                                _c("strong", [
                                                  _vm._v(_vm._s(el.name))
                                                ])
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "td",
                                              { staticClass: "text-center" },
                                              [
                                                _vm._v(
                                                  "\n                            " +
                                                    _vm._s(el.count) +
                                                    "\n                          "
                                                )
                                              ]
                                            )
                                          ])
                                        }),
                                        0
                                      )
                                ])
                              ],
                              1
                            )
                          ])
                        ])
                      ])
                    ])
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "b-tab",
                {
                  attrs: {
                    title: "FAQ",
                    "title-link-class": "border-0 shadow-none bg-white py-3",
                    "title-item-class": "pr-0 my-0"
                  }
                },
                [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-6 col-md-7" }, [
                      _c("h2", { staticClass: "text-uppercase text-primary" }, [
                        _vm._v("FAQ")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "text-right col-6 col-md-5" }, [
                      _c(
                        "a",
                        {
                          staticClass: "btn btn-icon btn-inverse-primary",
                          attrs: { href: "#" },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.newFaq.apply(null, arguments)
                            }
                          }
                        },
                        [
                          _c(
                            "span",
                            { staticClass: "btn-inner--icon" },
                            [_c("jam-info", { staticClass: "current-color" })],
                            1
                          ),
                          _vm._v(" "),
                          _c("span", { staticClass: "btn-inner--text" }, [
                            _vm._v("Nueva Pregunta")
                          ])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _vm.faqs.length
                      ? _c("div", { staticClass: "col-12" }, [
                          _c("div", { staticClass: "row mb-4 mt-4" }, [
                            _c("div", { staticClass: "col-8" }, [
                              _c("p", { staticClass: "mb-0" }, [
                                _vm._v(
                                  "\n                  Arrastre los elementos en el orden que desee mostrarlos\n                "
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-4" }, [
                              _c("div", { staticClass: "text-right" }, [
                                _vm._v(
                                  _vm._s(_vm.faqs.length) + " registrado(s)"
                                )
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "mt-4" },
                            [
                              _c(
                                "draggable",
                                {
                                  on: { change: _vm.handleChangeFaq },
                                  model: {
                                    value: _vm.faqs,
                                    callback: function($$v) {
                                      _vm.faqs = $$v
                                    },
                                    expression: "faqs"
                                  }
                                },
                                _vm._l(_vm.faqs, function(el) {
                                  return _c(
                                    "div",
                                    { key: el.id, staticClass: "card mb-4" },
                                    [
                                      _c("div", { staticClass: "card-body" }, [
                                        _c(
                                          "div",
                                          { staticClass: "form-group" },
                                          [
                                            _c(
                                              "span",
                                              {
                                                staticClass:
                                                  "font-weight-bold d-block"
                                              },
                                              [_vm._v("Pregunta")]
                                            ),
                                            _vm._v(" "),
                                            _c("p", [
                                              _vm._v(
                                                "\n                        " +
                                                  _vm._s(el.question) +
                                                  "\n                      "
                                              )
                                            ])
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "form-group mb-0" },
                                          [
                                            _c(
                                              "div",
                                              {
                                                directives: [
                                                  {
                                                    name: "show",
                                                    rawName: "v-show",
                                                    value: el.seen,
                                                    expression: "el.seen"
                                                  }
                                                ],
                                                staticClass: "mb-4"
                                              },
                                              [
                                                _c(
                                                  "label",
                                                  {
                                                    staticClass:
                                                      "form-control-label d-block"
                                                  },
                                                  [_vm._v("Respuesta")]
                                                ),
                                                _vm._v(" "),
                                                el.answer
                                                  ? _c("div", {
                                                      staticClass:
                                                        "content-body",
                                                      domProps: {
                                                        innerHTML: _vm._s(
                                                          el.answer
                                                        )
                                                      }
                                                    })
                                                  : _vm._e()
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c("div", [
                                              _c(
                                                "button",
                                                {
                                                  staticClass:
                                                    "btn btn-link text-primary",
                                                  staticStyle: {
                                                    padding: "0",
                                                    "text-decoration":
                                                      "underline"
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      el.seen = !el.seen
                                                    }
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                          " +
                                                      _vm._s(
                                                        el.seen
                                                          ? "Ocultar"
                                                          : "Mostrar"
                                                      ) +
                                                      " Respuesta\n                        "
                                                  )
                                                ]
                                              )
                                            ])
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "col-12 mt-4 text-center"
                                          },
                                          [
                                            _c(
                                              "button",
                                              {
                                                staticClass:
                                                  "btn btn-inverse-info btn-sm",
                                                on: {
                                                  click: function($event) {
                                                    return _vm.editFaq(el.id)
                                                  }
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  "\n                        Editar\n                      "
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "button",
                                              {
                                                staticClass:
                                                  "btn btn-inverse-danger btn-sm",
                                                on: {
                                                  click: function($event) {
                                                    return _vm.deleteFaq(el.id)
                                                  }
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  "\n                        Eliminar\n                      "
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      ])
                                    ]
                                  )
                                }),
                                0
                              )
                            ],
                            1
                          )
                        ])
                      : _c(
                          "div",
                          { staticClass: "col-12 mt-4" },
                          [_c("NoData")],
                          1
                        )
                  ])
                ]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            "no-close-on-esc": "",
            "no-close-on-backdrop": "",
            centered: "",
            size: "lg",
            "footer-class": "border-0 pt-0",
            "body-class": "pt-0"
          },
          on: { close: _vm.restoreEl },
          scopedSlots: _vm._u([
            {
              key: "modal-footer",
              fn: function(ref) {
                var ok = ref.ok
                return [
                  _c("Button", {
                    attrs: {
                      classes: ["btn-inverse-primary"],
                      text: _vm.titleFaq == "Nueva" ? "Crear" : "Actualizar",
                      "request-server": _vm.requestSubmitFaq
                    },
                    on: { click: _vm.submitFaq }
                  }),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-secondary",
                      attrs: { type: "button" },
                      on: { click: _vm.restoreElFaq }
                    },
                    [_vm._v("\n        Cancelar\n      ")]
                  )
                ]
              }
            }
          ]),
          model: {
            value: _vm.modalCreateUpdateFaq,
            callback: function($$v) {
              _vm.modalCreateUpdateFaq = $$v
            },
            expression: "modalCreateUpdateFaq"
          }
        },
        [
          _c("template", { slot: "modal-title" }, [
            _c("div", { staticClass: "text-primary h2" }, [
              _vm._v(_vm._s(_vm.titleFaq) + " Pregunta")
            ])
          ]),
          _vm._v(" "),
          _c("template", { slot: "modal-header-close" }, [
            _c(
              "button",
              {
                staticClass: "btn p-0 bg-transparent",
                attrs: { type: "button" },
                on: { click: _vm.restoreElFaq }
              },
              [_c("jam-close")],
              1
            )
          ]),
          _vm._v(" "),
          _vm.loadingGetFaq
            ? _c("div", [_c("SkeletonForm")], 1)
            : _c("div", [
                _c(
                  "form",
                  {
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.submitFaq.apply(null, arguments)
                      }
                    }
                  },
                  [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-12" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticClass: "font-weight-bold",
                              attrs: { for: "question" }
                            },
                            [_vm._v("Pregunta")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.faqElement.question,
                                expression: "faqElement.question"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", id: "question" },
                            domProps: { value: _vm.faqElement.question },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.faqElement,
                                  "question",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.errorsFaq && _vm.errorsFaq.question
                            ? _c(
                                "label",
                                {
                                  staticClass: "mt-2 text-danger text-sm",
                                  attrs: { for: "question" }
                                },
                                [_vm._v(_vm._s(_vm.errorsFaq.question[0]))]
                              )
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c(
                              "label",
                              {
                                staticClass: "font-weight-bold",
                                attrs: { for: "answer" }
                              },
                              [_vm._v("Respuesta")]
                            ),
                            _vm._v(" "),
                            _c("quill-Editor", {
                              ref: "ref_content",
                              staticClass: "ql-height-50",
                              attrs: { options: _vm.editorOptions },
                              on: {
                                keydown: function($event) {
                                  if (
                                    !$event.type.indexOf("key") &&
                                    _vm._k(
                                      $event.keyCode,
                                      "enter",
                                      13,
                                      $event.key,
                                      "Enter"
                                    )
                                  ) {
                                    return null
                                  }
                                  $event.preventDefault()
                                }
                              },
                              model: {
                                value: _vm.faqElement.answer,
                                callback: function($$v) {
                                  _vm.$set(_vm.faqElement, "answer", $$v)
                                },
                                expression: "faqElement.answer"
                              }
                            }),
                            _vm._v(" "),
                            _c("file-upload", {
                              ref: "ref_content_f",
                              staticClass: "d-none",
                              attrs: {
                                extensions: "jpg,jpeg,png",
                                accept: "image/png, image/jpeg, image/jpg",
                                drop: false,
                                multiple: true,
                                "input-id": "id_content_images"
                              },
                              on: {
                                "input-filter": function($event) {
                                  return _vm.$uploadImageUploadComponent(
                                    $event,
                                    _vm.$refs.ref_content,
                                    250000,
                                    "250kb",
                                    "/chatbot/faq/image"
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errorsFaq && _vm.errorsFaq.answer
                              ? _c(
                                  "label",
                                  {
                                    staticClass: "mt-2 text-danger text-sm",
                                    attrs: { for: "answer" }
                                  },
                                  [_vm._v(_vm._s(_vm.errorsFaq.answer[0]))]
                                )
                              : _vm._e()
                          ],
                          1
                        )
                      ])
                    ])
                  ]
                )
              ])
        ],
        2
      ),
      _vm._v(" "),
      _c("destroy", {
        attrs: {
          element: "lead",
          open: _vm.modalDestroy,
          "loading-get": _vm.loadingLead,
          "loading-submit": _vm.requestLead
        },
        on: { cancel: _vm.restoreLeads, submit: _vm.destroyLeadConfirm }
      }),
      _vm._v(" "),
      _c("destroy", {
        attrs: {
          element: "pregunta",
          open: _vm.modalDestroyFaq,
          "loading-get": _vm.loadingGetFaq,
          "loading-submit": _vm.requestSubmitFaq
        },
        on: { cancel: _vm.restoreElFaq, submit: _vm.destroyFaqConfirm }
      }),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            "no-close-on-esc": "",
            "no-close-on-backdrop": "",
            centered: "",
            size: "md",
            "footer-class": "border-0 pt-0",
            "body-class": "pt-0"
          },
          on: { close: _vm.restoreEl },
          scopedSlots: _vm._u([
            {
              key: "modal-footer",
              fn: function(ref) {
                var ok = ref.ok
                return [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-inverse-primary",
                      attrs: { type: "button", disabled: _vm.request_todo },
                      on: { click: _vm.allExportFunction }
                    },
                    [
                      _vm.request_todo
                        ? _c("span", [
                            _vm._v("\n          Cargando\n          "),
                            _c(
                              "svg",
                              {
                                staticClass: "ml-1 loading-svg",
                                attrs: {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "20",
                                  height: "20",
                                  viewBox: "0 0 40 40"
                                }
                              },
                              [
                                _c(
                                  "g",
                                  {
                                    attrs: {
                                      fill: "none",
                                      "fill-rule": "evenodd"
                                    }
                                  },
                                  [
                                    _c(
                                      "g",
                                      {
                                        attrs: {
                                          transform: "translate(1 1)",
                                          "stroke-width": "3"
                                        }
                                      },
                                      [
                                        _c("circle", {
                                          attrs: {
                                            "stroke-opacity": "1",
                                            cx: "0",
                                            cy: "0",
                                            r: "0"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "path",
                                          {
                                            attrs: {
                                              d: "M36 18c0-9.94-8.06-18-18-18",
                                              transform: "rotate(83.9974 18 18)"
                                            }
                                          },
                                          [
                                            _c("animateTransform", {
                                              attrs: {
                                                attributeName: "transform",
                                                type: "rotate",
                                                from: "0 18 18",
                                                to: "360 18 18",
                                                dur: "1s",
                                                repeatCount: "indefinite"
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      ]
                                    )
                                  ]
                                )
                              ]
                            )
                          ])
                        : _c("span", [_vm._v("Todo")])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-inverse-info",
                      attrs: { type: "button", disabled: _vm.request_filter },
                      on: { click: _vm.filterExportFunction }
                    },
                    [
                      _vm.request_filter
                        ? _c("span", [
                            _vm._v("\n          Cargando\n          "),
                            _c(
                              "svg",
                              {
                                staticClass: "ml-1 loading-svg",
                                attrs: {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "20",
                                  height: "20",
                                  viewBox: "0 0 40 40"
                                }
                              },
                              [
                                _c(
                                  "g",
                                  {
                                    attrs: {
                                      fill: "none",
                                      "fill-rule": "evenodd"
                                    }
                                  },
                                  [
                                    _c(
                                      "g",
                                      {
                                        attrs: {
                                          transform: "translate(1 1)",
                                          "stroke-width": "3"
                                        }
                                      },
                                      [
                                        _c("circle", {
                                          attrs: {
                                            "stroke-opacity": "1",
                                            cx: "0",
                                            cy: "0",
                                            r: "0"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "path",
                                          {
                                            attrs: {
                                              d: "M36 18c0-9.94-8.06-18-18-18",
                                              transform: "rotate(83.9974 18 18)"
                                            }
                                          },
                                          [
                                            _c("animateTransform", {
                                              attrs: {
                                                attributeName: "transform",
                                                type: "rotate",
                                                from: "0 18 18",
                                                to: "360 18 18",
                                                dur: "1s",
                                                repeatCount: "indefinite"
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      ]
                                    )
                                  ]
                                )
                              ]
                            )
                          ])
                        : _c("span", [_vm._v("Con Filtros")])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-inverse-light",
                      attrs: { type: "button" },
                      on: { click: _vm.restoreEl }
                    },
                    [_vm._v("\n        Cerrar\n      ")]
                  )
                ]
              }
            }
          ]),
          model: {
            value: _vm.modalExport,
            callback: function($$v) {
              _vm.modalExport = $$v
            },
            expression: "modalExport"
          }
        },
        [
          _c("template", { slot: "modal-title" }, [
            _c("div", { staticClass: "text-primary h2" }, [
              _vm._v("Exportar Leads")
            ])
          ]),
          _vm._v(" "),
          _c("template", { slot: "modal-header-close" }, [
            _c(
              "button",
              {
                staticClass: "btn p-0 bg-transparent",
                attrs: { type: "button" },
                on: { click: _vm.restoreEl }
              },
              [_c("jam-close")],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-12" }, [
              _c(
                "div",
                { staticClass: "form-group" },
                [
                  _c(
                    "label",
                    { staticClass: "font-weight-bold", attrs: { for: "from" } },
                    [_vm._v("Desde")]
                  ),
                  _vm._v(" "),
                  _c(
                    "date-picker",
                    {
                      attrs: {
                        "input-attr": { id: "from" },
                        "value-type": "format",
                        format: "HH:mm DD-MM-YYYY",
                        type: "datetime",
                        "time-picker-options": {
                          start: "06:00",
                          step: "00:05",
                          end: "24:00"
                        },
                        "first-day-of-week": 1,
                        lang: "es",
                        "input-class": "form-control",
                        width: "100%"
                      },
                      model: {
                        value: _vm.element_form.from,
                        callback: function($$v) {
                          _vm.$set(_vm.element_form, "from", $$v)
                        },
                        expression: "element_form.from"
                      }
                    },
                    [_c("jam-calendar")],
                    1
                  ),
                  _vm._v(" "),
                  _vm.errors_form && _vm.errors_form.from
                    ? _c(
                        "label",
                        {
                          staticClass: "mt-2 text-danger text-sm",
                          attrs: { for: "from" }
                        },
                        [_vm._v(_vm._s(_vm.errors_form.from[0]))]
                      )
                    : _vm._e()
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-12" }, [
              _c(
                "div",
                { staticClass: "form-group" },
                [
                  _c(
                    "label",
                    { staticClass: "font-weight-bold", attrs: { for: "to" } },
                    [_vm._v("Hasta")]
                  ),
                  _vm._v(" "),
                  _c(
                    "date-picker",
                    {
                      attrs: {
                        "input-attr": { id: "to" },
                        "value-type": "format",
                        format: "HH:mm DD-MM-YYYY",
                        type: "datetime",
                        "time-picker-options": {
                          start: "06:00",
                          step: "00:05",
                          end: "24:00"
                        },
                        "first-day-of-week": 1,
                        lang: "es",
                        "input-class": "form-control",
                        width: "100%"
                      },
                      model: {
                        value: _vm.element_form.to,
                        callback: function($$v) {
                          _vm.$set(_vm.element_form, "to", $$v)
                        },
                        expression: "element_form.to"
                      }
                    },
                    [_c("jam-calendar")],
                    1
                  ),
                  _vm._v(" "),
                  _vm.errors_form && _vm.errors_form.to
                    ? _c(
                        "label",
                        {
                          staticClass: "mt-2 text-danger text-sm",
                          attrs: { for: "to" }
                        },
                        [_vm._v(_vm._s(_vm.errors_form.to[0]))]
                      )
                    : _vm._e()
                ],
                1
              )
            ])
          ])
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/filters/DateRange.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/filters/DateRange.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DateRange_vue_vue_type_template_id_52dcee80___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DateRange.vue?vue&type=template&id=52dcee80& */ "./resources/js/components/filters/DateRange.vue?vue&type=template&id=52dcee80&");
/* harmony import */ var _DateRange_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DateRange.vue?vue&type=script&lang=js& */ "./resources/js/components/filters/DateRange.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DateRange_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DateRange_vue_vue_type_template_id_52dcee80___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DateRange_vue_vue_type_template_id_52dcee80___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/filters/DateRange.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/filters/DateRange.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/filters/DateRange.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DateRange_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DateRange.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/filters/DateRange.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DateRange_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/filters/DateRange.vue?vue&type=template&id=52dcee80&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/filters/DateRange.vue?vue&type=template&id=52dcee80& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DateRange_vue_vue_type_template_id_52dcee80___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DateRange.vue?vue&type=template&id=52dcee80& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/filters/DateRange.vue?vue&type=template&id=52dcee80&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DateRange_vue_vue_type_template_id_52dcee80___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DateRange_vue_vue_type_template_id_52dcee80___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/skeleton/form.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/skeleton/form.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_vue_vue_type_template_id_8df953ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=8df953ea& */ "./resources/js/components/skeleton/form.vue?vue&type=template&id=8df953ea&");
/* harmony import */ var _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js& */ "./resources/js/components/skeleton/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_vue_vue_type_template_id_8df953ea___WEBPACK_IMPORTED_MODULE_0__["render"],
  _form_vue_vue_type_template_id_8df953ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/skeleton/form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/skeleton/form.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/skeleton/form.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/skeleton/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/skeleton/form.vue?vue&type=template&id=8df953ea&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/skeleton/form.vue?vue&type=template&id=8df953ea& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_8df953ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=template&id=8df953ea& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/skeleton/form.vue?vue&type=template&id=8df953ea&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_8df953ea___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_8df953ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/functions/PlainClipboard.js":
/*!**************************************************!*\
  !*** ./resources/js/functions/PlainClipboard.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! quill */ "./node_modules/quill/dist/quill.js");
/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(quill__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var Clipboard = quill__WEBPACK_IMPORTED_MODULE_0___default.a["import"]('modules/clipboard');
var Delta = quill__WEBPACK_IMPORTED_MODULE_0___default.a["import"]('delta');

var PlainClipboard = /*#__PURE__*/function (_Clipboard) {
  _inherits(PlainClipboard, _Clipboard);

  var _super = _createSuper(PlainClipboard);

  function PlainClipboard() {
    _classCallCheck(this, PlainClipboard);

    return _super.apply(this, arguments);
  }

  _createClass(PlainClipboard, [{
    key: "onPaste",
    value: function onPaste(e) {
      e.preventDefault();
      var range = this.quill.getSelection();
      var text = e.clipboardData.getData('text/plain');
      var delta = new Delta().retain(range.index)["delete"](range.length).insert(text);
      var index = text.length + range.index;
      var length = 0;
      this.quill.updateContents(delta, 'silent');
      this.quill.setSelection(index, length, 'silent');
      this.quill.scrollIntoView();
      var length2 = this.quill.getSelection().index;
      this.quill.insertText(length2, ' ', '', true);
    }
  }]);

  return PlainClipboard;
}(Clipboard);

/* harmony default export */ __webpack_exports__["default"] = (PlainClipboard);

/***/ }),

/***/ "./resources/js/views/Chatbot.vue":
/*!****************************************!*\
  !*** ./resources/js/views/Chatbot.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Chatbot_vue_vue_type_template_id_31765020___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Chatbot.vue?vue&type=template&id=31765020& */ "./resources/js/views/Chatbot.vue?vue&type=template&id=31765020&");
/* harmony import */ var _Chatbot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Chatbot.vue?vue&type=script&lang=js& */ "./resources/js/views/Chatbot.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Chatbot_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Chatbot.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/Chatbot.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Chatbot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Chatbot_vue_vue_type_template_id_31765020___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Chatbot_vue_vue_type_template_id_31765020___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Chatbot.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Chatbot.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/views/Chatbot.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chatbot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Chatbot.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Chatbot.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chatbot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Chatbot.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/Chatbot.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chatbot_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Chatbot.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Chatbot.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chatbot_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chatbot_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chatbot_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chatbot_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/Chatbot.vue?vue&type=template&id=31765020&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/Chatbot.vue?vue&type=template&id=31765020& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chatbot_vue_vue_type_template_id_31765020___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Chatbot.vue?vue&type=template&id=31765020& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Chatbot.vue?vue&type=template&id=31765020&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chatbot_vue_vue_type_template_id_31765020___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chatbot_vue_vue_type_template_id_31765020___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);