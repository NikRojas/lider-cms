(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{CkAj:function(t,e,s){"use strict";var o=s("0YuL"),a=s("TVlQ"),l={props:{open:Boolean,loadingGet:Boolean,element:String,loadingSubmit:Boolean},components:{Button:a.a,Skeleton:o.a},data:function(){return{requestSubmit:!1,requestGet:!1,inputDestroy:"",buttonDestroy:!0}},methods:{submit:function(){this.$emit("submit")},cancelCustom:function(){this.$emit("cancel")},restore:function(){this.requestSubmit=!1,this.requestGet=!1,this.inputDestroy="",this.buttonDestroy=!0}},watch:{open:function(t){0==t&&this.restore()},inputDestroy:function(t){t===t.toUpperCase()&&"ELIMINAR"===t?this.buttonDestroy=!1:this.buttonDestroy=!0}}},i=s("KHd+"),n=Object(i.a)(l,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-modal",{attrs:{"no-close-on-esc":"","no-close-on-backdrop":"",centered:"","footer-class":"border-0 pt-0","body-class":"pt-0"},on:{close:t.cancelCustom},scopedSlots:t._u([{key:"modal-footer",fn:function(e){e.ok;return[s("Button",{directives:[{name:"show",rawName:"v-show",value:!t.loadingGet,expression:"!loadingGet"}],attrs:{classes:["btn-danger"],text:"Eliminar","request-server":t.loadingSubmit,disabled:t.buttonDestroy},on:{click:t.submit}}),t._v(" "),s("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:t.cancelCustom}},[t._v("Cancelar")])]}}]),model:{value:t.open,callback:function(e){t.open=e},expression:"open"}},[s("template",{slot:"modal-title"},[s("div",{staticClass:"text-primary h2"},[t._v("Eliminar "+t._s(t.element.charAt(0).toUpperCase()+t.element.slice(1)))])]),t._v(" "),s("template",{slot:"modal-header-close"},[s("button",{staticClass:"btn p-0 bg-transparent",attrs:{type:"button"},on:{click:t.cancelCustom}},[s("jam-close")],1)]),t._v(" "),t.loadingGet?s("div",[s("Skeleton"),t._v(" "),s("div",{staticClass:"w-25 mb-1"},[s("Skeleton")],1),t._v(" "),s("div",{staticClass:"w-75"},[s("Skeleton")],1)],1):s("div",[s("p",[t._v("Esta apunto de eliminar un "+t._s(t.element)+", una vez que realice esta acción no se puede deshacer")]),t._v(" "),s("p",{staticClass:"mb-2"},[t._v("\n      Escribe\n      "),s("b",[t._v("ELIMINAR")]),t._v(" para confirmar\n    ")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.inputDestroy,expression:"inputDestroy"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.inputDestroy},on:{input:function(e){e.target.composing||(t.inputDestroy=e.target.value)}}})])],2)}),[],!1,null,null,null);e.a=n.exports},FTHT:function(t,e,s){"use strict";var o={components:{Skeleton:s("0YuL").a}},a=s("KHd+"),l=Object(a.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"w-25 mb-2"},[s("Skeleton")],1),t._v(" "),s("div",{staticClass:"mb-2"},[s("Skeleton")],1),t._v(" "),s("div",{staticClass:"w-25 mb-2"},[s("Skeleton")],1),t._v(" "),s("div",{staticClass:"mb-2"},[s("Skeleton")],1),t._v(" "),s("div",{staticClass:"w-25 mb-2"},[s("Skeleton")],1),t._v(" "),s("div",{staticClass:"mb-2"},[s("Skeleton")],1),t._v(" "),s("div",{staticClass:"w-25 mb-2"},[s("Skeleton")],1),t._v(" "),s("div",{staticClass:"mb-2"},[s("Skeleton")],1),t._v(" "),s("div",{staticClass:"text-right"},[s("div",{staticClass:"w-25 ml-auto"},[s("Skeleton")],1)])])}),[],!1,null,null,null);e.a=l.exports},XqOx:function(t,e,s){"use strict";s.r(e);var o=s("F05R"),a=s("FTHT"),l=s("CkAj"),i=s("ZMUr"),n=s("/hKJ"),r={components:{BreadCrumb:o.a,Destroy:l.a,DataTable:i.a,NoData:n.a,SkeletonForm:a.a},props:{routeCreate:String,routeGetAll:String,route:String,appUrl:String,imagesUrl:String},data:function(){return{loadingEls:!1,elements:{},element:{},modalDestroy:!1,loadingGet:!1,requestSubmit:!1,elementsPerPage:10,modalView:!1}},methods:{getEls:function(t,e){var s=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=this.routeGetAll+"?page="+t+"&itemsPerPage="+e;o&&(a=a+"&q="+o),axios.get(a).then((function(t){s.elements=t.data})).catch((function(t){}))},restoreEl:function(){this.element={},this.modalDestroy=this.modalView=!1},restore:function(){this.modalDestroy=!1,this.getEls(1,this.elementsPerPage)},showElement:function(t){this.modalView=!0,this.getEl(t)},editElement:function(t){document.location.href=this.route+"/editar/"+t},deleteElement:function(t){this.modalDestroy=!0,this.getEl(t)},getEl:function(t){var e=this;this.loadingGet=!0,axios.get(this.route+"/json/get/"+t).then((function(t){e.element=t.data,e.loadingGet=!1})).catch((function(t){}))},destroyConfirm:function(){var t=this;this.requestSubmit=!0,axios.delete(this.route+"/"+this.element.id).then((function(e){t.requestSubmit=!1,t.restore(),Swal.fire({title:e.data.title,text:e.data.message,type:"success",confirmButtonText:"OK",buttonsStyling:!1,customClass:{confirmButton:"btn btn-inverse-primary"}})})).catch((function(e){Swal.fire({title:e.response.data.title,text:e.response.data.message,type:"error",confirmButtonText:"OK",buttonsStyling:!1,customClass:{confirmButton:"btn btn-inverse-primary"}}),t.restoreEl()}))}},created:function(){this.getEls(1,this.elementsPerPage)}},c=s("KHd+"),d=Object(c.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"header pb-6"},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"header-body"},[s("div",{staticClass:"row align-items-center pt-0 pt-md-2 pb-4"},[s("div",{staticClass:"col-6 col-md-7"},[s("BreadCrumb",{attrs:{title:"Posts",parent:"",active:"Blog"}})],1),t._v(" "),s("div",{staticClass:"col-6 col-md-5 text-right"},[s("a",{staticClass:"btn btn-icon btn-inverse-primary",attrs:{href:t.routeCreate}},[s("span",{staticClass:"btn-inner--icon"},[s("jam-newspaper",{staticClass:"current-color"})],1),t._v(" "),s("span",{staticClass:"btn-inner--text"},[t._v("Nuevo Post")])])])])])])]),t._v(" "),s("div",{staticClass:"container-fluid mt--6"},[s("DataTable",{attrs:{object:t.elements,placeholder:"Título ES, Título EN","button-update":!0,"button-read":!0,"button-delete":!0,"button-disable":!1,"entries-prop":t.elementsPerPage},on:{get:t.getEls,read:t.showElement,delete:t.deleteElement,update:t.editElement,"update:entriesProp":function(e){t.elementsPerPage=e},"update:entries-prop":function(e){t.elementsPerPage=e}}})],1),t._v(" "),s("b-modal",{attrs:{"no-close-on-esc":"","no-close-on-backdrop":"",centered:"",size:"xl","footer-class":"border-0 pt-0","body-class":"pt-0"},on:{close:t.restoreEl},scopedSlots:t._u([{key:"modal-footer",fn:function(e){e.ok;return[s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.restoreEl}},[t._v("Cerrar")])]}}]),model:{value:t.modalView,callback:function(e){t.modalView=e},expression:"modalView"}},[s("template",{slot:"modal-title"},[s("div",{staticClass:"text-primary h2"},[t._v("Post")])]),t._v(" "),s("template",{slot:"modal-header-close"},[s("button",{staticClass:"btn p-0 bg-transparent",attrs:{type:"button"},on:{click:t.restoreEl}},[s("jam-close")],1)]),t._v(" "),t.loadingGet?s("div",[s("SkeletonForm")],1):s("div",[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-lg-8 col-md-8"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-md-6"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"font-weight-bold"},[t._v("Título ES:")]),t._v(" "),s("p",[t._v(t._s(t.element.title_es))])])]),t._v(" "),s("div",{staticClass:"col-12 col-md-6"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"font-weight-bold"},[t._v("Título EN:")]),t._v(" "),s("p",[t._v(t._s(t.element.title_en))])])]),t._v(" "),s("div",{staticClass:"col-12"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"font-weight-bold"},[t._v("Publicado:")]),t._v(" "),s("p",[t._v(t._s(t.element.published?"Sí":"No"))])])]),t._v(" "),s("div",{staticClass:"col-12 col-md-6"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"font-weight-bold"},[t._v("Seo Keywords ES:")]),t._v(" "),t.element.seo_keywords_es?s("p",[t._v(t._s(t.element.seo_keywords_es))]):s("p",[t._v("No registrado Seo Keywords ES")])])]),t._v(" "),s("div",{staticClass:"col-12 col-md-6"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"font-weight-bold"},[t._v("Seo Keywords EN:")]),t._v(" "),t.element.seo_keywords_en?s("p",[t._v(t._s(t.element.seo_keywords_en))]):s("p",[t._v("No registrado Seo Keywords EN")])])]),t._v(" "),s("div",{staticClass:"col-12 col-md-6"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"font-weight-bold"},[t._v("Tags ES:")]),t._v(" "),s("p",[t._l(t.element.tags,(function(e,s){return[s==t.element.tags.length-1?[t._v(t._s(e.name_es))]:[t._v(t._s(e.name_es)+",")]]}))],2)])]),t._v(" "),s("div",{staticClass:"col-12 col-md-6"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"font-weight-bold"},[t._v("Tags EN:")]),t._v(" "),s("p",[t._l(t.element.tags,(function(e,s){return[s==t.element.tags.length-1?[t._v(t._s(e.name_en))]:[t._v(t._s(e.name_en)+",")]]}))],2)])]),t._v(" "),s("div",{staticClass:"col-12 col-md-6"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"font-weight-bold"},[t._v("Categoría ES:")]),t._v(" "),t.element.category?[s("p",[t._v(t._s(t.element.category.name_es))])]:t._e()],2)]),t._v(" "),s("div",{staticClass:"col-12 col-md-6"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"font-weight-bold"},[t._v("Categoría EN:")]),t._v(" "),t.element.category?[s("p",[t._v(t._s(t.element.category.name_en))])]:t._e()],2)]),t._v(" "),s("div",{staticClass:"col-12 col-md-6"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"font-weight-bold"},[t._v("Descripción ES:")]),t._v(" "),s("p",[t._v(t._s(t.element.excerpt_es))])])]),t._v(" "),s("div",{staticClass:"col-12 col-md-6"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"font-weight-bold"},[t._v("Descripción EN:")]),t._v(" "),s("p",[t._v(t._s(t.element.excerpt_en))])])]),t._v(" "),s("div",{staticClass:"col-12 col-md-6"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"font-weight-bold"},[t._v("Contenido ES:")]),t._v(" "),s("p",{domProps:{innerHTML:t._s(t.element.content_es)}})])]),t._v(" "),s("div",{staticClass:"col-12 col-md-6"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"font-weight-bold"},[t._v("Contenido EN:")]),t._v(" "),s("p",{domProps:{innerHTML:t._s(t.element.content_en)}})])])])]),t._v(" "),s("div",{staticClass:"col-12 col-lg-4 col-md-4"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"font-weight-bold d-block"},[t._v("Imagen:")]),t._v(" "),s("img",{staticClass:"img-fluid",attrs:{src:t.imagesUrl+"/posts/"+t.element.image,alt:t.element.name}})])]),t._v(" "),s("div",{staticClass:"col-12"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"font-weight-bold d-block"},[t._v("Miniatura:")]),t._v(" "),s("img",{staticClass:"img-fluid",attrs:{src:t.imagesUrl+"/posts/"+t.element.thumbnail,alt:t.element.name}})])])])])])])],2),t._v(" "),s("destroy",{attrs:{element:"post",open:t.modalDestroy,"loading-get":t.loadingGet,"loading-submit":t.requestSubmit},on:{cancel:t.restoreEl,submit:t.destroyConfirm}})],1)}),[],!1,null,null,null);e.default=d.exports}}]);