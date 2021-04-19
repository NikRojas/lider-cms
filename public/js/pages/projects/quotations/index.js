(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/pages/projects/quotations/index"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/projects/quotations/Index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/projects/quotations/Index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_icons_Contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/icons/Contact */ "./resources/js/components/icons/Contact.vue");
/* harmony import */ var _components_DataTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/DataTable */ "./resources/js/components/DataTable.vue");
/* harmony import */ var _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/BreadCrumb */ "./resources/js/components/BreadCrumb.vue");
/* harmony import */ var _components_modals_Destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/modals/Destroy */ "./resources/js/components/modals/Destroy.vue");
/* harmony import */ var vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-loading-skeleton */ "./node_modules/vue-loading-skeleton/dist/vue-loading-skeleton.esm.js");
/* harmony import */ var vue2_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue2-datepicker */ "./node_modules/vue2-datepicker/lib/index.js");
/* harmony import */ var vue2_datepicker__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue2_datepicker__WEBPACK_IMPORTED_MODULE_5__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    filterExport: String
  },
  data: function data() {
    return {
      request_todo: false,
      request_filter: false,
      errors_form: {},
      modalExport: false,
      element_form: {},
      project: {},
      elements: {},
      element: {
        project_rel: {},
        advisor_rel: {},
        project_type_department_rel: {}
      },
      elementsPerPage: 10,
      modalShow: false,
      modalDestroy: false,
      loadingGet: false,
      requestSubmit: false
    };
  },
  components: {
    IconContact: _components_icons_Contact__WEBPACK_IMPORTED_MODULE_0__["default"],
    Skeleton: vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_4__["Skeleton"],
    BreadCrumb: _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_2__["default"],
    DataTable: _components_DataTable__WEBPACK_IMPORTED_MODULE_1__["default"],
    Destroy: _components_modals_Destroy__WEBPACK_IMPORTED_MODULE_3__["default"],
    DatePicker: vue2_datepicker__WEBPACK_IMPORTED_MODULE_5___default.a
  },
  watch: {
    elementParent: {
      immediate: true,
      handler: function handler(newValue) {
        this.project = newValue;
      }
    }
  },
  methods: {
    openModalExport: function openModalExport() {
      this.modalExport = true;
    },
    allExportFunction: function allExportFunction() {
      var _this = this;

      this.request_todo = true;
      axios.get(this.allExport, {
        headers: {
          "Content-Disposition": "attachment; filename=template.xlsx",
          //no es tan necesario, lo quité y siguio funcionando
          "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" //no es tan necesario, lo quité y siguio funcionando

        },
        responseType: "arraybuffer" //necesaario

      }).then(function (response) {
        var downloadUrl = window.URL.createObjectURL(new Blob([response.data]));
        var link = document.createElement("a");
        link.href = downloadUrl;
        link.setAttribute("download", "Líder Cotizaciones Proyecto " + _this.project.name_es + ".xlsx");
        document.body.appendChild(link);
        link.click();
        link.remove();
        _this.request_todo = false;
      })["catch"](function (error) {
        _this.request_todo = false;

        if (error.response.status === 422) {
          _this.errors_form = error.response.data.errors || {};
          return;
        }
      });
    },
    filterExportFunction: function filterExportFunction() {
      var _this2 = this;

      this.request_filter = true;
      var fd = new FormData();

      if (this.element_form.from) {
        fd.append("from", this.element_form.from);
      }

      if (this.element_form.to) {
        fd.append("to", this.element_form.to);
      }

      axios.post(this.filterExport, fd, {
        headers: {
          "Content-Disposition": "attachment; filename=template.xlsx",
          //no es tan necesario, lo quité y siguio funcionando
          "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" //no es tan necesario, lo quité y siguio funcionando

        },
        responseType: "arraybuffer" //necesaario

      }).then(function (response) {
        var downloadUrl = window.URL.createObjectURL(new Blob([response.data]));
        var link = document.createElement("a");
        link.href = downloadUrl;
        link.setAttribute("download", "Líder Cotizaciones Proyecto " + _this2.project.name_es + ".xlsx");
        document.body.appendChild(link);
        link.click();
        link.remove();
        _this2.request_filter = false;
      })["catch"](function (error) {
        _this2.request_filter = false;

        if (error.response.status === 422) {
          _this2.errors_form = {
            from: [],
            to: []
          };

          if (_this2.element_form.from == "" || _this2.element_form.from == null) {
            _this2.errors_form.from = ["El campo desde es requerido"];
          }

          if (_this2.element_form.to == "" || _this2.element_form.to == null) {
            _this2.errors_form.to = ["El campo hasta es requerido"];
          }

          console.log(_this2.errors_form);
          return;
        }
      });
    },
    destroyConfirm: function destroyConfirm() {
      var _this3 = this;

      this.requestSubmit = true;
      axios["delete"]("/proyectos/cotizaciones/" + this.element.id).then(function (response) {
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
    restoreEl: function restoreEl() {
      this.element = {
        project_type_department_rel: {}
      }, this.modalDestroy = this.modalShow = false;
      this.modalExport = false;
      this.element_form = {};
      this.errors_form = {};
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
      var _this4 = this;

      var q = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var url = this.routeGetAll + "?page=" + page + "&itemsPerPage=" + itemsPerPage;

      if (q) {
        url = url + "&q=" + q;
      }

      axios.get(url, {
        params: {
          project_id: this.project.id
        }
      }).then(function (response) {
        _this4.elements = response.data;
      })["catch"](function (error) {});
    },
    restore: function restore() {
      this.elements = {};
      this.element = {
        project_type_department_rel: {}
      };
      this.modalDestroy = this.modalShow = false;
      this.getEls(1, this.elementsPerPage);
    },
    getEl: function getEl(id) {
      var _this5 = this;

      this.loadingGet = true;
      axios.get("json/get/" + id).then(function (response) {
        _this5.element = response.data;
        _this5.loadingGet = false;
      })["catch"](function (error) {});
    }
  },
  created: function created() {
    this.getEls(1, this.elementsPerPage);
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/projects/quotations/Index.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/projects/quotations/Index.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.nav-pills .nav-link.active {\n  border-left: 4px solid #1762e6 !important;\n  background-color: #fdfbfa !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/projects/quotations/Index.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/projects/quotations/Index.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/projects/quotations/Index.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/projects/quotations/Index.vue?vue&type=template&id=789ed2e0&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/projects/quotations/Index.vue?vue&type=template&id=789ed2e0& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
                        title: "Cotizaciones Proyecto " + _vm.project.name_es,
                        parent: "",
                        active: "Proyectos"
                      }
                    })
                  ],
                  1
                )
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
      _c(
        "div",
        { staticClass: "container-fluid mt--6" },
        [
          _c(
            "b-tabs",
            {
              attrs: {
                pills: "",
                vertical: "",
                "nav-wrapper-class": "col-12 col-lg-3 col-xl-2 mb-4 mb-lg-0",
                "nav-class": "border bg-white py-2",
                "content-class": "col-12 col-lg-9 col-xl-10"
              }
            },
            [
              _c(
                "b-tab",
                {
                  attrs: {
                    title: "Leads",
                    active: "",
                    "title-link-class": "border-0 shadow-none bg-white py-3",
                    "title-item-class": "pr-0 my-0"
                  }
                },
                [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-12 mb-4 text-right" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-icon btn-inverse-primary",
                          style: _vm.elements.total == 0 ? "opacity: 0.50" : "",
                          attrs: {
                            type: "button",
                            disabled: _vm.elements.total == 0 ? true : false
                          },
                          on: { click: _vm.openModalExport }
                        },
                        [
                          _c(
                            "span",
                            { staticClass: "btn-inner--icon" },
                            [
                              _c("jam-download", {
                                staticClass: "current-color"
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("span", { staticClass: "btn-inner--text" }, [
                            _vm._v(
                              "Exportar " +
                                _vm._s(
                                  _vm.elements.total == 0 ? "(0 Leads)" : ""
                                )
                            )
                          ])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-12" },
                      [
                        _c("DataTable", {
                          attrs: {
                            object: _vm.elements,
                            placeholder: "Nombre, DNI",
                            "button-update": false,
                            "button-read": true,
                            "button-delete": true,
                            "button-disable": false,
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
                        })
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
                    title: "Emails Destino",
                    "title-link-class": "border-0 shadow-none bg-white py-3",
                    "title-item-class": "my-0"
                  }
                },
                [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-12" }, [
                      _c("div", { staticClass: "card" }, [
                        _c(
                          "div",
                          { staticClass: "card-header border-0 pb-0" },
                          [
                            _c(
                              "h2",
                              {
                                staticClass: "mb-0 text-uppercase text-primary"
                              },
                              [
                                _vm._v(
                                  "\n                  Emails Destino\n                "
                                )
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "card-body" }, [
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-12 mb-4" }, [
                              _vm._v(
                                "\n                    Los leads se enviarán automáticamente a los asesores\n                    asignados al Proyecto "
                              ),
                              _c("b", [_vm._v(_vm._s(_vm.project.name_es))]),
                              _vm._v(
                                ", se designará 1 lead por orden de llegada a cada asesor.\n                  "
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-12 py-3" },
                              [_c("IconContact")],
                              1
                            )
                          ])
                        ])
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
                    [_vm._v("\n        Ok\n      ")]
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
              _vm._v("Detalle Cotización")
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
                  _c("div", { staticClass: "col-lg-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { staticClass: "font-weight-bold" }, [
                        _vm._v("Nombre:")
                      ]),
                      _vm._v(" "),
                      _c("p", [_vm._v(_vm._s(_vm.element.fullname))])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { staticClass: "font-weight-bold" }, [
                        _vm._v("DNI:")
                      ]),
                      _vm._v(" "),
                      _c("p", [_vm._v(_vm._s(_vm.element.document_number))])
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
                      _c("label", { staticClass: "font-weight-bold d-block" }, [
                        _vm._v("Asesor:")
                      ]),
                      _vm._v(" "),
                      _vm.element.advisor_rel
                        ? _c("div", {}, [
                            _c(
                              "div",
                              { staticClass: "media align-items-center" },
                              [
                                _vm.element.advisor_rel.avatar
                                  ? _c(
                                      "span",
                                      {
                                        staticClass:
                                          "avatar avatar-sm mr-3 rounded-circle bg-primary"
                                      },
                                      [
                                        _c("img", {
                                          attrs: {
                                            src:
                                              _vm.imagesUrl +
                                              "/advisors/" +
                                              _vm.element.advisor_rel.avatar
                                          }
                                        })
                                      ]
                                    )
                                  : _vm._e(),
                                _vm._v(
                                  _vm._s(_vm.element.advisor_rel.name) +
                                    "\n              "
                                )
                              ]
                            )
                          ])
                        : _c("div", [
                            _c("p", [_vm._v("Asesor no asignado aún.")])
                          ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { staticClass: "font-weight-bold d-block" }, [
                        _vm._v("Proyecto:")
                      ]),
                      _vm._v(" "),
                      _vm.element.project_rel
                        ? _c("div", {}, [
                            _c("p", { staticClass: "mb-0" }, [
                              _vm._v(_vm._s(_vm.element.project_rel.name_es))
                            ]),
                            _vm._v(" "),
                            _vm.element.project_rel.images_format
                              ? _c("img", {
                                  attrs: {
                                    width: "150",
                                    height: "auto",
                                    src:
                                      _vm.imagesUrl +
                                      "/projects/" +
                                      _vm.element.project_rel.images_format[0],
                                    alt: ""
                                  }
                                })
                              : _vm._e()
                          ])
                        : _vm._e()
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { staticClass: "font-weight-bold d-block" }, [
                        _vm._v("Tipología:")
                      ]),
                      _vm._v(" "),
                      _c("div", {}, [
                        _c("p", { staticClass: "mb-0" }, [
                          _vm._v(
                            "\n                " +
                              _vm._s(
                                _vm.element.project_type_department_rel.name
                              ) +
                              "\n              "
                          )
                        ]),
                        _vm._v(" "),
                        _c("img", {
                          attrs: {
                            width: "150",
                            height: "auto",
                            src:
                              _vm.imagesUrl +
                              "/projects/tipologies/" +
                              _vm.element.project_type_department_rel.image,
                            alt: ""
                          }
                        })
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { staticClass: "font-weight-bold" }, [
                        _vm._v("Mensaje:")
                      ]),
                      _vm._v(" "),
                      _vm.element.message
                        ? _c("p", [_vm._v(_vm._s(_vm.element.message))])
                        : _c("p", [_vm._v("No hay mensaje registrado")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { staticClass: "font-weight-bold" }, [
                        _vm._v("Enviado a Webhook:")
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          _vm._s(
                            _vm.element.sended_to_webhook
                              ? "Enviado"
                              : "No enviado"
                          )
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12" }, [
                    _c("div", { staticClass: "form-group mb-0" }, [
                      _c("label", { staticClass: "font-weight-bold" }, [
                        _vm._v("Parámetros UTM:")
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { staticClass: "font-weight-bold" }, [
                        _vm._v("UTM Source:")
                      ]),
                      _vm._v(" "),
                      _vm.element.utm_source
                        ? _c("p", [_vm._v(_vm._s(_vm.element.utm_source))])
                        : _c("p", [_vm._v("No registrado")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { staticClass: "font-weight-bold" }, [
                        _vm._v("UTM Medium:")
                      ]),
                      _vm._v(" "),
                      _vm.element.utm_medium
                        ? _c("p", [_vm._v(_vm._s(_vm.element.utm_medium))])
                        : _c("p", [_vm._v("No registrado")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { staticClass: "font-weight-bold" }, [
                        _vm._v("UTM Campaign:")
                      ]),
                      _vm._v(" "),
                      _vm.element.utm_campaign
                        ? _c("p", [_vm._v(_vm._s(_vm.element.utm_campaign))])
                        : _c("p", [_vm._v("No registrado")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { staticClass: "font-weight-bold" }, [
                        _vm._v("UTM Term:")
                      ]),
                      _vm._v(" "),
                      _vm.element.utm_term
                        ? _c("p", [_vm._v(_vm._s(_vm.element.utm_term))])
                        : _c("p", [_vm._v("No registrado")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { staticClass: "font-weight-bold" }, [
                        _vm._v("UTM Content:")
                      ]),
                      _vm._v(" "),
                      _vm.element.utm_content
                        ? _c("p", [_vm._v(_vm._s(_vm.element.utm_content))])
                        : _c("p", [_vm._v("No registrado")])
                    ])
                  ])
                ])
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
            size: "md",
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
                      attrs: { type: "button", disabled: _vm.request_todo },
                      on: { click: _vm.allExportFunction }
                    },
                    [
                      _vm.request_todo
                        ? _c("span", [
                            _vm._v("\n          Cargando\n          "),
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
                                _c(
                                  "g",
                                  {
                                    attrs: {
                                      fill: "none",
                                      "fill-rule": "evenodd"
                                    }
                                  },
                                  [
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
                                  ]
                                )
                              ]
                            )
                          ])
                        : _c("span", [_vm._v("Todo")])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-inverse-info",
                      attrs: { type: "button", disabled: _vm.request_filter },
                      on: { click: _vm.filterExportFunction }
                    },
                    [
                      _vm.request_filter
                        ? _c("span", [
                            _vm._v("\n          Cargando\n          "),
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
                                _c(
                                  "g",
                                  {
                                    attrs: {
                                      fill: "none",
                                      "fill-rule": "evenodd"
                                    }
                                  },
                                  [
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
                                  ]
                                )
                              ]
                            )
                          ])
                        : _c("span", [_vm._v("Con Filtros")])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-inverse-light",
                      attrs: { type: "button" },
                      on: { click: _vm.restoreEl }
                    },
                    [_vm._v("\n        Cerrar\n      ")]
                  )
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
            _c("div", { staticClass: "text-primary h2" }, [
              _vm._v("Exportar Leads")
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
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-12" }, [
              _c(
                "div",
                { staticClass: "form-group" },
                [
                  _c(
                    "label",
                    { staticClass: "font-weight-bold", attrs: { for: "from" } },
                    [_vm._v("Desde")]
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
                        value: _vm.element_form.from,
                        callback: function($$v) {
                          _vm.$set(_vm.element_form, "from", $$v)
                        },
                        expression: "element_form.from"
                      }
                    },
                    [_c("jam-calendar")],
                    1
                  ),
                  _vm._v(" "),
                  _vm.errors_form && _vm.errors_form.from
                    ? _c(
                        "label",
                        {
                          staticClass: "mt-2 text-danger text-sm",
                          attrs: { for: "from" }
                        },
                        [_vm._v(_vm._s(_vm.errors_form.from[0]))]
                      )
                    : _vm._e()
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-12" }, [
              _c(
                "div",
                { staticClass: "form-group" },
                [
                  _c(
                    "label",
                    { staticClass: "font-weight-bold", attrs: { for: "to" } },
                    [_vm._v("Hasta")]
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
                        value: _vm.element_form.to,
                        callback: function($$v) {
                          _vm.$set(_vm.element_form, "to", $$v)
                        },
                        expression: "element_form.to"
                      }
                    },
                    [_c("jam-calendar")],
                    1
                  ),
                  _vm._v(" "),
                  _vm.errors_form && _vm.errors_form.to
                    ? _c(
                        "label",
                        {
                          staticClass: "mt-2 text-danger text-sm",
                          attrs: { for: "to" }
                        },
                        [_vm._v(_vm._s(_vm.errors_form.to[0]))]
                      )
                    : _vm._e()
                ],
                1
              )
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

/***/ "./resources/js/views/projects/quotations/Index.vue":
/*!**********************************************************!*\
  !*** ./resources/js/views/projects/quotations/Index.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_789ed2e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=789ed2e0& */ "./resources/js/views/projects/quotations/Index.vue?vue&type=template&id=789ed2e0&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/projects/quotations/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/projects/quotations/Index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_789ed2e0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_789ed2e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/projects/quotations/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/projects/quotations/Index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/projects/quotations/Index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/projects/quotations/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/projects/quotations/Index.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/projects/quotations/Index.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/projects/quotations/Index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/projects/quotations/Index.vue?vue&type=template&id=789ed2e0&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/projects/quotations/Index.vue?vue&type=template&id=789ed2e0& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_789ed2e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=789ed2e0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/projects/quotations/Index.vue?vue&type=template&id=789ed2e0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_789ed2e0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_789ed2e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);