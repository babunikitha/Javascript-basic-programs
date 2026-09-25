class Parent{
    name;
    age;

    constructor(name,age){
        this.age=age,
        this.name=name
    }
}

class Child extends Parent{
    course;

    constructor(name,age,course){
        super(name,age)
        this.course=course
    }
}

const st1=new Child('abc',23,'TESTING')
console.log(st1);