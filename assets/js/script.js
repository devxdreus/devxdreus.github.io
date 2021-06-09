// import Typed from 'typed.js';

// nav
const nav = document.querySelector('.nav-toggle');
nav.innerHTML = '<span></span><span></span><span></span>';

function navToggle() {
  nav.classList.toggle('active');
  document.querySelector('.nav-menu').classList.toggle('active');
}

// typed.js
const typed = new Typed('#typed', {
  stringsElement: '#typed-strings',
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 3000,
  startDelay: 1000,
  shuffle: true,
  loop: true
});


// skill-nav
const btnSkill = document.querySelectorAll('.about nav button');
const skillGen = document.getElementById('skill-gen');
const skillTech = document.getElementById('skill-tech');

const skillDisplay = (show, hide) => {
  show.classList.add('active');
  hide.classList.remove('active');

  let $i = 0;
  for (const skill of hide.children) {

    setTimeout(() => {
      skill.classList.remove('show-transition');
    }, 200 * $i);

    setTimeout(() => {
      skill.classList.remove('show');
    }, 200 * (show.children.length + 1));

    $i++;
  }

  setTimeout(() => {
    for (const skill of show.children) {
      skill.classList.add('show')
    }

    let $i = 0;
    for (const skill of show.children) {

      setTimeout(() => {
        skill.classList.add('show-transition');
      }, 200 * ($i + 2));
      $i++;
    }
  }, 200 * show.children.length);
}

btnSkill.forEach((value, key) => {
  value.addEventListener('click', function () {
    btnSkill.forEach((e) => {
      e.classList.remove('active')
    })
    this.classList.add('active');

    if (this.dataset.toggle == 'general') {
      if (!skillGen.classList.contains('active')) {
        skillDisplay(skillGen, skillTech);
      }

    } else {
      if (!skillTech.classList.contains('active')) {
        skillDisplay(skillTech, skillGen);
      }
    }
  })
})


// skill slider width
const skillSlider = document.querySelectorAll('.slider-container .slider');

skillSlider.forEach(el => {
  el.style.width = el.dataset.value;
})