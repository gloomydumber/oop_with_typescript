// Java: Exception
// JavaScript: Error
// const array = new Array(1000000000000000000000000);

// Error(Exception) Hadnling: try -> catch -> finally

function readFile(fileName: string) : string{
  if(fileName === 'not exist!'){
    throw new Error(`file not exist! ${fileName}`);
  }
  return 'file contents';
}

function closeFile(fileName: string){
  //
}

const fileName = 'file';

try{
  console.log(readFile(fileName));
}
catch(error){
  console.log(`catched !`);
}
finally{
  closeFile(fileName);
  console.log(`finally!`);
}

console.log(`!!!`);