let calculation = '';

function updateDisplay() {
  document.querySelector('.js-input')
  .value = calculation;
}

function updateCalculation(value) {
  calculation += value;
  updateDisplay();
}

function deleteLast() {
  calculation = calculation.slice(0, -1);
  updateDisplay();
}

function clearAll() {
  calculation = '';
  updateDisplay();
}

function calculateResult() {
  try {
    calculation = eval(calculation).toString();
    updateDisplay();
  } catch (error) {
    calculation = 'Error';
    updateDisplay();
  }
}
