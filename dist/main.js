/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  margin: 0;\\r\\n  box-sizing: border-box;\\r\\n  color: #4b4848;\\r\\n  background-color: azure;\\r\\n}\\r\\n\\r\\nmain {\\r\\n  width: 100vw;\\r\\n  height: 100vh;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\nul {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: flex-start;\\r\\n  background-color: white;\\r\\n  list-style-type: none;\\r\\n  width: 100%;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.list-container > div {\\r\\n  min-width: 400px;\\r\\n  max-width: 550px;\\r\\n  justify-content: space-between;\\r\\n  border-bottom: 1px solid #fffbfb;\\r\\n}\\r\\n\\r\\n.task {\\r\\n  display: flex;\\r\\n  background-color: #dcdbdb;\\r\\n  width: 100%;\\r\\n  padding: 20px;\\r\\n  justify-content: space-between;\\r\\n  border: 0;\\r\\n}\\r\\n\\r\\n.task p {\\r\\n  margin: 0;\\r\\n  font-size: 22px;\\r\\n  font-weight: 400;\\r\\n  color: #645f5f;\\r\\n}\\r\\n\\r\\n.task-item {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  min-width: 400px;\\r\\n  max-width: 550px;\\r\\n  border-bottom: 1px solid #dcdbdb;\\r\\n  padding: 20px;\\r\\n  transition: background-color 0.5s ease;\\r\\n}\\r\\n\\r\\n.icon-ellipsis-vertical {\\r\\n  margin-left: 50px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.icon-trash {\\r\\n  margin-left: 5px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\ninput {\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\n.task-label {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.marked {\\r\\n  text-decoration: line-through;\\r\\n}\\r\\n\\r\\n.list-description {\\r\\n  margin-left: 10px;\\r\\n  font-size: 14px;\\r\\n  border: none;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n#clear-btn {\\r\\n  text-align: center;\\r\\n  font-size: 20px;\\r\\n  padding-left: 40%;\\r\\n}\\r\\n\\r\\n#clear-btn:hover {\\r\\n  color: rgb(179, 17, 17);\\r\\n  cursor: pointer;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createList\": () => (/* binding */ createList),\n/* harmony export */   \"setEventListeners\": () => (/* binding */ setEventListeners),\n/* harmony export */   \"displayList\": () => (/* binding */ displayList),\n/* harmony export */   \"addNewList\": () => (/* binding */ addNewList),\n/* harmony export */   \"deleteList\": () => (/* binding */ deleteList),\n/* harmony export */   \"cleanMarkedElem\": () => (/* binding */ cleanMarkedElem)\n/* harmony export */ });\n/* harmony import */ var _elemevent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elemevent.js */ \"./src/elemevent.js\");\n/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./root.js */ \"./src/root.js\");\n/* eslint-disable import/no-cycle */\n\n\n\n\nconst createList = (list) => {\n  const divContainer = document.createElement('div');\n  const li = document.createElement('li');\n  const checkValue = list.completed === true ? 'checked' : '';\n  const checkClass = list.completed === true ? 'marked' : '';\n  divContainer.classList.add('div-container');\n  li.classList.add('task-item');\n\n  li.innerHTML = `\n          <label class='task-label'>\n            <input class='checkbox' ${checkValue} type='checkbox'>\n            <input class='list-description ${checkClass}' type='text' value='${list.description}'>\n            <input type='hidden' class='' value='${list.index}'>\n          </label>\n          <i class='icon-ellipsis-vertical'></i>\n          <i class='icon-trash'></i>`;\n\n  divContainer.appendChild(li);\n\n  return divContainer;\n};\n\nfunction setEventListeners() {\n  (0,_elemevent_js__WEBPACK_IMPORTED_MODULE_0__.dragDropEvents)();\n  (0,_elemevent_js__WEBPACK_IMPORTED_MODULE_0__.listCompleteEvents)();\n  (0,_elemevent_js__WEBPACK_IMPORTED_MODULE_0__.addNewEvents)();\n  (0,_elemevent_js__WEBPACK_IMPORTED_MODULE_0__.editListEvents)();\n  (0,_elemevent_js__WEBPACK_IMPORTED_MODULE_0__.deleteListEvents)();\n  (0,_elemevent_js__WEBPACK_IMPORTED_MODULE_0__.deleteAllElements)();\n}\n\nconst displayList = (taskList) => {\n  const listUl = document.querySelector('.task-display');\n\n  taskList.forEach((element) => {\n    const div = createList(element);\n    listUl.appendChild(div);\n  });\n};\n\nfunction addNewList() {\n  const input = document.querySelector('#Task-input');\n  const listUl = document.querySelector('.task-display');\n  let listArr = [];\n\n  if (localStorage.getItem('lists')) {\n    listArr = JSON.parse(localStorage.getItem('lists'));\n  }\n\n  listArr.push(new _root_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](input.value, false, listArr.length + 1));\n  input.value = '';\n  listUl.innerHTML = '';\n  displayList(listArr);\n  setEventListeners();\n}\n\nfunction deleteList(event) {\n  const listUl = document.querySelector('.task-display');\n  const removeDiv = event.target.parentNode.parentNode;\n\n  listUl.removeChild(removeDiv);\n}\n\nfunction cleanMarkedElem() {\n  const listUl = document.querySelector('.task-display');\n  const removeTasks = document.querySelectorAll('.marked');\n\n  removeTasks.forEach((element) => {\n    const removeDiv = element.parentElement.parentElement.parentElement;\n    listUl.removeChild(removeDiv);\n  });\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/display.js?");

