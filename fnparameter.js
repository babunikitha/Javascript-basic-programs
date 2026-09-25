//parameterized function
function printName(name)
{
    console.log('my name is '+name);
}
printName('niki sha')


//function with return value
function add(a,b){
    return a+b
}
const output=add(10,20)
console.log(output)

//function  storig inside a variable
const greet=function()
{
    console.log('hi good morning')
}
greet()

//arrow function :shorter way to write funnctions
//const variableName=(parameters)=>code
//with parameters
const subtr=(x,y)=>x-y
console.log(subtr(40,20));

//with no parameters
const gtng=()=>console.log('hi maybatch')
gtng();

//with single parameter
const sqr=num=>{
    return num*num
}
console.log(sqr(5));

