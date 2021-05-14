'use strict';

const pollTitle = document.getElementById("poll__title");
const pollAnswers = document.getElementById("poll__answers");

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();
xhr.onreadystatechange = function () {
   if (this.readyState === 4 && this.status === 200) {
      let response = JSON.parse(this.responseText);

      pollTitle.append(response.data.title);

      response.data.answers.forEach(element => {
         let btn = document.createElement("button");
         btn.className = "poll__answer";
         btn.append(element);
         pollAnswers.appendChild(btn);
      });

      const answer = Array.from(document.querySelectorAll(".poll__answer"));
      answer.forEach(value => {
         value.addEventListener("click", () => {
            alert("Спасибо, ваш голос засчитан!");
         });
      });
   }
}