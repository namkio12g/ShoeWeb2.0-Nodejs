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

/***/ "./public/js/client/pages/products/product.client.js":
/*!***********************************************************!*\
  !*** ./public/js/client/pages/products/product.client.js ***!
  \***********************************************************/
/***/ (() => {

eval("// import \"../../components/rangePrice\";\n// import \"../../common/pagination.client\";\n//++++++++++++++++++++++Product-Detail++++++++++++++++++++++++++++=\nvar filterBlock = document.querySelectorAll(\".filter-block-collapse\");\nfilterBlock.forEach(function (element) {\n  var filterTitle = element.querySelector(\".filter-title\");\n  var filterCollapse = element.querySelector(\".filter-collapse\");\n  filterTitle.addEventListener(\"click\", function (e) {\n    filterCollapse.classList.toggle(\"filter-collapse-active\");\n    filterTitle.classList.toggle(\"filter-title-active\");\n  });\n});\n//slider\nvar minRange = document.getElementById('minRange');\nvar maxRange = document.getElementById('maxRange');\nvar minValue = document.getElementById('minValue');\nvar maxValue = document.getElementById('maxValue');\nminRange.addEventListener('input', updateValueMin);\nmaxRange.addEventListener('input', updateValueMax);\nfunction updateValueMin() {\n  if (parseInt(minRange.value) > parseInt(maxRange.value)) {\n    minRange.value = maxRange.value;\n  }\n  minValue.textContent = parseInt(minRange.value) * 10000000 / 100;\n  maxValue.textContent = parseInt(maxRange.value) * 10000000 / 100;\n}\nfunction updateValueMax() {\n  if (parseInt(maxRange.value) < parseInt(minRange.value)) {\n    maxRange.value = minRange.value;\n  }\n  minValue.textContent = parseInt(minRange.value) * 10000000 / 100;\n  maxValue.textContent = parseInt(maxRange.value) * 10000000 / 100;\n}\n\n//# sourceURL=webpack://shoe-sales-website-nodejs/./public/js/client/pages/products/product.client.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./public/js/client/pages/products/product.client.js"]();
/******/ 	
/******/ })()
;