(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/pages/content/general-content"],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form/MultipleFilesPersonalData.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/form/MultipleFilesPersonalData.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
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







/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    errors: Object,
    fieldName: String,
    multimediaUrl: String,
    folder: String,
    filesParent: [String, Array],
    //iconsParent: Array,
    messageOrder: String
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
        acceptedFiles: "application/pdf",
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

    /*updateIcons() {
      this.icons.forEach((element, i) => {
        if (element.file instanceof File) {
          this.$refs["ref_icon_" + i][0].dropzone.icons.pop();
          document
            .querySelectorAll("#icon" + i + ">.dz-preview")
            .forEach(function (a) {
              a.remove();
            });
          //Add File
          this.$refs["ref_icon_" + i][0].manuallyAddFile(element.file, "/");
          this.$refs["ref_icon_" + i][0].dropzone.emit(
            "thumbnail",
            element.file,
            element.file.dataURL
          );
          this.$refs["ref_icon_" + i][0].dropzone.emit(
            "complete",
            element.file
          );
        }
      });
    },*/
    handleEnd: function handleEnd(added, removed, moved) {
      var _this2 = this;

      //this.updateImages();
      this.showLoading = true;
      setTimeout(function () {
        _this2.updateImages();
        /*if (this.showIconField) {
          this.updateIcons();
        }*/


        _this2.showLoading = false;
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
        button_es: "",
        button_en: ""
      });
    },
    remove: function remove(index) {
      var _this3 = this;

      this.files.splice(index, 1);
      this.showLoading = true;
      setTimeout(function () {
        _this3.updateImages();

        _this3.showLoading = false;
      }, 500);
    },
    handleAddedFiles: function handleAddedFiles(e, index) {
      var _this4 = this;

      setTimeout(function () {
        _this4.files[index].file = _this4.$refs["ref_file_" + index][0].dropzone.files[0];
      }, 500);
    }
    /*handleAddedIcons(e, index) {
      setTimeout(() => {
        this.files[index].icon = this.$refs[
          "ref_icon_" + index
        ][0].dropzone.files[0];
      }, 500);
    },*/

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
    }
    /*icons: {
      immediate: true,
      deep: true,
      handler: function (newValue) {
        this.$emit("update:icons", newValue);
      },
    },*/

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/content/GeneralContent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/content/GeneralContent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue2-dropzone */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.js");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Button */ "./resources/js/components/Button.vue");
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-quill-editor */ "./node_modules/vue-quill-editor/dist/vue-quill-editor.js");
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_quill_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_upload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-upload-component */ "./node_modules/vue-upload-component/dist/vue-upload-component.js");
/* harmony import */ var vue_upload_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_upload_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/BreadCrumb */ "./resources/js/components/BreadCrumb.vue");
/* harmony import */ var _components_skeleton_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/skeleton/form */ "./resources/js/components/skeleton/form.vue");
/* harmony import */ var _components_modals_Destroy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/modals/Destroy */ "./resources/js/components/modals/Destroy.vue");
/* harmony import */ var _components_form_Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/form/Input */ "./resources/js/components/form/Input.vue");
/* harmony import */ var _components_form_MultipleFilesPersonalData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/form/MultipleFilesPersonalData */ "./resources/js/components/form/MultipleFilesPersonalData.vue");
/* harmony import */ var _components_form_Editor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/form/Editor */ "./resources/js/components/form/Editor.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









 // import Loader from "../../components/Loader";

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    routeUpdateSection: String,
    routeGetAll: String,
    route: String,
    imagesUrl: String,
    videosUrl: String,
    multimediaUrl: String // routeOrder: String,
    // messageOrder: String,

  },
  components: {
    Input: _components_form_Input__WEBPACK_IMPORTED_MODULE_7__["default"],
    FileUpload: vue_upload_component__WEBPACK_IMPORTED_MODULE_3___default.a,
    quillEditor: vue_quill_editor__WEBPACK_IMPORTED_MODULE_2__["quillEditor"],
    Editor: _components_form_Editor__WEBPACK_IMPORTED_MODULE_9__["default"],
    Button: _components_Button__WEBPACK_IMPORTED_MODULE_1__["default"],
    vueDropzone: vue2_dropzone__WEBPACK_IMPORTED_MODULE_0___default.a,
    BreadCrumb: _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_4__["default"],
    SkeletonForm: _components_skeleton_form__WEBPACK_IMPORTED_MODULE_5__["default"],
    Destroy: _components_modals_Destroy__WEBPACK_IMPORTED_MODULE_6__["default"],
    MultipleFilesPersonalData: _components_form_MultipleFilesPersonalData__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  data: function data() {
    return {
      loading: true,
      requestServer: false,
      errors: {},
      dropzoneOptions: {
        url: "/",
        maxFiles: 1,
        acceptedFiles: "image/png,image/jpeg,image/jpg,image/svg+xml",
        autoProcessQueue: false,
        thumbnailWidth: 400,
        addRemoveLinks: true,
        dictRemoveFile: "Remover Imagen"
      },
      dropzoneVideoOptions: {
        url: "/",
        maxFiles: 1,
        acceptedFiles: "video/mp4",
        autoProcessQueue: false,
        //thumbnailWidth: 400,
        addRemoveLinks: true,
        dictRemoveFile: "Remover Video"
      },
      quillEditorOptions: {
        placeholder: "",
        modules: {
          toolbar: {
            handlers: {
              image: function image(value) {
                document.getElementById("id_content_images").click();
              }
            },
            container: [["bold", "italic", "underline", "strike"], ["blockquote"], [{
              header: 1
            }, {
              header: 2
            }], [{
              list: "ordered"
            }, {
              list: "bullet"
            }], [{
              indent: "-1"
            }, {
              indent: "+1"
            }], [{
              size: [false]
            }], [{
              header: [1, 2, 3, 4, 5, false]
            }], [{
              font: [false]
            }], [{
              color: []
            }, {
              background: []
            }], [{
              align: []
            }], //['clean'],
            ["link", "image", "video"]]
          }
        }
      },
      startBlock: true,
      elementBlock: false,
      pages: {
        sections: []
      },
      page: {},
      section: {
        id: "",
        name: "",
        image: "",
        title: "",
        description: ""
      },
      fields: {},
      image: [],
      image_responsive: [],
      video: []
    };
  },
  methods: {
    updateSection: function updateSection() {
      var _this = this;

      this.requestServer = true;
      var fd = new FormData();
      fd.append("section_id", this.section.id);
      fd.append("content", JSON.stringify(this.fields));
      fd.append("contentFiles", JSON.stringify(this.fields));

      if (this.section.name == "Archivos") {
        if (this.fields[0].value && this.fields[0].value.length) {
          this.fields[0].value.forEach(function (el, i) {
            fd.append("file" + i, el.file);
            fd.append("button_es" + i, el.button_es);
            fd.append("button_en" + i, el.button_en);
          });
        }
      }

      if (this.$refs.ref_image && this.$refs.ref_image.length > 0 && this.$refs.ref_image[0].dropzone.files[0]) {
        fd.append("image", this.$refs.ref_image[0].dropzone.files[0]);
      }

      if (this.$refs.ref_image_responsive && this.$refs.ref_image_responsive.length > 0 && this.$refs.ref_image_responsive[0].dropzone.files[0]) {
        fd.append("image_responsive", this.$refs.ref_image_responsive[0].dropzone.files[0]);
      }

      if (this.$refs.ref_background && this.$refs.ref_background.length > 0 && this.$refs.ref_background[0].dropzone.files[0]) {
        fd.append("background", this.$refs.ref_background[0].dropzone.files[0]);
      }

      if (this.$refs.ref_video && this.$refs.ref_video.length > 0 && this.$refs.ref_video[0].dropzone.files[0]) {
        fd.append("video", this.$refs.ref_video[0].dropzone.files[0]);
      }

      fd.append("_method", "put");
      axios.post(this.routeUpdateSection, fd).then(function (response) {
        _this.requestServer = false;

        _this.restorePage();

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
        _this.requestServer = false;

        if (error.response.status === 422) {
          _this.errores = error.response.data.errors || {};
          return;
        }

        _this.restorePage();

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
    restorePage: function restorePage() {
      if (this.elementBlock) {
        this.elementBlock = false;
        this.startBlock = true;
        this.section = {
          id: "",
          name: "",
          title: "",
          description: "",
          images: []
        };
        this.fields = {};
      }
    },
    getSection: function getSection(id, name, idPage) {
      var _this2 = this;

      this.page = this.pages.find(function (x) {
        return x.id === idPage;
      });
      axios.get(this.route + "/json/get/section/" + id).then(function (response) {
        _this2.fields = response.data;
        _this2.section.id = id;
        _this2.section.name = name;
        _this2.startBlock = false;
        _this2.elementBlock = true;
      })["catch"](function (error) {});
    },
    getPage: function getPage(id) {
      var _this3 = this;

      axios.get(this.route + "/json/get/" + id).then(function (response) {
        _this3.page = response.data;
      })["catch"](function (error) {});
    },
    getPages: function getPages() {
      var _this4 = this;

      axios.get(this.routeGetAll).then(function (response) {
        _this4.pages = response.data;
        _this4.loading = false;
      })["catch"](function (error) {});
    }
  },
  created: function created() {
    this.getPages();
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form/MultipleFilesPersonalData.vue?vue&type=template&id=29d15251&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/form/MultipleFilesPersonalData.vue?vue&type=template&id=29d15251& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
              _c("div", { staticClass: "row position-relative" }, [
                _c(
                  "div",
                  {
                    staticClass: "position-absolute",
                    staticStyle: { top: "50%", left: "20px" }
                  },
                  [
                    _c(
                      "svg",
                      {
                        staticStyle: { height: "25px" },
                        attrs: {
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 24 24"
                        }
                      },
                      [
                        _c("path", {
                          attrs: {
                            d:
                              "M8.5 7C9.32843 7 10 6.32843 10 5.5C10 4.67157 9.32843 4 8.5 4C7.67157 4 7 4.67157 7 5.5C7 6.32843 7.67157 7 8.5 7ZM8.5 13.5C9.32843 13.5 10 12.8284 10 12C10 11.1716 9.32843 10.5 8.5 10.5C7.67157 10.5 7 11.1716 7 12C7 12.8284 7.67157 13.5 8.5 13.5ZM10 18.5C10 19.3284 9.32843 20 8.5 20C7.67157 20 7 19.3284 7 18.5C7 17.6716 7.67157 17 8.5 17C9.32843 17 10 17.6716 10 18.5ZM15.5 7C16.3284 7 17 6.32843 17 5.5C17 4.67157 16.3284 4 15.5 4C14.6716 4 14 4.67157 14 5.5C14 6.32843 14.6716 7 15.5 7ZM17 12C17 12.8284 16.3284 13.5 15.5 13.5C14.6716 13.5 14 12.8284 14 12C14 11.1716 14.6716 10.5 15.5 10.5C16.3284 10.5 17 11.1716 17 12ZM15.5 20C16.3284 20 17 19.3284 17 18.5C17 17.6716 16.3284 17 15.5 17C14.6716 17 14 17.6716 14 18.5C14 19.3284 14.6716 20 15.5 20Z"
                          }
                        })
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-10 pl-3" }, [
                  _c("div", { staticClass: "row pl-5 pr-3 px-lg-3" }, [
                    _c(
                      "div",
                      { staticClass: "col-12 col-lg-6" },
                      [
                        _c("Input", {
                          attrs: {
                            label: "Texto Botón",
                            variable: "files." + i + ".button",
                            errors: _vm.errors,
                            valueEn: el.button_en,
                            valueEs: el.button_es,
                            valueEnParent: el.button_en,
                            valueEsParent: el.button_es
                          },
                          on: {
                            "update:valueEn": function($event) {
                              return _vm.$set(el, "button_en", $event)
                            },
                            "update:value-en": function($event) {
                              return _vm.$set(el, "button_en", $event)
                            },
                            "update:valueEs": function($event) {
                              return _vm.$set(el, "button_es", $event)
                            },
                            "update:value-es": function($event) {
                              return _vm.$set(el, "button_es", $event)
                            }
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-lg-6" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c(
                            "label",
                            { staticClass: "font-weight-bold d-block" },
                            [_vm._v("Archivo")]
                          ),
                          _vm._v(" "),
                          typeof el.file == "string" && el.file !== ""
                            ? _c("embed", {
                                attrs: {
                                  src:
                                    _vm.multimediaUrl +
                                    "/" +
                                    _vm.folder +
                                    "/" +
                                    el.file,
                                  width: "100%",
                                  height: "375"
                                }
                              })
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
                                      return _vm.$validatePDFDropzone(
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
                                  staticClass:
                                    "text-danger text-sm d-block mt-2",
                                  attrs: { for: "image" }
                                },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm.errors["files." + i + ".file"][0]
                                    )
                                  )
                                ]
                              )
                            : _vm._e()
                        ],
                        1
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "col-2 text-center d-flex pl-0 pl-lg-2",
                    staticStyle: {
                      "align-items": "center",
                      "justify-content": "center"
                    }
                  },
                  [
                    typeof el.file == "string" && el.file !== ""
                      ? _c(
                          "a",
                          {
                            staticClass:
                              "btn btn-sm btn-icon-only rounded-circle btn-inverse-info mr-2",
                            attrs: {
                              target: "_blank",
                              href:
                                _vm.multimediaUrl +
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
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass:
                          "btn btn-sm btn-icon-only rounded-circle btn-inverse-danger",
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
                  ]
                )
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
              return _vm.add.apply(null, arguments)
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/content/GeneralContent.vue?vue&type=template&id=745bcb26&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/content/GeneralContent.vue?vue&type=template&id=745bcb26& ***!
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
                      title: _vm.startBlock
                        ? "Contenido General"
                        : "Actualizar Contenido General",
                      parent: "Contenido",
                      active: "Contenido General"
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
        _c("div", { staticClass: "col-12 mb-4" }, [
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.startBlock,
                  expression: "startBlock"
                }
              ],
              staticClass: "row"
            },
            [
              _vm.loading
                ? _c("div", { staticClass: "col-12" }, [_c("SkeletonForm")], 1)
                : _c("div", { staticClass: "col-12" }, [
                    _c(
                      "div",
                      { staticClass: "row" },
                      _vm._l(_vm.pages, function(item) {
                        return _c(
                          "div",
                          { key: item.id, staticClass: "col-12" },
                          [
                            _c(
                              "h2",
                              {
                                staticClass: "font-weight-bold mb-3 text-dark"
                              },
                              [
                                _vm._v(
                                  "\n                  " +
                                    _vm._s(item.name) +
                                    " (" +
                                    _vm._s(item.sections_count) +
                                    "\n                  secciones)\n                "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "row" },
                              _vm._l(item.sections, function(section) {
                                return _c(
                                  "div",
                                  {
                                    key: section.id,
                                    staticClass: "col-12 col-lg-6 col-xl-3"
                                  },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "card shadow mb-4" },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "card-body" },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "row align-items-center"
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  { staticClass: "col" },
                                                  [
                                                    _c(
                                                      "small",
                                                      {
                                                        staticClass:
                                                          "text-dark mb-0"
                                                      },
                                                      [_vm._v("Sección")]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "h4",
                                                      {
                                                        staticClass:
                                                          "font-weight-bold mb-0 text-uppercase text-dark"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                              " +
                                                            _vm._s(
                                                              section.name
                                                            ) +
                                                            "\n                            "
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  { staticClass: "col-auto" },
                                                  [
                                                    _c(
                                                      "button",
                                                      {
                                                        staticClass:
                                                          "btn btn-sm btn-inverse-primary",
                                                        attrs: {
                                                          type: "button"
                                                        },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            $event.preventDefault()
                                                            return _vm.getSection(
                                                              section.id,
                                                              section.name,
                                                              item.id
                                                            )
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _c("i", {
                                                          staticClass:
                                                            "fas fa-pen-alt text-warning mr-1"
                                                        }),
                                                        _vm._v(
                                                          "\n                              Editar\n                            "
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ]
                                )
                              }),
                              0
                            )
                          ]
                        )
                      }),
                      0
                    )
                  ])
            ]
          ),
          _vm._v(" "),
          _vm.elementBlock
            ? _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-12" }, [
                  _c("div", { staticClass: "card shadow" }, [
                    _c("div", { staticClass: "card-header border-0" }, [
                      _c(
                        "h2",
                        { staticClass: "mb-0 text-uppercase text-primary" },
                        [
                          _vm._v(
                            "\n                  Página " +
                              _vm._s(_vm.page.name) +
                              " - Sección:\n                  " +
                              _vm._s(_vm.section.name) +
                              "\n                "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "card-body" }, [
                      _c(
                        "form",
                        {
                          on: {
                            submit: function($event) {
                              $event.preventDefault()
                              return _vm.updateSection.apply(null, arguments)
                            }
                          }
                        },
                        [
                          _c("file-upload", {
                            ref: "ref_content_images",
                            staticClass: "d-none",
                            attrs: {
                              extensions: "jpg,jpeg,png",
                              accept: "image/png, image/jpeg, image/jpg",
                              drop: false,
                              multiple: true,
                              "input-id": "id_content_images"
                            },
                            on: {
                              "input-filter": function($event) {
                                return _vm.$uploadImageUploadComponent(
                                  $event,
                                  _vm.$refs.ref_content[0],
                                  250000,
                                  "500kb",
                                  "pages"
                                )
                              }
                            },
                            model: {
                              value: _vm.section.images,
                              callback: function($$v) {
                                _vm.$set(_vm.section, "images", $$v)
                              },
                              expression: "section.images"
                            }
                          }),
                          _vm._v(" "),
                          _vm._l(_vm.fields, function(field, index) {
                            return _c("div", { key: field.id }, [
                              _c("div", { staticClass: "col-12 p-0" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  field.type != "input" &&
                                  field.type != "editor_large" &&
                                  field.type != "editor_small"
                                    ? _c(
                                        "label",
                                        { staticClass: "font-weight-bold" },
                                        [_vm._v(_vm._s(field.name))]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  field.type == "input"
                                    ? _c(
                                        "div",
                                        [
                                          _c("Input", {
                                            attrs: {
                                              errors: _vm.errors,
                                              label: field.name,
                                              variable: "value",
                                              valueEn:
                                                _vm.fields[index].value_en,
                                              valueEs:
                                                _vm.fields[index].value_es,
                                              valueEnParent:
                                                _vm.fields[index].value_en,
                                              valueEsParent:
                                                _vm.fields[index].value_es
                                            },
                                            on: {
                                              "update:valueEn": function(
                                                $event
                                              ) {
                                                return _vm.$set(
                                                  _vm.fields[index],
                                                  "value_en",
                                                  $event
                                                )
                                              },
                                              "update:value-en": function(
                                                $event
                                              ) {
                                                return _vm.$set(
                                                  _vm.fields[index],
                                                  "value_en",
                                                  $event
                                                )
                                              },
                                              "update:valueEs": function(
                                                $event
                                              ) {
                                                return _vm.$set(
                                                  _vm.fields[index],
                                                  "value_es",
                                                  $event
                                                )
                                              },
                                              "update:value-es": function(
                                                $event
                                              ) {
                                                return _vm.$set(
                                                  _vm.fields[index],
                                                  "value_es",
                                                  $event
                                                )
                                              }
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  field.type == "editor_small"
                                    ? _c(
                                        "div",
                                        [
                                          _c("Editor", {
                                            attrs: {
                                              size: "md",
                                              label: field.name,
                                              variable: "description",
                                              errors: _vm.errors,
                                              valueEn:
                                                _vm.fields[index].value_en,
                                              valueEs:
                                                _vm.fields[index].value_es,
                                              valueEnParent:
                                                _vm.fields[index].value_en,
                                              valueEsParent:
                                                _vm.fields[index].value_es
                                            },
                                            on: {
                                              "update:valueEn": function(
                                                $event
                                              ) {
                                                return _vm.$set(
                                                  _vm.fields[index],
                                                  "value_en",
                                                  $event
                                                )
                                              },
                                              "update:value-en": function(
                                                $event
                                              ) {
                                                return _vm.$set(
                                                  _vm.fields[index],
                                                  "value_en",
                                                  $event
                                                )
                                              },
                                              "update:valueEs": function(
                                                $event
                                              ) {
                                                return _vm.$set(
                                                  _vm.fields[index],
                                                  "value_es",
                                                  $event
                                                )
                                              },
                                              "update:value-es": function(
                                                $event
                                              ) {
                                                return _vm.$set(
                                                  _vm.fields[index],
                                                  "value_es",
                                                  $event
                                                )
                                              }
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  field.type == "editor_large"
                                    ? _c(
                                        "div",
                                        [
                                          _c("Editor", {
                                            attrs: {
                                              size: "lg",
                                              label: field.name,
                                              variable: "description",
                                              errors: _vm.errors,
                                              valueEn:
                                                _vm.fields[index].value_en,
                                              valueEs:
                                                _vm.fields[index].value_es,
                                              valueEnParent:
                                                _vm.fields[index].value_en,
                                              valueEsParent:
                                                _vm.fields[index].value_es
                                            },
                                            on: {
                                              "update:valueEn": function(
                                                $event
                                              ) {
                                                return _vm.$set(
                                                  _vm.fields[index],
                                                  "value_en",
                                                  $event
                                                )
                                              },
                                              "update:value-en": function(
                                                $event
                                              ) {
                                                return _vm.$set(
                                                  _vm.fields[index],
                                                  "value_en",
                                                  $event
                                                )
                                              },
                                              "update:valueEs": function(
                                                $event
                                              ) {
                                                return _vm.$set(
                                                  _vm.fields[index],
                                                  "value_es",
                                                  $event
                                                )
                                              },
                                              "update:value-es": function(
                                                $event
                                              ) {
                                                return _vm.$set(
                                                  _vm.fields[index],
                                                  "value_es",
                                                  $event
                                                )
                                              }
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  field.type == "image"
                                    ? _c("div", [
                                        _c("div", { staticClass: "row" }, [
                                          field.value
                                            ? _c(
                                                "div",
                                                {
                                                  staticClass: "col-12 col-lg-4"
                                                },
                                                [
                                                  _c("img", {
                                                    staticClass:
                                                      "img-fluid d-block mb-3",
                                                    attrs: {
                                                      src:
                                                        _vm.imagesUrl +
                                                        "/content/" +
                                                        field.value,
                                                      alt: field.name
                                                    }
                                                  })
                                                ]
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass: "col-12",
                                              class: {
                                                "col-lg-8": field.value
                                              }
                                            },
                                            [
                                              field.name == "Fondo"
                                                ? _c("div", [
                                                    _c(
                                                      "small",
                                                      {
                                                        staticClass:
                                                          "d-block mb-0 lh-1"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Resolución recomendada: 1440x250px"
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "small",
                                                      {
                                                        staticClass:
                                                          "d-block mb-0 lh-1"
                                                      },
                                                      [_vm._v("Formato: JPG")]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "small",
                                                      {
                                                        staticClass:
                                                          "d-block mb-2 lh-1"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Tamaño recomendado: No mayor a 300KB"
                                                        )
                                                      ]
                                                    )
                                                  ])
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _c(
                                                "vue-dropzone",
                                                {
                                                  ref: "ref_" + field.variable,
                                                  refInFor: true,
                                                  attrs: {
                                                    id: "id_" + field.variable,
                                                    options:
                                                      _vm.dropzoneOptions,
                                                    duplicateCheck: true,
                                                    useCustomSlot: true
                                                  },
                                                  on: {
                                                    "vdropzone-file-added": function(
                                                      $event
                                                    ) {
                                                      return _vm.$validateImageDropzone(
                                                        $event,
                                                        _vm.$refs[
                                                          "ref_" +
                                                            field.variable
                                                        ][0].dropzone,
                                                        1,
                                                        310000,
                                                        "300kb"
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
                                                            "\n                                    Suelte el archivo aquí o haga click para\n                                    cargarlo.\n                                  "
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
                                        ])
                                      ])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  field.type == "video"
                                    ? _c("div", [
                                        _c("div", { staticClass: "row" }, [
                                          field.value
                                            ? _c(
                                                "div",
                                                { staticClass: "col-12 mb-3" },
                                                [
                                                  _c(
                                                    "a",
                                                    {
                                                      staticClass:
                                                        "btn btn-primary",
                                                      attrs: {
                                                        target: "_blank",
                                                        href:
                                                          _vm.videosUrl +
                                                          "/content/" +
                                                          field.value
                                                      }
                                                    },
                                                    [
                                                      _c("i", {
                                                        staticClass:
                                                          "fas fa-play mr-1"
                                                      }),
                                                      _vm._v(
                                                        "\n                                Ver Video\n                              "
                                                      )
                                                    ]
                                                  )
                                                ]
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "col-12" },
                                            [
                                              _c(
                                                "vue-dropzone",
                                                {
                                                  ref: "ref_video",
                                                  refInFor: true,
                                                  attrs: {
                                                    id: "id_" + field.variable,
                                                    options:
                                                      _vm.dropzoneVideoOptions,
                                                    duplicateCheck: true,
                                                    useCustomSlot: true
                                                  },
                                                  on: {
                                                    "vdropzone-file-added": function(
                                                      $event
                                                    ) {
                                                      return _vm.$validateVideoDropzone(
                                                        $event,
                                                        _vm.$refs.ref_video[0]
                                                          .dropzone,
                                                        1,
                                                        8388608,
                                                        "8mb"
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
                                                            "\n                                    Suelte el archivo aquí o haga click para\n                                    cargarlo.\n                                  "
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
                                        ])
                                      ])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  field.type == "multiplefiles_buttons"
                                    ? _c(
                                        "div",
                                        [
                                          _c("MultipleFilesPersonalData", {
                                            attrs: {
                                              fieldName: "images",
                                              errors: _vm.errors,
                                              showIconField: true,
                                              messageOrder:
                                                "Arrastre los elementos en el orden que desee mostrarlos",
                                              files: field.value,
                                              multimediaUrl: _vm.multimediaUrl,
                                              filesParent: field.value,
                                              folder: "forms"
                                            },
                                            on: {
                                              "update:files": function($event) {
                                                return _vm.$set(
                                                  field,
                                                  "value",
                                                  $event
                                                )
                                              }
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    : _vm._e()
                                ])
                              ])
                            ])
                          }),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-12 p-0 text-right" },
                            [
                              _c("Button", {
                                attrs: {
                                  text: "Actualizar",
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
                                      return _vm.restorePage.apply(
                                        null,
                                        arguments
                                      )
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                      Cancelar\n                    "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ],
                        2
                      )
                    ])
                  ])
                ])
              ])
            : _vm._e()
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
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

/***/ "./resources/js/components/form/MultipleFilesPersonalData.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/form/MultipleFilesPersonalData.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MultipleFilesPersonalData_vue_vue_type_template_id_29d15251___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MultipleFilesPersonalData.vue?vue&type=template&id=29d15251& */ "./resources/js/components/form/MultipleFilesPersonalData.vue?vue&type=template&id=29d15251&");
/* harmony import */ var _MultipleFilesPersonalData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MultipleFilesPersonalData.vue?vue&type=script&lang=js& */ "./resources/js/components/form/MultipleFilesPersonalData.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MultipleFilesPersonalData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MultipleFilesPersonalData_vue_vue_type_template_id_29d15251___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MultipleFilesPersonalData_vue_vue_type_template_id_29d15251___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/form/MultipleFilesPersonalData.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/form/MultipleFilesPersonalData.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/form/MultipleFilesPersonalData.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleFilesPersonalData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MultipleFilesPersonalData.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form/MultipleFilesPersonalData.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleFilesPersonalData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/form/MultipleFilesPersonalData.vue?vue&type=template&id=29d15251&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/form/MultipleFilesPersonalData.vue?vue&type=template&id=29d15251& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleFilesPersonalData_vue_vue_type_template_id_29d15251___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MultipleFilesPersonalData.vue?vue&type=template&id=29d15251& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form/MultipleFilesPersonalData.vue?vue&type=template&id=29d15251&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleFilesPersonalData_vue_vue_type_template_id_29d15251___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleFilesPersonalData_vue_vue_type_template_id_29d15251___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/views/content/GeneralContent.vue":
/*!*******************************************************!*\
  !*** ./resources/js/views/content/GeneralContent.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GeneralContent_vue_vue_type_template_id_745bcb26___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GeneralContent.vue?vue&type=template&id=745bcb26& */ "./resources/js/views/content/GeneralContent.vue?vue&type=template&id=745bcb26&");
/* harmony import */ var _GeneralContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GeneralContent.vue?vue&type=script&lang=js& */ "./resources/js/views/content/GeneralContent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GeneralContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GeneralContent_vue_vue_type_template_id_745bcb26___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GeneralContent_vue_vue_type_template_id_745bcb26___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/content/GeneralContent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/content/GeneralContent.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/content/GeneralContent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneralContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./GeneralContent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/content/GeneralContent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneralContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/content/GeneralContent.vue?vue&type=template&id=745bcb26&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/content/GeneralContent.vue?vue&type=template&id=745bcb26& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneralContent_vue_vue_type_template_id_745bcb26___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./GeneralContent.vue?vue&type=template&id=745bcb26& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/content/GeneralContent.vue?vue&type=template&id=745bcb26&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneralContent_vue_vue_type_template_id_745bcb26___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneralContent_vue_vue_type_template_id_745bcb26___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);