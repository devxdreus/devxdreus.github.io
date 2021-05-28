// import Typed from 'typed.js';

const nav = document.querySelector('.nav-toggle');
nav.innerHTML = '<span></span><span></span><span></span>';

function navToggle() {
  nav.classList.toggle('active');
  document.querySelector('.nav-menu').classList.toggle('active');
}

const typed = new Typed('#typed', {
  stringsElement: '#typed-strings',
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 3000,
  startDelay: 1000,
  shuffle: true,
  loop: true
});