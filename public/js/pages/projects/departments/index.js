(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{"1jZt":function(t,e,s){var a=s("uNoH");"string"==typeof a&&(a=[[t.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(a,n);a.locals&&(t.exports=a.locals)},CkAj:function(t,e,s){"use strict";var a=s("0YuL"),n=s("TVlQ"),r={props:{open:Boolean,loadingGet:Boolean,element:String,loadingSubmit:Boolean},components:{Button:n.a,Skeleton:a.a},data:function(){return{requestSubmit:!1,requestGet:!1,inputDestroy:"",buttonDestroy:!0}},methods:{submit:function(){this.$emit("submit")},cancelCustom:function(){this.$emit("cancel")},restore:function(){this.requestSubmit=!1,this.requestGet=!1,this.inputDestroy="",this.buttonDestroy=!0}},watch:{open:function(t){0==t&&this.restore()},inputDestroy:function(t){t===t.toUpperCase()&&"ELIMINAR"===t?this.buttonDestroy=!1:this.buttonDestroy=!0}}},o=s("KHd+"),i=Object(o.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-modal",{attrs:{"no-close-on-esc":"","no-close-on-backdrop":"",centered:"","footer-class":"border-0 pt-0","body-class":"pt-0"},on:{close:t.cancelCustom},scopedSlots:t._u([{key:"modal-footer",fn:function(e){e.ok;return[s("Button",{directives:[{name:"show",rawName:"v-show",value:!t.loadingGet,expression:"!loadingGet"}],attrs:{classes:["btn-danger"],text:"Eliminar","request-server":t.loadingSubmit,disabled:t.buttonDestroy},on:{click:t.submit}}),t._v(" "),s("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:t.cancelCustom}},[t._v("Cancelar")])]}}]),model:{value:t.open,callback:function(e){t.open=e},expression:"open"}},[s("template",{slot:"modal-title"},[s("div",{staticClass:"text-primary h2"},[t._v("Eliminar "+t._s(t.element.charAt(0).toUpperCase()+t.element.slice(1)))])]),t._v(" "),s("template",{slot:"modal-header-close"},[s("button",{staticClass:"btn p-0 bg-transparent",attrs:{type:"button"},on:{click:t.cancelCustom}},[s("jam-close")],1)]),t._v(" "),t.loadingGet?s("div",[s("Skeleton"),t._v(" "),s("div",{staticClass:"w-25 mb-1"},[s("Skeleton")],1),t._v(" "),s("div",{staticClass:"w-75"},[s("Skeleton")],1)],1):s("div",[s("p",[t._v("Esta apunto de eliminar un "+t._s(t.element)+", una vez que realice esta acción no se puede deshacer")]),t._v(" "),s("p",{staticClass:"mb-2"},[t._v("\n      Escribe\n      "),s("b",[t._v("ELIMINAR")]),t._v(" para confirmar\n    ")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.inputDestroy,expression:"inputDestroy"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.inputDestroy},on:{input:function(e){e.target.composing||(t.inputDestroy=e.target.value)}}})])],2)}),[],!1,null,null,null);e.a=i.exports},J3pF:function(t,e,s){"use strict";s("1jZt")},QmYa:function(t,e,s){"use strict";s.r(e);var a=s("F05R"),n=s("TVlQ"),r=s("ZMUr"),o=s("0YuL"),i=s("/hKJ"),l=s("ksP6"),c=s.n(l),d={props:{projectId:Number,imagesUrl:String,projectName:String},components:{NoData:i.a,Button:n.a,vueDropzone:c.a,Skeleton:o.a},data:function(){return{modalAddImages:!1,requestSubmit:!1,loadingEls:!1,errors:{},elements:[],deleteEls:[],requestDelete:!1,dropzoneOptions:{url:"/",maxFiles:20,acceptedFiles:"image/png,image/jpeg,image/jpg",autoProcessQueue:!1,thumbnailWidth:150,addRemoveLinks:!0,dictRemoveFile:"Remover"},deleteBlock:!1}},methods:{restoreDelete:function(){this.deleteBlock=!1,this.requestDelete=!1,this.deleteEls=[],this.errors={}},deleteElsBlock:function(){this.deleteBlock=!0},deleteConfirm:function(){var t=this;this.requestDelete=!0,axios.delete("/proyectos/inmuebles/images",{params:{images:this.deleteEls}}).then((function(e){t.restorePage(),Swal.fire({title:e.data.title,text:e.data.message,type:"success",confirmButtonText:"Ok",buttonsStyling:!1,customClass:{confirmButton:"btn btn-primary"}})})).catch((function(e){t.requestDelete=!1,422!==e.response.status?(t.restoreDelete(),Swal.fire({title:e.response.data.title,text:e.response.data.message,type:"error",confirmButtonText:"Ok",buttonsStyling:!1,customClass:{confirmButton:"btn btn-primary"}})):t.errors=e.response.data.errors||{}}))},restorePage:function(){this.elements=[],this.requestSubmit=!1,this.errors={},this.requestDelete=!1,this.$refs.ref_images&&this.$refs.ref_images.removeAllFiles(),this.modalAddImages=!1,this.deleteBlock=!1,this.deleteEls=[],this.getEls()},restoreEl:function(){this.requestSubmit=!1,this.requestDelete=!1,this.errors={},this.$refs.ref_images&&this.$refs.ref_images.removeAllFiles(),this.modalAddImages=!1},getEls:function(){var t=this;this.loadingEls=!0,axios.get("/proyectos/inmuebles/images/json/get-all/"+this.projectId).then((function(e){t.elements=e.data,t.loadingEls=!1})).catch((function(t){}))},storeImages:function(){var t=this;this.requestSubmit=!0;var e=new FormData;if(this.$refs.ref_images.dropzone.files[0]){var s=this.$refs.ref_images.dropzone.files.length;e.append("elements_count",s),e.append("images","filled"),this.$refs.ref_images.dropzone.files.forEach((function(t,s){e.append("images"+s,t)}))}e.append("project_id",this.projectId),axios.post("/proyectos/inmuebles/images",e).then((function(e){t.requestSubmit=!1,Swal.fire({title:e.data.title,html:e.data.message,type:"success",confirmButtonText:"Ok",buttonsStyling:!1,customClass:{confirmButton:"btn btn-primary"}}),t.restorePage()})).catch((function(e){t.requestSubmit=!1,422!==e.response.status?(Swal.fire({title:e.response.data.title,html:e.response.data.message,type:"error",confirmButtonText:"Ok",buttonsStyling:!1,customClass:{confirmButton:"btn btn-primary"}}),t.restoreEl()):t.errors=e.response.data.errors||{}}))}},created:function(){this.getEls()}},m=(s("gE6u"),s("KHd+")),u=Object(m.a)(d,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"row"},[t.deleteBlock?s("div",{staticClass:"col-12 text-right mb-4"},[s("div",[t.errors&&t.errors.images?s("label",{staticClass:"mb-2 text-danger text-sm",attrs:{for:"images"}},[t._v(t._s(t.errors.images[0]))]):t._e()]),t._v(" "),s("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.restoreDelete(e)}}},[t._v("\n        Cancelar\n      ")]),t._v(" "),s("Button",{attrs:{classes:["btn-danger"],text:"Confirmar Eliminar Imágenes","request-server":t.requestDelete},on:{click:t.deleteConfirm}})],1):s("div",{staticClass:"col-12 text-right mb-4"},[t.elements.length?s("button",{staticClass:"btn btn-inverse-danger mr-2",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.deleteElsBlock(e)}}},[s("span",{staticClass:"btn-inner--text"},[t._v("Eliminar Imágenes")])]):t._e(),t._v(" "),s("button",{staticClass:"btn btn-icon btn-inverse-primary",on:{click:function(e){t.modalAddImages=!0}}},[s("span",{staticClass:"btn-inner--icon"},[s("jam-picture",{staticClass:"current-color"})],1),t._v(" "),s("span",{staticClass:"btn-inner--text"},[t._v("Subir Imágenes")])])]),t._v(" "),s("div",{staticClass:"col-12"},[t.loadingEls?s("div",{staticClass:"row"},t._l(12,(function(t){return s("div",{key:t,staticClass:"col-12 col-lg-3 mb-4"},[s("Skeleton",{attrs:{height:"300px"}})],1)})),0):s("div",[t.elements.length?s("div",[s("div",{directives:[{name:"show",rawName:"v-show",value:t.deleteBlock,expression:"deleteBlock"}]},[s("p",[t._v("Selecciona las imágenes que quieres eliminar.")])]),t._v(" "),s("div",{staticClass:"row"},t._l(t.elements,(function(e){return s("div",{key:e.id,staticClass:"col-6 col-md-4 col-lg-3 col-xl-2"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.deleteBlock,expression:"deleteBlock"}],staticClass:"position-absolute",staticStyle:{top:"-13px",left:"16px","z-index":"99"}},[s("div",{staticClass:"custom-control custom-checkbox custom-control-lg"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.deleteEls,expression:"deleteEls"}],staticClass:"custom-control-input",attrs:{id:"del"+e.id,type:"checkbox"},domProps:{value:e.id,checked:Array.isArray(t.deleteEls)?t._i(t.deleteEls,e.id)>-1:t.deleteEls},on:{change:function(s){var a=t.deleteEls,n=s.target,r=!!n.checked;if(Array.isArray(a)){var o=e.id,i=t._i(a,o);n.checked?i<0&&(t.deleteEls=a.concat([o])):i>-1&&(t.deleteEls=a.slice(0,i).concat(a.slice(i+1)))}else t.deleteEls=r}}}),t._v(" "),s("label",{staticClass:"custom-control-label",attrs:{for:"del"+e.id}})])]),t._v(" "),s("div",{staticClass:"card mb-4",class:t.deleteBlock?"opacity-card element-not-click":""},[s("div",{staticClass:"card-body text-center"},[s("img",{staticClass:"img-fluid",attrs:{src:t.imagesUrl+"/projects/estates/"+e.image,alt:""}}),t._v(" "),s("h3",{staticClass:"text-center mt-2 mb-0"},[t._v("\n                    Código SAP:\n                    "),s("span",{staticClass:"font-weight-normal"},[t._v(t._s(e.sap_code))])]),t._v(" "),s("h3",{staticClass:"font-weight-normal small"},[t._v("\n                    "+t._s(e.description)+"\n                  ")]),t._v(" "),s("div",{staticClass:"text-center mt-1"},[s("a",{staticClass:"btn btn-sm btn-inverse-primary",attrs:{href:t.imagesUrl+"/projects/estates/"+e.image,target:"_blank"}},[t._v("Ver Imagen")])])])])])})),0)]):s("NoData",{attrs:{customText:"No hay imágenes de inmuebles registradas"}})],1),t._v(" "),s("b-modal",{attrs:{"no-close-on-esc":"","no-close-on-backdrop":"",centered:"",size:"xl","footer-class":"border-0 pt-0","body-class":"pt-0"},on:{close:t.restoreEl},scopedSlots:t._u([{key:"modal-footer",fn:function(e){e.ok;return[s("Button",{attrs:{classes:["btn-inverse-primary"],text:"Registrar","request-server":t.requestSubmit},on:{click:t.storeImages}}),t._v(" "),s("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:t.restoreEl}},[t._v("\n            Cancelar\n          ")])]}}]),model:{value:t.modalAddImages,callback:function(e){t.modalAddImages=e},expression:"modalAddImages"}},[s("template",{slot:"modal-title"},[s("div",{staticClass:"text-primary h2"},[t._v("Subir Imágenes Inmuebles")])]),t._v(" "),s("template",{slot:"modal-header-close"},[s("button",{staticClass:"btn p-0 bg-transparent",attrs:{type:"button"},on:{click:t.restoreEl}},[s("jam-close")],1)]),t._v(" "),s("div",{staticClass:"card mb-4"},[s("div",{staticClass:"card-body"},[s("p",{staticClass:"mb-0"},[t._v("\n              Registre las imágenes de los inmuebles del Proyecto\n              "+t._s(t.projectName)+". "),s("br"),t._v(" "),s("b",[t._v("Importante: ")]),t._v("El nombre de la imagen debe ser el Código SAP\n              del inmueble de lo contrario la imagen no se podrá anidar al\n              inmueble correspondiente.\n            ")])])]),t._v(" "),s("form",{on:{submit:t.storeImages}},[s("div",{staticClass:"form-group mb-0"},[s("label",{staticClass:"form-control-label d-block mb-0 text-md",attrs:{for:"file"}},[t._v("Imágenes")]),t._v(" "),s("div",{staticClass:"mb-3"},[s("small",{staticClass:"mb-0"},[t._v("Resolución Recomendada: 1300x760px")]),s("br"),t._v(" "),s("small",{staticClass:"mb-0"},[t._v("Máximo número de imágenes: 20")]),s("br"),t._v(" "),s("small",{staticClass:"mb-0"},[t._v("Tamaño Máximo de Imagen: 200kb")])]),t._v(" "),s("vue-dropzone",{ref:"ref_images",attrs:{id:"images",options:t.dropzoneOptions,duplicateCheck:!0,useCustomSlot:!0},on:{"vdropzone-file-added":function(e){return t.$validateImageDropzone(e,t.$refs.ref_images.dropzone,20,208e3,"200kb")}}},[s("div",{staticClass:"dropzone-custom-content"},[s("h5",{staticClass:"dropzone-custom-title text-primary"},[t._v("\n                  Suelte los archivos aquí o haga click para cargarlo.\n                ")])])]),t._v(" "),t.errors&&t.errors.images?s("label",{staticClass:"mt-2 text-danger text-sm",attrs:{for:"images"}},[t._v(t._s(t.errors.images[0]))]):t._e()],1)])],2)],1)])])}),[],!1,null,"a466b0c4",null).exports,p=s("CkAj"),b={props:{elementParent:Object,imagesUrl:String,routeReturn:String,routeGetAll:String,routeGetSap:String},components:{BreadCrumb:a.a,Button:n.a,Skeleton:o.a,NoData:i.a,DataTable:r.a,AddImages:u,Destroy:p.a},data:function(){return{requestSubmit:!1,loadingGet:!1,modalDestroy:!1,tabIndex:0,requestServerSincronization:!1,project:{},elements:{},loadingEls:!1,elementsPerPage:10,deleteId:""}},methods:{restoreEl:function(){this.deleteId="",this.modalDestroy=!1},restore:function(){this.deleteId="",this.requestSubmit=!1,this.modalDestroy=!1,this.getEls(1,this.elementsPerPage)},destroyConfirm:function(){var t=this;this.requestSubmit=!0,axios.delete(this.routeReturn+"/inmuebles/"+this.deleteId).then((function(e){t.requestSubmit=!1,t.restore(),Swal.fire({title:e.data.title,text:e.data.message,type:"success",confirmButtonText:"OK",buttonsStyling:!1,customClass:{confirmButton:"btn btn-inverse-primary"}})})).catch((function(e){Swal.fire({title:e.response.data.title,text:e.response.data.message,type:"error",confirmButtonText:"OK",buttonsStyling:!1,customClass:{confirmButton:"btn btn-inverse-primary"}}),t.restoreEl()}))},deleteEl:function(t){this.deleteId=t,this.modalDestroy=!0},getSapDepartments:function(){var t=this;this.requestServerSincronization=!0,axios.get(this.routeGetSap).then((function(e){t.requestServerSincronization=!1,Swal.fire({title:e.data.title,html:e.data.message,type:"success",confirmButtonText:"OK",buttonsStyling:!1,customClass:{confirmButton:"btn btn-inverse-primary"}}),t.getEls(1,t.elementsPerPage)})).catch((function(e){Swal.fire({title:e.response.data.title,text:e.response.data.message,type:"error",confirmButtonText:"OK",buttonsStyling:!1,customClass:{confirmButton:"btn btn-inverse-primary"}}),t.requestServerSincronization=!1}))},orderGetEls:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e?this.getEls(1,this.elementsPerPage,e,t.by,t.type):this.getEls(1,this.elementsPerPage,null,t.by,t.type)},getEls:function(t,e){var s=this,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;this.loadingEls=!0;var o=this.routeGetAll+"?page="+t+"&itemsPerPage="+e;a&&(o=o+"&q="+a),n&&(o=o+"&order_by="+n),r&&(o=o+"&order_type="+r),axios.get(o,{params:{project_id:this.project.id}}).then((function(t){s.elements=t.data,s.loadingEls=!1})).catch((function(t){}))}},created:function(){this.getEls(1,this.elementsPerPage)},watch:{tabIndex:{handler:function(t){0==t&&(console.log("test"),this.restore())}},elementParent:{immediate:!0,handler:function(t){this.project=t}}}},v=(s("gDxz"),Object(m.a)(b,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"header"},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"header-body"},[s("div",{staticClass:"row align-items-center pt-0 pt-md-2 pb-3"},[s("div",{staticClass:"col-6 col-md-7"},[s("BreadCrumb",{attrs:{title:"Inmuebles Proyecto "+t.project.name_es,parent:"",active:"Proyectos"}})],1)]),t._v(" "),s("div",{staticClass:"row mb-5"},[s("div",{staticClass:"col-6 col-md-5"},[s("a",{staticClass:"btn btn-icon btn-sm btn-inverse-light",attrs:{href:t.routeReturn}},[s("span",{staticClass:"btn-inner--icon"},[s("jam-arrow-left",{staticClass:"current-color"})],1),t._v(" "),s("span",{staticClass:"btn-inner--text"},[t._v("Regresar")])])])])])])]),t._v(" "),s("div",{staticClass:"container-fluid mt--4"},[s("b-tabs",{attrs:{pills:"","nav-wrapper-class":"mb-4 mb-lg-0","nav-class":"border bg-white px-2 mb-4","content-class":""},model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}},[s("b-tab",{attrs:{title:"Lista de Inmuebles",active:"","title-link-class":"border-0 shadow-none bg-white py-3","title-item-class":"pr-0 my-0"}},[s("div",{staticClass:"row mb-4"},[s("div",{staticClass:"col-12 col-lg-2"},[s("h2",[t._v("Sincronizar Inmuebles")]),t._v(" "),s("p",[t._v("Realiza la sincronización de inmuebles con SAP.")])]),t._v(" "),s("div",{staticClass:"col-12 col-lg-10"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("p",[t._v('\n                  De click al botón "Obtener Inmuebles" para obtener el\n                  listado de inmuebles del Proyecto registrado en SAP, la\n                  disponibilidad de los mismos se actualizara automáticamente\n                  cada 10 minutos.\n                ')]),t._v(" "),s("div",{staticClass:"text-right"},[s("Button",{attrs:{text:"Obtener Inmuebles",classes:["btn-primary"],"request-server":t.requestServerSincronization},on:{click:t.getSapDepartments}})],1)])])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("DataTable",{attrs:{orderDepartments:!0,object:t.elements,placeholder:"Código SAP, Descripción","button-update":!1,"button-read":!1,"button-delete":!0,"button-disable":!1,"entries-prop":t.elementsPerPage},on:{get:t.getEls,delete:t.deleteEl,"update:entriesProp":function(e){t.elementsPerPage=e},"update:entries-prop":function(e){t.elementsPerPage=e},order:t.orderGetEls}})],1)])]),t._v(" "),s("b-tab",{attrs:{title:"Imágenes de Inmuebles","title-link-class":"border-0 shadow-none bg-white py-3","title-item-class":"pr-0 my-0"}},[s("AddImages",{attrs:{imagesUrl:t.imagesUrl,projectName:t.elementParent.name_es,projectId:t.elementParent.id}})],1)],1)],1),t._v(" "),s("destroy",{attrs:{element:"inmueble",open:t.modalDestroy,"loading-get":t.loadingGet,"loading-submit":t.requestSubmit},on:{cancel:t.restoreEl,submit:t.destroyConfirm}})],1)}),[],!1,null,null,null));e.default=v.exports},TVlQ:function(t,e,s){"use strict";var a={props:{text:String,classes:Array,requestServer:Boolean},methods:{click:function(){this.$emit("click")}}},n=(s("J3pF"),s("KHd+")),r=Object(n.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"btn",class:t.classes,attrs:{disabled:1==t.requestServer},on:{click:t.click}},[t.requestServer?s("span",[t._v("\n        Cargando \n        "),s("svg",{staticClass:"ml-1 loading-svg",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 40 40"}},[s("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[s("g",{attrs:{transform:"translate(1 1)","stroke-width":"3"}},[s("circle",{attrs:{"stroke-opacity":"1",cx:"0",cy:"0",r:"0"}}),t._v(" "),s("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18",transform:"rotate(83.9974 18 18)"}},[s("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"}})],1)])])])]):s("span",[t._v(t._s(t.text))])])}),[],!1,null,"7a0ec1bd",null);e.a=r.exports},divz:function(t,e,s){(t.exports=s("I1BE")(!1)).push([t.i,"\n.opacity-card[data-v-a466b0c4] {\r\n  opacity: 0.5;\n}\n.element-not-click[data-v-a466b0c4] {\r\n  pointer-events: none;\n}\n.custom-checkbox.custom-control-lg .custom-control-label[data-v-a466b0c4]:before {\r\n  width: 1.75rem;\r\n  height: 1.75rem;\n}\n.custom-checkbox.custom-control-lg .custom-control-label[data-v-a466b0c4]:after {\r\n  width: 1.75rem;\r\n  height: 1.75rem;\r\n  background-size: 50% 50%;\n}\n.custom-control-label[data-v-a466b0c4]:before {\r\n  border: 2px solid #1762e6 !important;\n}\r\n",""])},gDxz:function(t,e,s){"use strict";s("hGOa")},gE6u:function(t,e,s){"use strict";s("rAzX")},hGOa:function(t,e,s){var a=s("hhc8");"string"==typeof a&&(a=[[t.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(a,n);a.locals&&(t.exports=a.locals)},hhc8:function(t,e,s){(t.exports=s("I1BE")(!1)).push([t.i,"\n.nav-pills .nav-link.active {\r\n  border-bottom: 4px solid #1762e6 !important;\r\n  background-color: #fdfbfa !important;\n}\r\n",""])},rAzX:function(t,e,s){var a=s("divz");"string"==typeof a&&(a=[[t.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(a,n);a.locals&&(t.exports=a.locals)},uNoH:function(t,e,s){(t.exports=s("I1BE")(!1)).push([t.i,"\n.loading-svg[data-v-7a0ec1bd]{\r\n    fill: currentColor;\r\n    stroke: currentColor;\n}\r\n",""])}}]);