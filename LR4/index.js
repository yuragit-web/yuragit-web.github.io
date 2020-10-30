//Task 1

let res = document.querySelector('.res');

let dom = '',
    depth = 0;

function getDOMtree(node, n) {
    console.log(node);
    for (let i = 0; i < depth; i++) {
        dom += '<span>|---</span>';
    }
    dom += '<b>' + node.nodeName.toLowerCase() + '</b>';
    if (node.id) {
        dom += '[#' + node.id + ']';
    }
    if (node.className) {
        dom += '[.' + node.className + ']';
    }
    if (typeof n === 'number') {
        dom += '<span>{child #' + (n + 1) + '}</span>';
    }
    dom += '<br>';
    depth++;
    let arr = Array.from(node.children);
    for (let i = 0; i < arr.length; i++) {
        getDOMtree(arr[i], i);
    }
    depth--;
    return dom;
}

res.innerHTML = getDOMtree(document);

//Task 2

let inputName = document.querySelector('#name');
let inputCount = document.querySelector('#count');
let inputPrice = document.querySelector('#price');
let addButton = document.querySelector('#addButton');
let sumButton = document.querySelector('#sumButton');
let sumRes = document.querySelector('#sum');
let table = document.querySelector('#table');

addButton.onclick = function(e) {
    if (
        inputName.value != '' &&
        inputCount.value != '' && +inputCount.value > 0 && Number.isInteger(+inputCount.value) &&
        inputPrice.value != '' && +inputPrice.value >= 0
    ) {
        let li = document.createElement('li');

        let name = document.createElement('div');
        name.className = 'name';
        name.innerText = inputName.value;

        let count = document.createElement('div');
        count.className = 'count';
        count.innerText = inputCount.value;

        let price = document.createElement('div');
        price.className = 'price';
        price.innerText = inputPrice.value;

        let sum = document.createElement('div');
        sum.className = 'sum';
        sum.innerText = +inputCount.value * +inputPrice.value;

        li.appendChild(name);
        li.appendChild(count);
        li.appendChild(price);
        li.appendChild(sum);

        table.appendChild(li);

        updateListeners();

        e.preventDefault();
    } else {
        alert('Помилка в заповненні полів');
        e.preventDefault();
        return;
    }
}

sumButton.onclick = function(e) {
    if (
        inputCount.value != '' && +inputCount.value > 0 && Number.isInteger(+inputCount.value) &&
        inputPrice.value != '' && +inputPrice.value >= 0
    ) {
        sumRes.innerText = 'Сума: ' + (+inputCount.value * +inputPrice.value);
        e.preventDefault();
    } else {
        alert('Помилка в заповненні полів');
        e.preventDefault();
        return;
    }
}

function updateListeners() {
    let list = document.querySelectorAll('#table li:not(:first-child)');
    list.forEach(elm => {
        elm.ondblclick = function() {
            let child = elm.children;
            inputName.value = child[0].innerText;
            inputCount.value = child[1].innerText;
            inputPrice.value = child[2].innerText;
        }
    });
}

updateListeners();