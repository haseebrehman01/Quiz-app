// Quiz data (array of objects) 
var quizQue = [
  {
    question : "Q1 : What is HTML?",
    opt1 : "a) HTML describes the structure of a webpage",
    opt2 : "b) HTML is the standard markup language",
    opt3 : "c) HTML consists of a set of elements ",
    opt4 : "d) All of the mentioned" ,
    correctOpt : "d) All of the mentioned"
  },
  {
    question : "Q2 : Who is the father of HTML?",
    opt1 : "a) Rasmus Lerdorf",
    opt2 : "b) Tim Berners-Lee",
    opt3 : "c) Brendan Eich",
    opt4 : "d) Sergey Brin" ,
    correctOpt : "b) Tim Berners-Lee"
  },
  {
    question : "Q3 : HTML stands for __________",
    opt1 : "a) HyperText Markup Language",
    opt2 : "b) HyperText Machine Language",
    opt3 : "c) HyperText Marking Language",
    opt4 : "d) HighText Marking Language" ,
    correctOpt : "a) HyperText Markup Language"
  },
  {
    question : "Q4 : What is the correct syntax of doctype in HTML5?",
    opt1 : "a) </doctype html>",
    opt2 : "b) <doctype html>",
    opt3 : "c) <doctype html!>",
    opt4 : "d) <!doctype html>" ,
    correctOpt : "d) <!doctype html>"
  },
  {
    question : "Q5 : What is DOM in HTML?",
    opt1 : "a) Language dependent application programming",
    opt2 : "b) Hierarchy of objects in ASP.NET",
    opt3 : "c) Application programming interface",
    opt4 : "d) Convention for representing and interacting with objects in html documents" ,
    correctOpt : "d) Convention for representing and interacting with objects in html documents"
  },
  {
    question : "Q6 : In which part of the HTML metadata is contained?",
    opt1 : "a) head tag",
    opt2 : "b) title tag",
    opt3 : "c) html tag",
    opt4 : "d) body tag" ,
    correctOpt : "a) head tag"
  },
  {
    question : "Q7 : Which element is used to get highlighted text in HTML5?",
    opt1 : "a) <u>",
    opt2 : "b) <mark>",
    opt3 : "c) <highlight>",
    opt4 : "d) <b>" ,
    correctOpt : "b) <mark>"
  },
  {
    question : "Q8 : Which of the following is not a HTML5 tag?",
    opt1 : "a) <track>",
    opt2 : "b) <video>",
    opt3 : "c) <slider>",
    opt4 : "d) <source>" ,
    correctOpt : "c) <slider>"
  },
  {
    question : "Q9 : How do we write comments in HTML?",
    opt1 : "a) </…….>",
    opt2 : "b) <!……>",
    opt3 : "c) </……/>",
    opt4 : "d) <…….!>" ,
    correctOpt : "b) <!……>"
  },
  {
    question : "Q10 : Which of the following elements in HTML5 defines video or movie content?",
    opt1 : "a) <video>",
    opt2 : "b) <movie>",
    opt3 : "c) <audio>",
    opt4 : "d) <media>" ,
    correctOpt : "a) <video>"
  }
  
]

// getting elements
var questions = document.getElementById("questions")
var option1 = document.getElementById("option1")
var option2 = document.getElementById("option2")
var option3 = document.getElementById("option3")
var option4 = document.getElementById("option4")
var enablebtn = document.getElementById("btn")
var roptions = document.getElementsByName("roptions")
var paras = document.getElementById("paras")
var correct = document.getElementById("correct")
var time = document.getElementById("time-div");
var result = document.getElementById("result")
var inner_div = document.querySelector(".inner-div");
var topresult = document.getElementById("topresult")
var b = quizQue.length

// before values

var index = 0;
var number = 0;
// Initialize initial values for the timer
var sec = 29; // Start with 30 seconds
var min = 1;  // Start with 1 minute

// Function to update the timer display
function updateTimer() {
  // Check if seconds and minutes are less than 10 to add leading zeros if necessary
  var s = sec < 10 ? "0" + sec : sec;
  var m = min < 10 ? "0" + min : min;
  // Update the timer display using an HTML element with the id "time"
  time.innerHTML = `${m} : ${s}`;
}

