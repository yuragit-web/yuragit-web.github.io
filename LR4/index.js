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
let inputPrice = document.querySelector('#price');
let addButton = document.querySelector('#addButton');
let sumButton = document.querySelector('#sumButton');
let sumRes = document.querySelector('#sum');
let table = document.querySelector('#table');
let cart = document.querySelector('#cart');

addButton.onclick = function(e) {
    if (
        inputName.value != '' &&
        inputPrice.value != '' && +inputPrice.value >= 0
    ) {
        let li = document.createElement('li');

        let name = document.createElement('div');
        name.className = 'name';
        name.innerText = inputName.value;

        let price = document.createElement('div');
        price.className = 'price';
        price.innerText = inputPrice.value;

        let count = document.createElement('div');
        count.className = 'count';
        let input = document.createElement('input');
        input.setAttribute('type', 'number');
        input.setAttribute('min', '1');
        input.setAttribute('step', '1');
        input.setAttribute('value', '1');
        input.setAttribute('pattern', '\d+');
        input.setAttribute('name', 'count');
        input.setAttribute('id', 'count');
        count.appendChild(input);

        let sum = document.createElement('div');
        sum.className = 'sumButton';
        sum.innerText = 'Розрахувати вартість';

        let toCart = document.createElement('div');
        toCart.className = 'toCart';
        toCart.innerText = 'В корзину';


        li.appendChild(name);
        li.appendChild(price);
        li.appendChild(count);
        li.appendChild(sum);
        li.appendChild(toCart);

        table.appendChild(li);

        updateListeners();

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
        let child = elm.children;
        child[3].onclick = () => {
            child[3].innerText = +child[1].innerText * +child[2].children[0].value;
        }

        child[4].onclick = (e) => {
            let li = document.createElement('li');

            let name = document.createElement('div');
            name.className = 'name';
            name.innerText = child[0].innerText;

            let count = document.createElement('div');
            count.className = 'count';
            count.innerText = child[2].children[0].value;

            let price = document.createElement('div');
            price.className = 'price';
            price.innerText = child[1].innerText;

            let sum = document.createElement('div');
            sum.className = 'sumButton';
            sum.innerText = +child[2].children[0].value * +child[1].innerText;

            li.appendChild(name);
            li.appendChild(count);
            li.appendChild(price);
            li.appendChild(sum);

            cart.appendChild(li);

            e.preventDefault();
        }
    });
}

updateListeners();