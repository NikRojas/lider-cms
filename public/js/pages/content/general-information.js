(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/pages/content/general-information"],{

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
/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! quill */ "./node_modules/quill/dist/quill.js");
/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(quill__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _functions_PlainClipboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../functions/PlainClipboard */ "./resources/js/functions/PlainClipboard.js");
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-quill-editor */ "./node_modules/vue-quill-editor/dist/vue-quill-editor.js");
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue_quill_editor__WEBPACK_IMPORTED_MODULE_6__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






quill__WEBPACK_IMPORTED_MODULE_4___default.a.register("modules/clipboard", _functions_PlainClipboard__WEBPACK_IMPORTED_MODULE_5__["default"], true);

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
    InputSelectArray: _components_form_InputSelectArray__WEBPACK_IMPORTED_MODULE_3__["default"],
    quillEditor: vue_quill_editor__WEBPACK_IMPORTED_MODULE_6__["quillEditor"]
  },
  data: function data() {
    return {
      editorOptions: {
        placeholder: "",
        modules: {
          toolbar: {
            container: [["bold", "italic", "underline", "strike"], ["blockquote"], [{
              header: 1
            }, {
              header: 2
            }], [{
              list: "ordered"
            }, {
              list: "bullet"
            }], [{
              indent: "-1"
            }, {
              indent: "+1"
            }], //[{ size: [false] }],
            [{
              header: [1, 2, 3, 4, 5, false]
            }], //[{ font: [false] }],
            [{
              color: []
            }, {
              background: []
            }], [{
              align: []
            }], //['clean'],
            ["link"]]
          }
        }
      },
      el: {
        location: "",
        main_office: "",
        central_phone: "",
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
                            return _vm.editEl.apply(null, arguments)
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
                              "div",
                              {
                                domProps: { innerHTML: _vm._s(_vm.el.location) }
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
                          _vm._v("Central de Ventas")
                        ]),
                        _vm._v(" "),
                        _vm.el.central_phone
                          ? _c("p", [
                              _vm._v(_vm._s(_vm.el.central_phone_formatted))
                            ])
                          : _c("p", [_vm._v("No registrado")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-md-6 col-lg-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { staticClass: "font-weight-bold" }, [
                          _vm._v("Oficina Principal")
                        ]),
                        _vm._v(" "),
                        _vm.el.main_office
                          ? _c("p", [
                              _vm._v(_vm._s(_vm.el.main_office_formatted))
                            ])
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
                          _vm._v("Link de Comprobantes Electrónicos")
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
                          _vm._v("Link de Trabaja con Nosotros")
                        ]),
                        _vm._v(" "),
                        _vm.el.link_jobs
                          ? _c("p", [
                              _c(
                                "a",
                                {
                                  staticStyle: {
                                    "text-decoration": "underline"
                                  },
                                  attrs: {
                                    href: _vm.el.link_jobs,
                                    target: "_blank"
                                  }
                                },
                                [_vm._v(_vm._s(_vm.el.link_jobs))]
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
                      return _vm.update.apply(null, arguments)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-12 col-md-6 col-lg-4" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c(
                            "label",
                            {
                              staticClass: "font-weight-bold",
                              attrs: { for: "location" }
                            },
                            [_vm._v("Ubicación")]
                          ),
                          _vm._v(" "),
                          _c("quill-Editor", {
                            ref: "ref_content",
                            staticClass: "ql-height-10",
                            attrs: { options: _vm.editorOptions },
                            on: {
                              keydown: function($event) {
                                if (
                                  !$event.type.indexOf("key") &&
                                  _vm._k(
                                    $event.keyCode,
                                    "enter",
                                    13,
                                    $event.key,
                                    "Enter"
                                  )
                                ) {
                                  return null
                                }
                                $event.preventDefault()
                              }
                            },
                            model: {
                              value: _vm.el.location,
                              callback: function($$v) {
                                _vm.$set(_vm.el, "location", $$v)
                              },
                              expression: "el.location"
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
                        ],
                        1
                      )
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
                          [_vm._v("Central de Ventas")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.el.central_phone,
                              expression: "el.central_phone"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", id: "central_phone" },
                          domProps: { value: _vm.el.central_phone },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.el,
                                "central_phone",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "small",
                          {
                            staticClass: "form-text d-block",
                            staticStyle: { opacity: "0.7" }
                          },
                          [_vm._v("Ingrese un número de 7 dígitos")]
                        ),
                        _vm._v(" "),
                        _vm.errors && _vm.errors.central_phone
                          ? _c(
                              "label",
                              {
                                staticClass: "mt-2 text-danger text-sm",
                                attrs: { for: "central_phone" }
                              },
                              [_vm._v(_vm._s(_vm.errors.central_phone[0]))]
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
                          [_vm._v("Oficina Principal")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.el.main_office,
                              expression: "el.main_office"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", id: "main_office" },
                          domProps: { value: _vm.el.main_office },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.el,
                                "main_office",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "small",
                          {
                            staticClass: "form-text d-block",
                            staticStyle: { opacity: "0.7" }
                          },
                          [_vm._v("Ingrese un número de 7 dígitos")]
                        ),
                        _vm._v(" "),
                        _vm.errors && _vm.errors.main_office
                          ? _c(
                              "label",
                              {
                                staticClass: "mt-2 text-danger text-sm",
                                attrs: { for: "main_office" }
                              },
                              [_vm._v(_vm._s(_vm.errors.main_office[0]))]
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
                            attrs: { for: "billing_url" }
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
                    _c("div", { staticClass: "col-12 col-md-6 col-lg-4" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          {
                            staticClass: "font-weight-bold",
                            attrs: { for: "link_jobs" }
                          },
                          [_vm._v("Link Trabaja con Nosotros")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.el.link_jobs,
                              expression: "el.link_jobs"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", id: "link_jobs" },
                          domProps: { value: _vm.el.link_jobs },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.el, "link_jobs", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.errors && _vm.errors.link_jobs
                          ? _c(
                              "label",
                              {
                                staticClass: "mt-2 text-danger text-sm",
                                attrs: { for: "link_jobs" }
                              },
                              [_vm._v(_vm._s(_vm.errors.link_jobs[0]))]
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
                                return _vm.restore.apply(null, arguments)
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

/***/ "./resources/js/functions/PlainClipboard.js":
/*!**************************************************!*\
  !*** ./resources/js/functions/PlainClipboard.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! quill */ "./node_modules/quill/dist/quill.js");
/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(quill__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var Clipboard = quill__WEBPACK_IMPORTED_MODULE_0___default.a["import"]('modules/clipboard');
var Delta = quill__WEBPACK_IMPORTED_MODULE_0___default.a["import"]('delta');

var PlainClipboard = /*#__PURE__*/function (_Clipboard) {
  _inherits(PlainClipboard, _Clipboard);

  var _super = _createSuper(PlainClipboard);

  function PlainClipboard() {
    _classCallCheck(this, PlainClipboard);

    return _super.apply(this, arguments);
  }

  _createClass(PlainClipboard, [{
    key: "onPaste",
    value: function onPaste(e) {
      e.preventDefault();
      var range = this.quill.getSelection();
      var text = e.clipboardData.getData('text/plain');
      var delta = new Delta().retain(range.index)["delete"](range.length).insert(text);
      var index = text.length + range.index;
      var length = 0;
      this.quill.updateContents(delta, 'silent');
      this.quill.setSelection(index, length, 'silent');
      this.quill.scrollIntoView();
      var length2 = this.quill.getSelection().index;
      this.quill.insertText(length2, ' ', '', true);
    }
  }]);

  return PlainClipboard;
}(Clipboard);

/* harmony default export */ __webpack_exports__["default"] = (PlainClipboard);

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