
let kinderGarten = {
    minAge: 6,
    maxAge: 11,
    canBeRegistered(kid) {
      return kid.age >= this.minAge && kid.age < this.maxAge;
    },
  };
  let kids = [
    { name: 'Kyle', age: 14 },
    { name: 'Chris', age: 9 },
    { name: 'Dani', age: 7 },
    { name: 'Mohammad', age: 4 },
  ];
  let students = kids.filter(kinderGarten.canBeRegistered, kinderGarten);
  console.log(students);





// var num = 0;
// function changeTheVariable() {
//   let num = 5;
//   console.log(num);
// }
// changeTheVariable();
// console.log(num);
// var num = 0;
// if (1 > 0) {
//   let num = 2;
//   console.log(num);
// }
// console.log(num);
/* difference between var,let constant
var can be redeclared and reassigned
var number = 1
redeclaration var number = 3
reassigning number = 3
the old verson, before ES6
variables declared with var in a global scope, can be accessed in a block scope (all curly brackets except for functions)
let can be reassigned but not redelcared
let number = 1
rredeclaration is not possible, means let number = 3 will return an error number has been already declared
but reassigning is possible: number = 3
new Version ES6
const, cannot be reassigned nor redeclared
const num = 0
you cannot do : num = 1 not const num = 3
new version ES6 */





////////////////////////////// To do list Exercise ///////////////////////////////
// function toDoListMaker() {
//     let toDoArray = [];
//     function showToDo() {
//       return `This is your to do list ${JSON.stringify(toDoArray)}`;
//     }
//     function AddTask(taskObject) {
//       toDoArray.push(taskObject);
//       console.log('Task has been added');
//     }
//     function removeTask(id) {
//       for (let item of toDoArray) {
//         if (id == item.taskNumber) {
//           toDoArray.splice(toDoArray.indexOf(item), 1);
//           console.log(`Task with id ${item.taskNumber} has been removed`);
//         }
//       }
//     }
//     function getLength() {
//       return toDoArray.length == 0
//         ? 'You have no tasks'
//         : toDoArray.length == 1
//         ? `There is ${toDoArray.length} task in your to do list`
//         : `There are ${toDoArray.length} tasks in your to do list`;
//     }
//     function editTask(taskObject, id) {
//       for (let item of toDoArray) {
//         if (id == item.taskNumber) {
//           toDoArray.splice(toDoArray.indexOf(item), 1, taskObject);
//         }
//       }
//     }
//     function sortPriority(str) {
//       for (let item of toDoArray) {
//         if (str == item.priority) {
//           let priorityArray = toDoArray.filter((item) => item.priority == str);
//           console.log(
//             `Those are the ${str} priority tasks: ${JSON.stringify(
//               priorityArray
//             )}`
//           );
//         }
//       }
//     }
//     return {
//       showToDo,
//       AddTask,
//       editTask,
//       getLength,
//       removeTask,
//       sortPriority,
//     };
//   }
//   let toDoList = toDoListMaker();
//   toDoList.AddTask({
//     taskNumber: 1,
//     taskName: 'groceries',
//     priority: 'medium',
//   });
//   toDoList.AddTask({
//     taskNumber: 2,
//     taskName: 'sport',
//     priority: 'high',
//   });
//   toDoList.AddTask({
//     taskNumber: 3,
//     taskName: 'call office',
//     priority: 'high',
//   });
//   toDoList.AddTask({
//     taskNumber: 4,
//     taskName: 'write an E-mail to brother',
//     priority: 'medium',
//   });
//   toDoList.AddTask({
//     taskNumber: 5,
//     taskName: 'post an item for sale',
//     priority: 'low',
//     canBePostponed: true,
//   });
//   console.log(toDoList.getLength());
//   console.log(toDoList.showToDo());
//   toDoList.sortPriority('high');
//   toDoList.editTask(
//     {
//       taskNumber: 4,
//       taskName: 'write an E-mail to brother',
//       priority: 'high',
//     },
//     4
//   );
//   console.log(toDoList.showToDo());




