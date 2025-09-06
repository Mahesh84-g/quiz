const questions=[
    {
        question:"Which is the largest country in the world by area?",
        answers:[
            {text:"China",correct:false},
             {text:"Canada",correct:false},
              {text:"Russia",correct:true},
               {text:"Brazil",correct:false},
        ]
    },
    {
         question:"which is largest  desert in the world",
        answers:[
            {text:"kalahari Desert",correct:false},
             {text:"gobi Desert",correct:false},
              {text:"sahara Desert",correct:false},
               {text:"Antarctic Desert",correct:true},
        ]
    },{
         question:"The Great Wall of China was mainly built to protect against which group?",
        answers:[
            {text:"Romans",correct:false},
             {text:"Persians",correct:false},
              {text:"Mongols",correct:true},
               {text:"Turks",correct:false},
        ]
    },{
         question:"Which is the smallest country in the world by area?",
        answers:[
            {text:"Monaco",correct:false},
             {text:"Malta",correct:false},
              {text:"San Marino",correct:false},
               {text:"Vatican city",correct:true},
        ]
    },{
         question:"Which ocean is the largest in the world",
        answers:[
            {text:"AtlanticOcean",correct:false},
             {text:"Indain Ocean",correct:false},
              {text:"Pacific Ocean",correct:true},
               {text:"Arctic Ocean",correct:false},
        ]
    }
];
const q_element=document.getElementById("question");
const a_button=document.getElementById("answer-buttons");
const nextb=document.getElementById("next-btn");
let currentQuestion=0;
let score=0;
function startquiz(){
    currentQuestionI=0;
    score=0;
    nextb.innerHTML="Next"
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionI];
    let question_no=currentQuestionI+1;
    q_element.innerHTML=question_no + ". "+ currentQuestion.question;
    currentQuestion.answers.forEach(answer =>{
const button=document.createElement("button");
button.innerHTML=answer.text;
button.classList.add("btn");
a_button.appendChild(button);
if(answer.correct){
     button.dataset.correct=answer.correct;
}
button.addEventListener("click",selectAnswer);



    });
}
function resetState(){
    nextb.style.display="none";
    while(a_button.firstChild){
        a_button.removeChild(a_button.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(a_button.children).forEach(button =>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    })
    nextb.style.display="block";
}
function showScore(){
    resetState();
    q_element.innerHTML=`your score is ${score} out of ${questions.length}!`
    nextb.innerHTML="Play Again";
    nextb.style.display="block";
}
function handleNextButton(){
    currentQuestionI++;
    if(currentQuestionI<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}
nextb.addEventListener('click',()=>{
    if(currentQuestionI<questions.length){
        handleNextButton();
    }
    else{
        startquiz();
    }
})
startquiz();