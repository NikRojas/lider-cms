(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"+lMP":function(e,t,r){(e.exports=r("I1BE")(!1)).push([e.i,".right[data-v-984fc9ca] {\n  right: 0;\n}\n.bg-seo[data-v-984fc9ca] {\n  height: 300px;\n  background-position: center;\n  background-size: cover;\n}",""])},"0ri2":function(e,t,r){var s=r("+lMP");"string"==typeof s&&(s=[[e.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};r("aET+")(s,n);s.locals&&(e.exports=s.locals)},"1jZt":function(e,t,r){var s=r("uNoH");"string"==typeof s&&(s=[[e.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};r("aET+")(s,n);s.locals&&(e.exports=s.locals)},"5sbD":function(e,t,r){var s=r("KsmT");"string"==typeof s&&(s=[[e.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};r("aET+")(s,n);s.locals&&(e.exports=s.locals)},"9tPo":function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var r=t.protocol+"//"+t.host,s=r+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(e,t){var n,a=t.trim().replace(/^"(.*)"$/,(function(e,t){return t})).replace(/^'(.*)'$/,(function(e,t){return t}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?e:(n=0===a.indexOf("//")?a:0===a.indexOf("/")?r+a:s+a.replace(/^\.\//,""),"url("+JSON.stringify(n)+")")}))}},DXCp:function(e,t,r){"use strict";r("0ri2")},EYy5:function(e,t,r){"use strict";r.r(t);var s=r("S2+X"),n=r("vTf2"),a=r("S4HP"),i=r("ksP6"),o=r.n(i),l=r("TVlQ"),c=r("F05R"),u={props:{appUrl:{type:String},assetUrl:{type:String}},components:{Button:l.a,vueDropzone:o.a,Loader:a.a,BreadCrumb:c.a,Input:s.a,Textarea:n.a},data:function(){return{pages:{},editBlock:!1,pageSelected:0,requestServer:!1,requestServerGet:!1,errors:{},dropzoneOptions:{url:"/",maxFiles:1,acceptedFiles:"image/png,image/jpeg,image/jpg,image/svg+xml",autoProcessQueue:!1,thumbnailWidth:400,addRemoveLinks:!0,dictRemoveFile:"Remover"},page:{title:"",seo_description:"",seo_keywords:"",seo_image:""}}},methods:{restoreEl:function(){this.errors={},this.page={title:"",seo_description:"",seo_keywords:"",seo_image:""},this.editBlock=!1,this.pageSelected=0},restorePage:function(){this.getPages(),this.errors=this.pages={},this.editBlock=this.requestServer=!1,this.pageSelected=0,this.page={title:"",seo_description:"",seo_keywords:"",seo_image:""}},getPages:function(){var e=this;this.requestServerGet=!0,axios.get("seo/json/get-all").then((function(t){e.pages=t.data,e.requestServerGet=!1})).catch((function(e){}))},updatePage:function(){var e=this;this.requestServer=!0;var t=new FormData;this.page.title_es?t.append("title_es",this.page.title_es):t.append("title_es",""),this.page.title_en?t.append("title_en",this.page.title_en):t.append("title_en",""),this.page.seo_keywords_es?t.append("seo_keywords_es",this.page.seo_keywords_es):t.append("seo_keywords_es",""),this.page.seo_keywords_en?t.append("seo_keywords_en",this.page.seo_keywords_en):t.append("seo_keywords_en",""),this.page.seo_description_es?t.append("seo_description_es",this.page.seo_description_es):t.append("seo_description_es",""),this.page.seo_description_en?t.append("seo_description_en",this.page.seo_description_en):t.append("seo_description_en",""),this.$refs.ref_image[0].dropzone.files[0]&&t.append("seo_image",this.$refs.ref_image[0].dropzone.files[0]),t.append("_method","PUT"),axios.post("seo/"+this.page.id,t).then((function(t){e.requestServer=!1,e.restorePage(),Swal.fire({title:t.data.title,text:t.data.message,type:"success",confirmButtonText:"OK",buttonsStyling:!1,customClass:{confirmButton:"btn btn-inverse-primary"}})})).catch((function(t){e.requestServer=!1,422!==t.response.status?(e.restoreEl(),Swal.fire({title:t.response.data.title,text:t.response.data.message,type:"error",confirmButtonText:"OK",buttonsStyling:!1,customClass:{confirmButton:"btn btn-inverse-primary"}})):e.errors=t.response.data.errors||{}}))},editPage:function(e){this.editBlock=!0,this.pageSelected=e,this.page={},this.page=this.pages.find((function(t){return t.id===e}))}},created:function(){this.getPages()}},d=(r("DXCp"),r("KHd+")),p=Object(d.a)(u,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"header pb-6"},[r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"header-body"},[r("div",{staticClass:"row align-items-center pt-0 pt-md-2 pb-4"},[r("div",{staticClass:"col-12"},[r("BreadCrumb",{attrs:{title:"SEO",parent:"Información",active:"SEO"}})],1)])])])]),e._v(" "),r("div",{staticClass:"container-fluid mt--6"},[e.requestServerGet?r("Loader",{style:{display:"inline-block",height:"400px"},attrs:{iconHeight:30,iconWidth:30}}):r("div",{staticClass:"row"},e._l(e.pages,(function(t){return r("div",{key:t.id,staticClass:"col-lg-4 col-md-6 col-12 mb-4"},[r("form",{on:{submit:function(t){return t.preventDefault(),e.updatePage.apply(null,arguments)}}},[e.pageSelected!=t.id?r("div",[t.seo_image?r("div",{staticClass:"img-holder bg-seo card-img-top position-relative",style:{"background-image":"url("+e.assetUrl+"/storage/img/pages/"+t.seo_image+")"}},[r("a",{staticClass:"btn btn-primary btn-sm right position-absolute m-2",attrs:{href:e.assetUrl+"/storage/img/pages/"+t.seo_image,target:"_blank",rel:"noopener noreferrer"}},[e._v("Ver Imagen")])]):e._e()]):e._e(),e._v(" "),r("div",{staticClass:"card"},[r("div",{staticClass:"card-body "},[r("div",[e.editBlock&&e.pageSelected==t.id?r("div",{staticClass:"form-group"},[r("label",{staticClass:"font-weight-bold mb-0",attrs:{for:"id_imagen"}},[e._v("Imagen")]),e._v(" "),r("small",{staticClass:"text-muted d-block mb-0 lh-1"},[e._v("Resolución recomendada: 1200x900px")]),e._v(" "),r("small",{staticClass:"text-muted d-block mb-2 lh-1"},[e._v("Tamaño recomendado: Menor a 100kb")]),e._v(" "),r("vue-dropzone",{ref:"ref_image",refInFor:!0,attrs:{id:"id_imagen",options:e.dropzoneOptions,duplicateCheck:!0,useCustomSlot:!0},on:{"vdropzone-file-added":function(t){return e.$validateImageDropzone(t,e.$refs.ref_image[0].dropzone,1,1e5,"100kb")}}},[r("div",{staticClass:"dropzone-custom-content"},[r("h5",{staticClass:"dropzone-custom-title text-primary"},[e._v("Suelte el archivo aquí o haga click para cargarlo.")])])]),e._v(" "),e.errors&&e.errors.imagen?r("label",{staticClass:"text-danger text-sm d-block",attrs:{for:"id_imagen"}},[e._v(e._s(e.errors.imagen[0]))]):e._e()],1):e._e(),e._v(" "),e.editBlock?e._e():r("div",{staticClass:"text-right"},[r("a",{staticClass:"d-inline-block",staticStyle:{"text-decoration":"underline"},attrs:{target:"_blank",rel:"noopener noreferrer",href:e.appUrl+(t.slug_es?"/"+t.slug_es:"")}},[e._v(e._s(e.appUrl)),t.slug_es?r("small",[e._v("/"+e._s(t.slug_es))]):e._e()]),e._v(" "),r("br"),e._v(" "),r("a",{staticClass:"d-inline-block",staticStyle:{"text-decoration":"underline"},attrs:{target:"_blank",rel:"noopener noreferrer",href:e.appUrl+(t.slug_en?"/en/"+t.slug_en:"/en")}},[e._v(e._s(e.appUrl)),t.slug_en?r("small",[e._v("/en/"+e._s(t.slug_en))]):r("small",[e._v("/en")])])]),e._v(" "),e.pageSelected!=t.id?r("h4",{staticClass:"mb-3 font-weight-bold"},[e._v("Título ES: "+e._s(t.title_es)+" "),r("br"),e._v(" Título EN: "+e._s(t.title_en))]):e._e(),e._v(" "),e.editBlock&&e.pageSelected==t.id?r("div",{staticClass:"form-group"},[r("Input",{attrs:{label:"Título",variable:"title",errors:e.errors,valueEn:t.title_en,valueEs:t.title_es,valueEnParent:t.title_en,valueEsParent:t.title_es},on:{"update:valueEn":function(r){return e.$set(t,"title_en",r)},"update:value-en":function(r){return e.$set(t,"title_en",r)},"update:valueEs":function(r){return e.$set(t,"title_es",r)},"update:value-es":function(r){return e.$set(t,"title_es",r)}}})],1):e._e(),e._v(" "),r("div",{staticClass:"mb-2"},[e.pageSelected!=t.id?r("div",[r("p",{staticClass:"mb-0 text-primary font-weight-bold"},[e._v("Descripción SEO")]),e._v(" "),r("div",[t.seo_description_es?r("p",{staticClass:"project-description mb-0"},[e._v("ES: "+e._s(t.seo_description_es))]):r("p",{staticClass:"mb-0"},[e._v("ES: No registrado")])]),e._v(" "),r("div",[t.seo_description_en?r("p",{staticClass:"project-description mb-0"},[e._v("EN: "+e._s(t.seo_description_en))]):r("p",{staticClass:"mb-0"},[e._v("ES: No registrado")])])]):e._e(),e._v(" "),e.editBlock&&e.pageSelected==t.id?r("div",{staticClass:"form-group"},[r("Textarea",{attrs:{label:"Descripción SEO",variable:"seo_description",errors:e.errors,valueEn:t.seo_description_en,valueEs:t.seo_description_es,valueEnParent:t.seo_description_en,valueEsParent:t.seo_description_es},on:{"update:valueEn":function(r){return e.$set(t,"seo_description_en",r)},"update:value-en":function(r){return e.$set(t,"seo_description_en",r)},"update:valueEs":function(r){return e.$set(t,"seo_description_es",r)},"update:value-es":function(r){return e.$set(t,"seo_description_es",r)}}})],1):e._e()]),e._v(" "),r("div",[e.pageSelected!=t.id?r("div",[r("p",{staticClass:"mb-0 text-primary font-weight-bold"},[e._v("Keywords SEO")]),e._v(" "),r("div",[t.seo_keywords_es?r("p",{staticClass:"mb-0"},[e._v("ES: "+e._s(t.seo_keywords_es))]):r("p",{staticClass:"mb-0"},[e._v("ES: No registrado")])]),e._v(" "),r("div",[t.seo_keywords_en?r("p",{staticClass:"mb-0"},[e._v("EN: "+e._s(t.seo_keywords_en))]):r("p",{staticClass:"mb-0"},[e._v("EN: No registrado")])])]):e._e(),e._v(" "),e.editBlock&&e.pageSelected==t.id?r("div",{staticClass:"form-group"},[r("Textarea",{attrs:{label:"Keywords SEO",variable:"seo_keywords",errors:e.errors,valueEn:t.seo_keywords_en,valueEs:t.seo_keywords_es,valueEnParent:t.seo_keywords_en,valueEsParent:t.seo_keywords_es},on:{"update:valueEn":function(r){return e.$set(t,"seo_keywords_en",r)},"update:value-en":function(r){return e.$set(t,"seo_keywords_en",r)},"update:valueEs":function(r){return e.$set(t,"seo_keywords_es",r)},"update:value-es":function(r){return e.$set(t,"seo_keywords_es",r)}}})],1):e._e()]),e._v(" "),r("div",{staticClass:"text-right mt-2"},[e.pageSelected!=t.id?r("a",{staticClass:"btn btn-inverse-info btn-sm",attrs:{href:"#"},on:{click:function(r){return r.preventDefault(),e.editPage(t.id)}}},[r("i",{staticClass:"fas fa-pen-alt text-warning mr-1"}),e._v(" Editar")]):e._e(),e._v(" "),e.editBlock&&e.pageSelected==t.id?r("Button",{attrs:{text:"Actualizar",classes:["btn-inverse-primary"],"request-server":e.requestServer}}):e._e(),e._v(" "),e.editBlock&&e.pageSelected==t.id?r("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(t){return t.preventDefault(),e.restoreEl.apply(null,arguments)}}},[e._v("Cancelar")]):e._e()],1)])])])])])})),0)],1)])}),[],!1,null,"984fc9ca",null);t.default=p.exports},"F/Qi":function(e,t,r){"use strict";r("5sbD")},F05R:function(e,t,r){"use strict";var s={props:{showBreadCrumb:{default:!0,type:Boolean},title:String,parent:String,active:String}},n=(r("F/Qi"),r("KHd+")),a=Object(n.a)(s,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.showBreadCrumb?r("nav",{staticClass:"d-lg-inline-block",attrs:{"aria-label":"breadcrumb"}},[r("ol",{staticClass:"breadcrumb p-0 m-0 breadcrumb-links bg-transparent"},[r("li",{staticClass:"breadcrumb-item"},[r("a",{attrs:{href:"/dashboard"}},[r("jam-pie-chart",{attrs:{height:"16",width:"16"}})],1)]),e._v(" "),e.parent?r("li",{staticClass:"breadcrumb-item"},[r("a",[e._v(e._s(e.parent))])]):e._e(),e._v(" "),e.active?r("li",{staticClass:"breadcrumb-item text-primary",attrs:{"aria-current":"page"}},[e._v(e._s(e.active))]):e._e()])]):e._e(),e._v(" "),r("h1",{staticClass:"h1 font-weight-bold mb-0"},[e._v(e._s(e.title))])])}),[],!1,null,"0286e577",null);t.a=a.exports},I1BE:function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=function(e,t){var r=e[1]||"",s=e[3];if(!s)return r;if(t&&"function"==typeof btoa){var n=(i=s,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),a=s.sources.map((function(e){return"/*# sourceURL="+s.sourceRoot+e+" */"}));return[r].concat(a).concat([n]).join("\n")}var i;return[r].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r})).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var s={},n=0;n<this.length;n++){var a=this[n][0];"number"==typeof a&&(s[a]=!0)}for(n=0;n<e.length;n++){var i=e[n];"number"==typeof i[0]&&s[i[0]]||(r&&!i[2]?i[2]=r:r&&(i[2]="("+i[2]+") and ("+r+")"),t.push(i))}},t}},J3pF:function(e,t,r){"use strict";r("1jZt")},KsmT:function(e,t,r){(e.exports=r("I1BE")(!1)).push([e.i,'\n.breadcrumb-dark .breadcrumb-item + .breadcrumb-item[data-v-0286e577]::before {\r\n  color: #adb5bd;\n}\n.breadcrumb-item + .breadcrumb-item[data-v-0286e577]::before {\r\n  display: inline-block;\r\n  padding-right: 0.5rem;\r\n  content: "-";\r\n  color: #8898aa;\n}\n.bg-transparent[data-v-0286e577] {\r\n  background: transparent;\n}\r\n',""])},"S2+X":function(e,t,r){"use strict";var s={props:{label:String,variable:String,errors:Object,valueEnParent:String,valueEsParent:String},data:function(){return{active:"es",value:{en:"",es:""},random:Math.ceil(10*Math.random())}},methods:{toggle:function(e){this.active=e}},watch:{valueEnParent:{immediate:!0,handler:function(e){this.value.en=e}},valueEsParent:{immediate:!0,handler:function(e){this.value.es=e}},"value.en":function(e,t){this.$emit("update:valueEn",e)},"value.es":function(e,t){this.$emit("update:valueEs",e)}},computed:{countErrors:function(){if(Object.keys(this.errors).length){var e=0;for(var t in this.errors)t!=this.variable+"_en"&&t!=this.variable+"_es"||e++;return e}}}},n=r("KHd+"),a=Object(n.a)(s,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form-group"},[r("div",{staticClass:"d-flex"},[r("a",{staticClass:"btn btn-sm py-0 px-2 btn-icon mr-1",class:"es"==e.active?"btn-primary":"btn-outline-primary",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.toggle("es")}}},[r("span",{staticClass:"btn-inner--icon"},[r("gb-flag",{attrs:{code:"es",size:"small"}})],1),e._v(" "),r("span",{staticClass:"btn-inner--text"},[e._v("Español")])]),e._v(" "),r("a",{staticClass:"btn btn-sm py-0 px-2 btn-icon",class:"en"==e.active?"btn-primary":"btn-outline-primary",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.toggle("en")}}},[r("span",{staticClass:"btn-inner--icon"},[r("gb-flag",{attrs:{code:"gb",size:"small"}})],1),e._v(" "),r("span",{staticClass:"btn-inner--text"},[e._v("Inglés")])]),e._v(" "),e.countErrors?r("div",{staticClass:"d-inline-block ml-auto text-danger mt-1"},[e._v(e._s(e.countErrors)+"  "+e._s(e.countErrors>1?"Errores":"Error"))]):e._e()]),e._v(" "),r("div",{staticClass:"mt-2"},[r("label",{staticClass:"font-weight-bold",attrs:{for:e.label+e.random}},[e._v(e._s(e.label)+":")])]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.value[e.active],expression:"value[ active ]"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.value[e.active]},on:{input:function(t){t.target.composing||e.$set(e.value,e.active,t.target.value)}}}),e._v(" "),e._t("default"),e._v(" "),e._l(e.errors,(function(t,s){return r("div",{key:s},[s==e.variable+"_"+e.active?r("label",{staticClass:"text-danger text-sm d-block"},[e._v(e._s(t[0]))]):e._e()])}))],2)}),[],!1,null,null,null);t.a=a.exports},S4HP:function(e,t,r){"use strict";var s={props:{iconClasses:Array,iconoEstilos:Object,texto:String,styles:Object,iconWidth:{type:Number,required:!0},iconHeight:{type:Number,required:!0}}},n=r("KHd+"),a=Object(n.a)(s,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"component-loader text-sm w-100",style:e.styles},[r("div",{staticClass:"d-flex align-items-center justify-content-center h-100"},[e.texto?r("span",[e._v(e._s(e.texto))]):e._e(),e._v(" "),r("svg",{class:e.iconClasses,style:e.iconoEstilos,attrs:{xmlns:"http://www.w3.org/2000/svg",width:e.iconWidth,height:e.iconHeight,viewBox:"0 0 40 40",stroke:"#525f7f"}},[r("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[r("g",{attrs:{transform:"translate(1 1)","stroke-width":"2"}},[r("circle",{attrs:{"stroke-opacity":"1",cx:"0",cy:"0",r:"0"}}),e._v(" "),r("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18",transform:"rotate(83.9974 18 18)"}},[r("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"}})],1)])])])])])}),[],!1,null,null,null);t.a=a.exports},TVlQ:function(e,t,r){"use strict";var s={props:{text:String,classes:Array,requestServer:Boolean},methods:{click:function(){this.$emit("click")}}},n=(r("J3pF"),r("KHd+")),a=Object(n.a)(s,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("button",{staticClass:"btn",class:e.classes,attrs:{disabled:1==e.requestServer},on:{click:e.click}},[e.requestServer?r("span",[e._v("\n        Cargando \n        "),r("svg",{staticClass:"ml-1 loading-svg",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 40 40"}},[r("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[r("g",{attrs:{transform:"translate(1 1)","stroke-width":"3"}},[r("circle",{attrs:{"stroke-opacity":"1",cx:"0",cy:"0",r:"0"}}),e._v(" "),r("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18",transform:"rotate(83.9974 18 18)"}},[r("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"}})],1)])])])]):r("span",[e._v(e._s(e.text))])])}),[],!1,null,"7a0ec1bd",null);t.a=a.exports},"aET+":function(e,t,r){var s,n,a={},i=(s=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===n&&(n=s.apply(this,arguments)),n}),o=function(e,t){return t?t.querySelector(e):document.querySelector(e)},l=function(e){var t={};return function(e,r){if("function"==typeof e)return e();if(void 0===t[e]){var s=o.call(this,e,r);if(window.HTMLIFrameElement&&s instanceof window.HTMLIFrameElement)try{s=s.contentDocument.head}catch(e){s=null}t[e]=s}return t[e]}}(),c=null,u=0,d=[],p=r("9tPo");function v(e,t){for(var r=0;r<e.length;r++){var s=e[r],n=a[s.id];if(n){n.refs++;for(var i=0;i<n.parts.length;i++)n.parts[i](s.parts[i]);for(;i<s.parts.length;i++)n.parts.push(h(s.parts[i],t))}else{var o=[];for(i=0;i<s.parts.length;i++)o.push(h(s.parts[i],t));a[s.id]={id:s.id,refs:1,parts:o}}}}function f(e,t){for(var r=[],s={},n=0;n<e.length;n++){var a=e[n],i=t.base?a[0]+t.base:a[0],o={css:a[1],media:a[2],sourceMap:a[3]};s[i]?s[i].parts.push(o):r.push(s[i]={id:i,parts:[o]})}return r}function _(e,t){var r=l(e.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var s=d[d.length-1];if("top"===e.insertAt)s?s.nextSibling?r.insertBefore(t,s.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),d.push(t);else if("bottom"===e.insertAt)r.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var n=l(e.insertAt.before,r);r.insertBefore(t,n)}}function m(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=d.indexOf(e);t>=0&&d.splice(t,1)}function g(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var s=function(){0;return r.nc}();s&&(e.attrs.nonce=s)}return b(t,e.attrs),_(e,t),t}function b(e,t){Object.keys(t).forEach((function(r){e.setAttribute(r,t[r])}))}function h(e,t){var r,s,n,a;if(t.transform&&e.css){if(!(a="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=a}if(t.singleton){var i=u++;r=c||(c=g(t)),s=w.bind(null,r,i,!1),n=w.bind(null,r,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",b(t,e.attrs),_(e,t),t}(t),s=k.bind(null,r,t),n=function(){m(r),r.href&&URL.revokeObjectURL(r.href)}):(r=g(t),s=E.bind(null,r),n=function(){m(r)});return s(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;s(e=t)}else n()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var r=f(e,t);return v(r,t),function(e){for(var s=[],n=0;n<r.length;n++){var i=r[n];(o=a[i.id]).refs--,s.push(o)}e&&v(f(e,t),t);for(n=0;n<s.length;n++){var o;if(0===(o=s[n]).refs){for(var l=0;l<o.parts.length;l++)o.parts[l]();delete a[o.id]}}}};var y,C=(y=[],function(e,t){return y[e]=t,y.filter(Boolean).join("\n")});function w(e,t,r,s){var n=r?"":s.css;if(e.styleSheet)e.styleSheet.cssText=C(t,n);else{var a=document.createTextNode(n),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function E(e,t){var r=t.css,s=t.media;if(s&&e.setAttribute("media",s),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}function k(e,t,r){var s=r.css,n=r.sourceMap,a=void 0===t.convertToAbsoluteUrls&&n;(t.convertToAbsoluteUrls||a)&&(s=p(s)),n&&(s+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var i=new Blob([s],{type:"text/css"}),o=e.href;e.href=URL.createObjectURL(i),o&&URL.revokeObjectURL(o)}},uNoH:function(e,t,r){(e.exports=r("I1BE")(!1)).push([e.i,"\n.loading-svg[data-v-7a0ec1bd]{\r\n    fill: currentColor;\r\n    stroke: currentColor;\n}\r\n",""])},vTf2:function(e,t,r){"use strict";var s={props:{label:String,variable:String,errors:Object,valueEnParent:String,valueEsParent:String},data:function(){return{active:"es",value:{en:"",es:""},random:Math.ceil(10*Math.random())}},methods:{toggle:function(e){this.active=e}},watch:{valueEnParent:{immediate:!0,handler:function(e){this.value.en=e}},valueEsParent:{immediate:!0,handler:function(e){this.value.es=e}},"value.en":function(e,t){this.$emit("update:valueEn",e)},"value.es":function(e,t){this.$emit("update:valueEs",e)}},computed:{countErrors:function(){if(Object.keys(this.errors).length){var e=0;for(var t in this.errors)t!=this.variable+"_en"&&t!=this.variable+"_es"||e++;return e}}}},n=r("KHd+"),a=Object(n.a)(s,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form-group"},[r("div",{staticClass:"d-flex"},[r("a",{staticClass:"btn btn-sm py-0 px-2 btn-icon mr-1",class:"es"==e.active?"btn-primary":"btn-outline-primary",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.toggle("es")}}},[r("span",{staticClass:"btn-inner--icon"},[r("gb-flag",{attrs:{code:"es",size:"small"}})],1),e._v(" "),r("span",{staticClass:"btn-inner--text"},[e._v("Español")])]),e._v(" "),r("a",{staticClass:"btn btn-sm py-0 px-2 btn-icon",class:"en"==e.active?"btn-primary":"btn-outline-primary",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.toggle("en")}}},[r("span",{staticClass:"btn-inner--icon"},[r("gb-flag",{attrs:{code:"gb",size:"small"}})],1),e._v(" "),r("span",{staticClass:"btn-inner--text"},[e._v("Inglés")])]),e._v(" "),e.countErrors?r("div",{staticClass:"d-inline-block ml-auto text-danger mt-1"},[e._v(e._s(e.countErrors)+"  "+e._s(e.countErrors>1?"Errores":"Error"))]):e._e()]),e._v(" "),r("div",{staticClass:"mt-2"},[r("label",{staticClass:"font-weight-bold",attrs:{for:e.label+e.random}},[e._v(e._s(e.label)+":")])]),e._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.value[e.active],expression:"value[ active ]"}],staticClass:"form-control",attrs:{cols:"10"},domProps:{value:e.value[e.active]},on:{input:function(t){t.target.composing||e.$set(e.value,e.active,t.target.value)}}}),e._v(" "),e._l(e.errors,(function(t,s){return r("div",{key:s},[s==e.variable+"_"+e.active?r("label",{staticClass:"text-danger text-sm d-block"},[e._v(e._s(t[0]))]):e._e()])}))],2)}),[],!1,null,null,null);t.a=a.exports}}]);