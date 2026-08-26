
function login(user,password){
return new Promise((resolve, reject) => {
    if(user == "admin" && password == "1234"){
        resolve("Login successfully!")
    }else{
        reject("Login failed!")
    }
})
}

login("admin","12134").then((abc)=>{
    console.log(abc)
}).catch((cde)=>{
    console.log(cde)
})