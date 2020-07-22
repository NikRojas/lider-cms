(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{234:function(t,e,a){"use strict";a.r(e);var s,o=a(45),i=a(198),n=a(60),r=a(49),l=a(63);function c(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var d={props:{leadsByDepartment:Array,leadsBySource:Array},components:{DataTable:n.a,Button:o.a,BreadCrumb:r.a,InputArray:i.a,Departments:l.a},data:function(){return{contactos:{},contacto:{},departments:[],email_destination_by_deparment:[],information:{department_id:"",email_destination_leads:[],email_destination_leads_formatted:[""]},requestServer:!1,editEmailBlock:!1,errors:{}}},methods:(s={getDepartments:function(){var t=this;axios.get("/json/select/departments").then((function(e){t.departments=e.data})).catch((function(t){}))},setDepartment:function(t){this.information.department_id=t},restoreEmail:function(){this.information={email_destination_leads:[],department_id:"",email_destination_leads_formatted:[""]},this.editEmailBlock=!1,this.getContactEmailDestination()},getContactEmailDestination:function(){var t=this;axios.get("leads/json/contact-email-destination").then((function(e){t.email_destination_by_deparment=e.data})).catch((function(t){}))},editEmailDestination:function(){this.editEmailBlock=!0},restoreEl:function(){this.$refs["modal-show"].hide(),this.$refs["modal-delete"].hide(),this.contacto={}},deleteLead:function(t){this.$refs["modal-delete"].show(),this.getContact(t)},restorePage:function(){this.contactos={},this.getContacts(1,5),this.$refs["modal-show"].hide(),this.$refs["modal-delete"].hide(),this.requestServer=!1,this.contacto={}},deleteLeadConfirm:function(){var t=this;this.requestServer=!0,axios.delete("leads/"+this.contacto.id).then((function(e){t.restorePage(),Swal.fire({title:e.data.title,text:e.data.message,type:"success",confirmButtonText:"OK",buttonsStyling:!1,customClass:{confirmButton:"btn btn-primary"}})})).catch((function(e){t.restoreEl(),Swal.fire({title:e.response.data.title,text:e.response.data.message,type:"error",confirmButtonText:"OK",buttonsStyling:!1,customClass:{confirmButton:"btn btn-primary"}})}))},showContact:function(t){this.$refs["modal-show"].show(),this.getContact(t)},getContact:function(t){var e=this;axios.get("json/contactos/"+t).then((function(t){e.contacto=t.data})).catch((function(t){}))},getContacts:function(t,e){var a=this,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o="json/contactos?page="+t+"&desde="+e;s&&(o=o+"&buscar="+s),axios.get(o).then((function(t){a.contactos=t.data})).catch((function(t){}))}},c(s,"restoreEmail",(function(){this.requestServer=this.editEmailBlock=!1,this.errors={},this.information={department_id:"",email_destination_leads:[],email_destination_leads_formatted:[""]},this.getContactEmailDestination()})),c(s,"updateEmail",(function(){var t=this;this.requestServer=!0,axios.put("leads",this.information).then((function(e){t.requestServer=!1,t.restoreEmail(),Swal.fire({title:e.data.title,text:e.data.message,type:"success",confirmButtonText:"OK",buttonsStyling:!1,customClass:{confirmButton:"btn btn-primary"}})})).catch((function(e){t.requestServer=!1,422!==e.response.status?(t.restorePage(),Swal.fire({title:e.response.data.title,text:e.response.data.message,type:"error",confirmButtonText:"OK",buttonsStyling:!1,customClass:{confirmButton:"btn btn-primary"}})):t.errors=e.response.data.errors||{}}))})),s),created:function(){this.getContacts(1,5),this.getContactEmailDestination(),this.getDepartments()}},m=a(43),u=Object(m.a)(d,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"header pb-6"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"header-body"},[a("div",{staticClass:"row align-items-center py-4"},[a("div",{staticClass:"col-12"},[a("BreadCrumb",{attrs:{title:"Leads",active:"Leads"}})],1)])])])]),t._v(" "),a("div",{staticClass:"container-fluid mt--6"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-8"},[a("div",{staticClass:"row"},t._l(t.leadsByDepartment,(function(e,s){return a("div",{key:s,staticClass:"col-6 col-xl-3 col-md-6 mb-4"},[a("div",{staticClass:"card card-stats shadow"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("h5",{staticClass:"card-title text-uppercase text-warning mb-0"},[t._v(t._s(e.name)+" - Landing")]),t._v(" "),a("span",{staticClass:"h2 font-weight-bold mb-0"},[t._v(t._s(e.count))])]),t._v(" "),a("div",{staticClass:"col-auto"},[e.logo?a("img",{attrs:{height:"45",width:"auto",src:"https://storage.googleapis.com/playgroup-web/img/departments/"+e.logo}}):t._e()])])])])])})),0)]),t._v(" "),a("div",{staticClass:"col-12 col-md-4"},[a("div",{staticClass:"row"},t._l(t.leadsBySource,(function(e,s){return a("div",{key:s,staticClass:"col-6 col-md-12 col-xl-6 mb-4"},[a("div",{staticClass:"card card-stats shadow"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("h5",{staticClass:"card-title text-uppercase text-success mb-0"},[t._v(t._s(e.name))]),t._v(" "),a("span",{staticClass:"h2 font-weight-bold mb-0"},[t._v(t._s(e.count))])])])])])])})),0)])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-lg-8 mb-4 mb-lg-0"},[a("DataTable",{attrs:{titulo:"Leads",placeholder:"Nombre, Mensaje",object:t.contactos,buttonRead:!0,buttonUpdate:!1,buttonDelete:!0},on:{"update:object":function(e){t.contactos=e},delete:t.deleteLead,read:t.showContact,get:t.getContacts}})],1),t._v(" "),a("div",{staticClass:"col-12 col-lg-4"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"card shadow"},[t._m(0),t._v(" "),a("div",{staticClass:"card-body"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.updateEmail(e)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"form-group"},[t.editEmailBlock?a("div",[a("label",{staticClass:"font-weight-bold"},[t._v("Correos")]),t._v(" "),a("InputArray",{attrs:{arreglo:t.information.email_destination_leads,"arreglo-editar":t.information.email_destination_leads_formatted},on:{"update:arreglo":function(e){return t.$set(t.information,"email_destination_leads",e)}}}),t._v(" "),t.errors&&Object.keys(t.errors).length?a("label",{staticClass:"mt-2 mb-0 text-danger text-sm",attrs:{for:"id_email_destination_leads"}},[t._v("\n                            Los campos correo(s) electrónico(s) destino deben ser una dirección de correo válida.\n                          ")]):t._e(),t._v(" "),a("div",{staticClass:"row mt-3"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"font-weight-bold",attrs:{for:"id_department"}},[t._v("Especialidad:")]),t._v(" "),t.departments&&t.departments.length>0?a("Departments",{attrs:{object:t.departments},on:{click:t.setDepartment,"update:object":function(e){t.departments=e}}}):t._e(),t._v(" "),t.errors&&t.errors.department_id?a("label",{staticClass:"mt-2 text-danger text-sm",attrs:{for:"id_department"}},[t._v(t._s(t.errors.department_id[0]))]):t._e()],1)])])],1):t._e(),t._v(" "),t.editEmailBlock?t._e():a("div",[t.email_destination_by_deparment.length>0?a("div",t._l(t.email_destination_by_deparment,(function(e,s){return a("div",{key:"e"+s,staticClass:"mb-4"},[e.rel_department.logo?a("img",{attrs:{height:"40",width:"40",src:"https://storage.googleapis.com/playgroup-web/img/departments/"+e.rel_department.logo,alt:e.rel_department.name}}):t._e(),t._v(" "),a("h4",{staticClass:"mb-1"},[t._v(t._s(e.rel_department.name))]),t._v(" "),t._l(e.email_destination_leads_formatted,(function(e,s){return a("p",{key:s,staticClass:"d-block mb-0"},[t._v(t._s(e))])}))],2)})),0):a("p",[t._v("No registrado")])])])])]),t._v(" "),a("div",{staticClass:"text-right"},[t.editEmailBlock?t._e():a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.editEmailDestination(e)}}},[t._v("Editar")]),t._v(" "),t.editEmailBlock?a("Button",{attrs:{text:"Actualizar",classes:["btn-primary","mr-2"],"request-server":t.requestServer,"º":""}}):t._e(),t._v(" "),t.editEmailBlock?a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.restoreEmail(e)}}},[t._v("Cancelar")]):t._e()],1)])])])])])])])]),t._v(" "),a("b-modal",{ref:"modal-delete",attrs:{centered:""},scopedSlots:t._u([{key:"modal-footer",fn:function(e){e.ok,e.cancel;return[a("Button",{attrs:{classes:["btn-danger"],text:"Eliminar","request-server":t.requestServer},on:{click:t.deleteLeadConfirm}}),t._v(" "),a("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:t.restoreEl}},[t._v("Cancelar")])]}}])},[a("template",{slot:"modal-title"},[a("h2",{staticClass:"mb-0 mb-0 text-uppercase text-primary"},[t._v("Eliminar Lead")])]),t._v(" "),a("p",{staticClass:"mb-0"},[t._v("Esta seguro que desea eliminar el lead?")])],2),t._v(" "),a("b-modal",{ref:"modal-show",attrs:{centered:"",size:"lg"},scopedSlots:t._u([{key:"modal-footer",fn:function(e){e.ok,e.cancel;return[a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.restoreEl}},[t._v("Cerrar")])]}}])},[a("template",{slot:"modal-title"},[a("h2",{staticClass:"mb-0 mb-0 text-uppercase text-primary"},[t._v("Detalle Lead")])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-control-label d-block"},[t._v("Nombre Completo")]),t._v(" "),t.contacto.full_name?a("p",[t._v(t._s(t.contacto.full_name))]):t._e()])]),t._v(" "),a("div",{staticClass:"col-6"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-control-label d-block"},[t._v("Teléfono")]),t._v(" "),t.contacto.phone?a("p",[t._v(t._s(t.contacto.phone))]):t._e()])]),t._v(" "),a("div",{staticClass:"col-6"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-control-label d-block"},[t._v("Correo Electrónico")]),t._v(" "),t.contacto.email?a("p",[t._v(t._s(t.contacto.email))]):t._e()])]),t._v(" "),a("div",{staticClass:"col-6"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-control-label d-block"},[t._v("Procedencia")]),t._v(" "),t.contacto.department_rel?a("p",[t._v(t._s(t.contacto.department_rel.title))]):a("p",[t._v("No registrado")])])]),t._v(" "),a("div",{staticClass:"col-6"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-control-label d-block"},[t._v("Contactar por")]),t._v(" "),t.contacto.lead_medium_rel?a("p",[t._v(t._s(t.contacto.lead_medium_rel.name))]):a("p",[t._v("No registrado")])])]),t._v(" "),a("div",{staticClass:"col-6"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-control-label d-block"},[t._v("Enviado el")]),t._v(" "),t.contacto.created_at?a("p",[t._v(t._s(t.contacto.created_at))]):t._e()])]),t._v(" "),a("div",{staticClass:"col-6"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-control-label d-block"},[t._v("Fuente")]),t._v(" "),t.contacto.lead_source_rel?a("p",[t._v(t._s(t.contacto.lead_source_rel.name))]):t._e()])]),t._v(" "),a("div",{staticClass:"col-12"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-control-label d-block"},[t._v("Mensaje")]),t._v(" "),t.contacto.message?a("p",[t._v(t._s(t.contacto.message))]):a("p",[t._v("No registrado")])])])])],2)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header border-0"},[e("h2",{staticClass:"mb-0 text-uppercase text-primary"},[this._v("Correos Destino")])])}],!1,null,null,null);e.default=u.exports},58:function(t,e,a){var s=a(62);"string"==typeof s&&(s=[[t.i,s,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a(47)(s,o);s.locals&&(t.exports=s.locals)},61:function(t,e,a){"use strict";var s=a(58);a.n(s).a},62:function(t,e,a){(t.exports=a(46)(!1)).push([t.i,".department-selected[data-v-04070229] {\n  border: 2px solid #007bff;\n  padding: 1%;\n  border-radius: 0.25rem;\n}\n.department[data-v-04070229] {\n  cursor: pointer;\n}",""])},63:function(t,e,a){"use strict";var s={props:{index:{type:Number},object:{type:Array,required:!0}},data:function(){return{indexData:""}},methods:{clickElement:function(t){this.indexData=t}},watch:{index:function(t,e){t&&(this.indexData=t)},indexData:function(t,e){t&&this.$emit("click",t)}}},o=(a(61),a(43)),i=Object(o.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.object&&t.object.length>0?a("div",{staticClass:"row"},t._l(t.object,(function(e){return a("div",{key:e.id,staticClass:"col-6 col-sm-3 col-lg-auto text-center",on:{click:function(a){return t.clickElement(e.id)}}},[a("div",{staticClass:"department pr-2 py-2",class:{"department-selected":e.id==t.indexData}},[e.logo?a("img",{attrs:{src:"https://storage.googleapis.com/playgroup-web/img/departments/"+e.logo,height:"40",width:"auto",alt:e.title}}):t._e(),t._v(" "),a("small",{staticClass:"text-uppercase d-block font-weight-bold"},[t._v(t._s(e.title))])])])})),0):t._e()])}),[],!1,null,"04070229",null);e.a=i.exports}}]);