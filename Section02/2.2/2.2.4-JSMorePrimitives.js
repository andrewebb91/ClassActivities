// Create five variables and assign them values
// Each variable should reference a different primitive data type
// REMEMBER: you should never DELIBERATELY assign "undefined" to a variable
const catsName = "Dan";
let catAge = 1;
let gremlinFactor = true;
let spayAge = null;
let relationshipType;

// Print the type of each variable in this order:
// string, number, boolean, undefined, null
console.log(
  typeof catsName,
  typeof catAge,
  typeof gremlinFactor,
  typeof relationshipType,
  typeof spayAge
);

// create a variable that references a template literal
// inside the template literal, use two variables
let catInfo = `The cat's name is ${catsName} and he is ${catAge} year old.`;
console.log(catInfo);

// reassign the value of the variable that references "null"
spayAge = 1.5;

// print the value and its type
console.log(spayAge);
console.log(typeof spayAge);

// print a variable that causes a ReferenceError
console.log(dogName);

// alter the previous line to no longer cause a ReferenceError
let dogName;
console.log(dogName);
