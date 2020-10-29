//Task 1

let res1 = document.querySelector('.res1');
let str1 = '23';
let num = parseInt(str1);
let str2 = num.toString();
res1.innerText =
    str1 + ' ' + typeof(str1) + '\n' +
    num + ' ' + typeof(num) + '\n' +
    str2 + ' ' + typeof(str2) + '\n';

//Task 2.1

let res2 = document.querySelector('.res2');
let btnStart1 = document.querySelector('.btn.start1');

btnStart1.onclick = function() {
    let startDate = new Date();

    function update() {
        let d = new Date();
        let h = d.getHours().toString();
        let m = d.getMinutes().toString();
        let s = d.getSeconds().toString();
        s = s.length === 1 ? "0" + s : s;
        m = m.length === 1 ? "0" + m : m;
        h = h.length === 1 ? "0" + h : h;
        res2.innerText = h + ':' + m + ':' + s;
        if (d.getTime() - startDate.getTime() >= 60 * 1000) {
            startDate = new Date();
            setTimeout(() => {
                alert('Пройшла ще 1 хвилина');
            }, 1);
        }
        setTimeout(update, 1000);
    }

    update();
}

//Task 2.2

let res3 = document.querySelector('.res3');
let btnStart2 = document.querySelector('.btn.start2');

btnStart2.onclick = function() {
    let startDate = new Date();

    function update() {
        let d = new Date();
        let h = d.getHours().toString();
        let m = d.getMinutes().toString();
        let s = d.getSeconds().toString();
        s = s.length === 1 ? "0" + s : s;
        m = m.length === 1 ? "0" + m : m;
        h = h.length === 1 ? "0" + h : h;
        res3.innerText = h + ':' + m + ':' + s;
        if (d.getTime() - startDate.getTime() >= 30 * 1000) {
            window.close();
        }
        setTimeout(update, 5000);
    }

    update();
}

//Task 2.3

let res4 = document.querySelector('.res4');
let btnStart3 = document.querySelector('.btn.start3');

btnStart3.onclick = function() {
    let s = 0,
        m = 0,
        h = 0;
    let initM = false,
        initH = false;

    function pad(val) {
        let valString = val.toString();
        if (valString.length < 2) {
            return '0' + valString;
        } else {
            return valString;
        }
    }

    function update() {
        ++s;
        if (s % 60 === 0) {
            s = 0;
            ++m;
            initM = true;
            if (m % 60 === 0) {
                m = 0;
                ++h;
                initH = true;
            }
        }
        res4.innerText =
            (initH ? (h + ':') : '') +
            (initM ? (pad(m) + ':') : '') +
            pad(s);
        setTimeout(update, 1000);
    }

    update();
}

//Task 2.4

let res5 = document.querySelector('.res5');
let btnStart4 = document.querySelector('.btn.start4');

btnStart4.onclick = function() {
    let startDate = new Date();

    function update() {
        let d = new Date();
        let h = d.getHours().toString();
        let m = d.getMinutes().toString();
        let s = d.getSeconds().toString();
        s = s.length === 1 ? "0" + s : s;
        m = m.length === 1 ? "0" + m : m;
        h = h.length === 1 ? "0" + h : h;
        res5.innerText = h + ':' + m + ':' + s;
        if (d.getTime() - startDate.getTime() >= 30 * 1000) {
            startDate = new Date();
            setTimeout(() => {
                alert('Час на сторінці оновлено');
            }, 1)
        }
        setTimeout(update, 30 * 1000);
    }

    update();
}

//Task 2.5

let res6 = document.querySelector('.res6');
let btnStart5 = document.querySelector('.btn.start5');

btnStart5.onclick = function() {
    let d = new Date();
    let h = d.getHours().toString();
    let m = d.getMinutes().toString();
    let s = d.getSeconds().toString();
    s = s.length === 1 ? "0" + s : s;
    m = m.length === 1 ? "0" + m : m;
    h = h.length === 1 ? "0" + h : h;
    res6.innerText = h + ':' + m + ':' + s;
}