/***/ }),

/***/ "./src/draganddrop.js":
/*!****************************!*\
  !*** ./src/draganddrop.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ dropElements)\n/* harmony export */ });\nfunction dropElements(dragTask, currentTask) {\n  const oldTask = currentTask;\n  const oldContainer = currentTask.parentNode;\n  const newTask = dragTask;\n  const newContainer = dragTask.parentNode;\n  newContainer.appendChild(oldTask);\n  oldContainer.appendChild(newTask);\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/draganddrop.js?");

/***/ }),

/***/ "./src/elemevent.js":
/*!**************************!*\
  !*** ./src/elemevent.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dragDropEvents\": () => (/* binding */ dragDropEvents),\n/* harmony export */   \"listCompleteEvents\": () => (/* binding */ listCompleteEvents),\n/* harmony export */   \"addNewEvents\": () => (/* binding */ addNewEvents),\n/* harmony export */   \"editListEvents\": () => (/* binding */ editListEvents),\n/* harmony export */   \"deleteListEvents\": () => (/* binding */ deleteListEvents),\n/* harmony export */   \"deleteAllElements\": () => (/* binding */ deleteAllElements)\n/* harmony export */ });\n/* harmony import */ var _marklist_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./marklist.js */ \"./src/marklist.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n/* harmony import */ var _draganddrop_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./draganddrop.js */ \"./src/draganddrop.js\");\n/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./display.js */ \"./src/display.js\");\n/* eslint-disable import/no-cycle */\n\n\n\n\n\n\nfunction updateList() {\n  const listcheckBoxI = document.querySelectorAll('.checkbox');\n  const elemDescription = document.querySelectorAll('.list-description');\n  const newArrayElem = [];\n  for (let i = 0; i < listcheckBoxI.length; i += 1) {\n    newArrayElem.push({\n      description: elemDescription[i].value,\n      completed: listcheckBoxI[i].checked,\n      index: i + 1,\n    });\n  }\n  (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(newArrayElem);\n}\n\nconst dragDropEvents = () => {\n  const elements = document.querySelectorAll('.task-item');\n  const containers = document.querySelectorAll('.div-container');\n  const listArrayElem = Array.from(elements);\n  const containerArrayElem = Array.from(containers);\n\n  let dragTask = null;\n\n  listArrayElem.forEach((element) => {\n    element.setAttribute('draggable', 'true');\n    element.addEventListener('dragstart', () => {\n      dragTask = element;\n    });\n    element.addEventListener('dragend', () => {\n      dragTask = null;\n    });\n  });\n\n  containerArrayElem.forEach((container) => {\n    container.addEventListener('dragover', (e) => {\n      e.preventDefault();\n    });\n    container.addEventListener('dragenter', (e) => {\n      e.preventDefault();\n    });\n    container.addEventListener('drop', () => {\n      (0,_draganddrop_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(dragTask, container.firstElementChild);\n      updateList();\n    });\n  });\n};\n\nconst listCompleteEvents = () => {\n  const allCheckboxes = document.querySelectorAll('.checkbox');\n  const allCheckboxesArray = Array.from(allCheckboxes);\n\n  allCheckboxesArray.forEach((inputBox) => {\n    inputBox.addEventListener('change', (e) => {\n      (0,_marklist_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(e);\n      updateList();\n    });\n  });\n};\n\nconst addNewEvents = () => {\n  const input = document.querySelector('#Task-input');\n\n  input.addEventListener('keypress', (e) => {\n    if (e.key === 'Enter' && input.value !== '' && e.target.matches('#Task-input')) {\n      (0,_display_js__WEBPACK_IMPORTED_MODULE_3__.addNewList)();\n      updateList();\n    }\n  });\n};\n\nconst editListEvents = () => {\n  const listsInput = document.querySelectorAll('.list-description');\n  const arrInput = Array.from(listsInput);\n\n  arrInput.forEach((input) => {\n    input.addEventListener('input', () => {\n      updateList();\n    });\n  });\n};\n\nconst deleteListEvents = () => {\n  const lists = document.querySelectorAll('.icon-trash');\n  const listArr = Array.from(lists);\n\n  listArr.forEach((lists) => {\n    lists.addEventListener('click', (e) => {\n      (0,_display_js__WEBPACK_IMPORTED_MODULE_3__.deleteList)(e);\n      updateList();\n    });\n  });\n};\n\nconst deleteAllElements = () => {\n  const clearLists = document.querySelector('#clear-btn');\n\n  clearLists.addEventListener('click', () => {\n    (0,_display_js__WEBPACK_IMPORTED_MODULE_3__.cleanMarkedElem)();\n    updateList();\n  });\n};\n\n\n//# sourceURL=webpack://to-do-list/./src/elemevent.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display.js */ \"./src/display.js\");\n\n\n\n\nlet taskList = [];\n\nif (localStorage.getItem('lists')) {\n  taskList = JSON.parse(localStorage.getItem('lists'));\n  (0,_display_js__WEBPACK_IMPORTED_MODULE_2__.displayList)(taskList);\n  (0,_display_js__WEBPACK_IMPORTED_MODULE_2__.setEventListeners)();\n} else {\n  (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(taskList);\n  (0,_display_js__WEBPACK_IMPORTED_MODULE_2__.displayList)(taskList);\n  (0,_display_js__WEBPACK_IMPORTED_MODULE_2__.setEventListeners)();\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/marklist.js":
/*!*************************!*\
  !*** ./src/marklist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ completedCheck)\n/* harmony export */ });\nfunction completedCheck(e) {\n  e.target.completed = e.target.checked;\n  if (e.target.completed === true) {\n    e.currentTarget.nextElementSibling.classList.add('marked');\n  } else {\n    e.currentTarget.nextElementSibling.classList.remove('marked');\n  }\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/marklist.js?");

/***/ }),

/***/ "./src/root.js":
/*!*********************!*\
  !*** ./src/root.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ List)\n/* harmony export */ });\nclass List {\n  constructor(description, completed, index) {\n    this.description = description;\n    this.completed = completed;\n    this.index = index;\n  }\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/root.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Storage)\n/* harmony export */ });\nfunction Storage(taskList) {\n  localStorage.setItem('lists', JSON.stringify(taskList));\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/storage.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;