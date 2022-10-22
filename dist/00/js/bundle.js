/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/00/js/month.js":
/*!****************************!*\
  !*** ./src/00/js/month.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ month)
/* harmony export */ });
/* eslint-disable no-plusplus */
var date = new Date();
var Monthdate = new Date();
var days = document.getElementsByClassName('content__field-content')[0]; // main days all

function getDayName(dateStr, locale) {
  // getting name of day
  var date1 = new Date(dateStr);
  return date1.toLocaleDateString(locale, {
    weekday: 'long'
  });
}

function createElementOne() {
  var e = document.createElement('div'); // create elements

  var p1 = document.createElement('p');
  var p2 = document.createElement('p');
  e.classList.add('content__day-section'); // add classes to elements

  p1.classList.add('content__field-day');
  p2.classList.add('content__field-day-number');
  p1.classList.add('--nomargin'); // no margin

  p2.classList.add('--nomargin'); // appending childs

  e.appendChild(p1);
  e.appendChild(p2); // return ready element

  return e;
}

function createElement() {
  var thiMonthsDaysCount = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(); // getting days of months
  //
  //
  //

  Monthdate.setDate(Monthdate.getDate() - 1); // equal days

  for (var index = 0; index < thiMonthsDaysCount; index++) {
    // month day innacuration (30 31 29 28)
    console.log(Monthdate);
    var oneEl = createElementOne();
    oneEl.children[1].innerHTML = index + 1;
    oneEl.children[0].innerHTML = getDayName(Monthdate, 'en-us').slice(0, 3);
    days.appendChild(oneEl);
    Monthdate.setDate(Monthdate.getDate() + 1); // increment day
  }
}

function month() {
  // export function
  createElement();
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
/*!**************************!*\
  !*** ./src/00/js/app.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _month__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./month */ "./src/00/js/month.js");

(0,_month__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map