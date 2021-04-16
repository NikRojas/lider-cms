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
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.umd.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_3__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Skeleton: vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__["Skeleton"],
    draggable: vuedraggable__WEBPACK_IMPORTED_MODULE_3___default.a
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
    handleChange: function handleChange() {
      var _this = this;

      axios.put(this.routeOrder, this.elements).then(function (response) {
        _this.restore();

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
    restore: function restore() {
      this.getEls();
    },
    getEls: function getEls() {
      var _this2 = this;

      this.loadingEls = true;
      axios.get(this.routeGetAll).then(function (response) {
        _this2.elements = response.data;
        _this2.loadingEls = false;
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
                ? _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-12" }, [
                      _c("p", [_vm._v(_vm._s(_vm.messageOrder))])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-12" },
                      [
                        _c(
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
                              {
                                key: el.id,
                                staticClass: "col-12 col-lg-6 mb-4"
                              },
                              [
                                _c("div", { staticClass: "card" }, [
                                  _c("div", { staticClass: "card-body" }, [
                                    _c("div", { staticClass: "row mb-2" }, [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col-lg-4 col-12 mb-4 mb-lg"
                                        },
                                        [
                                          _c("img", {
                                            staticClass: "img-fluid",
                                            attrs: {
                                              src:
                                                _vm.imagesUrl +
                                                "/projects/" +
                                                el.images_format[0],
                                              alt: ""
                                            }
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "col-lg-8 col-12" },
                                        [
                                          _c("img", {
                                            attrs: {
                                              src:
                                                _vm.imagesUrl +
                                                "/projects/" +
                                                el.logo_colour,
                                              height: "30",
                                              alt: el.name_es
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "row mt-2" },
                                            [
                                              _c(
                                                "div",
                                                { staticClass: "col-12 mb-2" },
                                                [
                                                  _c("div", {}, [
                                                    _c(
                                                      "a",
                                                      {
                                                        staticStyle: {
                                                          "text-decoration":
                                                            "underline"
                                                        },
                                                        attrs: {
                                                          target: "_blank",
                                                          href:
                                                            _vm.appUrl +
                                                            "/" +
                                                            el.slug_es
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(_vm.appUrl) +
                                                            "/" +
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
                                                          "text-decoration":
                                                            "underline"
                                                        },
                                                        attrs: {
                                                          target: "_blank",
                                                          href:
                                                            _vm.appUrl +
                                                            "/en/" +
                                                            el.slug_en
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(_vm.appUrl) +
                                                            "/en/" +
                                                            _vm._s(el.slug_en)
                                                        )
                                                      ]
                                                    )
                                                  ])
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("div", { staticClass: "row" }, [
                                            _c(
                                              "div",
                                              { staticClass: "col-12" },
                                              [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "badge badge-warning badge-md"
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        el.status_rel.name_es
                                                      )
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "h2",
                                                  { staticClass: "mt-1" },
                                                  [_vm._v(_vm._s(el.name_es))]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  { staticClass: "mb-3" },
                                                  [
                                                    _c(
                                                      "div",
                                                      { staticClass: "row" },
                                                      [
                                                        _c(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "col-12 mb-1"
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                Se muestra en la Web:\n                                "
                                                            ),
                                                            _c(
                                                              "span",
                                                              {
                                                                class: el.active
                                                                  ? "font-weight-bold text-success"
                                                                  : "font-weight-bold text-danger"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    el.active
                                                                      ? "Sí"
                                                                      : "No"
                                                                  )
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "col-12"
                                                          },
                                                          [
                                                            _c("div", [
                                                              _c(
                                                                "h4",
                                                                {
                                                                  staticClass:
                                                                    "d-inline-block font-weight-normal"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\n                                    Ubicación:\n                                  "
                                                                  )
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "h4",
                                                                {
                                                                  staticClass:
                                                                    "d-inline-block"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\n                                    " +
                                                                      _vm._s(
                                                                        el.location
                                                                      ) +
                                                                      ",\n                                    " +
                                                                      _vm._s(
                                                                        el
                                                                          .ubigeo_rel
                                                                          .district
                                                                      ) +
                                                                      " -\n                                    " +
                                                                      _vm._s(
                                                                        el
                                                                          .ubigeo_rel
                                                                          .department
                                                                      ) +
                                                                      "\n                                  "
                                                                  )
                                                                ]
                                                              )
                                                            ]),
                                                            _vm._v(" "),
                                                            _c("div", [
                                                              el.price_total
                                                                ? _c("div", [
                                                                    _c(
                                                                      "h4",
                                                                      {
                                                                        staticClass:
                                                                          "d-inline-block font-weight-normal"
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          "\n                                      Precio Soles Desde:\n                                    "
                                                                        )
                                                                      ]
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "h4",
                                                                      {
                                                                        staticClass:
                                                                          "d-inline-block"
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          "\n                                      " +
                                                                            _vm._s(
                                                                              el.price_total_format
                                                                            ) +
                                                                            "\n                                    "
                                                                        )
                                                                      ]
                                                                    )
                                                                  ])
                                                                : _vm._e(),
                                                              _vm._v(" "),
                                                              el.price_total_foreign
                                                                ? _c("div", [
                                                                    _c(
                                                                      "h4",
                                                                      {
                                                                        staticClass:
                                                                          "d-inline-block font-weight-normal"
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          "\n                                      Precio Dólares Desde:\n                                    "
                                                                        )
                                                                      ]
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "h4",
                                                                      {
                                                                        staticClass:
                                                                          "d-inline-block"
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          "\n                                      " +
                                                                            _vm._s(
                                                                              el.price_total_foreign_format
                                                                            ) +
                                                                            "\n                                    "
                                                                        )
                                                                      ]
                                                                    )
                                                                  ])
                                                                : _vm._e()
                                                            ])
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "col-12"
                                                          },
                                                          [
                                                            _c("div", [
                                                              _c(
                                                                "h4",
                                                                {
                                                                  staticClass:
                                                                    "d-inline-block font-weight-normal"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\n                                    N° Cotizaciones:\n                                  "
                                                                  )
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "h4",
                                                                {
                                                                  staticClass:
                                                                    "d-inline-block"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\n                                    " +
                                                                      _vm._s(
                                                                        el.quotations_rel_count
                                                                      ) +
                                                                      "\n                                  "
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
                                                                [
                                                                  _vm._v(
                                                                    "\n                                    N° Documentos:\n                                  "
                                                                  )
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "h4",
                                                                {
                                                                  staticClass:
                                                                    "d-inline-block"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\n                                    " +
                                                                      _vm._s(
                                                                        el.files_rel_count
                                                                      ) +
                                                                      "\n                                  "
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
                                                                [
                                                                  _vm._v(
                                                                    "\n                                    N° Tipologias:\n                                  "
                                                                  )
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "h4",
                                                                {
                                                                  staticClass:
                                                                    "d-inline-block"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\n                                    " +
                                                                      _vm._s(
                                                                        el.tipologies_rel_count
                                                                      ) +
                                                                      "\n                                  "
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
                                                                [
                                                                  _vm._v(
                                                                    "\n                                    N° Imágenes en la Galeria:\n                                  "
                                                                  )
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "h4",
                                                                {
                                                                  staticClass:
                                                                    "d-inline-block"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\n                                    " +
                                                                      _vm._s(
                                                                        el.gallery_rel_count
                                                                      ) +
                                                                      "\n                                  "
                                                                  )
                                                                ]
                                                              )
                                                            ])
                                                          ]
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          ])
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "row" }, [
                                      _c("div", { staticClass: "col-12" }, [
                                        _c("div", { staticClass: "d-flex" }, [
                                          _c(
                                            "div",
                                            { staticClass: "ml-auto d-inline" },
                                            [
                                              _c(
                                                "a",
                                                {
                                                  staticClass:
                                                    "btn btn-sm mb-2 btn-outline-primary",
                                                  attrs: {
                                                    href:
                                                      "proyectos/banners/" +
                                                      el.slug_es
                                                  }
                                                },
                                                [_vm._v("Ir a Banners")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "a",
                                                {
                                                  staticClass:
                                                    "btn btn-sm mb-2 btn-outline-primary",
                                                  attrs: {
                                                    href:
                                                      "proyectos/tipologias/" +
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
                                                    "btn btn-sm mb-2 btn-outline-primary",
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
                                                    "btn btn-sm mb-2 btn-outline-primary",
                                                  attrs: {
                                                    href:
                                                      "proyectos/galeria/" +
                                                      el.slug_es
                                                  }
                                                },
                                                [_vm._v("Ir a Galeria")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "a",
                                                {
                                                  staticClass:
                                                    "btn btn-sm mb-2 btn-outline-primary",
                                                  attrs: {
                                                    href:
                                                      "proyectos/tour-virtual/" +
                                                      el.slug_es
                                                  }
                                                },
                                                [_vm._v("Ir a Tour Virtual")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "a",
                                                {
                                                  staticClass:
                                                    "btn btn-sm mb-2 btn-outline-primary",
                                                  attrs: {
                                                    href:
                                                      "proyectos/cotizaciones/" +
                                                      el.slug_es
                                                  }
                                                },
                                                [_vm._v("Ir a Cotizaciones")]
                                              )
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("div", { staticClass: "d-flex" }, [
                                          _c(
                                            "div",
                                            { staticClass: "ml-auto d-inline" },
                                            [
                                              _c(
                                                "a",
                                                {
                                                  staticClass:
                                                    "btn btn-sm btn-inverse-primary",
                                                  attrs: {
                                                    href:
                                                      _vm.route +
                                                      "/" +
                                                      el.slug_es
                                                  }
                                                },
                                                [_vm._v("Ver Proyecto")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "a",
                                                {
                                                  staticClass:
                                                    "btn btn-sm btn-inverse-info",
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
                                  ])
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