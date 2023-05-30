const getEvenorOdd = (number) =>{
    if(number % 3 === 0){
        return true;
    }else{
        return false;
    }
};
console.log(getEvenorOdd(9));


function getNameToLowerCase (name){
    console.log( name.toLowerCase());
}
getNameToLowerCase("MY NAME IS SABA");


let numbers = [3, 8, 12, 15, 24, 30, 55, 84, 100, 125, 230];
let filteredNumbers = numbers.filter((number) => number % 2 === 0);
console.log(filteredNumbers);


function findObjectByName(objectArray, name) {
    for (let i = 0; i < objectArray.length; i++) {
      if (objectArray[i].name === name) {
        return objectArray[i];
      }
    }
  }
  let objects = [
  { name: 'Apple', type: 'Fruit' },
  { name: 'Banana', type: 'Fruit' },
  { name: 'Orange', type: 'Fruit' },
  { name: 'Mango', type: 'Fruit' }
];

let foundObject = findObjectByName(objects, 'Banana');
console.log(foundObject); 

foundObject = findObjectByName(objects, 'Pineapple');
console.log(foundObject); 







