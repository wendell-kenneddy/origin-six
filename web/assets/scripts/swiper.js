const swiper = new Swiper(
  '.swiper-container',

  {
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination'
    },
    mouseWheel: true,
    keyboard: true
  }
);

export { swiper };
