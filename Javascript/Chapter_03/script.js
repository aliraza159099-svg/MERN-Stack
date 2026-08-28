// let button = document.getElementById("button")
// let list = document.getElementById("list")
// button.addEventListener("click",()=>{
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response)=>
//         response.json())
//     .then((data)=>{
//         list.innerHTML = ""; 
//                 data.forEach((user) => {
//                     list.innerHTML += `<li>${user.name}</li>`;
//                 });
//     })
// })

// version 2
let button = document.getElementById("button");
let list = document.getElementById("list");

console.log("1")
button.addEventListener("click", async () => {
    try {
        // 1. Fetch the data from the API
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        
        // 2. Parse the JSON response
        let data = await response.json();
        
        // 3. Clear the existing list items
        list.innerHTML = "";
        
        // 4. Loop through users and append phone numbers
        data.forEach((user) => {
            list.innerHTML += `<li>${user.phone}</li>`;
        });
    } catch (error) {
        // 5. Handle any network or parsing errors
        console.error("Error fetching data:", error);
    }
});

console.log("2")
