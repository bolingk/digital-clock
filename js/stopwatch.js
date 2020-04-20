//declare time variables
let running = false;
let sec = 0;
let min = 0;
let hour = 0;
let duration = 0;

//stop watch function: logic to determine next value

function stopWatch() {
	sec++;

	if (sec / 60 === 1) {
		sec = 0;
		min++;
		if (min / 60 === 1) {
			min = 0;
			hour++;
		}
	}

	//display time to screen
	text = intPadding(hour) + ":" + intPadding(min) + ":" + intPadding(sec);
	document.getElementById('time-string').innerText = text;

}


function start() {
	if (!running){
		duration = window.setInterval(stopWatch, 1000);
		running = true;
	}
	else {
		stop();
		reset();
		start();
	}
}

function stop() {
	if (running) {
		window.clearInterval(duration); 
		running = false;		
	}
}

function reset() {
	if (!running) {
		hour = 0;
		min = 0;
		sec = 0;
		duration = 0;
		document.getElementById('time-string').innerText = "00:00:00";
	}
}

function intPadding(n) {
    if (n < 10) {
    	n = "0" + n
    }
    return n;
}

