// objects 
let user = {name:"Raza",id:12,department:"CIS"}
console.log(user)
console.log(user.name)

//arrays
console.log("Printing the array")
let fruits = ['apple','banana','fig']
console.log(fruits[1],fruits[0])
//data can be added as
fruits.push("apricot")
console.log(fruits)
//delete the last item by pop
fruits.pop()
console.log(fruits)
//iterating array using loop and for each function
let students = ["Ali","Akbar","Ahmed","Nadir","Kamil","Adil","Bari"]
for(let i = 0 ; i<students.length;i++){
    console.log(students[i])
}
//using for each function
students.forEach(function (value){
    console.log(value)
})

///map function :: When we have to make a change while iterating the aray
let prices = [100,200,301,400,501]
console.log(prices)
let new_prices = prices.map(function (value){
    return value*2
})
console.log(new_prices)

//filter: its use to filter the array
let ages = [12,54,4,23,43,14,10,8,38]
let adults = ages.filter((value)=>{
    if (value >= 18){
        return value
    }
})
console.log(ages)
console.log(adults)