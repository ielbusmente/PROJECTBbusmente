let add = function(num1, num2) {
    return num1+num2;
}
function fun(callback) {
    let sum = callback(4,5);
    console.log("sum =  "+ sum);
}
fun(add);  
// add - called a callback function, provided as a paramete to another function
// fun - higher-order function