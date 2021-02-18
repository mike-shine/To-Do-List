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

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeToDo\": () => (/* binding */ makeToDo),\n/* harmony export */   \"addToDOM\": () => (/* binding */ addToDOM)\n/* harmony export */ });\n/* Factory function for constructing to-dos   */\nvar makeToDo = function makeToDo(title, description, dueDate, priority) {\n  return {\n    title: title,\n    description: description,\n    dueDate: dueDate,\n    priority: priority\n  };\n};\n/* Function for adding new to-dos to the DOM  */\n\n\nvar addToDOM = function addToDOM(title, dueDate) {\n  var toDoContainer = document.createElement('div');\n  toDoContainer.classList.add('toDoContainer');\n  document.body.appendChild(toDoContainer);\n  var newToDo = document.createElement('div');\n  newToDo.classList.add('toDo');\n  toDoContainer.appendChild(newToDo);\n  var toDoTitleContainer = document.createElement('div');\n  toDoTitleContainer.classList.add('toDoTitleContainer');\n  newToDo.appendChild(toDoTitleContainer);\n  var toDoTitle = document.createElement('h3');\n  toDoTitle.classList.add('toDoTitle');\n  toDoTitle.textContent = title;\n  toDoTitleContainer.appendChild(toDoTitle);\n  var toDoDueDateContainer = document.createElement('div');\n  toDoDueDateContainer.classList.add('toDoDueDateContainer');\n  newToDo.appendChild(toDoDueDateContainer);\n  var toDoDueDate = document.createElement('h4');\n  toDoDueDate.classList.add('toDoDueDate');\n  toDoDueDate.textContent = dueDate;\n  newToDo.appendChild(toDoDueDate);\n};\n\n\n\n//# sourceURL=webpack://to-do-list/./src/functions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _landingPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landingPage.js */ \"./src/landingPage.js\");\n/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions.js */ \"./src/functions.js\");\n\n\nwindow.addEventListener('DOMContentLoaded', function (e) {\n  e.preventDefault();\n  (0,_landingPage_js__WEBPACK_IMPORTED_MODULE_0__.default)();\n  console.log('this is quickly becoming a pain in the ass.');\n});\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/landingPage.js":
/*!****************************!*\
  !*** ./src/landingPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions.js */ \"./src/functions.js\");\n\n\nvar landingPage = function landingPage() {\n  var test = document.createElement('div');\n  test.textContent = 'This is coming from landingPage.js.';\n  document.body.appendChild(test);\n  var mowLawn = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.makeToDo)('mow lawn', 'cut the blades of grass shorter', 'next thursday', 'low');\n  console.log(mowLawn); // const toDo = (title, description, dueDate, priority) => {\n  //   this.title = title;\n  //   this.description = description;\n  //   this.dueDate = dueDate;\n  //   this.priority = priority;\n  // }\n  // const doTheDishes = new toDo('Do the dishes', 'self-explanatory', 'Next thursday', 'medium');\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (landingPage);\n\n//# sourceURL=webpack://to-do-list/./src/landingPage.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;