(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/gallery"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Cooltura/Gallery.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Cooltura/Gallery.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Button */ "./resources/js/components/Button.vue");
/* harmony import */ var _components_ElementsDraggable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ElementsDraggable */ "./resources/js/components/ElementsDraggable.vue");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.common.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue2-dropzone */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.js");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/BreadCrumb */ "./resources/js/components/BreadCrumb.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      startBlock: true,
      newBlock: false,
      requestServer: false,
      detailBlock: false,
      editBlock: false,
      service: {
        title: "",
        image: "",
        description: ''
      },
      errors: {},
      items: [],
      dropzoneOptions: {
        url: "/",
        maxFiles: 1,
        acceptedFiles: "image/png,image/jpeg,image/jpg,image/svg+xml",
        autoProcessQueue: false,
        thumbnailWidth: 400,
        addRemoveLinks: true,
        dictRemoveFile: "Remover Imagen"
      }
    };
  },
  components: {
    vueDropzone: vue2_dropzone__WEBPACK_IMPORTED_MODULE_3___default.a,
    Button: _components_Button__WEBPACK_IMPORTED_MODULE_0__["default"],
    BreadCrumb: _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_4__["default"],
    ElementsDraggable: _components_ElementsDraggable__WEBPACK_IMPORTED_MODULE_1__["default"],
    draggable: vuedraggable__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  methods: {
    updateItem: function updateItem() {
      var _this = this;

      this.requestServer = true;
      var fd = new FormData();
      fd.append("id", this.service.id);

      if (this.service.title) {
        fd.append("title", this.service.title);
      }

      if (this.service.description) {
        fd.append("description", this.service.description);
      }

      if (this.$refs.ref_image_1.dropzone.files[0]) {
        fd.append("image", this.$refs.ref_image_1.dropzone.files[0]);
      }

      fd.append("_method", "PUT");
      axios.post("/cooltura-play/gallery/" + this.service.id, fd).then(function (response) {
        _this.requestServer = false;

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

        if (error.response.status === 422) {
          _this.errors = error.response.data.errors || {};
          return;
        }

        _this.restorePage();

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
    editItem: function editItem(id) {
      this.editBlock = true;
      this.startBlock = false;
      this.getItem(id);
    },
    newItem: function newItem() {
      this.newBlock = true;
      this.startBlock = false;
    },
    restorePage: function restorePage() {
      this.errors = {};
      this.requestServer = false;
      this.newBlock = this.detailBlock = this.editBlock = false;
      this.startBlock = true;
      this.service = {
        title: "",
        image: "",
        description: ''
      };
      this.items = [];
      this.getItems(1, 5);
    },
    createItem: function createItem() {
      var _this2 = this;

      this.requestServer = true;
      var fd = new FormData();

      if (this.service.title) {
        fd.append("title", this.service.title);
      }

      if (this.service.description) {
        fd.append("description", this.service.description);
      }

      if (this.$refs.ref_image_1.dropzone.files[0]) {
        fd.append("image", this.$refs.ref_image_1.dropzone.files[0]);
      } else {
        fd.append("image", "");
      }

      axios.post("/cooltura-play/gallery", fd).then(function (response) {
        _this2.requestServer = false;

        _this2.restorePage();

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
            confirmButton: "btn btn-primary"
          }
        });
      });
    },
    getItems: function getItems() {
      var _this3 = this;

      axios.get("/cooltura-play/json/gallery").then(function (response) {
        _this3.items = response.data;
      })["catch"](function (error) {});
    },
    orderItems: function orderItems(elements) {
      var _this4 = this;

      axios.put("/cooltura-play/gallery/order", elements).then(function (response) {
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
    deleteItemConfirm: function deleteItemConfirm() {
      var _this5 = this;

      this.requestServer = true;
      axios["delete"]("/cooltura-play/gallery/" + this.service.id).then(function (response) {
        _this5.$refs["modal-delete"].hide();

        _this5.restorePage();

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
        _this5.$refs["modal-delete"].hide();

        _this5.restorePage();

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
    getItem: function getItem(id) {
      var _this6 = this;

      axios.get("/cooltura-play/json/gallery/" + id).then(function (response) {
        _this6.service = response.data;
      })["catch"](function (error) {});
    },
    deleteItem: function deleteItem(id) {
      this.$refs["modal-delete"].show(); //console.log(id);

      this.getItem(id);
    }
  },
  created: function created() {
    this.getItems();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Cooltura/Gallery.vue?vue&type=template&id=7563657b&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Cooltura/Gallery.vue?vue&type=template&id=7563657b& ***!
  \**************************************************************************************************************************************************************************************************************/
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
                        title: "Galería",
                        parent: "Cooltura Play",
                        active: "Galería"
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
                          staticClass: "btn btn-icon  btn-neutral",
                          attrs: { href: "#" },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.newItem($event)
                            }
                          }
                        },
                        [
                          _vm._m(0),
                          _vm._v(" "),
                          _c("span", { staticClass: "btn-inner--text" }, [
                            _vm._v("Nuevo Elemento")
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
          _vm.startBlock
            ? _c("ElementsDraggable", {
                attrs: {
                  type: "cooltura",
                  object: _vm.items,
                  classes: ["col-6", "col-lg-3", "mb-4"]
                },
                on: {
                  delete: _vm.deleteItem,
                  edit: _vm.editItem,
                  drag: _vm.orderItems,
                  "update:object": function($event) {
                    _vm.items = $event
                  }
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.editBlock
            ? _c("div", { staticClass: "card shadow mb-4" }, [
                _vm._m(1),
                _vm._v(" "),
                _c("div", { staticClass: "card-body" }, [
                  _c(
                    "form",
                    {
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.updateItem($event)
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
                                staticClass: "font-weight-bold",
                                attrs: { for: "id_title" }
                              },
                              [_vm._v("Título")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.service.title,
                                  expression: "service.title"
                                }
                              ],
                              staticClass:
                                "form-control form-control-alternative",
                              attrs: { type: "text", id: "id_title" },
                              domProps: { value: _vm.service.title },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.service,
                                    "title",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors && _vm.errors.title
                              ? _c(
                                  "label",
                                  {
                                    staticClass: "mt-2 text-danger text-sm",
                                    attrs: { for: "id_title" }
                                  },
                                  [_vm._v(_vm._s(_vm.errors.title[0]))]
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
                                attrs: { for: "id_description" }
                              },
                              [_vm._v("Descripción")]
                            ),
                            _vm._v(" "),
                            _c("textarea", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.service.description,
                                  expression: "service.description"
                                }
                              ],
                              staticClass:
                                "form-control form-control-alternative",
                              attrs: { type: "text", id: "id_description" },
                              domProps: { value: _vm.service.description },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.service,
                                    "description",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors && _vm.errors.description
                              ? _c(
                                  "label",
                                  {
                                    staticClass: "mt-2 text-danger text-sm",
                                    attrs: { for: "id_description" }
                                  },
                                  [_vm._v(_vm._s(_vm.errors.description[0]))]
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
                                staticClass: "font-weight-bold mb-0",
                                attrs: { for: "id_image_1" }
                              },
                              [_vm._v("Imagen")]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-3" }, [
                                _vm.service.image
                                  ? _c("img", {
                                      staticClass: "img-fluid mx-auto d-block",
                                      attrs: {
                                        src:
                                          "https://storage.googleapis.com/playgroup-web/img/cooltura/" +
                                          _vm.service.image,
                                        alt: _vm.service.image
                                      }
                                    })
                                  : _vm._e()
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "col-9" },
                                [
                                  _c(
                                    "vue-dropzone",
                                    {
                                      ref: "ref_image_1",
                                      attrs: {
                                        id: "id_image_1",
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
                                            _vm.$refs.ref_image_1.dropzone,
                                            1,
                                            512000,
                                            "500kb"
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
                                                "Suelte los archivos aquí o haga click para cargarlos."
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
                            _vm.errors && _vm.errors.image
                              ? _c(
                                  "label",
                                  {
                                    staticClass:
                                      "text-danger text-sm d-block mt-2",
                                    attrs: { for: "id_image_1" }
                                  },
                                  [_vm._v(_vm._s(_vm.errors.image[0]))]
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
                                classes: ["btn-primary"],
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
                                    return _vm.restorePage($event)
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
          _vm.newBlock
            ? _c("div", { staticClass: "card shadow mb-4" }, [
                _vm._m(2),
                _vm._v(" "),
                _c("div", { staticClass: "card-body" }, [
                  _c(
                    "form",
                    {
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.createItem($event)
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
                                staticClass: "font-weight-bold",
                                attrs: { for: "id_title" }
                              },
                              [_vm._v("Título:")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.service.title,
                                  expression: "service.title"
                                }
                              ],
                              staticClass:
                                "form-control form-control-alternative",
                              attrs: {
                                type: "text",
                                placeholder: "Título",
                                id: "id_title"
                              },
                              domProps: { value: _vm.service.title },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.service,
                                    "title",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors && _vm.errors.title
                              ? _c(
                                  "label",
                                  {
                                    staticClass: "mt-2 text-danger text-sm",
                                    attrs: { for: "id_title" }
                                  },
                                  [_vm._v(_vm._s(_vm.errors.title[0]))]
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
                                attrs: { for: "id_description" }
                              },
                              [_vm._v("Descripción")]
                            ),
                            _vm._v(" "),
                            _c("textarea", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.service.description,
                                  expression: "service.description"
                                }
                              ],
                              staticClass:
                                "form-control form-control-alternative",
                              attrs: { type: "text", id: "id_description" },
                              domProps: { value: _vm.service.description },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.service,
                                    "description",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors && _vm.errors.description
                              ? _c(
                                  "label",
                                  {
                                    staticClass: "mt-2 text-danger text-sm",
                                    attrs: { for: "id_description" }
                                  },
                                  [_vm._v(_vm._s(_vm.errors.description[0]))]
                                )
                              : _vm._e()
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-12" }, [
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c(
                                "label",
                                {
                                  staticClass: "font-weight-bold mb-0",
                                  attrs: { for: "id_image_1" }
                                },
                                [_vm._v("Imagen:")]
                              ),
                              _vm._v(" "),
                              _c(
                                "vue-dropzone",
                                {
                                  ref: "ref_image_1",
                                  attrs: {
                                    id: "id_image_1",
                                    options: _vm.dropzoneOptions,
                                    duplicateCheck: true,
                                    useCustomSlot: true
                                  },
                                  on: {
                                    "vdropzone-file-added": function($event) {
                                      return _vm.$validateImageDropzone(
                                        $event,
                                        _vm.$refs.ref_image_1.dropzone,
                                        1,
                                        512000,
                                        "500kb"
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
                                        "h5",
                                        {
                                          staticClass:
                                            "dropzone-custom-title text-primary"
                                        },
                                        [
                                          _vm._v(
                                            "Suelte los archivos aquí o haga click para cargarlos."
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _vm.errors && _vm.errors.image
                                ? _c(
                                    "label",
                                    {
                                      staticClass:
                                        "text-danger text-sm d-block mt-2",
                                      attrs: { for: "id_image_1" }
                                    },
                                    [_vm._v(_vm._s(_vm.errors.image[0]))]
                                  )
                                : _vm._e()
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-12 text-right" },
                          [
                            _c("Button", {
                              attrs: {
                                text: "Registrar",
                                classes: ["btn-primary"],
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
                                    return _vm.restorePage($event)
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
                  _c("Button", {
                    attrs: {
                      classes: ["btn-danger"],
                      text: "Eliminar",
                      "request-server": _vm.requestServer
                    },
                    on: {
                      click: function($event) {
                        return _vm.deleteItemConfirm()
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
                          return cancel()
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
              _vm._v("Eliminar Elemento")
            ])
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "mb-0" }, [
            _vm._v("Esta seguro que desea eliminar el elemento?")
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
      _c("i", { staticClass: "fas fa-info" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header border-0" }, [
      _c("h2", { staticClass: "mb-0 text-uppercase text-primary" }, [
        _vm._v("Actualizar Elemento")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header border-0" }, [
      _c("h2", { staticClass: "mb-0 text-uppercase text-primary" }, [
        _vm._v("Crear Elemento")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Cooltura/Gallery.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/Cooltura/Gallery.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Gallery_vue_vue_type_template_id_7563657b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gallery.vue?vue&type=template&id=7563657b& */ "./resources/js/views/Cooltura/Gallery.vue?vue&type=template&id=7563657b&");
/* harmony import */ var _Gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gallery.vue?vue&type=script&lang=js& */ "./resources/js/views/Cooltura/Gallery.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Gallery_vue_vue_type_template_id_7563657b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Gallery_vue_vue_type_template_id_7563657b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Cooltura/Gallery.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Cooltura/Gallery.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/Cooltura/Gallery.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Gallery.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Cooltura/Gallery.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Cooltura/Gallery.vue?vue&type=template&id=7563657b&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/Cooltura/Gallery.vue?vue&type=template&id=7563657b& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_template_id_7563657b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Gallery.vue?vue&type=template&id=7563657b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Cooltura/Gallery.vue?vue&type=template&id=7563657b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_template_id_7563657b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Gallery_vue_vue_type_template_id_7563657b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);