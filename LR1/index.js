window.onload = function() {
    var t31 = document.querySelector('#t31');
    t31.onclick = function() {
        alert('Hello world!');
    }

    var t32 = document.querySelector('#t32');
    var message1 = document.querySelector('#message1');
    t32.onmouseover = function() {
        message1.innerText = 'Hello world!';
    }

    var t33 = document.querySelector('#t33');
    var message2 = document.querySelector('#message2');
    t33.onmouseover = function() {
        alert('Hello world!');
        message2.innerText = 'Hello world!';
    }

    var t34 = document.querySelector('#t34');
    t34.onclick = function() {
        alert(prompt('Input text'));
    }


    var t35 = document.querySelector('#t35');
    t35.onmouseover = function() {
        alert(prompt('Input text'));
    }

    var t36 = document.querySelector('#t36');
    t36.onclick = function() {
        var num1 = prompt('Input fist number');
        if (num1 == null) {
            return;
        }
        while (num1 == '' || isNaN(parseInt(num1))) {
            num1 = prompt('Input fist number');
            if (num1 == null) {
                return;
            }
        }
        var num2 = prompt('Input second number');
        if (num2 == null) {
            return;
        }
        while (num2 == '' || isNaN(parseInt(num2))) {
            num2 = prompt('Input second number');
            if (num2 == null) {
                return;
            }
        }
        num1 = parseInt(num1);
        num2 = parseInt(num2);
        alert('Result: ' + (num1 + num2));
    }

    var t37 = document.querySelector('#t37');
    var message3 = document.querySelector('#message3');
    t37.onclick = function() {
        var num1 = prompt('Input fist number');
        if (num1 == null) {
            return;
        }
        while (num1 == '' || isNaN(parseInt(num1))) {
            num1 = prompt('Input fist number');
            if (num1 == null) {
                return;
            }
        }
        var num2 = prompt('Input second number');
        if (num2 == null) {
            return;
        }
        while (num2 == '' || isNaN(parseInt(num2))) {
            num2 = prompt('Input second number');
            if (num2 == null) {
                return;
            }
        }
        num1 = parseInt(num1);
        num2 = parseInt(num2);
        message3.innerText = num1 > num2 ? num1 : num2;
    }

    var t38 = document.querySelector('#t38');
    t38.onclick = function() {
        var num = prompt('Input number month');
        if (num == null) {
            return;
        }
        while (num == '' || isNaN(parseInt(num)) || parseInt(num) < 1 || parseInt(num) > 12) {
            num = prompt('Input number month');
            if (num == null) {
                return;
            }
        }
        switch (parseInt(num)) {
            case 12:
            case 1:
            case 2:
                alert('Winter');
                break;
            case 3:
            case 4:
            case 5:
                alert('Spring');
                break;
            case 6:
            case 7:
            case 8:
                alert('Summer');
                break;
            case 9:
            case 10:
            case 11:
                alert('Autumn');
                break;
        }
    }

    var t39 = document.querySelector('#t39');
    var message4 = document.querySelector('#message4');
    t39.onclick = function() {
        var btn = confirm();
        message4.innerText = btn ? 'OK' : 'Cancel';
    }

    var t310 = document.querySelector('#t310');
    var message5 = document.querySelector('#message5');
    t310.onclick = function() {
        var students = [];
        var count = prompt('Input students count');
        while (count == '' || isNaN(parseInt(count)) || parseInt(count) < 1) {
            count = prompt('Input students count');
            if (count == null) {
                return;
            }
        }
        if (count == null) {
            return;
        }
        for (var i = 0; i < parseInt(count); i++) {
            var surname = prompt('Input surname for ' + (i + 1) + ' student');
            while (surname == null || surname == '') {
                surname = prompt('Input surname for ' + (i + 1) + ' student');
            }
            var name = prompt('Input name for ' + (i + 1) + ' student');
            while (name == null || name == '') {
                name = prompt('Input name for ' + (i + 1) + ' student');
            }
            var student = {
                surname: surname,
                name: name
            }
            students.push(student);
        }
        for (var i = 0; i < students.length; i++) {
            message5.innerText +=
                'Student №' + (i + 1) + '\n' +
                'Surname: ' + students[i].surname + '\n' +
                'Name: ' + students[i].name + (i == (students.length - 1) ? '' : '\n\n');
        }
    }

    var t311 = document.querySelector('#t311');
    var message6 = document.querySelector('#message6');
    t311.onclick = function() {
        var students = [];
        var counter = 1;
        while (true) {
            var surname = prompt('Input surname for ' + counter + ' student');
            while (surname == '') {
                surname = prompt('Input surname for ' + counter + ' student');
            }
            if (surname == null) {
                break;
            }
            var name = prompt('Input name for ' + counter + ' student');
            while (name == '') {
                name = prompt('Input name for ' + counter + ' student');
            }
            if (name == null) {
                break;
            }
            var student = {
                surname: surname,
                name: name
            }
            students.push(student);
            counter++;
        }
        for (var i = 0; i < students.length; i++) {
            message6.innerText +=
                'Student №' + (i + 1) + '\n' +
                'Surname: ' + students[i].surname + '\n' +
                'Name: ' + students[i].name + (i == (students.length - 1) ? '' : '\n\n');
        }
    }

    var t312 = document.querySelector('#t312');
    var message7 = document.querySelector('#message7');
    t312.onclick = function() {
        for (var i = 2; i < 10; i++) {
            for (var j = 1; j < 10; j++) {
                message7.innerText += i + ' x ' + j + ' = ' + (i * j) + (j == 9 ? '' : '\n');
            }
            message7.innerText += (i == 9 ? '' : '\n\n');
        }
    }
}