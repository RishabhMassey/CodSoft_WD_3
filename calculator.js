let currentDisplay = ''; 

function clearDisplay() {
  currentDisplay = '';
  document.querySelector('#res').value = currentDisplay;
}

function deleteLast() {
  currentDisplay = currentDisplay.slice(0, -1);
  document.querySelector('#res').value = currentDisplay;
}

function addToDisplay(value) {
  currentDisplay += value;
  document.querySelector('#res').value = currentDisplay;
}

function calculate() {
  try {
    currentDisplay = currentDisplay.replace(/%/g, '/100'); 
    currentDisplay = eval(currentDisplay).toString();
  } catch (error) {
    currentDisplay = 'Error';
  }
  document.querySelector('#res').value = currentDisplay;
}