function sayMyName(){
    console.log("madhav");
}
sayMyName();            // execution
sayMyName               // function reference


function add(num1,num2){
    console.log(num1+num2);
}
add(4,5);


function login(username){

    if (!username){             // username === undefined
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(login("madhav"));    // undefined if no argument is given

function calculateCartPrice(...nums){
    return nums;
}
console.log(calculateCartPrice(200,300,400));


const user = {
    username : "madhav",
    price :  900
}

function handleObjects(anyObject){
    return `Username is ${anyObject.username} and their cart price is ${anyObject.price}`
}
console.log(handleObjects(user));

//------------------------------------------------------------------------------------------------------------------------------------------------

//  THIS keyword 
//               --> creates a context for the current object

const user2 = {
    username : madhav,
    price : 1200,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);  // context here is the user2 object
        
    }
}
user2.welcomeMessage()
user2.username = "abc"
user2.welcomeMessage()

// Global Object
console.log(this)           // empty current context (for node). In browser, the context for the global object is the browser window itself

//------------------------------------------------------------------------------------------------------------------------------------------------

// ARROW FUNCTIONS

const addTwo = (num1,num2) => {
    return num1 + num2
}

const add = (num1,num2) => num1 + num2  // implicit return 
const add = (num1,num2) => (num1 + num2)  

const returningObjects = ()=>({username : "madhav"})  // without wrapping object in () it would return undefined