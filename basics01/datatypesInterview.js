// there are basically two types of datatypes Primitive and non Prmitive/referencing

// Primitive
// 7 Types : Number , Boolean , String , NUll , Undefined , Symbol ,BigInt
// These are call by value , when used their copy is made and not actual data is used through refrencing


// Refrencing(Non Primitive )
// Array, Objects , Functions 

heroes = ["ankit", "singh","sinsinwar","faujdar"]
let myobj = {
    ar : "hero",
    age : 21,
}
const myfunc = function(){
    console.log("hello world")
}
console.log(typeof null)
console.log(typeof myfunc)
console.log(typeof myobj)
console.log(typeof heroes)


