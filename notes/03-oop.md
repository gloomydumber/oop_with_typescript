# Object-Oriented Programming On TypeScript

`TypeScript`에서, `class` 내부의 멤버 변수 및 메소드에는 `let` 이나 `const`, `function` 과 같은 `keyword`를 사용할 필요가 없다

`class` 의 `method` 에서, 해당 `class` 의 멤버 변수에 접근할 때에는, `this` 라는 `keyword` 를 이용하여 접근

`class` 를 이용하여 `instance` 를 생성할 때 즉, `object` 를 만들 때에는 `constructor` 함수가 호출된다

만약, `class` 내부의 변수중에, 변하지 않고 고정적으로 (`constant`) 사용되는 변수가 존재한다면, `instance` 를 생성할 때마다,

해당 `instance` 의 멤버 변수로 메모리 공간을 차지한다

이를 막기 위해, `class` 내부에서 고정적으로 사용되는 변수는 `static` 키워드를 붙여서 `class level` 로 선언해준다

또, 그러한 변수를 `static` 으로 선언했다면, 호출 할 때에도 `this` 키워드를 이용하는 것이 아닌, `해당클래스명.static변수명` 과 같이 호출 해야한다

메소드의 경우에도 `static` 으로 선언하여 `class level` 로 선언 할 수 있는데, 이 경우는 `JavaScript` 를 사용할 때, `Math` 의 사례와 같다

가령, `JavaScript` 를 사용할 때, 아래와 같이 `new` 키워드를 사용하여 `Math` 인스턴스를 생성해주지는 않는다

```javascript
const math = new Math(); // 이렇게 사용하지 않고
Math.abs(-3.14); // 바로 메소드를 불러올 수 있음
```

이는, `Math` 내부의 `method` 들이 모두 `static` 으로 `class level` 에서 정의되어 있기 때문이다

> Math is not a constructor and all the properties and _methods of Math are static_

한편, `new` 키워드가 아닌 `static` 을 통해, 인스턴스를 생성하게 끔 할수도 있는데, 이 경우에는 `construct` 함수를 `private` 로 설정해준다

```typescript
{
  type CoffeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    static BEANS_GRAMM_PER_SHOT = 7; // class level
    coffeeBeans: number = 0; // instance(object) level

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    makeCoffee(shots: number): CoffeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = new CoffeeMaker(32);
  console.log(maker);
  const maker2 = CoffeeMaker.makeMachine(48);
  console.log(maker2);
}
```

`typescript` 에서도 `getter` 및 `setter` 를 이용할 수 있다

`get`, `set` 키워드를 사용해서 선언하며, `get` 함수를 호출 할 때에는 함수를 호출하는 것처럼 `()` 를 붙여서 호출하는 것이 아니라,

멤버 변수를 호출하듯이 호출하면된다

또, 생성자에 접근제어자를 붙여 인자로 받으면, 따로 `class` 내에 정의하지 않더라도 멤버 변수로 지정된다

```typescript
class User {
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  private internalAge = 4;
  get age(): number {
    return this.internalAge;
  }
  set age(num: number) {
    if (num < 0) {
      throw new Error("age should be positive number!");
    }
    this.internalAge = num;
  }
  constructor(public firstName: string, private lastName: string) {
    // 생성자의 접근제어자를 사용한 인자는 멤버변수로 지정 됨
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const user = new User("Steve", "Jobs");
console.log(user.fullName);
user.firstName = "Bill";
user.age = 6; // setter
console.log(user.fullName);
```

추상화를 위해서, 접근제어자를 사용하거나, `interface` 를 사용한다

추상화가 이루어지면 코드 작성 시에, 해당 객체에서 어떤 메소드를 사용할 수 있는지 쉽게 알 수 있다

가령, 객체 내부적으로 이루어지는 메소드의 경우는 `private` 처리하면, 코드 작성 시에 사용할 일이 있는 `public` 메소드만 자동완성 되는 등으로 코드 작성에 도움이 된다

또, `interface` 의 경우에도 위와 같은 효과를 낳는데, `interface` 명에 가장 앞에 대문자의 `I` 를 붙이거나, 구현하는 `class` 명의 끝에 `Impl` 등을 붙여 구별하기도 한다

`interface` 에 있는 함수는 `class` 가 `implements` 했을 때, `class` 내부에서 모두 구현되어야 한다

`interface` 에 어떤 함수를 두느냐에 따라, `instance` 가 사용할 수 있는 메소드에 한계를 줄 수 있다

