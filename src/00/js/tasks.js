/* eslint-disable func-names */
/* eslint-disable no-unreachable-loop */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
/* eslint-disable import/prefer-default-export */
// import month from './month';
// firing ebserver
import {searchArray} from './searchBar';

export default function startTaskButton() {}

const menuHide = document.getElementsByClassName('content__right-bar')[0];
const FirstRowArray = []; // array of all used days
const SecondRowArray = []; // array of all used days
const ThirdRowArray = []; // array of all used days

const TasksFactory = function () {
  this.createTask = function (content, color, monthA, startday, endDay) {
    const task = new Task(content, color, monthA, startday, endDay);

    const FreeRowNumber = CountRowNumber(task);
    const styledTask = createStyleTask(task); // create node of task
    const styledTaskWithMargin = countMarginNumber(
      styledTask,
      FreeRowNumber,
      task
    );
    const FactoryArray = [styledTaskWithMargin, task];
    searchArray.push(FactoryArray);
    return FactoryArray;
  };
};

class Task {
  // new task
  constructor(content, color, monthA, startday, endDay) {
    this.color = color;
    this.content = content;
    this.month = monthA;
    this.startDay = startday;
    this.endDay = endDay;
  }
}

function CountRowNumber(objTask) {
  // days
  const longTask = objTask.endDay - objTask.startDay;

  // checking does it have day in array
  function doesHaveInArray(array, startDay) {
    for (let index = 0; index < longTask; index++) {
      if (array.includes(startDay.startDay + index)) return true;
    }
    return false;
  } // does array have days in obj task
  function ArrayTaskPush(array, startDay) {
    let DayByZeroArrayCounter;
    for (let index = 0; index < longTask; index++) {
      array.push(startDay.startDay + index);
      DayByZeroArrayCounter = startDay.startDay + index + 1;
    } // push
    array.push(DayByZeroArrayCounter);
  }

  const FirstRow = doesHaveInArray(FirstRowArray, objTask);
  const SecondRow = doesHaveInArray(SecondRowArray, objTask);
  const ThirdRow = doesHaveInArray(ThirdRowArray, objTask);
  // console.log(SecondRow);
  if (FirstRow === false) {
    ArrayTaskPush(FirstRowArray, objTask);
    // console.log(FirstRow);
    console.log(FirstRowArray);
    // return 'wolny 1 wiersz';
    return 0;
  }
  if (SecondRow === false) {
    ArrayTaskPush(SecondRowArray, objTask);
    console.log(SecondRowArray);
    // return 'wolny 2 wiersz';
    return 1;
  }
  if (ThirdRow === false) {
    ArrayTaskPush(ThirdRowArray, objTask);
    console.log(ThirdRowArray);
    // return 'wolny 3 wiersz';
    return 2;
  }
  alert('wszystkie linie wierszy są zajęte, użyj nie nakładającej sie daty');
}

function createStyleTask(taskObj) {
  const div = document.createElement('div'); // create element
  const p = document.createElement('p');

  div.classList.add('task'); // add main classes
  p.classList.add('task__text');
  div.appendChild(p);
  // console.log(div);
  p.innerHTML = taskObj.content; // append content

  // styling color
  let gradientColor;
  switch (taskObj.color) {
    case 'blue':
      gradientColor =
        'linear-gradient(153deg, #170dce 0%, #5050ad 35%, rgba(0,212,255,1) 100%)';
      break;
    case 'red':
      gradientColor =
        'linear-gradient(144deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)';
      break;
    case 'yellow':
      gradientColor =
        'linear-gradient(144deg, rgba(78,255,0,1) 0%, rgba(252,176,69,1) 100%)';
      break;
    default:
      break;
  }
  // color of tasks
  div.style.background = gradientColor;
  return div; // return ready div
}

