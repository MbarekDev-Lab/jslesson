
// EXERCISE-1
// -----------


// 1. Add Up. Create a function that takes an integer as an argument. Add up all the integers from 1 to the integer you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
//     Examples:
//         sumIntFrom1ToN(4) ➞ 10
//         sumfunction isDigitOnly(String text){
// 
//         sumIntFrom1ToN(600) ➞ 180300

// function integerNum (firstNum){
//     let Num = 0;
//     // for (let i = 0; i < firstNum.option.length; i++ ){
//     //     if ()
//     //     console.log(i);
//     // }
//     let i = 0;
//     let n = 0;
//       while (i < 5) {
//      i++;
//      if (i === 3) {
//     continue;
//   }
//   n += i;
//   console.log(n);
// }

// }


// function addUp(number) {
//     let sum = 0;
//     for (let i = 1; i <= number; i++) {
//     sum += i;
//     }
//     // return sum;
//     console.log(sum); 
//     }
//     addUp(5)


    // 2. Cubed. Create a function that takes in three numbers and returns the sum of its cubes.
    // Examples:
    //     sumOfCubes(1, 5, 9) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
    //     sumOfCubes(2) ➞ 8
    //     sumOfCubes() ➞ 0 
    // (one * one * one) + (two * two * two) + ( three * three *three)

    // function sumNum(num, num1, num2 ){
    //     let result = (num * num* num)+(num1* num1* num1) +(num2* num2* num2)
    //     return result
    //     console.log(result);
    // }
    //  sumNum(result);
    
    // function sumOfCubes(num) {
    //     let sum = 0;
      
    //     for (let i = 1; i <= num; i++) {
    //       sum += i ** 3;
    //     }
    //     return sum;
    //   }
      
    //   console.log(sumOfCubes(8));
    //   console.log(sumOfCubes(0));


    //   3. String Check. Create a function that takes a string and a word, and then returns true or false depending on whether the word starts with the initial string.
    //   Examples:
    //       isStrStartOfWord("bu", "button") ➞ true
    //       isStrStartOfWord("tri", "triplet") ➞ true
    //       isStrStartOfWord("beau", "pastry") ➞ false

    // function isStrStartOfWord("button"){
    //     for (var i = 0, start; i < starter.length; i++) {
    //       start  = starter[i];
    //       if (s[i] !== starter[i]) {
    //         return true;
    //       }
    //     }
    //     return false;
    //   }
 
// 4. Less Than or Equal to Zero? Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.
//       Examples:
//           isLEQZero(3) ➞ false
//           isLEQZero(0) ➞ true
//           isLEQZero(-4) ➞ true
// //        isLEQZero(10) ➞ false 

// function isPrime(num) {
//     if(num <= 2) 
//     return false;

// }
// for(var i = 0; i < 100; i++){
// if(isPrime(i))

// console.log(i);
// }

function isPrime(num) {
    return num <= 0 ? true : false;
}
console.log(isPrime(10));



// 5. Count Occurrences. Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.
//     Example:
//         countOccurrences("this is a string", "i") ➞ 3

function calc(c, r) {
    return c ** r;
}
console.log(calc(10, 10));


// 6. X To The Power of X. Create a function that takes a base number and an exponent number and returns the calculation. NB: All test inputs will be positive integers.
//     Examples:
//         calcBaseToExponent(5, 5) ➞ 3125
//         calcBaseToExponent(10, 10) ➞ 10000000000
//         calcBaseToExponent(3, 3) ➞ 27


function calc(base, exponent) {
    console.log(base ** exponent);
}
calc(2, 4);

// 7. Dog Years. Create a function which calculates how old a dog is in dog years. The function should accept one argument that is the dog's age in human years. Calculate the dog's age in dog years based on the calculation of 1 human year = 7 dog years.
//     Example:
//         dogAge(4) ➞ "Your doggo is 28 years old in dog years!"


// 12. isPrime? Create a function that returns true if a number is a prime number, and false if it's not. NB: a prime number is any positive integer greater than 1, which is only evenly divisible by two divisors: itself and 1. The first ten prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29.

// function isPrime(int number) {
//     for(let divisor =2; divisor <= number / 2; divisor++){
//         if (number % divisor ==0){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isPrime(9));

