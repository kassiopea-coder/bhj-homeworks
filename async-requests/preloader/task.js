'use strict';

const loader = document.getElementById("loader");
const items = document.getElementById("items");

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com");
xhr.send();
xhr.onreadystatechange = function () {
   if (xhr.readyState === 4 && xhr.status === 200) {
      loader.classList.remove("loader_active");

      const answer = JSON.parse(xhr.responseText);
      const valutes = answer.response.Valute;

      for (let key in valutes) {
         let item = document.createElement("div");
         item.className = "item";
         let itemCode = document.createElement("div");
         itemCode.className = "item__code";
         itemCode.append(`${valutes[key].CharCode}`);
         let itemValue = document.createElement("div");
         itemValue.className = "item__value";
         itemValue.append(`${valutes[key].Value}`);
         let itemCurrency = document.createElement("div");
         itemCurrency.className = "item__currency";
         itemCurrency.append("руб.");

         item.appendChild(itemCode);
         item.appendChild(itemValue);
         item.appendChild(itemCurrency);

         items.appendChild(item);
      }
   }
}