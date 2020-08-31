(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/pages/slider/index"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/slider/Index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/slider/Index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/BreadCrumb */ "./resources/js/components/BreadCrumb.vue");
/* harmony import */ var vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-loading-skeleton */ "./node_modules/vue-loading-skeleton/dist/vue-loading-skeleton.esm.js");
/* harmony import */ var _components_modals_Destroy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/modals/Destroy */ "./resources/js/components/modals/Destroy.vue");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.common.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_NoData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/NoData */ "./resources/js/components/NoData.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Destroy: _components_modals_Destroy__WEBPACK_IMPORTED_MODULE_2__["default"],
    draggable: vuedraggable__WEBPACK_IMPORTED_MODULE_3___default.a,
    NoData: _components_NoData__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: {
    routeCreate: String,
    route: String,
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
    getEls: function getEls() {
      var _this2 = this;

      this.loadingEls = true;
      axios.get(this.routeGetAll).then(function (response) {
        _this2.elements = response.data;
        _this2.loadingEls = false;
      })["catch"](function (error) {});
    },
    deleteEl: function deleteEl(id) {
      this.modalDestroy = true;
      this.getEl(id);
    },
    getEl: function getEl(id) {
      var _this3 = this;

      this.loadingGet = true;
      axios.get(this.route + "/json/get/" + id).then(function (response) {
        _this3.element = response.data;
        _this3.loadingGet = false;
      })["catch"](function (error) {});
    },
    handleChange: function handleChange() {
      var _this4 = this;

      axios.put(this.routeOrder, this.elements).then(function (response) {
        _this4.restore();

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
    },
    restoreEl: function restoreEl() {
      this.element = {};
      this.modalDestroy = false;
    },
    restore: function restore() {
      this.modalDestroy = false;
      this.getEls();
    }
  },
  created: function created() {
    this.getEls();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/slider/Index.vue?vue&type=template&id=7cace6fa&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/slider/Index.vue?vue&type=template&id=7cace6fa& ***!
  \**********************************************************************************************************************************************************************************************************/
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
                      attrs: { title: "Slider", parent: "", active: "Slider" }
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
                        [_c("jam-pictures", { staticClass: "current-color" })],
                        1
                      ),
                      _vm._v(" "),
                      _c("span", { staticClass: "btn-inner--text" }, [
                        _vm._v("Nuevo Slide")
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
              _vm._l(4, function(i) {
                return _c(
                  "div",
                  { key: i, staticClass: "col-12 mb-4" },
                  [_c("Skeleton", { attrs: { height: "150px" } })],
                  1
                )
              }),
              0
            )
          : _c(
              "div",
              [
                _vm.elements.length
                  ? _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-12" }, [
                        _c("p", [_vm._v(" " + _vm._s(_vm.messageOrder) + " ")])
                      ])
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.elements.length
                  ? _c(
                      "draggable",
                      {
                        staticClass: "row",
                        on: { change: _vm.handleChange },
                        model: {
                          value: _vm.elements,
                          callback: function($$v) {
                            _vm.elements = $$v
                          },
                          expression: "elements"
                        }
                      },
                      _vm._l(_vm.elements, function(el) {
                        return _c(
                          "div",
                          { key: el.id, staticClass: "col-12 mb-4" },
                          [
                            _c("div", { staticClass: "card" }, [
                              _c(
                                "div",
                                { staticClass: "card-body position-relative" },
                                [
                                  _c("div", { staticClass: "text-right" }, [
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "btn btn-sm btn-inverse-info",
                                        attrs: {
                                          href: _vm.route + "/editar/" + el.id
                                        }
                                      },
                                      [_vm._v("Editar")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "button",
                                      {
                                        staticClass:
                                          "btn btn-sm btn-inverse-danger",
                                        on: {
                                          click: function($event) {
                                            return _vm.deleteEl(el.id)
                                          }
                                        }
                                      },
                                      [_vm._v("Eliminar")]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "row" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "col-12 col-lg-6 mb-3 mb-lg-0"
                                      },
                                      [
                                        _c("div", { staticClass: " mb-2" }, [
                                          _c(
                                            "label",
                                            { staticClass: "font-weight-bold" },
                                            [_vm._v("Banner ES")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "a",
                                            {
                                              staticClass:
                                                "btn btn-outline-info btn-sm ml-3",
                                              attrs: {
                                                href:
                                                  _vm.imagesUrl +
                                                  "/slider/" +
                                                  el.image_es,
                                                target: "_blank"
                                              }
                                            },
                                            [_vm._v("Ver imagen")]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("img", {
                                          staticClass: "img-fluid",
                                          attrs: {
                                            src:
                                              _vm.imagesUrl +
                                              "/slider/" +
                                              el.image_es,
                                            height: "400",
                                            alt: ""
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "col-12 col-lg-6" },
                                      [
                                        _c("div", { staticClass: "row" }, [
                                          _c(
                                            "div",
                                            { staticClass: "col-12 mb-3" },
                                            [
                                              _c(
                                                "div",
                                                { staticClass: " mb-2" },
                                                [
                                                  _c(
                                                    "label",
                                                    {
                                                      staticClass:
                                                        "font-weight-bold"
                                                    },
                                                    [_vm._v("Banner EN")]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "a",
                                                    {
                                                      staticClass:
                                                        "btn btn-outline-info btn-sm ml-3",
                                                      attrs: {
                                                        href:
                                                          _vm.imagesUrl +
                                                          "/slider/" +
                                                          el.image_en,
                                                        target: "_blank"
                                                      }
                                                    },
                                                    [_vm._v("Ver imagen")]
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c("img", {
                                                attrs: {
                                                  src:
                                                    _vm.imagesUrl +
                                                    "/slider/" +
                                                    el.image_en,
                                                  height: "100",
                                                  alt: ""
                                                }
                                              })
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass: "col col-lg-6 mb-3"
                                            },
                                            [
                                              _c(
                                                "div",
                                                { staticClass: " mb-2" },
                                                [
                                                  _c(
                                                    "label",
                                                    {
                                                      staticClass:
                                                        "font-weight-bold"
                                                    },
                                                    [
                                                      _vm._v(
                                                        "Banner Responsive ES"
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "a",
                                                    {
                                                      staticClass:
                                                        "btn btn-outline-info btn-sm ml-3",
                                                      attrs: {
                                                        href:
                                                          _vm.imagesUrl +
                                                          "/slider/" +
                                                          el.image_responsive_es,
                                                        target: "_blank"
                                                      }
                                                    },
                                                    [_vm._v("Ver imagen")]
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c("img", {
                                                attrs: {
                                                  src:
                                                    _vm.imagesUrl +
                                                    "/slider/" +
                                                    el.image_responsive_es,
                                                  alt: "",
                                                  height: "75"
                                                }
                                              })
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass: "col col-lg-6 mb-3"
                                            },
                                            [
                                              _c(
                                                "div",
                                                { staticClass: " mb-2" },
                                                [
                                                  _c(
                                                    "label",
                                                    {
                                                      staticClass:
                                                        "font-weight-bold"
                                                    },
                                                    [
                                                      _vm._v(
                                                        "Banner Responsive EN"
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "a",
                                                    {
                                                      staticClass:
                                                        "btn btn-outline-info btn-sm ml-3",
                                                      attrs: {
                                                        href:
                                                          _vm.imagesUrl +
                                                          "/slider/" +
                                                          el.image_responsive_en,
                                                        target: "_blank"
                                                      }
                                                    },
                                                    [_vm._v("Ver imagen")]
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c("img", {
                                                attrs: {
                                                  src:
                                                    _vm.imagesUrl +
                                                    "/slider/" +
                                                    el.image_responsive_en,
                                                  alt: "",
                                                  height: "75"
                                                }
                                              })
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "col-12 col-lg-6" },
                                            [
                                              _c(
                                                "label",
                                                {
                                                  staticClass:
                                                    "font-weight-bold d-block"
                                                },
                                                [_vm._v("Válido")]
                                              ),
                                              _vm._v(" "),
                                              _c("p", [
                                                _vm._v(
                                                  "Desde " +
                                                    _vm._s(el.from_format) +
                                                    " hasta " +
                                                    _vm._s(el.to_format)
                                                )
                                              ])
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "col-12 col-lg-6" },
                                            [
                                              _c(
                                                "label",
                                                {
                                                  staticClass:
                                                    "font-weight-bold"
                                                },
                                                [_vm._v("Estado")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "p",
                                                { staticClass: "mb-0" },
                                                [
                                                  el.active
                                                    ? _c("jam-check", {
                                                        staticClass:
                                                          "text-success current-color"
                                                      })
                                                    : _c("jam-close", {
                                                        staticClass:
                                                          "text-danger current-color"
                                                      }),
                                                  _vm._v(
                                                    _vm._s(
                                                      el.active
                                                        ? "Activo"
                                                        : "Inactivo"
                                                    )
                                                  )
                                                ],
                                                1
                                              )
                                            ]
                                          )
                                        ])
                                      ]
                                    )
                                  ])
                                ]
                              )
                            ])
                          ]
                        )
                      }),
                      0
                    )
                  : _c("NoData")
              ],
              1
            )
      ]),
      _vm._v(" "),
      _c("destroy", {
        attrs: {
          element: "slide",
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

/***/ "./resources/js/views/slider/Index.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/slider/Index.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_7cace6fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=7cace6fa& */ "./resources/js/views/slider/Index.vue?vue&type=template&id=7cace6fa&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/slider/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_7cace6fa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_7cace6fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/slider/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/slider/Index.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/slider/Index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/slider/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/slider/Index.vue?vue&type=template&id=7cace6fa&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/slider/Index.vue?vue&type=template&id=7cace6fa& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_7cace6fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=7cace6fa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/slider/Index.vue?vue&type=template&id=7cace6fa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_7cace6fa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_7cace6fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);