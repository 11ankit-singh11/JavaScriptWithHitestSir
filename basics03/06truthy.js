// // falsy values -> values considered false in conditional and also in general 

// false,0,-0,BigInt On,"",null,undefined,NaN

// // Truthy values 

// "0",'false'," ",[]=empty Array,{}, function(){}

// Nullish Coalescing  operator ?? used for two possibility sceneario means which value to be accepted 

let val1 
val1 = 5 ?? 10
val1 = null ?? 20
val1 = undefined ?? 15 
console.log(val1)

//  ternary operator   condition ? true : false 

let name = "ankit"
name=="ankit" ? console.log(true) : console.log(false);
