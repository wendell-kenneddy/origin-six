import { toggleMenu } from './toggleMenu.js';
const nav = document.querySelector('#page-header nav');

const watchMenu = () => {
  const toggleBtns = nav.querySelectorAll('.toggle-menu');

  for (const toggleBtn of toggleBtns) {
    toggleBtn.addEventListener('click', toggleMenu);
  }
};

export { watchMenu };
