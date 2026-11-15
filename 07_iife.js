// Immediately Invoked Function Expression :
//                                           - function that invokes itself immediately when defined.

// typically used to create a local scope for variables to prevent them from polluting the global scope.


(function db_connection(){                 // named IIFE (has a function name)
    console.log("DB CONNECTED");
    
})();                                     // second brackets are the function call 

((name)=>{
    console.log(`DB CONNECTED TO ${name}`);
    
})("CloudSQL");                                    // SYNTAX: (()=>{})();