// store data in key-value pairs
// keys are also called properties


// Object.create --> creates a singleton object 
// const jsUser = new Object()
//                  - a design pattern that restricts the instantiation of a class or object to a single instance across your entire application

// object literal
const mySym = Symbol("Key1")


const jsUser = {
    name : "madhav",
    "full name" : "madhav kochhar",         // can only be accessed by object[] method
    age : 19,
    email : "kochhar.madhavv@gmail.com",
    isLoggedIn : true,
    lastLogin : ["monday", "thursday"],
    [mySym] : "mykey1"                    // symbols are used as keys using [sybmolname] only
}

console.log(jsUser.name)
console.log(jsUser["lastLogin"])
console.log(jsUser["full name"])            // used when property name is dynamic
console.log(jsUser[mySym]);


jsUser.email = "madhavkochhar@gmail.com"    // modifying object values
console.log(jsUser.email)

// Object.freeze(jsUser)                       // locks the object, preventing it from further modification
// jsUser.name = "abc"
// console.log(jsUser.name);

console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS user");
}
console.log(jsUser.greeting());

jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(jsUser.greetingTwo());

//------------------------------------------

const appUser = {}
appUser.id = "123abc"
appUser.name = "abc"
appUser.isLoggedIn = false

// console.log(appUser);

const regularUser = {
    email : "some@gmail.com",
    fullName : {                        // nested objects
        userFullName : {
            firstName : "madhav",
            lastName  : "kochhar"
        }
    }
}

 console.log(regularUser.fullName.userFullName.firstName);
console.log(regularUser.fullName?.userFullName.firstName);  // if in case there was no nested object named "fullName", the ? would skip it and move to the very next nested object

//------------------------------------------

// merging objects

const obj1 = {
    1 : "a",
    2 : "b"
}
const obj2 = {
    3 : "c",
    4 : "d"
}

const obj3 = Object.assign({}, obj1,obj2)  // Object.assign(target,source) --> copies all keys and values from one or more sources and stores them in the target object
//   OR
const obj4 = {...obj1,...obj2}    // using spread operator



//   usually, we recieve the data as an array of objects from the database : 

const users = [
    {
        id : "1",
        email : "m@gmail.com"
    },
    {
        id : "2",
        email : "a@gmail.com"
    }
]

console.log(users[0].email);

// if we access all the keys or values of an object, they're returned in an array. i.e we can use that array to loop through the keys/values
console.log(Object.keys(appUser))
console.log(Object.values(appUser))
console.log(Object.keys(appUser).length)         // no. of keys
console.log(Object.entries(appUser))             // turns each key-value pair into its own array INSIDE an array
console.log(appUser.hasOwnProperty("isLoggedIn"));  // checks if the object contains a certain property(key)

//------------------------------------------
