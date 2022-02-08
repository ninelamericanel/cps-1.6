const openButtons = document.querySelectorAll('.open-btn');
const popups = document.querySelectorAll('.popup');


console.log(popups);

openButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    console.log('click', btn);
  })
})
