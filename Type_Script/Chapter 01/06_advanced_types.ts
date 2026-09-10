let id:string | number ; // The operator | is called as the union operator
id = 90
id = "aliraza99"
// id=true as its not mention
function printInfo():void{
    console.log("The id of the user is : "+id)
}
printInfo()


//literals types
let direction : "left" | "right" | "north" | "south";
direction = "left"
// direction = "forword";