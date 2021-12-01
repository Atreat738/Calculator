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

//Operator functions
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
        return textDisplay.textContent = 0;
    } else { return num1 / num2; }
}


function operate(num1, num2, currentOperator) {
    if (currentOperator == 'add') {
        return add(num1, num2);
    } else if (currentOperator == 'subtract') {
        return subtract(num1, num2);
    } else if (currentOperator == 'multiply') {
        return multiply(num1, num2);
    } else if (currentOperator == 'divide') {
        return divide(num1, num2);
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
        buttonDecimal.disabled = false;
        currentOperator = operator;
    } else if(num1 && num2) {
        //this will be used to chain operators together after a result is found
        buttonDecimal.disabled = false;
        textDisplay.textContent = "";
        displayValue(result);
        num1 = result;
        num2 = null;
        currentOperator = operator;
    }
}

function setNum() {
    if(num1 == null) {     
        return num1 = getDisplayValue();
    } else {
        return num2 = getDisplayValue();
    }
}

function createResult() {
    if(num1 && currentOperator && !toBeCleaned && !num2) {
        setNum();
        return result = operate(Number(num1), Number(num2), currentOperator).toFixed(2);
    } else {
        return result = false;        
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
        displayValue(e.target.textContent); 
        toBeCleaned = false;
                      
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
    buttonDecimal.disabled = false;
})

buttonEquals.addEventListener('click', () => {
    let result = createResult();
    textDisplay.textContent = "";
    
    if (result) {
        displayValue(result);
    } else if (result == false) {
        textDisplay.textContent = 'ERROR';
    }
    console.log(num1);
    console.log(currentOperator);
    console.log(num2);
    console.log(result);
})

buttonDecimal.addEventListener('click', () => {
    //check if there is a decimal 
    if(textDisplay.textContent.includes('.')) {
        buttonDecimal.disabled = true;
    }
})