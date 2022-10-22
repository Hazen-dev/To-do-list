/* eslint-disable no-plusplus */
const date = new Date();
const Monthdate = new Date();
const days = document.getElementsByClassName('content__field-content')[0]; // main days all

function getDayName(dateStr, locale) {
  // getting name of day
  const date1 = new Date(dateStr);
  return date1.toLocaleDateString(locale, {weekday: 'long'});
}

function createElementOne() {
  const e = document.createElement('div'); // create elements
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  e.classList.add('content__day-section'); // add classes to elements
  p1.classList.add('content__field-day');
  p2.classList.add('content__field-day-number');
  p1.classList.add('--nomargin'); // no margin
  p2.classList.add('--nomargin');

  // appending childs
  e.appendChild(p1);
  e.appendChild(p2);
  // return ready element
  return e;
}

function createElement() {
  const thiMonthsDaysCount = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate(); // getting days of months

  //
  //
  //
  Monthdate.setDate(Monthdate.getDate() - 1); // equal days
  for (let index = 0; index < thiMonthsDaysCount; index++) {
    // month day innacuration (30 31 29 28)
    console.log(Monthdate);
    const oneEl = createElementOne();
    oneEl.children[1].innerHTML = index + 1;
    oneEl.children[0].innerHTML = getDayName(Monthdate, 'en-us').slice(0, 3);

    days.appendChild(oneEl);
    Monthdate.setDate(Monthdate.getDate() + 1); // increment day
  }
}

export default function month() {
  // export function
  createElement();
}
