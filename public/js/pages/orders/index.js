(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/pages/orders/index"],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/filters/Projects.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/filters/Projects.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    activeParent: Object,
    removeParent: String,
    projects: Array
  },
  data: function data() {
    return {
      active: []
    };
  },
  components: {},
  watch: {
    active: function active(newValue, oldValue) {
      this.$emit("update:active", newValue);
      this.$emit("get");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/filters/StatusTransactions.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/filters/StatusTransactions.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    activeParent: Object,
    removeParent: String,
    transactions: Array
  },
  data: function data() {
    return {
      active: []
    };
  },
  components: {},
  watch: {
    active: function active(newValue, oldValue) {
      this.$emit("update:active", newValue);
      this.$emit("get");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/orders/Index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/orders/Index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Button */ "./resources/js/components/Button.vue");
/* harmony import */ var vue2_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue2-datepicker */ "./node_modules/vue2-datepicker/lib/index.js");
/* harmony import */ var vue2_datepicker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue2_datepicker__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_filters_DateRange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/filters/DateRange */ "./resources/js/components/filters/DateRange.vue");
/* harmony import */ var _components_filters_Projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/filters/Projects */ "./resources/js/components/filters/Projects.vue");
/* harmony import */ var _components_filters_StatusTransactions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/filters/StatusTransactions */ "./resources/js/components/filters/StatusTransactions.vue");
/* harmony import */ var _components_DataTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/DataTable */ "./resources/js/components/DataTable.vue");
/* harmony import */ var _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/BreadCrumb */ "./resources/js/components/BreadCrumb.vue");
/* harmony import */ var vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-loading-skeleton */ "./node_modules/vue-loading-skeleton/dist/vue-loading-skeleton.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

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








