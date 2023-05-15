const screenOutput = document.querySelector('.screen-output')
const number = document.querySelector('.number')
const operation = document.querySelector('.operation')
const clearButton = document.getElementById('clear-btn')
const allButtons = document.querySelectorAll('.btn')
const equalsButton = document.getElementById('equals-btn')
const multiplicationButton = document.getElementById('multiplication-btn')
const divisionButton = document.getElementById('division-btn')
const additionButton = document.getElementById('addition-btn')
const subtractionButton = document.getElementById('subtraction-btn')



// This displays what has been clicked
allButtons.forEach(button => {
      button.addEventListener('click', () => {
        screenOutput.innerText += button.textContent;
      });
});

// Clear button will run clearScreen function when its clicked
clearButton.addEventListener('click', clearScreen)
// Equals button
equalsButton.addEventListener('click', calculateAnswer);



function calculateAnswer() {
      const whatsShowing = screenOutput.innerText;
      if (whatsShowing.includes('=')) {
        let result = eval(whatsShowing.replace('=', ''));
        screenOutput.innerText = result;
      } else {
        // Wait for the equal sign to be pressed
      }
}
    

function clearScreen() {
      screenOutput.innerText = '';
}

    