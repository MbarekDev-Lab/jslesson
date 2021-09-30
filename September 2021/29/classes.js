// constractor function

// class User {
//     constructor(userName, email, password, role) {
//         this.userName = userName;
//         this.email = email;
//         this.password = password;
//         this.role = role;
//     }
// }
// let jack = new User ('jack', 'jack@gmail.com', 'admin', 'profisor');
// console.log(jack);

function Person( firstName, lastName, email, birthYear, city, country){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.birthYear = birthYear;
    this.city = city;
    this.country = country;
}
 let users = [['jonas', 'jns', 'f@gmail.com', '1234', 'berlin', 'earth'],
              ['mike', 'blah', 'f@gmail.com', '6784', 'hamburg', 'earth'],
              ['sarah', 'fööö', 'f@gmail.com', '2344', 'agadir', 'earth']];
// let jonas = new Person('jonas', 'jns', 'f@gmail.com', '1234', 'berlin', 'earth');
// console.log('jonas', jonas);
// let mike = new Person('mike', 'blah', 'f@gmail.com', '6784', 'hamburg', 'earth');
// console.log('mike', mike);
// let sarah = new Person('sarah', 'fo', 'f@gmail.com', '2344', 'agadir', 'earth');
// console.log('sarah', sarah);

let someOne = users.map(i => new Person(...i))
console.log(someOne)


