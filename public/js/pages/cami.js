(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/pages/cami"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/cami.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/cami.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue2-dropzone */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.js");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-loading-skeleton */ "./node_modules/vue-loading-skeleton/dist/vue-loading-skeleton.esm.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Button */ "./resources/js/components/Button.vue");
/* harmony import */ var _components_form_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/form/Input */ "./resources/js/components/form/Input.vue");
/* harmony import */ var _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/BreadCrumb */ "./resources/js/components/BreadCrumb.vue");
/* harmony import */ var _components_form_Editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/form/Editor */ "./resources/js/components/form/Editor.vue");
/* harmony import */ var _components_form_InputSelectArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/form/InputSelectArray */ "./resources/js/components/form/InputSelectArray.vue");
/* harmony import */ var _components_form_MultipleFiles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/form/MultipleFiles */ "./resources/js/components/form/MultipleFiles.vue");
/* harmony import */ var vue_carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-carousel */ "./node_modules/vue-carousel/dist/vue-carousel.min.js");
/* harmony import */ var vue_carousel__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(vue_carousel__WEBPACK_IMPORTED_MODULE_8__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    messageOrder: String,
    routeGet: String,
    routeUpdate: String,
    imagesUrl: String
  },
  components: {
    Button: _components_Button__WEBPACK_IMPORTED_MODULE_2__["default"],
    vueDropzone: vue2_dropzone__WEBPACK_IMPORTED_MODULE_0___default.a,
    BreadCrumb: _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_4__["default"],
    Editor: _components_form_Editor__WEBPACK_IMPORTED_MODULE_5__["default"],
    Input: _components_form_Input__WEBPACK_IMPORTED_MODULE_3__["default"],
    Skeleton: vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__["Skeleton"],
    InputSelectArray: _components_form_InputSelectArray__WEBPACK_IMPORTED_MODULE_6__["default"],
    MultipleFiles: _components_form_MultipleFiles__WEBPACK_IMPORTED_MODULE_7__["default"],
    Carousel: vue_carousel__WEBPACK_IMPORTED_MODULE_8__["Carousel"],
    Slide: vue_carousel__WEBPACK_IMPORTED_MODULE_8__["Slide"]
  },
  data: function data() {
    return {
      info: false,
      el: {},
      dropzoneOptions: {
        url: "/",
        maxFiles: 1,
        acceptedFiles: "image/png,image/jpeg,image/jpg,image/svg+xml",
        autoProcessQueue: false,
        thumbnailWidth: 150,
        addRemoveLinks: true,
        dictRemoveFile: "Remover"
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
      var fd = new FormData();

      if (this.$refs.ref_logo.dropzone.files[0]) {
        fd.append("logo", this.$refs.ref_logo.dropzone.files[0]);
      }

      if (this.el.title_en) {
        fd.append("title_en", this.el.title_en);
      }

      if (this.el.title_es) {
        fd.append("title_es", this.el.title_es);
      }

      if (this.el.description_es) {
        fd.append("description_es", this.el.description_es);
      }

      if (this.el.description_en) {
        fd.append("description_en", this.el.description_en);
      }

      if (this.el.files && this.el.files.length) {
        this.el.files.forEach(function (el, i) {
          fd.append("images" + i, el);
        });
        fd.append("images_count", this.el.files.length);
      }

      if (this.el.url_video) {
        fd.append("url_video", this.el.url_video);
      }

      if (this.el.title_projects_es) {
        fd.append("title_projects_es", this.el.title_projects_es);
      }

      if (this.el.title_projects_en) {
        fd.append("title_projects_en", this.el.title_projects_en);
      }

      if (this.el.id) {
        fd.append("id", this.el.id);
      }

      axios.post(this.routeUpdate, fd).then(function (response) {
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
      this.el = {};
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
        if (response.data) {
          _this2.el = response.data;
        }

        _this2.loadingGet = false;
      })["catch"](function (error) {});
    }
  },
  created: function created() {
    this.getEl();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/cami.vue?vue&type=template&id=430bae0e&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/cami.vue?vue&type=template&id=430bae0e& ***!
  \**************************************************************************************************************************************************************************************************/
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
                      title: _vm.startBlock ? "Cami" : "Actualizar Cami",
                      parent: "",
                      active: "Cami"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-6 col-md-5 text-right" },
                [
                  _c(
                    "div",
                    {
                      staticClass: "d-inline-block mr-3 mb-3 mb-lg-0",
                      staticStyle: { opacity: "0.75" }
                    },
                    [
                      _c(
                        "a",
                        {
                          staticStyle: { cursor: "pointer" },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              _vm.info = !_vm.info
                            }
                          }
                        },
                        [
                          _c("jam-info", {
                            staticClass: "current-color",
                            attrs: { height: "14px", width: "14px" }
                          }),
                          _vm._v(
                            "\n                Ver Página Cami - 1ra Sección\n              "
                          )
                        ],
                        1
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-modal",
                    {
                      attrs: {
                        "no-close-on-esc": "",
                        "no-close-on-backdrop": "",
                        centered: "",
                        size: "lg",
                        "footer-class": "border-0 pt-0",
                        "body-class": "pt-0"
                      },
                      on: {
                        close: function($event) {
                          _vm.info = false
                        }
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "modal-footer",
                          fn: function(ref) {
                            var ok = ref.ok
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-primary",
                                  attrs: { type: "button" },
                                  on: {
                                    click: function($event) {
                                      _vm.info = false
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                  Aceptar\n                "
                                  )
                                ]
                              )
                            ]
                          }
                        }
                      ]),
                      model: {
                        value: _vm.info,
                        callback: function($$v) {
                          _vm.info = $$v
                        },
                        expression: "info"
                      }
                    },
                    [
                      _c("template", { slot: "modal-title" }, [
                        _c("div", { staticClass: "text-primary h2" }, [
                          _vm._v("Página Cami - 1ra Sección")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("template", { slot: "modal-header-close" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn p-0 bg-transparent",
                            attrs: { type: "button" },
                            on: {
                              click: function($event) {
                                _vm.info = false
                              }
                            }
                          },
                          [_c("jam-close")],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "my-2" }, [
                        _c("img", {
                          staticClass: "img-fluid",
                          attrs: { src: "/files/img/info/cami-1.jpg", alt: "" }
                        })
                      ])
                    ],
                    2
                  ),
                  _vm._v(" "),
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
                            _vm._v("Editar Cami")
                          ])
                        ]
                      )
                    : _vm._e()
                ],
                1
              )
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
                    _c("div", { staticClass: "col-12 col-md-7 col-lg-7" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            { staticClass: "font-weight-bold d-block" },
                            [_vm._v("Logo:")]
                          ),
                          _vm._v(" "),
                          _vm.el.logo
                            ? _c("img", {
                                staticClass: "img-fluid",
                                attrs: {
                                  src: _vm.imagesUrl + "/cami/" + _vm.el.logo,
                                  alt: _vm.el.title_es
                                }
                              })
                            : _c("p", [_vm._v("No registrado")])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-md-6 col-lg-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { staticClass: "font-weight-bold" }, [
                          _vm._v("Título Banner ES")
                        ]),
                        _vm._v(" "),
                        _vm.el.title_es
                          ? _c("p", [_vm._v(_vm._s(_vm.el.title_es))])
                          : _c("p", [_vm._v("No registrado")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-md-6 col-lg-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { staticClass: "font-weight-bold" }, [
                          _vm._v("Título Banner EN")
                        ]),
                        _vm._v(" "),
                        _vm.el.title_en
                          ? _c("p", [_vm._v(_vm._s(_vm.el.title_en))])
                          : _c("p", [_vm._v("No registrado")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-md-6 col-lg-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { staticClass: "font-weight-bold" }, [
                          _vm._v("Descripción ES")
                        ]),
                        _vm._v(" "),
                        _vm.el.description_es
                          ? _c("div", {
                              domProps: {
                                innerHTML: _vm._s(_vm.el.description_es)
                              }
                            })
                          : _c("p", [_vm._v("No registrado")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-md-6 col-lg-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { staticClass: "font-weight-bold" }, [
                          _vm._v("Descripción EN")
                        ]),
                        _vm._v(" "),
                        _vm.el.description_en
                          ? _c("div", {
                              domProps: {
                                innerHTML: _vm._s(_vm.el.description_en)
                              }
                            })
                          : _c("p", [_vm._v("No registrado")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-md-6 col-lg-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { staticClass: "font-weight-bold" }, [
                          _vm._v(
                            "Título Cami interviene a través de proyectos ES"
                          )
                        ]),
                        _vm._v(" "),
                        _vm.el.title_projects_es
                          ? _c("p", [_vm._v(_vm._s(_vm.el.title_projects_es))])
                          : _c("p", [_vm._v("No registrado")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-md-6 col-lg-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { staticClass: "font-weight-bold" }, [
                          _vm._v(
                            "Título Cami interviene a través de proyectos EN"
                          )
                        ]),
                        _vm._v(" "),
                        _vm.el.title_projects_en
                          ? _c("p", [_vm._v(_vm._s(_vm.el.title_projects_en))])
                          : _c("p", [_vm._v("No registrado")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-lg-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _vm._m(0),
                        _vm._v(" "),
                        _vm.el.url_video
                          ? _c("iframe", {
                              attrs: {
                                id: "player",
                                type: "text/html",
                                width: "100%",
                                height: "360",
                                src:
                                  "https://www.youtube.com/embed/" +
                                  _vm.el.id_video,
                                frameborder: "0"
                              }
                            })
                          : _c("p", [_vm._v("No se ha registrado un video.")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-lg-6" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _vm._m(1),
                          _vm._v(" "),
                          _vm.el.images_format
                            ? _c(
                                "carousel",
                                { attrs: { perPage: 1 } },
                                _vm._l(_vm.el.images_format, function(el) {
                                  return _c("slide", { key: el }, [
                                    _c("img", {
                                      staticClass: "img-fluid",
                                      attrs: {
                                        src: _vm.imagesUrl + "/cami/" + el,
                                        alt: ""
                                      }
                                    })
                                  ])
                                }),
                                1
                              )
                            : _c("p", [
                                _vm._v("No se han registrado un imágenes.")
                              ])
                        ],
                        1
                      )
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
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.editBlock,
              expression: "editBlock"
            }
          ],
          staticClass: "card mb-4"
        },
        [
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
                  _c("div", { staticClass: "col-12 col-md-12 col-lg-12" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c(
                        "label",
                        {
                          staticClass: "font-weight-bold d-block",
                          attrs: { for: "logo" }
                        },
                        [_vm._v("Logo")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          {
                            class: [_vm.el.logo ? "col-lg-4 mb-3 mb-lg-0" : ""]
                          },
                          [
                            _vm.el.logo
                              ? _c("img", {
                                  staticClass: "img-fluid",
                                  attrs: {
                                    src: _vm.imagesUrl + "/cami/" + _vm.el.logo,
                                    alt: ""
                                  }
                                })
                              : _vm._e()
                          ]
                        ),
                        _vm._v(" "),
                        _vm.editBlock
                          ? _c(
                              "div",
                              {
                                class: [_vm.el.logo ? "col-lg-8" : "col-lg-12"]
                              },
                              [
                                _c(
                                  "vue-dropzone",
                                  {
                                    ref: "ref_logo",
                                    attrs: {
                                      id: "id_logo",
                                      options: _vm.dropzoneOptions,
                                      duplicateCheck: true,
                                      useCustomSlot: true
                                    },
                                    on: {
                                      "vdropzone-file-added": function($event) {
                                        return _vm.$validateImageDropzone(
                                          $event,
                                          _vm.$refs.ref_logo.dropzone,
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
                                              "\n                          Suelte el archivo aquí o haga click para cargarlo.\n                        "
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _vm.errors && _vm.errors.logo
                                  ? _c(
                                      "label",
                                      {
                                        staticClass:
                                          "text-danger text-sm d-block mt-2",
                                        attrs: { for: "file" }
                                      },
                                      [_vm._v(_vm._s(_vm.errors.logo[0]))]
                                    )
                                  : _vm._e()
                              ],
                              1
                            )
                          : _vm._e()
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12 col-md-12 col-lg-12" }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("Input", {
                          attrs: {
                            label: "Título Banner",
                            variable: "title",
                            errors: _vm.errors,
                            valueEn: _vm.el.title_en,
                            valueEs: _vm.el.title_es,
                            valueEnParent: _vm.el.title_en,
                            valueEsParent: _vm.el.title_es
                          },
                          on: {
                            "update:valueEn": function($event) {
                              return _vm.$set(_vm.el, "title_en", $event)
                            },
                            "update:value-en": function($event) {
                              return _vm.$set(_vm.el, "title_en", $event)
                            },
                            "update:valueEs": function($event) {
                              return _vm.$set(_vm.el, "title_es", $event)
                            },
                            "update:value-es": function($event) {
                              return _vm.$set(_vm.el, "title_es", $event)
                            }
                          }
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12 col-md-12 col-lg-12" }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("Editor", {
                          attrs: {
                            size: "md",
                            label: "Descripción",
                            variable: "description",
                            errors: _vm.errors,
                            valueEn: _vm.el.description_en,
                            valueEs: _vm.el.description_es,
                            valueEnParent: _vm.el.description_en,
                            valueEsParent: _vm.el.description_es
                          },
                          on: {
                            "update:valueEn": function($event) {
                              return _vm.$set(_vm.el, "description_en", $event)
                            },
                            "update:value-en": function($event) {
                              return _vm.$set(_vm.el, "description_en", $event)
                            },
                            "update:valueEs": function($event) {
                              return _vm.$set(_vm.el, "description_es", $event)
                            },
                            "update:value-es": function($event) {
                              return _vm.$set(_vm.el, "description_es", $event)
                            }
                          }
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12 col-md-12 col-lg-12" }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("Input", {
                          attrs: {
                            label: "Título Cami interviene en proyectos",
                            variable: "title_projects",
                            errors: _vm.errors,
                            valueEn: _vm.el.title_projects_en,
                            valueEs: _vm.el.title_projects_es,
                            valueEnParent: _vm.el.title_projects_en,
                            valueEsParent: _vm.el.title_projects_es
                          },
                          on: {
                            "update:valueEn": function($event) {
                              return _vm.$set(
                                _vm.el,
                                "title_projects_en",
                                $event
                              )
                            },
                            "update:value-en": function($event) {
                              return _vm.$set(
                                _vm.el,
                                "title_projects_en",
                                $event
                              )
                            },
                            "update:valueEs": function($event) {
                              return _vm.$set(
                                _vm.el,
                                "title_projects_es",
                                $event
                              )
                            },
                            "update:value-es": function($event) {
                              return _vm.$set(
                                _vm.el,
                                "title_projects_es",
                                $event
                              )
                            }
                          }
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12 col-lg-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c(
                        "label",
                        {
                          staticClass: "font-weight-bold",
                          attrs: { for: "url" }
                        },
                        [_vm._v("URL Video Youtube")]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.el.url_video,
                            expression: "el.url_video"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text", id: "url_video" },
                        domProps: { value: _vm.el.url_video },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.el, "url_video", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "small",
                        {
                          staticClass: "form-text",
                          staticStyle: { opacity: "0.7" },
                          attrs: { id: "url_video" }
                        },
                        [
                          _vm._v(
                            'El formato de la URL debe ser\n                  "https://www.youtube.com/watch?v=N1bWwEfIDP0".'
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _vm.errors && _vm.errors.url_video
                        ? _c(
                            "label",
                            {
                              staticClass: "mt-2 text-danger text-sm",
                              attrs: { for: "url_video" }
                            },
                            [_vm._v(_vm._s(_vm.errors.url_video[0]))]
                          )
                        : _vm._e()
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12 col-lg-6" }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c(
                          "label",
                          {
                            staticClass: "font-weight-bold",
                            attrs: { for: "images" }
                          },
                          [_vm._v("Imágenes")]
                        ),
                        _vm._v(" "),
                        _c("MultipleFiles", {
                          attrs: {
                            desc:
                              "La primera imagen se utilizará para el cover del video",
                            fieldName: "images",
                            errors: _vm.errors,
                            messageOrder: _vm.messageOrder,
                            files: _vm.el.files,
                            imagesUrl: _vm.imagesUrl,
                            folder: "cami",
                            filesParent: _vm.el.images_format
                          },
                          on: {
                            "update:files": function($event) {
                              return _vm.$set(_vm.el, "files", $event)
                            }
                          }
                        })
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
                        [_vm._v("\n                Cancelar\n              ")]
                      )
                    ],
                    1
                  )
                ])
              ]
            )
          ])
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { staticClass: "font-weight-normal" }, [
      _c("span", { staticClass: "d-block font-weight-bold" }, [
        _vm._v("Video:")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { staticClass: "font-weight-normal" }, [
      _c("span", { staticClass: "d-block font-weight-bold" }, [
        _vm._v("Imágenes:")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/cami.vue":
/*!*************************************!*\
  !*** ./resources/js/views/cami.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cami_vue_vue_type_template_id_430bae0e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cami.vue?vue&type=template&id=430bae0e& */ "./resources/js/views/cami.vue?vue&type=template&id=430bae0e&");
/* harmony import */ var _cami_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cami.vue?vue&type=script&lang=js& */ "./resources/js/views/cami.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _cami_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _cami_vue_vue_type_template_id_430bae0e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _cami_vue_vue_type_template_id_430bae0e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/cami.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/cami.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/views/cami.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cami_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./cami.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/cami.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cami_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/cami.vue?vue&type=template&id=430bae0e&":
/*!********************************************************************!*\
  !*** ./resources/js/views/cami.vue?vue&type=template&id=430bae0e& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cami_vue_vue_type_template_id_430bae0e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./cami.vue?vue&type=template&id=430bae0e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/cami.vue?vue&type=template&id=430bae0e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cami_vue_vue_type_template_id_430bae0e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cami_vue_vue_type_template_id_430bae0e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);