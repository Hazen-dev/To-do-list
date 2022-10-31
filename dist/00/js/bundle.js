/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/00/js/menuBar.js":
/*!******************************!*\
  !*** ./src/00/js/menuBar.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HideMenu)
/* harmony export */ });
/* eslint-disable no-use-before-define */
var menuHide = document.getElementsByClassName('content__right-bar')[0];
function HideMenu() {
  menuHide.addEventListener('click', openMenu); // to the ok button
}

function openMenu() {
  // open and hide menu
  if (menuHide.style.opacity !== '1') {
    menuHide.style.opacity = '1';
    menuHide.style.pointerEvents = 'all';
  } else {
    menuHide.style.opacity = '0';
    menuHide.style.pointerEvents = 'none';
  } // working of visiblity menu in

}

/***/ }),

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
  // one factory
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
  //

  Monthdate.setDate(Monthdate.getDate() - 1); // equal days

  for (var index = 0; index < thiMonthsDaysCount; index++) {
    // month day in iteration (30 31 29 28)
    var oneEl = createElementOne();
    oneEl.children[1].innerHTML = index + 1;
    oneEl.children[0].innerHTML = getDayName(Monthdate, 'en-us').slice(0, 3);
    days.appendChild(oneEl); // iteration to append childs

    Monthdate.setDate(Monthdate.getDate() + 1); // increment days
  }
}

function month() {
  // set month
  // export function
  createElement(); // full function
}

/***/ }),

/***/ "./src/00/js/monthchange.js":
/*!**********************************!*\
  !*** ./src/00/js/monthchange.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "click": () => (/* binding */ click)
/* harmony export */ });
/* eslint-disable no-use-before-define */

/* eslint-disable consistent-return */

/* eslint-disable array-callback-return */

/* eslint-disable import/prefer-default-export */
function Click() {
  this.handlers = []; // observers
}

Click.prototype = {
  subscribe: function subscribe(fn) {
    this.handlers.push(fn);
  },
  unsubscribe: function unsubscribe(fn) {
    this.handlers = this.handlers.filter(function (item) {
      if (item !== fn) {
        return item;
      }
    });
  },
  fire: function fire(o, thisObj) {
    var scope = thisObj || window;
    this.handlers.forEach(function (item) {
      item.call(scope, o);
    });
  }
}; // code of observer
//
//
//
//
//
//
//
//

function loadTasks() {} // functions of observer


function changeMonthAndTasks() {
  console.log('zmienio miesiac i taski');
  loadTasks();
}

var click = new Click();
click.subscribe(changeMonthAndTasks); // event observer listener for chaning month

/***/ }),

/***/ "./src/00/js/searchBar.js":
/*!********************************!*\
  !*** ./src/00/js/searchBar.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ searchBar),
/* harmony export */   "searchArray": () => (/* binding */ searchArray)
/* harmony export */ });
var searchBarNode = document.getElementsByClassName('header__search-bar')[0];
var searchArray = [];
function searchBar() {
  searchBarNode.addEventListener('keypress', function (event) {
    if (event.key === 'Enter' && searchBarNode.value !== '') {
      // start search
      var isFound = false;
      searchArray.forEach(function (element) {
        if (element[1].content === searchBarNode.value) {
          isFound = true; // alert('Takie zadanie istnieje! Zaczyna się ' + element[1].sta);

          alert("Takie zadanie istnieje! Zaczyna si\u0119 ".concat(element[1].startDay, " dnia ").concat(element[1].month + 1, " miesi\u0105ca 2022 roku. :D"));
        }
      });

      if (!isFound) {
        alert('Nie znaleziono takiego zadania! Pamiętaj, że liczone są także duże litery, znaki specialne (ą, ę, ó itp.) oraz spacje');
      }
    }
  });
}

/***/ }),

/***/ "./src/00/js/tasks.js":
/*!****************************!*\
  !*** ./src/00/js/tasks.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startTaskButton)
/* harmony export */ });
/* harmony import */ var _searchBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./searchBar */ "./src/00/js/searchBar.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable func-names */

/* eslint-disable no-unreachable-loop */

/* eslint-disable no-plusplus */

/* eslint-disable no-param-reassign */

/* eslint-disable no-use-before-define */

/* eslint-disable import/prefer-default-export */
// import month from './month';
// firing ebserver

