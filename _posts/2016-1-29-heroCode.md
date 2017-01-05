---
layout: post
title: Lazy load a hero image for big screens 
---
##Do you need that thing for small devices?

Hey there. Does your promo site need a big hero image, but maybe you dont want to serve it to mobile devices to save on band width and increase performance? Use this simple function and call it with 'window.onload = insertImg()'


    function insertImg(){
      var imgTarget = document.getElementsByClassName('heroImg');
      if(window.innerWidth >= 750 && (imgTarget.length>0)){
      var imgPath = imgTarget[0].getAttribute('rel');
      var hero = document.createElement = ('img');
      hero.src = imgPath + ".jpg";
      hero.srcset = imgPath + "@2x.jpg 2x", + imgPath + "@3x.jpg 3x";
      hero.alt = " ";
      imgTarget[0].appendChild(img);
      }
    }
