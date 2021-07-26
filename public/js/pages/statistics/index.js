(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/pages/statistics/index"],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/statistics/Index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/statistics/Index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var v_charts_lib_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! v-charts/lib/style.css */ "./node_modules/v-charts/lib/style.css");
/* harmony import */ var v_charts_lib_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(v_charts_lib_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var v_charts_lib_line_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! v-charts/lib/line.common */ "./node_modules/v-charts/lib/line.common.js");
/* harmony import */ var v_charts_lib_line_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(v_charts_lib_line_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var v_charts_lib_pie_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! v-charts/lib/pie.common */ "./node_modules/v-charts/lib/pie.common.js");
/* harmony import */ var v_charts_lib_pie_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(v_charts_lib_pie_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var v_charts_lib_bar_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! v-charts/lib/bar.common */ "./node_modules/v-charts/lib/bar.common.js");
/* harmony import */ var v_charts_lib_bar_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(v_charts_lib_bar_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_filters_DateRange__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/filters/DateRange */ "./resources/js/components/filters/DateRange.vue");
/* harmony import */ var _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/BreadCrumb */ "./resources/js/components/BreadCrumb.vue");
/* harmony import */ var vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-loading-skeleton */ "./node_modules/vue-loading-skeleton/dist/vue-loading-skeleton.esm.js");
/* harmony import */ var _components_NoData_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/NoData.vue */ "./resources/js/components/NoData.vue");
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








