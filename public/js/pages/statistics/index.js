(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{"5sbD":function(t,e,a){var r=a("KsmT");"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(r,i);r.locals&&(t.exports=r.locals)},"F/Qi":function(t,e,a){"use strict";a("5sbD")},F05R:function(t,e,a){"use strict";var r={props:{showBreadCrumb:{default:!0,type:Boolean},title:String,parent:String,active:String}},i=(a("F/Qi"),a("KHd+")),s=Object(i.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.showBreadCrumb?a("nav",{staticClass:"d-lg-inline-block",attrs:{"aria-label":"breadcrumb"}},[a("ol",{staticClass:"breadcrumb p-0 m-0 breadcrumb-links bg-transparent"},[a("li",{staticClass:"breadcrumb-item"},[a("a",{attrs:{href:"/dashboard"}},[a("jam-pie-chart",{attrs:{height:"16",width:"16"}})],1)]),t._v(" "),t.parent?a("li",{staticClass:"breadcrumb-item"},[a("a",[t._v(t._s(t.parent))])]):t._e(),t._v(" "),t.active?a("li",{staticClass:"breadcrumb-item text-primary",attrs:{"aria-current":"page"}},[t._v(t._s(t.active))]):t._e()])]):t._e(),t._v(" "),a("h1",{staticClass:"h1 font-weight-bold mb-0"},[t._v(t._s(t.title))])])}),[],!1,null,"0286e577",null);e.a=s.exports},KsmT:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,'\n.breadcrumb-dark .breadcrumb-item + .breadcrumb-item[data-v-0286e577]::before {\n  color: #adb5bd;\n}\n.breadcrumb-item + .breadcrumb-item[data-v-0286e577]::before {\n  display: inline-block;\n  padding-right: 0.5rem;\n  content: "-";\n  color: #8898aa;\n}\n.bg-transparent[data-v-0286e577] {\n  background: transparent;\n}\n',""])},NUuF:function(t,e,a){"use strict";var r=a("6nZA"),i={props:{activeParent:Object,removeParent:String},components:{DatePicker:a.n(r).a},data:function(){return{range:null,filters:[{text:"Cualquier Fecha",value:"all"},{text:"Hoy",value:"today"},{text:"Últimos 7 días",value:"7"},{text:"Últimos 30 días",value:"30"},{text:"Últimos 90 días",value:"90"},{text:"Este Año",value:"this_year"}],active:{text:"Cualquier Fecha",value:"all"}}},methods:{handleFilterRange:function(){var t=this;if(!this.range[0])return this.removeParent?this.active={text:"Hoy",value:"today"}:this.active={text:"Cualquier Fecha",value:"all"},this.handleFilter(this.active),!1;setTimeout((function(){t.active={text:t.$refs.datepicker.text,value:"range"}}),50),this.$refs.dropdown.hide(!0)},handleFilter:function(t){this.range=[],this.active=t,this.$refs.dropdown.hide(!0)}},watch:{activeParent:{immediate:!0,handler:function(t){t&&(this.active=t)}},removeParent:{immediate:!0,handler:function(t){t&&(this.filters=this.filters.filter((function(e){return e.value!=t})))}},active:function(t,e){this.$emit("update:active",t),this.$emit("get")},range:function(t,e){this.$emit("update:range",t)}}},s=a("KHd+"),n=Object(s.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("b-dropdown",{ref:"dropdown",attrs:{left:"",id:"dropdown-text","menu-class":["border","shadow-none"],variant:"all"==t.active.value?"inverse-light":"inverse-primary","toggle-class":[]},scopedSlots:t._u([{key:"button-content",fn:function(){return[a("jam-calendar",{staticClass:"current-color",staticStyle:{"margin-top":"-4px"},attrs:{height:"18px",width:"18px"}}),t._v(" "),a("span",{},[t._v(t._s(t.active.text))])]},proxy:!0}])},[t._v(" "),a("b-dropdown-text",{staticClass:"px-2",staticStyle:{width:"16rem"},attrs:{tag:"div"}},[t._l(t.filters,(function(e){return a("button",{key:e.value,staticClass:"btn mb-1 btn-sm btn-block",class:t.active.value==e.value?"btn-primary":"btn-inverse-primary",on:{click:function(a){return a.preventDefault(),t.handleFilter(e)}}},[t._v(t._s(e.text))])})),t._v(" "),a("date-picker",{ref:"datepicker",attrs:{placeholder:"Personalizado",shortcuts:[],lang:"es","input-class":"form-control mt-1",format:"D MMM YYYY","range-separator":"-",width:"100%",range:""},on:{change:t.handleFilterRange},model:{value:t.range,callback:function(e){t.range=e},expression:"range"}},[a("jam-calendar",{staticClass:"current-color mt-2",attrs:{slot:"calendar-icon",height:"18",width:"18"},slot:"calendar-icon"})],1)],2)],1)],1)}),[],!1,null,null,null);e.a=n.exports},fQ7I:function(t,e,a){"use strict";a.r(e);a("qr4n");var r=a("w9oZ"),i=a.n(r),s=a("QOon"),n=a.n(s),o=a("NUuF"),l=a("F05R"),c=a("0YuL");function d(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function u(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?d(Object(a),!0).forEach((function(e){v(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function v(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var m={props:{routeGetAll:String},components:{Skeleton:c.a,FilterDateRange:o.a,BreadCrumb:l.a,VeLine:i.a,VePie:n.a},data:function(){return{chartLegendPie:{bottom:10,left:"center"},filterDate:{active:{text:"Hoy",value:"today"},range:null},loadingEls:!1,charts:{},colors:["#1762e6","#44CCF2","#0728FA","#060726","#254B85"],chartSettings:{yAxisType:["KMB"],area:!0},chartSettingsPie:{},chartExtend:{series:{smooth:!1,type:"line"}}}},methods:{getEls:function(){var t=this;this.loadingEls=!0,axios.get(this.routeGetAll,{params:u({date:this.filterDate.active.value},this.filterDate.range?{range:this.filterDate.range}:{})}).then((function(e){t.charts=e.data,t.loadingEls=!1})).catch((function(t){}))}},created:function(){this.getEls()}},p=a("KHd+"),h=Object(p.a)(m,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"header pb-6"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"header-body"},[a("div",{staticClass:"row align-items-center pt-0 pt-md-2 pb-4"},[a("div",{staticClass:"col-12 col-lg-7"},[a("BreadCrumb",{attrs:{title:"Estadísticas",parent:"",active:"Ventas y Estadísticas"}})],1)])])])]),t._v(" "),a("div",{staticClass:"container-fluid mt--6"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 mb-4"},[a("FilterDateRange",{attrs:{activeParent:t.filterDate.active,active:t.filterDate.active,range:t.filterDate.range,removeParent:"all"},on:{"update:active":function(e){return t.$set(t.filterDate,"active",e)},"update:range":function(e){return t.$set(t.filterDate,"range",e)},get:function(e){return t.getEls()}}})],1)]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-lg-8 stretch-card  mb-4"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("h2",{staticClass:"text-primary"},[t._v("Ventas Totales")]),t._v(" "),a("p",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore numquam fuga exercitationem eaque, eum cumque dolor quisquam doloremque ratione voluptatibus. Eum eos, minima porro maxime modi dolorem numquam a quam?")]),t._v(" "),t.loadingEls?a("skeleton",{attrs:{height:"350px"}}):a("div",[a("h1",[t._v(t._s(t.charts.total_sales.value))]),t._v(" "),a("ve-line",{attrs:{"legend-visible":!1,data:t.charts.total_sales,settings:t.chartSettings,colors:t.colors,loading:t.loadingEls,extend:t.chartExtend}})],1)],1)])]),t._v(" "),a("div",{staticClass:"col-12 col-lg-4 stretch-card  mb-4"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("h2",{staticClass:"text-primary"},[t._v("Reservas por Proyecto")]),t._v(" "),a("p",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore numquam fuga exercitationem eaque, eum cumque dolor quisquam doloremque ratione voluptatibus. Eum eos, minima porro maxime modi dolorem numquam a quam?")]),t._v(" "),t.loadingEls?a("skeleton",{attrs:{height:"300px"}}):a("div",[a("div",{staticClass:"card mb-4"},[a("table",{staticClass:"table align-items-center"},[a("thead",{staticClass:"thead-light"},[a("tr",[a("th",{staticClass:"border-0"},[t._v("Nombre ES")]),t._v(" "),a("th",{staticClass:"border-0"},[t._v("Total")])])]),t._v(" "),a("tbody",t._l(t.charts.reservers_per_project.rows,(function(e,r){return a("tr",{key:r},[a("td",[t._v(t._s(e.name_es))]),t._v(" "),a("td",[t._v(t._s(e.value))])])})),0)])]),t._v(" "),a("ve-pie",{staticStyle:{"margin-top":"-50px"},attrs:{data:t.charts.reservers_per_project,legend:t.chartLegendPie,colors:t.colors,settings:t.chartSettingsPie}})],1)],1)])]),t._v(" "),a("div",{staticClass:"col-12 col-lg-8 stretch-card mb-4"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("h2",{staticClass:"text-primary"},[t._v("Reservas Totales")]),t._v(" "),a("p",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore numquam fuga exercitationem eaque, eum cumque dolor quisquam doloremque ratione voluptatibus. Eum eos, minima porro maxime modi dolorem numquam a quam?")]),t._v(" "),t.loadingEls?a("skeleton",{attrs:{height:"350px"}}):a("div",[a("h1",[t._v(t._s(t.charts.total_orders.value))]),t._v(" "),a("ve-line",{attrs:{"legend-visible":!1,data:t.charts.total_orders,settings:t.chartSettings,colors:t.colors,loading:t.loadingEls,extend:t.chartExtend}})],1)],1)])]),t._v(" "),a("div",{staticClass:"col-12 col-lg-4 stretch-card mb-4"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("h2",{staticClass:"text-primary"},[t._v("Reservas por Típologias")]),t._v(" "),a("p",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore numquam fuga exercitationem eaque, eum cumque dolor quisquam doloremque ratione voluptatibus. Eum eos, minima porro maxime modi dolorem numquam a quam?")]),t._v(" "),t.loadingEls?a("skeleton",{attrs:{height:"300px"}}):a("div",[a("div",{staticClass:"card"},[a("table",{staticClass:"table align-items-center"},[a("thead",{staticClass:"thead-light"},[a("tr",[a("th",{staticClass:"border-0"},[t._v("Nombre")]),t._v(" "),a("th",{staticClass:"border-0"},[t._v("Total")])])]),t._v(" "),a("tbody",t._l(t.charts.reservers_per_tipology.rows,(function(e,r){return a("tr",{key:r},[a("td",[t._v(t._s(e.name_format))]),t._v(" "),a("td",[t._v(t._s(e.value))])])})),0)])]),t._v(" "),a("ve-pie",{staticStyle:{"margin-top":"-50px"},attrs:{data:t.charts.reservers_per_tipology,legend:t.chartLegendPie,colors:t.colors,settings:t.chartSettingsPie}})],1)],1)])])])])])}),[],!1,null,null,null);e.default=h.exports}}]);