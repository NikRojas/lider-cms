(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"1jZt":function(t,e,s){var n=s("uNoH");"string"==typeof n&&(n=[[t.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(n,a);n.locals&&(t.exports=n.locals)},CkAj:function(t,e,s){"use strict";var n=s("0YuL"),a=s("TVlQ"),i={props:{open:Boolean,loadingGet:Boolean,element:String,loadingSubmit:Boolean},components:{Button:a.a,Skeleton:n.a},data:function(){return{requestSubmit:!1,requestGet:!1,inputDestroy:"",buttonDestroy:!0}},methods:{submit:function(){this.$emit("submit")},cancelCustom:function(){this.$emit("cancel")},restore:function(){this.requestSubmit=!1,this.requestGet=!1,this.inputDestroy="",this.buttonDestroy=!0}},watch:{open:function(t){0==t&&this.restore()},inputDestroy:function(t){t===t.toUpperCase()&&"ELIMINAR"===t?this.buttonDestroy=!1:this.buttonDestroy=!0}}},l=s("KHd+"),r=Object(l.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-modal",{attrs:{"no-close-on-esc":"","no-close-on-backdrop":"",centered:"","footer-class":"border-0 pt-0","body-class":"pt-0"},on:{close:t.cancelCustom},scopedSlots:t._u([{key:"modal-footer",fn:function(e){e.ok;return[s("Button",{directives:[{name:"show",rawName:"v-show",value:!t.loadingGet,expression:"!loadingGet"}],attrs:{classes:["btn-danger"],text:"Eliminar","request-server":t.loadingSubmit,disabled:t.buttonDestroy},on:{click:t.submit}}),t._v(" "),s("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:t.cancelCustom}},[t._v("Cancelar")])]}}]),model:{value:t.open,callback:function(e){t.open=e},expression:"open"}},[s("template",{slot:"modal-title"},[s("div",{staticClass:"text-primary h2"},[t._v("Eliminar "+t._s(t.element.charAt(0).toUpperCase()+t.element.slice(1)))])]),t._v(" "),s("template",{slot:"modal-header-close"},[s("button",{staticClass:"btn p-0 bg-transparent",attrs:{type:"button"},on:{click:t.cancelCustom}},[s("jam-close")],1)]),t._v(" "),t.loadingGet?s("div",[s("Skeleton"),t._v(" "),s("div",{staticClass:"w-25 mb-1"},[s("Skeleton")],1),t._v(" "),s("div",{staticClass:"w-75"},[s("Skeleton")],1)],1):s("div",[s("p",[t._v("Esta apunto de eliminar un "+t._s(t.element)+", una vez que realice esta acción no se puede deshacer")]),t._v(" "),s("p",{staticClass:"mb-2"},[t._v("\n      Escribe\n      "),s("b",[t._v("ELIMINAR")]),t._v(" para confirmar\n    ")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.inputDestroy,expression:"inputDestroy"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.inputDestroy},on:{input:function(e){e.target.composing||(t.inputDestroy=e.target.value)}}})])],2)}),[],!1,null,null,null);e.a=r.exports},FTHT:function(t,e,s){"use strict";var n={components:{Skeleton:s("0YuL").a}},a=s("KHd+"),i=Object(a.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"w-25 mb-2"},[s("Skeleton")],1),t._v(" "),s("div",{staticClass:"mb-2"},[s("Skeleton")],1),t._v(" "),s("div",{staticClass:"w-25 mb-2"},[s("Skeleton")],1),t._v(" "),s("div",{staticClass:"mb-2"},[s("Skeleton")],1),t._v(" "),s("div",{staticClass:"w-25 mb-2"},[s("Skeleton")],1),t._v(" "),s("div",{staticClass:"mb-2"},[s("Skeleton")],1),t._v(" "),s("div",{staticClass:"w-25 mb-2"},[s("Skeleton")],1),t._v(" "),s("div",{staticClass:"mb-2"},[s("Skeleton")],1),t._v(" "),s("div",{staticClass:"text-right"},[s("div",{staticClass:"w-25 ml-auto"},[s("Skeleton")],1)])])}),[],!1,null,null,null);e.a=i.exports},FvN8:function(t,e,s){"use strict";var n={props:{type:String,urlEs:{type:String,required:!1},urlEn:{type:String,required:!1},parentSlug:{type:String,required:!1},label:String,variable:String,errors:Object,valueEnParent:String,valueEsParent:String,slugEnParent:String,slugEsParent:String},data:function(){return{active:"es",value:{en:"",es:"",slug_es:"",slug_en:"",editBlock_es:!1,editBlock_en:!1,slugEdited_en:!1,slugEdited_es:!1},random:Math.ceil(10*Math.random())}},methods:{toggle:function(t){this.active=t},getSlug:function(){this.value["editBlock_"+this.active]=!this.value["editBlock_"+this.active],this.value["slugEdited_"+this.active]=!this.value["slugEdited_"+this.active]}},watch:{slugEnParent:{immediate:!0,handler:function(t){t&&(this.value.slug_en=t)}},slugEsParent:{immediate:!0,handler:function(t){t&&(this.value.slug_es=t)}},valueEnParent:{immediate:!0,handler:function(t){this.value.en=t}},valueEsParent:{immediate:!0,handler:function(t){this.value.es=t}},"value.en":function(t,e){this.value.slugEdited_en||(this.value.slug_en=t),this.$emit("update:valueEn",t)},"value.es":function(t,e){this.value.slugEdited_es||(this.value.slug_es=t),this.$emit("update:valueEs",t)},"value.slug_es":function(t,e){this.value.slug_es=Slug(t),this.$emit("update:slugEs",this.value.slug_es)},"value.slug_en":function(t,e){this.value.slug_en=Slug(t),this.$emit("update:slugEn",this.value.slug_en)}},computed:{countErrors:function(){if(Object.keys(this.errors).length){var t=0;for(var e in this.errors)e!=this.variable+"_en"&&e!=this.variable+"_es"||t++;return t}}}},a=s("KHd+"),i=Object(a.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"form-group"},[s("div",{staticClass:"d-flex"},[s("a",{staticClass:"btn btn-sm py-0 px-2 btn-icon mr-1",class:"es"==t.active?"btn-primary":"btn-outline-primary",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.toggle("es")}}},[s("span",{staticClass:"btn-inner--icon"},[s("gb-flag",{attrs:{code:"es",size:"small"}})],1),t._v(" "),s("span",{staticClass:"btn-inner--text"},[t._v("Español")])]),t._v(" "),s("a",{staticClass:"btn btn-sm py-0 px-2 btn-icon",class:"en"==t.active?"btn-primary":"btn-outline-primary",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.toggle("en")}}},[s("span",{staticClass:"btn-inner--icon"},[s("gb-flag",{attrs:{code:"gb",size:"small"}})],1),t._v(" "),s("span",{staticClass:"btn-inner--text"},[t._v("Inglés")])]),t._v(" "),t.countErrors?s("div",{staticClass:"d-inline-block ml-auto text-danger mt-1"},[t._v(t._s(t.countErrors)+" "+t._s(t.countErrors>1?"Errores":"Error"))]):t._e()]),t._v(" "),s("div",{staticClass:"mt-2"},[s("label",{staticClass:"font-weight-bold",attrs:{for:t.label+t.random}},[t._v(t._s(t.label)+":")])]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.value[t.active],expression:"value[ active ]"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.value[t.active]},on:{input:function(e){e.target.composing||t.$set(t.value,t.active,e.target.value)}}}),t._v(" "),s("div",{staticClass:"mt-3"},[s("small",[t._v(t._s("es"==t.active?t.urlEs:t.urlEn)+t._s(t.parentSlug?t.parentSlug+"/":""))]),t._v(" "),t.value["editBlock_"+t.active]?t._e():s("small",{staticClass:"bg-dark text-white",staticStyle:{"letter-spacing":"0.05rem"}},[t._v(t._s(t.value["slug_"+t.active]))]),t._v(" "),t.value["editBlock_"+t.active]?s("input",{directives:[{name:"model",rawName:"v-model",value:t.value["slug_"+t.active],expression:"value[ 'slug_'+active ]"}],staticClass:"form-control form-control-sm d-inline w-50",attrs:{type:"text"},domProps:{value:t.value["slug_"+t.active]},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.getSlug.apply(null,arguments))},input:function(e){e.target.composing||t.$set(t.value,"slug_"+t.active,e.target.value)}}}):t._e(),t._v(" "),!t.value["editBlock_"+t.active]&&t.value["slug_"+t.active]?s("button",{staticClass:"btn btn-inverse-info btn-sm ml-2",attrs:{type:"button"},on:{click:function(e){t.value["editBlock_"+t.active]=!t.value["editBlock_"+t.active]}}},[t._v("Editar "+t._s(t.type))]):t._e(),t._v(" "),t.value["editBlock_"+t.active]?s("button",{staticClass:"btn btn-inverse-info btn-sm ml-2",attrs:{type:"button"},on:{click:t.getSlug}},[t._v("Aceptar")]):t._e()]),t._v(" "),t._l(t.errors,(function(e,n){return s("div",{key:n},[n==t.variable+"_"+t.active?s("label",{staticClass:"text-danger text-sm mt-2 d-block"},[t._v(t._s(e[0]))]):t._e()])}))],2)}),[],!1,null,null,null);e.a=i.exports},J3pF:function(t,e,s){"use strict";s("1jZt")},TVlQ:function(t,e,s){"use strict";var n={props:{text:String,classes:Array,requestServer:Boolean},methods:{click:function(){this.$emit("click")}}},a=(s("J3pF"),s("KHd+")),i=Object(a.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"btn",class:t.classes,attrs:{disabled:1==t.requestServer},on:{click:t.click}},[t.requestServer?s("span",[t._v("\n        Cargando \n        "),s("svg",{staticClass:"ml-1 loading-svg",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 40 40"}},[s("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[s("g",{attrs:{transform:"translate(1 1)","stroke-width":"3"}},[s("circle",{attrs:{"stroke-opacity":"1",cx:"0",cy:"0",r:"0"}}),t._v(" "),s("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18",transform:"rotate(83.9974 18 18)"}},[s("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"}})],1)])])])]):s("span",[t._v(t._s(t.text))])])}),[],!1,null,"7a0ec1bd",null);e.a=i.exports},tYnb:function(t,e,s){"use strict";s.r(e);var n=s("TVlQ"),a=s("ZMUr"),i=s("F05R"),l=s("FvN8"),r=s("FTHT"),o=s("CkAj"),u={components:{BreadCrumb:i.a,DataTable:a.a,Button:n.a,InputSlug:l.a,SkeletonForm:r.a,Destroy:o.a},props:{routeGetAll:String,route:String,messageCantDelete:String},data:function(){return{elements:{},element:{name:"",sap_code:""},loadingGet:!1,title:"",elementsPerPage:10,errors:{},modalCreateUpdate:!1,modalDestroy:!1,requestSubmit:!1}},methods:{destroyConfirm:function(){var t=this;this.requestSubmit=!0,axios.delete(this.route+"/"+this.element.id).then((function(e){t.requestSubmit=!1,t.restore(),Swal.fire({title:e.data.title,text:e.data.message,type:"success",confirmButtonText:"OK",buttonsStyling:!1,customClass:{confirmButton:"btn btn-inverse-primary"}})})).catch((function(e){Swal.fire({title:e.response.data.title,text:e.response.data.message,type:"error",confirmButtonText:"OK",buttonsStyling:!1,customClass:{confirmButton:"btn btn-inverse-primary"}}),t.restoreEl()}))},restore:function(){this.errors={},this.element={name:"",sap_code:""},this.modalCreateUpdate=this.modalDestroy=!1,this.getElements(1,this.elementsPerPage)},editEl:function(t){this.title="Actualizar",this.modalCreateUpdate=!0,this.getEl(t)},submit:function(){var t,e,s=this;this.requestSubmit=!0,"Nuevo"==this.title?(t=this.route,e="post"):(t=this.route+"/"+this.element.id,e="put"),axios({method:e,url:t,data:this.element}).then((function(t){s.requestSubmit=!1,Swal.fire({title:t.data.title,text:t.data.message,type:"success",confirmButtonText:"OK",buttonsStyling:!1,customClass:{confirmButton:"btn btn-inverse-primary"}}),s.restore()})).catch((function(t){s.requestSubmit=!1,422!==t.response.status?(Swal.fire({title:t.response.data.title,text:t.response.data.message,type:"error",confirmButtonText:"OK",buttonsStyling:!1,customClass:{confirmButton:"btn btn-inverse-primary"}}),s.restoreEl()):s.errors=t.response.data.errors||{}}))},restoreEl:function(){this.errors={},this.element={name:"",sap_code:""},this.modalCreateUpdate=!1},deleteEl:function(t){this.modalDestroy=!0,this.getEl(t)},getElements:function(t,e){var s=this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=this.routeGetAll+"?page="+t+"&itemsPerPage="+e;n&&(a=a+"&q="+n),axios.get(a).then((function(t){s.elements=t.data})).catch((function(t){}))},getEl:function(t){var e=this;this.loadingGet=!0,axios.get(this.route+"/json/get/"+t).then((function(t){e.element=t.data,e.loadingGet=!1})).catch((function(t){}))},newEl:function(){this.title="Nuevo",this.modalCreateUpdate=!0}},created:function(){this.getElements(1,this.elementsPerPage)}},c=s("KHd+"),m=Object(c.a)(u,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"header pb-6"},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"header-body"},[s("div",{staticClass:"row align-items-center pt-0 pt-md-2 pb-4"},[s("div",{staticClass:"col-6 col-md-7"},[s("BreadCrumb",{attrs:{title:"Tipos Inmueble",parent:"Administración",active:"Tipos Inmueble"}})],1),t._v(" "),s("div",{staticClass:"col-6 col-md-5 text-right"},[s("a",{staticClass:"btn btn-icon btn-inverse-primary",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.newEl.apply(null,arguments)}}},[s("span",{staticClass:"btn-inner--icon"},[s("jam-magic",{staticClass:"current-color"})],1),t._v(" "),s("span",{staticClass:"btn-inner--text"},[t._v("Nuevo Tipo de Inmueble")])])])])])])]),t._v(" "),s("div",{staticClass:"container-fluid mt--6"},[s("DataTable",{attrs:{object:t.elements,placeholder:"Nombre","button-update":!0,"button-read":!1,"button-delete":!0,"entries-prop":t.elementsPerPage,messageCantDelete:t.messageCantDelete},on:{get:t.getElements,delete:t.deleteEl,update:t.editEl,"update:entriesProp":function(e){t.elementsPerPage=e},"update:entries-prop":function(e){t.elementsPerPage=e}}})],1),t._v(" "),s("b-modal",{attrs:{"no-close-on-esc":"","no-close-on-backdrop":"",centered:"","footer-class":"border-0 pt-0","body-class":"pt-0"},on:{close:t.restoreEl},scopedSlots:t._u([{key:"modal-footer",fn:function(e){e.ok;return[s("Button",{attrs:{classes:["btn-inverse-primary"],text:"Nuevo"==t.title?"Crear":"Actualizar","request-server":t.requestSubmit},on:{click:t.submit}}),t._v(" "),s("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:t.restoreEl}},[t._v("Cancelar")])]}}]),model:{value:t.modalCreateUpdate,callback:function(e){t.modalCreateUpdate=e},expression:"modalCreateUpdate"}},[s("template",{slot:"modal-title"},[s("div",{staticClass:"text-primary h2"},[t._v(t._s(t.title)+" Tipo de Inmueble")])]),t._v(" "),s("template",{slot:"modal-header-close"},[s("button",{staticClass:"btn p-0 bg-transparent",attrs:{type:"button"},on:{click:t.restoreEl}},[s("jam-close")],1)]),t._v(" "),t.loadingGet?s("div",[s("SkeletonForm")],1):s("div",[s("form",{on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"font-weight-bold",attrs:{for:"name"}},[t._v("Nombre")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.element.name,expression:"element.name"}],staticClass:"form-control",attrs:{type:"text",id:"name"},domProps:{value:t.element.name},on:{input:function(e){e.target.composing||t.$set(t.element,"name",e.target.value)}}}),t._v(" "),t.errors&&t.errors.name?s("label",{staticClass:"mt-2 text-danger text-sm",attrs:{for:"name"}},[t._v(t._s(t.errors.name[0]))]):t._e()])])])])])],2),t._v(" "),s("destroy",{attrs:{element:"tipo de Inmueble",open:t.modalDestroy,"loading-get":t.loadingGet,"loading-submit":t.requestSubmit},on:{cancel:t.restoreEl,submit:t.destroyConfirm}})],1)}),[],!1,null,null,null);e.default=m.exports},uNoH:function(t,e,s){(t.exports=s("I1BE")(!1)).push([t.i,"\n.loading-svg[data-v-7a0ec1bd]{\r\n    fill: currentColor;\r\n    stroke: currentColor;\n}\r\n",""])}}]);