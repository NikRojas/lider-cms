(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{"1jZt":function(t,e,r){var a=r("uNoH");"string"==typeof a&&(a=[[t.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};r("aET+")(a,n);a.locals&&(t.exports=a.locals)},J3pF:function(t,e,r){"use strict";r("1jZt")},NUuF:function(t,e,r){"use strict";var a=r("6nZA"),n={props:{activeParent:Object,removeParent:String},components:{DatePicker:r.n(a).a},data:function(){return{range:null,filters:[{text:"Cualquier Fecha",value:"all"},{text:"Hoy",value:"today"},{text:"Últimos 7 días",value:"7"},{text:"Últimos 30 días",value:"30"},{text:"Últimos 90 días",value:"90"},{text:"Este Año",value:"this_year"}],active:{text:"Cualquier Fecha",value:"all"}}},methods:{handleFilterRange:function(){var t=this;if(!this.range[0])return this.removeParent?this.active={text:"Hoy",value:"today"}:this.active={text:"Cualquier Fecha",value:"all"},this.handleFilter(this.active),!1;setTimeout((function(){t.active={text:t.$refs.datepicker.text,value:"range"}}),50),this.$refs.dropdown.hide(!0)},handleFilter:function(t){this.range=[],this.active=t,this.$refs.dropdown.hide(!0)}},watch:{activeParent:{immediate:!0,handler:function(t){t&&(this.active=t)}},removeParent:{immediate:!0,handler:function(t){t&&(this.filters=this.filters.filter((function(e){return e.value!=t})))}},active:function(t,e){this.$emit("update:active",t),this.$emit("get")},range:function(t,e){this.$emit("update:range",t)}}},o=r("KHd+"),s=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{},[r("b-dropdown",{ref:"dropdown",attrs:{left:"",id:"dropdown-text","menu-class":["border","shadow-none"],variant:"all"==t.active.value?"inverse-light":"inverse-primary","toggle-class":[]},scopedSlots:t._u([{key:"button-content",fn:function(){return[r("jam-calendar",{staticClass:"current-color",staticStyle:{"margin-top":"-4px"},attrs:{height:"18px",width:"18px"}}),t._v(" "),r("span",{},[t._v(t._s(t.active.text))])]},proxy:!0}])},[t._v(" "),r("b-dropdown-text",{staticClass:"px-2",staticStyle:{width:"16rem"},attrs:{tag:"div"}},[t._l(t.filters,(function(e){return r("button",{key:e.value,staticClass:"btn mb-1 btn-sm btn-block",class:t.active.value==e.value?"btn-primary":"btn-inverse-primary",on:{click:function(r){return r.preventDefault(),t.handleFilter(e)}}},[t._v(t._s(e.text))])})),t._v(" "),r("date-picker",{ref:"datepicker",attrs:{placeholder:"Personalizado",shortcuts:[],lang:"es","input-class":"form-control mt-1",format:"D MMM YYYY","range-separator":"-",width:"100%",range:""},on:{change:t.handleFilterRange},model:{value:t.range,callback:function(e){t.range=e},expression:"range"}},[r("jam-calendar",{staticClass:"current-color mt-2",attrs:{slot:"calendar-icon",height:"18",width:"18"},slot:"calendar-icon"})],1)],2)],1)],1)}),[],!1,null,null,null);e.a=s.exports},TVlQ:function(t,e,r){"use strict";var a={props:{text:String,classes:Array,requestServer:Boolean},methods:{click:function(){this.$emit("click")}}},n=(r("J3pF"),r("KHd+")),o=Object(n.a)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"btn",class:t.classes,attrs:{disabled:1==t.requestServer},on:{click:t.click}},[t.requestServer?r("span",[t._v("\n        Cargando \n        "),r("svg",{staticClass:"ml-1 loading-svg",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 40 40"}},[r("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[r("g",{attrs:{transform:"translate(1 1)","stroke-width":"3"}},[r("circle",{attrs:{"stroke-opacity":"1",cx:"0",cy:"0",r:"0"}}),t._v(" "),r("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18",transform:"rotate(83.9974 18 18)"}},[r("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"}})],1)])])])]):r("span",[t._v(t._s(t.text))])])}),[],!1,null,"7a0ec1bd",null);e.a=o.exports},kB4s:function(t,e,r){"use strict";r.r(e);var a=r("TVlQ"),n=(r("6nZA"),r("NUuF")),o={props:{activeParent:Object,removeParent:String,projects:Array},data:function(){return{active:[]}},components:{},watch:{active:function(t,e){this.$emit("update:active",t),this.$emit("get")}}},s=r("KHd+"),i=Object(s.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-dropdown",{ref:"dropdown",attrs:{left:"",id:"dropdown-text","menu-class":["border","shadow-none"],variant:t.active.length?"inverse-primary":"inverse-light","toggle-class":[]},scopedSlots:t._u([{key:"button-content",fn:function(){return[r("jam-building",{staticClass:"current-color",staticStyle:{"margin-top":"-4px"},attrs:{height:"18px",width:"18px"}}),t._v(" "),r("span",{},[t._v("Proyectos")])]},proxy:!0}])},[t._v(" "),r("b-dropdown-text",{staticClass:"px-2",staticStyle:{width:"16rem"},attrs:{tag:"div"}},t._l(t.projects,(function(e){return r("b-form-checkbox",{key:e.id,attrs:{id:"checkbox"+e.id,value:e.id},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[t._v("\n      "+t._s(e.name_es)+"\n      ")])})),1)],1)}),[],!1,null,null,null).exports,l={props:{activeParent:Object,removeParent:String,transactions:Array},data:function(){return{active:[]}},components:{},watch:{active:function(t,e){this.$emit("update:active",t),this.$emit("get")}}},c=Object(s.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-dropdown",{ref:"dropdown",attrs:{left:"",id:"dropdown-text","menu-class":["border","shadow-none"],variant:t.active.length?"inverse-primary":"inverse-light","toggle-class":[]},scopedSlots:t._u([{key:"button-content",fn:function(){return[r("jam-coin",{staticClass:"current-color",staticStyle:{"margin-top":"-4px"},attrs:{height:"18px",width:"18px"}}),t._v(" "),r("span",{},[t._v("Estado de Pago")])]},proxy:!0}])},[t._v(" "),r("b-dropdown-text",{staticClass:"px-2",staticStyle:{width:"16rem"},attrs:{tag:"div"}},t._l(t.transactions,(function(e){return r("b-form-checkbox",{key:e.id,attrs:{id:"checkboxsta"+e.id,value:e.id},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[t._v("\n      "+t._s(e.name)+"\n    ")])})),1)],1)}),[],!1,null,null,null).exports,u=r("ZMUr"),d=r("F05R"),p=r("0YuL");function v(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function m(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?v(Object(r),!0).forEach((function(e){f(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function f(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var h={props:{elementParent:Object,imagesUrl:String,routeReturn:String,routeGetAll:String,route:String,allExport:String,filterExport:String,projects:Array,transactions:Array},data:function(){return{q:null,errors:{},exportOptions:{total:!0,range:null},options:[{text:"Total",value:!0},{text:"Rango Personalizado",value:!1}],modalExport:!1,project:{},elements:{},filterProjects:{active:[]},filterTransactions:{active:[]},filterDate:{active:{},range:null},element:{document_type_rel:{},claim_type_rel:{},good_contracted_rel:{},ubigeo_rel:{}},elementsPerPage:10,modalShow:!1,loadingGetAll:!1,loadingGet:!1,requestExport:!1}},components:{Button:a.a,Skeleton:p.a,BreadCrumb:d.a,DataTable:u.a,FilterDateRange:n.a,FilterProjects:i,FilterStatusTransactions:c},methods:{restoreExport:function(){this.exportOptions={total:!0,range:null},this.modalExport=!1},allExportFunction:function(){var t=this;this.requestExport=!0,axios.get(this.allExport,{responseType:"arraybuffer"}).then((function(e){var r=window.URL.createObjectURL(new Blob([e.data])),a=document.createElement("a");a.href=r,a.setAttribute("download","Líder Órdenes.xlsx"),document.body.appendChild(a),a.click(),a.remove(),t.requestExport=!1})).catch((function(e){t.requestExport=!1}))},filterExportFunction:function(){var t=this;this.requestExport=!0;var e=new FormData;this.exportOptions.range&&this.exportOptions.range[0]&&e.append("from",this.exportOptions.range[0]),this.exportOptions.range&&this.exportOptions.range[1]&&e.append("to",this.exportOptions.range[1]),axios.post(this.filterExport,e,{responseType:"arraybuffer"}).then((function(e){var r=window.URL.createObjectURL(new Blob([e.data])),a=document.createElement("a");a.href=r,a.setAttribute("download","Líder Órdenes.xlsx"),document.body.appendChild(a),a.click(),a.remove(),t.requestExport=!1})).catch((function(e){t.requestExport=!1,422!==e.response.status||(t.errors={range:["Ingrese un rango válido"]})}))},exportData:function(){this.modalExport=!0},restoreEl:function(){this.element={document_type_rel:{},claim_type_rel:{},ubigeo_rel:{},good_contracted_rel:{}},this.modalDestroy=this.modalShow=!1},showEl:function(t){window.location.href=this.route+"/"+t},getEls:function(t,e){var r=this,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.loadingGetAll=!0;var n=this.routeGetAll+"?page="+t+"&itemsPerPage="+e;this.q=a||null,axios.get(n,{params:m(m(m(m({date:this.filterDate.active.value},this.q?{q:this.q}:{}),this.filterDate.range?{range:this.filterDate.range}:{}),this.filterProjects.active?{projects:this.filterProjects.active}:{}),this.filterTransactions.active?{transactions:this.filterTransactions.active}:{})}).then((function(t){r.elements=t.data,r.loadingGetAll=!1})).catch((function(t){}))},restore:function(){this.elements={},this.element={document_type_rel:{},claim_type_rel:{},good_contracted_rel:{},ubigeo_rel:{}},this.modalDestroy=this.modalShow=!1,this.getEls(1,this.elementsPerPage)},getEl:function(t){var e=this;this.loadingGet=!0,axios.get(this.route+"/json/get/"+t).then((function(t){e.element=t.data,e.loadingGet=!1})).catch((function(t){}))}},created:function(){this.getEls(1,this.elementsPerPage)}},g=Object(s.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"header pb-6"},[r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"header-body"},[r("div",{staticClass:"row align-items-center pt-0 pt-md-2 pb-4"},[r("div",{staticClass:"col-12 col-lg-7"},[r("BreadCrumb",{attrs:{title:"Ventas",parent:"",active:"Ventas y Estadísticas"}})],1)])])])]),t._v(" "),r("div",{staticClass:"container-fluid mt--6"},[r("DataTable",{attrs:{object:t.elements,placeholder:"Nombres, Apellidos, Número Documento o Código de Orden","button-update":!1,"button-read":!0,"button-delete":!1,"button-disable":!1,"loading-prop":t.loadingGetAll,"q-prop":t.q,"entries-prop":t.elementsPerPage},on:{get:t.getEls,read:t.showEl,"update:qProp":function(e){t.q=e},"update:q-prop":function(e){t.q=e},"update:entriesProp":function(e){t.elementsPerPage=e},"update:entries-prop":function(e){t.elementsPerPage=e}}},[r("template",{slot:"filters"},[r("div",{staticClass:"row mb-3"},[r("div",{staticClass:"col-12 col-md-9 mb-2 mb-md-0"},[r("div",{staticClass:"d-inline-block mb-2 mb-sm-0 mr-2"},[r("FilterDateRange",{attrs:{active:t.filterDate.active,range:t.filterDate.range},on:{"update:active":function(e){return t.$set(t.filterDate,"active",e)},"update:range":function(e){return t.$set(t.filterDate,"range",e)},get:function(e){return t.getEls(1,t.elementsPerPage,t.q)}}})],1),t._v(" "),r("div",{staticClass:"d-inline-block mb-2 mb-sm-0 mr-2"},[r("FilterProjects",{attrs:{projects:t.projects,active:t.filterProjects.active},on:{"update:active":function(e){return t.$set(t.filterProjects,"active",e)},get:function(e){return t.getEls(1,t.elementsPerPage,t.q)}}})],1),t._v(" "),r("div",{staticClass:"d-inline-block mb-2 mb-sm-0"},[r("FilterStatusTransactions",{attrs:{transactions:t.transactions,active:t.filterTransactions.active},on:{"update:active":function(e){return t.$set(t.filterTransactions,"active",e)},get:function(e){return t.getEls(1,t.elementsPerPage,t.q)}}})],1)]),t._v(" "),r("div",{staticClass:"col-12 col-md-3 text-right"},[r("button",{staticClass:"btn btn-icon btn-inverse-primary",style:0==t.elements.total?"opacity: 0.75":"",attrs:{type:"button",disabled:0==t.elements.total},on:{click:t.exportData}},[r("span",{staticClass:"btn-inner--icon"},[r("jam-download",{staticClass:"current-color"})],1),t._v(" "),r("span",{staticClass:"btn-inner--text"},[t._v("Exportar "+t._s(0==t.elements.total?"(0 Órdenes)":""))])])])])])],2)],1),t._v(" "),r("b-modal",{attrs:{"no-close-on-esc":"","no-close-on-backdrop":"",centered:"","footer-class":"border-0 pt-0","body-class":"pt-0"},on:{close:t.restoreExport},scopedSlots:t._u([{key:"modal-footer",fn:function(e){e.ok;return[r("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:t.restoreExport}},[t._v("Cancelar")]),t._v(" "),t.exportOptions.total?r("Button",{attrs:{classes:["btn-inverse-primary"],text:"Confirmar","request-server":t.requestExport},on:{click:t.allExportFunction}}):r("Button",{attrs:{classes:["btn-inverse-primary"],text:"Confirmar","request-server":t.requestExport},on:{click:t.filterExportFunction}})]}}]),model:{value:t.modalExport,callback:function(e){t.modalExport=e},expression:"modalExport"}},[r("template",{slot:"modal-title"},[r("div",{staticClass:"text-primary h2"},[t._v("Exportar")])]),t._v(" "),r("template",{slot:"modal-header-close"},[r("button",{staticClass:"btn p-0 bg-transparent",attrs:{type:"button"},on:{click:t.restoreExport}},[r("jam-close")],1)]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("p",[t._v("Seleccione una opción:")]),t._v(" "),r("b-form-radio-group",{attrs:{id:"radio-group-1",name:"radios",plain:"",stacked:"",options:t.options},model:{value:t.exportOptions.total,callback:function(e){t.$set(t.exportOptions,"total",e)},expression:"exportOptions.total"}}),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:!t.exportOptions.total,expression:"!exportOptions.total"}],staticClass:"mt-3"},[r("label",{attrs:{for:"range"}},[t._v("Indique el rango de fecha a Exportar")]),t._v(" "),r("date-picker",{ref:"datepicker",attrs:{placeholder:"Personalizado",shortcuts:[],lang:"es",id:"range","value-type":"format","input-class":"form-control",format:"HH:mm DD-MM-YYYY","range-separator":"-",width:"100%",type:"datetime",range:"","show-second":!1},model:{value:t.exportOptions.range,callback:function(e){t.$set(t.exportOptions,"range",e)},expression:"exportOptions.range"}},[t._t("icon-calendar",(function(){return[r("jam-users")]}))],2),t._v(" "),t.errors&&t.errors.range?r("label",{staticClass:"text-danger text-sm d-block mt-2",attrs:{for:"range"}},[t._v(t._s(t.errors.range[0]))]):t._e()],1)],1)])],2)],1)}),[],!1,null,null,null);e.default=g.exports},uNoH:function(t,e,r){(t.exports=r("I1BE")(!1)).push([t.i,"\n.loading-svg[data-v-7a0ec1bd]{\r\n    fill: currentColor;\r\n    stroke: currentColor;\n}\r\n",""])}}]);