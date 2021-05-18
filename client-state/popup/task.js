'use strict';

const modal = document.getElementById('subscribe-modal');
const closeModal = document.querySelector('.modal__close_times');
if (!document.cookie.includes("true")) {
   modal.classList.add('modal_active');
}

closeModal.addEventListener('click', () => {
   modal.classList.remove('modal_active');
   document.cookie = "closed=true";
})
//console.log(document.cookie);