const quiz=[{
    question: "What is the most used programming language in 2021?",
    ans1text:"Java",
    ans2text: "C",
    ans3text: "JavaScript",
    ans4text: "python",
    answer:"Javascript",
},
{
    question:"Who is the President of US?",
    ans1text:"Joe Biden",
    ans2text: "Donald Trump",
    ans3text: "Barack Obama",
    ans4text: "George Bush",
    answer:"Joe Biden",
},{
    question:"What does HTML stand for?",
    ans1text:"HyperText Markup Language",
    ans2text: "Cascading Style Sheet",
    ans3text: "Jason Object Notation",
    ans4text: "Helicopters Terminals MotorBoat Lamborginis",
    answer:"HyperText Markup Language",
},
{
    question:"What year was Javascript launched?",
    ans1text:"1996",
    ans2text: "1995",
    ans3text: "1994",
    ans4text: "none of these",
    answer:"1995",
}]

const question=document.getElementById("quiz-ques")
const optionA=document.getElementById("text_option_A")
const optionB=document.getElementById("text_option_B")
const optionC=document.getElementById("text_option_C")
const optionD=document.getElementById("text_option_D")
const answer=document.querySelectorAll(".ans")
const submit=document.getElementById("submit")
let currentQues=0;
let score=0;
// console.log(quiz[currentQues])
question.textContent=quiz[currentQues].question;
optionA.textContent=quiz[currentQues].ans1text;
optionB.textContent=quiz[currentQues].ans2text;
optionC.textContent=quiz[currentQues].ans3text;
optionD.textContent=quiz[currentQues].ans4text;

submit.addEventListener("click",()=>{
 const checkedAns=document.querySelector('input[type="radio"]:checked')
//  console.log(checkedAns);
// console.log(checkedAns.nextElementSibling.textContent);
 if(checkedAns===null){
    alert("Please select an answer")
 }
 else{
    if(checkedAns.nextElementSibling.textContent===quiz[currentQues].answer){
        score++;
    }
    checkedAns.checked=false;
    currentQues++;
    if(currentQues<quiz.length){
        question.textContent=quiz[currentQues].question;
optionA.textContent=quiz[currentQues].ans1text;
optionB.textContent=quiz[currentQues].ans2text;
optionC.textContent=quiz[currentQues].ans3text;
optionD.textContent=quiz[currentQues].ans4text;
checkedAns.checked=false;
    }
    else{
        alert(`your score is ${score}`);
        location.reload();
    }
 }
});