const btnOpen = document.querySelector(".information__text-btn-open");
const btnClose = document.querySelector(".information__text-btn-close");

const block = document.querySelector(".information__article");

btnOpen.addEventListener("click", () => {
  btnOpen.classList.add("text-btn--hide");
  btnClose.classList.remove("text-btn--hide");

  block.classList.add("information__article--long");
});

btnClose.addEventListener("click", () => {
  btnClose.classList.add("text-btn--hide");
  btnOpen.classList.remove("text-btn--hide");

  block.classList.remove("information__article--long");
});
