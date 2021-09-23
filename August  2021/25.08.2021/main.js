///  ******* ARRAY **********
//  old version
// let numbers = new Array(100, 55, 34, 25);
// console.log(numbers);


// const numbers2 = new Array(12, 10);
// console.log(number2);

//  **** new version ***

// let numbers = [100, 55, 34, 25];
// console.log(numgers);





// let names = ['sarah', 'joe', 'mike',]

// // console.log(names[0]);  //sarah
// // names[1] = 'jonas';

// // console.log(names);
// // console.log(names[names.length -1]); // last item


// //***** push  /pop *** */
//  let numbers = [23, 35, 45, 89, 67];
//  numbers[5] = 33;
//  console.log(numbers.length);

//  console.log(numbers);    // [,23, 35, 45, 89, 67, 33 ]
//  numbers.push(22);
//  console.log(numbers.length);

//  console.log(numbers);    // [,23, 35, 45, 89, 67, 33 ]
//  numbers.push(22, 55 );
//  console.log(numbers.length);

//  // ***pop
//  console.log(numbers);    // [,23, 35, 45, 89, 67, 33 ]
//  numbers.pop();
//  console.log(numbers.length);


//  // *****unshift ()  / shift ()


// let firstItem = numbers.shift()


// ***************** ARRAYS ************************

// old syntax, BAD SYNTAX
/*
let numbers = new Array(100, 55, 34, 25);
console.log(numbers);
console.log(numbers.length);            // 4

const numbers2 = new Array(12, 10);
console.log(numbers2);
console.log(numbers2.length);           // 2

var numbers3 = new Array(5);
console.log(numbers3);              // [ <5 empty items> ]
console.log(numbers3.length);       // 5 , unexpected output


// new syntax, [ ] , good syntax
/*
let numbers = [100, 55, 34, 25];
console.log(numbers);
console.log(numbers.length);            // 4

const numbers2 = [12, 10];
console.log(numbers2);
console.log(numbers2.length);           // 2

var numbers3 = [5];
console.log(numbers3);              // [ 5 ]
console.log(numbers3.length);       // 1
*/

/*
let names = ['Sarah', ' Joe', 'Mike', 'Matilda'];

console.log(names[0]);      // Sarah
names[1] = 'Jonas';

console.log(names);         // [ 'Sarah', 'Jonas', 'Mike', 'Matilda' ]

console.log(names[names.length - 1]);   // names[3] --> 'Matilda'
*/



// **************** ARRAY METHODS ********************
// 1. push() / pop() Methods
/*
let numbers = [23, 35, 45, 89, 70];
numbers[5] = 33;

console.log(numbers);       // [ 23, 35, 45, 89, 70, 33 ]
console.log(numbers.length);  // 6

numbers.push(22);
console.log(numbers);         // [ 23, 35, 45, 89, 70, 33, 22 ]
console.log(numbers.length);  // 7

numbers.push(10, 99, 44);  // possible to add multiple items
console.log(numbers);       // [ 23, 35, 45, 89, 70, 33, 22, 10, 99, 44 ]
console.log(numbers.length);  // 10

let names = ['Sarah', 'Jessica', 'Mike', 'Jonas'];
let lastName = names.pop();
console.log(lastName);              // 'Jonas'
console.log(typeof lastName);       // string
console.log(names);                 // ['Sarah', 'Jessica', 'Mike']


let elements = ['Sarah', 'Jessica', 'Mike', 'Jonas', 24, true, null];

let lastItem = elements.pop();      
console.log(lastItem);              // null
console.log(typeof lastItem);       // object
console.log(elements);              // ['Sarah', 'Jessica', 'Mike', 'Jonas', 24, true]
*/


// 2. unshift() / shift() Methods

// let numbers = [11, 22, 33, 44, 55];

// numbers.unshift(1);
// console.log(numb'ers);   // [ 1, 11, 22, 33, 44, 55 ]

// numbers.unshift(100, 200, 300); // possible to add multiple items
// console.log(numbers);       // [ 100, 200, 300, 1, 11, 22, 33, 44, 55 ]
// console.log(numbers.length);  // 9

// let firstItem = numbers.shift();
// console.log(firstItem);     // 100
// console.log(numbers);           // [200, 300, 1, 11, 22, 33, 44, 55 ]
// console.log(numbers.length);    // 8


//********* toString *****/

/*
let items = 8[23, 'John', true,undefined, 'mike', null];
console.log(items);
console.log(typeof items);


let newStrItems = 8[23, 'John', true,undefined, 'mike', null];
console.log(items);
console.log(typeof items);
*/

// 3. splice()

// let numbers = ['john', 'mike']



// 4. slice()
// let cars = ['saab', 'mer', 'bmw','daf', 'opl'];

// let newCars = cars.slice(0, 2);

// console.log(newCars);
// console.log(typeof newCars);
// console.log(newCars instanceof Array);
// console.log(Array.isArray(newCars));


// console.log(cars instanceof Object);


