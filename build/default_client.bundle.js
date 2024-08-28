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

/***/ "./public/js/client/default.client.js":
/*!********************************************!*\
  !*** ./public/js/client/default.client.js ***!
  \********************************************/
/***/ (() => {

eval("//cart show and hid event\nvar cartShowBtn = document.querySelector(\".shopping-cart-icon-section\");\nvar overlay = document.querySelector(\".overlay\");\nvar cartMenu = document.querySelector(\".cart-section\");\nvar iconCancelCart = document.querySelector(\".icon-cancel\");\nif (cartShowBtn) {\n  cartShowBtn.addEventListener(\"click\", function () {\n    console.log(\"12312312\");\n    cartMenu.classList.add(\"cart-active\");\n    overlay.classList.add(\"overlay-active\");\n  });\n}\n;\nif (overlay) {\n  overlay.addEventListener(\"click\", function () {\n    cartMenu.classList.remove(\"cart-active\");\n    overlay.classList.remove(\"overlay-active\");\n  });\n  iconCancelCart.addEventListener(\"click\", function () {\n    cartMenu.classList.remove(\"cart-active\");\n    overlay.classList.remove(\"overlay-active\");\n  });\n}\n;\n\n//# sourceURL=webpack://shoe-sales-website-nodejs/./public/js/client/default.client.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./public/js/client/default.client.js"]();
/******/ 	
/******/ })()
;