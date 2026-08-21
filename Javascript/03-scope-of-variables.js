// its scope is globle
let name = "Raza"
function greet(){
    console.log("Hello " + name);
    // any variable declard inside function is local variable and can not be accessed outside the function
    var surname = "Balghari";
    console.log(surname);
}
greet();
console.log("My name is " + name);
// console.log("My surname is " + surname);

// block element 
if(true){
    let age = 12;
    console.log("My age is : "+age);
    var roll = 1;
    console.log("My roll no is :" +roll)
}
// console.log(age) //age not visible here 
console.log(roll) //roll in block is visible here 