```typescript
type CoffeeCup = {
  shots: number;
  hasMilk: boolean;
};

interface CoffeeMaker {
  makeCoffee(shots: number): CoffeeCup;
}

interface CommericialCoffeeMaker {
  makeCoffee(shots: number): CoffeeCup;
  fillCoffeeBeans(beans: number): void;
  clean(): void;
}

class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
  private static BEANS_GRAMM_PER_SHOT = 7; // class level
  private coffeeBeans: number = 0; // instance(object) level

  private constructor(coffeeBeans: number) {
    this.coffeeBeans = coffeeBeans;
  }

  static makeMachine(coffeeBeans: number): CoffeeMachine {
    return new CoffeeMachine(coffeeBeans);
  }

  fillCoffeeBeans(beans: number) {
    if (beans < 0) {
      throw new Error("value for beans should be greater than 0");
    }
    this.coffeeBeans += beans;
  }

  clean() {
    console.log("cleaning the machine...");
  }

  private grindBeans(shots: number) {
    console.log(`grinding beans for ${shots}`);
    if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
      throw new Error("Not enough coffee beans!");
    }
    this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
  }

  private preheat(): void {
    console.log("heating up...");
  }

  private extract(shots: number): CoffeeCup {
    console.log(`Pulling ${shots} shots...`);
    return {
      shots,
      hasMilk: false,
    };
  }

  makeCoffee(shots: number): CoffeeCup {
    // interface에서 정의된 makeCoffe 함수가 class 내부에서도 메소드로 잘 구현됨
    this.grindBeans(shots);
    this.preheat();
    return this.extract(shots);
  }
}

class AmateurUser {
  constructor(private machine: CoffeeMaker) {}
  makeCoffee() {
    const coffee = this.machine.makeCoffee(2);
    console.log(coffee);
  }
}

class ProBarista {
  constructor(private machine: CommercialCoffeeMaker) {}
  makeCoffee() {
    const coffee = this.machine.makeCoffee(2);
    console.log(coffee);
    this.machine.fillCoffeeBeans(45);
    this.machine.clean();
  }
}

const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
maker.fillCoffeeBeans(32);
maker.makeCoffee(2);

const maker2: CoffeeMaker = CoffeeMachine.makeMachine(32);
maker2.fillCoffeeBeans(32); // 에러 발생. CoffeeMaker Interface는 fillCoffeeBeans 함수가 없음 (interface 를 통해 instance의 메소드에 한계를 유연하게 줄 수 있음)
maker2.makeCoffee(2);

const maker3: CommercialCoffeeMaker = CoffeeMachine.makeMachine(32);
maker3.fillCoffeeBeans(32);
maker3.makeCoffee(2);
maker3.clean(); // CommericialCoffeeMaker의 Interface를 사용한 instance 이기 때문에, clean 메소드도 사용할 수 있는 instance임

const maker4: CoffeeMachine = CoffeeMachine.makeMachine(32);
const amateur = new AmateurUser(maker4); // interface 의 차이를 통해 기능할 수 있는 메소드에 차이가 생김
const pro = new ProBarista(maker4); // interface 의 차이를 통해 기능할 수 있는 메소드에 차이가 생김
```

`TypeScript`에서 `extends` 키워드 를 이용하여, `inheritance (상속)` 또한 구현할 수 있다

이 때, `overriding` 또한 가능하고, `super` 라는 키워드를 통해 부모의 메소드 또한 다시 활용할 수 있다

```typescript
class CaffeLatteMachine extends CoffeeMachine {
  private steamMilk(): void {
    console.log("Steaming some Milk...");
  }

  makeCoffee(shots: number): CoffeeCup {
    // overriding 된 makeCoffee 메소드
    const coffee = super.makeCoffee(shots);
    // super 라는 키워드를 통해 부모의 메소드를 다시 활용 가능
    this.steamMilk();
    return {
      ...coffee,
      hasMilk: true,
    };
  }
}
```

또, 하위 클래스에서 `constructor` 를 이용하려면, 하위 클래스의 `constructor` 에서 부모 클래스의 `constructor` 도 실행시켜줘야하는데,

이때에도 `super` 키워드를 사용한다

또, 바뀌지 않을 멤버 변수는 `readonly` 키워드를 이용할 수 있다

또, `TypeScript` 에서는 다중상속이 불가능하다

즉, 한 가지의 부모 클래스만을 상속할 수 있다

```typescript
class CaffeLatteMachine extends CoffeeMachine {
  constructor(beans: number, public readonly serialNumber: string) {
    super(beans); // 자식 class의 constructor에서는 super를 통해 부모 class의 constructor를 불러와야함
  }

  private steamMilk(): void {
    console.log("Steaming some Milk...");
  }

  makeCoffee(shots: number): CoffeeCup {
    // overriding 된 makeCoffee 메소드
    const coffee = super.makeCoffee(shots);
    // super 라는 키워드를 통해 부모의 메소드를 다시 활용 가능
    this.steamMilk();
    return {
      ...coffee,
      hasMilk: true,
    };
  }
}

const latteMachine = new CaffeeLatteMachine(23, "SX1DF");
const coffee = latteMachine.makeCoffee(1);
console.log(coffee);
console.log(latteMachine.serialNumber);
```

`abstract` 키워드를 이용하면, `instance` 화는 하지못하지만, 부모 클래스로서의 변수나 메소드를 명세할 수 있는 `class` 를 정의해둘 수있다

`abstract` 키워드를 메소드에도 부여할 수 있는데, 이 경우에는 해당 메소드는 자식 클래스에서 항상 새로 정의해줘야한다

즉, 해당 `class`를 상속하는 자식 클래스가 여러 유형이 있다면, 그 자식 클래스 마다 해당 메소드를 재정의해야 할 때에 활용할 수 있다
