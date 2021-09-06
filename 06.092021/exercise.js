// 1. Write a JavaScript function to extract unique characters from a string.
//     Example string : "thequickbrownfoxjumpsoverthelazydog"
//     Expected Output : "thequickbrownfxjmpsvlazydg"



// function uniqChar(input){ 
//     var str=input;
//     var output="";
//     for (var i=0; i<str.length; i++){
   
//     if(output.indexOf(str.charAt(i))==-1) {
//        output += str[i];  
//       }
//      }
//      return output;  
//    }  
//    console.log(uniqChar("thequickbrownfoxjumpsoverthelazydog"));


// 2. Write a JavaScript function that generates a string id (specified length) of random characters. 
//     Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
//         Example : makeId(8)  Expected Output : 'LJxQ10x6'
//         Example : makeId(16)  Expected Output : 'ExTWJQW5cScsZn2G'  


function makeId(l){
    var txt = "";
    var charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for(var i=0; i < l; i++ ){

    txt += charList.charAt(Math.floor(Math.random() * charList.length)) ;
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










// 6. Write a JavaScript function to remove a specific element from an array. 
//         Example : removeElem([2, 5, 9, 6], 5))  expected output : [2, 9, 6]
//         Example : removeElem(['Mike', 'John', 45, 'Sarah'], 'Sarah')  expected output : [ 'Mike', 'John', 45 ]

var array = [1, 2, 3, 4];var evens = _.remove(array, function(n) { return n % 2 === 0;});console.log(array);// => [1, 3]console.log(evens);// => [2, 4]


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
*/
