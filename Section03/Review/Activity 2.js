// 2.a

// Declare a function called testAverage

//  These are the requirements of the function:
//    Accepts a single parameter that can accept an infinite amount of arguments
//    Inside the function, add the parameters together
//    Divide the sum by the number of parameters that were passed in
//    The function will output the result
// Hints: Remember how a rest parameter represents arguments and what methods that can allow us to use

function testAverage(...params){
  let sum = 0;
  for (let param of params) {
    sum += param;
  }
  return sum / params.length;
};
// Invoke testAverage with the following parameters: 92, 71, 85, 83
console.log(testAverage(92, 71, 85, 83)):
