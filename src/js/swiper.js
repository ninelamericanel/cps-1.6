import Swiper, {Pagination} from "swiper";

import 'swiper/swiper.scss';
import 'swiper/modules/pagination/pagination.scss';

Swiper.use([Pagination]);


window.addEventListener('resize', () => {
  console.log(window.innerWidth);
  return window.innerWidth < 768 ? new Swiper(".swiper-container", {
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      slidesPerView: 'auto',
      slidesPerColumn: 1,
    }) : null;
})

// const ;

// function displaySwiper() {
//   console.log(window.innerWidth);
//
//   return window.innerWidth < 768 ? mySwiper.init() : null;
// }






