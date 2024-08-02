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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _validation_hasLetters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../validation/hasLetters */ \"./public/validation/hasLetters.js\");\nfunction _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(r) { if (Array.isArray(r)) return r; }\n // Assuming validation.js is in the same directory\n\nvar publishDateInput = document.getElementById(\"updateAt\");\nvar currentDate = new Date();\nvar formattedDate = currentDate.toISOString().split(\"T\")[0]; // YYYY-MM-DD\npublishDateInput.value = formattedDate;\nvar btnAddSizeProduct = document.querySelector(\".btnAddSizeProduct\");\nvar btnProductThumbnail = document.querySelector(\"#product_thumbnail\");\nif (btnProductThumbnail) {\n  btnProductThumbnail.addEventListener(\"input\", function (e) {\n    var _btnProductThumbnail$ = _slicedToArray(btnProductThumbnail.files, 1),\n      file = _btnProductThumbnail$[0];\n    var preview_thumbnail = document.querySelector(\".preview-thumbnail img\");\n    preview_thumbnail.src = URL.createObjectURL(file);\n  });\n}\nfunction createThumbnail(src, alt, srcset) {\n  var thumbnailWrapper = document.createElement(\"div\");\n  thumbnailWrapper.classList.add(\"col-4\"); // Add col4 class for four-column layout\n\n  var thumbnailElement = document.createElement(\"img\");\n  thumbnailElement.classList.add(\"preview-thumbnail-more\", \"preview-thumbnail\");\n  thumbnailElement.setAttribute(\"src\", URL.createObjectURL(src));\n  thumbnailElement.setAttribute(\"alt\", alt);\n  if (srcset) {\n    thumbnailElement.setAttribute(\"srcset\", srcset);\n  }\n  thumbnailWrapper.appendChild(thumbnailElement);\n  return thumbnailWrapper;\n}\nvar btnMoreThumbnail = document.querySelector(\".add-more-thumbnail\");\nbtnMoreThumbnail.addEventListener(\"input\", function (e) {\n  var file = btnMoreThumbnail.files;\n  var pa = document.querySelector(\".form-add-more-thumbnail\");\n  for (var index = 0; index < file.length; index++) {\n    var element = file[index];\n    var thumbnail1 = createThumbnail(element);\n    pa.appendChild(thumbnail1);\n  }\n\n  // Example usage:\n});\nif (btnAddSizeProduct) btnAddSizeProduct.addEventListener(\"click\", function () {\n  var product_size = document.querySelector(\"#product-size\");\n  var product_stock = document.querySelector(\"#product-stock\");\n  var col1 = document.createElement(\"div\");\n  col1.classList.add(\"col-md-5\");\n  var col2 = document.createElement(\"div\");\n  col2.classList.add(\"col-md-5\");\n  var col3 = document.createElement(\"div\");\n  col3.classList.add(\"col-md-2\");\n  var formGroup1 = document.createElement(\"div\");\n  formGroup1.classList.add(\"form-group\");\n  formGroup1.classList.add(\"al\");\n  var formGroup2 = document.createElement(\"div\");\n  formGroup2.classList.add(\"form-group\");\n  var sizeLabel = document.createElement(\"label\");\n  sizeLabel.textContent = \"Size: \";\n  var sizeInput = document.createElement(\"input\");\n  sizeInput.setAttribute(\"name\", \"size\");\n  sizeInput.classList.add(\"form-control\");\n  var stockLabel = document.createElement(\"label\");\n  stockLabel.textContent = \"stock: \";\n  var stockInput = document.createElement(\"input\");\n  stockInput.setAttribute(\"name\", \"stock\");\n  stockInput.classList.add(\"form-control\");\n  var sizeSpan = document.createElement(\"span\");\n  var stockSpan = document.createElement(\"span\");\n  var spanErrorProductSize = document.getElementById(\"productSizeError\");\n  if ((0,_validation_hasLetters__WEBPACK_IMPORTED_MODULE_0__.hasLetters)(product_size.value) == true && (0,_validation_hasLetters__WEBPACK_IMPORTED_MODULE_0__.hasLetters)(product_stock.value) == true) {\n    sizeInput.value = product_size.value;\n    stockInput.value = product_stock.value;\n    product_size.value = \"\";\n    product_stock.value = \"\";\n    var btnDelete = document.createElement(\"button\");\n    btnDelete.textContent = \"Delete\";\n    btnDelete.classList.add(\"btn\");\n    btnDelete.classList.add(\"btn-danger\");\n    btnDelete.classList.add(\"btnDeleteSizeProduct\");\n    btnDelete.setAttribute(\"type\", \"button\");\n    formGroup1.appendChild(sizeLabel);\n    formGroup1.appendChild(sizeInput);\n    formGroup1.appendChild(sizeSpan);\n    formGroup2.appendChild(stockLabel);\n    formGroup2.appendChild(stockInput);\n    formGroup2.appendChild(stockSpan);\n    col1.appendChild(formGroup1);\n    col2.appendChild(formGroup2);\n    col3.appendChild(btnDelete);\n    col3.classList.add(\"pt-4\");\n    var row = document.createElement(\"div\");\n    row.classList.add(\"row\");\n    row.appendChild(col1);\n    row.appendChild(col2);\n    row.appendChild(col3);\n    var sps1 = document.getElementById(\"SizePriceStock\");\n    sps1.insertAdjacentElement(\"afterend\", row);\n    spanErrorProductSize.textContent = \"\";\n  } else {\n    spanErrorProductSize.textContent = \"Vui lòng nhập kiểu dữ liệu số!\";\n  }\n});\nvar btnDelete1 = document.querySelectorAll(\".btnDeleteSizeProduct\");\nif (btnDelete1) {\n  btnDelete1.forEach(function (element) {\n    element.addEventListener(\"click\", function () {\n      element.parentNode.parentNode.remove();\n    });\n  });\n}\n// Onchange for price input\nvar btnProductPrice = document.querySelector(\".form-group #product_price\");\nvar spanErrorProductPrice = document.getElementById(\"productPriceError\");\nbtnProductPrice.addEventListener(\"input\", function () {\n  if ((0,_validation_hasLetters__WEBPACK_IMPORTED_MODULE_0__.hasLetters)(btnProductPrice.value) == false) {\n    spanErrorProductPrice.textContent = \"Vui lòng nhập đúng định dạng!\";\n  } else {\n    spanErrorProductPrice.textContent = \"\";\n  }\n});\nvar btnRadios = document.querySelectorAll('input[name=\"flexRadioDefault1\"]');\nbtnRadios.forEach(function (element) {\n  element.addEventListener(\"click\", function (e) {\n    console.log(btnRadios); //\n  });\n});\n\n//# sourceURL=webpack://shoe-sales-website-nodejs/./public/js/admin/pages/products/product.add.admin.js?");

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