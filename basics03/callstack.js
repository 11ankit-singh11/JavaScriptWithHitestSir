// in js when code execution start with creation of global context which is stored in this  and there is also functional context
// so there are basically two phases in which js program execute
// 1) memory creation phase , in this all variable and function with its definitions are hold in memory not their values 
// 2) execution phase , in this all functions are executed , for  each execution of function a new executional context is created like a box
//  and in that a new variable enviornment and executional thread is created and memory phase and execution phase is repeated , the 
//  values returned by these functions are passed to global context enviornment

//  now stack 
// first global execution context is put in stack then with function calls functions are putted in call stack , lastly called func
// is removed first from stack after its execution when we are talking about func inside of func 
// we can see the working in browser source side of console then saving program and seeing step by step in call stack the flow of 
// execution 