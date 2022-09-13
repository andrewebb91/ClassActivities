//Activity 1

// 1.a
// Declare a function called helloWorld that prints out the string "Hello World"
function DreWebb() {
  console.log("Hello World");
}

// Invoke the helloWorld function
DreWebb();

// 1.b
// Declare a function called numSum
//    This is the requirements of the function:
//    Accepts 2 parameters
//    Inside the function, add the parameters together
//    The function will print out a string that says: <1st parameter> plus <2nd parameter> equals sum
//    The function will output the sum of the two parameters
// Hints: you will need to use template literals to print out the string
//        there is no one right way to do this, but don't overthink it

function numSum(param1, param2) {
  let sum = param1 + param2;
  console.log(`${param1} + ${param2} = ${sum}`);
  return sum;
}
console.log(numSum);
// Invoke the function inside of a console.log so we can see the returned value
console.log(numSum(55, 25));
