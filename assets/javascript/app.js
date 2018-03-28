// answers for the quiz

//function that will give us the correct answers
function answers() {
    var total = 9;
    var score = 0;
    var solutions = ["a", "c", "d", "a", "b", "d", "d", "d", "c"]

    // the answers chosen
    var q1 = document.forms["triviaQs"]["q1"].value;
    var q2 = document.forms["triviaQs"]["q2"].value;
    var q3 = document.forms["triviaQs"]["q3"].value;
    var q4 = document.forms["triviaQs"]["q4"].value;
    var q5 = document.forms["triviaQs"]["q5"].value;
    var q6 = document.forms["triviaQs"]["q6"].value;
    var q7 = document.forms["triviaQs"]["q7"].value;
    var q8 = document.forms["triviaQs"]["q8"].value;
    var q9 = document.forms["triviaQs"]["q9"].value;

    //this is going to keep track if the input is right or wrong
   for (i = 2; i <= total; i++) {
       if (eval('q'+ i) == null || eval('q'+i) == '') {
           score++;
       }
   }


}

