(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{jApx:function(t,e,s){"use strict";s.r(e);var n=s("F05R"),a=s("0YuL"),r=s("/hKJ"),o=s("8M9X"),i=s("CkAj"),l=s("TVlQ"),c=s("FTHT"),u={components:{Button:l.a,Skeleton:a.a,DataTableDraggable:o.a,NoData:r.a,Destroy:i.a,SkeletonForm:c.a},props:{messageOrder:String,routeGet:String,routeOrder:String,route:String},data:function(){return{elements:{},title:"",element:{},errors:{},loadingGet:!1,requestSubmit:!1,modalCreateUpdate:!1,modalDestroy:!1}},methods:{submit:function(){var t,e,s=this;this.requestSubmit=!0,"Nuevo"==this.title?(t="general/"+this.route,e="post"):(t="general/"+this.route+"/"+this.element.id,e="put"),axios({method:e,url:t,data:this.element}).then((function(t){s.requestSubmit=!1,Swal.fire({title:t.data.title,text:t.data.message,type:"success",confirmButtonText:"OK",buttonsStyling:!1,customClass:{confirmButton:"btn btn-inverse-primary"}}),s.restore()})).catch((function(t){s.requestSubmit=!1,422!==t.response.status?(Swal.fire({title:t.response.data.title,text:t.response.data.message,type:"error",confirmButtonText:"OK",buttonsStyling:!1,customClass:{confirmButton:"btn btn-inverse-primary"}}),s.restoreEl()):s.errors=t.response.data.errors||{}}))},restore:function(){this.errors={},this.elements={},this.modalCreateUpdate=this.modalDestroy=!1,this.element={},this.getEls()},restoreEl:function(){this.errors={},this.modalCreateUpdate=this.modalDestroy=!1,this.element={}},handleChange:function(t){var e=this;axios.put(this.routeOrder,t).then((function(t){e.restore(),Swal.fire({title:t.data.title,text:t.data.message,type:"success",confirmButtonText:"OK",buttonsStyling:!1,customClass:{confirmButton:"btn btn-inverse-primary"}})})).catch((function(t){Swal.fire({title:t.response.data.title,text:t.response.data.message,type:"error",confirmButtonText:"OK",buttonsStyling:!1,customClass:{confirmButton:"btn btn-inverse-primary"}})}))},editEl:function(t){this.title="Actualizar",this.modalCreateUpdate=!0,this.getEl(t)},destroyConfirm:function(){var t=this;this.requestSubmit=!0,axios.delete("general/"+this.route+"/"+this.element.id).then((function(e){t.requestSubmit=!1,t.restore(),Swal.fire({title:e.data.title,text:e.data.message,type:"success",confirmButtonText:"OK",buttonsStyling:!1,customClass:{confirmButton:"btn btn-inverse-primary"}})})).catch((function(e){Swal.fire({title:e.response.data.title,text:e.response.data.message,type:"error",confirmButtonText:"OK",buttonsStyling:!1,customClass:{confirmButton:"btn btn-inverse-primary"}}),t.restoreEl()}))},deleteEl:function(t){this.modalDestroy=!0,this.getEl(t)},getEl:function(t){var e=this;this.loadingGet=!0,axios.get("general/"+this.route+"/json/get/"+t).then((function(t){e.element=t.data,e.loadingGet=!1})).catch((function(t){}))},newEl:function(){this.title="Nuevo",this.modalCreateUpdate=!0},getEls:function(){var t=this;axios.get(this.routeGet).then((function(e){t.elements=e.data})).catch((function(t){}))}},created:function(){this.getEls()}},m=s("KHd+"),d=Object(m.a)(u,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row mb-4"},[t._m(0),t._v(" "),s("div",{staticClass:"col-12 col-lg-9"},[s("div",{staticClass:"text-right"},[s("a",{staticClass:"btn btn-icon btn-inverse-primary",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.newEl(e)}}},[s("span",{staticClass:"btn-inner--icon"},[s("jam-plus",{staticClass:"current-color"})],1),t._v(" "),s("span",{staticClass:"btn-inner--text"},[t._v("Nuevo Horario")])])]),t._v(" "),s("DataTableDraggable",{attrs:{object:t.elements,buttonUpdate:!0,buttonDelete:!0,buttonDetail:!1,"message-order":t.messageOrder},on:{"update:object":function(e){t.elements=e},drag:t.handleChange,edit:t.editEl,delete:t.deleteEl}})],1),t._v(" "),s("b-modal",{attrs:{"no-close-on-esc":"","no-close-on-backdrop":"",centered:"","footer-class":"border-0 pt-0","body-class":"pt-0"},on:{close:t.restoreEl},scopedSlots:t._u([{key:"modal-footer",fn:function(e){e.ok;return[s("Button",{attrs:{classes:["btn-inverse-primary"],text:"Nuevo"==t.title?"Crear":"Actualizar","request-server":t.requestSubmit},on:{click:t.submit}}),t._v(" "),s("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:t.restoreEl}},[t._v("\n        Cancelar\n      ")])]}}]),model:{value:t.modalCreateUpdate,callback:function(e){t.modalCreateUpdate=e},expression:"modalCreateUpdate"}},[s("template",{slot:"modal-title"},[s("div",{staticClass:"text-primary h2"},[t._v(t._s(t.title)+" Horario")])]),t._v(" "),s("template",{slot:"modal-header-close"},[s("button",{staticClass:"btn p-0 bg-transparent",attrs:{type:"button"},on:{click:t.restoreEl}},[s("jam-close")],1)]),t._v(" "),t.loadingGet?s("div",[s("SkeletonForm")],1):s("div",[s("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"font-weight-bold d-block",attrs:{for:"name"}},[t._v("Nombre")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.element.name,expression:"element.name"}],staticClass:"form-control",attrs:{type:"text",id:"name"},domProps:{value:t.element.name},on:{input:function(e){e.target.composing||t.$set(t.element,"name",e.target.value)}}}),t._v(" "),t.errors&&t.errors.name?s("label",{staticClass:"mt-2 text-danger text-sm",attrs:{for:"name"}},[t._v(t._s(t.errors.name[0]))]):t._e()])])])])])],2),t._v(" "),s("destroy",{attrs:{element:"horario",open:t.modalDestroy,"loading-get":t.loadingGet,"loading-submit":t.requestSubmit},on:{cancel:t.restoreEl,submit:t.destroyConfirm}})],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12 col-lg-3"},[e("h2",[this._v("Horarios de Cita Online")]),this._v(" "),e("p",[this._v("\n      Registra los horarios que el Cliente puede escoger para agendar una cita\n      en la página "),e("b",[this._v("Cita Online")]),this._v(".\n    ")])])}],!1,null,null,null).exports,p={components:{Button:l.a,Skeleton:a.a,DataTableDraggable:o.a,NoData:r.a,Destroy:i.a,SkeletonForm:c.a},props:{messageOrder:String,routeGet:String,routeOrder:String,route:String},data:function(){return{elements:{},title:"",element:{active:!0},errors:{},loadingGet:!1,requestSubmit:!1,modalCreateUpdate:!1,modalDestroy:!1}},methods:{submit:function(){var t,e,s=this;this.requestSubmit=!0,"Nuevo"==this.title?(t="general/"+this.route,e="post"):(t="general/"+this.route+"/"+this.element.id,e="put"),axios({method:e,url:t,data:this.element}).then((function(t){s.requestSubmit=!1,Swal.fire({title:t.data.title,text:t.data.message,type:"success",confirmButtonText:"OK",buttonsStyling:!1,customClass:{confirmButton:"btn btn-inverse-primary"}}),s.restore()})).catch((function(t){s.requestSubmit=!1,422!==t.response.status?(Swal.fire({title:t.response.data.title,text:t.response.data.message,type:"error",confirmButtonText:"OK",buttonsStyling:!1,customClass:{confirmButton:"btn btn-inverse-primary"}}),s.restoreEl()):s.errors=t.response.data.errors||{}}))},restore:function(){this.errors={},this.elements={},this.element={active:!0,name:""},this.modalCreateUpdate=this.modalDestroy=!1,this.getEls()},restoreEl:function(){this.errors={},this.modalCreateUpdate=this.modalDestroy=!1,this.element={active:!0}},handleChange:function(t){var e=this;axios.put(this.routeOrder,t).then((function(t){e.restore(),Swal.fire({title:t.data.title,text:t.data.message,type:"success",confirmButtonText:"OK",buttonsStyling:!1,customClass:{confirmButton:"btn btn-inverse-primary"}})})).catch((function(t){Swal.fire({title:t.response.data.title,text:t.response.data.message,type:"error",confirmButtonText:"OK",buttonsStyling:!1,customClass:{confirmButton:"btn btn-inverse-primary"}})}))},editEl:function(t){this.title="Actualizar",this.modalCreateUpdate=!0,this.getEl(t)},destroyConfirm:function(){var t=this;this.requestSubmit=!0,axios.delete("general/"+this.route+"/"+this.element.id).then((function(e){t.requestSubmit=!1,t.restore(),Swal.fire({title:e.data.title,text:e.data.message,type:"success",confirmButtonText:"OK",buttonsStyling:!1,customClass:{confirmButton:"btn btn-inverse-primary"}})})).catch((function(e){Swal.fire({title:e.response.data.title,text:e.response.data.message,type:"error",confirmButtonText:"OK",buttonsStyling:!1,customClass:{confirmButton:"btn btn-inverse-primary"}}),t.restoreEl()}))},deleteEl:function(t){this.modalDestroy=!0,this.getEl(t)},getEl:function(t){var e=this;this.loadingGet=!0,axios.get("general/"+this.route+"/json/get/"+t).then((function(t){e.element=t.data,e.loadingGet=!1})).catch((function(t){}))},newEl:function(){this.title="Nuevo",this.modalCreateUpdate=!0},getEls:function(){var t=this;axios.get(this.routeGet).then((function(e){t.elements=e.data})).catch((function(t){}))}},created:function(){this.getEls()}},h=Object(m.a)(p,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row mb-4"},[t._m(0),t._v(" "),s("div",{staticClass:"col-12 col-lg-9"},[s("div",{staticClass:"text-right"},[s("a",{staticClass:"btn btn-icon btn-inverse-primary",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.newEl(e)}}},[s("span",{staticClass:"btn-inner--icon"},[s("jam-plus",{staticClass:"current-color"})],1),t._v(" "),s("span",{staticClass:"btn-inner--text"},[t._v("Nueva Opción de Financiamiento")])])]),t._v(" "),s("DataTableDraggable",{attrs:{object:t.elements,buttonUpdate:!0,buttonDelete:!0,buttonDetail:!1,"message-order":t.messageOrder},on:{"update:object":function(e){t.elements=e},drag:t.handleChange,edit:t.editEl,delete:t.deleteEl}})],1),t._v(" "),s("b-modal",{attrs:{"no-close-on-esc":"","no-close-on-backdrop":"",centered:"","footer-class":"border-0 pt-0","body-class":"pt-0"},on:{close:t.restoreEl},scopedSlots:t._u([{key:"modal-footer",fn:function(e){e.ok;return[s("Button",{attrs:{classes:["btn-inverse-primary"],text:"Nuevo"==t.title?"Crear":"Actualizar","request-server":t.requestSubmit},on:{click:t.submit}}),t._v(" "),s("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:t.restoreEl}},[t._v("\n        Cancelar\n      ")])]}}]),model:{value:t.modalCreateUpdate,callback:function(e){t.modalCreateUpdate=e},expression:"modalCreateUpdate"}},[s("template",{slot:"modal-title"},[s("div",{staticClass:"text-primary h2"},[t._v(t._s(t.title)+" Opción de Financiamiento")])]),t._v(" "),s("template",{slot:"modal-header-close"},[s("button",{staticClass:"btn p-0 bg-transparent",attrs:{type:"button"},on:{click:t.restoreEl}},[s("jam-close")],1)]),t._v(" "),t.loadingGet?s("div",[s("SkeletonForm")],1):s("div",[s("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"font-weight-bold d-block",attrs:{for:"name"}},[t._v("Nombre")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.element.name,expression:"element.name"}],staticClass:"form-control",attrs:{type:"text",id:"name"},domProps:{value:t.element.name},on:{input:function(e){e.target.composing||t.$set(t.element,"name",e.target.value)}}}),t._v(" "),t.errors&&t.errors.name?s("label",{staticClass:"mt-2 text-danger text-sm",attrs:{for:"name"}},[t._v(t._s(t.errors.name[0]))]):t._e()])])])])])],2),t._v(" "),s("destroy",{attrs:{element:"opción de financiamiento",open:t.modalDestroy,"loading-get":t.loadingGet,"loading-submit":t.requestSubmit},on:{cancel:t.restoreEl,submit:t.destroyConfirm}})],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12 col-lg-3"},[e("h2",[this._v("Opciones de Financiamiento")]),this._v(" "),e("p",[this._v("\n      Registra las opciones de financiamiento con la que cuentan los Proyectos, las opciones habilitadas se mostrarán en el "),e("b",[this._v("email de cotización que se envia al Cliente")]),this._v(".\n    ")])])}],!1,null,null,null).exports,b={components:{BreadCrumb:n.a,Schedules:d,FinancingOptions:h},props:{messageOrder:String,routeGetSchedules:String,routeOrderSchedules:String,routeGetFinancingOptions:String,routeOrderFinancingOptions:String},data:function(){return{}},methods:{},created:function(){}},f=Object(m.a)(b,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"header pb-6"},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"header-body"},[s("div",{staticClass:"row align-items-center pt-0 pt-md-2 pb-4"},[s("div",{staticClass:"col-6 col-md-7"},[s("BreadCrumb",{attrs:{title:"Configuración General",parent:"Configuración",active:"Configuración General"}})],1)])])])]),t._v(" "),s("div",{staticClass:"container-fluid mt--6"},[s("Schedules",{attrs:{routeGet:t.routeGetSchedules,routeOrder:t.routeOrderSchedules,route:"schedules",messageOrder:t.messageOrder}}),t._v(" "),s("FinancingOptions",{attrs:{routeGet:t.routeGetFinancingOptions,routeOrder:t.routeOrderFinancingOptions,route:"financing-options",messageOrder:t.messageOrder}})],1)])}),[],!1,null,null,null);e.default=f.exports}}]);