//Task 1
let cel = document.getElementById('cel');
let far = document.getElementById('far');;

cel.oninput = function() {
    far.value = 1.8 * cel.value + 32;
}

far.oninput = function() {
    cel.value = 5 / 9 * (far.value - 32);
}

//Task2
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
let firstM = document.getElementById('firstM');
let secondM = document.getElementById('secondM');
let trying = 0,
    numb;
let arr = [];

firstM.innerHTML = getRandomInt(1, 9);
secondM.innerHTML = getRandomInt(1, 9);

function NextTask() {
    trying++;

    if (trying != 10) {
        firstM.innerHTML = getRandomInt(1, 9);
        secondM.innerHTML = getRandomInt(1, 9);
        this.document.getElementById('answer').disabled = 0;
        document.getElementById('check').disabled = 0;
        document.getElementById('answer').value = null;
        document.getElementById('helpViraz').innerHTML = '';
    } else {
        document.getElementById('NextAnsw').disabled = 1;
        document.getElementById('helpViraz').innerHTML = 'Ви пройшли тест';
    }
}

function checkIfTrue() {
    if (parseInt(firstM.innerHTML * secondM.innerHTML) == parseInt(document.getElementById('answer').value)) {
        document.getElementById('trueAns').innerHTML++;
        document.getElementById('trueAnsPer').innerHTML = parseInt(document.getElementById('trueAns').innerHTML) * 10;
        document.getElementById('answer').disabled = 1;
        document.getElementById('check').disabled = 1;
        document.getElementById('NextAnsw').click();
    } else {
        document.getElementById('answer').disabled = 1;
        document.getElementById('check').disabled = 1;
        document.getElementById('helpViraz').innerHTML = '<b style="color: red">Помилка!</b> Правильна відповідь: ' + parseInt(firstM.innerHTML * secondM.innerHTML);
    }
}

//Task3
let radFirst = document.getElementById('firstM2');
let radSecond = document.getElementById('secondM2');
let trying2 = 0,
    numb2;
let arr2 = [];

radFirst.innerHTML = getRandomInt(1, 9);
radSecond.innerHTML = getRandomInt(1, 9);

function NextTask2() {
    trying2++;

    if (trying2 != 11) {
        for (let i = 0; i < 4; i++)
            inp[i].disabled = 0;
        radFirst.innerHTML = getRandomInt(1, 9);
        radSecond.innerHTML = getRandomInt(1, 9);
        document.getElementById('helpViraz2').innerHTML = '';
    } else {
        for (let i = 0; i < 4; i++)
            inp[i].disabled = 1;
        document.getElementById('NextAnsw2').disabled = 1;
        document.getElementById('helpViraz2').innerHTML = 'Ви пройшли тест';

    }
    for (let i = 0; i < 4; i++) {
        numb2 = getRandomInt((parseInt(radFirst.innerHTML * radSecond.innerHTML) - getRandomInt(0, 9)), (parseInt(radFirst.innerHTML * radSecond.innerHTML) + getRandomInt(2, 9)));
        if (numb2 != parseInt(radFirst.innerHTML * radSecond.innerHTML))
            arr2[i] = numb2;
        else
            i--;
    }
    arr2[getRandomInt(0, 4)] = parseInt(radFirst.innerHTML * radSecond.innerHTML);
    document.getElementById('radText1').innerHTML = arr2[0];
    document.getElementById('radioAnswer1').value = document.getElementById('radText1').innerHTML;
    document.getElementById('radText2').innerHTML = arr2[1];
    document.getElementById('radioAnswer2').value = document.getElementById('radText2').innerHTML;
    document.getElementById('radText3').innerHTML = arr2[2];
    document.getElementById('radioAnswer3').value = document.getElementById('radText3').innerHTML;
    document.getElementById('radText4').innerHTML = arr2[3];
    document.getElementById('radioAnswer4').value = document.getElementById('radText4').innerHTML;
}
let inp = document.getElementsByName('radioAnsw');
for (let i = 0; i < inp.length; i++) {
    inp[i].onchange = function() {
        if (parseInt(radFirst.innerHTML * radSecond.innerHTML) == this.value) {
            document.getElementById('trueAns2').innerHTML++;
            document.getElementById('trueAnsPer2').innerHTML = parseInt(document.getElementById('trueAns2').innerHTML) * 10;
            document.getElementById('NextAnsw2').click();
            this.checked = 0;
        } else {
            this.checked = 0;
            console.log(this.value);
            document.getElementById('helpViraz2').innerHTML = '<b style="color: red">Помилка!</b> Правильна відповідь: ' + parseInt(radFirst.innerHTML * radSecond.innerHTML);
            for (let i = 0; i < 4; i++)
                inp[i].disabled = 1;
        }
    };
}

