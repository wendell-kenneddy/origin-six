const handleBackToTopBtn = () => {
  const backToTopBtn = document.querySelector('.back-to-top');

  return window.scrollY >= 560
    ? backToTopBtn.classList.add('show')
    : backToTopBtn.classList.remove('show');
};

export { handleBackToTopBtn };