// 5. contact() Method
/*
let conc1 = [1, 2, 3];
let conc2 = [4, 5, 6];

let totalArrays = conc1.concat(conc2, true, 'John', 'mike', 34, false);
console.log(totalArrays);
*/

// 5. indexOf()Method

// let number = [1, 3, 4, 5,]

// console.log(number.indexOf(10)); 
// console.log(number.indexOf(3, 5)); ???????
// console.log(number.indexOf(6)); ???????

//5  lastIndexof  


// console.log(number.indexOf(10)); 
// console.log(number.indexOf(3, 5)); ???????
// console.log(number.indexOf(6)); ???????

//5  lastIndexof  


// 5. indexOf()Method

// let number = [1, 3, 4, 5,]

// console.log(number.indexOf(10)); 


//  6 Includes()  


// let items = [1, 3, 'john', true, false, 4, 5,]

// console.log(items.includes('john'));  // true
// console.log(items.includes(10)); //false

// console.log(items.includes(false)); // true



//  7 reverse()  

// let items = [1, 3, 'john', true, false, 4, 5,]

// console.log(items.reverse());  


// 8. String . split(),  Array. join() Methods
// let items =  'one two three four' ;
// console.log(typeof items);

/*

EXERCISE-1 
    -----------
    1. Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as a value.

    2. Change the first item in the array to "Berlin".

    
// let number = [1, 3, 4, 5,]

// console.log(number.indexOf(10)); 


//  6 Includes()  


// let items = [1, 3, 'john', true, false, 4, 5,]

// console.log(items.includes('john'));  // true
// console.log(items.includes(10)); //false

// console.log(items.includes(false)); // true



//  7 reverse()  

// let items = [1, 3, 'john', true, false, 4, 5,]

// console.log(items.reverse());  


// 8. String . split(),  Array. join() Methods
// let items =  'one two three four' ;
// console.log(typeof items);

/*

EXERCISE-1 
    -----------
    1. Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as a value.

    2. Change the first item in the array to "Berlin".

    3. Print the length of the array "euroCities".

    4. Remove the last item of the array "euroCities".

    5. Use an array method to add "Budapest" to the end of euroCities array.

    6. Remove the second and third items from the euroCities array.

    7. Create another variable named asianCities and assign an array of at least 5 cities to the variable.

    8. Use an array method to select second and third items from the array of asianCities and store this in another variable.

    9. Use a method to concat euroCities with asianCities. Store the result in a variable (eg. worldCities).

    10. Reverse the order of worldCities.

    11. Replace the 3rd item in the array of worldCities with "Toronto".

    12. Remove no elements from the array of worldCities, but insert "Washington" at the 2nd position.

    13. Write a program to join all elements of the result (worldCities) into a string. 
    Example: worldCities = ["Berlin", "London", "Bangkok", "Phnom Penh"]; 
             Expected Outputs: 1.  "Berlin, London, Bangkok, Phnom Penh" 
                               2.  "Berlin+London+Bangkok+Phnom Penh"



*/
"London"
/*
-----------


1. Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as a value.

*/

let euroCities =  ["Paris", "London", "Valletta", "Prague", "Rome"]
let secondEuroCities = euroCities[1];
    
console.log(secondEuroCities);

// 2. Change the first item in the array to "Berlin".

let euroCities1 =  ["Paris", "London", "Valletta", "Prague", "Rome"]
     euroCities1.unshift('berline');
     console.log(euroCities1);
//3. Print the length of the array "euroCities".

console.log(euroCities.length);

//4. Remove the last item of the array "euroCities".

let removLastName = euroCities.pop();

console.log(euroCities);

//5. Use an array method to add "Budapest" to the end of euroCities array.

euroCities.push("Budapest");
console.log(euroCities);

//6. Remove the second and third items from the euroCities array.

euroCities.splice(1, 2);
console.log(euroCities);


// 7. Create another variable named asianCities and assign an array of at least 5 cities to the variable.

let asianCities = ["changhai", "bombai", "bangkouk","bejing", "istambul"]
console.log('7 '+asianCities);

// 8. Use an array method to select second and third items from the array of asianCities and store this in another variable.

let secondAndThird = asianCities.slice(1, 3);
console.log('8 '+secondAndThird);

// 9. Use a method to concat euroCities with asianCities. Store the result in a variable (eg. worldCities).


let euroAsia = euroCities.concat(asianCities);
console.log('9 ' + euroAsia);

//10. Reverse the order of worldCities.

console.log(euroAsia.reverse());  



//11. Replace the 3rd item in the array of worldCities with "Toronto".

let replaceItem = euroAsia.splice(3, "Toronto")
console.log(replaceItem);
euroAsiaAr
// 12. Remove no elements from the array of worldCities, but insert "Washington" at the 2nd position.
   


euroAsia.splice(1, 0, "Washington");
console.log(euroAsia);



//13. Write a program to join all elements of the result (worldCities) into a string. 
//Example: worldCities = ["Berlin", "London", "Bangkok", "Phnom Penh"]; */



console.log(euroAsia.join(', '));
console.log(euroAsia.join('+'));

