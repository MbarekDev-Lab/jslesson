

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

let l = console.log;
l('a1.fullname() :', a1.fullname());
l('a1.initials() :', a1.initials());
l('a2.fullname() :', a2.fullname());
l('a2.initials() :', a2.initials());
l('a3.fullname() :', a3.fullname());
l('a3.initials() :', a3.initials());