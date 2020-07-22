(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/pages"],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/info/Pages.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/info/Pages.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue2-dropzone */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.js");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Button */ "./resources/js/components/Button.vue");
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-quill-editor */ "./node_modules/vue-quill-editor/dist/vue-quill-editor.js");
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_quill_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_upload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-upload-component */ "./node_modules/vue-upload-component/dist/vue-upload-component.js");
/* harmony import */ var vue_upload_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_upload_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/BreadCrumb */ "./resources/js/components/BreadCrumb.vue");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Loader */ "./resources/js/components/Loader.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    FileUpload: vue_upload_component__WEBPACK_IMPORTED_MODULE_3___default.a,
    quillEditor: vue_quill_editor__WEBPACK_IMPORTED_MODULE_2__["quillEditor"],
    Button: _components_Button__WEBPACK_IMPORTED_MODULE_1__["default"],
    vueDropzone: vue2_dropzone__WEBPACK_IMPORTED_MODULE_0___default.a,
    BreadCrumb: _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_4__["default"],
    Loader: _components_Loader__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    return {
      loading: true,
      requestServer: false,
      dropzoneOptions: {
        url: "/",
        maxFiles: 1,
        acceptedFiles: "image/png,image/jpeg,image/jpg,image/svg+xml",
        autoProcessQueue: false,
        thumbnailWidth: 400,
        addRemoveLinks: true,
        dictRemoveFile: "Remover Imagen"
      },
      dropzoneVideoOptions: {
        url: "/",
        maxFiles: 1,
        acceptedFiles: "video/mp4",
        autoProcessQueue: false,
        //thumbnailWidth: 400,
        addRemoveLinks: true,
        dictRemoveFile: "Remover Video"
      },
      quillEditorOptions: {
        placeholder: "",
        modules: {
          toolbar: {
            handlers: {
              image: function image(value) {
                document.getElementById("id_content_images").click();
              }
            },
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
            }], [{
              size: [false]
            }], [{
              header: [1, 2, 3, 4, 5, false]
            }], [{
              font: [false]
            }], [{
              color: []
            }, {
              background: []
            }], [{
              align: []
            }], //['clean'],
            ["link", "image", "video"]]
          }
        }
      },
      startBlock: true,
      elementBlock: false,
      pages: {
        sections: []
      },
      page: {},
      section: {
        id: "",
        name: "",
        image: "",
        title: "",
        description: ""
      },
      fields: {},
      image: [],
      image_responsive: [],
      video: []
    };
  },
  methods: {
    updateSection: function updateSection() {
      var _this = this;

      this.requestServer = true;
      var fd = new FormData();
      fd.append("section_id", this.section.id);
      fd.append("content", JSON.stringify(this.fields));

      if (this.$refs.ref_image && this.$refs.ref_image.length > 0 && this.$refs.ref_image[0].dropzone.files[0]) {
        fd.append("image", this.$refs.ref_image[0].dropzone.files[0]);
      }

      if (this.$refs.ref_image_responsive && this.$refs.ref_image_responsive.length > 0 && this.$refs.ref_image_responsive[0].dropzone.files[0]) {
        fd.append("image_responsive", this.$refs.ref_image_responsive[0].dropzone.files[0]);
      }

      if (this.$refs.ref_background && this.$refs.ref_background.length > 0 && this.$refs.ref_background[0].dropzone.files[0]) {
        fd.append("background", this.$refs.ref_background[0].dropzone.files[0]);
      }

      if (this.$refs.ref_video && this.$refs.ref_video.length > 0 && this.$refs.ref_video[0].dropzone.files[0]) {
        fd.append("video", this.$refs.ref_video[0].dropzone.files[0]);
      }

      axios.post("pages", fd).then(function (response) {
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
          _this.errores = error.response.data.errors || {};
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
    restorePage: function restorePage() {
      if (this.elementBlock) {
        this.elementBlock = false;
        this.startBlock = true;
        this.section = {
          id: "",
          name: "",
          title: "",
          description: "",
          images: []
        };
        this.fields = {};
      }
    },
    getSection: function getSection(id, name, idPage) {
      var _this2 = this;

      /*console.log(id);
      console.log(name);
      console.log(idPage)*/
      this.page = this.pages.find(function (x) {
        return x.id === idPage;
      });
      axios.get("json/pages/section/" + id).then(function (response) {
        _this2.fields = response.data;
        _this2.section.id = id;
        _this2.section.name = name;
        _this2.startBlock = false;
        _this2.elementBlock = true;
      })["catch"](function (error) {});
    },
    getPage: function getPage(id) {
      var _this3 = this;

      axios.get("json/pages/" + id).then(function (response) {
        _this3.page = response.data;
      })["catch"](function (error) {});
    },
    getPages: function getPages() {
      var _this4 = this;

      axios.get("json/pages").then(function (response) {
        _this4.pages = response.data;
        _this4.loading = false;
      })["catch"](function (error) {});
    }
  },
  created: function created() {
    this.getPages();
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/info/Pages.vue?vue&type=template&id=aebdb07c&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/info/Pages.vue?vue&type=template&id=aebdb07c& ***!
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
  return _c("div", [
    _c("div", { staticClass: "header pb-6" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "header-body" }, [
          _c("div", { staticClass: "row align-items-center py-4" }, [
            _c(
              "div",
              { staticClass: "col-12" },
              [
                _c("BreadCrumb", {
                  attrs: { title: "Páginas", active: "Páginas" }
                })
              ],
              1
            )
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "container-fluid mt--6" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-12 mb-4" }, [
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
              staticClass: "row"
            },
            [
              _vm.loading
                ? _c(
                    "div",
                    { staticClass: "col-12" },
                    [
                      _c("Loader", {
                        attrs: {
                          texto: "Cargando...",
                          iconClasses: ["ml-1"],
                          iconWidth: 20,
                          iconHeight: 20,
                          styles: { height: "500px" }
                        }
                      })
                    ],
                    1
                  )
                : _c("div", { staticClass: "col-12" }, [
                    _c(
                      "div",
                      { staticClass: "row" },
                      _vm._l(_vm.pages, function(item) {
                        return _c(
                          "div",
                          { key: item.id, staticClass: "col-12" },
                          [
                            _c(
                              "h3",
                              {
                                staticClass: "font-weight-bold mb-4 text-dark"
                              },
                              [
                                _vm._v(
                                  _vm._s(item.name) +
                                    " (" +
                                    _vm._s(item.sections_count) +
                                    " secciones)"
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "row" },
                              _vm._l(item.sections, function(section) {
                                return _c(
                                  "div",
                                  {
                                    key: section.id,
                                    staticClass: "col-12 col-lg-6 col-xl-3"
                                  },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "card shadow mb-4" },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "card-body" },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "row align-items-center"
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  { staticClass: "col" },
                                                  [
                                                    _c(
                                                      "small",
                                                      {
                                                        staticClass:
                                                          "text-dark mb-0"
                                                      },
                                                      [_vm._v("Sección")]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "h4",
                                                      {
                                                        staticClass:
                                                          "font-weight-bold mb-0 text-uppercase text-dark"
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(section.name)
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  { staticClass: "col-auto" },
                                                  [
                                                    _c(
                                                      "button",
                                                      {
                                                        staticClass:
                                                          "btn btn-sm btn-secondary",
                                                        attrs: {
                                                          type: "button"
                                                        },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            $event.preventDefault()
                                                            return _vm.getSection(
                                                              section.id,
                                                              section.name,
                                                              item.id
                                                            )
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _c("i", {
                                                          staticClass:
                                                            "fas fa-pen-alt text-warning mr-1"
                                                        }),
                                                        _vm._v(
                                                          "\n                            Editar\n                          "
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ]
                                )
                              }),
                              0
                            )
                          ]
                        )
                      }),
                      0
                    )
                  ])
            ]
          ),
          _vm._v(" "),
          _vm.elementBlock
            ? _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-12" }, [
                  _c("div", { staticClass: "card shadow" }, [
                    _c("div", { staticClass: "card-header border-0" }, [
                      _c(
                        "h2",
                        { staticClass: "mb-0 text-uppercase text-primary" },
                        [
                          _vm._v(
                            "Página " +
                              _vm._s(_vm.page.name) +
                              " - Sección: " +
                              _vm._s(_vm.section.name)
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "card-body" }, [
                      _c(
                        "form",
                        {
                          on: {
                            submit: function($event) {
                              $event.preventDefault()
                              return _vm.updateSection($event)
                            }
                          }
                        },
                        [
                          _c("file-upload", {
                            ref: "ref_content_images",
                            staticClass: "d-none",
                            attrs: {
                              extensions: "jpg,jpeg,png",
                              accept: "image/png, image/jpeg, image/jpg",
                              drop: false,
                              multiple: true,
                              "input-id": "id_content_images"
                            },
                            on: {
                              "input-filter": function($event) {
                                return _vm.$uploadImageUploadComponent(
                                  $event,
                                  _vm.$refs.ref_content[0],
                                  250000,
                                  "500kb",
                                  "pages"
                                )
                              }
                            },
                            model: {
                              value: _vm.section.images,
                              callback: function($$v) {
                                _vm.$set(_vm.section, "images", $$v)
                              },
                              expression: "section.images"
                            }
                          }),
                          _vm._v(" "),
                          _vm._l(_vm.fields, function(field, index) {
                            return _c("div", { key: field.id }, [
                              _c("div", { staticClass: "col-12 p-0" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c(
                                    "label",
                                    { staticClass: "font-weight-bold" },
                                    [_vm._v(_vm._s(field.name))]
                                  ),
                                  _vm._v(" "),
                                  field.type == "input"
                                    ? _c("div", [
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.fields[index].value,
                                              expression: "fields[index].value"
                                            }
                                          ],
                                          staticClass:
                                            "form-control form-control-alternative",
                                          attrs: { type: "text" },
                                          domProps: {
                                            value: _vm.fields[index].value
                                          },
                                          on: {
                                            input: function($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                _vm.fields[index],
                                                "value",
                                                $event.target.value
                                              )
                                            }
                                          }
                                        })
                                      ])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  field.type == "editor_small"
                                    ? _c(
                                        "div",
                                        [
                                          _c("quill-editor", {
                                            ref: "ref_content",
                                            refInFor: true,
                                            staticClass: "ql-height-8",
                                            attrs: {
                                              placeholder: "",
                                              options: _vm.quillEditorOptions
                                            },
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
                                              value: _vm.fields[index].value,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.fields[index],
                                                  "value",
                                                  $$v
                                                )
                                              },
                                              expression: "fields[index].value"
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  field.type == "editor_large"
                                    ? _c(
                                        "div",
                                        [
                                          _c("quill-editor", {
                                            ref: "ref_content",
                                            refInFor: true,
                                            staticClass: "ql-height-25",
                                            attrs: {
                                              placeholder: "",
                                              options: _vm.quillEditorOptions
                                            },
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
                                              value: _vm.fields[index].value,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.fields[index],
                                                  "value",
                                                  $$v
                                                )
                                              },
                                              expression: "fields[index].value"
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  field.type == "image"
                                    ? _c("div", [
                                        _c("div", { staticClass: "row" }, [
                                          field.value
                                            ? _c(
                                                "div",
                                                {
                                                  staticClass: "col-12 col-lg-4"
                                                },
                                                [
                                                  _c("img", {
                                                    staticClass:
                                                      "img-fluid d-block mb-3",
                                                    attrs: {
                                                      src:
                                                        "https://storage.googleapis.com/playgroup-web/img/pages/" +
                                                        field.value,
                                                      alt: field.name
                                                    }
                                                  })
                                                ]
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass: "col-12",
                                              class: { "col-lg-8": field.value }
                                            },
                                            [
                                              _c(
                                                "vue-dropzone",
                                                {
                                                  ref: "ref_" + field.variable,
                                                  refInFor: true,
                                                  attrs: {
                                                    id: "id_" + field.variable,
                                                    options:
                                                      _vm.dropzoneOptions,
                                                    duplicateCheck: true,
                                                    useCustomSlot: true
                                                  },
                                                  on: {
                                                    "vdropzone-file-added": function(
                                                      $event
                                                    ) {
                                                      return _vm.$validateImageDropzone(
                                                        $event,
                                                        _vm.$refs[
                                                          "ref_" +
                                                            field.variable
                                                        ][0].dropzone,
                                                        1,
                                                        250000,
                                                        "250kb"
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "dropzone-custom-content"
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
                                          )
                                        ])
                                      ])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  field.type == "video"
                                    ? _c("div", [
                                        _c("div", { staticClass: "row" }, [
                                          field.value
                                            ? _c(
                                                "div",
                                                { staticClass: "col-12 mb-3" },
                                                [
                                                  _c(
                                                    "a",
                                                    {
                                                      staticClass:
                                                        "btn btn-primary",
                                                      attrs: {
                                                        target: "_blank",
                                                        href:
                                                          "/storage/videos/pages/" +
                                                          field.value
                                                      }
                                                    },
                                                    [
                                                      _c("i", {
                                                        staticClass:
                                                          "fas fa-play mr-1"
                                                      }),
                                                      _vm._v(
                                                        "\n                                Ver Video\n                              "
                                                      )
                                                    ]
                                                  )
                                                ]
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "col-12" },
                                            [
                                              _c(
                                                "vue-dropzone",
                                                {
                                                  ref: "ref_video",
                                                  refInFor: true,
                                                  attrs: {
                                                    id: "id_" + field.variable,
                                                    options:
                                                      _vm.dropzoneVideoOptions,
                                                    duplicateCheck: true,
                                                    useCustomSlot: true
                                                  },
                                                  on: {
                                                    "vdropzone-file-added": function(
                                                      $event
                                                    ) {
                                                      return _vm.$validateVideoDropzone(
                                                        $event,
                                                        _vm.$refs.ref_video[0]
                                                          .dropzone,
                                                        1,
                                                        8388608,
                                                        "8mb"
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "dropzone-custom-content"
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
                                          )
                                        ])
                                      ])
                                    : _vm._e()
                                ])
                              ])
                            ])
                          }),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-12 p-0 text-right" },
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
                        ],
                        2
                      )
                    ])
                  ])
                ])
              ])
            : _vm._e()
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
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

/***/ "./resources/js/views/info/Pages.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/info/Pages.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pages_vue_vue_type_template_id_aebdb07c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pages.vue?vue&type=template&id=aebdb07c& */ "./resources/js/views/info/Pages.vue?vue&type=template&id=aebdb07c&");
/* harmony import */ var _Pages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pages.vue?vue&type=script&lang=js& */ "./resources/js/views/info/Pages.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Pages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Pages_vue_vue_type_template_id_aebdb07c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Pages_vue_vue_type_template_id_aebdb07c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/info/Pages.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/info/Pages.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/info/Pages.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Pages.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/info/Pages.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/info/Pages.vue?vue&type=template&id=aebdb07c&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/info/Pages.vue?vue&type=template&id=aebdb07c& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pages_vue_vue_type_template_id_aebdb07c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Pages.vue?vue&type=template&id=aebdb07c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/info/Pages.vue?vue&type=template&id=aebdb07c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pages_vue_vue_type_template_id_aebdb07c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pages_vue_vue_type_template_id_aebdb07c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);