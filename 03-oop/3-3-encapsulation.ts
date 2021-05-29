{
  type CoffeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // public
  // private
  // protected
  class CoffeeMaker{
    private static BEANS_GRAMM_PER_SHOT = 7; // class level 
    private coffeeBeans: number = 0; // instance(object) level

    private constructor(coffeeBeans:number){
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans:number):CoffeeMaker{
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number){
      if(beans < 0){
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeCup{
      if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT){
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false
      };
    }
  }

  const maker = CoffeeMaker.makeMachine(32);
  console.log(maker);

  class User{
    get fullName(): string{
      return `${this.firstName} ${this.lastName}`;
    }
    private internalAge = 4;
    get age(): number{
      return this.internalAge;
    }
    set age(num : number){
      if(num < 0) {

      }
      this.internalAge = num;
    }
    constructor(public firstName: string, private lastName: string){
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }

  const user = new User('Steve', 'Jobs');
  console.log(user.fullName);
  user.firstName = 'Bill';
  console.log(user.fullName);
}