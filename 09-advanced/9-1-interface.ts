type PositionType = {
  x: number;
  y: number;
};

interface PositionInterface {
  x: number;
  y: number;
}

// object

const obj1: PositionType = {
  x: 1,
  y: 1,
};

const obj2: PositionInterface = {
  x: 1,
  y: 1,
  z: 1 // z is merged one
};

// class

class Pos1 implements PositionType{
  x: number;
  y: number;
}

class Pos2 implements PositionInterface {
  x: number;
  y: number;
  z: number;
}

// Extends
interface ZPositionInterface extends PositionInterface {
  z: number;
}

type ZPositionType = PositionType & { z: number };


// only interfaces can be merged;
interface PositionInterface{
  z: number;
}

// Type alias can use computed properites

type Person = {
  name: string,
  age: number,
}
type Name = Person['name'];
type Direction = 'left' | 'right';