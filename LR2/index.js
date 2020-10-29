//Task 1
let inputForName = document.querySelector('form input[name=forName]');
let inputsRadio = document.querySelectorAll('label');
let form = document.querySelector('form');
let status = document.querySelector('form .status');

inputForName.onmouseover = () => {
    status.innerText = 'Впишіть сюди своє ім\'я';
}

inputForName.onmouseleave = () => {
    status.innerText = '';
}

inputsRadio.forEach(inputRadio => {
    inputRadio.onmouseover = () => {
        status.innerText = 'Виберіть, що подобається';
    }

    inputRadio.onmouseleave = () => {
        status.innerText = '';
    }

    inputRadio.onchange = () => {
        inputsRadio.forEach(ir => {
            ir.onmouseover = null;
            ir.onmouseleave = null;
        });
        inputForName.onmouseover = null;
        inputForName.onmouseleave = null;
        status.innerText = inputRadio.dataset.message;
    }
});

form.onsumbit = (e) => {
    if (inputForName.value != '') {
        alert('Дякуємо що взяли учатсть в опитування');
    } else {
        alert('Помилка, одне з полів не заповнене');
    }
    e.preventDefault();
}

//Task 2
let btn = document.querySelector('.btn');
let wind = null;
btn.onclick = () => {
    let res = confirm();
    if (res) {
        wind = window.open('https://www.google.com/', '_blank')
    } else if (wind != null) {
        wind.close();
    }
}

//Task 3
let image = document.querySelector('.nav-panel img');
let images = document.querySelectorAll('.images img');
images.forEach(img => {
    img.onmouseover = () => {
        image.src = img.src;
    }
});

//Task 4
let slides = document.querySelectorAll('.slides .slide');
let currentSlide = 0;
let buttonPrev = document.querySelector('.button.prev');
let buttonNext = document.querySelector('.button.next');

buttonPrev.onclick = function() {
    slides[currentSlide].className = 'slide';
    currentSlide = currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1;
    slides[currentSlide].className = 'slide active';
}

buttonNext.onclick = function() {
    slides[currentSlide].className = 'slide';
    currentSlide = currentSlide + 1 > slides.length - 1 ? 0 : currentSlide + 1;
    slides[currentSlide].className = 'slide active';
}