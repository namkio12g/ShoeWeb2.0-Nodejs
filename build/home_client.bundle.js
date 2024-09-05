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

/***/ "./public/js/client/pages/home/home.js":
/*!*********************************************!*\
  !*** ./public/js/client/pages/home/home.js ***!
  \*********************************************/
/***/ (() => {

eval("function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _iterableToArray(r) { if (\"undefined\" != typeof Symbol && null != r[Symbol.iterator] || null != r[\"@@iterator\"]) return Array.from(r); }\nfunction _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\n// slide carousel\nvar slidercontent = document.querySelector(\".slider-content\");\nif (slidercontent) {\n  var sliderSelectItemWidth = slidercontent.querySelector(\".slider-item\").offsetWidth;\n  var sliderChilds = _toConsumableArray(slidercontent.children);\n  var cardPerview = Math.round(slidercontent.offsetWidth / sliderSelectItemWidth);\n  sliderChilds.slice(-cardPerview).reverse().forEach(function (child) {\n    slidercontent.insertAdjacentElement(\"afterbegin\", child.cloneNode(true));\n  });\n  sliderChilds.slice(0, cardPerview).forEach(function (child) {\n    slidercontent.insertAdjacentElement(\"beforeend\", child.cloneNode(true));\n  });\n  var isDragging = false,\n    startX,\n    startScrollLeft;\n  var dragStart = function dragStart(e) {\n    isDragging = true;\n    slidercontent.classList.add(\"dragging\");\n    startX = e.pageX - slidercontent.offsetLeft;\n    startScrollLeft = slidercontent.scrollLeft;\n  };\n  var dragging = function dragging(e) {\n    e.preventDefault();\n    if (!isDragging) return;\n    var x = e.pageX - slidercontent.offsetLeft;\n    var walk = (x - startX) * 2;\n    slidercontent.scrollLeft = startScrollLeft - walk;\n  };\n  var dragStop = function dragStop() {\n    isDragging = false;\n    slidercontent.classList.remove(\"dragging\");\n  };\n  var infiniteScroll = function infiniteScroll() {\n    if (slidercontent.scrollLeft === 0) {\n      slidercontent.classList.add(\"no-smooth\");\n      slidercontent.scrollLeft = slidercontent.scrollWidth - (slidercontent.offsetWidth + 1);\n      slidercontent.classList.remove(\"no-smooth\");\n    } else if (Math.ceil(slidercontent.scrollLeft) === slidercontent.scrollWidth - slidercontent.offsetWidth) {\n      slidercontent.classList.add(\"no-smooth\");\n      slidercontent.scrollLeft = 1;\n      slidercontent.classList.remove(\"no-smooth\");\n    }\n  };\n  slidercontent.addEventListener(\"mousedown\", dragStart);\n  slidercontent.addEventListener(\"mousemove\", dragging);\n  document.addEventListener(\"mouseup\", dragStop);\n  slidercontent.addEventListener(\"scroll\", infiniteScroll);\n  var nextIcon = document.querySelector(\".next-icon\");\n  nextIcon.addEventListener(\"click\", function () {\n    slidercontent.scrollLeft += sliderSelectItemWidth;\n  });\n  var prevIcon = document.querySelector(\".prev-icon\");\n  prevIcon.addEventListener(\"click\", function () {\n    slidercontent.scrollLeft -= sliderSelectItemWidth;\n  });\n}\n\n//# sourceURL=webpack://shoe-sales-website-nodejs/./public/js/client/pages/home/home.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./public/js/client/pages/home/home.js"]();
/******/ 	
/******/ })()
;