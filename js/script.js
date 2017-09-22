function appendSvg(){
  var ajax = new XMLHttpRequest();
  ajax.open("GET", "/svg/svgdefs.svg", true);
  ajax.send();
  ajax.onload = function(e) {
    var div = document.createElement("div");
    div.innerHTML = ajax.responseText;
    document.body.insertBefore(div, document.body.childNodes[0]);
  }
}
function toggleNav(){
  var navTrigger = document.querySelector('.header__navTrigger');
  var nav = document.querySelector('.nav');
  navTrigger.classList.toggle('header__navTrigger--clicked');
  nav.classList.toggle('nav--open');
  navTrigger.classList.contains('header__navTrigger--clicked') ? navTrigger.setAttribute('href', "#") : navTrigger.setAttribute('href', "#nav");
}

document.querySelector('.header__navTrigger').addEventListener('click', toggleNav);
document.addEventListener('DOMContentLoaded', function(){
  appendSvg();
});