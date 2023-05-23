const add = ((a,b) => result = Math.round(((a + b) + Number.EPSILON) * 100 ) / 100);
const substract = ((a,b) => result = Math.round(((a - b) + Number.EPSILON) * 100 ) / 100);
const multiply = ((a,b) => result = Math.round(((a * b) + Number.EPSILON) * 100 ) / 100);
const divide = ((a,b) => {
  if(b === 0){
    alert('You cannot divide by zero!')} else {
    return result = Math.round(((a / b) + Number.EPSILON) * 100) / 100}});


let value1 = '';
let value2 = '';
let operator = '';
let result = 0;

function operate(value1, value2, operator){
  if(operator === 'add'){
    return add(value1,value2);
  } else if(operator === 'substract'){
    return substract(value1,value2);
  } else if( operator === 'multiply'){
    return multiply(value1,value2);
  } else {
    return divide(value1,value2);
  }
  };

  function startsCalculator(){
  const display = document.querySelector('.display');
  const valueDisplay = document.createElement('p');
  const buttons = document.querySelectorAll("button");
  buttons.forEach(button => button.addEventListener('click', function(e){
    if(e.target.classList.contains('grid-num')){      
      if(operator === ''){
        value1 += e.target.id;        
        valueDisplay.textContent = value1;
        display.appendChild(valueDisplay);
        console.log(value1);
      } else {
        value2 += e.target.id;        
        valueDisplay.textContent = value2;
        display.appendChild(valueDisplay);
        console.log(value2);
      }
    } else if(e.target.classList.contains('grid-operator')){
      if(operator === ''){
        operator = e.target.id;
        console.log(operator);
      } else if(operator != ''){
        console.log(operate(Number(value1), Number(value2), operator));
        valueDisplay.textContent = result;
        display.appendChild(valueDisplay);
        value1 = result;
        value2 = '';
        operator = e.target.id;
      }
    } else if(e.target.id === 'equals'){
      if(value1 === '' || operator === '' || value2 === ''){
        alert('Please enter some values!');
      } else {
        console.log(operate(Number(value1), Number(value2), operator));
        valueDisplay.textContent = result;
        display.appendChild(valueDisplay);
        value1 = result;
        value2 = '';
        operator = '';
      }
    } else if(e.target.id === 'clear-entry'){
      alert('clear entry');
    }
  }));
};
  
startsCalculator();






