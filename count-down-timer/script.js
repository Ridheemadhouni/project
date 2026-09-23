let countdownInterval = null;

const startBtn = document.getElementById("startBtn");
const targetInput = document.getElementById("targetDateTime");
const completionMessage = document.getElementById("completionMessage");

const dDisplay = document.getElementById("days");
const hDisplay = document.getElementById("hours");
const mDisplay = document.getElementById("minutes");
const sDisplay = document.getElementById("seconds");

function formatTimeValue(value) {
    return value < 10 ? `0${value}` : value;
}

function runTimer(targetTime) {
    const currentTime = new Date().getTime();
    const timeDifference = targetTime - currentTime;

    if (timeDifference <= 0) {
        clearInterval(countdownInterval);
        dDisplay.innerText = "00";
        hDisplay.innerText = "00";
        mDisplay.innerText = "00";
        sDisplay.innerText = "00";
        completionMessage.style.display = "block";
        return;
    }

    completionMessage.style.display = "none";

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    dDisplay.innerText = formatTimeValue(days);
    hDisplay.innerText = formatTimeValue(hours);
    mDisplay.innerText = formatTimeValue(minutes);
    sDisplay.innerText = formatTimeValue(seconds);
}

startBtn.addEventListener("click", () => {
    const inputString = targetInput.value;

    if (!inputString) {
        alert("Please explicitly define a future target destination date.");
        return;
    }

    const targetEpoch = new Date(inputString).getTime();
    const currentEpoch = new Date().getTime();

    if (targetEpoch <= currentEpoch) {
        alert("The designated timestamp must target a future point relative to the current time context.");
        return;
    }

    if (countdownInterval) {
        clearInterval(countdownInterval);
    }

    runTimer(targetEpoch);
    countdownInterval = setInterval(() => runTimer(targetEpoch), 1000);
});
