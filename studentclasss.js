
//constructor

//create a class with value initilize
class Students{

    name;
    age;
    quali;

//create a constructor with paramets and point out the values
constructor(name,age,quali)
{
    this.name=name;
    this.age=age;
    this.quali=quali;
}
}

//class object creation
const st1=new Students('abc',24,'btech')
console.log(st1)