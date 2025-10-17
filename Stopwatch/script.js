let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let reset = document.querySelector(".reset");
let hours = document.querySelector(".hour");
let minutes = document.querySelector(".minute");
let seconds = document.querySelector(".second");

let hour = 0;
let minute = 0;
let second = 0;
let interval = null;

function updateDisplay() {
    hours.textContent = (hour < 10 ? "0" + hour : hour) + ":";
    minutes.textContent = (minute < 10 ? "0" + minute : minute) + ":";
    seconds.textContent = second < 10 ? "0" + second : second;
}

start.addEventListener("click", () => {
    if (interval !== null) return;

    interval = setInterval(() => {
        second++;
        if (second === 60) {
            second = 0;
            minute++;
        }
        if (minute === 60) {
            minute = 0;
            hour++;
        }
        updateDisplay();
    }, 1000);
});

stop.addEventListener("click", () => {
    clearInterval(interval);
    interval = null;
});


reset.addEventListener("click", () => {
    clearInterval(interval);
    interval = null;
    hour = 0;
    minute = 0;
    second = 0;
    updateDisplay();
});
