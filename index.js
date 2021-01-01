window.onload = function() {
    //Background

    let pg1 = new ParticleGround(document.querySelector('.pg'), {
        dotColor: 'rgba(255, 255, 255, 1)',
        lineColor: 'rgba(255, 255, 255, 0.05)',
        lineWidth: 1,
        dotSize: 2.5,
        dotsDist: 150,
        minSpeed: 0.1,
        maxSpeed: 0.3,
        dotPerPixels: 20000
    });

    let pg2 = new ParticleGround(document.querySelector('.pg'), {
        dotColor: 'rgba(255, 255, 255, 0.5)',
        dotSize: 1,
        dotsDist: 0,
        minSpeed: 0.05,
        maxSpeed: 0.1,
        dotPerPixels: 10000
    });

    //CountUp

    let days = document.querySelector('.days');
    let hours = document.querySelector('.hours');
    let minutes = document.querySelector('.minutes');
    let seconds = document.querySelector('.seconds');
    let date = document.querySelector('.date');

    let dayParting = new Date(2020, 11, 25, 23, 0, 0, 0);

    date.innerText = dayParting.toLocaleString();

    setInterval(function() {
        let now = new Date();
        seconds.innerText = secondDiff(dayParting, now) + ' seconds';
        minutes.innerText = minuteDiff(dayParting, now) + ' minutes';
        hours.innerText = hoursDiff(dayParting, now) + ' hours';
        days.innerText = dayDiff(dayParting, now) + ' days';
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
