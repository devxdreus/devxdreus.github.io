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


const btnSkill = document.querySelectorAll('.about nav button');
const skillTab = document.getElementsByClassName('skills-set');

btnSkill.forEach((value, key) => {
  value.addEventListener('click', function () {
    btnSkill.forEach((e) => {
      e.classList.remove('active')
    })
    this.classList.add('active');

    for (const skills of skillTab) {

      if (this.dataset.toggle == skills.dataset.skills) {

        let $i = 0;
        for (const skill of skills.children) {
          setTimeout(() => {
            skill.classList.remove('show-transition');

            setTimeout(() => {
              skill.classList.remove('show')
            }, 300 * $i);
          }, 300 * $i);

          $i++;
        }
      }
    }
  })
})