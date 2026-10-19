// array :
//         specialised high-level, list like objects configured with built-in methods for traversal and mutations
const myArr = [0,1,2,3,4,"madhav", true]
console.log(myArr[3])
const myArr2 = new Array(1,2,3,4,5)

// Js arrays are resizable and can contain a mix of different datatypes

// Js arrays are not assosiative arrays and so, array elements cannot be accessed using arbitrary strings as indexes

// Js array-copy operations create shallow copies

//-------------------------------------------------------------------------------------------------

//          SHALLOW COPY : shallow copy of an object is a copy whose properties share the same references as those of the source 
//                                      (i.e whenever you change either the source or the copy, you may cause the other object to change too)

//          DEEP COPY : they do not share the same reference i.e modification in one does not change the other

//-------------------------------------------------------------------------------------------------


// ARRAY METHODS :

myArr.push(6)                           // adds to last
console.log(myArr)
myArr.pop()                             // removes from last
myArr.unshift(20)                       // shifts all the values and adds the argument at index 0
myArr.shift()                           // removes element at index 0
myArr.includes(5)                       // boolean (-1 if the element doesn't exist in the array)

const newArr = myArr.join()             // adds all the elements of an array into a , separated string

myArr.indexOf(4)                        // -1 if argument isn't present

// slice,splice

myArr.slice(1,3)                        // returns a copy of the specified section of an array (last index not included)
//                                         - original array stays the same

myArr.splice(1,3)                       // includes the last index and returns the specified section
//                                         - modifies the original array too

myArr.concat(myArr2)

// spread operators

const myArr3 = [...myArr,...myArr2]     // ... spreads the array (gives out all the elements within that array)
console.log(myArr3);


const arr = [1,2,3,[4,5,6], 7,[8,9,[4,7,5]]]
const arr2 = arr.flat(Infinity)
//        .flat() - returns a new array with sub-array elements concatinated into it recursively upto the specified depth


console.log(Array.isArray("Madhav"))   //  boolean result
console.log(Array.from("Madhav"))      // converts to array ["M","a","d","h","a","v"]


let score1 = 100
let score2 = 300
let score3 = 300

console.log(Array.of(score1,score2,score3));  // returns a new array from a set of elements

arr.some()                              // checks if any value in the array passes a check (T/F)
arr.every()                             // checks if all the values in an array pass a check (T/F)

arr.find()                              // prints the first value that passes a check ("undefined" if none)
arr.findIndex()                         // returns 1st index that passses a check (-1 if none)