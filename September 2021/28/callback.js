// function doHomework(subject){
//     console.log(`tarting${subject}homework`);

// }

// function alertFinished(){
//     console.log('Homework finished...!');
// }

// doHomework('javascript')
// alertFinished();

// function doHomeworkCB(subjecr, myCallback){
//     console.log(`tarting  my ${subject}homework`);
//     myCallback();
// }
// doHomework



// const names =['bla', 'blab']
// // let message = names.map((name)=>{

// // })


// function ccreatMessage(names) =['bla', 'blab']
// let message = names.map((name)=>{
     
// })


///****    Asynchronous Callback Function *** */

// document.querySelector('button').addEventListener('click',()=>{
   
//     document.querySelector

// });


let squareNumber = num => num**2;
let square = (isArray, isFunc) => {
    let newArray = [];
    for(item in isArray){
        newArray.push(isFunc(isArray[item]));
    }
    return newArray;
}
const array = [1, 2, 3, 4, 5, 6];
console.log(square(array, squareNumber));

