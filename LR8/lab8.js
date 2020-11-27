//Task 1
let btn1 = document.querySelector('ul li:nth-child(2) button');
let res1 = document.querySelector('ul li:nth-child(2) .col-3')
btn1.onclick = function() {
    res1.innerText = task1();
}

//Task 2
let btn2 = document.querySelector('ul li:nth-child(3) button');
let res2 = document.querySelector('ul li:nth-child(3) .col-3')
btn2.onclick = function() {
    let day = task2();
    res2.innerText = `Номер дня: ${day.dayNumber}\nНазва дня: ${day.dayName}`;
}

//Task3
let btn3 = document.querySelector('ul li:nth-child(4) button');
let res3 = document.querySelector('ul li:nth-child(4) .col-3');
let input1 = document.querySelector('ul li:nth-child(4) input');
btn3.onclick = function() {
    let date = task3(+input1.value);
    res3.innerText = `Дата: ${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;

}

//Task4
let btn4 = document.querySelector('ul li:nth-child(5) button');
let res4 = document.querySelector('ul li:nth-child(5) .col-3');
let input21 = document.querySelector('ul li:nth-child(5) #year');
let input22 = document.querySelector('ul li:nth-child(5) #month');
btn4.onclick = function() {
    let day = task4(+input21.value, +input22.value);
    res4.innerText = day;
}

//Task5
let btn5 = document.querySelector('ul li:nth-child(6) button');
let res5 = document.querySelector('ul li:nth-child(6) .col-3');
btn5.onclick = function() {
    let seconds = task5();
    res5.innerText = `Кількість секунд до цього моменту: ${seconds.secondsToNow}\nКількість секунд до завтра: ${seconds.secondsToTomorrow}`;
}

//Task6
let btn6 = document.querySelector('ul li:nth-child(7) button');
let res6 = document.querySelector('ul li:nth-child(7) .col-3');
btn6.onclick = function() {
    res6.innerText = task6(20, 11, 2020);
}

//Task7
let btn7 = document.querySelector('ul li:nth-child(8) button');
let res7 = document.querySelector('ul li:nth-child(8) .col-3');
btn7.onclick = function() {
    res7.innerText = 'Різниця в ' + task7(20, 11, 2020, 19, 12, 2019) + ' днів';
}

//Task8
let btn8 = document.querySelector('ul li:nth-child(9) button');
let res8 = document.querySelector('ul li:nth-child(9) .col-3');
btn8.onclick = function() {
    res8.innerText = task8(27, 11, 2020, 13, 0, 0);
}

//Task9
let btn9 = document.querySelector('ul li:nth-child(10) button');
let res9 = document.querySelector('ul li:nth-child(10) .col-3');
btn9.onclick = function() {
    res9.innerText = task9('2020-11-27');
}

//Task10
let btn10 = document.querySelector('ul li:nth-child(11) button');
let res10 = document.querySelector('ul li:nth-child(11) .col-3');
let sel10 = document.querySelector('ul li:nth-child(11) select');
btn10.onclick = function() {
    res10.innerText = task10(sel10.value);
}