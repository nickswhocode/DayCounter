const counter_lbl = document.getElementById("counter");


let quotes = ["You can do it!",
			  "Have a nice day!",
			  "Almost There!",
			  "Keep Going!",
			  "Keep chasing your dream!"]


	const storedValue = localStorage.getItem('day');
	counter_lbl.textContent = storedValue;

	let counter = storedValue;

document.getElementById("check-in-btn").onclick = function() {
	counter++;
	counter_lbl.textContent = counter;

	localStorage.setItem('day', counter);
	showSweetAlert();
}

function showSweetAlert() {
   let quote_today = Math.floor(Math.random()*quotes.length);
   Swal.fire(quotes[quote_today]);
}


