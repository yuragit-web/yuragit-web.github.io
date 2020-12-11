let addBtn = document.querySelector('.addBtn');
addBtn.onclick = newTask;

let inputArea = document.querySelector('#inputArea');
inputArea.onkeyup = function(e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
        newTask();
    }
}

let list = document.querySelector('#toDoList');

function newTask() {
    let inputValue = inputArea.value;
    if (inputValue === '') {
        alert('Заповніть поле!');
    } else {
        inputArea.value = '';

        let li = document.createElement('li');
        li.className = 'task';
        li.draggable = true;

        let text = document.createElement('div');
        text.className = 'text';
        text.innerText = inputValue;

        let span = document.createElement('span');
        span.className = 'close';

        li.appendChild(text);
        li.appendChild(span);
        list.appendChild(li);
    }
}

let dragging = null;

list.addEventListener('click', function(event) {
    if (event.target.classList.contains('close')) {
        event.target.parentElement.remove();
    } else if (event.target.classList.contains('task') && !event.target.classList.contains('editing')) {
        event.target.classList.toggle('checked');
    }
});

list.addEventListener('dblclick', function(event) {
    if (event.target.classList.contains('task') && !event.target.classList.contains('checked')) {
        event.target.classList.add('editing');
        let val;
        val = event.target.children[0].innerText;

        let input = document.createElement('input');
        input.type = 'text';
        input.className = 'edit';
        input.value = val;

        event.target.replaceChild(input, event.target.children[0]);

        input.focus();
    }
});

list.addEventListener('keyup', function(event) {
    if (event.target.classList.contains('edit')) {
        if (event.key === 'Enter' || event.keyCode === 13) {
            let val = event.target.value;
            if (val !== '') {
                let text = document.createElement('div');
                text.className = 'text';
                text.innerText = val;
                event.target.parentElement.classList.remove('editing');
                event.target.parentElement.replaceChild(text, event.target);
            } else {
                alert('Заповніть поле');

                event.target.style.borderBottom = '1px solid #f44336';

                setTimeout(function() {
                    event.target.style.borderBottom = '1px solid #0072ff'
                }, 1000);
            }
        }
    }
});

list.addEventListener('dragstart', function(event) {
    if (event.target.classList.contains('task')) {
        dragging = event.target;
    }
});

list.addEventListener('dragover', function(event) {
    if (event.target.classList.contains('task')) {
        event.preventDefault();
        let bounding = event.target.getBoundingClientRect()
        let offset = bounding.y + (bounding.height / 2);
        if (event.clientY - offset > 0) {
            event.target.style.borderBottom = 'solid 4px #f44336';
            event.target.style.borderTop = '';
        } else {
            event.target.style.borderTop = 'solid 4px #f44336';
            event.target.style.borderBottom = '';
        }
    }
});

list.addEventListener('dragleave', function(event) {
    if (event.target.classList.contains('task')) {
        event.target.style.borderBottom = '';
        event.target.style.borderTop = '';
    }
});

list.addEventListener('drop', function(event) {
    if (event.target.classList.contains('task')) {
        event.preventDefault();
        if (event.target.style.borderBottom !== '') {
            event.target.style.borderBottom = '';
            event.target.parentElement.insertBefore(dragging, event.target.nextSibling);
        } else {
            event.target.style.borderTop = '';
            event.target.parentElement.insertBefore(dragging, event.target);
        }
    }
});