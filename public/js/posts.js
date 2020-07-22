(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/posts"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form/InputSlug.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/form/InputSlug.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    url: {
      type: String,
      required: true
    },
    nameProp: {
      type: String,
      required: false
    },
    slugProp: {
      type: String,
      required: false
    },
    categorySlug: {
      type: String,
      required: false
    }
  },
  data: function data() {
    return {
      name: '',
      slug: '',
      editBlock: false,
      slugEdited: false
    };
  },
  methods: {
    getSlug: function getSlug() {
      this.editBlock = !this.editBlock;
      this.slugEdited = true;
    }
  },
  watch: {
    nameProp: function nameProp(newVal, oldVal) {
      this.name = newVal;
    },
    slugProp: function slugProp(newVal, oldVal) {
      this.slug = newVal;
    },
    name: function name(newVal, oldVal) {
      //console.log(newVal)
      if (!this.slugEdited) {
        this.slug = newVal;
      }

      this.$emit('update:name', newVal);
    },
    slug: function slug(newVal, oldVal) {
      this.slug = Slug(newVal);
      this.$emit('update:slug', this.slug);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/blog/Post.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/blog/Post.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/BreadCrumb */ "./resources/js/components/BreadCrumb.vue");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Loader */ "./resources/js/components/Loader.vue");
