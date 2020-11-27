function task1() {
    let d = new Date();
    let date, dayOfWeek, time, month, dow, h, m, s;
    switch (d.getMonth()) {
        case 0:
            month = 'січня';
            break;
        case 1:
            month = 'лютого';
            break;
        case 2:
            month = 'березня';
            break;
        case 3:
            month = 'квітня';
            break;
        case 4:
            month = 'травня';
            break;
        case 5:
            month = 'червня';
            break;
        case 6:
            month = 'липня';
            break;
        case 7:
            month = 'серпня';
            break;
        case 8:
            month = 'вересня';
            break;
        case 9:
            month = 'жовтня';
            break;
        case 10:
            month = 'листопада';
            break;
        case 11:
            month = 'грудня';
            break;
    }
    date = `Дата: ${d.getDate()} ${month} ${d.getFullYear()} року`;

    switch (d.getDay()) {
        case 0:
            dow = 'неділя';
            break;
        case 1:
            dow = 'понеділок';
            break;
        case 2:
            dow = 'вівторок';
            break;
        case 3:
            dow = 'середа';
            break;
        case 4:
            dow = 'четвер';
            break;
        case 5:
            dow = 'п\'ятниця';
            break;
        case 6:
            dow = 'субота';
            break;
    }
    dayOfWeek = `День: ${dow}`;

    h = d.getHours().length == 1 ? '0' + d.getHours() : d.getHours();
    m = d.getMinutes().length == 1 ? '0' + d.getMinutes() : d.getMinutes();
    s = d.getSeconds().length == 1 ? '0' + d.getSeconds() : d.getSeconds();
    time = `Час: ${h}:${m}:${s}`;

    return date + '\n' + dayOfWeek + '\n' + time;
}

function task2() {
    let d = new Date();
    let dow;

    switch (d.getDay()) {
        case 0:
            dow = 'неділя';
            break;
        case 1:
            dow = 'понеділок';
            break;
        case 2:
            dow = 'вівторок';
            break;
        case 3:
            dow = 'середа';
            break;
        case 4:
            dow = 'четвер';
            break;
        case 5:
            dow = 'п\'ятниця';
            break;
        case 6:
            dow = 'субота';
            break;
    }

    return {
        dayNumber: d.getUTCDay(),
        dayName: dow
    }
}

function task3(days) {
    let d = new Date();
    d.setDate(d.getDate() - Math.abs(days));
    return d;
}

function task4(year, month) {
    let d = new Date(year, month, 0);
    return d.getDate();
}

function task5() {
    let now = new Date();

    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

    return {
        secondsToNow: Math.round((now - today) / 1000),
        secondsToTomorrow: Math.round((tomorrow - now) / 1000)
    }
}

function task6(d, m, y) {
    let date = new Date(y, m - 1, d);
    let day = date.getDate();
    day = day.length == 1 ? '0' + day : day;
    let month = date.getMonth();
    month = month.length == 1 ? '0' + month : month;
    let year = date.getFullYear();
    return (day + '.' + month + '.' + year);
}

function task7(d1, m1, y1, d2, m2, y2) {
    let date1 = new Date(y1, m1 - 1, d1),
        date2 = new Date(y2, m2 - 1, d2);
    return Math.abs(Math.floor((date1 - date2) / (24 * 60 * 60 * 1000)));
}

function task8(day, month, year, hours, minutes, seconds) {
    let date = new Date(year, month - 1, day, hours, minutes, seconds),
        now = new Date();
    let diff = now - date;
    if (diff < 1000) {
        return 'Тільки що';
    } else if (diff < 60 * 1000) {
        return (Math.floor(diff / 1000) + ' с. назад');
    } else if (diff < 60 * 60 * 1000) {
        return (Math.floor(diff / (1000 * 60)) + ' хв. назад');
    } else {
        return date.toLocaleDateString('uk');
    }
}

function task9(str) {
    let date = new Date(Date.parse(str));
    return date.toLocaleDateString('uk');
}

function task10(locale) {
    let d = new Date();
    let options = {
        era: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        timezone: 'UTC',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    }
    return d.toLocaleString(locale, options);
}