const menuOpenButton = document.querySelector("#meun-open-button");
const menuCloseButton = document.querySelector("#meun-close-button");


menuOpenButton.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-meun");
});

menuCloseButton.addEventListener("click", () => {
  document.body.classList.remove("show-mobile-meun");
});

const swiper = new Swiper('.slider-wrapper', {
   loop: true,
   grabCursor:true,
  spacebetween:25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    daynamicBullets:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // breakpoints
  breakpoints: {
  320: { slidesPerView: 1 },
  768: { slidesPerView: 2 },
  1024: { slidesPerView: 3 }
}


});