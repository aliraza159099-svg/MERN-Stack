// lexical scope 
function outer(){
    let course = "MERN";
    function inner(){
        console.log(course)
    }
    // inner()
    return inner();
}
const func1 = outer();
func1();