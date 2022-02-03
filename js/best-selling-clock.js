function updateClock(){
const clockElement = document.querySelector('.clock');
clockElement.textContent = new Date().toLocaleTimeString();
}

setInterval(updateClock, 1000);