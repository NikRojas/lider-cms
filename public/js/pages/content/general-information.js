(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/pages/content/general-information"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form/InputSelectArray.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/form/InputSelectArray.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    /*disableMessageEdit: String,*/
    disableEdit: {
      "default": false,
      type: Boolean
    },
    fieldName: String,
    selectItems: Array,
    headers: Array,
    arrayProp: Array,
    errorsProp: Object
  },
  data: function data() {
    return {
      arrayData: [{}],
      errorsData: {}
    };
  },
  methods: {
    restore: function restore() {
      this.arrayData = [{}];
    },
    addEl: function addEl(i) {
      var isEmpty = Object.values(this.arrayData[i]).every(function (x) {
        return x === null || x === "";
      });

      if (isEmpty) {
        return;
      }

      this.arrayData.push({});
    },
    deleteEl: function deleteEl(i) {
      this.arrayData.splice(i, 1);
    }
  },
  computed: {
    array: {
      get: function get() {
        return this.arrayData;
      },
      set: function set(value) {
        this.arrayData.push({});
        this.array.push({});
      }
    },
    errors: {
      get: function get() {
        return this.errorsData;
      }
    }
  },
  watch: {
    array: {
      deep: true,
      handler: function handler(newValue, oldValue) {
        if (!newValue[newValue.length - 1]) {
          return;
        }

        this.$emit("update:array", newValue);
      }
    },
    errorsProp: {
      immediate: true,
      deep: true,
      handler: function handler(newValue, oldValue) {
        this.errorsData = newValue;
      }
    },
    arrayProp: {
      immediate: true,
      deep: true,
      handler: function handler(newValue, oldValue) {
        if (newValue && newValue.length > 0) {
          this.arrayData = newValue;
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/content/GeneralInformation.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/content/GeneralInformation.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-loading-skeleton */ "./node_modules/vue-loading-skeleton/dist/vue-loading-skeleton.esm.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Button */ "./resources/js/components/Button.vue");
/* harmony import */ var _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/BreadCrumb */ "./resources/js/components/BreadCrumb.vue");
/* harmony import */ var _components_form_InputSelectArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/form/InputSelectArray */ "./resources/js/components/form/InputSelectArray.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    routeGet: String,
    routeUpdate: String,
    departments: Array
  },
  components: {
    Button: _components_Button__WEBPACK_IMPORTED_MODULE_1__["default"],
    BreadCrumb: _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_2__["default"],
    Skeleton: vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_0__["Skeleton"],
    InputSelectArray: _components_form_InputSelectArray__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      el: {
        location: "",
        phone: "",
        email: "" //billing_url: "",

      },
      errors: {},
      requestSubmit: false,
      startBlock: true,
      editBlock: false,
      loadingGet: false
    };
  },
  methods: {
    update: function update() {
      var _this = this;

      this.requestSubmit = true;
      axios.post(this.routeUpdate, this.el).then(function (response) {
        _this.requestSubmit = false;

        _this.restore();

        Swal.fire({
          title: response.data.title,
          text: response.data.message,
          type: "success",
          confirmButtonText: "Ok",
          buttonsStyling: false,
          customClass: {
            confirmButton: "btn btn-inverse-primary"
          }
        });
      })["catch"](function (error) {
        _this.requestSubmit = false;

        if (error.response.status === 422) {
          _this.errors = error.response.data.errors || {};
          return;
        }

        _this.restore();

        Swal.fire({
          title: error.response.data.title,
          text: error.response.data.message,
          type: "error",
          confirmButtonText: "Ok",
          buttonsStyling: false,
          customClass: {
            confirmButton: "btn btn-inverse-primary"
          }
        });
      });
    },
    restore: function restore() {
      this.el = {
        location: "",
        phone: "",
        email: ""
      };
      this.errors = {};
      this.startBlock = true, this.editBlock = false;
      this.getEl();
    },
    editEl: function editEl() {
      this.startBlock = false;
      this.editBlock = true;
    },
    getEl: function getEl() {
      var _this2 = this;

      this.loadingGet = true;
      axios.get(this.routeGet).then(function (response) {
        _this2.el = response.data;
        _this2.loadingGet = false;
      })["catch"](function (error) {});
    }
  },
  created: function created() {
    this.getEl();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form/InputSelectArray.vue?vue&type=template&id=f63a1b3a&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/form/InputSelectArray.vue?vue&type=template&id=f63a1b3a& ***!
  \************************************************************************************************************************************************************************************************************************/
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
    _vm._l(_vm.array.length, function(el, i) {
      return _c(
        "div",
        { key: "tr" + i, staticClass: "row mb-2" },
        [
          _vm._l(_vm.headers, function(el, j) {
            return _c("div", { key: "td" + j, staticClass: "col-lg-5" }, [
              _c(
                "label",
                {
                  staticClass: "font-weight-bold",
                  attrs: { for: el.variable }
                },
                [
                  _vm._v(
                    _vm._s(el.label.charAt(0).toUpperCase() + el.label.slice(1))
                  )
                ]
              ),
              _vm._v(" "),
              el.variable == "name" || el.variable == "number"
                ? _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.array[i][el.variable],
                        expression: "array[i][el.variable]"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", id: el.variable },
                    domProps: { value: _vm.array[i][el.variable] },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.array[i], el.variable, $event.target.value)
                      }
                    }
                  })
                : _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.array[i][el.variable],
                          expression: "array[i][el.variable]"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { name: "", id: el.variable },
                      on: {
                        change: function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.array[i],
                            el.variable,
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    _vm._l(_vm.selectItems, function(el2, i) {
                      return _c(
                        "option",
                        { key: i, domProps: { value: el2.code_department } },
                        [_vm._v(_vm._s(el2.department))]
                      )
                    }),
                    0
                  ),
              _vm._v(" "),
              _vm.errors &&
              _vm.errors[_vm.fieldName + "." + i + "." + el.variable]
                ? _c(
                    "label",
                    { staticClass: "text-danger text-sm mt-2 d-block" },
                    [
                      _vm._v(
                        _vm._s(
                          _vm.errors[
                            _vm.fieldName + "." + i + "." + el.variable
                          ][0]
                        )
                      )
                    ]
                  )
                : _vm._e()
            ])
          }),
          _vm._v(" "),
          !_vm.disableEdit
            ? _c(
                "div",
                {
                  staticClass:
                    "mb-2 mt-2 mt-lg-0 actions d-flex align-items-end col-lg-2"
                },
                [
                  _vm.array.length - 1 == i
                    ? _c(
                        "button",
                        {
                          staticClass:
                            "btn btn-sm btn-icon-only rounded-circle btn-inverse-info",
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.addEl(i)
                            }
                          }
                        },
                        [_c("jam-plus", { staticClass: "current-color" })],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  i != 0
                    ? _c(
                        "button",
                        {
                          staticClass:
                            "btn btn-sm btn-icon-only rounded-circle btn-inverse-danger",
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.deleteEl(i)
                            }
                          }
                        },
                        [_c("jam-trash-alt", { staticClass: "current-color" })],
                        1
                      )
                    : _vm._e()
                ]
              )
            : _vm._e()
        ],
        2
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/content/GeneralInformation.vue?vue&type=template&id=3675b04e&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/content/GeneralInformation.vue?vue&type=template&id=3675b04e& ***!
  \************************************************************************************************************************************************************************************************************************/
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
                      title: _vm.startBlock
                        ? "Información General"
                        : "Actualizar Información General",
                      parent: "Contenido",
                      active: "Información General"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-6 col-md-5 text-right" }, [
                _vm.startBlock
                  ? _c(
                      "a",
                      {
                        staticClass: "btn btn-icon btn-inverse-primary",
                        attrs: { href: "#" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.editEl($event)
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
                          _vm._v("Editar Información")
                        ])
                      ]
                    )
                  : _vm._e()
              ])
            ]
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "container-fluid mt--6" }, [
      _vm.startBlock
        ? _c("div", { staticClass: "card mb-4" }, [
            !_vm.loadingGet
              ? _c("div", { staticClass: "card-body" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-12 col-md-6 col-lg-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { staticClass: "font-weight-bold" }, [
                          _vm._v("Ubicación")
                        ]),
                        _vm._v(" "),
                        _vm.el.location
                          ? _c(
                              "pre",
                              {
                                staticStyle: {
                                  "font-family": "inherit",
                                  "font-size": "14px"
                                }
                              },
                              [_vm._v(_vm._s(_vm.el.location))]
                            )
                          : _c("p", [_vm._v("No registrado")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-md-6 col-lg-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { staticClass: "font-weight-bold" }, [
                          _vm._v("Teléfono")
                        ]),
                        _vm._v(" "),
                        _vm.el.phone
                          ? _c("p", [_vm._v(_vm._s(_vm.el.phone_formatted))])
                          : _c("p", [_vm._v("No registrado")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-md-6 col-lg-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { staticClass: "font-weight-bold" }, [
                          _vm._v("Email")
                        ]),
                        _vm._v(" "),
                        _vm.el.email
                          ? _c("p", [_vm._v(_vm._s(_vm.el.email))])
                          : _c("p", [_vm._v("No registrado")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-md-6 col-lg-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { staticClass: "font-weight-bold" }, [
                          _vm._v("Link de Facturación")
                        ]),
                        _vm._v(" "),
                        _vm.el.billing_url
                          ? _c("p", [
                              _c(
                                "a",
                                {
                                  staticStyle: {
                                    "text-decoration": "underline"
                                  },
                                  attrs: {
                                    href: _vm.el.billing_url,
                                    target: "_blank"
                                  }
                                },
                                [_vm._v(_vm._s(_vm.el.billing_url))]
                              )
                            ])
                          : _c("p", [_vm._v("No registrado")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-md-6 col-lg-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { staticClass: "font-weight-bold" }, [
                          _vm._v("Whatsapps")
                        ]),
                        _vm._v(" "),
                        !_vm.el.whatsapp_numbers
                          ? _c("p", [_vm._v("No registrado")])
                          : _c(
                              "p",
                              _vm._l(_vm.el.whatsapp_formatted, function(
                                el2,
                                i
                              ) {
                                return _c(
                                  "span",
                                  { key: i, staticClass: "d-block" },
                                  [
                                    _vm._v(
                                      _vm._s(el2.department) +
                                        " - " +
                                        _vm._s(el2.number)
                                    )
                                  ]
                                )
                              }),
                              0
                            )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-md-6 col-lg-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { staticClass: "font-weight-bold" }, [
                          _vm._v("Oficinas")
                        ]),
                        _vm._v(" "),
                        !_vm.el.phone_numbers
                          ? _c("p", [_vm._v("No registrado")])
                          : _c(
                              "p",
                              _vm._l(_vm.el.phone_numbers_formatted, function(
                                el2,
                                i
                              ) {
                                return _c(
                                  "span",
                                  { key: i, staticClass: "d-block" },
                                  [
                                    _vm._v(
                                      _vm._s(el2.department) +
                                        " - " +
                                        _vm._s(el2.number)
                                    )
                                  ]
                                )
                              }),
                              0
                            )
                      ])
                    ])
                  ])
                ])
              : _c("div", { staticClass: "card-body" }, [
                  _c(
                    "div",
                    { staticClass: "row" },
                    _vm._l(3, function(i) {
                      return _c(
                        "div",
                        { key: i, staticClass: "col-12 col-lg-4" },
                        [
                          _c(
                            "div",
                            { staticClass: "w-25" },
                            [_c("Skeleton", { attrs: { height: "15px" } })],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "w-75" },
                            [_c("Skeleton", { attrs: { height: "50px" } })],
                            1
                          )
                        ]
                      )
                    }),
                    0
                  )
                ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.editBlock
        ? _c("div", { staticClass: "card mb-4" }, [
            _c("div", { staticClass: "card-body" }, [
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
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-12 col-md-6 col-lg-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          {
                            staticClass: "font-weight-bold",
                            attrs: { for: "location" }
                          },
                          [_vm._v("Ubicación")]
                        ),
                        _vm._v(" "),
                        _c("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.el.location,
                              expression: "el.location"
                            }
                          ],
                          staticClass: "form-control mb-2",
                          attrs: { type: "text", id: "location", rows: "3" },
                          domProps: { value: _vm.el.location },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.el, "location", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.errors && _vm.errors.location
                          ? _c(
                              "label",
                              {
                                staticClass: "mt-2 text-danger text-sm",
                                attrs: { for: "location" }
                              },
                              [_vm._v(_vm._s(_vm.errors.location[0]))]
                            )
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-md-6 col-lg-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          {
                            staticClass: "font-weight-bold",
                            attrs: { for: "phone" }
                          },
                          [_vm._v("Teléfono")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.el.phone,
                              expression: "el.phone"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", id: "phone" },
                          domProps: { value: _vm.el.phone },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.el, "phone", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.errors && _vm.errors.phone
                          ? _c(
                              "label",
                              {
                                staticClass: "mt-2 text-danger text-sm",
                                attrs: { for: "phone" }
                              },
                              [_vm._v(_vm._s(_vm.errors.phone[0]))]
                            )
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-md-6 col-lg-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          {
                            staticClass: "font-weight-bold",
                            attrs: { for: "email" }
                          },
                          [_vm._v("Email")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.el.email,
                              expression: "el.email"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", id: "email" },
                          domProps: { value: _vm.el.email },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.el, "email", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.errors && _vm.errors.email
                          ? _c(
                              "label",
                              {
                                staticClass: "mt-2 text-danger text-sm",
                                attrs: { for: "email" }
                              },
                              [_vm._v(_vm._s(_vm.errors.email[0]))]
                            )
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-md-6 col-lg-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          {
                            staticClass: "font-weight-bold",
                            attrs: { for: "email" }
                          },
                          [_vm._v("Link Facturación")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.el.billing_url,
                              expression: "el.billing_url"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", id: "billing_url" },
                          domProps: { value: _vm.el.billing_url },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.el,
                                "billing_url",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.errors && _vm.errors.billing_url
                          ? _c(
                              "label",
                              {
                                staticClass: "mt-2 text-danger text-sm",
                                attrs: { for: "billing_url" }
                              },
                              [_vm._v(_vm._s(_vm.errors.billing_url[0]))]
                            )
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-12 col-md-6 col-lg-4" },
                      [
                        _c("InputSelectArray", {
                          attrs: {
                            fieldName: "whatsapp_numbers",
                            errorsProp: _vm.errors,
                            headers: [
                              { variable: "number", label: "Whatsapp" },
                              { variable: "department", label: "departamento" }
                            ],
                            array: _vm.el.whatsapp_numbers,
                            "array-prop": _vm.el.whatsapp_numbers,
                            selectItems: _vm.departments
                          },
                          on: {
                            "update:errorsProp": function($event) {
                              _vm.errors = $event
                            },
                            "update:errors-prop": function($event) {
                              _vm.errors = $event
                            },
                            "update:array": function($event) {
                              return _vm.$set(
                                _vm.el,
                                "whatsapp_numbers",
                                $event
                              )
                            }
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-12 col-md-6 col-lg-4" },
                      [
                        _c("InputSelectArray", {
                          attrs: {
                            fieldName: "phone_numbers",
                            errorsProp: _vm.errors,
                            headers: [
                              { variable: "number", label: "teléfono" },
                              { variable: "department", label: "departamento" }
                            ],
                            array: _vm.el.phone_numbers,
                            "array-prop": _vm.el.phone_numbers,
                            selectItems: _vm.departments
                          },
                          on: {
                            "update:errorsProp": function($event) {
                              _vm.errors = $event
                            },
                            "update:errors-prop": function($event) {
                              _vm.errors = $event
                            },
                            "update:array": function($event) {
                              return _vm.$set(_vm.el, "phone_numbers", $event)
                            }
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-12 text-right" },
                      [
                        _c("Button", {
                          attrs: {
                            text: "Actualizar",
                            classes: ["btn-inverse-primary"],
                            "request-server": _vm.requestSubmit
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-secondary",
                            attrs: { type: "button" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.restore($event)
                              }
                            }
                          },
                          [_vm._v("Cancelar")]
                        )
                      ],
                      1
                    )
                  ])
                ]
              )
            ])
          ])
        : _vm._e()
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/form/InputSelectArray.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/form/InputSelectArray.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InputSelectArray_vue_vue_type_template_id_f63a1b3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputSelectArray.vue?vue&type=template&id=f63a1b3a& */ "./resources/js/components/form/InputSelectArray.vue?vue&type=template&id=f63a1b3a&");
/* harmony import */ var _InputSelectArray_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InputSelectArray.vue?vue&type=script&lang=js& */ "./resources/js/components/form/InputSelectArray.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InputSelectArray_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InputSelectArray_vue_vue_type_template_id_f63a1b3a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InputSelectArray_vue_vue_type_template_id_f63a1b3a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/form/InputSelectArray.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/form/InputSelectArray.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/form/InputSelectArray.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputSelectArray_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./InputSelectArray.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form/InputSelectArray.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputSelectArray_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/form/InputSelectArray.vue?vue&type=template&id=f63a1b3a&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/form/InputSelectArray.vue?vue&type=template&id=f63a1b3a& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputSelectArray_vue_vue_type_template_id_f63a1b3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./InputSelectArray.vue?vue&type=template&id=f63a1b3a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form/InputSelectArray.vue?vue&type=template&id=f63a1b3a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputSelectArray_vue_vue_type_template_id_f63a1b3a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputSelectArray_vue_vue_type_template_id_f63a1b3a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/content/GeneralInformation.vue":
/*!***********************************************************!*\
  !*** ./resources/js/views/content/GeneralInformation.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GeneralInformation_vue_vue_type_template_id_3675b04e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GeneralInformation.vue?vue&type=template&id=3675b04e& */ "./resources/js/views/content/GeneralInformation.vue?vue&type=template&id=3675b04e&");
/* harmony import */ var _GeneralInformation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GeneralInformation.vue?vue&type=script&lang=js& */ "./resources/js/views/content/GeneralInformation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GeneralInformation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GeneralInformation_vue_vue_type_template_id_3675b04e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GeneralInformation_vue_vue_type_template_id_3675b04e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/content/GeneralInformation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/content/GeneralInformation.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/content/GeneralInformation.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneralInformation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./GeneralInformation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/content/GeneralInformation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneralInformation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/content/GeneralInformation.vue?vue&type=template&id=3675b04e&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/content/GeneralInformation.vue?vue&type=template&id=3675b04e& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneralInformation_vue_vue_type_template_id_3675b04e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./GeneralInformation.vue?vue&type=template&id=3675b04e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/content/GeneralInformation.vue?vue&type=template&id=3675b04e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneralInformation_vue_vue_type_template_id_3675b04e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneralInformation_vue_vue_type_template_id_3675b04e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);