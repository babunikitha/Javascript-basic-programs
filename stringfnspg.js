let s1="Luminar"
let s2="Technolab"

//lenght
console.log(s1.length);

//concat
console.log(s1.concat(s2));

//includes
console.log(s1.includes('u'));

//indexOf
console.log(s1.indexOf('r'));

//startsWith & endsWith                             boolean o/p
let s3="Hello may batch"
console.log(s3.startsWith('Hello'));
console.log(s3.endsWith('batch'));

//toUpperCase & toLowerCase
console.log(s3.toUpperCase());
console.log(s3.toLowerCase());

//replace                                                     change any string to another string
console.log(s3.replace("Hello","Hi"));

//trim                                                to remove the space
let s4='        hi'
console.log(s4);
console.log(s4.trim());

//slice                                              removes any yportion first and last not inclueded
console.log(s3.slice(1,7));

//split                                              to get in single single characters sepertely
const inst=s3.split("")
console.log(inst)

