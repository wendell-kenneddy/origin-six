import { handleBackToTopBtn } from './handleBackToTopBtn.js';
import { changeHeaderWhenScroll } from './changeHeaderWhenScroll.js';

const handleScroll = () => {
  window.addEventListener('scroll', e => {
    changeHeaderWhenScroll();
    handleBackToTopBtn();
  });
};

export { handleScroll };
