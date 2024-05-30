const marvelhero = ["ironman","hulk","thor"]
const dchero = ["batman","superman"]
// marvelhero.push(dchero)
// console.log(marvelhero)
// whole array got added as new elment 

// const allheroes = marvelhero.concat(dchero)
// console.log(allheroes)
// properly merged but a new array is created 

// const allnewheroes = [...dchero,...marvelhero]
// console.log(allnewheroes)
// this is called spread operator , work same as concat 


const arr = [3,5,2,[2,3,3],[3,2,[32,[322]]]]
const usablearray = arr.flat(Infinity)
console.log(usablearray)

// Interesting

console.log(Array.from("ankit"))
console.log(Array.from({name:"ankit"})) // unable to convert to array so will return an empty array

a = 29 
b = 29 
c = 19

console.log(Array.of(a,b,c))
console.log(Array.isArray(arr)) // catch in writing