/* harmony import */ var _components_DataTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/DataTable */ "./resources/js/components/DataTable.vue");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Button */ "./resources/js/components/Button.vue");
/* harmony import */ var _components_form_InputSlug__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/form/InputSlug */ "./resources/js/components/form/InputSlug.vue");
/* harmony import */ var vue_upload_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-upload-component */ "./node_modules/vue-upload-component/dist/vue-upload-component.js");
/* harmony import */ var vue_upload_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_upload_component__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vue_search_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-search-select */ "./node_modules/vue-search-select/dist/VueSearchSelect.common.js");
/* harmony import */ var vue_search_select__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue_search_select__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-quill-editor */ "./node_modules/vue-quill-editor/dist/vue-quill-editor.js");
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vue_quill_editor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue2-dropzone */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.js");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @johmun/vue-tags-input */ "./node_modules/@johmun/vue-tags-input/dist/vue-tags-input.js");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_9__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    appUrl: {
      type: String
    }
  },
  components: {
    InputSlug: _components_form_InputSlug__WEBPACK_IMPORTED_MODULE_4__["default"],
    Button: _components_Button__WEBPACK_IMPORTED_MODULE_3__["default"],
    FileUpload: vue_upload_component__WEBPACK_IMPORTED_MODULE_5___default.a,
    vueDropzone: vue2_dropzone__WEBPACK_IMPORTED_MODULE_8___default.a,
    quillEditor: vue_quill_editor__WEBPACK_IMPORTED_MODULE_7__["quillEditor"],
    DataTable: _components_DataTable__WEBPACK_IMPORTED_MODULE_2__["default"],
    Loader: _components_Loader__WEBPACK_IMPORTED_MODULE_1__["default"],
    BreadCrumb: _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_0__["default"],
    ModelListSelect: vue_search_select__WEBPACK_IMPORTED_MODULE_6__["ModelListSelect"],
    VueTagsInput: _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_9___default.a
  },
  data: function data() {
    return {
      newBlock: false,
      startBlock: true,
      editBlock: false,
      requestServer: false,
      requestLoading: false,
      image: [],
      posts: {},
      dropzoneOptions: {
        url: "/",
        maxFiles: 1,
        acceptedFiles: "image/png,image/jpeg,image/jpg,image/svg+xml",
        autoProcessQueue: false,
        thumbnailWidth: 100,
        addRemoveLinks: true,
        dictRemoveFile: "Remover"
      },
      editorOptions: {
        placeholder: "",
        modules: {
          toolbar: {
            handlers: {
              image: function image(value) {
                console.log(document.getElementById('id_content_images'));
                document.getElementById('id_content_images').click();
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
      post: {
        id: "",
        title: "",
        slug: "",
        excerpt: "",
        content: "",
        published: true,
        image: "",
        thumbnail: "",
        category: {},
        category_id: {},
        tags: ''
      },
      tags: [],
      errors: {},
      categories: []
    };
  },
  methods: {
    getPost: function getPost(id) {
      var _this = this;

      axios.get("json/posts/" + id).then(function (response) {
        _this.post = response.data.post;
        _this.tags = response.data.tags;
        _this.requestLoading = false;
      })["catch"](function (error) {});
    },
    deletePost: function deletePost(id) {
      this.$refs["modal-delete"].show();
      this.getPost(id);
    },
    deletePostConfirm: function deletePostConfirm() {
      var _this2 = this;

      this.requestServer = true;
      axios["delete"]("posts/" + this.post.id).then(function (response) {
        _this2.$refs["modal-delete"].hide();

        _this2.restoreEl();

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
        _this2.$refs["modal-delete"].hide();

        _this2.restorePage();

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
    editPost: function editPost(id) {
      this.editBlock = true;
      this.getCategories();
      this.getPost(id);
      this.startBlock = false;
    },
    detailPost: function detailPost(id) {
      this.requestLoading = true;
      this.$refs["modal-detail"].show();
      this.getPost(id);
    },
    getPosts: function getPosts(pagina, desde) {
      var _this3 = this;

      var search = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var url = "json/posts?page=" + pagina + "&desde=" + desde;

      if (search) {
        url = url + "&search=" + search;
      }

      axios.get(url).then(function (response) {
        _this3.posts = response.data;
      })["catch"](function (error) {});
    },
    getCategories: function getCategories() {
      var _this4 = this;

      axios.get("/json/select/categories").then(function (response) {
        _this4.categories = response.data;
      })["catch"](function (err) {});
    },
    newPost: function newPost() {
      this.startBlock = false;
      this.newBlock = true;
      this.getCategories();
    },
    restoreEl: function restoreEl() {
      this.post = {
        title: "",
        slug: "",
        excerpt: "",
        content: "",
        published: true,
        image: "",
        thumbnail: "",
        category: {},
        category_id: {},
        tags: ''
      };
      this.tags = [];
      this.errors = {};
      this.requestServer = false;
    },
    restorePage: function restorePage() {
      this.requestServer = false;
      this.newBlock = this.editBlock = false;
      this.startBlock = true;
      this.post = {
        title: "",
        slug: "",
        excerpt: "",
        content: "",
        published: true,
        image: "",
        thumbnail: "",
        category: {},
        category_id: {},
        tags: ''
      };
      this.tags = [];
      this.categories = this.image = [];
      this.errors = {};
      this.posts = {};
      this.getPosts(1, 5);
    },
    updatePost: function updatePost() {
      var _this5 = this;

      this.requestServer = true;
      var fd = new FormData();
      fd.append("id", this.post.id);
      this.post.title ? fd.append("title", this.post.title) : fd.append("title", "");

      if (this.post.excerpt) {
        fd.append("excerpt", this.post.excerpt);
      } else {
        fd.append("excerpt", "");
      }

      this.post.slug ? fd.append("slug", this.post.slug) : fd.append("slug", "");
      this.post.content ? fd.append("content", this.post.content) : fd.append("content", "");

      if (this.$refs.ref_image.dropzone.files[0]) {
        fd.append("image", this.$refs.ref_image.dropzone.files[0]);
      }

      if (this.$refs.ref_thumbnail.dropzone.files[0]) {
        fd.append("thumbnail", this.$refs.ref_thumbnail.dropzone.files[0]);
      }

      if (this.post.category && this.post.category.id) {
        fd.append("category_id", this.post.category.id);
      } else {
        fd.append("category_id", "");
      }

      if (this.post.published) {
        fd.append("published", 1);
      } else {
        fd.append("published", 0);
      }

      if (this.tags.length > 0) {
        fd.append("tags", JSON.stringify(this.tags));
      }

      fd.append("_method", "PUT");
      axios.post("posts/" + this.post.id, fd).then(function (response) {
        _this5.requestServer = false;

        _this5.restorePage();

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
        _this5.requestServer = false;

        if (error.response.status === 422) {
          _this5.errors = error.response.data.errors || {};
          return;
        }

        _this5.restorePage();

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
    createPost: function createPost() {
      var _this6 = this;

      this.requestServer = true;
      var fd = new FormData();
      fd.append("title", this.post.title);

      if (this.post.excerpt) {
        fd.append("excerpt", this.post.excerpt);
      } else {
        fd.append("excerpt", "");
      }

      fd.append("slug", this.post.slug);
      fd.append("content", this.post.content);

      if (this.$refs.ref_image.dropzone.files[0]) {
        fd.append("image", this.$refs.ref_image.dropzone.files[0]);
      }

      if (this.$refs.ref_thumbnail.dropzone.files[0]) {
        fd.append("thumbnail", this.$refs.ref_thumbnail.dropzone.files[0]);
      }

      if (this.post.published) {
        fd.append("published", 1);
      } else {
        fd.append("published", 0);
      }

      if (this.post.category && this.post.category.id) {
        fd.append("category_id", this.post.category.id);
      } else {
        fd.append("category_id", "");
      }

      if (this.tags.length > 0) {
        fd.append("tags", JSON.stringify(this.tags));
      }

      axios.post("posts", fd).then(function (response) {
        _this6.restorePage();

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
        _this6.requestServer = false;

        if (error.response.status === 422) {
          _this6.errors = error.response.data.errors || {};
          return;
        }

        _this6.restorePage();

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
    }
  },
  created: function created() {
    this.getPosts(1, 5);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form/InputSlug.vue?vue&type=template&id=48ad37f5&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/form/InputSlug.vue?vue&type=template&id=48ad37f5& ***!
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
    _c(
      "label",
      { staticClass: "font-weight-bold", attrs: { for: "id_title" } },
      [_vm._v("Título")]
    ),
    _vm._v(" "),
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.name,
          expression: "name"
        }
      ],
      staticClass: "form-control form-control-alternative",
      attrs: { type: "text", placeholder: "Título", id: "id_title" },
      domProps: { value: _vm.name },
      on: {
        input: function($event) {
          if ($event.target.composing) {
            return
          }
          _vm.name = $event.target.value
        }
      }
    }),
    _vm._v(" "),
    _c("div", { staticClass: "mt-2" }, [
      _c("small", [
        _vm._v(
          _vm._s(_vm.url) +
            _vm._s(_vm.categorySlug ? _vm.categorySlug + "/" : "")
        )
      ]),
      !_vm.editBlock
        ? _c("small", { staticClass: "bg-primary text-white" }, [
            _vm._v(_vm._s(_vm.slug))
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.editBlock
        ? _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.slug,
                expression: "slug"
              }
            ],
            staticClass: "form-control form-control-sm d-inline w-50",
            attrs: { type: "text" },
            domProps: { value: _vm.slug },
            on: {
              keydown: function($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                ) {
                  return null
                }
                $event.preventDefault()
                return _vm.getSlug($event)
              },
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.slug = $event.target.value
              }
            }
          })
        : _vm._e(),
      _vm._v(" "),
      !_vm.editBlock
        ? _c(
            "button",
            {
              staticClass: "btn btn-primary btn-sm",
              attrs: { type: "button" },
              on: {
                click: function($event) {
                  _vm.editBlock = !_vm.editBlock
                }
              }
            },
            [_vm._v("Editar")]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.editBlock
        ? _c(
            "button",
            {
              staticClass: "btn btn-primary btn-sm",
              attrs: { type: "button" },
              on: { click: _vm.getSlug }
            },
            [_vm._v("Aceptar")]
          )
        : _vm._e()
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/blog/Post.vue?vue&type=template&id=8caa92c4&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/blog/Post.vue?vue&type=template&id=8caa92c4& ***!
  \*******************************************************************************************************************************************************************************************************/
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
                    attrs: { title: "Posts", parent: "Blog", active: "Posts" }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-6 col-md-5 text-right" },
                [
                  _vm.startBlock
                    ? _c(
                        "a",
                        {
                          staticClass: "btn btn-icon btn-neutral",
                          attrs: { href: "#" },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.newPost($event)
                            }
                          }
                        },
                        [
                          _vm._m(0),
                          _vm._v(" "),
                          _c("span", { staticClass: "btn-inner--text" }, [
                            _vm._v("Nuevo Post")
                          ])
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.editBlock
                    ? _c("Button", {
                        attrs: {
                          classes: ["btn-primary"],
                          text: "Actualizar",
                          "request-server": _vm.requestServer
                        },
                        on: {
                          click: function($event) {
                            return _vm.updatePost()
                          }
                        }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.newBlock
                    ? _c("Button", {
                        attrs: {
                          classes: ["btn-primary"],
                          text: "Registrar",
                          "request-server": _vm.requestServer
                        },
                        on: {
                          click: function($event) {
                            return _vm.createPost()
                          }
                        }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.startBlock
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-danger",
                          attrs: {
                            type: "button",
                            "request-server": _vm.requestServer
                          },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.restorePage($event)
                            }
                          }
                        },
                        [_vm._v("Cancelar")]
                      )
                    : _vm._e()
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
        _vm.startBlock
          ? _c("DataTable", {
              attrs: {
                placeholder: "Titulo",
                object: _vm.posts,
                buttonRead: true,
                buttonUpdate: true,
                buttonDelete: true
              },
              on: {
                "update:object": function($event) {
                  _vm.posts = $event
                },
                update: _vm.editPost,
                delete: _vm.deletePost,
                read: _vm.detailPost,
                get: _vm.getPosts
              }
            })
          : _vm._e(),
        _vm._v(" "),
        _vm.newBlock
          ? _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-12 col-xl-8 mb-4 mb-xl-0" }, [
                _c("div", { staticClass: "card shadow" }, [
                  _c("div", { staticClass: "card-body" }, [
                    _c("div", [
                      _c(
                        "form",
                        {
                          on: {
                            submit: function($event) {
                              $event.preventDefault()
                              return _vm.createPost($event)
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
                                  _c("InputSlug", {
                                    attrs: {
                                      url: _vm.appUrl + "/blog/categoria/",
                                      slug: _vm.post.slug,
                                      name: _vm.post.title,
                                      "category-slug": _vm.post.category.slug
                                    },
                                    on: {
                                      "update:slug": function($event) {
                                        return _vm.$set(
                                          _vm.post,
                                          "slug",
                                          $event
                                        )
                                      },
                                      "update:name": function($event) {
                                        return _vm.$set(
                                          _vm.post,
                                          "title",
                                          $event
                                        )
                                      },
                                      "update:categorySlug": function($event) {
                                        return _vm.$set(
                                          _vm.post.category,
                                          "slug",
                                          $event
                                        )
                                      },
                                      "update:category-slug": function($event) {
                                        return _vm.$set(
                                          _vm.post.category,
                                          "slug",
                                          $event
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _vm.errors && _vm.errors.title
                                    ? _c(
                                        "label",
                                        {
                                          staticClass:
                                            "mt-2 text-danger text-sm",
                                          attrs: { for: "id_title" }
                                        },
                                        [_vm._v(_vm._s(_vm.errors.title[0]))]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.errors && _vm.errors.slug
                                    ? _c(
                                        "label",
                                        {
                                          staticClass:
                                            "mt-2 text-danger text-sm",
                                          attrs: { for: "id_name" }
                                        },
                                        [_vm._v(_vm._s(_vm.errors.slug[0]))]
                                      )
                                    : _vm._e()
                                ],
                                1
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-12 " }, [
                              _c(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  _c(
                                    "b-form-checkbox",
                                    {
                                      attrs: {
                                        id: "id_checkbox_published",
                                        name: "id_checkbox_published"
                                      },
                                      model: {
                                        value: _vm.post.published,
                                        callback: function($$v) {
                                          _vm.$set(_vm.post, "published", $$v)
                                        },
                                        expression: "post.published"
                                      }
                                    },
                                    [_vm._v("Publicar")]
                                  )
                                ],
                                1
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-12 " }, [
                              _c(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  _c(
                                    "label",
                                    {
                                      staticClass: "font-weight-bold",
                                      attrs: { for: "id_tags" }
                                    },
                                    [_vm._v("Tags")]
                                  ),
                                  _vm._v(" "),
                                  _c("vue-tags-input", {
                                    attrs: {
                                      tags: _vm.tags,
                                      placeholder: "Ingresa Tag"
                                    },
                                    on: {
                                      "tags-changed": function(newTags) {
                                        return (_vm.tags = newTags)
                                      }
                                    },
                                    model: {
                                      value: _vm.post.tags,
                                      callback: function($$v) {
                                        _vm.$set(_vm.post, "tags", $$v)
                                      },
                                      expression: "post.tags"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _vm.errors && _vm.errors.tags
                                    ? _c(
                                        "label",
                                        {
                                          staticClass:
                                            "mt-2 text-danger text-sm",
                                          attrs: { for: "id_tags" }
                                        },
                                        [_vm._v(_vm._s(_vm.errors.tags[0]))]
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
                                    {
                                      staticClass: "font-weight-bold",
                                      attrs: { for: "id_category" }
                                    },
                                    [_vm._v("Categoría")]
                                  ),
                                  _vm._v(" "),
                                  _c("model-list-select", {
                                    staticClass: "form-control",
                                    attrs: {
                                      list: _vm.categories,
                                      id: "id_category",
                                      "option-value": "id",
                                      "option-text": "name",
                                      placeholder: "Seleccion la Categoría"
                                    },
                                    model: {
                                      value: _vm.post.category,
                                      callback: function($$v) {
                                        _vm.$set(_vm.post, "category", $$v)
                                      },
                                      expression: "post.category"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _vm.errors && _vm.errors.category_id
                                    ? _c(
                                        "label",
                                        {
                                          staticClass:
                                            "mt-2 text-danger text-sm",
                                          attrs: { for: "id_category" }
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(_vm.errors.category_id[0])
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ],
                                1
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-12" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c(
                                  "label",
                                  {
                                    staticClass: "font-weight-bold",
                                    attrs: { for: "id_excerpt" }
                                  },
                                  [_vm._v("Breve Descripción")]
                                ),
                                _vm._v(" "),
                                _c("textarea", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.post.excerpt,
                                      expression: "post.excerpt"
                                    }
                                  ],
                                  staticClass:
                                    "form-control form-control-alternative",
                                  attrs: {
                                    rows: "2",
                                    id: "id_excerpt",
                                    placeholder: "Breve Descripción"
                                  },
                                  domProps: { value: _vm.post.excerpt },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.post,
                                        "excerpt",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _vm.errors && _vm.errors.excerpt
                                  ? _c(
                                      "label",
                                      {
                                        staticClass: "mt-2 text-danger text-sm",
                                        attrs: { for: "id_excerpt" }
                                      },
                                      [_vm._v(_vm._s(_vm.errors.excerpt[0]))]
                                    )
                                  : _vm._e()
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-12" }, [
                              _c(
                                "div",
                                { staticClass: "form-group mb-0" },
                                [
                                  _c(
                                    "label",
                                    {
                                      staticClass: "font-weight-bold",
                                      attrs: { for: "id_content" }
                                    },
                                    [_vm._v("Contenido")]
                                  ),
                                  _vm._v(" "),
                                  _c("quill-Editor", {
                                    ref: "ref_content",
                                    staticClass: "ql-height-25",
                                    attrs: {
                                      placeholder: "Contenido",
                                      options: _vm.editorOptions
                                    },
                                    on: {
                                      keydown: function($event) {
                                        if (
                                          !$event.type.indexOf("key") &&
                                          _vm._k(
                                            $event.keyCode,
                                            "enter",
                                            13,
                                            $event.key,
                                            "Enter"
                                          )
                                        ) {
                                          return null
                                        }
                                        $event.preventDefault()
                                      }
                                    },
                                    model: {
                                      value: _vm.post.content,
                                      callback: function($$v) {
                                        _vm.$set(_vm.post, "content", $$v)
                                      },
                                      expression: "post.content"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _vm.errors && _vm.errors.content
                                    ? _c(
                                        "label",
                                        {
                                          staticClass:
                                            "mt-2 text-danger text-sm",
                                          attrs: { for: "id_content" }
                                        },
                                        [_vm._v(_vm._s(_vm.errors.content[0]))]
                                      )
                                    : _vm._e()
                                ],
                                1
                              )
                            ])
                          ])
                        ]
                      )
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-12 col-xl-4" }, [
                _c("div", { staticClass: "card shadow" }, [
                  _c(
                    "div",
                    { staticClass: "card-body" },
                    [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _vm._m(1),
                          _vm._v(" "),
                          _c(
                            "vue-dropzone",
                            {
                              ref: "ref_thumbnail",
                              attrs: {
                                id: "id_thumbnail",
                                options: _vm.dropzoneOptions,
                                duplicateCheck: true,
                                useCustomSlot: true
                              },
                              on: {
                                "vdropzone-file-added": function($event) {
                                  return _vm.$validateImageDropzone(
                                    $event,
                                    _vm.$refs.ref_thumbnail.dropzone,
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
                                    "h5",
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
                          ),
                          _vm._v(" "),
                          _vm.errors && _vm.errors.thumbnail
                            ? _c(
                                "label",
                                {
                                  staticClass:
                                    "text-danger text-sm d-block mt-2",
                                  attrs: { for: "file" }
                                },
                                [_vm._v(_vm._s(_vm.errors.thumbnail[0]))]
                              )
                            : _vm._e()
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("file-upload", {
                        ref: "ref_content_images",
                        staticClass: "d-none",
                        attrs: {
                          extensions: "jpg,jpeg,png",
                          accept: "image/png,image/jpeg,image/jpg",
                          drop: false,
                          multiple: true,
                          "input-id": "id_content_images"
                        },
                        on: {
                          "input-filter": function($event) {
                            return _vm.$uploadImageUploadComponent(
                              $event,
                              _vm.$refs.ref_content,
                              100000,
                              "100kb",
                              "posts"
                            )
                          }
                        },
                        model: {
                          value: _vm.post.images,
                          callback: function($$v) {
                            _vm.$set(_vm.post, "images", $$v)
                          },
                          expression: "post.images"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group mb-0" },
                        [
                          _vm._m(2),
                          _vm._v(" "),
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
                                    "h5",
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
                                [_vm._v(_vm._s(_vm.errors.image[0]))]
                              )
                            : _vm._e()
                        ],
                        1
                      )
                    ],
                    1
                  )
                ])
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.editBlock
          ? _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-12 col-xl-8 mb-4 mb-xl-0" }, [
                _c("div", { staticClass: "card shadow" }, [
                  _c("div", { staticClass: "card-body" }, [
                    _c("div", [
                      _c(
                        "form",
                        {
                          on: {
                            submit: function($event) {
                              $event.preventDefault()
                              return _vm.createPost($event)
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
                                  _c("InputSlug", {
                                    attrs: {
                                      url: _vm.appUrl + "/blog/categoria/",
                                      slug: _vm.post.slug,
                                      name: _vm.post.title,
                                      "name-prop": _vm.post.title,
                                      "slug-prop": _vm.post.slug,
                                      "category-slug": _vm.post.category.slug
                                    },
                                    on: {
                                      "update:slug": function($event) {
                                        return _vm.$set(
                                          _vm.post,
                                          "slug",
                                          $event
                                        )
                                      },
                                      "update:name": function($event) {
                                        return _vm.$set(
                                          _vm.post,
                                          "title",
                                          $event
                                        )
                                      },
                                      "update:categorySlug": function($event) {
                                        return _vm.$set(
                                          _vm.post.category,
                                          "slug",
                                          $event
                                        )
                                      },
                                      "update:category-slug": function($event) {
                                        return _vm.$set(
                                          _vm.post.category,
                                          "slug",
                                          $event
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _vm.errors && _vm.errors.title
                                    ? _c(
                                        "label",
                                        {
                                          staticClass:
                                            "mt-2 text-danger text-sm",
                                          attrs: { for: "id_title" }
                                        },
                                        [_vm._v(_vm._s(_vm.errors.title[0]))]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.errors && _vm.errors.slug
                                    ? _c(
                                        "label",
                                        {
                                          staticClass:
                                            "mt-2 text-danger text-sm",
                                          attrs: { for: "id_name" }
                                        },
                                        [_vm._v(_vm._s(_vm.errors.slug[0]))]
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
                                    "b-form-checkbox",
                                    {
                                      attrs: {
                                        id: "id_checkbox_published",
                                        name: "id_checkbox_published"
                                      },
                                      model: {
                                        value: _vm.post.published,
                                        callback: function($$v) {
                                          _vm.$set(_vm.post, "published", $$v)
                                        },
                                        expression: "post.published"
                                      }
                                    },
                                    [_vm._v("Publicar")]
                                  )
                                ],
                                1
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-12 " }, [
                              _c(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  _c(
                                    "label",
                                    {
                                      staticClass: "font-weight-bold",
                                      attrs: { for: "id_tags" }
                                    },
                                    [_vm._v("Tags")]
                                  ),
                                  _vm._v(" "),
                                  _c("vue-tags-input", {
                                    attrs: {
                                      tags: _vm.tags,
                                      placeholder: "Ingresa Tag"
                                    },
                                    on: {
                                      "tags-changed": function(newTags) {
                                        return (_vm.tags = newTags)
                                      }
                                    },
                                    model: {
                                      value: _vm.post.tags,
                                      callback: function($$v) {
                                        _vm.$set(_vm.post, "tags", $$v)
                                      },
                                      expression: "post.tags"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _vm.errors && _vm.errors.tags
                                    ? _c(
                                        "label",
                                        {
                                          staticClass:
                                            "mt-2 text-danger text-sm",
                                          attrs: { for: "id_tags" }
                                        },
                                        [_vm._v(_vm._s(_vm.errors.tags[0]))]
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
                                    {
                                      staticClass: "font-weight-bold",
                                      attrs: { for: "id_category" }
                                    },
                                    [_vm._v("Categoría")]
                                  ),
                                  _vm._v(" "),
                                  _c("model-list-select", {
                                    staticClass: "form-control",
                                    attrs: {
                                      list: _vm.categories,
                                      id: "id_category",
                                      "option-value": "id",
                                      "option-text": "name",
                                      placeholder: "Seleccion la Categoría"
                                    },
                                    model: {
                                      value: _vm.post.category,
                                      callback: function($$v) {
                                        _vm.$set(_vm.post, "category", $$v)
                                      },
                                      expression: "post.category"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _vm.errors && _vm.errors.category_id
                                    ? _c(
                                        "label",
                                        {
                                          staticClass:
                                            "mt-2 text-danger text-sm",
                                          attrs: { for: "id_category" }
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(_vm.errors.category_id[0])
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ],
                                1
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-12" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c(
                                  "label",
                                  {
                                    staticClass: "font-weight-bold",
                                    attrs: { for: "id_excerpt" }
                                  },
                                  [_vm._v("Breve Descripción")]
                                ),
                                _vm._v(" "),
                                _c("textarea", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.post.excerpt,
                                      expression: "post.excerpt"
                                    }
                                  ],
                                  staticClass:
                                    "form-control form-control-alternative",
                                  attrs: {
                                    rows: "2",
                                    id: "id_excerpt",
                                    placeholder: "Breve Descripción"
                                  },
                                  domProps: { value: _vm.post.excerpt },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.post,
                                        "excerpt",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _vm.errors && _vm.errors.excerpt
                                  ? _c(
                                      "label",
                                      {
                                        staticClass: "mt-2 text-danger text-sm",
                                        attrs: { for: "id_excerpt" }
                                      },
                                      [_vm._v(_vm._s(_vm.errors.excerpt[0]))]
                                    )
                                  : _vm._e()
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-12" }, [
                              _c(
                                "div",
                                { staticClass: "form-group mb-0" },
                                [
                                  _c(
                                    "label",
                                    {
                                      staticClass: "font-weight-bold",
                                      attrs: { for: "id_content" }
                                    },
                                    [_vm._v("Contenido")]
                                  ),
                                  _vm._v(" "),
                                  _c("file-upload", {
                                    ref: "ref_content_images",
                                    staticClass: "d-none",
                                    attrs: {
                                      extensions: "jpg,jpeg,png",
                                      accept: "image/png,image/jpeg,image/jpg",
                                      drop: false,
                                      multiple: true,
                                      "input-id": "id_content_images"
                                    },
                                    on: {
                                      "input-filter": function($event) {
                                        return _vm.$uploadImageUploadComponent(
                                          $event,
                                          _vm.$refs.ref_content,
                                          100000,
                                          "100kb",
                                          "posts"
                                        )
                                      }
                                    },
                                    model: {
                                      value: _vm.post.images,
                                      callback: function($$v) {
                                        _vm.$set(_vm.post, "images", $$v)
                                      },
                                      expression: "post.images"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("quill-Editor", {
                                    ref: "ref_content",
                                    staticClass: "ql-height-25",
                                    attrs: {
                                      placeholder: "Contenido",
                                      options: _vm.editorOptions
                                    },
                                    on: {
                                      keydown: function($event) {
                                        if (
                                          !$event.type.indexOf("key") &&
                                          _vm._k(
                                            $event.keyCode,
                                            "enter",
                                            13,
                                            $event.key,
                                            "Enter"
                                          )
                                        ) {
                                          return null
                                        }
                                        $event.preventDefault()
                                      }
                                    },
                                    model: {
                                      value: _vm.post.content,
                                      callback: function($$v) {
                                        _vm.$set(_vm.post, "content", $$v)
                                      },
                                      expression: "post.content"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _vm.errors && _vm.errors.content
                                    ? _c(
                                        "label",
                                        {
                                          staticClass:
                                            "mt-2 text-danger text-sm",
                                          attrs: { for: "id_content" }
                                        },
                                        [_vm._v(_vm._s(_vm.errors.content[0]))]
                                      )
                                    : _vm._e()
                                ],
                                1
                              )
                            ])
                          ])
                        ]
                      )
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-12 col-xl" }, [
                _c("div", { staticClass: "card shadow" }, [
                  _c("div", { staticClass: "card-body" }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c(
                          "label",
                          {
                            staticClass: "font-weight-bold d-block",
                            attrs: { for: "thumbnail" }
                          },
                          [_vm._v("Miniatura")]
                        ),
                        _vm._v(" "),
                        _vm.post.thumbnail
                          ? _c("img", {
                              staticClass: "img-fluid mb-2",
                              attrs: {
                                src:
                                  "https://storage.googleapis.com/playgroup-web/img/posts/" +
                                  _vm.post.thumbnail,
                                alt: "Post"
                              }
                            })
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "vue-dropzone",
                          {
                            ref: "ref_thumbnail",
                            attrs: {
                              id: "id_thumbnail",
                              options: _vm.dropzoneOptions,
                              duplicateCheck: true,
                              useCustomSlot: true
                            },
                            on: {
                              "vdropzone-file-added": function($event) {
                                return _vm.$validatethumbnailDropzone(
                                  $event,
                                  _vm.$refs.ref_thumbnail.dropzone,
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
                                  "h5",
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
                        ),
                        _vm._v(" "),
                        _vm.errors && _vm.errors.thumbnail
                          ? _c(
                              "label",
                              {
                                staticClass: "text-danger text-sm d-block mt-2",
                                attrs: { for: "file" }
                              },
                              [_vm._v(_vm._s(_vm.errors.thumbnail[0]))]
                            )
                          : _vm._e()
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group mb-0" },
                      [
                        _c(
                          "label",
                          {
                            staticClass: "font-weight-bold d-block",
                            attrs: { for: "image" }
                          },
                          [_vm._v("Imagen")]
                        ),
                        _vm._v(" "),
                        !_vm.image.length && _vm.post.image
                          ? _c("img", {
                              staticClass: "img-fluid mb-2",
                              attrs: {
                                src:
                                  "https://storage.googleapis.com/playgroup-web/img/posts/" +
                                  _vm.post.image,
                                alt: "Post"
                              }
                            })
                          : _vm._e(),
                        _vm._v(" "),
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
                                  "h5",
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
                        ),
                        _vm._v(" "),
                        _vm.errors && _vm.errors.image
                          ? _c(
                              "label",
                              {
                                staticClass: "text-danger text-sm d-block mt-2",
                                attrs: { for: "file" }
                              },
                              [_vm._v(_vm._s(_vm.errors.image[0]))]
                            )
                          : _vm._e()
                      ],
                      1
                    )
                  ])
                ])
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _c(
          "b-modal",
          {
            ref: "modal-delete",
            attrs: { centered: "" },
            scopedSlots: _vm._u([
              {
                key: "modal-footer",
                fn: function(ref) {
                  var ok = ref.ok
                  var cancel = ref.cancel
                  return [
                    _c("Button", {
                      attrs: {
                        classes: ["btn-primary"],
                        text: "Eliminar",
                        "request-server": _vm.requestServer
                      },
                      on: {
                        click: function($event) {
                          return _vm.deletePostConfirm()
                        }
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
                            return cancel()
                          }
                        }
                      },
                      [_vm._v("Cancelar")]
                    )
                  ]
                }
              }
            ])
          },
          [
            _c("template", { slot: "modal-title" }, [
              _c("h2", { staticClass: "mb-0 text-uppercase text-primary" }, [
                _vm._v("Eliminar Post")
              ])
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "my-3" }, [
              _vm._v("Esta seguro que desea eliminar el post?")
            ])
          ],
          2
        ),
        _vm._v(" "),
        _c(
          "b-modal",
          {
            ref: "modal-detail",
            attrs: { size: "lg", centered: "" },
            scopedSlots: _vm._u([
              {
                key: "modal-footer",
                fn: function(ref) {
                  var ok = ref.ok
                  var cancel = ref.cancel
                  return [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            return ok()
                          }
                        }
                      },
                      [_vm._v("Continuar")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-danger",
                        attrs: { type: "button" },
                        on: {
                          click: function() {
                            _vm.restoreEl()
                            cancel()
                          }
                        }
                      },
                      [_vm._v("Cancelar")]
                    )
                  ]
                }
              }
            ])
          },
          [
            _c("template", { slot: "modal-title" }, [
              _c("h2", { staticClass: "mb-0 text-uppercase text-primary" }, [
                _vm._v("Detalle Post")
              ])
            ]),
            _vm._v(" "),
            _vm.requestLoading
              ? _c(
                  "div",
                  [
                    _c("Loader", {
                      attrs: {
                        text: "Cargando...",
                        iconHeight: 20,
                        iconWidth: 20,
                        styles: { height: "300px" }
                      }
                    })
                  ],
                  1
                )
              : _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-12 col-lg-8" }, [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-12 col-lg-6" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticClass: "font-weight-bold font-weight-bold"
                            },
                            [_vm._v("Título")]
                          ),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.post.title))])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-12 col-lg-6" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticClass: "font-weight-bold font-weight-bold"
                            },
                            [_vm._v("Categoría")]
                          ),
                          _vm._v(" "),
                          _vm.post.category
                            ? _c("p", [_vm._v(_vm._s(_vm.post.category.name))])
                            : _vm._e()
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c(
                        "label",
                        { staticClass: "font-weight-bold font-weight-bold" },
                        [_vm._v("URL")]
                      ),
                      _vm._v(" "),
                      _c("p", [
                        _c(
                          "a",
                          {
                            attrs: {
                              target: "_blank",
                              href:
                                _vm.appUrl + "/blog/categoria/" + _vm.post.slug
                            }
                          },
                          [
                            _vm._v(
                              _vm._s(_vm.appUrl) +
                                "/blog/" +
                                _vm._s(_vm.post.category.slug) +
                                "/" +
                                _vm._s(_vm.post.slug)
                            )
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-6" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticClass: "font-weight-bold font-weight-bold"
                            },
                            [_vm._v("Registrado el")]
                          ),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.post.created_at))])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-6" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticClass: "font-weight-bold font-weight-bold"
                            },
                            [_vm._v("Estado")]
                          ),
                          _vm._v(" "),
                          _c("p", {
                            domProps: {
                              innerHTML: _vm._s(_vm.post.published_format)
                            }
                          })
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c(
                        "label",
                        { staticClass: "font-weight-bold font-weight-bold" },
                        [_vm._v("Tags")]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        _vm._l(_vm.tags, function(tag) {
                          return _c(
                            "span",
                            {
                              key: tag.id,
                              staticClass: "badge badge-pill badge-info mr-1"
                            },
                            [
                              _vm._v(
                                "\n                  " +
                                  _vm._s(tag.text) +
                                  "\n                "
                              )
                            ]
                          )
                        }),
                        0
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c(
                        "label",
                        { staticClass: "font-weight-bold font-weight-bold" },
                        [_vm._v("Breve Descripción")]
                      ),
                      _vm._v(" "),
                      _vm.post.excerpt
                        ? _c("p", [_vm._v(_vm._s(_vm.post.excerpt))])
                        : _c("p", [_vm._v("No registrado")])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c(
                        "label",
                        { staticClass: "font-weight-bold font-weight-bold" },
                        [_vm._v("Contenido")]
                      ),
                      _vm._v(" "),
                      _c("p", {
                        domProps: { innerHTML: _vm._s(_vm.post.content) }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12 col-lg" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c(
                        "label",
                        { staticClass: "font-weight-bold font-weight-bold" },
                        [_vm._v("Miniatura")]
                      ),
                      _vm._v(" "),
                      _vm.post.thumbnail
                        ? _c("img", {
                            staticClass: "img-fluid",
                            attrs: {
                              src:
                                "https://storage.googleapis.com/playgroup-web/img/posts/" +
                                _vm.post.thumbnail,
                              alt: "Miniatura"
                            }
                          })
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c(
                        "label",
                        { staticClass: "font-weight-bold font-weight-bold" },
                        [_vm._v("Imagen")]
                      ),
                      _vm._v(" "),
                      _vm.post.image
                        ? _c("img", {
                            staticClass: "img-fluid",
                            attrs: {
                              src:
                                "https://storage.googleapis.com/playgroup-web/img/posts/" +
                                _vm.post.image,
                              alt: "Imagen"
                            }
                          })
                        : _vm._e()
                    ])
                  ])
                ])
          ],
          2
        )
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "btn-inner--icon" }, [
      _c("i", { staticClass: "fas fa-newspaper" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "d-block", attrs: { for: "image" } }, [
      _c("label", { staticClass: "font-weight-bold" }, [_vm._v("Miniatura")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "d-block", attrs: { for: "image" } }, [
      _c("label", { staticClass: "font-weight-bold" }, [_vm._v("Imagen")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/form/InputSlug.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/form/InputSlug.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InputSlug_vue_vue_type_template_id_48ad37f5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputSlug.vue?vue&type=template&id=48ad37f5& */ "./resources/js/components/form/InputSlug.vue?vue&type=template&id=48ad37f5&");
/* harmony import */ var _InputSlug_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InputSlug.vue?vue&type=script&lang=js& */ "./resources/js/components/form/InputSlug.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InputSlug_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InputSlug_vue_vue_type_template_id_48ad37f5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InputSlug_vue_vue_type_template_id_48ad37f5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/form/InputSlug.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/form/InputSlug.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/form/InputSlug.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputSlug_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./InputSlug.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form/InputSlug.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputSlug_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/form/InputSlug.vue?vue&type=template&id=48ad37f5&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/form/InputSlug.vue?vue&type=template&id=48ad37f5& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputSlug_vue_vue_type_template_id_48ad37f5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./InputSlug.vue?vue&type=template&id=48ad37f5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/form/InputSlug.vue?vue&type=template&id=48ad37f5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputSlug_vue_vue_type_template_id_48ad37f5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputSlug_vue_vue_type_template_id_48ad37f5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/blog/Post.vue":
/*!******************************************!*\
  !*** ./resources/js/views/blog/Post.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Post_vue_vue_type_template_id_8caa92c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Post.vue?vue&type=template&id=8caa92c4& */ "./resources/js/views/blog/Post.vue?vue&type=template&id=8caa92c4&");
/* harmony import */ var _Post_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Post.vue?vue&type=script&lang=js& */ "./resources/js/views/blog/Post.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Post_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Post_vue_vue_type_template_id_8caa92c4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Post_vue_vue_type_template_id_8caa92c4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/blog/Post.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/blog/Post.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/blog/Post.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Post_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Post.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/blog/Post.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Post_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/blog/Post.vue?vue&type=template&id=8caa92c4&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/blog/Post.vue?vue&type=template&id=8caa92c4& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Post_vue_vue_type_template_id_8caa92c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Post.vue?vue&type=template&id=8caa92c4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/blog/Post.vue?vue&type=template&id=8caa92c4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Post_vue_vue_type_template_id_8caa92c4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Post_vue_vue_type_template_id_8caa92c4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);