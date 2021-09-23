
const cart = [
    {
    id: 1,
    type: 'classics',
    name: 'To Kill a Mockingbird',
    price: 18.04,
    discount: true,
    },
    {
    id: 2,
    type: 'classics',
    name: 'Little Women',
    price: 6.17,
    discount: false, 
    },
    {
    id: 3,
    type: 'comics',
    name: 'Watchmen',
    price: 10.84,
    discount: false,
    },
    {
    id: 4,
    type: 'comics',
    name: 'The Walking Dead',
    price: 30.05,
    discount: true,
    },
    {
    id: 5,
    type: 'mystery',
    name: 'The Night Fire',
    price: 18.90,
    discount: true,
    },
    {
    id: 6,
    type: 'adventure',
    name: 'Life of Pi',
    price: 7.50,
    discount: false,
    },
    ]; 
 
    // REDUCE
    // let totalPrice = cart.reduce(function(total, item){
    //     return total + item.price
    // }, 0)
    // console.log(totalPrice);

    // FOREACH 

    let sum = 0;
    cart.array.forEach(element => {
        
    });



// const cart = [
//     {
//     id: 1,
//     type: 'classics',
//     name: 'To Kill a Mockingbird',
//     price: 18.04,
//     discount: true,
//     },
//     {
//     id: 2,
//     type: 'classics',
//     name: 'Little Women',
//     price: 6.17,
//     discount: false, 
//     },
//     {
//     id: 3,
//     type: 'comics',
//     name: 'Watchmen',
//     price: 10.84,
//     discount: false,
//     },
//     {
//     id: 4,
//     type: 'comics',
//     name: 'The Walking Dead',
//     price: 30.05,
//     discount: true,
//     },
//     {
//     id: 5,
//     type: 'mystery',
//     name: 'The Night Fire',
//     price: 18.90,
//     discount: true,
//     },
//     {
//     id: 6,
//     type: 'adventure',
//     name: 'Life of Pi',
//     price: 7.50,
//     discount: false,
//     },
//     ]; 
//     let priceWithDiscount = books.map(item =>  (item.discount) ? item.price*=0.9 : item.price); 
//     let totalPrice = priceWithDiscount.reduce((total, item) => total + item, 0);
//     console.log(totalPrice);


const books = [
    {
    id: 1,
    type: 'classics',
    name: 'To Kill a Mockingbird',
    price: 18.04,
    discount: true,
    rate: 4.7
    },
    {
    id: 2,
    type: 'classics',
    name: 'Little Women',
    price: 6.17,
    discount: false,
    rate: 4.3
    },
    {
    id: 3,
    type: 'comics',
    name: 'Watchmen',
    price: 10.84,
    discount: false,
    rate: 3.7
    },
    {
    id: 4,
    type: 'comics',
    name: 'The Walking Dead',
    price: 30.05,
    discount: true,
    rate: 4.9
    },
    {
    id: 5,
    type: 'mystery',
    name: 'The Night Fire',
    price: 18.90,
    discount: true,
    rate: 4.1
    },
    {
    id: 6,
    type: 'adventure',
    name: 'Life of Pi',
    price: 7.50,
    discount: false,
    rate: 4.0
    },
    ]; 
    

    let LowerRate = books.sort(({ rate: rt1 }, { rate: rt2 }) => rt1 - rt2)[0];
let higherRate = books.sort((a, b) => b.rate - a.rate)[0];
console.log(LowerRate);
console.log(higherRate);


    