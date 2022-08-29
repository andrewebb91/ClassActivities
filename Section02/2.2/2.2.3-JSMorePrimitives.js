// create a variable "timeOfDay" and assign it a string
let timeOfDay = "night";

// create a variable "greeting" that references a template literal
// use "timeOfDay" in the template literal to create a message like "Good morning!" or "Good evening!"
let greeting = `Good ${timeOfDay}!`;

// print "greeting"
console.log(greeting);

// create a new variable, but do not assign it a value
let newVariable;

// print the variable and its type
console.log(newVariable);
console.log(typeof newVariable);

// assign the variable a value that indicates the variable is purposely blank
newVariable = null;

// print the variable and its type again
console.log(newVariable);
console.log(typeof newVariable);

// try to print a variable that does not exist
// What should we expect to print in the CLI?
console.log(thisVariableDoesNotExist);

// print "greeting" again
// Will this line run?
console.log(greeting);
