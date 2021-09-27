

// function sumP(number){
//     if (number === 1){
//         return number
//     }else {
//         return number + sumP(number -1)

//     }
// }
// console.log(sumP(100));


// let letters = ['j', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't'];


// function stingStr(joinLetter){
//     if (joinLetter.length === 1 ){
//         return joinLetter [0]
//     }else{
//         return joinLetter[0] + StringStr(joinLetter.slice()[1])
//     }
// }
// console.log(stingStr(letters));


// 1. Calculate the sum of natural number up to n. 
//         Write a JavaScript program to compute the sum of an array of integers
//     Example:
//     const array = [1, 2, 3, 4, 5, 6]
//     sum(array)  --> returns 21

// function calcSum(num){
//     if(num.length === 1) {
//         return num[0];
//     }return num.pop() + calcSum(num);
// }
// const array = [1, 2, 3, 4, 5, 6]
// console.log( calcSum(array));

// function calcSum(num){
//     if(num > 0) {
//         return num + calcSum(num - 1);
//     }return num;
// }
// function calc(arr, callback) {
//     return arr.map(callback);
// }
// const array = [1, 2, 3, 4, 5, 6]
// const result = calc(array, calcSum);
// console.log(result);




// 2. Calculate factorial of n. Reminder n! = 1 * 2 * ... * 
//     Write a JavaScript program to calculate the factorial of a number.
//     In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example, 5! = 5 x 4 x 3 x 2 x 1 = 120
//     Example : 
//     factorial(5) --> returns 120

// function factorial(n){
//   let answer = 1;
//   if (n == 0 || n == 1){
//     return answer;
//   }else{
//     for(let i = n; i >= 1; i--){
//       answer = answer * i;
//     }
//     return answer;
//   }  
// }
// let n = 5;
// answer = factorial(n)
// console.log("The factorial of " + n + " is " + answer); 


// function factorial(n){
//     //base case
//     if(n == 0 || n == 1){
//         return 1;
//     //recursive case
//     }else{
//         return n * factorial(n-1);
//     }
// }
// let n = 5;
// answer = factorial(n)
// console.log("The factorial of " + n + " is " + answer);



    

// 3. Write a function which can reverse string. 
//     Write a JavaScript function that reverse a string. Sample Data and output: Example reverse("hello world") Expected Output: dlrow olleh

//     const string="hello world"
//     reverse(string)  -->  returns 'dlrow olleh'


// function reverse(str){
//     if(str.length <= 1){
//         return str;
//     }
//     else {
//         return str.charAt(str.length - 1) + reverse(str.substring(0, str.length - 1));
//     }
// }
// console.log(reverse("hello world"));

// 4. Write a function that returns the length of a string. Make your function recursive.

//     Examples:
//     length("apple") ➞ 5
//     length("apple and banana") -> 16
//     length("make") ➞ 4
//     length("a") ➞ 1
//     length("") ➞ 0

// function stringLength(string)
//     parts = string.split("");
//     stringLength = 0;
//     for (x in parts){
//         stringLength++;
// }
// console.log(length("apple")) 

// 5. Sum of Digits of a Number.
//     It is used to find the sum of digits of a number using recursion.
//     Examples:
//     sumDigits(142) --> 1+4+2 --> returns 7
//     sumDigits(358) --> 3+5+8 --> returns 16
//     sumDigits(264) --> 2+6+4 --> returns 12

// function sumDigits(num) {
//     num = num.toString();
//     return num.length === 0
//         ? 0
//         : +num[0] + sumDigits(num.slice(1));			
// }

// console.log(sumDigits(264));