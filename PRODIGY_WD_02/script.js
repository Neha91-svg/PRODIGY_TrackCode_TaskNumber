// All element selectors
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const milisecond = document.getElementById("milisecond");

const startButton = document.getElementById("startButton");
const pauseButton = document.getElementById("pauseButton");
const resetButton = document.getElementById("resetButton");

// Variables to keep time
let hr = 0, min = 0, sec = 0, ms = 0;
let interval = null;
let isRunning = false;

// Function to update stopwatch time on screen
function updateTime() {
    ms++;
    if (ms === 100) {
        ms = 0;
        sec++;
    }
    if (sec === 60) {
        sec = 0;
        min++;
    }
    if (min === 60) {
        min = 0;
        hr++;
    }

    // Display with two digits
    milisecond.innerText = ms < 10 ? "0" + ms : ms;
    second.innerText = sec < 10 ? "0" + sec : sec;
    minute.innerText = min < 10 ? "0" + min : min;
    hour.innerText = hr < 10 ? "0" + hr : hr;
}

// Start button
startButton.onclick = () => {
    if (!isRunning) {
        interval = setInterval(updateTime, 10); // 10ms = 0.01 second
        isRunning = true;
    }
};

// Pause button
pauseButton.onclick = () => {
    clearInterval(interval);
    isRunning = false;
};

// Reset button
resetButton.onclick = () => {
    clearInterval(interval);
    isRunning = false;
    hr = min = sec = ms = 0;
    hour.innerText = "00";
    minute.innerText = "00";
    second.innerText = "00";
    milisecond.innerText = "00";
};
