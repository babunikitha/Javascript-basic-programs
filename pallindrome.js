let num=242
let rev=0
let rem=0
let temp=num
while(num>0)
{
    rem=num%10
    rev=rev*10+rem
    num=Math.floor(num/10)
}
if(rev===temp)
{
    console.log('entered number is pallindrome')
}
else{
    console.log('entered number is not pallindrome')
}