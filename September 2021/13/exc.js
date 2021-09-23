
// 🔥🔥🔥 CODING CHALLENGE - 2  🔥🔥🔥

// 1. Object Person. Create an object named person. Loop through the object and print both the property and value of the object.

const person = { a: 1, b: 2, c: 3 };
for (const property in person) {console.log(`${property}: ${person[property]}`);}

// 2. Get Values. Create a function that returns an array of all values of an object's properties.
//     Example:
//     getObjectValues({
//         choice1: "tea",
//         choice2: "coffee",
//         choice3: "milk"
//     })
//     Expected output: ["tea", "coffee", "milk"] 
     
const getObjectValues = {
    choice1: "tea",
    choice2: "coffee",
    choice3: "milk"
  }; console.log(Object.values(getObjectValues));
  
// 3. Add A Method. Create an object and add a method to that object which prints the values of the objects in a string.
//     Example:
//     let person = {
//         firstName: "Michael",
//         lastName: "Smith", 
//         job: "driver",
//         age: 20, 
//         city: Paris
//     }
//     Expected Output: "Michael Smith is a 20 year old driver in Paris".


const person = {
            firstName: "Michael",
            lastName: "Smith", 
            job: "driver",
            age: 20, 
            city: "Paris",
          output: function (){
          return `${this.firstName}  ${this.lastName} is a years old ${this.age} ${this.job} in ${this.city}`
        } 
}
console.log(person.output());



// 4. Convert keys and values into an array. Create a function that converts an object into an array of keys and values.
//     Examples:
//     objectToArray({
//         A: 1,
//         B: 2,
//         C: 3
//     }) 
//     Expected output: [["A", 1], ["B", 2], ["const checkIf = (obj) =>{
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
//     }) 
//     Expected output: [["cats", 1], ["dogs", 2], ["turtles", 4]] 


const objectToArray = { A: 1,B: 2,C: 3} 
const obj = Object.entries(objectToArray); console.log(obj);


// 5. List Properties. Create a function that returns an array of properties of a javascript object.
//     Example
//     let student = {
//         name: "Mike", 
//         class: "4A" 
//         course: "English"
//     }

//     Expected output: ["name", "class", "course"]

let student = {
    name: "Mike", 
    class: "4A", 
    course: "English"
}
function myFunk(input) {
    return Object.keys(input);
}
console.log(myFunk(student));
   


// 6. Merge. Create a function that takes two objects as its parameters and merges them together into a new object.
//     Example
//     let first = {firstName: "John"}
//     let last = {lastName: "Smith"}

//     Expected output: {firstName: "John", lastName: "Smith"}

    let third = (obj1, obj2) => {
        let obj3 = Object.assign(obj1, obj2);
        return obj3;
      };
      console.log(third({ firstName: 'John' }, { lastName: 'Smith' }));

// 7. Return Keys and Values. Write a program that takes an object and returns an array which contains two arrays: one for the keys of the object and the other for the values of the object.
//     Examples:
//     { a: 1, b: 2, c: 3 } ➞ [["a", "b", "c"], [1, 2, 3]]
//     {key: true} ➞ [["key"], [true]]

let toArray = (obj) => [Object.keys(obj), Object.values(obj)];   
console.log(toArray({ a: 1, b: 2, c: 3 } ));
console.log(toArray({key: true})); 



// 8. Create the following object:
//     const student = { 
//                         firstName: "John", 
//                         lastName: "Smith", 
//                         class: 12 
//                     };
    
//     Create a method that prints the following:  "John Smith is a student in class 

const student = { 
    firstName: "John", 
    lastName: "Smith", 
    class: 12,
    funk () {
        return `${this.firstName} ${this.lastName} is a student in class ${this.class}`;
    } 
};
console.log(student.funk());


// 9. Create a person object. Include the person's first and last name, age, job, city etc.
//     - Create a method to print data from the object e.g. "John Smith is a 41 year old engineer living in France".
//     - Write another method to get the length of the person object.

let somePerson = {
    firstName: "John",
    lastName: "Smith",
    age: 40,
    job: 'engineer',
    city: 'Rome',
    someOutput () {
        return `${this.firstName} ${this.lastName} is a ${this.age} years old ${this.job} living in ${this.city}.`;
    },
    counter () {
        let counter = 0;
        for (let keys in somePerson) {
            counter++;
        }
        return counter;
    }
};
console.log(somePerson.someOutput());
console.log(somePerson.counter());

// 10. Let's calculate BMI index for Mark and John.
//     - For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
//     - Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property,
//       and also return it from the method.
//     - Log to the console who has the higher BMI, together with the full name and the respective BMI.
//       Example: "John Smith's BMI (28.3) is higher than Mark Miller's BMI (23.9)!"
//     TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
//     ( BMI =  mass / (height * height). (mass in kg and height in meter) )

let mark = {
    name: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI () {
        let bmi = this.mass / (this.height * this.height);
        return bmi.toFixed(1);
    }
}
let john = {
    name: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI () {
        let bmi = this.mass / (this.height * this.height);
        return bmi.toFixed(1);
    }
}
let compare = () => {
    if (john.calcBMI() > mark.calcBMI()) {
        return `John Smith's BMI (${john.calcBMI()}) is higher than Mark Miller's BMI (${mark.calcBMI()})!`;
    }
    else if (john.calcBMI() == mark.calcBMI()) {
        return `John Smith and Mark Miller have the same BMI of ${john.calcBMI()}.`;
    }
    else {
        return `Mark Miller's BMI (${mark.calcBMI()}) is higher than John Smith's BMI (${john.calcBMI()})!`;
    }
}
console.log(compare());

let firstProfile = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        let bmi = Math.round(this.mass/(this.height**2)*10)/10;
        return bmi;
    }
};


// 10. Let's calculate BMI index for Mark and John.
//     - For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
//     - Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property,
//       and also return it from the method.
//     - Log to the console who has the higher BMI, together with the full name and the respective BMI.
//       Example: "John Smith's BMI (28.3) is higher than Mark Miller's BMI (23.9)!"
//     TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
//     ( BMI =  mass / (height * height). (mass in kg and height in meter) )

let secondProfile = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        let bmi = Math.round(this.mass/(this.height**2)*10)/10;
        return bmi;
    }
};

let higherBmi = (obj1, obj2) => {
    if (obj1.calcBMI() > obj2.calcBMI()){
        return `${obj1.fullName}'s BMI(${obj1.calcBMI()}) is higher than ${obj2.fullName}'s BMI(${obj2.calcBMI()})`;
    } else{
        return `${obj2.fullName}'s BMI(${obj2.calcBMI()}) is higher than ${obj1.fullName}'s BMI(${obj1.calcBMI()})`;
    } 
};

console.log(higherBmi(firstProfile, secondProfile));

 