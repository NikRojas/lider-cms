(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~js/pages/profile~js/pages/users"],{

/***/ "./node_modules/vue-loading-skeleton/dist/vue-loading-skeleton.esm.js":
/*!****************************************************************************!*\
  !*** ./node_modules/vue-loading-skeleton/dist/vue-loading-skeleton.esm.js ***!
  \****************************************************************************/
/*! exports provided: default, Skeleton, SkeletonTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Skeleton", function() { return __vue_component__$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkeletonTheme", function() { return __vue_component__; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var DEFAULT_BACKGROUND = '#eeeeee';
var DEFAULT_HIGHLIGHT = '#f5f5f5';
var SkeletonStyle = {
  backgroundColor: DEFAULT_BACKGROUND,
  backgroundImage: "linear-gradient(\n    90deg,\n    ".concat(DEFAULT_BACKGROUND, ",\n    ").concat(DEFAULT_HIGHLIGHT, ",\n    ").concat(DEFAULT_BACKGROUND, "\n  )")
};
var script = {
  name: 'PuSkeletonTheme',
  provide: function provide() {
    return {
      _themeStyle: this.themeStyle,
      _skeletonTheme: this
    };
  },
  props: {
    color: {
      type: String,
      default: DEFAULT_BACKGROUND
    },
    highlight: {
      type: String,
      default: DEFAULT_HIGHLIGHT
    },
    duration: {
      type: Number,
      default: 1.5
    },
    tag: {
      type: String,
      default: 'div'
    },
    loading: {
      type: Boolean,
      default: undefined
    }
  },
  data: function data() {
    return {
      themeStyle: _objectSpread2({}, SkeletonStyle)
    };
  },
  render: function render(h) {
    var color = this.color,
        highlight = this.highlight,
        duration = this.duration;
    this.themeStyle.backgroundColor = color;
    this.themeStyle.backgroundImage = "linear-gradient(\n      90deg,\n      ".concat(color, ",\n      ").concat(highlight, ",\n      ").concat(color, "\n    )");

    if (duration) {
      this.themeStyle.animation = "SkeletonLoading ".concat(duration, "s ease-in-out infinite");
    } else {
      this.themeStyle.animation = '';
      this.themeStyle.backgroundImage = '';
    }

    if (this.tag) {
      return h(this.tag, this.$slots.default);
    }

    return this.$slots.default[0];
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

/* script */
const __vue_script__ = script;

/* template */

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = undefined;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__ = normalizeComponent(
    {},
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );

var isEmptyVNode = function isEmptyVNode(children) {
  if (!children) return true;

  var _children = _slicedToArray(children, 1),
      firstNode = _children[0];

  var str = firstNode.text;

  if (str) {
    // remove all line-break and space character
    str = str.replace(/(\n|\r\n|\s)/g, '');
  }

  return typeof firstNode.tag === 'undefined' && !str;
};

var script$1 = {
  name: 'PuSkeleton',
  inject: {
    themeStyle: {
      from: '_themeStyle',
      default: SkeletonStyle
    },
    theme: {
      from: '_skeletonTheme',
      default: {}
    }
  },
  props: {
    prefix: {
      type: String,
      default: 'pu'
    },
    count: {
      type: Number,
      default: 1
    },
    duration: {
      type: Number,
      default: 1.5
    },
    tag: {
      type: String,
      default: 'span'
    },
    width: [String, Number],
    height: [String, Number],
    circle: Boolean,
    loading: undefined
  },
  computed: {
    isLoading: function isLoading() {
      return typeof this.theme.loading !== 'undefined' ? this.theme.loading : this.loading;
    }
  },
  render: function render(h) {
    var width = this.width,
        height = this.height,
        duration = this.duration,
        prefix = this.prefix,
        circle = this.circle,
        count = this.count,
        tag = this.tag,
        isLoading = this.isLoading;
    var classes = ["".concat(prefix, "-skeleton")];
    var elements = [];

    var styles = _objectSpread2({}, this.themeStyle);

    if (duration) {
      styles.animation = "SkeletonLoading ".concat(duration, "s ease-in-out infinite");
    } else {
      styles.backgroundImage = '';
    }

    if (width) styles.width = width;
    if (height) styles.height = height;
    if (circle) styles.borderRadius = '50%';

    for (var i = 0; i < count; i += 1) {
      elements.push(h("span", {
        "key": i,
        "class": classes,
        "style": styles
      }, ["\u200C"]));
    }

    var showLoading = typeof isLoading !== 'undefined' ? isLoading : isEmptyVNode(this.$slots.default);

    if (tag) {
      return h(tag, !showLoading ? this.$slots.default : elements);
    }

    return !showLoading ? this.$slots.default : h("span", [elements]);
  }
};

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
const __vue_script__$1 = script$1;

/* template */

  /* style */
  const __vue_inject_styles__$1 = function (inject) {
    if (!inject) return
    inject("data-v-64c55a9f_0", { source: "\n.pu-skeleton {\n  background-size: 200px 100%;\n  background-repeat: no-repeat;\n  border-radius: 3px;\n  display: inline-block;\n  line-height: 1;\n  width: 100%;\n  height: inherit;\n}\n@keyframes SkeletonLoading {\n0% {\n    background-position: -200px 0;\n}\n100% {\n    background-position: calc(200px + 100%) 0;\n}\n}\n", map: {"version":3,"sources":["/Users/kit/Projects/resources/vue-loading-skeleton/src/skeleton.vue"],"names":[],"mappings":";AA6FA;EACA,2BAAA;EACA,4BAAA;EACA,kBAAA;EACA,qBAAA;EACA,cAAA;EACA,WAAA;EACA,eAAA;AACA;AAEA;AACA;IACA,6BAAA;AACA;AACA;IACA,yCAAA;AACA;AACA","file":"skeleton.vue","sourcesContent":["<script lang=\"jsx\">\nimport { SkeletonStyle } from './skeleton-theme.vue';\n\nconst isEmptyVNode = (children) => {\n  if (!children) return true;\n\n  const [firstNode] = children;\n  let str = firstNode.text;\n  if (str) {\n    // remove all line-break and space character\n    str = str.replace(/(\\n|\\r\\n|\\s)/g, '');\n  }\n\n  return typeof firstNode.tag === 'undefined' && !str;\n};\n\nexport default {\n  name: 'PuSkeleton',\n  inject: {\n    themeStyle: {\n      from: '_themeStyle',\n      default: SkeletonStyle\n    },\n    theme: {\n      from: '_skeletonTheme',\n      default: ({})\n    }\n  },\n  props: {\n    prefix: {\n      type: String,\n      default: 'pu'\n    },\n    count: {\n      type: Number,\n      default: 1\n    },\n    duration: {\n      type: Number,\n      default: 1.5\n    },\n    tag: {\n      type: String,\n      default: 'span'\n    },\n    width: [String, Number],\n    height: [String, Number],\n    circle: Boolean,\n    loading: undefined\n  },\n  computed: {\n    isLoading() {\n      return typeof this.theme.loading !== 'undefined' ? this.theme.loading : this.loading;\n    }\n  },\n  render(h) {\n    const {\n      width, height, duration, prefix, circle, count, tag, isLoading\n    } = this;\n    const classes = [`${prefix}-skeleton`];\n    const elements = [];\n    const styles = { ...this.themeStyle };\n\n    if (duration) {\n      styles.animation = `SkeletonLoading ${duration}s ease-in-out infinite`;\n    } else {\n      styles.backgroundImage = '';\n    }\n    if (width) styles.width = width;\n    if (height) styles.height = height;\n    if (circle) styles.borderRadius = '50%';\n\n    for (let i = 0; i < count; i += 1) {\n      elements.push(\n        <span\n          key={i}\n          class={classes}\n          style={styles}>\n          &zwnj;\n        </span>\n      );\n    }\n\n    const showLoading = typeof isLoading !== 'undefined' ? isLoading : isEmptyVNode(this.$slots.default);\n    if (tag) {\n      return h(tag, !showLoading ? this.$slots.default : elements);\n    }\n    return (!showLoading ? this.$slots.default : <span>{ elements }</span>);\n  }\n};\n</script>\n\n<style>\n.pu-skeleton {\n  background-size: 200px 100%;\n  background-repeat: no-repeat;\n  border-radius: 3px;\n  display: inline-block;\n  line-height: 1;\n  width: 100%;\n  height: inherit;\n}\n\n@keyframes SkeletonLoading {\n  0% {\n    background-position: -200px 0;\n  }\n  100% {\n    background-position: calc(200px + 100%) 0;\n  }\n}\n</style>\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$1 = undefined;
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = undefined;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$1 = normalizeComponent(
    {},
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    false,
    createInjector,
    undefined,
    undefined
  );

var index = {
  install: function install(Vue) {
    Vue.component(__vue_component__$1.name, __vue_component__$1);
    Vue.component(__vue_component__.name, __vue_component__);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (index);



/***/ }),

/***/ "./node_modules/vue2-dropzone/dist/vue2Dropzone.js":
/*!*********************************************************!*\
  !*** ./node_modules/vue2-dropzone/dist/vue2Dropzone.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){"use strict";var e,t=(function(e){var t=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}();function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=function(){function e(){n(this,e)}return t(e,[{key:"on",value:function(e,t){return this._callbacks=this._callbacks||{},this._callbacks[e]||(this._callbacks[e]=[]),this._callbacks[e].push(t),this}},{key:"emit",value:function(e){this._callbacks=this._callbacks||{};var t=this._callbacks[e];if(t){for(var i=arguments.length,n=Array(i>1?i-1:0),r=1;r<i;r++)n[r-1]=arguments[r];for(var o=0,s=s=t;;){if(o>=s.length)break;s[o++].apply(this,n)}}return this}},{key:"off",value:function(e,t){if(!this._callbacks||0===arguments.length)return this._callbacks={},this;var i=this._callbacks[e];if(!i)return this;if(1===arguments.length)return delete this._callbacks[e],this;for(var n=0;n<i.length;n++){if(i[n]===t){i.splice(n,1);break}}return this}}]),e}(),o=function(e){function o(e,t){n(this,o);var r,s=i(this,(o.__proto__||Object.getPrototypeOf(o)).call(this)),a=void 0;if(s.element=e,s.version=o.version,s.defaultOptions.previewTemplate=s.defaultOptions.previewTemplate.replace(/\n*/g,""),s.clickableElements=[],s.listeners=[],s.files=[],"string"==typeof s.element&&(s.element=document.querySelector(s.element)),!s.element||null==s.element.nodeType)throw new Error("Invalid dropzone element.");if(s.element.dropzone)throw new Error("Dropzone already attached.");o.instances.push(s),s.element.dropzone=s;var l,u=null!=(r=o.optionsForElement(s.element))?r:{};if(s.options=o.extend({},s.defaultOptions,u,null!=t?t:{}),s.options.forceFallback||!o.isBrowserSupported())return l=s.options.fallback.call(s),i(s,l);if(null==s.options.url&&(s.options.url=s.element.getAttribute("action")),!s.options.url)throw new Error("No URL provided.");if(s.options.acceptedFiles&&s.options.acceptedMimeTypes)throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");if(s.options.uploadMultiple&&s.options.chunking)throw new Error("You cannot set both: uploadMultiple and chunking.");return s.options.acceptedMimeTypes&&(s.options.acceptedFiles=s.options.acceptedMimeTypes,delete s.options.acceptedMimeTypes),null!=s.options.renameFilename&&(s.options.renameFile=function(e){return s.options.renameFilename.call(s,e.name,e)}),s.options.method=s.options.method.toUpperCase(),(a=s.getExistingFallback())&&a.parentNode&&a.parentNode.removeChild(a),!1!==s.options.previewsContainer&&(s.options.previewsContainer?s.previewsContainer=o.getElement(s.options.previewsContainer,"previewsContainer"):s.previewsContainer=s.element),s.options.clickable&&(!0===s.options.clickable?s.clickableElements=[s.element]:s.clickableElements=o.getElements(s.options.clickable,"clickable")),s.init(),s}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(o,r),t(o,null,[{key:"initClass",value:function(){this.prototype.Emitter=r,this.prototype.events=["drop","dragstart","dragend","dragenter","dragover","dragleave","addedfile","addedfiles","removedfile","thumbnail","error","errormultiple","processing","processingmultiple","uploadprogress","totaluploadprogress","sending","sendingmultiple","success","successmultiple","canceled","canceledmultiple","complete","completemultiple","reset","maxfilesexceeded","maxfilesreached","queuecomplete"],this.prototype.defaultOptions={url:null,method:"post",withCredentials:!1,timeout:3e4,parallelUploads:2,uploadMultiple:!1,chunking:!1,forceChunking:!1,chunkSize:2e6,parallelChunkUploads:!1,retryChunks:!1,retryChunksLimit:3,maxFilesize:256,paramName:"file",createImageThumbnails:!0,maxThumbnailFilesize:10,thumbnailWidth:120,thumbnailHeight:120,thumbnailMethod:"crop",resizeWidth:null,resizeHeight:null,resizeMimeType:null,resizeQuality:.8,resizeMethod:"contain",filesizeBase:1e3,maxFiles:null,headers:null,clickable:!0,ignoreHiddenFiles:!0,acceptedFiles:null,acceptedMimeTypes:null,autoProcessQueue:!0,autoQueue:!0,addRemoveLinks:!1,previewsContainer:null,hiddenInputContainer:"body",capture:null,renameFilename:null,renameFile:null,forceFallback:!1,dictDefaultMessage:"Drop files here to upload",dictFallbackMessage:"Your browser does not support drag'n'drop file uploads.",dictFallbackText:"Please use the fallback form below to upload your files like in the olden days.",dictFileTooBig:"File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",dictInvalidFileType:"You can't upload files of this type.",dictResponseError:"Server responded with {{statusCode}} code.",dictCancelUpload:"Cancel upload",dictUploadCanceled:"Upload canceled.",dictCancelUploadConfirmation:"Are you sure you want to cancel this upload?",dictRemoveFile:"Remove file",dictRemoveFileConfirmation:null,dictMaxFilesExceeded:"You can not upload any more files.",dictFileSizeUnits:{tb:"TB",gb:"GB",mb:"MB",kb:"KB",b:"b"},init:function(){},params:function(e,t,i){if(i)return{dzuuid:i.file.upload.uuid,dzchunkindex:i.index,dztotalfilesize:i.file.size,dzchunksize:this.options.chunkSize,dztotalchunkcount:i.file.upload.totalChunkCount,dzchunkbyteoffset:i.index*this.options.chunkSize}},accept:function(e,t){return t()},chunksUploaded:function(e,t){t()},fallback:function(){var e=void 0;this.element.className=this.element.className+" dz-browser-not-supported";for(var t=0,i=i=this.element.getElementsByTagName("div");;){if(t>=i.length)break;var n=i[t++];if(/(^| )dz-message($| )/.test(n.className)){e=n,n.className="dz-message";break}}e||(e=o.createElement('<div class="dz-message"><span></span></div>'),this.element.appendChild(e));var r=e.getElementsByTagName("span")[0];return r&&(null!=r.textContent?r.textContent=this.options.dictFallbackMessage:null!=r.innerText&&(r.innerText=this.options.dictFallbackMessage)),this.element.appendChild(this.getFallbackForm())},resize:function(e,t,i,n){var r={srcX:0,srcY:0,srcWidth:e.width,srcHeight:e.height},o=e.width/e.height;null==t&&null==i?(t=r.srcWidth,i=r.srcHeight):null==t?t=i*o:null==i&&(i=t/o);var s=(t=Math.min(t,r.srcWidth))/(i=Math.min(i,r.srcHeight));if(r.srcWidth>t||r.srcHeight>i)if("crop"===n)o>s?(r.srcHeight=e.height,r.srcWidth=r.srcHeight*s):(r.srcWidth=e.width,r.srcHeight=r.srcWidth/s);else{if("contain"!==n)throw new Error("Unknown resizeMethod '"+n+"'");o>s?i=t/o:t=i*o}return r.srcX=(e.width-r.srcWidth)/2,r.srcY=(e.height-r.srcHeight)/2,r.trgWidth=t,r.trgHeight=i,r},transformFile:function(e,t){return(this.options.resizeWidth||this.options.resizeHeight)&&e.type.match(/image.*/)?this.resizeImage(e,this.options.resizeWidth,this.options.resizeHeight,this.options.resizeMethod,t):t(e)},previewTemplate:'<div class="dz-preview dz-file-preview">\n  <div class="dz-image"><img data-dz-thumbnail /></div>\n  <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Check</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Error</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <g id="Check-+-Oval-2" sketch:type="MSLayerGroup" stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475">\n          <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" sketch:type="MSShapeGroup"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>',drop:function(e){return this.element.classList.remove("dz-drag-hover")},dragstart:function(e){},dragend:function(e){return this.element.classList.remove("dz-drag-hover")},dragenter:function(e){return this.element.classList.add("dz-drag-hover")},dragover:function(e){return this.element.classList.add("dz-drag-hover")},dragleave:function(e){return this.element.classList.remove("dz-drag-hover")},paste:function(e){},reset:function(){return this.element.classList.remove("dz-started")},addedfile:function(e){var t=this;if(this.element===this.previewsContainer&&this.element.classList.add("dz-started"),this.previewsContainer){e.previewElement=o.createElement(this.options.previewTemplate.trim()),e.previewTemplate=e.previewElement,this.previewsContainer.appendChild(e.previewElement);for(var i=0,n=n=e.previewElement.querySelectorAll("[data-dz-name]");;){if(i>=n.length)break;var r=n[i++];r.textContent=e.name}for(var s=0,a=a=e.previewElement.querySelectorAll("[data-dz-size]");!(s>=a.length);)(r=a[s++]).innerHTML=this.filesize(e.size);this.options.addRemoveLinks&&(e._removeLink=o.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>'+this.options.dictRemoveFile+"</a>"),e.previewElement.appendChild(e._removeLink));for(var l=function(i){return i.preventDefault(),i.stopPropagation(),e.status===o.UPLOADING?o.confirm(t.options.dictCancelUploadConfirmation,function(){return t.removeFile(e)}):t.options.dictRemoveFileConfirmation?o.confirm(t.options.dictRemoveFileConfirmation,function(){return t.removeFile(e)}):t.removeFile(e)},u=0,d=d=e.previewElement.querySelectorAll("[data-dz-remove]");;){if(u>=d.length)break;d[u++].addEventListener("click",l)}}},removedfile:function(e){return null!=e.previewElement&&null!=e.previewElement.parentNode&&e.previewElement.parentNode.removeChild(e.previewElement),this._updateMaxFilesReachedClass()},thumbnail:function(e,t){if(e.previewElement){e.previewElement.classList.remove("dz-file-preview");for(var i=0,n=n=e.previewElement.querySelectorAll("[data-dz-thumbnail]");;){if(i>=n.length)break;var r=n[i++];r.alt=e.name,r.src=t}return setTimeout(function(){return e.previewElement.classList.add("dz-image-preview")},1)}},error:function(e,t){if(e.previewElement){e.previewElement.classList.add("dz-error"),"String"!=typeof t&&t.error&&(t=t.error);for(var i=0,n=n=e.previewElement.querySelectorAll("[data-dz-errormessage]");;){if(i>=n.length)break;n[i++].textContent=t}}},errormultiple:function(){},processing:function(e){if(e.previewElement&&(e.previewElement.classList.add("dz-processing"),e._removeLink))return e._removeLink.innerHTML=this.options.dictCancelUpload},processingmultiple:function(){},uploadprogress:function(e,t,i){if(e.previewElement)for(var n=0,r=r=e.previewElement.querySelectorAll("[data-dz-uploadprogress]");;){if(n>=r.length)break;var o=r[n++];"PROGRESS"===o.nodeName?o.value=t:o.style.width=t+"%"}},totaluploadprogress:function(){},sending:function(){},sendingmultiple:function(){},success:function(e){if(e.previewElement)return e.previewElement.classList.add("dz-success")},successmultiple:function(){},canceled:function(e){return this.emit("error",e,this.options.dictUploadCanceled)},canceledmultiple:function(){},complete:function(e){if(e._removeLink&&(e._removeLink.innerHTML=this.options.dictRemoveFile),e.previewElement)return e.previewElement.classList.add("dz-complete")},completemultiple:function(){},maxfilesexceeded:function(){},maxfilesreached:function(){},queuecomplete:function(){},addedfiles:function(){}},this.prototype._thumbnailQueue=[],this.prototype._processingThumbnail=!1}},{key:"extend",value:function(e){for(var t=arguments.length,i=Array(t>1?t-1:0),n=1;n<t;n++)i[n-1]=arguments[n];for(var r=0,o=o=i;;){if(r>=o.length)break;var s=o[r++];for(var a in s){var l=s[a];e[a]=l}}return e}}]),t(o,[{key:"getAcceptedFiles",value:function(){return this.files.filter(function(e){return e.accepted}).map(function(e){return e})}},{key:"getRejectedFiles",value:function(){return this.files.filter(function(e){return!e.accepted}).map(function(e){return e})}},{key:"getFilesWithStatus",value:function(e){return this.files.filter(function(t){return t.status===e}).map(function(e){return e})}},{key:"getQueuedFiles",value:function(){return this.getFilesWithStatus(o.QUEUED)}},{key:"getUploadingFiles",value:function(){return this.getFilesWithStatus(o.UPLOADING)}},{key:"getAddedFiles",value:function(){return this.getFilesWithStatus(o.ADDED)}},{key:"getActiveFiles",value:function(){return this.files.filter(function(e){return e.status===o.UPLOADING||e.status===o.QUEUED}).map(function(e){return e})}},{key:"init",value:function(){var e=this;if("form"===this.element.tagName&&this.element.setAttribute("enctype","multipart/form-data"),this.element.classList.contains("dropzone")&&!this.element.querySelector(".dz-message")&&this.element.appendChild(o.createElement('<div class="dz-default dz-message"><span>'+this.options.dictDefaultMessage+"</span></div>")),this.clickableElements.length){!function t(){return e.hiddenFileInput&&e.hiddenFileInput.parentNode.removeChild(e.hiddenFileInput),e.hiddenFileInput=document.createElement("input"),e.hiddenFileInput.setAttribute("type","file"),(null===e.options.maxFiles||e.options.maxFiles>1)&&e.hiddenFileInput.setAttribute("multiple","multiple"),e.hiddenFileInput.className="dz-hidden-input",null!==e.options.acceptedFiles&&e.hiddenFileInput.setAttribute("accept",e.options.acceptedFiles),null!==e.options.capture&&e.hiddenFileInput.setAttribute("capture",e.options.capture),e.hiddenFileInput.style.visibility="hidden",e.hiddenFileInput.style.position="absolute",e.hiddenFileInput.style.top="0",e.hiddenFileInput.style.left="0",e.hiddenFileInput.style.height="0",e.hiddenFileInput.style.width="0",o.getElement(e.options.hiddenInputContainer,"hiddenInputContainer").appendChild(e.hiddenFileInput),e.hiddenFileInput.addEventListener("change",function(){var i=e.hiddenFileInput.files;if(i.length)for(var n=0,r=r=i;!(n>=r.length);){var o=r[n++];e.addFile(o)}return e.emit("addedfiles",i),t()})}()}this.URL=null!==window.URL?window.URL:window.webkitURL;for(var t=0,i=i=this.events;;){if(t>=i.length)break;var n=i[t++];this.on(n,this.options[n])}this.on("uploadprogress",function(){return e.updateTotalUploadProgress()}),this.on("removedfile",function(){return e.updateTotalUploadProgress()}),this.on("canceled",function(t){return e.emit("complete",t)}),this.on("complete",function(t){if(0===e.getAddedFiles().length&&0===e.getUploadingFiles().length&&0===e.getQueuedFiles().length)return setTimeout(function(){return e.emit("queuecomplete")},0)});var r=function(e){return e.stopPropagation(),e.preventDefault?e.preventDefault():e.returnValue=!1};return this.listeners=[{element:this.element,events:{dragstart:function(t){return e.emit("dragstart",t)},dragenter:function(t){return r(t),e.emit("dragenter",t)},dragover:function(t){var i=void 0;try{i=t.dataTransfer.effectAllowed}catch(e){}return t.dataTransfer.dropEffect="move"===i||"linkMove"===i?"move":"copy",r(t),e.emit("dragover",t)},dragleave:function(t){return e.emit("dragleave",t)},drop:function(t){return r(t),e.drop(t)},dragend:function(t){return e.emit("dragend",t)}}}],this.clickableElements.forEach(function(t){return e.listeners.push({element:t,events:{click:function(i){return(t!==e.element||i.target===e.element||o.elementInside(i.target,e.element.querySelector(".dz-message")))&&e.hiddenFileInput.click(),!0}}})}),this.enable(),this.options.init.call(this)}},{key:"destroy",value:function(){return this.disable(),this.removeAllFiles(!0),(null!=this.hiddenFileInput?this.hiddenFileInput.parentNode:void 0)&&(this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput),this.hiddenFileInput=null),delete this.element.dropzone,o.instances.splice(o.instances.indexOf(this),1)}},{key:"updateTotalUploadProgress",value:function(){var e=void 0,t=0,i=0;if(this.getActiveFiles().length){for(var n=0,r=r=this.getActiveFiles();;){if(n>=r.length)break;var o=r[n++];t+=o.upload.bytesSent,i+=o.upload.total}e=100*t/i}else e=100;return this.emit("totaluploadprogress",e,i,t)}},{key:"_getParamName",value:function(e){return"function"==typeof this.options.paramName?this.options.paramName(e):this.options.paramName+(this.options.uploadMultiple?"["+e+"]":"")}},{key:"_renameFile",value:function(e){return"function"!=typeof this.options.renameFile?e.name:this.options.renameFile(e)}},{key:"getFallbackForm",value:function(){var e,t=void 0;if(e=this.getExistingFallback())return e;var i='<div class="dz-fallback">';this.options.dictFallbackText&&(i+="<p>"+this.options.dictFallbackText+"</p>"),i+='<input type="file" name="'+this._getParamName(0)+'" '+(this.options.uploadMultiple?'multiple="multiple"':void 0)+' /><input type="submit" value="Upload!"></div>';var n=o.createElement(i);return"FORM"!==this.element.tagName?(t=o.createElement('<form action="'+this.options.url+'" enctype="multipart/form-data" method="'+this.options.method+'"></form>')).appendChild(n):(this.element.setAttribute("enctype","multipart/form-data"),this.element.setAttribute("method",this.options.method)),null!=t?t:n}},{key:"getExistingFallback",value:function(){for(var e=function(e){for(var t=0,i=i=e;;){if(t>=i.length)break;var n=i[t++];if(/(^| )fallback($| )/.test(n.className))return n}},t=["div","form"],i=0;i<t.length;i++){var n,r=t[i];if(n=e(this.element.getElementsByTagName(r)))return n}}},{key:"setupEventListeners",value:function(){return this.listeners.map(function(e){return function(){var t=[];for(var i in e.events){var n=e.events[i];t.push(e.element.addEventListener(i,n,!1))}return t}()})}},{key:"removeEventListeners",value:function(){return this.listeners.map(function(e){return function(){var t=[];for(var i in e.events){var n=e.events[i];t.push(e.element.removeEventListener(i,n,!1))}return t}()})}},{key:"disable",value:function(){var e=this;return this.clickableElements.forEach(function(e){return e.classList.remove("dz-clickable")}),this.removeEventListeners(),this.disabled=!0,this.files.map(function(t){return e.cancelUpload(t)})}},{key:"enable",value:function(){return delete this.disabled,this.clickableElements.forEach(function(e){return e.classList.add("dz-clickable")}),this.setupEventListeners()}},{key:"filesize",value:function(e){var t=0,i="b";if(e>0){for(var n=["tb","gb","mb","kb","b"],r=0;r<n.length;r++){var o=n[r];if(e>=Math.pow(this.options.filesizeBase,4-r)/10){t=e/Math.pow(this.options.filesizeBase,4-r),i=o;break}}t=Math.round(10*t)/10}return"<strong>"+t+"</strong> "+this.options.dictFileSizeUnits[i]}},{key:"_updateMaxFilesReachedClass",value:function(){return null!=this.options.maxFiles&&this.getAcceptedFiles().length>=this.options.maxFiles?(this.getAcceptedFiles().length===this.options.maxFiles&&this.emit("maxfilesreached",this.files),this.element.classList.add("dz-max-files-reached")):this.element.classList.remove("dz-max-files-reached")}},{key:"drop",value:function(e){if(e.dataTransfer){this.emit("drop",e);for(var t=[],i=0;i<e.dataTransfer.files.length;i++)t[i]=e.dataTransfer.files[i];if(this.emit("addedfiles",t),t.length){var n=e.dataTransfer.items;n&&n.length&&null!=n[0].webkitGetAsEntry?this._addFilesFromItems(n):this.handleFiles(t)}}}},{key:"paste",value:function(e){if(null!=(t=null!=e?e.clipboardData:void 0,i=function(e){return e.items},null!=t?i(t):void 0)){var t,i;this.emit("paste",e);var n=e.clipboardData.items;return n.length?this._addFilesFromItems(n):void 0}}},{key:"handleFiles",value:function(e){for(var t=0,i=i=e;;){if(t>=i.length)break;var n=i[t++];this.addFile(n)}}},{key:"_addFilesFromItems",value:function(e){var t=this;return function(){for(var i=[],n=0,r=r=e;;){if(n>=r.length)break;var o,s=r[n++];null!=s.webkitGetAsEntry&&(o=s.webkitGetAsEntry())?o.isFile?i.push(t.addFile(s.getAsFile())):o.isDirectory?i.push(t._addFilesFromDirectory(o,o.name)):i.push(void 0):null!=s.getAsFile&&(null==s.kind||"file"===s.kind)?i.push(t.addFile(s.getAsFile())):i.push(void 0)}return i}()}},{key:"_addFilesFromDirectory",value:function(e,t){var i=this,n=e.createReader(),r=function(e){return t=console,i="log",n=function(t){return t.log(e)},null!=t&&"function"==typeof t[i]?n(t,i):void 0;var t,i,n};return function e(){return n.readEntries(function(n){if(n.length>0){for(var r=0,o=o=n;!(r>=o.length);){var s=o[r++];s.isFile?s.file(function(e){if(!i.options.ignoreHiddenFiles||"."!==e.name.substring(0,1))return e.fullPath=t+"/"+e.name,i.addFile(e)}):s.isDirectory&&i._addFilesFromDirectory(s,t+"/"+s.name)}e()}return null},r)}()}},{key:"accept",value:function(e,t){return this.options.maxFilesize&&e.size>1024*this.options.maxFilesize*1024?t(this.options.dictFileTooBig.replace("{{filesize}}",Math.round(e.size/1024/10.24)/100).replace("{{maxFilesize}}",this.options.maxFilesize)):o.isValidFile(e,this.options.acceptedFiles)?null!=this.options.maxFiles&&this.getAcceptedFiles().length>=this.options.maxFiles?(t(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}",this.options.maxFiles)),this.emit("maxfilesexceeded",e)):this.options.accept.call(this,e,t):t(this.options.dictInvalidFileType)}},{key:"addFile",value:function(e){var t=this;return e.upload={uuid:o.uuidv4(),progress:0,total:e.size,bytesSent:0,filename:this._renameFile(e),chunked:this.options.chunking&&(this.options.forceChunking||e.size>this.options.chunkSize),totalChunkCount:Math.ceil(e.size/this.options.chunkSize)},this.files.push(e),e.status=o.ADDED,this.emit("addedfile",e),this._enqueueThumbnail(e),this.accept(e,function(i){return i?(e.accepted=!1,t._errorProcessing([e],i)):(e.accepted=!0,t.options.autoQueue&&t.enqueueFile(e)),t._updateMaxFilesReachedClass()})}},{key:"enqueueFiles",value:function(e){for(var t=0,i=i=e;;){if(t>=i.length)break;var n=i[t++];this.enqueueFile(n)}return null}},{key:"enqueueFile",value:function(e){var t=this;if(e.status!==o.ADDED||!0!==e.accepted)throw new Error("This file can't be queued because it has already been processed or was rejected.");if(e.status=o.QUEUED,this.options.autoProcessQueue)return setTimeout(function(){return t.processQueue()},0)}},{key:"_enqueueThumbnail",value:function(e){var t=this;if(this.options.createImageThumbnails&&e.type.match(/image.*/)&&e.size<=1024*this.options.maxThumbnailFilesize*1024)return this._thumbnailQueue.push(e),setTimeout(function(){return t._processThumbnailQueue()},0)}},{key:"_processThumbnailQueue",value:function(){var e=this;if(!this._processingThumbnail&&0!==this._thumbnailQueue.length){this._processingThumbnail=!0;var t=this._thumbnailQueue.shift();return this.createThumbnail(t,this.options.thumbnailWidth,this.options.thumbnailHeight,this.options.thumbnailMethod,!0,function(i){return e.emit("thumbnail",t,i),e._processingThumbnail=!1,e._processThumbnailQueue()})}}},{key:"removeFile",value:function(e){if(e.status===o.UPLOADING&&this.cancelUpload(e),this.files=s(this.files,e),this.emit("removedfile",e),0===this.files.length)return this.emit("reset")}},{key:"removeAllFiles",value:function(e){null==e&&(e=!1);for(var t=0,i=i=this.files.slice();;){if(t>=i.length)break;var n=i[t++];(n.status!==o.UPLOADING||e)&&this.removeFile(n)}return null}},{key:"resizeImage",value:function(e,t,i,n,r){var s=this;return this.createThumbnail(e,t,i,n,!0,function(t,i){if(null==i)return r(e);var n=s.options.resizeMimeType;null==n&&(n=e.type);var a=i.toDataURL(n,s.options.resizeQuality);return"image/jpeg"!==n&&"image/jpg"!==n||(a=u.restore(e.dataURL,a)),r(o.dataURItoBlob(a))})}},{key:"createThumbnail",value:function(e,t,i,n,r,o){var s=this,a=new FileReader;return a.onload=function(){if(e.dataURL=a.result,"image/svg+xml"!==e.type)return s.createThumbnailFromUrl(e,t,i,n,r,o);null!=o&&o(a.result)},a.readAsDataURL(e)}},{key:"createThumbnailFromUrl",value:function(e,t,i,n,r,o,s){var a=this,u=document.createElement("img");return s&&(u.crossOrigin=s),u.onload=function(){var s=function(e){return e(1)};return"undefined"!=typeof EXIF&&null!==EXIF&&r&&(s=function(e){return EXIF.getData(u,function(){return e(EXIF.getTag(this,"Orientation"))})}),s(function(r){e.width=u.width,e.height=u.height;var s=a.options.resize.call(a,e,t,i,n),d=document.createElement("canvas"),c=d.getContext("2d");switch(d.width=s.trgWidth,d.height=s.trgHeight,r>4&&(d.width=s.trgHeight,d.height=s.trgWidth),r){case 2:c.translate(d.width,0),c.scale(-1,1);break;case 3:c.translate(d.width,d.height),c.rotate(Math.PI);break;case 4:c.translate(0,d.height),c.scale(1,-1);break;case 5:c.rotate(.5*Math.PI),c.scale(1,-1);break;case 6:c.rotate(.5*Math.PI),c.translate(0,-d.width);break;case 7:c.rotate(.5*Math.PI),c.translate(d.height,-d.width),c.scale(-1,1);break;case 8:c.rotate(-.5*Math.PI),c.translate(-d.height,0)}l(c,u,null!=s.srcX?s.srcX:0,null!=s.srcY?s.srcY:0,s.srcWidth,s.srcHeight,null!=s.trgX?s.trgX:0,null!=s.trgY?s.trgY:0,s.trgWidth,s.trgHeight);var p=d.toDataURL("image/png");if(null!=o)return o(p,d)})},null!=o&&(u.onerror=o),u.src=e.dataURL}},{key:"processQueue",value:function(){var e=this.options.parallelUploads,t=this.getUploadingFiles().length,i=t;if(!(t>=e)){var n=this.getQueuedFiles();if(n.length>0){if(this.options.uploadMultiple)return this.processFiles(n.slice(0,e-t));for(;i<e;){if(!n.length)return;this.processFile(n.shift()),i++}}}}},{key:"processFile",value:function(e){return this.processFiles([e])}},{key:"processFiles",value:function(e){for(var t=0,i=i=e;;){if(t>=i.length)break;var n=i[t++];n.processing=!0,n.status=o.UPLOADING,this.emit("processing",n)}return this.options.uploadMultiple&&this.emit("processingmultiple",e),this.uploadFiles(e)}},{key:"_getFilesWithXhr",value:function(e){return this.files.filter(function(t){return t.xhr===e}).map(function(e){return e})}},{key:"cancelUpload",value:function(e){if(e.status===o.UPLOADING){for(var t=this._getFilesWithXhr(e.xhr),i=0,n=n=t;;){if(i>=n.length)break;n[i++].status=o.CANCELED}void 0!==e.xhr&&e.xhr.abort();for(var r=0,s=s=t;;){if(r>=s.length)break;var a=s[r++];this.emit("canceled",a)}this.options.uploadMultiple&&this.emit("canceledmultiple",t)}else e.status!==o.ADDED&&e.status!==o.QUEUED||(e.status=o.CANCELED,this.emit("canceled",e),this.options.uploadMultiple&&this.emit("canceledmultiple",[e]));if(this.options.autoProcessQueue)return this.processQueue()}},{key:"resolveOption",value:function(e){if("function"==typeof e){for(var t=arguments.length,i=Array(t>1?t-1:0),n=1;n<t;n++)i[n-1]=arguments[n];return e.apply(this,i)}return e}},{key:"uploadFile",value:function(e){return this.uploadFiles([e])}},{key:"uploadFiles",value:function(e){var t=this;this._transformFiles(e,function(i){if(e[0].upload.chunked){var n=e[0],r=i[0];n.upload.chunks=[];var s=function(){for(var i=0;void 0!==n.upload.chunks[i];)i++;if(!(i>=n.upload.totalChunkCount)){var s=i*t.options.chunkSize,a=Math.min(s+t.options.chunkSize,n.size),l={name:t._getParamName(0),data:r.webkitSlice?r.webkitSlice(s,a):r.slice(s,a),filename:n.upload.filename,chunkIndex:i};n.upload.chunks[i]={file:n,index:i,dataBlock:l,status:o.UPLOADING,progress:0,retries:0},t._uploadData(e,[l])}};if(n.upload.finishedChunkUpload=function(i){var r=!0;i.status=o.SUCCESS,i.dataBlock=null,i.xhr=null;for(var a=0;a<n.upload.totalChunkCount;a++){if(void 0===n.upload.chunks[a])return s();n.upload.chunks[a].status!==o.SUCCESS&&(r=!1)}r&&t.options.chunksUploaded(n,function(){t._finished(e,"",null)})},t.options.parallelChunkUploads)for(var a=0;a<n.upload.totalChunkCount;a++)s();else s()}else{for(var l=[],u=0;u<e.length;u++)l[u]={name:t._getParamName(u),data:i[u],filename:e[u].upload.filename};t._uploadData(e,l)}})}},{key:"_getChunk",value:function(e,t){for(var i=0;i<e.upload.totalChunkCount;i++)if(void 0!==e.upload.chunks[i]&&e.upload.chunks[i].xhr===t)return e.upload.chunks[i]}},{key:"_uploadData",value:function(e,t){for(var i=this,n=new XMLHttpRequest,r=0,s=s=e;;){if(r>=s.length)break;s[r++].xhr=n}e[0].upload.chunked&&(e[0].upload.chunks[t[0].chunkIndex].xhr=n);var a=this.resolveOption(this.options.method,e),l=this.resolveOption(this.options.url,e);n.open(a,l,!0),n.timeout=this.resolveOption(this.options.timeout,e),n.withCredentials=!!this.options.withCredentials,n.onload=function(t){i._finishedUploading(e,n,t)},n.onerror=function(){i._handleUploadError(e,n)},(null!=n.upload?n.upload:n).onprogress=function(t){return i._updateFilesUploadProgress(e,n,t)};var u={Accept:"application/json","Cache-Control":"no-cache","X-Requested-With":"XMLHttpRequest"};for(var d in this.options.headers&&o.extend(u,this.options.headers),u){var c=u[d];c&&n.setRequestHeader(d,c)}var p=new FormData;if(this.options.params){var h=this.options.params;for(var f in"function"==typeof h&&(h=h.call(this,e,n,e[0].upload.chunked?this._getChunk(e[0],n):null)),h){var m=h[f];p.append(f,m)}}for(var v=0,g=g=e;;){if(v>=g.length)break;var k=g[v++];this.emit("sending",k,n,p)}this.options.uploadMultiple&&this.emit("sendingmultiple",e,n,p),this._addFormElementData(p);for(var y=0;y<t.length;y++){var b=t[y];p.append(b.name,b.data,b.filename)}this.submitRequest(n,p,e)}},{key:"_transformFiles",value:function(e,t){for(var i=this,n=[],r=0,o=function(o){i.options.transformFile.call(i,e[o],function(i){n[o]=i,++r===e.length&&t(n)})},s=0;s<e.length;s++)o(s)}},{key:"_addFormElementData",value:function(e){if("FORM"===this.element.tagName)for(var t=0,i=i=this.element.querySelectorAll("input, textarea, select, button");;){if(t>=i.length)break;var n=i[t++],r=n.getAttribute("name"),o=n.getAttribute("type");if(o&&(o=o.toLowerCase()),null!=r)if("SELECT"===n.tagName&&n.hasAttribute("multiple"))for(var s=0,a=a=n.options;;){if(s>=a.length)break;var l=a[s++];l.selected&&e.append(r,l.value)}else(!o||"checkbox"!==o&&"radio"!==o||n.checked)&&e.append(r,n.value)}}},{key:"_updateFilesUploadProgress",value:function(e,t,i){var n=void 0;if(void 0!==i){if(n=100*i.loaded/i.total,e[0].upload.chunked){var r=e[0],o=this._getChunk(r,t);o.progress=n,o.total=i.total,o.bytesSent=i.loaded,r.upload.progress=0,r.upload.total=0,r.upload.bytesSent=0;for(var s=0;s<r.upload.totalChunkCount;s++)void 0!==r.upload.chunks[s]&&void 0!==r.upload.chunks[s].progress&&(r.upload.progress+=r.upload.chunks[s].progress,r.upload.total+=r.upload.chunks[s].total,r.upload.bytesSent+=r.upload.chunks[s].bytesSent);r.upload.progress=r.upload.progress/r.upload.totalChunkCount}else for(var a=0,l=l=e;;){if(a>=l.length)break;var u=l[a++];u.upload.progress=n,u.upload.total=i.total,u.upload.bytesSent=i.loaded}for(var d=0,c=c=e;;){if(d>=c.length)break;var p=c[d++];this.emit("uploadprogress",p,p.upload.progress,p.upload.bytesSent)}}else{var h=!0;n=100;for(var f=0,m=m=e;;){if(f>=m.length)break;var v=m[f++];100===v.upload.progress&&v.upload.bytesSent===v.upload.total||(h=!1),v.upload.progress=n,v.upload.bytesSent=v.upload.total}if(h)return;for(var g=0,k=k=e;;){if(g>=k.length)break;var y=k[g++];this.emit("uploadprogress",y,n,y.upload.bytesSent)}}}},{key:"_finishedUploading",value:function(e,t,i){var n=void 0;if(e[0].status!==o.CANCELED&&4===t.readyState){if("arraybuffer"!==t.responseType&&"blob"!==t.responseType&&(n=t.responseText,t.getResponseHeader("content-type")&&~t.getResponseHeader("content-type").indexOf("application/json")))try{n=JSON.parse(n)}catch(e){i=e,n="Invalid JSON response from server."}this._updateFilesUploadProgress(e),200<=t.status&&t.status<300?e[0].upload.chunked?e[0].upload.finishedChunkUpload(this._getChunk(e[0],t)):this._finished(e,n,i):this._handleUploadError(e,t,n)}}},{key:"_handleUploadError",value:function(e,t,i){if(e[0].status!==o.CANCELED){if(e[0].upload.chunked&&this.options.retryChunks){var n=this._getChunk(e[0],t);if(n.retries++<this.options.retryChunksLimit)return void this._uploadData(e,[n.dataBlock]);console.warn("Retried this chunk too often. Giving up.")}for(var r=0,s=s=e;;){if(r>=s.length)break;s[r++],this._errorProcessing(e,i||this.options.dictResponseError.replace("{{statusCode}}",t.status),t)}}}},{key:"submitRequest",value:function(e,t,i){e.send(t)}},{key:"_finished",value:function(e,t,i){for(var n=0,r=r=e;;){if(n>=r.length)break;var s=r[n++];s.status=o.SUCCESS,this.emit("success",s,t,i),this.emit("complete",s)}if(this.options.uploadMultiple&&(this.emit("successmultiple",e,t,i),this.emit("completemultiple",e)),this.options.autoProcessQueue)return this.processQueue()}},{key:"_errorProcessing",value:function(e,t,i){for(var n=0,r=r=e;;){if(n>=r.length)break;var s=r[n++];s.status=o.ERROR,this.emit("error",s,t,i),this.emit("complete",s)}if(this.options.uploadMultiple&&(this.emit("errormultiple",e,t,i),this.emit("completemultiple",e)),this.options.autoProcessQueue)return this.processQueue()}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})}}]),o}();o.initClass(),o.version="5.5.1",o.options={},o.optionsForElement=function(e){return e.getAttribute("id")?o.options[a(e.getAttribute("id"))]:void 0},o.instances=[],o.forElement=function(e){if("string"==typeof e&&(e=document.querySelector(e)),null==(null!=e?e.dropzone:void 0))throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");return e.dropzone},o.autoDiscover=!0,o.discover=function(){var e=void 0;if(document.querySelectorAll)e=document.querySelectorAll(".dropzone");else{e=[];var t=function(t){return function(){for(var i=[],n=0,r=r=t;;){if(n>=r.length)break;var o=r[n++];/(^| )dropzone($| )/.test(o.className)?i.push(e.push(o)):i.push(void 0)}return i}()};t(document.getElementsByTagName("div")),t(document.getElementsByTagName("form"))}return function(){for(var t=[],i=0,n=n=e;;){if(i>=n.length)break;var r=n[i++];!1!==o.optionsForElement(r)?t.push(new o(r)):t.push(void 0)}return t}()},o.blacklistedBrowsers=[/opera.*(Macintosh|Windows Phone).*version\/12/i],o.isBrowserSupported=function(){var e=!0;if(window.File&&window.FileReader&&window.FileList&&window.Blob&&window.FormData&&document.querySelector)if("classList"in document.createElement("a"))for(var t=0,i=i=o.blacklistedBrowsers;;){if(t>=i.length)break;i[t++].test(navigator.userAgent)&&(e=!1)}else e=!1;else e=!1;return e},o.dataURItoBlob=function(e){for(var t=atob(e.split(",")[1]),i=e.split(",")[0].split(":")[1].split(";")[0],n=new ArrayBuffer(t.length),r=new Uint8Array(n),o=0,s=t.length,a=0<=s;a?o<=s:o>=s;a?o++:o--)r[o]=t.charCodeAt(o);return new Blob([n],{type:i})};var s=function(e,t){return e.filter(function(e){return e!==t}).map(function(e){return e})},a=function(e){return e.replace(/[\-_](\w)/g,function(e){return e.charAt(1).toUpperCase()})};o.createElement=function(e){var t=document.createElement("div");return t.innerHTML=e,t.childNodes[0]},o.elementInside=function(e,t){if(e===t)return!0;for(;e=e.parentNode;)if(e===t)return!0;return!1},o.getElement=function(e,t){var i=void 0;if("string"==typeof e?i=document.querySelector(e):null!=e.nodeType&&(i=e),null==i)throw new Error("Invalid `"+t+"` option provided. Please provide a CSS selector or a plain HTML element.");return i},o.getElements=function(e,t){var i=void 0,n=void 0;if(e instanceof Array){n=[];try{for(var r=0,o=o=e;!(r>=o.length);)i=o[r++],n.push(this.getElement(i,t))}catch(e){n=null}}else if("string"==typeof e){n=[];for(var s=0,a=a=document.querySelectorAll(e);!(s>=a.length);)i=a[s++],n.push(i)}else null!=e.nodeType&&(n=[e]);if(null==n||!n.length)throw new Error("Invalid `"+t+"` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");return n},o.confirm=function(e,t,i){return window.confirm(e)?t():null!=i?i():void 0},o.isValidFile=function(e,t){if(!t)return!0;t=t.split(",");for(var i=e.type,n=i.replace(/\/.*$/,""),r=0,o=o=t;;){if(r>=o.length)break;var s=o[r++];if("."===(s=s.trim()).charAt(0)){if(-1!==e.name.toLowerCase().indexOf(s.toLowerCase(),e.name.length-s.length))return!0}else if(/\/\*$/.test(s)){if(n===s.replace(/\/.*$/,""))return!0}else if(i===s)return!0}return!1},"undefined"!=typeof jQuery&&null!==jQuery&&(jQuery.fn.dropzone=function(e){return this.each(function(){return new o(this,e)})}),null!==e?e.exports=o:window.Dropzone=o,o.ADDED="added",o.QUEUED="queued",o.ACCEPTED=o.QUEUED,o.UPLOADING="uploading",o.PROCESSING=o.UPLOADING,o.CANCELED="canceled",o.ERROR="error",o.SUCCESS="success";var l=function(e,t,i,n,r,o,s,a,l,u){var d=function(e){e.naturalWidth;var t=e.naturalHeight,i=document.createElement("canvas");i.width=1,i.height=t;var n=i.getContext("2d");n.drawImage(e,0,0);for(var r=n.getImageData(1,0,1,t).data,o=0,s=t,a=t;a>o;)0===r[4*(a-1)+3]?s=a:o=a,a=s+o>>1;var l=a/t;return 0===l?1:l}(t);return e.drawImage(t,i,n,r,o,s,a,l,u/d)},u=function(){function e(){n(this,e)}return t(e,null,[{key:"initClass",value:function(){this.KEY_STR="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}},{key:"encode64",value:function(e){for(var t="",i=void 0,n=void 0,r="",o=void 0,s=void 0,a=void 0,l="",u=0;o=(i=e[u++])>>2,s=(3&i)<<4|(n=e[u++])>>4,a=(15&n)<<2|(r=e[u++])>>6,l=63&r,isNaN(n)?a=l=64:isNaN(r)&&(l=64),t=t+this.KEY_STR.charAt(o)+this.KEY_STR.charAt(s)+this.KEY_STR.charAt(a)+this.KEY_STR.charAt(l),i=n=r="",o=s=a=l="",u<e.length;);return t}},{key:"restore",value:function(e,t){if(!e.match("data:image/jpeg;base64,"))return t;var i=this.decode64(e.replace("data:image/jpeg;base64,","")),n=this.slice2Segments(i),r=this.exifManipulation(t,n);return"data:image/jpeg;base64,"+this.encode64(r)}},{key:"exifManipulation",value:function(e,t){var i=this.getExifArray(t),n=this.insertExif(e,i);return new Uint8Array(n)}},{key:"getExifArray",value:function(e){for(var t=void 0,i=0;i<e.length;){if(255===(t=e[i])[0]&225===t[1])return t;i++}return[]}},{key:"insertExif",value:function(e,t){var i=e.replace("data:image/jpeg;base64,",""),n=this.decode64(i),r=n.indexOf(255,3),o=n.slice(0,r),s=n.slice(r),a=o;return a=(a=a.concat(t)).concat(s)}},{key:"slice2Segments",value:function(e){for(var t=0,i=[];;){if(255===e[t]&218===e[t+1])break;if(255===e[t]&216===e[t+1])t+=2;else{var n=t+(256*e[t+2]+e[t+3])+2,r=e.slice(t,n);i.push(r),t=n}if(t>e.length)break}return i}},{key:"decode64",value:function(e){var t=void 0,i=void 0,n="",r=void 0,o=void 0,s="",a=0,l=[];for(/[^A-Za-z0-9\+\/\=]/g.exec(e)&&console.warn("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\nExpect errors in decoding."),e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");t=this.KEY_STR.indexOf(e.charAt(a++))<<2|(r=this.KEY_STR.indexOf(e.charAt(a++)))>>4,i=(15&r)<<4|(o=this.KEY_STR.indexOf(e.charAt(a++)))>>2,n=(3&o)<<6|(s=this.KEY_STR.indexOf(e.charAt(a++))),l.push(t),64!==o&&l.push(i),64!==s&&l.push(n),t=i=n="",r=o=s="",a<e.length;);return l}}]),e}();u.initClass(),o._autoDiscoverFunction=function(){if(o.autoDiscover)return o.discover()},function(e,t){var i=!1,n=!0,r=e.document,o=r.documentElement,s=r.addEventListener?"addEventListener":"attachEvent",a=r.addEventListener?"removeEventListener":"detachEvent",l=r.addEventListener?"":"on",u=function n(o){if("readystatechange"!==o.type||"complete"===r.readyState)return("load"===o.type?e:r)[a](l+o.type,n,!1),!i&&(i=!0)?t.call(e,o.type||o):void 0};if("complete"!==r.readyState){if(r.createEventObject&&o.doScroll){try{n=!e.frameElement}catch(e){}n&&function e(){try{o.doScroll("left")}catch(t){return void setTimeout(e,50)}return u("poll")}()}r[s](l+"DOMContentLoaded",u,!1),r[s](l+"readystatechange",u,!1),e[s](l+"load",u,!1)}}(window,o._autoDiscoverFunction)}(e={exports:{}},e.exports),e.exports),i={getSignedURL(e,t){let i={filePath:e.name,contentType:e.type};return new Promise((n,r)=>{var o=new FormData;let s=new XMLHttpRequest,a="function"==typeof t.signingURL?t.signingURL(e):t.signingURL;s.open("POST",a),s.onload=function(){200==s.status?n(JSON.parse(s.response)):r(s.statusText)},s.onerror=function(e){console.error("Network Error : Could not send request to AWS (Maybe CORS errors)"),r(e)},!0===t.withCredentials&&(s.withCredentials=!0),Object.entries(t.headers||{}).forEach(([e,t])=>{s.setRequestHeader(e,t)}),i=Object.assign(i,t.params||{}),Object.entries(i).forEach(([e,t])=>{o.append(e,t)}),s.send(o)})},sendFile(e,t,i){var n=i?this.setResponseHandler:this.sendS3Handler;return this.getSignedURL(e,t).then(t=>n(t,e)).catch(e=>e)},setResponseHandler(e,t){t.s3Signature=e.signature,t.s3Url=e.postEndpoint},sendS3Handler(e,t){let i=new FormData,n=e.signature;return Object.keys(n).forEach(function(e){i.append(e,n[e])}),i.append("file",t),new Promise((t,n)=>{let r=new XMLHttpRequest;r.open("POST",e.postEndpoint),r.onload=function(){if(201==r.status){var e=(new window.DOMParser).parseFromString(r.response,"text/xml").firstChild.children[0].innerHTML;t({success:!0,message:e})}else{var i=(new window.DOMParser).parseFromString(r.response,"text/xml").firstChild.children[0].innerHTML;n({success:!1,message:i+". Request is marked as resolved when returns as status 201"})}},r.onerror=function(e){var t=(new window.DOMParser).parseFromString(r.response,"text/xml").firstChild.children[1].innerHTML;n({success:!1,message:t})},r.send(i)})}};t.autoDiscover=!1;return function(e,t,i,n,r,o,s,a,l,u){"boolean"!=typeof s&&(l=a,a=s,s=!1);var d,c="function"==typeof i?i.options:i;if(e&&e.render&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0,r&&(c.functional=!0)),n&&(c._scopeId=n),o?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,l(e)),e&&e._registeredComponents&&e._registeredComponents.add(o)},c._ssrRegister=d):t&&(d=s?function(){t.call(this,u(this.$root.$options.shadowRoot))}:function(e){t.call(this,a(e))}),d)if(c.functional){var p=c.render;c.render=function(e,t){return d.call(t),p(e,t)}}else{var h=c.beforeCreate;c.beforeCreate=h?[].concat(h,d):[d]}return i}({render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{ref:"dropzoneElement",class:{"vue-dropzone dropzone":this.includeStyling},attrs:{id:this.id}},[this.useCustomSlot?t("div",{staticClass:"dz-message"},[this._t("default",[this._v("Drop files here to upload")])],2):this._e()])},staticRenderFns:[]},void 0,{props:{id:{type:String,required:!0,default:"dropzone"},options:{type:Object,required:!0},includeStyling:{type:Boolean,default:!0,required:!1},awss3:{type:Object,required:!1,default:null},destroyDropzone:{type:Boolean,default:!0,required:!1},duplicateCheck:{type:Boolean,default:!1,required:!1},useCustomSlot:{type:Boolean,default:!1,required:!1}},data:()=>({isS3:!1,isS3OverridesServerPropagation:!1,wasQueueAutoProcess:!0}),computed:{dropzoneSettings(){let e={thumbnailWidth:200,thumbnailHeight:200};return Object.keys(this.options).forEach(function(t){e[t]=this.options[t]},this),null!==this.awss3&&(e.autoProcessQueue=!1,this.isS3=!0,this.isS3OverridesServerPropagation=!1===this.awss3.sendFileToServer,void 0!==this.options.autoProcessQueue&&(this.wasQueueAutoProcess=this.options.autoProcessQueue),this.isS3OverridesServerPropagation&&(e.url=(e=>e[0].s3Url))),e}},mounted(){if(this.$isServer&&this.hasBeenMounted)return;this.hasBeenMounted=!0,this.dropzone=new t(this.$refs.dropzoneElement,this.dropzoneSettings);let e=this;this.dropzone.on("thumbnail",function(t,i){e.$emit("vdropzone-thumbnail",t,i)}),this.dropzone.on("addedfile",function(t){var i,n;if(e.duplicateCheck&&this.files.length)for(i=0,n=this.files.length;i<n-1;i++)this.files[i].name===t.name&&this.files[i].size===t.size&&this.files[i].lastModifiedDate.toString()===t.lastModifiedDate.toString()&&(this.removeFile(t),e.$emit("vdropzone-duplicate-file",t));e.$emit("vdropzone-file-added",t),e.isS3&&e.wasQueueAutoProcess&&!t.manuallyAdded&&e.getSignedAndUploadToS3(t)}),this.dropzone.on("addedfiles",function(t){e.$emit("vdropzone-files-added",t)}),this.dropzone.on("removedfile",function(t){e.$emit("vdropzone-removed-file",t),t.manuallyAdded&&null!==e.dropzone.options.maxFiles&&e.dropzone.options.maxFiles++}),this.dropzone.on("success",function(t,i){if(e.$emit("vdropzone-success",t,i),e.isS3){if(e.isS3OverridesServerPropagation){var n=(new window.DOMParser).parseFromString(i,"text/xml").firstChild.children[0].innerHTML;e.$emit("vdropzone-s3-upload-success",n)}e.wasQueueAutoProcess&&e.setOption("autoProcessQueue",!1)}}),this.dropzone.on("successmultiple",function(t,i){e.$emit("vdropzone-success-multiple",t,i)}),this.dropzone.on("error",function(t,i,n){e.$emit("vdropzone-error",t,i,n),this.isS3&&e.$emit("vdropzone-s3-upload-error")}),this.dropzone.on("errormultiple",function(t,i,n){e.$emit("vdropzone-error-multiple",t,i,n)}),this.dropzone.on("sending",function(t,i,n){if(e.isS3)if(e.isS3OverridesServerPropagation){let e=t.s3Signature;Object.keys(e).forEach(function(t){n.append(t,e[t])})}else n.append("s3ObjectLocation",t.s3ObjectLocation);e.$emit("vdropzone-sending",t,i,n)}),this.dropzone.on("sendingmultiple",function(t,i,n){e.$emit("vdropzone-sending-multiple",t,i,n)}),this.dropzone.on("complete",function(t){e.$emit("vdropzone-complete",t)}),this.dropzone.on("completemultiple",function(t){e.$emit("vdropzone-complete-multiple",t)}),this.dropzone.on("canceled",function(t){e.$emit("vdropzone-canceled",t)}),this.dropzone.on("canceledmultiple",function(t){e.$emit("vdropzone-canceled-multiple",t)}),this.dropzone.on("maxfilesreached",function(t){e.$emit("vdropzone-max-files-reached",t)}),this.dropzone.on("maxfilesexceeded",function(t){e.$emit("vdropzone-max-files-exceeded",t)}),this.dropzone.on("processing",function(t){e.$emit("vdropzone-processing",t)}),this.dropzone.on("processingmultiple",function(t){e.$emit("vdropzone-processing-multiple",t)}),this.dropzone.on("uploadprogress",function(t,i,n){e.$emit("vdropzone-upload-progress",t,i,n)}),this.dropzone.on("totaluploadprogress",function(t,i,n){e.$emit("vdropzone-total-upload-progress",t,i,n)}),this.dropzone.on("reset",function(){e.$emit("vdropzone-reset")}),this.dropzone.on("queuecomplete",function(){e.$emit("vdropzone-queue-complete")}),this.dropzone.on("drop",function(t){e.$emit("vdropzone-drop",t)}),this.dropzone.on("dragstart",function(t){e.$emit("vdropzone-drag-start",t)}),this.dropzone.on("dragend",function(t){e.$emit("vdropzone-drag-end",t)}),this.dropzone.on("dragenter",function(t){e.$emit("vdropzone-drag-enter",t)}),this.dropzone.on("dragover",function(t){e.$emit("vdropzone-drag-over",t)}),this.dropzone.on("dragleave",function(t){e.$emit("vdropzone-drag-leave",t)}),e.$emit("vdropzone-mounted")},beforeDestroy(){this.destroyDropzone&&this.dropzone.destroy()},methods:{manuallyAddFile:function(e,t){e.manuallyAdded=!0,this.dropzone.emit("addedfile",e);let i=!1;if((t.indexOf(".svg")>-1||t.indexOf(".png")>-1||t.indexOf(".jpg")>-1||t.indexOf(".jpeg")>-1||t.indexOf(".gif")>-1||t.indexOf(".webp")>-1)&&(i=!0),this.dropzone.options.createImageThumbnails&&i&&e.size<=1024*this.dropzone.options.maxThumbnailFilesize*1024){t&&this.dropzone.emit("thumbnail",e,t);for(var n=e.previewElement.querySelectorAll("[data-dz-thumbnail]"),r=0;r<n.length;r++)n[r].style.width=this.dropzoneSettings.thumbnailWidth+"px",n[r].style.height=this.dropzoneSettings.thumbnailHeight+"px",n[r].style["object-fit"]="contain"}this.dropzone.emit("complete",e),this.dropzone.options.maxFiles&&this.dropzone.options.maxFiles--,this.dropzone.files.push(e),this.$emit("vdropzone-file-added-manually",e)},setOption:function(e,t){this.dropzone.options[e]=t},removeAllFiles:function(e){this.dropzone.removeAllFiles(e)},processQueue:function(){let e=this.dropzone;this.isS3&&!this.wasQueueAutoProcess?this.getQueuedFiles().forEach(e=>{this.getSignedAndUploadToS3(e)}):this.dropzone.processQueue(),this.dropzone.on("success",function(){e.options.autoProcessQueue=!0}),this.dropzone.on("queuecomplete",function(){e.options.autoProcessQueue=!1})},init:function(){return this.dropzone.init()},destroy:function(){return this.dropzone.destroy()},updateTotalUploadProgress:function(){return this.dropzone.updateTotalUploadProgress()},getFallbackForm:function(){return this.dropzone.getFallbackForm()},getExistingFallback:function(){return this.dropzone.getExistingFallback()},setupEventListeners:function(){return this.dropzone.setupEventListeners()},removeEventListeners:function(){return this.dropzone.removeEventListeners()},disable:function(){return this.dropzone.disable()},enable:function(){return this.dropzone.enable()},filesize:function(e){return this.dropzone.filesize(e)},accept:function(e,t){return this.dropzone.accept(e,t)},addFile:function(e){return this.dropzone.addFile(e)},removeFile:function(e){this.dropzone.removeFile(e)},getAcceptedFiles:function(){return this.dropzone.getAcceptedFiles()},getRejectedFiles:function(){return this.dropzone.getRejectedFiles()},getFilesWithStatus:function(){return this.dropzone.getFilesWithStatus()},getQueuedFiles:function(){return this.dropzone.getQueuedFiles()},getUploadingFiles:function(){return this.dropzone.getUploadingFiles()},getAddedFiles:function(){return this.dropzone.getAddedFiles()},getActiveFiles:function(){return this.dropzone.getActiveFiles()},getSignedAndUploadToS3(e){var t=i.sendFile(e,this.awss3,this.isS3OverridesServerPropagation);this.isS3OverridesServerPropagation?t.then(()=>{setTimeout(()=>this.dropzone.processFile(e))}):t.then(t=>{t.success?(e.s3ObjectLocation=t.message,setTimeout(()=>this.dropzone.processFile(e)),this.$emit("vdropzone-s3-upload-success",t.message)):void 0!==t.message?this.$emit("vdropzone-s3-upload-error",t.message):this.$emit("vdropzone-s3-upload-error","Network Error : Could not send request to AWS. (Maybe CORS error)")}),t.catch(e=>{alert(e)})},setAWSSigningURL(e){this.isS3&&(this.awss3.signingURL=e)}}},void 0,!1,void 0,void 0,void 0)});
//# sourceMappingURL=vue2Dropzone.js.map


/***/ })

}]);