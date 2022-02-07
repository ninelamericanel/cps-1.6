import Swiper, {Pagination} from "swiper";

import {screenWidth} from "./variable";

import 'swiper/swiper.scss';
import 'swiper/modules/pagination/pagination.scss';

Swiper.use([Pagination]);

function viewSwiper () {
  return screenWidth < 768 ? new Swiper(".swiper-container", {
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    slidesPerView: 'auto',
    slidesPerColumn: 1,
  }) : console.log('!!!');
}

viewSwiper();

window.addEventListener('resize', viewSwiper);






