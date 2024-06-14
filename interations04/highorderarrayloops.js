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