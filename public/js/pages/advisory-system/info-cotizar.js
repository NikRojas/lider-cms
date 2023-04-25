(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/pages/advisory-system/info-cotizar"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/advisory-system/infoCotizar/Index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/advisory-system/infoCotizar/Index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/BreadCrumb */ "./resources/js/components/BreadCrumb.vue");
/* harmony import */ var _Steps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Steps */ "./resources/js/views/advisory-system/infoCotizar/Steps.vue");
/* harmony import */ var _Navs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navs */ "./resources/js/views/advisory-system/infoCotizar/Navs.vue");
//
//
//
//
//
//
//
//
//
//
//
//
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
    BreadCrumb: _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_0__["default"],
    Steps: _Steps__WEBPACK_IMPORTED_MODULE_1__["default"],
    Navs: _Navs__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    messageOrder: String
  },
  data: function data() {
    return {};
  },
  methods: {
    getNavs: function getNavs() {
      this.$refs.stepsElement.getNavs();
    }
  },
  created: function created() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/advisory-system/infoCotizar/Navs.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/advisory-system/infoCotizar/Navs.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-loading-skeleton */ "./node_modules/vue-loading-skeleton/dist/vue-loading-skeleton.esm.js");
/* harmony import */ var _components_NoData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/NoData */ "./resources/js/components/NoData.vue");
/* harmony import */ var _components_DataTableDraggable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/DataTableDraggable */ "./resources/js/components/DataTableDraggable.vue");
/* harmony import */ var _components_modals_Destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/modals/Destroy */ "./resources/js/components/modals/Destroy.vue");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Button */ "./resources/js/components/Button.vue");
/* harmony import */ var _components_skeleton_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/skeleton/form */ "./resources/js/components/skeleton/form.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Button: _components_Button__WEBPACK_IMPORTED_MODULE_4__["default"],
    Skeleton: vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_0__["Skeleton"],
    DataTableDraggable: _components_DataTableDraggable__WEBPACK_IMPORTED_MODULE_2__["default"],
    NoData: _components_NoData__WEBPACK_IMPORTED_MODULE_1__["default"],
    Destroy: _components_modals_Destroy__WEBPACK_IMPORTED_MODULE_3__["default"],
    SkeletonForm: _components_skeleton_form__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  props: {
    messageOrder: String,
    routeGet: String,
    routeOrder: String,
    route: String
  },
  data: function data() {
    return {
      elements: {},
      title: "",
      element: {},
      errors: {},
      loadingGet: false,
      requestSubmit: false,
      modalCreateUpdate: false,
      modalDestroy: false
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;

      this.requestSubmit = true;
      var url;
      var method;

      if (this.title == "Nueva") {
        url = 'informacion-cotizar/navs';
        method = "post";
      } else {
        url = 'informacion-cotizar/navs' + "/" + this.element.id;
        method = "put";
      }

      axios({
        method: method,
        url: url,
        data: this.element
      }).then(function (response) {
        _this.requestSubmit = false;
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

        _this.restore();
      })["catch"](function (error) {
        _this.requestSubmit = false;

        if (error.response.status === 422) {
          _this.errors = error.response.data.errors || {};
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

        _this.restoreEl();
      });
    },
    restore: function restore() {
      this.errors = {};
      this.elements = {};
      this.modalCreateUpdate = this.modalDestroy = false;
      this.element = {};
      this.$emit('refreshNavs');
      this.getEls();
    },
    restoreEl: function restoreEl() {
      this.errors = {};
      this.modalCreateUpdate = this.modalDestroy = false;
      this.element = {};
    },
    handleChange: function handleChange(elements) {
      var _this2 = this;

      axios.put('informacion-cotizar/navs/order', elements).then(function (response) {
        _this2.restore();

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
      });
    },
    editEl: function editEl(id) {
      this.title = "Actualizar";
      this.modalCreateUpdate = true;
      this.getEl(id);
    },
    destroyConfirm: function destroyConfirm() {
      var _this3 = this;

      this.requestSubmit = true;
      axios["delete"]('informacion-cotizar/navs/delete/' + this.element.id).then(function (response) {
        _this3.requestSubmit = false;

        _this3.restore();

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

        _this3.restoreEl();
      });
    },
    deleteEl: function deleteEl(id) {
      this.modalDestroy = true;
      this.getEl(id);
    },
    getEl: function getEl(id) {
      var _this4 = this;

      this.loadingGet = true;
      axios.get("informacion-cotizar/navs/json/get/" + id).then(function (response) {
        _this4.element = response.data;
        _this4.loadingGet = false;
      })["catch"](function (error) {});
    },
    newEl: function newEl() {
      this.title = "Nueva";
      this.modalCreateUpdate = true;
    },
    getEls: function getEls() {
      var _this5 = this;

      axios.get('informacion-cotizar/navs/json/get-all').then(function (response) {
        _this5.elements = response.data;
      })["catch"](function (error) {});
    }
  },
  created: function created() {
    this.getEls();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/advisory-system/infoCotizar/Steps.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/advisory-system/infoCotizar/Steps.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-loading-skeleton */ "./node_modules/vue-loading-skeleton/dist/vue-loading-skeleton.esm.js");
/* harmony import */ var _components_NoData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/NoData */ "./resources/js/components/NoData.vue");
/* harmony import */ var _components_DataTableDraggable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/DataTableDraggable */ "./resources/js/components/DataTableDraggable.vue");
/* harmony import */ var _components_modals_Destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/modals/Destroy */ "./resources/js/components/modals/Destroy.vue");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Button */ "./resources/js/components/Button.vue");
/* harmony import */ var _components_skeleton_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/skeleton/form */ "./resources/js/components/skeleton/form.vue");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue2-dropzone */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.js");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! quill */ "./node_modules/quill/dist/quill.js");
/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(quill__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _functions_PlainClipboard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../functions/PlainClipboard */ "./resources/js/functions/PlainClipboard.js");
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-quill-editor */ "./node_modules/vue-quill-editor/dist/vue-quill-editor.js");
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(vue_quill_editor__WEBPACK_IMPORTED_MODULE_9__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









quill__WEBPACK_IMPORTED_MODULE_7___default.a.register("modules/clipboard", _functions_PlainClipboard__WEBPACK_IMPORTED_MODULE_8__["default"], true);

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Button: _components_Button__WEBPACK_IMPORTED_MODULE_4__["default"],
    Skeleton: vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_0__["Skeleton"],
    DataTableDraggable: _components_DataTableDraggable__WEBPACK_IMPORTED_MODULE_2__["default"],
    NoData: _components_NoData__WEBPACK_IMPORTED_MODULE_1__["default"],
    Destroy: _components_modals_Destroy__WEBPACK_IMPORTED_MODULE_3__["default"],
    SkeletonForm: _components_skeleton_form__WEBPACK_IMPORTED_MODULE_5__["default"],
    vueDropzone: vue2_dropzone__WEBPACK_IMPORTED_MODULE_6___default.a,
    quillEditor: vue_quill_editor__WEBPACK_IMPORTED_MODULE_9__["quillEditor"]
  },
  props: {
    messageOrder: String
  },
  data: function data() {
    return {
      activeNav: 0,
      navs: [],
      elements: {},
      title: "",
      element: {},
      errors: {},
      loadingGet: false,
      loadingGetAll: false,
      requestSubmit: false,
      modalCreateUpdate: false,
      modalDestroy: false,
      dropzoneOptions: {
        url: "/",
        maxFiles: 1,
        acceptedFiles: "image/png,image/jpeg,image/jpg,image/svg+xml",
        autoProcessQueue: false,
        thumbnailWidth: 150,
        addRemoveLinks: true,
        dictRemoveFile: "Remover"
      },
      editorOptions: {
        placeholder: "",
        modules: {
          toolbar: {
            container: [["bold", "italic", "underline", "strike"], ["blockquote"], [{
              header: 1
            }, {
              header: 2
            }], //[{ list: "ordered" }, { list: "bullet" }],
            //[{ indent: "-1" }, { indent: "+1" }],
            //[{ size: [false] }],
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
            ["link"]]
          }
        }
      }
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;

      this.requestSubmit = true;
      var url;
      var method;
      var fd = new FormData();

      if (this.title == "Nuevo") {
        url = "informacion-cotizar/steps";
        method = "post";
      } else {
        url = "informacion-cotizar/steps" + "/" + this.element.id;
        method = "post";
        fd.append("_method", "put");
      }

      if (this.element.title) {
        fd.append("title", this.element.title);
      }

      if (this.element.description) {
        fd.append("description", this.element.description);
      }

      if (this.$refs.ref_image.dropzone.files[0]) {
        fd.append("image", this.$refs.ref_image.dropzone.files[0]);
      }

      fd.append("nav_id", this.activeNav);
      axios({
        method: method,
        url: url,
        data: fd
      }).then(function (response) {
        _this.requestSubmit = false;
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

        _this.restore();
      })["catch"](function (error) {
        _this.requestSubmit = false;

        if (error.response.status === 422) {
          _this.errors = error.response.data.errors || {};
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

        _this.restoreEl();
      });
    },
    restore: function restore() {
      this.errors = {};
      this.elements = {};
      this.modalCreateUpdate = this.modalDestroy = false;
      this.element = {};
      this.getSteps(this.activeNav);
    },
    restoreEl: function restoreEl() {
      this.errors = {};
      this.modalCreateUpdate = this.modalDestroy = false;
      this.element = {};
    },
    handleChange: function handleChange(elements) {
      var _this2 = this;

      axios.put("informacion-cotizar/steps/order", elements).then(function (response) {
        _this2.restore();

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
      });
    },
    editEl: function editEl(id) {
      this.title = "Actualizar";
      this.modalCreateUpdate = true;
      this.getEl(id);
    },
    destroyConfirm: function destroyConfirm() {
      var _this3 = this;

      this.requestSubmit = true;
      axios["delete"]("informacion-cotizar/steps/delete/" + this.element.id).then(function (response) {
        _this3.requestSubmit = false;

        _this3.restore();

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

        _this3.restoreEl();
      });
    },
    deleteEl: function deleteEl(id) {
      this.modalDestroy = true;
      this.getEl(id);
    },
    getEl: function getEl(id) {
      var _this4 = this;

      this.loadingGet = true;
      axios.get("informacion-cotizar/steps/json/get/" + id).then(function (response) {
        _this4.element = response.data;
        _this4.loadingGet = false;
      })["catch"](function (error) {});
    },
    newEl: function newEl() {
      this.title = "Nuevo";
      this.modalCreateUpdate = true;
    },
    getNavs: function getNavs() {
      var _this5 = this;

      this.loadingNavs = true;
      axios.get("informacion-cotizar/navs/json/get-all").then(function (response) {
        _this5.navs = response.data.data;

        if (_this5.navs.length) {
          _this5.activeNav = _this5.navs[0].id;

          _this5.getSteps(_this5.activeNav);
        }

        _this5.loadingNavs = false;
      })["catch"](function (error) {});
    },
    getStepsChange: function getStepsChange(e) {
      this.getSteps(e.target.value);
    },
    getSteps: function getSteps(id) {
      var _this6 = this;

      this.elements.data = [];
      this.loadingGetAll = true;
      axios.get("informacion-cotizar/steps/json/get-all/" + id).then(function (response) {
        _this6.elements = response.data;
        _this6.loadingGetAll = false;
      })["catch"](function (error) {});
    }
  },
  created: function created() {
    this.getNavs();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/advisory-system/infoCotizar/Index.vue?vue&type=template&id=44125b44&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/advisory-system/infoCotizar/Index.vue?vue&type=template&id=44125b44& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
                    attrs: {
                      title: "Información Cotizar",
                      parent: "Sistema Asesores",
                      active: "Información Cotizar"
                    }
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
        _c("Navs", {
          attrs: {
            route: "informacion-cotizar",
            messageOrder: _vm.messageOrder
          },
          on: { refreshNavs: _vm.getNavs }
        }),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "mb-4" },
          [
            _c("Steps", {
              ref: "stepsElement",
              attrs: {
                route: "informacion-cotizar",
                messageOrder: _vm.messageOrder
              }
            })
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/advisory-system/infoCotizar/Navs.vue?vue&type=template&id=0de81a2e&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/advisory-system/infoCotizar/Navs.vue?vue&type=template&id=0de81a2e& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "row mb-4" },
    [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-12 col-lg-9" },
        [
          _c("div", { staticClass: "text-right" }, [
            _c(
              "a",
              {
                staticClass: "btn btn-icon btn-inverse-primary",
                attrs: { href: "#" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.newEl.apply(null, arguments)
                  }
                }
              },
              [
                _c(
                  "span",
                  { staticClass: "btn-inner--icon" },
                  [_c("jam-plus", { staticClass: "current-color" })],
                  1
                ),
                _vm._v(" "),
                _c("span", { staticClass: "btn-inner--text" }, [
                  _vm._v("Nueva Pestaña")
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c("DataTableDraggable", {
            attrs: {
              object: _vm.elements,
              buttonUpdate: true,
              buttonDelete: true,
              buttonDetail: false,
              "message-order": _vm.messageOrder
            },
            on: {
              "update:object": function($event) {
                _vm.elements = $event
              },
              drag: _vm.handleChange,
              edit: _vm.editEl,
              delete: _vm.deleteEl
            }
          })
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
                      text: _vm.title == "Nueva" ? "Crear" : "Actualizar",
                      "request-server": _vm.requestSubmit
                    },
                    on: { click: _vm.submit }
                  }),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-secondary",
                      attrs: { type: "button" },
                      on: { click: _vm.restoreEl }
                    },
                    [_vm._v("\n        Cancelar\n      ")]
                  )
                ]
              }
            }
          ]),
          model: {
            value: _vm.modalCreateUpdate,
            callback: function($$v) {
              _vm.modalCreateUpdate = $$v
            },
            expression: "modalCreateUpdate"
          }
        },
        [
          _c("template", { slot: "modal-title" }, [
            _c("div", { staticClass: "text-primary h2" }, [
              _vm._v(_vm._s(_vm.title) + " Pestaña")
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
          _vm.loadingGet
            ? _c("div", [_c("SkeletonForm")], 1)
            : _c("div", [
                _c(
                  "form",
                  {
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.submit.apply(null, arguments)
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
                              staticClass: "font-weight-bold d-block",
                              attrs: { for: "name" }
                            },
                            [_vm._v("Nombre")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.element.name,
                                expression: "element.name"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", id: "name" },
                            domProps: { value: _vm.element.name },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.element,
                                  "name",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors && _vm.errors.name
                            ? _c(
                                "label",
                                {
                                  staticClass: "mt-2 text-danger text-sm",
                                  attrs: { for: "name" }
                                },
                                [_vm._v(_vm._s(_vm.errors.name[0]))]
                              )
                            : _vm._e()
                        ])
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
          element: "pestaña",
          open: _vm.modalDestroy,
          "loading-get": _vm.loadingGet,
          "loading-submit": _vm.requestSubmit
        },
        on: { cancel: _vm.restoreEl, submit: _vm.destroyConfirm }
      })
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 col-lg-3" }, [
      _c("h2", [_vm._v("Pestañas de Información")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n      Registra las pestañas y ordénalas según el orden requerido, las cuales se utilizan en la sección "
        ),
        _c("b", [_vm._v("Info")]),
        _vm._v(" en la página "),
        _c("b", [_vm._v("Cotizar")]),
        _vm._v(" de la Plataforma. \n    ")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/advisory-system/infoCotizar/Steps.vue?vue&type=template&id=752a59ce&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/advisory-system/infoCotizar/Steps.vue?vue&type=template&id=752a59ce& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row mb-4" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "col-12" }, [
      _vm.navs.length
        ? _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-12 col-sm-4 mb-3" }, [
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.activeNav,
                      expression: "activeNav"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { id: "de" },
                  on: {
                    change: [
                      function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.activeNav = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      },
                      _vm.getStepsChange
                    ]
                  }
                },
                _vm._l(_vm.navs, function(el, i) {
                  return _c("option", { key: i, domProps: { value: el.id } }, [
                    _vm._v("\n            " + _vm._s(el.name) + "\n          ")
                  ])
                }),
                0
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-12" },
              [
                _c("div", { staticClass: "text-right" }, [
                  _c(
                    "a",
                    {
                      staticClass: "btn btn-icon btn-inverse-primary",
                      attrs: { href: "#" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.newEl.apply(null, arguments)
                        }
                      }
                    },
                    [
                      _c(
                        "span",
                        { staticClass: "btn-inner--icon" },
                        [_c("jam-plus", { staticClass: "current-color" })],
                        1
                      ),
                      _vm._v(" "),
                      _c("span", { staticClass: "btn-inner--text" }, [
                        _vm._v("Nuevo Item")
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("DataTableDraggable", {
                  attrs: {
                    "loading-prop": _vm.loadingGetAll,
                    object: _vm.elements,
                    buttonUpdate: true,
                    buttonDelete: true,
                    buttonDetail: false,
                    "message-order": _vm.messageOrder
                  },
                  on: {
                    "update:loadingProp": function($event) {
                      _vm.loadingGetAll = $event
                    },
                    "update:loading-prop": function($event) {
                      _vm.loadingGetAll = $event
                    },
                    "update:object": function($event) {
                      _vm.elements = $event
                    },
                    drag: _vm.handleChange,
                    edit: _vm.editEl,
                    delete: _vm.deleteEl
                  }
                }),
                _vm._v(" "),
                _c(
                  "b-modal",
                  {
                    attrs: {
                      "no-close-on-esc": "",
                      "no-close-on-backdrop": "",
                      centered: "",
                      "footer-class": "border-0 pt-0",
                      "body-class": "pt-0"
                    },
                    on: { close: _vm.restoreEl },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "modal-footer",
                          fn: function(ref) {
                            var ok = ref.ok
                            return [
                              _c("Button", {
                                attrs: {
                                  classes: ["btn-inverse-primary"],
                                  text:
                                    _vm.title == "Nuevo"
                                      ? "Crear"
                                      : "Actualizar",
                                  "request-server": _vm.requestSubmit
                                },
                                on: { click: _vm.submit }
                              }),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-secondary",
                                  attrs: { type: "button" },
                                  on: { click: _vm.restoreEl }
                                },
                                [
                                  _vm._v(
                                    "\n              Cancelar\n            "
                                  )
                                ]
                              )
                            ]
                          }
                        }
                      ],
                      null,
                      false,
                      382604667
                    ),
                    model: {
                      value: _vm.modalCreateUpdate,
                      callback: function($$v) {
                        _vm.modalCreateUpdate = $$v
                      },
                      expression: "modalCreateUpdate"
                    }
                  },
                  [
                    _c("template", { slot: "modal-title" }, [
                      _c("div", { staticClass: "text-primary h2" }, [
                        _vm._v(_vm._s(_vm.title) + " Item")
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
                    _vm.loadingGet
                      ? _c("div", [_c("SkeletonForm")], 1)
                      : _c("div", [
                          _c(
                            "form",
                            {
                              on: {
                                submit: function($event) {
                                  $event.preventDefault()
                                  return _vm.submit.apply(null, arguments)
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
                                        staticClass: "font-weight-bold d-block",
                                        attrs: { for: "title" }
                                      },
                                      [_vm._v("Titulo")]
                                    ),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.element.title,
                                          expression: "element.title"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: { type: "text", id: "title" },
                                      domProps: { value: _vm.element.title },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.element,
                                            "title",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _vm.errors && _vm.errors.title
                                      ? _c(
                                          "label",
                                          {
                                            staticClass:
                                              "mt-2 text-danger text-sm",
                                            attrs: { for: "title" }
                                          },
                                          [_vm._v(_vm._s(_vm.errors.title[0]))]
                                        )
                                      : _vm._e()
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "col-12" }, [
                                  _c(
                                    "div",
                                    { staticClass: "form-group" },
                                    [
                                      _c(
                                        "label",
                                        {
                                          staticClass:
                                            "font-weight-bold d-block",
                                          attrs: { for: "description" }
                                        },
                                        [_vm._v("Descripcion")]
                                      ),
                                      _vm._v(" "),
                                      _c("quill-Editor", {
                                        ref: "ref_content",
                                        staticClass: "ql-height-5",
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
                                          value: _vm.element.description,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.element,
                                              "description",
                                              $$v
                                            )
                                          },
                                          expression: "element.description"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _vm.errors && _vm.errors.description
                                        ? _c(
                                            "label",
                                            {
                                              staticClass:
                                                "mt-2 text-danger text-sm",
                                              attrs: { for: "description" }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.errors.description[0]
                                                )
                                              )
                                            ]
                                          )
                                        : _vm._e()
                                    ],
                                    1
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "col-12" }, [
                                  _c("div", { staticClass: "form-group" }, [
                                    _c(
                                      "label",
                                      {
                                        staticClass: "font-weight-bold",
                                        attrs: { for: "image" }
                                      },
                                      [_vm._v("Imagen:")]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "row" }, [
                                      _vm.element.image
                                        ? _c(
                                            "div",
                                            { staticClass: "col text-center" },
                                            [
                                              _c("img", {
                                                staticClass: "img-fluid",
                                                attrs: {
                                                  src:
                                                    "/storage/img/tps/info/" +
                                                    _vm.element.image
                                                }
                                              })
                                            ]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "col" },
                                        [
                                          _c(
                                            "vue-dropzone",
                                            {
                                              ref: "ref_image",
                                              staticClass: "text-center",
                                              attrs: {
                                                id: "image",
                                                options: _vm.dropzoneOptions,
                                                duplicateCheck: true,
                                                useCustomSlot: true
                                              },
                                              on: {
                                                "vdropzone-file-added": function(
                                                  $event
                                                ) {
                                                  return _vm.$validateImageDropzone(
                                                    $event,
                                                    _vm.$refs.ref_image
                                                      .dropzone,
                                                    1,
                                                    225000,
                                                    "200kb"
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "dropzone-custom-content"
                                                },
                                                [
                                                  _c(
                                                    "h5",
                                                    {
                                                      staticClass:
                                                        "dropzone-custom-title text-primary"
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                              Suelte los archivos aquí o haga click para\n                              cargarlos.\n                            "
                                                      )
                                                    ]
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        ],
                                        1
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _vm.errors && _vm.errors.image
                                      ? _c(
                                          "label",
                                          {
                                            staticClass:
                                              "text-danger text-sm d-block mt-2",
                                            attrs: { for: "image" }
                                          },
                                          [_vm._v(_vm._s(_vm.errors.image[0]))]
                                        )
                                      : _vm._e()
                                  ])
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
                    element: "pestaña",
                    open: _vm.modalDestroy,
                    "loading-get": _vm.loadingGet,
                    "loading-submit": _vm.requestSubmit
                  },
                  on: { cancel: _vm.restoreEl, submit: _vm.destroyConfirm }
                })
              ],
              1
            )
          ])
        : _c("div", { staticClass: "row" }, [_vm._m(1)])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12" }, [
      _c("h2", [_vm._v("Carrusel de Pestaña")]),
      _vm._v(" "),
      _c("p", [_vm._v("Registra los items de la pestaña seleccionada:")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 text-center" }, [
      _c("h2", { staticClass: "py-4" }, [
        _vm._v("No hay pestañas creadas aún.")
      ])
    ])
  }
]
render._withStripped = true



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

/***/ "./resources/js/views/advisory-system/infoCotizar/Index.vue":
/*!******************************************************************!*\
  !*** ./resources/js/views/advisory-system/infoCotizar/Index.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_44125b44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=44125b44& */ "./resources/js/views/advisory-system/infoCotizar/Index.vue?vue&type=template&id=44125b44&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/advisory-system/infoCotizar/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_44125b44___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_44125b44___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/advisory-system/infoCotizar/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/advisory-system/infoCotizar/Index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/advisory-system/infoCotizar/Index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/advisory-system/infoCotizar/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/advisory-system/infoCotizar/Index.vue?vue&type=template&id=44125b44&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/views/advisory-system/infoCotizar/Index.vue?vue&type=template&id=44125b44& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_44125b44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=44125b44& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/advisory-system/infoCotizar/Index.vue?vue&type=template&id=44125b44&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_44125b44___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_44125b44___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/advisory-system/infoCotizar/Navs.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/views/advisory-system/infoCotizar/Navs.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Navs_vue_vue_type_template_id_0de81a2e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navs.vue?vue&type=template&id=0de81a2e& */ "./resources/js/views/advisory-system/infoCotizar/Navs.vue?vue&type=template&id=0de81a2e&");
/* harmony import */ var _Navs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navs.vue?vue&type=script&lang=js& */ "./resources/js/views/advisory-system/infoCotizar/Navs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Navs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Navs_vue_vue_type_template_id_0de81a2e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Navs_vue_vue_type_template_id_0de81a2e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/advisory-system/infoCotizar/Navs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/advisory-system/infoCotizar/Navs.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/advisory-system/infoCotizar/Navs.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Navs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/advisory-system/infoCotizar/Navs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/advisory-system/infoCotizar/Navs.vue?vue&type=template&id=0de81a2e&":
/*!************************************************************************************************!*\
  !*** ./resources/js/views/advisory-system/infoCotizar/Navs.vue?vue&type=template&id=0de81a2e& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navs_vue_vue_type_template_id_0de81a2e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Navs.vue?vue&type=template&id=0de81a2e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/advisory-system/infoCotizar/Navs.vue?vue&type=template&id=0de81a2e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navs_vue_vue_type_template_id_0de81a2e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navs_vue_vue_type_template_id_0de81a2e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/advisory-system/infoCotizar/Steps.vue":
/*!******************************************************************!*\
  !*** ./resources/js/views/advisory-system/infoCotizar/Steps.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Steps_vue_vue_type_template_id_752a59ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Steps.vue?vue&type=template&id=752a59ce& */ "./resources/js/views/advisory-system/infoCotizar/Steps.vue?vue&type=template&id=752a59ce&");
/* harmony import */ var _Steps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Steps.vue?vue&type=script&lang=js& */ "./resources/js/views/advisory-system/infoCotizar/Steps.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Steps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Steps_vue_vue_type_template_id_752a59ce___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Steps_vue_vue_type_template_id_752a59ce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/advisory-system/infoCotizar/Steps.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/advisory-system/infoCotizar/Steps.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/advisory-system/infoCotizar/Steps.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Steps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Steps.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/advisory-system/infoCotizar/Steps.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Steps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/advisory-system/infoCotizar/Steps.vue?vue&type=template&id=752a59ce&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/views/advisory-system/infoCotizar/Steps.vue?vue&type=template&id=752a59ce& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Steps_vue_vue_type_template_id_752a59ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Steps.vue?vue&type=template&id=752a59ce& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/advisory-system/infoCotizar/Steps.vue?vue&type=template&id=752a59ce&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Steps_vue_vue_type_template_id_752a59ce___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Steps_vue_vue_type_template_id_752a59ce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);