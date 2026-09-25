const fruits=['apple','orange','grape']
console.log(fruits)

//lenght                                      //to know the lenght of an array
console.log(fruits.length);

//tostring()                                 //to return elements of an array into coma septd string values
console.log(fruits.toString());  

//pop()                             //used to remove last element of an array
console.log(fruits.pop());
console.log(fruits);

//push()                             //used to add an element to the last index of an array
fruits.push('mango');
console.log(fruits);

//shift                              //used to remove first index eleent of an array
fruits.shift()
console.log(fruits);
  
//unshift                            //add element in  fist index element of an array
fruits.unshift('avacado')
console.log(fruits);

//delete
delete fruits[1]
console.log(fruits);

//add an element in an index 
fruits[1]='blueberry'
console.log(fruits)

//concat()
const vegs=['tomato','potato','cucumber','onion']
console.log(fruits.concat(vegs));

//add another
const marks=[50,40,70]
console.log(fruits.concat(vegs,marks));

//slice()                                               //returns a porton of an array,origial rray is not changed
console.log(vegs.slice(1,3));                            //last index element is not included

//include()                                  //check the single elemnt is present or not tru or false
console.log(vegs.includes('potato'));

//sort()                                         //array was sorting
console.log(marks.sort());
console.log(vegs.sort());

//reverse()
console.log(marks.sort());
const ar1=marks.sort()
console.log(ar1.reverse());
console.log(vegs.sort());

//filter                                           based on conditions returns a new array with only elements that passes the condition
const nms=[2,3,4,5,6,7,8,11]
const evnAr=nms.filter(num=>num%2===0)
console.log(evnAr);

//reduce                                             aggregates all array elements into a single value
const sm =nms.reduce((a,c)=>a+c,0)
console.log(sm)