const swiper = new Swiper(
  '.swiper-container',

  {
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination'
    },
    grabCursor: true,
    mouseWheel: true,
    keyboard: true
  }
);

export { swiper };