/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    routeGetAll: String
  },
  components: {
    Skeleton: vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_6__["Skeleton"],
    FilterDateRange: _components_filters_DateRange__WEBPACK_IMPORTED_MODULE_4__["default"],
    BreadCrumb: _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_5__["default"],
    VeLine: v_charts_lib_line_common__WEBPACK_IMPORTED_MODULE_1___default.a,
    VePie: v_charts_lib_pie_common__WEBPACK_IMPORTED_MODULE_2___default.a,
    VeBar: v_charts_lib_bar_common__WEBPACK_IMPORTED_MODULE_3___default.a,
    NoData: _components_NoData_vue__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  data: function data() {
    return {
      chartLegendPie: {
        bottom: 10,
        left: "center"
      },
      filterDate: {
        active: {
          text: "Hoy",
          value: "today"
        },
        range: null
      },
      loadingEls: false,
      charts: {
        total_sales: {
          chartData: {},
          chartDataForeign: {}
        }
      },
      colors: ["#1762e6", "#44CCF2", "#0728FA", "#060726", "#254B85"],
      chartSettings: {
        yAxisType: ["KMB"],
        area: true
      },
      chartSettingsPie: {},
      chartExtend: {
        series: {
          smooth: false,
          type: "line"
        }
      }
    };
  },
  methods: {
    getEls: function getEls() {
      var _this = this;

      this.loadingEls = true;
      axios.get(this.routeGetAll, {
        params: _objectSpread({
          date: this.filterDate.active.value
        }, this.filterDate.range ? {
          range: this.filterDate.range
        } : {})
      }).then(function (response) {
        _this.charts = response.data;
        _this.loadingEls = false;
      })["catch"](function (error) {});
    }
  },
  created: function created() {
    this.getEls();
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/statistics/Index.vue?vue&type=template&id=308c8ec5&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/statistics/Index.vue?vue&type=template&id=308c8ec5& ***!
  \**************************************************************************************************************************************************************************************************************/
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
                { staticClass: "col-12 col-lg-7" },
                [
                  _c("BreadCrumb", {
                    attrs: {
                      title: "Estadísticas",
                      parent: "",
                      active: "Ventas y Estadísticas"
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
        _c(
          "div",
          { staticClass: "col-12 mb-4" },
          [
            _c("FilterDateRange", {
              attrs: {
                activeParent: _vm.filterDate.active,
                active: _vm.filterDate.active,
                range: _vm.filterDate.range,
                removeParent: "all"
              },
              on: {
                "update:active": function($event) {
                  return _vm.$set(_vm.filterDate, "active", $event)
                },
                "update:range": function($event) {
                  return _vm.$set(_vm.filterDate, "range", $event)
                },
                get: function($event) {
                  return _vm.getEls()
                }
              }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-12 stretch-card  mb-4" }, [
          _c("div", { staticClass: "card w-100" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("h2", { staticClass: "text-primary" }, [
                _vm._v("Ventas Totales")
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "Reporte de ventas totales según el rango de fecha seleccionado y divido según la moneda."
                )
              ]),
              _vm._v(" "),
              _vm.loadingEls
                ? _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col-12 col-lg-6" },
                      [_c("skeleton", { attrs: { height: "350px" } })],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-12 col-lg-6" },
                      [_c("skeleton", { attrs: { height: "350px" } })],
                      1
                    )
                  ])
                : _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col-12 col-lg-6" },
                      [
                        _c("h1", [
                          _vm._v(_vm._s(_vm.charts.total_sales.chartData.value))
                        ]),
                        _vm._v(" "),
                        _c("ve-line", {
                          attrs: {
                            "legend-visible": false,
                            data: _vm.charts.total_sales.chartData,
                            settings: _vm.chartSettings,
                            colors: _vm.colors,
                            loading: _vm.loadingEls,
                            extend: _vm.chartExtend
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-12 col-lg-6" },
                      [
                        _c("h1", [
                          _vm._v(
                            _vm._s(
                              _vm.charts.total_sales.chartDataForeign.value
                            )
                          )
                        ]),
                        _vm._v(" "),
                        _c("ve-line", {
                          attrs: {
                            "legend-visible": false,
                            data: _vm.charts.total_sales.chartDataForeign,
                            settings: _vm.chartSettings,
                            colors: _vm.colors,
                            loading: _vm.loadingEls,
                            extend: _vm.chartExtend
                          }
                        })
                      ],
                      1
                    )
                  ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-12 col-lg-6 stretch-card mb-4" }, [
          _c("div", { staticClass: "card w-100" }, [
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _c("h2", { staticClass: "text-primary" }, [
                  _vm._v("Reservas Totales")
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "Reporte del total de las reservas totales según el rango de fecha seleccionado."
                  )
                ]),
                _vm._v(" "),
                _vm.loadingEls
                  ? _c("skeleton", { attrs: { height: "350px" } })
                  : _c(
                      "div",
                      [
                        _c("h1", [
                          _vm._v(_vm._s(_vm.charts.total_orders.value))
                        ]),
                        _vm._v(" "),
                        _c("ve-line", {
                          attrs: {
                            "legend-visible": false,
                            data: _vm.charts.total_orders,
                            settings: _vm.chartSettings,
                            colors: _vm.colors,
                            loading: _vm.loadingEls,
                            extend: _vm.chartExtend
                          }
                        })
                      ],
                      1
                    )
              ],
              1
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-12 col-lg-6 stretch-card  mb-4" }, [
          _c("div", { staticClass: "card w-100" }, [
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _c("h2", { staticClass: "text-primary" }, [
                  _vm._v("Reservas por Proyecto")
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "Reporte del total de las reservas por Proyecto según el rango de fecha seleccionado."
                  )
                ]),
                _vm._v(" "),
                _vm.loadingEls
                  ? _c("skeleton", { attrs: { height: "300px" } })
                  : _c(
                      "div",
                      [
                        _c("div", { staticClass: "card mb-4" }, [
                          _c(
                            "table",
                            { staticClass: "table align-items-center" },
                            [
                              _c("thead", { staticClass: "thead-light" }, [
                                _c("tr", [
                                  _c("th", { staticClass: "border-0" }, [
                                    _vm._v("Nombre")
                                  ]),
                                  _vm._v(" "),
                                  _c("th", { staticClass: "border-0" }, [
                                    _vm._v("Total")
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "tbody",
                                _vm._l(
                                  _vm.charts.reservers_per_project.rows,
                                  function(el, i) {
                                    return _c("tr", { key: i }, [
                                      _c("td", [_vm._v(_vm._s(el.name_es))]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(el.value))])
                                    ])
                                  }
                                ),
                                0
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("ve-pie", {
                          staticStyle: { "margin-top": "-50px" },
                          attrs: {
                            data: _vm.charts.reservers_per_project,
                            legend: _vm.chartLegendPie,
                            colors: _vm.colors,
                            settings: _vm.chartSettingsPie
                          }
                        })
                      ],
                      1
                    )
              ],
              1
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-12 col-lg-12 mb-4" }, [
          _c("div", { staticClass: "card w-100  mb-4" }, [
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _c("h2", { staticClass: "text-primary" }, [
                  _vm._v("Reservas por Tipo")
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "Reporte descriptivo de los inmuebles reservados por Tipo según el rango de fecha seleccionado."
                  )
                ]),
                _vm._v(" "),
                _vm.loadingEls
                  ? _c("skeleton", { attrs: { height: "300px" } })
                  : _c("div", [
                      _c("div", { staticClass: "card w-100" }, [
                        _c(
                          "table",
                          { staticClass: "table align-items-center" },
                          [
                            _c("thead", { staticClass: "thead-light" }, [
                              _c("tr", [
                                _c("th", { staticClass: "border-0" }, [
                                  _vm._v("Nombre")
                                ]),
                                _vm._v(" "),
                                _c("th", { staticClass: "border-0" }, [
                                  _vm._v("Total")
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c(
                              "tbody",
                              _vm._l(
                                _vm.charts.reservers_per_type.rows,
                                function(el, i) {
                                  return _c("tr", { key: i }, [
                                    _c("td", [_vm._v(_vm._s(el.name))]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(_vm._s(el.value))])
                                  ])
                                }
                              ),
                              0
                            )
                          ]
                        )
                      ])
                    ])
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card w-100" }, [
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _c("h2", { staticClass: "text-primary" }, [
                  _vm._v("Reservas por Inmuebles")
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "Reporte descriptivo de los inmuebles reservados según el rango de fecha seleccionado."
                  )
                ]),
                _vm._v(" "),
                _vm.loadingEls
                  ? _c("skeleton", { attrs: { height: "300px" } })
                  : _c("div", [
                      _c("div", { staticClass: "card w-100" }, [
                        _c(
                          "table",
                          { staticClass: "table align-items-center" },
                          [
                            _c("thead", { staticClass: "thead-light" }, [
                              _c("tr", [
                                _c("th", { staticClass: "border-0" }, [
                                  _vm._v("Descripción")
                                ]),
                                _vm._v(" "),
                                _c("th", { staticClass: "border-0" }, [
                                  _vm._v("Proyecto")
                                ]),
                                _vm._v(" "),
                                _c("th", { staticClass: "border-0" }, [
                                  _vm._v("Tipología")
                                ]),
                                _vm._v(" "),
                                _c("th", { staticClass: "border-0" }, [
                                  _vm._v("Tipo")
                                ]),
                                _vm._v(" "),
                                _c("th", { staticClass: "border-0" }, [
                                  _vm._v("Precio")
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _vm.charts.reservers_per_tipology.rows.length
                              ? [
                                  _c(
                                    "tbody",
                                    _vm._l(
                                      _vm.charts.reservers_per_tipology.rows,
                                      function(el, i) {
                                        return _c("tr", { key: i }, [
                                          _c("td", [_vm._v(_vm._s(el.name))]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(_vm._s(el.project))
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(_vm._s(el.tipology))
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [_vm._v(_vm._s(el.tipo))]),
                                          _vm._v(" "),
                                          _c("td", [_vm._v(_vm._s(el.price))])
                                        ])
                                      }
                                    ),
                                    0
                                  )
                                ]
                              : _c("tbody", [
                                  _c("tr", [
                                    _c(
                                      "td",
                                      { attrs: { colspan: "5" } },
                                      [_c("NoData")],
                                      1
                                    )
                                  ])
                                ])
                          ],
                          2
                        )
                      ])
                    ])
              ],
              1
            )
          ])
        ])
      ])
    ])
  ])
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

/***/ "./resources/js/views/statistics/Index.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/statistics/Index.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_308c8ec5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=308c8ec5& */ "./resources/js/views/statistics/Index.vue?vue&type=template&id=308c8ec5&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/statistics/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_308c8ec5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_308c8ec5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/statistics/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/statistics/Index.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/statistics/Index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/statistics/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/statistics/Index.vue?vue&type=template&id=308c8ec5&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/statistics/Index.vue?vue&type=template&id=308c8ec5& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_308c8ec5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=308c8ec5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/statistics/Index.vue?vue&type=template&id=308c8ec5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_308c8ec5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_308c8ec5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);