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

/***/ "./public/js/client/pages/userInfo/profile.js":
/*!****************************************************!*\
  !*** ./public/js/client/pages/userInfo/profile.js ***!
  \****************************************************/
/***/ (() => {

eval("var userLinks = document.querySelectorAll('.profile-selection, .orders-selection, .address-selection');\nvar cancelBtn = document.querySelector('.cancel-button');\nif (cancelBtn) {\n  cancelBtn.addEventListener(\"click\", function (e) {\n    var orderId = cancelBtn.dataset.orderId;\n    fetch(\"/order/cancel\", {\n      method: \"PATCH\",\n      headers: {\n        \"Content-Type\": \"application/json\"\n      },\n      body: JSON.stringify({\n        orderId: orderId\n      })\n    }).then(function (res) {\n      return res.json();\n    }).then(function (resjson) {\n      if (resjson.status) {\n        Swal.fire({\n          icon: \"success\",\n          title: \"Success\",\n          text: resjson.massage,\n          timer: 1500,\n          showConfirmButton: false\n        }).then(function () {\n          window.location.reload();\n        });\n      } else {\n        Swal.fire({\n          icon: \"error\",\n          title: \"Something went wrong\",\n          text: resjson.massage,\n          timer: 1500,\n          showConfirmButton: false\n        }).then(function () {\n          window.location.reload();\n        });\n      }\n    });\n  });\n}\nvar currentUrl = window.location.href;\nif (currentUrl.includes('address')) {\n  userLinks.forEach(function (link) {\n    return link.classList.remove('selected');\n  });\n  userLinks[2].classList.add(\"selected\");\n} else if (currentUrl.includes('order')) {\n  userLinks.forEach(function (link) {\n    return link.classList.remove('selected');\n  });\n  userLinks[1].classList.add(\"selected\");\n} else {\n  userLinks.forEach(function (link) {\n    return link.classList.remove('selected');\n  });\n  userLinks[0].classList.add(\"selected\");\n}\n\n//# sourceURL=webpack://shoe-sales-website-nodejs/./public/js/client/pages/userInfo/profile.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./public/js/client/pages/userInfo/profile.js"]();
/******/ 	
/******/ })()
;