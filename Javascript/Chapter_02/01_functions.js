console.log("Printing the normal function")
function greet(name){//parameter
    console.log("Hello ",name)
};
greet("Raza") //arguments

// normal fuction
function add(a,b){
    return a+b
};
console.log(add(2,4))

// expressional function 
console.log("Printing the expression function")
const hello = function(name){
    return "hello " + name;
}
console.log(hello("ali"))

const multiply = function(a,b){
    return a*b
}
console.log(multiply(2,3))

// arrow functions
console.log("Printing the arrow function")
const sum = (a,b) => {
    return a+b;
};
console.log(sum(2,3))
// even shorter version of arrow function
const sum2 = (a,b) => a+b;
console.log(sum2(3,4))
// taking the square of a number
const square = number => number * number;
console.log(square(4))
//caculating delivary charge now the default parameter is 1
const deliveryCharge = (km="1") => km*50;
console.log("The charge is "+deliveryCharge())
console.log("The charge is "+deliveryCharge(12))
