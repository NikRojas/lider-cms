(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{"1jZt":function(e,t,s){var a=s("uNoH");"string"==typeof a&&(a=[[e.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(a,n);a.locals&&(e.exports=a.locals)},CkAj:function(e,t,s){"use strict";var a=s("0YuL"),n=s("TVlQ"),r={props:{open:Boolean,loadingGet:Boolean,element:String,loadingSubmit:Boolean},components:{Button:n.a,Skeleton:a.a},data:function(){return{requestSubmit:!1,requestGet:!1,inputDestroy:"",buttonDestroy:!0}},methods:{submit:function(){this.$emit("submit")},cancelCustom:function(){this.$emit("cancel")},restore:function(){this.requestSubmit=!1,this.requestGet=!1,this.inputDestroy="",this.buttonDestroy=!0}},watch:{open:function(e){0==e&&this.restore()},inputDestroy:function(e){e===e.toUpperCase()&&"ELIMINAR"===e?this.buttonDestroy=!1:this.buttonDestroy=!0}}},o=s("KHd+"),i=Object(o.a)(r,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("b-modal",{attrs:{"no-close-on-esc":"","no-close-on-backdrop":"",centered:"","footer-class":"border-0 pt-0","body-class":"pt-0"},on:{close:e.cancelCustom},scopedSlots:e._u([{key:"modal-footer",fn:function(t){t.ok;return[s("Button",{directives:[{name:"show",rawName:"v-show",value:!e.loadingGet,expression:"!loadingGet"}],attrs:{classes:["btn-danger"],text:"Eliminar","request-server":e.loadingSubmit,disabled:e.buttonDestroy},on:{click:e.submit}}),e._v(" "),s("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:e.cancelCustom}},[e._v("Cancelar")])]}}]),model:{value:e.open,callback:function(t){e.open=t},expression:"open"}},[s("template",{slot:"modal-title"},[s("div",{staticClass:"text-primary h2"},[e._v("Eliminar "+e._s(e.element.charAt(0).toUpperCase()+e.element.slice(1)))])]),e._v(" "),s("template",{slot:"modal-header-close"},[s("button",{staticClass:"btn p-0 bg-transparent",attrs:{type:"button"},on:{click:e.cancelCustom}},[s("jam-close")],1)]),e._v(" "),e.loadingGet?s("div",[s("Skeleton"),e._v(" "),s("div",{staticClass:"w-25 mb-1"},[s("Skeleton")],1),e._v(" "),s("div",{staticClass:"w-75"},[s("Skeleton")],1)],1):s("div",[s("p",[e._v("Esta apunto de eliminar un "+e._s(e.element)+", una vez que realice esta acción no se puede deshacer")]),e._v(" "),s("p",{staticClass:"mb-2"},[e._v("\n      Escribe\n      "),s("b",[e._v("ELIMINAR")]),e._v(" para confirmar\n    ")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.inputDestroy,expression:"inputDestroy"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.inputDestroy},on:{input:function(t){t.target.composing||(e.inputDestroy=t.target.value)}}})])],2)}),[],!1,null,null,null);t.a=i.exports},J3pF:function(e,t,s){"use strict";s("1jZt")},QmYa:function(e,t,s){"use strict";s.r(t);var a=s("F05R"),n=s("TVlQ"),r=s("ZMUr"),o=s("0YuL"),i=s("/hKJ"),l=s("ksP6"),c=s.n(l),d={props:{projectId:Number,imagesUrl:String,projectName:String},components:{NoData:i.a,Button:n.a,vueDropzone:c.a,Skeleton:o.a},data:function(){return{modalAddImages:!1,requestSubmit:!1,loadingEls:!1,errors:{},elements:[],deleteEls:[],requestDelete:!1,dropzoneOptions:{url:"/",maxFiles:20,acceptedFiles:"image/png,image/jpeg,image/jpg",autoProcessQueue:!1,thumbnailWidth:150,addRemoveLinks:!0,dictRemoveFile:"Remover"},deleteBlock:!1}},methods:{restoreDelete:function(){this.deleteBlock=!1,this.requestDelete=!1,this.deleteEls=[],this.errors={}},deleteElsBlock:function(){this.deleteBlock=!0},deleteConfirm:function(){var e=this;this.requestDelete=!0,axios.delete("/proyectos/inmuebles/images",{params:{images:this.deleteEls}}).then((function(t){e.restorePage(),Swal.fire({title:t.data.title,text:t.data.message,type:"success",confirmButtonText:"Ok",buttonsStyling:!1,customClass:{confirmButton:"btn btn-primary"}})})).catch((function(t){e.requestDelete=!1,422!==t.response.status?(e.restoreDelete(),Swal.fire({title:t.response.data.title,text:t.response.data.message,type:"error",confirmButtonText:"Ok",buttonsStyling:!1,customClass:{confirmButton:"btn btn-primary"}})):e.errors=t.response.data.errors||{}}))},restorePage:function(){this.elements=[],this.requestSubmit=!1,this.errors={},this.requestDelete=!1,this.$refs.ref_images&&this.$refs.ref_images.removeAllFiles(),this.modalAddImages=!1,this.deleteBlock=!1,this.deleteEls=[],this.getEls()},restoreEl:function(){this.requestSubmit=!1,this.requestDelete=!1,this.errors={},this.$refs.ref_images&&this.$refs.ref_images.removeAllFiles(),this.modalAddImages=!1},getEls:function(){var e=this;this.loadingEls=!0,axios.get("/proyectos/inmuebles/images/json/get-all/"+this.projectId).then((function(t){e.elements=t.data,e.loadingEls=!1})).catch((function(e){}))},storeImages:function(){var e=this;this.requestSubmit=!0;var t=new FormData;if(this.$refs.ref_images.dropzone.files[0]){var s=this.$refs.ref_images.dropzone.files.length;t.append("elements_count",s),t.append("images","filled"),this.$refs.ref_images.dropzone.files.forEach((function(e,s){t.append("images"+s,e)}))}t.append("project_id",this.projectId),axios.post("/proyectos/inmuebles/images",t).then((function(t){e.requestSubmit=!1,Swal.fire({title:t.data.title,html:t.data.message,type:"success",confirmButtonText:"Ok",buttonsStyling:!1,customClass:{confirmButton:"btn btn-primary"}}),e.restorePage()})).catch((function(t){e.requestSubmit=!1,422!==t.response.status?(Swal.fire({title:t.response.data.title,html:t.response.data.message,type:"error",confirmButtonText:"Ok",buttonsStyling:!1,customClass:{confirmButton:"btn btn-primary"}}),e.restoreEl()):e.errors=t.response.data.errors||{}}))}},created:function(){this.getEls()}},m=(s("gE6u"),s("KHd+")),u=Object(m.a)(d,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"row"},[e.deleteBlock?s("div",{staticClass:"col-12 text-right mb-4"},[s("div",[e.errors&&e.errors.images?s("label",{staticClass:"mb-2 text-danger text-sm",attrs:{for:"images"}},[e._v(e._s(e.errors.images[0]))]):e._e()]),e._v(" "),s("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(t){return t.preventDefault(),e.restoreDelete.apply(null,arguments)}}},[e._v("\n        Cancelar\n      ")]),e._v(" "),s("Button",{attrs:{classes:["btn-danger"],text:"Confirmar Eliminar Imágenes","request-server":e.requestDelete},on:{click:e.deleteConfirm}})],1):s("div",{staticClass:"col-12 text-right mb-4"},[e.elements.length?s("button",{staticClass:"btn btn-inverse-danger mr-2",attrs:{type:"button"},on:{click:function(t){return t.preventDefault(),e.deleteElsBlock.apply(null,arguments)}}},[s("span",{staticClass:"btn-inner--text"},[e._v("Eliminar Imágenes")])]):e._e(),e._v(" "),s("button",{staticClass:"btn btn-icon btn-inverse-primary",on:{click:function(t){e.modalAddImages=!0}}},[s("span",{staticClass:"btn-inner--icon"},[s("jam-picture",{staticClass:"current-color"})],1),e._v(" "),s("span",{staticClass:"btn-inner--text"},[e._v("Subir Imágenes")])])]),e._v(" "),s("div",{staticClass:"col-12"},[e.loadingEls?s("div",{staticClass:"row"},e._l(12,(function(e){return s("div",{key:e,staticClass:"col-12 col-lg-3 mb-4"},[s("Skeleton",{attrs:{height:"300px"}})],1)})),0):s("div",[e.elements.length?s("div",[s("div",{directives:[{name:"show",rawName:"v-show",value:e.deleteBlock,expression:"deleteBlock"}]},[s("p",[e._v("Selecciona las imágenes que quieres eliminar.")])]),e._v(" "),s("div",{staticClass:"row"},e._l(e.elements,(function(t){return s("div",{key:t.id,staticClass:"col-6 col-md-4 col-lg-3 col-xl-2"},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.deleteBlock,expression:"deleteBlock"}],staticClass:"position-absolute",staticStyle:{top:"-13px",left:"16px","z-index":"99"}},[s("div",{staticClass:"custom-control custom-checkbox custom-control-lg"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.deleteEls,expression:"deleteEls"}],staticClass:"custom-control-input",attrs:{id:"del"+t.id,type:"checkbox"},domProps:{value:t.id,checked:Array.isArray(e.deleteEls)?e._i(e.deleteEls,t.id)>-1:e.deleteEls},on:{change:function(s){var a=e.deleteEls,n=s.target,r=!!n.checked;if(Array.isArray(a)){var o=t.id,i=e._i(a,o);n.checked?i<0&&(e.deleteEls=a.concat([o])):i>-1&&(e.deleteEls=a.slice(0,i).concat(a.slice(i+1)))}else e.deleteEls=r}}}),e._v(" "),s("label",{staticClass:"custom-control-label",attrs:{for:"del"+t.id}})])]),e._v(" "),s("div",{staticClass:"card mb-4",class:e.deleteBlock?"opacity-card element-not-click":""},[s("div",{staticClass:"card-body text-center"},[s("img",{staticClass:"img-fluid",attrs:{src:e.imagesUrl+"/projects/estates/"+t.image,alt:""}}),e._v(" "),s("h3",{staticClass:"text-center mt-2 mb-0"},[e._v("\n                    Código SAP:\n                    "),s("span",{staticClass:"font-weight-normal"},[e._v(e._s(t.sap_code))])]),e._v(" "),s("h3",{staticClass:"font-weight-normal small"},[e._v("\n                    "+e._s(t.description)+"\n                  ")]),e._v(" "),s("div",{staticClass:"text-center mt-1"},[s("a",{staticClass:"btn btn-sm btn-inverse-primary",attrs:{href:e.imagesUrl+"/projects/estates/"+t.image,target:"_blank"}},[e._v("Ver Imagen")])])])])])})),0)]):s("NoData",{attrs:{customText:"No hay imágenes de inmuebles registradas"}})],1),e._v(" "),s("b-modal",{attrs:{"no-close-on-esc":"","no-close-on-backdrop":"",centered:"",size:"xl","footer-class":"border-0 pt-0","body-class":"pt-0"},on:{close:e.restoreEl},scopedSlots:e._u([{key:"modal-footer",fn:function(t){t.ok;return[s("Button",{attrs:{classes:["btn-inverse-primary"],text:"Registrar","request-server":e.requestSubmit},on:{click:e.storeImages}}),e._v(" "),s("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:e.restoreEl}},[e._v("\n            Cancelar\n          ")])]}}]),model:{value:e.modalAddImages,callback:function(t){e.modalAddImages=t},expression:"modalAddImages"}},[s("template",{slot:"modal-title"},[s("div",{staticClass:"text-primary h2"},[e._v("Subir Imágenes Inmuebles")])]),e._v(" "),s("template",{slot:"modal-header-close"},[s("button",{staticClass:"btn p-0 bg-transparent",attrs:{type:"button"},on:{click:e.restoreEl}},[s("jam-close")],1)]),e._v(" "),s("div",{staticClass:"card mb-4"},[s("div",{staticClass:"card-body"},[s("p",{staticClass:"mb-0"},[e._v("\n              Registre las imágenes de los inmuebles del Proyecto\n              "+e._s(e.projectName)+". "),s("br"),e._v(" "),s("b",[e._v("Importante: ")]),e._v("El nombre de la imagen debe ser el Código SAP\n              del inmueble de lo contrario la imagen no se podrá anidar al\n              inmueble correspondiente.\n            ")])])]),e._v(" "),s("form",{on:{submit:e.storeImages}},[s("div",{staticClass:"form-group mb-0"},[s("label",{staticClass:"form-control-label d-block mb-0 text-md",attrs:{for:"file"}},[e._v("Imágenes")]),e._v(" "),s("div",{staticClass:"mb-3"},[s("small",{staticClass:"mb-0"},[e._v("Resolución Recomendada: 1300x760px")]),s("br"),e._v(" "),s("small",{staticClass:"mb-0"},[e._v("Máximo número de imágenes: 20")]),s("br"),e._v(" "),s("small",{staticClass:"mb-0"},[e._v("Tamaño Máximo de Imagen: 200kb")])]),e._v(" "),s("vue-dropzone",{ref:"ref_images",attrs:{id:"images",options:e.dropzoneOptions,duplicateCheck:!0,useCustomSlot:!0},on:{"vdropzone-file-added":function(t){return e.$validateImageDropzone(t,e.$refs.ref_images.dropzone,20,208e3,"200kb")}}},[s("div",{staticClass:"dropzone-custom-content"},[s("h5",{staticClass:"dropzone-custom-title text-primary"},[e._v("\n                  Suelte los archivos aquí o haga click para cargarlo.\n                ")])])]),e._v(" "),e.errors&&e.errors.images?s("label",{staticClass:"mt-2 text-danger text-sm",attrs:{for:"images"}},[e._v(e._s(e.errors.images[0]))]):e._e()],1)])],2)],1)])])}),[],!1,null,"a466b0c4",null).exports,p=s("CkAj"),b={props:{elementParent:Object,imagesUrl:String,routeReturn:String,routeGetAll:String,routeGetSap:String},components:{BreadCrumb:a.a,Button:n.a,Skeleton:o.a,NoData:i.a,DataTable:r.a,AddImages:u,Destroy:p.a},data:function(){return{requestSubmit:!1,loadingGet:!1,modalDestroy:!1,tabIndex:0,requestServerSincronization:!1,project:{},elements:{},loadingEls:!1,elementsPerPage:10,deleteId:""}},methods:{restoreEl:function(){this.deleteId="",this.modalDestroy=!1},restore:function(){this.deleteId="",this.requestSubmit=!1,this.modalDestroy=!1,this.getEls(1,this.elementsPerPage)},destroyConfirm:function(){var e=this;this.requestSubmit=!0,axios.delete(this.routeReturn+"/inmuebles/"+this.deleteId).then((function(t){e.requestSubmit=!1,e.restore(),Swal.fire({title:t.data.title,text:t.data.message,type:"success",confirmButtonText:"OK",buttonsStyling:!1,customClass:{confirmButton:"btn btn-inverse-primary"}})})).catch((function(t){Swal.fire({title:t.response.data.title,text:t.response.data.message,type:"error",confirmButtonText:"OK",buttonsStyling:!1,customClass:{confirmButton:"btn btn-inverse-primary"}}),e.restoreEl()}))},deleteEl:function(e){this.deleteId=e,this.modalDestroy=!0},getSapDepartments:function(){var e=this;this.requestServerSincronization=!0,axios.get(this.routeGetSap).then((function(t){e.requestServerSincronization=!1,Swal.fire({title:t.data.title,html:t.data.message,type:"success",confirmButtonText:"OK",buttonsStyling:!1,customClass:{confirmButton:"btn btn-inverse-primary"}}),e.getEls(1,e.elementsPerPage)})).catch((function(t){Swal.fire({title:t.response.data.title,text:t.response.data.message,type:"error",confirmButtonText:"OK",buttonsStyling:!1,customClass:{confirmButton:"btn btn-inverse-primary"}}),e.requestServerSincronization=!1}))},orderGetEls:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t?this.getEls(1,this.elementsPerPage,t,e.by,e.type):this.getEls(1,this.elementsPerPage,null,e.by,e.type)},getEls:function(e,t){var s=this,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;this.loadingEls=!0;var o=this.routeGetAll+"?page="+e+"&itemsPerPage="+t;a&&(o=o+"&q="+a),n&&(o=o+"&order_by="+n),r&&(o=o+"&order_type="+r),axios.get(o,{params:{project_id:this.project.id}}).then((function(e){s.elements=e.data,s.loadingEls=!1})).catch((function(e){}))}},created:function(){this.getEls(1,this.elementsPerPage)},watch:{tabIndex:{handler:function(e){0==e&&(console.log("test"),this.restore())}},elementParent:{immediate:!0,handler:function(e){this.project=e}}}},v=(s("gDxz"),Object(m.a)(b,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"header"},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"header-body"},[s("div",{staticClass:"row align-items-center pt-0 pt-md-2 pb-3"},[s("div",{staticClass:"col-6 col-md-7"},[s("BreadCrumb",{attrs:{title:"Inmuebles Proyecto "+e.project.name_es,parent:"",active:"Proyectos"}})],1)]),e._v(" "),s("div",{staticClass:"row mb-5"},[s("div",{staticClass:"col-6 col-md-5"},[s("a",{staticClass:"btn btn-icon btn-sm btn-inverse-light",attrs:{href:e.routeReturn}},[s("span",{staticClass:"btn-inner--icon"},[s("jam-arrow-left",{staticClass:"current-color"})],1),e._v(" "),s("span",{staticClass:"btn-inner--text"},[e._v("Regresar")])])])])])])]),e._v(" "),s("div",{staticClass:"container-fluid mt--4"},[s("b-tabs",{attrs:{pills:"","nav-wrapper-class":"mb-4 mb-lg-0","nav-class":"border bg-white px-2 mb-4","content-class":""},model:{value:e.tabIndex,callback:function(t){e.tabIndex=t},expression:"tabIndex"}},[s("b-tab",{attrs:{title:"Lista de Inmuebles",active:"","title-link-class":"border-0 shadow-none bg-white py-3","title-item-class":"pr-0 my-0"}},[s("div",{staticClass:"row mb-4"},[s("div",{staticClass:"col-12 col-lg-2"},[s("h2",[e._v("Sincronizar de Proyectos e Inmuebles")]),e._v(" "),s("p",[e._v("Realiza la sincronización del proyecto y los inmuebles con los que cuenta SAP.")])]),e._v(" "),s("div",{staticClass:"col-12 col-lg-10"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("p",[e._v('\n                  De click al botón "Obtener Inmuebles" para obtener si el Proyecto cuenta con '),s("b",[e._v("Estacionamiento")]),e._v(" y "),s("b",[e._v("Depósito")]),e._v(", además del\n                  "),s("b",[e._v("listado de inmuebles")]),e._v(" del Proyecto registrado en "),s("b",[e._v("SAP")]),e._v(", la\n                  "),s("b",[e._v("disponibilidad")]),e._v(" de tanto de estacionamientos y depósitos como del listado de inmuebles se actualizara automáticamente\n                  cada 10 minutos.\n                ")]),e._v(" "),s("div",{staticClass:"text-right"},[s("Button",{attrs:{text:"Obtener Inmuebles",classes:["btn-primary"],"request-server":e.requestServerSincronization},on:{click:e.getSapDepartments}})],1)])])])]),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("DataTable",{attrs:{orderDepartments:!0,object:e.elements,placeholder:"Código SAP, Descripción","button-update":!1,"button-read":!1,"button-delete":!0,"button-disable":!1,"entries-prop":e.elementsPerPage},on:{get:e.getEls,delete:e.deleteEl,"update:entriesProp":function(t){e.elementsPerPage=t},"update:entries-prop":function(t){e.elementsPerPage=t},order:e.orderGetEls}})],1)])]),e._v(" "),s("b-tab",{attrs:{title:"Imágenes de Inmuebles","title-link-class":"border-0 shadow-none bg-white py-3","title-item-class":"pr-0 my-0"}},[s("AddImages",{attrs:{imagesUrl:e.imagesUrl,projectName:e.elementParent.name_es,projectId:e.elementParent.id}})],1)],1)],1),e._v(" "),s("destroy",{attrs:{element:"inmueble",open:e.modalDestroy,"loading-get":e.loadingGet,"loading-submit":e.requestSubmit},on:{cancel:e.restoreEl,submit:e.destroyConfirm}})],1)}),[],!1,null,null,null));t.default=v.exports},TVlQ:function(e,t,s){"use strict";var a={props:{text:String,classes:Array,requestServer:Boolean},methods:{click:function(){this.$emit("click")}}},n=(s("J3pF"),s("KHd+")),r=Object(n.a)(a,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("button",{staticClass:"btn",class:e.classes,attrs:{disabled:1==e.requestServer},on:{click:e.click}},[e.requestServer?s("span",[e._v("\n        Cargando \n        "),s("svg",{staticClass:"ml-1 loading-svg",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 40 40"}},[s("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[s("g",{attrs:{transform:"translate(1 1)","stroke-width":"3"}},[s("circle",{attrs:{"stroke-opacity":"1",cx:"0",cy:"0",r:"0"}}),e._v(" "),s("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18",transform:"rotate(83.9974 18 18)"}},[s("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"}})],1)])])])]):s("span",[e._v(e._s(e.text))])])}),[],!1,null,"7a0ec1bd",null);t.a=r.exports},divz:function(e,t,s){(e.exports=s("I1BE")(!1)).push([e.i,"\n.opacity-card[data-v-a466b0c4] {\r\n  opacity: 0.5;\n}\n.element-not-click[data-v-a466b0c4] {\r\n  pointer-events: none;\n}\n.custom-checkbox.custom-control-lg .custom-control-label[data-v-a466b0c4]:before {\r\n  width: 1.75rem;\r\n  height: 1.75rem;\n}\n.custom-checkbox.custom-control-lg .custom-control-label[data-v-a466b0c4]:after {\r\n  width: 1.75rem;\r\n  height: 1.75rem;\r\n  background-size: 50% 50%;\n}\n.custom-control-label[data-v-a466b0c4]:before {\r\n  border: 2px solid #1762e6 !important;\n}\r\n",""])},gDxz:function(e,t,s){"use strict";s("hGOa")},gE6u:function(e,t,s){"use strict";s("rAzX")},hGOa:function(e,t,s){var a=s("hhc8");"string"==typeof a&&(a=[[e.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(a,n);a.locals&&(e.exports=a.locals)},hhc8:function(e,t,s){(e.exports=s("I1BE")(!1)).push([e.i,"\n.nav-pills .nav-link.active {\r\n  border-bottom: 4px solid #1762e6 !important;\r\n  background-color: #fdfbfa !important;\n}\r\n",""])},rAzX:function(e,t,s){var a=s("divz");"string"==typeof a&&(a=[[e.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(a,n);a.locals&&(e.exports=a.locals)},uNoH:function(e,t,s){(e.exports=s("I1BE")(!1)).push([e.i,"\n.loading-svg[data-v-7a0ec1bd]{\r\n    fill: currentColor;\r\n    stroke: currentColor;\n}\r\n",""])}}]);