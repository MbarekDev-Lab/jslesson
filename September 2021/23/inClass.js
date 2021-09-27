/*
************** ADVANCED ARRAY METHODS ********************
8- Array.reduce()
9- Array.reduceRight()
10- Array.sort()
11. thisArg
12. to get unique items from an array



🔥🔥🔥 CODING CHALLENGE - 1  🔥🔥🔥

1. Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
    Examples:
    doubleValues([1,2,3]) --> [2,4,6]
    doubleValues([5,1,2,3,10]) --> [10,2,4,6,20]

    -----------------

    function doubleValues(array) {
        // ForEach() method

        // const currentArray = [];
        // array.forEach(element => {
        //     currentArray.push(element * 2);
        // });

        // Solved with map()

        const currentArray = array.map(element => element * 2);
        return currentArray;
    }
    console.log(doubleValues([1, 2, 3]));
    console.log(doubleValues([5, 1, 2, 3, 10]));

2. Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
    Examples:
    onlyEvenValues([1,2,3]) -->  [2]
    onlyEvenValues([5,1,2,3,10]) -->  [2,10]

    -------------------

    function onlyEvenValues(array) {
        const currentArray = [];
        array.forEach(element => {
            if (element % 2 === 0) {
                currentArray.push(element);
            }
        });
        return currentArray;
    }
    console.log(onlyEvenValues([1, 2, 3])); // [2])
    console.log(onlyEvenValues([5, 1, 2, 3, 10])); // [2,10])



3. Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string
    Examples:
    showFirstAndLast(['colt','matt', 'tim', 'udemy'])  -->  ["ct", "mt", "tm", "uy"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) -->  ['hi', 'ge', 'se']

    ----------------------

    function showFirstAndLast(array) {
        const currentArray = array.map(element => element.substring(0, 1) + element.substring(element.length - 1));
        return currentArray;
    }
    console.log(showFirstAndLast(['colt', 'matt', 'tim', 'udemy']));



4. Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and then returns the array passed to the function with the new key and value added for each object
    Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') --> [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

    -----------------------

    function addKeyAndValue(array, key, value) {
        return array.map(element => {
            element[key] = value;
            return element;
        });
    }
    console.log(addKeyAndValue([{ name: 'Elie' }, { name: 'Tim' }, { name: 'Matt' }, { name: 'Colt' }], 'title', 'instructor'));




5. Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so that both lowercase and uppercase letters should be counted
    Examples:
    vowelCount('Elie') -->  {e:2,i:1};
    vowelCount('Tim') -->  {i:1};
    vowelCount('Matt') -->  {a:1})
    vowelCount('hmmm') --> {};
    vowelCount('I Am awesome and so are you') --> {i: 1, a: 4, e: 3, o: 3, u: 1};

    ----------------------

    function vowelCount(string) {
        const vowelArray = ["a", "e", "i", "o", "u"];
        const countObject = {};
        const currentArray = [...string.toLowerCase()];

        // using includes()
        currentArray.forEach((letter) => {
            if (vowelArray.includes(letter)) {
                countObject[letter] = (countObject[letter] || 0) + 1;
            }
        });

        // using filter()
        // vowelArray.forEach(vowel => {
        //     let count = currentArray.filter(letter => letter === vowel);
        //     if (count.length > 0) {
        //         countObject[vowel] = count.length;
        //     };
        // });
        return countObject;
    }
    console.log(vowelCount('Elie')); // {e:2,i:1};
    console.log(vowelCount('Tim')); // {i:1};
    console.log(vowelCount('Matt')); // {a:1})
    console.log(vowelCount('hmmm')); // {};
    console.log(vowelCount('I Am awesome and so are you')); // {i: 1, a: 4, e: 3, o: 3, u: 1};



6. Write the function camelize(str) that changes dash-separated words like "my-short-string" into camel-cased "myShortString".
That is: removes all dashes, each word after dash becomes uppercased.
    Examples:
    console.log(camelize("background-color")) == 'backgroundColor';
    console.log(camelize("list-style-image")) == 'listStyleImage';
    console.log(camelize("-webkit-transition")) == 'WebkitTransition';

    -----------------

    function camelize(str) {
        return str.split("-").map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join("");
    }
    console.log(camelize("background-color"))
    console.log(camelize("list-style-image"))
    console.log(camelize("-webkit-transition"))


7. Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a AND lower or equal to b. It returns a result as an array.
The function should not modify the array. It should return the new array.
    For instance:
    let arr = [5, 3, 8, 1];
    let filtered = filterRange(arr, 1, 4);

    console.log( filtered ); -->  [3,1] (matching values)
    console.log( arr ); --> [5,3,8,1] 

    ----------------

    function filterRange(arr, a, b) {
        return arr.filter(item => (a <= item && item <= b));
    }

    let arr = [5, 3, 8, 1];
    let filtered = filterRange(arr, 1, 4);

    console.log( filtered ); -->  [3,1] (matching values)
    console.log( arr ); --> [5,3,8,1] 



8. Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
The function should only modify the array. It should not return anything.
    For instance:
    let arr = [5, 3, 8, 1];

    filterRangeInPlace(arr, 1, 4);      // removed the numbers except from 1 to 4
    console.log( arr ); -->   [3, 1]

    --------------------

    function filterRangeInPlace(arr, a, b) {

        for (let i = 0; i < arr.length; i++) {
            let val = arr[i];

            // remove if outside of the interval
            if (val < a || val > b) {
                arr.splice(i, 1);
                i--;
            }
        }
    }

    let array = [5, 3, 8, 1];
    filterRangeInPlace(array, 1, 4); // removed the numbers except from 1 to 4
    console.log( array ); // [3, 1]

*/

