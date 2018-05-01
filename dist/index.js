(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["vue"], factory);
	else if(typeof exports === 'object')
		exports["vuejs-progress-bar"] = factory(require("vue"));
	else
		root["vuejs-progress-bar"] = factory(root["vue"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(8)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(2),
  /* template */
  __webpack_require__(7),
  /* scopeId */
  "data-v-0078508b",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var s = function s(x) {
  return x + 's';
};
var px = function px(v) {
  return v + 'px';
};

/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    this.defaultOptions = {
      text: {
        color: '#FFFFFF',
        shadowEnable: true,
        shadowColor: '#000000',
        fontSize: 14,
        fontFamily: 'Helvetica',
        dynamicPosition: false,
        hideText: false
      },
      progress: {
        color: '#2dbd2d',
        backgroundColor: '#C0C0C0'
      },
      layout: {
        height: 35,
        width: 140,
        verticalTextAlign: 61,
        horizontalTextAlign: 43,
        strokeWidth: 30,
        progressPadding: 0,
        type: 'line'
      }
    };
  },

  props: {
    options: {
      type: Object,
      required: false
    },
    value: {
      type: Number,
      required: false,
      default: 0
    }
  },
  name: 'ProgressBar',
  data: function data() {
    return {
      defaultOptions: Object,
      rectHeight: 0,
      rectY: 90,
      topCy: -20,
      radiusCircle: 54,
      strokeCircle: 0,
      strokeCircleOffset: 0
    };
  },
  mounted: function mounted() {
    if (this.options !== null && this.options !== undefined) {
      this.mergeDefaultOptionsWithProp(this.options);
    }
  },

  computed: {
    cylinder: function cylinder() {
      return this.defaultOptions.layout.type === 'cylinder';
    },
    line: function line() {
      return this.defaultOptions.layout.type === 'line';
    },
    circle: function circle() {
      return this.defaultOptions.layout.type === 'circle';
    },
    width: function width() {
      return this.defaultOptions.layout.width;
    },
    height: function height() {
      return this.defaultOptions.layout.height;
    },
    viewBoxCircle: function viewBoxCircle() {
      return '0 0' + ' ' + this.height + ' ' + this.width;
    },
    verticalTextAlignP: function verticalTextAlignP() {
      return this.defaultOptions.layout.verticalTextAlign + '%';
    },
    horizontalTextAlignP: function horizontalTextAlignP() {
      if (this.defaultOptions.text.dynamicPosition) {
        var dynamicHorizontalTextAlign = 0;
        if (this.value > 75) {
          dynamicHorizontalTextAlign = 75;
        } else {
          dynamicHorizontalTextAlign = this.value;
          dynamicHorizontalTextAlign += 2;
        }
        return dynamicHorizontalTextAlign + '%';
      } else {
        return this.defaultOptions.layout.horizontalTextAlign + '%';
      }
    },
    cylinderProgressColor: function cylinderProgressColor() {
      if (this.value === 0) {
        return this.defaultOptions.progress.backgroundColor;
      } else {
        return this.defaultOptions.progress.color;
      }
    },
    cylinderBackgroundColor: function cylinderBackgroundColor() {
      if (this.value === 100) {
        return this.defaultOptions.progress.color;
      } else {
        return this.defaultOptions.progress.backgroundColor;
      }
    },
    cylinderBackgroundStroke: function cylinderBackgroundStroke() {
      return this.LightenColor(this.cylinderBackgroundColor, 25);
    },
    cylinderColorStroke: function cylinderColorStroke() {
      return this.LightenColor(this.cylinderProgressColor, 5);
    },
    progressValue: function progressValue() {
      return this.value + '%';
    },
    progressWidth: function progressWidth() {
      return px(this.defaultOptions.layout.height - this.defaultOptions.layout.progressPadding);
    },
    lineStyle: function lineStyle() {
      return {
        height: px(this.defaultOptions.layout.height),
        width: px(this.defaultOptions.layout.width)
      };
    },
    textStyle: function textStyle() {
      return {
        display: this.defaultOptions.text.hideText ? 'none' : 'inherit',
        fill: this.defaultOptions.text.color,
        fontSize: px(this.defaultOptions.text.fontSize),
        fontFamily: this.defaultOptions.text.fontFamily,
        textShadow: this.defaultOptions.text.shadowEnable ? '1px 1px 1px ' + this.defaultOptions.text.shadowColor : 'none'
      };
    },
    textStyleCircle: function textStyleCircle() {
      return {
        color: this.defaultOptions.text.color,
        fontSize: px(this.defaultOptions.text.fontSize),
        fontFamily: this.defaultOptions.text.fontFamily,
        textShadow: this.defaultOptions.text.shadowEnable ? '1px 1px 1px ' + this.defaultOptions.text.shadowColor : 'none',
        top: px(this.defaultOptions.layout.verticalTextAlign),
        left: px(this.defaultOptions.layout.horizontalTextAlign),
        position: 'relative'
      };
    }
  },
  watch: {
    value: function value(val) {
      var invertedVal = 100 - val;
      if (this.cylinder) {
        this.rectHeight = 80 - invertedVal * .8;
        this.rectY = invertedVal * .8 + 20;
        this.topCy = -invertedVal * -.8 + 20;
        this.cylText = 100 - invertedVal + "%";
      } else if (this.circle) {
        this.strokeCircle = 2 * Math.PI * this.radiusCircle;
        this.strokeCircleOffset = this.strokeCircle * ((100 - val) / 100);
      }
    }
  },
  methods: {
    mergeDefaultOptionsWithProp: function mergeDefaultOptionsWithProp(options) {
      var result = this.defaultOptions;
      for (var option in options) {
        if (options[option] !== null && _typeof(options[option]) === 'object') {
          for (var subOption in options[option]) {
            if (options[option][subOption] !== undefined && options[option][subOption] !== null) {
              result[option][subOption] = options[option][subOption];
            }
          }
        } else {
          result[option] = options[option];
        }
      }
    },
    LightenColor: function LightenColor(color, level) {
      var usePound = false;
      if (color[0] == "#") {
        color = color.slice(1);
        usePound = true;
      }

      var num = parseInt(color, 16);
      var r = (num >> 16) + level;

      if (r > 255) r = 255;else if (r < 0) r = 0;

      var b = (num >> 8 & 0x00FF) + level;

      if (b > 255) b = 255;else if (b < 0) b = 0;

      var g = (num & 0x0000FF) + level;

      if (g > 255) g = 255;else if (g < 0) g = 0;

      return (usePound ? "#" : "") + (g | b << 8 | r << 16).toString(16);
    }
  }
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ProgressBar_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ProgressBar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__ProgressBar_vue__);



