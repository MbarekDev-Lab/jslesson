// Create a function that takes an array of numbers and return the number that's unique.
//     Examples:
//     unique([3, 3, 3, 7, 3, 3]) ➞ 7
//     unique([0, 0, 0.77, 0, 0]) ➞ 0.77
//     unique([0, 1, 1, 1, 1, 1, 1, 1]) ➞ 0

// var  unique = [0, 1, 1, 1, 1, 1, 1, 1]
// function sortNum(unique){
//     unique.sort();
//     var listNumbers = {"duplicateNum": [],"uniqueNum": []  
//       };
//     for (let i = 0;i <= unique.length +1; i++){
//         if (unique[i].length !== unique[i-1] && unique[i] !== unique[i+1] ){
//             listNumbers["uniqueNum"].push(unique[i]);
//         }else{
//             listNumbers["duplicateNum"].push(unique[i]);
//         }
//     }
//    return listNumbers;
// }
// console.log(sortNum(listNumbers));



// 7. snake_case ➞ camelCase. Create a function toCamelCase() that takes a single string in snake_case and converts it into camelCase.
//     Examples:
//     toCamelCase("hello_world") ➞ "helloWorld"
//     toCamelCase("javascript_is_fun") ➞ "javaScriptIsFun"

function transformLetter (wordArray) {
    var langArr = wordArray.length;
    for (let i = 0; i < langArr; i++) {
       if (i === 0) {
    }
      else {

    let word = wordArray[i];
    let resultArr = [];
    let splitWord = word.split('');
    
    for (let i = 0; i < word.length; i++) {
    if (i === 0) {resultArr[i] = splitWord[i].toUpperCase() }
    }
    }
    wordArray[i] = splitWord;
    }
    return wordArray;
    }
    console.log(camelCase('home_work_both'));
    

    