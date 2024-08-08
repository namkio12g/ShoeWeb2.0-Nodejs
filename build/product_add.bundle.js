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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _validation_hasLetters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../validation/hasLetters */ \"./public/validation/hasLetters.js\");\n // Assuming validation.js is in the same directory\n// submit event\nvar form = document.querySelector('[add-product-form]');\nconsole.log(form);\nform.addEventListener(\"submit\", function (e) {\n  try {\n    e.preventDefault();\n    var stocks = document.querySelectorAll('[product-stock]');\n    var sizes = document.querySelectorAll('[product-size]');\n    var string = \"\";\n    stocks.forEach(function (value, i) {\n      string += \"\".concat(parseInt(sizes[i].value), \"-\").concat(parseInt(stocks[i].value), \",\");\n    });\n    var hiddenInput = document.createElement('input');\n    hiddenInput.setAttribute('type', 'hidden');\n    hiddenInput.setAttribute('name', 'sizestock');\n    hiddenInput.setAttribute('value', string);\n    form.appendChild(hiddenInput);\n    form.submit();\n  } catch (error) {\n    alert(\"some thing went wrong\");\n  }\n});\n// add more and remove  field for stock and size input button \nvar addSizeStockBtn = document.querySelector('[add-sizestock-btn]');\nvar stockSizeFields = document.querySelector('[stock-size-fields]');\naddSizeStockBtn.addEventListener(\"click\", function (e) {\n  var clone = stockSizeFields.firstElementChild.cloneNode(true);\n  clone.querySelector('[product-size]').value = \"\";\n  clone.querySelector('[product-stock ]').value = \"\";\n  clone.querySelector('[remove-sizestock-btn]').addEventListener(\"click\", function (e) {\n    stockSizeFields.removeChild(clone);\n  });\n  stockSizeFields.appendChild(clone);\n});\n\n//\n// const publishDateInput = document.getElementById(\"updateAt\");\n// const currentDate = new Date();\n// const formattedDate = currentDate.toISOString().split(\"T\")[0]; // YYYY-MM-DD\n// publishDateInput.value = formattedDate;\n// const btnAddSizeProduct = document.querySelector(\".btnAddSizeProduct\");\n\n// const btnProductThumbnail = document.querySelector(\"#product_thumbnail\");\n// if (btnProductThumbnail) {\n//   btnProductThumbnail.addEventListener(\"input\", (e) => {\n//     const [file] = btnProductThumbnail.files;\n//     const preview_thumbnail = document.querySelector(\".preview-thumbnail img\");\n//     preview_thumbnail.src = URL.createObjectURL(file);\n//   });\n// }\n// function createThumbnail(src, alt, srcset) {\n//   const thumbnailWrapper = document.createElement(\"div\");\n//   thumbnailWrapper.classList.add(\"col-4\"); // Add col4 class for four-column layout\n\n//   const thumbnailElement = document.createElement(\"img\");\n//   thumbnailElement.classList.add(\"preview-thumbnail-more\", \"preview-thumbnail\");\n//   thumbnailElement.setAttribute(\"src\", URL.createObjectURL(src));\n//   thumbnailElement.setAttribute(\"alt\", alt);\n\n//   if (srcset) {\n//     thumbnailElement.setAttribute(\"srcset\", srcset);\n//   }\n\n//   thumbnailWrapper.appendChild(thumbnailElement);\n//   return thumbnailWrapper;\n// }\n\n// const btnMoreThumbnail = document.querySelector(\".add-more-thumbnail\");\n// btnMoreThumbnail.addEventListener(\"input\", (e) => {\n//   const file = btnMoreThumbnail.files;\n//   const pa = document.querySelector(\".form-add-more-thumbnail\");\n\n//   for (let index = 0; index < file.length; index++) {\n//     const element = file[index];\n//     const thumbnail1 = createThumbnail(element);\n//     pa.appendChild(thumbnail1);\n//   }\n\n//   // Example usage:\n// });\n// // if (btnAddSizeProduct)\n// //   btnAddSizeProduct.addEventListener(\"click\", function () {\n// //     const product_size = document.querySelector(\"#product-size\");\n// //     const product_stock = document.querySelector(\"#product-stock\");\n// //     const col1 = document.createElement(\"div\");\n// //     col1.classList.add(\"col-md-5\");\n// //     const col2 = document.createElement(\"div\");\n// //     col2.classList.add(\"col-md-5\");\n// //     const col3 = document.createElement(\"div\");\n// //     col3.classList.add(\"col-md-2\");\n\n// //     const formGroup1 = document.createElement(\"div\");\n// //     formGroup1.classList.add(\"form-group\");\n// //     formGroup1.classList.add(\"al\");\n\n// //     const formGroup2 = document.createElement(\"div\");\n// //     formGroup2.classList.add(\"form-group\");\n\n// //     const sizeLabel = document.createElement(\"label\");\n\n// //     sizeLabel.textContent = \"Size: \";\n// //     const sizeInput = document.createElement(\"input\");\n// //     sizeInput.setAttribute(\"name\", \"size\");\n// //     sizeInput.classList.add(\"form-control\");\n\n// //     const stockLabel = document.createElement(\"label\");\n// //     stockLabel.textContent = \"stock: \";\n// //     const stockInput = document.createElement(\"input\");\n// //     stockInput.setAttribute(\"name\", \"stock\");\n\n// //     stockInput.classList.add(\"form-control\");\n\n// //     const sizeSpan = document.createElement(\"span\");\n// //     const stockSpan = document.createElement(\"span\");\n// //     const spanErrorProductSize = document.getElementById(\"productSizeError\");\n// //     if (\n// //       hasLetters(product_size.value) == true &&\n// //       hasLetters(product_stock.value) == true\n// //     ) {\n// //       sizeInput.value = product_size.value;\n// //       stockInput.value = product_stock.value;\n// //       product_size.value = \"\";\n// //       product_stock.value = \"\";\n// //       const btnDelete = document.createElement(\"button\");\n// //       btnDelete.textContent = \"Delete\";\n// //       btnDelete.classList.add(\"btn\");\n// //       btnDelete.classList.add(\"btn-danger\");\n// //       btnDelete.classList.add(\"btnDeleteSizeProduct\");\n// //       btnDelete.setAttribute(\"type\", \"button\");\n\n// //       formGroup1.appendChild(sizeLabel);\n// //       formGroup1.appendChild(sizeInput);\n\n// //       formGroup1.appendChild(sizeSpan);\n// //       formGroup2.appendChild(stockLabel);\n// //       formGroup2.appendChild(stockInput);\n\n// //       formGroup2.appendChild(stockSpan);\n\n// //       col1.appendChild(formGroup1);\n// //       col2.appendChild(formGroup2);\n// //       col3.appendChild(btnDelete);\n// //       col3.classList.add(\"pt-4\");\n\n// //       const row = document.createElement(\"div\");\n// //       row.classList.add(\"row\");\n// //       row.appendChild(col1);\n// //       row.appendChild(col2);\n// //       row.appendChild(col3);\n\n// //       const sps1 = document.getElementById(\"SizePriceStock\");\n\n// //       sps1.insertAdjacentElement(\"afterend\", row);\n// //       spanErrorProductSize.textContent = \"\";\n// //     } else {\n// //       spanErrorProductSize.textContent = \"Vui lòng nhập kiểu dữ liệu số!\";\n// //     }\n// //   });\n\n// const btnDelete1 = document.querySelectorAll(\".btnDeleteSizeProduct\");\n// if (btnDelete1) {\n//   btnDelete1.forEach((element) => {\n//     element.addEventListener(\"click\", () => {\n//       element.parentNode.parentNode.remove();\n//     });\n//   });\n// }\n// // Onchange for price input\n// const btnProductPrice = document.querySelector(\".form-group #product_price\");\n// const spanErrorProductPrice = document.getElementById(\"productPriceError\");\n// btnProductPrice.addEventListener(\"input\", () => {\n//   if (hasLetters(btnProductPrice.value) == false) {\n//     spanErrorProductPrice.textContent = \"Vui lòng nhập đúng định dạng!\";\n//   } else {\n//     spanErrorProductPrice.textContent = \"\";\n//   }\n// });\n\n// const btnRadios = document.querySelectorAll('input[name=\"flexRadioDefault1\"]');\n// btnRadios.forEach((element) => {\n//   element.addEventListener(\"click\", (e) => {\n//     console.log(btnRadios); //\n//   });\n// });\n\n//# sourceURL=webpack://shoe-sales-website-nodejs/./public/js/admin/pages/products/product.add.admin.js?");

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