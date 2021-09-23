
// // 6. Write a JavaScript function to remove a specific element from an array. 
// //         Example : removeElem([2, 5, 9, 6], 5))  expected output : [2, 9, 6]
// //         Example : removeElem(['Mike', 'John', 45, 'Sarah'], 'Sarah')  expected output : [ 'Mike', 'John', 45 ]

// var array = [1, 2, 3, 4];var evens = _.remove(array, function(n) { return n % 2 === 0;});console.log(array);// => [1, 3]console.log(evens);// => [2, 4]




// function makeId(l){
//     var txt = "";
//     var charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

//     for(var i=0; i < l; i++ ){

//     txt += charList.charAt(Math.floor(Math.random() * charList.length)) ;
//     }

//     return txt;
//     }
//     console.log(makeId(16)); // Expected Output : 'LJxQ10x6'   jjoxXxSh  . PTe494nL. xyzU5zCLy9Cjz0uq


// function random_item(items)
// {
  
// return items[Math.floor(Math.random()*items.length)];
     
// }

// var items = [254, 45, 212, 365, 2543];
// console.log(random_item(items));

// function wordRank(str) {
//     let regex = /[&\/\\#,+()$~%.'"!:*?<>{}]/g;
//     let words = str.replace(regex, "").toLowerCase().split(" ");
//     let max = 0;
//     let result = "";
    
//     for (let i = 0; i < words.length; i++) {
//     let word = words[i];
//     let val = 0;
    
//     for (let j = 0; j < word.length; j++) {
//     val += word.charCodeAt(j) - 96;
//     }
    
//     val > max ? (max = val) && (result = word) : max;
//     }
    
//     return result;
//     }
//     // console.log(`maximum value is ${max} and the result is ${result}`); 
//     console.log(wordRank('The quick brown fox.'))


// let sumArrays = (array1, array2) => {
//     let sumArr = [];
//     for (i = 0; i < Math.max(array1.length, array2.length); i++) {
//         sumArr.push((array1[i] || 0) + (array2[i] || 0));
//     }
//     return sumArr;
// }
// console.log(sumArrays([1,0,2,3,4], [3,5,6,7,8,13,22]));


// const sumArr = (array1, array2) => {
//     let newArr = [];
//     if (array1.length > array2.length) {
//       for (let i = 0; i < array2.length; i++) {
//         newArr.push(array1[i] + array2[i]);
//       }
//       for (let x = array2.length; x < array1.length; x++) {
//         newArr.push(array1[x]);
//       }
//     } else {
//       for (let i = 0; i < array1.length; i++) {
//         newArr.push(array1[i] + array2[i]);
//       }
//       for (let x = array1.length; x < array2.length; x++) {
//         newArr.push(array2[x]);
//       }
//     }
//     return newArr;
//   };
//   console.log( sumArr(
//       [1, 0, 2, 3, 2, 5, 3, 55, 3, 66, 4],
//       [111, 222, 333, 45, 1, 2, 55, 3, 5, 6, 7, 8, 13, 22]
//     )
//   );

//   const funcName = (arr1, arr2) => {
//       var newArr = [];
//       if (arr1.length> arr2.length){
         

//       }else{

//       }

//   }


function toCamelCase(str) {
    let newArr = [];
    let newStr = '';
    newArr = str.split('_');
    for (i = 1; i < newArr.length; i++) {
      newArr[i] = newArr[i].charAt(0).toUpperCase().concat(newArr[i].substr(1));
    }
    newStr = newArr.join('');
    return newStr;
  }
  console.log(toCamelCase('this_is_a_long_string'));
  

  // const unique = ar => {
//     for (let i = 0; i < ar.length; i++) {
//         if (ar.indexOf(ar[i]) == ar.lastIndexOf(ar[i])) return ar[i];
//     };
// };
// console.log(unique([9, 8, 1, 1, 1, 1, 1]));




// ar = [9, 8, 1, 1, 1, 1, 1]

// const uniqu = ar => {
//     for (let i = 0; i < ar.length; i++ ){
//         if (ar.indexOf(ar[i]) == ar.lastIndexOf(ar[i])) return ar[i];
//     }
// };
// console.log(uniqu([1, 1, 1, 1, 1, 8, 1]));
