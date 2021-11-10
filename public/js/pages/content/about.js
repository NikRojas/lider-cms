(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/pages/content/about"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/content/about/Fifth.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/content/about/Fifth.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/Button */ "./resources/js/components/Button.vue");
/* harmony import */ var _components_DataTableDraggable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/DataTableDraggable */ "./resources/js/components/DataTableDraggable.vue");
/* harmony import */ var _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/BreadCrumb */ "./resources/js/components/BreadCrumb.vue");
/* harmony import */ var _components_skeleton_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/skeleton/form */ "./resources/js/components/skeleton/form.vue");
/* harmony import */ var _components_modals_Destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/modals/Destroy */ "./resources/js/components/modals/Destroy.vue");
/* harmony import */ var _components_form_Editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/form/Editor */ "./resources/js/components/form/Editor.vue");
/* harmony import */ var _components_form_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/form/Input */ "./resources/js/components/form/Input.vue");
/* harmony import */ var vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-loading-skeleton */ "./node_modules/vue-loading-skeleton/dist/vue-loading-skeleton.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    route: String,
    routeGetAll: String,
    routeOrder: String,
    messageOrder: String,
    imagesUrl: String,
    routeGetText: String,
    routeUpdateText: String
  },
  components: {
    Skeleton: vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_7__["Skeleton"],
    Destroy: _components_modals_Destroy__WEBPACK_IMPORTED_MODULE_4__["default"],
    DataTableDraggable: _components_DataTableDraggable__WEBPACK_IMPORTED_MODULE_1__["default"],
    Button: _components_Button__WEBPACK_IMPORTED_MODULE_0__["default"],
    BreadCrumb: _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_2__["default"],
    SkeletonForm: _components_skeleton_form__WEBPACK_IMPORTED_MODULE_3__["default"],
    Editor: _components_form_Editor__WEBPACK_IMPORTED_MODULE_5__["default"],
    Input: _components_form_Input__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  data: function data() {
    return {
      startBlock: true,
      editBlock: false,
      modalCreateUpdate: false,
      loadingGet: false,
      loadingGetText: false,
      elements: {},
      element: {
        name: "",
        image: "",
        active: true
      },
      elText: {},
      title: "",
      errors: {},
      errorsText: {},
      requestSubmit: false,
      modalDestroy: false,
      info: false
    };
  },
  methods: {
    restoreText: function restoreText() {
      this.elText = {};
      this.errorsText = {};
      this.startBlock = true, this.editBlock = false;
      this.getElText();
    },
    editElText: function editElText() {
      this.startBlock = false;
      this.editBlock = true;
    },
    updateText: function updateText() {
      var _this = this;

      this.requestSubmit = true;
      axios.post(this.routeUpdateText, this.elText).then(function (response) {
        _this.requestSubmit = false;

        _this.restoreText();

        Swal.fire({
          title: response.data.title,
          text: response.data.message,
          type: "success",
          confirmButtonText: "Ok",
          buttonsStyling: false,
          customClass: {
            confirmButton: "btn btn-inverse-primary"
          }
        });
      })["catch"](function (error) {
        _this.requestSubmit = false;

        if (error.response.status === 422) {
          _this.errorsText = error.response.data.errors || {};
          return;
        }

        _this.restoreText();

        Swal.fire({
          title: error.response.data.title,
          text: error.response.data.message,
          type: "error",
          confirmButtonText: "Ok",
          buttonsStyling: false,
          customClass: {
            confirmButton: "btn btn-inverse-primary"
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
      }

      if (this.element.title_es) {
        fd.append("title_es", this.element.title_es);
      }

      if (this.element.title_en) {
        fd.append("title_en", this.element.title_en);
      }

      if (this.element.description_es) {
        fd.append("description_es", this.element.description_es);
      }

      if (this.element.description_en) {
        fd.append("description_en", this.element.description_en);
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
    restoreEl: function restoreEl() {
      this.errors = {};
      this.requestSubmit = this.modalCreateUpdate = this.modalDestroy = false;
      this.element = {
        name: "",
        image: "",
        active: true
      };
    },
    restore: function restore() {
      this.errors = {};
      this.elements = {};
      this.requestSubmit = this.modalCreateUpdate = this.modalDestroy = false;
      this.element = {
        name: "",
        image: "",
        active: true
      };
      this.getEls();
    },
    orderElements: function orderElements(elements) {
      var _this3 = this;

      axios.put(this.routeOrder, elements).then(function (response) {
        _this3.restore();

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
        _this3.restore();

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
    editEl: function editEl(id) {
      this.title = "Actualizar";
      this.modalCreateUpdate = true;
      this.getEl(id);
    },
    destroyConfirm: function destroyConfirm() {
      var _this4 = this;

      this.requestSubmit = true;
      axios["delete"](this.route + "/" + this.element.id).then(function (response) {
        _this4.restore();

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
        _this4.restoreEl();

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
    deleteEl: function deleteEl(id) {
      this.modalDestroy = true;
      this.getEl(id);
    },
    getEl: function getEl(id) {
      var _this5 = this;

      this.loadingGet = true;
      axios.get(this.route + "/json/get/" + id).then(function (response) {
        _this5.element = response.data;
        _this5.loadingGet = false;
      })["catch"](function (error) {});
    },
    newEl: function newEl() {
      this.title = "Nuevo";
      this.modalCreateUpdate = true;
    },
    getEls: function getEls() {
      var _this6 = this;

      this.loadingGet = true;
      axios.get(this.routeGetAll).then(function (response) {
        _this6.elements = response.data;
        _this6.loadingGet = false;
      })["catch"](function (error) {});
    },
    getElText: function getElText() {
      var _this7 = this;

      this.loadingGetText = true;
      axios.get(this.routeGetText).then(function (response) {
        if (response.data) {
          _this7.elText = response.data;
        }

        _this7.loadingGetText = false;
      })["catch"](function (error) {});
    }
  },
  created: function created() {
    this.getElText();
    this.getEls();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/content/about/First.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/content/about/First.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-loading-skeleton */ "./node_modules/vue-loading-skeleton/dist/vue-loading-skeleton.esm.js");
/* harmony import */ var _components_form_Editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/form/Editor */ "./resources/js/components/form/Editor.vue");
/* harmony import */ var _components_form_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/form/Input */ "./resources/js/components/form/Input.vue");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Button */ "./resources/js/components/Button.vue");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue2-dropzone */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.js");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone__WEBPACK_IMPORTED_MODULE_4__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    messageOrder: String,
    imagesUrl: String,
    routeGetText: String,
    routeUpdateText: String
  },
  components: {
    vueDropzone: vue2_dropzone__WEBPACK_IMPORTED_MODULE_4___default.a,
    Skeleton: vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_0__["Skeleton"],
    Editor: _components_form_Editor__WEBPACK_IMPORTED_MODULE_1__["default"],
    Input: _components_form_Input__WEBPACK_IMPORTED_MODULE_2__["default"],
    Button: _components_Button__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      startBlock: true,
      info: false,
      loadingGetText: false,
      requestSubmit: false,
      dropzoneOptions: {
        url: "/",
        maxFiles: 1,
        acceptedFiles: "image/png,image/jpeg,image/jpg,image/svg+xml",
        autoProcessQueue: false,
        thumbnailWidth: 150,
        addRemoveLinks: true,
        dictRemoveFile: "Remover"
      },
      elText: {
        first_block_1: {},
        first_block_2: {},
        first_block_3: {},
        first_block_4: {},
        first_block_5: {},
        first_block_6: {},
        first_block_7: {},
        first_block_8: {}
      },
      errorsText: {},
      editBlock: false
    };
  },
  methods: {
    restoreText: function restoreText() {
      this.elText = {
        first_block_1: {},
        first_block_2: {},
        first_block_3: {},
        first_block_4: {},
        first_block_5: {},
        first_block_6: {},
        first_block_7: {},
        first_block_8: {}
      };
      this.errorsText = {};
      this.startBlock = true, this.editBlock = false;
      this.getElText();
    },
    editElText: function editElText() {
      this.startBlock = false;
      this.editBlock = true;
    },
    updateText: function updateText() {
      var _this = this;

      this.requestSubmit = true;
      var fd = new FormData();
      /*if (this.$refs.ref_image.dropzone.files[0]) {
        fd.append("image", this.$refs.ref_image.dropzone.files[0]);
      }*/

      if (this.elText.first_block_1.title_es) {
        fd.append("first_block_1_title_es", this.elText.first_block_1.title_es);
      }

      if (this.elText.first_block_1.title_en) {
        fd.append("first_block_1_title_en", this.elText.first_block_1.title_en);
      }

      if (this.elText.first_block_1.description_es) {
        fd.append("first_block_1_description_es", this.elText.first_block_1.description_es);
      }

      if (this.elText.first_block_1.description_en) {
        fd.append("first_block_1_description_en", this.elText.first_block_1.description_en);
      }

      if (this.$refs.ref_first_block_2_image.dropzone.files[0]) {
        fd.append("first_block_2_image", this.$refs.ref_first_block_2_image.dropzone.files[0]);
      }

      if (this.elText.first_block_2.url_video) {
        fd.append("first_block_2_url_video", this.elText.first_block_2.url_video);
      }

      if (this.elText.first_block_3.description_es) {
        fd.append("first_block_3_description_es", this.elText.first_block_3.description_es);
      }

      if (this.elText.first_block_3.description_en) {
        fd.append("first_block_3_description_en", this.elText.first_block_3.description_en);
      }

      if (this.$refs.ref_first_block_4_image.dropzone.files[0]) {
        fd.append("first_block_4_image", this.$refs.ref_first_block_4_image.dropzone.files[0]);
      }

      if (this.elText.first_block_5.description_es) {
        fd.append("first_block_5_description_es", this.elText.first_block_5.description_es);
      }

      if (this.elText.first_block_5.description_en) {
        fd.append("first_block_5_description_en", this.elText.first_block_5.description_en);
      }

      if (this.$refs.ref_first_block_6_image.dropzone.files[0]) {
        fd.append("first_block_6_image", this.$refs.ref_first_block_6_image.dropzone.files[0]);
      }

      if (this.elText.first_block_7.quantity) {
        fd.append("first_block_7_quantity", this.elText.first_block_7.quantity);
      }

      if (this.elText.first_block_7.description_es) {
        fd.append("first_block_7_description_es", this.elText.first_block_7.description_es);
      }

      if (this.elText.first_block_7.description_en) {
        fd.append("first_block_7_description_en", this.elText.first_block_7.description_en);
      }

      if (this.$refs.ref_first_block_8_icon.dropzone.files[0]) {
        fd.append("first_block_8_icon", this.$refs.ref_first_block_8_icon.dropzone.files[0]);
      }

      if (this.elText.first_block_8.quantity) {
        fd.append("first_block_8_quantity", this.elText.first_block_8.quantity);
      }

      if (this.elText.first_block_8.description_es) {
        fd.append("first_block_8_description_es", this.elText.first_block_8.description_es);
      }

      if (this.elText.first_block_8.description_en) {
        fd.append("first_block_8_description_en", this.elText.first_block_8.description_en);
      }

      axios.post(this.routeUpdateText, fd).then(function (response) {
        _this.requestSubmit = false;

        _this.restoreText();

        Swal.fire({
          title: response.data.title,
          text: response.data.message,
          type: "success",
          confirmButtonText: "Ok",
          buttonsStyling: false,
          customClass: {
            confirmButton: "btn btn-inverse-primary"
          }
        });
      })["catch"](function (error) {
        _this.requestSubmit = false;

        if (error.response.status === 422) {
          _this.errorsText = error.response.data.errors || {};
          return;
        }

        _this.restoreText();

        Swal.fire({
          title: error.response.data.title,
          text: error.response.data.message,
          type: "error",
          confirmButtonText: "Ok",
          buttonsStyling: false,
          customClass: {
            confirmButton: "btn btn-inverse-primary"
          }
        });
      });
    },
    getElText: function getElText() {
      var _this2 = this;

      this.loadingGetText = true;
      axios.get(this.routeGetText).then(function (response) {
        if (response.data.first_block_1) {
          _this2.elText.first_block_1 = response.data.first_block_1;
        }

        if (response.data.first_block_2) {
          _this2.elText.first_block_2 = response.data.first_block_2;
        }

        if (response.data.first_block_3) {
          _this2.elText.first_block_3 = response.data.first_block_3;
        }

        if (response.data.first_block_4) {
          _this2.elText.first_block_4 = response.data.first_block_4;
        }

        if (response.data.first_block_5) {
          _this2.elText.first_block_5 = response.data.first_block_5;
        }

        if (response.data.first_block_6) {
          _this2.elText.first_block_6 = response.data.first_block_6;
        }

        if (response.data.first_block_7) {
          _this2.elText.first_block_7 = response.data.first_block_7;
        }

        if (response.data.first_block_8) {
          _this2.elText.first_block_8 = response.data.first_block_8;
        }

        _this2.loadingGetText = false;
      })["catch"](function (error) {});
    }
  },
  created: function created() {
    this.getElText();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/content/about/Fourth.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/content/about/Fourth.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/Button */ "./resources/js/components/Button.vue");
/* harmony import */ var _components_DataTableDraggable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/DataTableDraggable */ "./resources/js/components/DataTableDraggable.vue");
/* harmony import */ var _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/BreadCrumb */ "./resources/js/components/BreadCrumb.vue");
/* harmony import */ var _components_skeleton_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/skeleton/form */ "./resources/js/components/skeleton/form.vue");
/* harmony import */ var _components_modals_Destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/modals/Destroy */ "./resources/js/components/modals/Destroy.vue");
/* harmony import */ var _components_form_Editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/form/Editor */ "./resources/js/components/form/Editor.vue");
/* harmony import */ var _components_form_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/form/Input */ "./resources/js/components/form/Input.vue");
/* harmony import */ var vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-loading-skeleton */ "./node_modules/vue-loading-skeleton/dist/vue-loading-skeleton.esm.js");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue2-dropzone */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.js");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone__WEBPACK_IMPORTED_MODULE_8__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    route: String,
    routeGetAll: String,
    routeOrder: String,
    messageOrder: String,
    imagesUrl: String,
    routeGetText: String,
    routeUpdateText: String
  },
  components: {
    Destroy: _components_modals_Destroy__WEBPACK_IMPORTED_MODULE_4__["default"],
    DataTableDraggable: _components_DataTableDraggable__WEBPACK_IMPORTED_MODULE_1__["default"],
    Button: _components_Button__WEBPACK_IMPORTED_MODULE_0__["default"],
    BreadCrumb: _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_2__["default"],
    SkeletonForm: _components_skeleton_form__WEBPACK_IMPORTED_MODULE_3__["default"],
    Editor: _components_form_Editor__WEBPACK_IMPORTED_MODULE_5__["default"],
    Input: _components_form_Input__WEBPACK_IMPORTED_MODULE_6__["default"],
    Skeleton: vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_7__["Skeleton"],
    vueDropzone: vue2_dropzone__WEBPACK_IMPORTED_MODULE_8___default.a
  },
  data: function data() {
    return {
      loadingGetText: false,
      elText: {},
      errorsText: {},
      editBlock: false,
      modalCreateUpdate: false,
      loadingGet: false,
      elements: {},
      element: {
        name: "",
        image: "",
        active: true
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
      title: "",
      errors: {},
      startBlock: true,
      requestSubmit: false,
      modalDestroy: false,
      info: false
    };
  },
  methods: {
    restoreText: function restoreText() {
      this.elText = {};
      this.errorsText = {};
      this.startBlock = true, this.editBlock = false;
      this.getElText();
    },
    editElText: function editElText() {
      this.startBlock = false;
      this.editBlock = true;
    },
    updateText: function updateText() {
      var _this = this;

      this.requestSubmit = true;
      var fd = new FormData();

      if (this.$refs.ref_image.dropzone.files[0]) {
        fd.append("image", this.$refs.ref_image.dropzone.files[0]);
      }

      if (this.elText.title_en) {
        fd.append("title_en", this.elText.title_en);
      }

      if (this.elText.title_es) {
        fd.append("title_es", this.elText.title_es);
      }

      if (this.elText.description_es) {
        fd.append("description_es", this.elText.description_es);
      }

      if (this.elText.description_en) {
        fd.append("description_en", this.elText.description_en);
      }

      if (this.elText.id) {
        fd.append("id", this.elText.id);
      }

      axios.post(this.routeUpdateText, fd).then(function (response) {
        _this.requestSubmit = false;

        _this.restoreText();

        Swal.fire({
          title: response.data.title,
          text: response.data.message,
          type: "success",
          confirmButtonText: "Ok",
          buttonsStyling: false,
          customClass: {
            confirmButton: "btn btn-inverse-primary"
          }
        });
      })["catch"](function (error) {
        _this.requestSubmit = false;

        if (error.response.status === 422) {
          _this.errorsText = error.response.data.errors || {};
          return;
        }

        _this.restoreText();

        Swal.fire({
          title: error.response.data.title,
          text: error.response.data.message,
          type: "error",
          confirmButtonText: "Ok",
          buttonsStyling: false,
          customClass: {
            confirmButton: "btn btn-inverse-primary"
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
      }

      if (this.element.title_es) {
        fd.append("title_es", this.element.title_es);
      }

      if (this.element.title_en) {
        fd.append("title_en", this.element.title_en);
      }

      if (this.element.description_es) {
        fd.append("description_es", this.element.description_es);
      }

      if (this.element.description_en) {
        fd.append("description_en", this.element.description_en);
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
    restoreEl: function restoreEl() {
      this.errors = {};
      this.requestSubmit = this.modalCreateUpdate = this.modalDestroy = false;
      this.element = {
        name: "",
        image: "",
        active: true
      };
    },
    restore: function restore() {
      this.errors = {};
      this.elements = {};
      this.requestSubmit = this.modalCreateUpdate = this.modalDestroy = false;
      this.element = {
        name: "",
        image: "",
        active: true
      };
      this.getEls();
    },
    orderElements: function orderElements(elements) {
      var _this3 = this;

      axios.put(this.routeOrder, elements).then(function (response) {
        _this3.restore();

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
        _this3.restore();

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
    editEl: function editEl(id) {
      this.title = "Actualizar";
      this.modalCreateUpdate = true;
      this.getEl(id);
    },
    destroyConfirm: function destroyConfirm() {
      var _this4 = this;

      this.requestSubmit = true;
      axios["delete"](this.route + "/" + this.element.id).then(function (response) {
        _this4.restore();

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
        _this4.restoreEl();

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
    deleteEl: function deleteEl(id) {
      this.modalDestroy = true;
      this.getEl(id);
    },
    getEl: function getEl(id) {
      var _this5 = this;

      this.loadingGet = true;
      axios.get(this.route + "/json/get/" + id).then(function (response) {
        _this5.element = response.data;
        _this5.loadingGet = false;
      })["catch"](function (error) {});
    },
    newEl: function newEl() {
      this.title = "Nuevo";
      this.modalCreateUpdate = true;
    },
    getEls: function getEls() {
      var _this6 = this;

      this.loadingGet = true;
      axios.get(this.routeGetAll).then(function (response) {
        _this6.elements = response.data;
        _this6.loadingGet = false;
      })["catch"](function (error) {});
    },
    getElText: function getElText() {
      var _this7 = this;

      this.loadingGetText = true;
      axios.get(this.routeGetText).then(function (response) {
        if (response.data) {
          _this7.elText = response.data;
        }

        _this7.loadingGetText = false;
      })["catch"](function (error) {});
    }
  },
  created: function created() {
    this.getEls();
    this.getElText();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/content/about/Index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/content/about/Index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/BreadCrumb */ "./resources/js/components/BreadCrumb.vue");
/* harmony import */ var _First__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./First */ "./resources/js/views/content/about/First.vue");
/* harmony import */ var _Second__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Second */ "./resources/js/views/content/about/Second.vue");
/* harmony import */ var _Third__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Third */ "./resources/js/views/content/about/Third.vue");
/* harmony import */ var _Fourth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Fourth */ "./resources/js/views/content/about/Fourth.vue");
/* harmony import */ var _Fifth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Fifth */ "./resources/js/views/content/about/Fifth.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    projectFinishedRoute: String,
    projectFinishedRouteGetAll: String,
    projectFinishedRouteOrder: String,
    customerSupportRoute: String,
    customerSupportRouteGetAll: String,
    customerSupportRouteOrder: String,
    warrantyElementsRoute: String,
    warrantyElementsRouteGetAll: String,
    warrantyElementsRouteOrder: String,
    warrantyTextRouteGet: String,
    warrantyTextRouteUpdate: String,
    compromiseRouteGet: String,
    compromiseRouteUpdate: String,
    customerSupportTextRouteGet: String,
    customerSupportTextRouteUpdate: String,
    projectFinishedTextRouteGet: String,
    projectFinishedTextRouteUpdate: String,
    firstBlockTextRouteGet: String,
    firstBlockTextRouteUpdate: String,
    messageOrder: String,
    imagesUrl: String
  },
  components: {
    BreadCrumb: _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_0__["default"],
    First: _First__WEBPACK_IMPORTED_MODULE_1__["default"],
    Second: _Second__WEBPACK_IMPORTED_MODULE_2__["default"],
    Third: _Third__WEBPACK_IMPORTED_MODULE_3__["default"],
    Fourth: _Fourth__WEBPACK_IMPORTED_MODULE_4__["default"],
    Fifth: _Fifth__WEBPACK_IMPORTED_MODULE_5__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/content/about/Second.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/content/about/Second.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-loading-skeleton */ "./node_modules/vue-loading-skeleton/dist/vue-loading-skeleton.esm.js");
/* harmony import */ var _components_form_Editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/form/Editor */ "./resources/js/components/form/Editor.vue");
/* harmony import */ var _components_form_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/form/Input */ "./resources/js/components/form/Input.vue");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Button */ "./resources/js/components/Button.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Skeleton: vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_0__["Skeleton"],
    Editor: _components_form_Editor__WEBPACK_IMPORTED_MODULE_1__["default"],
    Input: _components_form_Input__WEBPACK_IMPORTED_MODULE_2__["default"],
    Button: _components_Button__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: {
    routeGet: String,
    routeUpdate: String
  },
  data: function data() {
    return {
      startBlock: true,
      editBlock: false,
      el: {},
      loadingGet: false,
      requestSubmit: false,
      errors: {},
      info: false
    };
  },
  methods: {
    restore: function restore() {
      this.el = {};
      this.errors = {};
      this.startBlock = true, this.editBlock = false;
      this.getEl();
    },
    editEl: function editEl() {
      this.startBlock = false;
      this.editBlock = true;
    },
    getEl: function getEl() {
      var _this = this;

      this.loadingGet = true;
      axios.get(this.routeGet).then(function (response) {
        if (response.data) {
          _this.el = response.data;
        }

        _this.loadingGet = false;
      })["catch"](function (error) {});
    },
    update: function update() {
      var _this2 = this;

      this.requestSubmit = true;
      axios.post(this.routeUpdate, this.el).then(function (response) {
        _this2.requestSubmit = false;

        _this2.restore();

        Swal.fire({
          title: response.data.title,
          text: response.data.message,
          type: "success",
          confirmButtonText: "Ok",
          buttonsStyling: false,
          customClass: {
            confirmButton: "btn btn-inverse-primary"
          }
        });
      })["catch"](function (error) {
        _this2.requestSubmit = false;

        if (error.response.status === 422) {
          _this2.errors = error.response.data.errors || {};
          return;
        }

        _this2.restore();

        Swal.fire({
          title: error.response.data.title,
          text: error.response.data.message,
          type: "error",
          confirmButtonText: "Ok",
          buttonsStyling: false,
          customClass: {
            confirmButton: "btn btn-inverse-primary"
          }
        });
      });
    }
  },
  created: function created() {
    this.getEl();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/content/about/Third.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/content/about/Third.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/Button */ "./resources/js/components/Button.vue");
/* harmony import */ var _components_DataTableDraggable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/DataTableDraggable */ "./resources/js/components/DataTableDraggable.vue");
/* harmony import */ var _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/BreadCrumb */ "./resources/js/components/BreadCrumb.vue");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue2-dropzone */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.js");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_skeleton_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/skeleton/form */ "./resources/js/components/skeleton/form.vue");
/* harmony import */ var _components_modals_Destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/modals/Destroy */ "./resources/js/components/modals/Destroy.vue");
/* harmony import */ var _components_form_Editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/form/Editor */ "./resources/js/components/form/Editor.vue");
/* harmony import */ var _components_form_Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/form/Input */ "./resources/js/components/form/Input.vue");
/* harmony import */ var vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-loading-skeleton */ "./node_modules/vue-loading-skeleton/dist/vue-loading-skeleton.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    route: String,
    routeGetAll: String,
    routeOrder: String,
    messageOrder: String,
    imagesUrl: String,
    routeGetText: String,
    routeUpdateText: String
  },
  components: {
    Destroy: _components_modals_Destroy__WEBPACK_IMPORTED_MODULE_5__["default"],
    DataTableDraggable: _components_DataTableDraggable__WEBPACK_IMPORTED_MODULE_1__["default"],
    vueDropzone: vue2_dropzone__WEBPACK_IMPORTED_MODULE_3___default.a,
    Button: _components_Button__WEBPACK_IMPORTED_MODULE_0__["default"],
    BreadCrumb: _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_2__["default"],
    SkeletonForm: _components_skeleton_form__WEBPACK_IMPORTED_MODULE_4__["default"],
    Editor: _components_form_Editor__WEBPACK_IMPORTED_MODULE_6__["default"],
    Input: _components_form_Input__WEBPACK_IMPORTED_MODULE_7__["default"],
    Skeleton: vue_loading_skeleton__WEBPACK_IMPORTED_MODULE_8__["Skeleton"]
  },
  data: function data() {
    return {
      loadingGetText: false,
      elText: {},
      errorsText: {},
      editBlock: false,
      modalCreateUpdate: false,
      loadingGet: false,
      elements: {},
      element: {
        name: "",
        image: "",
        active: true
      },
      title: "",
      dropzoneOptions: {
        url: "/",
        maxFiles: 1,
        acceptedFiles: "image/png,image/jpeg,image/jpg,image/svg+xml",
        autoProcessQueue: false,
        thumbnailWidth: 150,
        addRemoveLinks: true,
        dictRemoveFile: "Remover"
      },
      errors: {},
      startBlock: true,
      requestSubmit: false,
      modalDestroy: false,
      info: false
    };
  },
  methods: {
    restoreText: function restoreText() {
      this.elText = {};
      this.errorsText = {};
      this.startBlock = true, this.editBlock = false;
      this.getElText();
    },
    editElText: function editElText() {
      this.startBlock = false;
      this.editBlock = true;
    },
    updateText: function updateText() {
      var _this = this;

      this.requestSubmit = true;
      axios.post(this.routeUpdateText, this.elText).then(function (response) {
        _this.requestSubmit = false;

        _this.restoreText();

        Swal.fire({
          title: response.data.title,
          text: response.data.message,
          type: "success",
          confirmButtonText: "Ok",
          buttonsStyling: false,
          customClass: {
            confirmButton: "btn btn-inverse-primary"
          }
        });
      })["catch"](function (error) {
        _this.requestSubmit = false;

        if (error.response.status === 422) {
          _this.errorsText = error.response.data.errors || {};
          return;
        }

        _this.restoreText();

        Swal.fire({
          title: error.response.data.title,
          text: error.response.data.message,
          type: "error",
          confirmButtonText: "Ok",
          buttonsStyling: false,
          customClass: {
            confirmButton: "btn btn-inverse-primary"
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
      }

      if (this.element.name) {
        fd.append("name", this.element.name);
      }

      if (this.element.description_es) {
        fd.append("description_es", this.element.description_es);
      }

      if (this.element.description_en) {
        fd.append("description_en", this.element.description_en);
      }

      fd.append("active", this.element.active ? 1 : 0);

      if (this.$refs.ref_image.dropzone.files[0]) {
        fd.append("image", this.$refs.ref_image.dropzone.files[0]);
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
    restoreEl: function restoreEl() {
      this.errors = {};
      this.requestSubmit = this.modalCreateUpdate = this.modalDestroy = false;
      this.element = {
        name: "",
        image: "",
        active: true
      };
    },
    restore: function restore() {
      this.errors = {};
      this.elements = {};
      this.requestSubmit = this.modalCreateUpdate = this.modalDestroy = false;
      this.element = {
        name: "",
        image: "",
        active: true
      };
      this.getEls();
    },
    orderElements: function orderElements(elements) {
      var _this3 = this;

      axios.put(this.routeOrder, elements).then(function (response) {
        _this3.restore();

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
        _this3.restore();

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
    editEl: function editEl(id) {
      this.title = "Actualizar";
      this.modalCreateUpdate = true;
      this.getEl(id);
    },
    destroyConfirm: function destroyConfirm() {
      var _this4 = this;

      this.requestSubmit = true;
      axios["delete"](this.route + "/" + this.element.id).then(function (response) {
        _this4.restore();

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
        _this4.restoreEl();

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
    deleteEl: function deleteEl(id) {
      this.modalDestroy = true;
      this.getEl(id);
    },
    getEl: function getEl(id) {
      var _this5 = this;

      this.loadingGet = true;
      axios.get(this.route + "/json/get/" + id).then(function (response) {
        _this5.element = response.data;
        _this5.loadingGet = false;
      })["catch"](function (error) {});
    },
    newEl: function newEl() {
      this.title = "Nuevo";
      this.modalCreateUpdate = true;
    },
    getEls: function getEls() {
      var _this6 = this;

      this.loadingGet = true;
      axios.get(this.routeGetAll).then(function (response) {
        _this6.elements = response.data;
        _this6.loadingGet = false;
      })["catch"](function (error) {});
    },
    getElText: function getElText() {
      var _this7 = this;

      this.loadingGetText = true;
      axios.get(this.routeGetText).then(function (response) {
        if (response.data) {
          _this7.elText = response.data;
        }

        _this7.loadingGetText = false;
      })["catch"](function (error) {});
    }
  },
  created: function created() {
    this.getEls();
    this.getElText();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/content/about/Fifth.vue?vue&type=template&id=cbf8a960&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/content/about/Fifth.vue?vue&type=template&id=cbf8a960& ***!
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
    { staticClass: "row" },
    [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-12 col-lg-9" },
        [
          _c("div", [
            _c(
              "div",
              { staticClass: "text-right mb-3" },
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
                          "\n          Ver Página Nosotros - 5ta Sección\n        "
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
                      size: "xl",
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
                              [_vm._v("\n            Aceptar\n          ")]
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
                        _vm._v("Página Nosotros - 5ta Sección")
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
                        attrs: { src: "/files/img/info/about-5.jpg", alt: "" }
                      })
                    ])
                  ],
                  2
                ),
                _vm._v(" "),
                _vm.startBlock
                  ? _c(
                      "a",
                      {
                        staticClass: "btn btn-icon btn-inverse-primary",
                        attrs: { href: "#" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.editElText.apply(null, arguments)
                          }
                        }
                      },
                      [
                        _c(
                          "span",
                          { staticClass: "btn-inner--icon" },
                          [_c("jam-info", { staticClass: "current-color" })],
                          1
                        ),
                        _vm._v(" "),
                        _c("span", { staticClass: "btn-inner--text" }, [
                          _vm._v("Editar Sección")
                        ])
                      ]
                    )
                  : _vm._e()
              ],
              1
            ),
            _vm._v(" "),
            _vm.startBlock
              ? _c("div", { staticClass: "card mb-4" }, [
                  !_vm.loadingGetText
                    ? _c("div", { staticClass: "card-body" }, [
                        _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            { staticClass: "col-12 col-md-6 col-lg-6" },
                            [
                              _c("div", { staticClass: "form-group" }, [
                                _c(
                                  "label",
                                  { staticClass: "font-weight-bold" },
                                  [_vm._v("Título ES")]
                                ),
                                _vm._v(" "),
                                _vm.elText.title_es
                                  ? _c("p", [
                                      _vm._v(_vm._s(_vm.elText.title_es))
                                    ])
                                  : _c("p", [_vm._v("No registrado")])
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-12 col-md-6 col-lg-6" },
                            [
                              _c("div", { staticClass: "form-group" }, [
                                _c(
                                  "label",
                                  { staticClass: "font-weight-bold" },
                                  [_vm._v("Título EN")]
                                ),
                                _vm._v(" "),
                                _vm.elText.title_en
                                  ? _c("p", [
                                      _vm._v(_vm._s(_vm.elText.title_en))
                                    ])
                                  : _c("p", [_vm._v("No registrado")])
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-12 col-md-6 col-lg-6" },
                            [
                              _c("div", { staticClass: "form-group" }, [
                                _c(
                                  "label",
                                  { staticClass: "font-weight-bold" },
                                  [_vm._v("Descripción ES")]
                                ),
                                _vm._v(" "),
                                _vm.elText.description_es
                                  ? _c("div", {
                                      domProps: {
                                        innerHTML: _vm._s(
                                          _vm.elText.description_es
                                        )
                                      }
                                    })
                                  : _c("p", [_vm._v("No registrado")])
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-12 col-md-6 col-lg-6" },
                            [
                              _c("div", { staticClass: "form-group" }, [
                                _c(
                                  "label",
                                  { staticClass: "font-weight-bold" },
                                  [_vm._v("Descripción EN")]
                                ),
                                _vm._v(" "),
                                _vm.elText.description_en
                                  ? _c("div", {
                                      domProps: {
                                        innerHTML: _vm._s(
                                          _vm.elText.description_en
                                        )
                                      }
                                    })
                                  : _c("p", [_vm._v("No registrado")])
                              ])
                            ]
                          )
                        ])
                      ])
                    : _c("div", { staticClass: "card-body" }, [
                        _c(
                          "div",
                          { staticClass: "row" },
                          _vm._l(2, function(i) {
                            return _c(
                              "div",
                              { key: i, staticClass: "col-12 mb-4" },
                              [
                                _c(
                                  "div",
                                  { staticClass: "w-25" },
                                  [
                                    _c("Skeleton", {
                                      attrs: { height: "15px" }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "w-75" },
                                  [
                                    _c("Skeleton", {
                                      attrs: { height: "50px" }
                                    })
                                  ],
                                  1
                                )
                              ]
                            )
                          }),
                          0
                        )
                      ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.editBlock
              ? _c("div", { staticClass: "card mb-4" }, [
                  _c("div", { staticClass: "card-body" }, [
                    _c(
                      "form",
                      {
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            return _vm.updateText.apply(null, arguments)
                          }
                        }
                      },
                      [
                        _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            { staticClass: "col-12 col-md-12 col-lg-12" },
                            [
                              _c(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  _c("Input", {
                                    attrs: {
                                      label: "Título",
                                      variable: "title",
                                      errors: _vm.errorsText,
                                      valueEn: _vm.elText.title_en,
                                      valueEs: _vm.elText.title_es,
                                      valueEnParent: _vm.elText.title_en,
                                      valueEsParent: _vm.elText.title_es
                                    },
                                    on: {
                                      "update:valueEn": function($event) {
                                        return _vm.$set(
                                          _vm.elText,
                                          "title_en",
                                          $event
                                        )
                                      },
                                      "update:value-en": function($event) {
                                        return _vm.$set(
                                          _vm.elText,
                                          "title_en",
                                          $event
                                        )
                                      },
                                      "update:valueEs": function($event) {
                                        return _vm.$set(
                                          _vm.elText,
                                          "title_es",
                                          $event
                                        )
                                      },
                                      "update:value-es": function($event) {
                                        return _vm.$set(
                                          _vm.elText,
                                          "title_es",
                                          $event
                                        )
                                      }
                                    }
                                  })
                                ],
                                1
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-12 col-md-12 col-lg-12" },
                            [
                              _c(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  _c("Editor", {
                                    attrs: {
                                      size: "md",
                                      label: "Descripción",
                                      variable: "description",
                                      errors: _vm.errorsText,
                                      valueEn: _vm.elText.description_en,
                                      valueEs: _vm.elText.description_es,
                                      valueEnParent: _vm.elText.description_en,
                                      valueEsParent: _vm.elText.description_es
                                    },
                                    on: {
                                      "update:valueEn": function($event) {
                                        return _vm.$set(
                                          _vm.elText,
                                          "description_en",
                                          $event
                                        )
                                      },
                                      "update:value-en": function($event) {
                                        return _vm.$set(
                                          _vm.elText,
                                          "description_en",
                                          $event
                                        )
                                      },
                                      "update:valueEs": function($event) {
                                        return _vm.$set(
                                          _vm.elText,
                                          "description_es",
                                          $event
                                        )
                                      },
                                      "update:value-es": function($event) {
                                        return _vm.$set(
                                          _vm.elText,
                                          "description_es",
                                          $event
                                        )
                                      }
                                    }
                                  })
                                ],
                                1
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-12 text-right" },
                            [
                              _c("Button", {
                                attrs: {
                                  text: "Actualizar",
                                  classes: ["btn-inverse-primary"],
                                  "request-server": _vm.requestSubmit
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
                                      return _vm.restoreText.apply(
                                        null,
                                        arguments
                                      )
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                  Cancelar\n                "
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
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "text-right mb-4" }, [
            _c(
              "a",
              {
                staticClass: "btn btn-icon btn-inverse-primary",
                attrs: { href: "#" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.newEl.apply(null, arguments)
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
                _c("span", { staticClass: "btn-inner--text" }, [
                  _vm._v("Nuevo Servicio al Cliente")
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c("DataTableDraggable", {
            attrs: {
              object: _vm.elements,
              buttonUpdate: true,
              buttonDelete: true,
              buttonDetail: false,
              "message-order": _vm.messageOrder
            },
            on: {
              "update:object": function($event) {
                _vm.elements = $event
              },
              drag: _vm.orderElements,
              edit: _vm.editEl,
              delete: _vm.deleteEl
            }
          })
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
                    [_vm._v("\n        Cancelar\n      ")]
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
              _vm._v(_vm._s(_vm.title) + " Servicio al Cliente")
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
                        return _vm.submit.apply(null, arguments)
                      }
                    }
                  },
                  [
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        { staticClass: "col-12" },
                        [
                          _c("Input", {
                            attrs: {
                              label: "Título",
                              variable: "title",
                              errors: _vm.errors,
                              valueEn: _vm.element.title_en,
                              valueEs: _vm.element.title_es,
                              valueEnParent: _vm.element.title_en,
                              valueEsParent: _vm.element.title_es
                            },
                            on: {
                              "update:valueEn": function($event) {
                                return _vm.$set(_vm.element, "title_en", $event)
                              },
                              "update:value-en": function($event) {
                                return _vm.$set(_vm.element, "title_en", $event)
                              },
                              "update:valueEs": function($event) {
                                return _vm.$set(_vm.element, "title_es", $event)
                              },
                              "update:value-es": function($event) {
                                return _vm.$set(_vm.element, "title_es", $event)
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c("Editor", {
                                attrs: {
                                  size: "md",
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
      _c("destroy", {
        attrs: {
          element: "servicio al cliente",
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
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 col-lg-3" }, [
      _c("h2", [_vm._v("Servicio al Cliente")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n      Actualiza la sección Servicio al Cliente, de la página "
        ),
        _c("b", [_vm._v("Nosotros")]),
        _vm._v(".\n    ")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/content/about/First.vue?vue&type=template&id=13c2b3c9&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/content/about/First.vue?vue&type=template&id=13c2b3c9& ***!
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
  return _c("div", { staticClass: "row mb-5" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "col-12 col-lg-9" }, [
      _c(
        "div",
        { staticClass: "text-right mb-3" },
        [
          _vm.startBlock
            ? _c(
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
                        "\n          Ver Página Nosotros - 1ra Sección\n        "
                      )
                    ],
                    1
                  )
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          !_vm.startBlock
            ? _c("Button", {
                attrs: {
                  text: "Actualizar",
                  classes: ["btn-inverse-primary"],
                  "request-server": _vm.requestSubmit
                },
                on: { click: _vm.updateText }
              })
            : _vm._e(),
          _vm._v(" "),
          !_vm.startBlock
            ? _c(
                "button",
                {
                  staticClass: "btn btn-secondary",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.restoreText.apply(null, arguments)
                    }
                  }
                },
                [_vm._v("\n        Cancelar\n      ")]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.startBlock
            ? _c(
                "a",
                {
                  staticClass: "btn btn-icon btn-inverse-primary",
                  attrs: { href: "#" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.editElText.apply(null, arguments)
                    }
                  }
                },
                [
                  _c(
                    "span",
                    { staticClass: "btn-inner--icon" },
                    [_c("jam-info", { staticClass: "current-color" })],
                    1
                  ),
                  _vm._v(" "),
                  _c("span", { staticClass: "btn-inner--text" }, [
                    _vm._v("Editar Sección")
                  ])
                ]
              )
            : _vm._e(),
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
                        [_vm._v("\n            Aceptar\n          ")]
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
                  _vm._v("Página Nosotros - 1ra Sección")
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
                  attrs: { src: "/files/img/info/about-1.jpg", alt: "" }
                })
              ])
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm.startBlock
        ? _c("div", [
            !_vm.loadingGetText
              ? _c("div", [
                  _c("div", { staticClass: "row mb-4" }, [
                    _c("div", { staticClass: "col-12 col-lg-6 mb-4 mb-lg-0" }, [
                      _c("div", { staticClass: "card" }, [
                        _c("div", { staticClass: "card-body" }, [
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-12 col-md-6 col-lg-6" },
                              [
                                _c("div", { staticClass: "form-group" }, [
                                  _c(
                                    "label",
                                    { staticClass: "font-weight-bold" },
                                    [_vm._v("Título ES")]
                                  ),
                                  _vm._v(" "),
                                  _vm.elText.first_block_1.title_es
                                    ? _c("p", [
                                        _vm._v(
                                          "\n                        " +
                                            _vm._s(
                                              _vm.elText.first_block_1.title_es
                                            ) +
                                            "\n                      "
                                        )
                                      ])
                                    : _c("p", [_vm._v("No registrado")])
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-12 col-md-6 col-lg-6" },
                              [
                                _c("div", { staticClass: "form-group" }, [
                                  _c(
                                    "label",
                                    { staticClass: "font-weight-bold" },
                                    [_vm._v("Título EN")]
                                  ),
                                  _vm._v(" "),
                                  _vm.elText.first_block_1.title_en
                                    ? _c("p", [
                                        _vm._v(
                                          "\n                        " +
                                            _vm._s(
                                              _vm.elText.first_block_1.title_en
                                            ) +
                                            "\n                      "
                                        )
                                      ])
                                    : _c("p", [_vm._v("No registrado")])
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-12 col-md-6 col-lg-6" },
                              [
                                _c("div", { staticClass: "form-group" }, [
                                  _c(
                                    "label",
                                    { staticClass: "font-weight-bold" },
                                    [_vm._v("Descripción ES")]
                                  ),
                                  _vm._v(" "),
                                  _vm.elText.first_block_1.description_es
                                    ? _c("div", {
                                        domProps: {
                                          innerHTML: _vm._s(
                                            _vm.elText.first_block_1
                                              .description_es
                                          )
                                        }
                                      })
                                    : _c("p", [_vm._v("No registrado")])
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-12 col-md-6 col-lg-6" },
                              [
                                _c("div", { staticClass: "form-group" }, [
                                  _c(
                                    "label",
                                    { staticClass: "font-weight-bold" },
                                    [_vm._v("Descripción EN")]
                                  ),
                                  _vm._v(" "),
                                  _vm.elText.first_block_1.description_en
                                    ? _c("div", {
                                        domProps: {
                                          innerHTML: _vm._s(
                                            _vm.elText.first_block_1
                                              .description_en
                                          )
                                        }
                                      })
                                    : _c("p", [_vm._v("No registrado")])
                                ])
                              ]
                            )
                          ])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-lg-6 mb-4 mb-lg-0" }, [
                      _c("div", { staticClass: "card" }, [
                        _c("div", { staticClass: "card-body" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              { staticClass: "font-weight-bold d-block" },
                              [_vm._v("Imagen")]
                            ),
                            _vm._v(" "),
                            _vm.elText.first_block_2.image
                              ? _c("img", {
                                  staticClass: "img-fluid",
                                  attrs: {
                                    src:
                                      _vm.imagesUrl +
                                      "/about/" +
                                      _vm.elText.first_block_2.image
                                  }
                                })
                              : _c("p", [_vm._v("No registrado")])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              { staticClass: "d-block font-weight-bold" },
                              [_vm._v("Video")]
                            ),
                            _vm._v(" "),
                            _vm.elText.first_block_2.url_video
                              ? _c("iframe", {
                                  attrs: {
                                    id: "player",
                                    type: "text/html",
                                    width: "100%",
                                    height: "360",
                                    src:
                                      "https://www.youtube.com/embed/" +
                                      _vm.elText.first_block_2.id_video,
                                    frameborder: "0"
                                  }
                                })
                              : _c("p", [
                                  _vm._v("No se ha registrado un video.")
                                ])
                          ])
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row mb-4" }, [
                    _c("div", { staticClass: "col-12 col-lg-4 mb-4 mb-lg-0" }, [
                      _c("div", { staticClass: "card" }, [
                        _c("div", { staticClass: "card-body" }, [
                          _c("div", { staticClass: "row" }, [
                            _vm._m(1),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-12 col-md-6 col-lg-6" },
                              [
                                _c("div", { staticClass: "form-group" }, [
                                  _c(
                                    "label",
                                    { staticClass: "font-weight-bold" },
                                    [_vm._v("Descripción ES")]
                                  ),
                                  _vm._v(" "),
                                  _vm.elText.first_block_3.description_es
                                    ? _c("div", {
                                        domProps: {
                                          innerHTML: _vm._s(
                                            _vm.elText.first_block_3
                                              .description_es
                                          )
                                        }
                                      })
                                    : _c("p", [_vm._v("No registrado")])
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-12 col-md-6 col-lg-6" },
                              [
                                _c("div", { staticClass: "form-group" }, [
                                  _c(
                                    "label",
                                    { staticClass: "font-weight-bold" },
                                    [_vm._v("Descripción EN")]
                                  ),
                                  _vm._v(" "),
                                  _vm.elText.first_block_3.description_en
                                    ? _c("div", {
                                        domProps: {
                                          innerHTML: _vm._s(
                                            _vm.elText.first_block_3
                                              .description_en
                                          )
                                        }
                                      })
                                    : _c("p", [_vm._v("No registrado")])
                                ])
                              ]
                            )
                          ])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-lg-4 mb-4 mb-lg-0" }, [
                      _c("div", { staticClass: "card" }, [
                        _c("div", { staticClass: "card-body" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              { staticClass: "font-weight-bold d-block" },
                              [_vm._v("Imagen")]
                            ),
                            _vm._v(" "),
                            _vm.elText.first_block_4.image
                              ? _c("img", {
                                  staticClass: "img-fluid",
                                  attrs: {
                                    src:
                                      _vm.imagesUrl +
                                      "/about/" +
                                      _vm.elText.first_block_4.image
                                  }
                                })
                              : _c("p", [_vm._v("No registrado")])
                          ])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-lg-4 mb-4 mb-lg-0" }, [
                      _c("div", { staticClass: "card" }, [
                        _c("div", { staticClass: "card-body" }, [
                          _c("div", { staticClass: "row" }, [
                            _vm._m(2),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-12 col-md-6 col-lg-6" },
                              [
                                _c("div", { staticClass: "form-group" }, [
                                  _c(
                                    "label",
                                    { staticClass: "font-weight-bold" },
                                    [_vm._v("Descripción ES")]
                                  ),
                                  _vm._v(" "),
                                  _vm.elText.first_block_5.description_es
                                    ? _c("div", {
                                        domProps: {
                                          innerHTML: _vm._s(
                                            _vm.elText.first_block_5
                                              .description_es
                                          )
                                        }
                                      })
                                    : _c("p", [_vm._v("No registrado")])
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-12 col-md-6 col-lg-6" },
                              [
                                _c("div", { staticClass: "form-group" }, [
                                  _c(
                                    "label",
                                    { staticClass: "font-weight-bold" },
                                    [_vm._v("Descripción EN")]
                                  ),
                                  _vm._v(" "),
                                  _vm.elText.first_block_5.description_en
                                    ? _c("div", {
                                        domProps: {
                                          innerHTML: _vm._s(
                                            _vm.elText.first_block_5
                                              .description_en
                                          )
                                        }
                                      })
                                    : _c("p", [_vm._v("No registrado")])
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
                    _c("div", { staticClass: "col-12 col-lg-4 mb-4 mb-lg-0" }, [
                      _c("div", { staticClass: "card" }, [
                        _c("div", { staticClass: "card-body" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              { staticClass: "font-weight-bold d-block" },
                              [_vm._v("Imagen")]
                            ),
                            _vm._v(" "),
                            _vm.elText.first_block_6.image
                              ? _c("img", {
                                  staticClass: "img-fluid",
                                  attrs: {
                                    src:
                                      _vm.imagesUrl +
                                      "/about/" +
                                      _vm.elText.first_block_6.image
                                  }
                                })
                              : _c("p", [_vm._v("No registrado")])
                          ])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-lg-4 mb-4 mb-lg-0" }, [
                      _c("div", { staticClass: "card" }, [
                        _c("div", { staticClass: "card-body" }, [
                          _c("div", { staticClass: "row" }, [
                            _vm._m(3),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-12" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c(
                                  "label",
                                  { staticClass: "font-weight-bold" },
                                  [_vm._v("Cantidad")]
                                ),
                                _vm._v(" "),
                                _vm.elText.first_block_7.quantity
                                  ? _c("div", {
                                      domProps: {
                                        innerHTML: _vm._s(
                                          _vm.elText.first_block_7.quantity
                                        )
                                      }
                                    })
                                  : _c("p", [_vm._v("No registrado")])
                              ])
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-12 col-md-6 col-lg-6" },
                              [
                                _c("div", { staticClass: "form-group" }, [
                                  _c(
                                    "label",
                                    { staticClass: "font-weight-bold" },
                                    [_vm._v("Descripción ES")]
                                  ),
                                  _vm._v(" "),
                                  _vm.elText.first_block_7.description_es
                                    ? _c("div", {
                                        domProps: {
                                          innerHTML: _vm._s(
                                            _vm.elText.first_block_7
                                              .description_es
                                          )
                                        }
                                      })
                                    : _c("p", [_vm._v("No registrado")])
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-12 col-md-6 col-lg-6" },
                              [
                                _c("div", { staticClass: "form-group" }, [
                                  _c(
                                    "label",
                                    { staticClass: "font-weight-bold" },
                                    [_vm._v("Descripción EN")]
                                  ),
                                  _vm._v(" "),
                                  _vm.elText.first_block_7.description_en
                                    ? _c("div", {
                                        domProps: {
                                          innerHTML: _vm._s(
                                            _vm.elText.first_block_7
                                              .description_en
                                          )
                                        }
                                      })
                                    : _c("p", [_vm._v("No registrado")])
                                ])
                              ]
                            )
                          ])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-lg-4" }, [
                      _c("div", { staticClass: "card" }, [
                        _c("div", { staticClass: "card-body" }, [
                          _c("div", { staticClass: "row" }, [
                            _vm._m(4),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-12" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c(
                                  "label",
                                  { staticClass: "font-weight-bold d-block" },
                                  [_vm._v("Icono")]
                                ),
                                _vm._v(" "),
                                _vm.elText.first_block_8.icon
                                  ? _c("img", {
                                      staticClass: "img-fluid",
                                      attrs: {
                                        src:
                                          _vm.imagesUrl +
                                          "/about/" +
                                          _vm.elText.first_block_8.icon
                                      }
                                    })
                                  : _c("p", [_vm._v("No registrado")])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "form-group" }, [
                                _c(
                                  "label",
                                  { staticClass: "font-weight-bold" },
                                  [_vm._v("Cantidad")]
                                ),
                                _vm._v(" "),
                                _vm.elText.first_block_8.quantity
                                  ? _c("div", {
                                      domProps: {
                                        innerHTML: _vm._s(
                                          _vm.elText.first_block_8.quantity
                                        )
                                      }
                                    })
                                  : _c("p", [_vm._v("No registrado")])
                              ])
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-12 col-md-6 col-lg-6" },
                              [
                                _c("div", { staticClass: "form-group" }, [
                                  _c(
                                    "label",
                                    { staticClass: "font-weight-bold" },
                                    [_vm._v("Descripción ES")]
                                  ),
                                  _vm._v(" "),
                                  _vm.elText.first_block_8.description_es
                                    ? _c("div", {
                                        domProps: {
                                          innerHTML: _vm._s(
                                            _vm.elText.first_block_8
                                              .description_es
                                          )
                                        }
                                      })
                                    : _c("p", [_vm._v("No registrado")])
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-12 col-md-6 col-lg-6" },
                              [
                                _c("div", { staticClass: "form-group" }, [
                                  _c(
                                    "label",
                                    { staticClass: "font-weight-bold" },
                                    [_vm._v("Descripción EN")]
                                  ),
                                  _vm._v(" "),
                                  _vm.elText.first_block_8.description_en
                                    ? _c("div", {
                                        domProps: {
                                          innerHTML: _vm._s(
                                            _vm.elText.first_block_8
                                              .description_en
                                          )
                                        }
                                      })
                                    : _c("p", [_vm._v("No registrado")])
                                ])
                              ]
                            )
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              : _c(
                  "div",
                  { staticClass: "row" },
                  _vm._l(9, function(i) {
                    return _c(
                      "div",
                      { key: i, staticClass: "col-12 col-lg-4 mb-4" },
                      [
                        _c("div", { staticClass: "card" }, [
                          _c("div", { staticClass: "card-body" }, [
                            _c(
                              "div",
                              { staticClass: "w-25" },
                              [_c("Skeleton", { attrs: { height: "15px" } })],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "w-75" },
                              [_c("Skeleton", { attrs: { height: "50px" } })],
                              1
                            )
                          ])
                        ])
                      ]
                    )
                  }),
                  0
                )
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.editBlock
        ? _c("div", [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.updateText.apply(null, arguments)
                  }
                }
              },
              [
                _c("div", { staticClass: "row mb-4" }, [
                  _c("div", { staticClass: "col-12 col-lg-6 mb-4 mb-lg-0" }, [
                    _c("div", { staticClass: "card" }, [
                      _c("div", { staticClass: "card-body" }, [
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-12" }, [
                            _c(
                              "div",
                              { staticClass: "form-group" },
                              [
                                _c("Input", {
                                  attrs: {
                                    label: "Título",
                                    variable: "title",
                                    errors: _vm.errorsText,
                                    valueEn: _vm.elText.first_block_1.title_en,
                                    valueEs: _vm.elText.first_block_1.title_es,
                                    valueEnParent:
                                      _vm.elText.first_block_1.title_en,
                                    valueEsParent:
                                      _vm.elText.first_block_1.title_es
                                  },
                                  on: {
                                    "update:valueEn": function($event) {
                                      return _vm.$set(
                                        _vm.elText.first_block_1,
                                        "title_en",
                                        $event
                                      )
                                    },
                                    "update:value-en": function($event) {
                                      return _vm.$set(
                                        _vm.elText.first_block_1,
                                        "title_en",
                                        $event
                                      )
                                    },
                                    "update:valueEs": function($event) {
                                      return _vm.$set(
                                        _vm.elText.first_block_1,
                                        "title_es",
                                        $event
                                      )
                                    },
                                    "update:value-es": function($event) {
                                      return _vm.$set(
                                        _vm.elText.first_block_1,
                                        "title_es",
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
                                    size: "md",
                                    label: "Descripción",
                                    variable: "description",
                                    errors: _vm.errorsText,
                                    valueEn:
                                      _vm.elText.first_block_1.description_en,
                                    valueEs:
                                      _vm.elText.first_block_1.description_es,
                                    valueEnParent:
                                      _vm.elText.first_block_1.description_en,
                                    valueEsParent:
                                      _vm.elText.first_block_1.description_es
                                  },
                                  on: {
                                    "update:valueEn": function($event) {
                                      return _vm.$set(
                                        _vm.elText.first_block_1,
                                        "description_en",
                                        $event
                                      )
                                    },
                                    "update:value-en": function($event) {
                                      return _vm.$set(
                                        _vm.elText.first_block_1,
                                        "description_en",
                                        $event
                                      )
                                    },
                                    "update:valueEs": function($event) {
                                      return _vm.$set(
                                        _vm.elText.first_block_1,
                                        "description_es",
                                        $event
                                      )
                                    },
                                    "update:value-es": function($event) {
                                      return _vm.$set(
                                        _vm.elText.first_block_1,
                                        "description_es",
                                        $event
                                      )
                                    }
                                  }
                                })
                              ],
                              1
                            )
                          ])
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12 col-lg-6 mb-4 mb-lg-0" }, [
                    _c("div", { staticClass: "card" }, [
                      _c("div", { staticClass: "card-body" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticClass: "font-weight-bold d-block",
                              attrs: { for: "logo" }
                            },
                            [_vm._v("Imagen")]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              {
                                class: [
                                  _vm.elText.first_block_2.image
                                    ? "col-lg-4 mb-3 mb-lg-0"
                                    : ""
                                ]
                              },
                              [
                                _vm.elText.first_block_2.image
                                  ? _c("img", {
                                      staticClass: "img-fluid",
                                      attrs: {
                                        src:
                                          _vm.imagesUrl +
                                          "/about/" +
                                          _vm.elText.first_block_2.image,
                                        alt: ""
                                      }
                                    })
                                  : _vm._e()
                              ]
                            ),
                            _vm._v(" "),
                            _vm.editBlock
                              ? _c(
                                  "div",
                                  {
                                    class: [
                                      _vm.elText.first_block_2.image
                                        ? "col-lg-8"
                                        : "col-lg-12"
                                    ]
                                  },
                                  [
                                    _c(
                                      "small",
                                      { staticClass: "d-block mb-0 lh-1" },
                                      [
                                        _vm._v(
                                          "Resolución recomendada: 500×300px"
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "small",
                                      { staticClass: "d-block mb-0 lh-1" },
                                      [_vm._v("Formato: JPG")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "small",
                                      { staticClass: "d-block mb-2 lh-1" },
                                      [
                                        _vm._v(
                                          "Tamaño recomendado: No mayor a 150KB"
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "vue-dropzone",
                                      {
                                        ref: "ref_first_block_2_image",
                                        attrs: {
                                          id: "first_block_2_image",
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
                                              _vm.$refs.ref_first_block_2_image
                                                .dropzone,
                                              1,
                                              160000,
                                              "150kb"
                                            )
                                          }
                                        }
                                      },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "dropzone-custom-content"
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
                                                  "\n                            Suelte el archivo aquí o haga click para cargarlo.\n                          "
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _vm.errorsText &&
                                    _vm.errorsText.first_block_2_image
                                      ? _c(
                                          "label",
                                          {
                                            staticClass:
                                              "text-danger text-sm d-block mt-2",
                                            attrs: {
                                              for: "first_block_2_image"
                                            }
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.errorsText
                                                  .first_block_2_image[0]
                                              )
                                            )
                                          ]
                                        )
                                      : _vm._e()
                                  ],
                                  1
                                )
                              : _vm._e()
                          ])
                        ]),
                        _vm._v(" "),
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
                                value: _vm.elText.first_block_2.url_video,
                                expression: "elText.first_block_2.url_video"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", id: "url_video" },
                            domProps: {
                              value: _vm.elText.first_block_2.url_video
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.elText.first_block_2,
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
                                'El formato de la URL debe ser\n                    "https://www.youtube.com/watch?v=N1bWwEfIDP0".'
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _vm.errorsText &&
                          _vm.errorsText.first_block_2_url_video
                            ? _c(
                                "label",
                                {
                                  staticClass: "mt-2 text-danger text-sm",
                                  attrs: { for: "first_block_2_url_video" }
                                },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm.errorsText.first_block_2_url_video[0]
                                    )
                                  )
                                ]
                              )
                            : _vm._e()
                        ])
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row mb-4" }, [
                  _c("div", { staticClass: "col-12 col-lg-4 mb-4 mb-lg-0" }, [
                    _c("div", { staticClass: "card" }, [
                      _c("div", { staticClass: "card-body" }, [
                        _c("div", { staticClass: "row" }, [
                          _vm._m(5),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-12" }, [
                            _c(
                              "div",
                              { staticClass: "form-group" },
                              [
                                _c("Editor", {
                                  attrs: {
                                    size: "md",
                                    label: "Descripción",
                                    variable: "description",
                                    errors: _vm.errorsText,
                                    valueEn:
                                      _vm.elText.first_block_3.description_en,
                                    valueEs:
                                      _vm.elText.first_block_3.description_es,
                                    valueEnParent:
                                      _vm.elText.first_block_3.description_en,
                                    valueEsParent:
                                      _vm.elText.first_block_3.description_es
                                  },
                                  on: {
                                    "update:valueEn": function($event) {
                                      return _vm.$set(
                                        _vm.elText.first_block_3,
                                        "description_en",
                                        $event
                                      )
                                    },
                                    "update:value-en": function($event) {
                                      return _vm.$set(
                                        _vm.elText.first_block_3,
                                        "description_en",
                                        $event
                                      )
                                    },
                                    "update:valueEs": function($event) {
                                      return _vm.$set(
                                        _vm.elText.first_block_3,
                                        "description_es",
                                        $event
                                      )
                                    },
                                    "update:value-es": function($event) {
                                      return _vm.$set(
                                        _vm.elText.first_block_3,
                                        "description_es",
                                        $event
                                      )
                                    }
                                  }
                                })
                              ],
                              1
                            )
                          ])
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12 col-lg-4 mb-4 mb-lg-0" }, [
                    _c("div", { staticClass: "card" }, [
                      _c("div", { staticClass: "card-body" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticClass: "font-weight-bold d-block",
                              attrs: { for: "logo" }
                            },
                            [_vm._v("Imagen")]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              {
                                class: [
                                  _vm.elText.first_block_4.image
                                    ? "col-lg-4 mb-3 mb-lg-0"
                                    : ""
                                ]
                              },
                              [
                                _vm.elText.first_block_4.image
                                  ? _c("img", {
                                      staticClass: "img-fluid",
                                      attrs: {
                                        src:
                                          _vm.imagesUrl +
                                          "/about/" +
                                          _vm.elText.first_block_4.image,
                                        alt: ""
                                      }
                                    })
                                  : _vm._e()
                              ]
                            ),
                            _vm._v(" "),
                            _vm.editBlock
                              ? _c(
                                  "div",
                                  {
                                    class: [
                                      _vm.elText.first_block_4.image
                                        ? "col-lg-8"
                                        : "col-lg-12"
                                    ]
                                  },
                                  [
                                    _c(
                                      "small",
                                      { staticClass: "d-block mb-0 lh-1" },
                                      [
                                        _vm._v(
                                          "Resolución recomendada: 500×300px"
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "small",
                                      { staticClass: "d-block mb-0 lh-1" },
                                      [_vm._v("Formato: JPG")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "small",
                                      { staticClass: "d-block mb-2 lh-1" },
                                      [
                                        _vm._v(
                                          "Tamaño recomendado: No mayor a 150KB"
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "vue-dropzone",
                                      {
                                        ref: "ref_first_block_4_image",
                                        attrs: {
                                          id: "first_block_4_image",
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
                                              _vm.$refs.ref_first_block_4_image
                                                .dropzone,
                                              1,
                                              160000,
                                              "150kb"
                                            )
                                          }
                                        }
                                      },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "dropzone-custom-content"
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
                                                  "\n                            Suelte el archivo aquí o haga click para cargarlo.\n                          "
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _vm.errorsText &&
                                    _vm.errorsText.first_block_4_image
                                      ? _c(
                                          "label",
                                          {
                                            staticClass:
                                              "text-danger text-sm d-block mt-4",
                                            attrs: {
                                              for: "first_block_4_image"
                                            }
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.errorsText
                                                  .first_block_4_image[0]
                                              )
                                            )
                                          ]
                                        )
                                      : _vm._e()
                                  ],
                                  1
                                )
                              : _vm._e()
                          ])
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12 col-lg-4 mb-4 mb-lg-0" }, [
                    _c("div", { staticClass: "card" }, [
                      _c("div", { staticClass: "card-body" }, [
                        _c("div", { staticClass: "row" }, [
                          _vm._m(6),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-12" }, [
                            _c(
                              "div",
                              { staticClass: "form-group" },
                              [
                                _c("Editor", {
                                  attrs: {
                                    size: "md",
                                    label: "Descripción",
                                    variable: "description",
                                    errors: _vm.errorsText,
                                    valueEn:
                                      _vm.elText.first_block_5.description_en,
                                    valueEs:
                                      _vm.elText.first_block_5.description_es,
                                    valueEnParent:
                                      _vm.elText.first_block_5.description_en,
                                    valueEsParent:
                                      _vm.elText.first_block_5.description_es
                                  },
                                  on: {
                                    "update:valueEn": function($event) {
                                      return _vm.$set(
                                        _vm.elText.first_block_5,
                                        "description_en",
                                        $event
                                      )
                                    },
                                    "update:value-en": function($event) {
                                      return _vm.$set(
                                        _vm.elText.first_block_5,
                                        "description_en",
                                        $event
                                      )
                                    },
                                    "update:valueEs": function($event) {
                                      return _vm.$set(
                                        _vm.elText.first_block_5,
                                        "description_es",
                                        $event
                                      )
                                    },
                                    "update:value-es": function($event) {
                                      return _vm.$set(
                                        _vm.elText.first_block_5,
                                        "description_es",
                                        $event
                                      )
                                    }
                                  }
                                })
                              ],
                              1
                            )
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row mb-4" }, [
                  _c("div", { staticClass: "col-12 col-lg-4 mb-4 mb-lg-0" }, [
                    _c("div", { staticClass: "card" }, [
                      _c("div", { staticClass: "card-body" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticClass: "font-weight-bold d-block",
                              attrs: { for: "logo" }
                            },
                            [_vm._v("Imagen")]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              {
                                class: [
                                  _vm.elText.first_block_6.image
                                    ? "col-lg-4 mb-3 mb-lg-0"
                                    : ""
                                ]
                              },
                              [
                                _vm.elText.first_block_6.image
                                  ? _c("img", {
                                      staticClass: "img-fluid",
                                      attrs: {
                                        src:
                                          _vm.imagesUrl +
                                          "/about/" +
                                          _vm.elText.first_block_6.image,
                                        alt: ""
                                      }
                                    })
                                  : _vm._e()
                              ]
                            ),
                            _vm._v(" "),
                            _vm.editBlock
                              ? _c(
                                  "div",
                                  {
                                    class: [
                                      _vm.elText.first_block_6.image
                                        ? "col-lg-8"
                                        : "col-lg-12"
                                    ]
                                  },
                                  [
                                    _c(
                                      "vue-dropzone",
                                      {
                                        ref: "ref_first_block_6_image",
                                        attrs: {
                                          id: "first_block_6_image",
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
                                              _vm.$refs.ref_first_block_6_image
                                                .dropzone,
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
                                            staticClass:
                                              "dropzone-custom-content"
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
                                                  "\n                            Suelte el archivo aquí o haga click para cargarlo.\n                          "
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _vm.errorsText &&
                                    _vm.errorsText.first_block_6_image
                                      ? _c(
                                          "label",
                                          {
                                            staticClass:
                                              "text-danger text-sm d-block mt-2",
                                            attrs: {
                                              for: "first_block_6_image"
                                            }
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.errorsText
                                                  .first_block_6_image[0]
                                              )
                                            )
                                          ]
                                        )
                                      : _vm._e()
                                  ],
                                  1
                                )
                              : _vm._e()
                          ])
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12 col-lg-4 mb-4 mb-lg-0" }, [
                    _c("div", { staticClass: "card" }, [
                      _c("div", { staticClass: "card-body" }, [
                        _c("div", { staticClass: "row" }, [
                          _vm._m(7),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-12" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c(
                                "label",
                                {
                                  staticClass: "font-weight-bold",
                                  attrs: { for: "quantity_7" }
                                },
                                [_vm._v("Cantidad")]
                              ),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.elText.first_block_7.quantity,
                                    expression: "elText.first_block_7.quantity"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { type: "text", id: "quantity_7" },
                                domProps: {
                                  value: _vm.elText.first_block_7.quantity
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.elText.first_block_7,
                                      "quantity",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _vm.errorsText &&
                              _vm.errorsText.first_block_7_quantity
                                ? _c(
                                    "label",
                                    {
                                      staticClass: "mt-2 text-danger text-sm",
                                      attrs: {
                                        for: "elText.first_block_7_quantity"
                                      }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.errorsText
                                            .first_block_7_quantity[0]
                                        )
                                      )
                                    ]
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
                                    size: "md",
                                    label: "Descripción",
                                    variable: "description",
                                    errors: _vm.errorsText,
                                    valueEn:
                                      _vm.elText.first_block_7.description_en,
                                    valueEs:
                                      _vm.elText.first_block_7.description_es,
                                    valueEnParent:
                                      _vm.elText.first_block_7.description_en,
                                    valueEsParent:
                                      _vm.elText.first_block_7.description_es
                                  },
                                  on: {
                                    "update:valueEn": function($event) {
                                      return _vm.$set(
                                        _vm.elText.first_block_7,
                                        "description_en",
                                        $event
                                      )
                                    },
                                    "update:value-en": function($event) {
                                      return _vm.$set(
                                        _vm.elText.first_block_7,
                                        "description_en",
                                        $event
                                      )
                                    },
                                    "update:valueEs": function($event) {
                                      return _vm.$set(
                                        _vm.elText.first_block_7,
                                        "description_es",
                                        $event
                                      )
                                    },
                                    "update:value-es": function($event) {
                                      return _vm.$set(
                                        _vm.elText.first_block_7,
                                        "description_es",
                                        $event
                                      )
                                    }
                                  }
                                })
                              ],
                              1
                            )
                          ])
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12 col-lg-4" }, [
                    _c("div", { staticClass: "card" }, [
                      _c("div", { staticClass: "card-body" }, [
                        _c("div", { staticClass: "row" }, [
                          _vm._m(8),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-12" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c(
                                "label",
                                {
                                  staticClass: "font-weight-bold d-block",
                                  attrs: { for: "logo" }
                                },
                                [_vm._v("Imagen")]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "row" }, [
                                _c(
                                  "div",
                                  {
                                    class: [
                                      _vm.elText.first_block_8.icon
                                        ? "col-lg-4 mb-3 mb-lg-0"
                                        : ""
                                    ]
                                  },
                                  [
                                    _vm.elText.first_block_8.icon
                                      ? _c("img", {
                                          staticClass: "img-fluid",
                                          attrs: {
                                            src:
                                              _vm.imagesUrl +
                                              "/about/" +
                                              _vm.elText.first_block_8.icon,
                                            alt: ""
                                          }
                                        })
                                      : _vm._e()
                                  ]
                                ),
                                _vm._v(" "),
                                _vm.editBlock
                                  ? _c(
                                      "div",
                                      {
                                        class: [
                                          _vm.elText.first_block_8.icon
                                            ? "col-lg-8"
                                            : "col-lg-12"
                                        ]
                                      },
                                      [
                                        _c(
                                          "vue-dropzone",
                                          {
                                            ref: "ref_first_block_8_icon",
                                            attrs: {
                                              id: "first_block_8_icon",
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
                                                  _vm.$refs
                                                    .ref_first_block_8_icon
                                                    .dropzone,
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
                                                staticClass:
                                                  "dropzone-custom-content"
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
                                                      "\n                                Suelte el archivo aquí o haga click para\n                                cargarlo.\n                              "
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _vm.errorsText &&
                                        _vm.errorsText.first_block_8_icon
                                          ? _c(
                                              "label",
                                              {
                                                staticClass:
                                                  "text-danger text-sm d-block mt-2",
                                                attrs: {
                                                  for: "first_block_8_icon"
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.errorsText
                                                      .first_block_8_icon[0]
                                                  )
                                                )
                                              ]
                                            )
                                          : _vm._e()
                                      ],
                                      1
                                    )
                                  : _vm._e()
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group" }, [
                              _c(
                                "label",
                                {
                                  staticClass: "font-weight-bold",
                                  attrs: { for: "quantity_8" }
                                },
                                [_vm._v("Cantidad")]
                              ),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.elText.first_block_8.quantity,
                                    expression: "elText.first_block_8.quantity"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { type: "text", id: "quantity_8" },
                                domProps: {
                                  value: _vm.elText.first_block_8.quantity
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.elText.first_block_8,
                                      "quantity",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _vm.errorsText &&
                              _vm.errorsText.first_block_8_quantity
                                ? _c(
                                    "label",
                                    {
                                      staticClass: "mt-2 text-danger text-sm",
                                      attrs: {
                                        for: "elText.first_block_8_quantity"
                                      }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.errorsText
                                            .first_block_8_quantity[0]
                                        )
                                      )
                                    ]
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
                                    size: "md",
                                    label: "Descripción",
                                    variable: "description",
                                    errors: _vm.errorsText,
                                    valueEn:
                                      _vm.elText.first_block_8.description_en,
                                    valueEs:
                                      _vm.elText.first_block_8.description_es,
                                    valueEnParent:
                                      _vm.elText.first_block_8.description_en,
                                    valueEsParent:
                                      _vm.elText.first_block_8.description_es
                                  },
                                  on: {
                                    "update:valueEn": function($event) {
                                      return _vm.$set(
                                        _vm.elText.first_block_8,
                                        "description_en",
                                        $event
                                      )
                                    },
                                    "update:value-en": function($event) {
                                      return _vm.$set(
                                        _vm.elText.first_block_8,
                                        "description_en",
                                        $event
                                      )
                                    },
                                    "update:valueEs": function($event) {
                                      return _vm.$set(
                                        _vm.elText.first_block_8,
                                        "description_es",
                                        $event
                                      )
                                    },
                                    "update:value-es": function($event) {
                                      return _vm.$set(
                                        _vm.elText.first_block_8,
                                        "description_es",
                                        $event
                                      )
                                    }
                                  }
                                })
                              ],
                              1
                            )
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ]
            )
          ])
        : _vm._e()
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 col-lg-3" }, [
      _c("h2", [_vm._v("Sobre Nosotros")]),
      _vm._v(" "),
      _c("p", [
        _vm._v("Actualiza la sección Sobre Nosotros, de la página "),
        _c("b", [_vm._v("Nosotros")]),
        _vm._v(".")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12" }, [
      _c("h2", { staticClass: "mb-3" }, [_vm._v("Misión")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12" }, [
      _c("h2", { staticClass: "mb-3" }, [_vm._v("Visión")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12" }, [
      _c("h2", { staticClass: "mb-3" }, [_vm._v("Estadística 1")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12" }, [
      _c("h2", { staticClass: "mb-3" }, [_vm._v("Estadística 2")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12" }, [
      _c("h2", { staticClass: "mb-3" }, [_vm._v("Misión")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12" }, [
      _c("h2", { staticClass: "mb-3" }, [_vm._v("Visión")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12" }, [
      _c("h2", { staticClass: "mb-3" }, [_vm._v("Estadística 1")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12" }, [
      _c("h2", { staticClass: "mb-3" }, [_vm._v("Estadística 2")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/content/about/Fourth.vue?vue&type=template&id=38076d5e&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/content/about/Fourth.vue?vue&type=template&id=38076d5e& ***!
  \******************************************************************************************************************************************************************************************************************/
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
    { staticClass: "row mb-5" },
    [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-12 col-lg-9" },
        [
          _c(
            "div",
            { staticClass: "text-right mb-3" },
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
                        "\n          Ver Página Nosotros - 4ta Sección\n        "
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
                    size: "xl",
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
                            [_vm._v("\n            Aceptar\n          ")]
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
                      _vm._v("Página Nosotros - 4ta Sección")
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
                      attrs: { src: "/files/img/info/about-4.jpg", alt: "" }
                    })
                  ])
                ],
                2
              ),
              _vm._v(" "),
              _vm.startBlock
                ? _c(
                    "a",
                    {
                      staticClass: "btn btn-icon btn-inverse-primary",
                      attrs: { href: "#" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.editElText.apply(null, arguments)
                        }
                      }
                    },
                    [
                      _c(
                        "span",
                        { staticClass: "btn-inner--icon" },
                        [_c("jam-info", { staticClass: "current-color" })],
                        1
                      ),
                      _vm._v(" "),
                      _c("span", { staticClass: "btn-inner--text" }, [
                        _vm._v("Editar Sección")
                      ])
                    ]
                  )
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _vm.startBlock
            ? _c("div", { staticClass: "card mb-4" }, [
                !_vm.loadingGetText
                  ? _c("div", { staticClass: "card-body" }, [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-12" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c(
                                "label",
                                { staticClass: "font-weight-bold d-block" },
                                [_vm._v("Fondo:")]
                              ),
                              _vm._v(" "),
                              _vm.elText.image
                                ? _c("img", {
                                    staticClass: "img-fluid",
                                    attrs: {
                                      src:
                                        _vm.imagesUrl +
                                        "/about/" +
                                        _vm.elText.image
                                    }
                                  })
                                : _c("p", [_vm._v("No registrado")])
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-12 col-md-6 col-lg-6" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", { staticClass: "font-weight-bold" }, [
                              _vm._v("Título ES")
                            ]),
                            _vm._v(" "),
                            _vm.elText.title_es
                              ? _c("p", [_vm._v(_vm._s(_vm.elText.title_es))])
                              : _c("p", [_vm._v("No registrado")])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-12 col-md-6 col-lg-6" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", { staticClass: "font-weight-bold" }, [
                              _vm._v("Título EN")
                            ]),
                            _vm._v(" "),
                            _vm.elText.title_en
                              ? _c("p", [_vm._v(_vm._s(_vm.elText.title_en))])
                              : _c("p", [_vm._v("No registrado")])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-12 col-md-6 col-lg-6" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", { staticClass: "font-weight-bold" }, [
                              _vm._v("Descripción ES")
                            ]),
                            _vm._v(" "),
                            _vm.elText.description_es
                              ? _c("div", {
                                  domProps: {
                                    innerHTML: _vm._s(_vm.elText.description_es)
                                  }
                                })
                              : _c("p", [_vm._v("No registrado")])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-12 col-md-6 col-lg-6" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", { staticClass: "font-weight-bold" }, [
                              _vm._v("Descripción EN")
                            ]),
                            _vm._v(" "),
                            _vm.elText.description_en
                              ? _c("div", {
                                  domProps: {
                                    innerHTML: _vm._s(_vm.elText.description_en)
                                  }
                                })
                              : _c("p", [_vm._v("No registrado")])
                          ])
                        ])
                      ])
                    ])
                  : _c("div", { staticClass: "card-body" }, [
                      _c(
                        "div",
                        { staticClass: "row" },
                        _vm._l(2, function(i) {
                          return _c(
                            "div",
                            { key: i, staticClass: "col-12 mb-4" },
                            [
                              _c(
                                "div",
                                { staticClass: "w-25" },
                                [_c("Skeleton", { attrs: { height: "15px" } })],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "w-75" },
                                [_c("Skeleton", { attrs: { height: "50px" } })],
                                1
                              )
                            ]
                          )
                        }),
                        0
                      )
                    ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.editBlock
            ? _c("div", { staticClass: "card mb-4" }, [
                _c("div", { staticClass: "card-body" }, [
                  _c(
                    "form",
                    {
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.updateText.apply(null, arguments)
                        }
                      }
                    },
                    [
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          { staticClass: "col-12 col-md-12 col-lg-12" },
                          [
                            _c("div", { staticClass: "form-group" }, [
                              _c(
                                "label",
                                {
                                  staticClass: "font-weight-bold d-block",
                                  attrs: { for: "image" }
                                },
                                [_vm._v("Fondo")]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "row" }, [
                                _c(
                                  "div",
                                  {
                                    class: [
                                      _vm.elText.image
                                        ? "col-lg-4 mb-3 mb-lg-0"
                                        : ""
                                    ]
                                  },
                                  [
                                    _vm.elText.image
                                      ? _c("img", {
                                          staticClass: "img-fluid",
                                          attrs: {
                                            src:
                                              _vm.imagesUrl +
                                              "/about/" +
                                              _vm.elText.image,
                                            alt: ""
                                          }
                                        })
                                      : _vm._e()
                                  ]
                                ),
                                _vm._v(" "),
                                _vm.editBlock
                                  ? _c(
                                      "div",
                                      {
                                        class: [
                                          _vm.elText.image
                                            ? "col-lg-8"
                                            : "col-lg-12"
                                        ]
                                      },
                                      [
                                        _c(
                                          "vue-dropzone",
                                          {
                                            ref: "ref_image",
                                            attrs: {
                                              id: "id_image",
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
                                                staticClass:
                                                  "dropzone-custom-content"
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
                                                      "\n                          Suelte el archivo aquí o haga click para cargarlo.\n                        "
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _vm.errors && _vm.errors.image
                                          ? _c(
                                              "label",
                                              {
                                                staticClass:
                                                  "text-danger text-sm d-block mt-2",
                                                attrs: { for: "file" }
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(_vm.errors.image[0])
                                                )
                                              ]
                                            )
                                          : _vm._e()
                                      ],
                                      1
                                    )
                                  : _vm._e()
                              ])
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-12 col-md-12 col-lg-12" },
                          [
                            _c(
                              "div",
                              { staticClass: "form-group" },
                              [
                                _c("Input", {
                                  attrs: {
                                    label: "Título",
                                    variable: "title",
                                    errors: _vm.errorsText,
                                    valueEn: _vm.elText.title_en,
                                    valueEs: _vm.elText.title_es,
                                    valueEnParent: _vm.elText.title_en,
                                    valueEsParent: _vm.elText.title_es
                                  },
                                  on: {
                                    "update:valueEn": function($event) {
                                      return _vm.$set(
                                        _vm.elText,
                                        "title_en",
                                        $event
                                      )
                                    },
                                    "update:value-en": function($event) {
                                      return _vm.$set(
                                        _vm.elText,
                                        "title_en",
                                        $event
                                      )
                                    },
                                    "update:valueEs": function($event) {
                                      return _vm.$set(
                                        _vm.elText,
                                        "title_es",
                                        $event
                                      )
                                    },
                                    "update:value-es": function($event) {
                                      return _vm.$set(
                                        _vm.elText,
                                        "title_es",
                                        $event
                                      )
                                    }
                                  }
                                })
                              ],
                              1
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-12 col-md-12 col-lg-12" },
                          [
                            _c(
                              "div",
                              { staticClass: "form-group" },
                              [
                                _c("Editor", {
                                  attrs: {
                                    size: "md",
                                    label: "Descripción",
                                    variable: "description",
                                    errors: _vm.errorsText,
                                    valueEn: _vm.elText.description_en,
                                    valueEs: _vm.elText.description_es,
                                    valueEnParent: _vm.elText.description_en,
                                    valueEsParent: _vm.elText.description_es
                                  },
                                  on: {
                                    "update:valueEn": function($event) {
                                      return _vm.$set(
                                        _vm.elText,
                                        "description_en",
                                        $event
                                      )
                                    },
                                    "update:value-en": function($event) {
                                      return _vm.$set(
                                        _vm.elText,
                                        "description_en",
                                        $event
                                      )
                                    },
                                    "update:valueEs": function($event) {
                                      return _vm.$set(
                                        _vm.elText,
                                        "description_es",
                                        $event
                                      )
                                    },
                                    "update:value-es": function($event) {
                                      return _vm.$set(
                                        _vm.elText,
                                        "description_es",
                                        $event
                                      )
                                    }
                                  }
                                })
                              ],
                              1
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-12 text-right" },
                          [
                            _c("Button", {
                              attrs: {
                                text: "Actualizar",
                                classes: ["btn-inverse-primary"],
                                "request-server": _vm.requestSubmit
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
                                    return _vm.restoreText.apply(
                                      null,
                                      arguments
                                    )
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                Cancelar\n              "
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
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "text-right mb-3" }, [
            _c(
              "a",
              {
                staticClass: "btn btn-icon btn-inverse-primary",
                attrs: { href: "#" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.newEl.apply(null, arguments)
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
                _c("span", { staticClass: "btn-inner--text" }, [
                  _vm._v("Nuevo Elemento")
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c("DataTableDraggable", {
            attrs: {
              object: _vm.elements,
              buttonUpdate: true,
              buttonDelete: true,
              buttonDetail: false,
              "message-order": _vm.messageOrder
            },
            on: {
              "update:object": function($event) {
                _vm.elements = $event
              },
              drag: _vm.orderElements,
              edit: _vm.editEl,
              delete: _vm.deleteEl
            }
          })
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
                    [_vm._v("\n        Cancelar\n      ")]
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
              _vm._v(_vm._s(_vm.title) + " Elemento")
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
                        return _vm.submit.apply(null, arguments)
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
                            _c("Editor", {
                              attrs: {
                                size: "md",
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
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 col-lg-3" }, [
      _c("h2", [_vm._v("Garantía Lider")]),
      _vm._v(" "),
      _c("p", [
        _vm._v("Actualiza la sección Garantía Lider, de la página "),
        _c("b", [_vm._v("Nosotros")]),
        _vm._v(".")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/content/about/Index.vue?vue&type=template&id=4899ae2a&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/content/about/Index.vue?vue&type=template&id=4899ae2a& ***!
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
                { staticClass: "col-6 col-md-7" },
                [
                  _c("BreadCrumb", {
                    attrs: {
                      title: "Sobre Lider",
                      parent: "Contenido",
                      active: "Sobre Lider"
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
        _c("First", {
          attrs: {
            "message-order": _vm.messageOrder,
            "images-url": _vm.imagesUrl,
            "route-get-text": _vm.firstBlockTextRouteGet,
            "route-update-text": _vm.firstBlockTextRouteUpdate
          }
        }),
        _vm._v(" "),
        _c("Second", {
          attrs: {
            "route-get": _vm.compromiseRouteGet,
            "route-update": _vm.compromiseRouteUpdate
          }
        }),
        _vm._v(" "),
        _c("Third", {
          attrs: {
            "route-order": _vm.projectFinishedRouteOrder,
            route: _vm.projectFinishedRoute,
            "message-order": _vm.messageOrder,
            "images-url": _vm.imagesUrl,
            "route-get-all": _vm.projectFinishedRouteGetAll,
            "route-get-text": _vm.projectFinishedTextRouteGet,
            "route-update-text": _vm.projectFinishedTextRouteUpdate
          }
        }),
        _vm._v(" "),
        _c("Fourth", {
          attrs: {
            "route-order": _vm.warrantyElementsRouteOrder,
            route: _vm.warrantyElementsRoute,
            "message-order": _vm.messageOrder,
            "images-url": _vm.imagesUrl,
            "route-get-all": _vm.warrantyElementsRouteGetAll,
            "route-get-text": _vm.warrantyTextRouteGet,
            "route-update-text": _vm.warrantyTextRouteUpdate
          }
        }),
        _vm._v(" "),
        _c("Fifth", {
          attrs: {
            "route-order": _vm.customerSupportRouteOrder,
            route: _vm.customerSupportRoute,
            "message-order": _vm.messageOrder,
            "images-url": _vm.imagesUrl,
            "route-get-all": _vm.customerSupportRouteGetAll,
            "route-get-text": _vm.customerSupportTextRouteGet,
            "route-update-text": _vm.customerSupportTextRouteUpdate
          }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/content/about/Second.vue?vue&type=template&id=ebe532aa&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/content/about/Second.vue?vue&type=template&id=ebe532aa& ***!
  \******************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row mb-5" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "col-12 col-lg-9" }, [
      _c(
        "div",
        { staticClass: "text-right mb-4" },
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
                    "\n          Ver Página Nosotros - 2da Sección\n        "
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
                size: "xl",
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
                        [_vm._v("\n            Aceptar\n          ")]
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
                  _vm._v("Página Nosotros - 2da Sección")
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
                  attrs: { src: "/files/img/info/about-2.jpg", alt: "" }
                })
              ])
            ],
            2
          ),
          _vm._v(" "),
          _vm.startBlock
            ? _c(
                "a",
                {
                  staticClass: "btn btn-icon btn-inverse-primary",
                  attrs: { href: "#" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.editEl.apply(null, arguments)
                    }
                  }
                },
                [
                  _c(
                    "span",
                    { staticClass: "btn-inner--icon" },
                    [_c("jam-info", { staticClass: "current-color" })],
                    1
                  ),
                  _vm._v(" "),
                  _c("span", { staticClass: "btn-inner--text" }, [
                    _vm._v("Editar Sección")
                  ])
                ]
              )
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _vm.startBlock
        ? _c("div", { staticClass: "card mb-4" }, [
            !_vm.loadingGet
              ? _c("div", { staticClass: "card-body" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-12 col-md-6 col-lg-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { staticClass: "font-weight-bold" }, [
                          _vm._v("Título ES")
                        ]),
                        _vm._v(" "),
                        _vm.el.title_es
                          ? _c("p", [_vm._v(_vm._s(_vm.el.title_es))])
                          : _c("p", [_vm._v("No registrado")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-md-6 col-lg-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { staticClass: "font-weight-bold" }, [
                          _vm._v("Título EN")
                        ]),
                        _vm._v(" "),
                        _vm.el.title_en
                          ? _c("p", [_vm._v(_vm._s(_vm.el.title_en))])
                          : _c("p", [_vm._v("No registrado")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-md-6 col-lg-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { staticClass: "font-weight-bold" }, [
                          _vm._v("Descripción ES")
                        ]),
                        _vm._v(" "),
                        _vm.el.description_es
                          ? _c("div", {
                              domProps: {
                                innerHTML: _vm._s(_vm.el.description_es)
                              }
                            })
                          : _c("p", [_vm._v("No registrado")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-md-6 col-lg-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { staticClass: "font-weight-bold" }, [
                          _vm._v("Descripción EN")
                        ]),
                        _vm._v(" "),
                        _vm.el.description_en
                          ? _c("div", {
                              domProps: {
                                innerHTML: _vm._s(_vm.el.description_en)
                              }
                            })
                          : _c("p", [_vm._v("No registrado")])
                      ])
                    ])
                  ])
                ])
              : _c("div", { staticClass: "card-body" }, [
                  _c(
                    "div",
                    { staticClass: "row" },
                    _vm._l(2, function(i) {
                      return _c("div", { key: i, staticClass: "col-12 mb-4" }, [
                        _c(
                          "div",
                          { staticClass: "w-25" },
                          [_c("Skeleton", { attrs: { height: "15px" } })],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "w-75" },
                          [_c("Skeleton", { attrs: { height: "50px" } })],
                          1
                        )
                      ])
                    }),
                    0
                  )
                ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.editBlock
        ? _c("div", { staticClass: "card mb-4" }, [
            _c("div", { staticClass: "card-body" }, [
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.update.apply(null, arguments)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-12 col-md-12 col-lg-12" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("Input", {
                            attrs: {
                              label: "Título",
                              variable: "title",
                              errors: _vm.errors,
                              valueEn: _vm.el.title_en,
                              valueEs: _vm.el.title_es,
                              valueEnParent: _vm.el.title_en,
                              valueEsParent: _vm.el.title_es
                            },
                            on: {
                              "update:valueEn": function($event) {
                                return _vm.$set(_vm.el, "title_en", $event)
                              },
                              "update:value-en": function($event) {
                                return _vm.$set(_vm.el, "title_en", $event)
                              },
                              "update:valueEs": function($event) {
                                return _vm.$set(_vm.el, "title_es", $event)
                              },
                              "update:value-es": function($event) {
                                return _vm.$set(_vm.el, "title_es", $event)
                              }
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-md-12 col-lg-12" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("Editor", {
                            attrs: {
                              size: "md",
                              label: "Descripción",
                              variable: "description",
                              errors: _vm.errors,
                              valueEn: _vm.el.description_en,
                              valueEs: _vm.el.description_es,
                              valueEnParent: _vm.el.description_en,
                              valueEsParent: _vm.el.description_es
                            },
                            on: {
                              "update:valueEn": function($event) {
                                return _vm.$set(
                                  _vm.el,
                                  "description_en",
                                  $event
                                )
                              },
                              "update:value-en": function($event) {
                                return _vm.$set(
                                  _vm.el,
                                  "description_en",
                                  $event
                                )
                              },
                              "update:valueEs": function($event) {
                                return _vm.$set(
                                  _vm.el,
                                  "description_es",
                                  $event
                                )
                              },
                              "update:value-es": function($event) {
                                return _vm.$set(
                                  _vm.el,
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
                    _c(
                      "div",
                      { staticClass: "col-12 text-right" },
                      [
                        _c("Button", {
                          attrs: {
                            text: "Actualizar",
                            classes: ["btn-inverse-primary"],
                            "request-server": _vm.requestSubmit
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
                                return _vm.restore.apply(null, arguments)
                              }
                            }
                          },
                          [_vm._v("\n                Cancelar\n              ")]
                        )
                      ],
                      1
                    )
                  ])
                ]
              )
            ])
          ])
        : _vm._e()
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 col-lg-3" }, [
      _c("h2", [_vm._v("Compromiso con la calidad")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n      Actualiza la sección Compromiso con la calidad, de la página\n      "
        ),
        _c("b", [_vm._v("Nosotros")]),
        _vm._v(".\n    ")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/content/about/Third.vue?vue&type=template&id=2e1d9a00&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/content/about/Third.vue?vue&type=template&id=2e1d9a00& ***!
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
    { staticClass: "row mb-5" },
    [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-12 col-lg-9" },
        [
          _c("div", [
            _c(
              "div",
              { staticClass: "text-right mb-3" },
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
                          "\n          Ver Página Nosotros - 3ra Sección\n        "
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
                      size: "xl",
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
                              [_vm._v("\n            Aceptar\n          ")]
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
                        _vm._v("Página Nosotros - 3ra Sección")
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
                        attrs: { src: "/files/img/info/about-3.jpg", alt: "" }
                      })
                    ])
                  ],
                  2
                ),
                _vm._v(" "),
                _vm.startBlock
                  ? _c(
                      "a",
                      {
                        staticClass: "btn btn-icon btn-inverse-primary",
                        attrs: { href: "#" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.editElText.apply(null, arguments)
                          }
                        }
                      },
                      [
                        _c(
                          "span",
                          { staticClass: "btn-inner--icon" },
                          [_c("jam-info", { staticClass: "current-color" })],
                          1
                        ),
                        _vm._v(" "),
                        _c("span", { staticClass: "btn-inner--text" }, [
                          _vm._v("Editar Sección")
                        ])
                      ]
                    )
                  : _vm._e()
              ],
              1
            ),
            _vm._v(" "),
            _vm.startBlock
              ? _c("div", { staticClass: "card mb-4" }, [
                  !_vm.loadingGetText
                    ? _c("div", { staticClass: "card-body" }, [
                        _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            { staticClass: "col-12 col-md-6 col-lg-6" },
                            [
                              _c("div", { staticClass: "form-group" }, [
                                _c(
                                  "label",
                                  { staticClass: "font-weight-bold" },
                                  [_vm._v("Título ES")]
                                ),
                                _vm._v(" "),
                                _vm.elText.title_es
                                  ? _c("p", [
                                      _vm._v(_vm._s(_vm.elText.title_es))
                                    ])
                                  : _c("p", [_vm._v("No registrado")])
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-12 col-md-6 col-lg-6" },
                            [
                              _c("div", { staticClass: "form-group" }, [
                                _c(
                                  "label",
                                  { staticClass: "font-weight-bold" },
                                  [_vm._v("Título EN")]
                                ),
                                _vm._v(" "),
                                _vm.elText.title_en
                                  ? _c("p", [
                                      _vm._v(_vm._s(_vm.elText.title_en))
                                    ])
                                  : _c("p", [_vm._v("No registrado")])
                              ])
                            ]
                          )
                        ])
                      ])
                    : _c("div", { staticClass: "card-body" }, [
                        _c(
                          "div",
                          { staticClass: "row" },
                          _vm._l(2, function(i) {
                            return _c(
                              "div",
                              { key: i, staticClass: "col-12 mb-4" },
                              [
                                _c(
                                  "div",
                                  { staticClass: "w-25" },
                                  [
                                    _c("Skeleton", {
                                      attrs: { height: "15px" }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "w-75" },
                                  [
                                    _c("Skeleton", {
                                      attrs: { height: "50px" }
                                    })
                                  ],
                                  1
                                )
                              ]
                            )
                          }),
                          0
                        )
                      ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.editBlock
              ? _c("div", { staticClass: "card mb-4" }, [
                  _c("div", { staticClass: "card-body" }, [
                    _c(
                      "form",
                      {
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            return _vm.updateText.apply(null, arguments)
                          }
                        }
                      },
                      [
                        _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            { staticClass: "col-12 col-md-12 col-lg-12" },
                            [
                              _c(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  _c("Input", {
                                    attrs: {
                                      label: "Título",
                                      variable: "title",
                                      errors: _vm.errorsText,
                                      valueEn: _vm.elText.title_en,
                                      valueEs: _vm.elText.title_es,
                                      valueEnParent: _vm.elText.title_en,
                                      valueEsParent: _vm.elText.title_es
                                    },
                                    on: {
                                      "update:valueEn": function($event) {
                                        return _vm.$set(
                                          _vm.elText,
                                          "title_en",
                                          $event
                                        )
                                      },
                                      "update:value-en": function($event) {
                                        return _vm.$set(
                                          _vm.elText,
                                          "title_en",
                                          $event
                                        )
                                      },
                                      "update:valueEs": function($event) {
                                        return _vm.$set(
                                          _vm.elText,
                                          "title_es",
                                          $event
                                        )
                                      },
                                      "update:value-es": function($event) {
                                        return _vm.$set(
                                          _vm.elText,
                                          "title_es",
                                          $event
                                        )
                                      }
                                    }
                                  })
                                ],
                                1
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-12 text-right" },
                            [
                              _c("Button", {
                                attrs: {
                                  text: "Actualizar",
                                  classes: ["btn-inverse-primary"],
                                  "request-server": _vm.requestSubmit
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
                                      return _vm.restoreText.apply(
                                        null,
                                        arguments
                                      )
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                  Cancelar\n                "
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
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "text-right mb-3" }, [
            _c(
              "a",
              {
                staticClass: "btn btn-icon btn-inverse-primary",
                attrs: { href: "#" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.newEl.apply(null, arguments)
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
                _c("span", { staticClass: "btn-inner--text" }, [
                  _vm._v("Nuevo Proyecto Entregado")
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c("DataTableDraggable", {
            attrs: {
              object: _vm.elements,
              buttonUpdate: true,
              buttonDelete: true,
              buttonDetail: false,
              "message-order": _vm.messageOrder
            },
            on: {
              "update:object": function($event) {
                _vm.elements = $event
              },
              drag: _vm.orderElements,
              edit: _vm.editEl,
              delete: _vm.deleteEl
            }
          })
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
                    [_vm._v("\n        Cancelar\n      ")]
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
              _vm._v(_vm._s(_vm.title) + " Proyecto Entregado")
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
                        return _vm.submit.apply(null, arguments)
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
                              staticClass: "font-weight-bold d-block",
                              attrs: { for: "name" }
                            },
                            [_vm._v("Año Entregado")]
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
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c(
                              "b-form-checkbox",
                              {
                                attrs: {
                                  id: "id_checkbox_active",
                                  name: "check-button",
                                  switch: ""
                                },
                                model: {
                                  value: _vm.element.active,
                                  callback: function($$v) {
                                    _vm.$set(_vm.element, "active", $$v)
                                  },
                                  expression: "element.active"
                                }
                              },
                              [_vm._v("Habilitado")]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("Editor", {
                              attrs: {
                                size: "md",
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
                        ),
                        _vm._v(" "),
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
                          _c("small", { staticClass: "d-block mb-0 lh-1" }, [
                            _vm._v("Resolución recomendada: 700x420px")
                          ]),
                          _vm._v(" "),
                          _c("small", { staticClass: "d-block mb-0 lh-1" }, [
                            _vm._v("Formato: JPG")
                          ]),
                          _vm._v(" "),
                          _c("small", { staticClass: "d-block mb-2 lh-1" }, [
                            _vm._v("Tamaño recomendado: No mayor a 200KB")
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _vm.element.image
                              ? _c("div", { staticClass: "col text-center" }, [
                                  _c("img", {
                                    attrs: {
                                      src:
                                        _vm.imagesUrl +
                                        "/about/" +
                                        _vm.element.image,
                                      height: "150",
                                      alt: _vm.element.name_es
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
                                          210000,
                                          "200kb"
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
                                              "\n                        Suelte los archivos aquí o haga click para cargarlos.\n                      "
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
          element: "proyecto entregado",
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
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 col-lg-3" }, [
      _c("h2", [_vm._v("Proyectos Entregados")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n      Actualiza la sección Proyectos entregados, de la página "
        ),
        _c("b", [_vm._v("Nosotros")]),
        _vm._v(".\n    ")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/content/about/Fifth.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/content/about/Fifth.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Fifth_vue_vue_type_template_id_cbf8a960___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Fifth.vue?vue&type=template&id=cbf8a960& */ "./resources/js/views/content/about/Fifth.vue?vue&type=template&id=cbf8a960&");
/* harmony import */ var _Fifth_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Fifth.vue?vue&type=script&lang=js& */ "./resources/js/views/content/about/Fifth.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Fifth_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Fifth_vue_vue_type_template_id_cbf8a960___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Fifth_vue_vue_type_template_id_cbf8a960___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/content/about/Fifth.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/content/about/Fifth.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/content/about/Fifth.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Fifth_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Fifth.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/content/about/Fifth.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Fifth_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/content/about/Fifth.vue?vue&type=template&id=cbf8a960&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/content/about/Fifth.vue?vue&type=template&id=cbf8a960& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Fifth_vue_vue_type_template_id_cbf8a960___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Fifth.vue?vue&type=template&id=cbf8a960& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/content/about/Fifth.vue?vue&type=template&id=cbf8a960&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Fifth_vue_vue_type_template_id_cbf8a960___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Fifth_vue_vue_type_template_id_cbf8a960___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/content/about/First.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/content/about/First.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _First_vue_vue_type_template_id_13c2b3c9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./First.vue?vue&type=template&id=13c2b3c9& */ "./resources/js/views/content/about/First.vue?vue&type=template&id=13c2b3c9&");
/* harmony import */ var _First_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./First.vue?vue&type=script&lang=js& */ "./resources/js/views/content/about/First.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _First_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _First_vue_vue_type_template_id_13c2b3c9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _First_vue_vue_type_template_id_13c2b3c9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/content/about/First.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/content/about/First.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/content/about/First.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_First_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./First.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/content/about/First.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_First_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/content/about/First.vue?vue&type=template&id=13c2b3c9&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/content/about/First.vue?vue&type=template&id=13c2b3c9& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_First_vue_vue_type_template_id_13c2b3c9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./First.vue?vue&type=template&id=13c2b3c9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/content/about/First.vue?vue&type=template&id=13c2b3c9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_First_vue_vue_type_template_id_13c2b3c9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_First_vue_vue_type_template_id_13c2b3c9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/content/about/Fourth.vue":
/*!*****************************************************!*\
  !*** ./resources/js/views/content/about/Fourth.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Fourth_vue_vue_type_template_id_38076d5e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Fourth.vue?vue&type=template&id=38076d5e& */ "./resources/js/views/content/about/Fourth.vue?vue&type=template&id=38076d5e&");
/* harmony import */ var _Fourth_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Fourth.vue?vue&type=script&lang=js& */ "./resources/js/views/content/about/Fourth.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Fourth_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Fourth_vue_vue_type_template_id_38076d5e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Fourth_vue_vue_type_template_id_38076d5e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/content/about/Fourth.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/content/about/Fourth.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/content/about/Fourth.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Fourth_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Fourth.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/content/about/Fourth.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Fourth_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/content/about/Fourth.vue?vue&type=template&id=38076d5e&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/content/about/Fourth.vue?vue&type=template&id=38076d5e& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Fourth_vue_vue_type_template_id_38076d5e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Fourth.vue?vue&type=template&id=38076d5e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/content/about/Fourth.vue?vue&type=template&id=38076d5e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Fourth_vue_vue_type_template_id_38076d5e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Fourth_vue_vue_type_template_id_38076d5e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/content/about/Index.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/content/about/Index.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_4899ae2a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=4899ae2a& */ "./resources/js/views/content/about/Index.vue?vue&type=template&id=4899ae2a&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/content/about/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_4899ae2a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_4899ae2a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/content/about/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/content/about/Index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/content/about/Index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/content/about/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/content/about/Index.vue?vue&type=template&id=4899ae2a&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/content/about/Index.vue?vue&type=template&id=4899ae2a& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_4899ae2a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=4899ae2a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/content/about/Index.vue?vue&type=template&id=4899ae2a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_4899ae2a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_4899ae2a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/content/about/Second.vue":
/*!*****************************************************!*\
  !*** ./resources/js/views/content/about/Second.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Second_vue_vue_type_template_id_ebe532aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Second.vue?vue&type=template&id=ebe532aa& */ "./resources/js/views/content/about/Second.vue?vue&type=template&id=ebe532aa&");
/* harmony import */ var _Second_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Second.vue?vue&type=script&lang=js& */ "./resources/js/views/content/about/Second.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Second_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Second_vue_vue_type_template_id_ebe532aa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Second_vue_vue_type_template_id_ebe532aa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/content/about/Second.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/content/about/Second.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/content/about/Second.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Second_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Second.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/content/about/Second.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Second_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/content/about/Second.vue?vue&type=template&id=ebe532aa&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/content/about/Second.vue?vue&type=template&id=ebe532aa& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Second_vue_vue_type_template_id_ebe532aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Second.vue?vue&type=template&id=ebe532aa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/content/about/Second.vue?vue&type=template&id=ebe532aa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Second_vue_vue_type_template_id_ebe532aa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Second_vue_vue_type_template_id_ebe532aa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/content/about/Third.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/content/about/Third.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Third_vue_vue_type_template_id_2e1d9a00___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Third.vue?vue&type=template&id=2e1d9a00& */ "./resources/js/views/content/about/Third.vue?vue&type=template&id=2e1d9a00&");
/* harmony import */ var _Third_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Third.vue?vue&type=script&lang=js& */ "./resources/js/views/content/about/Third.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Third_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Third_vue_vue_type_template_id_2e1d9a00___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Third_vue_vue_type_template_id_2e1d9a00___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/content/about/Third.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/content/about/Third.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/content/about/Third.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Third_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Third.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/content/about/Third.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Third_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/content/about/Third.vue?vue&type=template&id=2e1d9a00&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/content/about/Third.vue?vue&type=template&id=2e1d9a00& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Third_vue_vue_type_template_id_2e1d9a00___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Third.vue?vue&type=template&id=2e1d9a00& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/content/about/Third.vue?vue&type=template&id=2e1d9a00&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Third_vue_vue_type_template_id_2e1d9a00___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Third_vue_vue_type_template_id_2e1d9a00___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);