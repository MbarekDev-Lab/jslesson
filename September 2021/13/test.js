var person = {
    firstName: "Michael",
    lastName: "Smith", 
    job: "driver",
    age: 20, 
    city: "Paris",
    output: function() {
    return ` ${this.firstName}  ${this.lastName} is a years old ${this.age} ${this.job} in ${this.city}`
   } 

}
console.log(person.output);