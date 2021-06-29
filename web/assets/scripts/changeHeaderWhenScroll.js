const changeHeaderWhenScroll = () => {
  const pageHeader = document.querySelector('header#page-header');
  const scrollHeight = pageHeader.offsetHeight;

  return window.scrollY > scrollHeight
    ? pageHeader.classList.add('scroll')
    : pageHeader.classList.remove('scroll');
};

export { changeHeaderWhenScroll };
