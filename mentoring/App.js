//a
function Question(question, answers, correct) {
    this.question= question;
    this.answers=answers;
    this.correct= correct;   
}

let questions= [];


//b
let question1= new Question("Which type of JavaScript language is ___",
    { a: "Object-Oriented",
     b: "Object-Based" ,
     c: "Assembly-language",
     d: "High-level" },
       "Object-Oriented" )

  let question2= new Question("Which one of the following also known as Conditional Expression:",
    { a: "Alternative to if-else",
     b: "Switch statement",
     c: "If-then-else statement" ,
     d: "immediate if" },
   "Switch statement" )

//c
  questions.push(question1)
  questions.push(question2)

  console.log(questions)


//4
function displayQuestion(index){
    let q= questions[index]
    console.log(`
    Question: ${q.question}
    a: ${q.answers.a},
    b: ${q.answers.b},
    c: ${q.answers.c},
    d: ${q.answers.d}, 
    `)
}

let score=0;

function getAnswer(question){
    let answer= prompt("please enter your answer here")

    if(question.answers[answer]===question.correct){ 
        score++;
        return {value: true, answer:answer,score:score}
    }else{
        return {value: false, answer:answer, score:score}
    }
}

function checkAnswer(answer, cb){
    if(answer.value){
        console.log("right answer")
    }else{
        console.log("wrong answer")
    }
    cb(answer.score)
}


function displayScore(score){
    console.log(`your score is now : ${score}`)
}

function main(){
    let index= Math.floor(Math.random()*questions.length)
    displayQuestion(index)
    let result = getAnswer(questions[index])
    console.dir(getAnswer)

    checkAnswer(result,displayScore)

    if(result.answer!=="exit"){
        main()
    }
   
}

main()



//callback is function you pass as an argument to another
/* console.log("start")

setTimeout(()=>{
    console.log("settimeout")
}, 5000)

btn.addEventListener("click",()=>{} )

console.log("end") */


/* 
Question.prototype.questionDetails=function(index){
        
} */


/* function a(){
console.log("a")
}
function b(){
console.log("b")
}
b()
a() */

/* function printRandomNumber(number){
    console.log(number)
}

function createRandomNumber(firstcb, secondcb){
    let max= firstcb()
    setTimeout(()=>{
           let random= Math.floor(Math.random()*max)
             secondcb(random) 
    },2000)

}

function CreateRange(){
    return 20
}


createRandomNumber(CreateRange, printRandomNumber) */