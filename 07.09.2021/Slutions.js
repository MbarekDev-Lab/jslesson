// 🔥🔥🔥🔥🔥🔥 CODING CHALLENGE - 7 🔥🔥🔥🔥🔥

// 1. Write a JavaScript function to extract unique characters from a string.
//     Example string : "thequickbrownfoxjumpsoverthelazydog"
//     Expected Output : "thequickbrownfxjmpsvlazydg"


let uniquePicker = (inputStr) => {
    let unique = '';
    for (let i = 0; i < inputStr.length; i++) {
        if (unique.includes(inputStr[i]) === false) {
            unique += inputStr[i];
        }
    }
    return unique;
}
console.log(uniquePicker('thequickbrownfoxjumpsoverthelazydog'));


// 2. Write a JavaScript function that generates a string id (specified length) of random characters. 
//     Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
//         Example : makeId(8)  Expected Output : 'LJxQ10x6'
//         Example : makeId(16)  Expected Output : 'ExTWJQW5cScsZn2G'

let makeId = (num) => {
    let samChar =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
    for (let i = 0; i < num; i++) {
      id += samChar.charAt(Math.floor(Math.random() * samChar.length));
    }
    return id;
  };
  console.log(makeId(10));


// 3. Write a function which accept a string as parameter and swap the case of each character. 
// For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
//     Example : swapChar('HeLlO')  Expected Output : 'hElLo'

let twisty = (input) => {
    let output = [];
    for (i=0; i<input.length; i++) {
        if (input[i] == input[i].toLowerCase()) {
            output.push(input[i].toUpperCase());
        } else {
            output.push(input[i].toLowerCase());
        }  
    }
    console.log(output.join(""));
}
twisty("The Quick Brown Fox");



// 4. There are two arrays with individual values as parameters of a function. Write a JavaScript function to compute the sum of each individual index value from the given arrays. 

//     Sample array :
//     array1 = [1,0,2,3,4];
//     array2 = [3,5,6,7,8,13,22];

//     sumArrays(array1, array2)  --> Expected Output : [4, 5, 8, 10, 12, 13, 22]

let sumArrays = (array1, array2) => {
    let sumArr = [];
    for (i = 0; i < Math.max(array1.length, array2.length); i++) {
        sumArr.push((array1[i] || 0) + (array2[i] || 0));
    }
    return sumArr;
}
console.log(sumArrays([1,0,2,3,4], [3,5,6,7,8,13,22]));

// Second solution 
let sumArr = (array1, array2) => {
    let newArr = [];
    if (array1.length > array2.length) {
      for (let i = 0; i < array2.length; i++) {
        newArr.push(array1[i] + array2[i]);
      }
      for (let x = array2.length; x < array1.length; x++) {
        newArr.push(array1[x]);
      }
    } else {
      for (let i = 0; i < array1.length; i++) {
        newArr.push(array1[i] + array2[i]);
      }
      for (let x = array1.length; x < array2.length; x++) {
        newArr.push(array2[x]);
      }
    }
    return newArr;
  };
  console.log(
    sumArr(
      [1, 0, 2, 3, 2, 5, 3, 55, 3, 66, 4],
      [111, 222, 333, 45, 1, 2, 55, 3, 5, 6, 7, 8, 13, 22]
    )
  );



// 5. Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array. 
//     Sample array : [NaN, 0, 15, false, -22, '', undefined, 47, null]
//     Expected result : [15, -22, 47]



// 6. Write a JavaScript function to remove a specific element from an array. 
//         Example : removeElem([2, 5, 9, 6], 5))  expected output : [2, 9, 6]
//         Example : removeElem(['Mike', 'John', 45, 'Sarah'], 'Sarah')  expected output : [ 'Mike', 'John', 45 ]



// 7. Write a JavaScript function to get a random item from an array.
//     getRandomElem([2, 5, 9, 6, 22, 35, 78])  expected output : 22
//     getRandomElem([2, 5, 9, 6, 22, 35, 78])  expected output : 5
//     getRandomElem([2, 5, 9, 6, 22, 35, 78])  expected output : 78