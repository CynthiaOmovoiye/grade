var text = ""
   var gradeEle=  document.getElementById("grade")
   gradeEle.innerHTML= text

function clearScreen(e){
    e.preventDefault()
    document.getElementById("score").value ="";
gradeEle.style.display= "none"
   
}

function getGrades() {
    var score = document.getElementById("score").value
    if(isNaN(score) || score == ""){
        text="Please input a valid score between 0-100 "
    }
    else if(score >= 101){
        text = "Invalid Score! Please input a valid score between 0-100"
    }
    else if(score >= 80){
        text = "Your grade is A+"

    }
    else if(score >= 70){
        text = "Your grade is A"
    }
    else if(score>= 60){
        text = "Your grade is B"
    }
    else if( score>= 50){
        text = " Your grade is C"
    }
    else if(score>= 40){
        text = "Your grade is D"

    }
    else{
        text= "Your grade is F"
    }
    
    gradeEle.innerHTML= text;
    gradeEle.style.display= "block"
  }

