function createMathExpression(integers, number) { 
  if(Array.isArray(integers)){
    if (integers.length == 1) {
      return integers[0] == number;
    } else {
      for(let i=0; i<integers.length; i++){
        const newArray = integers.slice();
        newArray.splice(i, 1);
        const element = integers[i];
        const b = (element < number && createMathExpression(newArray, number - element)) ||
              (element > number && createMathExpression(newArray, number + element)) ||
              (number%element == 0 && createMathExpression(newArray, number/element));
        if(b){
          return b;
        }
      }
      return false;
    }
  }  
} 
console.log(createMathExpression([1,2,3,4,5], 35));
console.log(createMathExpression([1,1, 1, 1, 1], 35));
console.log(createMathExpression([1,2, 3, 7], -10));