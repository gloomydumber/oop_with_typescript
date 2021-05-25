{
  // Type Aliases
  type Text = string;
  const name: Text = 'Bill';
  const address: Text = "United States";
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: "Bill",
    age: 34
  };

  // String Literal Type
  type Name = 'name';
  let billName: Name;
  billName = 'name';
  type JSON = 'json';
  const json:JSON = 'json';

  type Boal = true;
  const isCat: Boal = true;
}