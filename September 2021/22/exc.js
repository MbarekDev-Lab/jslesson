
// 🔥🔥 CODING CHALLENGE - 2  - sort()  🔥🔥🔥

// 1. Sort in decreasing order.
//     let arr = [5, 2, 1, -10, 8];
//     // ... your code to sort it in decreasing order
//     console.log( arr );  --->  8, 5, 2, 1, -10

let arr = [5, 2, 1, -10, 8];arr.sort((a, b) => b - a);
console.log(arr);

/*
2. We have an array of strings arr. We'd like to have a sorted copy of it, but keep arr unmodified.
Create a function copySorted(arr) that returns such a copy.
    let arr = ["HTML", "JavaScript", "CSS"];
    let sorted = copySorted(arr);

    console.log( sorted ); --->  CSS, HTML, JavaScript
    console.log( arr ); ---> HTML, JavaScript, CSS (no changes)



🔥🔥🔥 CODING CHALLENGE - 3  - reduce()  🔥🔥🔥

1. Let's say we received an array of users in the form {id:..., name:..., age... }.
Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.
    For example:
    let users = [
        {id: 'john', name: "John Smith", age: 20},
        {id: 'ann', name: "Ann Smith", age: 24},
        {id: 'pete', name: "Pete Peterson", age: 31},
    ];

    let usersById = groupById(users);
    console.log(usersById)
        // after the call we should have:

        usersById = {
            john: {id: 'john', name: "John Smith", age: 20},
            ann: {id: 'ann', name: "Ann Smith", age: 24},
            pete: {id: 'pete', name: "Pete Peterson", age: 31},
        }
    Please use array.reduce method in the solution.




🔥🔥🔥 CODING CHALLENGE - 4  - map(), filter(), reduce()  🔥🔥🔥

1. Get total orders. Return the total amount of orders.

    const orders = [{ amount: 250 }, { amount: 400 }, { amount: 100 }, { amount: 325 }];


2. Increment by 1. Create a function that increments each element in the arrayOfNumbers by 1. Return the a new array of modified elements.

    const arrayOfNumbers = [3, 45, 6, 56, 7, 9]; 


3. Filter Evens. Create a function called filterEvens that filters an array and only return even numbers. The function should take an array of numbers as an argument, and should not use a loop.
    Examples:
    filterEvens([1,2,3,11,12,13]);    --> [2,12]
    filterEvens([22,2,31,110,6,13]);  --> [22,2,110,6]


4. Filter Friends. Given an array, create a function which filters array based on a search query.

    Examples:
    const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];

    console.log(filterItems(friends, 'ka'));   -->  ["Rika"];
    console.log(filterItems(friends, 'e'));  -->  ["Jenna", "Bleda", "Oliver"];


5. Sum Up. Write a function called sum that uses the reduce method to sum up an array of numbers.
    Examples:
    sum([1,2,3,4,5]); -->  15
    sum([6,7,7]);     -->  20


6. Square Root. Given an array of numbers, find the square root of each element in the array. */