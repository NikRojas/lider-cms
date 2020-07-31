(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/pages/slider/create~js/pages/slider/edit"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form/Image.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/form/Image.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue2-dropzone */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.js");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    label: String,
    variable: String,
    errors: Object,
    valueEnParent: null,
    valueEsParent: null,
    imagesUrl: String
  },
  components: {
    vueDropzone: vue2_dropzone__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      active: "es",
      value: {
        en: "",
        es: ""
      },
      dropzoneOptions: {
        url: "/",
        maxFiles: 1,
        acceptedFiles: "image/png,image/jpeg,image/jpg",
        autoProcessQueue: false,
        thumbnailWidth: 400,
        addRemoveLinks: true
      },
      random: Math.ceil(Math.random() * 10)
    };
  },
  methods: {
    toggle: function toggle(lang) {
      this.active = lang;
    },
    handAaddedFiles: function handAaddedFiles(e, lang) {
      if (lang == 'es') {
        this.$emit("update:valueEs", this.$refs.ref_image_es.dropzone.files[0]);
      } else {
        this.$emit("update:valueEn", this.$refs.ref_image_en.dropzone.files[0]);
      }
    }
  },
  watch: {
    valueEnParent: {
      immediate: true,
      handler: function handler(newValue) {
        if (newValue instanceof File) {} else {
          this.value.en = newValue;
        }
      }
    },
    valueEsParent: {
      immediate: true,
      handler: function handler(newValue) {
        if (newValue instanceof File) {} else {
          this.value.es = newValue;
        }
      }
    }
  },
  computed: {
    countErrors: function countErrors() {
      if (Object.keys(this.errors).length) {
        var total = 0;

        for (var el in this.errors) {
          if (el == this.variable + "_en" || el == this.variable + "_es") {
            total++;
          }
        }

        return total;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form/Image.vue?vue&type=template&id=1f9b30bb&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/form/Image.vue?vue&type=template&id=1f9b30bb& ***!
  \*************************************************************************************************************************************************************************************************************/
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
    { staticClass: "form-group" },
    [
      _c("div", { staticClass: "d-flex" }, [
        _c(
          "a",
          {
            staticClass: "btn btn-sm py-0 px-2 btn-icon mr-1",
            class: _vm.active == "es" ? "btn-primary" : "btn-outline-primary",
            attrs: { href: "#" },
            on: {
              click: function($event) {
                $event.preventDefault()
                return _vm.toggle("es")
              }
            }
          },
          [
            _c(
              "span",
              { staticClass: "btn-inner--icon" },
              [_c("gb-flag", { attrs: { code: "es", size: "small" } })],
              1
            ),
            _vm._v(" "),
            _c("span", { staticClass: "btn-inner--text" }, [_vm._v("Español")])
          ]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "btn btn-sm py-0 px-2 btn-icon",
            class: _vm.active == "en" ? "btn-primary" : "btn-outline-primary",
            attrs: { href: "#" },
            on: {
              click: function($event) {
                $event.preventDefault()
                return _vm.toggle("en")
              }
            }
          },
          [
            _c(
              "span",
              { staticClass: "btn-inner--icon" },
              [_c("gb-flag", { attrs: { code: "gb", size: "small" } })],
              1
            ),
            _vm._v(" "),
            _c("span", { staticClass: "btn-inner--text" }, [_vm._v("Inglés")])
          ]
        ),
        _vm._v(" "),
        _vm.countErrors
          ? _c(
              "div",
              { staticClass: "d-inline-block ml-auto text-danger mt-1" },
              [
                _vm._v(
                  _vm._s(_vm.countErrors) +
                    " " +
                    _vm._s(_vm.countErrors > 1 ? "Errores" : "Error")
                )
              ]
            )
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "mt-2" }, [
        _c(
          "label",
          {
            staticClass: "font-weight-bold",
            attrs: { for: _vm.label + _vm.active + _vm.random }
          },
          [
            _vm._v(
              _vm._s(_vm.label) + " " + _vm._s(_vm.active.toUpperCase()) + ":"
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.active == "es",
              expression: "active == 'es'"
            }
          ]
        },
        [
          _c("div", { staticClass: "row" }, [
            _vm.valueEsParent
              ? _c("div", { staticClass: "col" }, [
                  _c("img", {
                    staticClass: "img-fluid",
                    attrs: {
                      src: _vm.imagesUrl + "/slider/" + _vm.value.es,
                      alt: ""
                    }
                  })
                ])
              : _vm._e(),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col" },
              [
                _c(
                  "vue-dropzone",
                  {
                    ref: "ref_image_es",
                    attrs: {
                      id: _vm.label + _vm.random,
                      options: _vm.dropzoneOptions,
                      duplicateCheck: true,
                      useCustomSlot: true
                    },
                    on: {
                      "vdropzone-file-added": function($event) {
                        return _vm.$validateImageDropzone(
                          $event,
                          _vm.$refs.ref_image_es.dropzone,
                          1,
                          1024000,
                          "1mb"
                        )
                      },
                      "vdropzone-files-added": function($event) {
                        return _vm.handAaddedFiles($event, "es")
                      }
                    }
                  },
                  [
                    _c("div", { staticClass: "dropzone-custom-content" }, [
                      _c(
                        "h5",
                        { staticClass: "dropzone-custom-title text-primary" },
                        [
                          _vm._v(
                            "Suelte el archivo aquí o haga click para cargarlo."
                          )
                        ]
                      )
                    ])
                  ]
                )
              ],
              1
            )
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
              value: _vm.active == "en",
              expression: "active == 'en'"
            }
          ]
        },
        [
          _c("div", { staticClass: "row" }, [
            _vm.valueEnParent
              ? _c("div", { staticClass: "col" }, [
                  _c("img", {
                    staticClass: "img-fluid",
                    attrs: {
                      src: _vm.imagesUrl + "/slider/" + _vm.value.en,
                      alt: ""
                    }
                  })
                ])
              : _vm._e(),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col" },
              [
                _c(
                  "vue-dropzone",
                  {
                    ref: "ref_image_en",
                    attrs: {
                      id: _vm.label + _vm.random,
                      options: _vm.dropzoneOptions,
                      duplicateCheck: true,
                      useCustomSlot: true
                    },
                    on: {
                      "vdropzone-file-added": function($event) {
                        return _vm.$validateImageDropzone(
                          $event,
                          _vm.$refs.ref_image_en.dropzone,
                          1,
                          1024000,
                          "1mb"
                        )
                      },
                      "vdropzone-files-added": function($event) {
                        return _vm.handAaddedFiles($event, "en")
                      }
                    }
                  },
                  [
                    _c("div", { staticClass: "dropzone-custom-content" }, [
                      _c(
                        "h5",
                        { staticClass: "dropzone-custom-title text-primary" },
                        [
                          _vm._v(
                            "Suelte el archivo aquí o haga click para cargarlo."
                          )
                        ]
                      )
                    ])
                  ]
                )
              ],
              1
            )
          ])
        ]
      ),
      _vm._v(" "),
      _vm._l(_vm.errors, function(el, i) {
        return _c("div", { key: i }, [
          i == _vm.variable + "_" + _vm.active
            ? _c("label", { staticClass: "text-danger text-sm d-block mt-2" }, [
                _vm._v(_vm._s(el[0]))
              ])
            : _vm._e()
        ])
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/form/Image.vue":
/*!************************************************!*\
  !*** ./resources/js/components/form/Image.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Image_vue_vue_type_template_id_1f9b30bb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Image.vue?vue&type=template&id=1f9b30bb& */ "./resources/js/components/form/Image.vue?vue&type=template&id=1f9b30bb&");
/* harmony import */ var _Image_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Image.vue?vue&type=script&lang=js& */ "./resources/js/components/form/Image.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Image_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Image_vue_vue_type_template_id_1f9b30bb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Image_vue_vue_type_template_id_1f9b30bb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/form/Image.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/form/Image.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/form/Image.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Image_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Image.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form/Image.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Image_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/form/Image.vue?vue&type=template&id=1f9b30bb&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/form/Image.vue?vue&type=template&id=1f9b30bb& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Image_vue_vue_type_template_id_1f9b30bb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Image.vue?vue&type=template&id=1f9b30bb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form/Image.vue?vue&type=template&id=1f9b30bb&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Image_vue_vue_type_template_id_1f9b30bb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Image_vue_vue_type_template_id_1f9b30bb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);