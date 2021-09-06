// // // ************ LOGICAL OPERATORS ************

// // console.log(NaN || '0' || 45);          // '0'
// // console.log('hamburg' || 2 || true);    // 'hamburg'  -first truhty value
// // console.log(!true || false);            // !true= false false 
// // console.log(!false || false);            // !false = true


// // let firstName = "mike";
// // let user = firstName || 'user';
// // let isLoggedIn = true;

// // let greeting = (isLoggedIn === true) ? `HI ${user}, how are you` : `please log ${user}in first`;

// // console.log(greeting);

// // These exercises are aimed at making you familiar with logical operators. Print all your checks to the console. Make sure that you are using the correct logical operator.

// // 1. Declare two variables: isDogBetter variable with the value of true, and isCatBetter variable with the value of false.

// let isDogBetter = true;
// let isCatBetter = false;


// // 2. Check the result of:
// // a) isDogBetter AND isCatBetter.
// // b) isDogBetter OR isCatBetter.
// // c) NOT (isDogBetter AND isCatBetter). 


// console.log( isDogBetter && isCatBetter);
// console.log( isDogBetter || isCatBetter);
// console.log(!isDogBetter && !isCatBetter);

// // 3. Declare three more variables atoms, sandGrains, starsInSky. Give these variables any number values.

// let atoms = 20 ;
// let sandGrains = 10;
// let  = false;



// // These exercises are aimed at making you familiar with logical operators. Print all your checks to the console. Make sure that you are using the correct logical operator.
// // 1. Declare two variables: isDogBetter variable with the value of true, and isCatBetter variable with the value of false.
// let isDogBetter = true;
// let isCatBetter = false;
// // 2. Check the result of:
// //     a) isDogBetter AND isCatBetter.
// //     b) isDogBetter OR isCatBetter.
// //     c) NOT (isDogBetter AND isCatBetter).
// console.log(("2a: ") + (isDogBetter && isCatBetter));
// console.log(("2b: ") + (isDogBetter || isCatBetter));
// console.log(("2c: ") + (!(isDogBetter && isCatBetter)));
// // 3. Declare three more variables atoms, sandGrains, starsInSky. Give these variables any number values.
// let atoms = 32;
// let sandGrains = 3;
// let starsInSky = 300;
// // 4. Check the result of whether:
// //     a) atoms is greater than starsInSky AND atoms is greater than sandGrains.
// //     b) atoms is NOT equal to sandGrains.
// //     c) starsInSky is less than sandGrains OR starsInSky is greater than atoms.
// //     d) atoms is equal to starsInSky OR atoms is NOT equal to sandGrains.
// //     e) atoms is greater than or equal to 10 AND sandGrains is less than or equal to 10.
// //     f) atoms multiplied by starsInSky is less than 100 OR whether atoms multiplied by sandGrains is greater than 100.
// console.log(("4a: ") + (atoms > starsInSky && atoms > sandGrains));
// console.log(("4b: ") + (atoms != sandGrains));
// console.log(("4c: ") + (starsInSky < sandGrains || starsInSky > atoms));
// // console.log(("4c: ") + (300 < 3 || 300 > 32));
// // console.log(("4c: ") + (false || true));
// console.log(("4d: ") + (atoms == starsInSky || atoms != sandGrains));
// console.log(("4e: ") + (atoms >= 10 && sandGrains <= 10));
// console.log(("4f: ") + (atoms * starsInSky < 100 || atoms * sandGrains > 100));

// // 4. Check the result of whether:
// // a) atoms is greater than starsInSky AND atoms is greater than sandGrains.
// // b) atoms is NOT equal to sandGrains.
// // c) starsInSky is less than sandGrains OR starsInSky is greater than atoms.
// // d) atoms is equal to starsInSky OR atoms is NOT equal to sandGrains.
// // e) atoms is greater than or equal to 10 AND sandGrains is less than or equal to 10.
// // f) atoms multiplied by starsInSky is less than 100 OR whether atoms multiplied by sandGrains is greater than 100.


