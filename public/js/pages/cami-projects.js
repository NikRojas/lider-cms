(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/pages/cami-projects"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form/MultipleElements.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/form/MultipleElements.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-loading-skeleton */ "./node_modules/vue-loading-skeleton/dist/vue-loading-skeleton.esm.js");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue2-dropzone */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.js");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.umd.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _form_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../form/Input */ "./resources/js/components/form/Input.vue");
/* harmony import */ var _form_Editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../form/Editor */ "./resources/js/components/form/Editor.vue");
/* harmony import */ var simplebar_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! simplebar-vue */ "./node_modules/simplebar-vue/dist/simplebar-vue.esm.js");
/* harmony import */ var simplebar_dist_simplebar_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! simplebar/dist/simplebar.min.css */ "./node_modules/simplebar/dist/simplebar.min.css");
/* harmony import */ var simplebar_dist_simplebar_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(simplebar_dist_simplebar_min_css__WEBPACK_IMPORTED_MODULE_6__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    iconsParent: Array,
    messageOrder: String,
    showIconField: {
      type: Boolean,
      "default": false
    }
  },
  components: {
    vueDropzone: vue2_dropzone__WEBPACK_IMPORTED_MODULE_1___default.a,
    draggable: vuedraggable__WEBPACK_IMPORTED_MODULE_2___default.a,
    Input: _form_Input__WEBPACK_IMPORTED_MODULE_3__["default"],
    Editor: _form_Editor__WEBPACK_IMPORTED_MODULE_4__["default"],
    simplebar: simplebar_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    Skeleton: vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_0__["Skeleton"]
  },
  data: function data() {
    return {
      files: [],
      images: [],
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
        if (element.file instanceof File) {
          _this.$refs["ref_file_" + i][0].dropzone.files.pop();

          document.querySelectorAll("#images" + i + ">.dz-preview").forEach(function (a) {
            a.remove();
          }); //Add File

          _this.$refs["ref_file_" + i][0].manuallyAddFile(element.file, "/");

          _this.$refs["ref_file_" + i][0].dropzone.emit("thumbnail", element.file, element.file.dataURL);

          _this.$refs["ref_file_" + i][0].dropzone.emit("complete", element.file);
        }
      });
    },
    updateIcons: function updateIcons() {
      var _this2 = this;

      this.icons.forEach(function (element, i) {
        if (element.file instanceof File) {
          _this2.$refs["ref_icon_" + i][0].dropzone.icons.pop();

          document.querySelectorAll("#icon" + i + ">.dz-preview").forEach(function (a) {
            a.remove();
          }); //Add File

          _this2.$refs["ref_icon_" + i][0].manuallyAddFile(element.file, "/");

          _this2.$refs["ref_icon_" + i][0].dropzone.emit("thumbnail", element.file, element.file.dataURL);

          _this2.$refs["ref_icon_" + i][0].dropzone.emit("complete", element.file);
        }
      });
    },
    handleEnd: function handleEnd(added, removed, moved) {
      var _this3 = this;

      //this.updateImages();
      this.showLoading = true;
      setTimeout(function () {
        _this3.updateImages();

        if (_this3.showIconField) {
          _this3.updateIcons();
        }

        _this3.showLoading = false;
      }, 500);
    },
    add: function add() {
      if (this.files.length) {
        var lastItem = this.files[this.files.length - 1].file;

        if (!lastItem) {
          return false;
        }
      }

      this.files.push({
        file: "",
        title_es: "",
        title_en: "",
        description_es: "",
        description_en: ""
      });
    },
    remove: function remove(index) {
      var _this4 = this;

      this.files.splice(index, 1);
      this.showLoading = true;
      setTimeout(function () {
        _this4.updateImages();

        _this4.showLoading = false;
      }, 500);
    },
    handleAddedFiles: function handleAddedFiles(e, index) {
      var _this5 = this;

      setTimeout(function () {
        _this5.files[index].file = _this5.$refs["ref_file_" + index][0].dropzone.files[0];
      }, 500);
    },
    handleAddedIcons: function handleAddedIcons(e, index) {
      var _this6 = this;

      setTimeout(function () {
        _this6.files[index].icon = _this6.$refs["ref_icon_" + index][0].dropzone.files[0];
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
    },
    icons: {
      immediate: true,
      deep: true,
      handler: function handler(newValue) {
        this.$emit("update:icons", newValue);
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/CamiProjects.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/CamiProjects.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/BreadCrumb */ "./resources/js/components/BreadCrumb.vue");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.umd.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue2-dropzone */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.js");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Button */ "./resources/js/components/Button.vue");
/* harmony import */ var _components_form_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/form/Input */ "./resources/js/components/form/Input.vue");
/* harmony import */ var vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-loading-skeleton */ "./node_modules/vue-loading-skeleton/dist/vue-loading-skeleton.esm.js");
/* harmony import */ var _components_form_Editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/form/Editor */ "./resources/js/components/form/Editor.vue");
/* harmony import */ var _components_modals_Destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/modals/Destroy */ "./resources/js/components/modals/Destroy.vue");
/* harmony import */ var _components_skeleton_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/skeleton/form */ "./resources/js/components/skeleton/form.vue");
/* harmony import */ var _components_form_MultipleElements__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/form/MultipleElements */ "./resources/js/components/form/MultipleElements.vue");
/* harmony import */ var _components_NoData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/NoData */ "./resources/js/components/NoData.vue");
var _components;

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: (_components = {
    BreadCrumb: _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_0__["default"],
    messageCantDelete: String,
    Destroy: _components_modals_Destroy__WEBPACK_IMPORTED_MODULE_7__["default"],
    Button: _components_Button__WEBPACK_IMPORTED_MODULE_3__["default"],
    Input: _components_form_Input__WEBPACK_IMPORTED_MODULE_4__["default"],
    vueDropzone: vue2_dropzone__WEBPACK_IMPORTED_MODULE_2___default.a,
    Skeleton: vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_5__["Skeleton"],
    SkeletonForm: _components_skeleton_form__WEBPACK_IMPORTED_MODULE_8__["default"],
    MultipleElements: _components_form_MultipleElements__WEBPACK_IMPORTED_MODULE_9__["default"],
    draggable: vuedraggable__WEBPACK_IMPORTED_MODULE_1___default.a
  }, _defineProperty(_components, "Input", _components_form_Input__WEBPACK_IMPORTED_MODULE_4__["default"]), _defineProperty(_components, "Editor", _components_form_Editor__WEBPACK_IMPORTED_MODULE_6__["default"]), _defineProperty(_components, "NoData", _components_NoData__WEBPACK_IMPORTED_MODULE_10__["default"]), _components),
  props: {
    route: String,
    routeGetAll: String,
    routeOrder: String,
    imagesUrl: String,
    messageOrder: String
  },
  data: function data() {
    return {
      info: false,
      errors: {},
      requestSubmit: false,
      modalCreateUpdate: false,
      modalDetail: false,
      modalDestroy: false,
      loadingGet: false,
      loadingEls: false,
      loadingSubmit: false,
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
      }
    };
  },
  methods: {
    handleChange: function handleChange() {
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
    destroyConfirm: function destroyConfirm() {
      var _this2 = this;

      this.requestSubmit = true;
      axios["delete"](this.route + "/" + this.element.id).then(function (response) {
        _this2.requestSubmit = false;

        _this2.restore();

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

        _this2.restoreEl();
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
    detailEl: function detailEl(id) {
      this.title = "Detalle de ";
      this.modalDetail = true;
      this.getEl(id);
    },
    submit: function submit() {
      var _this3 = this;

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

      if (this.element.name_es) {
        fd.append("name_es", this.element.name_es);
      }

      if (this.element.name_en) {
        fd.append("name_en", this.element.name_en);
      }

      if (this.element.description_es) {
        fd.append("description_es", this.element.description_es);
      }

      if (this.element.description_en) {
        fd.append("description_en", this.element.description_en);
      }

      if (this.element.url_video) {
        fd.append("url_video", this.element.url_video);
      }

      if (this.element.description_video_es) {
        fd.append("description_video_es", this.element.description_video_es);
      }

      if (this.element.description_video_en) {
        fd.append("description_video_en", this.element.description_video_en);
      }

      if (this.element.title_elements_es) {
        fd.append("title_elements_es", this.element.title_elements_es);
      }

      if (this.element.title_elements_en) {
        fd.append("title_elements_en", this.element.title_elements_en);
      }

      if (this.$refs.ref_image.dropzone.files[0]) {
        fd.append("image", this.$refs.ref_image.dropzone.files[0]);
      }
      /*if (this.$refs.ref_icon.dropzone.files[0]) {
        fd.append("icon", this.$refs.ref_icon.dropzone.files[0]);
      }*/


      if (this.element.files && this.element.files.length) {
        fd.append("elements_count", this.element.files.length);
        fd.append("files", JSON.stringify(this.element.files));
        fd.append("icons", JSON.stringify(this.element.icons));
      }

      if (this.element.files && this.element.files.length) {
        this.element.files.forEach(function (el, i) {
          fd.append("images" + i, el.file);
          fd.append("icons" + i, el.icon);
          fd.append("title_es" + i, el.title_es);
          fd.append("title_en" + i, el.title_en);
          fd.append("description_es" + i, el.description_es);
          fd.append("description_en" + i, el.description_en);
        });
      }

      axios({
        method: method,
        url: url,
        data: fd
      }).then(function (response) {
        _this3.requestSubmit = false;
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

        _this3.restore();
      })["catch"](function (error) {
        _this3.requestSubmit = false;

        if (error.response.status === 422) {
          _this3.errors = error.response.data.errors || {};
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

        _this3.restoreEl();
      });
    },
    restore: function restore() {
      this.element = {
        image: ""
      }, this.modalCreateUpdate = this.modalDestroy = false;
      this.getEls();
      this.errors = {};
    },
    deleteEl: function deleteEl(id) {
      this.modalDestroy = true;
      this.getEl(id);
    },
    restoreEl: function restoreEl() {
      this.element = {
        image: ""
      }, this.modalCreateUpdate = this.modalDestroy = this.modalDetail = false;
      this.errors = {};
    },
    getEls: function getEls() {
      var _this4 = this;

      this.loadingEls = true;
      axios.get(this.routeGetAll).then(function (response) {
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
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form/MultipleElements.vue?vue&type=template&id=08e46a12&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/form/MultipleElements.vue?vue&type=template&id=08e46a12& ***!
  \************************************************************************************************************************************************************************************************************************/
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
    _c("p", [_vm._v(_vm._s(_vm.messageOrder))]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "card" },
      [
        _vm.showLoading
          ? _c(
              "div",
              {
                staticStyle: {
                  position: "absolute",
                  height: "calc(100% - 41px)",
                  width: "100%",
                  "z-index": "99",
                  top: "38px"
                }
              },
              [_c("Skeleton", { attrs: { height: "100%" } })],
              1
            )
          : _vm._e(),
        _vm._v(" "),
        _vm._m(0),
        _vm._v(" "),
        _c(
          "draggable",
          {
            staticClass: "row",
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
            return _c("div", { key: i, staticClass: "col-12" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-10" }, [
                  _c(
                    "div",
                    { staticClass: "col-12" },
                    [
                      _c("Input", {
                        attrs: {
                          label: "Título",
                          variable: "files." + i + ".title",
                          errors: _vm.errors,
                          valueEn: el.title_en,
                          valueEs: el.title_es,
                          valueEnParent: el.title_en,
                          valueEsParent: el.title_es
                        },
                        on: {
                          "update:valueEn": function($event) {
                            return _vm.$set(el, "title_en", $event)
                          },
                          "update:value-en": function($event) {
                            return _vm.$set(el, "title_en", $event)
                          },
                          "update:valueEs": function($event) {
                            return _vm.$set(el, "title_es", $event)
                          },
                          "update:value-es": function($event) {
                            return _vm.$set(el, "title_es", $event)
                          }
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12" }, [
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        { staticClass: "col-12" },
                        [
                          _c("Editor", {
                            attrs: {
                              size: "sm",
                              label: "Descripción",
                              variable: "files." + i + ".description",
                              errors: _vm.errors,
                              valueEn: el.description_en,
                              valueEs: el.description_es,
                              valueEnParent: el.description_en,
                              valueEsParent: el.description_es
                            },
                            on: {
                              "update:valueEn": function($event) {
                                return _vm.$set(el, "description_en", $event)
                              },
                              "update:value-en": function($event) {
                                return _vm.$set(el, "description_en", $event)
                              },
                              "update:valueEs": function($event) {
                                return _vm.$set(el, "description_es", $event)
                              },
                              "update:value-es": function($event) {
                                return _vm.$set(el, "description_es", $event)
                              }
                            }
                          })
                        ],
                        1
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12" }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c(
                          "label",
                          { staticClass: "font-weight-bold d-block" },
                          [_vm._v("Imagen")]
                        ),
                        _vm._v(" "),
                        typeof el.file == "string" && el.file !== ""
                          ? _c(
                              "a",
                              {
                                staticStyle: { "text-decoration": "underline" },
                                attrs: {
                                  href:
                                    _vm.imagesUrl +
                                    "/" +
                                    _vm.folder +
                                    "/" +
                                    el.file,
                                  target: "_blank"
                                }
                              },
                              [_vm._v(_vm._s(el.file))]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        typeof el.file == "string" && el.file !== ""
                          ? _c(
                              "a",
                              {
                                staticClass:
                                  "btn btn-sm btn-icon-only rounded-circle btn-inverse-info",
                                staticStyle: { top: "50%" },
                                attrs: {
                                  target: "_blank",
                                  href:
                                    _vm.imagesUrl +
                                    "/" +
                                    _vm.folder +
                                    "/" +
                                    el.file
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
                            ),
                        _vm._v(" "),
                        _vm.errors && _vm.errors["files." + i + ".file"]
                          ? _c(
                              "label",
                              {
                                staticClass: "text-danger text-sm d-block mt-2",
                                attrs: { for: "image" }
                              },
                              [
                                _vm._v(
                                  _vm._s(_vm.errors["files." + i + ".file"][0])
                                )
                              ]
                            )
                          : _vm._e()
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _vm.showIconField
                    ? _c("div", { staticClass: "col-12" }, [
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c(
                              "label",
                              { staticClass: "font-weight-bold d-block" },
                              [_vm._v("Icono")]
                            ),
                            _vm._v(" "),
                            typeof el.icon == "string" && el.icon !== ""
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
                                        el.icon,
                                      target: "_blank"
                                    }
                                  },
                                  [_vm._v(_vm._s(el.icon))]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            typeof el.icon == "string" && el.icon !== ""
                              ? _c(
                                  "a",
                                  {
                                    staticClass:
                                      "btn btn-sm btn-icon-only rounded-circle btn-inverse-info",
                                    staticStyle: { top: "50%" },
                                    attrs: {
                                      target: "_blank",
                                      href:
                                        _vm.imagesUrl +
                                        "/" +
                                        _vm.folder +
                                        "/" +
                                        el.icon
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
                              : _c(
                                  "vue-dropzone",
                                  {
                                    ref: "ref_icon_" + i,
                                    refInFor: true,
                                    staticClass: "text-center multiple-files",
                                    attrs: {
                                      id: "icon" + i,
                                      options: _vm.dropzoneOptions,
                                      duplicateCheck: true,
                                      useCustomSlot: true
                                    },
                                    on: {
                                      "vdropzone-file-added": function($event) {
                                        return _vm.$validateImageDropzone(
                                          $event,
                                          _vm.$refs["ref_icon_" + i][0]
                                            .dropzone,
                                          1,
                                          51200,
                                          "50kb"
                                        )
                                      },
                                      "vdropzone-files-added": function(
                                        $event
                                      ) {
                                        return _vm.handleAddedIcons($event, i)
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
                                ),
                            _vm._v(" "),
                            _vm.errors && _vm.errors["files." + i + ".icon"]
                              ? _c(
                                  "label",
                                  {
                                    staticClass:
                                      "text-danger text-sm d-block mt-2",
                                    attrs: { for: "image" }
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm.errors["files." + i + ".icon"][0]
                                      )
                                    )
                                  ]
                                )
                              : _vm._e()
                          ],
                          1
                        )
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-2" }, [
                  _c(
                    "button",
                    {
                      staticClass:
                        "btn btn-sm btn-icon-only rounded-circle btn-inverse-danger",
                      staticStyle: { top: "50%" },
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
              ]),
              _vm._v(" "),
              _c("hr", { staticClass: "mt-1 mb-4" })
            ])
          }),
          0
        )
      ],
      1
    ),
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
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("table", { staticClass: "table align-items-center mb-3" }, [
      _c("thead", { staticClass: "thead-light" }, [
        _c("tr", [_c("th", [_vm._v("Elementos")]), _vm._v(" "), _c("th")])
      ])
    ])
  }
]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/CamiProjects.vue?vue&type=template&id=d5f3c89a&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/CamiProjects.vue?vue&type=template&id=d5f3c89a& ***!
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
                  { staticClass: "col-6 col-md-7" },
                  [
                    _c("BreadCrumb", {
                      attrs: {
                        "show-bread-crumb": false,
                        title: "Proyectos en los que interviene CAMI"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-6 col-md-5 text-right" },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "d-inline-block mr-3 mb-3 mb-lg-0",
                        staticStyle: { opacity: "0.75" }
                      },
                      [
                        _c(
                          "a",
                          {
                            staticStyle: { cursor: "pointer" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                _vm.info = !_vm.info
                              }
                            }
                          },
                          [
                            _c("jam-info", {
                              staticClass: "current-color",
                              attrs: { height: "14px", width: "14px" }
                            }),
                            _vm._v(
                              "\n                Ver Página Cami - 2da Sección\n              "
                            )
                          ],
                          1
                        )
                      ]
                    ),
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
                        on: {
                          close: function($event) {
                            _vm.info = false
                          }
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "modal-footer",
                            fn: function(ref) {
                              var ok = ref.ok
                              return [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-primary",
                                    attrs: { type: "button" },
                                    on: {
                                      click: function($event) {
                                        _vm.info = false
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                  Aceptar\n                "
                                    )
                                  ]
                                )
                              ]
                            }
                          }
                        ]),
                        model: {
                          value: _vm.info,
                          callback: function($$v) {
                            _vm.info = $$v
                          },
                          expression: "info"
                        }
                      },
                      [
                        _c("template", { slot: "modal-title" }, [
                          _c("div", { staticClass: "text-primary h2" }, [
                            _vm._v("Página Cami - 2da Sección")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("template", { slot: "modal-header-close" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn p-0 bg-transparent",
                              attrs: { type: "button" },
                              on: {
                                click: function($event) {
                                  _vm.info = false
                                }
                              }
                            },
                            [_c("jam-close")],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "my-2" }, [
                          _c("img", {
                            staticClass: "img-fluid",
                            attrs: {
                              src: "/files/img/info/cami-2.jpg",
                              alt: ""
                            }
                          })
                        ])
                      ],
                      2
                    ),
                    _vm._v(" "),
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
                          [_c("jam-heart", { staticClass: "current-color" })],
                          1
                        ),
                        _vm._v(" "),
                        _c("span", { staticClass: "btn-inner--text" }, [
                          _vm._v("Nuevo Proyecto")
                        ])
                      ]
                    )
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
                  ? _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-12" }, [
                        _c("p", [_vm._v(_vm._s(_vm.messageOrder))])
                      ])
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.elements.length
                  ? _c(
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
                            key: el.id,
                            staticClass: "col-12 col-md-6 col-lg-3 mb-4"
                          },
                          [
                            _c("div", { staticClass: "card" }, [
                              _c("div", { staticClass: "card-body" }, [
                                _c("div", { staticClass: "text-center mb-3" }, [
                                  _c("img", {
                                    staticClass: "img-fluid",
                                    attrs: {
                                      src:
                                        _vm.imagesUrl +
                                        "/cami-elements/" +
                                        el.image,
                                      alt: el.name
                                    }
                                  })
                                ]),
                                _vm._v(" "),
                                _c("h3", { staticClass: "mb-1" }, [
                                  _c(
                                    "span",
                                    { staticClass: "font-weight-normal" },
                                    [_vm._v("Nombre ES:")]
                                  ),
                                  _vm._v(
                                    "\n                " +
                                      _vm._s(el.name_es) +
                                      "\n              "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("h3", { staticClass: "mb-1" }, [
                                  _c(
                                    "span",
                                    { staticClass: "font-weight-normal" },
                                    [_vm._v("Nombre EN:")]
                                  ),
                                  _vm._v(
                                    "\n                " +
                                      _vm._s(el.name_en) +
                                      "\n              "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "mt-4 text-center" }, [
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "btn btn-inverse-primary btn-sm",
                                      on: {
                                        click: function($event) {
                                          return _vm.detailEl(el.id)
                                        }
                                      }
                                    },
                                    [_vm._v("Ver")]
                                  ),
                                  _vm._v(" "),
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
            size: "xl",
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
              _vm._v(_vm._s(_vm.title) + " Proyecto")
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
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("Input", {
                              attrs: {
                                label: "Nombre",
                                variable: "name",
                                errors: _vm.errors,
                                valueEn: _vm.element.name_en,
                                valueEs: _vm.element.name_es,
                                valueEnParent: _vm.element.name_en,
                                valueEsParent: _vm.element.name_es
                              },
                              on: {
                                "update:valueEn": function($event) {
                                  return _vm.$set(
                                    _vm.element,
                                    "name_en",
                                    $event
                                  )
                                },
                                "update:value-en": function($event) {
                                  return _vm.$set(
                                    _vm.element,
                                    "name_en",
                                    $event
                                  )
                                },
                                "update:valueEs": function($event) {
                                  return _vm.$set(
                                    _vm.element,
                                    "name_es",
                                    $event
                                  )
                                },
                                "update:value-es": function($event) {
                                  return _vm.$set(
                                    _vm.element,
                                    "name_es",
                                    $event
                                  )
                                }
                              }
                            })
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
                            _c("Editor", {
                              attrs: {
                                size: "sm",
                                label: "Descripción",
                                variable: "description",
                                errors: _vm.errors,
                                valueEn: _vm.element.description_en,
                                valueEs: _vm.element.description_es,
                                valueEnParent: _vm.element.description_en,
                                valueEsParent: _vm.element.description_es
                              },
                              on: {
                                "update:valueEn": function($event) {
                                  return _vm.$set(
                                    _vm.element,
                                    "description_en",
                                    $event
                                  )
                                },
                                "update:value-en": function($event) {
                                  return _vm.$set(
                                    _vm.element,
                                    "description_en",
                                    $event
                                  )
                                },
                                "update:valueEs": function($event) {
                                  return _vm.$set(
                                    _vm.element,
                                    "description_es",
                                    $event
                                  )
                                },
                                "update:value-es": function($event) {
                                  return _vm.$set(
                                    _vm.element,
                                    "description_es",
                                    $event
                                  )
                                }
                              }
                            })
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-12 col-lg-6" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticClass: "font-weight-bold",
                              attrs: { for: "image" }
                            },
                            [_vm._v("Imagen Video:")]
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
                                        "/cami-elements/" +
                                        _vm.element.image,
                                      alt: _vm.element.name
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
                      _c("div", { staticClass: "col-12 col-lg-6" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticClass: "font-weight-bold",
                              attrs: { for: "url" }
                            },
                            [_vm._v("URL Video Youtube")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.element.url_video,
                                expression: "element.url_video"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", id: "url_video" },
                            domProps: { value: _vm.element.url_video },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.element,
                                  "url_video",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "small",
                            {
                              staticClass: "form-text",
                              staticStyle: { opacity: "0.7" },
                              attrs: { id: "url_video" }
                            },
                            [
                              _vm._v(
                                'El formato de la URL debe ser "https://www.youtube.com/watch?v=N1bWwEfIDP0".'
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _vm.errors && _vm.errors.url_video
                            ? _c(
                                "label",
                                {
                                  staticClass: "mt-2 text-danger text-sm",
                                  attrs: { for: "url_video" }
                                },
                                [_vm._v(_vm._s(_vm.errors.url_video[0]))]
                              )
                            : _vm._e()
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-12" }, [
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("Editor", {
                              attrs: {
                                size: "sm",
                                label: "Descripción Video",
                                variable: "description_video",
                                errors: _vm.errors,
                                valueEn: _vm.element.description_video_en,
                                valueEs: _vm.element.description_video_es,
                                valueEnParent: _vm.element.description_video_en,
                                valueEsParent: _vm.element.description_video_es
                              },
                              on: {
                                "update:valueEn": function($event) {
                                  return _vm.$set(
                                    _vm.element,
                                    "description_video_en",
                                    $event
                                  )
                                },
                                "update:value-en": function($event) {
                                  return _vm.$set(
                                    _vm.element,
                                    "description_video_en",
                                    $event
                                  )
                                },
                                "update:valueEs": function($event) {
                                  return _vm.$set(
                                    _vm.element,
                                    "description_video_es",
                                    $event
                                  )
                                },
                                "update:value-es": function($event) {
                                  return _vm.$set(
                                    _vm.element,
                                    "description_video_es",
                                    $event
                                  )
                                }
                              }
                            })
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
                            _c("Input", {
                              attrs: {
                                label: "Titulo Elementos",
                                variable: "title_elements",
                                errors: _vm.errors,
                                valueEn: _vm.element.title_elements_en,
                                valueEs: _vm.element.title_elements_es,
                                valueEnParent: _vm.element.title_elements_en,
                                valueEsParent: _vm.element.title_elements_es
                              },
                              on: {
                                "update:valueEn": function($event) {
                                  return _vm.$set(
                                    _vm.element,
                                    "title_elements_en",
                                    $event
                                  )
                                },
                                "update:value-en": function($event) {
                                  return _vm.$set(
                                    _vm.element,
                                    "title_elements_en",
                                    $event
                                  )
                                },
                                "update:valueEs": function($event) {
                                  return _vm.$set(
                                    _vm.element,
                                    "title_elements_es",
                                    $event
                                  )
                                },
                                "update:value-es": function($event) {
                                  return _vm.$set(
                                    _vm.element,
                                    "title_elements_es",
                                    $event
                                  )
                                }
                              }
                            })
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-12" },
                        [
                          _c("MultipleElements", {
                            attrs: {
                              fieldName: "images",
                              errors: _vm.errors,
                              showIconField: true,
                              messageOrder: _vm.messageOrder,
                              files: _vm.element.files,
                              icons: _vm.element.icons,
                              imagesUrl: _vm.imagesUrl,
                              filesParent: _vm.element.files,
                              iconsParent: _vm.element.icons,
                              folder: "elements"
                            },
                            on: {
                              "update:files": function($event) {
                                return _vm.$set(_vm.element, "files", $event)
                              },
                              "update:icons": function($event) {
                                return _vm.$set(_vm.element, "icons", $event)
                              }
                            }
                          })
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
            size: "xl",
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
                      staticClass: "btn btn-primary",
                      attrs: { type: "button" },
                      on: { click: _vm.restoreEl }
                    },
                    [_vm._v("Aceptar")]
                  )
                ]
              }
            }
          ]),
          model: {
            value: _vm.modalDetail,
            callback: function($$v) {
              _vm.modalDetail = $$v
            },
            expression: "modalDetail"
          }
        },
        [
          _c("template", { slot: "modal-title" }, [
            _c("div", { staticClass: "text-primary h2" }, [
              _vm._v(_vm._s(_vm.title) + " Proyecto")
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
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-12 col-md-6" }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("label", { staticClass: "font-weight-bold" }, [
                          _vm._v("Nombre Español:")
                        ]),
                        _vm._v(" "),
                        _vm.element.name_es
                          ? [_c("p", [_vm._v(_vm._s(_vm.element.name_es))])]
                          : _vm._e()
                      ],
                      2
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12 col-md-6" }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("label", { staticClass: "font-weight-bold" }, [
                          _vm._v("Nombre Inglés:")
                        ]),
                        _vm._v(" "),
                        _vm.element.name_en
                          ? [_c("p", [_vm._v(_vm._s(_vm.element.name_en))])]
                          : _vm._e()
                      ],
                      2
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12 col-md-6" }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("label", { staticClass: "font-weight-bold" }, [
                          _vm._v("Descripción Español:")
                        ]),
                        _vm._v(" "),
                        _vm.element.description_es
                          ? [
                              _c("div", {
                                domProps: {
                                  innerHTML: _vm._s(_vm.element.description_es)
                                }
                              })
                            ]
                          : _vm._e()
                      ],
                      2
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12 col-md-6" }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("label", { staticClass: "font-weight-bold" }, [
                          _vm._v("Descripción Inglés:")
                        ]),
                        _vm._v(" "),
                        _vm.element.description_en
                          ? [
                              _c("div", {
                                domProps: {
                                  innerHTML: _vm._s(_vm.element.description_en)
                                }
                              })
                            ]
                          : _vm._e()
                      ],
                      2
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12 col-lg-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c(
                        "label",
                        {
                          staticClass: "font-weight-bold",
                          attrs: { for: "image" }
                        },
                        [_vm._v("Imagen Video:")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _vm.element.image
                          ? _c("div", { staticClass: "col" }, [
                              _c("img", {
                                staticClass: "img-fluid",
                                attrs: {
                                  src:
                                    _vm.imagesUrl +
                                    "/cami-elements/" +
                                    _vm.element.image,
                                  alt: _vm.element.name
                                }
                              })
                            ])
                          : _vm._e()
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12 col-lg-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("h3", { staticClass: "font-weight-normal" }, [
                        _c(
                          "span",
                          { staticClass: "d-block font-weight-bold" },
                          [_vm._v("Video:")]
                        )
                      ]),
                      _vm._v(" "),
                      _vm.element.url_video
                        ? _c("iframe", {
                            attrs: {
                              id: "player",
                              type: "text/html",
                              width: "100%",
                              height: "360",
                              src:
                                "http://www.youtube.com/embed/" +
                                _vm.element.id_video,
                              frameborder: "0"
                            }
                          })
                        : _c("p", [_vm._v("No se ha registrado un video.")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12 col-md-6" }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("label", { staticClass: "font-weight-bold" }, [
                          _vm._v("Descripción Video Español:")
                        ]),
                        _vm._v(" "),
                        _vm.element.description_video_es
                          ? [
                              _c("div", {
                                domProps: {
                                  innerHTML: _vm._s(
                                    _vm.element.description_video_es
                                  )
                                }
                              })
                            ]
                          : _vm._e()
                      ],
                      2
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12 col-md-6" }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("label", { staticClass: "font-weight-bold" }, [
                          _vm._v("Descripción Video Inglés:")
                        ]),
                        _vm._v(" "),
                        _vm.element.description_video_en
                          ? [
                              _c("div", {
                                domProps: {
                                  innerHTML: _vm._s(
                                    _vm.element.description_video_en
                                  )
                                }
                              })
                            ]
                          : _vm._e()
                      ],
                      2
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12 col-md-6" }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("label", { staticClass: "font-weight-bold" }, [
                          _vm._v("Titulo Elementos Español:")
                        ]),
                        _vm._v(" "),
                        _vm.element.title_elements_es
                          ? [
                              _c("div", {
                                domProps: {
                                  innerHTML: _vm._s(
                                    _vm.element.title_elements_es
                                  )
                                }
                              })
                            ]
                          : _c("p", [
                              _vm._v(
                                "\n              No registrado\n            "
                              )
                            ])
                      ],
                      2
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12 col-md-6" }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("label", { staticClass: "font-weight-bold" }, [
                          _vm._v("Titulo Elementos Inglés:")
                        ]),
                        _vm._v(" "),
                        _vm.element.title_elements_en
                          ? [
                              _c("div", {
                                domProps: {
                                  innerHTML: _vm._s(
                                    _vm.element.title_elements_en
                                  )
                                }
                              })
                            ]
                          : _c("p", [
                              _vm._v(
                                "\n              No registrado\n            "
                              )
                            ])
                      ],
                      2
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12" }, [
                    _c("div", { staticClass: "card" }, [
                      _c(
                        "div",
                        { staticClass: "table-responsive" },
                        [
                          _c(
                            "table",
                            { staticClass: "table align-items-center mb-3" },
                            [
                              _c("thead", { staticClass: "thead-light" }, [
                                _c("tr", [
                                  _c("th", [_vm._v("Elementos")]),
                                  _vm._v(" "),
                                  _c("th")
                                ])
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _vm._l(_vm.element.files, function(el, index) {
                            return [
                              _c("div", { key: index, staticClass: "col-12" }, [
                                _c("div", { staticClass: "row" }, [
                                  _c(
                                    "div",
                                    { staticClass: "col-12 col-lg-6" },
                                    [
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
                                          el.file
                                            ? _c(
                                                "div",
                                                {
                                                  staticClass: "col text-center"
                                                },
                                                [
                                                  _c("img", {
                                                    staticClass: "img-fluid",
                                                    attrs: {
                                                      src:
                                                        _vm.imagesUrl +
                                                        "/cami-elements/" +
                                                        el.file,
                                                      alt: el.name
                                                    }
                                                  })
                                                ]
                                              )
                                            : _vm._e()
                                        ])
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "col-12 col-lg-6" },
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
                                                  staticClass:
                                                    "font-weight-bold"
                                                },
                                                [_vm._v("Icono:")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                { staticClass: "text-center" },
                                                [
                                                  _c("img", {
                                                    attrs: {
                                                      src:
                                                        _vm.imagesUrl +
                                                        "/cami-elements/" +
                                                        el.icon,
                                                      alt: el.name
                                                    }
                                                  })
                                                ]
                                              )
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "col-12 col-lg-6" },
                                          [
                                            _c(
                                              "div",
                                              { staticClass: "form-group" },
                                              [
                                                _c(
                                                  "label",
                                                  {
                                                    staticClass:
                                                      "font-weight-bold"
                                                  },
                                                  [_vm._v("Título Español:")]
                                                ),
                                                _vm._v(" "),
                                                el.title_es
                                                  ? [
                                                      _c("p", [
                                                        _vm._v(
                                                          _vm._s(el.title_es)
                                                        )
                                                      ])
                                                    ]
                                                  : _vm._e()
                                              ],
                                              2
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "col-12 col-lg-6" },
                                          [
                                            _c(
                                              "div",
                                              { staticClass: "form-group" },
                                              [
                                                _c(
                                                  "label",
                                                  {
                                                    staticClass:
                                                      "font-weight-bold"
                                                  },
                                                  [_vm._v("Título Inglés:")]
                                                ),
                                                _vm._v(" "),
                                                el.title_en
                                                  ? [
                                                      _c("p", [
                                                        _vm._v(
                                                          _vm._s(el.title_en)
                                                        )
                                                      ])
                                                    ]
                                                  : _vm._e()
                                              ],
                                              2
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "col-12 col-lg-6" },
                                          [
                                            _c(
                                              "div",
                                              { staticClass: "form-group" },
                                              [
                                                _c(
                                                  "label",
                                                  {
                                                    staticClass:
                                                      "font-weight-bold"
                                                  },
                                                  [
                                                    _vm._v(
                                                      "Descripción Español:"
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                el.description_es
                                                  ? [
                                                      _c("div", {
                                                        domProps: {
                                                          innerHTML: _vm._s(
                                                            el.description_es
                                                          )
                                                        }
                                                      })
                                                    ]
                                                  : _vm._e()
                                              ],
                                              2
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "col-12 col-lg-6" },
                                          [
                                            _c(
                                              "div",
                                              { staticClass: "form-group" },
                                              [
                                                _c(
                                                  "label",
                                                  {
                                                    staticClass:
                                                      "font-weight-bold"
                                                  },
                                                  [
                                                    _vm._v(
                                                      "Descripción Inglés:"
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                el.description_en
                                                  ? [
                                                      _c("div", {
                                                        domProps: {
                                                          innerHTML: _vm._s(
                                                            el.description_en
                                                          )
                                                        }
                                                      })
                                                    ]
                                                  : _vm._e()
                                              ],
                                              2
                                            )
                                          ]
                                        )
                                      ])
                                    ]
                                  )
                                ])
                              ])
                            ]
                          })
                        ],
                        2
                      )
                    ])
                  ])
                ])
              ])
        ],
        2
      ),
      _vm._v(" "),
      _c("destroy", {
        attrs: {
          element: "elemento",
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

/***/ "./resources/js/components/form/MultipleElements.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/form/MultipleElements.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MultipleElements_vue_vue_type_template_id_08e46a12___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MultipleElements.vue?vue&type=template&id=08e46a12& */ "./resources/js/components/form/MultipleElements.vue?vue&type=template&id=08e46a12&");
/* harmony import */ var _MultipleElements_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MultipleElements.vue?vue&type=script&lang=js& */ "./resources/js/components/form/MultipleElements.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MultipleElements_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MultipleElements_vue_vue_type_template_id_08e46a12___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MultipleElements_vue_vue_type_template_id_08e46a12___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/form/MultipleElements.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/form/MultipleElements.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/form/MultipleElements.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleElements_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MultipleElements.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form/MultipleElements.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleElements_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/form/MultipleElements.vue?vue&type=template&id=08e46a12&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/form/MultipleElements.vue?vue&type=template&id=08e46a12& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleElements_vue_vue_type_template_id_08e46a12___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MultipleElements.vue?vue&type=template&id=08e46a12& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form/MultipleElements.vue?vue&type=template&id=08e46a12&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleElements_vue_vue_type_template_id_08e46a12___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleElements_vue_vue_type_template_id_08e46a12___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/views/CamiProjects.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/CamiProjects.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CamiProjects_vue_vue_type_template_id_d5f3c89a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CamiProjects.vue?vue&type=template&id=d5f3c89a& */ "./resources/js/views/CamiProjects.vue?vue&type=template&id=d5f3c89a&");
/* harmony import */ var _CamiProjects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CamiProjects.vue?vue&type=script&lang=js& */ "./resources/js/views/CamiProjects.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CamiProjects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CamiProjects_vue_vue_type_template_id_d5f3c89a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CamiProjects_vue_vue_type_template_id_d5f3c89a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/CamiProjects.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/CamiProjects.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/CamiProjects.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CamiProjects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CamiProjects.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/CamiProjects.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CamiProjects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/CamiProjects.vue?vue&type=template&id=d5f3c89a&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/CamiProjects.vue?vue&type=template&id=d5f3c89a& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CamiProjects_vue_vue_type_template_id_d5f3c89a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./CamiProjects.vue?vue&type=template&id=d5f3c89a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/CamiProjects.vue?vue&type=template&id=d5f3c89a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CamiProjects_vue_vue_type_template_id_d5f3c89a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CamiProjects_vue_vue_type_template_id_d5f3c89a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);