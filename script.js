//Initializing all variables
let value1 = '';
let value2 = '';
let operator = '';
let result = 0;

const operatorButtons = document.querySelectorAll('.grid-operator');  
const display = document.querySelector('.display');
const valueDisplay = document.createElement('p');
const buttons = document.querySelectorAll("button");
const makeNegButton = document.querySelector('#negative');
const calculateButton = document.querySelector('#equals');
const pointButton = document.querySelector('.point');
const clearButton = document.querySelector('#clear');

//Creating functions for the operations
const add = ((a,b) => result = Math.round(((a + b) + Number.EPSILON) * 100 ) / 100);
const substract = ((a,b) => result = Math.round(((a - b) + Number.EPSILON) * 100 ) / 100);
const multiply = ((a,b) => result = Math.round(((a * b) + Number.EPSILON) * 100 ) / 100);
const divide = ((a,b) => {
  if(b === 0){
    alert('You cannot divide by zero!')} else {
    return result = Math.round(((a / b) + Number.EPSILON) * 100) / 100}});

//This function does the math once the values and operator have been provided    
function operate(value1, value2, operator){
  if(operator === '+'){
    return add(value1,value2);
  } else if(operator === '-'){
    return substract(value1,value2);
  } else if( operator === '*'){
    return multiply(value1,value2);
  } else if( operator === '/'){
    return divide(value1,value2);
  }
  };


//This function gest values by listening for clicks and keys
function getValues(){
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
        operatorButtons.forEach(button => button.classList.remove('clicked'));
        console.log(value2);
      }
    }
    pointButton.addEventListener('click', function(){
      if(operator === '' && !value1.includes('.')){
        value1 += '.';
        valueDisplay.textContent = value1;         
        display.appendChild(valueDisplay);
        console.log(value1);         
      } else if(operator === '' && value1.includes('.')){
        return false;          
      } else if(operator != '' && !value2.includes('.')){
        value2 += '.';
        valueDisplay.textContent = value2;         
        display.appendChild(valueDisplay);
        console.log(value2);
      } else if(operator != '' && value2.includes('.')){
        return false;  
      }
    })
  }))
  document.addEventListener('keydown', function(e){
    if((e.key >= 0 && e.key <=9)){
      if(operator === ''){
        value1 += e.key;
        valueDisplay.textContent = value1;         
        display.appendChild(valueDisplay);
        console.log(value1);         
      } else if(operator != ''){
        value2 += e.key;
        valueDisplay.textContent = value2;
        display.appendChild(valueDisplay);
        operatorButtons.forEach(button => button.classList.remove('clicked'));
        console.log(value2);
      }}
      if(e.key === '.'){
        if(operator === '' && !value1.includes('.')){
          value1 += e.key;
          valueDisplay.textContent = value1;         
          display.appendChild(valueDisplay);
          console.log(value1);         
        } else if(operator === '' && value1.includes('.')){
          return false;          
        } else if(operator != '' && !value2.includes('.')){
          value2 += e.key;
          valueDisplay.textContent = value2;         
          display.appendChild(valueDisplay);
          console.log(value2);
        } else if(operator != '' && value2.includes('.')){
          return false;  
        }
      }
  } )
};
   
//This function gets the operator by listening for clicks and keys
function getOperator(){
  buttons.forEach(button => button.addEventListener('click', function(e){
    if(e.target.classList.contains('grid-operator')){
      if((e.target.id === '-' || e.target.id === '+' || e.target.id === '/' || e.target.id === '*') && value1 === ''){
          alert('Please enter a value.');
        } else {
        e.target.classList.add('clicked'); 
        pointButton.disabled = false;  
        if(operator === ''){
          operator = e.target.id;          
          console.log(operator);
        } else if(operator != ''){
          operatorButtons.forEach(button => button.classList.remove('clicked'));
          e.target.classList.add('clicked');  
          console.log(operate(Number(value1), Number(value2), operator));   
          result = result.toString();     
          valueDisplay.textContent = result;
          display.appendChild(valueDisplay);
          value1 = result;
          value2 = '';
          operator = e.target.id;
          pointButton.disabled = false; 
        } 
      }}
  } ))  
  document.addEventListener('keydown', function(e){
    if(e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/'){
      if((e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') && value1 === ''){
        alert('Please enter a value.');
      } else {
        if(operator === ''){
          operator = e.key,
          operatorButtons.forEach(button => {
            if(e.key === button.id){
              button.classList.add('clicked');
            }
          })
          console.log(operator);
        } else if(operator != ''){
            console.log(operate(Number(value1), Number(value2), operator));   
            result = result.toString();     
            valueDisplay.textContent = result;
            display.appendChild(valueDisplay);
            value1 = result;
            value2 = '';
            operator = e.key;
            operatorButtons.forEach(button => {
              if(e.key === button.id){
                button.classList.add('clicked');
              }
            })
          } 
        }
  } } )  
}

//This function turns numbers into negative values
function makeNegative(){
  makeNegButton.addEventListener('click', function(){
    if(value1 === ''){
      alert('Please enter a value.');
    } else {
    if(value1 != '' && value1.charAt(0) === '-' && operator === ''){
      value1 = value1.slice(1);      
      valueDisplay.textContent = value1; 
    }  else if(value1 != '' && operator === ''){
      value1 = '-' + value1;       
      valueDisplay.textContent = value1; 
      console.log(value1); 
    } else if(value2 != '' && value2.charAt(0) === '-'){
      value2 = value2.slice(1);      
      valueDisplay.textContent = value2; 
    } else if(value2 != '' && operator != ''){
      value2 = '-' + value2;
      valueDisplay.textContent = value2;
      console.log(value2);
    }}
  })
}

//This function execute calculations when the equals button is clicked or enter is pressed.
function calculate(){
  calculateButton.addEventListener('click', function() {
    if(value1 === '' || operator === '' || value2 === ''){
      alert('Please enter some values!');
    } else {
      console.log(operate(Number(value1), Number(value2), operator));
      result = result.toString();     
      valueDisplay.textContent = result;
      display.appendChild(valueDisplay);
      value1 = result;
      value2 = '';
      operator = '';
    }
  })
  document.addEventListener('keydown', function(e){
    if(e.key === 'Enter'){
      if(value1 === '' || operator === '' || value2 === ''){
        alert('Please enter some values!');
      } else {
        console.log(operate(Number(value1), Number(value2), operator));
        result = result.toString();     
        valueDisplay.textContent = result;
        display.appendChild(valueDisplay);
        value1 = result;
        value2 = '';
        operator = '';
      }}
  } )
}  
 
//This piece of code reinitializes everything when Escape is pressed.
document.addEventListener('keyup', function(e){
  if(e.key === 'Escape'){
    display.replaceChildren();
    value1 = '';
    value2 = '';
    operator = '';
    result = 0;
  }
})


getValues();
getOperator();
makeNegative();
calculate();