// Function to handle the countdown logic
function countdown() {
  // Decrement seconds
  sec--;
  // Check if seconds have reached 0
  if (sec < 0) {
    if (min === 0) {
      // When both minutes and seconds reach 0, trigger a function nextQue()
      nextQue();
      // Reset seconds to 59 for the next question
      sec = 30;
      // Reset minutes to 1 for the next question
      min = 1;
    } else {
      // If minutes are not 0, decrement minutes and reset seconds to 30
      min--;
      sec = 29;
    }
  }
  // Update the timer display
  updateTimer();
}
// Initialize the timer display
updateTimer();
// Start the countdown timer by repeatedly calling the countdown function
// The timer interval is set to 1000 milliseconds (1 second)
setInterval(countdown, 1000 );
// main work
// next que
function nextQue() {
  sec = 30  ;
  min = 1;
    var roptions = document.getElementsByName("roptions")
    // calling func second work
  for (var i = 0 ; i<roptions.length ; i++){

 // calling func third work
    if (roptions[i].checked){
      var optionsValue = roptions[i].value
      // getting obj value using input value
      var userInputValue =quizQue[index -1][`opt${optionsValue}`]

      //  getting obj correct value
var correctOption = quizQue[index -1].correctOpt


// function second last work or (line by line backend work)
// if obj correct value is === to uservalue
  if (userInputValue == correctOption){
    number++
    topresult.innerHTML = `${number} / ${b}`

  }
    }


     // calling func second work
roptions[i].checked = false  //radio off work (auto)
    enablebtn.disabled = true // next on work



  }

//  resetQuestionTimer();
  // sabsa last mai chalega
 
    if (index > quizQue.length - 1 ){

        var resultt =  (number / quizQue.length) *100 + "%"  

 if (number > 5){  
  inner_div.style.marginTop = "110px";
  inner_div.innerHTML =`<div class="last-work"><div class="s">
<h1 class="last-h2"><span class="pass">Congratulations you are passed <i class="fa-solid fa-face-grin-hearts" style="color: #ffdd00;"></i></h1>
<h2 class="last-h3">you got <span class="pass">${number}</span> / ${b}</h2>
<h3 class="last-h4">Your percentage is <span class="pass">${resultt}</span></h3></div>
<div class="last-btns"> 
    <a href="home.html"><button class="last-btn">Home</button></a>
    <a href=""><button class="last-btn a">Play Again</button></a>
    <a href="index.html"><button class="last-btn">Logout</button></a>
</div></div>`
 }
 else{
  inner_div.style.marginTop = "110px";
  inner_div.innerHTML =`
  <div class="last-work"><div class="s">
<h1 class="last-h2"> <span class="failed">Sorry! you are failed</span> <i class="fa-regular fa-face-frown-open" style="color: #ffdd00;"></i>
  </h1>
<h2 class="last-h3">you got <span class="failed">${number}</span> / ${b}</h2>
<h3 class="last-h4">Your percentage is <span class="failed">${resultt}</span></h3></div>
<div class="last-btns"> 
    <a href="home.html"><button class="last-btn">Home</button></a>
    <a href=""><button class="last-btn a">Play Again</button></a>
    <a href="index.html"><button class="last-btn">Logout</button></a>
</div></div>`
 }

    }
    else{
      //  first work of func func call hota hi yeh chalega
      // jab tak q khatam nahi honga chalta rahega

      topresult.innerHTML = `${number} / ${b}`
      var num = quizQue[index].question
      questions.innerHTML = quizQue[index].question
option1.innerText =  quizQue[index].opt1
option2.innerText =  quizQue[index].opt2
option3.innerText =  quizQue[index].opt3
option4.innerText =  quizQue[index].opt4
index++

    }

}

// file khulta hi func chal gaya or pehla opt dekhadya phr dusra tab chala jab next btn pa
// auto 

nextQue() 

// enable button  (next ka button enable hojayega)
// user work phr upper sa kamm shroo oga

function enableBtn(){
    enablebtn.disabled = false


// yeh dusra opt mai enable rahega issa khatam karna ka dya radio checked pa kaam karna hoga 


}
