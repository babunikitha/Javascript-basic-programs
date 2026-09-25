const oddorEven=num=>{
    if(num%2==0){
        return "even"
    }
    else{
        return "odd"
    }
}
console.log(oddorEven(25));



//check is  even or not
const isEven=num=>num%2==0
console.log(isEven(12));

//ternary operator
const evenorOdd=num=>num%2===0?"even number":"odd number"
console.log(evenorOdd(26));