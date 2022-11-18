/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/projectHandler.js":
/*!***********************************!*\
  !*** ./src/app/projectHandler.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTodo": () => (/* binding */ addTodo),
/* harmony export */   "defaultProject": () => (/* binding */ defaultProject),
/* harmony export */   "removeTodo": () => (/* binding */ removeTodo)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/app/projects.js");


// manage projects
const defaultProject = (0,_projects__WEBPACK_IMPORTED_MODULE_0__.createProject)('default');

function addTodo(todo, project) {
    if (project) {
        todo.projectId = project.id;
        project.todos.push(todo);
        console.log(project.todos.length);
    }
    defaultProject.todos.push(todo);
    todo.id = defaultProject.todos.indexOf(todo);
    console.log(todo);
    console.log(defaultProject.todos.length);
}

function removeTodo(removedTodo) {
    // remove from default project
    const index = removedTodo.id;
    defaultProject.todos.splice(index, 1);
    defaultProject.todos.forEach((todo) => todo.id = defaultProject.todos.indexOf(todo));
    console.log('removed from default');
    // remove from individual project
    const projectId = removedTodo.projectId;
    if (projectId != undefined) {
        const project = _projects__WEBPACK_IMPORTED_MODULE_0__.namedProjects[projectId];
        const projectIndex = project.todos.indexOf(removedTodo);
        project.todos.splice(projectIndex, 1);
        console.log('removed from project');
    }
}

/***/ }),

/***/ "./src/app/projects.js":
/*!*****************************!*\
  !*** ./src/app/projects.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProject": () => (/* binding */ addProject),
/* harmony export */   "createProject": () => (/* binding */ createProject),
/* harmony export */   "namedProjects": () => (/* binding */ namedProjects),
/* harmony export */   "removeProject": () => (/* binding */ removeProject)
/* harmony export */ });
// factory to create projects
function createProject(title) {
    let todos = [];
    console.log('project created');
    return {title, todos}
}

let namedProjects = [];

function addProject(newProject) {
    namedProjects.push(newProject);
    newProject.id = namedProjects.indexOf(newProject);
}

function removeProject(removedProject) {
    const index = removedProject.id;
    namedProjects.splice(index, 1);
    namedProjects.forEach(project => project.id = namedProjects.indexOf(project));
    console.log('removed project');
}

/***/ }),

/***/ "./src/app/todos.js":
/*!**************************!*\
  !*** ./src/app/todos.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTodo": () => (/* binding */ createTodo)
/* harmony export */ });
// factory to create todos
function createTodo(title, description, dueDate, priority) {
    let complete = false;
    // something in here to format the date
    return { title, description, dueDate, priority, complete }
}

// function to edit todo
function editTodo(todo, attribute, newValue) {
    //if newValue is a date, format it
    todo[attribute] = newValue;
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_projectHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/projectHandler */ "./src/app/projectHandler.js");
/* harmony import */ var _app_projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/projects */ "./src/app/projects.js");
/* harmony import */ var _app_todos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/todos */ "./src/app/todos.js");





let todoTest = (0,_app_todos__WEBPACK_IMPORTED_MODULE_2__.createTodo)('test');
console.log(todoTest);

let newProject = (0,_app_projects__WEBPACK_IMPORTED_MODULE_1__.createProject)('test');
console.log(newProject);
console.log(_app_projectHandler__WEBPACK_IMPORTED_MODULE_0__.defaultProject);

(0,_app_projects__WEBPACK_IMPORTED_MODULE_1__.addProject)(newProject);
(0,_app_projectHandler__WEBPACK_IMPORTED_MODULE_0__.addTodo)(todoTest, newProject);

(0,_app_projectHandler__WEBPACK_IMPORTED_MODULE_0__.removeTodo)(todoTest);
console.log(newProject);
console.log(_app_projectHandler__WEBPACK_IMPORTED_MODULE_0__.defaultProject);

