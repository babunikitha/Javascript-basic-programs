let person2={
    name:"Ved",
    hobbies:["Dancing","Singing","painting"]
}
console.log(person2.hobbies)

person2.age=23
person2.qualification='btech'
console.log(person2);


//add a new property
for(let i in person2){
    console.log(i,person2[i]);
}


//check if a property exist
console.log("age" in person2)