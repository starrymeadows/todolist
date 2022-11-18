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
/* harmony export */   "addTodo": () => (/* binding */ addTodo)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/app/projects.js");
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos */ "./src/app/todos.js");





// manage projects


function addTodo(title, description, dueDate, priority, project) {
    const newTodo = (0,_todos__WEBPACK_IMPORTED_MODULE_1__.createTodo)(
        title,
        description,
        dueDate,
        priority);
    if (project) {
        newTodo.projectId = project.id;
        project.todos.push(newTodo);
    }
    defaultProject.push(newTodo);
    newTodo.id = defaultProject.indexOf(newTodo);
}

// function deleteTodo(removedTodo) {
//     // remove from default project
//     let index = removedTodo.id;
//     // remove from individual project
// }

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
/* harmony export */   "defaultProject": () => (/* binding */ defaultProject),
/* harmony export */   "namedProjects": () => (/* binding */ namedProjects),
/* harmony export */   "removeProject": () => (/* binding */ removeProject)
/* harmony export */ });
// factory to create projects
function createProject(title) {
    let todos = [];
    return {title, todos}
}

let namedProjects = [];
const defaultProject = createProject('default');

function addProject(title) {
    const newProject = createProject(title);
    namedProjects.push(newProject);
    newProject.id = namedProjects.indexOf(newProject);
}

function removeProject(removedProject) {
    const index = removedProject.id;
    namedProjects.splice(index, 1);
    namedProjects.forEach(project => project.id = namedProjects.indexOf(project));
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


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQW9CO0FBQ3VCO0FBQzFCO0FBQ29COztBQUVyQzs7O0FBR087QUFDUCxvQkFBb0Isa0RBQVU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDTztBQUNQO0FBQ0EsWUFBWTtBQUNaOztBQUVPO0FBQ0E7O0FBRUE7QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNYQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ044QiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2FwcC9wcm9qZWN0SGFuZGxlci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9hcHAvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvYXBwL3RvZG9zLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL3Byb2plY3RzJztcbmltcG9ydCB7IGNyZWF0ZVByb2plY3QgfSBmcm9tICcuL3Byb2plY3RzJztcbmltcG9ydCAnLi90b2Rvcyc7XG5pbXBvcnQgeyBjcmVhdGVUb2RvIH0gZnJvbSAnLi90b2Rvcyc7XG5cbi8vIG1hbmFnZSBwcm9qZWN0c1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcbiAgICBjb25zdCBuZXdUb2RvID0gY3JlYXRlVG9kbyhcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBkdWVEYXRlLFxuICAgICAgICBwcmlvcml0eSk7XG4gICAgaWYgKHByb2plY3QpIHtcbiAgICAgICAgbmV3VG9kby5wcm9qZWN0SWQgPSBwcm9qZWN0LmlkO1xuICAgICAgICBwcm9qZWN0LnRvZG9zLnB1c2gobmV3VG9kbyk7XG4gICAgfVxuICAgIGRlZmF1bHRQcm9qZWN0LnB1c2gobmV3VG9kbyk7XG4gICAgbmV3VG9kby5pZCA9IGRlZmF1bHRQcm9qZWN0LmluZGV4T2YobmV3VG9kbyk7XG59XG5cbi8vIGZ1bmN0aW9uIGRlbGV0ZVRvZG8ocmVtb3ZlZFRvZG8pIHtcbi8vICAgICAvLyByZW1vdmUgZnJvbSBkZWZhdWx0IHByb2plY3Rcbi8vICAgICBsZXQgaW5kZXggPSByZW1vdmVkVG9kby5pZDtcbi8vICAgICAvLyByZW1vdmUgZnJvbSBpbmRpdmlkdWFsIHByb2plY3Rcbi8vIH0iLCIvLyBmYWN0b3J5IHRvIGNyZWF0ZSBwcm9qZWN0c1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QodGl0bGUpIHtcbiAgICBsZXQgdG9kb3MgPSBbXTtcbiAgICByZXR1cm4ge3RpdGxlLCB0b2Rvc31cbn1cblxuZXhwb3J0IGxldCBuYW1lZFByb2plY3RzID0gW107XG5leHBvcnQgY29uc3QgZGVmYXVsdFByb2plY3QgPSBjcmVhdGVQcm9qZWN0KCdkZWZhdWx0Jyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9qZWN0KHRpdGxlKSB7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IGNyZWF0ZVByb2plY3QodGl0bGUpO1xuICAgIG5hbWVkUHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcbiAgICBuZXdQcm9qZWN0LmlkID0gbmFtZWRQcm9qZWN0cy5pbmRleE9mKG5ld1Byb2plY3QpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChyZW1vdmVkUHJvamVjdCkge1xuICAgIGNvbnN0IGluZGV4ID0gcmVtb3ZlZFByb2plY3QuaWQ7XG4gICAgbmFtZWRQcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIG5hbWVkUHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHByb2plY3QuaWQgPSBuYW1lZFByb2plY3RzLmluZGV4T2YocHJvamVjdCkpO1xufSIsIi8vIGZhY3RvcnkgdG8gY3JlYXRlIHRvZG9zXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgbGV0IGNvbXBsZXRlID0gZmFsc2U7XG4gICAgLy8gc29tZXRoaW5nIGluIGhlcmUgdG8gZm9ybWF0IHRoZSBkYXRlXG4gICAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGUgfVxufVxuXG4vLyBmdW5jdGlvbiB0byBlZGl0IHRvZG9cbmZ1bmN0aW9uIGVkaXRUb2RvKHRvZG8sIGF0dHJpYnV0ZSwgbmV3VmFsdWUpIHtcbiAgICAvL2lmIG5ld1ZhbHVlIGlzIGEgZGF0ZSwgZm9ybWF0IGl0XG4gICAgdG9kb1thdHRyaWJ1dGVdID0gbmV3VmFsdWU7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vYXBwL3Byb2plY3RIYW5kbGVyJztcbmltcG9ydCAnLi9hcHAvcHJvamVjdHMnOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==