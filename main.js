function add (num1, num2) {
    return num1 + num2;
}

function subtract (num1, num2) {
    return num1 - num2;
}

function multiply (num1, num2) {
    return num1 * num2;
}

function divide (num1, num2) {
    return num1 / num2;
}


function operate (operator, num1, num2) {
    switch(operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        Default:
            break;
    }
}

//puts numbers on display when the key is clicked
function numberClick () {
    const displayText = document.querySelector("#displayText")
    const numberButtons = document.querySelectorAll(".number");

    //loops through each button and makes them appear on display
    for (const numberButton of numberButtons) {
        numberButton.addEventListener('click', () => {
            displayText.innerHTML += numberButton.textContent;
        })
    }
// 

}

numberClick();