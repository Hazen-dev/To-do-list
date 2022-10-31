/* eslint-disable no-use-before-define */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable import/prefer-default-export */
function Click() {
  this.handlers = []; // observers
}

Click.prototype = {
  subscribe(fn) {
    this.handlers.push(fn);
  },

  unsubscribe(fn) {
    this.handlers = this.handlers.filter((item) => {
      if (item !== fn) {
        return item;
      }
    });
  },

  fire(o, thisObj) {
    const scope = thisObj || window;
    this.handlers.forEach((item) => {
      item.call(scope, o);
    });
  },
};
// code of observer
//
//
//
//
//
//
//
//
function loadTasks() {}
// functions of observer
function changeMonthAndTasks() {
  console.log('zmienio miesiac i taski');
  loadTasks();
}

export const click = new Click();
click.subscribe(changeMonthAndTasks); // event observer listener for chaning month
