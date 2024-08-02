/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./public/js/client/common/pagination.client.js":
/*!******************************************************!*\
  !*** ./public/js/client/common/pagination.client.js ***!
  \******************************************************/
/***/ (() => {

eval("// -----------------------------------Admin------------------------------\n// Pagination\nvar page = document.querySelectorAll(\".page-link\");\npage.forEach(function (element) {\n  element.addEventListener(\"click\", function (e) {\n    var url2 = new URL(document.location.href);\n    var index = element.getAttribute(\"value\");\n    if (index) {\n      url2.searchParams.set(\"page\", index);\n      document.location.href = url2.href;\n    }\n  });\n});\n\n//# sourceURL=webpack://shoe-sales-website-nodejs/./public/js/client/common/pagination.client.js?");

/***/ }),

/***/ "./public/js/client/components/rangePrice.js":
/*!***************************************************!*\
  !*** ./public/js/client/components/rangePrice.js ***!
  \***************************************************/
/***/ (() => {

eval("window.onload = function () {\n  slideMin();\n  slideMax();\n};\nvar minVal = document.querySelector(\".min-val\");\nvar maxVal = document.querySelector(\".max-val\");\nvar priceInputMin = document.querySelector(\".min-input\");\nvar priceInputMax = document.querySelector(\".max-input\");\nvar minTooltip = document.querySelector(\".min-tooltip\");\nvar maxTooltip = document.querySelector(\".max-tooltip\");\nvar minGap = 0;\nvar range = document.querySelector(\".slider-track\");\nvar sliderMinValue = parseInt(minVal.min);\nvar sliderMaxValue = parseInt(maxVal.max);\nminVal.addEventListener(\"input\", function () {\n  slideMin();\n});\nmaxVal.addEventListener(\"input\", function () {\n  slideMax();\n});\nfunction slideMin() {\n  var gap = parseInt(maxVal.value) - parseInt(minVal.value);\n  if (gap <= minGap) {\n    minVal.value = parseInt(maxVal.value) - minGap;\n  }\n  minTooltip.innerHTML = \"$\" + minVal.value;\n  //   priceInputMin.value = minVal.value;\n  setArea();\n}\nfunction slideMax() {\n  var gap = parseInt(maxVal.value) - parseInt(minVal.value);\n  if (gap <= minGap) {\n    maxVal.value = parseInt(minVal.value) - minGap;\n  }\n  maxTooltip.innerHTML = \"$\" + maxVal.value;\n  // priceInputMax.value = maxVal.value;\n  setArea();\n}\nfunction setArea() {\n  console.log(\"sd\");\n  range.style.left = \"\".concat((minVal.value - sliderMinValue) / (sliderMaxValue - sliderMinValue) * 100, \"%\");\n  range.style.left = minVal.value / sliderMaxValue * 100 + \"%\";\n  minTooltip.style.left = minVal.value / sliderMaxValue * 100 + \"%\";\n  range.style.right = \"\".concat(100 - (maxVal.value - sliderMinValue) / (sliderMaxValue - sliderMinValue) * 100, \"%\");\n  maxTooltip.style.right = 100 - maxVal.value / sliderMaxValue * 100 + \"%\";\n}\nfunction setMinInput() {\n  var minPrice = parseInt(priceInputMin.value);\n}\nfunction setMaxInput() {\n  var maxPrice = parseInt(priceInputMax.value);\n}\n\n//# sourceURL=webpack://shoe-sales-website-nodejs/./public/js/client/components/rangePrice.js?");

/***/ }),

/***/ "./public/js/client/pages/products/product.client.js":
/*!***********************************************************!*\
  !*** ./public/js/client/pages/products/product.client.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_rangePrice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/rangePrice */ \"./public/js/client/components/rangePrice.js\");\n/* harmony import */ var _components_rangePrice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_rangePrice__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_pagination_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/pagination.client */ \"./public/js/client/common/pagination.client.js\");\n/* harmony import */ var _common_pagination_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_common_pagination_client__WEBPACK_IMPORTED_MODULE_1__);\n\n\n//++++++++++++++++++++++Product-Detail++++++++++++++++++++++++++++=\nvar btn2 = document.querySelectorAll(\".cart-product__img\");\nvar siz4;\nbtn2.forEach(function (element) {\n  element.addEventListener(\"click\", function (e) {\n    var url = new URL(document.location.href);\n    var newPath = element.getAttribute(\"path\");\n\n    // const newPath = url.href + element.getAttribute(\"path\");\n    // form.action = newPath;\n\n    // form.submit();\n    // url.searchParams.set(\"range\", element.value);\n    document.location.href = newPath;\n  });\n});\n\n//# sourceURL=webpack://shoe-sales-website-nodejs/./public/js/client/pages/products/product.client.js?");

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
/******/ 			// no module.id needed
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
/******/ 	var __webpack_exports__ = __webpack_require__("./public/js/client/pages/products/product.client.js");
/******/ 	
/******/ })()
;