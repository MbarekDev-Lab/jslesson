// /***      ADVANCED ARRAY METHODS  ******/

// let numbers = [10, 20, 30, 40];
// let total = 0;

// numbers.forEach(function(item, ){
//     total+= item;
// }
// );console.log(total);


/// with map 

// let resulthMapArray = numbers.map(function(){            // will creat new array we need new varaible  let....
//     return item * 3;
// });
// console.log(resultMapAraray);


// const books = [
//     {
//     id: 1,
//     type: 'classics',
//     name: 'To Kill a Mockingbird',
//     price: 18.04,
//     discount: true,
//     },
//     {
//     id: 2,
//     type: 'classics',
//     name: 'Little Women',
//     price: 6.17,
//     discount: false, 
//     },
//     {
//     id: 3,
//     type: 'comics',
//     name: 'Watchmen',
//     price: 10.84,
//     discount: false,
//     },
//     {
//     id: 4,
//     type: 'comics',
//     name: 'The Walking Dead',
//     price: 30.05,
//     discount: true,
//     },
//     {
//     id: 5,
//     type: 'mystery',
//     name: 'The Night Fire',
//     price: 18.90,
//     discount: true,
//     },
//     {
//     id: 6,
//     type: 'adventure',
//     name: 'Life of Pi',
//     price: 7.50,
//     discount: false,
//     },
//     ]; 

//     let bookNames = books.map(book => book.name);
//     console.log(bookNames);


/*************** ADVANCED ARRAY METHODS ********************
1- Array.forEach()
2- Array.map()
3- Array.filter()
4- Array.every()
5- Array.some()
6- Array.find()
7- Array.findIndex()
8- Array.reduce()
9- Array.reduceRight()
10- Array.sort()


*/// ************ 1- Array.forEach(), Array.map() *******************

// let numbers = [10, 14, 23, 11, 12, 5];
// let total = 0;


// numbers.forEach(function (item) {
//     total += item;
// });
// console.log(total);

// with forEach method
// let newTrippleNumbers = [];
// numbers.forEach(function (item) {
//     let tripple = item * 3;
//     newTrippleNumbers.push(tripple);
// });
// console.log(newTrippleNumbers);


// with map method, anonymous callback function
// let resultMapArray = numbers.map(function (item) {
//     return item * 3;
// });
// console.log(resultMapArray);

// with map method, arrow function
// let resultMapArray2 = numbers.map((elem, index, array) => {
//     let trip = elem * 3;
//     return trip;
// });
// console.log(resultMapArray2);

// let resultMapArray2 = numbers.map(elem => elem * 3 );
// console.log(resultMapArray2);


// let cart = [
//     {
//         name: 'prod1',
//         price: 100
//     },
//     {
//         name: 'prod2',
//         price: 57
//     },
//     {
//         name: 'prod3',
//         price: 34
//     }
// ]

// let priceArray = cart.map( item =>  item.price );
// console.log(priceArray)

// let sum = 0;
// priceArray.forEach((item, index, array) => {
//     sum += item;
// });
// console.log('Total price : ', sum);

// let totalAmount = cart.map((obj) => obj.price).reduce((total, item) => total + item, 0);
// console.log('Total price with reduce method :', totalAmount);



// ************ 3- Array.filter() *******************

// ************ 1- Array.forEach(), Array.map() *******************
// const books = [
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
//         name: 'life of Pi',
//         price: 7.50,
//         discount: false,
//     },
// ];

// let bookNames = books.map(book => book.name);
// console.log(bookNames);

// filter the books with price range 10-20
// let booksInRange10_20 = books.filter(book => book.price >= 10 && book.price <= 20);
// console.log(booksInRange10_20);


// // filter the books with sale
// // let booksInSale = books.filter(book => book['discount'] === true);
// let booksInSale = books.filter(book => book.discount);
// console.log(booksInSale);


// filter the books, name starts with 'L' or 'l'
// let booksStartsWithL = books.filter((book) => {
//     return book.name.toLowerCase().startsWith('l')
// });
// console.log(booksStartsWithL);


// // filter the books' name starting with 'L' or 'l'
// console.log(books.map((book) => book.name).filter((name) => name.toLowerCase().startsWith('l')));

// console.log(books.filter((book) => book.name.toLowerCase().startsWith('l')).map((item) => item.name ));



/// ******************* find() method *********************
// const books = [
    
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

// // let result = books.find((book) => book.name.startsWith('L'));
// // let result2 = books.find((book) => book.name.startsWith('T'));  // if there is no match then returns 'undefined'
// // if (result2) {
// //     console.log(result2)
// // } else {
// //     console.log('there is no such book in books array')
// // }

// let result = books.findIndex((book) => book.name.startsWith('L'));   // if there is a match, then returns index number of matching item
// console.log(result);
// let result2 = books.findIndex((book) => book.name.startsWith('T'));  // if there is no match then returns -1
// let output;
// if (result2 !== -1) {
//     output = books[result2];
    
// } else {
//     console.log('there is no such book in books array')
// }

// console.log(output);