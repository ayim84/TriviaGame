$(document).ready(function()
{
    var intervalID;
    var questionNumber = -1;
    var timer = 10;

    var questionArray = 
    [
        {
            question: "How many seasons of Seinfeld are there?", 
            options: [6, 7, 8, 9, 10],
            answer: 9
        },
        {
            question: "What is Jerry's Apartment #?",
            options: ["5A", "5B", "5C", "6A", "6B"],
            answer: "5A"
        },
        {
            question: "What is George's Middle Name?",
            options: ["Michael", "Frank", "Lewis", "Jerry", "Matthew"],
            answer: "Lewis"
        },
        {
            question: "Where is Elaine from?",
            options: ["New York", "Maryland", "Rhode Island", "Illinois", "California"],
            answer: "Maryland"
        },
        {
            question: "What is Kramer's first name?",
            options: ["Larry", "David", "Ezekiel", "Ringo", "Cosmo"],
            answer: "Cosmo"
        },
        {
            question: "Where do Jerry's parents live?",
            options: ["Florida", "California", "New York", "Texas", "Virginia"],
            answer: "Florida"
        },
        {
            question: "What's is George's ATM card password?",
            options: ["Rizzuto", "Frogger", "Bosco", "Susan", "Yankees"],
            answer: "Bosco"
        },
        {
            question: "What is Elaine's Father's occupation?",
            options: ["Football Coach", "Real Estate Agent", "Author", "Teacher", "Unknown"],
            answer: "Author"
        },
        {
            question: "What famous sitcom did Kramer appear in?",
            options: ["Murphy Brown", "Cheers", "The Fresh Prince of Bel-Air", "Roseanne", "Full House"],
            answer: "Murphy Brown"
        }
    ];

    function newQuestion()
    {   
        questionNumber++;
        
        if((questionNumber + 1) > questionArray.length)
        {
            alert("That's all the questions for now.  Thanks for playing!");
        }

        timer = 10;
    
        $(".question").text(questionArray[questionNumber].question);

        $(".answer").html("");

        $(".timeRemaining").text("Time Remaining: " + timer);
        
        for(var i = 0; i < 5; i++)
        {
            var newP = $("<p>");
            
            newP.text(questionArray[questionNumber].options[i]);
    
            $(".answer").append(newP);
    
            if(questionArray[questionNumber].options[i] == questionArray[questionNumber].answer)
            {
                $(newP).addClass("correct");
            }
            else
            {
                $(newP).addClass("incorrect");
            }
        }

    }

    function questionTimer()
    {
        timer--;
        $(".timeRemaining").text("Time Remaining: " + timer);

        if(timer == 0)
        {
            clearInterval(intervalID);
            setTimeout(function (){
                alert("Time's Up! " + 'The correct answer is "' + questionArray[questionNumber].answer + '" Click OK for next question.');
                newQuestion();
                checkAnswer();
            },250);
            
        }
    }

    function checkAnswer()
    {
        intervalID = setInterval(questionTimer, 1000);
    
        $(".correct").on("click", function(){
            clearInterval(intervalID);
            setTimeout(function (){
                alert('Correct! Click "OK" for next question.');
                newQuestion();
                checkAnswer();
            },250);
        });
    
        $(".incorrect").on("click", function(){
            clearInterval(intervalID);
            setTimeout(function (){
                alert("Incorrect. " + 'The correct answer is "' + questionArray[questionNumber].answer + '" Click OK for next question.');
                newQuestion();
                checkAnswer();
            },250);
        });
    }
    
    alert("Welcome to Seinfeld Trivia! Click OK to get started!");
    newQuestion();  
    checkAnswer();    
});