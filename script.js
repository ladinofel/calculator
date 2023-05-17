const add = ((a,b) => a + b);
const substract = ((a,b) => a - b);
const multiply = ((a,b) => a * b);
const divide = ((a,b) => a / b);

let value1 = 'empty';
let value2 = 'empty';
let operator = 'empty';

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

  const buttons = document.querySelectorAll("button");
  buttons.forEach(button => button.addEventListener('click', function(e){
    if(e.target.classList.contains('grid-num')){
      if(value1 === 'empty'){
        value1 = Number(e.target.id);
        console.log(value1);
      } else {
        value2 = Number(e.target.id);
        console.log(value2);
      }
    } else if(e.target.classList.contains('grid-operator')){
      if(operator === 'empty'){
        operator = e.target.id;
        console.log(operator);
      }
    } else if(e.target.id === 'equals'){
      console.log(operate(value1, value2, operator));
    } else {      
      alert('You clicked neither a number not an operand!')}
  }));
  
  






