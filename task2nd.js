let value="Welcome to JS"

//lenght of value
console.log(value.length);

//convert the value to uppercase
console.log(value.toUpperCase());

//replace "JS" wit "Javascript"
console.log(value.replace("JS","Javascript"))

//extract "test"from "software testing"
let string1="software testing"
console.log(string1.slice(9,13));

//reverse a string
let reverse="";
for(let i=string1.length-1;i>=0;i--){
        reverse+=string1[i]
}
console.log(reverse)                                              // software testing o/p is gnitset erawtfos

// let st="Luminar Technoloab"
// let revst=st.split(" ").reverse().join('')
// console.log(revst)                                              //luminar technolab o/p isTechnolabLuminar



//count vowels in a string
// let vowels="aeiouAEIOU"
// let count=0;
// for(let i=0;i<string1.length;i++)
//     if(vowels.includes(string1[i])){
//         count=count+1
//     }
// console.log(count)

       //or

//count vowels in a string
// let st="luminar technolab"
// st.toLocaleLowerCase()
// let count=0
// for(let i of st){
//     if((i=='a') || (i=='e') || (i=='i') || (i=='o') || (i=='u')){
//         count++
//     }
// }
// console.log(count);   
                                                            //o/p=6
//  or

//count vowels in a string
let st="luminar technolab"
let vowels="a,e,i,o,u"
let count=0
for(let i of st){
    if(vowels.includes(i)){
        count++
    }
}
console.log("no of vowels="+count)


//check if string is pallindrome
let rev="";
for(let i=string1.length-1;i>=0;i--){
        reverse+=string1[i]
}
        if(string1==rev){
            console.log("string1 is pallindrome")
        }
        else{
            console.log("string1 is not pallindrome")
        }



//count number of words
console.log(string1.split(" ").length)


//find a largest word in a sentance
let w=st.split(" ")
let large=""
for(let word of w){
    if(word.length>large.length){
        large=word
    }
}
console.log("longest word="+large)                                 //technolab





//search an  element in an array,if it is present print"element is present" otherwise print "element is not present"
let arr=["java","python","software","testing"]
let element="software"
console.log(arr.includes(element)?"element is present":"element is not present")







