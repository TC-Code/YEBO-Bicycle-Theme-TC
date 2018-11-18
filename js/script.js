const btnAbout = document.querySelector('.nav__item:nth-child(1) a');
const btnWork = document.querySelector('.nav__item:nth-child(3) a');
const btnShop = document.querySelector('.nav__item:nth-child(5) a');
const btnContact = document.querySelector('.nav__item:nth-child(7) a');

btnAbout.addEventListener('click', function () {
  window.scrollTo({
    top: innerHeight,
    left: 0,
    behavior: 'smooth'
  });

});

btnWork.addEventListener('click', function () {
  window.scrollTo({
    top: innerHeight + 470,
    left: 0,
    behavior: 'smooth'
  });
});

btnShop.addEventListener('click', function () {
  window.scrollTo({
    top: innerHeight + 470 + 1800 + 470,
    left: 0,
    behavior: 'smooth'
  });
});

btnContact.addEventListener('click', function () {

  window.scrollTo({
    top: innerHeight + document.body.scrollHeight,
    left: 0,
    behavior: 'smooth'
  });
});

//Scroll - slide icons in 'Work' section.
const bikeIcon = document.querySelector('.oliva img[alt="bike icon"]');
const vintageIcon = document.querySelector('.boriosa img[alt="vintage icon"]');
const sinceIcon = document.querySelector('.hulot img[alt="bicycles since 1926 icon"]');

function changeIcon() {
  const scrollHeight = window.scrollY;
  const olivaDistanceFromTop = document.querySelector('.work .oliva').offsetTop;
  const boriosaDistanceFromTop = document.querySelector('.work .boriosa').offsetTop;
  const hulotDistanceFromTop = document.querySelector('.work .hulot').offsetTop;

  if (scrollHeight > olivaDistanceFromTop) {
    bikeIcon.style = 'left: 50%'
  };

  if (scrollHeight > boriosaDistanceFromTop) {
    vintageIcon.style = 'right: 50%'
  }

  if (scrollHeight > hulotDistanceFromTop) {
    sinceIcon.style = 'left: 50%'
  }

  if (scrollHeight < 100) {
    bikeIcon.style = 'left: -50%';
    vintageIcon.style = 'right: -50%';
    sinceIcon.style = 'left: -50%'
  }
}
window.addEventListener('scroll', changeIcon);