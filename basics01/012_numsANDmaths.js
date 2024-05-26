const score = 100
console.log(score);

const non = new Number(100)
console.log(non); // here additionally number with come along with answer

// additional properties of number

console.log(score.toString().length)
console.log(score.toFixed(2))
const anothernumber = 23.642224
console.log(anothernumber.toPrecision(5))
console.log(anothernumber.toPrecision(2)) // return in string 

const ag = 4999999992
console.log(ag.toLocaleString())
console.log(ag.toLocaleString('en-IN'))

console.log(Number.MIN_VALUE)
console.log(Number.length)
console.log(Number.MIN_SAFE_INTEGER)


// +++++++++++++++++++++++++++++Maths++++++++++++++++++++++++++++++++++++

console.log(Math.abs(-2))
console.log(Math.min(3,2,5,1))
console.log(Math.max(3,5,2,5))
console.log(Math.random())

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1))+min)






