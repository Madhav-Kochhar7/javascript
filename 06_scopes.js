let a = 10          // BLOCK SCOPE
const b = 20        // BLOCK SCOPE
var c = 30          // GLOBAL SCOPE

console.log("a : " + a)
console.log("b : " + b)
console.log("c : " + c)


if (true){
    let x = 10
    const y = 20
    var z = 30

    console.log(a)
    console.log(b)
    console.log(c)
    console.log(x)
    console.log(y)
    console.log(z) 
}

// console.log(x)
// console.log(y)
console.log("z : " + z)

//-----------------------------------------------------------------------------------------------------------------------------------

function one(){
    const username = "madhav"
    function two(){
        const email = "kochhar.madhavv@gmail.com"
        console.log(username)
        console.log(email)        
    }
    two()
    console.log(email)
}
one()

//-----------------------------------------------------------------------------------------------------------------------------------

console.log(addOne(5))   // will work because it is declared as a function 
function addOne(num){
    return num+1
}

console.log(addTwo(5));  // will throw an error because we've stored the function as a constant 

const addTwo = function(num){
    return num+2
}

// hoisting : an execution context is formed
