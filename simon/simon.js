var gamePattern = [];
var userClickedPattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];

var level = 0;
var gameStarted = false;




// program picks random color to be next in the sequence
function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber]; // picks random color of 4
    gamePattern.push(randomChosenColor); // adds random color to array that stores order
    animatePress(randomChosenColor);

    var colorAudio = new Audio("./sounds/"+randomChosenColor+".mp3");
    colorAudio.play();

    if (gameStarted === true) {
        level++;
        $("#level-title").html("Level " + level);
    } else {
        $("#level-title").html("Level " + level);
        gameStarted = true;
    }
    
}

function animatePress(currentColor) {
    $("#"+currentColor).addClass("pressed");
    
    setTimeout(function () {
        $("#"+currentColor).removeClass("pressed");
    }, 100);
}

// check if color is correct to move up in level
function checkIfClickIsCorrect() {
    var currentIndex = userClickedPattern.length - 1;

    if (gamePattern[currentIndex] !== userClickedPattern[currentIndex]) {
   
        var wrongAudio = new Audio("./sounds/wrong.mp3");
        wrongAudio.play();


        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        $("#level-title").html("Game Over, Press Any Key to Restart");

        endGame(); // ENDS THE GAME ----------------------------------------------------------------------------------------------
        return;
    }

    if (gamePattern.length === userClickedPattern.length) {
        
        setTimeout(function () {
            nextSequence();
        }, 1000);

        userClickedPattern = [];
    }
}



function endGame() {
    gameStarted = false;
    userClickedPattern = [];
    gamePattern = [];
    level = 0;
}






// response to clicking one of the colors
$(".btn").click(function () {

    if (gameStarted === false) {
        return;
    }
    
    animatePress(this.id);

    var colorAudio = new Audio("./sounds/"+this.id+".mp3");
    colorAudio.play();



    // saves the user's click pattern in an array
    var userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);
    checkIfClickIsCorrect();
    

});

// listen for any key press in the program window to start game 


$(document).keydown(function(event) {
    if (gameStarted === false) {
        nextSequence();
    }
})