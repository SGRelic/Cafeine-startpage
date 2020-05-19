// Author: Simon Gaillard <gaillard.simon@gmail.com>
// Version: 0.1.0
// License: MIT

'use strict'

const today = document.getElementById('today');
const time = document.getElementById('time');

today.innerText = new Date().toDateString();

function displayTime() {
    var currentTime = new Date()
    var hours = currentTime.getHours().toString().padStart(2, '0');
    var minutes = currentTime.getMinutes().toString().padStart(2, '0');

    time.innerText = hours + ":" + minutes;

}

displayTime();
setInterval(displayTime, 1000);
