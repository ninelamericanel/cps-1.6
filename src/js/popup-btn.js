import {screenWidth} from "./variable";

const openButtons = document.querySelectorAll('.open-btn');
const closeButtons = document.querySelectorAll('.popup__btn-close');
const popupOutside  = document.querySelectorAll('.popup__outside');

const menuPopup = document.getElementById('menu');
const feedbackPopup = document.getElementById('feedback');
const callPopup = document.getElementById('call');

popupOutside.forEach(el => {
  el.addEventListener('click', () => listenerPopup(el, 'add'))
})

openButtons.forEach(btn => {
  btn.addEventListener('click', () => listenerPopup(btn, 'remove'))
});

closeButtons.forEach(btn => {
  btn.addEventListener('click', () => listenerPopup(btn, 'add'))
})

const changerClass = (name, action) => {
  name.classList[action]('popup--close');
}

function listenerPopup (btn, action) {

  if (btn.dataset.name === 'menu' && screenWidth < 1366) {
    changerClass(menuPopup, action);
  } else if (btn.dataset.name === 'feedback') {
    changerClass(feedbackPopup, action);
  } else if (btn.dataset.name === 'call') {
    changerClass(callPopup, action);
  }
};
