(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"1jZt":function(e,t,n){var a=n("uNoH");"string"==typeof a&&(a=[[e.i,a,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(a,s);a.locals&&(e.exports=a.locals)},"2NyR":function(e,t,n){"use strict";var a=n("kzlf"),s=n.n(a);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=d(e);if(t){var s=d(this).constructor;n=Reflect.construct(a,arguments,s)}else n=a.apply(this,arguments);return u(this,n)}}function u(e,t){if(t&&("object"===i(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var v=s.a.import("modules/clipboard"),p=s.a.import("delta"),f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(i,e);var t,n,a,s=c(i);function i(){return r(this,i),s.apply(this,arguments)}return t=i,(n=[{key:"onPaste",value:function(e){e.preventDefault();var t=this.quill.getSelection(),n=e.clipboardData.getData("text/plain"),a=(new p).retain(t.index).delete(t.length).insert(n),s=n.length+t.index;this.quill.updateContents(a,"silent"),this.quill.setSelection(s,0,"silent"),this.quill.scrollIntoView();var i=this.quill.getSelection().index;this.quill.insertText(i," ","",!0)}}])&&o(t.prototype,n),a&&o(t,a),i}(v);t.a=f},"34H4":function(e,t,n){"use strict";n.r(t);var a=n("ksP6"),s=n.n(a),i=n("TVlQ"),r=n("lT11"),o=n("gBkH"),l=n.n(o),c=n("F05R"),u=n("FTHT"),d=n("CkAj"),v=n("S2+X"),p=n("t3wN"),f={props:{routeUpdateSection:String,routeGetAll:String,route:String,imagesUrl:String,videosUrl:String},components:{Input:v.a,FileUpload:l.a,quillEditor:r.quillEditor,Editor:p.a,Button:i.a,vueDropzone:s.a,BreadCrumb:c.a,SkeletonForm:u.a,Destroy:d.a},data:function(){return{loading:!0,requestServer:!1,errors:{},dropzoneOptions:{url:"/",maxFiles:1,acceptedFiles:"image/png,image/jpeg,image/jpg,image/svg+xml",autoProcessQueue:!1,thumbnailWidth:400,addRemoveLinks:!0,dictRemoveFile:"Remover Imagen"},dropzoneVideoOptions:{url:"/",maxFiles:1,acceptedFiles:"video/mp4",autoProcessQueue:!1,addRemoveLinks:!0,dictRemoveFile:"Remover Video"},quillEditorOptions:{placeholder:"",modules:{toolbar:{handlers:{image:function(e){document.getElementById("id_content_images").click()}},container:[["bold","italic","underline","strike"],["blockquote"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{indent:"-1"},{indent:"+1"}],[{size:[!1]}],[{header:[1,2,3,4,5,!1]}],[{font:[!1]}],[{color:[]},{background:[]}],[{align:[]}],["link","image","video"]]}}},startBlock:!0,elementBlock:!1,pages:{sections:[]},page:{},section:{id:"",name:"",image:"",title:"",description:""},fields:{},image:[],image_responsive:[],video:[]}},methods:{updateSection:function(){var e=this;this.requestServer=!0;var t=new FormData;t.append("section_id",this.section.id),t.append("content",JSON.stringify(this.fields)),this.$refs.ref_image&&this.$refs.ref_image.length>0&&this.$refs.ref_image[0].dropzone.files[0]&&t.append("image",this.$refs.ref_image[0].dropzone.files[0]),this.$refs.ref_image_responsive&&this.$refs.ref_image_responsive.length>0&&this.$refs.ref_image_responsive[0].dropzone.files[0]&&t.append("image_responsive",this.$refs.ref_image_responsive[0].dropzone.files[0]),this.$refs.ref_background&&this.$refs.ref_background.length>0&&this.$refs.ref_background[0].dropzone.files[0]&&t.append("background",this.$refs.ref_background[0].dropzone.files[0]),this.$refs.ref_video&&this.$refs.ref_video.length>0&&this.$refs.ref_video[0].dropzone.files[0]&&t.append("video",this.$refs.ref_video[0].dropzone.files[0]),t.append("_method","put"),axios.post(this.routeUpdateSection,t).then((function(t){e.requestServer=!1,e.restorePage(),Swal.fire({title:t.data.title,text:t.data.message,type:"success",confirmButtonText:"OK",buttonsStyling:!1,customClass:{confirmButton:"btn btn-primary"}})})).catch((function(t){e.requestServer=!1,422!==t.response.status?(e.restorePage(),Swal.fire({title:t.response.data.title,text:t.response.data.message,type:"error",confirmButtonText:"OK",buttonsStyling:!1,customClass:{confirmButton:"btn btn-primary"}})):e.errores=t.response.data.errors||{}}))},restorePage:function(){this.elementBlock&&(this.elementBlock=!1,this.startBlock=!0,this.section={id:"",name:"",title:"",description:"",images:[]},this.fields={})},getSection:function(e,t,n){var a=this;this.page=this.pages.find((function(e){return e.id===n})),axios.get(this.route+"/json/get/section/"+e).then((function(n){a.fields=n.data,a.section.id=e,a.section.name=t,a.startBlock=!1,a.elementBlock=!0})).catch((function(e){}))},getPage:function(e){var t=this;axios.get(this.route+"/json/get/"+e).then((function(e){t.page=e.data})).catch((function(e){}))},getPages:function(){var e=this;axios.get(this.routeGetAll).then((function(t){e.pages=t.data,e.loading=!1})).catch((function(e){}))}},created:function(){this.getPages()}},m=n("KHd+"),b=Object(m.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"header pb-6"},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"header-body"},[n("div",{staticClass:"row align-items-center pt-0 pt-md-2 pb-4"},[n("div",{staticClass:"col-6 col-md-7"},[n("BreadCrumb",{attrs:{title:e.startBlock?"Contenido General":"Actualizar Contenido General",parent:"Contenido",active:"Contenido General"}})],1)])])])]),e._v(" "),n("div",{staticClass:"container-fluid mt--6"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 mb-4"},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.startBlock,expression:"startBlock"}],staticClass:"row"},[e.loading?n("div",{staticClass:"col-12"},[n("SkeletonForm")],1):n("div",{staticClass:"col-12"},[n("div",{staticClass:"row"},e._l(e.pages,(function(t){return n("div",{key:t.id,staticClass:"col-12"},[n("h3",{staticClass:"font-weight-bold mb-4 text-dark"},[e._v("\n                  "+e._s(t.name)+" ("+e._s(t.sections_count)+"\n                  secciones)\n                ")]),e._v(" "),n("div",{staticClass:"row"},e._l(t.sections,(function(a){return n("div",{key:a.id,staticClass:"col-12 col-lg-6 col-xl-3"},[n("div",{staticClass:"card shadow mb-4"},[n("div",{staticClass:"card-body"},[n("div",{staticClass:"row align-items-center"},[n("div",{staticClass:"col"},[n("small",{staticClass:"text-dark mb-0"},[e._v("Sección")]),e._v(" "),n("h4",{staticClass:"font-weight-bold mb-0 text-uppercase text-dark"},[e._v("\n                              "+e._s(a.name)+"\n                            ")])]),e._v(" "),n("div",{staticClass:"col-auto"},[n("button",{staticClass:"btn btn-sm btn-inverse-primary",attrs:{type:"button"},on:{click:function(n){return n.preventDefault(),e.getSection(a.id,a.name,t.id)}}},[n("i",{staticClass:"fas fa-pen-alt text-warning mr-1"}),e._v("\n                              Editar\n                            ")])])])])])])})),0)])})),0)])]),e._v(" "),e.elementBlock?n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"card shadow"},[n("div",{staticClass:"card-header border-0"},[n("h2",{staticClass:"mb-0 text-uppercase text-primary"},[e._v("\n                  Página "+e._s(e.page.name)+" - Sección:\n                  "+e._s(e.section.name)+"\n                ")])]),e._v(" "),n("div",{staticClass:"card-body"},[n("form",{on:{submit:function(t){return t.preventDefault(),e.updateSection.apply(null,arguments)}}},[n("file-upload",{ref:"ref_content_images",staticClass:"d-none",attrs:{extensions:"jpg,jpeg,png",accept:"image/png, image/jpeg, image/jpg",drop:!1,multiple:!0,"input-id":"id_content_images"},on:{"input-filter":function(t){return e.$uploadImageUploadComponent(t,e.$refs.ref_content[0],25e4,"500kb","pages")}},model:{value:e.section.images,callback:function(t){e.$set(e.section,"images",t)},expression:"section.images"}}),e._v(" "),e._l(e.fields,(function(t,a){return n("div",{key:t.id},[n("div",{staticClass:"col-12 p-0"},[n("div",{staticClass:"form-group"},["input"!=t.type&&"editor_large"!=t.type&&"editor_small"!=t.type?n("label",{staticClass:"font-weight-bold"},[e._v(e._s(t.name))]):e._e(),e._v(" "),"input"==t.type?n("div",[n("Input",{attrs:{errors:e.errors,label:t.name,variable:"value",valueEn:e.fields[a].value_en,valueEs:e.fields[a].value_es,valueEnParent:e.fields[a].value_en,valueEsParent:e.fields[a].value_es},on:{"update:valueEn":function(t){return e.$set(e.fields[a],"value_en",t)},"update:value-en":function(t){return e.$set(e.fields[a],"value_en",t)},"update:valueEs":function(t){return e.$set(e.fields[a],"value_es",t)},"update:value-es":function(t){return e.$set(e.fields[a],"value_es",t)}}})],1):e._e(),e._v(" "),"editor_small"==t.type?n("div",[n("Editor",{attrs:{size:"md",label:t.name,variable:"description",errors:e.errors,valueEn:e.fields[a].value_en,valueEs:e.fields[a].value_es,valueEnParent:e.fields[a].value_en,valueEsParent:e.fields[a].value_es},on:{"update:valueEn":function(t){return e.$set(e.fields[a],"value_en",t)},"update:value-en":function(t){return e.$set(e.fields[a],"value_en",t)},"update:valueEs":function(t){return e.$set(e.fields[a],"value_es",t)},"update:value-es":function(t){return e.$set(e.fields[a],"value_es",t)}}})],1):e._e(),e._v(" "),"editor_large"==t.type?n("div",[n("Editor",{attrs:{size:"lg",label:t.name,variable:"description",errors:e.errors,valueEn:e.fields[a].value_en,valueEs:e.fields[a].value_es,valueEnParent:e.fields[a].value_en,valueEsParent:e.fields[a].value_es},on:{"update:valueEn":function(t){return e.$set(e.fields[a],"value_en",t)},"update:value-en":function(t){return e.$set(e.fields[a],"value_en",t)},"update:valueEs":function(t){return e.$set(e.fields[a],"value_es",t)},"update:value-es":function(t){return e.$set(e.fields[a],"value_es",t)}}})],1):e._e(),e._v(" "),"image"==t.type?n("div",[n("div",{staticClass:"row"},[t.value?n("div",{staticClass:"col-12 col-lg-4"},[n("img",{staticClass:"img-fluid d-block mb-3",attrs:{src:e.imagesUrl+"/content/"+t.value,alt:t.name}})]):e._e(),e._v(" "),n("div",{staticClass:"col-12",class:{"col-lg-8":t.value}},["Fondo"==t.name?n("div",[n("small",{staticClass:"d-block mb-0 lh-1"},[e._v("Resolución recomendada: 1440x250px")]),e._v(" "),n("small",{staticClass:"d-block mb-0 lh-1"},[e._v("Formato: JPG")]),e._v(" "),n("small",{staticClass:"d-block mb-2 lh-1"},[e._v("Tamaño recomendado: No mayor a 300KB")])]):e._e(),e._v(" "),n("vue-dropzone",{ref:"ref_"+t.variable,refInFor:!0,attrs:{id:"id_"+t.variable,options:e.dropzoneOptions,duplicateCheck:!0,useCustomSlot:!0},on:{"vdropzone-file-added":function(n){return e.$validateImageDropzone(n,e.$refs["ref_"+t.variable][0].dropzone,1,31e4,"300kb")}}},[n("div",{staticClass:"dropzone-custom-content"},[n("h5",{staticClass:"dropzone-custom-title text-primary"},[e._v("\n                                    Suelte el archivo aquí o haga click para\n                                    cargarlo.\n                                  ")])])])],1)])]):e._e(),e._v(" "),"video"==t.type?n("div",[n("div",{staticClass:"row"},[t.value?n("div",{staticClass:"col-12 mb-3"},[n("a",{staticClass:"btn btn-primary",attrs:{target:"_blank",href:e.videosUrl+"/content/"+t.value}},[n("i",{staticClass:"fas fa-play mr-1"}),e._v("\n                                Ver Video\n                              ")])]):e._e(),e._v(" "),n("div",{staticClass:"col-12"},[n("vue-dropzone",{ref:"ref_video",refInFor:!0,attrs:{id:"id_"+t.variable,options:e.dropzoneVideoOptions,duplicateCheck:!0,useCustomSlot:!0},on:{"vdropzone-file-added":function(t){return e.$validateVideoDropzone(t,e.$refs.ref_video[0].dropzone,1,8388608,"8mb")}}},[n("div",{staticClass:"dropzone-custom-content"},[n("h5",{staticClass:"dropzone-custom-title text-primary"},[e._v("\n                                    Suelte el archivo aquí o haga click para\n                                    cargarlo.\n                                  ")])])])],1)])]):e._e()])])])})),e._v(" "),n("div",{staticClass:"col-12 p-0 text-right"},[n("Button",{attrs:{text:"Actualizar",classes:["btn-inverse-primary","mr-2"],"request-server":e.requestServer}}),e._v(" "),n("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(t){return t.preventDefault(),e.restorePage.apply(null,arguments)}}},[e._v("\n                      Cancelar\n                    ")])],1)],2)])])])]):e._e()])])])])}),[],!1,null,null,null);t.default=b.exports},"5sbD":function(e,t,n){var a=n("KsmT");"string"==typeof a&&(a=[[e.i,a,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(a,s);a.locals&&(e.exports=a.locals)},CkAj:function(e,t,n){"use strict";var a=n("0YuL"),s=n("TVlQ"),i={props:{open:Boolean,loadingGet:Boolean,element:String,loadingSubmit:Boolean},components:{Button:s.a,Skeleton:a.a},data:function(){return{requestSubmit:!1,requestGet:!1,inputDestroy:"",buttonDestroy:!0}},methods:{submit:function(){this.$emit("submit")},cancelCustom:function(){this.$emit("cancel")},restore:function(){this.requestSubmit=!1,this.requestGet=!1,this.inputDestroy="",this.buttonDestroy=!0}},watch:{open:function(e){0==e&&this.restore()},inputDestroy:function(e){e===e.toUpperCase()&&"ELIMINAR"===e?this.buttonDestroy=!1:this.buttonDestroy=!0}}},r=n("KHd+"),o=Object(r.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-modal",{attrs:{"no-close-on-esc":"","no-close-on-backdrop":"",centered:"","footer-class":"border-0 pt-0","body-class":"pt-0"},on:{close:e.cancelCustom},scopedSlots:e._u([{key:"modal-footer",fn:function(t){t.ok;return[n("Button",{directives:[{name:"show",rawName:"v-show",value:!e.loadingGet,expression:"!loadingGet"}],attrs:{classes:["btn-danger"],text:"Eliminar","request-server":e.loadingSubmit,disabled:e.buttonDestroy},on:{click:e.submit}}),e._v(" "),n("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:e.cancelCustom}},[e._v("Cancelar")])]}}]),model:{value:e.open,callback:function(t){e.open=t},expression:"open"}},[n("template",{slot:"modal-title"},[n("div",{staticClass:"text-primary h2"},[e._v("Eliminar "+e._s(e.element.charAt(0).toUpperCase()+e.element.slice(1)))])]),e._v(" "),n("template",{slot:"modal-header-close"},[n("button",{staticClass:"btn p-0 bg-transparent",attrs:{type:"button"},on:{click:e.cancelCustom}},[n("jam-close")],1)]),e._v(" "),e.loadingGet?n("div",[n("Skeleton"),e._v(" "),n("div",{staticClass:"w-25 mb-1"},[n("Skeleton")],1),e._v(" "),n("div",{staticClass:"w-75"},[n("Skeleton")],1)],1):n("div",[n("p",[e._v("Esta apunto de eliminar un "+e._s(e.element)+", una vez que realice esta acción no se puede deshacer")]),e._v(" "),n("p",{staticClass:"mb-2"},[e._v("\n      Escribe\n      "),n("b",[e._v("ELIMINAR")]),e._v(" para confirmar\n    ")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputDestroy,expression:"inputDestroy"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.inputDestroy},on:{input:function(t){t.target.composing||(e.inputDestroy=t.target.value)}}})])],2)}),[],!1,null,null,null);t.a=o.exports},"F/Qi":function(e,t,n){"use strict";n("5sbD")},F05R:function(e,t,n){"use strict";var a={props:{showBreadCrumb:{default:!0,type:Boolean},title:String,parent:String,active:String}},s=(n("F/Qi"),n("KHd+")),i=Object(s.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.showBreadCrumb?n("nav",{staticClass:"d-lg-inline-block",attrs:{"aria-label":"breadcrumb"}},[n("ol",{staticClass:"breadcrumb p-0 m-0 breadcrumb-links bg-transparent"},[n("li",{staticClass:"breadcrumb-item"},[n("a",{attrs:{href:"/dashboard"}},[n("jam-pie-chart",{attrs:{height:"16",width:"16"}})],1)]),e._v(" "),e.parent?n("li",{staticClass:"breadcrumb-item"},[n("a",[e._v(e._s(e.parent))])]):e._e(),e._v(" "),e.active?n("li",{staticClass:"breadcrumb-item text-primary",attrs:{"aria-current":"page"}},[e._v(e._s(e.active))]):e._e()])]):e._e(),e._v(" "),n("h1",{staticClass:"h1 font-weight-bold mb-0"},[e._v(e._s(e.title))])])}),[],!1,null,"0286e577",null);t.a=i.exports},FTHT:function(e,t,n){"use strict";var a={components:{Skeleton:n("0YuL").a}},s=n("KHd+"),i=Object(s.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"w-25 mb-2"},[n("Skeleton")],1),e._v(" "),n("div",{staticClass:"mb-2"},[n("Skeleton")],1),e._v(" "),n("div",{staticClass:"w-25 mb-2"},[n("Skeleton")],1),e._v(" "),n("div",{staticClass:"mb-2"},[n("Skeleton")],1),e._v(" "),n("div",{staticClass:"w-25 mb-2"},[n("Skeleton")],1),e._v(" "),n("div",{staticClass:"mb-2"},[n("Skeleton")],1),e._v(" "),n("div",{staticClass:"w-25 mb-2"},[n("Skeleton")],1),e._v(" "),n("div",{staticClass:"mb-2"},[n("Skeleton")],1),e._v(" "),n("div",{staticClass:"text-right"},[n("div",{staticClass:"w-25 ml-auto"},[n("Skeleton")],1)])])}),[],!1,null,null,null);t.a=i.exports},J3pF:function(e,t,n){"use strict";n("1jZt")},KsmT:function(e,t,n){(e.exports=n("I1BE")(!1)).push([e.i,'\n.breadcrumb-dark .breadcrumb-item + .breadcrumb-item[data-v-0286e577]::before {\r\n  color: #adb5bd;\n}\n.breadcrumb-item + .breadcrumb-item[data-v-0286e577]::before {\r\n  display: inline-block;\r\n  padding-right: 0.5rem;\r\n  content: "-";\r\n  color: #8898aa;\n}\n.bg-transparent[data-v-0286e577] {\r\n  background: transparent;\n}\r\n',""])},"S2+X":function(e,t,n){"use strict";var a={props:{label:String,variable:String,errors:Object,valueEnParent:String,valueEsParent:String},data:function(){return{active:"es",value:{en:"",es:""},random:Math.ceil(10*Math.random())}},methods:{toggle:function(e){this.active=e}},watch:{valueEnParent:{immediate:!0,handler:function(e){this.value.en=e}},valueEsParent:{immediate:!0,handler:function(e){this.value.es=e}},"value.en":function(e,t){this.$emit("update:valueEn",e)},"value.es":function(e,t){this.$emit("update:valueEs",e)}},computed:{countErrors:function(){if(Object.keys(this.errors).length){var e=0;for(var t in this.errors)t!=this.variable+"_en"&&t!=this.variable+"_es"||e++;return e}}}},s=n("KHd+"),i=Object(s.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"form-group"},[n("div",{staticClass:"d-flex"},[n("a",{staticClass:"btn btn-sm py-0 px-2 btn-icon mr-1",class:"es"==e.active?"btn-primary":"btn-outline-primary",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.toggle("es")}}},[n("span",{staticClass:"btn-inner--icon"},[n("gb-flag",{attrs:{code:"es",size:"small"}})],1),e._v(" "),n("span",{staticClass:"btn-inner--text"},[e._v("Español")])]),e._v(" "),n("a",{staticClass:"btn btn-sm py-0 px-2 btn-icon",class:"en"==e.active?"btn-primary":"btn-outline-primary",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.toggle("en")}}},[n("span",{staticClass:"btn-inner--icon"},[n("gb-flag",{attrs:{code:"gb",size:"small"}})],1),e._v(" "),n("span",{staticClass:"btn-inner--text"},[e._v("Inglés")])]),e._v(" "),e.countErrors?n("div",{staticClass:"d-inline-block ml-auto text-danger mt-1"},[e._v(e._s(e.countErrors)+"  "+e._s(e.countErrors>1?"Errores":"Error"))]):e._e()]),e._v(" "),n("div",{staticClass:"mt-2"},[n("label",{staticClass:"font-weight-bold",attrs:{for:e.label+e.random}},[e._v(e._s(e.label)+":")])]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.value[e.active],expression:"value[ active ]"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.value[e.active]},on:{input:function(t){t.target.composing||e.$set(e.value,e.active,t.target.value)}}}),e._v(" "),e._t("default"),e._v(" "),e._l(e.errors,(function(t,a){return n("div",{key:a},[a==e.variable+"_"+e.active?n("label",{staticClass:"text-danger text-sm d-block"},[e._v(e._s(t[0]))]):e._e()])}))],2)}),[],!1,null,null,null);t.a=i.exports},TVlQ:function(e,t,n){"use strict";var a={props:{text:String,classes:Array,requestServer:Boolean},methods:{click:function(){this.$emit("click")}}},s=(n("J3pF"),n("KHd+")),i=Object(s.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"btn",class:e.classes,attrs:{disabled:1==e.requestServer},on:{click:e.click}},[e.requestServer?n("span",[e._v("\n        Cargando \n        "),n("svg",{staticClass:"ml-1 loading-svg",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 40 40"}},[n("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[n("g",{attrs:{transform:"translate(1 1)","stroke-width":"3"}},[n("circle",{attrs:{"stroke-opacity":"1",cx:"0",cy:"0",r:"0"}}),e._v(" "),n("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18",transform:"rotate(83.9974 18 18)"}},[n("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"}})],1)])])])]):n("span",[e._v(e._s(e.text))])])}),[],!1,null,"7a0ec1bd",null);t.a=i.exports},t3wN:function(e,t,n){"use strict";var a=n("kzlf"),s=n.n(a),i=n("2NyR"),r=n("lT11"),o=n("gBkH"),l=n.n(o);s.a.register("modules/clipboard",i.a,!0);var c={components:{quillEditor:r.quillEditor,FileUpload:l.a},props:{size:String,label:String,variable:String,errors:Object,valueEnParent:String,valueEsParent:String,url:{type:String,required:!1},textImage:{type:String,required:!1}},data:function(){return{editorOptions:{placeholder:"",modules:{toolbar:{handlers:{image:function(e){document.getElementById("id_content_images").click()}},container:[["bold","italic","underline","strike"],["blockquote"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{indent:"-1"},{indent:"+1"}],[{header:[1,2,3,4,5,!1]}],[{color:[]},{background:[]}],[{align:[]}],["link","video",this.textImage]]}}},active:"es",value:{en:"",es:""},random:Math.ceil(10*Math.random())}},methods:{toggle:function(e){this.active=e}},watch:{valueEnParent:{immediate:!0,handler:function(e){this.value.en=e}},valueEsParent:{immediate:!0,handler:function(e){this.value.es=e}},"value.en":function(e,t){this.$emit("update:valueEn",e)},"value.es":function(e,t){this.$emit("update:valueEs",e)}},computed:{countErrors:function(){if(Object.keys(this.errors).length){var e=0;for(var t in this.errors)t!=this.variable+"_en"&&t!=this.variable+"_es"||e++;return e}}}},u=n("KHd+"),d=Object(u.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"form-group"},[n("div",{staticClass:"d-flex"},[n("a",{staticClass:"btn btn-sm py-0 px-2 btn-icon mr-1",class:"es"==e.active?"btn-primary":"btn-outline-primary",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.toggle("es")}}},[n("span",{staticClass:"btn-inner--icon"},[n("gb-flag",{attrs:{code:"es",size:"small"}})],1),e._v(" "),n("span",{staticClass:"btn-inner--text"},[e._v("Español")])]),e._v(" "),n("a",{staticClass:"btn btn-sm py-0 px-2 btn-icon",class:"en"==e.active?"btn-primary":"btn-outline-primary",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.toggle("en")}}},[n("span",{staticClass:"btn-inner--icon"},[n("gb-flag",{attrs:{code:"gb",size:"small"}})],1),e._v(" "),n("span",{staticClass:"btn-inner--text"},[e._v("Inglés")])]),e._v(" "),e.countErrors?n("div",{staticClass:"d-inline-block ml-auto text-danger mt-1"},[e._v(e._s(e.countErrors)+" "+e._s(e.countErrors>1?"Errores":"Error"))]):e._e()]),e._v(" "),n("div",{staticClass:"mt-2"},[n("label",{staticClass:"font-weight-bold",attrs:{for:e.label+e.random}},[e._v(e._s(e.label)+":")])]),e._v(" "),n("quill-Editor",{ref:"ref_content",class:"sm"==e.size?"ql-height-5":"md"==e.size?"ql-height-10":"ql-height-25",attrs:{options:e.editorOptions},on:{keydown:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;t.preventDefault()}},model:{value:e.value[e.active],callback:function(t){e.$set(e.value,e.active,t)},expression:"value[ active ]"}}),e._v(" "),n("file-upload",{ref:"ref_content_f",staticClass:"d-none",attrs:{extensions:"jpg,jpeg,png",accept:"image/png, image/jpeg, image/jpg",drop:!1,multiple:!0,"input-id":"id_content_images"},on:{"input-filter":function(t){return e.$uploadImageUploadComponent(t,e.$refs.ref_content,25e4,"250kb",e.url)}}}),e._v(" "),e._l(e.errors,(function(t,a){return n("div",{key:a,staticClass:"mt-2"},[a==e.variable+"_"+e.active?n("label",{staticClass:"text-danger text-sm d-block"},[e._v(e._s(t[0]))]):e._e()])}))],2)}),[],!1,null,null,null);t.a=d.exports},uNoH:function(e,t,n){(e.exports=n("I1BE")(!1)).push([e.i,"\n.loading-svg[data-v-7a0ec1bd]{\r\n    fill: currentColor;\r\n    stroke: currentColor;\n}\r\n",""])}}]);