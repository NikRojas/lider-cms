(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"1jZt":function(t,e,n){var s=n("uNoH");"string"==typeof s&&(s=[[t.i,s,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(s,o);s.locals&&(t.exports=s.locals)},CkAj:function(t,e,n){"use strict";var s=n("0YuL"),o=n("TVlQ"),a={props:{open:Boolean,loadingGet:Boolean,element:String,loadingSubmit:Boolean},components:{Button:o.a,Skeleton:s.a},data:function(){return{requestSubmit:!1,requestGet:!1,inputDestroy:"",buttonDestroy:!0}},methods:{submit:function(){this.$emit("submit")},cancelCustom:function(){this.$emit("cancel")},restore:function(){this.requestSubmit=!1,this.requestGet=!1,this.inputDestroy="",this.buttonDestroy=!0}},watch:{open:function(t){0==t&&this.restore()},inputDestroy:function(t){t===t.toUpperCase()&&"ELIMINAR"===t?this.buttonDestroy=!1:this.buttonDestroy=!0}}},r=n("KHd+"),i=Object(r.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-modal",{attrs:{"no-close-on-esc":"","no-close-on-backdrop":"",centered:"","footer-class":"border-0 pt-0","body-class":"pt-0"},on:{close:t.cancelCustom},scopedSlots:t._u([{key:"modal-footer",fn:function(e){e.ok;return[n("Button",{directives:[{name:"show",rawName:"v-show",value:!t.loadingGet,expression:"!loadingGet"}],attrs:{classes:["btn-danger"],text:"Eliminar","request-server":t.loadingSubmit,disabled:t.buttonDestroy},on:{click:t.submit}}),t._v(" "),n("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:t.cancelCustom}},[t._v("Cancelar")])]}}]),model:{value:t.open,callback:function(e){t.open=e},expression:"open"}},[n("template",{slot:"modal-title"},[n("div",{staticClass:"text-primary h2"},[t._v("Eliminar "+t._s(t.element.charAt(0).toUpperCase()+t.element.slice(1)))])]),t._v(" "),n("template",{slot:"modal-header-close"},[n("button",{staticClass:"btn p-0 bg-transparent",attrs:{type:"button"},on:{click:t.cancelCustom}},[n("jam-close")],1)]),t._v(" "),t.loadingGet?n("div",[n("Skeleton"),t._v(" "),n("div",{staticClass:"w-25 mb-1"},[n("Skeleton")],1),t._v(" "),n("div",{staticClass:"w-75"},[n("Skeleton")],1)],1):n("div",[n("p",[t._v("Esta apunto de eliminar un "+t._s(t.element)+", una vez que realice esta acción no se puede deshacer")]),t._v(" "),n("p",{staticClass:"mb-2"},[t._v("\n      Escribe\n      "),n("b",[t._v("ELIMINAR")]),t._v(" para confirmar\n    ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputDestroy,expression:"inputDestroy"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.inputDestroy},on:{input:function(e){e.target.composing||(t.inputDestroy=e.target.value)}}})])],2)}),[],!1,null,null,null);e.a=i.exports},J3pF:function(t,e,n){"use strict";n("1jZt")},TVlQ:function(t,e,n){"use strict";var s={props:{text:String,classes:Array,requestServer:Boolean},methods:{click:function(){this.$emit("click")}}},o=(n("J3pF"),n("KHd+")),a=Object(o.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"btn",class:t.classes,attrs:{disabled:1==t.requestServer},on:{click:t.click}},[t.requestServer?n("span",[t._v("\n        Cargando \n        "),n("svg",{staticClass:"ml-1 loading-svg",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 40 40"}},[n("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[n("g",{attrs:{transform:"translate(1 1)","stroke-width":"3"}},[n("circle",{attrs:{"stroke-opacity":"1",cx:"0",cy:"0",r:"0"}}),t._v(" "),n("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18",transform:"rotate(83.9974 18 18)"}},[n("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"}})],1)])])])]):n("span",[t._v(t._s(t.text))])])}),[],!1,null,"7a0ec1bd",null);e.a=a.exports},hv55:function(t,e,n){"use strict";n.r(e);var s=n("F05R"),o=n("0YuL"),a=n("/hKJ"),r=n("ZMUr"),i=n("CkAj");function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c={components:{BreadCrumb:s.a,Skeleton:o.a,NoData:a.a,DataTable:r.a,Destroy:i.a},props:{routeCreate:String,route:String,appUrl:String,routeGetAll:String,routeOrder:String,messageOrder:String,imagesUrl:String},data:function(){var t;return l(t={elements:{},project:{},element:{},modalDestroy:!1,requestSubmit:!1,elementsPerPage:10},"modalDestroy",!1),l(t,"loadingGetAll",!1),l(t,"loadingGet",!1),t},methods:{showEl:function(t){window.location.href=this.route+"/"+t},getEls:function(t,e){var n=this,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.loadingGetAll=!0;var o=this.routeGetAll+"?page="+t+"&itemsPerPage="+e;s&&(o=o+"&q="+s),axios.get(o,{params:{}}).then((function(t){n.elements=t.data,n.loadingGetAll=!1})).catch((function(t){}))},restoreEl:function(){this.modalCreateUpdate=this.modalDestroy=!1,this.element={}},restore:function(){this.element={},this.requestSubmit=this.modalDestroy=!1,this.getEls(1,this.elementsPerPage)},deleteEl:function(t){this.modalDestroy=!0,this.getEl(t)},getEl:function(t){var e=this;this.loadingGet=!0,axios.get(this.route+"/json/get/"+t).then((function(t){e.element=t.data,e.loadingGet=!1})).catch((function(t){}))},editEl:function(t){window.location.href=this.route+"/editar/"+t},destroyConfirm:function(){var t=this;this.requestSubmit=!0,axios.delete(this.route+"/"+this.element.slug).then((function(e){t.requestSubmit=!1,t.restore(),Swal.fire({title:e.data.title,text:e.data.message,type:"success",confirmButtonText:"OK",buttonsStyling:!1,customClass:{confirmButton:"btn btn-inverse-primary"}})})).catch((function(e){Swal.fire({title:e.response.data.title,text:e.response.data.message,type:"error",confirmButtonText:"OK",buttonsStyling:!1,customClass:{confirmButton:"btn btn-inverse-primary"}}),t.restoreEl()}))}},created:function(){this.getEls(1,this.elementsPerPage)}},u=n("KHd+"),d=Object(u.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"header pb-6"},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"header-body"},[n("div",{staticClass:"row align-items-center pt-0 pt-md-2 pb-4"},[n("div",{staticClass:"col-6 col-md-7"},[n("BreadCrumb",{attrs:{title:"Combos",parent:"",active:"Combos"}})],1),t._v(" "),n("div",{staticClass:"col-6 col-md-5 text-right"},[n("a",{staticClass:"btn btn-icon btn-inverse-primary",attrs:{href:t.routeCreate}},[n("span",{staticClass:"btn-inner--icon"},[n("jam-tag",{staticClass:"current-color"})],1),t._v(" "),n("span",{staticClass:"btn-inner--text"},[t._v("Nuevo Combo")])])])])])])]),t._v(" "),n("div",{staticClass:"container-fluid mt--6"},[n("DataTable",{attrs:{object:t.elements,placeholder:"Descripción","button-update":!0,"button-read":!1,"button-delete":!0,"loading-prop":t.loadingGetAll,"entries-prop":t.elementsPerPage,messageCantDelete:"No se puede eliminar debido a que ya ha sido adquirido por un cliente"},on:{read:t.showEl,update:t.editEl,get:t.getEls,delete:t.deleteEl,"update:entriesProp":function(e){t.elementsPerPage=e},"update:entries-prop":function(e){t.elementsPerPage=e}}})],1),t._v(" "),n("destroy",{attrs:{element:"combo",open:t.modalDestroy,"loading-get":t.loadingGet,"loading-submit":t.requestSubmit},on:{cancel:t.restoreEl,submit:t.destroyConfirm}})],1)}),[],!1,null,null,null);e.default=d.exports},uNoH:function(t,e,n){(t.exports=n("I1BE")(!1)).push([t.i,"\n.loading-svg[data-v-7a0ec1bd]{\r\n    fill: currentColor;\r\n    stroke: currentColor;\n}\r\n",""])}}]);