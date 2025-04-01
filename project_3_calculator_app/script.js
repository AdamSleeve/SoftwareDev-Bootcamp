const display = document.getElementById('display');
let currentInput = '';
let previousInput = '';
let operator = '';

const updateDisplay = (value) => {
  display.textContent = value || '0';
};

const clearCalculator = () => {
  currentInput = '';
  previousInput = '';
  operator = '';
  updateDisplay('');
};

const calculate = () => {
  const num1 = parseFloat(previousInput);
  const num2 = parseFloat(currentInput);
  if (isNaN(num1) || isNaN(num2)) return;

  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '−':
      result = num1 - num2;
      break;
    case '×':
      result = num1 * num2;
      break;
    case '÷':
      result = num2 === 0 ? 'Cannot divide by zero' : num1 / num2;
      break;
    default:
      result = 'Error';
  }

  updateDisplay(result);
  currentInput = '';
  previousInput = '';
  operator = '';
};

document.querySelectorAll('.digit').forEach(button => {
  button.addEventListener('click', () => {
    currentInput += button.dataset.value;
    updateDisplay(currentInput);
  });
});

document.querySelectorAll('.operation').forEach(button => {
  button.addEventListener('click', () => {
    if (currentInput) {
      previousInput = currentInput;
      currentInput = '';
      operator = button.dataset.operation;
    }
  });
});

document.querySelector('.equal').addEventListener('click', calculate);

document.querySelector('.clear').addEventListener('click', clearCalculator);
