// const tinder = new object();        it is singleton object 

const tinder = {} ; //it is also object but it is not singleton just naming 

tinder.id = "2343"
tinder.name = "ankit"
console.log(tinder);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",5:"b"}
const obj3 = {obj1,obj2} // this will add two objects in obj3 but actual adding of all elements in sequence will be missed 

const obj4 = Object.assign({},obj2,obj1)
console.log(obj4);

// best method 
const obj5 = {...obj1,...obj2}
console.log(obj5);

console.log(Object.keys(obj5));
console.log(Object.entries(obj5))

// object destructuring 

const course = {
    coursename : "js in Hindi ",
    fees : "free"
}

const {coursename} = course
console.log(coursename);