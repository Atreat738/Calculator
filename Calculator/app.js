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
let toBeCleaned = false;
let result = null;

//The functions below will define the operator functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b == 0) {
        alert('I don\'t want to divide by zero!');
        textDisplay.textcontent = 0;
    } else { return a / b; }
}


function operate(a, b, currentOperator) {
    if (currentOperator == add) {
        return add(a, b);
    } else if (currentOperator == subtract) {
        return subtract(a, b);
    } else if (currentOperator == multiply) {
        return multiply(a, b);
    } else if (currentOperator == divide) {
        return divide(a, b);
    }
}   

//displayValue is used to chain numbers together
function displayValue(value) {
    textDisplay.textContent = textDisplay.textContent + value;
}

function getDisplayValue() {
    return textDisplay.textContent;
}

function setOperator(operator) {
    if(currentOperator == null) {
        return currentOperator = operator;
    } else if(num1 && num2) {
        result = operate(Number(num1), Number(num2), currentOperator);
        textDisplay.textContent = "";
        displayValue(result);
        num1 = result;
        num2 = null;
        return currentOperator = operator;
    }
}

function setNum(value) {
    if(num1 == null) {     
        return num1 = getDisplayValue();
    } else if (num2 == null && num1 != null) {
        console.log(num1);
        console.log(currentOperator);
        return num2 = getDisplayValue();
    }
}

function createResult() {
    if(num1 && currentOperator && !toBeCleaned && !num2) {
        setNum(getDisplayValue());
        return operate(Number(num1), Number(num2), currentOperator);
    } else {
        return false;
    }
}


numberButtons.forEach((numberButton) => {
    numberButton.addEventListener('click', (e) => {
        if (textDisplay.textContent == 0 && e.target !== buttonDecimal) {
            return textDisplay.textContent = e.target.textContent;
        }
        if(toBeCleaned == true) {
            textDisplay.textContent = "";
        }
        toBeCleaned = false;
        displayValue(e.target.textContent);               
    })
})

operators.forEach((operator) => {
    operator.addEventListener('click', (e) => {
        setNum();
        textDisplay.textContent = e.target.textContent;
        setOperator(e.target.id);  
        toBeCleaned = true;      
    })
})

deleteButton.addEventListener('click', () => {
    let newStr = textDisplay.textContent.slice(0, -1);
    textDisplay.textContent = newStr;
    if (newStr == '') {textDisplay.textContent = 0;}
})

clearButton.addEventListener('click', () =>{
    num1 = null;
    currentOperator = null;
    num2 = null;
    textDisplay.textContent = 0;
})

buttonEquals.addEventListener('click', () => {
    result = createResult();
    textDisplay.textContent = "";
    displayValue(result);
    console.log(num2);
    console.log(result);
})