var plugin = {
  install: function install(Vue, options) {
    Vue.component('ProgressBar', __WEBPACK_IMPORTED_MODULE_1__ProgressBar_vue___default.a);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (plugin);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".progress-bar[data-v-0078508b]{display:inline-block;align-content:stretch}.progress-bar .progress-container[data-v-0078508b]{stroke-width:2px}.progress-bar .progress-container .top[data-v-0078508b]{z-index:2}.progress-bar .progress-content[data-v-0078508b]{stroke-width:2px}.progress-bar .progress-content .top[data-v-0078508b]{z-index:1}", ""]);

// exports


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "progress-bar"
  }, [(_vm.circle) ? _c('div', {
    style: (_vm.textStyleCircle),
    attrs: {
      "id": "cont"
    }
  }, [_vm._v("\n    " + _vm._s(_vm.value + '%') + "\n  ")]) : _vm._e(), _vm._v(" "), (_vm.circle) ? _c('svg', {
    attrs: {
      "width": _vm.width,
      "height": _vm.height,
      "viewBox": "0 0 120 120"
    }
  }, [_c('circle', {
    attrs: {
      "cx": "60",
      "cy": "60",
      "r": _vm.radiusCircle,
      "fill": "none",
      "stroke": _vm.defaultOptions.progress.backgroundColor,
      "stroke-width": _vm.defaultOptions.layout.strokeWidth
    }
  }), _vm._v(" "), _c('circle', {
    attrs: {
      "cx": "60",
      "cy": "60",
      "r": _vm.radiusCircle,
      "fill": "none",
      "stroke": _vm.defaultOptions.progress.color,
      "stroke-width": _vm.defaultOptions.layout.strokeWidth,
      "stroke-dasharray": _vm.strokeCircle,
      "stroke-dashoffset": _vm.strokeCircleOffset
    }
  })]) : _vm._e(), _vm._v(" "), (_vm.cylinder) ? _c('svg', {
    attrs: {
      "id": "cylinder-progress",
      "width": "150px",
      "height": "120px"
    }
  }, [_c('g', {
    staticClass: "progress-container",
    attrs: {
      "stroke": _vm.cylinderBackgroundStroke,
      "fill": _vm.defaultOptions.progress.backgroundColor
    }
  }, [_c('rect', {
    attrs: {
      "x": "0",
      "y": "20",
      "width": "100%",
      "height": "80"
    }
  }), _vm._v(" "), _c('ellipse', {
    staticClass: "top",
    attrs: {
      "cx": "75",
      "cy": "20",
      "rx": "50%",
      "ry": "15"
    }
  }), _vm._v(" "), _c('ellipse', {
    staticClass: "bottom",
    attrs: {
      "cx": "75",
      "cy": "100",
      "rx": "50%",
      "ry": "15"
    }
  })]), _vm._v(" "), _c('g', {
    staticClass: "progress-content",
    attrs: {
      "stroke": _vm.cylinderColorStroke,
      "fill": _vm.cylinderProgressColor
    }
  }, [_c('rect', {
    attrs: {
      "x": "0",
      "y": _vm.rectY,
      "width": "100%",
      "height": _vm.rectHeight
    }
  }), _vm._v(" "), _c('ellipse', {
    staticClass: "top",
    attrs: {
      "cx": "75",
      "cy": _vm.topCy,
      "rx": "50%",
      "ry": "15"
    }
  }), _vm._v(" "), _c('ellipse', {
    staticClass: "bottom",
    attrs: {
      "cx": "75",
      "cy": "100",
      "rx": "50%",
      "ry": "15"
    }
  })]), _vm._v(" "), _c('g', {
    staticClass: "progress-container"
  }, [_c('ellipse', {
    staticClass: "top",
    attrs: {
      "stroke": _vm.cylinderBackgroundStroke,
      "cx": "75",
      "cy": "20",
      "rx": "50%",
      "ry": "15",
      "fill": "none"
    }
  })]), _vm._v(" "), _c('text', {
    style: (_vm.textStyle),
    attrs: {
      "x": _vm.horizontalTextAlignP,
      "y": _vm.verticalTextAlignP
    }
  }, [_vm._v(_vm._s(_vm.value) + "%")])]) : _vm._e(), _vm._v(" "), (_vm.line) ? _c('svg', {
    style: (_vm.lineStyle),
    attrs: {
      "id": "line-progress"
    }
  }, [_c('line', {
    attrs: {
      "x1": "0",
      "y1": "50%",
      "x2": "100%",
      "y2": "50%",
      "stroke": _vm.defaultOptions.progress.backgroundColor,
      "stroke-width": _vm.defaultOptions.layout.height
    }
  }), _vm._v(" "), _c('line', {
    attrs: {
      "x1": "0",
      "y1": "50%",
      "x2": _vm.progressValue,
      "y2": "50%",
      "stroke": _vm.defaultOptions.progress.color,
      "stroke-width": _vm.progressWidth
    }
  }), _vm._v(" "), _c('text', {
    style: (_vm.textStyle),
    attrs: {
      "x": _vm.horizontalTextAlignP,
      "y": _vm.verticalTextAlignP
    }
  }, [_vm._v(_vm._s(_vm.value) + "%")])]) : _vm._e()])
},staticRenderFns: []}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(4);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(9)("b4548146", content, true);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(10)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 10 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map