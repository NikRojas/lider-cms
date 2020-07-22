(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/roles"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/configuration/Roles.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/configuration/Roles.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/BreadCrumb */ "./resources/js/components/BreadCrumb.vue");
/* harmony import */ var _components_DataTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/DataTable */ "./resources/js/components/DataTable.vue");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Button */ "./resources/js/components/Button.vue");
/* harmony import */ var vue_search_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-search-select */ "./node_modules/vue-search-select/dist/VueSearchSelect.common.js");
/* harmony import */ var vue_search_select__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_search_select__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Loader */ "./resources/js/components/Loader.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    DataTable: _components_DataTable__WEBPACK_IMPORTED_MODULE_1__["default"],
    ModelListSelect: vue_search_select__WEBPACK_IMPORTED_MODULE_3__["ModelListSelect"],
    Loader: _components_Loader__WEBPACK_IMPORTED_MODULE_4__["default"],
    Boton: _components_Button__WEBPACK_IMPORTED_MODULE_2__["default"],
    BreadCrumb: _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      showBlock: true,
      crearBloque: false,
      verBloque: false,
      editBlock: false,
      requestServer: false,
      requestServer2: false,
      modulos: {
        data: ""
      },
      roles: {},
      empresas: [],
      total_permisos: 0,
      rol: {
        id: "",
        id_empresa: "",
        nombre: "",
        permisos: [],
        empresa: "",
        modulos: {
          pivot: {}
        },
        modulos_paginado: {}
      },
      todoSeleccionado: false,
      errores: {}
    };
  },
  methods: {
    getRole: function getRole(id) {
      var _this = this;

      var pagina = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      this.requestServer2 = true;
      var url = "roles/" + id;

      if (pagina) {
        url = url + "?page=" + pagina;
      }

      axios.get("json/" + url).then(function (response) {
        _this.rol = response.data;

        if (_this.editBlock) {
          if (_this.rol.permisos.length == _this.total_permisos) {
            _this.todoSeleccionado = true;
          }
        }

        _this.requestServer2 = false;
      })["catch"](function (error) {});
    },
    showRole: function showRole(id) {
      this.getRole(id);
      this.showBlock = false;
      this.verBloque = true;
    },
    deleteRole: function deleteRole(id) {
      this.$refs["modal-delete"].show();
      this.getRole(id);
    },
    deleteRoleConfirmar: function deleteRoleConfirmar() {
      var _this2 = this;

      this.requestServer = true;
      axios["delete"]("roles/" + this.rol.id).then(function (response) {
        _this2.restablecerPagina();

        Swal.fire({
          title: response.data.title,
          text: response.data.message,
          type: "success",
          confirmButtonText: "Ok",
          buttonsStyling: false,
          customClass: {
            confirmButton: "btn btn-primary"
          }
        });
      })["catch"](function (error) {
        _this2.restablecerPagina();

        Swal.fire({
          title: error.response.data.title,
          text: error.response.data.message,
          type: "error",
          confirmButtonText: "Ok",
          buttonsStyling: false,
          customClass: {
            confirmButton: "btn btn-primary"
          }
        });
      });
    },
    createRole: function createRole() {
      var _this3 = this;

      this.requestServer = true;
      axios.post("roles", this.rol).then(function (response) {
        _this3.requestServer = false;

        _this3.restablecerPagina();

        Swal.fire({
          title: response.data.title,
          text: response.data.message,
          type: "success",
          confirmButtonText: "Ok",
          buttonsStyling: false,
          customClass: {
            confirmButton: "btn btn-primary"
          }
        });
      })["catch"](function (error) {
        _this3.requestServer = false;

        if (error.response.status === 422) {
          _this3.errores = error.response.data.errors || {};
          return;
        }

        _this3.restablecerPagina();

        Swal.fire({
          title: error.response.data.title,
          text: error.response.data.message,
          type: "error",
          confirmButtonText: "Ok",
          buttonsStyling: false,
          customClass: {
            confirmButton: "btn btn-primary"
          }
        });
      });
    },
    restoreEl: function restoreEl() {
      this.showBlock = true;
      this.crearBloque = this.editBlock = this.verBloque = false;
      this.rol = {
        nombre: "",
        permisos: [],
        empresa: ""
      };
      this.$refs["modal-delete"].hide();
      this.requestServer = this.requestServer2 = false;
    },
    restablecerPagina: function restablecerPagina() {
      this.showBlock = true;
      this.getRoles(1, 5);
      this.crearBloque = this.verBloque = this.todoSeleccionado = this.editBlock = false;
      this.modulos = this.errores = {};
      this.rol = {
        nombre: "",
        permisos: [],
        empresa: ""
      };
      this.$refs["modal-delete"].hide();
      this.requestServer = this.requestServer2 = false;
    },
    getRoles: function getRoles(pagina, desde) {
      var _this4 = this;

      var buscar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var url = "json/roles?page=" + pagina + "&desde=" + desde;

      if (buscar) {
        url = url + "&buscar=" + buscar;
      }

      axios.get(url).then(function (response) {
        _this4.roles = response.data;
      })["catch"](function (error) {});
    },
    obtenerSelects: function obtenerSelects() {
      this.getModules();
    },
    getModules: function getModules(pagina) {
      var _this5 = this;

      this.requestServer2 = true;
      axios.get("json/modulos?page=" + pagina).then(function (response) {
        if (response.data.data) {
          _this5.modulos = response.data;
        }

        _this5.total_permisos = response.data.total;
        /*if (this.todoSeleccionado) {
          this.clickSeleccionarTodo();
        }*/

        _this5.requestServer2 = false;
      })["catch"](function (error) {});
    },
    obtenerEmpresas: function obtenerEmpresas() {
      var _this6 = this;

      axios.get("json/autocompletar/empresas").then(function (response) {
        _this6.empresas = response.data;
      })["catch"](function (err) {});
    },
    editRole: function editRole(id) {
      this.obtenerSelects();
      this.getRole(id);
      this.showBlock = false;
      this.editBlock = true;
    },
    updateRole: function updateRole() {
      var _this7 = this;

      this.requestServer = true;
      axios.put("roles/" + this.rol.id, this.rol).then(function (response) {
        _this7.requestServer = false;

        _this7.restablecerPagina();

        Swal.fire({
          title: response.data.title,
          text: response.data.message,
          type: "success",
          confirmButtonText: "Ok",
          buttonsStyling: false,
          customClass: {
            confirmButton: "btn btn-primary"
          }
        });
      })["catch"](function (error) {
        _this7.requestServer = false;

        if (error.response.status === 422) {
          _this7.errores = error.response.data.errors || {};
          return;
        }

        _this7.restablecerPagina();

        Swal.fire({
          title: error.response.data.title,
          text: error.response.data.message,
          type: "error",
          confirmButtonText: "Ok",
          buttonsStyling: false,
          customClass: {
            confirmButton: "btn btn-primary"
          }
        });
      });
    }
  },
  created: function created() {
    this.getRoles(1, 5);
  },
  watch: {
    todoSeleccionado: function todoSeleccionado(newValue, oldValue) {
      if (newValue) {
        this.rol.permisos = []; //if (this.todoSeleccionado && this.modulos.modulos_total) {

        if (this.todoSeleccionado) {
          for (var i = 0; i < this.modulos.modulos_total.length; i++) {
            this.rol.permisos.push(this.modulos.modulos_total[i].id);
          }
        }
      }
    },
    "rol.permisos": {
      handler: function handler(newValue, oldValue) {
        if (newValue && newValue.length != this.total_permisos) {
          this.todoSeleccionado = false;
        }

        if (newValue && newValue.length == this.total_permisos) {
          this.todoSeleccionado = true;
        }
      },
      deep: true
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/configuration/Roles.vue?vue&type=template&id=45912515&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/configuration/Roles.vue?vue&type=template&id=45912515& ***!
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
                  { staticClass: "col-6 col-md-7" },
                  [
                    _c("BreadCrumb", {
                      attrs: {
                        title: "Roles",
                        parent: "Configuración",
                        active: "Roles"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-6 col-md-5 text-right" }, [
                  _vm.showBlock
                    ? _c(
                        "a",
                        {
                          staticClass: "btn btn-icon btn-neutral",
                          attrs: { href: "#" },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return (function() {
                                _vm.showBlock = false
                                _vm.crearBloque = true
                                _vm.obtenerSelects()
                              })($event)
                            }
                          }
                        },
                        [
                          _vm._m(0),
                          _vm._v(" "),
                          _c("span", { staticClass: "btn-inner--text" }, [
                            _vm._v("Nuevo Rol")
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
              object: _vm.roles,
              placeholder: "Nombre del Rol",
              "button-update": true,
              "button-read": true,
              "button-delete": true
            },
            on: {
              get: _vm.getRoles,
              read: _vm.showRole,
              delete: _vm.deleteRole,
              update: _vm.editRole
            }
          }),
          _vm._v(" "),
          _vm.crearBloque
            ? _c("div", { staticClass: "card shadow mb-4" }, [
                _vm._m(1),
                _vm._v(" "),
                _c(
                  "form",
                  {
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.createRole($event)
                      }
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-lg-6" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticClass: "font-weight-bold",
                                attrs: { for: "id_name" }
                              },
                              [_vm._v("Nombre:")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.rol.name,
                                  expression: "rol.name"
                                }
                              ],
                              staticClass:
                                "form-control form-control-alternative",
                              attrs: {
                                type: "text",
                                id: "id_name",
                                placeholder: "Nombre"
                              },
                              domProps: { value: _vm.rol.name },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(_vm.rol, "name", $event.target.value)
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errores && _vm.errores.name
                              ? _c(
                                  "label",
                                  {
                                    staticClass: "mt-2 mb-0 text-danger",
                                    attrs: { for: "id_name" }
                                  },
                                  [_vm._v(_vm._s(_vm.errores.name[0]))]
                                )
                              : _vm._e()
                          ])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "table-responsive" }, [
                      !_vm.requestServer2 && _vm.modulos.data.length
                        ? _c(
                            "small",
                            { staticClass: "d-block mr-4 mb-2 text-right" },
                            [
                              _vm._v(
                                "\n            Mostrando " +
                                  _vm._s(_vm.modulos.from) +
                                  " de " +
                                  _vm._s(_vm.modulos.to) +
                                  " de " +
                                  _vm._s(_vm.modulos.total) +
                                  "\n            entradas\n          "
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.requestServer2 && _vm.modulos.data.length
                        ? _c(
                            "table",
                            { staticClass: "table align-items-center mb-3" },
                            [
                              _c("thead", { staticClass: "thead-light" }, [
                                _c("tr", [
                                  _c(
                                    "th",
                                    [
                                      _c("b-form-checkbox", {
                                        model: {
                                          value: _vm.todoSeleccionado,
                                          callback: function($$v) {
                                            _vm.todoSeleccionado = $$v
                                          },
                                          expression: "todoSeleccionado"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("th", [_vm._v("Módulo")])
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "tbody",
                                _vm._l(_vm.modulos.data, function(modulo) {
                                  return _c("tr", { key: modulo.id }, [
                                    _c(
                                      "td",
                                      [
                                        _c("b-form-checkbox", {
                                          attrs: { value: modulo.id },
                                          model: {
                                            value: _vm.rol.permisos,
                                            callback: function($$v) {
                                              _vm.$set(_vm.rol, "permisos", $$v)
                                            },
                                            expression: "rol.permisos"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(_vm._s(modulo.name))])
                                  ])
                                }),
                                0
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.requestServer2
                        ? _c(
                            "div",
                            [
                              _c("Loader", {
                                attrs: {
                                  texto: "Cargando...",
                                  iconClasses: ["ml-1"],
                                  iconHeight: 20,
                                  iconWidth: 20,
                                  styles: { height: "350px" }
                                }
                              })
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.requestServer2
                        ? _c("div", { staticClass: "row ml-0 mr-4" }, [
                            _c("div", { staticClass: "col-6" }, [
                              _c(
                                "ul",
                                {
                                  staticClass:
                                    "pagination justify-content-start mb-0"
                                },
                                [
                                  _c("li", { staticClass: "page-item" }, [
                                    _vm.modulos.current_page != 1
                                      ? _c(
                                          "a",
                                          {
                                            staticClass: "page-link rounded",
                                            attrs: { href: "#" },
                                            on: {
                                              click: function($event) {
                                                $event.preventDefault()
                                                return _vm.getModules(
                                                  _vm.modulos.current_page - 1
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "fas fa-angle-left"
                                            })
                                          ]
                                        )
                                      : _vm._e()
                                  ]),
                                  _vm._v(" "),
                                  _vm._l(_vm.modulos.last_page, function(
                                    pagina
                                  ) {
                                    return _c(
                                      "li",
                                      {
                                        key: pagina,
                                        staticClass: "page-item",
                                        class: [
                                          pagina == _vm.modulos.current_page
                                            ? "active"
                                            : ""
                                        ]
                                      },
                                      [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "page-link rounded",
                                            attrs: { href: "#" },
                                            on: {
                                              click: function($event) {
                                                $event.preventDefault()
                                                return _vm.getModules(pagina)
                                              }
                                            }
                                          },
                                          [_vm._v(_vm._s(pagina))]
                                        )
                                      ]
                                    )
                                  }),
                                  _vm._v(" "),
                                  _c("li", { staticClass: "page-item" }, [
                                    _vm.modulos.current_page !=
                                    _vm.modulos.last_page
                                      ? _c(
                                          "a",
                                          {
                                            staticClass: "page-link rounded",
                                            attrs: { href: "#" },
                                            on: {
                                              click: function($event) {
                                                $event.preventDefault()
                                                return _vm.getModules(
                                                  _vm.modulos.current_page + 1
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "fas fa-angle-right"
                                            })
                                          ]
                                        )
                                      : _vm._e()
                                  ])
                                ],
                                2
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-6 p-0" }, [
                              _vm.errores && _vm.errores.permisos
                                ? _c(
                                    "label",
                                    {
                                      staticClass:
                                        "mb-2 text-danger text-right d-block"
                                    },
                                    [_vm._v(_vm._s(_vm.errores.permisos[0]))]
                                  )
                                : _vm._e()
                            ])
                          ])
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "card-body pt-2" }, [
                      _c("div", { staticClass: "col-12 pr-0" }, [
                        _c(
                          "div",
                          { staticClass: "text-right" },
                          [
                            _c("Boton", {
                              attrs: {
                                text: "Guardar",
                                classes: ["btn-primary", "mr-2"],
                                "request-server": _vm.requestServer
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-danger",
                                attrs: { type: "button" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.restablecerPagina($event)
                                  }
                                }
                              },
                              [_vm._v("Cancelar")]
                            )
                          ],
                          1
                        )
                      ])
                    ])
                  ]
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.editBlock
            ? _c("div", { staticClass: "card shadow mb-4" }, [
                _vm._m(2),
                _vm._v(" "),
                _c(
                  "form",
                  {
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.updateRole($event)
                      }
                    }
                  },
                  [
                    _c("div", { staticClass: "card-body" }, [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-12" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticClass: "font-weight-bold",
                                attrs: { for: "id_name" }
                              },
                              [_vm._v("Nombre:")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.rol.name,
                                  expression: "rol.name"
                                }
                              ],
                              staticClass:
                                "form-control form-control-alternative",
                              attrs: {
                                type: "text",
                                id: "id_name",
                                placeholder: "Nombre"
                              },
                              domProps: { value: _vm.rol.name },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(_vm.rol, "name", $event.target.value)
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errores && _vm.errores.name
                              ? _c(
                                  "label",
                                  {
                                    staticClass: "mt-2 mb-0 text-danger",
                                    attrs: { for: "id_name" }
                                  },
                                  [_vm._v(_vm._s(_vm.errores.name[0]))]
                                )
                              : _vm._e()
                          ])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "table-responsive" }, [
                      !_vm.requestServer2 && _vm.modulos.data.length
                        ? _c(
                            "small",
                            { staticClass: "d-block mr-4 mb-2 text-right" },
                            [
                              _vm._v(
                                "\n            Mostrando " +
                                  _vm._s(_vm.modulos.from) +
                                  " de " +
                                  _vm._s(_vm.modulos.to) +
                                  " de " +
                                  _vm._s(_vm.modulos.total) +
                                  "\n            entradas\n          "
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.requestServer2 && _vm.modulos.data.length
                        ? _c(
                            "table",
                            { staticClass: "table align-items-center mb-4" },
                            [
                              _c("thead", { staticClass: "thead-light" }, [
                                _c("tr", [
                                  _c(
                                    "th",
                                    [
                                      _c("b-form-checkbox", {
                                        model: {
                                          value: _vm.todoSeleccionado,
                                          callback: function($$v) {
                                            _vm.todoSeleccionado = $$v
                                          },
                                          expression: "todoSeleccionado"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("th", [_vm._v("Módulo")])
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "tbody",
                                _vm._l(_vm.modulos.data, function(modulo) {
                                  return _c("tr", { key: modulo.id }, [
                                    _c(
                                      "td",
                                      [
                                        _c("b-form-checkbox", {
                                          attrs: { value: modulo.id },
                                          model: {
                                            value: _vm.rol.permisos,
                                            callback: function($$v) {
                                              _vm.$set(_vm.rol, "permisos", $$v)
                                            },
                                            expression: "rol.permisos"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(_vm._s(modulo.name))])
                                  ])
                                }),
                                0
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.requestServer2
                        ? _c(
                            "div",
                            [
                              _c("Loader", {
                                attrs: {
                                  texto: "Cargando...",
                                  iconClasses: ["ml-1"],
                                  iconHeight: 20,
                                  iconWidth: 20,
                                  styles: { height: "350px" }
                                }
                              })
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.requestServer2
                        ? _c("div", { staticClass: "row ml-0 mr-4" }, [
                            _c("div", { staticClass: "col-6" }, [
                              _c(
                                "ul",
                                {
                                  staticClass:
                                    "pagination justify-content-start mb-0"
                                },
                                [
                                  _c("li", { staticClass: "page-item" }, [
                                    _vm.modulos.current_page != 1
                                      ? _c(
                                          "a",
                                          {
                                            staticClass: "page-link rounded",
                                            attrs: { href: "#" },
                                            on: {
                                              click: function($event) {
                                                $event.preventDefault()
                                                return _vm.getModules(
                                                  _vm.modulos.current_page - 1
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "fas fa-angle-left"
                                            })
                                          ]
                                        )
                                      : _vm._e()
                                  ]),
                                  _vm._v(" "),
                                  _vm._l(_vm.modulos.last_page, function(
                                    pagina
                                  ) {
                                    return _c(
                                      "li",
                                      {
                                        key: pagina,
                                        staticClass: "page-item",
                                        class: [
                                          pagina == _vm.modulos.current_page
                                            ? "active"
                                            : ""
                                        ]
                                      },
                                      [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "page-link rounded",
                                            attrs: { href: "#" },
                                            on: {
                                              click: function($event) {
                                                $event.preventDefault()
                                                return _vm.getModules(pagina)
                                              }
                                            }
                                          },
                                          [_vm._v(_vm._s(pagina))]
                                        )
                                      ]
                                    )
                                  }),
                                  _vm._v(" "),
                                  _c("li", { staticClass: "page-item" }, [
                                    _vm.modulos.current_page !=
                                    _vm.modulos.last_page
                                      ? _c(
                                          "a",
                                          {
                                            staticClass: "page-link rounded",
                                            attrs: { href: "#" },
                                            on: {
                                              click: function($event) {
                                                $event.preventDefault()
                                                return _vm.getModules(
                                                  _vm.modulos.current_page + 1
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "fas fa-angle-right"
                                            })
                                          ]
                                        )
                                      : _vm._e()
                                  ])
                                ],
                                2
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-6 p-0" }, [
                              _vm.errores && _vm.errores.permisos
                                ? _c(
                                    "label",
                                    {
                                      staticClass:
                                        "mb-2 text-danger text-right d-block"
                                    },
                                    [_vm._v(_vm._s(_vm.errores.permisos[0]))]
                                  )
                                : _vm._e()
                            ])
                          ])
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "card-body pt-2" }, [
                      _c("div", { staticClass: "col-12 pr-0" }, [
                        _c(
                          "div",
                          { staticClass: "text-right" },
                          [
                            _c("Boton", {
                              attrs: {
                                text: "Guardar",
                                classes: ["btn-primary", "mr-2"],
                                "request-server": _vm.requestServer
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-danger",
                                attrs: { type: "button" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.restablecerPagina($event)
                                  }
                                }
                              },
                              [_vm._v("Cancelar")]
                            )
                          ],
                          1
                        )
                      ])
                    ])
                  ]
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.verBloque
            ? _c("div", { staticClass: "card shadow mb-4" }, [
                _vm._m(3),
                _vm._v(" "),
                _c("form", [
                  _c("div", { staticClass: "card-body" }, [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-12" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { staticClass: "font-weight-bold" }, [
                            _vm._v("Nombre:")
                          ]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.rol.name))])
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "table-responsive" }, [
                    !_vm.requestServer2 && _vm.rol.modulos_paginado.data.length
                      ? _c(
                          "small",
                          { staticClass: "d-block mr-4 mb-2 text-right" },
                          [
                            _vm._v(
                              "\n            Mostrando " +
                                _vm._s(_vm.rol.modulos_paginado.from) +
                                " de " +
                                _vm._s(_vm.rol.modulos_paginado.to) +
                                " de\n            " +
                                _vm._s(_vm.rol.modulos_paginado.total) +
                                " entradas\n          "
                            )
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.requestServer2 && _vm.rol.modulos_paginado.data.length
                      ? _c(
                          "table",
                          { staticClass: "table align-items-center mb-3" },
                          [
                            _vm._m(4),
                            _vm._v(" "),
                            _c(
                              "tbody",
                              _vm._l(_vm.rol.modulos_paginado.data, function(
                                modulo,
                                i
                              ) {
                                return _c("tr", { key: modulo.id }, [
                                  _c("td", [
                                    _vm._v(
                                      _vm._s(_vm.rol.modulos_paginado.from + i)
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(_vm._s(modulo.name))])
                                ])
                              }),
                              0
                            )
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.requestServer2
                      ? _c(
                          "div",
                          [
                            _c("Loader", {
                              attrs: {
                                texto: "Cargando...",
                                iconClasses: ["ml-1"],
                                iconHeight: 20,
                                iconWidth: 20,
                                styles: { height: "350px" }
                              }
                            })
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.requestServer2
                      ? _c("div", { staticClass: "row ml-0 mr-4" }, [
                          _c("div", { staticClass: "col-6" }, [
                            _c(
                              "ul",
                              {
                                staticClass:
                                  "pagination justify-content-start mb-0"
                              },
                              [
                                _c("li", { staticClass: "page-item" }, [
                                  _vm.rol.modulos_paginado.current_page != 1
                                    ? _c(
                                        "a",
                                        {
                                          staticClass: "page-link rounded",
                                          attrs: { href: "#" },
                                          on: {
                                            click: function($event) {
                                              $event.preventDefault()
                                              return _vm.getRole(
                                                _vm.rol.id,
                                                _vm.rol.modulos_paginado
                                                  .current_page - 1
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fas fa-angle-left"
                                          })
                                        ]
                                      )
                                    : _vm._e()
                                ]),
                                _vm._v(" "),
                                _vm._l(
                                  _vm.rol.modulos_paginado.last_page,
                                  function(pagina) {
                                    return _c(
                                      "li",
                                      {
                                        key: pagina,
                                        staticClass: "page-item",
                                        class: [
                                          pagina ==
                                          _vm.rol.modulos_paginado.current_page
                                            ? "active"
                                            : ""
                                        ]
                                      },
                                      [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "page-link rounded",
                                            attrs: { href: "#" },
                                            on: {
                                              click: function($event) {
                                                $event.preventDefault()
                                                return _vm.getRole(
                                                  _vm.rol.id,
                                                  pagina
                                                )
                                              }
                                            }
                                          },
                                          [_vm._v(_vm._s(pagina))]
                                        )
                                      ]
                                    )
                                  }
                                ),
                                _vm._v(" "),
                                _c("li", { staticClass: "page-item" }, [
                                  _vm.rol.modulos_paginado.current_page !=
                                  _vm.rol.modulos_paginado.last_page
                                    ? _c(
                                        "a",
                                        {
                                          staticClass: "page-link rounded",
                                          attrs: { href: "#" },
                                          on: {
                                            click: function($event) {
                                              $event.preventDefault()
                                              return _vm.getRole(
                                                _vm.rol.id,
                                                _vm.rol.modulos_paginado
                                                  .current_page + 1
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fas fa-angle-right"
                                          })
                                        ]
                                      )
                                    : _vm._e()
                                ])
                              ],
                              2
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-6 p-0" }, [
                            _vm.errores && _vm.errores.permisos
                              ? _c(
                                  "label",
                                  {
                                    staticClass:
                                      "mb-2 text-danger text-right d-block"
                                  },
                                  [_vm._v(_vm._s(_vm.errores.permisos[0]))]
                                )
                              : _vm._e()
                          ])
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-body pt-2" }, [
                    _c("div", { staticClass: "col-12 pr-0" }, [
                      _c("div", { staticClass: "text-right" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-primary",
                            attrs: { type: "button" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.restablecerPagina($event)
                              }
                            }
                          },
                          [_vm._v("Regresar")]
                        )
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
      _c(
        "b-modal",
        {
          ref: "modal-delete",
          attrs: { centered: "" },
          scopedSlots: _vm._u([
            {
              key: "modal-footer",
              fn: function(ref) {
                var ok = ref.ok
                var cancel = ref.cancel
                return [
                  _c("Boton", {
                    attrs: {
                      classes: ["btn-danger"],
                      text: "Eliminar",
                      "request-server": _vm.requestServer
                    },
                    on: { click: _vm.deleteRoleConfirmar }
                  }),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-secondary",
                      attrs: { type: "button" },
                      on: { click: _vm.restoreEl }
                    },
                    [_vm._v("Cancelar")]
                  )
                ]
              }
            }
          ])
        },
        [
          _c("template", { slot: "modal-title" }, [
            _c("h2", { staticClass: "mb-0 text-uppercase text-primary" }, [
              _vm._v("Eliminar Rol")
            ])
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "mb-0" }, [
            _vm._v(
              "Esta seguro que desea eliminar el rol?, Aseguresé que ningun usuario este anidado a este rol. "
            ),
            _vm.rol.usuarios
              ? _c("span", { staticClass: "text-danger" }, [
                  _vm._v(
                    "(" + _vm._s(_vm.rol.usuarios) + " usuario(s) anidados)"
                  )
                ])
              : _vm._e()
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
    return _c("span", { staticClass: "btn-inner--icon" }, [
      _c("i", { staticClass: "fas fa-cog" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header border-0" }, [
      _c("h2", { staticClass: "mb-0 text-uppercase text-primary" }, [
        _vm._v("Crear Rol")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header border-0" }, [
      _c("h2", { staticClass: "mb-0 text-uppercase text-primary" }, [
        _vm._v("Actualizar Rol")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header border-0" }, [
      _c("h2", { staticClass: "mb-0 text-uppercase text-primary" }, [
        _vm._v("Detalle Rol")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "thead-light" }, [
      _c("tr", [
        _c("th", [_vm._v("#")]),
        _vm._v(" "),
        _c("th", [_vm._v("Módulo")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/configuration/Roles.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/configuration/Roles.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Roles_vue_vue_type_template_id_45912515___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Roles.vue?vue&type=template&id=45912515& */ "./resources/js/views/configuration/Roles.vue?vue&type=template&id=45912515&");
/* harmony import */ var _Roles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Roles.vue?vue&type=script&lang=js& */ "./resources/js/views/configuration/Roles.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Roles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Roles_vue_vue_type_template_id_45912515___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Roles_vue_vue_type_template_id_45912515___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/configuration/Roles.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/configuration/Roles.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/configuration/Roles.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Roles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Roles.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/configuration/Roles.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Roles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/configuration/Roles.vue?vue&type=template&id=45912515&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/configuration/Roles.vue?vue&type=template&id=45912515& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Roles_vue_vue_type_template_id_45912515___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Roles.vue?vue&type=template&id=45912515& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/configuration/Roles.vue?vue&type=template&id=45912515&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Roles_vue_vue_type_template_id_45912515___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Roles_vue_vue_type_template_id_45912515___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);