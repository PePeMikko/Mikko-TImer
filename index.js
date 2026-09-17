const timer = document.querySelector(".timer");
const btnStart = document.getElementById("start");
const btnStop = document.getElementById("stop");
const btnReset = document.getElementById("reset");

let minutesToSeconds = 1500;
let time;

function startTimer() {
    time = setInterval(function() {
        minutesToSeconds -= 1;
        let secondsToMinutes = Math.floor(minutesToSeconds / 60);
        let remainingSeconds = minutesToSeconds % 60;
        timer.textContent = `${secondsToMinutes}:${remainingSeconds}`;
    }, 1000)
}


btnStart.addEventListener("click", startTimer);
btnStop.addEventListener("click", () => {
    clearInterval(time);
});
btnReset.addEventListener("click", () => {
    clearInterval(time);
    minutesToSeconds = 1500;
    timer.textContent = "25:00";
})