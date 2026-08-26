//Spread operator with array
/*
Immutability: It creates shallow copies, 
allowing you to modify data without altering
 the original source.Clean Syntax: It replaces
older, more verbose methods like Object.assign()
or complex for loops.Readability: It makes code
shorter and easier for developers to understand at a glance.
*/

let fruits = ["apple","fig","banana","pine apple"];
let vegitables = ["carrot","onion","mirch"]
let foods = [...fruits]
console.log(foods)
foods = [...fruits,...vegitables]
console.log(foods)

let class1 = ["Ali","Ahmed","Nadir"]
let class2 = ["Bari","Adil","Kabir"]
let school = [...class1,...class2,"Bilal"] //merging both arrays here w can add an another element too
console.log(`The students in our school are : ${school}`);
console.log(school) //answer will be in array form in this case
console.log("The students in our school are : " + school);

//spread operator with object
let user = {name:"Raza",city:"Skardu"}
let administor = {position:"CEO",age:21}
let details = {...user,...administor}
console.log(`The details of the user is ${details}`)
console.log(details)

//spread operator in functions
function numbers(...x){
    console.log(x)
};
numbers(2,3,4,5,6,7,8,9);

function names(...x){
    console.log(x)
};
names("Raza","Abbas","Qasim");

//updation
let profile = { name: "Ali", role: "User" };
// Overrides 'role' and adds 'verified'
let updatedProfile = { ...profile, role: "Admin", verified: true };
// Result: { name: "Ali", role: "Admin", verified: true }

let framework = "React";
let letters = [...framework]; 
// Result: ['R', 'e', 'a', 'c', 't']
console.log(letters)
let number =[];
let complete = [...number, 4, 5]; 
// Result: [1, 2, 3, 4, 5]


