var clockString = setInterval(clockTick, 1000);


function clockTick() {
	var today = new Date(),
		hour = today.getHours(),
		min = today.getMinutes(),
		sec = today.getSeconds();
		text = zeroPadding(hour) + ":" + zeroPadding(min) + ":" + zeroPadding(sec);
	document.getElementById('time-string').innerText = text;
}

function zeroPadding(n) {
    if (n < 10) {
    	n = "0" + n
    }
    return n;
}
