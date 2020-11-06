function Calculator() {
    this.a = 0;
    this.b = 0;

    this.read = function() {
        this.a = parseInt(prompt('Input first number', '0'));
        this.b = parseInt(prompt('Input second number', '0'));
    };

    this.sum = function() {
        return this.a + this.b;
    };

    this.mul = function() {
        return this.a * this.b;
    };
}

let btn = document.querySelector('button');
btn.onclick = function() {
    let calculator = new Calculator();
    calculator.read();

    alert('Сума = ' + calculator.sum());
    alert('Добуток = ' + calculator.mul());
}