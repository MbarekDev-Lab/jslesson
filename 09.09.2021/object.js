// Object

// const person = {
//     FirstName: "malik",
//     lastName: "hilal",
//     yearOfBearth: 1989,
//     job: "teacher"
// }

// person.company = "Apple";



// console.log(person);


// let person = {
//     fullNam =

// }



// let user = {
//     email: 'hellokjsdiu@dot .com',
//     password: 'hwiufgi65789'
//     confirmPassword: 'jheorw3345',
    
//     verifyPassword: function(){
//     if (this.password === this.confirmPassword)
//         this.isLoggedin = true
//     }else {
        
//         this.isLoggedin = false
//     }
// }


let john = {
   
     name: "hari",
     city: "london",
     job: "WD",
     age: 29,
}
 
const toChek = (obj, key) => {
  return `${obj.name} ? this ${obj.name} such a key in this object: ${this.key} no  such a key in this objct`;
}
console.log(toChek(john, 'job'));


//Objects

/* Datatype Object (Array , Object, function) */
let name = "Naqvi"
let number = 3
let array = ["item1","item2"]
let obj12 = {name:"naqvi", age:34}
let arr = new Array()
arr.push("item1")
console.log(arr)
//use Object Contructor
let obj = new Object()
obj.name = "Joseph"
obj.age= 34
console.log(obj)
// literal way
let object2 = {
    name:"Ali",
    age:23
}
console.log(object2["name"])
console.log(object2.name)
//Object is set of key value pairs
//dynamic data
let arrayitem= ["berlin","frankfurt","bonn"] //Array
let cityObject= {
    Berlin:234567,
    Hamburg:324256,
    Frankfurt: 634254,
    Düsseldorf:344255443,
    Bonn:343253536
} // Object

for(let i= 0 ;i<arrayitem.length; i++){
    console.log(`${arrayitem[i]} has population of ${cityObject[arrayitem[i]]}`)
}
arrayitem.forEach(item=>{
    console.log(`${item} has population of ${cityObject[item] ? cityObject[item] :"no data found" } `)
})
let age= 32;
if(age>18){
    console.log("you are allowed to do something")
}else if(age>65) {
    console.log("you are over age")
}else{
    console.log("you are under age")
}
age>18 ? console.log("you are allowed to do something")
:  age>65 ?  console.log("you are over age")
: console.log("you are under age") (edited) 


//task to find how many occurance of each item we have in array
let array = ["a","b","c","a","a","b","a","c","c","s","a","c","y","b"]
//result => { a: 1, b: 4, c: 5 ....}
let result = {}
/* for in (Object)
    for of (Array) */
for(let char of array){
    console.log(char)
    if( ! result[char]){
        result[char] = 1
     }else{
         result[char]++;
     }
}
/* array.forEach(char=>{
    //write condition here
    //check if that key exist in the result obj
    if( ! result[char]){
       result[char] = 1
    }else{
        result[char]++;
    }
}) */
console.log(result)


//task to find how many occurance of each item we have in array
let array = ["a","b","c","a","a","b","a","c","c","s","a","c","y","b"]
//result => { a: 1, b: 4, c: 5 ....}
let result = {}
/* for in (Object)
    for of (Array) */
for(let char of array){
    console.log(char)
    if( ! result[char]){
        result[char] = 1
     }else{
         result[char]++;
     }
}
/* array.forEach(char=>{
    //write condition here
    //check if that key exist in the result obj
    if( ! result[char]){
       result[char] = 1
    }else{
        result[char]++;
    }
}) */
console.log(result)






// 1. Volume of a box. Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of the box. (Volume is length * width * height.)
//     Examples:
//     volumeOfBox({ width: 2, length: 5, height: 1 }) ➞ 10
//     volumeOfBox({ width: 4, length: 2, height: 2 }) ➞ 16
//     volumeOfBox({ width: 2, length: 3, height: 5 }) ➞ 30

    let contains = {
   
        width : 2,
        length: 5,
        height: 1,
}
const volumeOfBox = (object) => object.width*object.length*object.height ;
console.log(volumeOfBox(4,2,2));

// function volumeOfBox(obj){
//     return obj.width * obj.length * obj.height;
// }
// console.log(volumeOfBox(2, 5 , 1));



// 2. Extract City Facts. Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be extracted from the object's three properties:
//     name
//     population
//     continent
// The string should have the following format: X has a population of Y and is situated in Z (where X is the city name, Y is the population and Z is the continent the city is situated in).
//     Example:
//     cityFacts({ name: "Paris", population: "2,140,526", continent: "Europe" }) ➞ "Paris has a population of 2,140,526 and is situated in Europe"


       let City = {
   
        name : "Paris",
        population: "2,140,526",
        continent: "Europe",
}

const cityFacts = (Objs) => {
    return `s ${objs.name}has a population of ${Objs.population} and is situated in ${objs.continent} (where X is the city name, Y is the population and Z is the continent the city is situated in `

console.log(cityFacts(4,2,2));



// 3. Calculate the profit.
// You work for a manufacturer, and have been asked to calculate the total profit made on the sales of a product.
// You are given an object containing the cost price per unit (in dollars), 
// sell price per unit (in dollars), and the starting inventory. 
// Return the total profit made, rounded to the nearest dollar.
//     Examples:
//     profit({ costPrice: 32.67, sellPrice: 45.00, inventory: 1200 }) ➞ 14796
//     profit({ costPrice: 225.89, sellPrice: 550.00, inventory: 100 }) ➞ 32411

// let profit = (obj) => {
//     let eachUnit = obj.sellPrice - obj.costPrice;
//     let totalProfit = eachUnit * obj.costPrice;

//     let 

// }

let profit = input => Math.round((input.sellPrice - input.costPrice) * input.inventory);
console.log(profit({ costPrice: 32.67, sellPrice: 45.00, inventory: 1200 }));



// 4. Does the Object Contain a Given Key? Write a function that returns true if a hash contains the specified key, and false otherwise.


//     Examples:
//     hasKey({ a: 44, b: 45, c: 46 }, "d") ➞ false
//     hasKey({ craves: true, midnight: true, snack: true }, "morning") ➞ false
//     hasKey({ pot: 1, tot: 2, not: 3 }, "not") ➞ true


let hasKey = (object, check) => check in object ? true : false;
console.log(hasKey({ pot: 1, tot: 2, not: undefined }, "not"));


// 5. International Greetings. Suppose you have a guest list of students and the country they are from, stored as key-value pairs in an object.
//     const GUEST_LIST = {
//         Randy: "Germany",
//         Karla: "France",
//         Wendy: "Japan",
//         Norman: "England",
//         Sam: "Argentina"
//     }

// Write a function that takes in a name and returns a name tag, that should read: "Hi! I'm [name], and I'm from [country]." If the name is not in the object, return: "Hi! I'm a guest."
//     Examples:    
//     greeting("Randy") ➞ "Hi! I'm Randy, and I'm from Germany."
//     greeting("Sam") ➞ "Hi! I'm Sam, and I'm from Argentina."
//     greeting("Monti") ➞ "Hi! I'm a guest." 


const GUEST_LIST = {
    Randy: "Germany",
    Karla: "France",
    Wendy: "Japan",
    Norman: "England",
    Sam: "Argentina"
}

function greeting(input) {
    if(input in GUEST_LIST) {
        return `Yo, I'm ${input} and I come from ${GUEST_LIST[input]}`;
    } else {
        return "I'm a guest, pls don't tell anyone!";
    }
}
console.log(greeting("Randy"));