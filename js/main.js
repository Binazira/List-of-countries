// Классная работа. Асинхронность, промисы и HTTP.

// Используя API списка всех стран
// выведите таблицу с информацией о
// всех странах наподобие такой:
// API: https://restcountries.eu/rest/v2/all

let tbody = document.getElementById("tbody");
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
