(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/seo"],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/info/Seo.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/info/Seo.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Loader */ "./resources/js/components/Loader.vue");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue2-dropzone */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.js");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Button */ "./resources/js/components/Button.vue");
/* harmony import */ var _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/BreadCrumb */ "./resources/js/components/BreadCrumb.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    appUrl: {
      type: String
    }
  },
  components: {
    Button: _components_Button__WEBPACK_IMPORTED_MODULE_2__["default"],
    vueDropzone: vue2_dropzone__WEBPACK_IMPORTED_MODULE_1___default.a,
    Loader: _components_Loader__WEBPACK_IMPORTED_MODULE_0__["default"],
    BreadCrumb: _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      pages: {},
      editBlock: false,
      pageSelected: 0,
      requestServer: false,
      requestServerGet: false,
      errors: {},
      dropzoneOptions: {
        url: "/",
        maxFiles: 1,
        acceptedFiles: "image/png,image/jpeg,image/jpg,image/svg+xml",
        autoProcessQueue: false,
        thumbnailWidth: 400,
        addRemoveLinks: true,
        dictRemoveFile: "Remover"
      },
      page: {
        title: "",
        seo_description: "",
        seo_keywords: "",
        seo_image: ""
      }
    };
  },
  methods: {
    restoreEl: function restoreEl() {
      //this.getPages();
      this.errors = {};
      this.page = {
        title: "",
        seo_description: "",
        seo_keywords: "",
        seo_image: ""
      };
      this.editBlock = false;
      this.pageSelected = 0;
    },
    restorePage: function restorePage() {
      this.getPages();
      this.errors = this.pages = {};
      this.editBlock = this.requestServer = false;
      this.pageSelected = 0;
      this.page = {
        title: "",
        seo_description: "",
        seo_keywords: "",
        seo_image: ""
      };
    },
    getPages: function getPages() {
      var _this = this;

      this.requestServerGet = true;
      axios.get("json/seo").then(function (response) {
        _this.pages = response.data;
        _this.requestServerGet = false;
      })["catch"](function (error) {});
    },
    updatePage: function updatePage() {
      var _this2 = this;

      this.requestServer = true;
      var fd = new FormData();
      this.page.title ? fd.append("title", this.page.title) : fd.append("title", "");
      this.page.seo_keywords ? fd.append("seo_keywords", this.page.seo_keywords) : fd.append("seo_keywords", "");
      this.page.seo_description ? fd.append("seo_description", this.page.seo_description) : fd.append("seo_description", "");

      if (this.$refs.ref_image[0].dropzone.files[0]) {
        fd.append("seo_image", this.$refs.ref_image[0].dropzone.files[0]);
      }

      fd.append("_method", "PUT");
      axios.post("seo/" + this.page.id, fd).then(function (response) {
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
    editPage: function editPage(id) {
      this.editBlock = true;
      this.pageSelected = id;
      this.page = {};
      this.page = this.pages.find(function (item) {
        return item.id === id;
      });
    }
  },
  created: function created() {
    this.getPages();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/info/Seo.vue?vue&type=style&index=0&id=2410bd4a&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/info/Seo.vue?vue&type=style&index=0&id=2410bd4a&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".right[data-v-2410bd4a] {\n  right: 0;\n}\n.bg-seo[data-v-2410bd4a] {\n  height: 300px;\n  background-position: center;\n  background-size: cover;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/info/Seo.vue?vue&type=style&index=0&id=2410bd4a&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/info/Seo.vue?vue&type=style&index=0&id=2410bd4a&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Seo.vue?vue&type=style&index=0&id=2410bd4a&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/info/Seo.vue?vue&type=style&index=0&id=2410bd4a&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/info/Seo.vue?vue&type=template&id=2410bd4a&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/info/Seo.vue?vue&type=template&id=2410bd4a&scoped=true& ***!
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
                { staticClass: "col-12" },
                [
                  _c("BreadCrumb", {
                    attrs: {
                      title: "SEO",
                      parent: "Información",
                      active: "SEO"
                    }
                  })
                ],
                1
              )
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
        _vm.requestServerGet
          ? _c("Loader", {
              style: { display: "inline-block", height: "400px" },
              attrs: { iconHeight: 30, iconWidth: 30 }
            })
          : _c(
              "div",
              { staticClass: "row" },
              _vm._l(_vm.pages, function(page) {
                return _c(
                  "div",
                  {
                    key: page.id,
                    staticClass: "col-lg-4 col-md-6 col-12 mb-4"
                  },
                  [
                    _c(
                      "form",
                      {
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            return _vm.updatePage($event)
                          }
                        }
                      },
                      [
                        _vm.pageSelected != page.id
                          ? _c("div", [
                              page.seo_image
                                ? _c(
                                    "div",
                                    {
                                      staticClass:
                                        "img-holder bg-seo  card-img-top position-relative",
                                      style: {
                                        "background-image":
                                          "url(" +
                                          "https://storage.googleapis.com/playgroup-web/img/pages/" +
                                          page.seo_image +
                                          ")"
                                      }
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass:
                                            "btn btn-info btn-sm right position-absolute m-2",
                                          attrs: {
                                            href:
                                              "https://storage.googleapis.com/playgroup-web/img/pages/" +
                                              page.seo_image,
                                            target: "_blank",
                                            rel: "noopener noreferrer"
                                          }
                                        },
                                        [_vm._v("Ver Imagen")]
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _c("div", { staticClass: "card shadow" }, [
                          _c("div", { staticClass: "card-body " }, [
                            _c("div", [
                              _vm.editBlock && _vm.pageSelected == page.id
                                ? _c(
                                    "div",
                                    { staticClass: "form-group" },
                                    [
                                      _c(
                                        "label",
                                        {
                                          staticClass: "font-weight-bold mb-0",
                                          attrs: { for: "id_imagen" }
                                        },
                                        [_vm._v("Imagen")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "small",
                                        {
                                          staticClass:
                                            "text-muted d-block mb-0 lh-1"
                                        },
                                        [
                                          _vm._v(
                                            "Resolución recomendada: 1200x900px"
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "small",
                                        {
                                          staticClass:
                                            "text-muted d-block mb-2 lh-1"
                                        },
                                        [
                                          _vm._v(
                                            "Tamaño recomendado: Menor a 100kb"
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "vue-dropzone",
                                        {
                                          ref: "ref_image",
                                          refInFor: true,
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
                                                _vm.$refs.ref_image[0].dropzone,
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
                                      ),
                                      _vm._v(" "),
                                      _vm.errors && _vm.errors.imagen
                                        ? _c(
                                            "label",
                                            {
                                              staticClass:
                                                "text-danger text-sm d-block",
                                              attrs: { for: "id_imagen" }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.errors.imagen[0])
                                              )
                                            ]
                                          )
                                        : _vm._e()
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              !_vm.editBlock
                                ? _c("div", { staticClass: "text-right" }, [
                                    _c(
                                      "a",
                                      {
                                        staticClass: "d-inline-block",
                                        attrs: {
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                          href:
                                            "https://playgroup.pe" +
                                            (page.slug ? "/" + page.slug : "")
                                        }
                                      },
                                      [
                                        _vm._v("https://playgroup.pe"),
                                        page.slug
                                          ? _c("small", [
                                              _vm._v("/" + _vm._s(page.slug))
                                            ])
                                          : _vm._e()
                                      ]
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.pageSelected != page.id
                                ? _c(
                                    "h4",
                                    { staticClass: "mb-3 font-weight-bold" },
                                    [_vm._v(_vm._s(page.title))]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.editBlock && _vm.pageSelected == page.id
                                ? _c("div", { staticClass: "form-group" }, [
                                    _c(
                                      "label",
                                      {
                                        staticClass: "font-weight-bold",
                                        attrs: { for: "id_titulo" }
                                      },
                                      [_vm._v("Título")]
                                    ),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: page.title,
                                          expression: "page.title"
                                        }
                                      ],
                                      staticClass:
                                        "form-control form-control-alternative",
                                      attrs: { type: "text", id: "id_titulo" },
                                      domProps: { value: page.title },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            page,
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
                                            staticClass:
                                              "text-danger text-sm d-block mt-2",
                                            attrs: { for: "id_titulo" }
                                          },
                                          [_vm._v(_vm._s(_vm.errors.title[0]))]
                                        )
                                      : _vm._e()
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _c("div", { staticClass: "mb-2" }, [
                                _vm.pageSelected != page.id
                                  ? _c("div", [
                                      _c(
                                        "p",
                                        {
                                          staticClass:
                                            "mb-0 text-primary font-weight-bold"
                                        },
                                        [_vm._v("Descripción SEO")]
                                      ),
                                      _vm._v(" "),
                                      page.seo_description
                                        ? _c(
                                            "p",
                                            {
                                              staticClass: "project-description"
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(page.seo_description)
                                              )
                                            ]
                                          )
                                        : _c("p", { staticClass: "mb-0" }, [
                                            _vm._v("No registrado")
                                          ])
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.editBlock && _vm.pageSelected == page.id
                                  ? _c("div", { staticClass: "form-group" }, [
                                      _c(
                                        "label",
                                        {
                                          staticClass: "font-weight-bold",
                                          attrs: { for: "id_seo_description" }
                                        },
                                        [_vm._v("Descripción SEO")]
                                      ),
                                      _vm._v(" "),
                                      _c("textarea", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: page.seo_description,
                                            expression: "page.seo_description"
                                          }
                                        ],
                                        staticClass:
                                          "form-control form-control-alternative",
                                        attrs: {
                                          type: "text",
                                          id: "id_seo_description",
                                          rows: "4"
                                        },
                                        domProps: {
                                          value: page.seo_description
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              page,
                                              "seo_description",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _vm.errors && _vm.errors.seo_description
                                        ? _c(
                                            "label",
                                            {
                                              staticClass:
                                                "text-danger text-sm d-block mt-2",
                                              attrs: {
                                                for: "id_seo_description"
                                              }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.errors.seo_description[0]
                                                )
                                              )
                                            ]
                                          )
                                        : _vm._e()
                                    ])
                                  : _vm._e()
                              ]),
                              _vm._v(" "),
                              _c("div", [
                                _vm.pageSelected != page.id
                                  ? _c("div", [
                                      _c(
                                        "p",
                                        {
                                          staticClass:
                                            "mb-0 text-primary font-weight-bold"
                                        },
                                        [_vm._v("Keywords SEO")]
                                      ),
                                      _vm._v(" "),
                                      page.seo_keywords
                                        ? _c("p", { staticClass: "mb-0" }, [
                                            _vm._v(_vm._s(page.seo_keywords))
                                          ])
                                        : _c("p", { staticClass: "mb-0" }, [
                                            _vm._v("No registrado")
                                          ])
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.editBlock && _vm.pageSelected == page.id
                                  ? _c("div", { staticClass: "form-group" }, [
                                      _c(
                                        "label",
                                        {
                                          staticClass: "font-weight-bold",
                                          attrs: { for: "id_seo_keywords" }
                                        },
                                        [_vm._v("Keywords SEO")]
                                      ),
                                      _vm._v(" "),
                                      _c("textarea", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: page.seo_keywords,
                                            expression: "page.seo_keywords"
                                          }
                                        ],
                                        staticClass:
                                          "form-control form-control-alternative",
                                        attrs: {
                                          type: "text",
                                          id: "id_seo_keywords",
                                          rows: "4"
                                        },
                                        domProps: { value: page.seo_keywords },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              page,
                                              "seo_keywords",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _vm.errors && _vm.errors.seo_keywords
                                        ? _c(
                                            "label",
                                            {
                                              staticClass:
                                                "text-danger text-sm d-block mt-2",
                                              attrs: { for: "id_seo_keywords" }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.errors.seo_keywords[0]
                                                )
                                              )
                                            ]
                                          )
                                        : _vm._e()
                                    ])
                                  : _vm._e()
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "text-right mt-2" },
                                [
                                  _vm.pageSelected != page.id
                                    ? _c(
                                        "a",
                                        {
                                          staticClass: "btn btn-secondary",
                                          attrs: { href: "#" },
                                          on: {
                                            click: function($event) {
                                              $event.preventDefault()
                                              return _vm.editPage(page.id)
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass:
                                              "fas fa-pen-alt text-warning mr-1"
                                          }),
                                          _vm._v(" Editar")
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.editBlock && _vm.pageSelected == page.id
                                    ? _c("Button", {
                                        attrs: {
                                          text: "Actualizar",
                                          classes: ["btn-primary"],
                                          "request-server": _vm.requestServer
                                        }
                                      })
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.editBlock && _vm.pageSelected == page.id
                                    ? _c(
                                        "button",
                                        {
                                          staticClass: "btn btn-danger",
                                          attrs: { type: "button" },
                                          on: {
                                            click: function($event) {
                                              $event.preventDefault()
                                              return _vm.restoreEl($event)
                                            }
                                          }
                                        },
                                        [_vm._v("Cancelar")]
                                      )
                                    : _vm._e()
                                ],
                                1
                              )
                            ])
                          ])
                        ])
                      ]
                    )
                  ]
                )
              }),
              0
            )
      ],
      1
    )
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

/***/ "./resources/js/views/info/Seo.vue":
/*!*****************************************!*\
  !*** ./resources/js/views/info/Seo.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Seo_vue_vue_type_template_id_2410bd4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Seo.vue?vue&type=template&id=2410bd4a&scoped=true& */ "./resources/js/views/info/Seo.vue?vue&type=template&id=2410bd4a&scoped=true&");
/* harmony import */ var _Seo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Seo.vue?vue&type=script&lang=js& */ "./resources/js/views/info/Seo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Seo_vue_vue_type_style_index_0_id_2410bd4a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Seo.vue?vue&type=style&index=0&id=2410bd4a&lang=scss&scoped=true& */ "./resources/js/views/info/Seo.vue?vue&type=style&index=0&id=2410bd4a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Seo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Seo_vue_vue_type_template_id_2410bd4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Seo_vue_vue_type_template_id_2410bd4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2410bd4a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/info/Seo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/info/Seo.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/views/info/Seo.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Seo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Seo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/info/Seo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Seo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/info/Seo.vue?vue&type=style&index=0&id=2410bd4a&lang=scss&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/views/info/Seo.vue?vue&type=style&index=0&id=2410bd4a&lang=scss&scoped=true& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Seo_vue_vue_type_style_index_0_id_2410bd4a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Seo.vue?vue&type=style&index=0&id=2410bd4a&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/info/Seo.vue?vue&type=style&index=0&id=2410bd4a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Seo_vue_vue_type_style_index_0_id_2410bd4a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Seo_vue_vue_type_style_index_0_id_2410bd4a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Seo_vue_vue_type_style_index_0_id_2410bd4a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Seo_vue_vue_type_style_index_0_id_2410bd4a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Seo_vue_vue_type_style_index_0_id_2410bd4a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/info/Seo.vue?vue&type=template&id=2410bd4a&scoped=true&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/info/Seo.vue?vue&type=template&id=2410bd4a&scoped=true& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Seo_vue_vue_type_template_id_2410bd4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Seo.vue?vue&type=template&id=2410bd4a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/info/Seo.vue?vue&type=template&id=2410bd4a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Seo_vue_vue_type_template_id_2410bd4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Seo_vue_vue_type_template_id_2410bd4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);