function countMarginNumber(nodeObj, RowNum, task) {
  nodeObj.style.marginTop = `${RowNum * 5}rem`;
  const startNum = task.startDay * 8 - 4;
  const widthNum = (task.endDay - task.startDay) * 8;
  nodeObj.style.marginLeft = `${startNum}rem`;
  nodeObj.style.width = `${widthNum}rem`;
  return nodeObj;
}
//
//
//
//
const contentTasks = document.getElementsByClassName('content__tasks')[0];
const taskfactory = new TasksFactory(); // new factory of tasks
const okBtn = document.getElementsByClassName('task__ok-t')[0];
const addBtn = document.getElementsByClassName('content__add')[0];
const MenuOkContent = document.getElementsByClassName('add-task')[0];

addBtn.addEventListener('click', openMenu); // add task menu button
okBtn.addEventListener('click', checkSumbit); // to the ok button

function openMenu() {
  // open and hide menu
  const menu = document.getElementsByClassName('add-task')[0];

  if (menu.style.display !== 'block') {
    menu.style.display = 'block';
    menu.style.pointerEvents = 'all';
  } else {
    menu.style.display = 'none';
    menu.style.pointerEvents = 'none';
  }
  // working of visiblity menu in button
} // open menu if add btn clicked

function checkSumbit() {
  // there variables as args
  let color;
  let content;
  let monthA;
  let startDay;
  let endDay;

  const checkboxes = document.getElementsByClassName('checkbox');
  const callendars = document.getElementsByClassName('task__date-callendar');

  // COLORS
  let isColorSelected = false; // if color was selected or not
  for (let index = 0; index < checkboxes.length; index++) {
    if (checkboxes[index].checked) {
      isColorSelected = true;
      color = checkboxes[index].value;
    }
    // iteration for find .checked input
  }

  // TITLE
  let isAreaFull = false; // if texarea isn't null
  const textarea = document.getElementsByClassName('task__textarea')[0];
  if (textarea.value !== '') {
    isAreaFull = true;
    content = textarea.value;
  } else {
    isAreaFull = false;
  }

  // DATE
  let haveDate = false; // if date isn't null
  const startDate = callendars[0].valueAsDate;
  const endDate = callendars[1].valueAsDate;
  if (startDate !== null && endDate !== null) {
    if (startDate.getTime() < endDate.getTime()) {
      haveDate = true;
      startDay = startDate.getDate();
      endDay = endDate.getDate();
      monthA = startDate.getMonth();
    } else haveDate = false;
  } else {
    haveDate = false;
  }

  // READY
  if (haveDate && isAreaFull && isColorSelected) {
    const task = taskfactory.createTask(
      content,
      color,
      monthA,
      startDay,
      endDay
    );
    const appendedTask = contentTasks.appendChild(task[0]);
    appendedTask.addEventListener('click', openMenuu); // to the ok button
    LoadTaskMenu(appendedTask, task);
    MenuOkContent.style.display = 'none';
    // close creating task menu button
  } else {
    // msg from validating to client
    let msg = '';
    const haveDateMsg = 'add your date or correct date, ';
    const isAreaFullMsg = 'type something in textarea, ';
    const isColorSelectedMsg = 'select any color, ';
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
  const dateMenu = document.getElementsByClassName('content__right-title2')[0];
  const contentMenu = document.getElementsByClassName(
    'content__right-hour-hour'
  )[0];
  const wordsCount = countWords(objTask[1].content);
  task.addEventListener('click', () => {
    dateMenu.innerHTML = `${objTask[1].startDay} day of ${
      objTask[1].month + 1
    } month 2022`;
    // set date information

    contentMenu.innerHTML = objTask[1].content;
    if (wordsCount > 5) {
      contentMenu.style.fontSize = '1.3rem';
    } else {
      contentMenu.style.fontSize = '3rem';
    }
    // set content informations
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
  }
  // else {
  //   menuHide.style.opacity = '0';
  //   menuHide.style.pointerEvents = 'none';
  // }
  // working of visiblity menu in
}
