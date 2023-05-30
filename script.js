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

  const operatorButtons = document.querySelectorAll('.grid-operator');  
  const display = document.querySelector('.display');
  const valueDisplay = document.createElement('p');
  const buttons = document.querySelectorAll("button");
  const makeNegButton = document.querySelector('#negative');
  const calculateButton = document.querySelector('#equals');


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
    }))
    document.addEventListener('keydown', function(e){
      if((e.key >= 0 && e.key <=9) || e.key === '.'){
        if(operator === ''){
          value1 += e.key;
          valueDisplay.textContent = value1;
          display.appendChild(valueDisplay);
          console.log(value1);
        } else {
          value2 += e.key;
          valueDisplay.textContent = value2;
          display.appendChild(valueDisplay);
          operatorButtons.forEach(button => button.classList.remove('clicked'));
          console.log(value2);
        }
    }});  
  }

  function getOperator(){
    buttons.forEach(button => button.addEventListener('click', function(e){
      if(e.target.classList.contains('grid-operator')){
        if((e.target.id === '-' || e.target.id === '+' || e.target.id === '/' || e.target.id === '*') && value1 === ''){
            alert('Please enter a value.');
          } else {
          e.target.classList.add('clicked');   
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
  
document.addEventListener('keyup', function(e){
  if(e.key === 'Escape'){
    this.location.reload();
  }
})

getValues();
getOperator();
makeNegative();
calculate();
