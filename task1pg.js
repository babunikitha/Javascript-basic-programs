const expense=[20000,30000,40000,25000,450000]

//1:add 2000 to each element in expense array
const expenseEachadd=expense.map(num=>num+2000)
console.log(expenseEachadd)

//2:if expense is above 15000 then  minus  2000 and expense is less than 15000 add 2000
const expensecond=expense.map(num=>num>15000?num-2000:num+2000)
console.log(expensecond)


//3:display array which contain expense only above 40000
const expensecheck=expense.filter(num=>num>40000)
console.log(expensecheck)


//4:sum of expense array                                        
const sumexpense =expense.reduce((a,c)=>a+c,0)
console.log(sumexpense)

//5:maximum value of expense array

// let max=expense[0]
// for(let i of expense){
//     if(i>max){
//         max=i
//     }
// }
// console.log(max)

const  maxvalueexpense=expense.reduce((n1,n2)=>n1>n2?n1:n2,0)
console.log(maxvalueexpense)