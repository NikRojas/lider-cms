(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/pages/applicants"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form/InputArray.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/form/InputArray.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    arregloEditar: Array
  },
  data: function data() {
    return {
      //arreglo: this.arregloEditar
      arregloData: [""]
    };
  },
  methods: {
    agregarElemento: function agregarElemento(index) {
      if (!this.arregloData[index]) {
        return;
      }

      this.arregloData.push("");
    },
    eliminarElemento: function eliminarElemento(index) {
      this.arregloData.splice(index, 1);
    }
  },
  computed: {
    arreglo: {
      get: function get() {
        if (this.arregloEditar) {
          return this.arregloEditar;
        } else {
          return this.arregloData;
        }
      },
      set: function set(value) {
        this.arregloData.push("");
        this.arreglo.push("");
      }
    }
  },
  watch: {
    arreglo: function arreglo(newValue, oldValue) {
      if (!newValue[newValue.length - 1]) {
        return;
      }

      this.$emit("update:arreglo", newValue);
    },
    arregloEditar: function arregloEditar(newValue, oldValue) {
      this.arregloData = newValue;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/skeleton/form.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/skeleton/form.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-loading-skeleton */ "./node_modules/vue-loading-skeleton/dist/vue-loading-skeleton.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Skeleton: vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_0__["Skeleton"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Applicants.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Applicants.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-loading-skeleton */ "./node_modules/vue-loading-skeleton/dist/vue-loading-skeleton.esm.js");
/* harmony import */ var _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/BreadCrumb */ "./resources/js/components/BreadCrumb.vue");
/* harmony import */ var _components_DataTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/DataTable */ "./resources/js/components/DataTable.vue");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Button */ "./resources/js/components/Button.vue");
/* harmony import */ var _components_form_InputSlug__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/form/InputSlug */ "./resources/js/components/form/InputSlug.vue");
/* harmony import */ var _components_skeleton_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/skeleton/form */ "./resources/js/components/skeleton/form.vue");
/* harmony import */ var _components_modals_Destroy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/modals/Destroy */ "./resources/js/components/modals/Destroy.vue");
/* harmony import */ var _components_form_InputArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/form/InputArray */ "./resources/js/components/form/InputArray.vue");
var _methods;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    DataTable: _components_DataTable__WEBPACK_IMPORTED_MODULE_2__["default"],
    Skeleton: vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_0__["Skeleton"],
    Button: _components_Button__WEBPACK_IMPORTED_MODULE_3__["default"],
    BreadCrumb: _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_1__["default"],
    InputSlug: _components_form_InputSlug__WEBPACK_IMPORTED_MODULE_4__["default"],
    InputArray: _components_form_InputArray__WEBPACK_IMPORTED_MODULE_7__["default"],
    SkeletonForm: _components_skeleton_form__WEBPACK_IMPORTED_MODULE_5__["default"],
    Destroy: _components_modals_Destroy__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  props: {
    routeGetAll: String,
    route: String,
    messageCantDelete: String,
    routeUpdate: String,
    getEmailDestination: String
  },
  data: function data() {
    return {
      elements: {},
      element: {},
      loadingGet: false,
      title: "",
      elementsPerPage: 10,
      errors: {},
      modalDestroy: false,
      requestSubmit: false,
      loadingEmails: false,
      information: {
        email_destination: [],
        email_destination_job_formatted: [""]
      },
      requestServer: false,
      editEmailBlock: false
    };
  },
  methods: (_methods = {
    getContactEmailDestination: function getContactEmailDestination() {
      var _this = this;

      this.loadingEmails = true;
      axios.get(this.getEmailDestination).then(function (response) {
        if (response.data.id) {
          _this.information = response.data;
        }

        _this.loadingEmails = false;
      })["catch"](function (error) {});
    },
    editEmailDestination: function editEmailDestination() {
      this.editEmailBlock = true;
    },
    restoreEmail: function restoreEmail() {
      this.requestServer = this.editEmailBlock = false;
      this.errors = {};
      this.information = {
        email_destination: [],
        email_destination_job_formatted: [""]
      };
      this.getContactEmailDestination();
    },
    updateEmail: function updateEmail() {
      var _this2 = this;

      this.requestServer = true;
      axios.put(this.routeUpdate, this.information).then(function (response) {
        _this2.requestServer = false;

        _this2.restoreEmail();

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
        _this2.requestServer = false;

        if (error.response.status === 422) {
          _this2.errors = error.response.data.errors || {};
          return;
        }

        _this2.restorePage();

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
    destroyConfirm: function destroyConfirm() {
      var _this3 = this;

      this.requestSubmit = true;
      axios["delete"](this.route + "/" + this.element.id).then(function (response) {
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
    restore: function restore() {
      this.errors = {};
      this.element = {};
      this.modalDestroy = false;
      this.getElements(1, this.elementsPerPage);
    },
    deleteEl: function deleteEl(id) {
      this.modalDestroy = true;
      this.getEl(id);
    },
    restoreEl: function restoreEl() {
      this.errors = {};
      this.element = {};
      this.modalDestroy = false;
    }
  }, _defineProperty(_methods, "deleteEl", function deleteEl(id) {
    this.modalDestroy = true;
    this.getEl(id);
  }), _defineProperty(_methods, "getElements", function getElements(page, itemsPerPage) {
    var _this4 = this;

    var q = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var url = this.routeGetAll + "?page=" + page + "&itemsPerPage=" + itemsPerPage;

    if (q) {
      url = url + "&q=" + q;
    }

    axios.get(url).then(function (response) {
      _this4.elements = response.data;
    })["catch"](function (error) {});
  }), _defineProperty(_methods, "getEl", function getEl(id) {
    var _this5 = this;

    this.loadingGet = true;
    axios.get(this.route + "/json/get/" + id).then(function (response) {
      _this5.element = response.data;
      _this5.loadingGet = false;
    })["catch"](function (error) {});
  }), _methods),
  created: function created() {
    this.getElements(1, this.elementsPerPage);
    this.getContactEmailDestination();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form/InputArray.vue?vue&type=template&id=2a816e7f&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/form/InputArray.vue?vue&type=template&id=2a816e7f& ***!
  \******************************************************************************************************************************************************************************************************************/
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
    _vm._l(_vm.arreglo.length, function(elemento, index) {
      return _c("div", { key: index }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-10 col-lg-8" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.arreglo[index],
                  expression: "arreglo[index]"
                }
              ],
              staticClass: "form-control mb-2 d-inline-block",
              attrs: { type: "text" },
              domProps: { value: _vm.arreglo[index] },
              on: {
                keydown: function($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                  ) {
                    return null
                  }
                  $event.preventDefault()
                  return _vm.agregarElemento.apply(null, arguments)
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.arreglo, index, $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-auto" }, [
            _vm.arreglo.length - 1 == index
              ? _c(
                  "button",
                  {
                    staticClass:
                      "btn btn-sm btn-icon-only rounded-circle btn-inverse-info",
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.agregarElemento(index)
                      }
                    }
                  },
                  [_c("jam-plus", { staticClass: "current-color" })],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            index != 0
              ? _c(
                  "button",
                  {
                    staticClass:
                      "btn btn-sm btn-icon-only rounded-circle btn-inverse-danger",
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.eliminarElemento(index)
                      }
                    }
                  },
                  [_c("jam-trash-alt", { staticClass: "current-color" })],
                  1
                )
              : _vm._e()
          ])
        ])
      ])
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/skeleton/form.vue?vue&type=template&id=8df953ea&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/skeleton/form.vue?vue&type=template&id=8df953ea& ***!
  \****************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "w-25 mb-2" }, [_c("Skeleton")], 1),
    _vm._v(" "),
    _c("div", { staticClass: "mb-2" }, [_c("Skeleton")], 1),
    _vm._v(" "),
    _c("div", { staticClass: "w-25 mb-2" }, [_c("Skeleton")], 1),
    _vm._v(" "),
    _c("div", { staticClass: "mb-2" }, [_c("Skeleton")], 1),
    _vm._v(" "),
    _c("div", { staticClass: "w-25 mb-2" }, [_c("Skeleton")], 1),
    _vm._v(" "),
    _c("div", { staticClass: "mb-2" }, [_c("Skeleton")], 1),
    _vm._v(" "),
    _c("div", { staticClass: "w-25 mb-2" }, [_c("Skeleton")], 1),
    _vm._v(" "),
    _c("div", { staticClass: "mb-2" }, [_c("Skeleton")], 1),
    _vm._v(" "),
    _c("div", { staticClass: "text-right" }, [
      _c("div", { staticClass: "w-25 ml-auto" }, [_c("Skeleton")], 1)
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Applicants.vue?vue&type=template&id=a24380e0&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Applicants.vue?vue&type=template&id=a24380e0& ***!
  \********************************************************************************************************************************************************************************************************/
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
                        title: "Postulantes",
                        parent: "",
                        active: "Postulantes"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-6 col-md-5 text-right" })
              ]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "container-fluid mt--6" }, [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-12 col-lg-8" },
            [
              _c("DataTable", {
                attrs: {
                  object: _vm.elements,
                  placeholder: "Nombre, Puesto",
                  "button-update": false,
                  "button-read": false,
                  "button-delete": true,
                  "entries-prop": _vm.elementsPerPage,
                  messageCantDelete: _vm.messageCantDelete
                },
                on: {
                  get: _vm.getElements,
                  delete: _vm.deleteEl,
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
          _c("div", { staticClass: "col-12 col-lg-4" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-12" }, [
                _c("div", { staticClass: "card" }, [
                  _vm._m(0),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-body" }, [
                    _c(
                      "form",
                      {
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            return _vm.updateEmail.apply(null, arguments)
                          }
                        }
                      },
                      [
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-12" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", { staticClass: "font-weight-bold" }, [
                                _vm._v("Correos")
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: _vm.editEmailBlock,
                                      expression: "editEmailBlock"
                                    }
                                  ]
                                },
                                [
                                  _c("InputArray", {
                                    attrs: {
                                      arreglo:
                                        _vm.information.email_destination,
                                      "arreglo-editar":
                                        _vm.information
                                          .email_destination_job_formatted
                                    },
                                    on: {
                                      "update:arreglo": function($event) {
                                        return _vm.$set(
                                          _vm.information,
                                          "email_destination",
                                          $event
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _vm.errors && Object.keys(_vm.errors).length
                                    ? _c(
                                        "label",
                                        {
                                          staticClass:
                                            "mt-2 mb-0 text-danger text-sm",
                                          attrs: {
                                            for: "id_email_destination_job"
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "Los campos correo(s) electrónico(s) destino deben ser una dirección de correo válida."
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ],
                                1
                              ),
                              _vm._v(" "),
                              !_vm.editEmailBlock
                                ? _c("div", [
                                    _vm.loadingEmails
                                      ? _c(
                                          "div",
                                          [
                                            _c("Skeleton", {
                                              attrs: { height: "100px" }
                                            })
                                          ],
                                          1
                                        )
                                      : _c("div", [
                                          _vm.information.email_destination &&
                                          _vm.information.email_destination
                                            .length > 0
                                            ? _c(
                                                "div",
                                                _vm._l(
                                                  _vm.information
                                                    .email_destination_job_formatted,
                                                  function(element, index) {
                                                    return _c(
                                                      "p",
                                                      {
                                                        key: index,
                                                        staticClass:
                                                          "d-block mb-1"
                                                      },
                                                      [_vm._v(_vm._s(element))]
                                                    )
                                                  }
                                                ),
                                                0
                                              )
                                            : _c("p", [
                                                _vm._v(
                                                  "No hay correos registrados"
                                                )
                                              ])
                                        ])
                                  ])
                                : _vm._e()
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        !_vm.loadingEmails
                          ? _c(
                              "div",
                              { staticClass: "text-right" },
                              [
                                !_vm.editEmailBlock
                                  ? _c(
                                      "button",
                                      {
                                        staticClass:
                                          "btn btn-sm btn-inverse-primary",
                                        attrs: { type: "button" },
                                        on: {
                                          click: function($event) {
                                            $event.preventDefault()
                                            return _vm.editEmailDestination.apply(
                                              null,
                                              arguments
                                            )
                                          }
                                        }
                                      },
                                      [_vm._v("Editar")]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.editEmailBlock
                                  ? _c("Button", {
                                      attrs: {
                                        text: "Actualizar",
                                        classes: [
                                          "btn-inverse-primary",
                                          "mr-2"
                                        ],
                                        "request-server": _vm.requestServer
                                      }
                                    })
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.editEmailBlock
                                  ? _c(
                                      "button",
                                      {
                                        staticClass: "btn btn-secondary",
                                        attrs: { type: "button" },
                                        on: {
                                          click: function($event) {
                                            $event.preventDefault()
                                            return _vm.restoreEmail.apply(
                                              null,
                                              arguments
                                            )
                                          }
                                        }
                                      },
                                      [_vm._v("Cancelar")]
                                    )
                                  : _vm._e()
                              ],
                              1
                            )
                          : _vm._e()
                      ]
                    )
                  ])
                ])
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("destroy", {
        attrs: {
          element: "postulante",
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
    return _c("div", { staticClass: "card-header border-0" }, [
      _c("h2", { staticClass: "mb-0 text-uppercase text-primary" }, [
        _vm._v("Correos Destino")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/form/InputArray.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/form/InputArray.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InputArray_vue_vue_type_template_id_2a816e7f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputArray.vue?vue&type=template&id=2a816e7f& */ "./resources/js/components/form/InputArray.vue?vue&type=template&id=2a816e7f&");
/* harmony import */ var _InputArray_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InputArray.vue?vue&type=script&lang=js& */ "./resources/js/components/form/InputArray.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InputArray_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InputArray_vue_vue_type_template_id_2a816e7f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InputArray_vue_vue_type_template_id_2a816e7f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/form/InputArray.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/form/InputArray.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/form/InputArray.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputArray_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./InputArray.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form/InputArray.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputArray_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/form/InputArray.vue?vue&type=template&id=2a816e7f&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/form/InputArray.vue?vue&type=template&id=2a816e7f& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputArray_vue_vue_type_template_id_2a816e7f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./InputArray.vue?vue&type=template&id=2a816e7f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form/InputArray.vue?vue&type=template&id=2a816e7f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputArray_vue_vue_type_template_id_2a816e7f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputArray_vue_vue_type_template_id_2a816e7f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/skeleton/form.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/skeleton/form.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_vue_vue_type_template_id_8df953ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=8df953ea& */ "./resources/js/components/skeleton/form.vue?vue&type=template&id=8df953ea&");
/* harmony import */ var _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js& */ "./resources/js/components/skeleton/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_vue_vue_type_template_id_8df953ea___WEBPACK_IMPORTED_MODULE_0__["render"],
  _form_vue_vue_type_template_id_8df953ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/skeleton/form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/skeleton/form.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/skeleton/form.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/skeleton/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/skeleton/form.vue?vue&type=template&id=8df953ea&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/skeleton/form.vue?vue&type=template&id=8df953ea& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_8df953ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=template&id=8df953ea& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/skeleton/form.vue?vue&type=template&id=8df953ea&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_8df953ea___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_8df953ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Applicants.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/Applicants.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applicants_vue_vue_type_template_id_a24380e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Applicants.vue?vue&type=template&id=a24380e0& */ "./resources/js/views/Applicants.vue?vue&type=template&id=a24380e0&");
/* harmony import */ var _Applicants_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Applicants.vue?vue&type=script&lang=js& */ "./resources/js/views/Applicants.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Applicants_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Applicants_vue_vue_type_template_id_a24380e0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Applicants_vue_vue_type_template_id_a24380e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Applicants.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Applicants.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/Applicants.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Applicants_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Applicants.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Applicants.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Applicants_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Applicants.vue?vue&type=template&id=a24380e0&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/Applicants.vue?vue&type=template&id=a24380e0& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Applicants_vue_vue_type_template_id_a24380e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Applicants.vue?vue&type=template&id=a24380e0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Applicants.vue?vue&type=template&id=a24380e0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Applicants_vue_vue_type_template_id_a24380e0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Applicants_vue_vue_type_template_id_a24380e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);