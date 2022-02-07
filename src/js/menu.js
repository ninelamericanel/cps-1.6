import {screenWidth} from "./variable";

const menu = document.querySelector('.popup--left');

function displayMenu () {
  if (screenWidth >= 1366) {
    menu.classList.remove('popup--close');
  } else {
    menu.classList.add('popup--close');
  }
}

displayMenu();
