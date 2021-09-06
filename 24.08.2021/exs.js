/*
🔥🔥🔥 //ASSIGNMENT - 1  🔥🔥🔥
    1. Declare a variable with the value of "I can walk in the park all day!". Print the word "park" to the console.
    2. Declare a variable with the value of "Hello World". Covert the value to upper case and print the converted value to the console.
    3. Declare another variable with the value of "Hello Earthling". Convert the value to lower case and print the converted value to the console.
    4. Declare a variable with the value "JavaScript". Use string methods to print the the characters "aSc" from your declared variable.
    5. Check if the sentence "nice shoes" contains the letter l or n.
    6. Create a new string from a given string with the first character of the given string added at the front and back, 
        i.e., expected output: Bananas => BBananasB
    7. Create a new string from a given string taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more, 
        i.e., expected output: Scritch => tchScritchtch
    8. Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 2, 
        i.e., expected output: BoogieWoogie => eoogieWoogiB
    9. Create 3 different variables about yourself, using strings as values, i.e, let firstName = "Maria"; let city = "Berlin", etc. Print a sentence to the console using the variables and string interpolation, 
        i.e., "My name is Maria. I live in Berlin and I am a teacher".
    10. Declare a variable and assign the value "the quick brown fox" (all in lower case). Capitalize the first letter of that string. Print the result to the console.

    11. Write a JavaScript program to remove a character at the specified position of a given string and return the new string.
        (String and position will be entered by user, don't forget index number of a string starts from 0)
        (output =>  str : Düsseldorf  pos : 6   => Düssedorf )

    12.  Write a JavaScript program to replace every character  of "PYTHON" with the character following it in the alphabet.
        (e.g PYTHON --> QZUIPO )

    13. Write a JavaScript program to extract the first half of a string of even length. If the length is not even it will return the string itself. Print result in console. (Use ternary operator to compare )
        ( JavaScript , length 10 --> JavaS    
          CSS , length : 3  --> CSS
        )


Send a message to exercises





        /******** SOLUTION ****** */
// 1. Declare a variable with the value of "I can walk in the park all day!". Print the word "park" to the console.
let fabian = "I can walk in the park all day!";
let indexNumber = fabian.indexOf("park");
if(indexNumber != -1) {
    let subString = fabian.substr(indexNumber, 4);
    // console.log(indexNumber);
    console.log(("1. ") + (subString));
} else {
    console.log("Word not found");
}

// 2. Declare a variable with the value of "Hello World". Covert the value to upper case and print the converted value to the console.
let fabibi = "Hello World";
console.log(("2. ") + fabibi.toUpperCase());  

// 3. Declare another variable with the value of "Hello Earthling". Convert the value to lower case and print the converted value to the console.
let hasan = "Hello Earthling";
console.log(("3. ") + hasan.toLowerCase());



//10. Declare a variable and assign the value "the quick brown fox" (all in lower case). Capitalize the first letter of that string. Print the result to the console.
console.log('10. Declare a variable and assign the value "the quick brown fox" (all in lower case). Capitalize the first letter of that string. Print the result to the console.');
let myPhrase = 'the quick brown fox';
let capitalizeFirst = myPhrase[0].toUpperCase();
console.log(myPhrase[0].toUpperCase());
let sliceMyPhrase = myPhrase.slice(1);
console.log(capitalizeFirst+sliceMyPhrase);
//     11. Write a JavaScript program to remove a character at the specified position of a given string and return the new string.
//         (String and position will be entered by user, don't forget index number of a string starts from 0)
//         (output =>  str : Düsseldorf  pos : 6   => Düssedorf )

