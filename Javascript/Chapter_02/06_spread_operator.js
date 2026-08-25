//Spread operator with array

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
