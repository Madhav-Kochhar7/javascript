// HOW IS CODE EXECUTED IN Js

// Js execution context :

// 1. `{}` Global Execution Context (this)
//                                          - exec. context depends on the runtime env (different for browser(this -> window object)
//                                            different for node/bun/deno)

// 2. Function Execution Context

// 3. Eval Execution Context (technically a property of Global EC)

// JS CODE EXECUTES IN 2 PHASES :

//         1.  memory creation phase :
//                                      - sets all the variables in the program to undefined 
//                                      - defines all the functions in the program

//         2.  execution phase
//                                      - assigns the values of the variables
//                                      - creates a new executional context for the defined functions (new variable env + exec thread) 
//                                        and again, memory creation and exec phases are created for the function and deleted after execution
//                                        is finished



// CALL STACK

// the Call Stack is a core mechanism used by the engine to manage and track function execution.

//                               - It keeps track of function calls in the order they are executed.
//                               - It helps determine which function is currently running and what runs next.


//            Working of Call Stack
// JavaScript operates in a single-threaded environment, meaning that it can only execute one operation at a time. 
// The Call Stack is the part of JavaScript that keeps track of the execution process.

// Function Call: When a function is invoked, it is pushed onto the Call Stack and stays there until execution completes.
// Function Execution: The JavaScript engine executes the function’s code until it ends or calls another function.
// Nested Calls: If a function calls another function, the new function is pushed onto the stack while the previous one waits.
// Function Return: After execution finishes, the function is popped from the stack and control returns to the previous function.
// Program Completion: This continues until the stack is empty, indicating the program has finished executing.