const x = {};
const y = {};
console.log(x);
console.log(y);
console.log(x.toString());
console.log(x.__proto__ === y.__proto__);

const array = [];
console.log(array);

console.clear();

function CoffeeMachine(beans){
  this.beans = beans;
  // Instance Member Level
  // this.makeCoffee = shots => {
  //   console.log('making...');
  // }
}

CoffeeMachine.prototype.makeCoffee = () => {
  console.log('making...');
}

const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);

console.log(machine1);
console.log(machine2);

function LatteMachine(milk){
  this.milk = milk;
}

const latteMachine = new LatteMachine(123);
console.log(latteMachine);
LatteMachine.prototype = Object.create(CoffeeMachine.prototype);
console.log(latteMachine);
latteMachine.makeCoffee();

// prototype은 js에서 객체지향프로그래밍, 상속, 코드의 재사용을 위해 만들어 짐