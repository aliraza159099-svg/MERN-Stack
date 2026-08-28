let name = "Joshy"
let age = 18
//now converting it to an object
//old way
// let user = {name:name,age:age}
//modern way of ESF6
let user = {name,age};
console.log("The user is : ",user);
//adding variables in an exixting object
let field1 = "name";
let value1 = "Rehman"
let field2 = "email"
let value2 = "Rehman34@gmail.com"
let pro_user = {
    city:"London",
    [field1]:value1,
    [field2]:value2
};
console.log(pro_user)