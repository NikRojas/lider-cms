(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/pages/orders/read"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Button.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Button.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    text: String,
    classes: Array,
    requestServer: Boolean
  },
  methods: {
    click: function click() {
      this.$emit('click');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/orders/Read.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/orders/Read.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ant_design_vue_lib_timeline_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ant-design-vue/lib/timeline/style/css */ "./node_modules/ant-design-vue/lib/timeline/style/css.js");
/* harmony import */ var ant_design_vue_lib_timeline_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ant_design_vue_lib_timeline_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_NoData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/NoData */ "./resources/js/components/NoData.vue");
/* harmony import */ var _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/BreadCrumb */ "./resources/js/components/BreadCrumb.vue");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Button */ "./resources/js/components/Button.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    NoData: _components_NoData__WEBPACK_IMPORTED_MODULE_1__["default"],
    Button: _components_Button__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: {
    routeCustomer: String,
    routeResend: String,
    timelineParent: Object,
    imagesUrl: String,
    elementParent: Object,
    routeProject: String,
    routeReturn: String
  },
  data: function data() {
    return {
      element: {},
      modalResend: false,
      resendElement: {},
      requestSubmit: false,
      requestSap: false,
      sap: {
        sended: false,
        success: false,
        message: ''
      }
    };
  },
  methods: {
    reloadPage: function reloadPage() {
      window.location.reload();
    },
    sendToSap: function sendToSap() {
      var _this = this;

      this.requestSap = true;
      axios.post(this.routeResend + '/sap/' + this.elementParent.id).then(function (response) {
        _this.requestSap = false;
        _this.sap.message = response.data.message;
        _this.sap.sended = true;
        _this.sap.success = response.data.success;

        if (!response.data.success) {
          setTimeout(function () {
            _this.sap.message = '';
            _this.sap.success = false;
            _this.sap.sended = false;
          }, 5000);
        }
      })["catch"](function (error) {
        _this.requestSap = false;
        _this.sap.sended = true;
        _this.sap.message = error.response.data.message;
        setTimeout(function () {
          _this.sap.message = '';
          _this.sap.sended = false;
        }, 5000);
      });
    },
    resendConfirm: function resendConfirm() {
      var _this2 = this;

      this.requestSubmit = true;
      axios.post(this.routeResend + '/resend/' + this.resendElement.data.order_id, this.resendElement).then(function (response) {
        _this2.requestServer = false;
        document.location.href = response.data.route;
      })["catch"](function (error) {
        _this2.requestServer = false;
        document.location.href = error.response.data.route;
      });
    },
    resend: function resend(value) {
      this.resendElement = value;
      this.modalResend = true;
    },
    restoreResend: function restoreResend() {
      this.resendElement = {};
      this.modalResend = false;
    }
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Button.vue?vue&type=style&index=0&id=e0422746&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Button.vue?vue&type=style&index=0&id=e0422746&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.loading-svg[data-v-e0422746]{\r\n    fill: currentColor;\r\n    stroke: currentColor;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Button.vue?vue&type=style&index=0&id=e0422746&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Button.vue?vue&type=style&index=0&id=e0422746&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Button.vue?vue&type=style&index=0&id=e0422746&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Button.vue?vue&type=style&index=0&id=e0422746&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Button.vue?vue&type=template&id=e0422746&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Button.vue?vue&type=template&id=e0422746&scoped=true& ***!
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
  return _c(
    "button",
    {
      staticClass: "btn",
      class: _vm.classes,
      attrs: { disabled: _vm.requestServer == true },
      on: { click: _vm.click }
    },
    [
      _vm.requestServer
        ? _c("span", [
            _vm._v("\n        Cargando \n        "),
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
                _c("g", { attrs: { fill: "none", "fill-rule": "evenodd" } }, [
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
                ])
              ]
            )
          ])
        : _c("span", [_vm._v(_vm._s(_vm.text))])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/orders/Read.vue?vue&type=template&id=a94e4b1e&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/orders/Read.vue?vue&type=template&id=a94e4b1e& ***!
  \*********************************************************************************************************************************************************************************************************/
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
                  { staticClass: "col-12 col-lg-7" },
                  [
                    _c("BreadCrumb", {
                      attrs: {
                        title: "Reserva #" + _vm.element.id,
                        parent: "Ventas y Estadísticas",
                        active: "Ventas"
                      }
                    }),
                    _vm._v(" "),
                    _vm._v(
                      "\n            Registrado el " +
                        _vm._s(_vm.element.order_date_format) +
                        "\n          "
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-12 col-lg text-right" }, [
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
                        [
                          _c("jam-arrow-left", { staticClass: "current-color" })
                        ],
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
            _c("div", { staticClass: "row mb-4" }, [
              _c("div", { staticClass: "col-12" }, [
                _c("div", { staticClass: "card" }, [
                  _c(
                    "div",
                    { staticClass: "card-body" },
                    [
                      _vm._m(0),
                      _vm._v(" "),
                      _vm._l(_vm.element.order_details_rel, function(el) {
                        return _c(
                          "div",
                          { key: el.id, staticClass: "card mb-4" },
                          [
                            _c("div", { staticClass: "row p-2 p-md-3" }, [
                              _c(
                                "div",
                                {
                                  staticClass: "col-9 d-flex align-items-center"
                                },
                                [
                                  _c("div", { staticClass: "row w-100" }, [
                                    _c("div", { staticClass: "col-12" }, [
                                      el.department_rel.image
                                        ? _c("img", {
                                            staticClass:
                                              "ml-md-0 ml-3 d-block d-md-inline",
                                            attrs: {
                                              height: "50",
                                              src:
                                                _vm.imagesUrl +
                                                "/projects/estates/" +
                                                el.department_rel.image,
                                              alt: ""
                                            }
                                          })
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "ml-md-0 ml-3 mt-1" },
                                        [
                                          _c(
                                            "a",
                                            {
                                              staticClass: "h3 text-primary",
                                              staticStyle: {
                                                "text-decoration": "underline"
                                              },
                                              attrs: {
                                                href:
                                                  _vm.routeProject +
                                                  "/" +
                                                  el.project_rel.slug_es
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "Projecto " +
                                                  _vm._s(el.project_rel.name_es)
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("div", { staticClass: "mt-2" }, [
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
                                                        el.department_rel
                                                          .description
                                                      )
                                                    )
                                                  ]
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            el.department_rel.type_department_id
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
                                                            el.department_rel
                                                              .tipology_rel.name
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
                                                        el.department_rel
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
                                                        el.department_rel.floor
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
                                                        el.department_rel.area
                                                      ) + "m2"
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          ])
                                        ]
                                      )
                                    ])
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-3 d-flex align-items-center justify-content-center"
                                },
                                [
                                  _vm._v("Precio Separación "),
                                  _c("br"),
                                  _vm._v(" " + _vm._s(el.total_price_format))
                                ]
                              )
                            ])
                          ]
                        )
                      })
                    ],
                    2
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row mb-4 mb-lg-0" }, [
              _c("div", { staticClass: "col-12" }, [
                _c("h2", { staticClass: "mb-3" }, [
                  _vm._v("Historial de la Reserva")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card" }, [
                  _c(
                    "div",
                    { staticClass: "card-body" },
                    _vm._l(_vm.timelineParent, function(el, i) {
                      return _c(
                        "div",
                        { key: i },
                        [
                          _c("h3", { staticClass: "text-primary" }, [
                            _vm._v(_vm._s(i))
                          ]),
                          _vm._v(" "),
                          _vm._l(el, function(el2, j) {
                            return _c(
                              "div",
                              { key: j },
                              [
                                _c(
                                  "h4",
                                  {
                                    staticClass: "mb-4 text-dark",
                                    staticStyle: { opacity: ".6" }
                                  },
                                  [_vm._v(_vm._s(j))]
                                ),
                                _vm._v(" "),
                                _c(
                                  "a-timeline",
                                  _vm._l(el2, function(el3, k) {
                                    return _c(
                                      "a-timeline-item",
                                      { key: k, attrs: { color: "#1762e6" } },
                                      [
                                        _c("div", { staticClass: "px-2" }, [
                                          _c("div", { staticClass: "row" }, [
                                            _c(
                                              "div",
                                              { staticClass: "col-12 mb-2" },
                                              [
                                                _vm._v(
                                                  "\n                            " +
                                                    _vm._s(el3.message) +
                                                    "\n                            "
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            el3.type != "Reserve Created"
                                              ? _c(
                                                  "div",
                                                  {
                                                    staticClass: "col-12 mb-2"
                                                  },
                                                  [
                                                    _c(
                                                      "button",
                                                      {
                                                        staticClass:
                                                          "btn btn-sm btn-outline-primary",
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            $event.preventDefault()
                                                            return _vm.resend(
                                                              el3
                                                            )
                                                          }
                                                        }
                                                      },
                                                      [_vm._v("Reenviar email")]
                                                    )
                                                  ]
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              {
                                                staticClass: "col-12 text-dark",
                                                staticStyle: { opacity: ".6" }
                                              },
                                              [_vm._v(_vm._s(el3.time_format))]
                                            )
                                          ])
                                        ])
                                      ]
                                    )
                                  }),
                                  1
                                )
                              ],
                              1
                            )
                          })
                        ],
                        2
                      )
                    }),
                    0
                  )
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-4" }, [
            _c("div", { staticClass: "card mb-4" }, [
              _c("div", { staticClass: "card-body" }, [
                _c("div", { staticClass: "mb-2" }, [
                  _c("h2", { staticClass: "d-inline mr-1" }, [
                    _vm._v("Estado de Pago:")
                  ]),
                  _vm._v(" "),
                  _c("div", {
                    staticClass: "d-inline-block",
                    domProps: {
                      innerHTML: _vm._s(
                        _vm.element.transaction_latest_rel.status_rel
                          .name_format
                      )
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row mb-4" }, [
                  _c("div", { staticClass: "col-12" }, [
                    _vm._v(
                      "Procesado el " +
                        _vm._s(
                          _vm.element.transaction_latest_rel
                            .transaction_date_format
                        )
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row mb-2" }, [
                  _c("div", { staticClass: "col-6" }, [_vm._v("Subtotal")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-6 text-right" }, [
                    _vm._v(_vm._s(_vm.element.total_format))
                  ])
                ]),
                _vm._v(" "),
                _c("hr", { staticClass: "mt-2 mb-3" }),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-6" }, [_vm._v("Total")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-6 text-right" }, [
                    _vm._v(_vm._s(_vm.element.total_format))
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-body" }, [
                _c("h2", [_vm._v("Cliente")]),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "h3 text-primary",
                    staticStyle: { "text-decoration": "underline" },
                    attrs: {
                      href:
                        _vm.routeCustomer + "/" + _vm.element.customer_rel.slug
                    }
                  },
                  [_vm._v(_vm._s(_vm.element.customer_rel.full_name))]
                ),
                _vm._v(" "),
                _c("h3", { staticClass: "font-weight-normal" }, [
                  _vm._v(
                    _vm._s(
                      _vm.element.customer_rel.document_type_rel.description
                    ) +
                      ": " +
                      _vm._s(_vm.element.customer_rel.document_number)
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "mb-1" }, [
                  _c(
                    "a",
                    {
                      staticClass: "h3 font-weight-normal text-primary",
                      staticStyle: { "text-decoration": "underline" },
                      attrs: {
                        href: "mailto:" + _vm.element.customer_rel.email
                      }
                    },
                    [_vm._v(_vm._s(_vm.element.customer_rel.email))]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "mb-2" }, [
                  _c(
                    "a",
                    {
                      staticClass: "h3 font-weight-normal text-primary",
                      staticStyle: { "text-decoration": "underline" },
                      attrs: {
                        href: "tel:+51" + _vm.element.customer_rel.mobile
                      }
                    },
                    [_vm._v(_vm._s(_vm.element.customer_rel.mobile_formatted))]
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _vm.element.advisor_id &&
            _vm.element.transaction_latest_rel.status_rel.name == "Pagado"
              ? _c("div", { staticClass: "card mt-4" }, [
                  _c("div", { staticClass: "card-body" }, [
                    _c("h2", [_vm._v("Asignado a")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "h3 text-primary" }, [
                      _vm._v(_vm._s(_vm.element.advisor_rel.name))
                    ]),
                    _vm._v(" "),
                    _c("h3", { staticClass: "font-weight-normal" }, [
                      _vm._v("Email: " + _vm._s(_vm.element.advisor_rel.email))
                    ])
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.element.advisor_id &&
            _vm.element.transaction_latest_rel.status_rel.name == "Pagado"
              ? _c("div", { staticClass: "card mt-4" }, [
                  _c("div", { staticClass: "card-body" }, [
                    _c("h2", [_vm._v("Conexión SAP")]),
                    _vm._v(" "),
                    _vm.element.transaction_latest_rel.status_rel.name ==
                    "Pagado"
                      ? _c("div", [
                          _vm.element.sended_to_sap
                            ? _c("div", [
                                _c("p", [
                                  _vm._v(
                                    "\n                  La reserva se envío a SAP\n                "
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "h3",
                                  { staticClass: "font-weight-normal" },
                                  [
                                    _vm._v(
                                      "Fecha: " +
                                        _vm._s(
                                          _vm.element.sended_sap_date_format
                                        )
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "h3",
                                  { staticClass: "font-weight-normal" },
                                  [
                                    _vm._v(
                                      "Código: " +
                                        _vm._s(_vm.element.sended_code_sap)
                                    )
                                  ]
                                )
                              ])
                            : _c("div", [
                                !_vm.sap.success
                                  ? _c(
                                      "div",
                                      [
                                        _c("p", [
                                          _vm._v(
                                            "\n                    La reserva no se pudo enviar a SAP. \n                  "
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("Button", {
                                          attrs: {
                                            text: "Enviar",
                                            classes: ["btn-inverse-primary"],
                                            "request-server": _vm.requestSap
                                          },
                                          on: { click: _vm.sendToSap }
                                        })
                                      ],
                                      1
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.sap.sended
                                  ? _c(
                                      "div",
                                      {
                                        staticClass: "mt-2 ",
                                        class: _vm.sap.success
                                          ? "text-success"
                                          : "text-danger"
                                      },
                                      [
                                        _vm._v(
                                          "\n                  " +
                                            _vm._s(_vm.sap.message) +
                                            "\n                  "
                                        ),
                                        _vm.sap.success
                                          ? _c("div", { staticClass: "mt-2" }, [
                                              _c(
                                                "a",
                                                {
                                                  staticClass:
                                                    "btn btn-primary",
                                                  attrs: { href: "#" },
                                                  on: {
                                                    click: function($event) {
                                                      $event.preventDefault()
                                                      return _vm.reloadPage()
                                                    }
                                                  }
                                                },
                                                [_vm._v("Recargar")]
                                              )
                                            ])
                                          : _vm._e()
                                      ]
                                    )
                                  : _vm._e()
                              ])
                        ])
                      : _c("div", [
                          _vm._v(
                            "\n              No se puede enviar ya que no se concluyó con la separación del inmueble.\n            "
                          )
                        ])
                  ])
                ])
              : _vm._e()
          ])
        ])
      ]),
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
          on: { close: _vm.restoreResend },
          scopedSlots: _vm._u([
            {
              key: "modal-footer",
              fn: function(ref) {
                var ok = ref.ok
                return [
                  _c("Button", {
                    attrs: {
                      classes: ["btn-primary"],
                      text: "Enviar",
                      "request-server": _vm.requestSubmit
                    },
                    on: { click: _vm.resendConfirm }
                  }),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-secondary",
                      attrs: { type: "button" },
                      on: { click: _vm.restoreResend }
                    },
                    [_vm._v("Cancelar")]
                  )
                ]
              }
            }
          ]),
          model: {
            value: _vm.modalResend,
            callback: function($$v) {
              _vm.modalResend = $$v
            },
            expression: "modalResend"
          }
        },
        [
          _c("template", { slot: "modal-title" }, [
            _c("div", { staticClass: "text-primary h2" }, [
              _vm._v("Reenviar Email")
            ])
          ]),
          _vm._v(" "),
          _c("template", { slot: "modal-header-close" }, [
            _c(
              "button",
              {
                staticClass: "btn p-0 bg-transparent",
                attrs: { type: "button" },
                on: { click: _vm.restoreResend }
              },
              [_c("jam-close")],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-12" }, [
              _c("p", [_vm._v("Esta seguro que desea reenviar el correo?")])
            ])
          ])
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12 mb-2" }, [
        _c("h2", {}, [_vm._v("Detalle de Reserva")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Button.vue":
/*!********************************************!*\
  !*** ./resources/js/components/Button.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Button_vue_vue_type_template_id_e0422746_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button.vue?vue&type=template&id=e0422746&scoped=true& */ "./resources/js/components/Button.vue?vue&type=template&id=e0422746&scoped=true&");
/* harmony import */ var _Button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button.vue?vue&type=script&lang=js& */ "./resources/js/components/Button.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Button_vue_vue_type_style_index_0_id_e0422746_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button.vue?vue&type=style&index=0&id=e0422746&scoped=true&lang=css& */ "./resources/js/components/Button.vue?vue&type=style&index=0&id=e0422746&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Button_vue_vue_type_template_id_e0422746_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Button_vue_vue_type_template_id_e0422746_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e0422746",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Button.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Button.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Button.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Button.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Button.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Button.vue?vue&type=style&index=0&id=e0422746&scoped=true&lang=css&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/Button.vue?vue&type=style&index=0&id=e0422746&scoped=true&lang=css& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_style_index_0_id_e0422746_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Button.vue?vue&type=style&index=0&id=e0422746&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Button.vue?vue&type=style&index=0&id=e0422746&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_style_index_0_id_e0422746_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_style_index_0_id_e0422746_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_style_index_0_id_e0422746_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_style_index_0_id_e0422746_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Button.vue?vue&type=template&id=e0422746&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Button.vue?vue&type=template&id=e0422746&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_template_id_e0422746_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Button.vue?vue&type=template&id=e0422746&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Button.vue?vue&type=template&id=e0422746&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_template_id_e0422746_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_template_id_e0422746_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/orders/Read.vue":
/*!********************************************!*\
  !*** ./resources/js/views/orders/Read.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Read_vue_vue_type_template_id_a94e4b1e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Read.vue?vue&type=template&id=a94e4b1e& */ "./resources/js/views/orders/Read.vue?vue&type=template&id=a94e4b1e&");
/* harmony import */ var _Read_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Read.vue?vue&type=script&lang=js& */ "./resources/js/views/orders/Read.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Read_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Read_vue_vue_type_template_id_a94e4b1e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Read_vue_vue_type_template_id_a94e4b1e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/orders/Read.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/orders/Read.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/orders/Read.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Read_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Read.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/orders/Read.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Read_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/orders/Read.vue?vue&type=template&id=a94e4b1e&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/orders/Read.vue?vue&type=template&id=a94e4b1e& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Read_vue_vue_type_template_id_a94e4b1e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Read.vue?vue&type=template&id=a94e4b1e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/orders/Read.vue?vue&type=template&id=a94e4b1e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Read_vue_vue_type_template_id_a94e4b1e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Read_vue_vue_type_template_id_a94e4b1e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);