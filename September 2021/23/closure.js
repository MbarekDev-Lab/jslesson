/****    Closure ***** */


// function makeCounter() {
//     let number = 0;

//     return (a) => {
//       number += 1;
//       return number;
//   }
      
// } 

// let counter = makeCounter();


// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log('hello mnguys');
// console.log(counter());
// console.log(counter());


const cartMaker = function() {


    let careItem = [];

    function addItem(item){

        careItem.push(item);
        return `${item} added into cart...!`;
    }
    function getCartlength() {
        return careItem.length === 0 ? `There is no  item in your cart : careItem.length === 1 ? ${careItem.length}` iten
        {careItem.lenght }
    }
    return {
        addItem,
        getCartlength,
    }

}

let card = cartMaker();
console.log(cart);

card.addItem('book');
card.addItem('bag');
card.addItem('Notebook');
console.log(cart.careItem);
