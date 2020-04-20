let clockString = setInterval(clockTick, 1000);
let today;

function getToday() {
	today = new Date();
}

function displayTime() {
	let hour = today.getHours();
	let	min = today.getMinutes();
	let	sec = today.getSeconds();
	let	text = intPadding(hour) + ":" + intPadding(min) + ":" + intPadding(sec);
	document.getElementById('time-string').innerText = text;
}

function clockTick() {
	getToday();
	displayTime();
}


function intPadding(n) {
    if (n < 10) {
    	n = "0" + n
    }
    return n;
}
