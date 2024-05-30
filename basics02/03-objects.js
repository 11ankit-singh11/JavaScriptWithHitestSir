// there are two methods to create singleton and other which we r going through object literals
// Singleton
// Object create 

// object literals

const mysim = Symbol("key1")
console.log(typeof(mysim))
const jsuser = {
    name : "ankit ",
    age : 22,
    [mysim] : "mykey1", // there is no other way to define a symbol
    "full name ":"ankit singh sinsinwar faujdar",
    city : "Mathura",
    lastlog : ["mon","tue"]
}
console.log(jsuser.name);
console.log(jsuser["full name "])
console.log(jsuser["name"]) // because behind the scenes name is stored as string 
console.log(jsuser[mysim])// there is no other way to use symbol
console.log(typeof(jsuser[mysim]))


// Object.freeze(jsuser)
// jsuser.city = "Jaipur"
// console.log(jsuser.city) // no change

jsuser.greeting = function(){
    console.log("hello js user ");
}

console.log(jsuser.greeting) // this will give function anonymous
console.log(jsuser.greeting()) // this will execute the function