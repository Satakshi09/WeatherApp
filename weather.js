let currentInput = '';
let currentOperator = '';
let firstNumber = null;

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    currentOperator = '';
    firstNumber = null;
    updateDisplay();
}

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function appendOperator(operator) {
    if (currentInput === '') return;
    if (currentOperator !== '') {
        calculateResult();
    }
    currentOperator = operator;
    if (firstNumber === null) {
        firstNumber = parseFloat(currentInput);
        currentInput = '';
    }
    updateDisplay();
}

function calculateResult() {
    if (firstNumber === null || currentOperator === '' || currentInput === '') return;
    let secondNumber = parseFloat(currentInput);
    let result = 0;

    switch (currentOperator) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/':
            if (secondNumber === 0) {
                alert("Cannot divide by zero");
                clearDisplay();
                return;
            }
            result = firstNumber / secondNumber;
            break;
    }

    currentInput = result.toString();
    currentOperator = '';
    firstNumber = result;
    updateDisplay();
}

document.addEventListener("DOMContentLoaded", function () {
    updateDisplay();
});

