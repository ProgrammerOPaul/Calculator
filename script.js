const display = document.getElementById('display');
const numbers = document.getElementsByClassName('numbers');
const operators = document.getElementsByClassName('operators');
const clearBtn = document.getElementById('clear');
const deleteBtn = document.getElementById('delete');
const equalsBtn = document.getElementById('equals');
let num1 = null;
let num2 = null;
let op = '';
let check = 0;
let start = "no"

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
        num1 = parseFloat(display.value);
        op = operator;
        start = 'yes'
    }
    else{
        num2 = parseFloat(display.value);
        display.value = mathOperations(op, num1, num2).toFixed(2);
        num1 = null;
        num2 = null;
        op = '';
        check = 0;
    }
}

function clear(){
    num1 = null;
    num2 = null;
    display.value = 0;
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
            } else if (op != '' && check == 0){
                display.value = "";
                check = 1;
            };
            display.value += this.value;    
        })};

    for (let i = 0; i < operators.length; i++){
        operators[i].addEventListener('click', function(){
            if (start == "yes"){
                console.log("im in")
                operate(this.value);
                num1 = parseFloat(display.value);
                op = this.value;
                check = 0;
            } else  {
                operate(this.value);
            }
    })};
}

calculator();
clearBtn.addEventListener('click', clear);
deleteBtn.addEventListener('click', deleteSpc)
equalsBtn.addEventListener('click', function(){
    if (num1 != null && op != ""){
        operate(op);
    }
})