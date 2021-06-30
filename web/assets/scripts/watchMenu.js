import { toggleMenu } from './toggleMenu.js';
const nav = document.querySelector('#page-header nav');
const toggleBtns = nav.querySelectorAll('.toggle-menu');

const watchMenu = () => {
  for (const toggleBtn of toggleBtns) {
    toggleBtn.addEventListener('click', toggleMenu);
  }
};

export { watchMenu };
