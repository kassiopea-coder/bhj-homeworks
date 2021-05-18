'use strict';

const signin = document.getElementById('signin');
const signinbtn = document.getElementById('signin__btn');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');

if (localStorage.getItem('user_id')) {
   welcome.classList.add('welcome_active');
   userId.innerText = localStorage.getItem('user_id');
} else {
   signin.classList.add('signin_active');
}


signinbtn.addEventListener('click', (event) => {
   const autorizeForm = document.getElementById('signin__form');
   let formData = new FormData(autorizeForm);

   event.preventDefault();

   let xhr = new XMLHttpRequest();
   xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');

   xhr.onload = () => {
      let serverFedback = JSON.parse(xhr.responseText);

      if (serverFedback.success === false) {
         alert("«Неверный логин/пароль»")
      } else {
         localStorage.setItem('user_id', serverFedback['user_id']);
         signin.classList.remove('signin_active');

         welcome.classList.add('welcome_active');
         userId.innerText = localStorage.getItem('user_id');
      }
   }

   xhr.send(formData);
})