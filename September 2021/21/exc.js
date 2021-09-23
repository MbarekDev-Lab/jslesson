
// 🔥🔥🔥 CODING CHALLENGE - 1  🔥🔥🔥

// 1. Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
//     Examples:
//     doubleValues([1,2,3]) --> [2,4,6]
//     doubleValues([5,1,2,3,10]) --> [10,2,4,6,20]

// let numbers = [1,2,3,4,5,6,7]
// const doubleValues = numbers.map(item => item * 2); console.log(doubleValues);

// 2. Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
//     Examples:
//     onlyEvenValues([1,2,3]) -->  [2]
//     onlyEvenValues([5,1,2,3,10]) -->  [2,10]

// let numbers = [1,2,3,4,5,6,7]
// const onlyEvenValues = numbers.filter(item => item % 2 === 0); console.log(onlyEvenValues);

// 3. Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string
//     Examples:
//     showFirstAndLast(['colt','matt', 'tim', 'udemy'])  -->  ["ct", "mt", "tm", "uy"]
//     showFirstAndLast(['hi', 'goodbye', 'smile']) -->  ['hi', 'ge', 'se']

// let G_7 = ['Germany','Canada','France','Russia','Japan','Italy', 'U.S']
// const showFirstAndLast  = G_7.map((G_7) => G_7.substr(0, 1).toLocaleLowerCase() + G_7.substr(G_7.length -1)); console.log(showFirstAndLast);

// 4. Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and then returns the array passed to the function with the new key and value added for each object
//     Examples:
//     addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') --> [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

const NewkeyAndValue = [
    {name: 'Elie'},
    {name: 'Tim'},
    {name: 'Matt'},
    {name: 'Colt'}
  ].map(addKeyAndValue => ({...addKeyAndValue, title:'instructor'})) 
  console.log(NewkeyAndValue);

// 5. Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so that both lowercase and uppercase letters should be counted
//     Examples:
//     vowelCount('Elie') -->  {e:2,i:1};
//     vowelCount('Tim') -->  {i:1};
//     vowelCount('Matt') -->  {a:1})
//     vowelCount('hmmm') --> {};
//     vowelCount('I Am awesome and so are you') --> {i: 1, a: 4, e: 3, o: 3, u: 1};

// const vowelCount = (str) =>{
//     let vowel = ["a", "e", "i", "o", "u"]; 
//     let obj = {}
//     str.toLowerCase().split('').forEach(element => {
//         if(vowel.includes(element)){
//            obj[element]=(obj[element]||0)+1;
//         }
//     });
//     return obj
// }
// console.log(vowelCount('I Am awesome and so are you')); 

// 6. Write the function camelize(str) that changes dash-separated words like "my-short-string" into camel-cased "myShortString".
// That is: removes all dashes, each word after dash becomes uppercased.
//     Examples:
//     console.log(camelize("background-color")) == 'backgroundColor';
//     console.log(camelize("list-style-image")) == 'listStyleImage';
//     console.log(camelize("-webkit-transition")) == 'webkitTransition';


const camelize = st => Array.from(st).map((x,index)=>{
    if (Array.from(st)[index-1] =='_' && index!==1) x = x.toUpperCase();
    return x;
}).join('').replace(/-/ig,'');
console.log(camelize("list-style-image")) 

// 7. Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a AND lower or equal to b. It returns a result as an array.
// The function should not modify the array. It should return the new array.
//     For instance:
//     let arr = [5, 3, 8, 1];
//     let filtered = filterRange(arr, 1, 4);

//     console.log( filtered ); -->  [3,1] (matching values)
//     console.log( arr ); --> [5,3,8,1] 
// const filterRange = (arr, a, b) => arr.filter(value => value >= a && value <= b);

// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// console.log( filtered );
// console.log( arr );
// const filterRange = (arr,a,b) => arr.filter(x => x >= a && x <= b);
// console.log(filterRange([5,3,8,1],1,4));


// let array = [5, 3, 8, 1];
// function filterRange(array, min, max) {
//     let filtered = array.filter(function (item) {
//         return item >= min && item <= max;
//     })
//     return filtered;
// }
// console.log(filterRange(array, 1, 4));
// console.log(array);

// 8. Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
// The function should only modify the array. It should not return anything.
//     For instance:
//     let arr = [5, 3, 8, 1];

//     filterRangeInPlace(arr, 1, 4);      // removed the numbers except from 1 to 4

// let myArray = [5, 3, 8, 1];
// let filterFunc = (arr, a, b) => {
//   arr.forEach((item, index) => {
//     if (a < item < b) {
//       arr.splice(index, 1);
//     }
//   });
//   return arr;
// };
// console.log(filterFunc(myArray, 1, 4));


// const filterRangeInPlace = (arr,a,b) =>{arr.forEach((x,index)=>{
//     if (!(x >= a && x <= b)) arr.splice(index,1);
// })
//     console.log(arr);
// };
// console.log((filterRangeInPlace([5,3,8,1],1,4)));
