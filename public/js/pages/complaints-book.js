(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"1jZt":function(t,e,a){var s=a("uNoH");"string"==typeof s&&(s=[[t.i,s,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(s,l);s.locals&&(t.exports=s.locals)},CkAj:function(t,e,a){"use strict";var s=a("0YuL"),l=a("TVlQ"),o={props:{open:Boolean,loadingGet:Boolean,element:String,loadingSubmit:Boolean},components:{Button:l.a,Skeleton:s.a},data:function(){return{requestSubmit:!1,requestGet:!1,inputDestroy:"",buttonDestroy:!0}},methods:{submit:function(){this.$emit("submit")},cancelCustom:function(){this.$emit("cancel")},restore:function(){this.requestSubmit=!1,this.requestGet=!1,this.inputDestroy="",this.buttonDestroy=!0}},watch:{open:function(t){0==t&&this.restore()},inputDestroy:function(t){t===t.toUpperCase()&&"ELIMINAR"===t?this.buttonDestroy=!1:this.buttonDestroy=!0}}},i=a("KHd+"),n=Object(i.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-modal",{attrs:{"no-close-on-esc":"","no-close-on-backdrop":"",centered:"","footer-class":"border-0 pt-0","body-class":"pt-0"},on:{close:t.cancelCustom},scopedSlots:t._u([{key:"modal-footer",fn:function(e){e.ok;return[a("Button",{directives:[{name:"show",rawName:"v-show",value:!t.loadingGet,expression:"!loadingGet"}],attrs:{classes:["btn-danger"],text:"Eliminar","request-server":t.loadingSubmit,disabled:t.buttonDestroy},on:{click:t.submit}}),t._v(" "),a("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:t.cancelCustom}},[t._v("Cancelar")])]}}]),model:{value:t.open,callback:function(e){t.open=e},expression:"open"}},[a("template",{slot:"modal-title"},[a("div",{staticClass:"text-primary h2"},[t._v("Eliminar "+t._s(t.element.charAt(0).toUpperCase()+t.element.slice(1)))])]),t._v(" "),a("template",{slot:"modal-header-close"},[a("button",{staticClass:"btn p-0 bg-transparent",attrs:{type:"button"},on:{click:t.cancelCustom}},[a("jam-close")],1)]),t._v(" "),t.loadingGet?a("div",[a("Skeleton"),t._v(" "),a("div",{staticClass:"w-25 mb-1"},[a("Skeleton")],1),t._v(" "),a("div",{staticClass:"w-75"},[a("Skeleton")],1)],1):a("div",[a("p",[t._v("Esta apunto de eliminar un "+t._s(t.element)+", una vez que realice esta acción no se puede deshacer")]),t._v(" "),a("p",{staticClass:"mb-2"},[t._v("\n      Escribe\n      "),a("b",[t._v("ELIMINAR")]),t._v(" para confirmar\n    ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.inputDestroy,expression:"inputDestroy"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.inputDestroy},on:{input:function(e){e.target.composing||(t.inputDestroy=e.target.value)}}})])],2)}),[],!1,null,null,null);e.a=n.exports},J3pF:function(t,e,a){"use strict";a("1jZt")},NUuF:function(t,e,a){"use strict";var s=a("6nZA"),l={props:{activeParent:Object,removeParent:String},components:{DatePicker:a.n(s).a},data:function(){return{range:null,filters:[{text:"Cualquier Fecha",value:"all"},{text:"Hoy",value:"today"},{text:"Últimos 7 días",value:"7"},{text:"Últimos 30 días",value:"30"},{text:"Últimos 90 días",value:"90"},{text:"Este Año",value:"this_year"}],active:{text:"Cualquier Fecha",value:"all"}}},methods:{handleFilterRange:function(){var t=this;if(!this.range[0])return this.removeParent?this.active={text:"Hoy",value:"today"}:this.active={text:"Cualquier Fecha",value:"all"},this.handleFilter(this.active),!1;setTimeout((function(){t.active={text:t.$refs.datepicker.text,value:"range"}}),50),this.$refs.dropdown.hide(!0)},handleFilter:function(t){this.range=[],this.active=t,this.$refs.dropdown.hide(!0)}},watch:{activeParent:{immediate:!0,handler:function(t){t&&(this.active=t)}},removeParent:{immediate:!0,handler:function(t){t&&(this.filters=this.filters.filter((function(e){return e.value!=t})))}},active:function(t,e){this.$emit("update:active",t),this.$emit("get")},range:function(t,e){this.$emit("update:range",t)}}},o=a("KHd+"),i=Object(o.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("b-dropdown",{ref:"dropdown",attrs:{left:"",id:"dropdown-text","menu-class":["border","shadow-none"],variant:"all"==t.active.value?"inverse-light":"inverse-primary","toggle-class":[]},scopedSlots:t._u([{key:"button-content",fn:function(){return[a("jam-calendar",{staticClass:"current-color",staticStyle:{"margin-top":"-4px"},attrs:{height:"18px",width:"18px"}}),t._v(" "),a("span",{},[t._v(t._s(t.active.text))])]},proxy:!0}])},[t._v(" "),a("b-dropdown-text",{staticClass:"px-2",staticStyle:{width:"16rem"},attrs:{tag:"div"}},[t._l(t.filters,(function(e){return a("button",{key:e.value,staticClass:"btn mb-1 btn-sm btn-block",class:t.active.value==e.value?"btn-primary":"btn-inverse-primary",on:{click:function(a){return a.preventDefault(),t.handleFilter(e)}}},[t._v(t._s(e.text))])})),t._v(" "),a("date-picker",{ref:"datepicker",attrs:{placeholder:"Personalizado",shortcuts:[],lang:"es","input-class":"form-control mt-1",format:"D MMM YYYY","range-separator":"-",width:"100%",range:""},on:{change:t.handleFilterRange},model:{value:t.range,callback:function(e){t.range=e},expression:"range"}},[a("jam-calendar",{staticClass:"current-color mt-2",attrs:{slot:"calendar-icon",height:"18",width:"18"},slot:"calendar-icon"})],1)],2)],1)],1)}),[],!1,null,null,null);e.a=i.exports},TVlQ:function(t,e,a){"use strict";var s={props:{text:String,classes:Array,requestServer:Boolean},methods:{click:function(){this.$emit("click")}}},l=(a("J3pF"),a("KHd+")),o=Object(l.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"btn",class:t.classes,attrs:{disabled:1==t.requestServer},on:{click:t.click}},[t.requestServer?a("span",[t._v("\n        Cargando \n        "),a("svg",{staticClass:"ml-1 loading-svg",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 40 40"}},[a("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[a("g",{attrs:{transform:"translate(1 1)","stroke-width":"3"}},[a("circle",{attrs:{"stroke-opacity":"1",cx:"0",cy:"0",r:"0"}}),t._v(" "),a("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18",transform:"rotate(83.9974 18 18)"}},[a("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"}})],1)])])])]):a("span",[t._v(t._s(t.text))])])}),[],!1,null,"7a0ec1bd",null);e.a=o.exports},fXGP:function(t,e,a){"use strict";a.r(e);var s=a("NUuF"),l=a("ZMUr"),o=a("F05R"),i=a("CkAj"),n=a("0YuL");function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){d(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var u={props:{elementParent:Object,imagesUrl:String,routeReturn:String,routeGetAll:String,route:String},data:function(){return{project:{},elements:{},filterDate:{active:{},range:null},element:{document_type_rel:{},claim_type_rel:{},good_contracted_rel:{},ubigeo_rel:{}},elementsPerPage:10,modalShow:!1,modalDestroy:!1,loadingGetAll:!1,loadingGet:!1,requestSubmit:!1}},components:{Skeleton:n.a,BreadCrumb:o.a,DataTable:l.a,Destroy:i.a,FilterDateRange:s.a},methods:{destroyConfirm:function(){var t=this;this.requestSubmit=!0,axios.delete(this.route+"/"+this.element.id).then((function(e){t.requestSubmit=!1,t.restore(),Swal.fire({title:e.data.title,text:e.data.message,type:"success",confirmButtonText:"OK",buttonsStyling:!1,customClass:{confirmButton:"btn btn-inverse-primary"}})})).catch((function(e){Swal.fire({title:e.response.data.title,text:e.response.data.message,type:"error",confirmButtonText:"OK",buttonsStyling:!1,customClass:{confirmButton:"btn btn-inverse-primary"}}),t.restoreEl()}))},restoreEl:function(){this.element={document_type_rel:{},claim_type_rel:{},ubigeo_rel:{},good_contracted_rel:{}},this.modalDestroy=this.modalShow=!1},showEl:function(t){this.modalShow=!0,this.getEl(t)},deleteEl:function(t){this.modalDestroy=!0,this.getEl(t)},getEls:function(t,e){var a=this,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.loadingGetAll=!0;var l=this.routeGetAll+"?page="+t+"&itemsPerPage="+e;s&&(l=l+"&q="+s),axios.get(l,{params:c({date:this.filterDate.active.value},this.filterDate.range?{range:this.filterDate.range}:{})}).then((function(t){a.elements=t.data,a.loadingGetAll=!1})).catch((function(t){}))},restore:function(){this.elements={},this.element={document_type_rel:{},claim_type_rel:{},good_contracted_rel:{},ubigeo_rel:{}},this.modalDestroy=this.modalShow=!1,this.getEls(1,this.elementsPerPage)},getEl:function(t){var e=this;this.loadingGet=!0,axios.get(this.route+"/json/get/"+t).then((function(t){e.element=t.data,e.loadingGet=!1})).catch((function(t){}))}},created:function(){this.getEls(1,this.elementsPerPage)}},v=a("KHd+"),m=Object(v.a)(u,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"header pb-6"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"header-body"},[a("div",{staticClass:"row align-items-center pt-0 pt-md-2 pb-4"},[a("div",{staticClass:"col-12 col-lg-7"},[a("BreadCrumb",{attrs:{title:"Libro de Reclamaciones",parent:"",active:"Libro de Reclamaciones"}})],1)])])])]),t._v(" "),a("div",{staticClass:"container-fluid mt--6"},[a("DataTable",{attrs:{object:t.elements,placeholder:"Nombre, Apellido, Número Documento, Código de Reclamo","button-update":!1,"button-read":!0,"button-delete":!0,"button-disable":!1,"loading-prop":t.loadingGetAll,"entries-prop":t.elementsPerPage},on:{get:t.getEls,read:t.showEl,delete:t.deleteEl,"update:entriesProp":function(e){t.elementsPerPage=e},"update:entries-prop":function(e){t.elementsPerPage=e}}},[a("template",{slot:"filters"},[a("div",{staticClass:"mb-2"},[a("FilterDateRange",{attrs:{active:t.filterDate.active,range:t.filterDate.range},on:{"update:active":function(e){return t.$set(t.filterDate,"active",e)},"update:range":function(e){return t.$set(t.filterDate,"range",e)},get:function(e){return t.getEls(1,t.elementsPerPage)}}})],1)])],2)],1),t._v(" "),a("destroy",{attrs:{element:"Lead",open:t.modalDestroy,"loading-get":t.loadingGet,"loading-submit":t.requestSubmit},on:{cancel:t.restoreEl,submit:t.destroyConfirm}}),t._v(" "),a("b-modal",{attrs:{"no-close-on-esc":"","no-close-on-backdrop":"",centered:"",size:"lg","footer-class":"border-0 pt-0","body-class":"pt-0"},on:{close:t.restoreEl},scopedSlots:t._u([{key:"modal-footer",fn:function(e){e.ok;return[a("button",{staticClass:"btn btn-inverse-primary",attrs:{type:"button"},on:{click:t.restoreEl}},[t._v("Ok")])]}}]),model:{value:t.modalShow,callback:function(e){t.modalShow=e},expression:"modalShow"}},[a("template",{slot:"modal-title"},[a("div",{staticClass:"text-primary h2"},[t._v("Detalle del Reclamo")])]),t._v(" "),a("template",{slot:"modal-header-close"},[a("button",{staticClass:"btn p-0 bg-transparent",attrs:{type:"button"},on:{click:t.restoreEl}},[a("jam-close")],1)]),t._v(" "),t.loadingGet?a("div",[a("div",{staticClass:"w-25 mb-1"},[a("Skeleton")],1),t._v(" "),a("div",{staticClass:"w-75"},[a("Skeleton")],1),t._v(" "),a("div",{staticClass:"w-25 mb-1"},[a("Skeleton")],1),t._v(" "),a("div",{staticClass:"w-75"},[a("Skeleton")],1),t._v(" "),a("div",{staticClass:"w-25 mb-1"},[a("Skeleton")],1),t._v(" "),a("div",{staticClass:"w-75"},[a("Skeleton")],1)]):a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 text-center mb-1"},[a("h2",{staticClass:"mb-0"},[t._v("Código de Registro")]),t._v(" "),a("h3",{staticClass:"font-weight-normal"},[t._v(t._s(t.element.code))])]),t._v(" "),a("div",{staticClass:"col-12 text-right"},[a("p",[a("span",{staticClass:"font-weight-bold"},[t._v("Registrado el: ")]),t._v(t._s(t.element.created_at_format))])]),t._v(" "),a("div",{staticClass:"col-12"},[a("h2",{staticClass:"mb-3"},[t._v("Identificación del consumidor reclamante")])]),t._v(" "),a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"font-weight-bold"},[t._v("Nombre Completo:")]),t._v(" "),a("p",[t._v(t._s(t.element.name)+" "+t._s(t.element.lastname))])])]),t._v(" "),a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"font-weight-bold"},[t._v("Documento:")]),t._v(" "),a("p",[t._v(t._s(t.element.document_type_rel.description)+" - "+t._s(t.element.document_number))])])]),t._v(" "),a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"font-weight-bold"},[t._v("Email:")]),t._v(" "),a("p",[t._v(t._s(t.element.email))])])]),t._v(" "),a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"font-weight-bold"},[t._v("Móvil:")]),t._v(" "),a("p",[t._v(t._s(t.element.mobile_formatted))])])]),t._v(" "),a("div",{staticClass:"col-12"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"font-weight-bold"},[t._v("Dirección:")]),t._v(" "),a("p",[t._v(t._s(t.element.address))])])]),t._v(" "),a("div",{staticClass:"col-lg-4"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"font-weight-bold"},[t._v("Departamento:")]),t._v(" "),a("p",[t._v(t._s(t.element.ubigeo_rel.department))])])]),t._v(" "),a("div",{staticClass:"col-lg-4"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"font-weight-bold"},[t._v("Provincia:")]),t._v(" "),a("p",[t._v(t._s(t.element.ubigeo_rel.province))])])]),t._v(" "),a("div",{staticClass:"col-lg-4"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"font-weight-bold"},[t._v("Distrito:")]),t._v(" "),a("p",[t._v(t._s(t.element.ubigeo_rel.district))])])]),t._v(" "),a("div",{staticClass:"col-12"},[a("h2",{staticClass:"mb-3 mt-2"},[t._v("Identificación del bien contratado")])]),t._v(" "),a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"font-weight-bold"},[t._v("Monto del bien objeto de Reclamo:")]),t._v(" "),a("p",[t._v(t._s(t.element.good_contracted_amount))])])]),t._v(" "),a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"font-weight-bold"},[t._v("Identificación del Bien contratado:")]),t._v(" "),a("p",[t._v(t._s(t.element.good_contracted_rel.name))])])]),t._v(" "),a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"font-weight-bold"},[t._v("Descripción:")]),t._v(" "),a("p",[t._v(t._s(t.element.good_contracted_description))])])]),t._v(" "),a("div",{staticClass:"col-12"},[a("h2",{staticClass:"mb-3 mt-2"},[t._v("Detalle de la reclamación")])]),t._v(" "),a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"font-weight-bold"},[t._v("Tipo de reclamación:")]),t._v(" "),a("p",[t._v(t._s(t.element.claim_type_rel.name))])])]),t._v(" "),a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"font-weight-bold"},[t._v("Detalle:")]),t._v(" "),a("p",[t._v(t._s(t.element.claim_detail))])])]),t._v(" "),a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"font-weight-bold"},[t._v("Pedido:")]),t._v(" "),a("p",[t._v(t._s(t.element.claim_order))])])]),t._v(" "),a("div",{staticClass:"col-12 mt-2"},[a("h2",{staticClass:"mb-3"},[t._v("Acciones adoptadas por el proveedor")])]),t._v(" "),a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"font-weight-bold"},[t._v("Detalle:")]),t._v(" "),t.element.provider_detail?a("p",[t._v(t._s(t.element.provider_detail))]):a("p",[t._v("No regitrado")])])])])])],2)],1)}),[],!1,null,null,null);e.default=m.exports},uNoH:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,"\n.loading-svg[data-v-7a0ec1bd]{\r\n    fill: currentColor;\r\n    stroke: currentColor;\n}\r\n",""])}}]);