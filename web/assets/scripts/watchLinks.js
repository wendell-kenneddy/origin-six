const nav = document.querySelector('#page-header nav');
const navLinks = document.querySelectorAll('#page-header nav ul li a');

const watchNavLinks = () => {
  for (const link of navLinks) {
    link.addEventListener('click', e => nav.classList.remove('show'));
  }
};

export { watchNavLinks };
