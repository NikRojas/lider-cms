(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/pages/profile"],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Profile.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Profile.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Button */ "./resources/js/components/Button.vue");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue2-dropzone */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.js");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone__WEBPACK_IMPORTED_MODULE_1__);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    routeLogin: {
      type: String,
      required: true
    },
    routeLogout: {
      type: String,
      required: true
    }
  },
  components: {
    //Footer,
    Button: _components_Button__WEBPACK_IMPORTED_MODULE_0__["default"],
    vueDropzone: vue2_dropzone__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  data: function data() {
    var _ref;

    return _ref = {
      errors: {},
      startBlock: true,
      editEmail: false,
      editPassword: false,
      usuario: {
        rel_role: {
          name: ""
        },
        name: "",
        username: "",
        email: "",
        contrasena_actual: "",
        contrasena_nueva: "",
        contrasena_nueva_confirmation: ""
      },
      dropzoneOptions: {
        url: "/",
        maxFiles: 1,
        acceptedFiles: "image/png,image/jpeg,image/jpg,image/svg+xml",
        autoProcessQueue: false,
        thumbnailWidth: 100,
        addRemoveLinks: true,
        dictRemoveFile: "Remover"
      }
    }, _defineProperty(_ref, "startBlock", true), _defineProperty(_ref, "passwordBlock", false), _defineProperty(_ref, "requestServer", false), _ref;
  },
  methods: {
    getUser: function getUser() {
      var _this = this;

      axios.get("json/profile").then(function (response) {
        _this.usuario = response.data;
      })["catch"](function (error) {});
    },
    restorePage: function restorePage() {
      this.errors = {};
      this.startBlock = true;
      this.editPassword = this.editEmail = this.passwordBlock = this.requestServer = false;
      this.usuario = {
        rel_role: {
          name: ""
        },
        name: "",
        username: "",
        email: "",
        contrasena_actual: "",
        contrasena_nueva: "",
        contrasena_nueva_confirmation: ""
      };
      this.getUser();
    },
    toggleEmail: function toggleEmail() {
      this.editEmail = true;
    },
    updateProfile: function updateProfile() {
      var _this2 = this;

      this.requestServer = true;

      if (this.editEmail) {
        var fd = new FormData();
        fd.append("id", this.usuario.id);

        if (this.usuario.username) {
          fd.append("username", this.usuario.username);
        } else {
          fd.append("username", "");
        }

        if (this.usuario.email) {
          fd.append("email", this.usuario.email);
        } else {
          fd.append("email", "");
        }

        if (this.usuario.name) {
          fd.append("name", this.usuario.name);
        } else {
          fd.append("name", "");
        }

        if (this.$refs.ref_image.dropzone.files[0]) {
          fd.append("avatar", this.$refs.ref_image.dropzone.files[0]);
        }

        if (this.usuario.eliminar_imagen) {
          fd.append("eliminar_imagen", this.usuario.eliminar_imagen);
        }

        fd.append("_method", "put");
        axios.post("profile", fd).then(function (response) {
          _this2.requestServer = false;

          _this2.restorePage();

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
      }

      if (this.editPassword) {
        axios.put("change-password", this.usuario).then(function (response) {
          _this2.requestServer = false;

          _this2.restorePage();

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
          setTimeout(function () {
            return axios.post(_this2.routeLogout).then(function (response) {
              document.location.href = _this2.routeLogin;
            })["catch"](function (error) {});
          }, 5000);
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
      }
    },
    cambiarContrasena: function cambiarContrasena() {
      this.startBlock = false;
      this.passwordBlock = true;
      this.editPassword = true;
    }
  },
  created: function created() {
    this.getUser();
  }
});

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Profile.vue?vue&type=template&id=25b9215a&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Profile.vue?vue&type=template&id=25b9215a& ***!
  \*****************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "container-fluid mt-0 mt-md-3" }, [
      _c("div", { staticClass: "row" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-8 mx-auto" }, [
          _c("div", { staticClass: "card mb-4" }, [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.updateProfile($event)
                  }
                }
              },
              [
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.startBlock,
                        expression: "startBlock"
                      }
                    ],
                    staticClass: "card-body"
                  },
                  [
                    !_vm.editEmail && !_vm.editPassword
                      ? _c(
                          "div",
                          {
                            staticClass:
                              "rounded-circle mx-auto d-flex avatar avatar-lg  text-center mb-2 bg-default",
                            staticStyle: { height: "120px", width: "120px" }
                          },
                          [
                            _vm.usuario.avatar
                              ? _c("img", {
                                  staticClass:
                                    "shadow rounded-circle object-fit--cover",
                                  attrs: {
                                    src:
                                      "/files/img/users/" + _vm.usuario.avatar,
                                    alt: "Perfil"
                                  }
                                })
                              : _c(
                                  "span",
                                  { staticStyle: { "font-size": "26px" } },
                                  [_vm._v(_vm._s(_vm.usuario.avatar_initials))]
                                )
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.editEmail && !_vm.editPassword
                      ? _c("div", { staticClass: "text-center mb-3" }, [
                          _c(
                            "span",
                            { staticClass: "font-weight-bold mb-2 d-block" },
                            [_vm._v("Avatar")]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-lg" }),
                            _vm._v(" "),
                            _vm.usuario.avatar
                              ? _c(
                                  "div",
                                  {
                                    staticClass: "col-12 col-lg-3 mb-3 mb-lg-0"
                                  },
                                  [
                                    _c("img", {
                                      staticClass:
                                        "rounded-circle object-fit--cover d-block mx-auto mb-3",
                                      attrs: {
                                        alt: "Colaborador",
                                        height: "120",
                                        width: "120",
                                        src:
                                          "/files/img/users/" +
                                          _vm.usuario.avatar
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "btn btn-inverse-danger btn-sm",
                                        attrs: { href: "#" },
                                        on: {
                                          click: function($event) {
                                            $event.preventDefault()
                                            return (function() {
                                              _vm.usuario.avatar = ""
                                              _vm.usuario.eliminar_imagen = true
                                            })($event)
                                          }
                                        }
                                      },
                                      [_vm._v("Eliminar Avatar Actual")]
                                    )
                                  ]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-12 col-lg-3" },
                              [
                                _c(
                                  "vue-dropzone",
                                  {
                                    ref: "ref_image",
                                    attrs: {
                                      id: "id_image",
                                      options: _vm.dropzoneOptions,
                                      duplicateCheck: true,
                                      useCustomSlot: true
                                    },
                                    on: {
                                      "vdropzone-file-added": function($event) {
                                        return _vm.$validateImageDropzone(
                                          $event,
                                          _vm.$refs.ref_image.dropzone,
                                          1,
                                          100000,
                                          "100kb"
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass: "dropzone-custom-content"
                                      },
                                      [
                                        _c(
                                          "h5",
                                          {
                                            staticClass:
                                              "dropzone-custom-title text-primary"
                                          },
                                          [
                                            _vm._v(
                                              "Suelte el archivo aquí o haga click para cargarlo."
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-lg" })
                          ])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c("div", { staticClass: "mb-0" }, [
                      !_vm.editEmail && !_vm.editPassword
                        ? _c(
                            "h2",
                            {
                              staticClass: "font-weight-light text-center mb-3"
                            },
                            [_vm._v(_vm._s(_vm.usuario.name))]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.editEmail && !_vm.editPassword
                        ? _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-12" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c(
                                  "span",
                                  { staticClass: "font-weight-bold" },
                                  [_vm._v("Nombre Completo:")]
                                ),
                                _vm._v(" "),
                                _vm.editEmail && !_vm.editPassword
                                  ? _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.usuario.name,
                                          expression: "usuario.name"
                                        }
                                      ],
                                      staticClass:
                                        "d-inline-block form-control  w-100",
                                      attrs: { type: "text" },
                                      domProps: { value: _vm.usuario.name },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.usuario,
                                            "name",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.errors && _vm.errors.nombre
                                  ? _c(
                                      "label",
                                      {
                                        staticClass:
                                          "d-block text-sm mt-2 mb-0 text-danger"
                                      },
                                      [_vm._v(_vm._s(_vm.errors.nombre[0]))]
                                    )
                                  : _vm._e()
                              ])
                            ])
                          ])
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("div", [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-12" }, [
                          _c("span", { staticClass: "font-weight-bold" }, [
                            _vm._v("Correo Electrónico:")
                          ]),
                          _vm._v(" "),
                          !_vm.editEmail && !_vm.editPassword
                            ? _c(
                                "span",
                                {
                                  staticClass: "font-weight-light mb-4 d-block"
                                },
                                [_vm._v(_vm._s(_vm.usuario.email))]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.editEmail && !_vm.editPassword
                            ? _c("div", { staticClass: "form-group" }, [
                                _vm.editEmail && !_vm.editPassword
                                  ? _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.usuario.email,
                                          expression: "usuario.email"
                                        }
                                      ],
                                      staticClass:
                                        "mt-1 form-control-alternative d-inline-block form-control w-100",
                                      attrs: { type: "text" },
                                      domProps: { value: _vm.usuario.email },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.usuario,
                                            "email",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.errors && _vm.errors.email
                                  ? _c(
                                      "label",
                                      {
                                        staticClass:
                                          "d-block text-sm mt-2 mb-0 text-danger"
                                      },
                                      [_vm._v(_vm._s(_vm.errors.email[0]))]
                                    )
                                  : _vm._e()
                              ])
                            : _vm._e()
                        ])
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.passwordBlock,
                        expression: "passwordBlock"
                      }
                    ],
                    staticClass: "card-body"
                  },
                  [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-12" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticClass: "font-weight-bold",
                              attrs: { for: "id_contrasena_actual" }
                            },
                            [_vm._v("Contraseña Actual:")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.usuario.contrasena_actual,
                                expression: "usuario.contrasena_actual"
                              }
                            ],
                            staticClass: "form-control ",
                            attrs: {
                              type: "password",
                              placeholder: "Contraseña Actual",
                              id: "id_contrasena_actual"
                            },
                            domProps: { value: _vm.usuario.contrasena_actual },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.usuario,
                                  "contrasena_actual",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors && _vm.errors.contrasena_actual
                            ? _c(
                                "label",
                                {
                                  staticClass:
                                    "mt-2 mb-0 d-block text-sm text-danger",
                                  attrs: { for: "id_contrasena_actual" }
                                },
                                [
                                  _vm._v(
                                    _vm._s(_vm.errors.contrasena_actual[0])
                                  )
                                ]
                              )
                            : _vm._e()
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-12" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticClass: "font-weight-bold",
                              attrs: { for: "id_contrasena_nueva" }
                            },
                            [_vm._v("Contraseña Nueva:")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.usuario.contrasena_nueva,
                                expression: "usuario.contrasena_nueva"
                              }
                            ],
                            staticClass: "form-control ",
                            attrs: {
                              type: "password",
                              placeholder: "Contraseña Nueva",
                              id: "id_contrasena_nueva"
                            },
                            domProps: { value: _vm.usuario.contrasena_nueva },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.usuario,
                                  "contrasena_nueva",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors && _vm.errors.contrasena_nueva
                            ? _c(
                                "label",
                                {
                                  staticClass:
                                    "mt-2 mb-0 d-block text-sm text-danger",
                                  attrs: { for: "id_contrasena_nueva" }
                                },
                                [_vm._v(_vm._s(_vm.errors.contrasena_nueva[0]))]
                              )
                            : _vm._e()
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-12" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticClass: "font-weight-bold",
                              attrs: { for: "id_confirmar_contrasena" }
                            },
                            [_vm._v("Confirmar Nueva Contraseña:")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value:
                                  _vm.usuario.contrasena_nueva_confirmation,
                                expression:
                                  "usuario.contrasena_nueva_confirmation"
                              }
                            ],
                            staticClass: "form-control ",
                            attrs: {
                              type: "password",
                              placeholder: "Confirmar Nueva Contraseña",
                              id: "id_confirmar_contrasena"
                            },
                            domProps: {
                              value: _vm.usuario.contrasena_nueva_confirmation
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.usuario,
                                  "contrasena_nueva_confirmation",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors && _vm.errors.contrasena_nueva_confirmation
                            ? _c(
                                "label",
                                {
                                  staticClass:
                                    "mt-2 mb-0 d-block text-sm text-danger",
                                  attrs: { for: "id_confirmar_contrasena" }
                                },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm.errors
                                        .contrasena_nueva_confirmation[0]
                                    )
                                  )
                                ]
                              )
                            : _vm._e()
                        ])
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "card-footer border-0 pt-0",
                    class:
                      !_vm.editEmail && !_vm.editPassword
                        ? "text-center"
                        : "text-right"
                  },
                  [
                    !_vm.editEmail && !_vm.editPassword
                      ? _c(
                          "a",
                          {
                            staticClass: "btn btn-inverse-info mr-2",
                            attrs: { href: "#" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.toggleEmail($event)
                              }
                            }
                          },
                          [_vm._v("Editar")]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.editPassword && !_vm.editEmail
                      ? _c(
                          "a",
                          {
                            staticClass: "btn btn-inverse-primary",
                            attrs: { href: "#" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.cambiarContrasena($event)
                              }
                            }
                          },
                          [_vm._v("Cambiar Contraseña")]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.editPassword || _vm.editEmail
                      ? _c("Button", {
                          attrs: {
                            text: "Actualizar",
                            classes: ["btn-primary", "mr-2"],
                            "request-server": _vm.requestServer
                          }
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.editPassword || _vm.editEmail
                      ? _c(
                          "button",
                          {
                            staticClass: "btn btn-secondary",
                            attrs: { type: "button" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.restorePage($event)
                              }
                            }
                          },
                          [_vm._v("Cancelar")]
                        )
                      : _vm._e()
                  ],
                  1
                )
              ]
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-12" }, [
      _c("h1", { staticClass: "h1 mb-4" }, [_vm._v("Mi Perfil")])
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

/***/ "./resources/js/views/Profile.vue":
/*!****************************************!*\
  !*** ./resources/js/views/Profile.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Profile_vue_vue_type_template_id_25b9215a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Profile.vue?vue&type=template&id=25b9215a& */ "./resources/js/views/Profile.vue?vue&type=template&id=25b9215a&");
/* harmony import */ var _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profile.vue?vue&type=script&lang=js& */ "./resources/js/views/Profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Profile_vue_vue_type_template_id_25b9215a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Profile_vue_vue_type_template_id_25b9215a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Profile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Profile.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/views/Profile.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Profile.vue?vue&type=template&id=25b9215a&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/Profile.vue?vue&type=template&id=25b9215a& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_25b9215a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=template&id=25b9215a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Profile.vue?vue&type=template&id=25b9215a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_25b9215a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_25b9215a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);