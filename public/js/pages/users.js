(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/pages/users"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DataTable.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DataTable.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Loader */ "./resources/js/components/Loader.vue");
/* harmony import */ var vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-loading-skeleton */ "./node_modules/vue-loading-skeleton/dist/vue-loading-skeleton.esm.js");
/* harmony import */ var simplebar_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! simplebar-vue */ "./node_modules/simplebar-vue/dist/simplebar-vue.esm.js");
/* harmony import */ var simplebar_dist_simplebar_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! simplebar/dist/simplebar.min.css */ "./node_modules/simplebar/dist/simplebar.min.css");
/* harmony import */ var simplebar_dist_simplebar_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(simplebar_dist_simplebar_min_css__WEBPACK_IMPORTED_MODULE_3__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    entriesProp: {
      type: Number,
      required: false
    },
    loadingProp: {
      type: Boolean,
      required: false
    },
    searchProp: {
      type: String,
      required: false
    },
    object: {
      type: Object,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    },
    buttonRead: {
      type: Boolean,
      required: true
    },
    buttonUpdate: {
      type: Boolean,
      required: true
    },
    buttonDisable: {
      type: Boolean,
      required: false,
      "default": false
    },
    buttonDelete: {
      type: Boolean,
      required: true
    }
  },
  data: function data() {
    return {
      entries: 10,
      //offset: 1,
      pageActive: 1,
      search: "",
      loading: true
    };
  },
  components: {
    Loader: _Loader__WEBPACK_IMPORTED_MODULE_0__["default"],
    Skeleton: vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__["Skeleton"],
    simplebar: simplebar_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  methods: {
    clickDisable: function clickDisable(id) {
      this.$emit("disable", id);
    },
    clickDelete: function clickDelete(id) {
      this.$emit("delete", id);
    },
    clickRead: function clickRead(id) {
      this.$emit("read", id);
    },
    clickUpdate: function clickUpdate(id) {
      this.$emit("update", id);
    },
    clickNextPage: function clickNextPage() {
      if (this.search) {
        this.$emit("get", this.currentPage + 1, this.entries, this.search);
      } else {
        this.$emit("get", this.currentPage + 1, this.entries);
      }

      this.loading = true;
    },
    clickPrevPage: function clickPrevPage() {
      if (this.search) {
        this.$emit("get", this.currentPage - 1, this.entries, this.search);
      } else {
        this.$emit("get", this.currentPage - 1, this.entries);
      }

      this.loading = true;
    },
    clickPage: function clickPage(page) {
      if (this.search) {
        this.$emit("get", page, this.entries, this.search);
      } else {
        this.$emit("get", page, this.entries);
      }

      this.loading = true;
    },
    changePagination: function changePagination() {
      if (this.search) {
        this.$emit("get", 1, this.entries, this.search);
      } else {
        this.$emit("get", 1, this.entries);
      }

      this.loading = true;
    }
  },
  watch: {
    elementsPerPage: function elementsPerPage(newValue, oldValue) {
      if (newValue) {
        this.entries = newValue;
      }
    },
    search: function search(newValue, oldValue) {
      this.$emit("get", 1, this.entries, newValue);
      this.$emit("update:searchProp", String(newValue));
      this.loading = true;
    },
    object: function object(newValue, oldValue) {
      this.loading = true;

      if (newValue) {
        this.loading = false;
      }
    },
    loadingProp: function loadingProp(newValue, oldValue) {
      this.loading = newValue;
    },
    loading: function loading(newValue, oldValue) {
      this.$emit("update:loadingProp", Boolean(newValue));
    },
    entriesProp: function entriesProp(newValue, oldValue) {
      this.entries = newValue;
    },
    entries: function entries(newValue, oldValue) {
      this.$emit("update:entriesProp", Number(newValue));
    },
    searchProp: function searchProp(newValue, oldValue) {
      this.search = newValue;
    },
    currentPage: function currentPage(newValue, oldValue) {
      if (newValue) {
        this.pageActive = newValue;
      }
    }
  },
  computed: {
    headers: function headers() {
      if (this.object.headers) {
        return this.object.headers.filter(function (valor, i) {
          return i > 0;
        });
      }
    },
    elements: function elements() {
      if (this.object.data) {
        var data = [];
        var object = this.object.data;

        for (var key_object in object) {
          var object_2 = object[key_object];
          data[key_object] = [];

          for (var key_element in object_2) {
            if (key_element != "id" && key_element != "action") {
              data[key_object].push(object_2[key_element]);
            }
          }
        }

        return data;
      }
    },
    to: function to() {
      return this.object.from;
    },
    from: function from() {
      return this.object.to;
    },
    total: function total() {
      return this.object.total;
    },
    lastPage: function lastPage() {
      return this.object.last_page;
    },
    currentPage: function currentPage() {
      return this.object.current_page;
    }
  }
});