let whatString = 'Hamburg';
let whatPosition = 2;
console.log(whatString.slice(0, whatPosition) + whatString.slice(whatPosition + 1));
//     12.  Write a JavaScript program to replace every character  of "PYTHON" with the character following it in the alphabet.
//         (e.g PYTHON --> QZUIPO )
console.log('12.  Write a JavaScript program to replace every character  of "PYTHON" with the character following it in the alphabet.');
let oldChar = 'PYTHON'
let newChar;
let newLetter = '';
let i = 0;
while (i < oldChar.length){
newChar = (oldChar.charCodeAt(i)) + 1;
newLetter = newLetter + (String.fromCharCode(newChar));
i++;
}
console.log(newLetter);
//     13. Write a JavaScript program to extract the first half of a string of even length. If the length is not even it will return the string itself. Print result in console. (Use ternary operator to compare )
//         ( JavaScript , length 10 --> JavaS   
//           CSS , length : 3  --> CSS
//         )
console.log('13. Write a JavaScript program to extract the first half of a string of even length. If the length is not even it will return the string itself. Print result in console. (Use ternary operator to compare )');
let stringCheck = 'banana';
if (stringCheck.length % 2 === 0){
    let halfString = stringCheck.length/2;
    console.log(stringCheck.slice(0, halfString));
} else{
    console.log(stringCheck);
}


🔥🔥🔥 ASSIGNMENT - 1  🔥🔥🔥
​
    1. Declare a variable with the value of "I can walk in the park all day!". Print the word "park" to the console.
    2. Declare a variable with the value of "Hello World". Covert the value to upper case and print the converted value to the console.
    3. Declare another variable with the value of "Hello Earthling". Convert the value to lower case and print the converted value to the console.
    4. Declare a variable with the value "JavaScript". Use string methods to print the the characters "aSc" from your declared variable.
    5. Check if the sentence "nice shoes" contains the letter l or n.
    6. Create a new string from a given string with the first character of the given string added at the front and back, 
        i.e., expected output: Bananas => BBananasB
    7. Create a new string from a given string taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more, 
        i.e., expected output: Scritch => tchScritchtch
    8. Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 2, 
        i.e., expected output: BoogieWoogie => eoogieWoogiB
    9. Create 3 different variables about yourself, using strings as values, i.e, let firstName = "Maria"; let city = "Berlin", etc. Print a sentence to the console using the variables and string interpolation, 
        i.e., "My name is Maria. I live in Berlin and I am a teacher".
    10. Declare a variable and assign the value "the quick brown fox" (all in lower case). Capitalize the first letter of that string. Print the result to the console.
