// What does the following code return?

// new Set([1,1,2,2,3,4]) //             Answer: [1, 2, 3, 4]

// What does the following code return?

// [...new Set("referee")].join("")       Answer: 'ref'

// What does the Map m look like after running the following code?

/* let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false); */                // Answer: [[Array(3) => true], [Array(3) => false]]

// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

function hasDuplicate(arr){
    const mySet = new Set(arr);
    return mySet.size != arr.length ? true: false;
}

// write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.
function vowelCount(s){
    const myMap = new Map();
    const newString = Array.from(s).filter((val) => 'aeiou'.includes(val))
    console.log(newString)
    for (let letter of newString){
        if (myMap.get(letter)){
            let count = myMap.get(letter) + 1
            myMap.set(letter, count);
        }
        else{
            myMap.set(letter, 1);
        }
    }
    return myMap;
}


