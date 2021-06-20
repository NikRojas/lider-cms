(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/pages/complaints-book"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/filters/DateRange.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/filters/DateRange.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue2_datepicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue2-datepicker */ "./node_modules/vue2-datepicker/lib/index.js");
/* harmony import */ var vue2_datepicker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue2_datepicker__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    activeParent: Object,
    removeParent: String
  },
  components: {
    DatePicker: vue2_datepicker__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      range: null,
      filters: [{
        text: "Cualquier Fecha",
        value: "all"
      }, {
        text: "Hoy",
        value: "today"
      }, {
        text: "Últimos 7 días",
        value: "7"
      }, {
        text: "Últimos 30 días",
        value: "30"
      }, {
        text: "Últimos 90 días",
        value: "90"
      }, {
        text: "Este Año",
        value: "this_year"
      }],
      active: {
        text: "Cualquier Fecha",
        value: "all"
      }
    };
  },
  methods: {
    handleFilterRange: function handleFilterRange() {
      var _this = this;

      if (!this.range[0]) {
        if (this.removeParent) {
          this.active = {
            text: "Hoy",
            value: "today"
          };
        } else {
          this.active = {
            text: "Cualquier Fecha",
            value: "all"
          };
        }

        this.handleFilter(this.active);
        return false;
      }

      setTimeout(function () {
        _this.active = {
          text: _this.$refs.datepicker.text,
          value: "range"
        };
      }, 50);
      this.$refs.dropdown.hide(true);
    },
    handleFilter: function handleFilter(i) {
      this.range = [];
      this.active = i;
      this.$refs.dropdown.hide(true);
    }
  },
  watch: {
    activeParent: {
      immediate: true,
      handler: function handler(newValue) {
        if (newValue) {
          this.active = newValue;
        }
      }
    },
    removeParent: {
      immediate: true,
      handler: function handler(newValue) {
        if (newValue) {
          this.filters = this.filters.filter(function (el) {
            return el.value != newValue;
          });
        }
      }
    },
    active: function active(newValue, oldValue) {
      this.$emit("update:active", newValue);
      this.$emit("get");
    },
    range: function range(newValue, oldValue) {
      this.$emit("update:range", newValue);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ComplaintsBook.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ComplaintsBook.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_filters_DateRange__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/filters/DateRange */ "./resources/js/components/filters/DateRange.vue");
/* harmony import */ var _components_DataTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/DataTable */ "./resources/js/components/DataTable.vue");
/* harmony import */ var _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/BreadCrumb */ "./resources/js/components/BreadCrumb.vue");
/* harmony import */ var _components_modals_Destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/modals/Destroy */ "./resources/js/components/modals/Destroy.vue");
/* harmony import */ var vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-loading-skeleton */ "./node_modules/vue-loading-skeleton/dist/vue-loading-skeleton.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    imagesUrl: String,
    routeReturn: String,
    routeGetAll: String,
    route: String
  },
  data: function data() {
    return {
      project: {},
      elements: {},
      filterDate: {
        active: {},
        range: null
      },
      element: {
        document_type_rel: {},
        claim_type_rel: {},
        good_contracted_rel: {},
        ubigeo_rel: {}
      },
      elementsPerPage: 10,
      modalShow: false,
      modalDestroy: false,
      loadingGetAll: false,
      loadingGet: false,
      requestSubmit: false
    };
  },
  components: {
    Skeleton: vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_4__["Skeleton"],
    BreadCrumb: _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_2__["default"],
    DataTable: _components_DataTable__WEBPACK_IMPORTED_MODULE_1__["default"],
    Destroy: _components_modals_Destroy__WEBPACK_IMPORTED_MODULE_3__["default"],
    FilterDateRange: _components_filters_DateRange__WEBPACK_IMPORTED_MODULE_0__["default"]
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
    restoreEl: function restoreEl() {
      this.element = {
        document_type_rel: {},
        claim_type_rel: {},
        ubigeo_rel: {},
        good_contracted_rel: {}
      }, this.modalDestroy = this.modalShow = false;
    },
    showEl: function showEl(id) {
      this.modalShow = true;
      this.getEl(id);
    },
    deleteEl: function deleteEl(id) {
      this.modalDestroy = true;
      this.getEl(id);
    },
    getEls: function getEls(page, itemsPerPage) {
      var _this2 = this;

      var q = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      this.loadingGetAll = true;
      var url = this.routeGetAll + "?page=" + page + "&itemsPerPage=" + itemsPerPage;

      if (q) {
        url = url + "&q=" + q;
      }

      axios.get(url, {
        params: _objectSpread({
          date: this.filterDate.active.value
        }, this.filterDate.range ? {
          range: this.filterDate.range
        } : {})
      }).then(function (response) {
        _this2.elements = response.data;
        _this2.loadingGetAll = false;
      })["catch"](function (error) {});
    },
    restore: function restore() {
      this.elements = {};
      this.element = {
        document_type_rel: {},
        claim_type_rel: {},
        good_contracted_rel: {},
        ubigeo_rel: {}
      };
      this.modalDestroy = this.modalShow = false;
      this.getEls(1, this.elementsPerPage);
    },
    getEl: function getEl(id) {
      var _this3 = this;

      this.loadingGet = true;
      axios.get(this.route + "/json/get/" + id).then(function (response) {
        _this3.element = response.data;
        _this3.loadingGet = false;
      })["catch"](function (error) {});
    }
  },
  created: function created() {
    this.getEls(1, this.elementsPerPage);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/filters/DateRange.vue?vue&type=template&id=52dcee80&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/filters/DateRange.vue?vue&type=template&id=52dcee80& ***!
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
    {},
    [
      _c(
        "b-dropdown",
        {
          ref: "dropdown",
          attrs: {
            left: "",
            id: "dropdown-text",
            "menu-class": ["border", "shadow-none"],
            variant:
              _vm.active.value == "all" ? "inverse-light" : "inverse-primary",
            "toggle-class": []
          },
          scopedSlots: _vm._u([
            {
              key: "button-content",
              fn: function() {
                return [
                  _c("jam-calendar", {
                    staticClass: "current-color",
                    staticStyle: { "margin-top": "-4px" },
                    attrs: { height: "18px", width: "18px" }
                  }),
                  _vm._v(" "),
                  _c("span", {}, [_vm._v(_vm._s(_vm.active.text))])
                ]
              },
              proxy: true
            }
          ])
        },
        [
          _vm._v(" "),
          _c(
            "b-dropdown-text",
            {
              staticClass: "px-2",
              staticStyle: { width: "16rem" },
              attrs: { tag: "div" }
            },
            [
              _vm._l(_vm.filters, function(i) {
                return _c(
                  "button",
                  {
                    key: i.value,
                    staticClass: "btn mb-1 btn-sm btn-block",
                    class:
                      _vm.active.value == i.value
                        ? "btn-primary"
                        : "btn-inverse-primary",
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.handleFilter(i)
                      }
                    }
                  },
                  [_vm._v(_vm._s(i.text))]
                )
              }),
              _vm._v(" "),
              _c(
                "date-picker",
                {
                  ref: "datepicker",
                  attrs: {
                    placeholder: "Personalizado",
                    shortcuts: [],
                    lang: "es",
                    "input-class": "form-control mt-1",
                    format: "D MMM YYYY",
                    "range-separator": "-",
                    width: "100%",
                    range: ""
                  },
                  on: { change: _vm.handleFilterRange },
                  model: {
                    value: _vm.range,
                    callback: function($$v) {
                      _vm.range = $$v
                    },
                    expression: "range"
                  }
                },
                [
                  _c("jam-calendar", {
                    staticClass: "current-color mt-2",
                    attrs: { slot: "calendar-icon", height: "18", width: "18" },
                    slot: "calendar-icon"
                  })
                ],
                1
              )
            ],
            2
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ComplaintsBook.vue?vue&type=template&id=32607690&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ComplaintsBook.vue?vue&type=template&id=32607690& ***!
  \************************************************************************************************************************************************************************************************************/
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
                  { staticClass: "col-12 col-lg-7" },
                  [
                    _c("BreadCrumb", {
                      attrs: {
                        title: "Libro de Reclamaciones",
                        parent: "",
                        active: "Libro de Reclamaciones"
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
          _c(
            "DataTable",
            {
              attrs: {
                object: _vm.elements,
                placeholder:
                  "Nombre, Apellido, Número Documento, Código de Reclamo",
                "button-update": false,
                "button-read": true,
                "button-delete": true,
                "button-disable": false,
                "loading-prop": _vm.loadingGetAll,
                "entries-prop": _vm.elementsPerPage
              },
              on: {
                get: _vm.getEls,
                read: _vm.showEl,
                delete: _vm.deleteEl,
                "update:entriesProp": function($event) {
                  _vm.elementsPerPage = $event
                },
                "update:entries-prop": function($event) {
                  _vm.elementsPerPage = $event
                }
              }
            },
            [
              _c("template", { slot: "filters" }, [
                _c(
                  "div",
                  { staticClass: "mb-2" },
                  [
                    _c("FilterDateRange", {
                      attrs: {
                        active: _vm.filterDate.active,
                        range: _vm.filterDate.range
                      },
                      on: {
                        "update:active": function($event) {
                          return _vm.$set(_vm.filterDate, "active", $event)
                        },
                        "update:range": function($event) {
                          return _vm.$set(_vm.filterDate, "range", $event)
                        },
                        get: function($event) {
                          return _vm.getEls(1, _vm.elementsPerPage)
                        }
                      }
                    })
                  ],
                  1
                )
              ])
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("destroy", {
        attrs: {
          element: "Lead",
          open: _vm.modalDestroy,
          "loading-get": _vm.loadingGet,
          "loading-submit": _vm.requestSubmit
        },
        on: { cancel: _vm.restoreEl, submit: _vm.destroyConfirm }
      }),
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
          on: { close: _vm.restoreEl },
          scopedSlots: _vm._u([
            {
              key: "modal-footer",
              fn: function(ref) {
                var ok = ref.ok
                return [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-inverse-primary",
                      attrs: { type: "button" },
                      on: { click: _vm.restoreEl }
                    },
                    [_vm._v("Ok")]
                  )
                ]
              }
            }
          ]),
          model: {
            value: _vm.modalShow,
            callback: function($$v) {
              _vm.modalShow = $$v
            },
            expression: "modalShow"
          }
        },
        [
          _c("template", { slot: "modal-title" }, [
            _c("div", { staticClass: "text-primary h2" }, [
              _vm._v("Detalle del Reclamo")
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
            ? _c("div", [
                _c("div", { staticClass: "w-25 mb-1" }, [_c("Skeleton")], 1),
                _vm._v(" "),
                _c("div", { staticClass: "w-75" }, [_c("Skeleton")], 1),
                _vm._v(" "),
                _c("div", { staticClass: "w-25 mb-1" }, [_c("Skeleton")], 1),
                _vm._v(" "),
                _c("div", { staticClass: "w-75" }, [_c("Skeleton")], 1),
                _vm._v(" "),
                _c("div", { staticClass: "w-25 mb-1" }, [_c("Skeleton")], 1),
                _vm._v(" "),
                _c("div", { staticClass: "w-75" }, [_c("Skeleton")], 1)
              ])
            : _c("div", [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-12 text-center mb-1" }, [
                    _c("h2", { staticClass: "mb-0" }, [
                      _vm._v("Código de Registro")
                    ]),
                    _vm._v(" "),
                    _c("h3", { staticClass: "font-weight-normal" }, [
                      _vm._v(_vm._s(_vm.element.code))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12 text-right" }, [
                    _c("p", [
                      _c("span", { staticClass: "font-weight-bold" }, [
                        _vm._v("Registrado el: ")
                      ]),
                      _vm._v(_vm._s(_vm.element.created_at_format))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12" }, [
                    _c("h2", { staticClass: "mb-3" }, [
                      _vm._v("Identificación del consumidor reclamante")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { staticClass: "font-weight-bold" }, [
                        _vm._v("Nombre Completo:")
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          _vm._s(_vm.element.name) +
                            " " +
                            _vm._s(_vm.element.lastname)
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { staticClass: "font-weight-bold" }, [
                        _vm._v("Documento:")
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          _vm._s(_vm.element.document_type_rel.description) +
                            " - " +
                            _vm._s(_vm.element.document_number)
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { staticClass: "font-weight-bold" }, [
                        _vm._v("Email:")
                      ]),
                      _vm._v(" "),
                      _c("p", [_vm._v(_vm._s(_vm.element.email))])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { staticClass: "font-weight-bold" }, [
                        _vm._v("Móvil:")
                      ]),
                      _vm._v(" "),
                      _c("p", [_vm._v(_vm._s(_vm.element.mobile_formatted))])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { staticClass: "font-weight-bold" }, [
                        _vm._v("Dirección:")
                      ]),
                      _vm._v(" "),
                      _c("p", [_vm._v(_vm._s(_vm.element.address))])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-4" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { staticClass: "font-weight-bold" }, [
                        _vm._v("Departamento:")
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(_vm._s(_vm.element.ubigeo_rel.department))
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-4" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { staticClass: "font-weight-bold" }, [
                        _vm._v("Provincia:")
                      ]),
                      _vm._v(" "),
                      _c("p", [_vm._v(_vm._s(_vm.element.ubigeo_rel.province))])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-4" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { staticClass: "font-weight-bold" }, [
                        _vm._v("Distrito:")
                      ]),
                      _vm._v(" "),
                      _c("p", [_vm._v(_vm._s(_vm.element.ubigeo_rel.district))])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12" }, [
                    _c("h2", { staticClass: "mb-3 mt-2" }, [
                      _vm._v("Identificación del bien contratado")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { staticClass: "font-weight-bold" }, [
                        _vm._v("Monto del bien objeto de Reclamo:")
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(_vm._s(_vm.element.good_contracted_amount))
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { staticClass: "font-weight-bold" }, [
                        _vm._v("Identificación del Bien contratado:")
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(_vm._s(_vm.element.good_contracted_rel.name))
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { staticClass: "font-weight-bold" }, [
                        _vm._v("Descripción:")
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(_vm._s(_vm.element.good_contracted_description))
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12" }, [
                    _c("h2", { staticClass: "mb-3 mt-2" }, [
                      _vm._v("Detalle de la reclamación")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { staticClass: "font-weight-bold" }, [
                        _vm._v("Tipo de reclamación:")
                      ]),
                      _vm._v(" "),
                      _c("p", [_vm._v(_vm._s(_vm.element.claim_type_rel.name))])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { staticClass: "font-weight-bold" }, [
                        _vm._v("Detalle:")
                      ]),
                      _vm._v(" "),
                      _c("p", [_vm._v(_vm._s(_vm.element.claim_detail))])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { staticClass: "font-weight-bold" }, [
                        _vm._v("Pedido:")
                      ]),
                      _vm._v(" "),
                      _c("p", [_vm._v(_vm._s(_vm.element.claim_order))])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12 mt-2" }, [
                    _c("h2", { staticClass: "mb-3" }, [
                      _vm._v("Acciones adoptadas por el proveedor")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { staticClass: "font-weight-bold" }, [
                        _vm._v("Detalle:")
                      ]),
                      _vm._v(" "),
                      _vm.element.provider_detail
                        ? _c("p", [_vm._v(_vm._s(_vm.element.provider_detail))])
                        : _c("p", [_vm._v("No regitrado")])
                    ])
                  ])
                ])
              ])
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/filters/DateRange.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/filters/DateRange.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DateRange_vue_vue_type_template_id_52dcee80___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DateRange.vue?vue&type=template&id=52dcee80& */ "./resources/js/components/filters/DateRange.vue?vue&type=template&id=52dcee80&");
/* harmony import */ var _DateRange_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DateRange.vue?vue&type=script&lang=js& */ "./resources/js/components/filters/DateRange.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DateRange_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DateRange_vue_vue_type_template_id_52dcee80___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DateRange_vue_vue_type_template_id_52dcee80___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/filters/DateRange.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/filters/DateRange.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/filters/DateRange.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DateRange_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DateRange.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/filters/DateRange.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DateRange_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/filters/DateRange.vue?vue&type=template&id=52dcee80&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/filters/DateRange.vue?vue&type=template&id=52dcee80& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DateRange_vue_vue_type_template_id_52dcee80___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DateRange.vue?vue&type=template&id=52dcee80& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/filters/DateRange.vue?vue&type=template&id=52dcee80&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DateRange_vue_vue_type_template_id_52dcee80___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DateRange_vue_vue_type_template_id_52dcee80___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/ComplaintsBook.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/ComplaintsBook.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ComplaintsBook_vue_vue_type_template_id_32607690___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ComplaintsBook.vue?vue&type=template&id=32607690& */ "./resources/js/views/ComplaintsBook.vue?vue&type=template&id=32607690&");
/* harmony import */ var _ComplaintsBook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComplaintsBook.vue?vue&type=script&lang=js& */ "./resources/js/views/ComplaintsBook.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ComplaintsBook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ComplaintsBook_vue_vue_type_template_id_32607690___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ComplaintsBook_vue_vue_type_template_id_32607690___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/ComplaintsBook.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/ComplaintsBook.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/ComplaintsBook.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ComplaintsBook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ComplaintsBook.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ComplaintsBook.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ComplaintsBook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/ComplaintsBook.vue?vue&type=template&id=32607690&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/ComplaintsBook.vue?vue&type=template&id=32607690& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ComplaintsBook_vue_vue_type_template_id_32607690___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ComplaintsBook.vue?vue&type=template&id=32607690& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ComplaintsBook.vue?vue&type=template&id=32607690&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ComplaintsBook_vue_vue_type_template_id_32607690___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ComplaintsBook_vue_vue_type_template_id_32607690___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);