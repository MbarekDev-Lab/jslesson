// 🔥🔥🔥 EXERCISE - 1 🔥🔥🔥
// ------------------------

// 1- Constructor function Fetching Information on a Sports Player
//     Create a constructor function called "Player" that takes the following four arguments for a particular football player:
//         name, age, height, weight
//     Also, create three methods that returns the following strings:
//         getAge() returns "name is age age"
//         getHeight() returns "name is heightcm"
//         getWeight() returns "name weighs weightkg"
//     Create 4 player by using this constructor function, and call methods for these 4 players.
//         example:
//             p1 = new Player("David Jones", 25, 175, 75)
//             p1.getAge() ➞ "David Jones is age 25"
//             p1.getHeight() ➞ "David Jones is 175cm"
//             p1.getWeight() ➞ "David Jones weighs 75kg"
function Player(name, age, height, weight){
    this.name = name;
    this.age = age;
    this.height= height;
    this.weight =weight
}
Player.prototype.getAge = function (){
    return(`${this.name} is age ${this.age}`);
}   
Player.prototype.getHeight = function (){
    return(`${this.name} is ${this.height}cm`);
}   
Player.prototype.getWeight = function (){
    return(`${this.name} weighs ${this.weight}kg`);
}   
const p1 = new Player("David Jones", 25, 175, 75);
const l = console.log;
l('p1.getAge()   -> :',p1.getAge());
l('p1.getHeight()-> :',p1.getHeight());
l('p1.getWeight()-> :',p1.getWeight());
// p1.getAge()
// p1.getHeight(); 
// p1.getWeight();
// 2- Name constructor function.
//     Create a constructor function called Name that takes the following two arguments first name as fname and last name as lname.
//     A method called fullname which returns the first and last names.
//     Another method called initials which returns the first letters of the first and last name. Put a "." between the two letters.
//     Create 2 people by using this constructor function, and call methods for these 2 people.
//     example:
//         a1 = new Name("john", "SMITH");
//         a1.fullname() -> 'John Smith'
//         a1.initials() -> 'J.S'
function Name(fname,lname){
    this.firstName = fname;
    this.lastName = lname;
}
Name.prototype.fullname = function () {
    return `${this.firstName.slice(0,1).toUpperCase()+this.firstName.slice(1)} ${this.lastName.slice(0,1)+this.lastName.slice(1).toLowerCase()}`
}
Name.prototype.initials = function () {
    return `${this.firstName.slice(0,1).toUpperCase()}.${this.lastName.slice(0,1)}`
}
const  a1 = new Name("john", "SMITH");
const  a2 = new Name("omar", "ELMUCHTAR");
const  a3 = new Name("ibnmusa", "ALKHAWARIZMI");
l('a1.fullname()-> :', a1.fullname());
l('a1.initials()-> :', a1.initials());
l('a2.fullname()-> :', a2.fullname());
l('a2.initials()-> :', a2.initials());
l('a3.fullname()-> :', a3.fullname());
l('a3.initials()-> :', a3.initials());
// 4- Book Shelf.
//     Create a Book constructor function that has two properties :
//         Title, Author
//     and two methods:
//         A method named getTitle that returns: "Title: " + the instance title.
//         A method named getAuthor that returns: "Author: " + the instance author.
//     and instantiate this constructor function by creating 3 new books:
//         Pride and Prejudice - Jane Austen (PP)
//         Hamlet - William Shakespeare (H)
//         War and Peace - Leo Tolstoy (WP)
//     Name the new object instances PP, H, and WP, respectively.

//     example:
//         let hp = new Book('Harry Potter', 'J.K. Rowling');
//         hp.getTitle() ➞ "Title: Harry Potter"
//         hp.getAuthor() ➞ "Author: J.K. Rowling"
function Book( Title, Author){
    this.Title = Title;
    this.Author = Author;
}
Book.prototype.getTitle = function (){
    return(`Title:${this.Title} `);
}   
Book.prototype.getAuthor = function (){
    return(`Author:${this.Author} `);
}   
const hp = new Book('Harry Potter', 'J.K. Rowling');
const PP = new Book('Pride and Prejudice', '- Jane Austen');
const H  = new Book('Hamlet' ,'- William Shakespeare ');
const WP = new Book('War and Peace' , '- Leo Tolstoy');
l('hp.getTitle() ->  :', hp.getTitle());
l('hp.getAuthor()->  :', hp.getAuthor());
l('hp.getTitle() ->  :', PP.getTitle());
l('hp.getAuthor()->  :', PP.getAuthor());
l('hp.getTitle() ->  :', H.getTitle());
l('hp.getAuthor()->  :', H.getAuthor());
l('hp.getTitle() ->  :', WP.getTitle());
l('hp.getAuthor()->  :', WP.getAuthor());
