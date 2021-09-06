////****  ARGUMENT keywords **** */

// function sum(){
//     console.log(arguments);
//     console.log(typeof arguments);
//     console.log(arguments);
// }


// 1. Create a function named twofer, it returns "Two for me and one for you" when no arguments are passed
//         e.g
//         console.log(twofer("Fran")) ---> "Two for me and one for Fran"
//         console.log(twofer()) ---> "Two for me and one for you"


// 1. The Greater Numbers. Create a function which accepts two arguments: the first argument being an array of numbers, and the second argument being a number. The function should return the elements of the array which are greater than the second argument.
//         Examples:
//         findGreatest([3, 4, 5, 6, 9], 4) ➞ 5, 6, 9
//         findGreatest([10, 20, 30], 12) ➞ 20, 30
//         findGreatest([0, 10, 9, 3], 4) ➞ 10, 9

// function  GreatNum(firstArr, input){
//    let greaterNumbers = []
//     for (var i = 0; i < firstArr.length; i++) {
//       firstArr[i] > input ? greaterNumbers.push(firstArr[i]) : greaterNumbers;
//     }
//     return greaterNumbers;
// }
// console.log(GreatNum([3,4,5,6,9],4)) ;


// 2. For the longest word. Create a function to find the longest word in a given string.
//     Examples: 
//     longestWord("this is a web development course") ➞ "development"

// function flongestWord(longWord) {
//     var word = longWord.split(' ');
//     var longestWord = 0;
//     for(var i = 0; i < word.length; i++){
//       if(word[i].length > longestWord){
//       longestWord = word[i].length;
//        }
//     }
//     return longestWord;
//   }
//   flongestWord("this is a web development course");


// 3. Reverse. Create a function to reverse a number.
// Examples: 
// reverse(34532) ➞ 23543

// function reverseNum(revs)
// {
// 	revs = revs + "";
// 	return revs.split("").reverse().join("");
// }
// console.log(reverseNum(123456789));

// 4. AEIOU: Vowels. Create a function that takes a string in its parameters and counts the number of vowels 
// (in English, "a, e, i, o, u") in the string.
//     Examples:
//     findVowels("this is a string") ➞ 4

function findVowels(AEIOU)
{
  let vowelList = ("aeiouAEIOU");
  let count = 0;
  
  for(let x = 0; x < AEIOU.length ; x++)
  {
    if (vowelList.indexOf(AEIOU[x]) !== -1)
    {
      count += 1;
    }
  
  }
  return count;
}
console.log(findVowels("this is a striiiing"));

// 5. Missing Number. Create a function that takes an array of all integers between 1 and 10  and returns the missing  integer.
//     Examples:
//     missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5
//     missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10
//     missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7



// 6. Dictionary. Create a function that takes an initial string and an array of words, and returns a filtered array of the words that start with the same letters as the initial string.
//     Notes:
//     If none of the words match, return an empty array.
//     Keep the filtered array in the same relative order as the original array of words.

//     Examples:
//     dictionary("bu", ["button", "breakfast", "border"]) ➞ ["button"]
//     dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]) ➞ ["triplet", "tries", trip"]
//     dictionary("beau", ["pastry", "delicious", "name", "boring"]) ➞ []