/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    elementParent: Object,
    imagesUrl: String,
    routeReturn: String,
    routeGetAll: String,
    route: String,
    allExport: String,
    filterExport: String,
    projects: Array,
    transactions: Array
  },
  data: function data() {
    return {
      q: null,
      errors: {},
      exportOptions: {
        total: true,
        range: null
      },
      options: [{
        text: "Total",
        value: true
      }, {
        text: "Rango Personalizado",
        value: false
      }],
      modalExport: false,
      project: {},
      elements: {},
      filterProjects: {
        active: []
      },
      filterTransactions: {
        active: []
      },
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
      loadingGetAll: false,
      loadingGet: false,
      requestExport: false
    };
  },
  components: {
    Button: _components_Button__WEBPACK_IMPORTED_MODULE_0__["default"],
    Skeleton: vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_7__["Skeleton"],
    BreadCrumb: _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_6__["default"],
    DataTable: _components_DataTable__WEBPACK_IMPORTED_MODULE_5__["default"],
    FilterDateRange: _components_filters_DateRange__WEBPACK_IMPORTED_MODULE_2__["default"],
    FilterProjects: _components_filters_Projects__WEBPACK_IMPORTED_MODULE_3__["default"],
    FilterStatusTransactions: _components_filters_StatusTransactions__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  methods: {
    restoreExport: function restoreExport() {
      this.exportOptions = {
        total: true,
        range: null
      };
      this.modalExport = false;
    },
    allExportFunction: function allExportFunction() {
      var _this = this;

      this.requestExport = true;
      axios.get(this.allExport, {
        responseType: "arraybuffer" //necesaario

      }).then(function (response) {
        var downloadUrl = window.URL.createObjectURL(new Blob([response.data]));
        var link = document.createElement("a");
        link.href = downloadUrl;
        link.setAttribute("download", "Líder Órdenes.xlsx");
        document.body.appendChild(link);
        link.click();
        link.remove();
        _this.requestExport = false;
      })["catch"](function (error) {
        _this.requestExport = false;
      });
    },
    filterExportFunction: function filterExportFunction() {
      var _this2 = this;

      this.requestExport = true;
      var fd = new FormData();

      if (this.exportOptions.range && this.exportOptions.range[0]) {
        fd.append("from", this.exportOptions.range[0]);
      }

      if (this.exportOptions.range && this.exportOptions.range[1]) {
        fd.append("to", this.exportOptions.range[1]);
      }

      axios.post(this.filterExport, fd, {
        responseType: "arraybuffer" //necesaario

      }).then(function (response) {
        var downloadUrl = window.URL.createObjectURL(new Blob([response.data]));
        var link = document.createElement("a");
        link.href = downloadUrl;
        link.setAttribute("download", "Líder Órdenes.xlsx");
        document.body.appendChild(link);
        link.click();
        link.remove();
        _this2.requestExport = false;
      })["catch"](function (error) {
        _this2.requestExport = false;

        if (error.response.status === 422) {
          _this2.errors = {
            range: ["Ingrese un rango válido"]
          };
          return;
        }
      });
    },
    exportData: function exportData() {
      this.modalExport = true;
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
      window.location.href = this.route + '/' + id;
    },
    getEls: function getEls(page, itemsPerPage) {
      var _this3 = this;

      var q = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      this.loadingGetAll = true;
      var url = this.routeGetAll + "?page=" + page + "&itemsPerPage=" + itemsPerPage;

      if (q) {
        //url = url + "&q=" + q;
        this.q = q;
      } else {
        this.q = null;
      }

      axios.get(url, {
        params: _objectSpread(_objectSpread(_objectSpread(_objectSpread({
          date: this.filterDate.active.value
        }, this.q ? {
          q: this.q
        } : {}), this.filterDate.range ? {
          range: this.filterDate.range
        } : {}), this.filterProjects.active ? {
          projects: this.filterProjects.active
        } : {}), this.filterTransactions.active ? {
          transactions: this.filterTransactions.active
        } : {})
      }).then(function (response) {
        _this3.elements = response.data;
        _this3.loadingGetAll = false;
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
      var _this4 = this;

      this.loadingGet = true;
      axios.get(this.route + "/json/get/" + id).then(function (response) {
        _this4.element = response.data;
        _this4.loadingGet = false;
      })["catch"](function (error) {});
    }
  },
  created: function created() {
    this.getEls(1, this.elementsPerPage);
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Button.vue?vue&type=style&index=0&id=e0422746&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Button.vue?vue&type=style&index=0&id=e0422746&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.loading-svg[data-v-e0422746]{\n    fill: currentColor;\n    stroke: currentColor;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Button.vue?vue&type=style&index=0&id=e0422746&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Button.vue?vue&type=style&index=0&id=e0422746&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Button.vue?vue&type=style&index=0&id=e0422746&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Button.vue?vue&type=style&index=0&id=e0422746&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Button.vue?vue&type=template&id=e0422746&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Button.vue?vue&type=template&id=e0422746&scoped=true& ***!
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
                staticClass: "ml-1 loading-svg",
                attrs: {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "20",
                  height: "20",
                  viewBox: "0 0 40 40"
                }
              },
              [
                _c("g", { attrs: { fill: "none", "fill-rule": "evenodd" } }, [
                  _c(
                    "g",
                    {
                      attrs: {
                        transform: "translate(1 1)",
                        "stroke-width": "3"
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/filters/Projects.vue?vue&type=template&id=4a0bc90e&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/filters/Projects.vue?vue&type=template&id=4a0bc90e& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
    "b-dropdown",
    {
      ref: "dropdown",
      attrs: {
        left: "",
        id: "dropdown-text",
        "menu-class": ["border", "shadow-none"],
        variant: !_vm.active.length ? "inverse-light" : "inverse-primary",
        "toggle-class": []
      },
      scopedSlots: _vm._u([
        {
          key: "button-content",
          fn: function() {
            return [
              _c("jam-building", {
                staticClass: "current-color",
                staticStyle: { "margin-top": "-4px" },
                attrs: { height: "18px", width: "18px" }
              }),
              _vm._v(" "),
              _c("span", {}, [_vm._v("Proyectos")])
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
        _vm._l(_vm.projects, function(i) {
          return _c(
            "b-form-checkbox",
            {
              key: i.id,
              attrs: { id: "checkbox" + i.id, value: i.id },
              model: {
                value: _vm.active,
                callback: function($$v) {
                  _vm.active = $$v
                },
                expression: "active"
              }
            },
            [_vm._v("\n      " + _vm._s(i.name_es) + "\n      ")]
          )
        }),
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/filters/StatusTransactions.vue?vue&type=template&id=587c4226&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/filters/StatusTransactions.vue?vue&type=template&id=587c4226& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
    "b-dropdown",
    {
      ref: "dropdown",
      attrs: {
        left: "",
        id: "dropdown-text",
        "menu-class": ["border", "shadow-none"],
        variant: !_vm.active.length ? "inverse-light" : "inverse-primary",
        "toggle-class": []
      },
      scopedSlots: _vm._u([
        {
          key: "button-content",
          fn: function() {
            return [
              _c("jam-coin", {
                staticClass: "current-color",
                staticStyle: { "margin-top": "-4px" },
                attrs: { height: "18px", width: "18px" }
              }),
              _vm._v(" "),
              _c("span", {}, [_vm._v("Estado de Pago")])
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
        _vm._l(_vm.transactions, function(i) {
          return _c(
            "b-form-checkbox",
            {
              key: i.id,
              attrs: { id: "checkboxsta" + i.id, value: i.id },
              model: {
                value: _vm.active,
                callback: function($$v) {
                  _vm.active = $$v
                },
                expression: "active"
              }
            },
            [_vm._v("\n      " + _vm._s(i.name) + "\n    ")]
          )
        }),
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/orders/Index.vue?vue&type=template&id=56c27cf2&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/orders/Index.vue?vue&type=template&id=56c27cf2& ***!
  \**********************************************************************************************************************************************************************************************************/
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
                        title: "Ventas",
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
                  "Nombres, Apellidos, Número Documento o Código de Orden",
                "button-update": false,
                "button-read": true,
                "button-delete": false,
                "button-disable": false,
                "loading-prop": _vm.loadingGetAll,
                "q-prop": _vm.q,
                "entries-prop": _vm.elementsPerPage
              },
              on: {
                get: _vm.getEls,
                read: _vm.showEl,
                "update:qProp": function($event) {
                  _vm.q = $event
                },
                "update:q-prop": function($event) {
                  _vm.q = $event
                },
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
                _c("div", { staticClass: "row mb-3" }, [
                  _c("div", { staticClass: "col-12 col-md-9 mb-2 mb-md-0" }, [
                    _c(
                      "div",
                      { staticClass: "d-inline-block mb-2 mb-sm-0 mr-2" },
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
                              return _vm.getEls(1, _vm.elementsPerPage, _vm.q)
                            }
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "d-inline-block mb-2 mb-sm-0 mr-2" },
                      [
                        _c("FilterProjects", {
                          attrs: {
                            projects: _vm.projects,
                            active: _vm.filterProjects.active
                          },
                          on: {
                            "update:active": function($event) {
                              return _vm.$set(
                                _vm.filterProjects,
                                "active",
                                $event
                              )
                            },
                            get: function($event) {
                              return _vm.getEls(1, _vm.elementsPerPage, _vm.q)
                            }
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "d-inline-block mb-2 mb-sm-0" },
                      [
                        _c("FilterStatusTransactions", {
                          attrs: {
                            transactions: _vm.transactions,
                            active: _vm.filterTransactions.active
                          },
                          on: {
                            "update:active": function($event) {
                              return _vm.$set(
                                _vm.filterTransactions,
                                "active",
                                $event
                              )
                            },
                            get: function($event) {
                              return _vm.getEls(1, _vm.elementsPerPage, _vm.q)
                            }
                          }
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12 col-md-3 text-right" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-icon btn-inverse-primary",
                        style: _vm.elements.total == 0 ? "opacity: 0.75" : "",
                        attrs: {
                          type: "button",
                          disabled: _vm.elements.total == 0 ? true : false
                        },
                        on: { click: _vm.exportData }
                      },
                      [
                        _c(
                          "span",
                          { staticClass: "btn-inner--icon" },
                          [
                            _c("jam-download", { staticClass: "current-color" })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("span", { staticClass: "btn-inner--text" }, [
                          _vm._v(
                            "Exportar " +
                              _vm._s(
                                _vm.elements.total == 0 ? "(0 Órdenes)" : ""
                              )
                          )
                        ])
                      ]
                    )
                  ])
                ])
              ])
            ],
            2
          )
        ],
        1
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
          on: { close: _vm.restoreExport },
          scopedSlots: _vm._u([
            {
              key: "modal-footer",
              fn: function(ref) {
                var ok = ref.ok
                return [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-secondary",
                      attrs: { type: "button" },
                      on: { click: _vm.restoreExport }
                    },
                    [_vm._v("Cancelar")]
                  ),
                  _vm._v(" "),
                  _vm.exportOptions.total
                    ? _c("Button", {
                        attrs: {
                          classes: ["btn-inverse-primary"],
                          text: "Confirmar",
                          "request-server": _vm.requestExport
                        },
                        on: { click: _vm.allExportFunction }
                      })
                    : _c("Button", {
                        attrs: {
                          classes: ["btn-inverse-primary"],
                          text: "Confirmar",
                          "request-server": _vm.requestExport
                        },
                        on: { click: _vm.filterExportFunction }
                      })
                ]
              }
            }
          ]),
          model: {
            value: _vm.modalExport,
            callback: function($$v) {
              _vm.modalExport = $$v
            },
            expression: "modalExport"
          }
        },
        [
          _c("template", { slot: "modal-title" }, [
            _c("div", { staticClass: "text-primary h2" }, [_vm._v("Exportar")])
          ]),
          _vm._v(" "),
          _c("template", { slot: "modal-header-close" }, [
            _c(
              "button",
              {
                staticClass: "btn p-0 bg-transparent",
                attrs: { type: "button" },
                on: { click: _vm.restoreExport }
              },
              [_c("jam-close")],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-12" },
              [
                _c("p", [_vm._v("Seleccione una opción:")]),
                _vm._v(" "),
                _c("b-form-radio-group", {
                  attrs: {
                    id: "radio-group-1",
                    name: "radios",
                    plain: "",
                    stacked: "",
                    options: _vm.options
                  },
                  model: {
                    value: _vm.exportOptions.total,
                    callback: function($$v) {
                      _vm.$set(_vm.exportOptions, "total", $$v)
                    },
                    expression: "exportOptions.total"
                  }
                }),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !_vm.exportOptions.total,
                        expression: "!exportOptions.total"
                      }
                    ],
                    staticClass: "mt-3"
                  },
                  [
                    _c("label", { attrs: { for: "range" } }, [
                      _vm._v("Indique el rango de fecha a Exportar")
                    ]),
                    _vm._v(" "),
                    _c(
                      "date-picker",
                      {
                        ref: "datepicker",
                        attrs: {
                          placeholder: "Personalizado",
                          shortcuts: [],
                          lang: "es",
                          id: "range",
                          "value-type": "format",
                          "input-class": "form-control",
                          format: "HH:mm DD-MM-YYYY",
                          "range-separator": "-",
                          width: "100%",
                          type: "datetime",
                          range: "",
                          "show-second": false
                        },
                        model: {
                          value: _vm.exportOptions.range,
                          callback: function($$v) {
                            _vm.$set(_vm.exportOptions, "range", $$v)
                          },
                          expression: "exportOptions.range"
                        }
                      },
                      [
                        _vm._t("icon-calendar", function() {
                          return [_c("jam-users")]
                        })
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _vm.errors && _vm.errors.range
                      ? _c(
                          "label",
                          {
                            staticClass: "text-danger text-sm d-block mt-2",
                            attrs: { for: "range" }
                          },
                          [_vm._v(_vm._s(_vm.errors.range[0]))]
                        )
                      : _vm._e()
                  ],
                  1
                )
              ],
              1
            )
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

/***/ "./resources/js/components/Button.vue":
/*!********************************************!*\
  !*** ./resources/js/components/Button.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Button_vue_vue_type_template_id_e0422746_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button.vue?vue&type=template&id=e0422746&scoped=true& */ "./resources/js/components/Button.vue?vue&type=template&id=e0422746&scoped=true&");
/* harmony import */ var _Button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button.vue?vue&type=script&lang=js& */ "./resources/js/components/Button.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Button_vue_vue_type_style_index_0_id_e0422746_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button.vue?vue&type=style&index=0&id=e0422746&scoped=true&lang=css& */ "./resources/js/components/Button.vue?vue&type=style&index=0&id=e0422746&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Button_vue_vue_type_template_id_e0422746_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Button_vue_vue_type_template_id_e0422746_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e0422746",
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

/***/ "./resources/js/components/Button.vue?vue&type=style&index=0&id=e0422746&scoped=true&lang=css&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/Button.vue?vue&type=style&index=0&id=e0422746&scoped=true&lang=css& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_style_index_0_id_e0422746_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Button.vue?vue&type=style&index=0&id=e0422746&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Button.vue?vue&type=style&index=0&id=e0422746&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_style_index_0_id_e0422746_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_style_index_0_id_e0422746_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_style_index_0_id_e0422746_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_style_index_0_id_e0422746_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Button.vue?vue&type=template&id=e0422746&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Button.vue?vue&type=template&id=e0422746&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_template_id_e0422746_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Button.vue?vue&type=template&id=e0422746&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Button.vue?vue&type=template&id=e0422746&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_template_id_e0422746_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_template_id_e0422746_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/components/filters/Projects.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/filters/Projects.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Projects_vue_vue_type_template_id_4a0bc90e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Projects.vue?vue&type=template&id=4a0bc90e& */ "./resources/js/components/filters/Projects.vue?vue&type=template&id=4a0bc90e&");
/* harmony import */ var _Projects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Projects.vue?vue&type=script&lang=js& */ "./resources/js/components/filters/Projects.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Projects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Projects_vue_vue_type_template_id_4a0bc90e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Projects_vue_vue_type_template_id_4a0bc90e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/filters/Projects.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/filters/Projects.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/filters/Projects.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Projects.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/filters/Projects.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/filters/Projects.vue?vue&type=template&id=4a0bc90e&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/filters/Projects.vue?vue&type=template&id=4a0bc90e& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_template_id_4a0bc90e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Projects.vue?vue&type=template&id=4a0bc90e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/filters/Projects.vue?vue&type=template&id=4a0bc90e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_template_id_4a0bc90e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_template_id_4a0bc90e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/filters/StatusTransactions.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/filters/StatusTransactions.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StatusTransactions_vue_vue_type_template_id_587c4226___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StatusTransactions.vue?vue&type=template&id=587c4226& */ "./resources/js/components/filters/StatusTransactions.vue?vue&type=template&id=587c4226&");
/* harmony import */ var _StatusTransactions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StatusTransactions.vue?vue&type=script&lang=js& */ "./resources/js/components/filters/StatusTransactions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _StatusTransactions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StatusTransactions_vue_vue_type_template_id_587c4226___WEBPACK_IMPORTED_MODULE_0__["render"],
  _StatusTransactions_vue_vue_type_template_id_587c4226___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/filters/StatusTransactions.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/filters/StatusTransactions.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/filters/StatusTransactions.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatusTransactions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./StatusTransactions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/filters/StatusTransactions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatusTransactions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/filters/StatusTransactions.vue?vue&type=template&id=587c4226&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/filters/StatusTransactions.vue?vue&type=template&id=587c4226& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StatusTransactions_vue_vue_type_template_id_587c4226___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./StatusTransactions.vue?vue&type=template&id=587c4226& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/filters/StatusTransactions.vue?vue&type=template&id=587c4226&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StatusTransactions_vue_vue_type_template_id_587c4226___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StatusTransactions_vue_vue_type_template_id_587c4226___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/orders/Index.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/orders/Index.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_56c27cf2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=56c27cf2& */ "./resources/js/views/orders/Index.vue?vue&type=template&id=56c27cf2&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/orders/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_56c27cf2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_56c27cf2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/orders/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/orders/Index.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/orders/Index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/orders/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/orders/Index.vue?vue&type=template&id=56c27cf2&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/orders/Index.vue?vue&type=template&id=56c27cf2& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_56c27cf2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=56c27cf2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/orders/Index.vue?vue&type=template&id=56c27cf2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_56c27cf2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_56c27cf2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);