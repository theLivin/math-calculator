const pageButtons = document.querySelectorAll('.btn-outline-dark');
const equalSign = document.querySelector('#equalTo');
const clear = document.querySelector('#clear');

const inputHTML = document.getElementById('input');
const outputHTML = document.getElementById('output');

const operators = ['/', '*', '+', '%', '-'];

let result = 0;
let historyValue = '0';
let currentValue = '';

// Listen for button clicks
pageButtons.forEach(function(button){
  button.addEventListener('click', function(e){
    // Get value of pressed button
    const buttonText = e.target.innerText;

    // Append clicked button value to currentValue variable
    currentValue += buttonText;
    inputHTML.innerText = currentValue;

    calculateInput();
  });
});


// Listen for key presses
document.addEventListener("keyup", function(e){
  console.log(e.key);
  pageButtons.forEach(function(button){
    if(button.innerText === e.key){
      button.click();
    }
  });
  if(e.key == "Enter"){
    equalSign.click();
  }
  if(e.key == "Delete"){
    clear.click();
  }
  if(e.key == "Backspace"){
    // Remove last character
    currentValue = currentValue.replace(currentValue[currentValue.length -1] , '');
    inputHTML.innerText = currentValue;
  }
});


// Listen for equato sign to be pressed
equalSign.addEventListener('click', function(){
  calculateInput();

  historyValue = result;
  inputHTML.innerText = currentValue = historyValue;

});

clear.addEventListener('click', function(){
  currentValue = '';
  inputHTML.innerText = currentValue;
  outputHTML.innerText = '';
});

// evaluate Input
function calculateInput(){
  // Evaluate string if first or last character is not an operator
  if( operators.includes(currentValue[0]) || operators.includes(currentValue[currentValue.length -1 ]) ){
    // Evaluate if the number is negative
    if(currentValue.length > 1 && currentValue[0] == '-' && !operators.includes(currentValue[currentValue.length -1 ]))
      result = eval(currentValue);
  }else{
    result = eval(currentValue);
  }

  outputHTML.innerText = result;

}
