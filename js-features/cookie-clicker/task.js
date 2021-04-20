'use strict';

const image = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');


cookie.style.width = 200 + 'px';

cookie.onclick = () => {
   if (cookie.style.width == '200px') {
      cookie.style.width = 230 + 'px';
   } else {
      cookie.style.width = 200 + 'px';
   }

   counter.textContent++;
}