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
/* harmony export */   "clearComplete": () => (/* binding */ clearComplete),
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
    }
    defaultProject.todos.push(todo);
    todo.id = defaultProject.todos.indexOf(todo);
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

function clearComplete(project) {
    console.log(project.todos.length);
    project.todos.forEach((todo) => {
        console.log('iterate');
        if (todo.complete) removeTodo(todo);
    })
}

function clearProject(project) {
    project.todos.forEach((todo) => {
        removeTodo(todo);
    })
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
/* harmony export */   "changeCompletion": () => (/* binding */ changeCompletion),
/* harmony export */   "createTodo": () => (/* binding */ createTodo)
/* harmony export */ });


// get 
function formatDate() {

}

// factory to create todos
function createTodo(title, description, dueDate, priority) {
    let complete = false;
    // something in here to format the date
    return { 
        title, 
        description, 
        dueDate, 
        priority, 
        complete 
    }
}

function changeName(todo, title) {
    todo.title = title;
}

function changeDescription(todo, description) {
    todo.description = description;
}

function changeDate(todo, dueDate) {
    todo.dueDate = dueDate;
}

function changePriority(todo, priority) {
    todo.priority = priority;
}

function changeCompletion(todo) {
    todo.complete = !todo.complete;
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
let todoTest2 = (0,_app_todos__WEBPACK_IMPORTED_MODULE_2__.createTodo)('test');
let todoTest3 = (0,_app_todos__WEBPACK_IMPORTED_MODULE_2__.createTodo)('test');
let todoTest4 = (0,_app_todos__WEBPACK_IMPORTED_MODULE_2__.createTodo)('test');
console.log(todoTest);

let newProject = (0,_app_projects__WEBPACK_IMPORTED_MODULE_1__.createProject)('test');
console.log(newProject);
console.log(_app_projectHandler__WEBPACK_IMPORTED_MODULE_0__.defaultProject);

(0,_app_projects__WEBPACK_IMPORTED_MODULE_1__.addProject)(newProject);
(0,_app_projectHandler__WEBPACK_IMPORTED_MODULE_0__.addTodo)(todoTest, newProject);
(0,_app_projectHandler__WEBPACK_IMPORTED_MODULE_0__.addTodo)(todoTest2, newProject);
(0,_app_projectHandler__WEBPACK_IMPORTED_MODULE_0__.addTodo)(todoTest3, newProject);
(0,_app_projectHandler__WEBPACK_IMPORTED_MODULE_0__.addTodo)(todoTest4, newProject);
console.log(newProject);

(0,_app_todos__WEBPACK_IMPORTED_MODULE_2__.changeCompletion)(todoTest);
(0,_app_todos__WEBPACK_IMPORTED_MODULE_2__.changeCompletion)(todoTest2);
console.log(newProject);

(0,_app_projectHandler__WEBPACK_IMPORTED_MODULE_0__.clearComplete)(newProject);

console.log(newProject);
console.log(_app_projectHandler__WEBPACK_IMPORTED_MODULE_0__.defaultProject);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEQ7O0FBRTFEO0FBQ08sdUJBQXVCLHdEQUFhOztBQUVwQztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixvREFBYTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7OztBQzFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFTzs7QUFFQTtBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ25CcUM7O0FBRXJDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7Ozs7OztVQ3RDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOOEI7QUFDNEQ7QUFDaEI7QUFDZjs7QUFFM0QsZUFBZSxzREFBVTtBQUN6QixnQkFBZ0Isc0RBQVU7QUFDMUIsZ0JBQWdCLHNEQUFVO0FBQzFCLGdCQUFnQixzREFBVTtBQUMxQjs7QUFFQSxpQkFBaUIsNERBQWE7QUFDOUI7QUFDQSxZQUFZLCtEQUFjOztBQUUxQix5REFBVTtBQUNWLDREQUFPO0FBQ1AsNERBQU87QUFDUCw0REFBTztBQUNQLDREQUFPO0FBQ1A7O0FBRUEsNERBQWdCO0FBQ2hCLDREQUFnQjtBQUNoQjs7QUFFQSxrRUFBYTs7QUFFYjtBQUNBLFlBQVksK0RBQWMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2FwcC9wcm9qZWN0SGFuZGxlci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9hcHAvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvYXBwL3RvZG9zLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlUHJvamVjdCwgbmFtZWRQcm9qZWN0cyB9IGZyb20gJy4vcHJvamVjdHMnO1xuXG4vLyBtYW5hZ2UgcHJvamVjdHNcbmV4cG9ydCBjb25zdCBkZWZhdWx0UHJvamVjdCA9IGNyZWF0ZVByb2plY3QoJ2RlZmF1bHQnKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRvZG8odG9kbywgcHJvamVjdCkge1xuICAgIGlmIChwcm9qZWN0KSB7XG4gICAgICAgIHRvZG8ucHJvamVjdElkID0gcHJvamVjdC5pZDtcbiAgICAgICAgcHJvamVjdC50b2Rvcy5wdXNoKHRvZG8pO1xuICAgIH1cbiAgICBkZWZhdWx0UHJvamVjdC50b2Rvcy5wdXNoKHRvZG8pO1xuICAgIHRvZG8uaWQgPSBkZWZhdWx0UHJvamVjdC50b2Rvcy5pbmRleE9mKHRvZG8pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVG9kbyhyZW1vdmVkVG9kbykge1xuICAgIC8vIHJlbW92ZSBmcm9tIGRlZmF1bHQgcHJvamVjdFxuICAgIGNvbnN0IGluZGV4ID0gcmVtb3ZlZFRvZG8uaWQ7XG4gICAgZGVmYXVsdFByb2plY3QudG9kb3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICBkZWZhdWx0UHJvamVjdC50b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB0b2RvLmlkID0gZGVmYXVsdFByb2plY3QudG9kb3MuaW5kZXhPZih0b2RvKSk7XG4gICAgY29uc29sZS5sb2coJ3JlbW92ZWQgZnJvbSBkZWZhdWx0Jyk7XG4gICAgLy8gcmVtb3ZlIGZyb20gaW5kaXZpZHVhbCBwcm9qZWN0XG4gICAgY29uc3QgcHJvamVjdElkID0gcmVtb3ZlZFRvZG8ucHJvamVjdElkO1xuICAgIGlmIChwcm9qZWN0SWQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBuYW1lZFByb2plY3RzW3Byb2plY3RJZF07XG4gICAgICAgIGNvbnN0IHByb2plY3RJbmRleCA9IHByb2plY3QudG9kb3MuaW5kZXhPZihyZW1vdmVkVG9kbyk7XG4gICAgICAgIHByb2plY3QudG9kb3Muc3BsaWNlKHByb2plY3RJbmRleCwgMSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZW1vdmVkIGZyb20gcHJvamVjdCcpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyQ29tcGxldGUocHJvamVjdCkge1xuICAgIGNvbnNvbGUubG9nKHByb2plY3QudG9kb3MubGVuZ3RoKTtcbiAgICBwcm9qZWN0LnRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2l0ZXJhdGUnKTtcbiAgICAgICAgaWYgKHRvZG8uY29tcGxldGUpIHJlbW92ZVRvZG8odG9kbyk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gY2xlYXJQcm9qZWN0KHByb2plY3QpIHtcbiAgICBwcm9qZWN0LnRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgICAgcmVtb3ZlVG9kbyh0b2RvKTtcbiAgICB9KVxufSIsIi8vIGZhY3RvcnkgdG8gY3JlYXRlIHByb2plY3RzXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdCh0aXRsZSkge1xuICAgIGxldCB0b2RvcyA9IFtdO1xuICAgIGNvbnNvbGUubG9nKCdwcm9qZWN0IGNyZWF0ZWQnKTtcbiAgICByZXR1cm4ge3RpdGxlLCB0b2Rvc31cbn1cblxuZXhwb3J0IGxldCBuYW1lZFByb2plY3RzID0gW107XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9qZWN0KG5ld1Byb2plY3QpIHtcbiAgICBuYW1lZFByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG4gICAgbmV3UHJvamVjdC5pZCA9IG5hbWVkUHJvamVjdHMuaW5kZXhPZihuZXdQcm9qZWN0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVByb2plY3QocmVtb3ZlZFByb2plY3QpIHtcbiAgICBjb25zdCBpbmRleCA9IHJlbW92ZWRQcm9qZWN0LmlkO1xuICAgIG5hbWVkUHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICBuYW1lZFByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiBwcm9qZWN0LmlkID0gbmFtZWRQcm9qZWN0cy5pbmRleE9mKHByb2plY3QpKTtcbiAgICBjb25zb2xlLmxvZygncmVtb3ZlZCBwcm9qZWN0Jyk7XG59IiwiaW1wb3J0IGZvcm1hdCBmcm9tIFwiZGF0ZS1mbnMvZm9ybWF0XCI7XG5cbi8vIGdldCBcbmZ1bmN0aW9uIGZvcm1hdERhdGUoKSB7XG5cbn1cblxuLy8gZmFjdG9yeSB0byBjcmVhdGUgdG9kb3NcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICBsZXQgY29tcGxldGUgPSBmYWxzZTtcbiAgICAvLyBzb21ldGhpbmcgaW4gaGVyZSB0byBmb3JtYXQgdGhlIGRhdGVcbiAgICByZXR1cm4geyBcbiAgICAgICAgdGl0bGUsIFxuICAgICAgICBkZXNjcmlwdGlvbiwgXG4gICAgICAgIGR1ZURhdGUsIFxuICAgICAgICBwcmlvcml0eSwgXG4gICAgICAgIGNvbXBsZXRlIFxuICAgIH1cbn1cblxuZnVuY3Rpb24gY2hhbmdlTmFtZSh0b2RvLCB0aXRsZSkge1xuICAgIHRvZG8udGl0bGUgPSB0aXRsZTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlRGVzY3JpcHRpb24odG9kbywgZGVzY3JpcHRpb24pIHtcbiAgICB0b2RvLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG59XG5cbmZ1bmN0aW9uIGNoYW5nZURhdGUodG9kbywgZHVlRGF0ZSkge1xuICAgIHRvZG8uZHVlRGF0ZSA9IGR1ZURhdGU7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVByaW9yaXR5KHRvZG8sIHByaW9yaXR5KSB7XG4gICAgdG9kby5wcmlvcml0eSA9IHByaW9yaXR5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlQ29tcGxldGlvbih0b2RvKSB7XG4gICAgdG9kby5jb21wbGV0ZSA9ICF0b2RvLmNvbXBsZXRlO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL2FwcC9wcm9qZWN0SGFuZGxlcic7XG5pbXBvcnQgeyBhZGRUb2RvLCByZW1vdmVUb2RvLCBkZWZhdWx0UHJvamVjdCwgY2xlYXJDb21wbGV0ZSB9IGZyb20gJy4vYXBwL3Byb2plY3RIYW5kbGVyJztcbmltcG9ydCB7IGFkZFByb2plY3QsIGNyZWF0ZVByb2plY3QsIHJlbW92ZVByb2plY3QgfSBmcm9tICcuL2FwcC9wcm9qZWN0cyc7XG5pbXBvcnQgeyBjcmVhdGVUb2RvLCBjaGFuZ2VDb21wbGV0aW9uIH0gZnJvbSAnLi9hcHAvdG9kb3MnO1xuXG5sZXQgdG9kb1Rlc3QgPSBjcmVhdGVUb2RvKCd0ZXN0Jyk7XG5sZXQgdG9kb1Rlc3QyID0gY3JlYXRlVG9kbygndGVzdCcpO1xubGV0IHRvZG9UZXN0MyA9IGNyZWF0ZVRvZG8oJ3Rlc3QnKTtcbmxldCB0b2RvVGVzdDQgPSBjcmVhdGVUb2RvKCd0ZXN0Jyk7XG5jb25zb2xlLmxvZyh0b2RvVGVzdCk7XG5cbmxldCBuZXdQcm9qZWN0ID0gY3JlYXRlUHJvamVjdCgndGVzdCcpO1xuY29uc29sZS5sb2cobmV3UHJvamVjdCk7XG5jb25zb2xlLmxvZyhkZWZhdWx0UHJvamVjdCk7XG5cbmFkZFByb2plY3QobmV3UHJvamVjdCk7XG5hZGRUb2RvKHRvZG9UZXN0LCBuZXdQcm9qZWN0KTtcbmFkZFRvZG8odG9kb1Rlc3QyLCBuZXdQcm9qZWN0KTtcbmFkZFRvZG8odG9kb1Rlc3QzLCBuZXdQcm9qZWN0KTtcbmFkZFRvZG8odG9kb1Rlc3Q0LCBuZXdQcm9qZWN0KTtcbmNvbnNvbGUubG9nKG5ld1Byb2plY3QpO1xuXG5jaGFuZ2VDb21wbGV0aW9uKHRvZG9UZXN0KTtcbmNoYW5nZUNvbXBsZXRpb24odG9kb1Rlc3QyKTtcbmNvbnNvbGUubG9nKG5ld1Byb2plY3QpO1xuXG5jbGVhckNvbXBsZXRlKG5ld1Byb2plY3QpO1xuXG5jb25zb2xlLmxvZyhuZXdQcm9qZWN0KTtcbmNvbnNvbGUubG9nKGRlZmF1bHRQcm9qZWN0KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=