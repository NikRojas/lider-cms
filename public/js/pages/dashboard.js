(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/pages/dashboard"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Loader.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Loader.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    iconClasses: Array,
    iconoEstilos: Object,
    texto: String,
    styles: Object,
    iconWidth: {
      type: Number,
      required: true
    },
    iconHeight: {
      type: Number,
      required: true
    }
  }
});

/***/ }),

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/Index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/Index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var v_charts_lib_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! v-charts/lib/style.css */ "./node_modules/v-charts/lib/style.css");
/* harmony import */ var v_charts_lib_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(v_charts_lib_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var v_charts_lib_line_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! v-charts/lib/line.common */ "./node_modules/v-charts/lib/line.common.js");
/* harmony import */ var v_charts_lib_line_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(v_charts_lib_line_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var v_charts_lib_bar_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! v-charts/lib/bar.common */ "./node_modules/v-charts/lib/bar.common.js");
/* harmony import */ var v_charts_lib_bar_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(v_charts_lib_bar_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/BreadCrumb */ "./resources/js/components/BreadCrumb.vue");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Loader */ "./resources/js/components/Loader.vue");
/* harmony import */ var vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-loading-skeleton */ "./node_modules/vue-loading-skeleton/dist/vue-loading-skeleton.esm.js");
/* harmony import */ var simplebar_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! simplebar-vue */ "./node_modules/simplebar-vue/dist/simplebar-vue.esm.js");
/* harmony import */ var simplebar_dist_simplebar_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! simplebar/dist/simplebar.min.css */ "./node_modules/simplebar/dist/simplebar.min.css");
/* harmony import */ var simplebar_dist_simplebar_min_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(simplebar_dist_simplebar_min_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_filters_DateRange__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/filters/DateRange */ "./resources/js/components/filters/DateRange.vue");
/* harmony import */ var _components_NoData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/NoData */ "./resources/js/components/NoData.vue");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//










