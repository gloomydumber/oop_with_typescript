// Type Inference

let text = 'hello';
function print(message = 'hello'){
  console.log(message);
}

function adds(x: number, y: number): number{
  return x + y;
}
const result = adds(1, 2);