//Task4
let imagesArray = [{
        path: 'http://www.mann-ivanov-ferber.ru/assets/images/books/personalizaciya_prodazh/P_P_3D_340.jpg',
        title: '«Персонализация продаж» от Александра Деревицкого',
        description: 'Новая книга Александра Деревицкого — самая важная книга о продажах, вобравшая в себя все фирменные техники и технологии автора. Впрочем, это книга не только о продажах. Она и об умении слушать, слышать и строить беседу, работать не с абстрактным, а с конкретным, из плоти-крови-потребностей, клиентом. И нацеливать свое предложение только на этого клиента.'
    },
    {
        path: 'https://lh6.googleusercontent.com/bzdhzk2WXckSUOxMdzPF2vTFcIrQqicD_b6DniyQEakyxd_G6U47xIDef_osk79xc3Z9whYm_NEh7t21zaZPH7C00qaR92Fw76SradzEe3XfmUMV6Tj7iMRvZ1Y5Dw',
        title: '«Партизанские продажи» от Мурата Тургунова',
        description: 'Когда я обучаю новичков в сфере продаж, всегда думаю, какую книгу им порекомендовать на первых порах. Вопрос возникает неслучайно. Книг по продажам много, но вот написанных практиками — не хватает.'
    },
    {
        path: 'https://lh5.googleusercontent.com/w2PdQuhr3MuxlgOEVfaTDCwz3AVZcKx2mu4zFQEXimOqiMCAGknu4bJ26wbp_ZfMxuHuc6fy-fYUHYC-ynHLTfIPDEkjXDNMx4s26mS09iAHReYNeKOhw1Sz0OTk7g',
        title: '«Эффективное коммерческое предложение» от Дениса Каплунова',
        description: 'Эта книга оказала мощное влияние на коммерческие показатели прошлого года в моих личных проектах. Когда у меня возникал вопрос, я открывал книгу и находил там ответ. В ней собраны по-настоящему эффективные инструменты. Теперь я активно использую их для развития своих проектов и общения с клиентами.'
    }
];
let rotator;
let curentIndex = 0;
let table;

function initPhotoRotator(divRotator, imageArr) {
    table = document.createElement('table');
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    let td2 = document.createElement('td');
    let img = document.createElement('img');
    img.setAttribute('src', imagesArray[0].path);
    img.style.width = '500px';
    img.style.height = '300px';
    img.style.objectFit = 'contain';
    table.style.border = '2px solid black';
    table.style.borderCollapse = 'collapse';
    td.style.border = '2px solid black';
    td2.style.border = '2px solid black';
    table.style.width = '500px';
    table.style.height = '400px';
    divRotator.appendChild(table);
    table.appendChild(tr);
    tr.appendChild(td);
    tr.appendChild(td.cloneNode(false));
    tr.appendChild(td.cloneNode(false));
    table.appendChild(tr.cloneNode(false));
    table.appendChild(tr.cloneNode(false));
    tr.firstChild.setAttribute('rowspan', 3);
    tr.lastChild.setAttribute('rowspan', 3);
    tr.firstChild.innerHTML = 'Назад';
    tr.lastChild.innerHTML = '<a href="#" onclick="inc(table)">Вперед</a>';
    tr.firstChild.innerHTML = '<a href="#" onclick="dec(table)">Назад</a>';
    table.children[1].appendChild(td2);
    table.children[2].appendChild(td2.cloneNode(false));
    table.children[1].firstChild.appendChild(img);
    table.children[2].firstChild.style.textAlign = 'center';
    table.children[0].children[1].style.textAlign = 'center';
    table.firstChild.firstChild.firstChild.style.visibility = 'hidden';
}

function inc(table) {
    curentIndex++;
    if (curentIndex >= 2)
        table.firstChild.lastChild.firstChild.style.visibility = 'hidden';
    else
        table.firstChild.firstChild.firstChild.style.visibility = 'visible';
    table.children[1].firstChild.firstChild.setAttribute('src', imagesArray[curentIndex].path);
    table.children[2].firstChild.innerHTML = '<b>' + imagesArray[curentIndex].title + '</b>';
    table.children[2].firstChild.innerHTML += '<br>' + imagesArray[curentIndex].description;
    table.children[0].children[1].innerHTML = 'Фотографія ' + (curentIndex + 1) + ' із 3';
}