function startTaskButton() {}
var menuHide = document.getElementsByClassName('content__right-bar')[0];
var FirstRowArray = []; // array of all used days

var SecondRowArray = []; // array of all used days

var ThirdRowArray = []; // array of all used days

var TasksFactory = function TasksFactory() {
  this.createTask = function (content, color, monthA, startday, endDay) {
    var task = new Task(content, color, monthA, startday, endDay);
    var FreeRowNumber = CountRowNumber(task);
    var styledTask = createStyleTask(task); // create node of task

    var styledTaskWithMargin = countMarginNumber(styledTask, FreeRowNumber, task);
    var FactoryArray = [styledTaskWithMargin, task];
    _searchBar__WEBPACK_IMPORTED_MODULE_0__.searchArray.push(FactoryArray);
    return FactoryArray;
  };
};

var Task = /*#__PURE__*/_createClass( // new task
function Task(content, color, monthA, startday, endDay) {
  _classCallCheck(this, Task);

  this.color = color;
  this.content = content;
  this.month = monthA;
  this.startDay = startday;
  this.endDay = endDay;
});

function CountRowNumber(objTask) {
  // days
  var longTask = objTask.endDay - objTask.startDay; // checking does it have day in array

  function doesHaveInArray(array, startDay) {
    for (var index = 0; index < longTask; index++) {
      if (array.includes(startDay.startDay + index)) return true;
    }

    return false;
  } // does array have days in obj task


  function ArrayTaskPush(array, startDay) {
    var DayByZeroArrayCounter;

    for (var index = 0; index < longTask; index++) {
      array.push(startDay.startDay + index);
      DayByZeroArrayCounter = startDay.startDay + index + 1;
    } // push


    array.push(DayByZeroArrayCounter);
  }

  var FirstRow = doesHaveInArray(FirstRowArray, objTask);
  var SecondRow = doesHaveInArray(SecondRowArray, objTask);
  var ThirdRow = doesHaveInArray(ThirdRowArray, objTask); // console.log(SecondRow);

  if (FirstRow === false) {
    ArrayTaskPush(FirstRowArray, objTask); // console.log(FirstRow);

    console.log(FirstRowArray); // return 'wolny 1 wiersz';

    return 0;
  }

  if (SecondRow === false) {
    ArrayTaskPush(SecondRowArray, objTask);
    console.log(SecondRowArray); // return 'wolny 2 wiersz';

    return 1;
  }

  if (ThirdRow === false) {
    ArrayTaskPush(ThirdRowArray, objTask);
    console.log(ThirdRowArray); // return 'wolny 3 wiersz';

    return 2;
  }

  alert('wszystkie linie wierszy są zajęte, użyj nie nakładającej sie daty');
}

function createStyleTask(taskObj) {
  var div = document.createElement('div'); // create element

  var p = document.createElement('p');
  div.classList.add('task'); // add main classes

  p.classList.add('task__text');
  div.appendChild(p); // console.log(div);

  p.innerHTML = taskObj.content; // append content
  // styling color

  var gradientColor;

  switch (taskObj.color) {
    case 'blue':
      gradientColor = 'linear-gradient(153deg, #170dce 0%, #5050ad 35%, rgba(0,212,255,1) 100%)';
      break;

    case 'red':
      gradientColor = 'linear-gradient(144deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)';
      break;

    case 'yellow':
      gradientColor = 'linear-gradient(144deg, rgba(78,255,0,1) 0%, rgba(252,176,69,1) 100%)';
      break;

    default:
      break;
  } // color of tasks


  div.style.background = gradientColor;
  return div; // return ready div
}

function countMarginNumber(nodeObj, RowNum, task) {
  nodeObj.style.marginTop = "".concat(RowNum * 5, "rem");
  var startNum = task.startDay * 8 - 4;
  var widthNum = (task.endDay - task.startDay) * 8;
  nodeObj.style.marginLeft = "".concat(startNum, "rem");
  nodeObj.style.width = "".concat(widthNum, "rem");
  return nodeObj;
} //
//
//
//


var contentTasks = document.getElementsByClassName('content__tasks')[0];
var taskfactory = new TasksFactory(); // new factory of tasks

var okBtn = document.getElementsByClassName('task__ok-t')[0];
var addBtn = document.getElementsByClassName('content__add')[0];
var MenuOkContent = document.getElementsByClassName('add-task')[0];
addBtn.addEventListener('click', openMenu); // add task menu button

