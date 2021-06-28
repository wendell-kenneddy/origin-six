import { toggleMenu } from './toggleMenu.js';

const watchNavLinks = () => {
  const navLinks = document.querySelectorAll('#page-header nav ul li a');

  for (const link of navLinks) {
    link.addEventListener('click', e => toggleMenu());
  }
};

export { watchNavLinks };
