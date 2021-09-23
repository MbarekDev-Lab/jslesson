/**** FUNCTION EXPRESSION*** */

// let funcExpren = function ( check, word){
    
//     if (word.startsWith(check)){
//           return true
//     }else{
//         return false
//     }
// }

// let result = funcExpren('hello ')
// console.log(result);


// 1. Where Have My Four Letter Words Gone? Create a function that takes an array of strings. Return all words in the array that are exactly four letters.
//     Examples:
//     isFourLetters(["John", "James", "Jack", "Jeanne"]) ➞ ["John", "Jack"]
//     isFourLetters(["Tomato", "Corn", "Lettuce"]) ➞ ["Corn"]
//     isFourLetters(["Dog", "Cat", "Deer"]) ➞ ["Deer"]

function findWord(input){
    let output = [];
    for (i = 0; i <= input.length -1; i++){
        if (input[i].length==4){
            output.push(input[i]);
    }
     return output 
}
let arrHello =  ["John", "James", "Jack", "Jeanne"]
console.log(findWord(arrHello));

/*
// 2. Months. Create a function that takes a number (from 1 to 12) and return its corresponding month name as a string.
//     Examples:
//     monthName(3) ➞ "March"
//     monthName(12) ➞ "December"
//     monthName(6) ➞ "June"

function monthName(x) {
    let months = ["january", "february", "march", "april"]
    return months[x -1]
}

console.log(monthName(2));

 
 //ascending from 1 to the given number, where:
    
 function creatFunction(integerNm){
    let = arrayOfIntegers = []
    for(let i = 1; i < integerNm; i++){

    }
   return arrayOfIntegers;
}


//     For each number in the array that can be evenly divided by 4, that number is amplified by 10 (i.e. return 10 times the number).
//     If the number cannot be divided evenly by 4, simply return the number.
//     The given integer will always be equal to or greater than 1.
//     Include the given number (the number in the parameters).

//     Examples:
//     amplify(4) ➞ [1, 2, 3, 40]
//     amplify(3) ➞ [1, 2, 3]
//     amplify(25) ➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]
*/
