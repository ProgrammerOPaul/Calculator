const display = document.getElementById('display');
const numbers = document.getElementsByClassName('numbers');
const operators = document.getElementsByClassName('operators');
let num1 = null;
let num2 = null;

function mathOperations(operator, num1, num2){
    switch(operator){
        case '+':
            return num1 + num2;

        case '-':
            return num1 - num2;

        case '*':
            return num1 * num2;

        case '/':
            return num1 / num2;
    }};

function operate(operator){
    if (num1 == null){
        num1 = parseInt(display.value);
        display.value = "";
    }
    else{
        num2 = parseInt(display.value);
        display.value = mathOperations(operator, num1, num2);
        num1 = null;
    }
}

function calculator(){
    for (let i = 0; i < numbers.length; i++){
        numbers[i].addEventListener('click', function(){
            display.value += this.value;
        })};
    for (let i = 0; i < operators.length; i++){
        operators[i].addEventListener('click', function(){
            operate(this.value);
        })};
}


calculator();