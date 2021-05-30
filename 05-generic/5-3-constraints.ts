interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log(`full time!!`);
  }

  workFullTime() {

  }
}

class PartTimeEmployee implements Employee{
  pay(){
    console.log(`part time!!`);
  }

  workPartTime(){

  }
}

// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 위험
function payBad(employee: Employee) : Employee {
  employee.pay();
  return employee;
}

function pay<T extends Employee>(employee: T) :T{
  employee.pay();
  return employee
}

const bill = new FullTimeEmployee();
const steve = new PartTimeEmployee();

bill.workFullTime();
steve.workPartTime();

const billAfterPay = pay(bill);
const steveAfterPay = pay(steve);

const obj = {
  name: 'bill',
  age: 20,
};

const obj2 = {
  animal: 'dog'
}

console.log(getValue(obj, 'name')); // bill
console.log(getValue(obj, 'age')); // 20
console.log(getValue(obj2, 'animal')); // dog

function getValue<T, K extends keyof T>(obj: T, key: K): T[K]{
  return obj[key];
}