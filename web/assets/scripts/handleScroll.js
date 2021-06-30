import { handleBackToTopBtn } from './handleBackToTopBtn.js';
import { changeHeaderWhenScroll } from './changeHeaderWhenScroll.js';
import { watchActiveSection } from './watchActiveSection.js';

const handleScroll = () => {
  window.addEventListener('scroll', e => {
    changeHeaderWhenScroll();
    handleBackToTopBtn();
    watchActiveSection();
  });
};

export { handleScroll };
