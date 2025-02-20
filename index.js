//question1
var demo1=function(){
    console.log("hello")
}
demo1()

var demo1=()=>"hello"
console.log(demo1())

//question2
var add= (a,b) =>a+b
console.log(add(3,4))

//question3

var square=(n) => n*n
console.log(square(3,4))

//question4
//if the arrow function consists of only one parameter
//then that parameter need not be enclosed in paranthesis.
var demo=()=>"javascript"
console.log(demo())

//question5
//concise body
var cube = n => n*n*n
console.log(cube(4))

//with block body
var cube1 = (n) => {
    return n * n * n
}
console.log(cube1(3))

//question6
var sub=(a,b)=>{
    return a-b
}
console.log(sub(2,4))


var sub=(a,b)=>a-b
console.log(sub(2,4))

//question7
var demo=()=>"hello world"
console.log(demo())



