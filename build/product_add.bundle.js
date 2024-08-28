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

/***/ "./public/js/admin/pages/products/product.add.admin.js":
/*!*************************************************************!*\
  !*** ./public/js/admin/pages/products/product.add.admin.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _validation_hasLetters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../validation/hasLetters */ \"./public/validation/hasLetters.js\");\n // Assuming validation.js is in the same directory\n// preview image\nvar imgInp = document.querySelector('[thumbnail-input]');\nvar imgPreview = document.querySelector('[thumbnail-image]');\nimgInp.addEventListener(\"change\", function (e) {\n  if (imgInp.files && imgInp.files[0]) {\n    var reader = new FileReader();\n    reader.onload = function (e) {\n      imgPreview.src = e.target.result;\n    };\n    reader.readAsDataURL(imgInp.files[0]);\n  }\n});\n\n// submit event\nvar form = document.querySelector('[product-form]');\nconsole.log(form);\nform.addEventListener(\"submit\", function (e) {\n  try {\n    e.preventDefault();\n    var stocks = document.querySelectorAll('[product-stock]');\n    var sizes = document.querySelectorAll('[product-size]');\n    var string = \"\";\n    stocks.forEach(function (value, i) {\n      string += \"\".concat(parseInt(sizes[i].value), \"-\").concat(parseInt(stocks[i].value), \",\");\n    });\n    var hiddenInput = document.createElement('input');\n    hiddenInput.setAttribute('type', 'hidden');\n    hiddenInput.setAttribute('name', 'sizestock');\n    hiddenInput.setAttribute('value', string);\n    form.appendChild(hiddenInput);\n    form.submit();\n  } catch (error) {\n    alert(\"some thing went wrong\");\n  }\n});\n\n// add more and remove  field for stock and size input button \nvar addSizeStockBtn = document.querySelector('[add-sizestock-btn]');\nvar stockSizeFields = document.querySelector('[stock-size-fields]');\nif (stockSizeFields.childNodes.forEach(function (node) {\n  node.querySelector('[remove-sizestock-btn]').addEventListener(\"click\", function (e) {\n    stockSizeFields.removeChild(node);\n  });\n})) addSizeStockBtn.addEventListener(\"click\", function (e) {\n  var clone = stockSizeFields.firstElementChild.cloneNode(true);\n  clone.querySelector('[product-size]').value = \"\";\n  clone.querySelector('[product-stock ]').value = \"\";\n  clone.querySelector('[remove-sizestock-btn]').addEventListener(\"click\", function (e) {\n    stockSizeFields.removeChild(clone);\n  });\n  stockSizeFields.appendChild(clone);\n});\n\n//# sourceURL=webpack://shoe-sales-website-nodejs/./public/js/admin/pages/products/product.add.admin.js?");

/***/ }),

/***/ "./public/validation/hasLetters.js":
/*!*****************************************!*\
  !*** ./public/validation/hasLetters.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   hasLetters: () => (/* binding */ hasLetters)\n/* harmony export */ });\n// export function hasLetters(string) {\n//   const pattern = /^[a-zA-Z]+$/;\n//   return pattern.test(string);\n// }\n\n// module.exports = {\n//   hasLetters: (string) => {\n//     const pattern = /^[a-zA-Z]+$/;\n//     return pattern.test(string);\n//   },\n// };\n// export function validateEmail(email) {\n//   // Your email validation logic\n// }\n\n// export function validatePassword(password) {\n//   // Your password validation logic\n// }\nfunction hasLetters(string) {\n  var pattern = /^[0-9]+$/;\n  return pattern.test(string);\n}\n// export function hasLetters(string) {\n//   const pattern = /^[0-9]+$/;\n//   return pattern.test(string);\n// }\n\n//# sourceURL=webpack://shoe-sales-website-nodejs/./public/validation/hasLetters.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./public/js/admin/pages/products/product.add.admin.js");
/******/ 	
/******/ })()
;