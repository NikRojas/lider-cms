(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{"1jZt":function(t,e,s){var r=s("uNoH");"string"==typeof r&&(r=[[t.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(r,a);r.locals&&(t.exports=r.locals)},"5sbD":function(t,e,s){var r=s("KsmT");"string"==typeof r&&(r=[[t.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(r,a);r.locals&&(t.exports=r.locals)},"82rR":function(t,e,s){"use strict";s.r(e);var r=s("F05R"),a=s("TVlQ"),n=s("m5h5"),o=s.n(n),i={components:{Button:a.a},props:{route:String,project:Object},data:function(){return{requestTest:!1,modalTest:!1,orderTest:{id:""},message:"",hideButtonSend:!1,endpoint:"https://static.micuentaweb.pe/"}},methods:{pay:function(t){"PAID"===t.clientAnswer.orderStatus?this.message="Pago Correcto":this.message="Pago Fallido"},generateForm:function(t,e){var s=this;this.hideButtonSend=!0;var r=t;o.a.loadLibrary(this.endpoint,e).then((function(t){return t.KR.setFormConfig({formToken:r})})).then((function(t){return t.KR.addForm("#formtest")})).then((function(t){var e=t.KR,s=t.result;return e.showForm(s.formId)})).then((function(t){return t.KR.onSubmit(s.pay)})).catch((function(t){s.promiseError=t+" (see console for more details)"}))},sendTest:function(){var t=this;this.requestTest=!0,this.orderTest.project_id=this.project.id,axios({method:"post",url:this.route,data:this.orderTest}).then((function(e){t.requestTest=!1,console.log(e.data),e.data.token&&t.generateForm(e.data.token,e.data.tokenJs)})).catch((function(e){t.requestTest=!1,422!==e.response.status?Swal.fire({title:e.response.data.title,text:e.response.data.message,type:"error",confirmButtonText:"OK",buttonsStyling:!1,customClass:{confirmButton:"btn btn-primary"}}):t.errors=e.response.data.errors||{}}))},restoreTest:function(){this.modalTest=!1,this.orderTest={}}}},c=s("KHd+"),l=Object(c.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.hideButtonSend?t._e():s("div",{staticClass:"text-center mt-3"},[s("Button",{attrs:{text:"Realizar Test",classes:["btn-primary"],"request-server":t.requestTest},on:{click:t.sendTest}})],1),t._v(" "),t.hideButtonSend?s("div",[s("p",[t._v("\n      Seleccione de la barra inferior una tarjeta para realizar la prueba de\n      venta.\n    ")])]):t._e(),t._v(" "),s("div",{staticStyle:{width:"296px",margin:"auto"},attrs:{id:"formtest"}}),t._v(" "),t.message?s("div",{staticClass:"mt-2 text-center"},[s("b",[t._v(" "+t._s(t.message)+"!!! ")])]):t._e()])}),[],!1,null,null,null).exports,d={components:{Button:a.a},props:{route:String,project:Object},data:function(){return{requestTest:!1,modalTest:!1,orderTest:{id:""},message:"",hideButtonSend:!1,endpoint:"https://static.micuentaweb.pe/"}},methods:{pay:function(t){"PAID"===t.clientAnswer.orderStatus?this.message="Pago Correcto":this.message="Pago Fallido"},generateForm:function(t,e){var s=this;this.hideButtonSend=!0;var r=t;o.a.loadLibrary(this.endpoint,e).then((function(t){return t.KR.setFormConfig({formToken:r})})).then((function(t){return t.KR.addForm("#formprod")})).then((function(t){var e=t.KR,s=t.result;return e.showForm(s.formId)})).then((function(t){return t.KR.onSubmit(s.pay)})).catch((function(t){s.promiseError=t+" (see console for more details)"}))},sendTest:function(){var t=this;this.requestTest=!0,this.orderTest.project_id=this.project.id,axios({method:"post",url:this.route,data:this.orderTest}).then((function(e){t.requestTest=!1,console.log(e.data),e.data.token&&t.generateForm(e.data.token,e.data.tokenJs)})).catch((function(e){t.requestTest=!1,422!==e.response.status?Swal.fire({title:e.response.data.title,text:e.response.data.message,type:"error",confirmButtonText:"OK",buttonsStyling:!1,customClass:{confirmButton:"btn btn-primary"}}):t.errors=e.response.data.errors||{}}))},restoreTest:function(){this.modalTest=!1,this.orderTest={}}}},u=Object(c.a)(d,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.hideButtonSend?t._e():s("div",{staticClass:"text-center mt-3"},[s("Button",{attrs:{text:"Realizar Test",classes:["btn-primary"],"request-server":t.requestTest},on:{click:t.sendTest}})],1),t._v(" "),t.hideButtonSend?s("div",[s("p",[t._v("\n      Ingrese las credenciales de su tarjeta.\n    ")])]):t._e(),t._v(" "),s("div",{staticStyle:{width:"296px",margin:"auto"},attrs:{id:"formprod"}}),t._v(" "),t.message?s("div",{staticClass:"mt-2 text-center"},[s("b",[t._v(" "+t._s(t.message)+"!!! ")])]):t._e()])}),[],!1,null,null,null).exports,_={components:{BreadCrumb:r.a,Button:a.a,Test:l,Prod:u},props:{values:Array,elementParent:Object,routeReturn:String,credentialParent:Object,routeUpdate:String,routeUpdateTokens:String,routeActivate:String,routeTest:String,routeProd:String},data:function(){return{options:[{text:"Nuevo Sol Peruano",value:!0},{text:"Dolar Americano",value:!1}],updateTokensBlock:!1,updateCrendialsBlock:!1,requestTest:!1,requestTokens:!1,requestActive:!1,credential:{user:"",password:"",type_currency:""},errors:{},requestUpdate:!1}},methods:{activate:function(){var t=this;this.requestActive=!0,axios({method:"post",url:this.routeActivate,data:this.credential}).then((function(e){t.requestActive=!1,document.location.href=e.data.route})).catch((function(e){t.requestActive=!1,422!==e.response.status?document.location.href=e.response.data.route:t.errors=e.response.data.errors||{}}))},editBlockCredentials:function(){this.updateCrendialsBlock=!0},restoreBlockCredentials:function(){this.credentialParent?(this.credential.user=this.credentialParent.user,this.credential.password=this.credentialParent.password):(this.credential.user="",this.credential.password=""),this.updateCrendialsBlock=!1},updateCredentials:function(){var t=this;this.requestUpdate=!0,this.credential.project=this.elementParent.id,this.requestSubmit=!0,axios({method:"post",url:this.routeUpdate,data:this.credential}).then((function(e){t.requestUpdate=!1,document.location.href=e.data.route})).catch((function(e){t.requestUpdate=!1,422!==e.response.status?document.location.href=e.response.data.route:t.errors=e.response.data.errors||{}}))},editBlockTokens:function(){this.updateTokensBlock=!0},restoreBlockTokens:function(){this.credentialParent&&(this.credential.token_test=this.credentialParent.token_test,this.credential.token_prod=this.credentialParent.token_prod,this.credential.token_js_test=this.credentialParent.token_js_test,this.credential.token_js_test=this.credentialParent.token_js_test),this.updateTokensBlock=!1},updateTokens:function(){var t=this;this.requestTokens=!0,this.credential.project=this.elementParent.id,this.requestSubmit=!0,axios({method:"post",url:this.routeUpdateTokens,data:this.credential}).then((function(e){t.requestTokens=!1,document.location.href=e.data.route})).catch((function(e){t.requestTokens=!1,422!==e.response.status?document.location.href=e.response.data.route:t.errors=e.response.data.errors||{}}))}},watch:{elementParent:{immediate:!0,handler:function(t){this.project=t}},credentialParent:{immediate:!0,handler:function(t){t&&(this.credential=Object.assign({},t))}}}},v=Object(c.a)(_,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"header"},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"header-body"},[s("div",{staticClass:"row align-items-center pt-0 pt-md-2 pb-3"},[s("div",{staticClass:"col-6 col-md-7"},[s("BreadCrumb",{attrs:{title:"Credenciales Pasarela Proyecto "+t.project.name_es,parent:"",active:"Proyectos"}})],1)]),t._v(" "),s("div",{staticClass:"row mb-5"},[s("div",{staticClass:"col-6 col-md-5"},[s("a",{staticClass:"btn btn-icon btn-sm btn-inverse-light",attrs:{href:t.routeReturn}},[s("span",{staticClass:"btn-inner--icon"},[s("jam-arrow-left",{staticClass:"current-color"})],1),t._v(" "),s("span",{staticClass:"btn-inner--text"},[t._v("Regresar")])])])])])])]),t._v(" "),s("div",{staticClass:"container-fluid mt--4"},[t.credentialParent?s("div",{staticClass:"row mb-4"},[t._m(0),t._v(" "),s("div",{staticClass:"col-12 col-lg-10"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[t._m(1),t._v(" "),s("div",{staticClass:"ml-2"},[s("b-form-checkbox",{attrs:{size:"lg",name:"check-button",switch:""},model:{value:t.credential.active,callback:function(e){t.$set(t.credential,"active",e)},expression:"credential.active"}},[t._v("\n                Modo "+t._s(t.credential.active?"Producción":"Test")+"\n              ")])],1),t._v(" "),s("div",{staticClass:"text-right"},[s("Button",{attrs:{text:"Actualizar Modo",classes:["btn-primary"],"request-server":t.requestActive},on:{click:t.activate}})],1)])])])]):t._e(),t._v(" "),s("div",{staticClass:"row mb-4"},[t._m(2),t._v(" "),s("div",{staticClass:"col-12 col-lg-10"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[t.updateCrendialsBlock?s("div",[s("div",{staticClass:"form-group"},[s("label",{staticClass:"font-weight-bold",attrs:{for:"user"}},[t._v("Id de la Tienda")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.credential.user,expression:"credential.user"}],staticClass:"form-control",attrs:{type:"text",id:"user"},domProps:{value:t.credential.user},on:{input:function(e){e.target.composing||t.$set(t.credential,"user",e.target.value)}}}),t._v(" "),t.errors&&t.errors.user?s("label",{staticClass:"mt-2 text-danger text-sm",attrs:{for:"user"}},[t._v(t._s(t.errors.user[0]))]):t._e()]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{staticClass:"font-weight-bold",attrs:{for:"type_currency"}},[t._v("Moneda de la Tienda")]),t._v(" "),s("b-form-radio-group",{attrs:{id:"radio-group-1",name:"radios",plain:"",options:t.options},model:{value:t.credential.type_currency,callback:function(e){t.$set(t.credential,"type_currency",e)},expression:"credential.type_currency"}}),t._v(" "),t.errors&&t.errors.type_currency?s("label",{staticClass:"mt-2 text-danger text-sm",attrs:{for:"type_currency"}},[t._v(t._s(t.errors.type_currency[0]))]):t._e()],1),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{staticClass:"font-weight-bold",attrs:{for:"password_test"}},[t._v("Contraseña Test")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.credential.password_test,expression:"credential.password_test"}],staticClass:"form-control",attrs:{type:"text",id:"password_test"},domProps:{value:t.credential.password_test},on:{input:function(e){e.target.composing||t.$set(t.credential,"password_test",e.target.value)}}}),t._v(" "),t.errors&&t.errors.password_test?s("label",{staticClass:"mt-2 text-danger text-sm",attrs:{for:"password_test"}},[t._v(t._s(t.errors.password_test[0]))]):t._e()]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{staticClass:"font-weight-bold",attrs:{for:"password_prod"}},[t._v("Contraseña Producción")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.credential.password_prod,expression:"credential.password_prod"}],staticClass:"form-control",attrs:{type:"text",id:"password_prod"},domProps:{value:t.credential.password_prod},on:{input:function(e){e.target.composing||t.$set(t.credential,"password_prod",e.target.value)}}}),t._v(" "),t.errors&&t.errors.password_prod?s("label",{staticClass:"mt-2 text-danger text-sm",attrs:{for:"password_prod"}},[t._v(t._s(t.errors.password_prod[0]))]):t._e()]),t._v(" "),s("div",{staticClass:"text-right"},[s("Button",{attrs:{text:"Actualizar Credenciales",classes:["btn-primary"],"request-server":t.requestUpdate},on:{click:t.updateCredentials}}),t._v(" "),s("button",{staticClass:"btn btn-secondary ml-2",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.restoreBlockCredentials.apply(null,arguments)}}},[t._v("\n                  Cancelar\n                ")])],1)]):s("div",[s("h3",{staticClass:"font-weight-normal"},[s("div",{staticClass:"font-weight-bold"},[t._v("Usuario (Id de la Tienda):")]),t._v("\n                "+t._s(t.credential.user?t.credential.user:"No registrado")+"\n              ")]),t._v(" "),s("h3",{staticClass:"font-weight-normal"},[s("div",{staticClass:"font-weight-bold"},[t._v("Moneda de la Tienda:")]),t._v("\n                "+t._s(""===t.credential.type_currency?"No registardo":t.credential.type_currency?"Nuevo Sol Peruano":"Dolar Americano")+"\n              ")]),t._v(" "),s("h3",{staticClass:"font-weight-normal"},[s("div",{staticClass:"font-weight-bold"},[t._v("Contraseña Test:")]),t._v("\n                "+t._s(t.credential.password_test?t.credential.password_test:"No registrado")+"\n              ")]),t._v(" "),s("h3",{staticClass:"font-weight-normal"},[s("div",{staticClass:"font-weight-bold"},[t._v("Contraseña Prod:")]),t._v("\n                "+t._s(t.credential.password_prod?t.credential.password_prod:"No registrado")+"\n              ")]),t._v(" "),s("div",{staticClass:"text-right"},[s("button",{staticClass:"btn btn-inverse-info btn-sm",on:{click:t.editBlockCredentials}},[t._v("\n                  Editar Crendeciales\n                ")])])])])])])]),t._v(" "),t.credentialParent?s("div",{staticClass:"row mb-4"},[t._m(3),t._v(" "),s("div",{staticClass:"col-12 col-lg-10"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[t.updateTokensBlock?s("div",[s("div",{staticClass:"form-group"},[s("label",{staticClass:"font-weight-bold",attrs:{for:"token_js_test"}},[t._v("Token Cliente Javascript Test")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.credential.token_js_test,expression:"credential.token_js_test"}],staticClass:"form-control",attrs:{type:"text",id:"token_js_test"},domProps:{value:t.credential.token_js_test},on:{input:function(e){e.target.composing||t.$set(t.credential,"token_js_test",e.target.value)}}}),t._v(" "),t.errors&&t.errors.token_js_test?s("label",{staticClass:"mt-2 text-danger text-sm",attrs:{for:"token_js_test"}},[t._v(t._s(t.errors.token_js_test[0]))]):t._e()]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{staticClass:"font-weight-bold",attrs:{for:"token_js_prod"}},[t._v("Token Cliente Javascript Producción")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.credential.token_js_prod,expression:"credential.token_js_prod"}],staticClass:"form-control",attrs:{type:"text",id:"token_js_prod"},domProps:{value:t.credential.token_js_prod},on:{input:function(e){e.target.composing||t.$set(t.credential,"token_js_prod",e.target.value)}}}),t._v(" "),t.errors&&t.errors.token_js_prod?s("label",{staticClass:"mt-2 text-danger text-sm",attrs:{for:"token_js_prod"}},[t._v(t._s(t.errors.token_js_prod[0]))]):t._e()]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{staticClass:"font-weight-bold",attrs:{for:"token_sha_256_test"}},[t._v("Token HMAC-SHA-256 Test")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.credential.token_sha_256_test,expression:"credential.token_sha_256_test"}],staticClass:"form-control",attrs:{type:"text",id:"token_sha_256_test"},domProps:{value:t.credential.token_sha_256_test},on:{input:function(e){e.target.composing||t.$set(t.credential,"token_sha_256_test",e.target.value)}}}),t._v(" "),t.errors&&t.errors.token_sha_256_test?s("label",{staticClass:"mt-2 text-danger text-sm",attrs:{for:"token_sha_256_test"}},[t._v(t._s(t.errors.token_sha_256_test[0]))]):t._e()]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{staticClass:"font-weight-bold",attrs:{for:"token_sha_256_prod"}},[t._v("Token HMAC-SHA-256 Producción")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.credential.token_sha_256_prod,expression:"credential.token_sha_256_prod"}],staticClass:"form-control",attrs:{type:"text",id:"token_sha_256_prod"},domProps:{value:t.credential.token_sha_256_prod},on:{input:function(e){e.target.composing||t.$set(t.credential,"token_sha_256_prod",e.target.value)}}}),t._v(" "),t.errors&&t.errors.token_sha_256_prod?s("label",{staticClass:"mt-2 text-danger text-sm",attrs:{for:"token_sha_256_prod"}},[t._v(t._s(t.errors.token_sha_256_prod[0]))]):t._e()]),t._v(" "),s("div",{staticClass:"text-right"},[s("Button",{attrs:{text:"Actualizar Tokens",classes:["btn-primary"],"request-server":t.requestTokens},on:{click:t.updateTokens}}),t._v(" "),s("button",{staticClass:"btn btn-secondary ml-2",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.restoreBlockTokens.apply(null,arguments)}}},[t._v("\n                  Cancelar\n                ")])],1)]):s("div",[s("h3",{staticClass:"font-weight-normal"},[s("div",{staticClass:"font-weight-bold"},[t._v("\n                  Token Cliente Javascript Test:\n                ")]),t._v("\n                "+t._s(t.credential.token_js_test?t.credential.token_js_test:"No registrado")+"\n              ")]),t._v(" "),s("h3",{staticClass:"font-weight-normal"},[s("div",{staticClass:"font-weight-bold"},[t._v("\n                  Token Cliente Javascript Producción:\n                ")]),t._v("\n                "+t._s(t.credential.token_js_prod?t.credential.token_js_prod:"No registrado")+"\n              ")]),t._v(" "),s("hr",{staticClass:"my-3"}),t._v(" "),s("p",[t._v("\n                Tokens utilizados para calcular/verificar el campo kr-hash\n                cuando se obtiene respuesta de la IPN(URL de notificación\n                instantánea)\n              ")]),t._v(" "),s("h3",{staticClass:"font-weight-normal"},[s("div",{staticClass:"font-weight-bold"},[t._v("Token HMAC-SHA-256 Test:")]),t._v("\n                "+t._s(t.credential.token_sha_256_test?t.credential.token_sha_256_test:"No registrado")+"\n              ")]),t._v(" "),s("h3",{staticClass:"font-weight-normal"},[s("div",{staticClass:"font-weight-bold"},[t._v("\n                  Token HMAC-SHA-256 Producción:\n                ")]),t._v("\n                "+t._s(t.credential.token_sha_256_prod?t.credential.token_sha_256_prod:"No registrado")+"\n              ")]),t._v(" "),s("div",{staticClass:"text-right"},[s("button",{staticClass:"btn btn-inverse-info btn-sm",on:{click:t.editBlockTokens}},[t._v("\n                  Editar Tokens\n                ")])])])])])])]):t._e(),t._v(" "),t.credentialParent?s("div",{staticClass:"row"},[t._m(4)]):t._e(),t._v(" "),t.credentialParent?s("div",{staticClass:"row mb-4"},[t._m(5),t._v(" "),s("div",{staticClass:"col-12 col-lg-10"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("p",{staticClass:"mb-1"},[t._v("\n              De click al botón para visualizar el formulario de la Pasarela\n              en Modo Test, para revisar el funcionamiento correcto revise en\n              el apartado de pruebas de la Pasarela la venta el cual tendrá un\n              monto de S/ 1 o $1 según la moneda de la Tienda.\n            ")]),t._v(" "),s("Test",{attrs:{route:t.routeTest,project:t.elementParent}})],1)])])]):t._e(),t._v(" "),t.credentialParent?s("div",{staticClass:"row mb-4"},[t._m(6),t._v(" "),s("div",{staticClass:"col-12 col-lg-10"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("p",{staticClass:"mb-1"},[t._v("\n              De click al botón para visualizar el formulario de la Pasarela\n              en Modo Producción, para revisar el funcionamiento correcto revise en\n              el apartado de la Pasarela la venta el cual tendrá un\n              monto de S/ 1 o $1 según la moneda de la Tienda.\n            ")]),t._v(" "),s("Prod",{attrs:{route:t.routeProd,project:t.elementParent}})],1)])])]):t._e()])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12 col-lg-2"},[e("h2",[this._v("Modo")]),this._v(" "),e("p",[this._v("Indique el modo en el que se encuentra el Proyecto (Tienda).")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("\n              Al estar en Modo Producción deberá haber ingresado la\n              "),e("b",[this._v("Contraseña de Producción ")]),this._v(" en el sección Credenciales y el\n              "),e("b",[this._v("Token Cliente Javascript Producción")]),this._v(" en la sección Tokens.\n            ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12 col-lg-2"},[e("h2",[this._v("Credenciales")]),this._v(" "),e("p",[this._v("\n          Ingresa las credenciales del Proyecto (Tienda) de la Pasarela de\n          Izipay.\n        ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12 col-lg-2"},[e("h2",[this._v("Tokens")]),this._v(" "),e("p",[this._v("\n          Ingresa los tokens del Proyecto (Tienda) de la Pasarela de Izipay.\n        ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12 text-primary"},[e("h2",[this._v("Pruebas")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12 col-lg-2"},[e("h3",[this._v("Modo Test")]),this._v(" "),e("p",[this._v("Realiza pruebas en Modo Test.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12 col-lg-2"},[e("h3",[this._v("Modo Producción")]),this._v(" "),e("p",[this._v("Realiza pruebas en Modo Producción.")])])}],!1,null,null,null);e.default=v.exports},"F/Qi":function(t,e,s){"use strict";s("5sbD")},F05R:function(t,e,s){"use strict";var r={props:{showBreadCrumb:{default:!0,type:Boolean},title:String,parent:String,active:String}},a=(s("F/Qi"),s("KHd+")),n=Object(a.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.showBreadCrumb?s("nav",{staticClass:"d-lg-inline-block",attrs:{"aria-label":"breadcrumb"}},[s("ol",{staticClass:"breadcrumb p-0 m-0 breadcrumb-links bg-transparent"},[s("li",{staticClass:"breadcrumb-item"},[s("a",{attrs:{href:"/dashboard"}},[s("jam-pie-chart",{attrs:{height:"16",width:"16"}})],1)]),t._v(" "),t.parent?s("li",{staticClass:"breadcrumb-item"},[s("a",[t._v(t._s(t.parent))])]):t._e(),t._v(" "),t.active?s("li",{staticClass:"breadcrumb-item text-primary",attrs:{"aria-current":"page"}},[t._v(t._s(t.active))]):t._e()])]):t._e(),t._v(" "),s("h1",{staticClass:"h1 font-weight-bold mb-0"},[t._v(t._s(t.title))])])}),[],!1,null,"0286e577",null);e.a=n.exports},J3pF:function(t,e,s){"use strict";s("1jZt")},KsmT:function(t,e,s){(t.exports=s("I1BE")(!1)).push([t.i,'\n.breadcrumb-dark .breadcrumb-item + .breadcrumb-item[data-v-0286e577]::before {\r\n  color: #adb5bd;\n}\n.breadcrumb-item + .breadcrumb-item[data-v-0286e577]::before {\r\n  display: inline-block;\r\n  padding-right: 0.5rem;\r\n  content: "-";\r\n  color: #8898aa;\n}\n.bg-transparent[data-v-0286e577] {\r\n  background: transparent;\n}\r\n',""])},TVlQ:function(t,e,s){"use strict";var r={props:{text:String,classes:Array,requestServer:Boolean},methods:{click:function(){this.$emit("click")}}},a=(s("J3pF"),s("KHd+")),n=Object(a.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"btn",class:t.classes,attrs:{disabled:1==t.requestServer},on:{click:t.click}},[t.requestServer?s("span",[t._v("\n        Cargando \n        "),s("svg",{staticClass:"ml-1 loading-svg",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 40 40"}},[s("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[s("g",{attrs:{transform:"translate(1 1)","stroke-width":"3"}},[s("circle",{attrs:{"stroke-opacity":"1",cx:"0",cy:"0",r:"0"}}),t._v(" "),s("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18",transform:"rotate(83.9974 18 18)"}},[s("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"}})],1)])])])]):s("span",[t._v(t._s(t.text))])])}),[],!1,null,"7a0ec1bd",null);e.a=n.exports},uNoH:function(t,e,s){(t.exports=s("I1BE")(!1)).push([t.i,"\n.loading-svg[data-v-7a0ec1bd]{\r\n    fill: currentColor;\r\n    stroke: currentColor;\n}\r\n",""])}}]);