(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/pages/slider/create"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/slider/Create.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/slider/Create.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Button */ "./resources/js/components/Button.vue");
/* harmony import */ var _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/BreadCrumb */ "./resources/js/components/BreadCrumb.vue");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue2-dropzone */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.js");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue2_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue2-datepicker */ "./node_modules/vue2-datepicker/lib/index.js");
/* harmony import */ var vue2_datepicker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue2_datepicker__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_form_Image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/form/Image */ "./resources/js/components/form/Image.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BreadCrumb: _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_1__["default"],
    Button: _components_Button__WEBPACK_IMPORTED_MODULE_0__["default"],
    vueDropzone: vue2_dropzone__WEBPACK_IMPORTED_MODULE_2___default.a,
    DatePicker: vue2_datepicker__WEBPACK_IMPORTED_MODULE_3___default.a,
    ImageForm: _components_form_Image__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: {
    routeStore: String,
    routeReturn: String
  },
  data: function data() {
    return {
      element: {},
      errors: {},
      dropzoneOptions: {
        url: "/",
        maxFiles: 1,
        acceptedFiles: "image/png,image/jpeg,image/jpg",
        autoProcessQueue: false,
        thumbnailWidth: 400,
        addRemoveLinks: true
      },
      requestServer: false
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;

      this.requestServer = true;
      var fd = new FormData();

      if (this.element.from) {
        fd.append("from", this.element.from);
      }

      if (this.element.to) {
        fd.append("to", this.element.to);
      }

      if (this.element.image_en) {
        fd.append("image_en", this.element.image_en);
      }

      if (this.element.image_es) {
        fd.append("image_es", this.element.image_es);
      }

      if (this.element.image_responsive_en) {
        fd.append("image_responsive_en", this.element.image_responsive_en);
      }

      if (this.element.image_responsive_es) {
        fd.append("image_responsive_es", this.element.image_responsive_es);
      }
      /*if (this.$refs.ref_image_responsive_en.dropzone.files[0]) {
        fd.append("image_responsive_en", this.$refs.ref_image_responsive_en.dropzone.files[0]);
      }
      if (this.$refs.ref_image_responsive_es.dropzone.files[0]) {
        fd.append("image_responsive_es", this.$refs.ref_image_responsive_es.dropzone.files[0]);
      }*/


      axios.post(this.routeStore, fd).then(function (response) {
        _this.requestServer = false;
        document.location.href = response.data.route;
      })["catch"](function (error) {
        _this.requestServer = false;

        if (error.response.status === 422) {
          _this.errors = error.response.data.errors || {};
          return;
        }

        document.location.href = error.response.data.route;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/slider/Create.vue?vue&type=template&id=c98762ca&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/slider/Create.vue?vue&type=template&id=c98762ca& ***!
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
                      title: "Crear Slide",
                      parent: "",
                      active: "Slider"
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
    _c("div", { staticClass: "container-fluid mt--6" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-12" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.submit($event)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col-12 col-md-6" },
                      [
                        _c("ImageForm", {
                          attrs: {
                            label: "Imagen",
                            variable: "image",
                            errors: _vm.errors,
                            valueEn: _vm.element.image_en,
                            valueEs: _vm.element.image_es
                          },
                          on: {
                            "update:valueEn": function($event) {
                              return _vm.$set(_vm.element, "image_en", $event)
                            },
                            "update:value-en": function($event) {
                              return _vm.$set(_vm.element, "image_en", $event)
                            },
                            "update:valueEs": function($event) {
                              return _vm.$set(_vm.element, "image_es", $event)
                            },
                            "update:value-es": function($event) {
                              return _vm.$set(_vm.element, "image_es", $event)
                            }
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-12 col-md-6" },
                      [
                        _c("ImageForm", {
                          attrs: {
                            label: "Imagen Responsive",
                            variable: "image_responsive",
                            errors: _vm.errors,
                            valueEn: _vm.element.image_responsive_en,
                            valueEs: _vm.element.image_responsive_es
                          },
                          on: {
                            "update:valueEn": function($event) {
                              return _vm.$set(
                                _vm.element,
                                "image_responsive_en",
                                $event
                              )
                            },
                            "update:value-en": function($event) {
                              return _vm.$set(
                                _vm.element,
                                "image_responsive_en",
                                $event
                              )
                            },
                            "update:valueEs": function($event) {
                              return _vm.$set(
                                _vm.element,
                                "image_responsive_es",
                                $event
                              )
                            },
                            "update:value-es": function($event) {
                              return _vm.$set(
                                _vm.element,
                                "image_responsive_es",
                                $event
                              )
                            }
                          }
                        })
                      ],
                      1
                    ),
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
                              attrs: { for: "from" }
                            },
                            [_vm._v("Válido desde")]
                          ),
                          _vm._v(" "),
                          _c(
                            "date-picker",
                            {
                              attrs: {
                                "input-attr": { id: "from" },
                                "value-type": "format",
                                format: "HH:mm DD-MM-YYYY",
                                type: "datetime",
                                "time-picker-options": {
                                  start: "06:00",
                                  step: "00:05",
                                  end: "24:00"
                                },
                                "first-day-of-week": 1,
                                lang: "es",
                                "input-class": "form-control",
                                width: "100%"
                              },
                              model: {
                                value: _vm.element.from,
                                callback: function($$v) {
                                  _vm.$set(_vm.element, "from", $$v)
                                },
                                expression: "element.from"
                              }
                            },
                            [_c("jam-calendar")],
                            1
                          ),
                          _vm._v(" "),
                          _vm.errors && _vm.errors.from
                            ? _c(
                                "label",
                                {
                                  staticClass: "mt-2 text-danger text-sm",
                                  attrs: { for: "from" }
                                },
                                [_vm._v(_vm._s(_vm.errors.from[0]))]
                              )
                            : _vm._e()
                        ],
                        1
                      )
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
                              attrs: { for: "to" }
                            },
                            [_vm._v("Válido hasta")]
                          ),
                          _vm._v(" "),
                          _c(
                            "date-picker",
                            {
                              attrs: {
                                "input-attr": { id: "to" },
                                "value-type": "format",
                                format: "HH:mm DD-MM-YYYY",
                                type: "datetime",
                                "time-picker-options": {
                                  start: "06:00",
                                  step: "00:05",
                                  end: "24:00"
                                },
                                "first-day-of-week": 1,
                                lang: "es",
                                "input-class": "form-control",
                                width: "100%"
                              },
                              model: {
                                value: _vm.element.to,
                                callback: function($$v) {
                                  _vm.$set(_vm.element, "to", $$v)
                                },
                                expression: "element.to"
                              }
                            },
                            [_c("jam-calendar")],
                            1
                          ),
                          _vm._v(" "),
                          _vm.errors && _vm.errors.to
                            ? _c(
                                "label",
                                {
                                  staticClass: "mt-2 text-danger text-sm",
                                  attrs: { for: "to" }
                                },
                                [_vm._v(_vm._s(_vm.errors.to[0]))]
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
                            text: "Guardar",
                            classes: ["btn-inverse-primary", "mr-2"],
                            "request-server": _vm.requestServer
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "btn btn-secondary",
                            attrs: { type: "button", href: _vm.routeReturn }
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
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/slider/Create.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/slider/Create.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_c98762ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=c98762ca& */ "./resources/js/views/slider/Create.vue?vue&type=template&id=c98762ca&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/views/slider/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_c98762ca___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_c98762ca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/slider/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/slider/Create.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/slider/Create.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/slider/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/slider/Create.vue?vue&type=template&id=c98762ca&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/slider/Create.vue?vue&type=template&id=c98762ca& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_c98762ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=c98762ca& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/slider/Create.vue?vue&type=template&id=c98762ca&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_c98762ca___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_c98762ca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);