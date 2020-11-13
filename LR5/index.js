//Task 1

function ValidateThePhoneNumber(number) {
    let re = new RegExp(/^(\+38[- ]?)?(0((39)|(50)|(6[3678])|(73)|(89)|(9[1-9]))[- ]?([0-9]{3})[- ]?([0-9]{4}))$/);
    return re.test(number);
}

console.log('Task 1');
console.log('+38-093-695-4173', ValidateThePhoneNumber('+38-093-695-4173'));
console.log('+38 093 695 4173', ValidateThePhoneNumber('+38 093 695 4173'));
console.log('+380936954173', ValidateThePhoneNumber('+380936954173'));
console.log('093-695-4173', ValidateThePhoneNumber('093-695-4173'));
console.log('093 695 4173', ValidateThePhoneNumber('093 695 4173'));
console.log('0936954173', ValidateThePhoneNumber('0936954173'));
console.log('0836954173', ValidateThePhoneNumber('0836954173'));
console.log('+0936954173', ValidateThePhoneNumber('+0936954173'));

//Task 2

function ValidatePostIndexLviv(index) {
    let re = new RegExp(/^(790([0-9]{2}))$/);
    return re.test(index);
}

console.log('Task 2');
console.log('79000', ValidatePostIndexLviv('79000'));
console.log('78000', ValidatePostIndexLviv('78000'));
console.log('79099', ValidatePostIndexLviv('79099'));

//Task 3

function ValidateThePhoneNumberOfLviv(number) {
    let re = new RegExp(/^(\+38[- ]?)?((0[\(]?32[\)]?[- ]?)?2([0-9]{2})[- ]?([0-9]{2})[- ]?([0-9]{2}))$/);
    return re.test(number);
}

console.log('Task 3');
console.log('+38-0(32)-297-77-77', ValidateThePhoneNumberOfLviv('+38-0(32)-297-77-77'));
console.log('2977777', ValidateThePhoneNumberOfLviv('2977777'));
console.log('0322977777', ValidateThePhoneNumberOfLviv('0322977777'));

//Task 4

function ClearCommentHTML(code) {
    let re = new RegExp(/<\!--.*-->/, 'g');
    code = code.replace(re, '');
    return code;
}

console.log('Task 4');
console.log('<!-- comment --><div></div>', ClearCommentHTML('<!-- comment --> <div></div>'));

//Task 5

function ClearHTMLTags(code) {
    let re = new RegExp(/((<p>.*<\/p>)|(<font>.*<\/font>)|(<br>)|(<hr>))/, 'g');
    code = code.replace(re, '');
    return code;
}

console.log('Task 5');
console.log('<div><p></p><font></font><br><hr></div>', ClearHTMLTags('<div><p></p><font></font><br><hr></div>'));

//Task 6

function ClearSpace(text) {
    let re = new RegExp(/\s+/, 'g');
    text = text.replace(re, ' ').trim();
    return text;
}

console.log('Task 6');
console.log(' текст  із  пробілами ', '|', ClearSpace(' текст  із  пробілами '));

//Task 7

function ValidateYear(year) {
    let re = new RegExp(/^((19[0-9]{2})|(20[0-9]{2}))$/);
    return re.test(year);
}

console.log('Task 7');
console.log('1900', ValidateYear('1900'));
console.log('2900', ValidateYear('2900'));
console.log('2020', ValidateYear('2020'));