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
    
    const numberButtons = document.querySelectorAll(".number");

    //loops through each button and makes them appear on display
    for (const numberButton of numberButtons) {

        numberButton.addEventListener('click', () => {

            if (firstClickAfterOperator == true) {

                displayText.replaceChildren(); //clears display

                firstClickAfterOperator = false;
            }

            displayText.innerHTML += numberButton.textContent;
            displayValue += "" + numberButton.textContent;
        })
    }

}

//does the operation of the specific button when clicked
function operatorClick () {
    const operatorButtons = document.querySelectorAll(".operator");
    let lastOperation;

    for (const operatorButton of operatorButtons) {
        operatorButton.addEventListener('click', () => {
            
            if (firstClickOperator == true) {
                storedValueA = Number(displayValue);
                displayValue = 0;
                firstClickOperator = false;
            
            }
            else {

                storedValueB += storedValueA;

                switch (lastOperation) {
                    case "+": 
                        storedValueB = add(storedValueB, Number(displayValue));
                        break;
                    case "-":
                        storedValueB = subtract(storedValueB, Number(displayValue));
                        break;

                    case "*":
                        storedValueB = multiply(storedValueB, Number(displayValue));
                        break;

                    case "/":
                        if (Number(displayValue) == 0) {
                            alert("can't divide by zero");
                            reset ();
                            break;
                        }
                        else {
                            storedValueB = divide(storedValueB, Number(displayValue));
                            break;
                        }
                    case "=":
                        break;
                        
                }

                storedValueA = 0;
                displayValue = 0;

                displayText.replaceChildren(); //clears display

                //displays calculated total as rounded to 2 decimals
                displayText.replaceChildren(Math.round(storedValueB * 100) / 100); 
            }

            lastOperation = operatorButton.textContent;

            console.log("A: " + storedValueA);
            console.log("B: " + storedValueB);
            console.log("Operator: " + lastOperation);

            firstClickAfterOperator = true;
            
            


        })
    }
}

//clears the calculator back to original state when the button is clicked
function clearClick () {
    const clearButton = document.querySelector("#clear");

    clearButton.addEventListener('click', () => {
        reset();
    })
}

//resets calculator back to original state
function reset () {
    displayValue = 0;
    storedValueA = 0;
    storedValueB = 0;
    firstClickAfterOperator = true;
    firstClickOperator = true;
    displayText.replaceChildren(displayValue);
}


const displayText = document.querySelector("#displayText");

let displayValue = 0; //stores the value of the number that is on display as a string

let storedValueA = 0; //stores the first value of the calculation
let storedValueB = 0; //stores the second value of the calcuation

let firstClickOperator = true; //checks to see if its the first click. 
let firstClickAfterOperator = false;


numberClick();
operatorClick();
clearClick();