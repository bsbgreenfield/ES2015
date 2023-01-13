var obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
   // var a = obj.numbers.a;
    // var b = obj.numbers.b;

// refactored
  let {numbers: {a, b}} = obj;
 


var arr = [1, 2];
// var temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;

// refactored
[arr[0], arr[1]] = [arr[1], arr[0]];


/* Write a function called raceResults which accepts a single array argument. It should return an object with the keys first, second, third, and rest.

first: the first element in the array
second: the second element in the array
third: the third element in the array
rest: all other elements in the array

Write a one line function to make this work using
An arrow function
Destructuring
‘Enhanced’ object assignment (same key/value shortcut) */

const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})



