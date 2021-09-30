// let numbers = new Array();
// console.log(numbers instanceof Array);
// numbers[0] = 50;
// console.log(numbers)

// ************+ constructor functions **********************+

// function User(firstName, lastName, email, password, role) {
//     this.person = {
//         firstName,
//         lastName 
//     };
//     this.email = email;
//     this.password = password;
//     this.role = role;
// }

// let jack = new User('Jack', 'Doe', 'jack@gmail.com', 'jack123', 'admin');
// console.log(jack);

// let ana = new User('Ana', 'Doe', 'ana@gmail.com', 'ana123', 'co-admin');
// console.log('Ana :', ana);

// let people = [
//     {
//         firstName: 'Jack',
//         lastName: 'Doe',
//         email: 'jack@gmail.com',
//         password: 'jack123',
//         role: 'admin'
//     },
//     {
//         firstName: 'Ana',
//         lastName: 'Doe',
//         email: 'ana@gmail.com',
//         password: 'ana123',
//         role: 'co-admin'
//     },
// ]

// // let newObjs = people.map(item => new User(item.firstName, item.lastName, item.email, item.password, item.role))
// let newObjs = people.map(item => new User({ ...item }))
// console.log(newObjs);

// Person(firstName, lastName, birthYear, city, country)
// function Person(firstName, lastName, birthYear, city, country) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this, birthYear = birthYear;
//     this.city = city;
//     this.county = country;
// }
// jonas
// let jonas = new Person('Jonas', 'Smith', 1980, 'Berlin', 'Germany');
// console.log('Jonas :', jonas);

// mike
// let mike = new Person('Mike', 'Smith', 1975, 'Hamburg', 'Germany');
// console.log('Mike :', mike);

// sarah
// let sarah = new Person('Sarah', 'Smith', 1981, 'Berlin', 'Germany');
// console.log('Sarah:', sarah);

// **************** prototypal inheritance ******************

// function Person(firstName, lastName, birthYear, city, country) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthYear = birthYear;
//     this.city = city;
//     this.county = country;
// }
// // console.dir(Person);

// Person.prototype.calcAge = function () {
//     this.age = 2021 - this.birthYear;
// }
// Person.prototype.isRetired = function () {
//     this.isRetired = this.age < 65 ? false : true;
// }

// // jonas
// let jonas = new Person('Jonas', 'Smith', 1950, 'Berlin', 'Germany');
// // console.log('Jonas :', jonas);
// jonas.calcAge();
// jonas.isRetired();
// console.log('Jonas :', jonas);

// // mike
// let mike = new Person('Mike', 'Smith', 1975, 'Hamburg', 'Germany');
// // console.log('Mike :', mike);
// mike.calcAge();
// mike.isRetired();
// console.log('Mike :', mike)

// // sarah
// let sarah = new Person('Sarah', 'Smith', 1981, 'Berlin', 'Germany');
// // console.log('Sarah:', sarah);
// sarah.calcAge();
// sarah.isRetired();
// console.log('Sarah:', sarah);

// ------- EXAMPLE 

// function Person(firstName, lastName, birthYear, city, country) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthYear = birthYear;
//     this.city = city;
//     this.county = country;
// }
// // console.dir(Person);

// Person.prototype.calcAge = function () {
//     this.age = 2021 - this.birthYear;
// }
// Person.prototype.isRetired = function () {
//     this.isRetired = this.age < 65 ? false : true;
// }

// let people = [
//     ['Jonas', 'Smith', 1950, 'Berlin', 'Germany'],
//     ['Mike', 'Smith', 1975, 'Hamburg', 'Germany'],
//     ['Sarah', 'Smith', 1981, 'Berlin', 'Germany']
// ]

// // people.map(item => new Person(item[0], item[1], item[2], item[3], item[4]));
// let newObjs = people.map(item => new Person(...item));
// // console.log(newObjs);       // [ Person, Person, Person]

// newObjs.forEach(item => {
//     item.calcAge();
//     item.isRetired();
// });
// console.log(newObjs);

// Person.prototype.company = 'DCI';

// // a new method in Person.prototype
// Person.prototype.introduce = function () {
//     console.log(`My name is ${this.firstName}, I m a developer at ${this.company}.`);
// }
// let carlo = new Person('Carlo', 'Smith', 1980, 'Düsseldorf', 'Germany');
// console.log('Carlo :', carlo);              // Carlo : Person {firstName: "Carlo", lastName: 'Smith', birthYear: 1980, city: 'Düsseldorf', country: 'Germany'}

