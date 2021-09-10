// 1. Write a JavaScript function to extract unique characters from a string.
//     Example string : "thequickbrownfoxjumpsoverthelazydog"
//     Expected Output : "thequickbrownfxjmpsvlazydg"

function uniqChar(input){ 
    var str=input;
    var output="";

    for (var i=0; i<str.length; i++){
    if(output.indexOf(str.charAt(i))==-1) {
       output += str[i];  
      }
     }
     return output;  
   }  
   console.log(uniqChar("thequickbrownfoxjumpsoverthelazydog"));

// 2. Write a JavaScript function that generates a string id (specified length) of random characters. 
//     Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
//         Example : makeId(8)  Expected Output : 'LJxQ10x6'
//         Example : makeId(16)  Expected Output : 'ExTWJQW5cScsZn2G'  


function makeId(l){
    var txt = "";
    var charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for(var i=0; i < l; i++ ){

    txt = txt + charList.charAt(Math.floor(Math.random() * charList.length));
    }

    return txt;
    }
    console.log(makeId(8)); // Expected Output : 'LJxQ10x6'


// 3. Write a function which accept a string as parameter and swap the case of each character. 
// For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
//     Example : swapChar('HeLlO')  Expected Output : 'hElLo'

function swapChar(str) { 
    var newChar='',
        newString='';

newString = str.replace(/./g, function(myChar){    //use the replace to iterate and rebuild string
    if (myChar.match(/[a-z]/)){
        newChar=myChar.toUpperCase();
    } else if (myChar.match(/[A-Z]/)){
        newChar=myChar.toLowerCase();
    } else {
        newChar=myChar;
    }

    return newChar;

});

return newString; 
}
console.log(swapChar('HeLlO')); 

// Second Solution 

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

// 6. Write a JavaScript function to remove a specific element from an array. 
//         Example : removeElem([2, 5, 9, 6], 5))  expected output : [2, 9, 6]
//         Example : removeElem(['Mike', 'John', 45, 'Sarah'], 'Sarah')  expected output : [ 'Mike', 'John', 45 ]

let removeElem = (isArray, toRemove) => {
    let index = isArray.indexOf(toRemove);
    if (index){
        isArray.splice(index, 1);
    }
    return console.log(isArray);
}

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


// 5. Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array. 
// Sample array : [NaN, 0, 15, false, -22, '', undefined, 47, null]
// Expected result : [15, -22, 47]

const array = [15, -22, 47];

console.log(array);

const index = array.indexOf(5);
if (index > -1) {
  array.splice(index, 1);
}

console.log(array); 

// Q: 5 solution

let remover = (input) => {
    while (input.includes(NaN)) {
        input.splice(input.findIndex(Number.isNaN), 1);
    }
    while (input.includes(null)) {
        input.splice(input.indexOf(null), 1);
    }
    while (input.includes(0)) {
        input.splice(input.indexOf(0), 1);
    }
    while (input.includes("")) {
        input.splice(input.indexOf(""), 1);
    }
    while (input.includes(false)) {
        input.splice(input.indexOf(false), 1);
    }
    while (input.includes(undefined)) {
        input.splice(input.indexOf(undefined), 1);
    }
    console.log(input);
}
remover([NaN, 0, 15, false, -22, '', undefined, 47, null]);



// 7. Write a JavaScript function to get a random item from an array.
//     getRandomElem([2, 5, 9, 6, 22, 35, 78])  expected output : 22
//     getRandomElem([2, 5, 9, 6, 22, 35, 78])  expected output : 5
//     getRandomElem([2, 5, 9, 6, 22, 35, 78])  expected output : 78

function random_item(items)
{
  
return items[Math.floor(Math.random()*items.length)];
     
}

var items = [254, 45, 212, 365, 2543];
console.log(random_item(items));


let getRandomElem = (isArray) => console.log(isArray[Math.floor(Math.random()*isArray.length)]);