function dec(table) {
    curentIndex--;
    if (curentIndex <= 0)
        table.firstChild.firstChild.firstChild.style.visibility = 'hidden';
    else
        table.firstChild.lastChild.firstChild.style.visibility = 'visible';
    table.children[1].firstChild.firstChild.setAttribute('src', imagesArray[curentIndex].path);
    table.children[2].firstChild.innerHTML = '<b>' + imagesArray[curentIndex].title + '</b>';
    table.children[2].firstChild.innerHTML += '<br>' + imagesArray[curentIndex].description;
    table.children[0].children[1].innerHTML = 'Фотографія ' + (curentIndex + 1) + ' із 3';
}

//Task5
let row = document.createElement('div');
row.className = 'row';
let pixel = document.createElement('span');
pixel.className = 'pixel';
let znach = []
let d = [
    [
        [1, 1, 1],
        [1, 0, 1],
        [1, 0, 1],
        [1, 0, 1],
        [1, 1, 1]
    ],
    [
        [0, 1, 0],
        [1, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
        [1, 1, 1]
    ],
    [
        [1, 1, 1],
        [0, 0, 1],
        [1, 1, 0],
        [1, 0, 0],
        [1, 1, 1]
    ],
    [
        [1, 1, 1],
        [0, 0, 1],
        [0, 1, 0],
        [0, 0, 1],
        [1, 1, 1]
    ],
    [
        [1, 0, 1],
        [1, 0, 1],
        [1, 1, 1],
        [0, 0, 1],
        [0, 0, 1]
    ],
    [
        [1, 1, 1],
        [1, 0, 0],
        [1, 1, 1],
        [0, 0, 1],
        [1, 1, 1]
    ],
    [
        [1, 1, 1],
        [1, 0, 0],
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1]
    ],
    [
        [1, 1, 1],
        [0, 0, 1],
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0]
    ],
    [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1]
    ],
    [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
        [0, 0, 1],
        [1, 1, 1]
    ]
];

let rows = [];
for (let i = 0; i < 5; i++) {
    rows[i] = row.cloneNode(false);
}

function PrintResult() {
    for (let i = 0; i < rows.length; i++) {
        document.getElementById('captcha').appendChild(rows[i]);
    }
}


function createNum(k, checkLastElm) {
    let rStart;
    if (document.getElementById('captcha').childElementCount != 0)
        rStart = document.getElementById('captcha').children[0];
    let start = 0;
    if (rStart) {
        start = rStart.childElementCount;
    }

    for (let i = start; i < start + 5; i++) {
        for (let j = 0; j < (checkLastElm ? 3 : 4); j++) {
            let p = pixel.cloneNode(false)
            if (d[k][i][j] == 1) {
                p.classList.add('red');
            }
            rows[i].appendChild(p);
        }
    }
}

document.getElementById('inputNum').onchange = function() {
    let enterNum = document.getElementById('inputNum').value;
    enterNum = enterNum.split('');
    if (znach.length != enterNum.length) {
        document.getElementById('res').innerHTML = 'Помилка';
        document.getElementById('res').style.color = 'red';
        return;
    }
    for (let i = 0; i < znach.length; i++) {
        if (znach[i] != enterNum[i]) {
            document.getElementById('res').innerHTML = 'Помилка';
            document.getElementById('res').style.color = 'red';
            return;
        }
    }
    document.getElementById('res').innerHTML = 'Вірно';
    document.getElementById('res').style.color = 'green';
}

//Other
window.onload = function() {
    //Task3
    NextTask2();
    //Task4
    rotator = document.getElementById('rotator');
    initPhotoRotator(rotator, imagesArray);
    table.children[0].children[1].innerHTML = 'Фотографія ' + 1 + ' із 3';
    table.children[2].firstChild.innerHTML = '<b>' + imagesArray[curentIndex].title + '</b>';
    table.children[2].firstChild.innerHTML += '<br>' + imagesArray[curentIndex].description;
    //Task5
    let maxIndex = Math.floor(Math.random() * 4 + 2);
    for (let i = 0; i < maxIndex; i++) {
        let n = Math.floor(Math.random() * 10);
        createNum(n, (maxIndex - 1 == i));
        znach[i] = String(n);
    }
    PrintResult();
};