// ************ ARITHMETIC OPERATORS ************
/*
let a = 50;
let b = 120;

let c = a + b;      // ADDITION
console.log(c);

let d = a - b;      // SUBTRACTION
console.log(d);

let e = a * b;      // multiplication
console.log(e);

let f = b / a;      // DIVISION
console.log(f);

console.log(Math.floor(f));   // Math.floor() : it rounds a decimal number to integer to downward
console.log(Math.ceil(f));    // Math.ceil() : it rounds a decimal number to integer to upward
console.log(Math.round(5.5));    // Math.round() : it rounds a decimal number to nearest integer 
console.log(Math.round(5.7));    // Math.round() : it rounds a decimal number to nearest integer 
console.log(Math.round(5.4));    // Math.round() : it rounds a decimal number to nearest integer

let num = 5.4698746;
console.log(num);                  // 5.4698746
console.log(num.toFixed(2));       // 5.47 
console.log(`This is an example about .toFixed() function ,  ${num.toFixed(2)}`);       // 5.47 


console.log(7 % 2);     // 1, Modulus, division remainder 
console.log(11 % 3);    // 2


if (7 % 2 == 0) {
    console.log('7 is an even number');
} else {
    console.log('7 is an odd number');
}


let m = 2 ** 4;   // 2 * 2 * 2 * 2 = 16   Exponentiation
m = 3 ** 3;        // 3 * 3 * 3 = 27
console.log(m);

let n = Math.pow(2, 4);     // 2 * 2 * 2 * 2 = 16
console.log(n);


let x = 10;
console.log(x);             // 10
x++;        // x = x + 1;   increment operator with postfix form
console.log(x);             // 11
x++;        // x = x + 1;   increment operator with postfix form
console.log(x);             // 12
++x;        // x = x + 1;   increment operator with prefix form
console.log(x);             // 13


let y = 20;
console.log(y);             // 20
y--;                        // y = y - 1;  decrement operator with postfix form
console.log(y);             // 19
--y;                        // y = y - 1;  decrement operator with prefix form
console.log(y);             // 18
​
​
// let names = ['John', 'Sarah', 'Mike', 'David'];
// console.log(names[0], names[1], names[2], names[3] );
​
// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }
​
​
​
/*
*************** The operators ++ and -- can be placed either before or after a variable. *********
​
    When the operator goes after the variable, it is in "POSTFIX form": counter++.
    The "PREFIX form" is when the operator goes before the variable: ++counter.
​
    *********
        The only difference is, if we assign counter to a new variable. Counter increases +1 in any case BUT the new variable's value changes according to POSTFIX or PREFIX FORM.
    *********
​
    The PREFIX form returns the NEW VALUE while the POSTFIX form returns the OLD VALUE (prior to increment/decrement).
​
    let counter = 5;        // counter = 5
    let a = ++counter;      // a = 6  counter = 6   PREFIX FORM
    console.log(a);         // 6
    console.log(counter);   // 6
​
    let b = counter++;      // b = 6  counter = 7   POSTFIX FORM
    console.log(b);         // 6
    console.log(counter);   // 7
            
*/
​
​
​
​
// Arithmetic Operators Precedence
/*
console.log( 6 / 2 / 3 );       //  they have the same precedence value - 15  ??????
                                //  left-to-right  (Associativity)
                                //  ( 3 / 3 ) = 1
​
​
console.log( 2 ** 3 ** 2 );     //  they have the same precedence value - 16  ??????
                                //  right-to-left  (Associativity)
                                //  2 ** (3 ** 2) = 2 ** 9 = 2*2*2*2*2*2*2*2*2 = 512
​
​
console.log( 3 > 2 > 1 );       //  they have the same precedence value - 12 
                                //  left-to-right  (Associativity - iliskisellik)
                                //  3 > 2 : true
                                //  true > 1   (true = 1; false: 0)
                                //  false
​
​
​
let z;  // undefined
let t;  // undefined
​
console.log(z = t = 5);     
console.log(z);
console.log(t);
​
​
​
// Addition of text string with number 
/*        
let num = 20;
let txt = 'Lorem';
​
console.log(num + txt);     // 20Lorem    string     addition : left-to-right
console.log(txt + num);     // Lorem20    string
​
console.log(txt + num + 50);     // Lorem2050   string
console.log(num + 50 + txt);     // 70 + Lorem = 70Lorem - number + string = string
console.log(num * 50 + txt);     // 1000 + Lorem = 1000Lorem - number + string = string
console.log(txt * num);     // string * number = NaN
console.log(txt / num);     // string / number = NaN
console.log(txt - num);     // string - number = NaN
​
console.log('100' * 20);    // 2000
console.log('100' / 20);    // 5
console.log('100' - 20);    // 80
​
​
​
console.log(5 + '10');     //  output : 510  concatination
​
console.log(10 - '4');     //  output : 6 ; convert string '4' to number 4    
console.log(10 * '4');     //  output : 40 ; convert string '4' to number 4   
console.log(10 / '2');     //  output : 5 ; convert string '2' to number 2   
console.log('10' / 2);     //  output : 5 ; convert string '10' to number 10   
console.log('10' ** 2);     //  output : 100 ; convert string '10' to number 10   
*/
​
​
​
/*
🔥🔥🔥 ASSIGNMENT - 1 🔥🔥🔥
​
    These exercises are aimed at making you familiar with the arithmetic operators. Print your results to the console at the end of each step.
​
    1. Declare two variables "snackServings" and "guests" and assign them number values.
    2. Add snackServings and guests.
    3. Subtract guests from snackServings. Then, subtract snackServings from guests.
    4. Multiply snackServings and guests.
    5. Divide snackServings by guests.
    6. Declare another variable "drinks" with value "10". Multiply snackServings and guests. Then, divide the result by drinks. Store the result in a new variable named "resultOne". Print "resultOne" to the console.
    7. Declare two variables: "monkeys" with value 15, and "bananas" with value 9. Divide monkeys by bananas.
    8. Declare another variable "monkeyfights" with value 20. Add monkeys and bananas, then multiply the result by monkeyfights. Store the result in variable "resultTwo". Print "resultTwo" to the console.
    9. Increment monkeys.
    10. Decrement bananas.
    11. Subtract monkeys from bananas and store this in a new variable "happiness". Add happiness and monkeyfights.
    12. Print the remainder when "resultOne" is divided by "resultTwo" to the console.
    13. Write a JavaScript code to calculate temperatures to and from Celsius, Fahrenheit.  Go to the editor
        [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
        Expected Output :
        60°C is 140 °F
        45°F is 7.222222222222222°C
​
​
        1. Declare two variables "snackServings" and "guests" and assign them number values.
​
                const snackServings = 20;
                const guests = 30;
​
            2. Add snackServings and guests, and print the result to the console.
​
                console.log(snackServings + guests);
​
            3. Subtract guests from snackServings, and print the result to the console. Then, subtract snackServings from guests and print the result to the console.
​
                console.log(snackServings - guests);
                console.log(guests - snackServings);
​
            4. Multiply snackServings and guests, and print the result to the console.
​
                console.log(snackServings * guests);
​
            5. Divide snackServings and guests, and print the result to the console.
​
                console.log(snackServings/guests);
​
            6. Declare another variable "drinks" with the value "10". Multiply snackServings and guests. Then, divide the result by drinks. Store the result in a new variable named "resultOne".
​
                const drinks = 10;
                const resultOne = (snackServings * guests) / drinks;
                console.log(resultOne);
​
            7. Declare two variables "monkeys" with the value of 15 and "bananas" with the value of 9. Print the remainder when monkeys is divided by bananas.
​
                let monkeys = 15;
                let bananas = 9;
                console.log(15 / 9);
​
            8. Declare another variable "monkeyfights" with the value of 20. Add monkeys and bananas, then multiply the result by monkeyfights. Store the result in variable "resultTwo". Print "resultTwo" to the console.
​
                const monkeyfights = 20;
                const resultTwo = (monkeys + bananas) * monkeyfights;
                console.log(resultTwo);
​
            9. Increment monkeys. Print the result to the console.
​
                console.log(++monkeys);
​
            10. Decrement bananas. Print the result to the console.result
​
                console.log(--bananas);
​
            11. Subtract bananas from monkeys and store this in a new variable "happiness". Add happiness and monkeyfights.
​
                const happiness = monkeys - bananas;
                console.log(happiness + monkeyfights);
​
            12. Print the remainder when resultOne is divided by resultTwo to the console.
​
                console.log(resultOne % resultTwo);
            
            13. 
            //from celsius to fahrenheit
                var cTemp = 60;
                var F = (cTemp * 9 /5 + 32);
                console.log(F + 'F');
​
            //from fahrenheit to celsius
                var fTemp = 140;
                var C = (fTemp -32)*5/9;
                console.log(C + ' °C');
*/
​
/*
🔥🔥🔥 ASSIGNMENT - 2 🔥🔥🔥
​
    1. In one night, a movie theater sells tickets for 6450 dollars. Each ticket costs 15 dollars. How many tickets were sold?
    2. Sylvia's income is 500 dollars per week. How much does Sylvia makes every year?
    3. Calculate the percentage of 17/30. Expected output: number%
    4. Calculate the perimeter of a square. Assume each side is 4.75cm.
    5. Calculate the perimeter of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.
    6. Calculate the area of a square. Each side is 5cm.
    7. Calculate the volume of a cube. Length of each side is 9cm. 
    8. Calculate the three bills including tips: €22.35 + 10% tip €26.67 + 15% tip €35.92 + 20% tip
    9. The number of hours Noemy worked over the last two weeks are 8, 6, 5, 9, 8, 2, 1, 8.5, 7, 4 What is Noemy's average hours worked per day?
    10. A math student scored 75, 70, 85, 90, 100 on the first five tests he took . After he took his sixth math test, the average is now 85. What did he score on the sixth test? Expected output: Score in the sixth test: --.
    11. For James to get a 1st class degree, he needs to get an average of 80% in all 9 of his assessments. He has taken 8 assessments and his average is 78%. What is the minimum percentage he must get in his last assessment to ensure he gets a first class? Expected output: James needs a minimum of -- to get an 80% average.
​
    --------- SOLUTION -----------
​
        1. In one night, a movie theater sells tickets for 6450 dollars. Each ticket costs 15 dollars. How many tickets were sold?
            const ticketsSold = 6450;
            const price = 15;
            const numberPeople = ticketsSold / price;
            console.log(`${numberPeople} bought tickets`);
​
        2. Sylvia's income is 500 dollars per week. How much does Sylvia makes every year?
            const weeklyIncome = 500; 
            const yearlySalary = 500 * 52;
            console.log(`Sylvia earns $${yearlySalary} per year`);
​
        3. Calculate the percentage of 17/30. Expected output: number%
            const calcPercent = (17 * 100) / 30;
            console.log(`${calcPercent}%`);
​
        4. Calculate the perimeter of a square. Assume each side is 4.75cm.
            const sqSideLength = 4.75; 
            const sqPerimeter = sqSideLength + sqSideLength + sqSideLength + sqSideLength;
            consol...