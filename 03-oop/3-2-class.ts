{
  type CoffeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker{
    static BEANS_GRAMM_PER_SHOT = 7; // class level 
    coffeeBeans: number = 0; // instance(object) level

    constructor(coffeeBeans:number){
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans:number):CoffeeMaker{
      return new CoffeeMaker(coffeeBeans);
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

  const maker = new CoffeeMaker(32);
  console.log(maker);
  const maker2 = CoffeeMaker.makeMachine(48);
  console.log(maker2);
  
}