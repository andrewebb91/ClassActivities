const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
let popreturn1 = nums.pop(); //0
let popreturn2 = nums.pop(); //1
// remove each of the first two items with shift(), saving each item to a variable
let shiftreturn1 = nums.shift(); //6
let shiftreturn2 = nums.shift(); //5
// use push and unshift to add the variables back to the array in numerical order, 0-6

nums.push(shiftreturn2, shiftreturn1);
nums.unshift(popreturn1, popreturn2);

console.log(nums);
