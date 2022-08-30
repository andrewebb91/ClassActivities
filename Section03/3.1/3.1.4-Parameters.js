// Named Parameters
// write a function that takes two named parameters:
// print each named parameter,
// then return the parameters added together
function twoParams(param1, param2) {
  console.log(param1, param2);
  return param1 + param2;
}

// invoke the function and pass in two numbers
twoParams(3, 5);
// let returnedValue = twoParams(3, 5);
console.log(returnedValue);

// invoke the function and pass in more than two numbers
twoParams(3, 5, 10);
// invoke the function and pass in only one number
twoParams(3);
// change the function to set default values for the parameters
function twoParams(param1, param2 = 5) {
  console.log(param1, param2);
  return param1 + param2;
}

// again, invoke the function and pass in only one number
twoParams(3);

// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator
function twoParams(param1, ...param2) {
  console.log(param1);
  console.log(param2);

  return param1 + param2;
}
// again, invoke the function and pass in more than two numbers
twoParams(3, 5, 10, 4, 6);
