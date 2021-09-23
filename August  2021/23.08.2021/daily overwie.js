/*
The topics for today :
----------------------
1. Logical Operators
2. String Methods
​
*/
​
​
// ********** LOGICAL && - AND OPERATOR ******************
// AND returns the FIRST falsy value or the LAST truthy value 
/*
console.log(true && true && false && true);     // false
console.log(true && true && true && true);      // true
​
console.log('John' && 1 && '' && NaN);          // ''  --->  first falsy value
console.log(' ' && 3 && '0' && 'Berlin');       // Berlin 
​
​
let user = 'Sarah';
let price = 50;
​
user && (price < 100) && console.log(`Hi ${user}`);  // this is a shorthand, if user is true then JS will run console.log code.
*/
​
// ********** LOGICAL || - OR OPERATOR ******************
// OR returns the FIRST truthy value or the LAST falsy value 
/*
console.log(NaN || '0' || 45);      // '0'
console.log('Hamburg' || 2 || true) // 'Hamburg' - first truhty value
console.log(!true || false)         // false
console.log(!false || false)        // !false = true 
​
​
let firstName = 'Mike';
let user2 = firstName || 'user';     // 'user' : false / 'Mike' : true
let isLoggedIn = true;
​
let greeting = (isLoggedIn == true) ? `Hi ${user2}, how r u doing?` : 'Please log in first...!';
console.log(greeting);
*/
​
/*
🔥🔥🔥 ASSIGNMENT - 6  🔥🔥🔥
​
        These exercises are aimed at making you familiar with logical operators. Print all your checks to the console. Make sure that you are using the correct logical operator.
​
        1. Declare two variables: isDogBetter variable with the value of true, and isCatBetter variable with the value of false.
​
        2. Check the result of:
            a) isDogBetter AND isCatBetter.
            b) isDogBetter OR isCatBetter.
            c) NOT (isDogBetter AND isCatBetter).
​
        3. Declare three more variables atoms, sandGrains, starsInSky. Give these variables any number values.
​
        4. Check the result of whether:
            a) atoms is greater than starsInSky AND atoms is greater than sandGrains.
            b) atoms is NOT equal to sandGrains.
            c) starsInSky is less than sandGrains OR starsInSky is greater than atoms.
            d) atoms is equal to starsInSky OR atoms is NOT equal to sandGrains.
            e) atoms is greater than or equal to 10 AND sandGrains is less than or equal to 10.
            f) atoms multiplied by starsInSky is less than 100 OR whether atoms multiplied by sandGrains is greater than 100.


*/


// **************** STRING METHODS ********************


// 1. [ ] and index number *************
/*
let paragraph = 'lorem ipsum bla text';
console.log(typeof paragraph);          // string
let lengthPara = paragraph.length;
console.log(lengthPara);                // 20
console.log(paragraph[12]);             // b
console.log(paragraph[lengthPara - 8]); // b
console.log(paragraph[5]);              // ' '
console.log(paragraph[6]);              // i
​
console.log(paragraph[25]);              // undefined
​
let emptyString = "";
console.log(emptyString.length);         // 0
console.log(emptyString[0]);             // undefined
​
paragraph[0] = 'W';                     // [ ] method is READONLY
console.log(paragraph);                 // lorem ipsum bla text , [ ] method is READONLY
*/
​
​
// 2. indexOf(), lastIndexOf(), search() ******************
/*
let lang = 'JavaScript is a text based is language';
​
console.log(lang.indexOf('text'));          // 16
console.log(lang.indexOf('texts'));         // -1 , specified text is not exist
console.log(lang.indexOf('java'));          // -1 , case sensitive
console.log(lang.indexOf('Java'));          // 0 
console.log(lang.indexOf('Java', 5));       // -1
console.log(lang.indexOf('is'));            // 11
​
​
console.log(lang.lastIndexOf('is'));        // 27
​
​
console.log(lang.search('is'));            // 11
console.log(lang.search('is', 20));        // 11  , search method does not have 2. argument
​
console.log(lang.indexOf(/t(\w)+/g));       // -1 , with indexOf() you can not use RegEx
console.log(lang.search(/t(\w)+/g));        // 16 , for search pattern with RegEx, use search() method
*/
​
​
// 3. slice(), substring(), substr() ******************
/*
let txt = 'Lorem ipsum dolor sitamet consectetur';
​
let indexNumSit = txt.indexOf('sitAmet');               // index number OR -1  , 18
​
if (indexNumSit != -1) {
​
    let subtStr = txt.substr(indexNumSit, 3);
    console.log(subtStr);
} else {
    console.log('Your search text is not exist in txt string..!');
}
​
console.log(txt.slice(6));
console.log(txt.substring(2, 5))  // rem, end index number is not included ❗❗❗❗❗❗❗❗
console.log(txt.substr(2, 3))  // rem, second argument is the length of text
​
console.log(txt.slice(-5, -2));
​
*/
​
// 4. replace() ******************
/*
let txt = "I am learning HTML and CSS";
​
let newTxt = txt.replace('HTML', 'React');
console.log('txt :', txt);
console.log('newTxt :', newTxt);
​
let newTxt2 = txt.replace('html', 'React');     // if replace method does not find the text in string, then it will return the original string and assign it to the new variable.
console.log('txt :', txt);
console.log('newTxt2 :', newTxt2);
​
​
let newTxt3 = txt.replace(/html/i, 'React');
console.log('txt : ', txt);
console.log('newTxt3 :', newTxt3);
*/


// 5. toLowerCase(), toUpperCase() ******************
/*
let txt = 'hello world';
let newTxt = txt.toUpperCase();
console.log(txt);
console.log(newTxt);
​
​
let txt2 = 'HELLO WORLD';
let newTxt2 = txt2.toLowerCase();
console.log(txt2);
console.log(newTxt2);
*/
​
​
// 5. trim() ******************
/*
let userData = 'john.doe';
​
let userName = '   john.doe   ';
​
console.log(userData == userName);  // false
let newUserName = userName.trim();
​
console.log(userData == newUserName);  // true
*/
​
​
​
// 5. concat() ******************
/*
let txt = 'lorem';
let txt2 = 'amet';
let output = txt.concat(' ipsum', ' ', ' dolor', ' sit ' , txt2);
console.log(output);
*/
​
​
​
// 5. padStart(), padEnd ******************
​
// J*** S****
let firstName = 'Matilda';
let lastName = 'Doe';
​
let newFirstName = firstName.slice(0, 1).padEnd(firstName.length, '*');
console.log(newFirstName);
​
let newLastName = lastName.slice(0, 1).padEnd(lastName.length, '*');
console.log(newLastName);
​
​
const fullNumber = '2034 3990 0212 5581 6666';
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, '*');  // ******************6666
console.log(maskedNumber);
​
​
​
​
// split() **************************
let txt = 'javascript';
​
let txtArray = txt.split('');
console.log(txtArray);
txtArray[0] = txtArray[0].toUpperCase();
​
console.log(txtArray);
console.log(txtArray.join(''));