/***/ }),

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/configuration/Users.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/configuration/Users.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-loading-skeleton */ "./node_modules/vue-loading-skeleton/dist/vue-loading-skeleton.esm.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Button */ "./resources/js/components/Button.vue");
/* harmony import */ var _components_DataTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/DataTable */ "./resources/js/components/DataTable.vue");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue2-dropzone */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.js");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/BreadCrumb */ "./resources/js/components/BreadCrumb.vue");
/* harmony import */ var _components_modals_Destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/modals/Destroy */ "./resources/js/components/modals/Destroy.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    routeGetAll: String,
    route: String
  },
  components: {
    DataTable: _components_DataTable__WEBPACK_IMPORTED_MODULE_2__["default"],
    Button: _components_Button__WEBPACK_IMPORTED_MODULE_1__["default"],
    BreadCrumb: _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_4__["default"],
    Skeleton: vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_0__["Skeleton"],
    vueDropzone: vue2_dropzone__WEBPACK_IMPORTED_MODULE_3___default.a,
    Destroy: _components_modals_Destroy__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    return {
      users: {},
      showBlock: true,
      createBlock: false,
      editBlock: false,
      detailBlock: false,
      dropzoneOptions: {
        url: "/",
        maxFiles: 1,
        acceptedFiles: "image/png,image/jpeg,image/jpg,image/svg+xml",
        autoProcessQueue: false,
        thumbnailWidth: 150,
        addRemoveLinks: true,
        dictRemoveFile: "Remover"
      },
      user: {
        rel_role: {},
        role_id: "",
        username: "",
        password: "",
        name: "",
        email: "",
        status: false,
        available: false
      },
      elementsPerPage: 10,
      errors: {},
      requestLoading: false,
      requestServer: false,
      modalDestroy: false
    };
  },
  methods: {
    restoreEl: function restoreEl() {
      this.showBlock = true;
      this.createBlock = this.editBlock = this.detailBlock = this.requestServer = this.modalDestroy = false;
      this.errors = {}, this.user = {
        rel_role: {},
        role_id: "",
        username: "",
        password: "",
        name: "",
        email: ""
      };
    },
    restorePage: function restorePage() {
      this.showBlock = true;
      this.getUsers(1, this.elementsPerPage);
      this.createBlock = this.editBlock = this.detailBlock = this.requestServer = this.modalDestroy = false;
      this.errors = {}, this.user = {
        rel_role: {},
        role_id: "",
        username: "",
        password: "",
        name: "",
        email: ""
      };
    },
    getUser: function getUser(id) {
      var _this = this;

      this.requestLoading = true;
      axios.get(this.route + '/json/get/' + id).then(function (response) {
        _this.user = response.data;
        _this.requestLoading = false;
      })["catch"](function (error) {});
    },
    getUsers: function getUsers(page, itemsPerPage) {
      var _this2 = this;

      var q = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var url = this.routeGetAll + "?page=" + page + "&itemsPerPage=" + itemsPerPage;

      if (q) {
        url = url + "&q=" + q;
      }

      axios.get(url).then(function (response) {
        _this2.users = response.data;
      })["catch"](function (error) {});
    },
    showUser: function showUser(id) {
      this.getUser(id);
      this.showBlock = false;
      this.detailBlock = true;
    },
    editUser: function editUser(id) {
      this.getUser(id);
      this.showBlock = false;
      this.editBlock = true;
    },
    deleteUser: function deleteUser(id) {
      //this.$refs["modal-eliminar"].show();
      this.modalDestroy = true;
      this.getUser(id);
    },

    /*disableUser(id) {
      this.$refs["modal-disable"].show();
      this.getUser(id);
    },
    disableUserConfirm() {
      this.requestServer = true;
      axios
        .put("usuarios/deshabilitar/" + this.user.id)
        .then((response) => {
          this.restorePage();
          Swal.fire({
            title: response.data.title,
            text: response.data.message,
            type: "success",
            confirmButtonText: "OK",
            buttonsStyling: false,
            customClass: {
              confirmButton: "btn btn-inverse-primary",
            },
          });
        })
        .catch((error) => {
          this.restoreEl();
        });
    },*/
    destroyConfirm: function destroyConfirm() {
      var _this3 = this;

      this.requestServer = true;
      axios["delete"]("usuarios/" + this.user.id).then(function (response) {
        _this3.restorePage();

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
        _this3.restoreEl();
      });
    },
    updateUser: function updateUser() {
      var _this4 = this;

      this.requestServer = true;
      var fd = new FormData();
      fd.append("name", this.user.name);
      fd.append("username", this.user.username);
      fd.append("email", this.user.email);

      if (this.user.password) {
        fd.append("password", this.user.password);
      }

      if (this.user.available) {
        fd.append("available", 1);
      }

      fd.append("id", this.user.id);

      if (this.$refs.ref_image.dropzone.files[0]) {
        fd.append("avatar", this.$refs.ref_image.dropzone.files[0]);
      }

      fd.append("_method", "put");
      axios.post("usuarios/" + this.user.id, fd).then(function (response) {
        _this4.requestServer = false;

        _this4.restorePage();

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
        if (error.response.status === 422) {
          _this4.requestServer = false;
          _this4.errors = error.response.data.errors || {};
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

        _this4.restorePage();
      });
    },
    createUser: function createUser() {
      var _this5 = this;

      this.requestServer = true;
      var fd = new FormData();
      fd.append("name", this.user.name);
      fd.append("email", this.user.email);
      fd.append("password", this.user.password);

      if (this.$refs.ref_image.dropzone.files[0]) {
        fd.append("avatar", this.$refs.ref_image.dropzone.files[0]);
      }

      axios.post("usuarios", fd).then(function (response) {
        _this5.requestServer = false;

        _this5.restorePage();

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
        _this5.requestServer = false;

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

        _this5.restorePage();
      });
    }
  },
  created: function created() {
    this.getUsers(1, this.elementsPerPage);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DataTable.vue?vue&type=template&id=4b997e69&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DataTable.vue?vue&type=template&id=4b997e69& ***!
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
  return _c("div", { staticClass: "row" }, [
    _c(
      "div",
      { staticClass: "col-12 mb-4" },
      [
        _vm._t("filtros"),
        _vm._v(" "),
        _vm.elements && _vm.elements.length
          ? _c("div", { staticClass: "row d-flex align-items-center" }, [
              _c("div", { staticClass: "col-12 col-md-6 mb-3 mb-md-0" }, [
                _c("label", { staticClass: "mb-0", attrs: { for: "show" } }, [
                  _c("small", [_vm._v("Mostrar")]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.entries,
                          expression: "entries"
                        }
                      ],
                      staticClass:
                        "mx-2 form-control bg-white form-control-sm w-auto d-inline-block",
                      attrs: { id: "show" },
                      on: {
                        change: [
                          function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.entries = $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          },
                          function($event) {
                            return _vm.changePagination()
                          }
                        ]
                      }
                    },
                    [
                      _c("option", { attrs: { value: "10" } }, [_vm._v("10")]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "20" } }, [_vm._v("20")]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "50" } }, [_vm._v("50")]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "100" } }, [_vm._v("100")])
                    ]
                  ),
                  _vm._v(" "),
                  _c("small", [_vm._v("entradas")])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-12 col-md-6" }, [
                _c("div", { staticClass: "input-group input-group-merge" }, [
                  _c("div", { staticClass: "input-group-prepend bg-white" }, [
                    _c(
                      "span",
                      {
                        staticClass: "input-group-text bg-white",
                        attrs: { id: "search" }
                      },
                      [
                        _c("jam-search", {
                          staticClass: "current-color",
                          attrs: { height: "22", width: "22" }
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.search,
                        expression: "search"
                      }
                    ],
                    staticClass: "form-control bg-white",
                    attrs: {
                      type: "search",
                      placeholder: "Buscar por " + _vm.placeholder,
                      "aria-label": "search",
                      "aria-describedby": "search"
                    },
                    domProps: { value: _vm.search },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.search = $event.target.value
                      }
                    }
                  })
                ])
              ])
            ])
          : _vm._e()
      ],
      2
    ),
    _vm._v(" "),
    _c("div", { staticClass: "col-12" }, [
      _c("div", { staticClass: "card" }, [
        _vm.loading
          ? _c("div", [
              _c("table", { staticClass: "table align-items-center" }, [
                _c("thead", { staticClass: "thead-light" }, [
                  _c(
                    "tr",
                    _vm._l(5, function(i) {
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
                  _vm._l(5, function(i) {
                    return _c(
                      "tr",
                      { key: i },
                      _vm._l(5, function(j) {
                        return _c("td", { key: j }, [_c("Skeleton")], 1)
                      }),
                      0
                    )
                  }),
                  0
                )
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "table-responsive" },
          [
            !_vm.loading
              ? _c(
                  "simplebar",
                  { attrs: { "data-simplebar-auto-hide": "false" } },
                  [
                    _c("table", { staticClass: "table align-items-center" }, [
                      _c("thead", { staticClass: "thead-light" }, [
                        _c(
                          "tr",
                          [
                            _c(
                              "th",
                              {
                                staticClass: "border-0",
                                attrs: { width: "3%" }
                              },
                              [_vm._v("#")]
                            ),
                            _vm._v(" "),
                            _vm._l(_vm.headers, function(el, index) {
                              return _c(
                                "th",
                                { key: index, staticClass: "border-0" },
                                [_vm._v(_vm._s(el))]
                              )
                            }),
                            _vm._v(" "),
                            _vm._t("header_action"),
                            _vm._v(" "),
                            _c("th", { staticClass: "border-0" }, [
                              _vm._v("Operaciones")
                            ])
                          ],
                          2
                        )
                      ]),
                      _vm._v(" "),
                      _vm.object.data && _vm.object.data.length > 0
                        ? _c(
                            "tbody",
                            _vm._l(_vm.object.data, function(element, i) {
                              return _c(
                                "tr",
                                { key: element.id },
                                [
                                  _c("td", [
                                    _vm._v(_vm._s(_vm.object.from + i))
                                  ]),
                                  _vm._v(" "),
                                  _vm._l(_vm.elements[i], function(el, j) {
                                    return _c("td", {
                                      key: j,
                                      domProps: { innerHTML: _vm._s(el) }
                                    })
                                  }),
                                  _vm._v(" "),
                                  _vm._t("td_action_" + element.id),
                                  _vm._v(" "),
                                  _c("td", { staticClass: "table-actions" }, [
                                    _vm.buttonRead == true
                                      ? _c(
                                          "a",
                                          {
                                            staticClass:
                                              "btn btn-sm btn-icon-only rounded-circle btn-secondary",
                                            attrs: { href: "#" },
                                            on: {
                                              click: function($event) {
                                                $event.preventDefault()
                                                return _vm.clickRead(element.id)
                                              }
                                            }
                                          },
                                          [
                                            _c("jam-eye", {
                                              staticClass: "current-color",
                                              attrs: {
                                                height: "18",
                                                width: "18"
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.buttonUpdate == true
                                      ? _c(
                                          "a",
                                          {
                                            staticClass:
                                              "btn btn-sm btn-icon-only rounded-circle btn-secondary",
                                            attrs: { href: "#" },
                                            on: {
                                              click: function($event) {
                                                $event.preventDefault()
                                                return _vm.clickUpdate(
                                                  element.id
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _c("jam-pencil", {
                                              staticClass: "current-color",
                                              attrs: {
                                                height: "18",
                                                width: "18"
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.buttonDisable == true
                                      ? _c(
                                          "a",
                                          {
                                            staticClass:
                                              "btn btn-sm btn-icon-only rounded-circle btn-secondary",
                                            attrs: { href: "#" },
                                            on: {
                                              click: function($event) {
                                                $event.preventDefault()
                                                return _vm.clickDisable(
                                                  element.id
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _c("jam-stop-sign", {
                                              staticClass: "current-color",
                                              attrs: {
                                                height: "18",
                                                width: "18"
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.buttonDelete == true
                                      ? _c(
                                          "a",
                                          {
                                            staticClass:
                                              "btn btn-sm btn-icon-only rounded-circle btn-inverse-danger",
                                            attrs: { href: "#" },
                                            on: {
                                              click: function($event) {
                                                $event.preventDefault()
                                                return _vm.clickDelete(
                                                  element.id
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _c("jam-trash", {
                                              staticClass: "current-color",
                                              attrs: {
                                                height: "18",
                                                width: "18"
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      : _vm._e()
                                  ])
                                ],
                                2
                              )
                            }),
                            0
                          )
                        : _c("tbody", [
                            _c("tr", [
                              _c(
                                "td",
                                {
                                  attrs: {
                                    colspan:
                                      _vm.object.headers &&
                                      _vm.object.headers.length + 1
                                  }
                                },
                                [_vm._v("No se encontraron resultados.")]
                              )
                            ])
                          ])
                    ])
                  ]
                )
              : _vm._e()
          ],
          1
        )
      ]),
      _vm._v(" "),
      !_vm.loading
        ? _c("div", { staticClass: "row mt-4" }, [
            _c("div", { staticClass: "col-6 pt-2" }, [
              _vm.to && _vm.from
                ? _c("small", {}, [
                    _vm._v(
                      "Mostrando " +
                        _vm._s(_vm.to) +
                        " de " +
                        _vm._s(_vm.from) +
                        " de " +
                        _vm._s(_vm.total) +
                        " entradas"
                    )
                  ])
                : _c("small", [
                    _vm.to
                      ? _c("span", [_vm._v(_vm._s(_vm.total) + " entradas")])
                      : _vm._e()
                  ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-6" }, [
              _c("ul", { staticClass: "pagination justify-content-end mb-0" }, [
                _c("li", { staticClass: "page-item" }, [
                  _vm.currentPage > 1
                    ? _c(
                        "a",
                        {
                          staticClass: "page-link rounded-circle",
                          attrs: { href: "#" },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.clickPrevPage()
                            }
                          }
                        },
                        [
                          _c("jam-arrow-left", { staticClass: "current-color" })
                        ],
                        1
                      )
                    : _vm._e()
                ]),
                _vm._v(" "),
                _vm.elements && _vm.elements.length
                  ? _c(
                      "li",
                      {
                        staticClass: "page-item mx-2",
                        class: [
                          _vm.pageActive == _vm.currentPage
                            ? "active disabled"
                            : ""
                        ]
                      },
                      [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.pageActive,
                                expression: "pageActive"
                              }
                            ],
                            staticClass: "form-control bg-white px-2 py-0",
                            staticStyle: { height: "36px" },
                            attrs: { id: "" },
                            on: {
                              change: [
                                function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.pageActive = $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                },
                                function($event) {
                                  return _vm.clickPage(_vm.pageActive)
                                }
                              ]
                            }
                          },
                          _vm._l(_vm.lastPage, function(i) {
                            return _c(
                              "option",
                              { key: i, domProps: { value: i } },
                              [_vm._v(_vm._s(i++))]
                            )
                          }),
                          0
                        )
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c("li", { staticClass: "page-item" }, [
                  _vm.currentPage < _vm.lastPage
                    ? _c(
                        "a",
                        {
                          staticClass: "page-link rounded-circle",
                          attrs: { href: "#" },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.clickNextPage()
                            }
                          }
                        },
                        [
                          _c("jam-arrow-right", {
                            staticClass: "current-color"
                          })
                        ],
                        1
                      )
                    : _vm._e()
                ])
              ])
            ])
          ])
        : _vm._e()
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/configuration/Users.vue?vue&type=template&id=45c686e0&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/configuration/Users.vue?vue&type=template&id=45c686e0& ***!
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
                        title: _vm.createBlock
                          ? "Crear Usuario"
                          : _vm.detailBlock
                          ? "Ver Usuario"
                          : _vm.editBlock
                          ? "Actualizar Usuario"
                          : "Usuarios",
                        parent: "Configuración",
                        active: "Usuarios"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-12 col-lg text-right" }, [
                  _vm.showBlock
                    ? _c(
                        "a",
                        {
                          staticClass: "btn btn-icon btn-inverse-primary",
                          attrs: { href: "#" },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return (function() {
                                _vm.showBlock = false
                                _vm.createBlock = true
                              })($event)
                            }
                          }
                        },
                        [
                          _c(
                            "span",
                            { staticClass: "btn-inner--icon" },
                            [
                              _c("jam-user-circle", {
                                staticClass: "current-color"
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("span", { staticClass: "btn-inner--text" }, [
                            _vm._v("Nuevo Usuario")
                          ])
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.detailBlock
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-secondary",
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.restoreEl($event)
                            }
                          }
                        },
                        [
                          _c("jam-arrow-left", {
                            staticClass: "mr-2 current-color"
                          }),
                          _vm._v("Regresar\n            ")
                        ],
                        1
                      )
                    : _vm._e()
                ])
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
          _c("DataTable", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.showBlock,
                expression: "showBlock"
              }
            ],
            attrs: {
              object: _vm.users,
              placeholder: "Nombre, Usuario",
              "button-update": true,
              "button-read": true,
              "button-delete": true,
              "button-disable": false,
              "entries-prop": _vm.elementsPerPage
            },
            on: {
              get: _vm.getUsers,
              read: _vm.showUser,
              delete: _vm.deleteUser,
              update: _vm.editUser,
              "update:entriesProp": function($event) {
                _vm.elementsPerPage = $event
              },
              "update:entries-prop": function($event) {
                _vm.elementsPerPage = $event
              }
            }
          }),
          _vm._v(" "),
          (_vm.editBlock && _vm.requestLoading) ||
          (_vm.detailBlock && _vm.requestLoading)
            ? _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-body" }, [
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col-12 text-center mb-4" },
                      [
                        _c("Skeleton", {
                          attrs: { circle: "", height: "120px", width: "120px" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-6 mb-4" },
                      [_c("Skeleton")],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-6 mb-4" },
                      [_c("Skeleton")],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-6 mb-4" },
                      [_c("Skeleton")],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-6" }, [_c("Skeleton")], 1)
                  ])
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.editBlock && !_vm.requestLoading
            ? _c("div", { staticClass: "card mb-4" }, [
                _c("div", { staticClass: "card-body" }, [
                  _c(
                    "form",
                    {
                      attrs: { enctype: "multipart/form-data" },
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.updateUser($event)
                        }
                      }
                    },
                    [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-12" }, [
                          _c("div", { staticClass: "form-group text-center" }, [
                            _c(
                              "label",
                              {
                                staticClass: "font-weight-bold",
                                attrs: { for: "id_imagen" }
                              },
                              [_vm._v("Avatar")]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-lg" }),
                              _vm._v(" "),
                              _vm.user.avatar
                                ? _c(
                                    "div",
                                    {
                                      staticClass:
                                        "col-12 col-lg-3 mb-3 mb-lg-0"
                                    },
                                    [
                                      _c("img", {
                                        staticClass:
                                          "rounded-circle object-fit--cover d-block mx-auto mb-3",
                                        attrs: {
                                          alt: "Colaborador",
                                          height: "120",
                                          width: "120",
                                          src:
                                            "/files/img/users/" +
                                            _vm.user.avatar
                                        }
                                      })
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "col-12 col-lg-3" },
                                [
                                  _c(
                                    "vue-dropzone",
                                    {
                                      ref: "ref_image",
                                      staticClass: "text-center",
                                      attrs: {
                                        id: "id_imagen",
                                        options: _vm.dropzoneOptions,
                                        duplicateCheck: true,
                                        useCustomSlot: true
                                      },
                                      on: {
                                        "vdropzone-file-added": function(
                                          $event
                                        ) {
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
                                            "h3",
                                            {
                                              staticClass:
                                                "dropzone-custom-title text-primary"
                                            },
                                            [
                                              _vm._v(
                                                "Suelte el archivo aquí o haga click para cargarlo."
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
                              _c("div", { staticClass: "col-lg" })
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-12 col-md-6" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticClass: "font-weight-bold",
                                attrs: { for: "name" }
                              },
                              [_vm._v("Nombre:")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.user.name,
                                  expression: "user.name"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                id: "name",
                                placeholder: "Nombre"
                              },
                              domProps: { value: _vm.user.name },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.user,
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
                                    staticClass: "mt-2 mb-0 text-danger",
                                    attrs: { for: "name" }
                                  },
                                  [_vm._v(_vm._s(_vm.errors.name[0]))]
                                )
                              : _vm._e()
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-12 col-md-6" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticClass: "font-weight-bold",
                                attrs: { for: "email" }
                              },
                              [_vm._v("Email:")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.user.email,
                                  expression: "user.email"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                id: "email",
                                placeholder: "Email"
                              },
                              domProps: { value: _vm.user.email },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.user,
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
                                    staticClass: "mt-2 mb-0 text-danger",
                                    attrs: { for: "email" }
                                  },
                                  [_vm._v(_vm._s(_vm.errors.email[0]))]
                                )
                              : _vm._e()
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-12 col-md-6" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticClass: "font-weight-bold",
                                attrs: { for: "password" }
                              },
                              [_vm._v("Contraseña:")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.user.contrasena,
                                  expression: "user.contrasena"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "password",
                                id: "password",
                                placeholder: "Contraseña"
                              },
                              domProps: { value: _vm.user.contrasena },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.user,
                                    "contrasena",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("small", { attrs: { id: "password" } }, [
                              _vm._v(
                                "La contraseña debe tener mínimo 8 caracteres."
                              )
                            ]),
                            _vm._v(" "),
                            _vm.errors && _vm.errors.contrasena
                              ? _c(
                                  "label",
                                  {
                                    staticClass: "mt-2 mb-0 text-danger",
                                    attrs: { for: "password" }
                                  },
                                  [_vm._v(_vm._s(_vm.errors.contrasena[0]))]
                                )
                              : _vm._e()
                          ])
                        ]),
                        _vm._v(" "),
                        !_vm.user.status
                          ? _c("div", { staticClass: "col-12 col-lg-6" }, [
                              _c(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  _c(
                                    "b-form-checkbox",
                                    {
                                      attrs: {
                                        id: "id_checkbox_status",
                                        name: "available"
                                      },
                                      model: {
                                        value: _vm.user.available,
                                        callback: function($$v) {
                                          _vm.$set(_vm.user, "available", $$v)
                                        },
                                        expression: "user.available"
                                      }
                                    },
                                    [_vm._v("Activar")]
                                  )
                                ],
                                1
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-12 text-right" },
                          [
                            _c("Button", {
                              attrs: {
                                text: "Actualizar",
                                classes: ["btn-inverse-primary", "mr-2"],
                                "request-server": _vm.requestServer,
                                º: ""
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-secondary",
                                attrs: { type: "button" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.restorePage($event)
                                  }
                                }
                              },
                              [_vm._v("Cancelar")]
                            )
                          ],
                          1
                        )
                      ])
                    ]
                  )
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.createBlock
            ? _c("div", { staticClass: "card mb-4" }, [
                _c("div", { staticClass: "card-body" }, [
                  _c(
                    "form",
                    {
                      attrs: { enctype: "multipart/form-data" },
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.createUser($event)
                        }
                      }
                    },
                    [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-12" }, [
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c(
                                "label",
                                {
                                  staticClass: "font-weight-bold",
                                  attrs: { for: "id_imagen" }
                                },
                                [_vm._v("Avatar:")]
                              ),
                              _vm._v(" "),
                              _c(
                                "vue-dropzone",
                                {
                                  ref: "ref_image",
                                  attrs: {
                                    id: "id_imagen",
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
                                    { staticClass: "dropzone-custom-content" },
                                    [
                                      _c(
                                        "h3",
                                        {
                                          staticClass:
                                            "dropzone-custom-title text-primary"
                                        },
                                        [
                                          _vm._v(
                                            "Suelte el archivo aquí o haga click para cargarlo."
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
                        _c("div", { staticClass: "col-12 col-md-6" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticClass: "font-weight-bold",
                                attrs: { for: "name" }
                              },
                              [_vm._v("Nombre:")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.user.name,
                                  expression: "user.name"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                id: "name",
                                placeholder: "Nombre"
                              },
                              domProps: { value: _vm.user.name },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.user,
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
                                    staticClass: "mt-2 mb-0 text-danger",
                                    attrs: { for: "name" }
                                  },
                                  [_vm._v(_vm._s(_vm.errors.name[0]))]
                                )
                              : _vm._e()
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-12 col-md-6" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticClass: "font-weight-bold",
                                attrs: { for: "password" }
                              },
                              [_vm._v("Contraseña:")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.user.password,
                                  expression: "user.password"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "password",
                                id: "password",
                                placeholder: "Contraseña"
                              },
                              domProps: { value: _vm.user.password },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.user,
                                    "password",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("small", { attrs: { id: "password" } }, [
                              _vm._v(
                                "La contraseña debe tener mínimo 8 caracteres."
                              )
                            ]),
                            _vm._v(" "),
                            _vm.errors && _vm.errors.password
                              ? _c(
                                  "label",
                                  {
                                    staticClass: "mt-2 mb-0 text-danger",
                                    attrs: { for: "password" }
                                  },
                                  [_vm._v(_vm._s(_vm.errors.password[0]))]
                                )
                              : _vm._e()
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-12 col-md-6" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticClass: "font-weight-bold",
                                attrs: { for: "email" }
                              },
                              [_vm._v("Email:")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.user.email,
                                  expression: "user.email"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                id: "email",
                                placeholder: "Email"
                              },
                              domProps: { value: _vm.user.email },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.user,
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
                                    staticClass: "mt-2 mb-0 text-danger",
                                    attrs: { for: "email" }
                                  },
                                  [_vm._v(_vm._s(_vm.errors.email[0]))]
                                )
                              : _vm._e()
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-12 text-right mt-2" },
                          [
                            _c("Button", {
                              attrs: {
                                text: "Guardar",
                                classes: ["btn-inverse-primary", "mr-2"],
                                "request-server": _vm.requestServer
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-secondary",
                                attrs: { type: "button" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.restorePage($event)
                                  }
                                }
                              },
                              [_vm._v("Cancelar")]
                            )
                          ],
                          1
                        )
                      ])
                    ]
                  )
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.detailBlock && !_vm.requestLoading
            ? _c("div", { staticClass: "card mb-4" }, [
                _c("div", { staticClass: "card-body" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-12" }, [
                      _c("div", { staticClass: "form-group text-center" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "rounded-circle mx-auto d-flex avatar avatar-lg text-center mb-2 bg-default",
                            staticStyle: { height: "120px", width: "120px" }
                          },
                          [
                            _vm.user.avatar
                              ? _c("img", {
                                  staticClass:
                                    "shadow rounded-circle object-fit--cover",
                                  attrs: {
                                    src: "/files/img/users/" + _vm.user.avatar,
                                    alt: "Perfil"
                                  }
                                })
                              : _c(
                                  "span",
                                  { staticStyle: { "font-size": "54px" } },
                                  [_vm._v(_vm._s(_vm.user.avatar_initials))]
                                )
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-md-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          {
                            staticClass: "font-weight-bold",
                            attrs: { for: "name" }
                          },
                          [_vm._v("Nombre:")]
                        ),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(this.user.name))])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-md-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          {
                            staticClass: "font-weight-bold",
                            attrs: { for: "email" }
                          },
                          [_vm._v("Email:")]
                        ),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(this.user.email))])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-md-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          {
                            staticClass: "font-weight-bold",
                            attrs: { for: "id_fecha_nacimiento" }
                          },
                          [_vm._v("Registrado el:")]
                        ),
                        _vm._v(" "),
                        this.user.created_at
                          ? _c("p", [
                              _vm._v(_vm._s(this.user.created_at_format))
                            ])
                          : _c("p", [_vm._v("No registrado")])
                      ])
                    ])
                  ])
                ])
              ])
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c("destroy", {
        attrs: {
          element: "usuario",
          open: _vm.modalDestroy,
          "loading-get": _vm.requestLoading,
          "loading-submit": _vm.requestServer
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

/***/ "./resources/js/components/DataTable.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/DataTable.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DataTable_vue_vue_type_template_id_4b997e69___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataTable.vue?vue&type=template&id=4b997e69& */ "./resources/js/components/DataTable.vue?vue&type=template&id=4b997e69&");
/* harmony import */ var _DataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataTable.vue?vue&type=script&lang=js& */ "./resources/js/components/DataTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DataTable_vue_vue_type_template_id_4b997e69___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DataTable_vue_vue_type_template_id_4b997e69___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/DataTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/DataTable.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/DataTable.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DataTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DataTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/DataTable.vue?vue&type=template&id=4b997e69&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/DataTable.vue?vue&type=template&id=4b997e69& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTable_vue_vue_type_template_id_4b997e69___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./DataTable.vue?vue&type=template&id=4b997e69& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DataTable.vue?vue&type=template&id=4b997e69&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTable_vue_vue_type_template_id_4b997e69___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTable_vue_vue_type_template_id_4b997e69___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/views/configuration/Users.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/configuration/Users.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_vue_vue_type_template_id_45c686e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Users.vue?vue&type=template&id=45c686e0& */ "./resources/js/views/configuration/Users.vue?vue&type=template&id=45c686e0&");
/* harmony import */ var _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Users.vue?vue&type=script&lang=js& */ "./resources/js/views/configuration/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Users_vue_vue_type_template_id_45c686e0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Users_vue_vue_type_template_id_45c686e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/configuration/Users.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/configuration/Users.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/configuration/Users.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/configuration/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/configuration/Users.vue?vue&type=template&id=45c686e0&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/configuration/Users.vue?vue&type=template&id=45c686e0& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_45c686e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=template&id=45c686e0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/configuration/Users.vue?vue&type=template&id=45c686e0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_45c686e0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_45c686e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);