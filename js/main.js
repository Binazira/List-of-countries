// Классная работа. Асинхронность, промисы и HTTP.

// Используя API списка всех стран
// выведите таблицу с информацией о
// всех странах наподобие такой:
// API: https://restcountries.eu/rest/v2/all

let tbody = document.getElementById("tbody");
let code = document.getElementById("code");
let name = document.getElementById("name");
let flag = document.getElementById("flag");
let population = document.getElementById("population");
let capital = document.getElementById("capital");
let continents = document.getElementById("continents");
let td = document.createElement("td");
td.id = "td";

fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((item) => {
      tbody.innerHTML += `
          <tr>
              <td>${item.ccn3}</td> 
              <td>${item.name.common}</td> 
              <td>${item.flag}</td> 
              <td>${item.population}</td> 
              <td>${item.capital}</td> 
              <td>${item.continents}</td>
          </tr>`;
    });
  })
  .catch((error) => {
    console.log(error);
  });
