(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("vue-fancy-form", [], factory);
	else if(typeof exports === 'object')
		exports["vue-fancy-form"] = factory();
	else
		root["vue-fancy-form"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.VueFancyForm = undefined;

	var _form = __webpack_require__(1);

	var _form2 = _interopRequireDefault(_form);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.VueFancyForm = _form2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* styles */
	__webpack_require__(2)

	/* script */
	__vue_exports__ = __webpack_require__(6)

	/* template */
	var __vue_template__ = __webpack_require__(12)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}

	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-75e73716"

	module.exports = __vue_exports__


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-75e73716&scoped=true!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./form.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-75e73716&scoped=true!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./form.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.form[data-v-75e73716] {\n  width: 18em;\n  max-width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 2em;\n  padding-left: 1em;\n  padding-right: 1em;\n  padding-top: 1.5em;\n  padding-bottom: .5em;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  background-color: #fff;\n  font-family: sans-serif;\n  font-size: 16px;\n}\n.form--processing .form__control--submit span[data-v-75e73716],\n.form--failure .form__control--submit span[data-v-75e73716],\n.form--success .form__control--submit span[data-v-75e73716] {\n  opacity: 0;\n}\n@keyframes spinning {\n0% {\n    transform: translate3d(-50%, -50%, 0) rotate3d(0, 0, 1, 0);\n}\n100% {\n    transform: translate3d(-50%, -50%, 0) rotate3d(0, 0, 1, 360deg);\n}\n}\n.form--processing .form__control--submit[data-v-75e73716]::after {\n  content: ' ';\n  display: block;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate3d(-50%, -50%, 0);\n  width: .75rem;\n  height: .75rem;\n  border-radius: 50%;\n  border-style: solid;\n  border-width: 2px;\n  border-color: #777;\n  border-left-color: transparent;\n  animation-name: spinning;\n  animation-duration: 1s;\n  animation-iteration-count: infinite;\n  transition: opacity .3s;\n}\n.form--failure .form__control--submit[data-v-75e73716]::before, .form--failure .form__control--submit[data-v-75e73716]::after {\n  content: ' ';\n  display: block;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  width: .8rem;\n  height: 2px;\n  background-color: red;\n  transition: opacity .3s;\n}\n.form--failure .form__control--submit[data-v-75e73716]::before {\n  transform: translate3d(-50%, -50%, 0) rotate3d(0, 0, 1, 45deg);\n}\n.form--failure .form__control--submit[data-v-75e73716]::after {\n  transform: translate3d(-50%, -50%, 0) rotate3d(0, 0, 1, -45deg);\n}\n.form--success .form__control--submit[data-v-75e73716]::before, .form--success .form__control--submit[data-v-75e73716]::after {\n  content: ' ';\n  display: block;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  height: 2px;\n  background-color: green;\n}\n.form--success .form__control--submit[data-v-75e73716]::before {\n  width: .3rem;\n  transform: translate3d(-150%, 5%, 0) rotate3d(0, 0, 1, 45deg);\n}\n.form--success .form__control--submit[data-v-75e73716]::after {\n  width: .8rem;\n  transform: translate3d(-30%, -50%, 0) rotate3d(0, 0, 1, -45deg);\n}\n.form__controls[data-v-75e73716] {\n  text-align: right;\n}\n.form__control[data-v-75e73716] {\n  cursor: pointer;\n  padding: 1em;\n  outline: none;\n  border: none;\n  background: none;\n  font-size: 1em;\n}\n.form__control--cancel[data-v-75e73716] {\n  border: none;\n  font-size: .75em;\n  color: #ccc;\n}\n.form__control--submit[data-v-75e73716] {\n  position: relative;\n}\n.form__control--submit:hover span[data-v-75e73716]::after {\n    width: 50%;\n}\n.form__control--submit span[data-v-75e73716] {\n    opacity: 1;\n    position: relative;\n    transition: opacity .1s;\n}\n.form__control--submit span[data-v-75e73716]::after {\n      content: ' ';\n      display: block;\n      width: 0;\n      height: 2px;\n      position: absolute;\n      left: 0;\n      bottom: -.3em;\n      background-color: #ccc;\n      transition: width .15s;\n}\n.form__failure-message[data-v-75e73716] {\n  margin-left: -1em;\n  margin-right: -1em;\n  margin-bottom: -.5em;\n  padding: 1em;\n  background-color: red;\n  color: #fff;\n}\n.form__failure-message p[data-v-75e73716] {\n    margin-top: 0;\n    margin-bottom: 0;\n    font-size: .75em;\n}\n", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

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


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if (media) {
			styleElement.setAttribute("media", media);
		}

		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _input = __webpack_require__(7);

	var _input2 = _interopRequireDefault(_input);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    props: {
	        options: {
	            type: Object,
	            twoWay: true
	        }
	    },
	    data: function data() {
	        return {
	            state: 'default',
	            failureMessage: ''
	        };
	    },
	    methods: {
	        submitHandler: function submitHandler() {
	            var _this = this;

	            var error = false;
	            this.state = 'processing';
	            this.failureMessage = '';

	            for (var i = 0; i < this.options.inputs.length; i++) {
	                this.$delete(this.options.inputs[i], 'error');
	                this.$set(this.options.inputs[i], 'error', '');
	            }

	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                var _loop = function _loop() {
	                    var input = _step.value;

	                    // Checks if the value is not empty
	                    if (input.validation.required) {
	                        if (!input.value || input.value === '') {
	                            error = true;
	                            input.error = 'field is required';
	                        };
	                    }

	                    // Checks if the value is the same as the value of the referenced input field
	                    if (input.validation.sameAs) {
	                        var referencedInputField = _this.options.inputs.find(function (element) {
	                            return element.id === input.validation.sameAs;
	                        });
	                        if (input.value !== referencedInputField.value) {
	                            error = true;
	                            input.error = 'password does not match';
	                        }
	                    }
	                };

	                for (var _iterator = this.options.inputs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    _loop();
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }

	            if (error) {
	                this.state = 'default';
	                return;
	            }

	            this.options.submit(function (failureMessage) {
	                if (failureMessage) {
	                    _this.state = 'failure';
	                    _this.failureMessage = failureMessage;
	                } else {
	                    _this.state = 'success';
	                }

	                setTimeout(function () {
	                    _this.state = 'default';
	                }, 3000);
	            });
	        }
	    },
	    components: {
	        inputComponent: _input2.default
	    }
	}; //
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

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* styles */
	__webpack_require__(8)

	/* script */
	__vue_exports__ = __webpack_require__(10)

	/* template */
	var __vue_template__ = __webpack_require__(11)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}

	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-4dff5d2e"

	module.exports = __vue_exports__


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-4dff5d2e&scoped=true!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./input.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-4dff5d2e&scoped=true!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./input.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.input[data-v-4dff5d2e] {\n  padding-top: .5em;\n}\n.input[data-v-4dff5d2e]:nth-of-type(1) {\n    padding-top: 0;\n}\n.input label[data-v-4dff5d2e] {\n    cursor: pointer;\n    font-size: .75em;\n    color: #ccc;\n}\n.input input[data-v-4dff5d2e] {\n    cursor: pointer;\n    width: 100%;\n    padding-left: 0;\n    padding-right: 0;\n    padding-top: .5em;\n    padding-bottom: .2em;\n    outline: none;\n    border: none;\n    background: none;\n    font-size: inherit;\n}\n.input input:hover ~ span[data-v-4dff5d2e] {\n      width: 20%;\n}\n.input input[data-v-4dff5d2e]:focus {\n      cursor: text;\n}\n.input input:focus ~ span[data-v-4dff5d2e] {\n        width: 100%;\n}\n.input span[data-v-4dff5d2e] {\n    display: block;\n    width: 0;\n    height: 2px;\n    transition: width .15s;\n    margin-bottom: .5em;\n    background-color: #ddd;\n}\n.input p[data-v-4dff5d2e] {\n    visibility: hidden;\n    height: 1em;\n    margin-top: 0;\n    margin-bottom: .5em;\n    font-size: .75em;\n    color: red;\n}\n.input--error input[data-v-4dff5d2e] {\n  color: red;\n}\n.input--error input:hover ~ span[data-v-4dff5d2e] {\n    width: 100%;\n}\n.input--error span[data-v-4dff5d2e] {\n  width: 100%;\n  background-color: red;\n}\n.input--error p[data-v-4dff5d2e] {\n  visibility: visible;\n}\n", ""]);

	// exports


/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	    props: {
	        input: {
	            type: Object,
	            twoWay: true
	        }
	    }
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "input",
	    class: {
	      "input--error": input.error
	    }
	  }, [_h('label', {
	    attrs: {
	      "for": input.id
	    }
	  }, [_s(input.label)]), (input.type === "email") ? _h('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (input.value),
	      expression: "input.value"
	    }],
	    attrs: {
	      "type": "email",
	      "id": input.id,
	      "required": input.validation.required
	    },
	    domProps: {
	      "value": _s(input.value)
	    },
	    on: {
	      "keyup": function($event) {
	        input.error = ""
	      },
	      "input": function($event) {
	        if ($event.target.composing) return;
	        input.value = $event.target.value
	      }
	    }
	  }) : _e(), (input.type === "password") ? _h('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (input.value),
	      expression: "input.value"
	    }],
	    attrs: {
	      "type": "password",
	      "id": input.id,
	      "required": input.validation.required
	    },
	    domProps: {
	      "value": _s(input.value)
	    },
	    on: {
	      "keyup": function($event) {
	        input.error = ""
	      },
	      "input": function($event) {
	        if ($event.target.composing) return;
	        input.value = $event.target.value
	      }
	    }
	  }) : _e(), _m(0), (input.error) ? _h('p', [_s(input.error)]) : _e()])
	}},staticRenderFns: [function (){with(this) {
	  return _h('span')
	}}]}

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports={render:function (){with(this) {
	  return _h('form', {
	    staticClass: "form",
	    class: {
	      "form--processing": state === "processing", "form--failure": state === "failure", "form--success": state === "success"
	    },
	    on: {
	      "submit": function($event) {
	        $event.preventDefault();
	        submitHandler($event)
	      }
	    }
	  }, [_l((options.inputs), function(input) {
	    return _h('input-component', {
	      attrs: {
	        "input": input
	      }
	    })
	  }), _h('div', {
	    staticClass: "form__controls"
	  }, [_h('button', {
	    staticClass: "form__control form__control--cancel",
	    on: {
	      "click": function($event) {
	        $event.preventDefault();
	      }
	    }
	  }, ["cancel"]), _h('button', {
	    staticClass: "form__control form__control--submit",
	    attrs: {
	      "disabled": state === 'processing' || state === 'failure' || state === 'success'
	    }
	  }, [_m(0)])]), (failureMessage) ? _h('div', {
	    staticClass: "form__failure-message"
	  }, [_h('p', [_s(failureMessage)])]) : _e()])
	}},staticRenderFns: [function (){with(this) {
	  return _h('span', ["submit"])
	}}]}

/***/ }
/******/ ])
});
;