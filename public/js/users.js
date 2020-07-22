(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/users"],{

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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    title: String,
    parent: String,
    active: String
  }
});

/***/ }),

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DataTable.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DataTable.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Loader */ "./resources/js/components/Loader.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    entradasProp: {
      type: Number,
      required: false
    },
    cargandoProp: {
      type: Boolean,
      required: false
    },
    buscarProp: {
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
      entradas: 5,
      offset: 1,
      buscar: '',
      cargando: true
    };
  },
  components: {
    Loader: _Loader__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    clickDisable: function clickDisable(id) {
      this.$emit('disable', id);
    },
    clickDelete: function clickDelete(id) {
      this.$emit('delete', id);
    },
    clickRead: function clickRead(id) {
      this.$emit('read', id);
    },
    clickUpdate: function clickUpdate(id) {
      this.$emit('update', id);
    },
    clickNextPage: function clickNextPage() {
      if (this.buscar) {
        this.$emit('get', this.pagina_actual + 1, this.entradas, this.buscar);
      } else {
        this.$emit('get', this.pagina_actual + 1, this.entradas);
      }

      this.cargando = true;
    },
    clickPrevPage: function clickPrevPage() {
      if (this.buscar) {
        this.$emit('get', this.pagina_actual - 1, this.entradas, this.buscar);
      } else {
        this.$emit('get', this.pagina_actual - 1, this.entradas);
      }

      this.cargando = true;
    },
    clickPagina: function clickPagina(pagina) {
      if (this.buscar) {
        this.$emit('get', pagina, this.entradas, this.buscar);
      } else {
        this.$emit('get', pagina, this.entradas);
      }

      this.cargando = true;
    },
    cambiarPaginado: function cambiarPaginado() {
      if (this.buscar) {
        this.$emit('get', 1, this.entradas, this.buscar);
      } else {
        this.$emit('get', 1, this.entradas);
      }

      this.cargando = true;
    }
  },
  watch: {
    buscar: function buscar(newValue, oldValue) {
      this.$emit('get', 1, this.entradas, newValue);
      this.$emit('update:buscarProp', String(newValue));
      this.cargando = true;
    },
    object: function object(newValue, oldValue) {
      this.cargando = true;

      if (newValue) {
        this.cargando = false;
      }
    },
    cargandoProp: function cargandoProp(newValue, oldValue) {
      this.cargando = newValue;
    },
    cargando: function cargando(newValue, oldValue) {
      this.$emit('update:cargandoProp', Boolean(newValue));
    },
    entradasProp: function entradasProp(newValue, oldValue) {
      this.entradas = newValue;
    },
    entradas: function entradas(newValue, oldValue) {
      this.$emit('update:entradasProp', Number(newValue));
    },
    buscarProp: function buscarProp(newValue, oldValue) {
      this.buscar = newValue;
    }
    /*buscar: function (newValue,oldValue) {
        this.$emit('update:buscarProp', String(newValue));
    },*/

  },
  computed: {
    headers: function headers() {
      if (this.object.headers) {
        return this.object.headers.filter(function (valor, i) {
          return i > 0;
        });
      }
    },
    elementos: function elementos() {
      if (this.object.data) {
        var data = [];
        var object = this.object.data;

        for (var key_object in object) {
          var object_2 = object[key_object];
          data[key_object] = [];

          for (var key_element in object_2) {
            if (key_element != "id" && key_element != "accion") {
              data[key_object].push(object_2[key_element]);
            }
          }
        }

        return data;
      }
    },
    activo: function activo() {
      return this.object.current_page;
    },
    desde: function desde() {
      return this.object.from;
    },
    hasta: function hasta() {
      return this.object.to;
    },
    total: function total() {
      return this.object.total;
    },
    ultima_pagina: function ultima_pagina() {
      return this.object.last_page;
    },
    pagina_actual: function pagina_actual() {
      return this.object.current_page;
    },
    cantidad_paginas: function cantidad_paginas() {
      if (!this.object.to) {
        return [];
      }

      var desde = this.object.current_page - this.offset;

      if (desde < 1) {
        desde = 1;
      }

      var hasta = desde + this.offset * 2;

      if (hasta >= this.object.last_page) {
        hasta = this.object.last_page;
      }

      var paginas = [];

      while (desde <= hasta) {
        paginas.push(desde);
        desde++;
      }

      return paginas;
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
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Button */ "./resources/js/components/Button.vue");
/* harmony import */ var _components_DataTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/DataTable */ "./resources/js/components/DataTable.vue");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue2-dropzone */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.js");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_search_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-search-select */ "./node_modules/vue-search-select/dist/VueSearchSelect.common.js");
/* harmony import */ var vue_search_select__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_search_select__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/BreadCrumb */ "./resources/js/components/BreadCrumb.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    rutaSistema: {
      type: String,
      required: true
    }
  },
  components: {
    DataTable: _components_DataTable__WEBPACK_IMPORTED_MODULE_1__["default"],
    Boton: _components_Button__WEBPACK_IMPORTED_MODULE_0__["default"],
    BreadCrumb: _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_4__["default"],
    ModelListSelect: vue_search_select__WEBPACK_IMPORTED_MODULE_3__["ModelListSelect"],
    vueDropzone: vue2_dropzone__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  data: function data() {
    return {
      usuarios: {},
      showBlock: true,
      crearBloque: false,
      editBlock: false,
      verBloque: false,
      dropzoneOptions: {
        url: "/",
        maxFiles: 1,
        acceptedFiles: "image/png,image/jpeg,image/jpg,image/svg+xml",
        autoProcessQueue: false,
        thumbnailWidth: 100,
        addRemoveLinks: true,
        dictRemoveFile: "Remover"
      },
      usuario: {
        rel_role: {},
        role_id: "",
        username: "",
        password: "",
        name: "",
        email: "",
        status: false,
        available: false
      },
      errores: {},
      requestServer: false
    };
  },
  methods: {
    restoreEl: function restoreEl() {
      this.crearBloque = this.editBlock = this.verBloque = this.requestServer = false;
      this.errores = {}, this.usuario = {
        rel_role: {},
        role_id: "",
        username: "",
        password: "",
        name: "",
        email: ""
      };
      this.$refs["modal-eliminar"].hide();
      this.$refs["modal-disable"].hide();
    },
    restorePage: function restorePage() {
      this.showBlock = true;
      this.getUsers(1, 5);
      this.crearBloque = this.editBlock = this.verBloque = this.requestServer = false;
      this.$refs["modal-eliminar"].hide();
      this.$refs["modal-disable"].hide();
      this.errores = {}, this.usuario = {
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

      axios.get("json/usuarios/" + id).then(function (response) {
        _this.usuario = response.data;
      })["catch"](function (error) {});
    },
    getUsers: function getUsers(pagina, desde) {
      var _this2 = this;

      var buscar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var url = "json/usuarios?page=" + pagina + "&desde=" + desde;

      if (buscar) {
        url = url + "&buscar=" + buscar;
      }

      axios.get(url).then(function (response) {
        _this2.usuarios = response.data;
      })["catch"](function (error) {});
    },
    showUser: function showUser(id) {
      this.getUser(id);
      this.showBlock = false;
      this.verBloque = true;
    },
    editUser: function editUser(id) {
      this.getUser(id);
      this.showBlock = false;
      this.editBlock = true;
    },
    deleteUser: function deleteUser(id) {
      this.$refs["modal-eliminar"].show();
      this.getUser(id);
    },
    disableUser: function disableUser(id) {
      this.$refs["modal-disable"].show();
      this.getUser(id);
    },
    disableUserConfirm: function disableUserConfirm() {
      var _this3 = this;

      this.requestServer = true;
      axios.put("usuarios/deshabilitar/" + this.usuario.id).then(function (response) {
        _this3.restorePage();

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
        _this3.restoreEl();
      });
    },
    deleteUserConfirm: function deleteUserConfirm() {
      var _this4 = this;

      this.requestServer = true;
      axios["delete"]("usuarios/" + this.usuario.id).then(function (response) {
        _this4.restorePage();

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
      });
    },
    updateUser: function updateUser() {
      var _this5 = this;

      this.requestServer = true;
      var fd = new FormData();
      fd.append("name", this.usuario.name);
      fd.append("username", this.usuario.username);
      fd.append("email", this.usuario.email);
      /*if (this.eliminarImagen === true) {
        fd.append("eliminar", this.eliminarImagen);
      }*/

      if (this.usuario.password) {
        fd.append("password", this.usuario.password);
      }

      if (this.usuario.available) {
        fd.append("available", 1);
      }

      fd.append("role_id", this.usuario.role_id);
      fd.append("id", this.usuario.id);

      if (this.$refs.ref_image.dropzone.files[0]) {
        fd.append("avatar", this.$refs.ref_image.dropzone.files[0]);
      }

      fd.append("_method", "put");
      axios.post("usuarios/" + this.usuario.id, fd).then(function (response) {
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
        if (error.response.status === 422) {
          _this5.requestServer = false;
          _this5.errores = error.response.data.errors || {};
          return;
        }

        _this5.restorePage();
      });
    },
    createUser: function createUser() {
      var _this6 = this;

      this.requestServer = true;
      var fd = new FormData();
      fd.append("name", this.usuario.name); //fd.append("username", this.usuario.username);

      fd.append("email", this.usuario.email);
      fd.append("password", this.usuario.password);

      if (this.$refs.ref_image.dropzone.files[0]) {
        fd.append("avatar", this.$refs.ref_image.dropzone.files[0]);
      }

      axios.post("usuarios", fd).then(function (response) {
        _this6.requestServer = false;

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
          _this6.errores = error.response.data.errors || {};
          return;
        }

        _this6.restorePage();
      });
    }
  },
  created: function created() {
    this.getUsers(1, 5);
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
exports.push([module.i, "\n.breadcrumb-dark .breadcrumb-item+.breadcrumb-item[data-v-1645430e]::before {\r\n    color: #adb5bd;\n}\n.breadcrumb-item+.breadcrumb-item[data-v-1645430e]::before {\r\n    display: inline-block;\r\n    padding-right: .5rem;\r\n    content: '-';\r\n    color: #8898aa;\n}\n.bg-transparent[data-v-1645430e]{\r\n  background: transparent;\n}\r\n", ""]);

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
    _c(
      "h6",
      { staticClass: "h2 text-primary text-uppercase d-inline-block mb-0" },
      [_vm._v(_vm._s(_vm.title))]
    ),
    _vm._v(" "),
    _c(
      "nav",
      {
        staticClass: "d-none d-lg-inline-block ml-md-4",
        attrs: { "aria-label": "breadcrumb" }
      },
      [
        _c(
          "ol",
          { staticClass: "breadcrumb p-0 m-0 breadcrumb-links bg-transparent" },
          [
            _vm._m(0),
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
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "breadcrumb-item" }, [
      _c("a", { attrs: { href: "/dashboard" } }, [
        _c("i", { staticClass: "fas fa-chart-bar" })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Button.vue?vue&type=template&id=e0422746&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Button.vue?vue&type=template&id=e0422746& ***!
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
                staticClass: "ml-1",
                attrs: {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "20",
                  height: "20",
                  viewBox: "0 0 40 40",
                  stroke: "#fff"
                }
              },
              [
                _c("g", { attrs: { fill: "none", "fill-rule": "evenodd" } }, [
                  _c(
                    "g",
                    {
                      attrs: {
                        transform: "translate(1 1)",
                        "stroke-width": "2"
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
    _c("div", { staticClass: "col-12" }, [
      _c("div", { staticClass: "card shadow" }, [
        _c(
          "div",
          { staticClass: "card-body" },
          [
            _vm._t("filtros"),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-12 col-md-6 mb-3 mb-md-0 mt-md-2 mt-0" },
                [
                  _c(
                    "label",
                    { staticClass: "mb-0", attrs: { for: "id_mostrar" } },
                    [
                      _c("small", [_vm._v("Mostrar")]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.entradas,
                              expression: "entradas"
                            }
                          ],
                          staticClass:
                            "form-control form-control-alternative form-control-sm w-auto d-inline-block",
                          attrs: { id: "id_mostrar" },
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
                                _vm.entradas = $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              },
                              function($event) {
                                return _vm.cambiarPaginado()
                              }
                            ]
                          }
                        },
                        [
                          _c("option", { attrs: { value: "5" } }, [
                            _vm._v("5")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "10" } }, [
                            _vm._v("10")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "20" } }, [
                            _vm._v("20")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "50" } }, [
                            _vm._v("50")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "100" } }, [
                            _vm._v("100")
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c("small", [_vm._v("entradas")])
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-12 col-md-6" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.buscar,
                      expression: "buscar"
                    }
                  ],
                  staticClass: "form-control form-control-alternative",
                  attrs: {
                    type: "search",
                    id: "id_buscar",
                    placeholder: "Buscar por " + _vm.placeholder
                  },
                  domProps: { value: _vm.buscar },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.buscar = $event.target.value
                    }
                  }
                })
              ])
            ])
          ],
          2
        ),
        _vm._v(" "),
        _vm.cargando
          ? _c(
              "div",
              [
                _c("Loader", {
                  attrs: {
                    texto: "Cargando...",
                    iconClasses: ["ml-1"],
                    iconWidth: 20,
                    iconHeight: 20,
                    styles: { height: "300px" }
                  }
                })
              ],
              1
            )
          : _vm._e(),
        _vm._v(" "),
        !_vm.cargando
          ? _c("div", { staticClass: "table-responsive" }, [
              _c("table", { staticClass: "table align-items-center" }, [
                _c("thead", { staticClass: "thead-light" }, [
                  _c(
                    "tr",
                    [
                      _c("th", [
                        _vm._v(
                          "\n                                #\n                            "
                        )
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.headers, function(el, index) {
                        return _c("th", { key: index }, [
                          _vm._v(
                            "\n                                " +
                              _vm._s(el) +
                              "\n                            "
                          )
                        ])
                      }),
                      _vm._v(" "),
                      _vm._t("cabecera_accion"),
                      _vm._v(" "),
                      _c("th", [_vm._v("Operaciones")])
                    ],
                    2
                  )
                ]),
                _vm._v(" "),
                _vm.object.data && _vm.object.data.length > 0
                  ? _c(
                      "tbody",
                      _vm._l(_vm.object.data, function(elemento, i) {
                        return _c(
                          "tr",
                          { key: elemento.id },
                          [
                            _c("td", [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(_vm.object.from + i) +
                                  "\n                            "
                              )
                            ]),
                            _vm._v(" "),
                            _vm._l(_vm.elementos[i], function(el, j) {
                              return _c("td", {
                                key: j,
                                domProps: { innerHTML: _vm._s(el) }
                              })
                            }),
                            _vm._v(" "),
                            _vm._t("td_accion_" + elemento.id),
                            _vm._v(" "),
                            _c("td", { staticClass: "table-actions" }, [
                              _vm.buttonRead == true
                                ? _c(
                                    "a",
                                    {
                                      staticClass:
                                        "btn btn-icon-only rounded-circle btn-secondary",
                                      attrs: { href: "#" },
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.clickRead(elemento.id)
                                        }
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "far fa-eye text-primary"
                                      })
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.buttonUpdate == true
                                ? _c(
                                    "a",
                                    {
                                      staticClass:
                                        "btn btn-icon-only rounded-circle btn-secondary",
                                      attrs: { href: "#" },
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.clickUpdate(elemento.id)
                                        }
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass:
                                          "fas fa-pen-alt text-warning"
                                      })
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.buttonDisable == true
                                ? _c(
                                    "a",
                                    {
                                      staticClass:
                                        "btn btn-icon-only rounded-circle btn-secondary",
                                      attrs: { href: "#" },
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.clickDisable(elemento.id)
                                        }
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "fas fa-ban text-danger"
                                      })
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.buttonDelete == true
                                ? _c(
                                    "a",
                                    {
                                      staticClass:
                                        "btn btn-icon-only rounded-circle btn-secondary",
                                      attrs: { href: "#" },
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.clickDelete(elemento.id)
                                        }
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass:
                                          "fas fa-trash-alt text-danger"
                                      })
                                    ]
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
                          [
                            _vm._v(
                              "\n                                No se encontraron resultados.\n                            "
                            )
                          ]
                        )
                      ])
                    ])
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        !_vm.cargando
          ? _c("div", { staticClass: "card-footer py-4" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-6 pt-2" }, [
                  _vm.desde && _vm.hasta
                    ? _c("small", {}, [
                        _vm._v(
                          "\n                            Mostrando " +
                            _vm._s(_vm.desde) +
                            " de " +
                            _vm._s(_vm.hasta) +
                            " de " +
                            _vm._s(_vm.total) +
                            " entradas\n                        "
                        )
                      ])
                    : _c("small", [
                        _vm.desde
                          ? _c("span", [
                              _vm._v(_vm._s(_vm.total) + " entradas")
                            ])
                          : _vm._e()
                      ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-6" }, [
                  _c(
                    "ul",
                    { staticClass: "pagination justify-content-end mb-0" },
                    [
                      _c("li", { staticClass: "page-item" }, [
                        _vm.pagina_actual > 1
                          ? _c(
                              "a",
                              {
                                staticClass: "page-link rounded",
                                attrs: { href: "#" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.clickPrevPage()
                                  }
                                }
                              },
                              [_c("i", { staticClass: "fas fa-angle-left" })]
                            )
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.cantidad_paginas, function(pagina) {
                        return _c(
                          "li",
                          {
                            key: pagina,
                            staticClass: "page-item",
                            class: [pagina == _vm.activo ? "active" : ""]
                          },
                          [
                            _c(
                              "a",
                              {
                                staticClass: "page-link rounded",
                                attrs: { href: "#" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.clickPagina(pagina)
                                  }
                                }
                              },
                              [_vm._v(_vm._s(pagina))]
                            )
                          ]
                        )
                      }),
                      _vm._v(" "),
                      _c("li", { staticClass: "page-item" }, [
                        _vm.pagina_actual < _vm.ultima_pagina
                          ? _c(
                              "a",
                              {
                                staticClass: "page-link rounded",
                                attrs: { href: "#" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.clickNextPage()
                                  }
                                }
                              },
                              [_c("i", { staticClass: "fas fa-angle-right" })]
                            )
                          : _vm._e()
                      ])
                    ],
                    2
                  )
                ])
              ])
            ])
          : _vm._e()
      ])
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
                  { staticClass: "col-6 col-md-7" },
                  [
                    _c("BreadCrumb", {
                      attrs: {
                        title: "Usuarios",
                        parent: "Configuración",
                        active: "Usuarios"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-6 col-md-5 text-right" }, [
                  _vm.showBlock
                    ? _c(
                        "a",
                        {
                          staticClass: "btn btn-icon btn-neutral",
                          attrs: { href: "#" },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return (function() {
                                _vm.showBlock = false
                                _vm.crearBloque = true
                                _vm.getSelects()
                              })($event)
                            }
                          }
                        },
                        [
                          _vm._m(0),
                          _vm._v(" "),
                          _c("span", { staticClass: "btn-inner--text" }, [
                            _vm._v("Nuevo Usuario")
                          ])
                        ]
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
              object: _vm.usuarios,
              placeholder: "Nombre Completo, Usuario",
              "button-update": true,
              "button-read": true,
              "button-delete": true,
              "button-disable": true,
              titulo: "Usuarios"
            },
            on: {
              get: _vm.getUsers,
              read: _vm.showUser,
              disable: _vm.disableUser,
              delete: _vm.deleteUser,
              update: _vm.editUser
            }
          }),
          _vm._v(" "),
          _vm.editBlock
            ? _c("div", { staticClass: "card shadow mb-4" }, [
                _vm._m(1),
                _vm._v(" "),
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
                                [_vm._v("Avatar")]
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
                                attrs: { for: "id_name" }
                              },
                              [_vm._v("Nombre Completo:")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.usuario.name,
                                  expression: "usuario.name"
                                }
                              ],
                              staticClass:
                                "form-control form-control-alternative",
                              attrs: {
                                type: "text",
                                id: "id_name",
                                placeholder: "Nombre Completo"
                              },
                              domProps: { value: _vm.usuario.name },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.usuario,
                                    "name",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errores && _vm.errores.name
                              ? _c(
                                  "label",
                                  {
                                    staticClass: "mt-2 mb-0 text-danger",
                                    attrs: { for: "id_name" }
                                  },
                                  [_vm._v(_vm._s(_vm.errores.name[0]))]
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
                                attrs: { for: "id_email" }
                              },
                              [
                                _vm._v(
                                  "\n                  Correo\n                  Electrónico:\n                "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.usuario.email,
                                  expression: "usuario.email"
                                }
                              ],
                              staticClass:
                                "form-control form-control-alternative",
                              attrs: {
                                type: "text",
                                id: "id_email",
                                placeholder: "Correo Electrónico"
                              },
                              domProps: { value: _vm.usuario.email },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.usuario,
                                    "email",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errores && _vm.errores.email
                              ? _c(
                                  "label",
                                  {
                                    staticClass: "mt-2 mb-0 text-danger",
                                    attrs: { for: "id_email" }
                                  },
                                  [_vm._v(_vm._s(_vm.errores.email[0]))]
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
                                attrs: { for: "id_username" }
                              },
                              [_vm._v("Nombre Usuario:")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.usuario.username,
                                  expression: "usuario.username"
                                }
                              ],
                              staticClass:
                                "form-control form-control-alternative",
                              attrs: {
                                type: "text",
                                id: "id_username",
                                placeholder: "Nombre Usuario"
                              },
                              domProps: { value: _vm.usuario.username },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.usuario,
                                    "username",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-12 col-md-6" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticClass: "font-weight-bold",
                                attrs: { for: "id_password" }
                              },
                              [_vm._v("Contraseña:")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.usuario.contrasena,
                                  expression: "usuario.contrasena"
                                }
                              ],
                              staticClass:
                                "form-control form-control-alternative",
                              attrs: {
                                type: "password",
                                id: "id_password",
                                placeholder: "Contraseña"
                              },
                              domProps: { value: _vm.usuario.contrasena },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.usuario,
                                    "contrasena",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errores && _vm.errores.contrasena
                              ? _c(
                                  "label",
                                  {
                                    staticClass: "mt-2 mb-0 text-danger",
                                    attrs: { for: "id_password" }
                                  },
                                  [_vm._v(_vm._s(_vm.errores.contrasena[0]))]
                                )
                              : _vm._e()
                          ])
                        ]),
                        _vm._v(" "),
                        !_vm.usuario.status
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
                                        value: _vm.usuario.available,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.usuario,
                                            "available",
                                            $$v
                                          )
                                        },
                                        expression: "usuario.available"
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
                            _c("Boton", {
                              attrs: {
                                text: "Actualizar",
                                classes: ["btn-primary", "mr-2"],
                                "request-server": _vm.requestServer,
                                º: ""
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-danger",
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
          _vm.crearBloque
            ? _c("div", { staticClass: "card shadow mb-4" }, [
                _vm._m(2),
                _vm._v(" "),
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
                                attrs: { for: "id_name" }
                              },
                              [_vm._v("Nombre Completo:")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.usuario.name,
                                  expression: "usuario.name"
                                }
                              ],
                              staticClass:
                                "form-control form-control-alternative",
                              attrs: {
                                type: "text",
                                id: "id_name",
                                placeholder: "Nombre Completo"
                              },
                              domProps: { value: _vm.usuario.name },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.usuario,
                                    "name",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errores && _vm.errores.name
                              ? _c(
                                  "label",
                                  {
                                    staticClass: "mt-2 mb-0 text-danger",
                                    attrs: { for: "id_name" }
                                  },
                                  [_vm._v(_vm._s(_vm.errores.name[0]))]
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
                                attrs: { for: "id_username" }
                              },
                              [_vm._v("Usuario:")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.usuario.username,
                                  expression: "usuario.username"
                                }
                              ],
                              staticClass:
                                "form-control form-control-alternative",
                              attrs: {
                                type: "text",
                                id: "id_username",
                                placeholder: "Usuario"
                              },
                              domProps: { value: _vm.usuario.username },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.usuario,
                                    "username",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errores && _vm.errores.username
                              ? _c(
                                  "label",
                                  {
                                    staticClass: "mt-2 mb-0 text-danger",
                                    attrs: { for: "id_username" }
                                  },
                                  [_vm._v(_vm._s(_vm.errores.username[0]))]
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
                                attrs: { for: "id_password" }
                              },
                              [_vm._v("Contraseña:")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.usuario.password,
                                  expression: "usuario.password"
                                }
                              ],
                              staticClass:
                                "form-control form-control-alternative",
                              attrs: {
                                type: "password",
                                id: "id_password",
                                placeholder: "Contraseña"
                              },
                              domProps: { value: _vm.usuario.password },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.usuario,
                                    "password",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errores && _vm.errores.password
                              ? _c(
                                  "label",
                                  {
                                    staticClass: "mt-2 mb-0 text-danger",
                                    attrs: { for: "id_password" }
                                  },
                                  [_vm._v(_vm._s(_vm.errores.password[0]))]
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
                                attrs: { for: "id_email" }
                              },
                              [_vm._v("Correo Electrónico:")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.usuario.email,
                                  expression: "usuario.email"
                                }
                              ],
                              staticClass:
                                "form-control form-control-alternative",
                              attrs: {
                                type: "text",
                                id: "id_email",
                                placeholder: "Correo Electrónico"
                              },
                              domProps: { value: _vm.usuario.email },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.usuario,
                                    "email",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errores && _vm.errores.email
                              ? _c(
                                  "label",
                                  {
                                    staticClass: "mt-2 mb-0 text-danger",
                                    attrs: { for: "id_email" }
                                  },
                                  [_vm._v(_vm._s(_vm.errores.email[0]))]
                                )
                              : _vm._e()
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-12 text-right mt-2" },
                          [
                            _c("Boton", {
                              attrs: {
                                text: "Guardar",
                                classes: ["btn-primary", "mr-2"],
                                "request-server": _vm.requestServer
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-danger",
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
          _vm.verBloque
            ? _c("div", { staticClass: "card shadow mb-4" }, [
                _vm._m(3),
                _vm._v(" "),
                _c("div", { staticClass: "card-body" }, [
                  _c("div", { staticClass: "row" }, [
                    _vm.usuario.avatar
                      ? _c("div", { staticClass: "col-12" }, [
                          _c("div", { staticClass: "form-group text-center" }, [
                            _c("img", {
                              staticClass:
                                "object-fit--cover shadow d-block mx-auto img-180 rounded-circle",
                              attrs: {
                                src:
                                  _vm.rutaSistema +
                                  "/files/img/users/" +
                                  _vm.usuario.avatar
                              }
                            })
                          ])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-md-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          {
                            staticClass: "font-weight-bold",
                            attrs: { for: "id_name" }
                          },
                          [_vm._v("Nombre:")]
                        ),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(this.usuario.name))])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-md-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          {
                            staticClass: "font-weight-bold",
                            attrs: { for: "id_username" }
                          },
                          [_vm._v("Usuario:")]
                        ),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(this.usuario.username))])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-md-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          {
                            staticClass: "font-weight-bold",
                            attrs: { for: "id_email" }
                          },
                          [_vm._v("Correo Electrónico:")]
                        ),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(this.usuario.email))])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-md-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          {
                            staticClass: "font-weight-bold",
                            attrs: { for: "id_rol" }
                          },
                          [_vm._v("Rol:")]
                        ),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(this.usuario.rel_role.name))])
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
                        this.usuario.created_at
                          ? _c("p", [_vm._v(_vm._s(this.usuario.created_at))])
                          : _c("p", [_vm._v("No registrado")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 text-right mt-2" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary",
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.restorePage($event)
                            }
                          }
                        },
                        [_vm._v("Regresar")]
                      )
                    ])
                  ])
                ])
              ])
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "modal-eliminar",
          attrs: { centered: "" },
          scopedSlots: _vm._u([
            {
              key: "modal-footer",
              fn: function(ref) {
                var ok = ref.ok
                var cancel = ref.cancel
                return [
                  _c("Boton", {
                    attrs: {
                      classes: ["btn-danger"],
                      text: "Eliminar",
                      "request-server": _vm.requestServer
                    },
                    on: { click: _vm.deleteUserConfirm }
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
          ])
        },
        [
          _c("template", { slot: "modal-title" }, [
            _c("h2", { staticClass: "mb-0 text-uppercase text-primary" }, [
              _vm._v("Eliminar Usuario")
            ])
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "mb-0" }, [
            _vm._v("Esta seguro que desea eliminar el usuario?")
          ])
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "modal-disable",
          attrs: { centered: "" },
          scopedSlots: _vm._u([
            {
              key: "modal-footer",
              fn: function(ref) {
                var ok = ref.ok
                var cancel = ref.cancel
                return [
                  _c("Boton", {
                    attrs: {
                      classes: ["btn-danger"],
                      text: "Deshabilitar",
                      "request-server": _vm.requestServer
                    },
                    on: { click: _vm.disableUserConfirm }
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
          ])
        },
        [
          _c("template", { slot: "modal-title" }, [
            _c("h2", { staticClass: "mb-0 text-uppercase text-primary" }, [
              _vm._v("Deshabilitar Usuario")
            ])
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "mb-0" }, [
            _vm._v("Esta seguro que desea deshabilitar el usuario?")
          ])
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "btn-inner--icon" }, [
      _c("i", { staticClass: "fas fa-cog" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header border-0" }, [
      _c("h2", { staticClass: "mb-0 text-uppercase text-primary" }, [
        _vm._v("Actualizar Usuario")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header border-0" }, [
      _c("h2", { staticClass: "mb-0 text-uppercase text-primary" }, [
        _vm._v("Crear Usuario")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header border-0" }, [
      _c("h2", { staticClass: "mb-0 text-uppercase text-primary" }, [
        _vm._v("Ver Usuario")
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
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BreadCrumb_vue_vue_type_style_index_0_id_1645430e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BreadCrumb_vue_vue_type_style_index_0_id_1645430e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BreadCrumb_vue_vue_type_style_index_0_id_1645430e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "./resources/js/components/Button.vue":
/*!********************************************!*\
  !*** ./resources/js/components/Button.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Button_vue_vue_type_template_id_e0422746___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button.vue?vue&type=template&id=e0422746& */ "./resources/js/components/Button.vue?vue&type=template&id=e0422746&");
/* harmony import */ var _Button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button.vue?vue&type=script&lang=js& */ "./resources/js/components/Button.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Button_vue_vue_type_template_id_e0422746___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Button_vue_vue_type_template_id_e0422746___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
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

/***/ "./resources/js/components/Button.vue?vue&type=template&id=e0422746&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Button.vue?vue&type=template&id=e0422746& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_template_id_e0422746___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Button.vue?vue&type=template&id=e0422746& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Button.vue?vue&type=template&id=e0422746&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_template_id_e0422746___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_template_id_e0422746___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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