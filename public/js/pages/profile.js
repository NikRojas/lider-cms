(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{"1jZt":function(t,e,s){var r=s("uNoH");"string"==typeof r&&(r=[[t.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(r,a);r.locals&&(t.exports=r.locals)},GgfX:function(t,e,s){"use strict";s.r(e);var r=s("TVlQ"),a=s("ksP6"),i=s.n(a),o=s("0YuL");function n(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var l={props:{routeLogin:{type:String,required:!0},routeLogout:{type:String,required:!0}},components:{Skeleton:o.a,Button:r.a,vueDropzone:i.a},data:function(){var t;return n(t={errors:{},startBlock:!0,editEmail:!1,editPassword:!1,user:{rel_role:{name:""},name:"",username:"",email:"",current_password:"",new_password:"",new_password_confirmation:""},dropzoneOptions:{url:"/",maxFiles:1,acceptedFiles:"image/png,image/jpeg,image/jpg,image/svg+xml",autoProcessQueue:!1,thumbnailWidth:150,addRemoveLinks:!0,dictRemoveFile:"Remover"},requestLoading:!1},"startBlock",!0),n(t,"passwordBlock",!1),n(t,"requestServer",!1),t},methods:{getUser:function(){var t=this;this.requestLoading=!0,axios.get("json/profile").then((function(e){t.user=e.data,t.requestLoading=!1})).catch((function(t){}))},restorePage:function(){this.errors={},this.startBlock=!0,this.editPassword=this.editEmail=this.passwordBlock=this.requestServer=!1,this.user={rel_role:{name:""},name:"",username:"",email:"",current_password:"",new_password:"",new_password_confirmation:""},this.getUser()},toggleEmail:function(){this.editEmail=!0},updateProfile:function(){var t=this;if(this.requestServer=!0,this.editEmail){var e=new FormData;e.append("id",this.user.id),this.user.username?e.append("username",this.user.username):e.append("username",""),this.user.email?e.append("email",this.user.email):e.append("email",""),this.user.name?e.append("name",this.user.name):e.append("name",""),this.$refs.ref_image.dropzone.files[0]&&e.append("avatar",this.$refs.ref_image.dropzone.files[0]),this.user.eliminar_imagen&&e.append("eliminar_imagen",this.user.eliminar_imagen),e.append("_method","put"),axios.post("profile",e).then((function(e){t.requestServer=!1,t.restorePage(),Swal.fire({title:e.data.title,text:e.data.message,type:"success",confirmButtonText:"OK",buttonsStyling:!1,customClass:{confirmButton:"btn btn-inverse-primary"}})})).catch((function(e){t.requestServer=!1,422!==e.response.status?(t.restorePage(),Swal.fire({title:e.response.data.title,text:e.response.data.message,type:"error",confirmButtonText:"OK",buttonsStyling:!1,customClass:{confirmButton:"btn btn-inverse-primary"}})):t.errors=e.response.data.errors||{}}))}this.editPassword&&axios.put("change-password",this.user).then((function(e){t.requestServer=!1,t.restorePage(),Swal.fire({title:e.data.title,text:e.data.message,type:"success",confirmButtonText:"OK",buttonsStyling:!1,customClass:{confirmButton:"btn btn-inverse-primary"}}),setTimeout((function(){return axios.post(t.routeLogout).then((function(e){document.location.href=t.routeLogin})).catch((function(t){}))}),5e3)})).catch((function(e){t.requestServer=!1,422!==e.response.status?(t.restorePage(),Swal.fire({title:e.response.data.title,text:e.response.data.message,type:"error",confirmButtonText:"OK",buttonsStyling:!1,customClass:{confirmButton:"btn btn-inverse-primary"}})):t.errors=e.response.data.errors||{}}))},cambiarContrasena:function(){this.startBlock=!1,this.passwordBlock=!0,this.editPassword=!0}},created:function(){this.getUser()}},c=s("KHd+"),d=Object(c.a)(l,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"container-fluid mt-0 mt-md-3"},[s("div",{staticClass:"row"},[t._m(0),t._v(" "),s("div",{staticClass:"col-lg-8 mx-auto"},[s("div",{staticClass:"card mb-4"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.updateProfile.apply(null,arguments)}}},[s("div",{directives:[{name:"show",rawName:"v-show",value:!t.requestLoading&&t.startBlock,expression:"!requestLoading && startBlock"}],staticClass:"card-body"},[t.editEmail||t.editPassword?t._e():s("div",{staticClass:"rounded-circle mx-auto d-flex avatar avatar-lg  text-center mb-2 bg-default",staticStyle:{height:"120px",width:"120px"}},[t.user.avatar?s("img",{staticClass:"shadow rounded-circle object-fit--cover",attrs:{src:"/files/img/users/"+t.user.avatar,alt:"Perfil"}}):s("span",{staticStyle:{"font-size":"54px"}},[t._v(t._s(t.user.avatar_initials))])]),t._v(" "),t.editEmail&&!t.editPassword?s("div",{staticClass:"text-center mb-3"},[s("span",{staticClass:"font-weight-bold mb-2 d-block"},[t._v("Avatar")]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg"}),t._v(" "),t.user.avatar?s("div",{staticClass:"col-12 col-lg-3 mb-3 mb-lg-0"},[s("img",{staticClass:"rounded-circle object-fit--cover d-block mx-auto mb-3",attrs:{alt:"Colaborador",height:"120",width:"120",src:"/files/img/users/"+t.user.avatar}}),t._v(" "),s("a",{staticClass:"btn btn-inverse-danger btn-sm",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),function(){t.user.avatar="",t.user.eliminar_imagen=!0}.apply(null,arguments)}}},[t._v("Eliminar Avatar Actual")])]):t._e(),t._v(" "),s("div",{staticClass:"col-12 col-lg-3"},[s("vue-dropzone",{ref:"ref_image",staticClass:"text-center",attrs:{id:"id_image",options:t.dropzoneOptions,duplicateCheck:!0,useCustomSlot:!0},on:{"vdropzone-file-added":function(e){return t.$validateImageDropzone(e,t.$refs.ref_image.dropzone,1,1e5,"100kb")}}},[s("div",{staticClass:"dropzone-custom-content"},[s("h5",{staticClass:"dropzone-custom-title text-primary"},[t._v("Suelte el archivo aquí o haga click para cargarlo.")])])])],1),t._v(" "),s("div",{staticClass:"col-lg"})])]):t._e(),t._v(" "),s("div",{staticClass:"mb-0"},[t.editEmail||t.editPassword?t._e():s("h2",{staticClass:" text-center mb-3"},[t._v(t._s(t.user.name))]),t._v(" "),t.editEmail&&!t.editPassword?s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"form-group"},[s("span",{staticClass:"font-weight-bold"},[t._v("Nombre:")]),t._v(" "),t.editEmail&&!t.editPassword?s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.name,expression:"user.name"}],staticClass:"d-inline-block form-control  w-100",attrs:{type:"text"},domProps:{value:t.user.name},on:{input:function(e){e.target.composing||t.$set(t.user,"name",e.target.value)}}}):t._e(),t._v(" "),t.errors&&t.errors.nombre?s("label",{staticClass:"d-block text-sm mt-2 mb-0 text-danger"},[t._v(t._s(t.errors.nombre[0]))]):t._e()])])]):t._e()]),t._v(" "),s("div",[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("span",{staticClass:"font-weight-bold"},[t._v("Email:")]),t._v(" "),t.editEmail||t.editPassword?t._e():s("span",{staticClass:" mb-4 d-block"},[t._v(t._s(t.user.email))]),t._v(" "),t.editEmail&&!t.editPassword?s("div",{staticClass:"form-group"},[t.editEmail&&!t.editPassword?s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"mt-1  d-inline-block form-control w-100",attrs:{type:"text"},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}}):t._e(),t._v(" "),t.errors&&t.errors.email?s("label",{staticClass:"d-block text-sm mt-2 mb-0 text-danger"},[t._v(t._s(t.errors.email[0]))]):t._e()]):t._e()])])])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.passwordBlock,expression:"passwordBlock"}],staticClass:"card-body"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"font-weight-bold",attrs:{for:"id_current_password"}},[t._v("Contraseña Actual:")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.current_password,expression:"user.current_password"}],staticClass:"form-control ",attrs:{type:"password",id:"id_current_password"},domProps:{value:t.user.current_password},on:{input:function(e){e.target.composing||t.$set(t.user,"current_password",e.target.value)}}}),t._v(" "),t.errors&&t.errors.current_password?s("label",{staticClass:"mt-2 mb-0 d-block text-sm text-danger",attrs:{for:"id_current_password"}},[t._v(t._s(t.errors.current_password[0]))]):t._e()])]),t._v(" "),s("div",{staticClass:"col-12"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"font-weight-bold",attrs:{for:"id_new_password"}},[t._v("Contraseña Nueva:")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.new_password,expression:"user.new_password"}],staticClass:"form-control ",attrs:{type:"password",id:"id_new_password"},domProps:{value:t.user.new_password},on:{input:function(e){e.target.composing||t.$set(t.user,"new_password",e.target.value)}}}),t._v(" "),t.errors&&t.errors.new_password?s("label",{staticClass:"mt-2 mb-0 d-block text-sm text-danger",attrs:{for:"id_new_password"}},[t._v(t._s(t.errors.new_password[0]))]):t._e()])]),t._v(" "),s("div",{staticClass:"col-12"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"font-weight-bold",attrs:{for:"id_confirmar_contrasena"}},[t._v("Confirmar Nueva Contraseña:")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.new_password_confirmation,expression:"user.new_password_confirmation"}],staticClass:"form-control ",attrs:{type:"password",id:"id_confirmar_contrasena"},domProps:{value:t.user.new_password_confirmation},on:{input:function(e){e.target.composing||t.$set(t.user,"new_password_confirmation",e.target.value)}}}),t._v(" "),t.errors&&t.errors.new_password_confirmation?s("label",{staticClass:"mt-2 mb-0 d-block text-sm text-danger",attrs:{for:"id_confirmar_contrasena"}},[t._v(t._s(t.errors.new_password_confirmation[0]))]):t._e()])])])]),t._v(" "),t.requestLoading&&t.startBlock?s("div",{staticClass:"card-body"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 text-center mb-4"},[s("Skeleton",{attrs:{circle:"",height:"120px",width:"120px"}})],1),t._v(" "),s("div",{staticClass:"col-6 mb-4"},[s("Skeleton")],1),t._v(" "),s("div",{staticClass:"col-6 mb-4"},[s("Skeleton")],1),t._v(" "),s("div",{staticClass:"col-6 mb-4"},[s("Skeleton")],1),t._v(" "),s("div",{staticClass:"col-6"},[s("Skeleton")],1)])]):t._e(),t._v(" "),s("div",{staticClass:"card-footer border-0 pt-0",class:t.editEmail||t.editPassword?"text-right":"text-center"},[t.editEmail||t.editPassword?t._e():s("a",{staticClass:"btn btn-inverse-info mr-2",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.toggleEmail.apply(null,arguments)}}},[t._v("Editar")]),t._v(" "),t.editPassword||t.editEmail?t._e():s("a",{staticClass:"btn btn-inverse-dark",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.cambiarContrasena.apply(null,arguments)}}},[t._v("Cambiar Contraseña")]),t._v(" "),t.editPassword||t.editEmail?s("Button",{attrs:{text:"Actualizar",classes:["btn-inverse-primary","mr-2"],"request-server":t.requestServer}}):t._e(),t._v(" "),t.editPassword||t.editEmail?s("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.restorePage.apply(null,arguments)}}},[t._v("Cancelar")]):t._e()],1)])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-lg-12"},[e("h1",{staticClass:"h1 mb-4"},[this._v("Mi Perfil")])])}],!1,null,null,null);e.default=d.exports},J3pF:function(t,e,s){"use strict";s("1jZt")},TVlQ:function(t,e,s){"use strict";var r={props:{text:String,classes:Array,requestServer:Boolean},methods:{click:function(){this.$emit("click")}}},a=(s("J3pF"),s("KHd+")),i=Object(a.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"btn",class:t.classes,attrs:{disabled:1==t.requestServer},on:{click:t.click}},[t.requestServer?s("span",[t._v("\n        Cargando \n        "),s("svg",{staticClass:"ml-1 loading-svg",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 40 40"}},[s("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[s("g",{attrs:{transform:"translate(1 1)","stroke-width":"3"}},[s("circle",{attrs:{"stroke-opacity":"1",cx:"0",cy:"0",r:"0"}}),t._v(" "),s("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18",transform:"rotate(83.9974 18 18)"}},[s("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"}})],1)])])])]):s("span",[t._v(t._s(t.text))])])}),[],!1,null,"7a0ec1bd",null);e.a=i.exports},uNoH:function(t,e,s){(t.exports=s("I1BE")(!1)).push([t.i,"\n.loading-svg[data-v-7a0ec1bd]{\r\n    fill: currentColor;\r\n    stroke: currentColor;\n}\r\n",""])}}]);