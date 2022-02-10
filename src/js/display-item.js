import { screenWidth } from "./variable";

const listBrand = document.querySelectorAll(".repair__item.brand");
const listEquipment = document.querySelectorAll(".repair__item.equipment");

const toDisplay = () => {
  if (screenWidth >= 768 && screenWidth < 1366) {
    listBrand.forEach((el, index) => {
      if (index >= 6) {
        el.classList.add("repair__item--hide");
      }
    });

    listEquipment.forEach((el, index) => {
      if (index >= 3) {
        el.classList.add("repair__item--hide");
      }
    });
  } else if (screenWidth >= 1366) {
    listBrand.forEach((el, index) => {
      if (index >= 8) {
        el.classList.add("repair__item--hide");
      }
    });
    listEquipment.forEach((el, index) => {
      if (index >= 4) {
        el.classList.add("repair__item--hide");
      }
    });
  }
};

toDisplay();
