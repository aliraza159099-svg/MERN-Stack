
function login(user,password){
return new Promise((resolve, reject) => {
    if(user == "admin" && password == "1234"){
        resolve("Login successfully!")
    }else{
        reject("Login failed!")
    }
})
}

login("admin","1234").then((abc)=>{
    console.log(abc)
}).catch((cde)=>{
    console.log(cde)
})

//using async with function the 
//function become a promise function and now
// thre is no need to write promise

const greet = async (name) => { 
    return `Hello ${name}`; 
};

greet("raza").then((abc) => { 
    console.log(abc); 
});


//await
async function sayHello(name) {
    return `Hello my dear ${name}!`
}
const msg = await sayHello("John");
console.log(msg)