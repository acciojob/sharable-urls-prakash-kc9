let h3 = document.querySelector("#url");
let form = document.querySelector("#form");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // prevent page reload

  let name = document.querySelector("#name").value.trim();
  let year = document.querySelector("#year").value.trim();

  let baseURL = "https://localhost:8080/";
  let query = [];

  if (name) query.push(`name=${name}`);
  if (year) query.push(`year=${year}`);

  let finalURL = baseURL;
  if (query.length > 0) finalURL += "?" + query.join("&");

  h3.textContent = finalURL;
});
