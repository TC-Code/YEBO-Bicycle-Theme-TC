const btnAbout = document.querySelector('.nav__item:nth-child(1)');
const btnWork = document.querySelector('.nav__item:nth-child(3)');
const btnShop = document.querySelector('.nav__item:nth-child(5)');
const btnContact = document.querySelector('.nav__item:nth-child(7)');

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