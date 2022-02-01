(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/pages/administration/status-project~js/pages/administration/types~js/pages/administration/views~j~77b95d96"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form/InputSlug.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/form/InputSlug.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    type: String,
    urlEs: {
      type: String,
      required: false
    },
    urlEn: {
      type: String,
      required: false
    },
    parentSlug: {
      type: String,
      required: false
    },
    label: String,
    variable: String,
    errors: Object,
    valueEnParent: String,
    valueEsParent: String,
    slugEnParent: String,
    slugEsParent: String
  },
  data: function data() {
    return {
      active: "es",
      value: {
        en: "",
        es: "",
        slug_es: "",
        slug_en: "",
        editBlock_es: false,
        editBlock_en: false,
        slugEdited_en: false,
        slugEdited_es: false
      },
      random: Math.ceil(Math.random() * 10)
    };
  },
  methods: {
    toggle: function toggle(lang) {
      this.active = lang;
    },
    getSlug: function getSlug() {
      this.value['editBlock' + '_' + this.active] = !this.value['editBlock' + '_' + this.active];
      this.value['slugEdited' + '_' + this.active] = !this.value['slugEdited' + '_' + this.active];
    }
  },
  watch: {
    slugEnParent: {
      immediate: true,
      handler: function handler(newValue) {
        if (newValue) {
          this.value.slug_en = newValue;
        }
      }
    },
    slugEsParent: {
      immediate: true,
      handler: function handler(newValue) {
        if (newValue) {
          this.value.slug_es = newValue;
        }
      }
    },
    valueEnParent: {
      immediate: true,
      handler: function handler(newValue) {
        this.value.en = newValue;
      }
    },
    valueEsParent: {
      immediate: true,
      handler: function handler(newValue) {
        this.value.es = newValue;
      }
    },
    "value.en": function valueEn(newValue, oldValue) {
      if (!this.value.slugEdited_en) {
        this.value.slug_en = newValue;
      }

      this.$emit("update:valueEn", newValue);
    },
    "value.es": function valueEs(newValue, oldValue) {
      if (!this.value.slugEdited_es) {
        this.value.slug_es = newValue;
      }

      this.$emit("update:valueEs", newValue);
    },
    "value.slug_es": function valueSlug_es(newVal, oldVal) {
      this.value.slug_es = Slug(newVal);
      this.$emit("update:slugEs", this.value.slug_es);
    },
    "value.slug_en": function valueSlug_en(newVal, oldVal) {
      this.value.slug_en = Slug(newVal);
      this.$emit("update:slugEn", this.value.slug_en);
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form/InputSlug.vue?vue&type=template&id=48ad37f5&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/form/InputSlug.vue?vue&type=template&id=48ad37f5& ***!
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
            attrs: { for: _vm.label + _vm.random }
          },
          [_vm._v(_vm._s(_vm.label) + ":")]
        )
      ]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.value[_vm.active],
            expression: "value[ active ]"
          }
        ],
        staticClass: "form-control",
        attrs: { type: "text" },
        domProps: { value: _vm.value[_vm.active] },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.value, _vm.active, $event.target.value)
          }
        }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "mt-3" }, [
        _c("small", [
          _vm._v(
            _vm._s(_vm.active == "es" ? _vm.urlEs : _vm.urlEn) +
              _vm._s(_vm.parentSlug ? _vm.parentSlug + "/" : "")
          )
        ]),
        _vm._v(" "),
        !_vm.value["editBlock_" + _vm.active]
          ? _c(
              "small",
              {
                staticClass: "bg-dark text-white",
                staticStyle: { "letter-spacing": "0.05rem" }
              },
              [_vm._v(_vm._s(_vm.value["slug_" + _vm.active]))]
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.value["editBlock_" + _vm.active]
          ? _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.value["slug_" + _vm.active],
                  expression: "value[ 'slug_'+active ]"
                }
              ],
              staticClass: "form-control form-control-sm d-inline w-50",
              attrs: { type: "text" },
              domProps: { value: _vm.value["slug_" + _vm.active] },
              on: {
                keydown: function($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                  ) {
                    return null
                  }
                  $event.preventDefault()
                  return _vm.getSlug.apply(null, arguments)
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.value, "slug_" + _vm.active, $event.target.value)
                }
              }
            })
          : _vm._e(),
        _vm._v(" "),
        !_vm.value["editBlock_" + _vm.active] && _vm.value["slug_" + _vm.active]
          ? _c(
              "button",
              {
                staticClass: "btn btn-inverse-info btn-sm ml-2",
                attrs: { type: "button" },
                on: {
                  click: function($event) {
                    _vm.value["editBlock_" + _vm.active] = !_vm.value[
                      "editBlock_" + _vm.active
                    ]
                  }
                }
              },
              [_vm._v("Editar " + _vm._s(_vm.type))]
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.value["editBlock_" + _vm.active]
          ? _c(
              "button",
              {
                staticClass: "btn btn-inverse-info btn-sm ml-2",
                attrs: { type: "button" },
                on: { click: _vm.getSlug }
              },
              [_vm._v("Aceptar")]
            )
          : _vm._e()
      ]),
      _vm._v(" "),
      _vm._l(_vm.errors, function(el, i) {
        return _c("div", { key: i }, [
          i == _vm.variable + "_" + _vm.active
            ? _c("label", { staticClass: "text-danger text-sm mt-2 d-block" }, [
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

/***/ "./resources/js/components/form/InputSlug.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/form/InputSlug.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InputSlug_vue_vue_type_template_id_48ad37f5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputSlug.vue?vue&type=template&id=48ad37f5& */ "./resources/js/components/form/InputSlug.vue?vue&type=template&id=48ad37f5&");
/* harmony import */ var _InputSlug_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InputSlug.vue?vue&type=script&lang=js& */ "./resources/js/components/form/InputSlug.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InputSlug_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InputSlug_vue_vue_type_template_id_48ad37f5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InputSlug_vue_vue_type_template_id_48ad37f5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/form/InputSlug.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/form/InputSlug.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/form/InputSlug.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputSlug_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./InputSlug.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form/InputSlug.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputSlug_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/form/InputSlug.vue?vue&type=template&id=48ad37f5&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/form/InputSlug.vue?vue&type=template&id=48ad37f5& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputSlug_vue_vue_type_template_id_48ad37f5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./InputSlug.vue?vue&type=template&id=48ad37f5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form/InputSlug.vue?vue&type=template&id=48ad37f5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputSlug_vue_vue_type_template_id_48ad37f5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputSlug_vue_vue_type_template_id_48ad37f5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);