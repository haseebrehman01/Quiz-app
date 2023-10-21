// Quiz data (array of objects) 
var quizQue = [
  {
    question : "What is HTML?",
    opt1 : "a) HTML describes the structure of a webpage",
    opt2 : "b) HTML is the standard markup language mainly used to create web pages",
    opt3 : "c) HTML consists of a set of elements that helps the browser how to view the content",
    opt4 : "d) All of the mentioned" ,
    correctOpt : "d) All of the mentioned"
  },
  {
    question : "Who is the father of HTML?",
    opt1 : "a) Rasmus Lerdorf",
    opt2 : "b) Tim Berners-Lee",
    opt3 : "c) Brendan Eich",
    opt4 : "d) Sergey Brin" ,
    correctOpt : "b) Tim Berners-Lee"
  },
  {
    question : "HTML stands for __________",
    opt1 : "a) HyperText Markup Language",
    opt2 : "b) HyperText Machine Language",
    opt3 : "c) HyperText Marking Language",
    opt4 : "d) HighText Marking Language" ,
    correctOpt : "a) HyperText Markup Language"
  },
  {
    question : "What is the correct syntax of doctype in HTML5?",
    opt1 : "a) </doctype html>",
    opt2 : "b) <doctype html>",
    opt3 : "c) <doctype html!>",
    opt4 : "d) <!doctype html>" ,
    correctOpt : "d) <!doctype html>"
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



// before value

var index = 0
var number = 0

// time work


// main work
// next que
function nextQue() {

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


  }
    }


     // calling func second work
roptions[i].checked = false  //radio off work (auto)
    enablebtn.disabled = true // next on work



  }

  // sabsa last mai chalega

    if (index > quizQue.length - 1 ){
      // end and number div
        console.log("End")
  
        var result = "your result is "+ (number / quizQue.length) *100 + "%"  
        console.log(result)

      
    }
    else{
      //  first work of func func call hota hi yeh chalega
      // jab tak q khatam nahi honga chalta rahega

      
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
