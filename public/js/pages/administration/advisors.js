(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/pages/administration/advisors"],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/administration/Advisors.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/administration/Advisors.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/BreadCrumb */ "./resources/js/components/BreadCrumb.vue");
/* harmony import */ var _components_form_Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/form/Input */ "./resources/js/components/form/Input.vue");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue2-dropzone */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.js");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Button */ "./resources/js/components/Button.vue");
/* harmony import */ var vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-loading-skeleton */ "./node_modules/vue-loading-skeleton/dist/vue-loading-skeleton.esm.js");
/* harmony import */ var _components_modals_Destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/modals/Destroy */ "./resources/js/components/modals/Destroy.vue");
/* harmony import */ var _components_skeleton_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/skeleton/form */ "./resources/js/components/skeleton/form.vue");
/* harmony import */ var _components_NoData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/NoData */ "./resources/js/components/NoData.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BreadCrumb: _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_0__["default"],
    messageCantDelete: String,
    Destroy: _components_modals_Destroy__WEBPACK_IMPORTED_MODULE_5__["default"],
    Button: _components_Button__WEBPACK_IMPORTED_MODULE_3__["default"],
    Input: _components_form_Input__WEBPACK_IMPORTED_MODULE_1__["default"],
    vueDropzone: vue2_dropzone__WEBPACK_IMPORTED_MODULE_2___default.a,
    Skeleton: vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_4__["Skeleton"],
    SkeletonForm: _components_skeleton_form__WEBPACK_IMPORTED_MODULE_6__["default"],
    NoData: _components_NoData__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  props: {
    route: String,
    routeGetAll: String,
    imagesUrl: String,
    messageCantDelete: String
  },
  data: function data() {
    return {
      errors: {},
      requestSubmit: false,
      modalCreateUpdate: false,
      modalDestroy: false,
      loadingGet: false,
      loadingEls: false,
      //showLoading: false,
      elements: {},
      title: "",
      element: {
        image: ""
      },
      dropzoneOptions: {
        url: "/",
        maxFiles: 1,
        acceptedFiles: "image/png,image/jpeg,image/jpg,image/svg+xml",
        autoProcessQueue: false,
        thumbnailWidth: 150,
        addRemoveLinks: true,
        dictRemoveFile: "Remover"
      },
      modalCredentials: false
    };
  },
  methods: {
    destroyConfirm: function destroyConfirm() {
      var _this = this;

      this.requestSubmit = true;
      axios["delete"](this.route + "/" + this.element.id).then(function (response) {
        _this.requestSubmit = false;

        _this.restore();

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

        _this.restoreEl();
      });
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
      }

      if (this.element.name) {
        fd.append("name", this.element.name);
      }

      if (this.element.email) {
        fd.append("email", this.element.email);
      }

      if (this.element.sap_code) {
        fd.append("sap_code", this.element.sap_code);
      }

      if (this.element.mobile) {
        fd.append("mobile", this.element.mobile);
      }

      if (this.$refs.ref_image.dropzone.files[0]) {
        fd.append("avatar", this.$refs.ref_image.dropzone.files[0]);
      }

      if (this.element.id) {
        fd.append("id", this.element.id);
      }

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
    restore: function restore() {
      this.element = {
        image: ""
      }, this.modalCreateUpdate = this.modalDestroy = false;
      this.getEls();
      this.errors = {};
      this.modalCredentials = false;
    },
    deleteEl: function deleteEl(id) {
      this.modalDestroy = true;
      this.getEl(id);
    },
    restoreEl: function restoreEl() {
      this.element = {
        image: ""
      }, this.modalCreateUpdate = this.modalDestroy = false;
      this.errors = {};
      this.modalCredentials = false;
    },
    getEls: function getEls() {
      var _this3 = this;

      this.loadingEls = true;
      axios.get(this.routeGetAll).then(function (response) {
        _this3.elements = response.data;
        _this3.loadingEls = false;
      })["catch"](function (error) {});
    },
    getEl: function getEl(id) {
      var _this4 = this;

      this.loadingGet = true;
      axios.get(this.route + "/json/get/" + id).then(function (response) {
        _this4.element = response.data;
        _this4.loadingGet = false;
      })["catch"](function (error) {});
    },
    editCredentials: function editCredentials(id) {
      this.modalCredentials = true;
      this.getEl(id);
    },
    submitCredentials: function submitCredentials() {
      var _this5 = this;

      this.requestSubmit = true;
      axios({
        method: 'PUT',
        url: this.route + "/credentials/" + this.element.id,
        data: this.element
      }).then(function (response) {
        _this5.requestSubmit = false;
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

        _this5.restore();
      })["catch"](function (error) {
        _this5.requestSubmit = false;

        if (error.response.status === 422) {
          _this5.errors = error.response.data.errors || {};
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

        _this5.restoreEl();
      });
    }
  },
  created: function created() {
    this.getEls();
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/administration/Advisors.vue?vue&type=template&id=808d2096&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/administration/Advisors.vue?vue&type=template&id=808d2096& ***!
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
                        title: "Asesores",
                        parent: "Administración",
                        active: "Asesores"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-6 col-md-5 text-right" }, [
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
                        [
                          _c("jam-user-square", {
                            staticClass: "current-color"
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("span", { staticClass: "btn-inner--text" }, [
                        _vm._v("Nuevo Asesor")
                      ])
                    ]
                  )
                ])
              ]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "container-fluid mt--6" }, [
        _vm.loadingEls
          ? _c(
              "div",
              { staticClass: "row" },
              _vm._l(8, function(i) {
                return _c(
                  "div",
                  { key: i, staticClass: "col-12 col-md-6 col-lg-3 mb-4" },
                  [_c("Skeleton", { attrs: { height: "150px" } })],
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
                      { staticClass: "row" },
                      _vm._l(_vm.elements, function(el, i) {
                        return _c(
                          "div",
                          {
                            key: el.id,
                            staticClass: "col-12 col-md-6 col-lg-3 mb-4"
                          },
                          [
                            _c("div", { staticClass: "card" }, [
                              _c("div", { staticClass: "card-body" }, [
                                _c("div", { staticClass: "text-center mb-2" }, [
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "avatar rounded-circle bg-default object-fit--cover",
                                      staticStyle: {
                                        height: "80px",
                                        width: "80px"
                                      }
                                    },
                                    [
                                      el.avatar
                                        ? _c("img", {
                                            attrs: {
                                              src:
                                                _vm.imagesUrl +
                                                "/advisors/" +
                                                el.avatar,
                                              alt: el.name
                                            }
                                          })
                                        : _c(
                                            "span",
                                            {
                                              staticStyle: {
                                                "font-size": "2.5rem",
                                                "font-weight": "medium"
                                              }
                                            },
                                            [_vm._v(_vm._s(el.avatar_initials))]
                                          )
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("h3", [
                                  _c(
                                    "span",
                                    { staticClass: "font-weight-normal" },
                                    [_vm._v("Nombre:")]
                                  ),
                                  _vm._v(
                                    "\n                " +
                                      _vm._s(el.name) +
                                      "\n              "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("h3", [
                                  _c(
                                    "span",
                                    { staticClass: "font-weight-normal" },
                                    [_vm._v("Email:")]
                                  ),
                                  _vm._v(
                                    "\n                " +
                                      _vm._s(el.email) +
                                      "\n              "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("h3", [
                                  _c(
                                    "span",
                                    { staticClass: "font-weight-normal" },
                                    [_vm._v("Móvil:")]
                                  ),
                                  _vm._v(
                                    "\n                " +
                                      _vm._s(el.mobile_masked) +
                                      "\n              "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("h3", [
                                  _c(
                                    "span",
                                    { staticClass: "font-weight-normal" },
                                    [_vm._v("Código SAP:")]
                                  ),
                                  _vm._v(
                                    "\n                " +
                                      _vm._s(
                                        el.sap_code
                                          ? el.sap_code
                                          : "No registrado"
                                      ) +
                                      "\n              "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("h3", [
                                  _c(
                                    "span",
                                    { staticClass: "font-weight-normal" },
                                    [
                                      _vm._v(
                                        "Tiene acceso al Sistema de Asesores:"
                                      )
                                    ]
                                  ),
                                  _vm._v(
                                    "\n                " +
                                      _vm._s(el.tps_status ? "Sí" : "No") +
                                      "\n              "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "mt-4 text-center" }, [
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
                                  el.can_delete
                                    ? _c(
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
                                    : _c(
                                        "button",
                                        {
                                          directives: [
                                            {
                                              name: "b-tooltip",
                                              rawName: "v-b-tooltip.hover",
                                              modifiers: { hover: true }
                                            }
                                          ],
                                          staticClass:
                                            "btn btn-sm btn-secondary",
                                          attrs: {
                                            title: _vm.messageCantDelete
                                          }
                                        },
                                        [_vm._v("Eliminar")]
                                      ),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "btn btn-inverse-primary btn-sm",
                                      on: {
                                        click: function($event) {
                                          return _vm.editCredentials(el.id)
                                        }
                                      }
                                    },
                                    [_vm._v("Credenciales S. Asesores")]
                                  )
                                ])
                              ])
                            ])
                          ]
                        )
                      }),
                      0
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
                      text: "Actualizar",
                      "request-server": _vm.requestSubmit
                    },
                    on: { click: _vm.submitCredentials }
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
            value: _vm.modalCredentials,
            callback: function($$v) {
              _vm.modalCredentials = $$v
            },
            expression: "modalCredentials"
          }
        },
        [
          _c("template", { slot: "modal-title" }, [
            _c("div", { staticClass: "text-primary h2" }, [
              _vm._v("Credenciales Asesor")
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
                        return _vm.submitCredentials($event)
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
                              attrs: { for: "email" }
                            },
                            [_vm._v("Email")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.element.email,
                                expression: "element.email"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", disabled: "", id: "email" },
                            domProps: { value: _vm.element.email },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.element,
                                  "email",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-12" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticClass: "font-weight-bold",
                              attrs: { for: "tps_password" }
                            },
                            [_vm._v("Contraseña")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.element.tps_password,
                                expression: "element.tps_password"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "password", id: "tps_password" },
                            domProps: { value: _vm.element.tps_password },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.element,
                                  "tps_password",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "small",
                            {
                              staticClass: "form-text d-block",
                              staticStyle: { opacity: "0.7" }
                            },
                            [_vm._v("Mínimo de longitud 8 caracteres")]
                          ),
                          _vm._v(" "),
                          _vm.errors && _vm.errors.tps_password
                            ? _c(
                                "label",
                                {
                                  staticClass: "mt-2 text-danger text-sm",
                                  attrs: { for: "tps_password" }
                                },
                                [_vm._v(_vm._s(_vm.errors.tps_password[0]))]
                              )
                            : _vm._e()
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-12" },
                        [
                          _c(
                            "b-form-checkbox",
                            {
                              attrs: {
                                size: "lg",
                                name: "check-button",
                                switch: ""
                              },
                              model: {
                                value: _vm.element.tps_status,
                                callback: function($$v) {
                                  _vm.$set(_vm.element, "tps_status", $$v)
                                },
                                expression: "element.tps_status"
                              }
                            },
                            [
                              _vm._v(
                                "\n              Puede acceder al Sistema de Asesores\n            "
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ])
                  ]
                )
              ])
        ],
        2
      ),
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
              _vm._v(_vm._s(_vm.title) + " Asesor")
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
                            [_vm._v("Avatar:")]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _vm.element.avatar
                              ? _c("div", { staticClass: "col text-center" }, [
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "avatar avatar-lg rounded-circle bg-default object-fit--cover",
                                      staticStyle: {
                                        height: "80px",
                                        width: "80px"
                                      }
                                    },
                                    [
                                      _c("img", {
                                        attrs: {
                                          src:
                                            _vm.imagesUrl +
                                            "/advisors/" +
                                            _vm.element.avatar,
                                          alt: _vm.element.name
                                        }
                                      })
                                    ]
                                  )
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
                          _vm.errors && _vm.errors.avatar
                            ? _c(
                                "label",
                                {
                                  staticClass:
                                    "text-danger text-sm d-block mt-2",
                                  attrs: { for: "image" }
                                },
                                [_vm._v(_vm._s(_vm.errors.avatar[0]))]
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
                            "label",
                            {
                              staticClass: "font-weight-bold",
                              attrs: { for: "email" }
                            },
                            [_vm._v("Email")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.element.email,
                                expression: "element.email"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", id: "email" },
                            domProps: { value: _vm.element.email },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.element,
                                  "email",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors && _vm.errors.email
                            ? _c(
                                "label",
                                {
                                  staticClass: "mt-2 text-danger text-sm",
                                  attrs: { for: "email" }
                                },
                                [_vm._v(_vm._s(_vm.errors.email[0]))]
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
                              attrs: { for: "mobile" }
                            },
                            [_vm._v("Móvil")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.element.mobile,
                                expression: "element.mobile"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", id: "mobile" },
                            domProps: { value: _vm.element.mobile },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.element,
                                  "mobile",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "small",
                            {
                              staticClass: "form-text d-block",
                              staticStyle: { opacity: "0.7" }
                            },
                            [_vm._v("Ingrese un número de 9 dígitos")]
                          ),
                          _vm._v(" "),
                          _vm.errors && _vm.errors.mobile
                            ? _c(
                                "label",
                                {
                                  staticClass: "mt-2 text-danger text-sm",
                                  attrs: { for: "mobile" }
                                },
                                [_vm._v(_vm._s(_vm.errors.mobile[0]))]
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
                              attrs: { for: "sap_code" }
                            },
                            [_vm._v("Código SAP")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.element.sap_code,
                                expression: "element.sap_code"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", id: "sap_code" },
                            domProps: { value: _vm.element.sap_code },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.element,
                                  "sap_code",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "p",
                            {
                              staticClass: "mb-0 small",
                              staticStyle: { opacity: "0.7" }
                            },
                            [
                              _vm._v(
                                "Código utilizado para determinar si la separación del inmueble se le asigna al asesor, cuando se anida el parámatero a la URL de separación de inmueble"
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _vm.errors && _vm.errors.sap_code
                            ? _c(
                                "label",
                                {
                                  staticClass: "mt-2 text-danger text-sm",
                                  attrs: { for: "sap_code" }
                                },
                                [_vm._v(_vm._s(_vm.errors.sap_code[0]))]
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
          element: "asesor",
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

/***/ "./resources/js/views/administration/Advisors.vue":
/*!********************************************************!*\
  !*** ./resources/js/views/administration/Advisors.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Advisors_vue_vue_type_template_id_808d2096___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Advisors.vue?vue&type=template&id=808d2096& */ "./resources/js/views/administration/Advisors.vue?vue&type=template&id=808d2096&");
/* harmony import */ var _Advisors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Advisors.vue?vue&type=script&lang=js& */ "./resources/js/views/administration/Advisors.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Advisors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Advisors_vue_vue_type_template_id_808d2096___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Advisors_vue_vue_type_template_id_808d2096___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/administration/Advisors.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/administration/Advisors.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/administration/Advisors.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Advisors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Advisors.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/administration/Advisors.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Advisors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/administration/Advisors.vue?vue&type=template&id=808d2096&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/administration/Advisors.vue?vue&type=template&id=808d2096& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Advisors_vue_vue_type_template_id_808d2096___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Advisors.vue?vue&type=template&id=808d2096& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/administration/Advisors.vue?vue&type=template&id=808d2096&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Advisors_vue_vue_type_template_id_808d2096___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Advisors_vue_vue_type_template_id_808d2096___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);