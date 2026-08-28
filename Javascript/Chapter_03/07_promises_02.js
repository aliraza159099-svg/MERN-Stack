function getUser(){
    return new Promise((resolve)=()=>{
        setTimeout(()=>{
        console.log("User Loaded")
        },0)
    })
}

async function loadUser() {
    const data = await getUser()
    console.log(data)
}
console.log("1")
loadUser()
console.log("2")

//fetch data
async function getPost() {
    try{
    let response = await fetch("https://cdn.tailwindcss.com")
    let data = await response.json();
    }catch(err){
        console.log(err)
    }
}
getPost()