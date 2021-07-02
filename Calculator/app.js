//This first section declares every textbox and button in javascript
const clearButton = document.querySelector('#clearButton');
const deleteButton = document.querySelector('#deleteButton');
const operators = document.querySelectorAll('.operatorButton');
const buttonDecimal = document.querySelector('#buttonDecimal');
const numberButtons = document.querySelectorAll('.numberButton');
const buttonEquals = document.querySelector('#buttonEquals');
const textDisplayContainer = document.querySelector('#textboxContainer');
const textDisplay = document.querySelector('#textDisplay p');

let num1 = null;
let currentOperator = null;
let num2 = null;
let result = null;

//The functions below will define the operator functions
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 == 0) {
        alert('I don\'t want to divide by zero!');
        textDisplay.textcontent = 0;
    } else { return num1 / num2; }
}


function operate(num1, operator, num2) {
    if (operator == add) {
        return add(num1, num2);
    } else if (operator == subtract) {
        return subtract(num1, num2);
    } else if (operator == multiply) {
        return multiply(num1, num2);
    } else if (operator == divide) {
        return divide(num1, num2);
    }
}   


function getDisplayValue() {
    return textDisplay.textContent;
}

function setOperator(operator) {
    if(currentOperator == null) {
        currentOperator = operator;
    }
}

function setNum(value) {
    if(num1 == null) {
    num1 = value;
    } else {
    num2 = value;
    }
}


numberButtons.forEach((numberButton) => {
    numberButton.addEventListener('click', (e) => {
        if (textDisplay.textContent == 0 && e.target !== buttonDecimal) {
            return textDisplay.textContent = e.target.textContent;
        }
        textDisplay.textContent += e.target.textContent;       
    })
});

operators.forEach((operator) => {
    operator.addEventListener('click', (e) => {
        setNum(getDisplayValue());
        textDisplay.textContent = e.target.textContent;
        setOperator(e.target);        
    })
});

deleteButton.addEventListener('click', (e) => {
    let newStr = textDisplay.textContent.slice(0, -1);
    textDisplay.textContent = newStr;
    if (newStr == '') {textDisplay.textContent = 0;}
});

clearButton.addEventListener('click', () =>{
    num1 = null;
    currentOperator = null;
    num2 = null;
    textDisplay.textContent = 0;
});

// equation.firstNum = parseInt(textDisplay.textContent); 
