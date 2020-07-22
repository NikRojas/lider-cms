(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/category"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/blog/Category.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/blog/Category.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/BreadCrumb */ "./resources/js/components/BreadCrumb.vue");
/* harmony import */ var _components_DataTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/DataTable */ "./resources/js/components/DataTable.vue");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Button */ "./resources/js/components/Button.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Button: _components_Button__WEBPACK_IMPORTED_MODULE_2__["default"],
    BreadCrumb: _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      requestServer: false,
      errors: {},
      category: {
        id: "",
        name: ""
      },
      categories: {}
    };
  },
  methods: {
    closeModal: function closeModal() {
      this.errors = {};
      this.requestServer = false;
      this.$refs["modal-create"].hide();
      this.$refs["modal-delete"].hide();
      this.$refs["modal-edit"].hide();
      this.category = {
        id: "",
        nombre: ""
      };
    },
    deleteCategoryConfirm: function deleteCategoryConfirm() {
      var _this = this;

      this.requestServer = true;
      axios["delete"]("categories/" + this.category.id).then(function (response) {
        _this.requestServer = false;

        _this.$refs["modal-delete"].hide();

        _this.restorePage();

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
        _this.requestServer = false;

        _this.$refs["modal-delete"].hide();

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
    getCategory: function getCategory(id) {
      var _this2 = this;

      axios.get("json/categories/" + id).then(function (response) {
        _this2.category = response.data;
      })["catch"](function (error) {});
    },
    deleteCategory: function deleteCategory(id) {
      this.$refs["modal-delete"].show();
      this.getCategory(id);
    },
    editCategory: function editCategory(id) {
      this.$refs["modal-edit"].show();
      this.getCategory(id);
    },
    restorePage: function restorePage() {
      this.errors = this.categories = {};
      this.requestServer = false;
      this.getCategories(1, 5);
      this.category = {
        id: "",
        nombre: ""
      };
    },
    createCategory: function createCategory() {
      var _this3 = this;

      this.requestServer = true;
      axios.post("categories", this.category).then(function (response) {
        _this3.requestServer = false;

        _this3.$refs["modal-create"].hide();

        _this3.restorePage();

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
        _this3.requestServer = false;

        if (error.response.status === 422) {
          _this3.errors = error.response.data.errors || {};
          return;
        }

        _this3.$refs["modal-create"].hide();

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
    updateCategory: function updateCategory() {
      var _this4 = this;

      this.requestServer = true;
      axios.put("categories/" + this.category.id, this.category).then(function (response) {
        _this4.closeModal();

        _this4.restorePage();

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
        _this4.requestServer = false;

        if (error.response.status === 422) {
          _this4.errores = error.response.data.errors || {};
          return;
        }

        _this4.closeModal();
      });
    },
    getCategories: function getCategories(pagina, desde) {
      var _this5 = this;

      var search = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var url = "json/categories?page=" + pagina + "&desde=" + desde;

      if (search) {
        url = url + "&search=" + search;
      }

      axios.get(url).then(function (response) {
        _this5.categories = response.data;
      })["catch"](function (error) {});
    },
    newCategory: function newCategory() {
      this.$refs["modal-create"].show();
    }
  },
  created: function created() {
    this.getCategories(1, 5);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/blog/Category.vue?vue&type=template&id=48bb58fc&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/blog/Category.vue?vue&type=template&id=48bb58fc& ***!
  \***********************************************************************************************************************************************************************************************************/
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
                        title: "Categorías",
                        parent: "Blog",
                        active: "Categorías"
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
                      staticClass: "btn btn-icon btn-neutral",
                      attrs: { href: "#" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.newCategory($event)
                        }
                      }
                    },
                    [
                      _vm._m(0),
                      _vm._v(" "),
                      _c("span", { staticClass: "btn-inner--text" }, [
                        _vm._v("Nueva Categoria")
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
      _c(
        "div",
        { staticClass: "container-fluid mt--6" },
        [
          _c("DataTable", {
            attrs: {
              placeholder: "Nombre",
              object: _vm.categories,
              buttonRead: false,
              buttonUpdate: true,
              buttonDelete: true
            },
            on: {
              "update:object": function($event) {
                _vm.categories = $event
              },
              update: _vm.editCategory,
              delete: _vm.deleteCategory,
              get: _vm.getCategories
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "modal-create",
          attrs: { centered: "" },
          scopedSlots: _vm._u([
            {
              key: "modal-footer",
              fn: function(ref) {
                var ok = ref.ok
                var cancel = ref.cancel
                return [
                  _c("Button", {
                    attrs: {
                      classes: ["btn-primary"],
                      text: "Registrar",
                      "request-server": _vm.requestServer
                    },
                    on: {
                      click: function($event) {
                        return _vm.createCategory()
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-outline-danger",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.closeModal()
                        }
                      }
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
              _vm._v("Crear Categoria")
            ])
          ]),
          _vm._v(" "),
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.createCategory($event)
                }
              }
            },
            [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-12" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "label",
                      {
                        staticClass: "form-control-label d-block",
                        attrs: { for: "id_name" }
                      },
                      [_vm._v("Nombre")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.category.name,
                          expression: "category.name"
                        }
                      ],
                      staticClass: "form-control form-control-alternative",
                      attrs: { type: "text", id: "id_name" },
                      domProps: { value: _vm.category.name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.category, "name", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors && _vm.errors.name
                      ? _c(
                          "label",
                          {
                            staticClass: "mt-2 text-danger text-sm",
                            attrs: { for: "id_name" }
                          },
                          [_vm._v(_vm._s(_vm.errors.name[0]))]
                        )
                      : _vm._e()
                  ])
                ])
              ])
            ]
          )
        ],
        2
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
                  _c("Button", {
                    attrs: {
                      classes: ["btn-danger"],
                      text: "Eliminar",
                      "request-server": _vm.requestServer
                    },
                    on: {
                      click: function($event) {
                        return _vm.deleteCategoryConfirm()
                      }
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
                          return _vm.closeModal()
                        }
                      }
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
              _vm._v("Eliminar Categoria")
            ])
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "my-3" }, [
            _vm._v("Esta seguro que desea eliminar el categoria?")
          ])
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "modal-edit",
          attrs: { centered: "" },
          scopedSlots: _vm._u([
            {
              key: "modal-footer",
              fn: function(ref) {
                var ok = ref.ok
                var cancel = ref.cancel
                return [
                  _c("Button", {
                    attrs: {
                      classes: ["btn-primary"],
                      text: "Actualizar",
                      "request-server": _vm.requestServer
                    },
                    on: {
                      click: function($event) {
                        return _vm.updateCategory()
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-outline-danger",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.closeModal()
                        }
                      }
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
              _vm._v("Actualizar Categoria")
            ])
          ]),
          _vm._v(" "),
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.updateCategory($event)
                }
              }
            },
            [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-12" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "label",
                      {
                        staticClass: "form-control-label d-block",
                        attrs: { for: "id_name" }
                      },
                      [_vm._v("Nombre")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.category.name,
                          expression: "category.name"
                        }
                      ],
                      staticClass: "form-control form-control-alternative",
                      attrs: { type: "text", id: "id_name" },
                      domProps: { value: _vm.category.name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.category, "name", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors && _vm.errors.name
                      ? _c(
                          "label",
                          {
                            staticClass: "mt-2 text-danger text-sm",
                            attrs: { for: "id_name" }
                          },
                          [_vm._v(_vm._s(_vm.errors.name[0]))]
                        )
                      : _vm._e()
                  ])
                ])
              ])
            ]
          )
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
      _c("i", { staticClass: "fas fa-newspaper" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/blog/Category.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/blog/Category.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Category_vue_vue_type_template_id_48bb58fc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Category.vue?vue&type=template&id=48bb58fc& */ "./resources/js/views/blog/Category.vue?vue&type=template&id=48bb58fc&");
/* harmony import */ var _Category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Category.vue?vue&type=script&lang=js& */ "./resources/js/views/blog/Category.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Category_vue_vue_type_template_id_48bb58fc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Category_vue_vue_type_template_id_48bb58fc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/blog/Category.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/blog/Category.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/blog/Category.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Category.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/blog/Category.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/blog/Category.vue?vue&type=template&id=48bb58fc&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/blog/Category.vue?vue&type=template&id=48bb58fc& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_template_id_48bb58fc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Category.vue?vue&type=template&id=48bb58fc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/blog/Category.vue?vue&type=template&id=48bb58fc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_template_id_48bb58fc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_template_id_48bb58fc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);