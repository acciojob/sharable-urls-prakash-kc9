// script.js
const h3 = document.querySelector("#url");
const nameInput = document.querySelector("#name");
const yearInput = document.querySelector("#year");
const button = document.querySelector("#button");

button.addEventListener("click", (e) => {
  e.preventDefault(); // safe if button is submit
  const name = nameInput.value.trim();
  const year = yearInput.value.trim();

  const baseURL = "https://localhost:8080/";
  const params = [];
  if (name) params.push(`name=${encodeURIComponent(name)}`);
  if (year) params.push(`year=${encodeURIComponent(year)}`);

  h3.textContent = params.length ? baseURL + "?" + params.join("&") : baseURL;
});
