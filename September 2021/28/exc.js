// 1. Greet Users
//     Create a function which will print greeting message

//     Create a function which will receives array of different users and greet each user.

//     greetMessage("John") // print "Good Morning, John"

//     greetUsers(["John","Peter","Mark"], greetMessage)
//     // "Good Morning, John"
//     // "Good Morning, Peter"
//     // "Good Morning, Mark"


// let greetMessage = name => console.log(`Good Morning, ${name}`);
//       greetMessage('John');
//       let greetUsers = (people, callback)=>{
//       for (order in people)  {
//        callback(people[order]);
//       }
//       }
//       greetUsers(["John","Peter","Mark"], greetMessage)


// const names = ["John","Peter","Mark"]; names.forEach((name) => {
//     console.log(`"Good Morning ${name}"`);})


// function greetUsers(array, callback) {
//     array.forEach((name) => callback(name));
//     }
    
//  function greetMessage(name) {
//     console.log(`Good morning ${name}`);
//     }
// greetUsers(["John", "Peter", "Mark"], greetMessage); 

// function greeting(name) {
//     alert('Hello ' + name);
//   }
//   function greetMessage(callback) {
//     let name = prompt("Good Morning, John");
//     callback(name);
//   }
//   greetMessage("John");

// 2. Number Sqaure
//     Write a function which will return sqaure of given number
//     Write a function which will return sqaure of every number in array

//     const array = [1, 2, 3, 4, 5, 6]
//     sqaure(array,squareNumber)  // return [1,4,9,16,25]

// const array = [1, 2, 3, 4, 5, 6].map((a) => Math.pow(a, 2))
// console.log(array);

// let squareNumber = num => num**2;
// let square = (isArray, isFunc) => {
//     let newArray = [];
//     for(item in isArray){
//         newArray.push(isFunc(isArray[item]));
//     }
//     return newArray;
// }
// const array = [1, 2, 3, 4, 5, 6];
// console.log(square(array, squareNumber));


