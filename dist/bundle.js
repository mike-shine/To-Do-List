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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeToDo\": () => (/* binding */ makeToDo),\n/* harmony export */   \"addToDOM\": () => (/* binding */ addToDOM),\n/* harmony export */   \"newToDoInfo\": () => (/* binding */ newToDoInfo)\n/* harmony export */ });\n/* Factory function for constructing to-dos   */\nvar makeToDo = function makeToDo(project, title, description, dueDate, priority) {\n  return {\n    project: project,\n    title: title,\n    description: description,\n    dueDate: dueDate,\n    priority: priority\n  };\n};\n/* Function for adding new to-dos to the DOM  */\n\n\nvar addToDOM = function addToDOM(project, title, dueDate) {\n  var toDoContainer = document.createElement('div');\n  toDoContainer.classList.add('toDoContainer');\n  document.body.appendChild(toDoContainer);\n  var newToDo = document.createElement('div');\n  newToDo.classList.add('toDo');\n  toDoContainer.appendChild(newToDo);\n  var toDoProjectContainer = document.createElement('div');\n  toDoProjectContainer.classList.add('toDoProjectContainer');\n  newToDo.appendChild(toDoProjectContainer);\n  var toDoProject = document.createElement('h5');\n  toDoProject.classList.add('toDoProject');\n  Boolean(project) ? toDoProject.textContent = project : toDoProject.textContent = 'Unsorted';\n  toDoProjectContainer.appendChild(toDoProject);\n  var toDoTitleContainer = document.createElement('div');\n  toDoTitleContainer.classList.add('toDoTitleContainer');\n  newToDo.appendChild(toDoTitleContainer);\n  var toDoTitle = document.createElement('h3');\n  toDoTitle.classList.add('toDoTitle');\n  toDoTitle.textContent = \"You have to: \".concat(title, \".\");\n  toDoTitleContainer.appendChild(toDoTitle);\n  var toDoDueDateContainer = document.createElement('div');\n  toDoDueDateContainer.classList.add('toDoDueDateContainer');\n  newToDo.appendChild(toDoDueDateContainer);\n  var toDoDueDate = document.createElement('h4');\n  toDoDueDate.classList.add('toDoDueDate');\n  toDoDueDate.textContent = \"Get this done by: \".concat(dueDate);\n  newToDo.appendChild(toDoDueDate);\n};\n/* Adding a new to do using info from the modal  */\n\n\nfunction newToDoInfo() {\n  var projectStatus = document.querySelector('#project').value;\n  var title = document.querySelector('#newToDoTitle').value;\n  var description = document.querySelector('#newToDoDescription').value;\n  var dueDate = document.querySelector('#newToDoDueDate').value;\n  var low = document.querySelector('#low').checked;\n  var medium = document.querySelector('#medium').checked;\n  var high = document.querySelector('#high').checked;\n  var priority;\n\n  if (low) {\n    priority = 'low';\n  } else if (medium) {\n    priority = 'medium';\n  } else if (high) {\n    priority = 'high';\n  }\n\n  return {\n    projectStatus: projectStatus,\n    title: title,\n    description: description,\n    dueDate: dueDate,\n    priority: priority\n  };\n}\n\n\n\n//# sourceURL=webpack://to-do-list/./src/functions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _landingPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landingPage.js */ \"./src/landingPage.js\");\n/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions.js */ \"./src/functions.js\");\n\n // window.addEventListener('DOMContentLoaded', (e) => {\n//   // e.preventDefault();\n//   // landingPage();\n// });\n\nvar toDoModal = document.getElementById('toDoModal');\nvar projectModal = document.getElementById('projectModal');\nvar closeButton0 = document.getElementsByClassName('closeButton')[0];\nvar closeButton1 = document.getElementsByClassName('closeButton')[1];\nvar submitToDo = document.getElementById('submitToDo');\n_landingPage_js__WEBPACK_IMPORTED_MODULE_0__.newToDoButton.addEventListener('click', function () {\n  toDoModal.style.display = 'block';\n});\n_landingPage_js__WEBPACK_IMPORTED_MODULE_0__.newProjectButton.addEventListener('click', function () {\n  projectModal.style.display = 'block';\n});\ncloseButton0.addEventListener('click', function () {\n  toDoModal.style.display = 'none';\n});\ncloseButton1.addEventListener('click', function () {\n  projectModal.style.display = 'none';\n});\nwindow.addEventListener('click', function (e) {\n  if (e.target === toDoModal || e.target === projectModal) {\n    toDoModal.style.display = 'none';\n    projectModal.style.display = 'none';\n  }\n});\nsubmitToDo.addEventListener('click', function () {\n  event.preventDefault();\n  toDoModal.style.display = 'none';\n  var newAddition = (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.newToDoInfo)();\n  (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.addToDOM)(newAddition.project, newAddition.title, newAddition.dueDate);\n});\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/landingPage.js":
/*!****************************!*\
  !*** ./src/landingPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newProjectButton\": () => (/* binding */ newProjectButton),\n/* harmony export */   \"newToDoButton\": () => (/* binding */ newToDoButton)\n/* harmony export */ });\n/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions.js */ \"./src/functions.js\");\n\nvar header = document.createElement('h1');\nheader.textContent = 'To-Do List';\ndocument.body.appendChild(header);\nvar subHeader = document.createElement('h2');\nsubHeader.textContent = 'Create a new project, or create a new to-do:';\ndocument.body.appendChild(subHeader);\nvar newProjectButton = document.createElement('button');\nnewProjectButton.classList.add('newProjectButton');\nnewProjectButton.textContent = 'New project';\ndocument.body.appendChild(newProjectButton);\nvar newToDoButton = document.createElement('button');\nnewToDoButton.classList.add('newToDoButton');\nnewToDoButton.textContent = 'New to-do';\ndocument.body.appendChild(newToDoButton);\nvar lineBreak = document.createElement('br');\ndocument.body.appendChild(lineBreak);\nvar projectLabel = document.createElement('label');\nprojectLabel.textContent = 'Select a project to view: ';\nvar projectSelector = document.createElement('select');\nprojectLabel.appendChild(projectSelector);\nvar unsortedOption = document.createElement('option');\nunsortedOption.textContent = '';\nprojectSelector.appendChild(unsortedOption);\nvar aroundTheHouseOption = document.createElement('option');\naroundTheHouseOption.textContent = 'Around the House';\nprojectSelector.appendChild(aroundTheHouseOption);\nvar backyardShedOption = document.createElement('option');\nbackyardShedOption.textContent = 'Backyard Shed';\nprojectSelector.appendChild(backyardShedOption);\ndocument.body.appendChild(projectLabel);\nvar mowLawn = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.makeToDo)('Around the House', 'mow the lawn', 'cut the blades of grass shorter', 'next thursday', 'low');\nvar washDishes = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.makeToDo)('Around the House', 'wash the dirty dishes', 'pretty self-explanatory', 'saturday', 'medium');\nvar getShedSupplies = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.makeToDo)('Backyard Shed', 'get supplies', 'go to Lowe\\'s for lumber and insulation', 'tomorrow at the latest!', 'high');\nvar climbEverest = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.makeToDo)('', 'climb Mt. Everest', 'descriptions for to-dos are kind of stupid', 'the end of 2022', 'medium');\n(0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.addToDOM)(mowLawn.project, mowLawn.title, mowLawn.dueDate);\n(0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.addToDOM)(washDishes.project, washDishes.title, washDishes.dueDate);\n(0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.addToDOM)(getShedSupplies.project, getShedSupplies.title, getShedSupplies.dueDate);\n(0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.addToDOM)(climbEverest.project, climbEverest.title, climbEverest.dueDate);\n\n\n//# sourceURL=webpack://to-do-list/./src/landingPage.js?");

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