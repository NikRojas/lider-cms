(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"1jZt":function(t,e,a){var r=a("uNoH");"string"==typeof r&&(r=[[t.i,r,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(r,s);r.locals&&(t.exports=r.locals)},"5sbD":function(t,e,a){var r=a("KsmT");"string"==typeof r&&(r=[[t.i,r,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(r,s);r.locals&&(t.exports=r.locals)},"F/Qi":function(t,e,a){"use strict";a("5sbD")},F05R:function(t,e,a){"use strict";var r={props:{showBreadCrumb:{default:!0,type:Boolean},title:String,parent:String,active:String}},s=(a("F/Qi"),a("KHd+")),l=Object(s.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.showBreadCrumb?a("nav",{staticClass:"d-lg-inline-block",attrs:{"aria-label":"breadcrumb"}},[a("ol",{staticClass:"breadcrumb p-0 m-0 breadcrumb-links bg-transparent"},[a("li",{staticClass:"breadcrumb-item"},[a("a",{attrs:{href:"/dashboard"}},[a("jam-pie-chart",{attrs:{height:"16",width:"16"}})],1)]),t._v(" "),t.parent?a("li",{staticClass:"breadcrumb-item"},[a("a",[t._v(t._s(t.parent))])]):t._e(),t._v(" "),t.active?a("li",{staticClass:"breadcrumb-item text-primary",attrs:{"aria-current":"page"}},[t._v(t._s(t.active))]):t._e()])]):t._e(),t._v(" "),a("h1",{staticClass:"h1 font-weight-bold mb-0"},[t._v(t._s(t.title))])])}),[],!1,null,"0286e577",null);e.a=l.exports},J3pF:function(t,e,a){"use strict";a("1jZt")},KsmT:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,'\n.breadcrumb-dark .breadcrumb-item + .breadcrumb-item[data-v-0286e577]::before {\n  color: #adb5bd;\n}\n.breadcrumb-item + .breadcrumb-item[data-v-0286e577]::before {\n  display: inline-block;\n  padding-right: 0.5rem;\n  content: "-";\n  color: #8898aa;\n}\n.bg-transparent[data-v-0286e577] {\n  background: transparent;\n}\n',""])},TVlQ:function(t,e,a){"use strict";var r={props:{text:String,classes:Array,requestServer:Boolean},methods:{click:function(){this.$emit("click")}}},s=(a("J3pF"),a("KHd+")),l=Object(s.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"btn",class:t.classes,attrs:{disabled:1==t.requestServer},on:{click:t.click}},[t.requestServer?a("span",[t._v("\n        Cargando \n        "),a("svg",{staticClass:"ml-1 loading-svg",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 40 40"}},[a("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[a("g",{attrs:{transform:"translate(1 1)","stroke-width":"3"}},[a("circle",{attrs:{"stroke-opacity":"1",cx:"0",cy:"0",r:"0"}}),t._v(" "),a("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18",transform:"rotate(83.9974 18 18)"}},[a("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"}})],1)])])])]):a("span",[t._v(t._s(t.text))])])}),[],!1,null,"7a0ec1bd",null);e.a=l.exports},"Uu/b":function(t,e,a){"use strict";var r={props:{disableEdit:{default:!1,type:Boolean},fieldName:String,selectItems:Array,headers:Array,arrayProp:Array,errorsProp:Object},data:function(){return{arrayData:[{}],errorsData:{}}},methods:{restore:function(){this.arrayData=[{}]},addEl:function(t){Object.values(this.arrayData[t]).every((function(t){return null===t||""===t}))||this.arrayData.push({})},deleteEl:function(t){this.arrayData.splice(t,1)}},computed:{array:{get:function(){return this.arrayData},set:function(t){this.arrayData.push({}),this.array.push({})}},errors:{get:function(){return this.errorsData}}},watch:{array:{deep:!0,handler:function(t,e){t[t.length-1]&&this.$emit("update:array",t)}},errorsProp:{immediate:!0,deep:!0,handler:function(t,e){this.errorsData=t}},arrayProp:{immediate:!0,deep:!0,handler:function(t,e){t&&t.length>0&&(this.arrayData=t)}}}},s=a("KHd+"),l=Object(s.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",t._l(t.array.length,(function(e,r){return a("div",{key:"tr"+r,staticClass:"row mb-2"},[t._l(t.headers,(function(e,s){return a("div",{key:"td"+s,staticClass:"col-lg-5"},[a("label",{staticClass:"font-weight-bold",attrs:{for:e.variable}},[t._v(t._s(e.label.charAt(0).toUpperCase()+e.label.slice(1)))]),t._v(" "),"name"==e.variable||"number"==e.variable?a("input",{directives:[{name:"model",rawName:"v-model",value:t.array[r][e.variable],expression:"array[i][el.variable]"}],staticClass:"form-control",attrs:{type:"text",id:e.variable},domProps:{value:t.array[r][e.variable]},on:{input:function(a){a.target.composing||t.$set(t.array[r],e.variable,a.target.value)}}}):a("select",{directives:[{name:"model",rawName:"v-model",value:t.array[r][e.variable],expression:"array[i][el.variable]"}],staticClass:"form-control",attrs:{name:"",id:e.variable},on:{change:function(a){var s=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.array[r],e.variable,a.target.multiple?s:s[0])}}},t._l(t.selectItems,(function(e,r){return a("option",{key:r,domProps:{value:e.code_department}},[t._v(t._s(e.department))])})),0),t._v(" "),t.errors&&t.errors[t.fieldName+"."+r+"."+e.variable]?a("label",{staticClass:"text-danger text-sm mt-2 d-block"},[t._v(t._s(t.errors[t.fieldName+"."+r+"."+e.variable][0]))]):t._e()])})),t._v(" "),t.disableEdit?t._e():a("div",{staticClass:"mb-2 mt-2 mt-lg-0 actions d-flex align-items-end col-lg-2"},[t.array.length-1==r?a("button",{staticClass:"btn btn-sm btn-icon-only rounded-circle btn-inverse-info",on:{click:function(e){return e.preventDefault(),t.addEl(r)}}},[a("jam-plus",{staticClass:"current-color"})],1):t._e(),t._v(" "),0!=r?a("button",{staticClass:"btn btn-sm btn-icon-only rounded-circle btn-inverse-danger",on:{click:function(e){return e.preventDefault(),t.deleteEl(r)}}},[a("jam-trash-alt",{staticClass:"current-color"})],1):t._e()])],2)})),0)}),[],!1,null,null,null);e.a=l.exports},h5V2:function(t,e,a){"use strict";a.r(e);var r=a("0YuL"),s=a("TVlQ"),l=a("F05R"),i=a("Uu/b"),o={props:{routeGet:String,routeUpdate:String,departments:Array},components:{Button:s.a,BreadCrumb:l.a,Skeleton:r.a,InputSelectArray:i.a},data:function(){return{el:{location:"",main_office:"",central_phone:"",email:""},errors:{},requestSubmit:!1,startBlock:!0,editBlock:!1,loadingGet:!1}},methods:{update:function(){var t=this;this.requestSubmit=!0,axios.post(this.routeUpdate,this.el).then((function(e){t.requestSubmit=!1,t.restore(),Swal.fire({title:e.data.title,text:e.data.message,type:"success",confirmButtonText:"Ok",buttonsStyling:!1,customClass:{confirmButton:"btn btn-inverse-primary"}})})).catch((function(e){t.requestSubmit=!1,422!==e.response.status?(t.restore(),Swal.fire({title:e.response.data.title,text:e.response.data.message,type:"error",confirmButtonText:"Ok",buttonsStyling:!1,customClass:{confirmButton:"btn btn-inverse-primary"}})):t.errors=e.response.data.errors||{}}))},restore:function(){this.el={location:"",phone:"",email:""},this.errors={},this.startBlock=!0,this.editBlock=!1,this.getEl()},editEl:function(){this.startBlock=!1,this.editBlock=!0},getEl:function(){var t=this;this.loadingGet=!0,axios.get(this.routeGet).then((function(e){t.el=e.data,t.loadingGet=!1})).catch((function(t){}))}},created:function(){this.getEl()}},n=a("KHd+"),c=Object(n.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"header pb-6"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"header-body"},[a("div",{staticClass:"row align-items-center pt-0 pt-md-2 pb-4"},[a("div",{staticClass:"col-6 col-md-7"},[a("BreadCrumb",{attrs:{title:t.startBlock?"Información General":"Actualizar Información General",parent:"Contenido",active:"Información General"}})],1),t._v(" "),a("div",{staticClass:"col-6 col-md-5 text-right"},[t.startBlock?a("a",{staticClass:"btn btn-icon btn-inverse-primary",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.editEl(e)}}},[a("span",{staticClass:"btn-inner--icon"},[a("jam-info",{staticClass:"current-color"})],1),t._v(" "),a("span",{staticClass:"btn-inner--text"},[t._v("Editar Información")])]):t._e()])])])])]),t._v(" "),a("div",{staticClass:"container-fluid mt--6"},[t.startBlock?a("div",{staticClass:"card mb-4"},[t.loadingGet?a("div",{staticClass:"card-body"},[a("div",{staticClass:"row"},t._l(3,(function(e){return a("div",{key:e,staticClass:"col-12 col-lg-4"},[a("div",{staticClass:"w-25"},[a("Skeleton",{attrs:{height:"15px"}})],1),t._v(" "),a("div",{staticClass:"w-75"},[a("Skeleton",{attrs:{height:"50px"}})],1)])})),0)]):a("div",{staticClass:"card-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-6 col-lg-4"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"font-weight-bold"},[t._v("Ubicación")]),t._v(" "),t.el.location?a("pre",{staticStyle:{"font-family":"inherit","font-size":"14px"}},[t._v(t._s(t.el.location))]):a("p",[t._v("No registrado")])])]),t._v(" "),a("div",{staticClass:"col-12 col-md-6 col-lg-4"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"font-weight-bold"},[t._v("Central de Ventas")]),t._v(" "),t.el.central_phone?a("p",[t._v(t._s(t.el.central_phone_formatted))]):a("p",[t._v("No registrado")])])]),t._v(" "),a("div",{staticClass:"col-12 col-md-6 col-lg-4"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"font-weight-bold"},[t._v("Oficina Principal")]),t._v(" "),t.el.main_office?a("p",[t._v(t._s(t.el.main_office_formatted))]):a("p",[t._v("No registrado")])])]),t._v(" "),a("div",{staticClass:"col-12 col-md-6 col-lg-4"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"font-weight-bold"},[t._v("Email")]),t._v(" "),t.el.email?a("p",[t._v(t._s(t.el.email))]):a("p",[t._v("No registrado")])])]),t._v(" "),a("div",{staticClass:"col-12 col-md-6 col-lg-4"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"font-weight-bold"},[t._v("Link de Comprobantes Electrónicos")]),t._v(" "),t.el.billing_url?a("p",[a("a",{staticStyle:{"text-decoration":"underline"},attrs:{href:t.el.billing_url,target:"_blank"}},[t._v(t._s(t.el.billing_url))])]):a("p",[t._v("No registrado")])])]),t._v(" "),a("div",{staticClass:"col-12 col-md-6 col-lg-4"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"font-weight-bold"},[t._v("Whatsapps")]),t._v(" "),t.el.whatsapp_numbers?a("p",t._l(t.el.whatsapp_formatted,(function(e,r){return a("span",{key:r,staticClass:"d-block"},[t._v(t._s(e.department)+" - "+t._s(e.number))])})),0):a("p",[t._v("No registrado")])])]),t._v(" "),a("div",{staticClass:"col-12 col-md-6 col-lg-4"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"font-weight-bold"},[t._v("Oficinas")]),t._v(" "),t.el.phone_numbers?a("p",t._l(t.el.phone_numbers_formatted,(function(e,r){return a("span",{key:r,staticClass:"d-block"},[t._v(t._s(e.department)+" - "+t._s(e.number))])})),0):a("p",[t._v("No registrado")])])])])])]):t._e(),t._v(" "),t.editBlock?a("div",{staticClass:"card mb-4"},[a("div",{staticClass:"card-body"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.update(e)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-6 col-lg-4"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"font-weight-bold",attrs:{for:"location"}},[t._v("Ubicación")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.el.location,expression:"el.location"}],staticClass:"form-control mb-2",attrs:{type:"text",id:"location",rows:"3"},domProps:{value:t.el.location},on:{input:function(e){e.target.composing||t.$set(t.el,"location",e.target.value)}}}),t._v(" "),t.errors&&t.errors.location?a("label",{staticClass:"mt-2 text-danger text-sm",attrs:{for:"location"}},[t._v(t._s(t.errors.location[0]))]):t._e()])]),t._v(" "),a("div",{staticClass:"col-12 col-md-6 col-lg-4"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"font-weight-bold",attrs:{for:"phone"}},[t._v("Central de Ventas")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.el.central_phone,expression:"el.central_phone"}],staticClass:"form-control",attrs:{type:"text",id:"central_phone"},domProps:{value:t.el.central_phone},on:{input:function(e){e.target.composing||t.$set(t.el,"central_phone",e.target.value)}}}),t._v(" "),a("small",{staticClass:"form-text d-block",staticStyle:{opacity:"0.7"}},[t._v("Ingrese un número de 7 dígitos")]),t._v(" "),t.errors&&t.errors.central_phone?a("label",{staticClass:"mt-2 text-danger text-sm",attrs:{for:"central_phone"}},[t._v(t._s(t.errors.central_phone[0]))]):t._e()])]),t._v(" "),a("div",{staticClass:"col-12 col-md-6 col-lg-4"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"font-weight-bold",attrs:{for:"phone"}},[t._v("Oficina Principal")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.el.main_office,expression:"el.main_office"}],staticClass:"form-control",attrs:{type:"text",id:"main_office"},domProps:{value:t.el.main_office},on:{input:function(e){e.target.composing||t.$set(t.el,"main_office",e.target.value)}}}),t._v(" "),a("small",{staticClass:"form-text d-block",staticStyle:{opacity:"0.7"}},[t._v("Ingrese un número de 7 dígitos")]),t._v(" "),t.errors&&t.errors.main_office?a("label",{staticClass:"mt-2 text-danger text-sm",attrs:{for:"main_office"}},[t._v(t._s(t.errors.main_office[0]))]):t._e()])]),t._v(" "),a("div",{staticClass:"col-12 col-md-6 col-lg-4"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"font-weight-bold",attrs:{for:"email"}},[t._v("Email")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.el.email,expression:"el.email"}],staticClass:"form-control",attrs:{type:"text",id:"email"},domProps:{value:t.el.email},on:{input:function(e){e.target.composing||t.$set(t.el,"email",e.target.value)}}}),t._v(" "),t.errors&&t.errors.email?a("label",{staticClass:"mt-2 text-danger text-sm",attrs:{for:"email"}},[t._v(t._s(t.errors.email[0]))]):t._e()])]),t._v(" "),a("div",{staticClass:"col-12 col-md-6 col-lg-4"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"font-weight-bold",attrs:{for:"email"}},[t._v("Link Facturación")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.el.billing_url,expression:"el.billing_url"}],staticClass:"form-control",attrs:{type:"text",id:"billing_url"},domProps:{value:t.el.billing_url},on:{input:function(e){e.target.composing||t.$set(t.el,"billing_url",e.target.value)}}}),t._v(" "),t.errors&&t.errors.billing_url?a("label",{staticClass:"mt-2 text-danger text-sm",attrs:{for:"billing_url"}},[t._v(t._s(t.errors.billing_url[0]))]):t._e()])]),t._v(" "),a("div",{staticClass:"col-12 col-md-6 col-lg-4"},[a("InputSelectArray",{attrs:{fieldName:"whatsapp_numbers",errorsProp:t.errors,headers:[{variable:"number",label:"Whatsapp"},{variable:"department",label:"departamento"}],array:t.el.whatsapp_numbers,"array-prop":t.el.whatsapp_numbers,selectItems:t.departments},on:{"update:errorsProp":function(e){t.errors=e},"update:errors-prop":function(e){t.errors=e},"update:array":function(e){return t.$set(t.el,"whatsapp_numbers",e)}}})],1),t._v(" "),a("div",{staticClass:"col-12 col-md-6 col-lg-4"},[a("InputSelectArray",{attrs:{fieldName:"phone_numbers",errorsProp:t.errors,headers:[{variable:"number",label:"teléfono"},{variable:"department",label:"departamento"}],array:t.el.phone_numbers,"array-prop":t.el.phone_numbers,selectItems:t.departments},on:{"update:errorsProp":function(e){t.errors=e},"update:errors-prop":function(e){t.errors=e},"update:array":function(e){return t.$set(t.el,"phone_numbers",e)}}})],1),t._v(" "),a("div",{staticClass:"col-12 text-right"},[a("Button",{attrs:{text:"Actualizar",classes:["btn-inverse-primary"],"request-server":t.requestSubmit}}),t._v(" "),a("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.restore(e)}}},[t._v("Cancelar")])],1)])])])]):t._e()])])}),[],!1,null,null,null);e.default=c.exports},uNoH:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,"\n.loading-svg[data-v-7a0ec1bd]{\n    fill: currentColor;\n    stroke: currentColor;\n}\n",""])}}]);