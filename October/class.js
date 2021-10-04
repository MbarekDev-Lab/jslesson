// ES6 class 


// Constractor function

// function user(name, role){

// this.name  = name;
// this. role = role;
// }

// user.prototype.sayHai = function () {
//      console.log(`say hello ${this.name}`);
// }

// let jack = new user()


// class Person {
//     constructor(fName, lName, birthYear, city, country){
//         this.fName =fName;
//         this.lName = lName;
//         this.birthYear=birthYear;
//         this.city =city;

//     }
//     calcAge(){
//         this.isRetired = this.age < 65 ? true : false;
//     }

// }


// // sarah
// let sarah = new Person('sarah', 'smith', 'london', 1989, 'london');
// console.log(sarah);

class Person {
    constructor(fName, lName, birthYear, city, country){
this.lName = lName;
this.birthYear = birthYear;
this.city = city;
this.country = country;
}
calcAge() {
this.age = 2021 - this.birthYear;
}

calcIsRetired() {
this.isRetired = this.age < 65 ? false : true;
}
}

// Sarah
let sarah = new Person('Sarah', 'Smith', 1990, 'London', 'England');
console.log('Sarah :', sarah);

sarah.calcAge();
sarah.calcIsRetired();

let john = new Person('John', 'Doe', 1950, 'Berlin', 'Germany');
console.log('John :', john);
john.calcAge();
john.calcIsRetired(); 


class Computer {
    constructor(macOs, windows, linux){
        this.macOs = macOs;
        this.windows = windows;
        this.linux = linux
    }

    cals
}

// getter setter 

class Product {
    constructor(name, price, discount, inStock){
        this.name = name;
        this.price = price;
        this.discount =discount;
        this.inStock = inStock;
    }
    // getter
    get callPrice (){
        return this.price;
    }

    get callDiscount(){
        return this.discount;
    }
    
    // setters
    
    set changePrice(newValue){
        this.price =newValue;
    }
    
    set changeDiscount(newValue){
        this.discount = newValue;
    }

    // normal methode 
    soldItem(value){
        this.soldItem =value
    }

    totalAmount(value){
        this.soldItem = value;
    }

    checkStock(){
        this.inStock = (this.totalAmount - )
    }
}




















