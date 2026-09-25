const prompt = require('prompt-sync')()

let num = parseInt(prompt("enter the number:"));
let temp=num
let sum=0
let rem=0
while(num > 0)                                   //153>0
{
    rem = num % 10                               //153%10=3        //15%10=5       //1%10=1
    sum = sum +rem**3                            //0+3cube=27      //27+125=152    //152+1=153
    num = Math.floor(num / 10)                    //153/10=15      //15/10=1       //1/10=0
}
if(sum === temp)
{
    console.log('entered number is armstrong')
}
else
{
    console.log('entered number is not armstrong')
}