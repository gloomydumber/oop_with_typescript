console.log(this);

function simpleFunc(){
  console.log(this);
}

simpleFunc();

console.clear();

class Counter {
  count = 0;
  // increase = function () {
  //   console.log(this);
  // }
  increase = () => {
    console.log(this);
  }
}

const counter = new Counter();
counter.increase();
const caller = counter.increase;
// const caller = counter.increase.bind(counter);
caller(); // undefined;

class Bob {

}

const bob = new Bob();
bob.run = counter.increase;
bob.run();

// js에서의 this는 호출하는 주체에 따라 달라 짐.. arrow function을 쓰면 binding할 필요 없어 짐.