/*import ChartBar from "../components/charts/Bar.js";
import ChartLine from "../components/charts/Line.js";*/

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    imagesUrl: String
  },
  components: {
    //Footer,
    NoData: _components_NoData__WEBPACK_IMPORTED_MODULE_9__["default"],
    BreadCrumb: _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_3__["default"],
    Loader: _components_Loader__WEBPACK_IMPORTED_MODULE_4__["default"],
    FilterDateRange: _components_filters_DateRange__WEBPACK_IMPORTED_MODULE_8__["default"],
    Skeleton: vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_5__["Skeleton"],
    VeLine: v_charts_lib_line_common__WEBPACK_IMPORTED_MODULE_1___default.a,
    simplebar: simplebar_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    VeBar: v_charts_lib_bar_common__WEBPACK_IMPORTED_MODULE_2___default.a
    /*ChartBar,
    ChartLine*/

  },
  data: function data() {
    return {
      statistics: {},
      loading: false,
      loadingByDate: false,
      charts: {},
      filterDate: {
        active: {
          text: "Hoy",
          value: "today"
        },
        range: null
      },
      colors: ["#1762e6", "#44CCF2", "#0728FA", "#060726", "#254B85"],

      /*chartSettings: {
        yAxisType: ["normal"],
        //area: true,
      },*/

      /*chartExtend: {
        series: {
          //smooth: true,
          type: "bar",
        },
      },*/
      chartSettings: {
        //yAxisType: ["normal"],
        area: true
      },
      chartExtendBar: {
        series: {
          //smooth: true,
          type: "bar"
        }
      }
    };
  },
  methods: {
    getStatisticsByDate: function getStatisticsByDate() {
      var _this = this;

      this.loadingByDate = true;
      axios.get("json/dashboard-by-date", {
        params: _objectSpread({
          date: this.filterDate.active.value
        }, this.filterDate.range ? {
          range: this.filterDate.range
        } : {})
      }).then(function (response) {
        _this.charts = response.data;
        _this.loadingByDate = false;
      })["catch"](function (error) {});
    },
    getStatistics: function getStatistics() {
      var _this2 = this;

      this.loading = true;
      axios.get("json/dashboard").then(function (response) {
        _this2.statistics = response.data;
        _this2.loading = false;
      })["catch"](function (error) {});
    }
  },
  created: function created() {
    this.getStatistics();
    this.getStatisticsByDate();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/Index.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/Index.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tab--dashboard .nav-pills {\n  border-bottom: 1px solid #e9ecef;\n}\n.tab--dashboard .nav-link.active {\n  border-bottom: 2px solid #1762e6 !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/Index.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/Index.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/Index.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Loader.vue?vue&type=template&id=e79ec684&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Loader.vue?vue&type=template&id=e79ec684& ***!
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
    "div",
    { staticClass: "component-loader text-sm w-100", style: _vm.styles },
    [
      _c(
        "div",
        {
          staticClass: "d-flex align-items-center justify-content-center h-100"
        },
        [
          _vm.texto ? _c("span", [_vm._v(_vm._s(_vm.texto))]) : _vm._e(),
          _vm._v(" "),
          _c(
            "svg",
            {
              class: _vm.iconClasses,
              style: _vm.iconoEstilos,
              attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                width: _vm.iconWidth,
                height: _vm.iconHeight,
                viewBox: "0 0 40 40",
                stroke: "#525f7f"
              }
            },
            [
              _c("g", { attrs: { fill: "none", "fill-rule": "evenodd" } }, [
                _c(
                  "g",
                  {
                    attrs: { transform: "translate(1 1)", "stroke-width": "2" }
                  },
                  [
                    _c("circle", {
                      attrs: { "stroke-opacity": "1", cx: "0", cy: "0", r: "0" }
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
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/Index.vue?vue&type=template&id=5e553948&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/Index.vue?vue&type=template&id=5e553948& ***!
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
                    attrs: { title: "Dashboard", active: "Dashboard" }
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
          { staticClass: "col-12 mb-4 mb-lg-0 col-lg-8" },
          [
            _c("div", { staticClass: "row mb-4" }, [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col text-right" },
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
                        return _vm.getStatisticsByDate()
                      }
                    }
                  })
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c(
              "b-tabs",
              {
                staticClass: "tab--dashboard",
                attrs: {
                  pills: "",
                  "nav-wrapper-class": "mb-4",
                  lazy: "",
                  "nav-class": "",
                  "content-class": ""
                }
              },
              [
                _c(
                  "b-tab",
                  {
                    attrs: {
                      title: "Cotizaciones por Proyectos",
                      active: "",
                      "title-link-class":
                        "border-0 pt-0 bg-transparent shadow-none",
                      "title-item-class": "my-0"
                    }
                  },
                  [
                    _c("div", { staticClass: "card" }, [
                      _c(
                        "div",
                        { staticClass: "card-body" },
                        [
                          _vm.loadingByDate
                            ? _c("skeleton", { attrs: { height: "300px" } })
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "pt-4" },
                            [
                              _c("ve-line", {
                                attrs: {
                                  data: _vm.charts.leadsQuotations,
                                  settings: _vm.chartSettings,
                                  colors: _vm.colors,
                                  loading: _vm.loadingByDate
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "b-tab",
                  {
                    attrs: {
                      title: "Cita Online por Proyecto",
                      "title-link-class":
                        "border-0 pt-0 bg-transparent shadow-none",
                      "title-item-class": "my-0"
                    }
                  },
                  [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-12" }, [
                        _c("div", { staticClass: "card" }, [
                          _c(
                            "div",
                            { staticClass: "card-body" },
                            [
                              _vm.loadingByDate
                                ? _c("skeleton", { attrs: { height: "300px" } })
                                : _vm._e(),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "pt-4" },
                                [
                                  _c("ve-line", {
                                    attrs: {
                                      data: _vm.charts.leadsVideocall,
                                      settings: _vm.chartSettings,
                                      colors: _vm.colors,
                                      loading: _vm.loadingByDate
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ])
                      ])
                    ])
                  ]
                )
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "col-12 col-lg-4" }, [
          _c("h2", [_vm._v("Estadísticas")]),
          _vm._v(" "),
          _c("div", { staticClass: "row mb-4" }, [
            _c("div", { staticClass: "col-12" }, [
              _c("div", { staticClass: "card" }, [
                _vm.loading
                  ? _c("div", [
                      _c("table", { staticClass: "table align-items-center" }, [
                        _c("thead", { staticClass: "thead-light" }, [
                          _c(
                            "tr",
                            _vm._l(3, function(i) {
                              return _c(
                                "th",
                                { key: i, staticClass: "border-0" },
                                [_c("Skeleton")],
                                1
                              )
                            }),
                            0
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          _vm._l(3, function(i) {
                            return _c(
                              "tr",
                              { key: i },
                              _vm._l(3, function(j) {
                                return _c("td", { key: j }, [_c("Skeleton")], 1)
                              }),
                              0
                            )
                          }),
                          0
                        )
                      ])
                    ])
                  : _c("div", [
                      _c(
                        "div",
                        { staticClass: "table-responsive" },
                        [
                          _c(
                            "simplebar",
                            {
                              staticStyle: { height: "350px" },
                              attrs: { "data-simplebar-auto-hide": "false" }
                            },
                            [
                              _c(
                                "table",
                                { staticClass: "table align-items-center" },
                                [
                                  _c("thead", { staticClass: "thead-light" }, [
                                    _c("tr", [
                                      _c("th", { staticClass: "border-0" }, [
                                        _vm._v("Proyecto")
                                      ]),
                                      _vm._v(" "),
                                      _c("th", { staticClass: "border-0" }, [
                                        _vm._v("Estado")
                                      ]),
                                      _vm._v(" "),
                                      _c("th", { staticClass: "border-0" }, [
                                        _vm._v("Total Tipologías")
                                      ]),
                                      _vm._v(" "),
                                      _c("th", { staticClass: "border-0" }, [
                                        _vm._v("Tipologías Disponibles")
                                      ])
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _vm.statistics.projects.length
                                    ? _c(
                                        "tbody",
                                        _vm._l(
                                          _vm.statistics.projects,
                                          function(el) {
                                            return _c("tr", { key: el.id }, [
                                              _c("td", [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "media align-items-center"
                                                  },
                                                  [
                                                    _c(
                                                      "span",
                                                      { staticClass: "mr-3" },
                                                      [
                                                        _c("img", {
                                                          attrs: {
                                                            height: "55",
                                                            width: "auto",
                                                            src:
                                                              _vm.imagesUrl +
                                                              "/projects/" +
                                                              el
                                                                .images_format[0]
                                                          }
                                                        })
                                                      ]
                                                    ),
                                                    _vm._v(
                                                      _vm._s(el.name_es) +
                                                        "\n                            "
                                                    )
                                                  ]
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("td", [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "badge badge-pill badge-info badge-lg"
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                              " +
                                                        _vm._s(
                                                          el.status_rel.name_es
                                                        ) +
                                                        "\n                            "
                                                    )
                                                  ]
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v(
                                                  "\n                            " +
                                                    _vm._s(
                                                      el.tipologies_rel.length
                                                    ) +
                                                    "\n                          "
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v(
                                                  "\n                            " +
                                                    _vm._s(
                                                      el.tipologiesActive
                                                    ) +
                                                    "\n                          "
                                                )
                                              ])
                                            ])
                                          }
                                        ),
                                        0
                                      )
                                    : _c("tbody", [
                                        _c("tr", [
                                          _c(
                                            "td",
                                            {
                                              staticClass: "text-center py-5",
                                              attrs: { colspan: "4" }
                                            },
                                            [
                                              _c("NoData", {
                                                attrs: {
                                                  "show-title": false,
                                                  customText:
                                                    "No hay proyectos registrados"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ])
                                      ])
                                ]
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-12 col-lg-6 mb-4" }, [
              _c("div", { staticClass: "card card-stats shadow" }, [
                _c("div", { staticClass: "card-body" }, [
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col" },
                      [
                        _c(
                          "h4",
                          { staticClass: "card-title text-uppercase mb-0" },
                          [
                            _vm._v(
                              "\n                      Post Publicados (Activos)\n                    "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _vm.loading
                          ? _c("Loader", {
                              attrs: {
                                iconClasses: ["my-2"],
                                iconHeight: 20,
                                iconWidth: 20,
                                estilo: { display: "inline-block" }
                              }
                            })
                          : _c(
                              "span",
                              { staticClass: "h2 font-weight-bold mb-0" },
                              [_vm._v(_vm._s(_vm.statistics.posts))]
                            )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-auto" }, [
                      _c(
                        "div",
                        { staticClass: "text-primary" },
                        [
                          _c("jam-newspaper", {
                            staticClass: "current-color",
                            attrs: { height: "24px", width: "24px" }
                          })
                        ],
                        1
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._m(1)
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-12 col-lg-6 mb-4" }, [
              _c("div", { staticClass: "card card-stats shadow" }, [
                _c("div", { staticClass: "card-body" }, [
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col" },
                      [
                        _c(
                          "h4",
                          { staticClass: "card-title text-uppercase mb-0" },
                          [
                            _vm._v(
                              "\n                      Suscriptores\n                    "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _vm.loading
                          ? _c("Loader", {
                              attrs: {
                                iconClasses: ["my-2"],
                                iconHeight: 20,
                                iconWidth: 20,
                                estilo: { display: "inline-block" }
                              }
                            })
                          : _c(
                              "span",
                              { staticClass: "h2 font-weight-bold mb-0" },
                              [_vm._v(_vm._s(_vm.statistics.suscribers))]
                            )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-auto" }, [
                      _c(
                        "div",
                        { staticClass: "text-primary" },
                        [
                          _c("jam-database", {
                            staticClass: "current-color",
                            attrs: { height: "24px", width: "24px" }
                          })
                        ],
                        1
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._m(2)
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-12 col-lg-6 mb-4" }, [
              _c("div", { staticClass: "card card-stats shadow" }, [
                _c("div", { staticClass: "card-body" }, [
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col" },
                      [
                        _c(
                          "h4",
                          { staticClass: "card-title text-uppercase mb-0" },
                          [
                            _vm._v(
                              "\n                      Asesores\n                    "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _vm.loading
                          ? _c("Loader", {
                              attrs: {
                                iconClasses: ["my-2"],
                                iconHeight: 20,
                                iconWidth: 20,
                                estilo: { display: "inline-block" }
                              }
                            })
                          : _c(
                              "span",
                              { staticClass: "h2 font-weight-bold mb-0" },
                              [_vm._v(_vm._s(_vm.statistics.advisors))]
                            )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-auto" }, [
                      _c(
                        "div",
                        { staticClass: "text-primary" },
                        [
                          _c("jam-user-circle", {
                            staticClass: "current-color",
                            attrs: { height: "24px", width: "24px" }
                          })
                        ],
                        1
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._m(3)
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-12 col-lg-6 mb-4" }, [
              _c("div", { staticClass: "card card-stats shadow" }, [
                _c("div", { staticClass: "card-body" }, [
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col" },
                      [
                        _c(
                          "h4",
                          { staticClass: "card-title text-uppercase mb-0" },
                          [
                            _vm._v(
                              "\n                      Entidades Financieras\n                    "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _vm.loading
                          ? _c("Loader", {
                              attrs: {
                                iconClasses: ["my-2"],
                                iconHeight: 20,
                                iconWidth: 20,
                                estilo: { display: "inline-block" }
                              }
                            })
                          : _c(
                              "span",
                              { staticClass: "h2 font-weight-bold mb-0" },
                              [_vm._v(_vm._s(_vm.statistics.banks))]
                            )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-auto" }, [
                      _c(
                        "div",
                        { staticClass: "text-primary" },
                        [
                          _c("jam-credit-card", {
                            staticClass: "current-color",
                            attrs: { height: "24px", width: "24px" }
                          })
                        ],
                        1
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._m(4)
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col" }, [
      _c("h2", [_vm._v("Resumen de Leads")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "mt-3 mb-0 text-muted text-sm" }, [
      _c("span", { staticClass: "text-nowrap" }, [
        _vm._v("Registrado(s) totales")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "mt-3 mb-0 text-muted text-sm" }, [
      _c("span", { staticClass: "text-nowrap" }, [
        _vm._v("Registrado(s) totales")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "mt-3 mb-0 text-muted text-sm" }, [
      _c("span", { staticClass: "text-nowrap" }, [
        _vm._v("Registrado(s) totales")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "mt-3 mb-0 text-muted text-sm" }, [
      _c("span", { staticClass: "text-nowrap" }, [
        _vm._v("Registrado(s) totales")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Loader.vue":
/*!********************************************!*\
  !*** ./resources/js/components/Loader.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Loader_vue_vue_type_template_id_e79ec684___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Loader.vue?vue&type=template&id=e79ec684& */ "./resources/js/components/Loader.vue?vue&type=template&id=e79ec684&");
/* harmony import */ var _Loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loader.vue?vue&type=script&lang=js& */ "./resources/js/components/Loader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Loader_vue_vue_type_template_id_e79ec684___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Loader_vue_vue_type_template_id_e79ec684___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Loader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Loader.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Loader.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Loader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Loader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Loader.vue?vue&type=template&id=e79ec684&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Loader.vue?vue&type=template&id=e79ec684& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_template_id_e79ec684___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Loader.vue?vue&type=template&id=e79ec684& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Loader.vue?vue&type=template&id=e79ec684&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_template_id_e79ec684___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_template_id_e79ec684___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/views/dashboard/Index.vue":
/*!************************************************!*\
  !*** ./resources/js/views/dashboard/Index.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_5e553948___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=5e553948& */ "./resources/js/views/dashboard/Index.vue?vue&type=template&id=5e553948&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/views/dashboard/Index.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_5e553948___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_5e553948___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard/Index.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/dashboard/Index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/dashboard/Index.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/dashboard/Index.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/Index.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/dashboard/Index.vue?vue&type=template&id=5e553948&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/dashboard/Index.vue?vue&type=template&id=5e553948& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_5e553948___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=5e553948& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/Index.vue?vue&type=template&id=5e553948&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_5e553948___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_5e553948___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);