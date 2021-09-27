//🔥🔥🔥 CODING CHALLENGE - 1  🔥🔥🔥

// 1- In your own words, define closure (1-2 sentences).

// it's like an application containing infinite number of functions. and gives an access to the outer scope of the main function.


// 2- Study the following code, then answer the questions below.

    // function personalDice(name){
    
    //     return function(){
    //         // It generates random number between 1 and 6
    //         const newRoll = Math.floor(Math.random() * 6);

    //         console.log(`${name} rolled a ${newRoll}`)
    //     }
    // }

    // const dansRoll = personalDice("Dan");
    
    // const zoesRoll = personalDice("Zoe");

    // dansRoll();

    // dansRoll();
    // zoesRoll();     
    // zoesRoll();    
    
    // a. Where is closure used in this code  personalDice ? How can you tell ?

    // b. Compare and contrast calling dansRoll the first and second time. What is always the same? What could change?
    
    // c. What is the lexical scope of newRoll?

    
// 3- Write a function that would allow you to do this using a closure.

//     var addSix = createBase(6);
//     addSix(10);     // returns 16
//     addSix(21);     // returns 27

const addSix = function () {
    var addSix = createBase(6);
    const creatFunc = item => {
       
     return
    }

    const addItem2 = item => {
     return
    }
    
    return

}


// 🔥🔥🔥 CODING CHALLENGE - 2 - Scoping exercises 🔥🔥🔥

// 1- What's the result of executing this code and why.

//     function test() {
//         console.log(a);
//         console.log(foo());
        
//         var a = 1;
//         function foo() {
//             return 2;
//         }
//     }
//     test();


// 2- What is result?

//     var a = 1; 

//     function someFunction(number) {
    
    
//         function otherFunction(input) {
//             return a;
//         }
        
//         a = 5;
        
//         return otherFunction;
//     }

//     var firstResult = someFunction(9);
//     var result = firstResult(2);


// 3- What is the result of the following code? Explain your answer.

//     var fullname = 'John Doe';
//     var obj = {
//         fullname: 'Colin Ihrig',
//         prop: {
//             fullname: 'Aurelio De Rosa',
//             getFullname: function() {
//                 return this.fullname;
//             }
//         }
//     };

//     console.log(obj.prop.getFullname());

//     var test = obj.prop.getFullname;

//     console.log(test());


// 4- What will you see in the console for the following example?

//     var a = 1; 
//     function b() { 
//         a = 10; 
//         return; 
//         function a() {} 
//     } 
//     b(); 
//     console.log(a); 