const backToTopBtn = document.querySelector('.back-to-top');

const handleBackToTopBtn = () => {
  return window.scrollY >= 560
    ? backToTopBtn.classList.add('show')
    : backToTopBtn.classList.remove('show');
};

export { handleBackToTopBtn };