// let paragraph = 'lorem ipsum mbarek';
// console.log(typeof paragraph);
// let lengthPara = paragraph.length;
// console.log(lengthPara);
// console.log(paragraph[12]);
// console.log(paragraph[1]);
// console.log(paragraph[12]);
// console.log(paragraph[12]);



// let paragraph = 'lorem ipsum bla text';
// console.log(typeof paragraph); // string
// let lengthPara = paragraph.length;
// console.log(lengthPara); // 20
// console.log(paragraph[12]); // b
// console.log(paragraph[lengthPara - 8]); // b
// console.log(paragraph[5]); // ' '
// console.log(paragraph[6]); // i

// console.log(paragraph[25]); // undefined

// let emptyString = "";
// console.log(emptyString.length); // 0
// console.log(emptyString[0]); // undefined

// paragraph[0] = 'W'; // [ ] method is READONLY
// console.log(paragraph); // lorem ipsum bla text , [ ] method is READONLY 

//  indexOf method 

// let lang = 'javaScript is a text based language';

// console.log(lang.indexOf('text'));  // 16
// console.log(lang.indexOf('texts'));  // -1
// console.log(lang.indexOf('java'));  // -1
// console.log(lang.indexOf('Java'));  // -1
// console.log(lang.indexOf('Java',5));  // -1
// console.log(lang.indexOf('is'));  // 11

// console.log(lang.lastIndexOf('is'));


// console.log(lang.search('is'));  // 11
// console.log(lang.search('is', 20));  // 11


// console.log(lang.se('is', 20));  // 11


// // slice (), subring(), substract()***

// let txt = 'lorem ipsum dolor sit amet consectetur';

// let indexNumSit = txt.indexOf('dolar');

// if (indexNumSi != -1 ) {
//     let subtStr = txt.substr(indexNum)
// }
 

// // 4 replace() ******

// let txt =  "I am learning HTML and CSS ";

// let newtxt = txt.replace('HTML', 'React');
// console.log('txt :', txt);
// console.log('newTxt :', newTxt);



// 5. toLowerCase(), toUppperCase() ***

// let txt = 'hello world';
// let nexTxt = txt.toUpperCase();
// console.log(txt);
// console.log(newTxt);


// let txt2 = 'HELLO WORLD' ;
// let newTxt2 = txt.toLocaleLowerCase();
// console.log(txt2);
// console.log(newTxt2);

//  // 5. trim() ++
//  let  userData = 'john.doe';

//  let userName = 'john.doe';

//  console.log(userData == userName);   //falset
//  let newUserName = userName.trim();

//  console.log(userData == newUserName); //

  // padStart()
  // J***  S***

  let firstName = 'john';
  let lastNamme = 'Smith';

  let newFirstName = firstName.slice(0,1).padEnd(firstName.length, '*');
  console.log(newFirstName);

  let newLastName = lastNamme.slice(0,1).padEnd(lastNamme.length, '*');
  console.log(newLastName);



const fullNumber = '2034 3990 0212 5581 6666';
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, '*'); // ******************6666
console.log(maskedNumber); 




// split 


let txt = 'javascript';

let txtArray = txt.spllit('')

txtArray(0) = txtArray[0].toUpperCase();
console.log(txtArray);




let txt = "I am learning HTML and CSS";

let newTxt = txt.replace('HTML', 'React');
console.log('txt :', txt);
console.log('newTxt :', newTxt);

let newTxt2 = txt.replace('html', 'React'); // if replace method does not find the text in string, then it will return the original string and assign it to the new variable.
console.log('txt :', txt);
console.log('newTxt2 :', newTxt2);


let newTxt3 = txt.replace(/html/i, 'React');
console.log('txt : ', txt);
console.log('newTxt3 :', newTxt3); 