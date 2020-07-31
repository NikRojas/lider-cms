(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/pages/administration/exchange"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/administration/Exchange.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/administration/Exchange.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/BreadCrumb */ "./resources/js/components/BreadCrumb.vue");
/* harmony import */ var vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-loading-skeleton */ "./node_modules/vue-loading-skeleton/dist/vue-loading-skeleton.esm.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Button */ "./resources/js/components/Button.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Skeleton: vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__["Skeleton"],
    Button: _components_Button__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      elements: {},
      errors: {},
      loadingEls: false,
      unit: 1,
      element: {},
      elementSelected: 0,
      editBlock: false,
      requestSubmit: false
    };
  },
  props: {
    route: String,
    routeGetAll: String
  },
  methods: {
    restoreEl: function restoreEl() {
      this.errors = {};
      this.element = {};
      this.editBlock = false;
      this.elementSelected = 0;
    },
    restore: function restore() {
      this.errors = {};
      this.element = {};
      this.editBlock = false;
      this.elementSelected = 0;
      this.getEls();
    },
    edit: function edit(id) {
      this.editBlock = true;
      this.elementSelected = id;
      this.element = Object.assign({}, this.elements.find(function (item) {
        return item.id === id;
      }));
    },
    getEls: function getEls() {
      var _this = this;

      this.loadingEls = true;
      axios.get(this.routeGetAll).then(function (response) {
        _this.elements = response.data;
        _this.loadingEls = false;
      })["catch"](function (error) {});
    },
    update: function update() {
      var _this2 = this;

      this.requestSubmit = true;
      var url;
      var method;
      url = this.route + "/" + this.element.id;
      method = "put";
      axios({
        method: method,
        url: url,
        data: this.element
      }).then(function (response) {
        _this2.requestSubmit = false;
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

        _this2.restore();
      })["catch"](function (error) {
        _this2.requestSubmit = false;

        if (error.response.status === 422) {
          _this2.errors = error.response.data.errors || {};
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

        _this2.restoreEl();
      });
    }
  },
  created: function created() {
    this.getEls();
  },
  computed: {
    currencyDefault: function currencyDefault() {
      if (this.elements.length) {
        return this.elements.find(function (element) {
          return element["default"] == 1;
        });
      }
    },
    currencies: function currencies() {
      if (this.elements.length) {
        return this.elements.filter(function (element) {
          return element["default"] != 1;
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/administration/Exchange.vue?vue&type=template&id=34602d25&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/administration/Exchange.vue?vue&type=template&id=34602d25& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
                      title: "Tipo de Cambio",
                      parent: "Administración",
                      active: "Tipo de Cambio"
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
    _c("div", { staticClass: "container-fluid mt--6" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-lg-3 mb-4 mb-lg-0" }, [
          !_vm.loadingEls
            ? _c("p", [
                _vm._v(
                  "En este apartado usted puede modificar el cambio de los tipos de moneda, tomar en consideración que el cambio se redondea a Entero Superior."
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          !_vm.loadingEls
            ? _c("h4", { staticClass: "text-uppercase" }, [
                _vm._v("Moneda Predeterminada")
              ])
            : _vm._e(),
          _vm._v(" "),
          !_vm.loadingEls
            ? _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-body" }, [
                  _c(
                    "div",
                    { staticClass: "text-center mb-4" },
                    [
                      _c("gb-flag", { attrs: { code: "pe", size: "huge" } }),
                      _vm._v(" "),
                      _c("h1", [_vm._v(_vm._s(_vm.currencyDefault.name))])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("h3", { staticClass: "text-center" }, [
                    _c("span", { staticClass: "font-weight-normal" }, [
                      _vm._v("Abreviación:")
                    ]),
                    _vm._v(
                      "\n              " +
                        _vm._s(_vm.currencyDefault.abbreviation) +
                        "\n            "
                    )
                  ]),
                  _vm._v(" "),
                  _c("h3", { staticClass: "text-center" }, [
                    _c("span", { staticClass: "font-weight-normal" }, [
                      _vm._v("Símbolo:")
                    ]),
                    _vm._v(
                      "\n              " +
                        _vm._s(_vm.currencyDefault.symbol) +
                        "\n            "
                    )
                  ])
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.loadingEls
            ? _c("div", [_c("skeleton", { attrs: { height: "300px" } })], 1)
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg" }, [
          !_vm.loadingEls
            ? _c(
                "div",
                { staticClass: "row" },
                _vm._l(_vm.currencies, function(el, i) {
                  return _c("div", { key: i, staticClass: "col-12 mb-4" }, [
                    _c(
                      "form",
                      {
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            return _vm.update($event)
                          }
                        }
                      },
                      [
                        _c("div", { staticClass: "card" }, [
                          _c("div", { staticClass: "card-body pb-0" }, [
                            _c("div", { staticClass: "row" }, [
                              _c(
                                "div",
                                { staticClass: "col-12 col-lg-4" },
                                [
                                  el.abbreviation == "PEN"
                                    ? _c("gb-flag", {
                                        attrs: { code: "pe", size: "medium" }
                                      })
                                    : _c("gb-flag", {
                                        attrs: { code: "us", size: "medium" }
                                      }),
                                  _vm._v(" "),
                                  _c("h2", [_vm._v(_vm._s(el.name))]),
                                  _vm._v(" "),
                                  _c("h3", [
                                    _c(
                                      "span",
                                      { staticClass: "font-weight-normal" },
                                      [_vm._v("Abreviación:")]
                                    ),
                                    _vm._v(
                                      "\n                        " +
                                        _vm._s(el.abbreviation) +
                                        "\n                      "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("h3", [
                                    _c(
                                      "span",
                                      { staticClass: "font-weight-normal" },
                                      [_vm._v("Símbolo:")]
                                    ),
                                    _vm._v(
                                      "\n                        " +
                                        _vm._s(el.symbol) +
                                        "\n                      "
                                    )
                                  ])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-12 col-lg d-flex align-items-center justify-content-center"
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "text-center h2 font-weight-normal"
                                    },
                                    [
                                      _vm._v(
                                        "\n                        " +
                                          _vm._s(el.symbol) +
                                          _vm._s(_vm.unit) +
                                          " equivale a\n                        "
                                      ),
                                      _vm.elementSelected != el.id
                                        ? _c(
                                            "h1",
                                            {
                                              staticClass:
                                                "text-primary text-center"
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.currencyDefault.symbol
                                                ) +
                                                  " " +
                                                  _vm._s(el.value)
                                              )
                                            ]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.editBlock &&
                                      _vm.elementSelected == el.id
                                        ? _c(
                                            "div",
                                            { staticClass: "form-group" },
                                            [
                                              _vm._v(
                                                "\n                          " +
                                                  _vm._s(
                                                    _vm.currencyDefault.symbol
                                                  ) +
                                                  "\n                          "
                                              ),
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: _vm.element.value,
                                                    expression: "element.value"
                                                  }
                                                ],
                                                staticClass:
                                                  "form-control d-inline-block w-50",
                                                attrs: {
                                                  type: "text",
                                                  id: "value"
                                                },
                                                domProps: {
                                                  value: _vm.element.value
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
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
                                              _vm.errors && _vm.errors.value
                                                ? _c(
                                                    "label",
                                                    {
                                                      staticClass:
                                                        "text-danger text-sm d-block mt-2",
                                                      attrs: { for: "value" }
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.errors.value[0]
                                                        )
                                                      )
                                                    ]
                                                  )
                                                : _vm._e()
                                            ]
                                          )
                                        : _vm._e()
                                    ]
                                  )
                                ]
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "card-footer pt-0 border-0 text-right"
                            },
                            [
                              _vm.editBlock && _vm.elementSelected == el.id
                                ? _c("Button", {
                                    attrs: {
                                      text: "Actualizar",
                                      classes: [
                                        "btn-inverse-primary",
                                        "btn-sm"
                                      ],
                                      "request-server": _vm.requestSubmit
                                    }
                                  })
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.elementSelected != el.id
                                ? _c(
                                    "button",
                                    {
                                      staticClass:
                                        "btn btn-inverse-info btn-sm",
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.edit(el.id)
                                        }
                                      }
                                    },
                                    [_vm._v("Editar")]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.editBlock && _vm.elementSelected == el.id
                                ? _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-secondary btn-sm",
                                      attrs: { type: "button" },
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.restoreEl($event)
                                        }
                                      }
                                    },
                                    [_vm._v("Cancelar")]
                                  )
                                : _vm._e()
                            ],
                            1
                          )
                        ])
                      ]
                    )
                  ])
                }),
                0
              )
            : _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  { staticClass: "col-12 mb-4" },
                  [_c("skeleton", { attrs: { height: "200px" } })],
                  1
                )
              ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/administration/Exchange.vue":
/*!********************************************************!*\
  !*** ./resources/js/views/administration/Exchange.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Exchange_vue_vue_type_template_id_34602d25___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Exchange.vue?vue&type=template&id=34602d25& */ "./resources/js/views/administration/Exchange.vue?vue&type=template&id=34602d25&");
/* harmony import */ var _Exchange_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Exchange.vue?vue&type=script&lang=js& */ "./resources/js/views/administration/Exchange.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Exchange_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Exchange_vue_vue_type_template_id_34602d25___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Exchange_vue_vue_type_template_id_34602d25___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/administration/Exchange.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/administration/Exchange.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/administration/Exchange.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Exchange_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Exchange.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/administration/Exchange.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Exchange_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/administration/Exchange.vue?vue&type=template&id=34602d25&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/administration/Exchange.vue?vue&type=template&id=34602d25& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Exchange_vue_vue_type_template_id_34602d25___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Exchange.vue?vue&type=template&id=34602d25& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/administration/Exchange.vue?vue&type=template&id=34602d25&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Exchange_vue_vue_type_template_id_34602d25___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Exchange_vue_vue_type_template_id_34602d25___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);