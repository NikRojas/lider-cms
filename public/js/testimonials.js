(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/testimonials"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Testimonials.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Testimonials.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Button */ "./resources/js/components/Button.vue");
/* harmony import */ var _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/BreadCrumb */ "./resources/js/components/BreadCrumb.vue");
/* harmony import */ var _components_ElementsDraggable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ElementsDraggable */ "./resources/js/components/ElementsDraggable.vue");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue2-dropzone */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.js");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone__WEBPACK_IMPORTED_MODULE_3__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      errors: {},
      testimonial: {
        image: "",
        index: "",
        full_name: "",
        job: "",
        company: "",
        message: ""
      },
      startBlock: true,
      testimonials: [],
      newBlock: false,
      editBlock: false,
      requestServer: false,
      dropzoneOptions: {
        url: "/",
        maxFiles: 1,
        acceptedFiles: "image/png,image/jpeg,image/jpg,image/svg+xml",
        autoProcessQueue: false,
        thumbnailWidth: 150,
        addRemoveLinks: true,
        dictRemoveFile: "Remover Imagen"
      }
    };
  },
  components: {
    //Footer,
    vueDropzone: vue2_dropzone__WEBPACK_IMPORTED_MODULE_3___default.a,
    BreadCrumb: _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_1__["default"],
    Button: _components_Button__WEBPACK_IMPORTED_MODULE_0__["default"],
    ElementsDraggable: _components_ElementsDraggable__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  methods: {
    restoreEl: function restoreEl() {
      this.editBlock = this.requestServer = false;
      this.startBlock = true;
      this.errors = {}, this.testimonial = {
        image: "",
        index: "",
        full_name: "",
        job: "",
        company: "",
        message: ""
      };
      this.$refs["modal-delete"].hide();
    },
    getElement: function getElement(id) {
      var _this = this;

      axios.get("json/testimonials/" + id).then(function (response) {
        _this.testimonial = response.data;
      })["catch"](function (error) {});
    },
    deleteElementConfirm: function deleteElementConfirm() {
      var _this2 = this;

      this.requestServer = true;
      axios["delete"]("testimonials/" + this.testimonial.id).then(function (response) {
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
        _this2.restoreEl();

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
    deleteElement: function deleteElement(id) {
      this.$refs["modal-delete"].show();
      this.getElement(id);
    },
    newElement: function newElement() {
      this.newBlock = true;
      this.startBlock = false;
    },
    editElement: function editElement(id) {
      this.editBlock = true;
      this.startBlock = false;
      this.getElement(id);
    },
    restorePage: function restorePage() {
      this.image = [];
      this.startBlock = true;
      this.newBlock = this.editBlock = this.requestServer = false;
      this.errors = {};
      this.testimonials = [];
      this.getElements();
      this.$refs["modal-delete"].hide();
      this.testimonial = {
        image: "",
        index: "",
        full_name: "",
        job: "",
        company: "",
        message: ""
      };
    },
    getElements: function getElements() {
      var _this3 = this;

      axios.get("json/testimonials").then(function (response) {
        _this3.testimonials = response.data;
      })["catch"](function (error) {});
    },
    updateElement: function updateElement() {
      var _this4 = this;

      this.requestServer = true;
      var fd = new FormData();
      fd.append("id", this.testimonial.id);
      this.testimonial.full_name ? fd.append("full_name", this.testimonial.full_name) : fd.append("full_name", "");
      this.testimonial.job ? fd.append("job", this.testimonial.job) : fd.append("job", "");
      this.testimonial.company ? fd.append("company", this.testimonial.company) : fd.append("company", "");
      this.testimonial.message ? fd.append("message", this.testimonial.message) : fd.append("message", "");

      if (this.$refs.ref_image.dropzone.files[0]) {
        fd.append("image", this.$refs.ref_image.dropzone.files[0]);
      }

      fd.append("_method", "PUT");
      axios.post("testimonials/" + this.testimonial.id, fd).then(function (response) {
        _this4.requestServer = false;

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
          _this4.errors = error.response.data.errors || {};
          return;
        }

        _this4.restorePage();

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
    createElement: function createElement() {
      var _this5 = this;

      this.requestServer = true;
      var fd = new FormData();
      this.testimonial.full_name ? fd.append("full_name", this.testimonial.full_name) : fd.append("full_name", "");
      this.testimonial.job ? fd.append("job", this.testimonial.job) : fd.append("job", "");
      this.testimonial.company ? fd.append("company", this.testimonial.company) : fd.append("company", "");
      this.testimonial.message ? fd.append("message", this.testimonial.message) : fd.append("message", "");

      if (this.$refs.ref_image.dropzone.files[0]) {
        fd.append("image", this.$refs.ref_image.dropzone.files[0]);
      }

      axios.post("testimonials", fd).then(function (response) {
        _this5.requestServer = false;

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
        _this5.requestServer = false;

        if (error.response.status === 422) {
          _this5.errors = error.response.data.errors || {};
          return;
        }

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
    orderElements: function orderElements(elements) {
      var _this6 = this;

      axios.put("testimonials/order", elements).then(function (response) {
        _this6.restorePage();

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
    }
  },
  created: function created() {
    this.getElements();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Testimonials.vue?vue&type=template&id=5a07435a&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Testimonials.vue?vue&type=template&id=5a07435a& ***!
  \**********************************************************************************************************************************************************************************************************/
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
                      attrs: { title: "Testimonios", active: "Testimonios" }
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
                          staticClass: "btn btn-icon btn-neutral",
                          attrs: { href: "#" },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.newElement($event)
                            }
                          }
                        },
                        [
                          _vm._m(0),
                          _vm._v(" "),
                          _c("span", { staticClass: "btn-inner--text" }, [
                            _vm._v("Nuevo Testimonio")
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
                  type: "testimonials",
                  object: _vm.testimonials,
                  classes: [
                    "col-12",
                    "col-sm-6",
                    "col-lg-6",
                    "col-xl-4",
                    "mb-4"
                  ]
                },
                on: {
                  delete: _vm.deleteElement,
                  edit: _vm.editElement,
                  drag: _vm.orderElements,
                  "update:object": function($event) {
                    _vm.testimonials = $event
                  }
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.newBlock
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
                          return _vm.createElement($event)
                        }
                      }
                    },
                    [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-12 col-lg-3" }, [
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c(
                                "label",
                                {
                                  staticClass: "font-weight-bold d-block mb-0"
                                },
                                [_vm._v("Imagen")]
                              ),
                              _vm._v(" "),
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
                                        124000,
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
                                        "text-danger text-sm mt-2 d-block",
                                      attrs: { for: "id_image" }
                                    },
                                    [_vm._v(_vm._s(_vm.errors.image[0]))]
                                  )
                                : _vm._e()
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-12 col-lg-9" }, [
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-12" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c(
                                  "label",
                                  {
                                    staticClass: "font-weight-bold",
                                    attrs: { for: "id_full_name" }
                                  },
                                  [_vm._v("Nombre Completo")]
                                ),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.testimonial.full_name,
                                      expression: "testimonial.full_name"
                                    }
                                  ],
                                  staticClass:
                                    "form-control form-control-alternative",
                                  attrs: { type: "text", id: "id_full_name" },
                                  domProps: {
                                    value: _vm.testimonial.full_name
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.testimonial,
                                        "full_name",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _vm.errors && _vm.errors.full_name
                                  ? _c(
                                      "label",
                                      {
                                        staticClass: "mt-2 text-danger text-sm",
                                        attrs: { for: "id_full_name" }
                                      },
                                      [_vm._v(_vm._s(_vm.errors.full_name[0]))]
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
                                    attrs: { for: "id_job" }
                                  },
                                  [_vm._v("Cargo")]
                                ),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.testimonial.job,
                                      expression: "testimonial.job"
                                    }
                                  ],
                                  staticClass:
                                    "form-control form-control-alternative",
                                  attrs: { type: "text", id: "id_job" },
                                  domProps: { value: _vm.testimonial.job },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.testimonial,
                                        "job",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _vm.errors && _vm.errors.job
                                  ? _c(
                                      "label",
                                      {
                                        staticClass: "mt-2 text-danger text-sm",
                                        attrs: { for: "id_job" }
                                      },
                                      [_vm._v(_vm._s(_vm.errors.job[0]))]
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
                                    attrs: { for: "id_company" }
                                  },
                                  [_vm._v("Empresa")]
                                ),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.testimonial.company,
                                      expression: "testimonial.company"
                                    }
                                  ],
                                  staticClass:
                                    "form-control form-control-alternative",
                                  attrs: { type: "text", id: "id_company" },
                                  domProps: { value: _vm.testimonial.company },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.testimonial,
                                        "company",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _vm.errors && _vm.errors.company
                                  ? _c(
                                      "label",
                                      {
                                        staticClass: "mt-2 text-danger text-sm",
                                        attrs: { for: "id_company" }
                                      },
                                      [_vm._v(_vm._s(_vm.errors.company[0]))]
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
                                    attrs: { for: "id_message" }
                                  },
                                  [_vm._v("Testimonio")]
                                ),
                                _vm._v(" "),
                                _c("textarea", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.testimonial.message,
                                      expression: "testimonial.message"
                                    }
                                  ],
                                  staticClass:
                                    "form-control form-control-alternative",
                                  attrs: { id: "id_message", rows: "4" },
                                  domProps: { value: _vm.testimonial.message },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.testimonial,
                                        "message",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _vm.errors && _vm.errors.message
                                  ? _c(
                                      "label",
                                      {
                                        staticClass: "mt-2 text-danger text-sm",
                                        attrs: { for: "id_message" }
                                      },
                                      [_vm._v(_vm._s(_vm.errors.message[0]))]
                                    )
                                  : _vm._e()
                              ])
                            ])
                          ])
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
            : _vm._e(),
          _vm._v(" "),
          _vm.editBlock
            ? _c("div", { staticClass: "card shadow" }, [
                _vm._m(2),
                _vm._v(" "),
                _c("div", { staticClass: "card-body" }, [
                  _c(
                    "form",
                    {
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.updateElement($event)
                        }
                      }
                    },
                    [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-12 col-lg-3" }, [
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-3" }, [
                              _vm.testimonial.image
                                ? _c("img", {
                                    staticClass:
                                      "img-fluid shadow mx-auto d-block",
                                    attrs: {
                                      src:
                                        "https://storage.googleapis.com/playgroup-web/img/testimonials/" +
                                        _vm.testimonial.image,
                                      alt: _vm.testimonial.image
                                    }
                                  })
                                : _vm._e()
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-9" }, [
                              _c(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  _c(
                                    "label",
                                    {
                                      staticClass:
                                        "font-weight-bold d-block mb-0"
                                    },
                                    [_vm._v("Imagen")]
                                  ),
                                  _vm._v(" "),
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
                                  ),
                                  _vm._v(" "),
                                  _vm.errors && _vm.errors.image
                                    ? _c(
                                        "label",
                                        {
                                          staticClass:
                                            "text-danger text-sm d-block",
                                          attrs: { for: "id_image" }
                                        },
                                        [_vm._v(_vm._s(_vm.errors.image[0]))]
                                      )
                                    : _vm._e()
                                ],
                                1
                              )
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-12 col-lg-9" }, [
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-12" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c(
                                  "label",
                                  {
                                    staticClass: "font-weight-bold",
                                    attrs: { for: "id_full_name" }
                                  },
                                  [_vm._v("Nombre Completo")]
                                ),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.testimonial.full_name,
                                      expression: "testimonial.full_name"
                                    }
                                  ],
                                  staticClass:
                                    "form-control form-control-alternative",
                                  attrs: { type: "text", id: "id_full_name" },
                                  domProps: {
                                    value: _vm.testimonial.full_name
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.testimonial,
                                        "full_name",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _vm.errors && _vm.errors.full_name
                                  ? _c(
                                      "label",
                                      {
                                        staticClass: "mt-2 text-danger text-sm",
                                        attrs: { for: "id_full_name" }
                                      },
                                      [_vm._v(_vm._s(_vm.errors.full_name[0]))]
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
                                    attrs: { for: "id_job" }
                                  },
                                  [_vm._v("Cargo")]
                                ),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.testimonial.job,
                                      expression: "testimonial.job"
                                    }
                                  ],
                                  staticClass:
                                    "form-control form-control-alternative",
                                  attrs: { type: "text", id: "id_job" },
                                  domProps: { value: _vm.testimonial.job },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.testimonial,
                                        "job",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _vm.errors && _vm.errors.job
                                  ? _c(
                                      "label",
                                      {
                                        staticClass: "mt-2 text-danger text-sm",
                                        attrs: { for: "id_job" }
                                      },
                                      [_vm._v(_vm._s(_vm.errors.job[0]))]
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
                                    attrs: { for: "id_company" }
                                  },
                                  [_vm._v("Empresa")]
                                ),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.testimonial.company,
                                      expression: "testimonial.company"
                                    }
                                  ],
                                  staticClass:
                                    "form-control form-control-alternative",
                                  attrs: { type: "text", id: "id_company" },
                                  domProps: { value: _vm.testimonial.company },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.testimonial,
                                        "company",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _vm.errors && _vm.errors.company
                                  ? _c(
                                      "label",
                                      {
                                        staticClass: "mt-2 text-danger text-sm",
                                        attrs: { for: "id_company" }
                                      },
                                      [_vm._v(_vm._s(_vm.errors.company[0]))]
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
                                    attrs: { for: "id_message" }
                                  },
                                  [_vm._v("Testimonio")]
                                ),
                                _vm._v(" "),
                                _c("textarea", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.testimonial.message,
                                      expression: "testimonial.message"
                                    }
                                  ],
                                  staticClass:
                                    "form-control form-control-alternative",
                                  attrs: { id: "id_message", rows: "4" },
                                  domProps: { value: _vm.testimonial.message },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.testimonial,
                                        "message",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _vm.errors && _vm.errors.message
                                  ? _c(
                                      "label",
                                      {
                                        staticClass: "mt-2 text-danger text-sm",
                                        attrs: { for: "id_message" }
                                      },
                                      [_vm._v(_vm._s(_vm.errors.message[0]))]
                                    )
                                  : _vm._e()
                              ])
                            ])
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
          _c("Footer")
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
                    on: { click: _vm.deleteElementConfirm }
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
              _vm._v("Eliminar Testimonio")
            ])
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "mb-0" }, [
            _vm._v("Esta seguro que desea eliminar el testimonio?")
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
      _c("i", { staticClass: "fas fa-award" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header border-0" }, [
      _c("h2", { staticClass: "mb-0 text-uppercase text-primary" }, [
        _vm._v("Crear Testimonio")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header bg-white border-0" }, [
      _c("h2", { staticClass: "mb-0 text-uppercase text-primary" }, [
        _vm._v("Actualizar Testimonio")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Testimonials.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/Testimonials.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Testimonials_vue_vue_type_template_id_5a07435a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Testimonials.vue?vue&type=template&id=5a07435a& */ "./resources/js/views/Testimonials.vue?vue&type=template&id=5a07435a&");
/* harmony import */ var _Testimonials_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Testimonials.vue?vue&type=script&lang=js& */ "./resources/js/views/Testimonials.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Testimonials_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Testimonials_vue_vue_type_template_id_5a07435a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Testimonials_vue_vue_type_template_id_5a07435a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Testimonials.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Testimonials.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/Testimonials.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonials_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Testimonials.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Testimonials.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonials_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Testimonials.vue?vue&type=template&id=5a07435a&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/Testimonials.vue?vue&type=template&id=5a07435a& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonials_vue_vue_type_template_id_5a07435a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Testimonials.vue?vue&type=template&id=5a07435a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Testimonials.vue?vue&type=template&id=5a07435a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonials_vue_vue_type_template_id_5a07435a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonials_vue_vue_type_template_id_5a07435a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);