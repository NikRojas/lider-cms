(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/pages/customers/read"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/customers/Read.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/customers/Read.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_NoData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/NoData */ "./resources/js/components/NoData.vue");
/* harmony import */ var _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/BreadCrumb */ "./resources/js/components/BreadCrumb.vue");
/* harmony import */ var _components_icons_Contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/icons/Contact */ "./resources/js/components/icons/Contact.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BreadCrumb: _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_1__["default"],
    NoData: _components_NoData__WEBPACK_IMPORTED_MODULE_0__["default"],
    Contact: _components_icons_Contact__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    imagesUrl: String,
    elementParent: Object,
    routeProject: String,
    routeReturn: String,
    routeOrder: String
  },
  data: function data() {
    return {
      element: {
        orders_rel: {
          order_details_rel: {
            project_rel: {
              images_format: []
            }
          }
        }
      }
    };
  },
  watch: {
    elementParent: {
      immediate: true,
      handler: function handler(newValue) {
        this.element = newValue;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/customers/Read.vue?vue&type=template&id=6051bdef&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/customers/Read.vue?vue&type=template&id=6051bdef& ***!
  \************************************************************************************************************************************************************************************************************/
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
                { staticClass: "col-12 col-lg-7" },
                [
                  _c("BreadCrumb", {
                    attrs: {
                      title: "Cliente " + _vm.element.full_name,
                      parent: "",
                      active: "Clientes"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-6 col-md text-right" }, [
                _c(
                  "a",
                  {
                    staticClass: "btn btn-icon btn-sm btn-inverse-light",
                    attrs: { href: _vm.routeReturn }
                  },
                  [
                    _c(
                      "span",
                      { staticClass: "btn-inner--icon" },
                      [_c("jam-arrow-left", { staticClass: "current-color" })],
                      1
                    ),
                    _vm._v(" "),
                    _c("span", { staticClass: "btn-inner--text" }, [
                      _vm._v("Regresar")
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
    _c("div", { staticClass: "container-fluid mt--6" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-lg-8" }, [
          _c("div", { staticClass: "card mb-4" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("div", { staticClass: "media align-items-center" }, [
                _c(
                  "span",
                  {
                    staticClass: "avatar avatar-lg rounded-circle bg-primary",
                    staticStyle: { "font-size": "26px !important" }
                  },
                  [_vm._v(_vm._s(_vm.element.avatar_initials))]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "media-body ml-3" }, [
                  _c("span", { staticClass: "mb-0 h2 font-weight-semibold" }, [
                    _vm._v(_vm._s(_vm.element.full_name) + " ")
                  ]),
                  _vm._v(" "),
                  _c("div", [
                    _vm._v(
                      "Registrado el " + _vm._s(_vm.element.created_at_format)
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mt-4" }, [
                _c("div", { staticClass: "row mb-3" }, [
                  _c(
                    "div",
                    { staticClass: "col-auto" },
                    [
                      _c("jam-id-card", {
                        staticClass: "current-color mr-1 text-primary",
                        staticStyle: { "margin-top": "-4px" },
                        attrs: { height: "20px", width: "20px" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col pl-0" }, [
                    _c("span", { staticClass: "h3 font-weight-normal" }, [
                      _vm._v(_vm._s(_vm.element.document_type_rel.description))
                    ]),
                    _vm._v(" "),
                    _c("h3", [_vm._v(_vm._s(_vm.element.document_number))])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row mb-3" }, [
                  _c(
                    "div",
                    { staticClass: "col-auto" },
                    [
                      _c("jam-phone", {
                        staticClass: "current-color mr-1 text-primary",
                        staticStyle: { "margin-top": "-4px" },
                        attrs: { height: "20px", width: "20px" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col pl-0" }, [
                    _c("span", { staticClass: "h3 font-weight-normal" }, [
                      _vm._v("Móvil")
                    ]),
                    _vm._v(" "),
                    _c("h3", [
                      _vm._v(
                        _vm._s(
                          _vm.element.mobile
                            ? _vm.element.mobile_formatted
                            : "No Registrado"
                        )
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    { staticClass: "col-auto" },
                    [
                      _c("jam-envelope", {
                        staticClass: "current-color mr-1 text-primary",
                        staticStyle: { "margin-top": "-4px" },
                        attrs: { height: "20px", width: "20px" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col pl-0" }, [
                    _c("span", { staticClass: "h3 font-weight-normal" }, [
                      _vm._v("Email")
                    ]),
                    _vm._v(" "),
                    _c("h3", [
                      _vm._v(
                        _vm._s(
                          _vm.element.email
                            ? _vm.element.email
                            : "No Registrado"
                        )
                      )
                    ])
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card" }, [
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _c("h2", {}, [_vm._v("Reservas")]),
                _vm._v(" "),
                _vm.element.orders_rel && _vm.element.orders_rel.length
                  ? _c(
                      "div",
                      _vm._l(_vm.element.orders_rel, function(el, i) {
                        return _c("div", { key: el.id, staticClass: "p-3" }, [
                          _c("div", { staticClass: "row mb-3" }, [
                            _c("div", { staticClass: "col-12 col-lg-6" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "text-primary",
                                  staticStyle: {
                                    "text-decoration": "underline"
                                  },
                                  attrs: { href: _vm.routeOrder + "/" + el.id }
                                },
                                [_vm._v("Reserva #" + _vm._s(el.id))]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "mt-4" }, [
                                _c(
                                  "h3",
                                  { staticClass: "font-weight-normal" },
                                  [_vm._v(_vm._s(el.total_format))]
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-12 col-lg-6 text-right" },
                              [_vm._v(_vm._s(el.order_date_format))]
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "row" },
                            _vm._l(el.order_details_rel, function(el2) {
                              return _c(
                                "div",
                                { key: el2.id, staticClass: "col-12 mb-4" },
                                [
                                  _c("div", { staticClass: "card" }, [
                                    _c("div", { staticClass: "card-body" }, [
                                      _c("div", { staticClass: "row" }, [
                                        el2.department_rel.image
                                          ? _c(
                                              "div",
                                              {
                                                staticClass: "col-12 col-lg-3"
                                              },
                                              [
                                                _c("img", {
                                                  staticClass:
                                                    "d-block img-fluid",
                                                  attrs: {
                                                    src:
                                                      _vm.imagesUrl +
                                                      "/projects/estates/" +
                                                      el2.department_rel.image,
                                                    alt: ""
                                                  }
                                                })
                                              ]
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _c("div", { staticClass: "col" }, [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "ml-md-0 ml-3 mt-1"
                                            },
                                            [
                                              _c(
                                                "a",
                                                {
                                                  staticClass:
                                                    "h3 text-primary",
                                                  staticStyle: {
                                                    "text-decoration":
                                                      "underline"
                                                  },
                                                  attrs: {
                                                    href:
                                                      _vm.routeProject +
                                                      "/" +
                                                      el2.project_rel.slug_es
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "Proyecto " +
                                                      _vm._s(
                                                        el2.project_rel.name_es
                                                      )
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                { staticClass: "mt-2" },
                                                [
                                                  _c(
                                                    "h3",
                                                    {
                                                      staticClass:
                                                        "font-weight-normal"
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                                Inmueble:\n                                "
                                                      ),
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "font-weight-bold"
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              el2.department_rel
                                                                .description
                                                            )
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  el2.department_rel
                                                    .type_department_id
                                                    ? _c(
                                                        "h3",
                                                        {
                                                          staticClass:
                                                            "font-weight-normal"
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                                Tipología:\n                                "
                                                          ),
                                                          _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "font-weight-bold"
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  el2
                                                                    .department_rel
                                                                    .tipology_rel
                                                                    .name
                                                                )
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      )
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  _c(
                                                    "h3",
                                                    {
                                                      staticClass:
                                                        "font-weight-normal"
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                                Vista:\n                                "
                                                      ),
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "font-weight-bold"
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              el2.department_rel
                                                                .view_rel.name
                                                            )
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "h3",
                                                    {
                                                      staticClass:
                                                        "font-weight-normal"
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                                Piso:\n                                "
                                                      ),
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "font-weight-bold"
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              el2.department_rel
                                                                .floor
                                                            )
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "h3",
                                                    {
                                                      staticClass:
                                                        "font-weight-normal"
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                                Área:\n                                "
                                                      ),
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "font-weight-bold"
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              el2.department_rel
                                                                .area
                                                            ) + "m2"
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        ])
                                      ])
                                    ])
                                  ])
                                ]
                              )
                            }),
                            0
                          )
                        ])
                      }),
                      0
                    )
                  : _c("NoData", {
                      attrs: {
                        "custom-text":
                          "El cliente no ha realizado ninguna reserva",
                        "show-title": false
                      }
                    })
              ],
              1
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-4" }, [
          _c("div", { staticClass: "card" }, [
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _c("h2", [_vm._v("Información de Contacto")]),
                _vm._v(" "),
                _c("div", { staticClass: "mb-1" }, [
                  _c(
                    "a",
                    {
                      staticClass: "h3 font-weight-normal text-primary",
                      staticStyle: { "text-decoration": "underline" },
                      attrs: { href: "mailto:" + _vm.element.email }
                    },
                    [_vm._v(_vm._s(_vm.element.email))]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "mb-2" }, [
                  _c(
                    "a",
                    {
                      staticClass: "h3 font-weight-normal text-primary",
                      staticStyle: { "text-decoration": "underline" },
                      attrs: { href: "tel:+51" + _vm.element.mobile }
                    },
                    [_vm._v(_vm._s(_vm.element.mobile_formatted))]
                  )
                ]),
                _vm._v(" "),
                _c("Contact")
              ],
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

/***/ "./resources/js/views/customers/Read.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/customers/Read.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Read_vue_vue_type_template_id_6051bdef___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Read.vue?vue&type=template&id=6051bdef& */ "./resources/js/views/customers/Read.vue?vue&type=template&id=6051bdef&");
/* harmony import */ var _Read_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Read.vue?vue&type=script&lang=js& */ "./resources/js/views/customers/Read.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Read_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Read_vue_vue_type_template_id_6051bdef___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Read_vue_vue_type_template_id_6051bdef___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/customers/Read.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/customers/Read.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/customers/Read.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Read_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Read.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/customers/Read.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Read_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/customers/Read.vue?vue&type=template&id=6051bdef&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/customers/Read.vue?vue&type=template&id=6051bdef& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Read_vue_vue_type_template_id_6051bdef___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Read.vue?vue&type=template&id=6051bdef& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/customers/Read.vue?vue&type=template&id=6051bdef&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Read_vue_vue_type_template_id_6051bdef___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Read_vue_vue_type_template_id_6051bdef___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);