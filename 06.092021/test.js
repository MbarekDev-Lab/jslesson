 


// // 6. Write a JavaScript function to remove a specific element from an array. 
// //         Example : removeElem([2, 5, 9, 6], 5))  expected output : [2, 9, 6]
// //         Example : removeElem(['Mike', 'John', 45, 'Sarah'], 'Sarah')  expected output : [ 'Mike', 'John', 45 ]

// var array = [1, 2, 3, 4];var evens = _.remove(array, function(n) { return n % 2 === 0;});console.log(array);// => [1, 3]console.log(evens);// => [2, 4]




function makeId(l){
    var txt = "";
    var charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for(var i=0; i < l; i++ ){

    txt += charList.charAt(Math.floor(Math.random() * charList.length)) ;
    }

    return txt;
    }
    console.log(makeId(16)); // Expected Output : 'LJxQ10x6'   jjoxXxSh  . PTe494nL
