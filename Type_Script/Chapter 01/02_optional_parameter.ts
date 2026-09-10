
//here age is an optinal parameter
function info(name: string, age?: number){
    if(age){
        console.log(`The name of the student is ${name}, and he is ${age} years old.`);
    }else{
        console.log(`The name of the student is ${name}`)
    }
}
info("Raza")
info("Mehdi Hassan",22)