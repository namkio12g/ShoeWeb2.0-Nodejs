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

/***/ "./public/js/client/pages/userInfo/addressPage.js":
/*!********************************************************!*\
  !*** ./public/js/client/pages/userInfo/addressPage.js ***!
  \********************************************************/
/***/ (() => {

eval("var updateAddressBtns = document.querySelectorAll(\".updateAddress-btn\");\nvar setDefaultBtns = document.querySelectorAll(\".setDefault-btn\");\nvar updateForm = document.querySelector(\"#updateAddressForm\");\nvar selected = document.querySelector(\".address-selection\");\nselected.classList.add('selected');\nsetDefaultBtns.forEach(function (btn) {\n  btn.addEventListener(\"click\", function (e) {\n    var idAddress = btn.dataset.addressId;\n    fetch(\"/user/setDefault\", {\n      method: 'PATCH',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        idAddress: idAddress\n      })\n    });\n    window.location.reload();\n  });\n});\nupdateAddressBtns.forEach(function (btn) {\n  btn.addEventListener(\"click\", function () {\n    var cityInp = updateForm.querySelector(\".city-input\");\n    var districtInp = updateForm.querySelector(\".district-input\");\n    var communeInp = updateForm.querySelector(\".commune-input\");\n    var streetInp = updateForm.querySelector(\".street-input\");\n    var idInp = updateForm.querySelector(\".id-input\");\n    var addressArray = btn.dataset.addressLocation.split(\",\");\n    streetInp.value = addressArray[0];\n    communeInp.value = addressArray[1];\n    districtInp.value = addressArray[2];\n    cityInp.value = addressArray[3];\n    idInp.value = btn.dataset.addressId;\n    $('#updateAddressModal').modal('toggle');\n  });\n});\n\n//# sourceURL=webpack://shoe-sales-website-nodejs/./public/js/client/pages/userInfo/addressPage.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./public/js/client/pages/userInfo/addressPage.js"]();
/******/ 	
/******/ })()
;