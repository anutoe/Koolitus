const inputField = document.getElementById('input');

let isOperatorLastClicked = false;
let numbers = [];

const clickedNumber = (number) => {
    if (inputField.innerHTML === '0' || isOperatorLastClicked) {
        inputField.innerHTML = number;
    } else {
        inputField.innerHTML += number;
    }
    isOperatorLastClicked = false;
}

const clickedOperator = (operator) => {
    isOperatorLastClicked = true;
    if (operator === '+') {
        numbers.push(inputField.innerHTML);
    } else if (operator === '-') {

    }
    console.log(numbers);
}

const clickedEquals = ()=> {
    numbers.push(inputField.innerHTML);
    console.log('equals', numbers);
    input.innerHTML = 'vastus'
    
}


const clearInput = () => {
    inputField.innerHTML = '0';
}