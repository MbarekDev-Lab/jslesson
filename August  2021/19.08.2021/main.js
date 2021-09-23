// let a = 25;
// let b = 36;
// let c = '25';

// console.log(a == b); // false
// console.log(a != b); // true
// console.log(a > b); // false
// console.log(a >= b); // false
// console.log(a < b); // true
// console.log(a <= b); // true (less than b OR equal to b )

// console.log(a == c); // true, loose comp.
// console.log(a === c); // false, strict comp. different data types
// console.log(a != c); // false, loose comp.
// console.log(a !== c); // true , strict comp.

// console.log('Glow' > 'Glee'); // true


// Ternary Operator
// ('Glow' > 'Glee') ? console.log('Glow is bigger than Glee') : console.log('Glow is less than Glee'); 

// 🔥🔥🔥 ASSIGNMENT - 3  🔥🔥🔥

//     1. Declare two variables "apples" and "oranges". Assign a value of 20 to apples. Assign a value of 30 to oranges.
//     2. Check whether apples and oranges are equal.
//     3. Check whether apples and oranges are not equal.
//     4. Check whether apples is greater than oranges.
//     5. Check whether apples is less than or equal to oranges.
//     6. Check whether oranges is greater than apples.
//     7. Declare another variable "mangoes" and give it a value of 5. Multiply mangoes and apples, and check whether this result is greater than mangoes added to oranges.
//     8. Subtract mangoes from apples and check whether this result is less than oranges divided by mangoes.
//     9. Check whether mangoes, apples and oranges are equal.
//     10. Check whether the remainder of apples divided by mangoes and the remainder of oranges divided by mangoes are equal.
//     11. Check whether mangoes added to apples is greater than oranges minus mangoes. If it is not, find an operator which will give a result of true.

// 🔥🔥🔥 ASSIGNMENT - 4  🔥🔥🔥

//     These exercises are designed to make you more comfortable with the ternary operator.

//     1. Declare a variable named isDog. If true, print 'pat, pat' and if not, print 'find me a dog to pat!'
//     2. Declare a variable named speedCheck. If speedlimit is 50km/h, and your speed is above that, print 'you're going too fast!'. If speed is lower than 50km/h, print 'You're driving below the speed limit, Oma'.
//     3. Declare a variable named age. If age is below 16, print "serve butter beer". Otherwise print "serve beer".
//     4. Declare a variable named isStudent. If true, print "Ticket costs €5,00". If false, print "Ticket costs €12,00".
//     5. Declare a variable named okMarie. Check if there is 'cake' - if so, print "Let them eat cake". If not, print "Oh, bother".
//     6. Check if the following numbers are even numbers. Use a ternary and if the number is even print "30 is even", else print that "it is odd".


var apples = 20;
var oranges = 30;
var mangoes = 5;

var orangesUndmangoes = mangoes+oranges; //35
var mangoeUndapple = mangoes*apples ;   //100




console.log(apples == oranges); // FALSE 
console.log(apples != oranges); // true
console.log(apples > oranges); // false
console.log(apples <= oranges); // true

console.log(apples < oranges); // true
console.log(apples < oranges); // true


console.log(mangoeUndapple > orangesUndmangoes); // checking 100 > 35  is true


var mangoeSubtractapple = mangoes - apples;
var orangeDividedmangoe = oranges / mangoes;

console.log(mangoeSubtractapple < orangeDividedmangoe); 

// 1. Declare a variable named isDog. If true, print 'pat, pat' and if not, print 'find me a dog to pat!'

let isDog = 'pat'

  if(isDog == true)  { 
       console.log(' pat, pat');   
  }else {
      console.log('hello wold -find me a dog');
  }


// 2. Declare a variable named speedCheck. If speedlimit is 50km/h, and your speed is above that, print 'you're going too fast!'. If speed is lower than 50km/h, print 'You're driving below the speed limit, Oma'.

  let speedCheck = 52 ;
  let speedlimit = 50 ;


  if (speedCheck > speedlimit ){
      console.log('fastttttt');
  }else {
      console.log('oma');
  }

  let age = 52 ;


  // 3. Declare a variable named age. If age is below 16, print "serve butter beer". Otherwise print "serve beer".

  if (age < 16 ){
      console.log('serve butter beer');
  }else {
      console.log('erve beer');
  }


  // 4. Declare a variable named isStudent. If true, print "Ticket costs €5,00". If false, print "Ticket costs €12,00".

  let isStudent = true 

  if (isStudent == true) {
      console.log("Ticket costs €5,00");
  }else {
     console.log("Ticket costs €12,00"); 
  }

 // 5. Declare a variable named okMarie. Check if there is 'cake' - if so, print "Let them eat cake". If not, print "Oh, bother".

  let okMarie = 'cake' ;

  if (okMarie == 'cake') {
       console.log("Let them eat cake");

  }else {
      console.log("Oh, bother");
  }
 
  // 6. Check if the following numbers are even numbers. Use a ternary and if the number is even print "30 is even", else print that "it is odd".
//         30
//         939
//         40.9
  
  if(30%2 == 0 && 939%2 == 0 && 40.9%2 == 0) {
      console.log('even');
  }else {
      console.log('odd');
  }










































