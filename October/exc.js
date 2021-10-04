// 🔥🔥🔥 EXERCISE - 2 🔥🔥🔥
//     ------------------------

//     1. Person Class.
//         Create a class called Person which accepts the name of a person as a string, and his/her age as a number. The Person class should have a method called describe which returns a string with the following syntax: "name, age years old". So, for example, if John is 19 years old, then the function describe of his object will return "John, 19 years old".


//   class Person {
//       constructor(name,  age,){
//         this.name = John;
//         this.age = 30;
//       }
//       describe(){
//           return `${this.name}, ${this.age} years old". So, for example, if John is 19 years old, then the function describe of his object will return "John, 19 years old  this.describe = this.age < 19 ? "John,${this.age} years old" : false;`
//       }
     
//   }



//     2. Volume.
//         Write a JavaScript program to get the volume of a cylinder with four decimal places using a class.


  class Cylinder {
    constructor(cylinderHeight, cylinderDiameter) {
        this.cylinderHeight = cylinderHeight;
        this.cylinderDiameter = cylinderDiameter;
    }
    getVolume() {
        const r = this.cylinderDiameter / 2;
        const h = this.cylinderHeight;
        const b =  Math.PI * r * r * h;
        return b
    }
}
  const cylDr = new Cylinder(5, 7);
  console.log('The volume with four decimal => ', cylDr.getVolume().toFixed(4));


 
  
//         Note: Volume of a cylinder : V = πr^2h - r is the radius and h is the height of the cylinder.


//     3. Create a TV class with properties like brand, channel and volume.
//         Specify bTV {rand in a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.

//         Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.
//         Add a method to set the channel randomly. Let's say the TV has only 50 channels.
//         Add a method to reset TV so it goes back to channel 1 and volume 50.
//         It's useful to write a status, that returns info about the TV status like: "Panasonic at channel 8, volume 75".

// class TV {
//     constructor(brand, channel, volume){
//         this.brand = btv;
//         this.channel = 1;
//         this.volume = 50;
//     }
//     increaseDecrease(){
//         const valume = this.valume.Math.floor(0).Math.ceil(100);
//     }
//     channelRandomly(){
//         const randomly =this.channel.Math.random(50);
//     }
//     resetTv(){
//         const reset = this.channel || this.volume;
//     }
//     // getTvInfo(){
//     //     const status = this.
//     // }
// }
// increaseDecrease()
// channelRandomly()
// resetTv()




//     4. Create methods for the Calculator class that can do the following:

//         Add two numbers.
//         Subtract two numbers.
//         Multiply two numbers.
//         Divide two numbers.

//         example:
//             var calculator = new Calculator()
//             calculator.add(10, 5) ➞ 15
//             calculator.subtract(10, 5) ➞ 5
//             calculator.multiply(10, 5) ➞ 50
//             calculator.divide(10, 5) ➞ 2


// class Calculator {
//     constructor(subtract, multiply, divide){
//         this.subtract = subtract;
//         this.multiply = multiply;
//         this.divide = divide;
//     }
// }
// clacAdd(){
//     return 
// }


//     5. Write a class called Rectangle that represents a rectangular two-dimensional region. 
//         It constructs a new rectangle whose top-left corner is specified by the given coordinates and with the given width and height.
//         It should have the following properties:
//         x, y, width, height
//         It should have the following methods:
//         toString()
//         It returns a string representation of this rectangle, as [x=1, y=2, width=3, height=4].

//         example:
//             let rect1 = new Rectangle(1, 2, 10, 5)
//             rect1.toString() -> [x=1, y=2, width=10, height=5]




// 🔥🔥🔥 CODING CHALLENGE - 6 🔥🔥🔥
// --------------------------------

// Suppose that you're working in a small town administration, and you're in charge of two town elements:
// 1. Parks
// 2. Streets

// It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

// At an end-of-year meeting, your boss wants a final report with the following:
// 1. Tree density of each park in the town (forumla: number of trees/park area)
// 2. Average age of each town's park (forumla: sum of all ages/number of parks)
// 3. The name of the park that has more than 1000 trees
// 4. Total and average length of the town's streets
// 5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

// All the report data should be printed to the console.