// const cart = [
//     {
//         id: 1,
//         type: 'classics',
//         name: 'To Kill a Mockingbird',
//         price: 18.04,
//         discount: true,
//     },
//     {
//         id: 2,
//         type: 'classics',
//         name: 'Little Women',
//         price: 6.17,
//         discount: false, 
//     },
//     {
//         id: 3,
//         type: 'comics',
//         name: 'Watchmen',
//         price: 10.84,
//         discount: false,
//     },
//     {
//         id: 4,
//         type: 'comics',
//         name: 'The Walking Dead',
//         price: 30.05,
//         discount: true,
//     },
//     {
//         id: 5,
//         type: 'mystery',
//         name: 'The Night Fire',
//         price: 18.90,
//         discount: true,
//     },
//     {
//         id: 6,
//         type: 'adventure',
//         name: 'Life of Pi',
//         price: 7.50,
//         discount: false,
//     },
// ];



// let totalPrice = cart.reduce(function (total, item) {
//     return total + item.price
// }, 0);
// console.log(totalPrice);        // 91.5

// let totalPriceDest = cart.reduce(function (total, {price}) {
//     return total + price
// }, 0);
// console.log(totalPriceDest);        // 91.5



// let totalPriceArrow = cart.reduce((total, item) => total + item.price, 10);
// console.log(totalPriceArrow);        // 101.5

// let totalPriceArrowDest = cart.reduce((total, {price}) => total + price, 10);
// console.log(totalPriceArrowDest);        // 101.5



// let sum = 0;
// cart.forEach(function (item) {
//     sum += item.price
// });
// console.log(sum);


// // check the cart items, if there is discount, implement 10% discount to the price. Then calculate the total price that you should pay. 

// // let totalAmount = cart.map(({discount, price}) => discount ? price * 0.9 : price).reduce((total, item) => total + item, 0).toFixed(2);
// let totalAmount = Math.round(cart.map(({discount, price}) => discount ? price * 0.9 : price).reduce((total, item) => total + item, 0))

// console.log(totalAmount);
// console.log(typeof totalAmount);


//  ********** sort() method *************



// const books = [
//     {
//         id: 1,
//         type: 'classics',
//         name: 'To Kill a Mockingbird',
//         price: 18.04,
//         discount: true,
//         rate: 4.7
//     },
//     {
//         id: 2,
//         type: 'classics',
//         name: 'Little Women',
//         price: 6.17,
//         discount: false,
//         rate: 4.3
//     },
//     {
//         id: 3,
//         type: 'comics',
//         name: 'Watchmen',
//         price: 10.84,
//         discount: false,
//         rate: 3.7
//     },
//     {
//         id: 4,
//         type: 'comics',
//         name: 'The Walking Dead',
//         price: 30.05,
//         discount: true,
//         rate: 4.9
//     },
//     {
//         id: 5,
//         type: 'mystery',
//         name: 'The Night Fire',
//         price: 18.90,
//         discount: true,
//         rate: 4.1
//     },
//     {
//         id: 6,
//         type: 'adventure',
//         name: 'Life of Pi',
//         price: 7.50,
//         discount: false,
//         rate: 4.0
//     },
// ];

// let bookNamesSorted = books.map(book => book.name).sort()
// console.log(bookNamesSorted);
// console.log(books);

// let cheapestBook = books.sort((obj1, obj2) => obj1.price - obj2.price)[0];  // sorted in ascending order
// let expBook = books.sort((obj1, obj2) => obj1.price - obj2.price)[books.length - 1]


// let cheapestBookDesc = books.sort((obj1, obj2) => obj2.price - obj1.price)[0];  // sorted in descending order



// console.log(cheapestBook);
// console.log(expBook);



// sort the books object according to rate values in descending order. Then print the high rated and low rated books in console.

// books.sort((obj1, obj2) => obj2.rate - obj1.rate);   // descending order
// console.log(books);         // sort() method will change the original array as well
// console.log(books[0])       // expensive one
// console.log(books[books.length - 1])       // cheapest one



// sort books with their names , string

// books.sort((obj1, obj2) => {
//     if (obj1.name < obj2.name) { return -1}
//     if (obj1.name > obj2.name) { return 1}
//     if (obj1.name === obj2.name) { return 0}
// })
// console.log(books);

// console.log(['John', 'Sarah', 'Matilda'].sort())



// thisArg as a second argument in advanced array methods

// let army = {
//     minAge: 18,
//     maxAge: 27,
//     canJoin: function (user) {
//         // console.log(this);
//         // console.log(user.age >= this.minAge && user.age < this.maxAge);
//         // console.log('----------------------')
//         return user.age >= this.minAge && user.age < this.maxAge;
//     }
// }

// let users = [
//     { name: 'John', age: 16 },
//     { name: 'Mike', age: 23 },
//     { name: 'Joe', age: 28 },
//     { name: 'Jonas', age: 20 },
// ]