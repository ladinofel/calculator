const add = ((a,b) => a + b);
const substract = ((a,b) => a - b);
const multiply = ((a,b) => a * b);
const divide = ((a,b) => a / b);

//let value1 = 0;
//let value2 = 0;
let operator = 'add';

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

operate(4,5,'add');





