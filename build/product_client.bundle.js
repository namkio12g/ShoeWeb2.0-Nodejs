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

/***/ "./public/js/client/pages/products/product.client.js":
/*!***********************************************************!*\
  !*** ./public/js/client/pages/products/product.client.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _common_pagination_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/pagination.client */ \"./public/js/client/common/pagination.client.js\");\n/* harmony import */ var _common_pagination_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_common_pagination_client__WEBPACK_IMPORTED_MODULE_0__);\n// import \"../../components/rangePrice\";\n\n//slider price js\nvar minRange = document.getElementById('minRange');\nvar maxRange = document.getElementById('maxRange');\nvar minValue = document.getElementById('minValue');\nvar maxValue = document.getElementById('maxValue');\nminRange.addEventListener('input', updateValueMin);\nmaxRange.addEventListener('input', updateValueMax);\nfunction updateValueMin() {\n  if (parseInt(minRange.value) > parseInt(maxRange.value)) {\n    minRange.value = maxRange.value;\n  }\n  minValue.textContent = (parseInt(minRange.value) * 10000000 / 100).toLocaleString();\n  ;\n  maxValue.textContent = (parseInt(maxRange.value) * 10000000 / 100).toLocaleString();\n  ;\n}\nfunction updateValueMax() {\n  if (parseInt(maxRange.value) < parseInt(minRange.value)) {\n    maxRange.value = minRange.value;\n  }\n  minValue.textContent = (parseInt(minRange.value) * 10000000 / 100).toLocaleString();\n  ;\n  maxValue.textContent = (parseInt(maxRange.value) * 10000000 / 100).toLocaleString();\n  ;\n}\n//++++++++++++++++++++++Product-filter++++++++++++++++++++++++++++=\n// const form_search = document.querySelector(\".form-search\");\n// if (form_search) {\n//   form_search.addEventListener(\"submit\", (e) => {\n//     e.preventDefault();\n\n//     const url = new URL(document.location.href);\n//     const keyword = e.target.elements.keyword.value;\n//     if (keyword) {\n//       url.searchParams.set(\"keyword\", keyword);\n//     } else {\n//       url.searchParams.delete(\"keyword\");\n//     }\n//     document.location.href = url.href;\n//   });\n// }\nvar checkBox = document.querySelectorAll(\"input[type='checkbox']\");\ncheckBox.forEach(function (item) {\n  item.addEventListener(\"click\", function () {\n    var url = new URL(document.location.href);\n    if (item.checked) {\n      url.searchParams.append(item.getAttribute(\"filter-name\"), item.getAttribute(\"filter-data\"));\n    } else {\n      url.searchParams[\"delete\"](item.getAttribute(\"filter-name\"), item.getAttribute(\"filter-data\"));\n    }\n    document.location.href = url.href;\n  });\n});\nvar rangeBtn = document.querySelector(\".range-button\");\nrangeBtn.addEventListener(\"click\", function () {\n  var url = new URL(document.location.href);\n  url.searchParams[\"delete\"](\"prices\");\n  url.searchParams.append(\"prices\", maxValue.textContent.replace(/,/g, ''));\n  url.searchParams.append(\"prices\", minValue.textContent.replace(/,/g, ''));\n  document.location.href = url.href;\n});\n//++++++++++++++++++++++Product-Detail++++++++++++++++++++++++++++=\nvar filterBlock = document.querySelectorAll(\".filter-block-collapse\");\nfilterBlock.forEach(function (element) {\n  var filterTitle = element.querySelector(\".filter-title\");\n  var filterCollapse = element.querySelector(\".filter-collapse\");\n  filterTitle.addEventListener(\"click\", function (e) {\n    filterCollapse.classList.toggle(\"filter-collapse-active\");\n    filterTitle.classList.toggle(\"filter-title-active\");\n  });\n});\n//Filter Button\nvar filterButton = document.querySelector('.filter-button');\nvar filterMenu = document.querySelector('.filter-menu');\nfilterButton.addEventListener(\"click\", function () {\n  filterMenu.classList.toggle(\"filter-menu-active\");\n});\n\n//# sourceURL=webpack://shoe-sales-website-nodejs/./public/js/client/pages/products/product.client.js?");

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