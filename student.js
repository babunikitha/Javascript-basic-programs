// let st={
//     name:'abc',
//     age:23,
//     quali:'btech'
// }

//object using new keyword
function person(name,age,quali){
    this.name=name,
    this.age=age,
    this.quali=quali
}
const st1=new person("adhya",23,"bca")
const st2=new person("abc",24,"btech")
console.log(st1.name);
console.log(st2)