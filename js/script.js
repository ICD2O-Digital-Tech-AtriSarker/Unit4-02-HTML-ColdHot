
// ELEMENTS
const celsiusInput = document.getElementById('celsiusInput');
const resultBtn = document.getElementById('resultBtn');
const outputResult = document.getElementById('outputResult');
const inputForm = document.getElementById('inputForm');

function getTemperatureState() {

  // Get user input, degrees Celsius
  let celsius = Number(celsiusInput.value);

  // if the number is less than 15, tell them it is cold outside
  // otherwise, tell them it is hot
  if (celsius < 15) {
    outputResult.innerText = "It is cold outside.";
  } else {
    outputResult.innerText = "It is hot outside.";
  }
  
  return;
}

// Cool function notation
// form validation + submit call
inputForm.onsubmit = () => {
  getTemperatureState();
  return false;
}