// for in loop


// Create a function takes an object. It will check all the keys and if the 'role' key exists, then change user role to 'co-admin'. Then the function will return the object.

// let user1 = {
//     email: 'john.doe@gmail.com',
//     password: 'test123',
//     role: 'user'
//     }
//     let user2 = {
//     email: 'john.doe@gmail.com',
//     password: 'test123',
//     isAdmin: false
//     } 

// let user = {
//     email: 'john.kdhgsflg@dlknf',
//     password:'test132',
//     role:'use',
// }

// let user2 = {
//     email: 'john.kdhgsflg@dlknf',
//     password:'test132',
//     role:'use',
//     isAdmin:false
// }
// const checkIf = (obj) =>{
//     for (let item in user){
//         if (key === "role"){
//             console.log(`${key} and ${user[key]}`)
//         }else
//              console.log(`${key} and ${user[key]}`);
//     }
//     return Object
// }
// console.log(use);
// console.log(use2);

// let makeCoAdmin = (obj) => {
//     for (let item in obj) {
//     if (obj[item] == 'user') {
//     obj[item] = 'co-admin'
//     }
//     }
//     return obj;
//     }
//     console.log(makeCoAdmin(user1)); 
    
//     let makeCoAdmin = (obj) => {
//         for (let item in obj) {
        
//         if (item == 'role') {
//         obj[item] = 'co-admin'
//         }
//         }
//         return obj;
//         }
//         console.log(makeCoAdmin(user1)); 



    
// function isInArray(value, array) {
//             return array.indexOf(value) > -1;
//           }

//           let makeCoAdmin = (obj, keyName) => {
//             let keys = Object.keys(obj);
            
//             if (keys.includes(keyName)) {
//             obj[keyName] = 'co-admin'
//             }
//             return obj;
//             }
//             console.log(makeCoAdmin(user1, 'role'));
//             console.log(makeCoAdmin(user2, 'role')); 


 /* Write a function takes an object argument and returns the length of this object. 
 getLength(student) --> 3
Sample object :*/
// let student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 
// };

// const getLingth = obj => {
//     let acount = object (obj);
//     return obj.lenght
// }
// console.log(student);


// Create a myCar object. Include the brand, model, color, year etc. 
// - Create a method to print data from the object e.g. "I have a 1969 red Ford Mustang".
// - Write another method to get the length of the myCar object. 

// var myCar = {
//      brand : "BMW",
//      model: "kjfbg",
//      color: "black",
//      year: "2000",
//      print: function (){
//          return `ì have a ${this.year} ${this.color} ${this.year}`

//      }
// }
// console.log(myCar.print);


/******** object2.entries()  ****/




/***   objects.assign()**** */

let studen = {
    name: 'john',
    class: '4A',
    course: 'js'
}
let grades = {
    'first test': 90,
    second_test: 80,
    Avirage: 8
}

let mergedData = Object.assign(studen, grades);
console.log(mergedData);