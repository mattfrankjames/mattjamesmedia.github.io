function appendSvg() {
  var ajax = new XMLHttpRequest();
  ajax.open('GET', '/svg/svgdefs.svg', true);
  ajax.send();
  ajax.onload = function(e) {
    var div = document.createElement('div');
    div.innerHTML = ajax.responseText;
    document.body.insertBefore(div, document.body.childNodes[0]);
  };
}
function toggleNav() {
  const navTrigger = document.querySelector('.header__navTrigger');
  const nav = document.querySelector('.nav');
  navTrigger.classList.toggle('header__navTrigger--clicked');
  nav.classList.toggle('nav--open');
  navTrigger.classList.contains('header__navTrigger--clicked')
    ? navTrigger.setAttribute('href', '#')
    : navTrigger.setAttribute('href', '#nav');
}

function imgSwap(e) {
  e.preventDefault();
  const imgPath = this.getAttribute('href');
  const hiResImgPath = this.getAttribute('rel');
  const target = document.querySelector('.feature');
  const oldImage = document.querySelector('.feature img');
  const newImage = document.createElement('img');
  newImage.setAttribute('class', 'hide');
  newImage.setAttribute('src', `${imgPath}`);
  newImage.setAttribute('srcset', `${imgPath} 1x, ${hiResImgPath} 2x`);
  newImage.setAttribute('alt', '');
  console.log(newImage);
  //newImage.classList.add('hide');
  target.prepend(newImage);
  newImage.classList.remove('hide');
  oldImage.classList.add('hide');
  oldImage.remove();
  //need to figure out the fade in thing
}

//need to add font-face observer

//need to add a service worker

const thumbnails = document.querySelectorAll('.thumbnails a');
thumbnails.forEach(thumbnail => thumbnail.addEventListener('click', imgSwap));
document.querySelector('.header__navTrigger').addEventListener('click', toggleNav);
document.addEventListener('DOMContentLoaded', function() {
  appendSvg();
});
