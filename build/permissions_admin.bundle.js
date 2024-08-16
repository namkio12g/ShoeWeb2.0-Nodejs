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

/***/ "./public/js/admin/pages/permissions/permission.js":
/*!*********************************************************!*\
  !*** ./public/js/admin/pages/permissions/permission.js ***!
  \*********************************************************/
/***/ (() => {

eval("var addbtn = document.querySelector(\"[btn-add-role]\");\nvar roleInTable = document.querySelectorAll(\"[role-id]\");\nif (roleInTable) {\n  roleInTable.forEach(function (ele, index) {\n    var permisionTr = document.querySelectorAll(\"[data-name]\");\n    var rolePermissions = ele.getAttribute(\"role-permissions\");\n    permisionTr.forEach(function (item) {\n      var dataName = item.getAttribute(\"data-name\");\n      var checkboxs = item.querySelectorAll(\"input[type='checkbox']\");\n      if (rolePermissions.includes(dataName)) {\n        checkboxs[index].checked = true;\n      }\n    });\n  });\n}\naddbtn.addEventListener(\"click\", function () {\n  var roles = [];\n  roleInTable.forEach(function (ele, index) {\n    var permisionTr = document.querySelectorAll(\"[data-name]\");\n    var id = ele.getAttribute(\"role-id\");\n    var permissions = [];\n    permisionTr.forEach(function (item) {\n      var dataName = item.getAttribute(\"data-name\");\n      var checkboxs = item.querySelectorAll(\"input[type='checkbox']\");\n      if (checkboxs[index].checked) {\n        permissions.push(dataName);\n      }\n    });\n    roles.push({\n      id: id,\n      permissions: permissions\n    });\n  });\n  console.log(\"???\");\n  fetch(\"/admin/roles/change-permissions\", {\n    headers: {\n      \"Content-Type\": \"application/json\"\n    },\n    method: \"PATCH\",\n    body: JSON.stringify({\n      roles: roles\n    })\n  }).then(function (res) {\n    window.location.reload();\n  });\n});\n\n//# sourceURL=webpack://shoe-sales-website-nodejs/./public/js/admin/pages/permissions/permission.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./public/js/admin/pages/permissions/permission.js"]();
/******/ 	
/******/ })()
;