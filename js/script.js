const burger = document.querySelector('.burger');
const burgerNav = document.querySelector('.nav-burger');
const burgerBars = document.querySelector('.fa-bars');
const burgerAngleUp = document.querySelector('.fa-times');

burger.addEventListener('click', () => {
  burgerBars.classList.toggle('show');
  burgerAngleUp.classList.toggle('show');
  burgerNav.classList.toggle('show');
})

const burgerBtnAbout = document.querySelector('.nav-burger .nav__item:nth-child(1) a');
const burgerBtnWork = document.querySelector('.nav-burger .nav__item:nth-child(2) a');
const burgerBtnShop = document.querySelector('.nav-burger .nav__item:nth-child(3) a');
const burgerBtnContact = document.querySelector('.nav-burger .nav__item:nth-child(4) a');

burgerBtnAbout.addEventListener('click', (event) => {
  window.scrollTo({
    top: 777,
    left: 0,
    behavior: 'smooth'
  });
  event.preventDefault()
});

burgerBtnWork.addEventListener('click', (event) => {
  window.scrollTo({
    top: document.querySelector('.work').offsetTop,
    left: 0,
    behavior: 'smooth'
  });
  event.preventDefault()
});

burgerBtnShop.addEventListener('click', (event) => {
  window.scrollTo({
    top: document.querySelector('.shop').offsetTop,
    left: 0,
    behavior: 'smooth'
  });
  event.preventDefault()
});

burgerBtnContact.addEventListener('click', (event) => {
  window.scrollTo({
    top: document.body.scrollHeight,
    left: 0,
    behavior: 'smooth'
  });
  event.preventDefault()
});

const btnAbout = document.querySelector('.nav__item:nth-child(1) a');
const btnWork = document.querySelector('.nav__item:nth-child(3) a');
const btnShop = document.querySelector('.nav__item:nth-child(5) a');
const btnContact = document.querySelector('.nav__item:nth-child(7) a');

btnAbout.addEventListener('click', (event) => {
  window.scrollTo({
    top: innerHeight,
    left: 0,
    behavior: 'smooth'
  });
  event.preventDefault()
});

btnWork.addEventListener('click', (event) => {
  window.scrollTo({
    top: document.querySelector('.work').offsetTop,
    left: 0,
    behavior: 'smooth'
  });
  event.preventDefault()
});

btnShop.addEventListener('click', (event) => {
  window.scrollTo({
    top: document.querySelector('.shop').offsetTop,
    left: 0,
    behavior: 'smooth'
  });
  event.preventDefault()
});

btnContact.addEventListener('click', (event) => {
  window.scrollTo({
    top: document.body.scrollHeight,
    left: 0,
    behavior: 'smooth'
  });
  event.preventDefault()
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

//Twiter - quotes
const quoteList = [{
    img: '../images/twitter/twitter-icon.png',
    author: 'AOD New York  @aod  /  35 min',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor blandit sem at finibus. Donec consequat convallis magna, in accumsan odio euismod vitae.'
  },
  {
    img: '../images/twitter/twitter-icon.png',
    author: 'WAT London  @wat  /  5 min',
    quote: 'Ut nec felis purus. In hac habitasse platea dictumst. Nulla mattis massa non nulla rhoncus commodo.'
  },
  {
    img: '../images/twitter/twitter-icon.png',
    author: 'ZPO Oslo  @zpo  /  47 min',
    quote: 'Suspendisse mi tellus, vulputate non sagittis ac, sollicitudin nec orci. Sed in augue sit amet est varius porta. '
  }
];

const carousel = document.querySelector('.carousel');
const quoteOne = document.querySelector('li[data-slide="slide1"] p');
const authorOne = document.querySelector('li[data-slide="slide1"] h6');
const quoteTwo = document.querySelector('li[data-slide="slide2"] p');
const authorTwo = document.querySelector('li[data-slide="slide2"] h6');
const quoteThree = document.querySelector('li[data-slide="slide3"] p');
const authorThree = document.querySelector('li[data-slide="slide3"] h6');

quoteOne.textContent = quoteList[0].quote;
authorOne.textContent = quoteList[0].author;
quoteTwo.textContent = quoteList[1].quote;
authorTwo.textContent = quoteList[1].author;
quoteThree.textContent = quoteList[2].quote;
authorThree.textContent = quoteList[2].author;

// Quote change
const time = 5000;

function changeSlide() {
  let firstSlide = document.querySelector('.carousel').firstElementChild;
  let lastSlide = document.querySelector('.carousel').lastElementChild;
  carousel.insertBefore(lastSlide, firstSlide);
}
const carouselInterval = setInterval(changeSlide, time);

// Button "Go To Top"
const btnTop = document.querySelector('.btn-top');

const goToTop = () => {
  window.addEventListener('scroll', (event) => {
    aboutDistanceFromTop = document.querySelector('.about').offsetTop;
    scrollValue = window.scrollY;
    if (scrollValue > aboutDistanceFromTop) {
      btnTop.style.display = 'block';
    } else {
      btnTop.style.display = 'none';
    }
    event.preventDefault();
  });
}
goToTop()

btnTop.addEventListener('click', (event) => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
  event.preventDefault()
})