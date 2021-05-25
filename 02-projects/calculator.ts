/* My owns */

// type option = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';

// function calculate(option:option, num1:number, num2:number) :number{
//   if(option === 'add'){
//     return num1 + num2;
//   }
//   else if(option === 'substract'){
//     return num1 - num2;
//   }
//   else if(option === 'multiply'){
//     return num1 * num2;
//   }
//   else if(option === 'divide'){
//     return num1 / num2;
//   }
//   else if(option === 'remainder'){
//     return num1 % num2;
//   }
//   else return 0;
// }

/* answers */

type Command = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';

function calculate(command: Command, a:number, b:number) : number {
  switch(command){
    case 'add':
      return a + b;
    case 'substract':
      return a - b;
    case 'multiply':
      return a * b;
    case 'divide':
      return a / b;
    case 'remainder':
      return a & b;
    default:
      throw Error('unkown command');
  }
}