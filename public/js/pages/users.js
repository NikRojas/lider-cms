(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/pages/users"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/configuration/Users.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/configuration/Users.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-loading-skeleton */ "./node_modules/vue-loading-skeleton/dist/vue-loading-skeleton.esm.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Button */ "./resources/js/components/Button.vue");
/* harmony import */ var _components_DataTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/DataTable */ "./resources/js/components/DataTable.vue");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue2-dropzone */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.js");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/BreadCrumb */ "./resources/js/components/BreadCrumb.vue");
/* harmony import */ var _components_modals_Destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/modals/Destroy */ "./resources/js/components/modals/Destroy.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    routeGetAll: String,
    route: String
  },
  components: {
    DataTable: _components_DataTable__WEBPACK_IMPORTED_MODULE_2__["default"],
    Button: _components_Button__WEBPACK_IMPORTED_MODULE_1__["default"],
    BreadCrumb: _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_4__["default"],
    Skeleton: vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_0__["Skeleton"],
    vueDropzone: vue2_dropzone__WEBPACK_IMPORTED_MODULE_3___default.a,
    Destroy: _components_modals_Destroy__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    return {
      users: {},
      showBlock: true,
      createBlock: false,
      editBlock: false,
      detailBlock: false,
      dropzoneOptions: {
        url: "/",
        maxFiles: 1,
        acceptedFiles: "image/png,image/jpeg,image/jpg,image/svg+xml",
        autoProcessQueue: false,
        thumbnailWidth: 150,
        addRemoveLinks: true,
        dictRemoveFile: "Remover"
      },
      user: {
        rel_role: {},
        role_id: "",
        password: "",
        name: "",
        email: "",
        status: false,
        available: false
      },
      elementsPerPage: 10,
      errors: {},
      requestLoading: false,
      requestServer: false,
      modalDestroy: false
    };
  },
  methods: {
    restoreEl: function restoreEl() {
      this.showBlock = true;
      this.createBlock = this.editBlock = this.detailBlock = this.requestServer = this.modalDestroy = false;
      this.errors = {}, this.user = {
        rel_role: {},
        role_id: "",
        password: "",
        name: "",
        email: ""
      };
    },
    restorePage: function restorePage() {
      this.showBlock = true;
      this.getUsers(1, this.elementsPerPage);
      this.createBlock = this.editBlock = this.detailBlock = this.requestServer = this.modalDestroy = false;
      this.errors = {}, this.user = {
        rel_role: {},
        role_id: "",
        password: "",
        name: "",
        email: ""
      };
    },
    getUser: function getUser(id) {
      var _this = this;

      this.requestLoading = true;
      axios.get(this.route + '/json/get/' + id).then(function (response) {
        _this.user = response.data;
        _this.requestLoading = false;
      })["catch"](function (error) {});
    },
    getUsers: function getUsers(page, itemsPerPage) {
      var _this2 = this;

      var q = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var url = this.routeGetAll + "?page=" + page + "&itemsPerPage=" + itemsPerPage;

      if (q) {
        url = url + "&q=" + q;
      }

      axios.get(url).then(function (response) {
        _this2.users = response.data;
      })["catch"](function (error) {});
    },
    showUser: function showUser(id) {
      this.getUser(id);
      this.showBlock = false;
      this.detailBlock = true;
    },
    editUser: function editUser(id) {
      this.getUser(id);
      this.showBlock = false;
      this.editBlock = true;
    },
    deleteUser: function deleteUser(id) {
      //this.$refs["modal-eliminar"].show();
      this.modalDestroy = true;
      this.getUser(id);
    },

    /*disableUser(id) {
      this.$refs["modal-disable"].show();
      this.getUser(id);
    },
    disableUserConfirm() {
      this.requestServer = true;
      axios
        .put("usuarios/deshabilitar/" + this.user.id)
        .then((response) => {
          this.restorePage();
          Swal.fire({
            title: response.data.title,
            text: response.data.message,
            type: "success",
            confirmButtonText: "OK",
            buttonsStyling: false,
            customClass: {
              confirmButton: "btn btn-inverse-primary",
            },
          });
        })
        .catch((error) => {
          this.restoreEl();
        });
    },*/
    destroyConfirm: function destroyConfirm() {
      var _this3 = this;

      this.requestServer = true;
      axios["delete"]("usuarios/" + this.user.id).then(function (response) {
        _this3.restorePage();

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
        _this3.restoreEl();
      });
    },
    updateUser: function updateUser() {
      var _this4 = this;

      this.requestServer = true;
      var fd = new FormData();
      fd.append("name", this.user.name);
      fd.append("username", this.user.username);
      fd.append("email", this.user.email);

      if (this.user.password) {
        fd.append("password", this.user.password);
      }

      if (this.user.available) {
        fd.append("available", 1);
      }

      fd.append("id", this.user.id);

      if (this.$refs.ref_image.dropzone.files[0]) {
        fd.append("avatar", this.$refs.ref_image.dropzone.files[0]);
      }

      fd.append("_method", "put");
      axios.post("usuarios/" + this.user.id, fd).then(function (response) {
        _this4.requestServer = false;

        _this4.restorePage();

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
        if (error.response.status === 422) {
          _this4.requestServer = false;
          _this4.errors = error.response.data.errors || {};
          return;
        }

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

        _this4.restorePage();
      });
    },
    createUser: function createUser() {
      var _this5 = this;

      this.requestServer = true;
      var fd = new FormData();
      fd.append("name", this.user.name);
      fd.append("email", this.user.email);
      fd.append("password", this.user.password);

      if (this.$refs.ref_image.dropzone.files[0]) {
        fd.append("avatar", this.$refs.ref_image.dropzone.files[0]);
      }

      axios.post("usuarios", fd).then(function (response) {
        _this5.requestServer = false;

        _this5.restorePage();

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
        _this5.requestServer = false;

        if (error.response.status === 422) {
          _this5.errors = error.response.data.errors || {};
          return;
        }

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

        _this5.restorePage();
      });
    }
  },
  created: function created() {
    this.getUsers(1, this.elementsPerPage);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/configuration/Users.vue?vue&type=template&id=45c686e0&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/configuration/Users.vue?vue&type=template&id=45c686e0& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
                        title: _vm.createBlock
                          ? "Crear Usuario"
                          : _vm.detailBlock
                          ? "Ver Usuario"
                          : _vm.editBlock
                          ? "Actualizar Usuario"
                          : "Usuarios",
                        parent: "Configuración",
                        active: "Usuarios"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-12 col-lg text-right" }, [
                  _vm.showBlock
                    ? _c(
                        "a",
                        {
                          staticClass: "btn btn-icon btn-inverse-primary",
                          attrs: { href: "#" },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return function() {
                                _vm.showBlock = false
                                _vm.createBlock = true
                              }.apply(null, arguments)
                            }
                          }
                        },
                        [
                          _c(
                            "span",
                            { staticClass: "btn-inner--icon" },
                            [
                              _c("jam-user-circle", {
                                staticClass: "current-color"
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("span", { staticClass: "btn-inner--text" }, [
                            _vm._v("Nuevo Usuario")
                          ])
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.detailBlock
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-secondary",
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.restoreEl.apply(null, arguments)
                            }
                          }
                        },
                        [
                          _c("jam-arrow-left", {
                            staticClass: "mr-2 current-color"
                          }),
                          _vm._v("Regresar\n            ")
                        ],
                        1
                      )
                    : _vm._e()
                ])
              ]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "container-fluid mt--6" },
        [
          _c("DataTable", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.showBlock,
                expression: "showBlock"
              }
            ],
            attrs: {
              object: _vm.users,
              placeholder: "Nombre, Usuario",
              "button-update": true,
              "button-read": true,
              "button-delete": true,
              "button-disable": false,
              "entries-prop": _vm.elementsPerPage
            },
            on: {
              get: _vm.getUsers,
              read: _vm.showUser,
              delete: _vm.deleteUser,
              update: _vm.editUser,
              "update:entriesProp": function($event) {
                _vm.elementsPerPage = $event
              },
              "update:entries-prop": function($event) {
                _vm.elementsPerPage = $event
              }
            }
          }),
          _vm._v(" "),
          (_vm.editBlock && _vm.requestLoading) ||
          (_vm.detailBlock && _vm.requestLoading)
            ? _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-body" }, [
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col-12 text-center mb-4" },
                      [
                        _c("Skeleton", {
                          attrs: { circle: "", height: "120px", width: "120px" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-6 mb-4" },
                      [_c("Skeleton")],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-6 mb-4" },
                      [_c("Skeleton")],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-6 mb-4" },
                      [_c("Skeleton")],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-6" }, [_c("Skeleton")], 1)
                  ])
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.editBlock && !_vm.requestLoading
            ? _c("div", { staticClass: "card mb-4" }, [
                _c("div", { staticClass: "card-body" }, [
                  _c(
                    "form",
                    {
                      attrs: { enctype: "multipart/form-data" },
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.updateUser.apply(null, arguments)
                        }
                      }
                    },
                    [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-12" }, [
                          _c("div", { staticClass: "form-group text-center" }, [
                            _c(
                              "label",
                              {
                                staticClass: "font-weight-bold",
                                attrs: { for: "id_imagen" }
                              },
                              [_vm._v("Avatar")]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-lg" }),
                              _vm._v(" "),
                              _vm.user.avatar
                                ? _c(
                                    "div",
                                    {
                                      staticClass:
                                        "col-12 col-lg-3 mb-3 mb-lg-0"
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
                                            _vm.user.avatar
                                        }
                                      })
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
                                      staticClass: "text-center",
                                      attrs: {
                                        id: "id_imagen",
                                        options: _vm.dropzoneOptions,
                                        duplicateCheck: true,
                                        useCustomSlot: true
                                      },
                                      on: {
                                        "vdropzone-file-added": function(
                                          $event
                                        ) {
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
                                            "h3",
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
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-12" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticClass: "font-weight-bold",
                                attrs: { for: "name" }
                              },
                              [_vm._v("Nombre:")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.user.name,
                                  expression: "user.name"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                id: "name",
                                placeholder: "Nombre"
                              },
                              domProps: { value: _vm.user.name },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.user,
                                    "name",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors && _vm.errors.name
                              ? _c(
                                  "label",
                                  {
                                    staticClass: "mt-2 mb-0 text-danger",
                                    attrs: { for: "name" }
                                  },
                                  [_vm._v(_vm._s(_vm.errors.name[0]))]
                                )
                              : _vm._e()
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-12 col-md-6" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticClass: "font-weight-bold",
                                attrs: { for: "email" }
                              },
                              [_vm._v("Email:")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.user.email,
                                  expression: "user.email"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                id: "email",
                                placeholder: "Email"
                              },
                              domProps: { value: _vm.user.email },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.user,
                                    "email",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors && _vm.errors.email
                              ? _c(
                                  "label",
                                  {
                                    staticClass: "mt-2 mb-0 text-danger",
                                    attrs: { for: "email" }
                                  },
                                  [_vm._v(_vm._s(_vm.errors.email[0]))]
                                )
                              : _vm._e()
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-12 col-md-6" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticClass: "font-weight-bold",
                                attrs: { for: "password" }
                              },
                              [_vm._v("Contraseña:")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.user.password,
                                  expression: "user.password"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "password",
                                id: "password",
                                placeholder: "Contraseña"
                              },
                              domProps: { value: _vm.user.password },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.user,
                                    "password",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("small", { attrs: { id: "password" } }, [
                              _vm._v(
                                "La contraseña debe tener mínimo 8 caracteres."
                              )
                            ]),
                            _vm._v(" "),
                            _vm.errors && _vm.errors.password
                              ? _c(
                                  "label",
                                  {
                                    staticClass: "mt-2 mb-0 text-danger",
                                    attrs: { for: "password" }
                                  },
                                  [_vm._v(_vm._s(_vm.errors.password[0]))]
                                )
                              : _vm._e()
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-12 text-right" },
                          [
                            _c("Button", {
                              attrs: {
                                text: "Actualizar",
                                classes: ["btn-inverse-primary", "mr-2"],
                                "request-server": _vm.requestServer,
                                º: ""
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
                                    return _vm.restorePage.apply(
                                      null,
                                      arguments
                                    )
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
            : _vm._e(),
          _vm._v(" "),
          _vm.createBlock
            ? _c("div", { staticClass: "card mb-4" }, [
                _c("div", { staticClass: "card-body" }, [
                  _c(
                    "form",
                    {
                      attrs: { enctype: "multipart/form-data" },
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.createUser.apply(null, arguments)
                        }
                      }
                    },
                    [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-12" }, [
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c(
                                "label",
                                {
                                  staticClass: "font-weight-bold",
                                  attrs: { for: "id_imagen" }
                                },
                                [_vm._v("Avatar:")]
                              ),
                              _vm._v(" "),
                              _c(
                                "vue-dropzone",
                                {
                                  ref: "ref_image",
                                  attrs: {
                                    id: "id_imagen",
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
                                    { staticClass: "dropzone-custom-content" },
                                    [
                                      _c(
                                        "h3",
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
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-12" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticClass: "font-weight-bold",
                                attrs: { for: "name" }
                              },
                              [_vm._v("Nombre:")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.user.name,
                                  expression: "user.name"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                id: "name",
                                placeholder: "Nombre"
                              },
                              domProps: { value: _vm.user.name },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.user,
                                    "name",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors && _vm.errors.name
                              ? _c(
                                  "label",
                                  {
                                    staticClass: "mt-2 mb-0 text-danger",
                                    attrs: { for: "name" }
                                  },
                                  [_vm._v(_vm._s(_vm.errors.name[0]))]
                                )
                              : _vm._e()
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-12 col-md-6" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticClass: "font-weight-bold",
                                attrs: { for: "password" }
                              },
                              [_vm._v("Contraseña:")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.user.password,
                                  expression: "user.password"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "password",
                                id: "password",
                                placeholder: "Contraseña"
                              },
                              domProps: { value: _vm.user.password },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.user,
                                    "password",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("small", { attrs: { id: "password" } }, [
                              _vm._v(
                                "La contraseña debe tener mínimo 8 caracteres."
                              )
                            ]),
                            _vm._v(" "),
                            _vm.errors && _vm.errors.password
                              ? _c(
                                  "label",
                                  {
                                    staticClass: "mt-2 mb-0 text-danger",
                                    attrs: { for: "password" }
                                  },
                                  [_vm._v(_vm._s(_vm.errors.password[0]))]
                                )
                              : _vm._e()
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-12 col-md-6" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticClass: "font-weight-bold",
                                attrs: { for: "email" }
                              },
                              [_vm._v("Email:")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.user.email,
                                  expression: "user.email"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                id: "email",
                                placeholder: "Email"
                              },
                              domProps: { value: _vm.user.email },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.user,
                                    "email",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors && _vm.errors.email
                              ? _c(
                                  "label",
                                  {
                                    staticClass: "mt-2 mb-0 text-danger",
                                    attrs: { for: "email" }
                                  },
                                  [_vm._v(_vm._s(_vm.errors.email[0]))]
                                )
                              : _vm._e()
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-12 text-right mt-2" },
                          [
                            _c("Button", {
                              attrs: {
                                text: "Guardar",
                                classes: ["btn-inverse-primary", "mr-2"],
                                "request-server": _vm.requestServer
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
                                    return _vm.restorePage.apply(
                                      null,
                                      arguments
                                    )
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
            : _vm._e(),
          _vm._v(" "),
          _vm.detailBlock && !_vm.requestLoading
            ? _c("div", { staticClass: "card mb-4" }, [
                _c("div", { staticClass: "card-body" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-12" }, [
                      _c("div", { staticClass: "form-group text-center" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "rounded-circle mx-auto d-flex avatar avatar-lg text-center mb-2 bg-default",
                            staticStyle: { height: "120px", width: "120px" }
                          },
                          [
                            _vm.user.avatar
                              ? _c("img", {
                                  staticClass:
                                    "shadow rounded-circle object-fit--cover",
                                  attrs: {
                                    src: "/files/img/users/" + _vm.user.avatar,
                                    alt: "Perfil"
                                  }
                                })
                              : _c(
                                  "span",
                                  { staticStyle: { "font-size": "54px" } },
                                  [_vm._v(_vm._s(_vm.user.avatar_initials))]
                                )
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-md-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          {
                            staticClass: "font-weight-bold",
                            attrs: { for: "name" }
                          },
                          [_vm._v("Nombre:")]
                        ),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(this.user.name))])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-md-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          {
                            staticClass: "font-weight-bold",
                            attrs: { for: "email" }
                          },
                          [_vm._v("Email:")]
                        ),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(this.user.email))])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-md-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          {
                            staticClass: "font-weight-bold",
                            attrs: { for: "id_fecha_nacimiento" }
                          },
                          [_vm._v("Registrado el:")]
                        ),
                        _vm._v(" "),
                        this.user.created_at
                          ? _c("p", [
                              _vm._v(_vm._s(this.user.created_at_format))
                            ])
                          : _c("p", [_vm._v("No registrado")])
                      ])
                    ])
                  ])
                ])
              ])
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c("destroy", {
        attrs: {
          element: "usuario",
          open: _vm.modalDestroy,
          "loading-get": _vm.requestLoading,
          "loading-submit": _vm.requestServer
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

/***/ "./resources/js/views/configuration/Users.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/configuration/Users.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_vue_vue_type_template_id_45c686e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Users.vue?vue&type=template&id=45c686e0& */ "./resources/js/views/configuration/Users.vue?vue&type=template&id=45c686e0&");
/* harmony import */ var _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Users.vue?vue&type=script&lang=js& */ "./resources/js/views/configuration/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Users_vue_vue_type_template_id_45c686e0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Users_vue_vue_type_template_id_45c686e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/configuration/Users.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/configuration/Users.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/configuration/Users.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/configuration/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/configuration/Users.vue?vue&type=template&id=45c686e0&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/configuration/Users.vue?vue&type=template&id=45c686e0& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_45c686e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=template&id=45c686e0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/configuration/Users.vue?vue&type=template&id=45c686e0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_45c686e0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_45c686e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);