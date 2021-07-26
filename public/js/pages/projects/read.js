(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/pages/projects/read"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/BreadCrumb.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/BreadCrumb.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    showBreadCrumb: {
      "default": true,
      type: Boolean
    },
    title: String,
    parent: String,
    active: String
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/projects/Read.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/projects/Read.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/BreadCrumb */ "./resources/js/components/BreadCrumb.vue");
/* harmony import */ var _components_icons_Pdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/icons/Pdf */ "./resources/js/components/icons/Pdf.vue");
/* harmony import */ var vue_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-carousel */ "./node_modules/vue-carousel/dist/vue-carousel.min.js");
/* harmony import */ var vue_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_carousel__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    PdfIcon: _components_icons_Pdf__WEBPACK_IMPORTED_MODULE_1__["default"],
    Carousel: vue_carousel__WEBPACK_IMPORTED_MODULE_2__["Carousel"],
    Slide: vue_carousel__WEBPACK_IMPORTED_MODULE_2__["Slide"]
  },
  props: {
    projectsRelated: Array,
    appUrl: String,
    elementParent: Object,
    imagesUrl: String,
    filesUrl: String,
    routeReturn: String
  },
  data: function data() {
    return {
      element: {}
    };
  },
  watch: {
    elementParent: {
      immediate: true,
      handler: function handler(newValue) {
        this.element = newValue;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/BreadCrumb.vue?vue&type=style&index=0&id=1645430e&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/BreadCrumb.vue?vue&type=style&index=0&id=1645430e&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.breadcrumb-dark .breadcrumb-item + .breadcrumb-item[data-v-1645430e]::before {\r\n  color: #adb5bd;\n}\n.breadcrumb-item + .breadcrumb-item[data-v-1645430e]::before {\r\n  display: inline-block;\r\n  padding-right: 0.5rem;\r\n  content: \"-\";\r\n  color: #8898aa;\n}\n.bg-transparent[data-v-1645430e] {\r\n  background: transparent;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/BreadCrumb.vue?vue&type=style&index=0&id=1645430e&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/BreadCrumb.vue?vue&type=style&index=0&id=1645430e&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/vue-loader/lib??vue-loader-options!./BreadCrumb.vue?vue&type=style&index=0&id=1645430e&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/BreadCrumb.vue?vue&type=style&index=0&id=1645430e&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/BreadCrumb.vue?vue&type=template&id=1645430e&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/BreadCrumb.vue?vue&type=template&id=1645430e&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    _vm.showBreadCrumb
      ? _c(
          "nav",
          {
            staticClass: "d-lg-inline-block",
            attrs: { "aria-label": "breadcrumb" }
          },
          [
            _c(
              "ol",
              {
                staticClass:
                  "breadcrumb p-0 m-0 breadcrumb-links bg-transparent"
              },
              [
                _c("li", { staticClass: "breadcrumb-item" }, [
                  _c(
                    "a",
                    { attrs: { href: "/dashboard" } },
                    [
                      _c("jam-pie-chart", {
                        attrs: { height: "16", width: "16" }
                      })
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _vm.parent
                  ? _c("li", { staticClass: "breadcrumb-item" }, [
                      _c("a", [_vm._v(_vm._s(_vm.parent))])
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.active
                  ? _c(
                      "li",
                      {
                        staticClass: "breadcrumb-item text-primary",
                        attrs: { "aria-current": "page" }
                      },
                      [_vm._v(_vm._s(_vm.active))]
                    )
                  : _vm._e()
              ]
            )
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _c("h1", { staticClass: "h1 font-weight-bold mb-0" }, [
      _vm._v(_vm._s(_vm.title))
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/icons/Pdf.vue?vue&type=template&id=37b5d022&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/icons/Pdf.vue?vue&type=template&id=37b5d022& ***!
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
    "svg",
    {
      staticStyle: { "enable-background": "new 0 0 56 56" },
      attrs: {
        version: "1.1",
        id: "Capa_1",
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        x: "0px",
        y: "0px",
        height: "50",
        width: "50",
        viewBox: "0 0 56 56",
        "xml:space": "preserve"
      }
    },
    [
      _c("g", [
        _c("path", {
          staticStyle: { fill: "#E9E9E0" },
          attrs: {
            d:
              "M36.985,0H7.963C7.155,0,6.5,0.655,6.5,1.926V55c0,0.345,0.655,1,1.463,1h40.074\r\n\t\tc0.808,0,1.463-0.655,1.463-1V12.978c0-0.696-0.093-0.92-0.257-1.085L37.607,0.257C37.442,0.093,37.218,0,36.985,0z"
          }
        }),
        _vm._v(" "),
        _c("polygon", {
          staticStyle: { fill: "#D9D7CA" },
          attrs: { points: "37.5,0.151 37.5,12 49.349,12 \t" }
        }),
        _vm._v(" "),
        _c("path", {
          staticStyle: { fill: "#CC4B4C" },
          attrs: {
            d:
              "M19.514,33.324L19.514,33.324c-0.348,0-0.682-0.113-0.967-0.326\r\n\t\tc-1.041-0.781-1.181-1.65-1.115-2.242c0.182-1.628,2.195-3.332,5.985-5.068c1.504-3.296,2.935-7.357,3.788-10.75\r\n\t\tc-0.998-2.172-1.968-4.99-1.261-6.643c0.248-0.579,0.557-1.023,1.134-1.215c0.228-0.076,0.804-0.172,1.016-0.172\r\n\t\tc0.504,0,0.947,0.649,1.261,1.049c0.295,0.376,0.964,1.173-0.373,6.802c1.348,2.784,3.258,5.62,5.088,7.562\r\n\t\tc1.311-0.237,2.439-0.358,3.358-0.358c1.566,0,2.515,0.365,2.902,1.117c0.32,0.622,0.189,1.349-0.39,2.16\r\n\t\tc-0.557,0.779-1.325,1.191-2.22,1.191c-1.216,0-2.632-0.768-4.211-2.285c-2.837,0.593-6.15,1.651-8.828,2.822\r\n\t\tc-0.836,1.774-1.637,3.203-2.383,4.251C21.273,32.654,20.389,33.324,19.514,33.324z M22.176,28.198\r\n\t\tc-2.137,1.201-3.008,2.188-3.071,2.744c-0.01,0.092-0.037,0.334,0.431,0.692C19.685,31.587,20.555,31.19,22.176,28.198z\r\n\t\t M35.813,23.756c0.815,0.627,1.014,0.944,1.547,0.944c0.234,0,0.901-0.01,1.21-0.441c0.149-0.209,0.207-0.343,0.23-0.415\r\n\t\tc-0.123-0.065-0.286-0.197-1.175-0.197C37.12,23.648,36.485,23.67,35.813,23.756z M28.343,17.174\r\n\t\tc-0.715,2.474-1.659,5.145-2.674,7.564c2.09-0.811,4.362-1.519,6.496-2.02C30.815,21.15,29.466,19.192,28.343,17.174z\r\n\t\t M27.736,8.712c-0.098,0.033-1.33,1.757,0.096,3.216C28.781,9.813,27.779,8.698,27.736,8.712z"
          }
        }),
        _vm._v(" "),
        _c("path", {
          staticStyle: { fill: "#CC4B4C" },
          attrs: {
            d:
              "M48.037,56H7.963C7.155,56,6.5,55.345,6.5,54.537V39h43v15.537C49.5,55.345,48.845,56,48.037,56z"
          }
        }),
        _vm._v(" "),
        _c("g", [
          _c("path", {
            staticStyle: { fill: "#FFFFFF" },
            attrs: {
              d:
                "M17.385,53h-1.641V42.924h2.898c0.428,0,0.852,0.068,1.271,0.205\r\n\t\t\tc0.419,0.137,0.795,0.342,1.128,0.615c0.333,0.273,0.602,0.604,0.807,0.991s0.308,0.822,0.308,1.306\r\n\t\t\tc0,0.511-0.087,0.973-0.26,1.388c-0.173,0.415-0.415,0.764-0.725,1.046c-0.31,0.282-0.684,0.501-1.121,0.656\r\n\t\t\ts-0.921,0.232-1.449,0.232h-1.217V53z M17.385,44.168v3.992h1.504c0.2,0,0.398-0.034,0.595-0.103\r\n\t\t\tc0.196-0.068,0.376-0.18,0.54-0.335c0.164-0.155,0.296-0.371,0.396-0.649c0.1-0.278,0.15-0.622,0.15-1.032\r\n\t\t\tc0-0.164-0.023-0.354-0.068-0.567c-0.046-0.214-0.139-0.419-0.28-0.615c-0.142-0.196-0.34-0.36-0.595-0.492\r\n\t\t\tc-0.255-0.132-0.593-0.198-1.012-0.198H17.385z"
            }
          }),
          _vm._v(" "),
          _c("path", {
            staticStyle: { fill: "#FFFFFF" },
            attrs: {
              d:
                "M32.219,47.682c0,0.829-0.089,1.538-0.267,2.126s-0.403,1.08-0.677,1.477s-0.581,0.709-0.923,0.937\r\n\t\t\ts-0.672,0.398-0.991,0.513c-0.319,0.114-0.611,0.187-0.875,0.219C28.222,52.984,28.026,53,27.898,53h-3.814V42.924h3.035\r\n\t\t\tc0.848,0,1.593,0.135,2.235,0.403s1.176,0.627,1.6,1.073s0.74,0.955,0.95,1.524C32.114,46.494,32.219,47.08,32.219,47.682z\r\n\t\t\t M27.352,51.797c1.112,0,1.914-0.355,2.406-1.066s0.738-1.741,0.738-3.09c0-0.419-0.05-0.834-0.15-1.244\r\n\t\t\tc-0.101-0.41-0.294-0.781-0.581-1.114s-0.677-0.602-1.169-0.807s-1.13-0.308-1.914-0.308h-0.957v7.629H27.352z"
            }
          }),
          _vm._v(" "),
          _c("path", {
            staticStyle: { fill: "#FFFFFF" },
            attrs: {
              d:
                "M36.266,44.168v3.172h4.211v1.121h-4.211V53h-1.668V42.924H40.9v1.244H36.266z"
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("g"),
      _vm._v(" "),
      _c("g"),
      _vm._v(" "),
      _c("g"),
      _vm._v(" "),
      _c("g"),
      _vm._v(" "),
      _c("g"),
      _vm._v(" "),
      _c("g"),
      _vm._v(" "),
      _c("g"),
      _vm._v(" "),
      _c("g"),
      _vm._v(" "),
      _c("g"),
      _vm._v(" "),
      _c("g"),
      _vm._v(" "),
      _c("g"),
      _vm._v(" "),
      _c("g"),
      _vm._v(" "),
      _c("g"),
      _vm._v(" "),
      _c("g"),
      _vm._v(" "),
      _c("g")
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/projects/Read.vue?vue&type=template&id=0481323c&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/projects/Read.vue?vue&type=template&id=0481323c& ***!
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
                          title: "Proyecto " + _vm.element.name_es,
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
                        staticClass: "btn btn-icon btn-sm btn-inverse-light",
                        attrs: { href: _vm.routeReturn }
                      },
                      [
                        _c(
                          "span",
                          { staticClass: "btn-inner--icon" },
                          [
                            _c("jam-arrow-left", {
                              staticClass: "current-color"
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("span", { staticClass: "btn-inner--text" }, [
                          _vm._v("Regresar")
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
          _c("div", { staticClass: "row mb-4" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "col-12 col-lg-10" }, [
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-body" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-12 col-lg-6 mb-3" }, [
                      _vm._m(1),
                      _vm._v(" "),
                      _c("img", {
                        staticClass: "p-2 bg-dark",
                        attrs: {
                          height: "90",
                          src: _vm.imagesUrl + "/projects/" + _vm.element.logo,
                          alt: ""
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-lg-6 mb-3" }, [
                      _vm._m(2),
                      _vm._v(" "),
                      _c("img", {
                        attrs: {
                          height: "90",
                          src:
                            _vm.imagesUrl +
                            "/projects/" +
                            _vm.element.logo_colour,
                          alt: ""
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-lg-6 mb-3" }, [
                      _c("h3", { staticClass: "mb-1 font-weight-normal" }, [
                        _c(
                          "span",
                          { staticClass: "d-block font-weight-bold" },
                          [_vm._v("Nombre del Proyecto ES:")]
                        ),
                        _vm._v(
                          "\n                    " +
                            _vm._s(_vm.element.name_es) +
                            "\n                  "
                        )
                      ]),
                      _vm._v(" "),
                      _c("h3", { staticClass: "font-weight-normal" }, [
                        _c(
                          "span",
                          { staticClass: "d-block font-weight-bold" },
                          [_vm._v("Nombre del Proyecto EN:")]
                        ),
                        _vm._v(
                          "\n                    " +
                            _vm._s(_vm.element.name_en) +
                            "\n                  "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-lg-6 mb-3" }, [
                      _c("h3", { staticClass: "mb-1 font-weight-normal" }, [
                        _c(
                          "span",
                          { staticClass: "d-block font-weight-bold" },
                          [_vm._v("URL del Proyecto ES:")]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticStyle: { "text-decoration": "underline" },
                            attrs: {
                              target: "_blank",
                              href: _vm.appUrl + "/" + _vm.element.slug_es
                            }
                          },
                          [
                            _vm._v(
                              _vm._s(_vm.appUrl) +
                                "/" +
                                _vm._s(_vm.element.slug_es)
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("h3", { staticClass: "font-weight-normal" }, [
                        _c(
                          "span",
                          { staticClass: "d-block font-weight-bold" },
                          [_vm._v("URL del Proyecto EN:")]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticStyle: { "text-decoration": "underline" },
                            attrs: {
                              target: "_blank",
                              href: _vm.appUrl + "/en/" + _vm.element.slug_en
                            }
                          },
                          [
                            _vm._v(
                              _vm._s(_vm.appUrl) +
                                "/en/" +
                                _vm._s(_vm.element.slug_en)
                            )
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-lg-6 mb-3" }, [
                      _vm._m(3),
                      _vm._v(" "),
                      _c("img", {
                        attrs: {
                          height: "300",
                          src:
                            _vm.imagesUrl +
                            "/projects/" +
                            _vm.element.images_format[0],
                          alt: ""
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-lg-6 mb-3" }, [
                      _vm._m(4),
                      _vm._v(" "),
                      _c("img", {
                        attrs: {
                          height: "200",
                          src:
                            _vm.imagesUrl +
                            "/projects/" +
                            _vm.element.images_format[1],
                          alt: ""
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-lg-6 mb-3" }, [
                      _c("h3", { staticClass: "font-weight-normal" }, [
                        _c(
                          "span",
                          { staticClass: "d-block font-weight-bold" },
                          [_vm._v("Estado del Proyecto ES:")]
                        ),
                        _vm._v(
                          "\n                    " +
                            _vm._s(_vm.element.status_rel.name_es) +
                            "\n                  "
                        )
                      ]),
                      _vm._v(" "),
                      _c("h3", { staticClass: "font-weight-normal" }, [
                        _c(
                          "span",
                          { staticClass: "d-block font-weight-bold" },
                          [_vm._v("Estado del Proyecto EN:")]
                        ),
                        _vm._v(
                          "\n                    " +
                            _vm._s(_vm.element.status_rel.name_en) +
                            "\n                  "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-lg-6 mb-3" }, [
                      _vm._m(5),
                      _vm._v(" "),
                      _c("div", {
                        domProps: {
                          innerHTML: _vm._s(_vm.element.description_es)
                        }
                      }),
                      _vm._v(" "),
                      _vm._m(6),
                      _vm._v(" "),
                      _c("div", {
                        domProps: {
                          innerHTML: _vm._s(_vm.element.description_en)
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-lg-6 mb-3" }, [
                      _c("h3", { staticClass: "font-weight-normal" }, [
                        _c(
                          "span",
                          { staticClass: "d-block font-weight-bold" },
                          [_vm._v("Habitaciones ES:")]
                        ),
                        _vm._v(
                          "\n                    " +
                            _vm._s(_vm.element.rooms_es) +
                            "\n                  "
                        )
                      ]),
                      _vm._v(" "),
                      _c("h3", { staticClass: "font-weight-normal" }, [
                        _c(
                          "span",
                          { staticClass: "d-block font-weight-bold" },
                          [_vm._v("Habitaciones EN:")]
                        ),
                        _vm._v(
                          "\n                    " +
                            _vm._s(_vm.element.rooms_en) +
                            "\n                  "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-lg-6 mb-3" }, [
                      _c("h3", { staticClass: "font-weight-normal" }, [
                        _c(
                          "span",
                          { staticClass: "d-block font-weight-bold" },
                          [_vm._v("Metraje ES:")]
                        ),
                        _vm._v(
                          "\n                    " +
                            _vm._s(_vm.element.footage_es) +
                            "\n                  "
                        )
                      ]),
                      _vm._v(" "),
                      _c("h3", { staticClass: "font-weight-normal" }, [
                        _c(
                          "span",
                          { staticClass: "d-block font-weight-bold" },
                          [_vm._v("Metraje EN:")]
                        ),
                        _vm._v(
                          "\n                    " +
                            _vm._s(_vm.element.footage_en) +
                            "\n                  "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-lg-6 mb-3" }, [
                      _c("h3", { staticClass: "font-weight-normal" }, [
                        _c(
                          "span",
                          { staticClass: "d-block font-weight-bold" },
                          [_vm._v("Metraje ES:")]
                        ),
                        _vm._v(
                          "\n                    " +
                            _vm._s(_vm.element.footage_es) +
                            "\n                  "
                        )
                      ]),
                      _vm._v(" "),
                      _c("h3", { staticClass: "font-weight-normal" }, [
                        _c(
                          "span",
                          { staticClass: "d-block font-weight-bold" },
                          [_vm._v("Metraje EN:")]
                        ),
                        _vm._v(
                          "\n                    " +
                            _vm._s(_vm.element.footage_en) +
                            "\n                  "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-lg-6 mb-3" }, [
                      _vm._m(7),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "mb-3 text-info" },
                        [_c("PdfIcon")],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "btn btn-inverse-info btn-sm d-inline",
                          attrs: {
                            href:
                              _vm.filesUrl +
                              "/projects/" +
                              _vm.element.brochure,
                            target: "_blank"
                          }
                        },
                        [_vm._v("Ver Brochure")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-lg-6 mb-3" }, [
                      _vm._m(8),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "row" },
                        _vm._l(_vm.element.advisors_rel, function(el) {
                          return _c(
                            "div",
                            { key: el.id, staticClass: "col-3 text-center" },
                            [
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "avatar avatar-lg rounded-circle bg-default object-fit--cover",
                                  staticStyle: {
                                    height: "80px",
                                    width: "80px",
                                    "font-size": "28px !important"
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
                                    : [_vm._v(_vm._s(el.avatar_initials) + " ")]
                                ],
                                2
                              ),
                              _vm._v(" "),
                              _c(
                                "span",
                                { staticClass: "text-uppercase d-block" },
                                [_vm._v(_vm._s(el.name))]
                              )
                            ]
                          )
                        }),
                        0
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-lg-6 mb-3" }, [
                      _c("h3", { staticClass: "font-weight-normal" }, [
                        _c(
                          "span",
                          { staticClass: "d-block font-weight-bold" },
                          [_vm._v("Formulario Cita Online:")]
                        ),
                        _vm._v(" "),
                        _c(
                          "p",
                          {
                            class: _vm.element.form_videocall
                              ? "text-success"
                              : "text-danger"
                          },
                          [
                            _vm._v(
                              "\n                      " +
                                _vm._s(
                                  _vm.element.form_videocall
                                    ? "Habilitado"
                                    : "Deshabilitado"
                                ) +
                                "\n                    "
                            )
                          ]
                        )
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row mb-4" }, [
            _vm._m(9),
            _vm._v(" "),
            _c("div", { staticClass: "col-12 col-lg-10" }, [
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-body" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-12 col-lg-6 mb-3" }, [
                      _c("h3", { staticClass: "font-weight-normal" }, [
                        _c(
                          "span",
                          { staticClass: "d-block font-weight-bold" },
                          [_vm._v("SEO Imagen:")]
                        ),
                        _vm._v(" "),
                        _vm.element.seo_image
                          ? _c("div", [
                              _c("img", {
                                staticClass: "img-fluid",
                                attrs: {
                                  src:
                                    _vm.imagesUrl +
                                    "/projects/" +
                                    _vm.element.seo_image,
                                  alt: ""
                                }
                              })
                            ])
                          : _c("div", [_vm._v("No registrado")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-lg-6 mb-3" }, [
                      _c("h3", { staticClass: "font-weight-normal" }, [
                        _c(
                          "span",
                          { staticClass: "d-block font-weight-bold" },
                          [_vm._v("SEO Título ES:")]
                        ),
                        _vm._v(" "),
                        _vm.element.seo_title_es
                          ? _c("div", [
                              _vm._v(
                                "\n                      " +
                                  _vm._s(_vm.element.seo_title_es) +
                                  "\n                    "
                              )
                            ])
                          : _c("div", [_vm._v("No registrado")])
                      ]),
                      _vm._v(" "),
                      _c("h3", { staticClass: "font-weight-normal" }, [
                        _c(
                          "span",
                          { staticClass: "d-block font-weight-bold" },
                          [_vm._v("SEO Título EN:")]
                        ),
                        _vm._v(" "),
                        _vm.element.seo_title_en
                          ? _c("div", [
                              _vm._v(
                                "\n                      " +
                                  _vm._s(_vm.element.seo_title_en) +
                                  "\n                    "
                              )
                            ])
                          : _c("div", [_vm._v("No registrado")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-lg-6 mb-3" }, [
                      _c("h3", { staticClass: "font-weight-normal" }, [
                        _c(
                          "span",
                          { staticClass: "d-block font-weight-bold" },
                          [_vm._v("SEO Descripción ES:")]
                        ),
                        _vm._v(" "),
                        _vm.element.seo_description_es
                          ? _c("div", [
                              _vm._v(
                                "\n                      " +
                                  _vm._s(_vm.element.seo_description_es) +
                                  "\n                    "
                              )
                            ])
                          : _c("div", [_vm._v("No registrado")])
                      ]),
                      _vm._v(" "),
                      _c("h3", { staticClass: "font-weight-normal" }, [
                        _c(
                          "span",
                          { staticClass: "d-block font-weight-bold" },
                          [_vm._v("SEO Descripción EN:")]
                        ),
                        _vm._v(" "),
                        _vm.element.seo_description_en
                          ? _c("div", [
                              _vm._v(
                                "\n                      " +
                                  _vm._s(_vm.element.seo_description_en) +
                                  "\n                    "
                              )
                            ])
                          : _c("div", [_vm._v("No registrado")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-lg-6 mb-3" }, [
                      _c("h3", { staticClass: "font-weight-normal" }, [
                        _c(
                          "span",
                          { staticClass: "d-block font-weight-bold" },
                          [_vm._v("SEO Keywords ES:")]
                        ),
                        _vm._v(" "),
                        _vm.element.seo_keywords_es
                          ? _c("div", [
                              _vm._v(
                                "\n                      " +
                                  _vm._s(_vm.element.seo_keywords_es) +
                                  "\n                    "
                              )
                            ])
                          : _c("div", [_vm._v("No registrado")])
                      ]),
                      _vm._v(" "),
                      _c("h3", { staticClass: "font-weight-normal" }, [
                        _c(
                          "span",
                          { staticClass: "d-block font-weight-bold" },
                          [_vm._v("SEO Keywords EN:")]
                        ),
                        _vm._v(" "),
                        _vm.element.seo_keywords_en
                          ? _c("div", [
                              _vm._v(
                                "\n                      " +
                                  _vm._s(_vm.element.seo_keywords_en) +
                                  "\n                    "
                              )
                            ])
                          : _c("div", [_vm._v("No registrado")])
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row mb-4" }, [
            _vm._m(10),
            _vm._v(" "),
            _c("div", { staticClass: "col-12 col-lg-10" }, [
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-body" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("p", { staticClass: "mb-0" }, [
                          _vm._v(
                            "\n                      El código SAP será utilizado para realizar la conexión\n                      con SAP y obtener los inmuebles y su disponibilidad del\n                      Proyecto.\n                    "
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "font-weight-bold",
                            attrs: { for: "sap_code" }
                          },
                          [_vm._v("Código SAP")]
                        ),
                        _vm._v(" "),
                        _vm.element.sap_code
                          ? _c("div", [
                              _vm._v(
                                "\n                      " +
                                  _vm._s(_vm.element.sap_code) +
                                  "\n                    "
                              )
                            ])
                          : _c("div", [_vm._v("No registrado")])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("p", { staticClass: "mb-0" }, [
                          _vm._v(
                            "\n                      Este será el monto que cuesta separar un inmueble en el Proyecto.\n                    "
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-12 col-lg-6" }, [
                            _c(
                              "label",
                              {
                                staticClass: "font-weight-bold",
                                attrs: { for: "price_separation" }
                              },
                              [_vm._v("Tipo de Moneda")]
                            ),
                            _vm._v(" "),
                            _vm.element.master_currency_id
                              ? _c("div", [
                                  _vm._v(
                                    "\n                          " +
                                      _vm._s(_vm.element.currency_rel.name) +
                                      "\n                        "
                                  )
                                ])
                              : _c("div", [_vm._v("No registrado")])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-12 col-lg-6" }, [
                            _c(
                              "label",
                              {
                                staticClass: "font-weight-bold",
                                attrs: { for: "price_separation" }
                              },
                              [_vm._v("Precio de Separación de Inmueble")]
                            ),
                            _vm._v(" "),
                            _vm.element.price_separation
                              ? _c("div", [
                                  _vm._v(
                                    "\n                          " +
                                      _vm._s(_vm.element.price_separation) +
                                      "\n                        "
                                  )
                                ])
                              : _c("div", [_vm._v("No registrado")])
                          ])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _vm._m(11),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-lg-4 " }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          {
                            staticClass: "font-weight-bold",
                            attrs: { for: "stock_parking" }
                          },
                          [_vm._v("Stock Estacionamiento")]
                        ),
                        _vm._v(" "),
                        _vm.element.stock_parking !== null &&
                        _vm.element.stock_parking !== ""
                          ? _c("div", [
                              _vm._v(
                                "\n                      " +
                                  _vm._s(_vm.element.stock_parking) +
                                  "\n                    "
                              )
                            ])
                          : _c("div", [_vm._v("No registrado")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-lg-4 " }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          {
                            staticClass: "font-weight-bold",
                            attrs: { for: "price_parking_sap" }
                          },
                          [_vm._v("Precio Estacionamiento Soles")]
                        ),
                        _vm._v(" "),
                        _vm.element.price_parking_sap
                          ? _c("div", [
                              _vm._v(
                                "\n                      " +
                                  _vm._s(_vm.element.price_parking_format) +
                                  "\n                    "
                              )
                            ])
                          : _c("div", [_vm._v("No registrado")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-lg-4 " }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          {
                            staticClass: "font-weight-bold",
                            attrs: { for: "price_parking_foreign_sap" }
                          },
                          [_vm._v("Precio Estacionamiento Dólares ")]
                        ),
                        _vm._v(" "),
                        _vm.element.price_parking_foreign_sap
                          ? _c("div", [
                              _vm._v(
                                "\n                      " +
                                  _vm._s(
                                    _vm.element.price_parking_foreign_format
                                  ) +
                                  "\n                    "
                              )
                            ])
                          : _c("div", [_vm._v("No registrado")])
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row mb-4" }, [
            _vm._m(12),
            _vm._v(" "),
            _c("div", { staticClass: "col-12 col-lg-10" }, [
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-body" }, [
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col-12 col-lg-6 mb-3 text-center" },
                      [
                        _c("h2", { staticClass: "font-weight-normal" }, [
                          _c(
                            "span",
                            { staticClass: "d-block h3 font-weight-bold" },
                            [_vm._v("Precio Soles Desde:")]
                          ),
                          _vm._v(
                            "\n                    " +
                              _vm._s(
                                _vm.element.price_total
                                  ? _vm.element.price_total_format
                                  : "No registrado"
                              ) +
                              "\n                  "
                          )
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-12 col-lg-6 mb-3 text-center" },
                      [
                        _c("h2", { staticClass: "font-weight-normal" }, [
                          _c(
                            "span",
                            { staticClass: "d-block h3 font-weight-bold" },
                            [_vm._v("Precio Dólares Desde:")]
                          ),
                          _vm._v(
                            "\n                    " +
                              _vm._s(
                                _vm.element.price_total_foreign
                                  ? _vm.element.price_total_foreign_format
                                  : "No registrado"
                              ) +
                              "\n                  "
                          )
                        ])
                      ]
                    )
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row mb-4" }, [
            _vm._m(13),
            _vm._v(" "),
            _c("div", { staticClass: "col-12 col-lg-10" }, [
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-body" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-12 col-lg-6 mb-3" }, [
                      _vm._m(14),
                      _vm._v(" "),
                      _c("img", {
                        staticClass: "img-fluid",
                        attrs: {
                          src:
                            _vm.imagesUrl + "/projects/" + _vm.element.banner,
                          alt: ""
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-lg-6 mb-3" }, [
                      _vm._m(15),
                      _vm._v(" "),
                      _vm.element.url_video
                        ? _c("iframe", {
                            attrs: {
                              id: "player",
                              type: "text/html",
                              width: "100%",
                              height: "360",
                              src:
                                "https://www.youtube.com/embed/" +
                                _vm.element.id_video,
                              frameborder: "0"
                            }
                          })
                        : _c("p", [_vm._v("No se ha registrado un video.")])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _vm._m(16),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "row" },
                        _vm._l(_vm.element.features_rel, function(el) {
                          return _c(
                            "div",
                            { key: el.id, staticClass: "col-3 text-center" },
                            [
                              _c("img", {
                                attrs: {
                                  src: _vm.imagesUrl + "/features/" + el.image,
                                  height: "50",
                                  alt: el.name_es
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "h3",
                                { staticClass: "mb-1 font-weight-normal mt-2" },
                                [
                                  _c(
                                    "span",
                                    { staticClass: "font-weight-bold" },
                                    [_vm._v("Nombre ES:")]
                                  ),
                                  _vm._v(
                                    "\n                        " +
                                      _vm._s(el.name_es) +
                                      "\n                      "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("h3", { staticClass: "font-weight-normal" }, [
                                _c(
                                  "span",
                                  { staticClass: "font-weight-bold" },
                                  [_vm._v("Nombre EN:")]
                                ),
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(el.name_en) +
                                    "\n                      "
                                )
                              ])
                            ]
                          )
                        }),
                        0
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _vm._m(17),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "row" },
                        _vm._l(_vm.element.banks_rel, function(el) {
                          return _c(
                            "div",
                            { key: el.id, staticClass: "col-3 text-center" },
                            [
                              _c("img", {
                                staticClass: "p-2 bg-dark",
                                attrs: {
                                  src: _vm.imagesUrl + "/banks/" + el.logo,
                                  height: "50",
                                  alt: el.name
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "small",
                                { staticClass: "text-uppercase d-block" },
                                [_vm._v(_vm._s(el.name))]
                              )
                            ]
                          )
                        }),
                        0
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _vm._m(18),
                      _vm._v(" "),
                      _vm.element.bonds_rel.length
                        ? _c(
                            "div",
                            { staticClass: "row" },
                            _vm._l(_vm.element.bonds_rel, function(el) {
                              return _c(
                                "div",
                                {
                                  key: el.id,
                                  staticClass: "col-3 text-center"
                                },
                                [
                                  _c("img", {
                                    staticClass: "p-2 bg-dark",
                                    attrs: {
                                      src: _vm.imagesUrl + "/bonds/" + el.logo,
                                      height: "50",
                                      alt: el.name
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "small",
                                    { staticClass: "text-uppercase d-block" },
                                    [_vm._v(_vm._s(el.name))]
                                  )
                                ]
                              )
                            }),
                            0
                          )
                        : _c("div", { staticClass: "row" }, [_vm._m(19)])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-lg-6 mb-3" }, [
                      _c("h3", { staticClass: "font-weight-normal" }, [
                        _c(
                          "span",
                          { staticClass: "d-block font-weight-bold" },
                          [_vm._v("Speech Galeria ES:")]
                        ),
                        _vm._v(
                          "\n                    " +
                            _vm._s(_vm.element.text_place_es) +
                            "\n                  "
                        )
                      ]),
                      _vm._v(" "),
                      _c("h3", { staticClass: "font-weight-normal" }, [
                        _c(
                          "span",
                          { staticClass: "d-block font-weight-bold" },
                          [_vm._v("Speech Galeria EN:")]
                        ),
                        _vm._v(
                          "\n                    " +
                            _vm._s(_vm.element.text_place_en) +
                            "\n                  "
                        )
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row mb-4" }, [
            _vm._m(20),
            _vm._v(" "),
            _c("div", { staticClass: "col-12 col-lg-10" }, [
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-body" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-12 mb-3" }, [
                      _c("h3", { staticClass: "font-weight-normal" }, [
                        _c(
                          "span",
                          { staticClass: "d-block font-weight-bold" },
                          [_vm._v("Dirección Corta:")]
                        ),
                        _vm._v(
                          "\n                    " +
                            _vm._s(_vm.element.location) +
                            "\n                  "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-lg-4 mb-3" }, [
                      _c("h3", { staticClass: "font-weight-normal" }, [
                        _c(
                          "span",
                          { staticClass: "d-block font-weight-bold" },
                          [_vm._v("Departamento:")]
                        ),
                        _vm._v(
                          "\n                    " +
                            _vm._s(_vm.element.ubigeo_rel.department) +
                            "\n                  "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-lg-4 mb-3" }, [
                      _c("h3", { staticClass: "font-weight-normal" }, [
                        _c(
                          "span",
                          { staticClass: "d-block font-weight-bold" },
                          [_vm._v("Provincia:")]
                        ),
                        _vm._v(
                          "\n                    " +
                            _vm._s(_vm.element.ubigeo_rel.province) +
                            "\n                  "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-lg-4 mb-3" }, [
                      _c("h3", { staticClass: "font-weight-normal" }, [
                        _c(
                          "span",
                          { staticClass: "d-block font-weight-bold" },
                          [_vm._v("Distrito:")]
                        ),
                        _vm._v(
                          "\n                    " +
                            _vm._s(_vm.element.ubigeo_rel.district) +
                            "\n                  "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-lg-6 mb-3" }, [
                      _c("h3", { staticClass: "font-weight-normal" }, [
                        _c(
                          "span",
                          { staticClass: "d-block font-weight-bold" },
                          [_vm._v("Dirección Completa ES:")]
                        ),
                        _vm._v(" "),
                        _vm.element.map_indications_es
                          ? _c("div", {
                              domProps: {
                                innerHTML: _vm._s(
                                  _vm.element.map_indications_es
                                )
                              }
                            })
                          : _c("p", [_vm._v("No registrado.")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-lg-6 mb-3" }, [
                      _c("h3", { staticClass: "font-weight-normal" }, [
                        _c(
                          "span",
                          { staticClass: "d-block font-weight-bold" },
                          [_vm._v("Dirección Completa EN:")]
                        ),
                        _vm._v(" "),
                        _vm.element.map_indications_en
                          ? _c("div", {
                              domProps: {
                                innerHTML: _vm._s(
                                  _vm.element.map_indications_en
                                )
                              }
                            })
                          : _c("p", [_vm._v("No registrado.")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-lg-6 mb-3" }, [
                      _c("h3", { staticClass: "font-weight-normal" }, [
                        _c(
                          "span",
                          { staticClass: "d-block font-weight-bold" },
                          [_vm._v("Sala de Ventas ES:")]
                        ),
                        _vm._v(" "),
                        _c("div", {
                          domProps: {
                            innerHTML: _vm._s(_vm.element.sales_room_es)
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-lg-6 mb-3" }, [
                      _c("h3", { staticClass: "font-weight-normal" }, [
                        _c(
                          "span",
                          { staticClass: "d-block font-weight-bold" },
                          [_vm._v("Sala de Ventas EN:")]
                        ),
                        _vm._v(" "),
                        _c("div", {
                          domProps: {
                            innerHTML: _vm._s(_vm.element.sales_room_en)
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-lg-6 mb-3" }, [
                      _c("h3", { staticClass: "font-weight-normal" }, [
                        _c(
                          "span",
                          { staticClass: "d-block font-weight-bold" },
                          [_vm._v("Horario de Atención ES:")]
                        ),
                        _vm._v(" "),
                        _c("div", {
                          domProps: {
                            innerHTML: _vm._s(_vm.element.schedule_attention_es)
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-lg-6 mb-3" }, [
                      _c("h3", { staticClass: "font-weight-normal" }, [
                        _c(
                          "span",
                          { staticClass: "d-block font-weight-bold" },
                          [_vm._v("Horario de Atención EN:")]
                        ),
                        _vm._v(" "),
                        _c("div", {
                          domProps: {
                            innerHTML: _vm._s(_vm.element.schedule_attention_en)
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-lg-6 mb-3" }, [
                      _c("h3", { staticClass: "font-weight-normal" }, [
                        _c(
                          "span",
                          { staticClass: "d-block font-weight-bold" },
                          [_vm._v("URL Waze:")]
                        ),
                        _vm._v(" "),
                        _vm.element.url_waze
                          ? _c(
                              "a",
                              {
                                staticStyle: { "text-decoration": "underline" },
                                attrs: {
                                  href: _vm.element.url_waze,
                                  target: "_blank"
                                }
                              },
                              [_vm._v(_vm._s(_vm.element.url_waze))]
                            )
                          : _c("p", [_vm._v("No registrado")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-lg-6 mb-3" }, [
                      _c("h3", { staticClass: "font-weight-normal" }, [
                        _c(
                          "span",
                          { staticClass: "d-block font-weight-bold" },
                          [_vm._v("URL Google Maps:")]
                        ),
                        _vm._v(" "),
                        _vm.element.url_google_maps
                          ? _c(
                              "a",
                              {
                                staticStyle: { "text-decoration": "underline" },
                                attrs: {
                                  href: _vm.element.url_google_maps,
                                  target: "_blank"
                                }
                              },
                              [_vm._v(_vm._s(_vm.element.url_google_maps))]
                            )
                          : _c("p", [_vm._v("No registrado")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-lg-6" }, [
                      _vm._m(21),
                      _vm._v(" "),
                      _c("img", {
                        staticClass: "img-fluid",
                        attrs: {
                          src:
                            _vm.imagesUrl +
                            "/projects/" +
                            _vm.element.iframe_map,
                          alt: ""
                        }
                      })
                    ])
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row mb-4" }, [
            _vm._m(22),
            _vm._v(" "),
            _c("div", { staticClass: "col-12 col-lg-10" }, [
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-body" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-12 col-lg-6 mb-3" }, [
                      _c("h3", { staticClass: "font-weight-normal" }, [
                        _c(
                          "span",
                          { staticClass: "d-block font-weight-bold" },
                          [_vm._v("Resumen del Proyecto:")]
                        ),
                        _vm._v(" "),
                        _vm.element.excerpt_quotation
                          ? _c("div", {
                              domProps: {
                                innerHTML: _vm._s(_vm.element.excerpt_quotation)
                              }
                            })
                          : _c("p", [_vm._v("No registrado.")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-lg-6 mb-3" }, [
                      _c("h3", { staticClass: "font-weight-normal" }, [
                        _c(
                          "span",
                          { staticClass: "d-block font-weight-bold" },
                          [_vm._v("Precio Estacionamiento:")]
                        ),
                        _vm._v(" "),
                        _vm.element.price_parking
                          ? _c("div", {
                              domProps: {
                                innerHTML: _vm._s(_vm.element.price_parking)
                              }
                            })
                          : _c("p", [_vm._v("No registrado.")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-lg-6 mb-3" }, [
                      _c("h3", { staticClass: "font-weight-normal" }, [
                        _c(
                          "span",
                          { staticClass: "d-block font-weight-bold" },
                          [_vm._v("Condiciones de la Proforma:")]
                        ),
                        _vm._v(" "),
                        _vm.element.condition_quotation
                          ? _c("div", {
                              domProps: {
                                innerHTML: _vm._s(
                                  _vm.element.condition_quotation
                                )
                              }
                            })
                          : _c("p", [_vm._v("No registrado.")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-lg-6 mb-3" }, [
                      _c("h3", { staticClass: "font-weight-normal" }, [
                        _c(
                          "span",
                          { staticClass: "d-block font-weight-bold" },
                          [_vm._v("Comentario que incluye el inmueble:")]
                        ),
                        _vm._v(" "),
                        _vm.element.commentary_quotation
                          ? _c("div", {
                              domProps: {
                                innerHTML: _vm._s(
                                  _vm.element.commentary_quotation
                                )
                              }
                            })
                          : _c("p", [_vm._v("No registrado.")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12" }, [
                      _vm._m(23),
                      _vm._v(" "),
                      _vm.element.financing_options_rel.length
                        ? _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-12" }, [
                              _c(
                                "ol",
                                _vm._l(
                                  _vm.element.financing_options_rel,
                                  function(el) {
                                    return _c("li", { key: el.id }, [
                                      _c("span", { staticClass: "d-block" }, [
                                        _vm._v(_vm._s(el.name))
                                      ])
                                    ])
                                  }
                                ),
                                0
                              )
                            ])
                          ])
                        : _c("div", { staticClass: "row" }, [_vm._m(24)])
                    ])
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row mb-4" }, [
            _vm._m(25),
            _vm._v(" "),
            _c("div", { staticClass: "col-12 col-lg-10" }, [
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-body" }, [
                  _vm._m(26),
                  _vm._v(" "),
                  _vm.projectsRelated && _vm.projectsRelated.length
                    ? _c(
                        "div",
                        { staticClass: "row" },
                        _vm._l(_vm.projectsRelated, function(el) {
                          return _c(
                            "div",
                            {
                              key: el[0].id,
                              staticClass: "col-6 col-lg-3 text-center"
                            },
                            [
                              _c("img", {
                                staticClass: "mx-auto",
                                attrs: {
                                  src:
                                    _vm.imagesUrl +
                                    "/projects/" +
                                    el[0].images_format[0],
                                  height: "150",
                                  width: "auto",
                                  alt: el[0].name
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "small",
                                { staticClass: "text-uppercase d-block" },
                                [_vm._v(_vm._s(el[0].name_es))]
                              )
                            ]
                          )
                        }),
                        0
                      )
                    : _c("div", { staticClass: "row" }, [_vm._m(27)])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row mb-4" }, [
            _vm._m(28),
            _vm._v(" "),
            _c("div", { staticClass: "col-12 col-lg-10" }, [
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-body" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-12" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { staticClass: "font-weight-bold" }, [
                          _vm._v(
                            "Envio de Información de Cotizaciones al email de los asesores:"
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "p",
                          {
                            class: _vm.element.send_to_email
                              ? "text-success"
                              : "text-danger"
                          },
                          [
                            _vm._v(
                              "\n                        " +
                                _vm._s(
                                  _vm.element.send_to_email
                                    ? "Habilitado"
                                    : "Deshabilitado"
                                ) +
                                "\n                      "
                            )
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { staticClass: "font-weight-bold" }, [
                          _vm._v(
                            "Envio de Información de Cotizaciones a través de Webhook:"
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "p",
                          {
                            class: _vm.element.webhook_url_active
                              ? "text-success"
                              : "text-danger"
                          },
                          [
                            _vm._v(
                              "\n                        " +
                                _vm._s(
                                  _vm.element.webhook_url_active
                                    ? "Habilitado"
                                    : "Deshabilitado"
                                ) +
                                "\n                      "
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _vm.element.webhook_url_active
                        ? _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticClass: "font-weight-bold",
                                attrs: { for: "webhook_url" }
                              },
                              [_vm._v("URL Destino")]
                            ),
                            _vm._v(" "),
                            _c("p", { staticClass: "mb-0" }, [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(_vm.element.webhook_url) +
                                  "\n                      "
                              )
                            ])
                          ])
                        : _vm._e()
                    ])
                  ])
                ])
              ])
            ])
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 col-lg-2" }, [
      _c("h2", [_vm._v("Brief")]),
      _vm._v(" "),
      _c("p", [_vm._v("Datos principales del Proyecto")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { staticClass: "font-weight-normal" }, [
      _c("span", { staticClass: "d-block font-weight-bold" }, [_vm._v("Logo:")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { staticClass: "font-weight-normal" }, [
      _c("span", { staticClass: "d-block font-weight-bold" }, [
        _vm._v("Logo Color:")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { staticClass: "font-weight-normal" }, [
      _c("span", { staticClass: "d-block font-weight-bold" }, [_vm._v("Card:")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { staticClass: "font-weight-normal" }, [
      _c("span", { staticClass: "d-block font-weight-bold" }, [
        _vm._v("Card Hover:")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { staticClass: "font-weight-normal" }, [
      _c("span", { staticClass: "d-block font-weight-bold" }, [
        _vm._v("Descripción ES:")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { staticClass: "font-weight-normal" }, [
      _c("span", { staticClass: "d-block font-weight-bold" }, [
        _vm._v("Descripción EN:")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { staticClass: "font-weight-normal" }, [
      _c("span", { staticClass: "d-block font-weight-bold" }, [
        _vm._v("Brochure:")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { staticClass: "font-weight-normal" }, [
      _c("span", { staticClass: "d-block font-weight-bold" }, [
        _vm._v("Asesores:")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 col-lg-2" }, [
      _c("h2", [_vm._v("SEO")]),
      _vm._v(" "),
      _c("p", [_vm._v("Datos que se utilizarán para el SEO")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 col-lg-2" }, [
      _c("h2", [_vm._v("Pasarela")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n            Indica los datos que se utilizan para\n            "
        ),
        _c("b", [_vm._v("Separar un Inmueble")]),
        _vm._v(".\n          ")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12" }, [
      _c("p", { staticClass: "mb-0" }, [
        _vm._v(
          "Estos campos se actualizaran automaticamente cuando se obtenga la Disponibilidad de los Inmuebles del Proyecto"
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 col-lg-2" }, [
      _c("h2", [_vm._v("Importes")]),
      _vm._v(" "),
      _c("p", [_vm._v("Montos generales con los que cuenta el Proyecto")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 col-lg-2" }, [
      _c("h2", [_vm._v("Atributos")]),
      _vm._v(" "),
      _c("p", [_vm._v("Indica los atributos con los que cuenta el Proyecto")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { staticClass: "font-weight-normal" }, [
      _c("span", { staticClass: "d-block font-weight-bold" }, [
        _vm._v("Banner:")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { staticClass: "font-weight-normal" }, [
      _c("span", { staticClass: "d-block font-weight-bold" }, [
        _vm._v("Video:")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { staticClass: "font-weight-normal" }, [
      _c("span", { staticClass: "d-block font-weight-bold" }, [
        _vm._v("Características:")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { staticClass: "font-weight-normal" }, [
      _c("span", { staticClass: "d-block font-weight-bold" }, [
        _vm._v("Entidades Financieras:")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { staticClass: "font-weight-normal" }, [
      _c("span", { staticClass: "d-block font-weight-bold" }, [
        _vm._v("Bonos:")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 col-lg-6" }, [
      _c("p", [_vm._v("No registrado")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 col-lg-2" }, [
      _c("h2", [_vm._v("Atributos")]),
      _vm._v(" "),
      _c("p", [_vm._v("Atributos con los que cuenta el Proyecto")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { staticClass: "font-weight-normal" }, [
      _c("span", { staticClass: "d-block font-weight-bold" }, [_vm._v("Mapa:")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 col-lg-2" }, [
      _c("h2", [_vm._v("Cotización")]),
      _vm._v(" "),
      _c("p", [_vm._v("Indica la Información de la cotización del Proyecto")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { staticClass: "font-weight-normal" }, [
      _c("span", { staticClass: "d-block font-weight-bold" }, [
        _vm._v("Opciones de Financiamiento:")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 col-lg-6" }, [
      _c("p", [_vm._v("No registrado")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 col-lg-2" }, [
      _c("h2", [_vm._v("Proyectos Relacionados")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n            Indica los proyectos relacionados que se mostrarán en el\n            "
        ),
        _c("b", [_vm._v("Detalle del Proyecto")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { staticClass: "font-weight-normal" }, [
      _c("span", { staticClass: "d-block font-weight-bold mb-3" }, [
        _vm._v("Proyectos Relacionados:")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 col-lg-6" }, [
      _c("p", [_vm._v("No hay proyectos relacionados registrados")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 col-lg-2" }, [
      _c("h2", [_vm._v("Configuración Proyecto")]),
      _vm._v(" "),
      _c("p", [
        _vm._v("Indica la configuración de notificaciones del "),
        _c("b", [_vm._v("Proyecto")]),
        _vm._v(" e integración webhook.")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/BreadCrumb.vue":
/*!************************************************!*\
  !*** ./resources/js/components/BreadCrumb.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BreadCrumb_vue_vue_type_template_id_1645430e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BreadCrumb.vue?vue&type=template&id=1645430e&scoped=true& */ "./resources/js/components/BreadCrumb.vue?vue&type=template&id=1645430e&scoped=true&");
/* harmony import */ var _BreadCrumb_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BreadCrumb.vue?vue&type=script&lang=js& */ "./resources/js/components/BreadCrumb.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _BreadCrumb_vue_vue_type_style_index_0_id_1645430e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BreadCrumb.vue?vue&type=style&index=0&id=1645430e&scoped=true&lang=css& */ "./resources/js/components/BreadCrumb.vue?vue&type=style&index=0&id=1645430e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _BreadCrumb_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BreadCrumb_vue_vue_type_template_id_1645430e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BreadCrumb_vue_vue_type_template_id_1645430e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1645430e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/BreadCrumb.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/BreadCrumb.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/BreadCrumb.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BreadCrumb_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./BreadCrumb.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/BreadCrumb.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BreadCrumb_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/BreadCrumb.vue?vue&type=style&index=0&id=1645430e&scoped=true&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/BreadCrumb.vue?vue&type=style&index=0&id=1645430e&scoped=true&lang=css& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BreadCrumb_vue_vue_type_style_index_0_id_1645430e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/vue-loader/lib??vue-loader-options!./BreadCrumb.vue?vue&type=style&index=0&id=1645430e&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/BreadCrumb.vue?vue&type=style&index=0&id=1645430e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BreadCrumb_vue_vue_type_style_index_0_id_1645430e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BreadCrumb_vue_vue_type_style_index_0_id_1645430e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BreadCrumb_vue_vue_type_style_index_0_id_1645430e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BreadCrumb_vue_vue_type_style_index_0_id_1645430e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/BreadCrumb.vue?vue&type=template&id=1645430e&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/BreadCrumb.vue?vue&type=template&id=1645430e&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BreadCrumb_vue_vue_type_template_id_1645430e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./BreadCrumb.vue?vue&type=template&id=1645430e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/BreadCrumb.vue?vue&type=template&id=1645430e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BreadCrumb_vue_vue_type_template_id_1645430e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BreadCrumb_vue_vue_type_template_id_1645430e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/icons/Pdf.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/icons/Pdf.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pdf_vue_vue_type_template_id_37b5d022___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pdf.vue?vue&type=template&id=37b5d022& */ "./resources/js/components/icons/Pdf.vue?vue&type=template&id=37b5d022&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Pdf_vue_vue_type_template_id_37b5d022___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Pdf_vue_vue_type_template_id_37b5d022___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/icons/Pdf.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/icons/Pdf.vue?vue&type=template&id=37b5d022&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/icons/Pdf.vue?vue&type=template&id=37b5d022& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pdf_vue_vue_type_template_id_37b5d022___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Pdf.vue?vue&type=template&id=37b5d022& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/icons/Pdf.vue?vue&type=template&id=37b5d022&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pdf_vue_vue_type_template_id_37b5d022___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pdf_vue_vue_type_template_id_37b5d022___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/projects/Read.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/projects/Read.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Read_vue_vue_type_template_id_0481323c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Read.vue?vue&type=template&id=0481323c& */ "./resources/js/views/projects/Read.vue?vue&type=template&id=0481323c&");
/* harmony import */ var _Read_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Read.vue?vue&type=script&lang=js& */ "./resources/js/views/projects/Read.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Read_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Read_vue_vue_type_template_id_0481323c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Read_vue_vue_type_template_id_0481323c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/projects/Read.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/projects/Read.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/projects/Read.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Read_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Read.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/projects/Read.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Read_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/projects/Read.vue?vue&type=template&id=0481323c&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/projects/Read.vue?vue&type=template&id=0481323c& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Read_vue_vue_type_template_id_0481323c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Read.vue?vue&type=template&id=0481323c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/projects/Read.vue?vue&type=template&id=0481323c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Read_vue_vue_type_template_id_0481323c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Read_vue_vue_type_template_id_0481323c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);