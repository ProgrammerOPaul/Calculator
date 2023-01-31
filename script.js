const display = document.getElementById('display');
const numbers = document.getElementsByClassName('numbers');
const operators = document.getElementsByClassName('operators');
const clearBtn = document.getElementById('clear');
const deleteBtn = document.getElementById('delete');
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

function clear(){
    num1 = null;
    num2 = null;
    display.value = '';
}

function deleteSpc(){
    display.value = (display.value).slice(0, -1);
    if ((display.value).length <=0){
        display.value = 0;
    }
}

function calculator(){
    for (let i = 0; i < numbers.length; i++){
        numbers[i].addEventListener('click', function(){
            if (display.value == 0){
                display.value = "";
            };
            display.value += this.value;
        })};
    for (let i = 0; i < operators.length; i++){
        operators[i].addEventListener('click', function(){
            operate(this.value);
        })};
}


calculator();
clearBtn.addEventListener('click', clear);
deleteBtn.addEventListener('click', deleteSpc)