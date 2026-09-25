let st={
    name:"sharon",
    age:30,
    role:'Engineer'
}
console.log(st);

//for -in loop                            //used to loop through keys of an object
for(let i in st)                                  //i=name               //i=age          //i=role
{
    console.log(i,st[i]);                         //st[name]=sharon      //st[age]=30     //st[role]=engineer
}