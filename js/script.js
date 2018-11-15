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