import {screenWidth} from "./variable";

const popup = document.querySelector('.popup--left');

function display () {
  console.log(screenWidth < 1366)
  if (screenWidth < 1366) {
    popup.classList.add('popup--close');
  } else {
    popup.classList.remove('popup--close');
  }
}

display();