​
    11. Write a JavaScript program to remove a character at the specified position of a given string and return the new string.
        (String and position will be entered by user, don't forget index number of a string starts from 0)
        (output =>  str : Düsseldorf  pos : 6   => Düssedorf )
​
    12.  Write a JavaScript program to replace every character  of "PYTHON" with the character following it in the alphabet.
        (e.g PYTHON --> QZUIPO )
​
    13. Write a JavaScript program to extract the first half of a string of even length. If the length is not even it will return the string itself. Print result in console. (Use ternary operator to compare )
        ( JavaScript , length 10 --> JavaS    
          CSS , length : 3  --> CSS
        )
​
    
    
        ---------------- SOLUTIONS ----------------
​
    1. Declare a variable with the value of "I can walk in the park all day!". Print the word "park" to the console.
​
            const parkWalkStr = "I can walk in the park all day";
            console.log(parkWalkStr.substring(17, 22));
​
        2. Declare a variable with the value of "Hello World". Covert the value to upper case and print the converted value to the console.
​
            const helloStr = "Hello World";
            console.log(helloStr.toUpperCase());
​
        3. Declare another variable with the value of "Earthlings". Convert the value to lower case and print the converted value to the console.
​
            const earthlingsStr = "Earthlings";
            console.log(earthlingsStr.toLowerCase());
​
        4. Declare a variable with the value "JavaScript". Print the the characters "aSc" to the console using the substring() method.
​
            const javaStr = "JavaScript";
            const midChars = javaStr.substring(3, 6);
            console.log(midChars);
​
        5. Check if the sentence "nice shoes" contains the letter l or n. 
​
            const niceShoesStr = "nice shoes";
            console.log(niceShoesStr.includes("l"));
            console.log(niceShoesStr.includes("n"));
​
        6. Create a new string from a given string with the first character of the given string added at the front and back. 
            // eg. of output: JavaScript => JJavaScriptJ. 
​
            const fruityStr = "Bananas";
            const firstChar = fruityStr[0];
            console.log(`${firstChar}${fruityStr}${firstChar}`);
            // OR
            let fruityStr2 = "Bananas";
            let modifiedFruityStr2 = fruityStr2.replace("Bananas", "BBananasB");        // Hard Coding ...!!!!
            console.log(modifiedFruityStr2);
​
        7. Create a new string from a given string taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more.
            // eg. of output: javascript => iptJavaScriptipt
​
            const scritcherStr = "Scritch";
            const lastThreeChars = scritcherStr.substring(scritcherStr.length - 3);
            console.log(lastThreeChars + scritcherStr + lastThreeChars);
            console.log(`${lastThreeChars}${scritcherStr}${lastThreeChars}`);
​
        8. Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 1. eg. of output JavaScript => tavaScripJ
​
            const boogieNightsStr = "BoogieWoogie";
            const firstLetter = boogieNightsStr[0];
            const lastLetter = boogieNightsStr[boogieNightsStr.length - 1];
            const remainderString = boogieNightsStr.substring(1, boogieNightsStr.length - 1);
            console.log(lastLetter + remainderString + firstLetter);
​
        9. Create 3 different variables about yourself using strings as values e.g. let firstName = "Maria". Print the sentence to the console using string interpolation e.g. "My name is Maria. I live in Berlin and I am a teacher". 
        
            const firstName = "Sarah";
            const location = "Hamburg";
            const job = "UI Designer";
            console.log(`Her name was ${firstName}. She was a ${job} ... at the ${location}`);
​
        10. Declare a variable and assign the value "the quick brown fox" (all in lower case). Capitalize the first letter of that string. Print the result to the console.
​
            const foxStr = "the quick brown fox";
            const firstCharacter = foxStr[0].toUpperCase();
            const remainderStr = foxStr.slice(1);
            console.log(firstCharacter + remainderStr);
​
        11. Write a JavaScript program to remove a character at the specified position of a given string and return the new string. (String and position will be entered by user, don't forget index number of a string starts from 0)
            (output =>  str : Düsseldorf  pos : 6   => Düssedorf )
​
            const str = 'Düsseldorf';
            const charPos = 6;
            const part1 = str.substring(0, charPos - 1);
            const part2 = str.substring(charPos, str.length);
            console.log(part1 + part2)
​
​
        12.  Write a JavaScript program to replace every character  of "PYTHON" with the character following it in the alphabet.
            (e.g PYTHON --> QZUIPO )
​
            const str = 'PYTHON';
​
            let str0 = String.fromCharCode(str.charCodeAt(0) + 1);
            let str1 = String.fromCharCode(str.charCodeAt(1) + 1);
            let str2 = String.fromCharCode(str.charCodeAt(2) + 1);
            let str3 = String.fromCharCode(str.charCodeAt(3) + 1);
            let str4 = String.fromCharCode(str.charCodeAt(4) + 1);
            let str5 = String.fromCharCode(str.charCodeAt(5) + 1);
​
            console.log(str0 + str1 + str2 + str3 + str4 + str5);
​
​
        13. Write a JavaScript program to extract the first half of a string of even length. If the length is not even it will return the string itself. Print result in console. (Use ternary operator to compare )
            ( JavaScript , length 10 --> JavaS    
              CSS , length : 3  --> CSS
            )
​
            let str = 'JavaScript';
            str = 'CSS';
​
            console.log(str.length % 2 === 0 ? str.slice(0, str.length / 2) : str);
   
*/
​
​
// **************** NUMBER METHODS **************************
​
// 1. Number(variable) Method
/*
console.log(Number('10 city'));         // NaN, it is simple string
console.log(Number(true));              // 1
console.log(Number(false));             // 0
console.log(Number('100'));             // 100
console.log(Number('  100   '));        // 100
console.log(Number('    '));            // 0
console.log(Number('  Berlin  '));      // NaN, it is simple string
console.log(Number('  15 30  '));       // NaN, it is simple string
*/
​
// 2. parseFloat(string variable) Method
/*
console.log('25');                  // 25
console.log(typeof '25');           // string
console.log(parseFloat('25.65'));   // 25.65
console.log(typeof parseFloat('25.65'));   // number
console.log(parseFloat('30 times'));        // 30
console.log(parseFloat('ten cars'));        // NaN
console.log(parseFloat(true));          // NaN
console.log(parseFloat(false));         // NaN
console.log(parseFloat(undefined));     // NaN
console.log(parseFloat(null));          // NaN
*/
​
// 3. parseInt(string variable) Method

console.log('25');                      // '25'
console.log(typeof '25');               // string
console.log(parseInt('25.65'));         // 25, parseInt returns without decimal part
console.log(parseInt('12.42976'));      // 12, parseInt returns without decimal part
console.log(parseFloat('12.42976'));      // 12.42976, parseFloat returns the whole number with decimal part 
console.log(typeof parseInt('25.65'));   // number
console.log(parseInt('30 times'));        // 30
console.log(parseInt('ten cars'));        // NaN
console.log(parseInt(true));          // NaN
console.log(parseInt(false));         // NaN
console.log(parseInt(undefined));     // NaN
console.log(parseInt(null));          // NaN
​
​
console.log(Number('    25.40    '));       // 25.4
console.log(Number('25.40 58 99'));         // NaN
console.log(parseInt('25.40 58 99'));       // 25
console.log(parseFloat('25.40 58 99'));     // 25.4

​
// 4. toFixed() Method
// it converts number to string
/*
let price1 = 120.5222222;
console.log(typeof price1); // number
let price2 = 80.544444;
console.log(typeof price2);  // number
​
price1 = price1.toFixed(2);
console.log(typeof price1);  // string
price2 = price2.toFixed(2);
console.log(typeof price2);  // string
​
console.log(`The total price is ${price1 + price2}`);    // The total price is 120.5280.54
*/
/*
let price1 = 120.5222222;
console.log(typeof price1); // number
let price2 = 80.544444;
console.log(typeof price2);  // number
​
price1 = price1.toFixed(2);          // 120.52            '121' - still string
// price1 = parseFloat(price1);     // 1. option, parseFloat() converts from string to number
// price1 = Number(price1);         // 2. option, Number() converts from string to number
price1 = +price1;                  // 3. option, unary operator(+/-) converts from string to number
​
console.log(typeof price1);      //
price2 = +price2.toFixed(2);     // 80.54  
console.log(typeof price2);      // 
​
console.log(`The total price is ${price1 + price2}`);    // The total price is 120.5280.54
*/
​
​
​
​
// 5. toPrecision() Method
/*
let x = 123.579321098;
console.log(x.toPrecision(5));              // 123.58
console.log(x.toPrecision(3));              // 123.58
console.log(typeof x.toPrecision(5));       // string
*/
​
​
​
// 6. Number.toString() Method
​
let x = 245;
console.log(typeof x);  // number
​
x = x.toString();
console.log(typeof x);  // string
​
let isNew = true;               // Boolean
console.log(String(isNew));     // string 'true'
console.log(isNew.toString());     // true , but toString() is a number method, NOT Boolean method
























  /*******MY SOLUTION*******/


// let txtWalk = "I can walk in the park all day!";

// console.log(txtWalk.indexOf('park'));
// // 2. Declare a variable with the value of "Hello World". Covert the value to upper case and print the converted value to the console.

// let hello = "hello World";
// let newHello = hello.toUpperCase();
// console.log(newHello);

// // 3. Declare another variable with the value of "Hello Earthling". Convert the value to lower case and print the converted value to the console.

// let hello1 = "Hello Earthling";
// let newTxt1 = hello1.toLowerCase();
// console.log(newTxt1);

// // 4. Declare a variable with the value "JavaScript". Use string methods to print the the characters "aSc" from your declared variable.

// let hello2 = "JavaScript"
// console.log(hello2.slice(-4, -3));
// console.log(hello2[4]);


// // 5. Check if the sentence "nice shoes" contains the letter l or n.

// let checkNl = "nice shoes"
// let check = /[A-Z]/g
// let checkR = /[l-n]/g
// console.log(checkNl.search(check))
// console.log(checkNl.search(checkR))

// //6. Create a new string from a given string with the first character of the given string added at the front and back, 
// //         i.e., expected output: Bananas => BBananasB

// let bananaBb = "Bananas"

// let bananaBb = "Bananas";

// let bananaBb = bananaBb.replace('Bananas', 'BBananasB');
// console.log('bananaBb :', bananaBb);
