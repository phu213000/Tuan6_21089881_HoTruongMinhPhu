let input = '';
let result = '';
let operator = '';
let lastInput = '';
let clear = false;

const screenInput = document.getElementById('input');
const screenResult = document.getElementById('result');
const keys = document.querySelector('.keys');

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target;

        if (key.classList.contains('operator')) {
            operator = key.textContent;
            input = result + operator;
            screenInput.value = input;
            clear = true;
        } else if (key.classList.contains('decimal')) {
            if (clear) {
                input = '0.';
                screenInput.value = input;
                clear = false;
            } else if (!input.includes('.')) {
                input += '.';
                screenInput.value = input;
            }
        } else if (key.classList.contains('clear')) {
            input = '';
            result = '';
            operator = '';
            screenInput.value = input;
            screenResult.value = result;
        } else if (key.classList.contains('calculate')) {
            let mathExp = result + operator + lastInput;
            result = eval(mathExp);
            screenResult.value = result;
            input = '';
            operator = '';
        } else {
            if (clear) {
                input = key.textContent;
                screenInput.value = input;
                clear = false;
            } else {
                input += key.textContent;
                screenInput.value = input;
            }
            lastInput = key.textContent;
        }
    }
});