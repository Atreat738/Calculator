//This first section declares every textbox and button in javascript
const container = document.querySelector('#container');
const clearButton = document.querySelector('#clearButton');
const deleteButton = document.querySelector('#deleteButton');
const operators = document.querySelectorAll('.operatorButton');
const buttonDivide = document.querySelector('#buttonDivide');
const buttonMultiply = document.querySelector('#buttonMultiply');
const buttonSubtract = document.querySelector('#buttonSubtract');
const buttonAddition = document.querySelector('#buttonAddition');
const buttonDecimal = document.querySelector('#buttonDecimal');
const numberButtons = document.querySelectorAll('.numberButton');
const button0 = document.querySelector('#button0');
const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const button4 = document.querySelector('#button4');
const button5 = document.querySelector('#button5');
const button6 = document.querySelector('#button6');
const button7 = document.querySelector('#button7');
const button8 = document.querySelector('#button8');
const button9 = document.querySelector('#button9');
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


function getDisplayValue() {
    return textDisplay.textContent;
}
//let equation = {firstNum: num1, operator: operator, secondNum: num2};

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

//function needs to call the correct button value
//must save the value into a variable to use later
//must change textbox value to display the correct button value

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
        textDisplay.textContent = e.target.textContent;
    })
});

deleteButton.addEventListener('click', (e) => {
    let newStr = textDisplay.textContent.slice(0, -1);
    textDisplay.textContent = newStr;
    if (newStr == '') {textDisplay.textContent = 0;}
});

clearButton.addEventListener('click', () =>{
    textDisplay.textContent = 0;
});
//input num1, 
//if the beginning number is zero and no operator is pressed, the first input number should replace 0. 
//and then an operator, 
//once the operator is called, the next input will be num2.
//and then = should return the final result. = will also trigger the math functions/operate


// equation.firstNum = parseInt(textDisplay.textContent); 
// console.log(equation.firstNum);   
// console.log(e.target);