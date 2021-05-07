(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/pages/projects/virtual/index"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form/Input.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/form/Input.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    label: String,
    variable: String,
    errors: Object,
    valueEnParent: String,
    valueEsParent: String
  },
  data: function data() {
    return {
      active: "es",
      value: {
        en: "",
        es: ""
      },
      random: Math.ceil(Math.random() * 10)
    };
  },
  methods: {
    toggle: function toggle(lang) {
      this.active = lang;
    }
  },
  watch: {
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
      this.$emit("update:valueEn", newValue);
    },
    "value.es": function valueEs(newValue, oldValue) {
      this.$emit("update:valueEs", newValue);
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/skeleton/form.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/skeleton/form.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-loading-skeleton */ "./node_modules/vue-loading-skeleton/dist/vue-loading-skeleton.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Skeleton: vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_0__["Skeleton"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/projects/virtual/Index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/projects/virtual/Index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_skeleton_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/skeleton/form */ "./resources/js/components/skeleton/form.vue");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue2-dropzone */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.js");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/BreadCrumb */ "./resources/js/components/BreadCrumb.vue");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Button */ "./resources/js/components/Button.vue");
/* harmony import */ var _components_form_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/form/Input */ "./resources/js/components/form/Input.vue");
/* harmony import */ var vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-loading-skeleton */ "./node_modules/vue-loading-skeleton/dist/vue-loading-skeleton.esm.js");
/* harmony import */ var _components_NoData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/NoData */ "./resources/js/components/NoData.vue");
/* harmony import */ var _components_modals_Destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/modals/Destroy */ "./resources/js/components/modals/Destroy.vue");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.umd.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_8__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    elementParent: Object,
    messageOrder: String,
    imagesUrl: String,
    routeReturn: String,
    routeGetAll: String,
    routeOrder: String,
    route: String,
    types: Array
  },
  components: {
    SkeletonForm: _components_skeleton_form__WEBPACK_IMPORTED_MODULE_0__["default"],
    vueDropzone: vue2_dropzone__WEBPACK_IMPORTED_MODULE_1___default.a,
    Button: _components_Button__WEBPACK_IMPORTED_MODULE_3__["default"],
    Input: _components_form_Input__WEBPACK_IMPORTED_MODULE_4__["default"],
    BreadCrumb: _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_2__["default"],
    NoData: _components_NoData__WEBPACK_IMPORTED_MODULE_6__["default"],
    Skeleton: vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_5__["Skeleton"],
    Destroy: _components_modals_Destroy__WEBPACK_IMPORTED_MODULE_7__["default"],
    draggable: vuedraggable__WEBPACK_IMPORTED_MODULE_8___default.a
  },
  data: function data() {
    var _ref;

    return _ref = {
      options: [{
        text: "URL 360",
        value: true
      }, {
        text: "URL Video Youtube",
        value: false
      }],
      errors: {},
      loadingEls: false,
      elements: {},
      project: {},
      element: {
        url_360: true,
        url_video: ""
      },
      loadingGet: false,
      requestSubmit: false,
      modalCreateUpdate: false,
      modalDestroy: false
    }, _defineProperty(_ref, "loadingGet", false), _defineProperty(_ref, "loadingEls", false), _defineProperty(_ref, "title", ""), _defineProperty(_ref, "dropzoneOptions", {
      url: "/",
      maxFiles: 1,
      acceptedFiles: "image/png,image/jpeg,image/jpg,image/svg+xml",
      autoProcessQueue: false,
      thumbnailWidth: 150,
      addRemoveLinks: true,
      dictRemoveFile: "Remover"
    }), _ref;
  },
  methods: {
    handleChange: function handleChange(event) {
      var _this = this;

      axios.put(this.routeOrder, this.elements).then(function (response) {
        _this.restore();

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
    submit: function submit() {
      var _this2 = this;

      this.requestSubmit = true;
      var url;
      var method;
      var fd = new FormData();

      if (this.title == "Nuevo") {
        url = this.route;
        method = "post";
      } else {
        url = this.route + "/" + this.element.id;
        method = "post";
        fd.append("_method", "put");
        fd.append("id", this.element.id);
      }

      if (this.element.name) {
        fd.append("name", this.element.name);
      }

      if (this.element.url_360 == true) {
        fd.append("url_360", 1);
      } else {
        fd.append("url_360", 0);
      }

      if (this.element.url) {
        fd.append("url", this.element.url);
      }

      if (this.$refs.ref_image.dropzone.files[0]) {
        fd.append("image", this.$refs.ref_image.dropzone.files[0]);
      }

      fd.append("project_id", this.project.id);
      axios({
        method: method,
        url: url,
        data: fd
      }).then(function (response) {
        _this2.requestSubmit = false;
        Swal.fire({
          title: response.data.title,
          text: response.data.message,
          type: "success",
          confirmButtonText: "OK",
          buttonsStyling: false,
          customClass: {
            confirmButton: "btn btn-inverse-primary"
          }
        });

        _this2.restore();
      })["catch"](function (error) {
        _this2.requestSubmit = false;

        if (error.response.status === 422) {
          _this2.errors = error.response.data.errors || {};
          return;
        }

        Swal.fire({
          title: error.response.data.title,
          text: error.response.data.message,
          type: "error",
          confirmButtonText: "OK",
          buttonsStyling: false,
          customClass: {
            confirmButton: "btn btn-inverse-primary"
          }
        });

        _this2.restoreEl();
      });
    },
    deleteEl: function deleteEl(id) {
      this.modalDestroy = true;
      this.getEl(id);
    },
    restore: function restore() {
      this.element = {
        image: "",
        url_video: "",
        url_360: true
      }, this.modalCreateUpdate = this.requestSubmit = this.modalDestroy = false;
      this.getEls();
      this.errors = {};
    },
    restoreEl: function restoreEl() {
      this.element = {
        image: "",
        url_video: "",
        url_360: true
      }, this.modalCreateUpdate = this.modalDestroy = this.requestSubmit = false; //this.getEls();

      this.errors = {};
    },
    newEl: function newEl() {
      this.title = "Nuevo";
      this.modalCreateUpdate = true;
    },
    editEl: function editEl(id) {
      this.title = "Actualizar";
      this.modalCreateUpdate = true;
      this.getEl(id);
    },
    destroyConfirm: function destroyConfirm() {
      var _this3 = this;

      this.requestSubmit = true;
      axios["delete"](this.route + "/" + this.element.id).then(function (response) {
        _this3.requestSubmit = false;

        _this3.restore();

        Swal.fire({
          title: response.data.title,
          text: response.data.message,
          type: "success",
          confirmButtonText: "OK",
          buttonsStyling: false,
          customClass: {
            confirmButton: "btn btn-inverse-primary"
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
            confirmButton: "btn btn-inverse-primary"
          }
        });

        _this3.restoreEl();
      });
    },
    getEls: function getEls() {
      var _this4 = this;

      this.loadingEls = true;
      axios.get(this.routeGetAll, {
        params: {
          project_id: this.project.id
        }
      }).then(function (response) {
        _this4.elements = response.data;
        _this4.loadingEls = false;
      })["catch"](function (error) {});
    },
    getEl: function getEl(id) {
      var _this5 = this;

      this.loadingGet = true;
      axios.get(this.route + "/json/get/" + id).then(function (response) {
        _this5.element = response.data;
        _this5.loadingGet = false;
      })["catch"](function (error) {});
    }
  },
  created: function created() {
    this.getEls();
  },
  watch: {
    elementParent: {
      immediate: true,
      handler: function handler(newValue) {
        this.project = newValue;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form/Input.vue?vue&type=template&id=8c9de0ac&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/form/Input.vue?vue&type=template&id=8c9de0ac& ***!
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
                    "  " +
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
      _vm._t("default"),
      _vm._v(" "),
      _vm._l(_vm.errors, function(el, i) {
        return _c("div", { key: i }, [
          i == _vm.variable + "_" + _vm.active
            ? _c("label", { staticClass: "text-danger text-sm d-block" }, [
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/skeleton/form.vue?vue&type=template&id=8df953ea&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/skeleton/form.vue?vue&type=template&id=8df953ea& ***!
  \****************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "w-25 mb-2" }, [_c("Skeleton")], 1),
    _vm._v(" "),
    _c("div", { staticClass: "mb-2" }, [_c("Skeleton")], 1),
    _vm._v(" "),
    _c("div", { staticClass: "w-25 mb-2" }, [_c("Skeleton")], 1),
    _vm._v(" "),
    _c("div", { staticClass: "mb-2" }, [_c("Skeleton")], 1),
    _vm._v(" "),
    _c("div", { staticClass: "w-25 mb-2" }, [_c("Skeleton")], 1),
    _vm._v(" "),
    _c("div", { staticClass: "mb-2" }, [_c("Skeleton")], 1),
    _vm._v(" "),
    _c("div", { staticClass: "w-25 mb-2" }, [_c("Skeleton")], 1),
    _vm._v(" "),
    _c("div", { staticClass: "mb-2" }, [_c("Skeleton")], 1),
    _vm._v(" "),
    _c("div", { staticClass: "text-right" }, [
      _c("div", { staticClass: "w-25 ml-auto" }, [_c("Skeleton")], 1)
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/projects/virtual/Index.vue?vue&type=template&id=12024318&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/projects/virtual/Index.vue?vue&type=template&id=12024318& ***!
  \********************************************************************************************************************************************************************************************************************/
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
              { staticClass: "row align-items-center pt-0 pt-md-2 pb-3" },
              [
                _c(
                  "div",
                  { staticClass: "col-6 col-md-7" },
                  [
                    _c("BreadCrumb", {
                      attrs: {
                        title:
                          "Virtual Tours de Proyecto " + _vm.project.name_es,
                        parent: "",
                        active: "Proyectos"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-6 col-md text-right" }, [
                  _c(
                    "a",
                    {
                      staticClass: "btn btn-icon btn-inverse-primary",
                      attrs: { href: "#" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.newEl($event)
                        }
                      }
                    },
                    [
                      _c(
                        "span",
                        { staticClass: "btn-inner--icon" },
                        [_c("jam-layout", { staticClass: "current-color" })],
                        1
                      ),
                      _vm._v(" "),
                      _c("span", { staticClass: "btn-inner--text" }, [
                        _vm._v("Nuevo Tour Virtual")
                      ])
                    ]
                  )
                ])
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "row mb-3" }, [
              _c("div", { staticClass: "col-6 col-md-5" }, [
                _c(
                  "a",
                  {
                    staticClass: "btn btn-icon btn-sm btn-inverse-light",
                    attrs: { href: _vm.routeReturn }
                  },
                  [
                    _c(
                      "span",
                      { staticClass: "btn-inner--icon" },
                      [_c("jam-arrow-left", { staticClass: "current-color" })],
                      1
                    ),
                    _vm._v(" "),
                    _c("span", { staticClass: "btn-inner--text" }, [
                      _vm._v("Regresar")
                    ])
                  ]
                )
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "container-fluid mt--6" }, [
        _vm.loadingEls
          ? _c(
              "div",
              { staticClass: "row" },
              _vm._l(4, function(i) {
                return _c(
                  "div",
                  { key: i, staticClass: "col-12 col-lg-4 mb-4" },
                  [_c("Skeleton", { attrs: { height: "300px" } })],
                  1
                )
              }),
              0
            )
          : _c(
              "div",
              [
                _vm.elements.length
                  ? _c(
                      "div",
                      [
                        _c("p", [_vm._v(_vm._s(_vm.messageOrder))]),
                        _vm._v(" "),
                        _c(
                          "draggable",
                          {
                            staticClass: "row",
                            on: { change: _vm.handleChange },
                            model: {
                              value: _vm.elements,
                              callback: function($$v) {
                                _vm.elements = $$v
                              },
                              expression: "elements"
                            }
                          },
                          _vm._l(_vm.elements, function(el, i) {
                            return _c(
                              "div",
                              {
                                key: i,
                                staticClass: "col-12 col-lg-3 mb-4 text-center"
                              },
                              [
                                _c("div", { staticClass: "card" }, [
                                  _c("div", { staticClass: "card-body" }, [
                                    _c("img", {
                                      staticClass: "img-fluid",
                                      attrs: {
                                        src:
                                          _vm.imagesUrl +
                                          "/projects/virtual-tour/" +
                                          el.image,
                                        alt: ""
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("h3", { staticClass: "mb-2 mt-3" }, [
                                      _vm._v(
                                        "\n                  " + _vm._s(el.name)
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "d-block" }, [
                                      _vm._v(
                                        _vm._s(
                                          el.url_360
                                            ? "URL 360"
                                            : "URL Video Youtube"
                                        ) + " "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "a",
                                      {
                                        staticStyle: {
                                          "text-decoration": "underline"
                                        },
                                        attrs: {
                                          href: el.url,
                                          target: "_blank"
                                        }
                                      },
                                      [_vm._v(_vm._s(el.url))]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "mt-4 text-center" },
                                      [
                                        _c(
                                          "button",
                                          {
                                            staticClass:
                                              "btn btn-inverse-info btn-sm",
                                            on: {
                                              click: function($event) {
                                                return _vm.editEl(el.id)
                                              }
                                            }
                                          },
                                          [_vm._v("Editar")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "button",
                                          {
                                            staticClass:
                                              "btn btn-inverse-danger btn-sm",
                                            on: {
                                              click: function($event) {
                                                return _vm.deleteEl(el.id)
                                              }
                                            }
                                          },
                                          [_vm._v("Eliminar")]
                                        )
                                      ]
                                    )
                                  ])
                                ])
                              ]
                            )
                          }),
                          0
                        )
                      ],
                      1
                    )
                  : _c("NoData")
              ],
              1
            )
      ]),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            "no-close-on-esc": "",
            "no-close-on-backdrop": "",
            centered: "",
            "footer-class": "border-0 pt-0",
            "body-class": "pt-0"
          },
          on: { close: _vm.restoreEl },
          scopedSlots: _vm._u([
            {
              key: "modal-footer",
              fn: function(ref) {
                var ok = ref.ok
                return [
                  _c("Button", {
                    attrs: {
                      classes: ["btn-inverse-primary"],
                      text: _vm.title == "Nuevo" ? "Crear" : "Actualizar",
                      "request-server": _vm.requestSubmit
                    },
                    on: { click: _vm.submit }
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
          ]),
          model: {
            value: _vm.modalCreateUpdate,
            callback: function($$v) {
              _vm.modalCreateUpdate = $$v
            },
            expression: "modalCreateUpdate"
          }
        },
        [
          _c("template", { slot: "modal-title" }, [
            _c("div", { staticClass: "text-primary h2" }, [
              _vm._v(_vm._s(_vm.title) + " Tour Virtual")
            ])
          ]),
          _vm._v(" "),
          _c("template", { slot: "modal-header-close" }, [
            _c(
              "button",
              {
                staticClass: "btn p-0 bg-transparent",
                attrs: { type: "button" },
                on: { click: _vm.restoreEl }
              },
              [_c("jam-close")],
              1
            )
          ]),
          _vm._v(" "),
          _vm.loadingGet
            ? _c("div", [_c("SkeletonForm")], 1)
            : _c("div", [
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
                      _c("div", { staticClass: "col-12" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticClass: "font-weight-bold",
                              attrs: { for: "image" }
                            },
                            [_vm._v("Imagen:")]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _vm.element.image
                              ? _c("div", { staticClass: "col text-center" }, [
                                  _c("img", {
                                    staticClass: "img-fluid",
                                    attrs: {
                                      src:
                                        _vm.imagesUrl +
                                        "/projects/virtual-tour/" +
                                        _vm.element.image,
                                      alt: _vm.element.title_es
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
                                    ref: "ref_image",
                                    staticClass: "text-center",
                                    attrs: {
                                      id: "image",
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
                                  attrs: { for: "image" }
                                },
                                [_vm._v(_vm._s(_vm.errors.image[0]))]
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
                              attrs: { for: "name" }
                            },
                            [_vm._v("Nombre")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.element.name,
                                expression: "element.name"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", id: "name" },
                            domProps: { value: _vm.element.name },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.element,
                                  "name",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors && _vm.errors.name
                            ? _c(
                                "label",
                                {
                                  staticClass: "mt-2 text-danger text-sm",
                                  attrs: { for: "name" }
                                },
                                [_vm._v(_vm._s(_vm.errors.name[0]))]
                              )
                            : _vm._e()
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-12" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "div",
                            { staticClass: "mb-2" },
                            [
                              _c(
                                "p",
                                { staticClass: "font-weight-bold mb-0" },
                                [_vm._v("Elige una opción")]
                              ),
                              _vm._v(" "),
                              _c("b-form-radio-group", {
                                attrs: {
                                  id: "radio-group-1",
                                  name: "radios",
                                  plain: "",
                                  options: _vm.options
                                },
                                model: {
                                  value: _vm.element.url_360,
                                  callback: function($$v) {
                                    _vm.$set(_vm.element, "url_360", $$v)
                                  },
                                  expression: "element.url_360"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "label",
                            {
                              staticClass: "font-weight-bold",
                              attrs: { for: "name" }
                            },
                            [
                              _vm._v(
                                "URL " +
                                  _vm._s(
                                    _vm.element.url_360
                                      ? "360"
                                      : "Video Youtube"
                                  )
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.element.url,
                                expression: "element.url"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", id: "url" },
                            domProps: { value: _vm.element.url },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.element,
                                  "url",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors && _vm.errors.url
                            ? _c(
                                "label",
                                {
                                  staticClass: "mt-2 text-danger text-sm",
                                  attrs: { for: "url" }
                                },
                                [_vm._v(_vm._s(_vm.errors.url[0]))]
                              )
                            : _vm._e()
                        ])
                      ])
                    ])
                  ]
                )
              ])
        ],
        2
      ),
      _vm._v(" "),
      _c("destroy", {
        attrs: {
          element: "Tour Virtual",
          open: _vm.modalDestroy,
          "loading-get": _vm.loadingGet,
          "loading-submit": _vm.requestSubmit
        },
        on: { cancel: _vm.restoreEl, submit: _vm.destroyConfirm }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/form/Input.vue":
/*!************************************************!*\
  !*** ./resources/js/components/form/Input.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Input_vue_vue_type_template_id_8c9de0ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Input.vue?vue&type=template&id=8c9de0ac& */ "./resources/js/components/form/Input.vue?vue&type=template&id=8c9de0ac&");
/* harmony import */ var _Input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Input.vue?vue&type=script&lang=js& */ "./resources/js/components/form/Input.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Input_vue_vue_type_template_id_8c9de0ac___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Input_vue_vue_type_template_id_8c9de0ac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/form/Input.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/form/Input.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/form/Input.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Input.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form/Input.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/form/Input.vue?vue&type=template&id=8c9de0ac&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/form/Input.vue?vue&type=template&id=8c9de0ac& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_template_id_8c9de0ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Input.vue?vue&type=template&id=8c9de0ac& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form/Input.vue?vue&type=template&id=8c9de0ac&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_template_id_8c9de0ac___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_template_id_8c9de0ac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/skeleton/form.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/skeleton/form.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_vue_vue_type_template_id_8df953ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=8df953ea& */ "./resources/js/components/skeleton/form.vue?vue&type=template&id=8df953ea&");
/* harmony import */ var _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js& */ "./resources/js/components/skeleton/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_vue_vue_type_template_id_8df953ea___WEBPACK_IMPORTED_MODULE_0__["render"],
  _form_vue_vue_type_template_id_8df953ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/skeleton/form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/skeleton/form.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/skeleton/form.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/skeleton/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/skeleton/form.vue?vue&type=template&id=8df953ea&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/skeleton/form.vue?vue&type=template&id=8df953ea& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_8df953ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=template&id=8df953ea& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/skeleton/form.vue?vue&type=template&id=8df953ea&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_8df953ea___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_8df953ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/projects/virtual/Index.vue":
/*!*******************************************************!*\
  !*** ./resources/js/views/projects/virtual/Index.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_12024318___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=12024318& */ "./resources/js/views/projects/virtual/Index.vue?vue&type=template&id=12024318&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/projects/virtual/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_12024318___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_12024318___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/projects/virtual/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/projects/virtual/Index.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/projects/virtual/Index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/projects/virtual/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/projects/virtual/Index.vue?vue&type=template&id=12024318&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/projects/virtual/Index.vue?vue&type=template&id=12024318& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_12024318___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=12024318& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/projects/virtual/Index.vue?vue&type=template&id=12024318&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_12024318___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_12024318___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);