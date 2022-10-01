# generic

`generic` 을 이용하면, 여러 `type` 을 유연하게 처리하는 함수 및 클래스를 생성할 수 있다

```typescript
function checkNotNull<T>(arg: T | null): T {
  if (arg == null) {
    throw new Error("not valid number!");
  }
  return arg;
}

const number = checkNotNull(123);
const bool: boolean = checkNotNull(true);
```

```typescript
// either: a or b

interface Either<L, R> {
  left: () => L;
  right: () => R;
}

class SimpleEither<L, R> implements Either<L, R> {
  constructor(private leftValue: L, private rightValue: R) {}
  left(): L {
    return this.leftValue;
  }
  right(): R {
    return this.rightValue;
  }
}

const either: Either<number, number> = new SimpleEither(4, 5);
either.left(); // 4
either.right(); // 5
const best = new SimpleEither({ name: "Bill" }, "hello");
```

`constraints` 를 이용하면, `generic` 에 조건을 줄 수 있다

`extends` 키워드, `keyof` 키워드 등을 이용해서 조건을 거는 식이다

```typescript
interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log(`full time!!`);
  }

  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log(`part time!!`);
  }

  workPartTime() {}
}

// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 위험
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

function pay<T extends Employee>(employee: T): T {
  // generic에 extends 키워드를 활용하여 constraints를 검
  employee.pay();
  return employee;
}

const bill = new FullTimeEmployee();
const steve = new PartTimeEmployee();

bill.workFullTime();
steve.workPartTime();

const billAfterPay = pay(bill);
const steveAfterPay = pay(steve);

// *************************

const obj = {
  name: "bill",
  age: 20,
};

const obj2 = {
  animal: "dog",
};

console.log(getValue(obj, "name")); // bill
console.log(getValue(obj, "age")); // 20
console.log(getValue(obj2, "animal")); // dog

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  // generic에 extends 및 ketof 키워드를 활용하여 constraints를 검
  return obj[key];
}
```
