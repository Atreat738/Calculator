//This first section declares every textbox and button in javascript
const container = document.querySelector('#container');
const clearButton = document.querySelector('#clearButton');
const deleteButton = document.querySelector('#deleteButton');
const operatorButton = document.querySelector('.operatorButton');
const buttonDivide = document.querySelector('#buttonDivide');
const buttonMultiply = document.querySelector('#buttonMultiply');
const buttonSubtract = document.querySelector('#buttonSubtract');
const buttonAddition = document.querySelector('#buttonAddition');
const buttonDecimal = document.querySelector('#buttonDecimal');
const numberButton = document.querySelector('.numberButton');
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

//The functions below will define the operator functions

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    num1 * num2;
}

function divide(num1, num2) {
    num1 / num2;
}


function operate(num1, operator, num2) {
    if (operator == add) {
        textDisplay.textContent = `${num1} + ${num2}`;
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

container.addEventListener('click', clickButton);

function clickButton(e) {
    if (e.target !== e.currentTarget && e.target !== textDisplayContainer) {
        let numText = textDisplay.textContent;
        if (e.target == clearButton) {
                textDisplay.textContent = 0;
            } else if (e.target == deleteButton) {
                let newStr = numText.slice(0, -1);
                textDisplay.textContent = newStr;
                if (newStr == '') {
                    textDisplay.textContent = 0;
                } 
                return num1 = parseInt(numText);               
            } else {                   
                    if (textDisplay.textContent == 0 && e.targert !== buttonDecimal) {
                        return textDisplay.textContent = e.target.textContent;
                    }
                    textDisplay.textContent += e.target.textContent;
                    numText = e.target.textContent;
                    return num1 = parseInt(e.target.textContent);                   
            }
    }
}

//input num1, 
//if the beginning number is zero and no operator is pressed, the first input number should replace 0. 
//and then an operator, 
//once the operator is called, the next input will be num2.
//and then = should return the final result.

//let equation = {num1: num1, operator: operator, num2: num2};
