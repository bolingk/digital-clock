var clockString = setInterval(clockTick, 1000),
	today;

function getToday() {
	today = new Date();
}

function displayTime() {
	var hour = today.getHours(),
		min = today.getMinutes(),
		sec = today.getSeconds(),
		text = intPadding(hour) + ":" + intPadding(min) + ":" + intPadding(sec);
	document.getElementById('time-string').innerText = text;
}

function clockTick() {
	getToday();
	displayTime();
}

function stopTick() {
	clearInterval(clockString);
}

function stopWatchZero() {
	clearInterval(clockString);
	getToday();
	today.setHours(0);
	today.setMinutes(0);
	today.setSeconds(0);
	displayTime();
}

function intPadding(n) {
    if (n < 10) {
    	n = "0" + n
    }
    return n;
}