(0,_app_projects__WEBPACK_IMPORTED_MODULE_1__.removeProject)(newProject);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUEwRDs7QUFFMUQ7QUFDTyx1QkFBdUIsd0RBQWE7O0FBRXBDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG9EQUFhO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQ087QUFDUDtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVPOztBQUVBO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFDTztBQUNQO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDWEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTjhCO0FBQzZDO0FBQ0Q7QUFDakM7O0FBRXpDLGVBQWUsc0RBQVU7QUFDekI7O0FBRUEsaUJBQWlCLDREQUFhO0FBQzlCO0FBQ0EsWUFBWSwrREFBYzs7QUFFMUIseURBQVU7QUFDViw0REFBTzs7QUFFUCwrREFBVTtBQUNWO0FBQ0EsWUFBWSwrREFBYzs7QUFFMUIsNERBQWEsYSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2FwcC9wcm9qZWN0SGFuZGxlci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9hcHAvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvYXBwL3RvZG9zLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlUHJvamVjdCwgbmFtZWRQcm9qZWN0cyB9IGZyb20gJy4vcHJvamVjdHMnO1xuXG4vLyBtYW5hZ2UgcHJvamVjdHNcbmV4cG9ydCBjb25zdCBkZWZhdWx0UHJvamVjdCA9IGNyZWF0ZVByb2plY3QoJ2RlZmF1bHQnKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRvZG8odG9kbywgcHJvamVjdCkge1xuICAgIGlmIChwcm9qZWN0KSB7XG4gICAgICAgIHRvZG8ucHJvamVjdElkID0gcHJvamVjdC5pZDtcbiAgICAgICAgcHJvamVjdC50b2Rvcy5wdXNoKHRvZG8pO1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0LnRvZG9zLmxlbmd0aCk7XG4gICAgfVxuICAgIGRlZmF1bHRQcm9qZWN0LnRvZG9zLnB1c2godG9kbyk7XG4gICAgdG9kby5pZCA9IGRlZmF1bHRQcm9qZWN0LnRvZG9zLmluZGV4T2YodG9kbyk7XG4gICAgY29uc29sZS5sb2codG9kbyk7XG4gICAgY29uc29sZS5sb2coZGVmYXVsdFByb2plY3QudG9kb3MubGVuZ3RoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVRvZG8ocmVtb3ZlZFRvZG8pIHtcbiAgICAvLyByZW1vdmUgZnJvbSBkZWZhdWx0IHByb2plY3RcbiAgICBjb25zdCBpbmRleCA9IHJlbW92ZWRUb2RvLmlkO1xuICAgIGRlZmF1bHRQcm9qZWN0LnRvZG9zLnNwbGljZShpbmRleCwgMSk7XG4gICAgZGVmYXVsdFByb2plY3QudG9kb3MuZm9yRWFjaCgodG9kbykgPT4gdG9kby5pZCA9IGRlZmF1bHRQcm9qZWN0LnRvZG9zLmluZGV4T2YodG9kbykpO1xuICAgIGNvbnNvbGUubG9nKCdyZW1vdmVkIGZyb20gZGVmYXVsdCcpO1xuICAgIC8vIHJlbW92ZSBmcm9tIGluZGl2aWR1YWwgcHJvamVjdFxuICAgIGNvbnN0IHByb2plY3RJZCA9IHJlbW92ZWRUb2RvLnByb2plY3RJZDtcbiAgICBpZiAocHJvamVjdElkICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gbmFtZWRQcm9qZWN0c1twcm9qZWN0SWRdO1xuICAgICAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0LnRvZG9zLmluZGV4T2YocmVtb3ZlZFRvZG8pO1xuICAgICAgICBwcm9qZWN0LnRvZG9zLnNwbGljZShwcm9qZWN0SW5kZXgsIDEpO1xuICAgICAgICBjb25zb2xlLmxvZygncmVtb3ZlZCBmcm9tIHByb2plY3QnKTtcbiAgICB9XG59IiwiLy8gZmFjdG9yeSB0byBjcmVhdGUgcHJvamVjdHNcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHRpdGxlKSB7XG4gICAgbGV0IHRvZG9zID0gW107XG4gICAgY29uc29sZS5sb2coJ3Byb2plY3QgY3JlYXRlZCcpO1xuICAgIHJldHVybiB7dGl0bGUsIHRvZG9zfVxufVxuXG5leHBvcnQgbGV0IG5hbWVkUHJvamVjdHMgPSBbXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2plY3QobmV3UHJvamVjdCkge1xuICAgIG5hbWVkUHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcbiAgICBuZXdQcm9qZWN0LmlkID0gbmFtZWRQcm9qZWN0cy5pbmRleE9mKG5ld1Byb2plY3QpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChyZW1vdmVkUHJvamVjdCkge1xuICAgIGNvbnN0IGluZGV4ID0gcmVtb3ZlZFByb2plY3QuaWQ7XG4gICAgbmFtZWRQcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIG5hbWVkUHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHByb2plY3QuaWQgPSBuYW1lZFByb2plY3RzLmluZGV4T2YocHJvamVjdCkpO1xuICAgIGNvbnNvbGUubG9nKCdyZW1vdmVkIHByb2plY3QnKTtcbn0iLCIvLyBmYWN0b3J5IHRvIGNyZWF0ZSB0b2Rvc1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIGxldCBjb21wbGV0ZSA9IGZhbHNlO1xuICAgIC8vIHNvbWV0aGluZyBpbiBoZXJlIHRvIGZvcm1hdCB0aGUgZGF0ZVxuICAgIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRlIH1cbn1cblxuLy8gZnVuY3Rpb24gdG8gZWRpdCB0b2RvXG5mdW5jdGlvbiBlZGl0VG9kbyh0b2RvLCBhdHRyaWJ1dGUsIG5ld1ZhbHVlKSB7XG4gICAgLy9pZiBuZXdWYWx1ZSBpcyBhIGRhdGUsIGZvcm1hdCBpdFxuICAgIHRvZG9bYXR0cmlidXRlXSA9IG5ld1ZhbHVlO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL2FwcC9wcm9qZWN0SGFuZGxlcic7XG5pbXBvcnQgeyBhZGRUb2RvLCByZW1vdmVUb2RvLCBkZWZhdWx0UHJvamVjdCB9IGZyb20gJy4vYXBwL3Byb2plY3RIYW5kbGVyJztcbmltcG9ydCB7IGFkZFByb2plY3QsIGNyZWF0ZVByb2plY3QsIHJlbW92ZVByb2plY3QgfSBmcm9tICcuL2FwcC9wcm9qZWN0cyc7XG5pbXBvcnQgeyBjcmVhdGVUb2RvIH0gZnJvbSAnLi9hcHAvdG9kb3MnO1xuXG5sZXQgdG9kb1Rlc3QgPSBjcmVhdGVUb2RvKCd0ZXN0Jyk7XG5jb25zb2xlLmxvZyh0b2RvVGVzdCk7XG5cbmxldCBuZXdQcm9qZWN0ID0gY3JlYXRlUHJvamVjdCgndGVzdCcpO1xuY29uc29sZS5sb2cobmV3UHJvamVjdCk7XG5jb25zb2xlLmxvZyhkZWZhdWx0UHJvamVjdCk7XG5cbmFkZFByb2plY3QobmV3UHJvamVjdCk7XG5hZGRUb2RvKHRvZG9UZXN0LCBuZXdQcm9qZWN0KTtcblxucmVtb3ZlVG9kbyh0b2RvVGVzdCk7XG5jb25zb2xlLmxvZyhuZXdQcm9qZWN0KTtcbmNvbnNvbGUubG9nKGRlZmF1bHRQcm9qZWN0KTtcblxucmVtb3ZlUHJvamVjdChuZXdQcm9qZWN0KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=