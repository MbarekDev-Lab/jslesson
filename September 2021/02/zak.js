
// function camelCase (siString) {
//     var wordArray = dropUnderscore(siString);
//     var camelCaseArray = transformLetter(wordArray);
//     }
    

// function dropUnderscore (siString) {
//     siStringArr = siString.split('_');
//     for (let i = 0; i < siString.length; i++) {
//     }
//     return siStringArr;
//     }


// function toCamelCase(str) {
//         let arr = str.split("_");
        
//         for (let i = 1; i < arr.length; i++) {
//         arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
//         }
//         return arr.join("");
//         }
        
//         console.log(toCamelCase("javascript_is_fun")); 



// // charAt returns a charachter(STRING) at a specified index
// console.log(testing.charAt(2));

// // charCodeAt returns the unicode(NUMBER) at a specified charachter //
// console.log(testing.charCodeAt(2));

// // concat joins 2 or more strings and return a new (STRING) with all the concatenated strings
// console.log(testing.concat(" world", " again"));

// // endsWith check if a string ends with a spedified string, it returns BOOLEAN
// console.log(testing.endsWith("s"));

// console.log(testing.endsWith("t", 10));

// // startsWith check if a string starts with a spedified string, it returns BOOLEAN
// console.log(testing.startsWith("J"));

// console.log("sssss", testing.startsWith("i", 11)); 


// // charAt returns a charachter(STRING) at a specified index
// console.log(testing.charAt(2));

// // charCodeAt returns the unicode(NUMBER) at a specified charachter //
// console.log(testing.charCodeAt(2));

// // concat joins 2 or more strings and return a new (STRING) with all the concatenated strings
// console.log(testing.concat(" world", " again"));

// // endsWith check if a string ends with a spedified string, it returns BOOLEAN
// console.log(testing.endsWith("s"));

// console.log(testing.endsWith("t", 10));

// // startsWith check if a string starts with a spedified string, it returns BOOLEAN
// console.log(testing.startsWith("J"));

// console.log("sssss", testing.startsWith("i", 11)); 




// // replace searches a strings for a specified value and returns a new string where the specified value is replaced
// console.log(testing.replace("is", "isn't"));

// // slice extract a part of a string and returns a new (STRING)
// console.log(testing.slice(11, 13));

// //Substring extracts a charachter from a string between 2 specified indecies
// console.log(testing.substring(11, 13));

// // split it splits a string into an array of substrings
// console.log(testing.split(" "));

// //we can add a second parameter, which is the limit to return
// console.log(testing.split(" ", 3));

// // toLowerCase it lower cases values in a string
// console.log(testing.toLowerCase());

// // toUpperCase it upper cases values in a string
// console.log(testing.toUpperCase()); 




// // includes checks weather a string contains a specific string / returns BOOLEAN
// console.log(testing.includes("is"));

// // we can also use a seconde OPTIONAL parameter to indicate where we want to start the search

// console.log(testing.includes("javascript", 1));

// // indexOf returns the posiion of the first found occurance of a specified value in a string
// console.log(testing.indexOf("is"));

// // we can pass a seconde parameter to start the search at a ceratin index
// console.log(testing.indexOf("is", 5));

// // lastIndexOf return the last index of a given value
// console.log(testing.lastIndexOf("is"));

// // repeat takes a number as an argument and repeats the string as much as the givin number
// console.log(testing.repeat(2)); 


// // charAt returns a charachter(STRING) at a specified index
// console.log(testing.charAt(2));

// // charCodeAt returns the unicode(NUMBER) at a specified charachter //
// console.log(testing.charCodeAt(2));

// // concat joins 2 or more strings and return a new (STRING) with all the concatenated strings
// console.log(testing.concat(" world", " again"));

// // endsWith check if a string ends with a spedified string, it returns BOOLEAN
// console.log(testing.endsWith("s"));

// console.log(testing.endsWith("t", 10));

// // startsWith check if a string starts with a spedified string, it returns BOOLEAN
// console.log(testing.startsWith("J"));

// console.log("sssss", testing.startsWith("i", 11)); 



// let testing = "Javascript is fun when every thing works";




/*
function hackerSpeak(str) {
    let arr = str.split("");
    for (let i = 0; i < arr.length; i++) {
    ("s");
    if (arr[i] == "a") {
    arr[i] = 4;
    } else if (arr[i] == "e") {
    console.log(arr[i]);
    arr[i] = 3;
    } else if (arr[i] == "i") {
    arr[i] = 1;
    } else if (arr[i] == "o") {
    arr[i] = 0;
    } else if (arr[i] == "s") {
    arr[i] = 5;
    } else arr;
    }
    return arr.join("");
    } 

*/




// 6. c4n y0u r34d th15? Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.
// NB: for your program to work properly, the function should replace all 'a's with 4, 'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5.
// Examples:
// hackerSpeak("javascript is cool") ➞ "j4v45cr1pt 15 c00l"
// hackerSpeak("programming is fun") ➞ "pr0gr4mm1ng 15 fun"
// hackerSpeak("become a coder") ➞ "b3c0m3 4 c0d3r" 

// let letter = "h";
// console.log(letter.charCodeAt() -96);

// let regex = /[&\/\\#,+()$~%.'"!:*?<>{}]/g, 


// function wordRank(str) {
//     let regex = /[&\/\\#,+()$~%.'"!:*?<>{}]/g, 
//     word = str.replace(regex, "").toUpperCase().split(" ");
//     for(let i=0;i<word.length;i++){
//         let words = word[i];
//         let val = 0;

//           for (let j = 0; j)
//     }
//     return word       
       
// }
// console.log(wordRank("hello wo%.!?{{{{rld."));

// Exercise function  and loops ----

//     For each number in the array that can be evenly divided by 4, that number is amplified by 10 (i.e. return 10 times the number).
function thing(n){
    let arrayOfIntegers = []
    for(let i = 1; i <= n; i++){
        if(i % 4 == 0){
            arrayOfIntegers.push(i*10)
        }
    }
    return arrayOfIntegers;
}
// If the number cannot be divided evenly by 4, simply return the number.
function thing(n){
    let arrayOfIntegers = []
    for(let i = 1; i <= n; i++){
        if(i % 4 == 0){
            arrayOfIntegers.push(i*10)
        }else{
            arrayOfIntegers.push(i);
        }
    }
    return arrayOfIntegers;
}
console.log(thing(25))
//     The given integer will always be equal to or greater than 1. Just dont pribnt 0 or less using let i = 1 instead of let i = 0
//     Include the given number (the number in the parameters). you can do that with i <= n the = is important in that case

//     Examples:
//     amplify(4) ➞ [1, 2, 3, 40]
//     amplify(3) ➞ [1, 2, 3]
//     amplify(25) ➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]


function thing(n){
    let arrayOfIntegers = []
    for(let i = 1; i <= n; i++){
        if(i % 4 == 0){
            arrayOfIntegers.push(i*10)
        }else{
            arrayOfIntegers.push(i);
        }
    }
    return arrayOfIntegers;
}
console.log(thing(25))


