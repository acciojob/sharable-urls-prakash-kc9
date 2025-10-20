// your code here
let h3 = querySelector("#url");

let submit = querySelector("#submit");


submit.addEventListener('click' , ()=>{
	let name = document.querySelector('#name').value;
	let year = document.querySelector('#year').value;
	let temp = `https://localhost:8080/${name} ${year}` 
	h3.textContent = 
})