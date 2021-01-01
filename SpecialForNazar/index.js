window.onload = function() {
    //CountUp

    let days = document.querySelector('#days');
    let hours = document.querySelector('#hours');
    let minutes = document.querySelector('#minutes');
    let seconds = document.querySelector('#seconds');

    let dayParting = new Date(2020, 2, 8, 12, 0, 0, 0);

    setInterval(function() {
        let now = new Date();
        seconds.innerText = secondDiff(dayParting, now);
        minutes.innerText = minuteDiff(dayParting, now);
        hours.innerText = hoursDiff(dayParting, now);
        days.innerText = dayDiff(dayParting, now);
    }, 1000);
}

function secondDiff(dateFrom, dateTo) {
    return Math.floor((dateTo - dateFrom) / 1000);
}

function minuteDiff(dateFrom, dateTo) {
    return Math.floor((dateTo - dateFrom) / 1000 / 60);
}

function hoursDiff(dateFrom, dateTo) {
    return Math.floor((dateTo - dateFrom) / 1000 / 60 / 60);
}

function dayDiff(dateFrom, dateTo) {
    return Math.floor((dateTo - dateFrom) / 1000 / 60 / 60 / 24);
}