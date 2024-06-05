var c = 300
if(true){
    let a = 20
    const b= 10
    var c = 30
}
console.log(c)
// this is the problem with  var that it does not obey rules of scope 


addone(5)
function addone(num){
    console.log(num);
}


addtwo(5) // this will generate error but the addone will not .
let addtwo = function add(num){
    console.log(num)
}