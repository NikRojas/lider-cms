(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{"1jZt":function(e,t,r){var n=r("uNoH");"string"==typeof n&&(n=[[e.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};r("aET+")(n,a);n.locals&&(e.exports=n.locals)},"5sbD":function(e,t,r){var n=r("KsmT");"string"==typeof n&&(n=[[e.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};r("aET+")(n,a);n.locals&&(e.exports=n.locals)},"9tPo":function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var r=t.protocol+"//"+t.host,n=r+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(e,t){var a,s=t.trim().replace(/^"(.*)"$/,(function(e,t){return t})).replace(/^'(.*)'$/,(function(e,t){return t}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(s)?e:(a=0===s.indexOf("//")?s:0===s.indexOf("/")?r+s:n+s.replace(/^\.\//,""),"url("+JSON.stringify(a)+")")}))}},"F/Qi":function(e,t,r){"use strict";r("5sbD")},F05R:function(e,t,r){"use strict";var n={props:{showBreadCrumb:{default:!0,type:Boolean},title:String,parent:String,active:String}},a=(r("F/Qi"),r("KHd+")),s=Object(a.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.showBreadCrumb?r("nav",{staticClass:"d-lg-inline-block",attrs:{"aria-label":"breadcrumb"}},[r("ol",{staticClass:"breadcrumb p-0 m-0 breadcrumb-links bg-transparent"},[r("li",{staticClass:"breadcrumb-item"},[r("a",{attrs:{href:"/dashboard"}},[r("jam-pie-chart",{attrs:{height:"16",width:"16"}})],1)]),e._v(" "),e.parent?r("li",{staticClass:"breadcrumb-item"},[r("a",[e._v(e._s(e.parent))])]):e._e(),e._v(" "),e.active?r("li",{staticClass:"breadcrumb-item text-primary",attrs:{"aria-current":"page"}},[e._v(e._s(e.active))]):e._e()])]):e._e(),e._v(" "),r("h1",{staticClass:"h1 font-weight-bold mb-0"},[e._v(e._s(e.title))])])}),[],!1,null,"0286e577",null);t.a=s.exports},I1BE:function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=function(e,t){var r=e[1]||"",n=e[3];if(!n)return r;if(t&&"function"==typeof btoa){var a=(i=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),s=n.sources.map((function(e){return"/*# sourceURL="+n.sourceRoot+e+" */"}));return[r].concat(s).concat([a]).join("\n")}var i;return[r].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r})).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},a=0;a<this.length;a++){var s=this[a][0];"number"==typeof s&&(n[s]=!0)}for(a=0;a<e.length;a++){var i=e[a];"number"==typeof i[0]&&n[i[0]]||(r&&!i[2]?i[2]=r:r&&(i[2]="("+i[2]+") and ("+r+")"),t.push(i))}},t}},J3pF:function(e,t,r){"use strict";r("1jZt")},K6UY:function(e,t,r){"use strict";r.r(t);var n=r("TVlQ"),a=r("F05R"),s=r("ksP6"),i=r.n(s),o=r("6nZA"),l=r.n(o),c=r("Pyp4"),u={components:{BreadCrumb:a.a,Button:n.a,vueDropzone:i.a,DatePicker:l.a,ImageForm:c.a},props:{routeStore:String,routeReturn:String},data:function(){return{element:{},errors:{},dropzoneOptions:{url:"/",maxFiles:1,acceptedFiles:"image/png,image/jpeg,image/jpg",autoProcessQueue:!1,thumbnailWidth:400,addRemoveLinks:!0},requestServer:!1}},methods:{submit:function(){var e=this;this.requestServer=!0;var t=new FormData;this.element.from&&t.append("from",this.element.from),this.element.to&&t.append("to",this.element.to),this.element.image_en&&t.append("image_en",this.element.image_en),this.element.image_es&&t.append("image_es",this.element.image_es),this.element.image_responsive_en&&t.append("image_responsive_en",this.element.image_responsive_en),this.element.image_responsive_es&&t.append("image_responsive_es",this.element.image_responsive_es),this.element.link?t.append("link",this.element.link):t.append("link",""),axios.post(this.routeStore,t).then((function(t){e.requestServer=!1,document.location.href=t.data.route})).catch((function(t){e.requestServer=!1,422!==t.response.status?document.location.href=t.response.data.route:e.errors=t.response.data.errors||{}}))}}},d=r("KHd+"),m=Object(d.a)(u,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"header pb-6"},[r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"header-body"},[r("div",{staticClass:"row align-items-center pt-0 pt-md-2 pb-4"},[r("div",{staticClass:"col-6 col-md-7"},[r("BreadCrumb",{attrs:{title:"Crear Slide",parent:"",active:"Slider"}})],1)])])])]),e._v(" "),r("div",{staticClass:"container-fluid mt--6"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-body"},[r("form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-md-6"},[r("small",{staticClass:"d-block mb-0 lh-1"},[e._v("Resolución recomendada: 1920×969px")]),e._v(" "),r("small",{staticClass:"d-block mb-0 lh-1"},[e._v("Formato: JPG")]),e._v(" "),r("small",{staticClass:"d-block mb-2 lh-1"},[e._v("Tamaño recomendado: No mayor a 300KB")]),e._v(" "),r("ImageForm",{attrs:{label:"Imagen",variable:"image",errors:e.errors,valueEn:e.element.image_en,valueEs:e.element.image_es},on:{"update:valueEn":function(t){return e.$set(e.element,"image_en",t)},"update:value-en":function(t){return e.$set(e.element,"image_en",t)},"update:valueEs":function(t){return e.$set(e.element,"image_es",t)},"update:value-es":function(t){return e.$set(e.element,"image_es",t)}}})],1),e._v(" "),r("div",{staticClass:"col-12 col-md-6"},[r("small",{staticClass:"d-block mb-0 lh-1"},[e._v("Resolución recomendada: 600×965px")]),e._v(" "),r("small",{staticClass:"d-block mb-0 lh-1"},[e._v("Formato: JPG")]),e._v(" "),r("small",{staticClass:"d-block mb-2 lh-1"},[e._v("Tamaño recomendado: No mayor a 200KB")]),e._v(" "),r("ImageForm",{attrs:{label:"Imagen Responsive",variable:"image_responsive",errors:e.errors,valueEn:e.element.image_responsive_en,valueEs:e.element.image_responsive_es},on:{"update:valueEn":function(t){return e.$set(e.element,"image_responsive_en",t)},"update:value-en":function(t){return e.$set(e.element,"image_responsive_en",t)},"update:valueEs":function(t){return e.$set(e.element,"image_responsive_es",t)},"update:value-es":function(t){return e.$set(e.element,"image_responsive_es",t)}}})],1),e._v(" "),r("div",{staticClass:"col-12 col-lg-6"},[r("div",{staticClass:"form-group"},[r("label",{staticClass:"font-weight-bold",attrs:{for:"from"}},[e._v("Válido desde")]),e._v(" "),r("date-picker",{attrs:{"input-attr":{id:"from"},"value-type":"format",format:"HH:mm DD-MM-YYYY",type:"datetime","time-picker-options":{start:"06:00",step:"00:05",end:"24:00"},"first-day-of-week":1,lang:"es","input-class":"form-control",width:"100%"},model:{value:e.element.from,callback:function(t){e.$set(e.element,"from",t)},expression:"element.from"}},[r("jam-calendar")],1),e._v(" "),e.errors&&e.errors.from?r("label",{staticClass:"mt-2 text-danger text-sm",attrs:{for:"from"}},[e._v(e._s(e.errors.from[0]))]):e._e()],1)]),e._v(" "),r("div",{staticClass:"col-12 col-lg-6"},[r("div",{staticClass:"form-group"},[r("label",{staticClass:"font-weight-bold",attrs:{for:"to"}},[e._v("Válido hasta")]),e._v(" "),r("date-picker",{attrs:{"input-attr":{id:"to"},"value-type":"format",format:"HH:mm DD-MM-YYYY",type:"datetime","time-picker-options":{start:"06:00",step:"00:05",end:"24:00"},"first-day-of-week":1,lang:"es","input-class":"form-control",width:"100%"},model:{value:e.element.to,callback:function(t){e.$set(e.element,"to",t)},expression:"element.to"}},[r("jam-calendar")],1),e._v(" "),e.errors&&e.errors.to?r("label",{staticClass:"mt-2 text-danger text-sm",attrs:{for:"to"}},[e._v(e._s(e.errors.to[0]))]):e._e()],1)]),e._v(" "),r("div",{staticClass:"col-12"},[r("div",{staticClass:"form-group"},[r("label",{staticClass:"font-weight-bold",attrs:{for:"link"}},[e._v("Link")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.element.link,expression:"element.link"}],staticClass:"form-control",attrs:{type:"text",id:"link"},domProps:{value:e.element.link},on:{input:function(t){t.target.composing||e.$set(e.element,"link",t.target.value)}}}),e._v(" "),e.errors&&e.errors.link?r("label",{staticClass:"mt-2 text-danger text-sm",attrs:{for:"link"}},[e._v(e._s(e.errors.link[0]))]):e._e()])]),e._v(" "),r("div",{staticClass:"col-12 text-right"},[r("Button",{attrs:{text:"Guardar",classes:["btn-inverse-primary","mr-2"],"request-server":e.requestServer}}),e._v(" "),r("a",{staticClass:"btn btn-secondary",attrs:{type:"button",href:e.routeReturn}},[e._v("Cancelar")])],1)])])])])])])])])}),[],!1,null,null,null);t.default=m.exports},KsmT:function(e,t,r){(e.exports=r("I1BE")(!1)).push([e.i,'\n.breadcrumb-dark .breadcrumb-item + .breadcrumb-item[data-v-0286e577]::before {\r\n  color: #adb5bd;\n}\n.breadcrumb-item + .breadcrumb-item[data-v-0286e577]::before {\r\n  display: inline-block;\r\n  padding-right: 0.5rem;\r\n  content: "-";\r\n  color: #8898aa;\n}\n.bg-transparent[data-v-0286e577] {\r\n  background: transparent;\n}\r\n',""])},Pyp4:function(e,t,r){"use strict";var n=r("ksP6"),a={props:{label:String,folder:String,variable:String,errors:Object,valueEnParent:null,valueEsParent:null,imagesUrl:String},components:{vueDropzone:r.n(n).a},data:function(){return{active:"es",value:{en:"",es:""},dropzoneOptions:{url:"/",maxFiles:1,acceptedFiles:"image/png,image/jpeg,image/jpg",autoProcessQueue:!1,thumbnailWidth:400,addRemoveLinks:!0},random:Math.ceil(10*Math.random())}},methods:{toggle:function(e){this.active=e},handleAddedFiles:function(e,t){var r=this;setTimeout((function(){"es"==t?r.$emit("update:valueEs",r.$refs.ref_image_es.dropzone.files[0]):"en"==t&&r.$emit("update:valueEn",r.$refs.ref_image_en.dropzone.files[0])}),500)}},watch:{valueEnParent:{immediate:!0,handler:function(e){e instanceof File||(this.value.en=e)}},valueEsParent:{immediate:!0,handler:function(e){e instanceof File||(this.value.es=e)}}},computed:{countErrors:function(){if(Object.keys(this.errors).length){var e=0;for(var t in this.errors)t!=this.variable+"_en"&&t!=this.variable+"_es"||e++;return e}}}},s=r("KHd+"),i=Object(s.a)(a,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form-group"},[r("div",{staticClass:"d-flex"},[r("a",{staticClass:"btn btn-sm py-0 px-2 btn-icon mr-1",class:"es"==e.active?"btn-primary":"btn-outline-primary",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.toggle("es")}}},[r("span",{staticClass:"btn-inner--icon"},[r("gb-flag",{attrs:{code:"es",size:"small"}})],1),e._v(" "),r("span",{staticClass:"btn-inner--text"},[e._v("Español")])]),e._v(" "),r("a",{staticClass:"btn btn-sm py-0 px-2 btn-icon",class:"en"==e.active?"btn-primary":"btn-outline-primary",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.toggle("en")}}},[r("span",{staticClass:"btn-inner--icon"},[r("gb-flag",{attrs:{code:"gb",size:"small"}})],1),e._v(" "),r("span",{staticClass:"btn-inner--text"},[e._v("Inglés")])]),e._v(" "),e.countErrors?r("div",{staticClass:"d-inline-block ml-auto text-danger mt-1"},[e._v("\n      "+e._s(e.countErrors)+" "+e._s(e.countErrors>1?"Errores":"Error")+"\n    ")]):e._e()]),e._v(" "),r("div",{staticClass:"mt-2"},[r("label",{staticClass:"font-weight-bold",attrs:{for:e.label+e.active+e.random}},[e._v(e._s(e.label)+" "+e._s(e.active.toUpperCase())+":")])]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:"es"==e.active,expression:"active == 'es'"}]},[r("div",{staticClass:"row"},[e.value.es?r("div",{staticClass:"col"},[r("img",{staticClass:"img-fluid",attrs:{src:e.imagesUrl+"/"+e.folder+"/"+e.value.es,alt:""}})]):e._e(),e._v(" "),r("div",{staticClass:"col"},[r("vue-dropzone",{ref:"ref_image_es",attrs:{id:e.label+e.random,options:e.dropzoneOptions,duplicateCheck:!0,useCustomSlot:!0},on:{"vdropzone-file-added":function(t){return e.$validateImageDropzone(t,e.$refs.ref_image_es.dropzone,1,1024e3,"1mb")},"vdropzone-files-added":function(t){return e.handleAddedFiles(t,"es")}}},[r("div",{staticClass:"dropzone-custom-content"},[r("h5",{staticClass:"dropzone-custom-title text-primary"},[e._v("\n              Suelte el archivo aquí o haga click para cargarlo.\n            ")])])])],1)])]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:"en"==e.active,expression:"active == 'en'"}]},[r("div",{staticClass:"row"},[e.value.en?r("div",{staticClass:"col"},[r("img",{staticClass:"img-fluid",attrs:{src:e.imagesUrl+"/"+e.folder+"/"+e.value.en,alt:""}})]):e._e(),e._v(" "),r("div",{staticClass:"col"},[r("vue-dropzone",{ref:"ref_image_en",attrs:{id:e.label+e.random,options:e.dropzoneOptions,duplicateCheck:!0,useCustomSlot:!0},on:{"vdropzone-file-added":function(t){return e.$validateImageDropzone(t,e.$refs.ref_image_en.dropzone,1,1024e3,"1mb")},"vdropzone-files-added":function(t){return e.handleAddedFiles(t,"en")}}},[r("div",{staticClass:"dropzone-custom-content"},[r("h5",{staticClass:"dropzone-custom-title text-primary"},[e._v("\n              Suelte el archivo aquí o haga click para cargarlo.\n            ")])])])],1)])]),e._v(" "),e._l(e.errors,(function(t,n){return r("div",{key:n},[n==e.variable+"_"+e.active?r("label",{staticClass:"text-danger text-sm d-block mt-2"},[e._v(e._s(t[0]))]):e._e()])}))],2)}),[],!1,null,null,null);t.a=i.exports},TVlQ:function(e,t,r){"use strict";var n={props:{text:String,classes:Array,requestServer:Boolean},methods:{click:function(){this.$emit("click")}}},a=(r("J3pF"),r("KHd+")),s=Object(a.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("button",{staticClass:"btn",class:e.classes,attrs:{disabled:1==e.requestServer},on:{click:e.click}},[e.requestServer?r("span",[e._v("\n        Cargando \n        "),r("svg",{staticClass:"ml-1 loading-svg",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 40 40"}},[r("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[r("g",{attrs:{transform:"translate(1 1)","stroke-width":"3"}},[r("circle",{attrs:{"stroke-opacity":"1",cx:"0",cy:"0",r:"0"}}),e._v(" "),r("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18",transform:"rotate(83.9974 18 18)"}},[r("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"}})],1)])])])]):r("span",[e._v(e._s(e.text))])])}),[],!1,null,"7a0ec1bd",null);t.a=s.exports},"aET+":function(e,t,r){var n,a,s={},i=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===a&&(a=n.apply(this,arguments)),a}),o=function(e,t){return t?t.querySelector(e):document.querySelector(e)},l=function(e){var t={};return function(e,r){if("function"==typeof e)return e();if(void 0===t[e]){var n=o.call(this,e,r);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),c=null,u=0,d=[],m=r("9tPo");function p(e,t){for(var r=0;r<e.length;r++){var n=e[r],a=s[n.id];if(a){a.refs++;for(var i=0;i<a.parts.length;i++)a.parts[i](n.parts[i]);for(;i<n.parts.length;i++)a.parts.push(_(n.parts[i],t))}else{var o=[];for(i=0;i<n.parts.length;i++)o.push(_(n.parts[i],t));s[n.id]={id:n.id,refs:1,parts:o}}}}function v(e,t){for(var r=[],n={},a=0;a<e.length;a++){var s=e[a],i=t.base?s[0]+t.base:s[0],o={css:s[1],media:s[2],sourceMap:s[3]};n[i]?n[i].parts.push(o):r.push(n[i]={id:i,parts:[o]})}return r}function f(e,t){var r=l(e.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=d[d.length-1];if("top"===e.insertAt)n?n.nextSibling?r.insertBefore(t,n.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),d.push(t);else if("bottom"===e.insertAt)r.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var a=l(e.insertAt.before,r);r.insertBefore(t,a)}}function b(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=d.indexOf(e);t>=0&&d.splice(t,1)}function h(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var n=function(){0;return r.nc}();n&&(e.attrs.nonce=n)}return g(t,e.attrs),f(e,t),t}function g(e,t){Object.keys(t).forEach((function(r){e.setAttribute(r,t[r])}))}function _(e,t){var r,n,a,s;if(t.transform&&e.css){if(!(s="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=s}if(t.singleton){var i=u++;r=c||(c=h(t)),n=w.bind(null,r,i,!1),a=w.bind(null,r,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",g(t,e.attrs),f(e,t),t}(t),n=x.bind(null,r,t),a=function(){b(r),r.href&&URL.revokeObjectURL(r.href)}):(r=h(t),n=k.bind(null,r),a=function(){b(r)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else a()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var r=v(e,t);return p(r,t),function(e){for(var n=[],a=0;a<r.length;a++){var i=r[a];(o=s[i.id]).refs--,n.push(o)}e&&p(v(e,t),t);for(a=0;a<n.length;a++){var o;if(0===(o=n[a]).refs){for(var l=0;l<o.parts.length;l++)o.parts[l]();delete s[o.id]}}}};var C,y=(C=[],function(e,t){return C[e]=t,C.filter(Boolean).join("\n")});function w(e,t,r,n){var a=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=y(t,a);else{var s=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(s,i[t]):e.appendChild(s)}}function k(e,t){var r=t.css,n=t.media;if(n&&e.setAttribute("media",n),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}function x(e,t,r){var n=r.css,a=r.sourceMap,s=void 0===t.convertToAbsoluteUrls&&a;(t.convertToAbsoluteUrls||s)&&(n=m(n)),a&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */");var i=new Blob([n],{type:"text/css"}),o=e.href;e.href=URL.createObjectURL(i),o&&URL.revokeObjectURL(o)}},uNoH:function(e,t,r){(e.exports=r("I1BE")(!1)).push([e.i,"\n.loading-svg[data-v-7a0ec1bd]{\r\n    fill: currentColor;\r\n    stroke: currentColor;\n}\r\n",""])}}]);