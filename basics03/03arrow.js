// console.log(this) // here it will give empty object but in browser it will give window because it return current context 

// const user = {
//     name : "ankit ",
//     year : "third",
//     welcomemessage : function(){
//         console.log(`${this.year} , is the current year in clg`);
//         console.log(this)
//     }

// }
// user.welcomemessage()
// user.name = "sam"
// user.welcomemessage() // these will print normal and for this will give all the things in current context 

// function chai(){
//     let name = "ankit"
//     console.log(this.name) // this will give undefined 
// }
// chai()
  
const chai = () => {
    let name = "ankit"
    console.log(this.name) // it will give undefined
    console.log(this) // it will give {}
}
chai()

// +++++++++++++++++++++++++++++++ arrow function ++++++++++++++++++++++++++++++++++++++++++++++++++++

const addtwo = (num1,num2) => (num1+num2)
const addtw = (num1,num2) => {
    return num1+num2
}

// when we user () , it is implicit arrow function no need of return but with {} return is compulsory
