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

document.addEventListener('DOMContentLoaded', function(){
  appendSvg();
});