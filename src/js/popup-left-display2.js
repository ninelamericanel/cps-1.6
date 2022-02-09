
import {screenWidth} from "./variable";

const popup = document.querySelector('.popup--left');

function display () {

  if (screenWidth >= 1366) {
    popup.classList.add('popup--open');
  } else {
    popup.classList.remove('popup--open');
  }
}

display();
