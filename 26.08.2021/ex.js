console.log(' 1.');

let x = 10;
let y = 60;

if ((x >= 50) && (y <= 99)){
    console.log("1 : true either of them are in the range");
}else {
    console.log("1 : false either of them are not in the range");
}


console.log('  2.');
let q = "";
let s = 10;
let r = 60;

if ((r >= 50) || (s <= 99) || (q >= 50)){
    console.log("2 : true either of them are in the range");
}else {
    console.log("2 : false either of them are not in the range");
}

console.log('    3. ');

let a = 1;
let b = 2;
let c = 3;

if (a > 3){
    console.log ("3 : true  has the largest value");
}else if (b > 3) {
    console.log("3 : true  has the largest value");
}else if (c > 3){
    console.log("3 : true  has the largest value");
}else {
    console.log("3 : false try a lanrger number  ");
}


// console.log("  4. Create a new string adding "Py" in front of a given string. If the given string begins with "Py" then print the original string.
// (i.e.  HTML  --> PyHTML   ,  Python  -->  Python");

//(' 5. Calculate the sum of the two integers. If the sum is in the range 50 to 80, print 65, otherwise print 80.');

let firstNum = 30;
let secondNum = 30;

if ((firstNum + secondNum === 50) && (firstNum + secondNum === 80)){
    console.log("5 : true print 65");
}else {
    console.log("5 : false print 80.");
}

//("6 . Check whether the sum of two integers is 8, or whether their difference is 8. If one of these is the case, print true, otherwise print false.");

let num = 6;
let num1 = 2;


if ((num + num1 == 8) || Math.abs(num - num1 == 8)){
    console.log('true');
} else {
    console.log('false');
}
























