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

/***/ "./public/js/admin/main.admin.js":
/*!***************************************!*\
  !*** ./public/js/admin/main.admin.js ***!
  \***************************************/
/***/ (() => {

eval("// Form-search\nvar form_search = document.querySelector(\".form-search\");\nif (form_search) {\n  form_search.addEventListener(\"submit\", function (e) {\n    e.preventDefault();\n    var url = new URL(document.location.href);\n    var keyword = e.target.elements.keyword.value;\n    if (keyword) {\n      url.searchParams.set(\"keyword\", keyword);\n    } else {\n      url.searchParams[\"delete\"](\"keyword\");\n    }\n    document.location.href = url.href;\n  });\n}\n\n//# sourceURL=webpack://shoe-sales-website-nodejs/./public/js/admin/main.admin.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./public/js/admin/main.admin.js"]();
/******/ 	
/******/ })()
;