(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{CkAj:function(t,e,a){"use strict";var s=a("0YuL"),r=a("TVlQ"),o={props:{open:Boolean,loadingGet:Boolean,element:String,loadingSubmit:Boolean},components:{Button:r.a,Skeleton:s.a},data:function(){return{requestSubmit:!1,requestGet:!1,inputDestroy:"",buttonDestroy:!0}},methods:{submit:function(){this.$emit("submit")},cancelCustom:function(){this.$emit("cancel")},restore:function(){this.requestSubmit=!1,this.requestGet=!1,this.inputDestroy="",this.buttonDestroy=!0}},watch:{open:function(t){0==t&&this.restore()},inputDestroy:function(t){t===t.toUpperCase()&&"ELIMINAR"===t?this.buttonDestroy=!1:this.buttonDestroy=!0}}},l=a("KHd+"),n=Object(l.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-modal",{attrs:{"no-close-on-esc":"","no-close-on-backdrop":"",centered:"","footer-class":"border-0 pt-0","body-class":"pt-0"},on:{close:t.cancelCustom},scopedSlots:t._u([{key:"modal-footer",fn:function(e){e.ok;return[a("Button",{directives:[{name:"show",rawName:"v-show",value:!t.loadingGet,expression:"!loadingGet"}],attrs:{classes:["btn-danger"],text:"Eliminar","request-server":t.loadingSubmit,disabled:t.buttonDestroy},on:{click:t.submit}}),t._v(" "),a("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:t.cancelCustom}},[t._v("Cancelar")])]}}]),model:{value:t.open,callback:function(e){t.open=e},expression:"open"}},[a("template",{slot:"modal-title"},[a("div",{staticClass:"text-primary h2"},[t._v("Eliminar "+t._s(t.element.charAt(0).toUpperCase()+t.element.slice(1)))])]),t._v(" "),a("template",{slot:"modal-header-close"},[a("button",{staticClass:"btn p-0 bg-transparent",attrs:{type:"button"},on:{click:t.cancelCustom}},[a("jam-close")],1)]),t._v(" "),t.loadingGet?a("div",[a("Skeleton"),t._v(" "),a("div",{staticClass:"w-25 mb-1"},[a("Skeleton")],1),t._v(" "),a("div",{staticClass:"w-75"},[a("Skeleton")],1)],1):a("div",[a("p",[t._v("Esta apunto de eliminar un "+t._s(t.element)+", una vez que realice esta acción no se puede deshacer")]),t._v(" "),a("p",{staticClass:"mb-2"},[t._v("\n      Escribe\n      "),a("b",[t._v("ELIMINAR")]),t._v(" para confirmar\n    ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.inputDestroy,expression:"inputDestroy"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.inputDestroy},on:{input:function(e){e.target.composing||(t.inputDestroy=e.target.value)}}})])],2)}),[],!1,null,null,null);e.a=n.exports},I1fl:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,"\n.nav-pills .nav-link.active{\r\n  border-left: 4px solid #1762e6 !important;\r\n  background-color: #FDFBFA  !important;\n}\r\n",""])},TA8F:function(t,e,a){var s=a("I1fl");"string"==typeof s&&(s=[[t.i,s,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(s,r);s.locals&&(t.exports=s.locals)},"Y/L1":function(t,e,a){"use strict";a.r(e);var s=a("uH/1"),r=a("ZMUr"),o=a("F05R"),l=a("CkAj"),n=a("0YuL"),i=a("6nZA"),c=a.n(i),d={props:{elementParent:Object,imagesUrl:String,routeReturn:String,routeGetAll:String,route:String,allExport:String,filterExport:String},data:function(){return{request_todo:!1,request_filter:!1,errors_form:{},modalExport:!1,element_form:{},project:{},elements:{},element:{project_rel:{},advisor_rel:{},project_type_department_rel:{}},elementsPerPage:10,modalShow:!1,modalDestroy:!1,loadingGet:!1,requestSubmit:!1}},components:{IconContact:s.a,Skeleton:n.a,BreadCrumb:o.a,DataTable:r.a,Destroy:l.a,DatePicker:c.a},watch:{elementParent:{immediate:!0,handler:function(t){this.project=t}}},methods:{openModalExport:function(){this.modalExport=!0},allExportFunction:function(){var t=this;this.request_todo=!0,axios.get(this.allExport,{headers:{"Content-Disposition":"attachment; filename=template.xlsx","Content-Type":"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"},responseType:"arraybuffer"}).then((function(e){var a=window.URL.createObjectURL(new Blob([e.data])),s=document.createElement("a");s.href=a,s.setAttribute("download","Líder Cotizaciones Proyecto "+t.project.name_es+".xlsx"),document.body.appendChild(s),s.click(),s.remove(),t.request_todo=!1})).catch((function(e){t.request_todo=!1,422!==e.response.status||(t.errors_form=e.response.data.errors||{})}))},filterExportFunction:function(){var t=this;this.request_filter=!0;var e=new FormData;this.element_form.from&&e.append("from",this.element_form.from),this.element_form.to&&e.append("to",this.element_form.to),axios.post(this.filterExport,e,{headers:{"Content-Disposition":"attachment; filename=template.xlsx","Content-Type":"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"},responseType:"arraybuffer"}).then((function(e){var a=window.URL.createObjectURL(new Blob([e.data])),s=document.createElement("a");s.href=a,s.setAttribute("download","Líder Cotizaciones Proyecto "+t.project.name_es+".xlsx"),document.body.appendChild(s),s.click(),s.remove(),t.request_filter=!1})).catch((function(e){if(t.request_filter=!1,422===e.response.status)return t.errors_form={from:[],to:[]},""!=t.element_form.from&&null!=t.element_form.from||(t.errors_form.from=["El campo desde es requerido"]),""!=t.element_form.to&&null!=t.element_form.to||(t.errors_form.to=["El campo hasta es requerido"]),void console.log(t.errors_form)}))},destroyConfirm:function(){var t=this;this.requestSubmit=!0,axios.delete("/proyectos/cotizaciones/"+this.element.id).then((function(e){t.requestSubmit=!1,t.restore(),Swal.fire({title:e.data.title,text:e.data.message,type:"success",confirmButtonText:"OK",buttonsStyling:!1,customClass:{confirmButton:"btn btn-inverse-primary"}})})).catch((function(e){Swal.fire({title:e.response.data.title,text:e.response.data.message,type:"error",confirmButtonText:"OK",buttonsStyling:!1,customClass:{confirmButton:"btn btn-inverse-primary"}}),t.restoreEl()}))},restoreEl:function(){this.element={project_type_department_rel:{}},this.modalDestroy=this.modalShow=!1,this.modalExport=!1,this.element_form={},this.errors_form={}},showEl:function(t){this.modalShow=!0,this.getEl(t)},deleteEl:function(t){this.modalDestroy=!0,this.getEl(t)},getEls:function(t,e){var a=this,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=this.routeGetAll+"?page="+t+"&itemsPerPage="+e;s&&(r=r+"&q="+s),axios.get(r,{params:{project_id:this.project.id}}).then((function(t){a.elements=t.data})).catch((function(t){}))},restore:function(){this.elements={},this.element={project_type_department_rel:{}},this.modalDestroy=this.modalShow=!1,this.getEls(1,this.elementsPerPage)},getEl:function(t){var e=this;this.loadingGet=!0,axios.get("json/get/"+t).then((function(t){e.element=t.data,e.loadingGet=!1})).catch((function(t){}))}},created:function(){this.getEls(1,this.elementsPerPage)}},m=(a("nSBQ"),a("KHd+")),f=Object(m.a)(d,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"header pb-6"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"header-body"},[a("div",{staticClass:"row align-items-center pt-0 pt-md-2 pb-4"},[a("div",{staticClass:"col-12 col-lg-7"},[a("BreadCrumb",{attrs:{title:"Cotizaciones Proyecto "+t.project.name_es,parent:"",active:"Proyectos"}})],1)]),t._v(" "),a("div",{staticClass:"row mb-3"},[a("div",{staticClass:"col-6 col-md-5"},[a("a",{staticClass:"btn btn-icon btn-sm btn-inverse-light",attrs:{href:t.routeReturn}},[a("span",{staticClass:"btn-inner--icon"},[a("jam-arrow-left",{staticClass:"current-color"})],1),t._v(" "),a("span",{staticClass:"btn-inner--text"},[t._v("Regresar")])])])])])])]),t._v(" "),a("div",{staticClass:"container-fluid mt--6"},[a("b-tabs",{attrs:{pills:"",vertical:"","nav-wrapper-class":"col-12 col-lg-3 col-xl-2 mb-4 mb-lg-0","nav-class":"border bg-white py-2","content-class":"col-12 col-lg-9 col-xl-10"}},[a("b-tab",{attrs:{title:"Leads",active:"","title-link-class":"border-0 shadow-none bg-white py-3","title-item-class":"pr-0 my-0"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 mb-4 text-right"},[a("button",{staticClass:"btn btn-icon btn-inverse-primary",style:0==t.elements.total?"opacity: 0.50":"",attrs:{type:"button",disabled:0==t.elements.total},on:{click:t.openModalExport}},[a("span",{staticClass:"btn-inner--icon"},[a("jam-download",{staticClass:"current-color"})],1),t._v(" "),a("span",{staticClass:"btn-inner--text"},[t._v("Exportar "+t._s(0==t.elements.total?"(0 Leads)":""))])])]),t._v(" "),a("div",{staticClass:"col-12"},[a("DataTable",{attrs:{object:t.elements,placeholder:"Nombre, DNI","button-update":!1,"button-read":!0,"button-delete":!0,"button-disable":!1,"entries-prop":t.elementsPerPage},on:{get:t.getEls,read:t.showEl,delete:t.deleteEl,"update:entriesProp":function(e){t.elementsPerPage=e},"update:entries-prop":function(e){t.elementsPerPage=e}}})],1)])]),t._v(" "),a("b-tab",{attrs:{title:"Emails Destino","title-link-class":"border-0 shadow-none bg-white py-3","title-item-class":"my-0"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header border-0 pb-0"},[a("h2",{staticClass:"mb-0 text-uppercase text-primary"},[t._v("\n                  Emails Destino\n                ")])]),t._v(" "),a("div",{staticClass:"card-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 mb-4"},[t._v("\n                    Los leads se enviarán automáticamente a los asesores\n                    asignados al Proyecto "),a("b",[t._v(t._s(t.project.name_es))]),t._v(", se designará 1\n                    lead por orden de llegada a cada asesor.\n                  ")]),t._v(" "),a("div",{staticClass:"col-12 py-3"},[a("IconContact")],1)])])])])])])],1)],1),t._v(" "),a("destroy",{attrs:{element:"Lead",open:t.modalDestroy,"loading-get":t.loadingGet,"loading-submit":t.requestSubmit},on:{cancel:t.restoreEl,submit:t.destroyConfirm}}),t._v(" "),a("b-modal",{attrs:{"no-close-on-esc":"","no-close-on-backdrop":"",centered:"",size:"lg","footer-class":"border-0 pt-0","body-class":"pt-0"},on:{close:t.restoreEl},scopedSlots:t._u([{key:"modal-footer",fn:function(e){e.ok;return[a("button",{staticClass:"btn btn-inverse-primary",attrs:{type:"button"},on:{click:t.restoreEl}},[t._v("Ok")])]}}]),model:{value:t.modalShow,callback:function(e){t.modalShow=e},expression:"modalShow"}},[a("template",{slot:"modal-title"},[a("div",{staticClass:"text-primary h2"},[t._v("Detalle Cotización")])]),t._v(" "),a("template",{slot:"modal-header-close"},[a("button",{staticClass:"btn p-0 bg-transparent",attrs:{type:"button"},on:{click:t.restoreEl}},[a("jam-close")],1)]),t._v(" "),t.loadingGet?a("div",[a("div",{staticClass:"w-25 mb-1"},[a("Skeleton")],1),t._v(" "),a("div",{staticClass:"w-75"},[a("Skeleton")],1),t._v(" "),a("div",{staticClass:"w-25 mb-1"},[a("Skeleton")],1),t._v(" "),a("div",{staticClass:"w-75"},[a("Skeleton")],1),t._v(" "),a("div",{staticClass:"w-25 mb-1"},[a("Skeleton")],1),t._v(" "),a("div",{staticClass:"w-75"},[a("Skeleton")],1)]):a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"font-weight-bold"},[t._v("Nombre:")]),t._v(" "),a("p",[t._v(t._s(t.element.name))])])]),t._v(" "),a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"font-weight-bold"},[t._v("DNI:")]),t._v(" "),a("p",[t._v(t._s(t.element.document_number))])])]),t._v(" "),a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"font-weight-bold"},[t._v("Email:")]),t._v(" "),a("p",[t._v(t._s(t.element.email))])])]),t._v(" "),a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"font-weight-bold"},[t._v("Móvil:")]),t._v(" "),a("p",[t._v(t._s(t.element.mobile_formatted))])])]),t._v(" "),a("div",{staticClass:"col-12"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"font-weight-bold d-block"},[t._v("Asesor:")]),t._v(" "),t.element.advisor_rel?a("div",{},[a("div",{staticClass:"media align-items-center"},[a("span",{staticClass:"avatar avatar-sm mr-3 rounded-circle bg-primary"},[a("img",{attrs:{src:t.imagesUrl+"/advisors/"+t.element.advisor_rel.avatar}})]),t._v(t._s(t.element.advisor_rel.name))])]):a("div",[a("p",[t._v("Asesor no asignado aún.")])])])]),t._v(" "),a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"font-weight-bold d-block"},[t._v("Proyecto:")]),t._v(" "),t.element.project_rel?a("div",{},[a("p",{staticClass:"mb-0"},[t._v(t._s(t.element.project_rel.name_es))]),t._v(" "),t.element.project_rel.images_format?a("img",{attrs:{width:"150",height:"auto",src:t.imagesUrl+"/projects/"+t.element.project_rel.images_format[0],alt:""}}):t._e()]):t._e()])]),t._v(" "),a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"font-weight-bold d-block"},[t._v("Tipología:")]),t._v(" "),a("div",{},[a("p",{staticClass:"mb-0"},[t._v(t._s(t.element.project_type_department_rel.name))]),t._v(" "),a("img",{attrs:{width:"150",height:"auto",src:t.imagesUrl+"/projects/tipologies/"+t.element.project_type_department_rel.image,alt:""}})])])]),t._v(" "),a("div",{staticClass:"col-12"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"font-weight-bold"},[t._v("Mensaje:")]),t._v(" "),t.element.message?a("p",[t._v(t._s(t.element.message))]):a("p",[t._v("No hay mensaje registrado")])])])])])],2),t._v(" "),a("b-modal",{attrs:{"no-close-on-esc":"","no-close-on-backdrop":"",centered:"",size:"md","footer-class":"border-0 pt-0","body-class":"pt-0"},on:{close:t.restoreEl},scopedSlots:t._u([{key:"modal-footer",fn:function(e){e.ok;return[a("button",{staticClass:"btn btn-inverse-primary",attrs:{type:"button",disabled:t.request_todo},on:{click:t.allExportFunction}},[t.request_todo?a("span",[t._v("\n          Cargando\n          "),a("svg",{staticClass:"ml-1 loading-svg",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 40 40"}},[a("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[a("g",{attrs:{transform:"translate(1 1)","stroke-width":"3"}},[a("circle",{attrs:{"stroke-opacity":"1",cx:"0",cy:"0",r:"0"}}),t._v(" "),a("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18",transform:"rotate(83.9974 18 18)"}},[a("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"}})],1)])])])]):a("span",[t._v("Todo")])]),t._v(" "),a("button",{staticClass:"btn btn-inverse-info",attrs:{type:"button",disabled:t.request_filter},on:{click:t.filterExportFunction}},[t.request_filter?a("span",[t._v("\n          Cargando\n          "),a("svg",{staticClass:"ml-1 loading-svg",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 40 40"}},[a("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[a("g",{attrs:{transform:"translate(1 1)","stroke-width":"3"}},[a("circle",{attrs:{"stroke-opacity":"1",cx:"0",cy:"0",r:"0"}}),t._v(" "),a("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18",transform:"rotate(83.9974 18 18)"}},[a("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"}})],1)])])])]):a("span",[t._v("Con Filtros")])]),t._v(" "),a("button",{staticClass:"btn btn-inverse-light",attrs:{type:"button"},on:{click:t.restoreEl}},[t._v("\n        Cerrar\n      ")])]}}]),model:{value:t.modalExport,callback:function(e){t.modalExport=e},expression:"modalExport"}},[a("template",{slot:"modal-title"},[a("div",{staticClass:"text-primary h2"},[t._v("Exportar Leads")])]),t._v(" "),a("template",{slot:"modal-header-close"},[a("button",{staticClass:"btn p-0 bg-transparent",attrs:{type:"button"},on:{click:t.restoreEl}},[a("jam-close")],1)]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"font-weight-bold",attrs:{for:"from"}},[t._v("Desde")]),t._v(" "),a("date-picker",{attrs:{"input-attr":{id:"from"},"value-type":"format",format:"HH:mm DD-MM-YYYY",type:"datetime","time-picker-options":{start:"06:00",step:"00:05",end:"24:00"},"first-day-of-week":1,lang:"es","input-class":"form-control",width:"100%"},model:{value:t.element_form.from,callback:function(e){t.$set(t.element_form,"from",e)},expression:"element_form.from"}},[a("jam-calendar")],1),t._v(" "),t.errors_form&&t.errors_form.from?a("label",{staticClass:"mt-2 text-danger text-sm",attrs:{for:"from"}},[t._v(t._s(t.errors_form.from[0]))]):t._e()],1)]),t._v(" "),a("div",{staticClass:"col-12"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"font-weight-bold",attrs:{for:"to"}},[t._v("Hasta")]),t._v(" "),a("date-picker",{attrs:{"input-attr":{id:"to"},"value-type":"format",format:"HH:mm DD-MM-YYYY",type:"datetime","time-picker-options":{start:"06:00",step:"00:05",end:"24:00"},"first-day-of-week":1,lang:"es","input-class":"form-control",width:"100%"},model:{value:t.element_form.to,callback:function(e){t.$set(t.element_form,"to",e)},expression:"element_form.to"}},[a("jam-calendar")],1),t._v(" "),t.errors_form&&t.errors_form.to?a("label",{staticClass:"mt-2 text-danger text-sm",attrs:{for:"to"}},[t._v(t._s(t.errors_form.to[0]))]):t._e()],1)])])],2)],1)}),[],!1,null,null,null);e.default=f.exports},nSBQ:function(t,e,a){"use strict";a("TA8F")},"uH/1":function(t,e,a){"use strict";var s=a("KHd+"),r=Object(s.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",id:"daa92041-3bd8-464c-9c92-61b3fade74bd","data-name":"Layer 1",width:"100%",height:"150",viewBox:"0 0 798.82 755.15"}},[e("defs",[e("linearGradient",{attrs:{id:"15164562-d11a-4880-a4be-123e1b3db71d",x1:"589.65",y1:"790.71",x2:"589.65",y2:"501.48",gradientTransform:"translate(0.01 -0.01)",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{offset:"0","stop-color":"gray","stop-opacity":"0.25"}}),e("stop",{attrs:{offset:"0.54","stop-color":"gray","stop-opacity":"0.12"}}),e("stop",{attrs:{offset:"1","stop-color":"gray","stop-opacity":"0.1"}})],1),e("linearGradient",{attrs:{id:"4387c4a6-2b07-43b0-875b-db8294e1d525",x1:"411.34",y1:"295.04",x2:"411.34",y2:"145.7","xlink:href":"#15164562-d11a-4880-a4be-123e1b3db71d"}}),e("linearGradient",{attrs:{id:"b3ecf4c1-be91-4dc4-9933-d34be9a535f7",x1:"545.52",y1:"654.39",x2:"545.52",y2:"72.43",gradientTransform:"translate(-198.33 -72.44)","xlink:href":"#15164562-d11a-4880-a4be-123e1b3db71d"}}),e("linearGradient",{attrs:{id:"a2779652-f4e8-430c-84f8-85803e1803c0",x1:"725.88",y1:"600.13",x2:"725.88",y2:"322.86","xlink:href":"#15164562-d11a-4880-a4be-123e1b3db71d"}}),e("linearGradient",{attrs:{id:"21cc8c64-f270-4c0a-a12f-47a949bb1355",x1:"637.94",y1:"827.57",x2:"637.94",y2:"758.57",gradientTransform:"translate(-198.33 -72.44)","xlink:href":"#15164562-d11a-4880-a4be-123e1b3db71d"}}),e("linearGradient",{attrs:{id:"1cb52d5d-ff8e-4354-9b08-01122ab0b5ee",x1:"544.65",y1:"346",x2:"544.65",y2:"205.86",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{offset:"0","stop-opacity":"0.12"}}),e("stop",{attrs:{offset:"0.55","stop-opacity":"0.09"}}),e("stop",{attrs:{offset:"1","stop-opacity":"0.02"}})],1),e("linearGradient",{attrs:{id:"081aff01-d630-4567-81f7-f799dc64c22c",x1:"544.65",y1:"339.86",x2:"544.65",y2:"212",gradientTransform:"matrix(1, 0, 0, 1, 0, 0)","xlink:href":"#15164562-d11a-4880-a4be-123e1b3db71d"}}),e("linearGradient",{attrs:{id:"53983704-70f1-484c-b4a9-0fefea28f4ed",x1:"551.34",y1:"291.95",x2:"551.34",y2:"217.12",gradientTransform:"translate(-197.33 -73.75) rotate(0.13)","xlink:href":"#1cb52d5d-ff8e-4354-9b08-01122ab0b5ee"}}),e("linearGradient",{attrs:{id:"07be2ee9-c937-4187-b89e-5aac7e382593",x1:"396.05",y1:"399.86",x2:"396.05",y2:"262.83","xlink:href":"#15164562-d11a-4880-a4be-123e1b3db71d"}}),e("linearGradient",{attrs:{id:"41444764-58a6-4e8b-8ef1-42407163ea5e",x1:"386.87",y1:"501.4",x2:"386.87",y2:"378","xlink:href":"#15164562-d11a-4880-a4be-123e1b3db71d"}}),e("linearGradient",{attrs:{id:"d5f06af9-7d77-4f55-b81c-ea1018bd06e7",x1:"382.07",y1:"603.69",x2:"382.07",y2:"494.16","xlink:href":"#15164562-d11a-4880-a4be-123e1b3db71d"}}),e("linearGradient",{attrs:{id:"a0f95284-1d1b-41ad-8ba2-df33ef14eff8",x1:"347.18",y1:"384.57",x2:"347.18",y2:"323.57","xlink:href":"#1cb52d5d-ff8e-4354-9b08-01122ab0b5ee"}}),e("linearGradient",{attrs:{id:"bf099e8a-7ee0-495a-b39d-11459c4d4e21",x1:"958.8",y1:"334.16",x2:"958.8",y2:"269.01",gradientTransform:"translate(104.71 -563.96) rotate(32.36)","xlink:href":"#15164562-d11a-4880-a4be-123e1b3db71d"}})],1),e("title",[this._v("mail_2")]),e("path",{attrs:{d:"M222,521s-.68-2-1.78-5.72",transform:"translate(-198.34 -72.43)",fill:"none",stroke:"#69f0ae","stroke-miterlimit":"10","stroke-width":"9"}}),e("path",{attrs:{d:"M217,503.68C192.69,410.08,116.9-21.3,876.66,248",transform:"translate(-198.34 -72.43)",fill:"none",stroke:"#69f0ae","stroke-miterlimit":"10","stroke-width":"9","stroke-dasharray":"12.04 12.04"}}),e("path",{attrs:{d:"M882.35,250l5.65,2",transform:"translate(-198.34 -72.43)",fill:"none",stroke:"#69f0ae","stroke-miterlimit":"10","stroke-width":"9"}}),e("path",{attrs:{d:"M794.94,582.69a81.21,81.21,0,0,0-161-15.14l-249.59-6.77,2.74,42.88s-35.59,82.12,151.46,104v83H754.79v-138A81.16,81.16,0,0,0,794.94,582.69Z",transform:"translate(-198.34 -72.43)",fill:"url(#15164562-d11a-4880-a4be-123e1b3db71d)"}}),e("path",{attrs:{d:"M395.66,605.46s-34.08,78.64,145.05,99.62v79.52H747.8V574L393,564.39Z",transform:"translate(-198.34 -72.43)",fill:"#f6b9ad"}}),e("path",{attrs:{d:"M499.16,277.29h0a38.18,38.18,0,0,1-52.5,11.93L335.47,215.95a38.18,38.18,0,0,1-11.93-52.5h0A38.18,38.18,0,0,1,376,151.52l111.19,73.27A38.18,38.18,0,0,1,499.16,277.29Z",transform:"translate(-198.34 -72.43)",fill:"url(#4387c4a6-2b07-43b0-875b-db8294e1d525)"}}),e("path",{attrs:{d:"M493,273.28h0a35.49,35.49,0,0,1-48.8,11.09L340.81,216.26a35.49,35.49,0,0,1-11.09-48.8h0a35.49,35.49,0,0,1,48.8-11.09l103.37,68.12A35.49,35.49,0,0,1,493,273.28Z",transform:"translate(-198.34 -72.43)",fill:"#f6b9ad"}}),e("circle",{attrs:{cx:"510.14",cy:"512.94",r:"77.77",fill:"#f6b9ad"}}),e("rect",{attrs:{x:"185.97",width:"322.42",height:"581.96",rx:"12.25",ry:"12.25",fill:"url(#b3ecf4c1-be91-4dc4-9933-d34be9a535f7)"}}),e("rect",{attrs:{x:"190.33",y:"7.87",width:"313.7",height:"566.24",rx:"13.64",ry:"13.64",fill:"#fff"}}),e("path",{attrs:{d:"M624.33,94.49a25.43,25.43,0,0,1-25.07,21.63H490.92a25.43,25.43,0,0,1-25.06-21.63H408.46a11.91,11.91,0,0,0-11.92,11.91v514a11.91,11.91,0,0,0,11.91,11.92H682.59a11.91,11.91,0,0,0,11.92-11.91v-514A11.91,11.91,0,0,0,682.6,94.49Z",transform:"translate(-198.34 -72.43)",fill:"#1762e6"}}),e("rect",{attrs:{x:"312.67",y:"28.84",width:"69.91",height:"4.37",rx:"2",ry:"2",fill:"#dbdbdb"}}),e("circle",{attrs:{cx:"397.43",cy:"30.59",r:"2.62",fill:"#dbdbdb"}}),e("path",{attrs:{d:"M758.76,599.08h0c-22.57,5.22-38.06-9.5-43.28-32.06L663.62,374.46a42.24,42.24,0,0,1,31.55-50.51h0a42.24,42.24,0,0,1,50.51,31.55L788,553C793.22,575.6,781.32,593.86,758.76,599.08Z",transform:"translate(-198.34 -72.43)",fill:"url(#a2779652-f4e8-430c-84f8-85803e1803c0)"}}),e("rect",{attrs:{x:"693.86",y:"330.01",width:"70.78",height:"282.61",rx:"35.39",ry:"35.39",transform:"translate(-285.75 103.91) rotate(-13.01)",fill:"#f6b9ad"}}),e("rect",{attrs:{x:"291.59",y:"686.15",width:"296",height:"69",fill:"url(#21cc8c64-f270-4c0a-a12f-47a949bb1355)"}}),e("rect",{attrs:{x:"299.59",y:"694.15",width:"280",height:"54",fill:"#ff8976"}}),e("path",{attrs:{d:"M611.56,254.81l-22.94-17.27,10-13-16.69-13.1L571.5,224.66l-23.59-17.75a5.19,5.19,0,0,0-6.23,0l-62.53,46.55c-2.37,2-4.59,4.29-4.61,9.53h-.07l-.16,71.72h0v3.19a7.82,7.82,0,0,0,7.8,7.84h3.08l59.29.13,62.38.14a7.82,7.82,0,0,0,7.84-7.8l.17-74.78H615C615,258.18,613.93,256.81,611.56,254.81Z",transform:"translate(-198.34 -72.43)",fill:"url(#1cb52d5d-ff8e-4354-9b08-01122ab0b5ee)"}}),e("path",{attrs:{d:"M608.84,264.52c0-4.78-1-6-3.14-7.85L547.63,213a4.74,4.74,0,0,0-5.69,0l-57.05,42.48a10.06,10.06,0,0,0-4.2,8.69h-.06l-.15,65.44h0v2.91a7.14,7.14,0,0,0,7.12,7.15h2.81l54.1.12,56.91.13a7.14,7.14,0,0,0,7.15-7.12l.15-68.23Z",transform:"translate(-198.34 -72.43)",fill:"url(#081aff01-d630-4567-81f7-f799dc64c22c)"}}),e("path",{attrs:{d:"M481.61,264.55H607.44a0,0,0,0,1,0,0v69.23a4.18,4.18,0,0,1-4.18,4.18h-117a4.61,4.61,0,0,1-4.61-4.61V264.55a0,0,0,0,1,0,0Z",transform:"translate(-197.67 -73.64) rotate(0.13)",fill:"#1762e6"}}),e("path",{attrs:{d:"M481.61,264.55H607.44a0,0,0,0,1,0,0v69.23a4.18,4.18,0,0,1-4.18,4.18h-117a4.61,4.61,0,0,1-4.61-4.61V264.55a0,0,0,0,1,0,0Z",transform:"translate(-197.67 -73.64) rotate(0.13)",fill:"#fff",opacity:"0.2"}}),e("path",{attrs:{d:"M481.69,264.41,481.55,328a9.77,9.77,0,0,0,9.75,9.79l106.29.24",transform:"translate(-198.34 -72.43)",fill:"#f5f5f5"}}),e("path",{attrs:{d:"M607.53,264.69l-.14,63.63a9.77,9.77,0,0,1-9.79,9.75l-106.29-.24",transform:"translate(-198.34 -72.43)",fill:"#fff"}}),e("path",{attrs:{d:"M541.93,214.66l-56,41.3a9.75,9.75,0,0,0-4.13,8.45l125.89.4c0-4.65-1-5.87-3.08-7.63l-57.05-42.5A4.69,4.69,0,0,0,541.93,214.66Z",transform:"translate(-198.34 -72.43)",fill:"#1762e6"}}),e("path",{attrs:{d:"M541.93,214.66l-56,41.3a9.75,9.75,0,0,0-4.13,8.45l125.89.4c0-4.65-1-5.87-3.08-7.63l-57.05-42.5A4.69,4.69,0,0,0,541.93,214.66Z",transform:"translate(-198.34 -72.43)",opacity:"0.2"}}),e("polygon",{attrs:{points:"395.56 156.6 380.33 144.66 343.52 191.28 323.74 175.94 311.35 191.69 340.14 213.68 340.14 213.68 347.28 219.41 395.56 156.6",fill:"url(#53983704-70f1-484c-b4a9-0fefea28f4ed)"}}),e("polygon",{attrs:{points:"394.44 156.31 380.64 145.73 344.07 193.42 323.76 177.85 313.17 191.65 340.38 212.49 340.38 212.49 347.36 217.72 394.44 156.31",fill:"#fff"}}),e("path",{attrs:{d:"M475.28,382.24h0a37.9,37.9,0,0,1-52.11,11.84l-94.5-61.53a37.9,37.9,0,0,1-11.84-52.11h0a37.9,37.9,0,0,1,52.11-11.84l94.5,61.53A37.9,37.9,0,0,1,475.28,382.24Z",transform:"translate(-198.34 -72.43)",fill:"url(#07be2ee9-c937-4187-b89e-5aac7e382593)"}}),e("path",{attrs:{d:"M470.26,379h0a35.49,35.49,0,0,1-48.8,11.09l-88.51-57.63a35.49,35.49,0,0,1-11.09-48.8h0a35.49,35.49,0,0,1,48.8-11.09l88.51,57.63A35.49,35.49,0,0,1,470.26,379Z",transform:"translate(-198.34 -72.43)",fill:"#f6b9ad"}}),e("path",{attrs:{d:"M456,483.86h0a37.72,37.72,0,0,1-51.87,11.79L329.55,447.4a37.72,37.72,0,0,1-11.79-51.87h0a37.72,37.72,0,0,1,51.87-11.79L444.2,432A37.72,37.72,0,0,1,456,483.86Z",transform:"translate(-198.34 -72.43)",fill:"url(#41444764-58a6-4e8b-8ef1-42407163ea5e)"}}),e("path",{attrs:{d:"M437.28,586h0a38.06,38.06,0,0,1-52.34,11.9L338.75,564.2a38.06,38.06,0,0,1-11.9-52.34h0A38.06,38.06,0,0,1,379.19,500l46.19,33.69A38.06,38.06,0,0,1,437.28,586Z",transform:"translate(-198.34 -72.43)",fill:"url(#d5f06af9-7d77-4f55-b81c-ea1018bd06e7)"}}),e("path",{attrs:{d:"M433.55,583.49h0a35.49,35.49,0,0,1-48.8,11.09l-43.07-31.42a35.49,35.49,0,0,1-11.09-48.8h0a35.49,35.49,0,0,1,48.8-11.09l43.07,31.42A35.49,35.49,0,0,1,433.55,583.49Z",transform:"translate(-198.34 -72.43)",fill:"#f6b9ad"}}),e("rect",{attrs:{x:"245.18",y:"323.57",width:"204",height:"61",fill:"url(#a0f95284-1d1b-41ad-8ba2-df33ef14eff8)"}}),e("rect",{attrs:{x:"252.18",y:"329.57",width:"190",height:"44",fill:"#69f0ae"}}),e("polygon",{attrs:{points:"795.23 214.52 798.82 215.08 798.26 214.55 798.56 214.55 798.09 214.39 733 152.66 717.2 177.59 704.06 200.33 710.15 201.28 707.45 213.6 795.23 214.52",fill:"url(#bf099e8a-7ee0-495a-b39d-11459c4d4e21)"}}),e("polygon",{attrs:{points:"719.93 178.89 707.93 199.7 795.93 214.03 739.25 174.56 719.93 178.89",fill:"#1762e6"}}),e("polygon",{attrs:{points:"719.93 178.89 707.93 199.7 795.93 214.03 739.25 174.56 719.93 178.89",opacity:"0.2"}}),e("polygon",{attrs:{points:"734.38 156.09 795.93 214.03 719.93 178.89 734.38 156.09",fill:"#1762e6"}}),e("polygon",{attrs:{points:"711.17 211.93 795.69 213.54 716.79 185.52 711.17 211.93",fill:"#1762e6"}}),e("path",{attrs:{d:"M451.9,481.25h0a35.49,35.49,0,0,1-48.8,11.09l-70.16-45.4a35.49,35.49,0,0,1-11.09-48.8h0A35.49,35.49,0,0,1,370.65,387l70.16,45.4A35.49,35.49,0,0,1,451.9,481.25Z",transform:"translate(-198.34 -72.43)",fill:"#f6b9ad"}})])}),[],!1,null,null,null);e.a=r.exports}}]);