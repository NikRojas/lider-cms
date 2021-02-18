(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/pages/cami~js/pages/projects/create~js/pages/projects/edit"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form/MultipleFiles.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/form/MultipleFiles.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-loading-skeleton */ "./node_modules/vue-loading-skeleton/dist/vue-loading-skeleton.esm.js");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue2-dropzone */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.js");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.umd.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var simplebar_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! simplebar-vue */ "./node_modules/simplebar-vue/dist/simplebar-vue.esm.js");
/* harmony import */ var simplebar_dist_simplebar_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! simplebar/dist/simplebar.min.css */ "./node_modules/simplebar/dist/simplebar.min.css");
/* harmony import */ var simplebar_dist_simplebar_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(simplebar_dist_simplebar_min_css__WEBPACK_IMPORTED_MODULE_4__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    errors: Object,
    fieldName: String,
    imagesUrl: String,
    folder: String,
    filesParent: Array,
    messageOrder: String,
    desc: String
  },
  components: {
    vueDropzone: vue2_dropzone__WEBPACK_IMPORTED_MODULE_1___default.a,
    draggable: vuedraggable__WEBPACK_IMPORTED_MODULE_2___default.a,
    simplebar: simplebar_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    Skeleton: vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_0__["Skeleton"]
  },
  data: function data() {
    return {
      files: [],
      //countImages: 0,
      showLoading: false,
      elements: {},
      dropzoneOptions: {
        url: "/",
        maxFiles: 1,
        acceptedFiles: "image/png,image/jpeg,image/jpg,image/svg+xml",
        autoProcessQueue: false,
        thumbnailWidth: 150,
        addRemoveLinks: true,
        dictRemoveFile: "Remover"
      }
    };
  },
  methods: {
    updateImages: function updateImages() {
      var _this = this;

      this.files.forEach(function (element, i) {
        if (element instanceof File) {
          _this.$refs["ref_file_" + i][0].dropzone.files.pop();

          document.querySelectorAll("#images" + i + ">.dz-preview").forEach(function (a) {
            console.log(a);
            a.remove();
          }); //Add File

          _this.$refs["ref_file_" + i][0].manuallyAddFile(element, "/");

          _this.$refs["ref_file_" + i][0].dropzone.emit("thumbnail", element, element.dataURL);

          _this.$refs["ref_file_" + i][0].dropzone.emit("complete", element);
        }
      });
    },
    handleEnd: function handleEnd(added, removed, moved) {
      var _this2 = this;

      //this.updateImages();
      this.showLoading = true;
      setTimeout(function () {
        _this2.updateImages();

        _this2.showLoading = false;
      }, 500);
    },
    add: function add() {
      if (this.files.length) {
        var lastItem = this.files[this.files.length - 1];

        if (!lastItem) {
          return false;
        }
      }

      this.files.push("");
    },
    remove: function remove(index) {
      var _this3 = this;

      this.files.splice(index, 1);
      this.showLoading = true;
      setTimeout(function () {
        _this3.updateImages();

        _this3.showLoading = false;
      }, 500);
    },
    handleAddedFiles: function handleAddedFiles(e, index) {
      var _this4 = this;

      setTimeout(function () {
        _this4.files[index] = _this4.$refs["ref_file_" + index][0].dropzone.files[0];
      }, 500);
    }
  },
  watch: {
    filesParent: {
      immediate: true,
      handler: function handler(newValue) {
        if (newValue) {
          this.files = newValue;
        }
      }
    },
    files: {
      immediate: true,
      deep: true,
      handler: function handler(newValue) {
        this.$emit("update:files", newValue);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form/MultipleFiles.vue?vue&type=template&id=6699d7a7&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/form/MultipleFiles.vue?vue&type=template&id=6699d7a7& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
    _c("p", { class: _vm.desc ? "mb-0" : "" }, [
      _vm._v(_vm._s(_vm.messageOrder))
    ]),
    _vm._v(" "),
    _vm.desc
      ? _c(
          "small",
          {
            staticClass: "form-text mb-2 mt-0 d-block",
            staticStyle: { opacity: "0.7" }
          },
          [_vm._v(_vm._s(_vm.desc))]
        )
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "card" }, [
      _c(
        "div",
        { staticClass: "table-responsive" },
        [
          _vm.showLoading
            ? _c(
                "div",
                {
                  staticStyle: {
                    position: "absolute",
                    height: "calc(100% - 41px)",
                    width: "100%",
                    "z-index": "1",
                    top: "38px"
                  }
                },
                [_c("Skeleton", { attrs: { height: "100%" } })],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c("simplebar", { attrs: { "data-simplebar-auto-hide": "false" } }, [
            _c(
              "table",
              { staticClass: "table align-items-center" },
              [
                _c("thead", { staticClass: "thead-light" }, [
                  _c("tr", [
                    _c("th", [_vm._v("Archivos Subidos")]),
                    _vm._v(" "),
                    _c("th")
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "draggable",
                  {
                    attrs: { tag: "tbody" },
                    on: { change: _vm.handleEnd },
                    model: {
                      value: _vm.files,
                      callback: function($$v) {
                        _vm.files = $$v
                      },
                      expression: "files"
                    }
                  },
                  _vm._l(_vm.files, function(el, i) {
                    return _c("tr", { key: i }, [
                      _c(
                        "td",
                        [
                          typeof el == "string" && el !== ""
                            ? _c(
                                "a",
                                {
                                  staticStyle: {
                                    "text-decoration": "underline"
                                  },
                                  attrs: {
                                    href:
                                      _vm.imagesUrl +
                                      "/" +
                                      _vm.folder +
                                      "/" +
                                      el,
                                    target: "_blank"
                                  }
                                },
                                [_vm._v(_vm._s(el))]
                              )
                            : _c(
                                "vue-dropzone",
                                {
                                  ref: "ref_file_" + i,
                                  refInFor: true,
                                  staticClass: "text-center multiple-files",
                                  attrs: {
                                    id: "images" + i,
                                    options: _vm.dropzoneOptions,
                                    duplicateCheck: true,
                                    useCustomSlot: true
                                  },
                                  on: {
                                    "vdropzone-file-added": function($event) {
                                      return _vm.$validateImageDropzone(
                                        $event,
                                        _vm.$refs["ref_file_" + i][0].dropzone,
                                        1,
                                        512000,
                                        "500kb"
                                      )
                                    },
                                    "vdropzone-files-added": function($event) {
                                      return _vm.handleAddedFiles($event, i)
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
                                            "\n                      Suelte los archivos aquí\n                      "
                                          ),
                                          _c("br"),
                                          _vm._v(
                                            "o haga click para cargarlos.\n                    "
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        typeof el == "string" && el !== ""
                          ? _c(
                              "a",
                              {
                                staticClass:
                                  "btn btn-sm btn-icon-only rounded-circle btn-inverse-info",
                                attrs: {
                                  target: "_blank",
                                  href:
                                    _vm.imagesUrl + "/" + _vm.folder + "/" + el
                                }
                              },
                              [
                                _c("jam-eye", {
                                  staticClass: "current-color",
                                  attrs: { height: "18", width: "18" }
                                })
                              ],
                              1
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass:
                              "btn btn-sm btn-icon-only rounded-circle btn-inverse-danger",
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.remove(i)
                              }
                            }
                          },
                          [
                            _c("jam-trash", {
                              staticClass: "current-color",
                              attrs: { height: "18", width: "18" }
                            })
                          ],
                          1
                        )
                      ])
                    ])
                  }),
                  0
                )
              ],
              1
            )
          ])
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "mt-3" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-block btn-sm btn-icon btn-inverse-info",
          on: {
            click: function($event) {
              $event.preventDefault()
              return _vm.add($event)
            }
          }
        },
        [
          _c(
            "span",
            { staticClass: "btn-inner--icon" },
            [_c("jam-plus", { staticClass: "current-color" })],
            1
          ),
          _vm._v(" "),
          _c("span", { staticClass: "btn-inner--text" }, [_vm._v("Agregar")])
        ]
      )
    ]),
    _vm._v(" "),
    _vm.errors && _vm.errors[_vm.fieldName + "0"]
      ? _c("div", [
          _c(
            "label",
            {
              staticClass: "mt-3 text-danger text-sm",
              attrs: { for: _vm.fieldName + "0" }
            },
            [_vm._v(_vm._s(_vm.errors[_vm.fieldName + "0"][0]))]
          )
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/form/MultipleFiles.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/form/MultipleFiles.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MultipleFiles_vue_vue_type_template_id_6699d7a7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MultipleFiles.vue?vue&type=template&id=6699d7a7& */ "./resources/js/components/form/MultipleFiles.vue?vue&type=template&id=6699d7a7&");
/* harmony import */ var _MultipleFiles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MultipleFiles.vue?vue&type=script&lang=js& */ "./resources/js/components/form/MultipleFiles.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MultipleFiles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MultipleFiles_vue_vue_type_template_id_6699d7a7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MultipleFiles_vue_vue_type_template_id_6699d7a7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/form/MultipleFiles.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/form/MultipleFiles.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/form/MultipleFiles.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleFiles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MultipleFiles.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form/MultipleFiles.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleFiles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/form/MultipleFiles.vue?vue&type=template&id=6699d7a7&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/form/MultipleFiles.vue?vue&type=template&id=6699d7a7& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleFiles_vue_vue_type_template_id_6699d7a7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MultipleFiles.vue?vue&type=template&id=6699d7a7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form/MultipleFiles.vue?vue&type=template&id=6699d7a7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleFiles_vue_vue_type_template_id_6699d7a7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleFiles_vue_vue_type_template_id_6699d7a7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);