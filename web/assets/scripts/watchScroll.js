const pageHeader = document.querySelector('header#page-header');
const scrollHeight = pageHeader.offsetHeight;

const watchScroll = () => {
  window.addEventListener('scroll', e => {
    return window.scrollY > scrollHeight
      ? pageHeader.classList.add('scroll')
      : pageHeader.classList.remove('scroll');
  });
};

export { watchScroll };
