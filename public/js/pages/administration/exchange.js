(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"1jZt":function(t,e,s){var a=s("uNoH");"string"==typeof a&&(a=[[t.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(a,r);a.locals&&(t.exports=a.locals)},"42wO":function(t,e,s){"use strict";s.r(e);var a=s("F05R"),r=s("0YuL"),n=s("TVlQ"),i={components:{BreadCrumb:a.a,Skeleton:r.a,Button:n.a},data:function(){return{elements:{},errors:{},loadingEls:!1,unit:1,element:{},elementSelected:0,editBlock:!1,requestSubmit:!1}},props:{route:String,routeGetAll:String},methods:{restoreEl:function(){this.errors={},this.element={},this.editBlock=!1,this.elementSelected=0},restore:function(){this.errors={},this.element={},this.editBlock=!1,this.elementSelected=0,this.getEls()},edit:function(t){this.editBlock=!0,this.elementSelected=t,this.element=Object.assign({},this.elements.find((function(e){return e.id===t})))},getEls:function(){var t=this;this.loadingEls=!0,axios.get(this.routeGetAll).then((function(e){t.elements=e.data,t.loadingEls=!1})).catch((function(t){}))},update:function(){var t,e=this;this.requestSubmit=!0,t=this.route+"/"+this.element.id,axios({method:"put",url:t,data:this.element}).then((function(t){e.requestSubmit=!1,Swal.fire({title:t.data.title,text:t.data.message,type:"success",confirmButtonText:"OK",buttonsStyling:!1,customClass:{confirmButton:"btn btn-inverse-primary"}}),e.restore()})).catch((function(t){e.requestSubmit=!1,422!==t.response.status?(Swal.fire({title:t.response.data.title,text:t.response.data.message,type:"error",confirmButtonText:"OK",buttonsStyling:!1,customClass:{confirmButton:"btn btn-inverse-primary"}}),e.restoreEl()):e.errors=t.response.data.errors||{}}))}},created:function(){this.getEls()},computed:{currencyDefault:function(){if(this.elements.length)return this.elements.find((function(t){return 1==t.default}))},currencies:function(){if(this.elements.length)return this.elements.filter((function(t){return 1!=t.default}))}}},l=s("KHd+"),o=Object(l.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"header pb-6"},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"header-body"},[s("div",{staticClass:"row align-items-center pt-0 pt-md-2 pb-4"},[s("div",{staticClass:"col-6 col-md-7"},[s("BreadCrumb",{attrs:{title:"Tipo de Cambio",parent:"Administración",active:"Tipo de Cambio"}})],1)])])])]),t._v(" "),s("div",{staticClass:"container-fluid mt--6"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-3 mb-4 mb-lg-0"},[t.loadingEls?t._e():s("p",[t._v("En este apartado usted puede modificar el cambio de las moneda, tomar en consideración que el cambio se redondea a Entero Superior.")]),t._v(" "),t.loadingEls?t._e():s("h4",{staticClass:"text-uppercase"},[t._v("Moneda Predeterminada")]),t._v(" "),t.loadingEls?t._e():s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"text-center mb-4"},[s("gb-flag",{attrs:{code:"pe",size:"huge"}}),t._v(" "),s("h1",[t._v(t._s(t.currencyDefault.name))])],1),t._v(" "),s("h3",{staticClass:"text-center"},[s("span",{staticClass:"font-weight-normal"},[t._v("Abreviación:")]),t._v("\n              "+t._s(t.currencyDefault.abbreviation)+"\n            ")]),t._v(" "),s("h3",{staticClass:"text-center"},[s("span",{staticClass:"font-weight-normal"},[t._v("Símbolo:")]),t._v("\n              "+t._s(t.currencyDefault.symbol)+"\n            ")])])]),t._v(" "),t.loadingEls?s("div",[s("skeleton",{attrs:{height:"300px"}})],1):t._e()]),t._v(" "),s("div",{staticClass:"col-lg"},[t.loadingEls?s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 mb-4"},[s("skeleton",{attrs:{height:"200px"}})],1)]):s("div",{staticClass:"row"},t._l(t.currencies,(function(e,a){return s("div",{key:a,staticClass:"col-12 mb-4"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.update(e)}}},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body pb-0"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-lg-4"},["PEN"==e.abbreviation?s("gb-flag",{attrs:{code:"pe",size:"medium"}}):s("gb-flag",{attrs:{code:"us",size:"medium"}}),t._v(" "),s("h2",[t._v(t._s(e.name))]),t._v(" "),s("h3",[s("span",{staticClass:"font-weight-normal"},[t._v("Abreviación:")]),t._v("\n                        "+t._s(e.abbreviation)+"\n                      ")]),t._v(" "),s("h3",[s("span",{staticClass:"font-weight-normal"},[t._v("Símbolo:")]),t._v("\n                        "+t._s(e.symbol)+"\n                      ")])],1),t._v(" "),s("div",{staticClass:"col-12 col-lg d-flex align-items-center justify-content-center"},[s("div",{staticClass:"text-center h2 font-weight-normal"},[t._v("\n                        "+t._s(e.symbol)+t._s(t.unit)+" equivale a\n                        "),t.elementSelected!=e.id?s("h1",{staticClass:"text-primary text-center"},[t._v(t._s(t.currencyDefault.symbol)+" "+t._s(e.value))]):t._e(),t._v(" "),t.editBlock&&t.elementSelected==e.id?s("div",{staticClass:"form-group"},[t._v("\n                          "+t._s(t.currencyDefault.symbol)+"\n                          "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.element.value,expression:"element.value"}],staticClass:"form-control d-inline-block w-50",attrs:{type:"text",id:"value"},domProps:{value:t.element.value},on:{input:function(e){e.target.composing||t.$set(t.element,"value",e.target.value)}}}),t._v(" "),t.errors&&t.errors.value?s("label",{staticClass:"text-danger text-sm d-block mt-2",attrs:{for:"value"}},[t._v(t._s(t.errors.value[0]))]):t._e()]):t._e()])])])]),t._v(" "),s("div",{staticClass:"card-footer pt-0 border-0 text-right"},[t.editBlock&&t.elementSelected==e.id?s("Button",{attrs:{text:"Actualizar",classes:["btn-inverse-primary","btn-sm"],"request-server":t.requestSubmit}}):t._e(),t._v(" "),t.elementSelected!=e.id?s("button",{staticClass:"btn btn-inverse-info btn-sm",on:{click:function(s){return s.preventDefault(),t.edit(e.id)}}},[t._v("Editar")]):t._e(),t._v(" "),t.editBlock&&t.elementSelected==e.id?s("button",{staticClass:"btn btn-secondary btn-sm",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.restoreEl(e)}}},[t._v("Cancelar")]):t._e()],1)])])])})),0)])])])])}),[],!1,null,null,null);e.default=o.exports},"5sbD":function(t,e,s){var a=s("KsmT");"string"==typeof a&&(a=[[t.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(a,r);a.locals&&(t.exports=a.locals)},"F/Qi":function(t,e,s){"use strict";s("5sbD")},F05R:function(t,e,s){"use strict";var a={props:{showBreadCrumb:{default:!0,type:Boolean},title:String,parent:String,active:String}},r=(s("F/Qi"),s("KHd+")),n=Object(r.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.showBreadCrumb?s("nav",{staticClass:"d-lg-inline-block",attrs:{"aria-label":"breadcrumb"}},[s("ol",{staticClass:"breadcrumb p-0 m-0 breadcrumb-links bg-transparent"},[s("li",{staticClass:"breadcrumb-item"},[s("a",{attrs:{href:"/dashboard"}},[s("jam-pie-chart",{attrs:{height:"16",width:"16"}})],1)]),t._v(" "),t.parent?s("li",{staticClass:"breadcrumb-item"},[s("a",[t._v(t._s(t.parent))])]):t._e(),t._v(" "),t.active?s("li",{staticClass:"breadcrumb-item text-primary",attrs:{"aria-current":"page"}},[t._v(t._s(t.active))]):t._e()])]):t._e(),t._v(" "),s("h1",{staticClass:"h1 font-weight-bold mb-0"},[t._v(t._s(t.title))])])}),[],!1,null,"0286e577",null);e.a=n.exports},J3pF:function(t,e,s){"use strict";s("1jZt")},KsmT:function(t,e,s){(t.exports=s("I1BE")(!1)).push([t.i,'\n.breadcrumb-dark .breadcrumb-item + .breadcrumb-item[data-v-0286e577]::before {\n  color: #adb5bd;\n}\n.breadcrumb-item + .breadcrumb-item[data-v-0286e577]::before {\n  display: inline-block;\n  padding-right: 0.5rem;\n  content: "-";\n  color: #8898aa;\n}\n.bg-transparent[data-v-0286e577] {\n  background: transparent;\n}\n',""])},TVlQ:function(t,e,s){"use strict";var a={props:{text:String,classes:Array,requestServer:Boolean},methods:{click:function(){this.$emit("click")}}},r=(s("J3pF"),s("KHd+")),n=Object(r.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"btn",class:t.classes,attrs:{disabled:1==t.requestServer},on:{click:t.click}},[t.requestServer?s("span",[t._v("\n        Cargando \n        "),s("svg",{staticClass:"ml-1 loading-svg",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 40 40"}},[s("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[s("g",{attrs:{transform:"translate(1 1)","stroke-width":"3"}},[s("circle",{attrs:{"stroke-opacity":"1",cx:"0",cy:"0",r:"0"}}),t._v(" "),s("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18",transform:"rotate(83.9974 18 18)"}},[s("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"}})],1)])])])]):s("span",[t._v(t._s(t.text))])])}),[],!1,null,"7a0ec1bd",null);e.a=n.exports},uNoH:function(t,e,s){(t.exports=s("I1BE")(!1)).push([t.i,"\n.loading-svg[data-v-7a0ec1bd]{\n    fill: currentColor;\n    stroke: currentColor;\n}\n",""])}}]);