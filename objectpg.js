// let st={
//     name:"sharon",
//     age:30,
//     role:'Engineer'
// }
// console.log(st);



// //for -in loop                            //used to loop through keys of an object
// for(let i in st)                                  //i=name               //i=age          //i=role
// {
//     console.log(i,st[i]);                         //st[name]=sharon      //st[age]=30     //st[role]=engineer
// }



//declare an object
let obj1={
    stName:'Adhya',
    stAge:25,
    stCourse:'TestNg',
    greet:function()
    {
        console.log("hello welcome :"+this.stName);

    }
}
console.log(typeof(obj1));
console.log(obj1)
obj1.greet()
console.log(obj1.stName);
console.log(obj1["stName"])




//nested objects
let person={
    name:'abc',
    marks:{
        maths:30,
        physics:80
    }
}
console.log(person.marks.maths)                      //30


//objects with array values
let person2={
    name:"ved",
    hobbies:["dancing","singing","painting"]
}
console.log(person2.hobbies[1]);                                               //singing



