// const arr = [3,2,5,6]
// for (const i of arr) {
//     console.log(i)
// }
// // for (const iterator of object) {
    
// // }
// // In forof object on which you r going to iterate can be string , array or map , it is defining that .
// const greet = "ankit singh sinsinwar faujdar"
// for (const i of greet) {
//     console.log(i);
// }

// const map = new Map() // m of map is capital 
// map.set("IN","India")
// map.set("US","United States of America")
// map.set("Fr","France")

// for (const key of map) {
//     console.log(key);
    
// }
// // 

// for (const [key,value] of map) { // dont use parantheses use []
//     console.log(key + ":-" + value)
// }

// it can not iterate through object key values for that we use forin
// forin loop gives keys not direct value if you run it on array it will give index values which are 0 based 

const myobj = {
    name:"ankit",
    age : 22,
    year: 3
}
for (const key in myobj) {
    console.log(key,"=>",myobj[key]);
}
const arr = ["andk","dkjd","ddkjd"]
for (const key in arr) {
   console.log(key);
   console.log(arr[key])
}

// forin loop on map will give nothing no error and no output because it is noniterable  by it .

// learning foreach useful when we are given array of objects 

const coding = ["jav","py"]
// coding.forEach(function (val){
//     console.log(val);
// })
// // or 

// coding.forEach((item)=>{
//     console.log(item);
// })

// function printme(item){
//     console.log(item);
// }
// coding.forEach(printme)

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })

// const mycoding = [
//     {name:"ankit",age:22},{name:"rahul",age:33}
// ]
// mycoding.forEach(function(val){
//     console.log(val.name);
//})

// this foreach does not return anything so we use filter 

// const mynum = [3,2,5,6,67,7,3]

// const arr1 = mynum.filter((num) => {
//     return num>5
// } )
// console.log(arr1);


// map 

const newnums = [3,3,2,5,5,6,3,6,7,3,1,9]
const ne = newnums.map((num)=>(num+10)) // or (num)=> { return num+10}

console.log(ne);



