const hideBtn = document.querySelectorAll('.repair__text-btn-close');
const openBtn = document.querySelectorAll('.repair__text-btn-open');

const listBrandHide = document.querySelectorAll('.repair__item--hide.brand');
const listEquipmnetHide = document.querySelectorAll('.repair__item--hide.equipment');

function changerClass(elem, action, text) {
  elem.classList[action](text);
}

openBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    changerClass(btn, "add", 'text-btn--hide');
    changerClass(btn.nextElementSibling, 'remove', 'text-btn--hide');
    listener(btn, 'remove')
  })
});

hideBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    changerClass(btn, 'add', 'text-btn--hide');
    changerClass(btn.previousElementSibling, 'remove', 'text-btn--hide');
    listener(btn, 'add')
  })
});


function listener(btn, action) {
  if (btn.dataset.name === 'brand') {
    listBrandHide.forEach(el => {
      changerClass(el, action, 'repair__item--hide');
    })
  } else if (btn.dataset.name === 'equipment') {
    listEquipmnetHide.forEach(el => {
      changerClass(el, action, 'repair__item--hide');
    })
  }

}

