let numbers = [10, 14, 23, 11, 12, 5];
let total = 0;

// numbers.forEach(function (item) {
//     total += item;
// });
// console.log(total);



let newTrippleNumbers = [];
numbers.forEach(function (item) {
    let tripple = item * 3;
    newTrippleNumbers.push(tripple);
});
console.log(newTrippleNumbers);