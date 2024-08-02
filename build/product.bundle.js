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

/***/ "./public/js/admin/common/pagination.admin.js":
/*!****************************************************!*\
  !*** ./public/js/admin/common/pagination.admin.js ***!
  \****************************************************/
/***/ (() => {

eval("// -----------------------------------Admin------------------------------\n// Pagination\nvar page = document.querySelectorAll(\".page-link\");\npage.forEach(function (element) {\n  element.addEventListener(\"click\", function (e) {\n    var url2 = new URL(document.location.href);\n    var index = element.getAttribute(\"value\");\n    if (index) {\n      url2.searchParams.set(\"page\", index);\n      document.location.href = url2.href;\n    }\n  });\n});\n\n//# sourceURL=webpack://shoe-sales-website-nodejs/./public/js/admin/common/pagination.admin.js?");

/***/ }),

/***/ "./public/js/admin/pages/products/product.admin.js":
/*!*********************************************************!*\
  !*** ./public/js/admin/pages/products/product.admin.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _common_pagination_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/pagination.admin */ \"./public/js/admin/common/pagination.admin.js\");\n/* harmony import */ var _common_pagination_admin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_common_pagination_admin__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _validation_hasLetters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../validation/hasLetters */ \"./public/validation/hasLetters.js\");\n// ++++++++++++++++++++++++++Product-Page+++++++++++++++++++++++++++++++\n// Add new Product\n\n // Assuming validation.js is in the same directory\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var arrow = document.querySelector(\".arrow\");\n  arrow.addEventListener(\"click\", function () {\n    arrow.classList.toggle(\"down\");\n  });\n});\nvar modalElement = document.getElementById(\"productModal\");\nif (modalElement) {\n  // const modalToggle = document.querySelector(\".add_Product\"); // Replace with your button ID\n  // const modal = new bootstrap.Modal(modalElement);\n  // modalToggle.addEventListener(\"click\", function () {\n  //   modal.show(); // Displays the modal\n  //   const btnClose = document.querySelector(\".btnCloseFormAddProduct\"); // Replace with your button ID\n  //   btnClose.addEventListener(\"click\", function () {\n  //     const form = document.getElementById(\"cat_form\");\n  //     console.log(form);\n  //     form.reset();\n  //     modal.hide(); // Displays the modal\n  //   });\n  // });\n}\n// Add New Product 2\nvar btnAddnewProduct = document.querySelector(\".btn_addNewProduct\");\nif (btnAddnewProduct) {\n  btnAddnewProduct.addEventListener(\"click\", function (e) {\n    document.location.href = \"/admin/products/add-new-product\";\n  });\n}\n\n// Event Search-Status\nvar url = new URL(document.location.href);\nvar selectElement = document.getElementById(\"comboboxChangeStatus\");\nif (selectElement) {\n  selectElement.addEventListener(\"change\", function () {\n    var selectedIndex = selectElement.selectedIndex;\n    var selectedOption = selectElement.options[selectedIndex];\n    if (selectedOption.value != \"\") {\n      url.searchParams.set(\"status\", selectedOption.value);\n    } else {\n      url.searchParams[\"delete\"](\"status\");\n    }\n    document.location.href = url.href;\n  });\n}\n// Event Product Detail\nvar btn2 = document.querySelectorAll(\".product-img\");\nvar siz4;\nbtn2.forEach(function (element) {\n  element.addEventListener(\"click\", function (e) {\n    var url = new URL(document.location.href);\n    var newPath = element.getAttribute(\"path\");\n\n    // const newPath = url.href + element.getAttribute(\"path\");\n    // form.action = newPath;\n\n    // form.submit();\n    // url.searchParams.set(\"range\", element.value);\n    document.location.href = newPath;\n  });\n});\n// Product Detail\nvar detail_Btn = document.querySelectorAll(\"[btn-data-detail]\");\ndetail_Btn.forEach(function (element) {\n  element.addEventListener(\"click\", function (e) {\n    var idProduct = element.getAttribute(\"id_product\");\n    // const form = document.querySelector(\"#form_detail\");\n    // const path = form.getAttribute(\"data_path\");\n    // console.log(path);\n    // const newPath = path + `/${idProduct}`;\n    // form.action = newPath;\n    // form.submit();\n    var url3 = new URL(document.location.href);\n    if (idProduct) {\n      url3.searchParams.set(\"idDetail\", idProduct);\n      document.location.href = url3.href;\n    }\n    // const formDetaiProduct = document.querySelector(\".detail_wrapper\");\n    // formDetaiProduct.style.display = \"block\";\n  });\n});\n// Event-close-form-detail\nvar detail_Btn_Close = document.querySelector(\".btnCloseDetail\");\nvar url4 = new URL(document.location.href);\nif (detail_Btn_Close) {\n  detail_Btn_Close.addEventListener(\"click\", function (e) {\n    var tableProduct = document.querySelector(\".tableProduct\");\n    var formDetaiProduct = document.querySelector(\".detail_wrapper\");\n    formDetaiProduct.style.display = \"none\";\n    tableProduct.style.width = \"100%\";\n    url4.searchParams[\"delete\"](\"idDetail\");\n    window.history.pushState({}, \"\", url4);\n\n    // document.location.href = url4.href;\n  });\n}\n// Change status product\nvar btnChangeStatus = document.querySelectorAll(\".btnStatusProduct\");\nbtnChangeStatus.forEach(function (element) {\n  element.addEventListener(\"click\", function (e) {\n    var idProduct = element.getAttribute(\"id_product\");\n    var status = element.getAttribute(\"status\");\n    var newStatus = status == \"active\" ? \"inactive\" : \"active\";\n    var form = document.querySelector(\"#form_change_status\");\n    var path = form.getAttribute(\"data_path_changestatus\");\n    console.log(path);\n    var newPath = path + \"/\".concat(newStatus, \"/\").concat(idProduct, \"?_method=PATCH\");\n    form.action = newPath;\n    form.submit();\n  });\n});\n//  Delete Products\n\nvar btnDelete = document.querySelectorAll(\"[btn_delete]\");\nvar confirmDialog = document.getElementById(\"confirmDialog\");\nvar confirmBtn = document.getElementById(\"confirmBtn\");\nvar cancelBtn = document.getElementById(\"cancelBtn\");\nconsole.log(\"btnDelete\");\nif (btnDelete.length != 0) {\n  btnDelete.forEach(function (element) {\n    element.addEventListener(\"click\", function (e) {\n      console.log(\"Vogn\");\n      confirmDialog.style.display = \"block\"; // Hiển thị dialog\n      cancelBtn.addEventListener(\"click\", function () {\n        confirmDialog.style.display = \"none\"; // Hiển thị dialog\n      });\n      confirmBtn.addEventListener(\"click\", function () {\n        confirmDialog.style.display = \"none\"; // Hiển thị dialog\n        var idProduct = element.getAttribute(\"id_product\");\n        var form = document.querySelector(\"#form_delete_product\");\n        var path = form.getAttribute(\"data_path_delete\");\n        var newPath = path + \"/\".concat(idProduct, \"?_method=DELETE\");\n        form.action = newPath;\n        form.submit();\n      });\n    });\n  });\n}\n\n//# sourceURL=webpack://shoe-sales-website-nodejs/./public/js/admin/pages/products/product.admin.js?");

/***/ }),

/***/ "./public/validation/hasLetters.js":
/*!*****************************************!*\
  !*** ./public/validation/hasLetters.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/******/ 	var __webpack_exports__ = __webpack_require__("./public/js/admin/pages/products/product.admin.js");
/******/ 	
/******/ })()
;