// carlo.calcAge();            

// carlo.introduce();              // My name is Carlo, I m a developer at DCI.

// console.log(carlo);             // Person {firstName: "Carlo", lastName: 'Smith', birthYear: 1980, city: 'Düsseldorf', country: 'Germany', age: 41}
// console.log(carlo.hasOwnProperty('company'));               // false
//
// console.log(Person.prototype);                              // {company: "DCI", calcAge: ƒ, introduce: ƒ, isRetired: f, constructor: ƒ}

// console.log(Person.prototype.hasOwnProperty('company'));    // true

/*
🔥🔥🔥 EXERCISE - 1 🔥🔥🔥
------------------------

1- Constructor function Fetching Information on a Sports Player
    Create a constructor function called "Player" that takes the following four arguments for a particular football player:
        name, age, height, weight
    Also, create three methods that returns the following strings:
        getAge() returns "name is age age"
        getHeight() returns "name is heightcm"
        getWeight() returns "name weighs weightkg"
    Create 4 player by using this constructor function, and call methods for these 4 players.

        example:
            p1 = new Player("David Jones", 25, 175, 75)
            p1.getAge() ➞ "David Jones is age 25"
            p1.getHeight() ➞ "David Jones is 175cm"
            p1.getWeight() ➞ "David Jones weighs 75kg"
    

2- Name constructor function.
    Create a constructor function called Name that takes the following two arguments first name as fname and last name as lname.
    A method called fullname which returns the first and last names.
    Another method called initials which returns the first letters of the first and last name. Put a "." between the two letters.
    Create 2 people by using this constructor function, and call methods for these 2 people.

    example:
        a1 = new Name("john", "SMITH");
        a1.fullname() -> 'John Smith'
        a1.initials() -> 'J.S'

3- Make a circle with OOP.
    Your task is to create a Circle constructor function that creates a circle with a radius provided by an argument. The circles constructed must have two methods getArea() (PI*r^2) and getPerimeter() (2*PI*r) which give both respective areas and perimeter (circumference).

    example:
        let circy = new Circle(11)
        circy.getArea()       // Should return 380.132711084365
        circy.getPerimeter()  // Should return 69.11503837897544

4- Book Shelf.
    Create a Book constructor function that has two properties :
        Title, Author
    and two methods:
        A method named getTitle that returns: "Title: " + the instance title.
        A method named getAuthor that returns: "Author: " + the instance author.
    and instantiate this constructor function by creating 3 new books:
        Pride and Prejudice - Jane Austen (PP)
        Hamlet - William Shakespeare (H)
        War and Peace - Leo Tolstoy (WP)
    Name the new object instances PP, H, and WP, respectively.

    example:
        let hp = new Book('Harry Potter', 'J.K. Rowling');
        hp.getTitle() ➞ "Title: Harry Potter"
        hp.getAuthor() ➞ "Author: J.K. Rowling"



        Array.prototype.unique = function () {
    return [...new Set(this)];
}

let numbers = [1, 4, 5, 6, 3, 4, 5, 6, 7, 7 , 7, 7, 100];

console.log(numbers.unique());
let chars = ['a', 'b', 'a', 'c', 'b'];
console.log(chars.unique());


Array.prototype.maxValue = function () {
    return Math.max(...this)
}

console.log(numbers.maxValue());



// create camelCase from snake_case string and from multiple words  
String.prototype.camelCase = function () {
    this.trim();
    this.toLowerCase();
    let seperators = [' ', '_']
    let newStr = '';

    for (let sep of seperators) {
        if (this.includes(sep)) {
            let newArr = this.split(sep);
            if (newArr[0] === '') {
                newArr.splice(0, 1);
                newStr += sep;
            }
            newArr.forEach(item => {
                if (newArr.indexOf(item) === 0) {
                    newStr += item;
                } else {
                    newStr += item[0].toUpperCase() + item.slice(1);
                }
            })
        }
    }
    return newStr;
}

console.log('_hallo_guys_lets_learn_html'.camelCase());
console.log('hallo_guys_lets_learn_html'.camelCase());
console.log('hallo guys lets learn html'.camelCase());
*/