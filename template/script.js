document.addEventListener('DOMContentLoaded', () => {
  startCountdown('2025-02-30T08:00:00');
});

function getElementById(id){
  return document.getElementById(id);
}

function startCountdown(eventDate) {
  const daysEl = getElementById('days');
  const hoursEl = getElementById('hours');
  const minutesEl = getElementById('minutes');
  const secondsEl = getElementById('seconds');

  function updateCountdown() {
    const now = new Date();
    const eventTime = new Date(eventDate);
    const diff = eventTime - now;
    let days = '00';
    let hours = '00';
    let minutes = '00';
    let seconds = '00';

    if (diff >= 0) {
        days = Math.floor(diff / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
        hours = Math.floor((diff / (1000 * 60 * 60)) % 24).toString().padStart(2, '0');
        minutes = Math.floor((diff / (1000 * 60)) % 60).toString().padStart(2, '0');
        seconds = Math.floor((diff / 1000) % 60).toString().padStart(2, '0');
    } 

    daysEl.textContent = days;
    hoursEl.textContent = hours;
    minutesEl.textContent = minutes;
    secondsEl.textContent = seconds;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}
