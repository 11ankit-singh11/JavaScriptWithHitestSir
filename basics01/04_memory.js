//  In stack you got copy of data and changes made are not reflected in original as you are dealing with copy

let a = 10
let b = a
b = 5
console.log(a)
console.log(b)

// In heap memory data is stored and variables points towards it and changes made are reflected in original data as no copy is made 
//  just new variable is pointing to same data 

let abc = {
     email : "ankd.gmail",
     age : 21
}

let ba = abc
ba.email = "ankit.google"
console.log(abc.email)
console.log(ba.email)