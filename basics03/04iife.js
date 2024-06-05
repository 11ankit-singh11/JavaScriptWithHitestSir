// Immediately Invoked Function Expression

(function chai(){
    // named iife
    console.log("anything")
})(); // here semicolons must be putted otherwise it will not end context and further functions and line of codes will not execute

((name) => {
    // simple iife
    console.log(name)
})("ankit");