
  // main question ,answer and correct variable 
var questions = [{
        question: "What nationality was Marco Polo?",
        answers: {
            a: "Italian",
            b: "Germany",
            c: "Portuguese",
            d: "Canadian"
        },

        correct: "Italian"
    },

    {
        question: "What is capital city of Texas?",
        answers: {
            a: "NewYork",
            b: "Austin",
            c: "Dallas",
            d: "None"
        },

        correct: "Austin"
    },

    {
        question: "Where is the smallest bone in the body?",
        answers: {
            a: "Ear",
            b: "Nose",
            c: "Finger",
            d: "None"
        },

        correct: "Ear"
    },

    {
        question: "Which planet is nearest the sun? ",
        answers: {
            a: "Mercury",
            b: "Mars",
            c: "Earth",
            d: "Saturn"
        },

        correct: "Mercury"
    },

    {
        question: "What is capital city of Ethiopia?",
        answers: {
            a: "Harar",
            b: "AddisAbeba",
            c: "Gonder",
            d: "Axum"
        },

        correct: "AddisAbeba"
    },


    {
        question: "Which is the largest ocean?",
        answers: {
            a: "Atlantic Ocean",
            b: "Arctic Ocean",
            c: "Southern Ocean",
            d: "Pacific Ocean"
        },

        correct: "Arctic ocean"
    }

];

   // correctly ansewred variable
var correctAnswers = 0;
 // incorrect answer variable
var incorrectAnswer = 0;
// unanswered variable
var unAnswered = 0;
var intervalId;
 // numbers that count to finish quiz
var count = 40;

    // Execute this code when the DOM has fully loaded.

$(document).ready(function() {



     // function to start game by press start button
    $("#start").on("click", function() {

        $("#start").hide();
        $("#quiz").show();
        $("#done").show();
        $("#result").hide();

        // fuction to set 1 second to count numbers
        function run() {
            intervalId = setInterval(decrement, 1000);
        }

        //  The decrement function.
        function decrement() {

            //  Decrease number by one.
            count--;

            //  Show the number in the #show-number tag.
            $("#timer").html("<h2>" + "Time Remaining: " + count + " seconds" + "</h2>");


            //  Once number hits zero...
            if (count === 0) {

                


                // once the noumber is 0 hide and show the function
                $("#timer").hide();
                $("#quiz").hide();
                $("#done").hide();
                $("#result").show();

                // Second option to stop the quiz and calculate the result
                for (var i = 0; i < questions.length; i++) {

                    if (selectedAnswers[i] === questions[i].correct) {
                        correctAnswers++;

                    } else if (selectedAnswers[i] === "K") {

                        unAnswered++;

                    } else {
                        incorrectAnswer++;

                    }
                }

            }


                 // once the number is 0 display result
            $("#result").html("<h2>" + "Correct answers " + correctAnswers + "</h2>");
            $("#result").append("<h2>" + "Wrong answers " + incorrectAnswer + "</h2>");
            $("#result").append("<h2>" + "Unanswered " + unAnswered + "</h2>");

        }
       // run function of timer
        run();
       
          // for loop to Display all questions
        for (var i = 0; i < questions.length; i++) {
            $("#quiz").append("<div>" + questions[i].question + "</div>");
              // for loop to Display all answers
            for (key in questions[i].answers) {
                // Display the answer key with radio button
                if (questions[i].answers.hasOwnProperty(key)) {

                    $("#quiz").append("<input type='radio' class='selections' name=" + i + " " + "value=" + questions[i].answers[key] + ">" + questions[i].answers[key]);

                }

            }
        }

         // collecting the user answers and we used "k"  to start from something instead of 0 when they select one anser k will change by the value of cliced answer
             
        var selectedAnswers = ["K", "K", "K", "K", "K", "K"];
          // function to gate clicked answers value 

        $("body").on('click', '.selections', function() {

           selectedAnswers[$(this).attr('name')] = $(this).attr('value');
        });

           // submit/done function 

        $("#done").on("click", function() {
            for (var i = 0; i < questions.length; i++) {
                  // check the selected answer and the correct answer

                if (selectedAnswers[i] === questions[i].correct) {
                  // if they pic the correct answer and 1 to their result
                    correctAnswers++;
                   // if the user is not select any of the choice count the number of "k"
                } else if (selectedAnswers[i] === "K") {
                  // count the rest of unchanged number of "k" this is to show number of un unanswered question
                    unAnswered++;

                } else {
                    // count the number of incorect answers if it is not equal to the correct answer or "k" add by 1 
                    incorrectAnswer++;

                }

            }
              // hide the timer,questions and done button when they press done button and Display the result

            $("#timer").hide();
            $("#quiz").hide();
            $("#done").hide();
            $("#result").show();
                 
                 // Display the result in demo when they press done
            $("#result").html("<h2>" + "Correct answers " + correctAnswers + "</h2>");
            $("#result").append("<h2>" + "Wrong answers " + incorrectAnswer + "</h2>");
            $("#result").append("<h2>" + "Unanswered " + unAnswered + "</h2>");


        });


    });



}); 