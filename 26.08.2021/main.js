//*******CONDITIONAL STATMENT  IF ELSE***** */

/*
Let's play mini FizzBuzz! For any given number, if the number is:

divisible by 3, print "Fizz".
divisible by "5", print "Buzz".
divisible by both 3 and 5, print "FizzBuzz".
That is, if any of the above conditions apply, print the above words instead of the number.
what if user enters a string , then print a warning message.
Otherwise, just print the number. 
*/
let result;
const ageSarah = 19;

if (ageSarah >= 18) {
    result = `Great .... sarah ${ageSarah} ,will take and she will driving car. `
}else {
    result = `ohh sorry ... sarah should wait ${18 - ageSarah} yeasr more`
}

console.log(result);
// money 

const money = 1;  // true

console.log(Boolean(money));

if (money != 0) {  //  false  ===> NOT EXECUTED 
    console.log('Dont\'t spend it at all....!' );
}else {
    console.log('you should get the job');
}

console.log(money);

// Chek whether the sum of two integers is 10 or whether their difference is 10


// let x = 6;
// let y = 2;


// if ((x + y == 10) || Math.abs(x - y == 10)){
//     console.log( 'the result is true');
// } else {
//     console.log(' the result is false');
// }

// function  (x , y) {
//     if (x > y) {
//       return x - y
//     } else {
//       return x - y
//     }
//   }

console.log('Exircise 2');

let printResult = true;

if (printResult === "" || isNaN(printResult)) {
    console.log('Warning! You haven\'t a valid Number');
}

else if (printResult % 3 === 0 && printResult % 5 === 0) {
  console.log("print: \"FizzBuzz");
}

else if (printResult % 3 === 0) {
    console.log("print: \"Fizz\"");
} 

else if (printResult % 5 === 0) {
    console.log("print: \"Buzz\"");
}

else if (printResult % 5 === 0) {
    console.log("print: Please enter a valid number");
}

else {
    console.log("print : Your Name");
}

//******* 2 CONDITIONAL STATMENT  ternary Operatur ***** */
/*
let bgRed = "red";
let classList = "nav-item red";  // class name is A resurve veraible name 


let lastClasslist = (classList.includes("red")) ? "nav-item" : "nav-item red";
console.log(lastClassList);


let grade = "";
let result ;

if (grade <= 100 && grade >= 90){
    result ='A'
}
else if (grade <= 89 && grade >= 80){
    result ='A'
}
else if (grade <= 79 && grade >= 70){
    result ='A'
}
if (grade <= 100 && grade >= 90){
    result ='A'
}

result = (grade <= 100 && grade >)

*/
   /*****swich case  */

   let grade = 'a';
   let message;

   switch (grade) {
       case 'A':
           message = 'A --- well done!';
           break;

        case 'B':
            message = 'B ----Good ';
            break;   
        case 'C':
            message = 'C ----Try next time ';
            break;   
        case 'D':
            message = 'D ---- Try';
            break;   
        case 'E':
            message = 'E ----Bad ';
            break;   

        default:
            message = 'you should study more'    
   }

   console.log(message);

   const fruit = "bananaggg";

   switch (fruit) {
   case "apple":
   console.log("An apple a day keeps the doctor away.");
   break;
   case "banana":
   console.log("Bananas are full of potassium.");
   break;
   case "orange":
   console.log("Yep, oranges. Great choice.");
   break;
   case "strawberry":
   console.log("Mmmm...nothing better than strawberries.");
   break;
   default:
   console.log("PICK A FRUIT");
   } 



