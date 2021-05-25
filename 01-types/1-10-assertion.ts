{
  // Type Assertion
  function jsStrFunc(): any{
    return 'hello';
  }
  const result = jsStrFunc();
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // x

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  numbers!.push(2); // x

  const button = document.querySelector('class')!; // x
}