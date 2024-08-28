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

/***/ "./public/js/admin/pages/customers/customer.admin.js":
/*!***********************************************************!*\
  !*** ./public/js/admin/pages/customers/customer.admin.js ***!
  \***********************************************************/
/***/ (() => {

eval("var confirmDialog = document.getElementById(\"confirmDialog\");\nvar confirmBtn = document.getElementById(\"confirmBtn\");\nvar cancelBtn = document.getElementById(\"cancelBtn\");\nvar deleteBtn = document.querySelectorAll(\"[btn_delete]\");\nvar detailBtns = document.querySelectorAll(\"[btn_detail]\");\nvar changeStatusBtns = document.querySelectorAll(\".btnStatus\");\nvar detail_Btn_Close = document.querySelector(\".btnCloseDetail\");\ndetailBtns.forEach(function (element) {\n  element.addEventListener(\"click\", function (e) {\n    console.log(\"ádasd\");\n    var id = element.getAttribute(\"id_customer\");\n    // const form = document.querySelector(\"#form_detail\");\n    // const path = form.getAttribute(\"data_path\");\n    // console.log(path);\n    // const newPath = path + `/${idProduct}`;\n    // form.action = newPath;\n    // form.submit();\n    var url3 = new URL(document.location.href);\n    if (id) {\n      url3.searchParams.set(\"idDetail\", id);\n      document.location.href = url3.href;\n    }\n    // const formDetaiProduct = document.querySelector(\".detail_wrapper\");\n    // formDetaiProduct.style.display = \"block\";\n  });\n});\nvar url4 = new URL(document.location.href);\nif (detail_Btn_Close) {\n  detail_Btn_Close.addEventListener(\"click\", function (e) {\n    var table = document.querySelector(\".tableProduct\");\n    var formDetail = document.querySelector(\".detail_wrapper\");\n    formDetail.style.display = \"none\";\n    table.style.width = \"100%\";\n    url4.searchParams[\"delete\"](\"idDetail\");\n    window.history.pushState({}, \"\", url4);\n\n    // document.location.href = url4.href;\n  });\n}\nif (changeStatusBtns.length != 0) {\n  changeStatusBtns.forEach(function (item) {\n    item.addEventListener(\"click\", function (e) {\n      var id = item.getAttribute(\"id_customer\");\n      var status = item.getAttribute(\"status\");\n      var form = document.querySelector(\"#form-change_status\");\n      var newstatus = status === \"active\" ? \"inactive\" : \"active\";\n      console.log(status);\n      var path = form.getAttribute(\"path_data\");\n      form.action = path + \"/\".concat(newstatus, \"/\").concat(id, \"?_method=PATCH\");\n      form.submit();\n    });\n  });\n}\n\n// if(detailBtn.length!=0){\n//     detailBt.forEach((item)=>{\n//         item.addEventListener(\"click\",(e)=>{\n//             const id=item.getAttribute(\"id_product\");\n//             const form=document.querySelector(\"#form-detail\")\n//             const path=form.getAttribute(\"path_data\");\n//             form.action=path+`/${id}?_method=`;\n//         })\n//     })\n// }\n\nif (deleteBtn.length != 0) {\n  deleteBtn.forEach(function (item) {\n    item.addEventListener(\"click\", function (e) {\n      confirmDialog.style.display = \"block\";\n      cancelBtn.addEventListener(\"click\", function () {\n        confirmBtn.style.display = \"none\";\n      });\n      confirmBtn.addEventListener(\"click\", function () {\n        confirmBtn.style.display = \"none\";\n        var id = item.getAttribute(\"id_product\");\n        var formDetele = document.querySelector(\"#form-delete\");\n        var path = formDetele.getAttribute(\"path_data\");\n        var newpath = path + \"/\".concat(id, \"?_method=DELETE\");\n        formDetele.action = newpath;\n        formDetele.submit();\n      });\n    });\n  });\n}\n\n//# sourceURL=webpack://shoe-sales-website-nodejs/./public/js/admin/pages/customers/customer.admin.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./public/js/admin/pages/customers/customer.admin.js"]();
/******/ 	
/******/ })()
;