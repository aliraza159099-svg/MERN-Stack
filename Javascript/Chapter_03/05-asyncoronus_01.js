/*
JavaScript is single-threaded and synchronous, 
executing code line-by-line. However, time-consuming
tasks like API requests or timers can freeze the browser.
To prevent this, we use asynchronous features like setTimeout,
Promises, or async/await. These offload heavy operations to the browser's
Web APIs, allowing the remaining code to execute instantly. 
Once the background task finishes, its result handles 
seamlessly without blocking the user interface.
*/
console.log("starts")
setTimeout(()=>{
    console.log("Loaded")
},2000)
console.log("Loading")