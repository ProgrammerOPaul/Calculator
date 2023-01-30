const display = document.getElementById('display');

function add(num1, num2){
    return num1 + num2
}

function subtract(num1, num2){
    return num1 - num2
}

function multiply(num1, num2){
    return num1 * num2
}

function divide(num1, num2){
    return num1 / num2
}

function operate(operator, num1, num2){
    switch(operator){
        case '+':
            console.log(add(3,5));
            break;

        case '-':
            console.log(subtract(3,5));
            break;

        case '+':
            console.log(multiply(3,5));
            break;

        case '+':
            console.log(divide(3,5));
            break;
    }
}

function calculator(){
    const numbers = document.getElementsByClassName('numbers');
    const operators = document.getElementsByClassName('')
    for (let i = 0; i < numbers.length; i++){
        numbers[i].addEventListener('click', function(){
            display.value += this.value;
        })
    }

}


calculator()