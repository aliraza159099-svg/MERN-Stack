interface Student{
    nam:string,
    age:number
};

const stu:Student = {nam:"Raza",age:19};
console.log(stu)

//optinal paramters even exists here
interface User{
    name:string,
    id:string,
    age?:number
}
const u1:User = {name:"Raza",id:"balghari99"};