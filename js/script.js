document.getElementById("incrementBtn").addEventListener("click", incrementCounter);

document.getElementById("decrementBtn").addEventListener("click", decrementCounter);

document.getElementById("resetBtn").addEventListener("click", resetCounter);

let counterDisplay = document.getElementById("counterDisplay");

let counterValue = 0;

function updateCounterDisplay() {
	counterDisplay.innerHTML = counterValue;
}

function incrementCounter() {
		counterValue++;
		counterDisplay.innerHTML = counterValue;
}

function decrementCounter() {
		counterValue--;
		counterDisplay.innerHTML = counterValue;
}

function resetCounter() {
		counterValue = 0;
		counterDisplay.innerHTML = counterValue;
}
