/* function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function(num) {
    return num % 2 === 0
  });
}*/

const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0);


// Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.
// Make sure to do this using the rest and spread operator.

const findMin = (...nums) => Math.min(...nums);

// Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

function mergeObjects(obj1, obj2){
    return {...obj1, ...obj2};
}

// write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. 
// The function should return a new array with the original array values and all of additional arguments doubled.
function doubleAndReturnArgs(arr, ...args){
    const newArgs = args.map(function(val){
        return val*2;
    })
    return [...arr, ...newArgs]
}

/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {
  return items.filter(function(val, idx){
    return idx != Math.floor(Math.random() * items.length);
  })
}

const arrowRemoveRandom = (items, randomIdx) => {
    randomIdx = Math.floor(Math.random() * items.length)
    return items.filter((val, idx) => idx != randomIdx);
}

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
    return [...array1, ...array2]
}
const arrowExtend = (array1, array2) => [...array1, ...array2]

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
    let newObj = {}
    newObj[key] = val;
    return {...obj, ...newObj}
}
 const arrowAddKeyVal = (obj, key, val) => {
    let newObj = {}
    newObj[key] = val;
    return  {...obj, ...newObj}
 }

/** Return a new object with a key removed. */

const arrowRemoveKey = (obj, key) => {

    let newObj = { ...obj }
    delete newObj[key]
    return newObj;
  }

myObject = {name:'benji', age: 23, height: 150}

/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
 let myObj = {...obj1, ...obj2}
 return myObj;
}


/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
    obj[key] = val;
    let myObj = {...obj}
    return myObj;
}