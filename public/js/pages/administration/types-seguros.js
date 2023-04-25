(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/pages/administration/types-seguros"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/administration/TypesSeguros.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/administration/TypesSeguros.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Button */ "./resources/js/components/Button.vue");
/* harmony import */ var _components_DataTableDraggable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/DataTableDraggable */ "./resources/js/components/DataTableDraggable.vue");
/* harmony import */ var _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/BreadCrumb */ "./resources/js/components/BreadCrumb.vue");
/* harmony import */ var _components_form_InputSlug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/form/InputSlug */ "./resources/js/components/form/InputSlug.vue");
/* harmony import */ var _components_skeleton_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/skeleton/form */ "./resources/js/components/skeleton/form.vue");
/* harmony import */ var _components_modals_Destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/modals/Destroy */ "./resources/js/components/modals/Destroy.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BreadCrumb: _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_2__["default"],
    DataTableDraggable: _components_DataTableDraggable__WEBPACK_IMPORTED_MODULE_1__["default"],
    Button: _components_Button__WEBPACK_IMPORTED_MODULE_0__["default"],
    InputSlug: _components_form_InputSlug__WEBPACK_IMPORTED_MODULE_3__["default"],
    SkeletonForm: _components_skeleton_form__WEBPACK_IMPORTED_MODULE_4__["default"],
    Destroy: _components_modals_Destroy__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  props: {
    routeGetAll: String,
    route: String,
    routeOrder: String
  },
  data: function data() {
    return {
      elements: {},
      element: {
        name: '',
        sap_code: ''
      },
      loadingGet: false,
      title: '',
      elementsPerPage: 10,
      errors: {},
      modalCreateUpdate: false,
      modalDestroy: false,
      requestSubmit: false
    };
  },
  methods: {
    destroyConfirm: function destroyConfirm() {
      var _this = this;

      this.requestSubmit = true;
      axios["delete"](this.route + "/" + this.element.id).then(function (response) {
        _this.requestSubmit = false;

        _this.restore();

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
    restore: function restore() {
      this.errors = {};
      this.element = {
        name: '',
        sap_code: ''
      };
      this.modalCreateUpdate = this.modalDestroy = false;
      this.getElements(1, this.elementsPerPage);
    },
    editEl: function editEl(id) {
      this.title = "Actualizar";
      this.modalCreateUpdate = true;
      this.getEl(id);
    },
    handleChange: function handleChange(elements) {
      var _this2 = this;

      axios.put(this.routeOrder, elements).then(function (response) {
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
    submit: function submit() {
      var _this3 = this;

      this.requestSubmit = true;
      var url;
      var method;

      if (this.title == "Nuevo") {
        url = this.route;
        method = "post";
      } else {
        url = this.route + "/" + this.element.id;
        method = "put";
      }

      axios({
        method: method,
        url: url,
        data: this.element
      }).then(function (response) {
        _this3.requestSubmit = false;
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

        _this3.restore();
      })["catch"](function (error) {
        _this3.requestSubmit = false;

        if (error.response.status === 422) {
          _this3.errors = error.response.data.errors || {};
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

        _this3.restoreEl();
      });
    },
    restoreEl: function restoreEl() {
      this.errors = {};
      this.element = {
        name: '',
        sap_code: ''
      };
      this.modalCreateUpdate = false;
      this.modalDestroy = false;
    },
    deleteEl: function deleteEl(id) {
      this.modalDestroy = true;
      this.getEl(id);
    },
    getElements: function getElements(page, itemsPerPage) {
      var _this4 = this;

      var q = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var url = this.routeGetAll + "?page=" + page + "&itemsPerPage=" + itemsPerPage;

      if (q) {
        url = url + "&q=" + q;
      }

      axios.get(url).then(function (response) {
        _this4.elements = response.data;
      })["catch"](function (error) {});
    },
    getEl: function getEl(id) {
      var _this5 = this;

      this.loadingGet = true;
      axios.get(this.route + '/json/get/' + id).then(function (response) {
        _this5.element = response.data;
        _this5.loadingGet = false;
      })["catch"](function (error) {});
    },
    newEl: function newEl() {
      this.title = "Nuevo";
      this.modalCreateUpdate = true;
    }
  },
  created: function created() {
    this.getElements(1, this.elementsPerPage);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/administration/TypesSeguros.vue?vue&type=template&id=710a5542&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/administration/TypesSeguros.vue?vue&type=template&id=710a5542& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
                      attrs: {
                        title: "Tipo Seguros",
                        parent: "Administración",
                        active: "Tipo Seguros"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-6 col-md-5 text-right" }, [
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
                        [_c("jam-magic", { staticClass: "current-color" })],
                        1
                      ),
                      _vm._v(" "),
                      _c("span", { staticClass: "btn-inner--text" }, [
                        _vm._v("Nuevo Tipo de Seguro")
                      ])
                    ]
                  )
                ])
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
          _c("DataTableDraggable", {
            attrs: {
              object: _vm.elements,
              placeholder: "Nombre",
              "button-update": true,
              "button-detail": false,
              "button-delete": true,
              "entries-prop": _vm.elementsPerPage
            },
            on: {
              "update:object": function($event) {
                _vm.elements = $event
              },
              drag: _vm.handleChange,
              get: _vm.getElements,
              delete: _vm.deleteEl,
              edit: _vm.editEl,
              "update:entriesProp": function($event) {
                _vm.elementsPerPage = $event
              },
              "update:entries-prop": function($event) {
                _vm.elementsPerPage = $event
              }
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
                      text: _vm.title == "Nuevo" ? "Crear" : "Actualizar",
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
                    [_vm._v("Cancelar")]
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
              _vm._v(_vm._s(_vm.title) + " Tipo de Seguro")
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
                              staticClass: "font-weight-bold",
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
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-12" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticClass: "font-weight-bold",
                              attrs: { for: "value" }
                            },
                            [_vm._v("Valor")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.element.value,
                                expression: "element.value"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", id: "value" },
                            domProps: { value: _vm.element.value },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.element,
                                  "value",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("small", { staticStyle: { opacity: "0.7" } }, [
                            _vm._v("El formato del input debe ser 0.00")
                          ]),
                          _vm._v(" "),
                          _vm.errors && _vm.errors.value
                            ? _c(
                                "label",
                                {
                                  staticClass: "mt-2 text-danger text-sm",
                                  attrs: { for: "value" }
                                },
                                [_vm._v(_vm._s(_vm.errors.value[0]))]
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
          element: "tipo de Seguro",
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
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/administration/TypesSeguros.vue":
/*!************************************************************!*\
  !*** ./resources/js/views/administration/TypesSeguros.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TypesSeguros_vue_vue_type_template_id_710a5542___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TypesSeguros.vue?vue&type=template&id=710a5542& */ "./resources/js/views/administration/TypesSeguros.vue?vue&type=template&id=710a5542&");
/* harmony import */ var _TypesSeguros_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TypesSeguros.vue?vue&type=script&lang=js& */ "./resources/js/views/administration/TypesSeguros.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TypesSeguros_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TypesSeguros_vue_vue_type_template_id_710a5542___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TypesSeguros_vue_vue_type_template_id_710a5542___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/administration/TypesSeguros.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/administration/TypesSeguros.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/administration/TypesSeguros.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TypesSeguros_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TypesSeguros.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/administration/TypesSeguros.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TypesSeguros_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/administration/TypesSeguros.vue?vue&type=template&id=710a5542&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/administration/TypesSeguros.vue?vue&type=template&id=710a5542& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TypesSeguros_vue_vue_type_template_id_710a5542___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TypesSeguros.vue?vue&type=template&id=710a5542& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/administration/TypesSeguros.vue?vue&type=template&id=710a5542&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TypesSeguros_vue_vue_type_template_id_710a5542___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TypesSeguros_vue_vue_type_template_id_710a5542___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);