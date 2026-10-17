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