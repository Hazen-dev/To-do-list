/* eslint-disable no-use-before-define */
const menuHide = document.getElementsByClassName('content__right-bar')[0];

export default function HideMenu() {
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
  }
  // working of visiblity menu in
}
