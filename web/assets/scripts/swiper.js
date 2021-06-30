const swiper = new Swiper(
  '.swiper-container',

  {
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination'
    },
    grabCursor: true,
    mouseWheel: true,
    keyboard: true,
    breakpoints: {
      767: {
        slidesPerView: 2,
        setWrapperWidth: true
      }
    }
  }
);

export { swiper };
