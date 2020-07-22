(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/adn~js/awards~js/customers~js/gallery~js/players~js/success-stories~js/testimonials"],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ElementsDraggable.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ElementsDraggable.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.common.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loader */ "./resources/js/components/Loader.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    object: {
      type: Array,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    classes: {
      type: Array,
      required: true
    }
  },
  components: {
    Loader: _Loader__WEBPACK_IMPORTED_MODULE_1__["default"],
    draggable: vuedraggable__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  methods: {
    handleDrag: function handleDrag() {
      this.$emit("drag", this.orderElements);
      this.loading = true;
    },
    clickElement: function clickElement(id) {
      this.$emit("click", id);
      this.index = id;
    },
    clickDelete: function clickDelete(id) {
      this.$emit("delete", id);
    },
    clickEdit: function clickEdit(id) {
      this.$emit("edit", id);
    }
  },
  data: function data() {
    return {
      index: "",
      loading: false,
      orderElements: []
    };
  },
  watch: {
    object: function object(newValue, oldValue) {
      if (newValue) {
        this.orderElements = newValue;
        this.loading = false;
        this.index = "";
      }

      if (newValue && newValue.length == 0 && this.oldValue && this.oldValue.length == 1) {
        this.loading = false;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ElementsDraggable.vue?vue&type=style&index=0&id=5351970a&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ElementsDraggable.vue?vue&type=style&index=0&id=5351970a&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "pre[data-v-5351970a] {\n  font-family: inherit;\n}\n.img__customer[data-v-5351970a] {\n  background: black;\n  padding: 5%;\n  border-radius: 0.375rem;\n}\n.player .player__img-hover[data-v-5351970a] {\n  display: none;\n}\n.player .player__img[data-v-5351970a] {\n  cursor: pointer;\n}\n.player .player__img:hover .player__img-main[data-v-5351970a] {\n  display: none;\n}\n.player .player__img:hover .player__img-hover[data-v-5351970a] {\n  display: block;\n}\n.hashtag[data-v-5351970a] {\n  font-size: 48px;\n  line-height: 1;\n}\n.story__img-logo[data-v-5351970a] {\n  right: 15px;\n  top: 15px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ElementsDraggable.vue?vue&type=style&index=0&id=5351970a&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ElementsDraggable.vue?vue&type=style&index=0&id=5351970a&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../node_modules/vue-loader/lib??vue-loader-options!./ElementsDraggable.vue?vue&type=style&index=0&id=5351970a&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ElementsDraggable.vue?vue&type=style&index=0&id=5351970a&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Button.vue?vue&type=template&id=e0422746&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Button.vue?vue&type=template&id=e0422746& ***!
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
                staticClass: "ml-1",
                attrs: {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "20",
                  height: "20",
                  viewBox: "0 0 40 40",
                  stroke: "#fff"
                }
              },
              [
                _c("g", { attrs: { fill: "none", "fill-rule": "evenodd" } }, [
                  _c(
                    "g",
                    {
                      attrs: {
                        transform: "translate(1 1)",
                        "stroke-width": "2"
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ElementsDraggable.vue?vue&type=template&id=5351970a&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ElementsDraggable.vue?vue&type=template&id=5351970a&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row" }, [
    _vm.loading
      ? _c(
          "div",
          { staticClass: "col-12" },
          [
            _c("Loader", {
              attrs: {
                texto: "Cargando...",
                iconClasses: ["ml-1"],
                iconWidth: 20,
                iconHeight: 20,
                styles: { height: "400px" }
              }
            })
          ],
          1
        )
      : _vm._e(),
    _vm._v(" "),
    !_vm.loading
      ? _c(
          "div",
          { staticClass: "col-12" },
          [
            _vm.object && _vm.object.length > 0
              ? _c("div", { staticClass: "row mb-4" }, [
                  _vm._m(0),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-6 text-right" }, [
                    _vm._v(
                      "\n        " +
                        _vm._s(_vm.object.length) +
                        " entrada(s)\n      "
                    )
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.object && _vm.object.length > 0
              ? _c(
                  "draggable",
                  {
                    staticClass: "row",
                    on: { change: _vm.handleDrag },
                    model: {
                      value: _vm.orderElements,
                      callback: function($$v) {
                        _vm.orderElements = $$v
                      },
                      expression: "orderElements"
                    }
                  },
                  _vm._l(_vm.object, function(element) {
                    return _c(
                      "div",
                      {
                        key: element.id,
                        class: _vm.classes,
                        on: {
                          click: function($event) {
                            return _vm.clickElement(element.id)
                          }
                        }
                      },
                      [
                        _vm.type == "players"
                          ? _c("div", { staticClass: "card shadow player" }, [
                              _c("div", { staticClass: "player__img " }, [
                                _c("img", {
                                  staticClass:
                                    "img-fluid card-img-top shadow player__img-main",
                                  attrs: {
                                    src:
                                      "https://storage.googleapis.com/playgroup-web/img/players/" +
                                      element.image_1,
                                    alt: ""
                                  }
                                }),
                                _vm._v(" "),
                                _c("img", {
                                  staticClass:
                                    "img-fluid card-img-top shadow player__img-hover",
                                  attrs: {
                                    src:
                                      "https://storage.googleapis.com/playgroup-web/img/players/" +
                                      element.image_2,
                                    alt: ""
                                  }
                                })
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "card-body" }, [
                                _c("h3", { staticClass: "text-primary mb-1" }, [
                                  _vm._v(_vm._s(element.full_name))
                                ]),
                                _vm._v(" "),
                                _c(
                                  "pre",
                                  { staticClass: "d-block text-muted mb-1" },
                                  [_vm._v(_vm._s(element.job))]
                                ),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  { staticClass: "d-block text-muted" },
                                  [_vm._v(_vm._s(element.department))]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "text-right mt-2" }, [
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-sm btn-secondary",
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.clickEdit(element.id)
                                        }
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass:
                                          "fas fa-pen-alt text-warning mr-1"
                                      }),
                                      _vm._v(" Editar")
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-sm btn-secondary",
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.clickDelete(element.id)
                                        }
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass:
                                          "fas fa-trash-alt text-danger mr-1"
                                      }),
                                      _vm._v("\n              Eliminar")
                                    ]
                                  )
                                ])
                              ])
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.type == "success-stories"
                          ? _c("div", { staticClass: "card shadow" }, [
                              _c(
                                "div",
                                { staticClass: "card-body position-relative" },
                                [
                                  _c("img", {
                                    staticClass: "img-fluid card-img-top",
                                    attrs: {
                                      src:
                                        "https://storage.googleapis.com/playgroup-web/img/stories/" +
                                        element.image,
                                      alt: ""
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("img", {
                                    staticClass:
                                      "position-absolute story__img-logo p-2",
                                    attrs: {
                                      src:
                                        "https://storage.googleapis.com/playgroup-web/img/stories/" +
                                        element.logo,
                                      height: "60",
                                      width: "auto",
                                      alt: ""
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("h3", { staticClass: "mt-3 mb-0" }, [
                                    _vm._v(_vm._s(element.title))
                                  ]),
                                  _vm._v(" "),
                                  _c("p", [_vm._v(_vm._s(element.description))])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "card-footer pt-0 text-right border-0"
                                },
                                [
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-sm btn-secondary",
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.clickEdit(element.id)
                                        }
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass:
                                          "fas fa-pen-alt text-warning mr-1"
                                      }),
                                      _vm._v(" Editar")
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-sm btn-secondary",
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.clickDelete(element.id)
                                        }
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass:
                                          "fas fa-trash-alt text-danger mr-1"
                                      }),
                                      _vm._v("\n              Eliminar")
                                    ]
                                  )
                                ]
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.type == "customers"
                          ? _c("div", { staticClass: "card shadow" }, [
                              _c("div", { staticClass: "card-body" }, [
                                _c(
                                  "div",
                                  { staticClass: "row align-items-center" },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass: "col-12 text-center mb-3"
                                      },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "img__customer" },
                                          [
                                            _c("img", {
                                              staticClass: "img-fluid",
                                              attrs: {
                                                alt: element.name,
                                                src:
                                                  "https://storage.googleapis.com/playgroup-web/img/customers/" +
                                                  element.image
                                              }
                                            })
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "col-12 mb-3 d-flex justify-content-between"
                                      },
                                      [
                                        _c("h4", { staticClass: "mb-0" }, [
                                          _vm._v(
                                            "\n                  " +
                                              _vm._s(element.name) +
                                              "\n                "
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("div", {
                                          domProps: {
                                            innerHTML: _vm._s(
                                              element.status_format
                                            )
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "col-12 text-right" },
                                      [
                                        _c(
                                          "button",
                                          {
                                            staticClass:
                                              "btn btn-sm btn-secondary",
                                            on: {
                                              click: function($event) {
                                                $event.preventDefault()
                                                return _vm.clickEdit(element.id)
                                              }
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass:
                                                "fas fa-pen-alt text-warning mr-1"
                                            }),
                                            _vm._v(" Editar")
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "button",
                                          {
                                            staticClass:
                                              "btn btn-sm btn-secondary",
                                            on: {
                                              click: function($event) {
                                                $event.preventDefault()
                                                return _vm.clickDelete(
                                                  element.id
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass:
                                                "fas fa-trash-alt text-danger mr-1"
                                            }),
                                            _vm._v("\n                Eliminar")
                                          ]
                                        )
                                      ]
                                    )
                                  ]
                                )
                              ])
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.type == "cooltura"
                          ? _c("div", { staticClass: "card shadow" }, [
                              _c(
                                "div",
                                { staticClass: "card-body position-relative" },
                                [
                                  _c("img", {
                                    staticClass: "img-fluid card-img-top",
                                    attrs: {
                                      src:
                                        "https://storage.googleapis.com/playgroup-web/img/cooltura/" +
                                        element.image,
                                      alt: ""
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("h3", { staticClass: "mt-3 mb-0" }, [
                                    _vm._v(_vm._s(element.title))
                                  ]),
                                  _vm._v(" "),
                                  _c("p", [_vm._v(_vm._s(element.description))])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "card-footer pt-0 text-right border-0"
                                },
                                [
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-sm btn-secondary",
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.clickEdit(element.id)
                                        }
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass:
                                          "fas fa-pen-alt text-warning mr-1"
                                      }),
                                      _vm._v(" Editar")
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-sm btn-secondary",
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.clickDelete(element.id)
                                        }
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass:
                                          "fas fa-trash-alt text-danger mr-1"
                                      }),
                                      _vm._v("\n              Eliminar")
                                    ]
                                  )
                                ]
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.type == "testimonials"
                          ? _c("div", { staticClass: "card shadow" }, [
                              _c("div", { staticClass: "card-body" }, [
                                _c(
                                  "div",
                                  { staticClass: "row align-items-start" },
                                  [
                                    _c("div", { staticClass: "col-auto" }, [
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "avatar avatar-xl rounded-circle",
                                          attrs: { href: "#" }
                                        },
                                        [
                                          _c("img", {
                                            staticClass:
                                              "img-fluid card-img-top",
                                            attrs: {
                                              src:
                                                "https://storage.googleapis.com/playgroup-web/img/testimonials/" +
                                                element.image,
                                              alt: ""
                                            }
                                          })
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col ml--2" }, [
                                      _c("h4", { staticClass: "mb-0" }, [
                                        _vm._v(
                                          "\n                  " +
                                            _vm._s(element.full_name) +
                                            "\n                "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "p",
                                        { staticClass: "text-sm text-muted" },
                                        [_vm._v(_vm._s(element.job))]
                                      ),
                                      _vm._v(" "),
                                      _c("p", { staticClass: "mb-0" }, [
                                        _vm._v(_vm._s(element.message))
                                      ])
                                    ])
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "card-footer pt-0 text-right border-0"
                                },
                                [
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-sm btn-secondary",
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.clickEdit(element.id)
                                        }
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass:
                                          "fas fa-pen-alt text-warning mr-1"
                                      }),
                                      _vm._v(" Editar")
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-sm btn-secondary",
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.clickDelete(element.id)
                                        }
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass:
                                          "fas fa-trash-alt text-danger mr-1"
                                      }),
                                      _vm._v("\n              Eliminar")
                                    ]
                                  )
                                ]
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.type == "awards"
                          ? _c("div", { staticClass: "card shadow" }, [
                              _c("div", { staticClass: "card-body" }, [
                                _c("div", { staticClass: "row" }, [
                                  _c(
                                    "div",
                                    { staticClass: "col-12 text-center" },
                                    [
                                      _c("img", {
                                        staticClass: "img-fluid",
                                        attrs: {
                                          src:
                                            "https://storage.googleapis.com/playgroup-web/img/awards/" +
                                            element.image,
                                          alt: ""
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "col-12 text-center" },
                                    [
                                      _c(
                                        "h4",
                                        {
                                          staticClass:
                                            "mb-0 d-inline-block text-dark"
                                        },
                                        [
                                          _vm._v(
                                            "\n                  " +
                                              _vm._s(element.name) +
                                              "\n                "
                                          )
                                        ]
                                      ),
                                      _vm._v(" - \n                "),
                                      _c(
                                        "p",
                                        {
                                          staticClass:
                                            "text-muted d-inline-block mb-0"
                                        },
                                        [_vm._v(_vm._s(element.position))]
                                      ),
                                      _vm._v(" "),
                                      _c("p", { staticClass: "mb-0" }, [
                                        _vm._v(_vm._s(element.category))
                                      ])
                                    ]
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "card-footer pt-0 text-right border-0"
                                },
                                [
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-sm btn-secondary",
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.clickEdit(element.id)
                                        }
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass:
                                          "fas fa-pen-alt text-warning mr-1"
                                      }),
                                      _vm._v(" Editar")
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-sm btn-secondary",
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.clickDelete(element.id)
                                        }
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass:
                                          "fas fa-trash-alt text-danger mr-1"
                                      }),
                                      _vm._v("\n              Eliminar")
                                    ]
                                  )
                                ]
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.type == "adn"
                          ? _c("div", { staticClass: "card shadow" }, [
                              _c("div", { staticClass: "card-body" }, [
                                _c("div", { staticClass: "row" }, [
                                  _c("div", { staticClass: "col-auto" }, [
                                    _c(
                                      "h1",
                                      { staticClass: "text-primary hashtag" },
                                      [_vm._v("#")]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col ml--2" }, [
                                    _c(
                                      "span",
                                      {
                                        staticClass: "d-block font-weight-bold"
                                      },
                                      [_vm._v(_vm._s(element.name))]
                                    ),
                                    _vm._v(" "),
                                    _c("p", { staticClass: "mb-0" }, [
                                      _vm._v(_vm._s(element.description))
                                    ])
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "card-footer pt-0 text-right border-0"
                                },
                                [
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-sm btn-secondary",
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.clickEdit(element.id)
                                        }
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass:
                                          "fas fa-pen-alt text-warning mr-1"
                                      }),
                                      _vm._v(" Editar")
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-sm btn-secondary",
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.clickDelete(element.id)
                                        }
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass:
                                          "fas fa-trash-alt text-danger mr-1"
                                      }),
                                      _vm._v("\n              Eliminar")
                                    ]
                                  )
                                ]
                              )
                            ])
                          : _vm._e()
                      ]
                    )
                  }),
                  0
                )
              : _c("p", { staticClass: "mb-0 font-weight-bold" }, [
                  _vm._v("No se encontraron resultados.")
                ])
          ],
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-6" }, [
      _c("p", { staticClass: "mb-0" }, [
        _vm._v("Arrastré los elementos en el orden que desee mostrarlos.")
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
/* harmony import */ var _Button_vue_vue_type_template_id_e0422746___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button.vue?vue&type=template&id=e0422746& */ "./resources/js/components/Button.vue?vue&type=template&id=e0422746&");
/* harmony import */ var _Button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button.vue?vue&type=script&lang=js& */ "./resources/js/components/Button.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Button_vue_vue_type_template_id_e0422746___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Button_vue_vue_type_template_id_e0422746___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
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

/***/ "./resources/js/components/Button.vue?vue&type=template&id=e0422746&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Button.vue?vue&type=template&id=e0422746& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_template_id_e0422746___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Button.vue?vue&type=template&id=e0422746& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Button.vue?vue&type=template&id=e0422746&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_template_id_e0422746___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_template_id_e0422746___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ElementsDraggable.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/ElementsDraggable.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ElementsDraggable_vue_vue_type_template_id_5351970a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ElementsDraggable.vue?vue&type=template&id=5351970a&scoped=true& */ "./resources/js/components/ElementsDraggable.vue?vue&type=template&id=5351970a&scoped=true&");
/* harmony import */ var _ElementsDraggable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ElementsDraggable.vue?vue&type=script&lang=js& */ "./resources/js/components/ElementsDraggable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ElementsDraggable_vue_vue_type_style_index_0_id_5351970a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ElementsDraggable.vue?vue&type=style&index=0&id=5351970a&lang=scss&scoped=true& */ "./resources/js/components/ElementsDraggable.vue?vue&type=style&index=0&id=5351970a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ElementsDraggable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ElementsDraggable_vue_vue_type_template_id_5351970a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ElementsDraggable_vue_vue_type_template_id_5351970a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5351970a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ElementsDraggable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ElementsDraggable.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/ElementsDraggable.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ElementsDraggable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ElementsDraggable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ElementsDraggable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ElementsDraggable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ElementsDraggable.vue?vue&type=style&index=0&id=5351970a&lang=scss&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/ElementsDraggable.vue?vue&type=style&index=0&id=5351970a&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ElementsDraggable_vue_vue_type_style_index_0_id_5351970a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../node_modules/vue-loader/lib??vue-loader-options!./ElementsDraggable.vue?vue&type=style&index=0&id=5351970a&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ElementsDraggable.vue?vue&type=style&index=0&id=5351970a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ElementsDraggable_vue_vue_type_style_index_0_id_5351970a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ElementsDraggable_vue_vue_type_style_index_0_id_5351970a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ElementsDraggable_vue_vue_type_style_index_0_id_5351970a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ElementsDraggable_vue_vue_type_style_index_0_id_5351970a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ElementsDraggable_vue_vue_type_style_index_0_id_5351970a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/ElementsDraggable.vue?vue&type=template&id=5351970a&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/ElementsDraggable.vue?vue&type=template&id=5351970a&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ElementsDraggable_vue_vue_type_template_id_5351970a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ElementsDraggable.vue?vue&type=template&id=5351970a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ElementsDraggable.vue?vue&type=template&id=5351970a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ElementsDraggable_vue_vue_type_template_id_5351970a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ElementsDraggable_vue_vue_type_template_id_5351970a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);