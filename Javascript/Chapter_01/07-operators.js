console.log("------------Assignment Operaator-------------")
let a = 3 
let b = 3
console.log(a<b)
console.log(a>=b)
console.log(a === b) //it'll check the types of the varables and value

// logical Operators
console.log("---------------Logical Operator------------------")
let age = 18
let hasCNIC = true
console.log(age>=18 && hasCNIC)
age = 12
console.log(age>=18 && hasCNIC)
console.log(age>=18 || hasCNIC)
console.log("---------------Conditional Operator----------------")
a = 4
b = 2
if(a>b){
    console.log("a is greator than b")
}else if(b>a){
    console.log("b is greator then a")
}else{
    console.log("Both are equal")
}

console.log("-------------Ternary Operator-------------")
a = 4
b = 5
let result = a>b?"a is greator":"b is greator";
console.log(result)
b=2
console.log(a>b?"a is greator":"b is greator")