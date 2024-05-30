// array 

const myarr = [0,2,4,"ankit",true]
console.log(myarr)

// it makes shallow copy means shares same refrence point 

const myarr2 = new Array(1,3,5,3)
console.log(myarr2);

// methods of array

// myarr.push(6)

// myarr.unshift(9)
// console.log(myarr);
// myarr.shift()
// console.log(myarr)

const newarr = myarr.join() // it returns the complete array with commas into a string 
console.log(newarr)

// slice and splice , In slice you got subarray from start to end-1 in (start,end) and original array remain unchained
// while in splice , you got start to end and original array changed and start to end got cutted from there .

const abc = myarr.slice(2,5)
console.log("a = ", abc)

console.log(myarr)

const bcd = myarr2.splice(1,3)
console.log(bcd , myarr2)