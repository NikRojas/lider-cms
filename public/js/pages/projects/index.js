(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/pages/projects/index"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/projects/Index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/projects/Index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/BreadCrumb */ "./resources/js/components/BreadCrumb.vue");
/* harmony import */ var vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-loading-skeleton */ "./node_modules/vue-loading-skeleton/dist/vue-loading-skeleton.esm.js");
/* harmony import */ var _components_NoData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/NoData */ "./resources/js/components/NoData.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    NoData: _components_NoData__WEBPACK_IMPORTED_MODULE_2__["default"],
    Skeleton: vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__["Skeleton"]
  },
  props: {
    routeCreate: String,
    route: String,
    appUrl: String,
    routeGetAll: String,
    routeOrder: String,
    messageOrder: String,
    imagesUrl: String
  },
  data: function data() {
    return {
      loadingEls: false,
      elements: [],
      element: {},
      modalDestroy: false,
      loadingGet: false,
      requestSubmit: false
    };
  },
  methods: {
    getEls: function getEls() {
      var _this = this;

      this.loadingEls = true;
      axios.get(this.routeGetAll).then(function (response) {
        _this.elements = response.data;
        _this.loadingEls = false;
      })["catch"](function (error) {});
    }
  },
  created: function created() {
    this.getEls();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/projects/Index.vue?vue&type=template&id=befd39c8&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/projects/Index.vue?vue&type=template&id=befd39c8& ***!
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
                { staticClass: "col-6 col-md-7" },
                [
                  _c("BreadCrumb", {
                    attrs: {
                      title: "Proyectos",
                      parent: "",
                      active: "Proyectos"
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
                    attrs: { href: _vm.routeCreate }
                  },
                  [
                    _c(
                      "span",
                      { staticClass: "btn-inner--icon" },
                      [_c("jam-building", { staticClass: "current-color" })],
                      1
                    ),
                    _vm._v(" "),
                    _c("span", { staticClass: "btn-inner--text" }, [
                      _vm._v("Nuevo Proyecto")
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
      _vm.loadingEls
        ? _c(
            "div",
            { staticClass: "row" },
            _vm._l(6, function(i) {
              return _c(
                "div",
                { key: i, staticClass: "col-12 col-lg-4 mb-4" },
                [_c("Skeleton", { attrs: { height: "400px" } })],
                1
              )
            }),
            0
          )
        : _c(
            "div",
            [
              _vm.elements.length
                ? _c(
                    "div",
                    { staticClass: "row" },
                    [
                      _c("div", { staticClass: "col-12" }, [
                        _c("p", [_vm._v(_vm._s(_vm.messageOrder))])
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.elements, function(el) {
                        return _c(
                          "div",
                          { key: el.id, staticClass: "col-12 col-lg-4 mb-4" },
                          [
                            _c(
                              "div",
                              { staticClass: "card position-relative" },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "text-center position-absolute pl-3 pt-3"
                                  },
                                  [
                                    _c("img", {
                                      attrs: {
                                        src:
                                          _vm.imagesUrl +
                                          "/projects/" +
                                          el.logo,
                                        height: "50",
                                        alt: el.name_es
                                      }
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c("img", {
                                  staticClass: "object-fit--cover",
                                  attrs: {
                                    height: "300",
                                    src:
                                      _vm.imagesUrl +
                                      "/projects/" +
                                      el.images_format[0],
                                    alt: ""
                                  }
                                }),
                                _vm._v(" "),
                                _c("div", { staticClass: "card-body" }, [
                                  _c("div", [
                                    _c("div", { staticClass: "text-right" }, [
                                      _c(
                                        "a",
                                        {
                                          staticStyle: {
                                            "text-decoration": "underline"
                                          },
                                          attrs: {
                                            href:
                                              _vm.appUrl +
                                              "/proyectos/" +
                                              el.slug_es
                                          }
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(_vm.appUrl) +
                                              "/proyectos/" +
                                              _vm._s(el.slug_es)
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("br"),
                                      _vm._v(" "),
                                      _c(
                                        "a",
                                        {
                                          staticStyle: {
                                            "text-decoration": "underline"
                                          },
                                          attrs: {
                                            href:
                                              _vm.appUrl +
                                              "/projects/" +
                                              el.slug_en
                                          }
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(_vm.appUrl) +
                                              "/projects/" +
                                              _vm._s(el.slug_en)
                                          )
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "badge badge-warning badge-md"
                                      },
                                      [_vm._v(_vm._s(el.status_rel.name_es))]
                                    ),
                                    _vm._v(" "),
                                    _c("h2", { staticClass: "mt-1" }, [
                                      _vm._v(_vm._s(el.name_es))
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "mb-3" }, [
                                      _c("div", [
                                        _c(
                                          "h4",
                                          {
                                            staticClass:
                                              "d-inline-block font-weight-normal"
                                          },
                                          [_vm._v("Ubicación:")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "h4",
                                          { staticClass: "d-inline-block" },
                                          [
                                            _vm._v(
                                              _vm._s(el.location) +
                                                ", " +
                                                _vm._s(el.ubigeo_rel.district) +
                                                " - " +
                                                _vm._s(el.ubigeo_rel.department)
                                            )
                                          ]
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("div", [
                                        _c("div", [
                                          _c(
                                            "h4",
                                            {
                                              staticClass:
                                                "d-inline-block font-weight-normal"
                                            },
                                            [_vm._v("Precio Total Soles:")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "h4",
                                            { staticClass: "d-inline-block" },
                                            [
                                              _vm._v(
                                                "S/" +
                                                  _vm._s(el.price_total_format)
                                              )
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("div", [
                                          _c(
                                            "h4",
                                            {
                                              staticClass:
                                                "d-inline-block font-weight-normal"
                                            },
                                            [_vm._v("Precio Total Dolares:")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "h4",
                                            { staticClass: "d-inline-block" },
                                            [
                                              _vm._v(
                                                "$" +
                                                  _vm._s(
                                                    el.price_total_foreign_format
                                                  )
                                              )
                                            ]
                                          )
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "h4",
                                        {
                                          staticClass:
                                            "d-inline-block font-weight-normal"
                                        },
                                        [_vm._v("Precio de Reserva:")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "h2",
                                        { staticClass: "d-inline-block" },
                                        [
                                          _vm._v(
                                            "S/. " + _vm._s(el.price_format)
                                          )
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "d-flex" }, [
                                      _c(
                                        "div",
                                        { staticClass: "mr-auto d-inline" },
                                        [
                                          _c(
                                            "a",
                                            {
                                              staticClass:
                                                "btn  btn-sm btn-inverse-primary",
                                              attrs: {
                                                href:
                                                  "proyectos/galeria/" +
                                                  el.slug_es
                                              }
                                            },
                                            [_vm._v("Ir a Tipologias")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "a",
                                            {
                                              staticClass:
                                                "btn btn-sm btn-inverse-primary",
                                              attrs: {
                                                href:
                                                  "proyectos/documentos/" +
                                                  el.slug_es
                                              }
                                            },
                                            [_vm._v("Ir a Documentos")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "a",
                                            {
                                              staticClass:
                                                "btn btn-sm btn-inverse-primary",
                                              attrs: {
                                                href:
                                                  "proyectos/galeria/" +
                                                  el.slug_es
                                              }
                                            },
                                            [_vm._v("Ir a Galeria")]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "ml-auto  d-inline" },
                                        [
                                          _c(
                                            "a",
                                            {
                                              staticClass:
                                                "btn  btn-sm btn-inverse-info",
                                              attrs: {
                                                href:
                                                  _vm.route +
                                                  "/editar/" +
                                                  el.slug_es
                                              }
                                            },
                                            [_vm._v("Editar")]
                                          )
                                        ]
                                      )
                                    ])
                                  ])
                                ])
                              ]
                            )
                          ]
                        )
                      })
                    ],
                    2
                  )
                : _c("NoData")
            ],
            1
          )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/projects/Index.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/projects/Index.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_befd39c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=befd39c8& */ "./resources/js/views/projects/Index.vue?vue&type=template&id=befd39c8&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/projects/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_befd39c8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_befd39c8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/projects/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/projects/Index.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/projects/Index.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/projects/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/projects/Index.vue?vue&type=template&id=befd39c8&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/projects/Index.vue?vue&type=template&id=befd39c8& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_befd39c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=befd39c8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/projects/Index.vue?vue&type=template&id=befd39c8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_befd39c8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_befd39c8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);