okBtn.addEventListener('click', checkSumbit); // to the ok button

function openMenu() {
  // open and hide menu
  var menu = document.getElementsByClassName('add-task')[0];

  if (menu.style.display !== 'block') {
    menu.style.display = 'block';
    menu.style.pointerEvents = 'all';
  } else {
    menu.style.display = 'none';
    menu.style.pointerEvents = 'none';
  } // working of visiblity menu in button

} // open menu if add btn clicked


function checkSumbit() {
  // there variables as args
  var color;
  var content;
  var monthA;
  var startDay;
  var endDay;
  var checkboxes = document.getElementsByClassName('checkbox');
  var callendars = document.getElementsByClassName('task__date-callendar'); // COLORS

  var isColorSelected = false; // if color was selected or not

  for (var index = 0; index < checkboxes.length; index++) {
    if (checkboxes[index].checked) {
      isColorSelected = true;
      color = checkboxes[index].value;
    } // iteration for find .checked input

  } // TITLE


  var isAreaFull = false; // if texarea isn't null

  var textarea = document.getElementsByClassName('task__textarea')[0];

  if (textarea.value !== '') {
    isAreaFull = true;
    content = textarea.value;
  } else {
    isAreaFull = false;
  } // DATE


  var haveDate = false; // if date isn't null

  var startDate = callendars[0].valueAsDate;
  var endDate = callendars[1].valueAsDate;

  if (startDate !== null && endDate !== null) {
    if (startDate.getTime() < endDate.getTime()) {
      haveDate = true;
      startDay = startDate.getDate();
      endDay = endDate.getDate();
      monthA = startDate.getMonth();
    } else haveDate = false;
  } else {
    haveDate = false;
  } // READY


  if (haveDate && isAreaFull && isColorSelected) {
    var task = taskfactory.createTask(content, color, monthA, startDay, endDay);
    var appendedTask = contentTasks.appendChild(task[0]);
    appendedTask.addEventListener('click', openMenuu); // to the ok button

    LoadTaskMenu(appendedTask, task);
    MenuOkContent.style.display = 'none'; // close creating task menu button
  } else {
    // msg from validating to client
    var msg = '';
    var haveDateMsg = 'add your date or correct date, ';
    var isAreaFullMsg = 'type something in textarea, ';
    var isColorSelectedMsg = 'select any color, ';

    if (!haveDate) {
      msg += haveDateMsg;
    }

    if (!isAreaFull) {
      msg += isAreaFullMsg;
    }

    if (!isColorSelected) {
      msg += isColorSelectedMsg;
    }

    msg += 'to create task.';
    alert(msg);
  }
} // valide and create task obj


function LoadTaskMenu(task, objTask) {
  var dateMenu = document.getElementsByClassName('content__right-title2')[0];
  var contentMenu = document.getElementsByClassName('content__right-hour-hour')[0];
  var wordsCount = countWords(objTask[1].content);
  task.addEventListener('click', function () {
    dateMenu.innerHTML = "".concat(objTask[1].startDay, " day of ").concat(objTask[1].month + 1, " month 2022"); // set date information

    contentMenu.innerHTML = objTask[1].content;

    if (wordsCount > 5) {
      contentMenu.style.fontSize = '1.3rem';
    } else {
      contentMenu.style.fontSize = '3rem';
    } // set content informations

  });
}

function countWords(string) {
  return string.split(' ').length + 2;
}

function openMenuu() {
  // open and hide menu
  if (menuHide.style.opacity !== '1') {
    menuHide.style.opacity = '1';
    menuHide.style.pointerEvents = 'all';
  } // else {
  //   menuHide.style.opacity = '0';
  //   menuHide.style.pointerEvents = 'none';
  // }
  // working of visiblity menu in

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
/* harmony import */ var _monthchange__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./monthchange */ "./src/00/js/monthchange.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks */ "./src/00/js/tasks.js");
/* harmony import */ var _searchBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./searchBar */ "./src/00/js/searchBar.js");
/* harmony import */ var _menuBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menuBar */ "./src/00/js/menuBar.js");





(0,_month__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_tasks__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_searchBar__WEBPACK_IMPORTED_MODULE_3__["default"])();
window.onload = _monthchange__WEBPACK_IMPORTED_MODULE_1__["default"];
(0,_menuBar__WEBPACK_IMPORTED_MODULE_4__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map