const display = document.getElementById('display');
let currentInput = '';
let previousInput = '';
let operator = '';

const updateDisplay = (value) => {
  display.textContent = value || '0';
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

document.querySelector('.equal').addEventListener('click', () => {
  if (currentInput && previousInput && operator) {
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);
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
        result = num1 / num2;
        break;
      default:
        result = 0;
    }

    updateDisplay(result);
    currentInput = '';
    previousInput = '';
    operator = '';
  }
});

document.querySelector('.clear').addEventListener('click', () => {
  currentInput = '';
  previousInput = '';
  operator = '';
  updateDisplay('');
});
