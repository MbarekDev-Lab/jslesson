/* 1 while loop */

// form the number 1 to 0 we will write the  number

// let num = 0;

// while(num <=100) {
//     console.log(`the number  is ${num}`); {
//     num++
//     continue
//     } else{

//     }

// }



/*
//  CODING CHALLENGE - 1 
    
        // 1. Run Along
        // Create a while loop that runs as long as the variable i is less than 15. Print i.


        let i = 0;
        while (i < 15 ) {
            console.log(` the variable i is less than 15. Print ${i}.`);
            i++;
        }

        // 2. Add it up
        // Create a while loop which sums up numbers from 1-20 using a while loop.

        let countNm = 0;
        let x = 0;

        while (countNm <= 20 ) {
              countNm += x; // sum = sum + i
            x++;

            console.log(countNm); // 210
        }

      //  3. Do this while i...
        // Use a do-while loop to print The number is [i] while i is less than 20.

        let y = 1 ;
        do {
           console.log(` print The number is ${y} while i is less than 20 `);
           y++
        }
        while (y < 20)
*/


/****** "2"  FOR LOOP  *** */ 

//let names = ['mark', 'sarah','james','mike','tobias','mbarek'];
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);

// for (let i = 0; i < names.length; i++) {
//     console.log(`The name in the index ${i} is ${names [i]} `);
// }

// for (let i = names.length - 1; i >= 0; i--) {
//     console.log(`THE NAME IN INDEX ${i} IS ${names[i]}`);
// }


// for (let i = names.length - 1; i >= 0; i--) {
//     console.log(`THE NAME IN INDEX ${i} IS ${names[i]}`);
// }

// for (var i = 0; i < products.length; i++) {
//     console.log(`The products name is ${products[i].name} and with price ${}`);
// }
/*
let products = [
    {
    id: 1,
    name: 'Shoe in black',
    price: 45,
    color: 'black',
    inStock: true,
    description: '.....'
    },
    {
    id: 2,
    name: 'ShoeKids',
    price: 55,
    color: 'pink',
    inStock: false,
    description: '.....'
    },
    {
    id: 3,
    name: 'ShoeRed',
    price: 35,
    color: 'red',
    inStock: true,
    description: '.....'
    }
    ]
    
    for (var i = 0; i < products.length; i++) {
    console.log(`The products name is ${products[i].name} and with price ${products[i].price} `)
    } 

*/

// for (let i = 0; i <= 100; i += 10){
//     console.log(i);
// }

// let i = 0;
// while (i <= 100){
    
// }
/*
let names = ['mark', 'sarah','james','mike','tobias','mbarek'];

let item;

// for (item of names){
    
//     console.log('mark'){
//         continue;
//      else if (item === 'mike') {
//         break;
//     }
// }

for ()

*/

/****   4 . SCOPES*** */


// var age = 10;

// if (true) {
//     console.log('age from blick', age); // 10
// }
 
// console.log('age from global ', age);   //10


// var age = 10;

// if (true) {
//     var age = 50;
//     console.log('age from blick', age); // 50
// }
 
// console.log('age from global ', age);   //10


// if (true) {
//     var age = 50;
//     console.log('age from blick', age); // 50
// }
 
// console.log('age from global ', age);   //10

// if (true) {
//     let age = 50;
//     console.log('age from blick', age); // 50
// }
 
// console.log('age from global ', age);   // not defined
 
// let age = 1;

// if (true) {
//     let age = 50;    // first declaring variable
//     let age = 100;   // redeclaring ---> ERROR

//     console.log('age from blick', age); // 50
// }
 
// console.log('age from global ', age);   // not defined
// let age = 10;

// if (true) {
//     var age = 50;   

//     console.log('age from blick', age); // 50
// }
 
// console.log('age from global ', age);   // not defined


// 🔥🔥🔥 CODING CHALLENGE - 2  🔥🔥🔥

//     1. Write a program to add up the numbers from 1 to 20.

for (let i = i+= i; i < 20 ; i++){
  let x = i + i;
    console.log(x);             
}

// 1. Write a program to add up the numbers from 1 to 20.
let nummy = 1;
let sum = 0;
while (nummy <=20) { // while loop
    sum += nummy
    nummy++;
}
console.log(("1. " + sum));
 
// 2. Write a program that will output, "There is one bottle of beer on the wall." "There are two bottles of beer on the wall" up until there are five bottles.


// let beer = ["There is one bottle of beer on the wall.", "There are two bottles of beer on the wall", "There are three bottles of beer on the wall","There are four bottles of beer on the wall","There are five bottles of beer on the wall",]
// for (var i = 0; i < beer.length; i++) {  ///    using for loop
//     console.log(`${i + 1} : ${beer[i]}`);
// }

// 3. Write a program that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and print that to the console (e.g. "2 is even").

// for (let i = 0; i < 20; i++){
//     if (i % 2 == 0) {
//     }else {
//         console.log(i);
//     }else if {
//         console.log(object);
//     }
// }

// 4.  Write a program that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

// for (let i = 2; i < 1000; i*=9 ){
//     console.log(i);

// }


for (i = 1; i <= 10 ; i++)










