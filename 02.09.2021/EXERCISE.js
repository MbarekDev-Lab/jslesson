
// EXERCISE-1 :
// ------------


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
}
let arrHello =  ["John", "James", "Jack", "Jeanne"]
console.log(findWord(arrHello));


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



// 4. One is not like the others... Create a function that takes an array of numbers and return the number that's unique.
//     Examples:
//     unique([3, 3, 3, 7, 3, 3]) ➞ 7
//     unique([0, 0, 0.77, 0, 0]) ➞ 0.77
//     unique([0, 1, 1, 1, 1, 1, 1, 1]) ➞ 0

function notLikeThem(input) {
    let counter = 0;
    let arr = [];
    for (i=0; i<=input.length; i++) {
        if (input[i] != input[i + 1]) {
            counter++
            arr.push(input[i]);
        }
    }
    if (arr.length == 2) {
        console.log(arr[0]);
    } else {
        console.log(arr[1]);
    } 
}


  const unique = ar => {
    for (let i = 0; i < ar.length; i++) {
        if (ar.indexOf(ar[i]) == ar.lastIndexOf(ar[i])) return ar[i];
    };
};

notLikeThem([0, 1, 1, 1, 1, 1, 1, 1]);

// 5. Word Ranking. Create a function that takes a string of words and returns the highest scoring word.
// Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3, etc.
// The returned string should only contain alphabetic characters (a-z).
// Preserve case sensitivity in the returned string (see 4th example below).

// Examples:
// wordRank("The quick brown fox.") ➞ "brown"
// wordRank("Nancy is very pretty.") ➞ "pretty"
// wordRank("Check back tomorrow, man!") ➞ "tomorrow"
// wordRank("Today is Wednesday.") ➞ "Wednesday" 

function wordRank(str) {
    let regex = /[&\/\\#,+()$~%.'"!:*?<>{}]/g;
    let words = str.replace(regex, "").toLowerCase().split(" ");
    let max = 0;
    let result = "";
    
    for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let val = 0;
    
    for (let j = 0; j < word.length; j++) {
    val += word.charCodeAt(j) - 96;
    }
    
    val > max ? (max = val) && (result = word) : max;
    }
    
    return result;
    }
    console.log(`maximum value is ${max} and the result is ${result}`); 
    // console.log(wordRank("Check back tomorrow, man!")); 


// 6. c4n y0u r34d th15? Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string. 
// NB: for your program to work properly, the function should replace all 'a's with 4, 'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5
//     Examples:
//     hackerSpeak("javascript is cool") ➞ "j4v45cr1pt 15 c00l"
//     hackerSpeak("programming is fun") ➞ "pr0gr4mm1ng 15 fun"
//     hackerSpeak("become a coder") ➞ "b3c0m3 4 c0d3r"

function hackerSpeak(str) {
let arr = str.split("");

for (let i = 0; i < arr.length; i++) {
  switch (arr[i]) {
   case "a":
    arr[i] = 4;
     break;
   case "e":
    arr[i] = 3;
     break;
   case "i":
    arr[i] = 1;
     break;
   case "o":
    arr[i] = 0;
     break;
   case "s":
    arr[i] = 5;
     break;
}
}
return arr.join("");
}
console.log(hackerSpeak("hello world")); 


// 7. snake_case ➞ camelCase. Create a function toCamelCase() that takes a single string in snake_case and converts it into camelCase.
//     Examples:
//     toCamelCase("hello_world") ➞ "helloWorld"
//     toCamelCase("javascript_is_fun") ➞ "javaScriptIsFun"


function toCamelCase(isString){
    isString = isString.split('_');
    let newString = isString[0];

    for (i = 1; i < isString.length; i++){
        newString+=isString[i][0].toUpperCase();
        newString+=isString[i].slice(1);
    }
    console.log(newString);
}

toCamelCase("hello_world");



