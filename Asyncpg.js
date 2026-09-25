function orderFood(){
    for(let i=0;i<200000000;i++)
    {
        return "food ready"
    }
}
console.log("order placed");
console.log(orderFood());
console.log("eating now")


console.log("--------------------Asynchronous----------------------");

console.log("api request")
setTimeout(()=>{
    console.log("result=api")
},3000);
console.log("result")