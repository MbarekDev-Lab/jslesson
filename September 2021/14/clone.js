import { cloneDeep } from "lodash";

// let product = {
//     category:'shoe',
//     colors:['white','black','yellow'],
//     price:{normal:100, sale:95, children:90},
//     delevery: ['germany,', 'Poland'],
//     deleveryCost: 6,
//     poland:12
// }
// console.log(product);

// let maxNum = Math.max(2, 6, 9, 3, 4);
// console.log(maxNum);

// 1. Combining Arrays. Create two arrays. e.g. euroCountries and asianCountries. Add asianCountries items to the end of euroCountries array.
// Once again create two arrays. Save all elements of both arrays to another variable.

let asianCountries =  ["China", "Japan", "India"];
let euroCountries  =  ["Germany", "France", "Russia"];

let euroAsiaCountries  =  [...asianCountries, ...asianCountries]

euroCountries.push(...asianCountries)

console.log(euroCountries);


let euroCountries = ["Berlin", "Amsterdam", "London"];

let asianCountries = ["Shanghai", "Manila", "Bangkok"];

let worldCountries = [...euroCountries, ...asianCountries];

        
   euroCountries.push(...asianCountries);

   console.log(euroCountries);
   console.log(worldCountries);


// 2. Copying Arrays. Copy an array using the spread operator. Store the copied array in another variable.

// let arr = [1,2,3]
// let newArr = [...arr]
// console.log(newArr);

// 3. Find the Largest. Create a function to find the largest number in an array.

//. Find the Largest. Create a function to find the largest number in an array. 

// let largestNum = arr => Math.max(...arr)

// let numbers = [1, 2, 6, 9, 87, 12, 65, 22, 78];

// console.log(largestNum(numbers));


// 4. Find the Smallest. Create a function to find the smallest number in an array.


// 5. Clone and Merge. 
//     Given two objects:

//     const person = {name: "John"}
//     const job = {role: "Teacher"}

//     5.1 Clone the person object.
//     5.2 Merge these two objects into one object: "employee". Use the spread operator to do so.
//     5.3 Then change the values of the properties in the employee object.

const person = { name: "Florian" };
const job = { role: "co-Teacher" };
const clonPerson = { ...person };
const employee = { ...person, ...job };
console.log("employee : ", employee);
employee.name = "john";
employee.role = "main-Teacher";
console.log("employee : ", employee);
console.log('-------- 6 --------');


// 6. Is the average a whole number? Create a function that takes 4 integers as parameters and returns true or false depending on whether the average of all the arguments is a whole number or not.
//     Examples
//     isWhole(1, 2, 3, 4) ➞ false
//     isWhole(9, 2, 2, 5) ➞ false

let isWhole = (...args) => {
    let sum = 0;
    for (let i = 0; i < args.length; i++){
        sum+= args[i];
    };
    return Number.isInteger(sum/args.length);
};

console.log(isWhole(1, 2, 3, 4));
console.log(isWhole(9, 2, 2, 5));
console.log(isWhole(5, 5, 5, 5));