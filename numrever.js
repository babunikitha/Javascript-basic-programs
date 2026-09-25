let num=456
let rev=0
let rem=0
console.log(num);
while(num>0)                                               //456        //45     //4         //0
{
    rem=num%10                                             //456%10=6  //45%10  //4%10=4   
    rev=rev*10+rem                                         //0*10+6=6  //60+5=65 //650+4=654
    num=Math.floor(num/10)                                 //45        //45/10=4  //4/10
}
console.log('reversed number='+rev);