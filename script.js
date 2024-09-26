let countdownInterval;
const countdownBtn = document.querySelector('.btn-start-countdown');
const resetCountdownBtn = document.querySelector('.btn-reset-countdown');
const hoursInput = document.querySelector('.input-hours');
const minutesInput = document.querySelector('.input-minutes');
const secondsInput = document.querySelector('.input-seconds');
const hoursDisplay = document.querySelector('.display-hours');
const minutesDisplay = document.querySelector('.display-minutes');
const secondsDisplay = document.querySelector('.display-seconds');

countdownBtn.addEventListener('click', () => {
    let countdownHours = parseInt(hoursInput.value) || 0;
    let countdownMinutes = parseInt(minutesInput.value) || 0;
    let countdownSeconds = parseInt(secondsInput.value) || 0;

    let countdownTime = countdownHours * 3600 + countdownMinutes * 60 + countdownSeconds;

    clearInterval(countdownInterval);

    countdownInterval = setInterval(() => {
        const hours = Math.floor(countdownTime / 3600);
        const minutes = Math.floor((countdownTime % 3600) / 60);
        const seconds = countdownTime % 60;

        hoursDisplay.textContent = String(hours).padStart(2, '0');
        minutesDisplay.textContent = String(minutes).padStart(2, '0');
        secondsDisplay.textContent = String(seconds).padStart(2, '0');

        countdownTime--;

        if (countdownTime < 0) {
            clearInterval(countdownInterval);
        }
    }, 1000);
});

resetCountdownBtn.addEventListener('click', () => {
    clearInterval(countdownInterval);
    hoursDisplay.textContent = "00";
    minutesDisplay.textContent = "00";
    secondsDisplay.textContent = "00";
    hoursInput.value = "";
    minutesInput.value = "";
    secondsInput.value = "";
});


let counterValue = 0;
const counterDisplay = document.querySelector('.counter-number');
const increaseBtn = document.querySelector('.btn-increase');
const decreaseBtn = document.querySelector('.btn-decrease');
const resetCounterBtn = document.querySelector('.btn-reset-counter');

increaseBtn.addEventListener('click', () => {
    counterValue++;
    counterDisplay.textContent = counterValue;
});

decreaseBtn.addEventListener('click', () => {
    if (counterValue > 0) {
        counterValue--;
        counterDisplay.textContent = counterValue;
    }
});

resetCounterBtn.addEventListener('click', () => {
    counterValue = 0;
    counterDisplay.textContent = counterValue;
});