 /***         Numbers  Methods     **** */  

// 1. Number(variable) Method

console.log(Number('10 city'));   // NaN, 
console.log(Number(true));        // NaN, 
console.log(Number('10 city'));   // NaN, 
console.log(Number('10 city'));   // NaN, 
console.log(Number('10 city'));   // NaN, 
console.log(Number('10 city'));   // NaN, 
console.log(Number('10 city'));   // NaN, 


// 2. parseFloat (string variabl)


console.log('25');
console.log(typeof '25');
console.log('25');
console.log('25');



/// number

let price1 = 120.5222222;
console.log(typeof price1); // number
let price2 = 80.544444;
console.log(typeof price2); // number

price1 = price1.toFixed(); // '121' - still string
// price1 = parseFloat(price1); // 1. option, parseFloat() converts from string to number
// price1 = Number(price1); // 2. option, Number() converts from string to number
price1 = +price1; // 3. option, unary operator(+/-) converts from string to number

console.log(typeof price1); //
price2 = +price2.toFixed(); // 81
console.log(typeof price2); // 

console.log(`The total price is ${price1 + price2}`); // The total price is 120.5280.54 


  // 5.toPrecision

// let x = 123.9869469
// console.log(x.toPrecision (5));        // 5 numbers
// console.log(x.toPrecision (3));        // 3 numbers
// console.log(typeof x.toPrecision (5));  // string


// 6.Number.toString() Method

let x = 245;
console.log(typeof x);  // number
 
x = x.toString();
      console.log(typeof x);  //

let x = 245;
console.log(typeof x);  // number
