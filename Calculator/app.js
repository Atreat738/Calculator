function add (num1, num2) {
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
        add(num1, num2);
    } else if (operator == subtract) {
        subtract(num1, num2);
    } else if (operator == multiply) {
        multiply(num1, num2);
    } else if (operator == divide) {
        divide(num1, num2);
    }
}   

//operate must call the operator and 2 numbers