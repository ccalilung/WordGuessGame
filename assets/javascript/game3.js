$("#startGame").on("click", function () {
    start();
    chooseWord();
    resetCheckVariables();
    startedGame();
    $(".instructionsText").html("");
    var newButton = $("<button>");
    newButton.addClass("btn btn-success");
    newButton.attr('id', 'showInstructions').text("Show Instructions");
    $("#reReadInstructions").append(newButton);
    $("#startGame").remove();
    readInstructions();
});

// $("#hideInstructions").on("click",function() {
//     $(".instructionsText").html("");
//     // $("#hideInstructions").remove();
// });

function readInstructions() {
    $("#showInstructions").on("click", function () {
        alert("The game is hangman. Type any letter to guess a letter. Correct guesses will result in the letter appearing in its proper place in the word. Correct guesses do not count against the \"Guesses Left.\" Incorrect guesses will appear below the hidden word. These will reduce the number of guesses you have left. If you correctly guess the letters of the word without running out of guesses, you win the round and it is recorded. Conversely, if you run out of guesses before guessing the word correctly, you lose the round and it is recorded. In both these cases, the game resets and a new word appears. The game ends once you've run out of words to guess.")
    })
    $("#notes").html("Notes:<br>1) Capitalization is not important.<br>2) Spacing <u>may</u> be important.<br>");}



// Define Variables and Arrays - only at the very beginning
words = ["Honda", "Acura", "Mercedes Benz", "Aston Martin", "Jaguar", "Chevrolet", "Ford", "Nissan", "Toyota"];
keysDontCount = ["Backspace", "Shift", "Meta", "Control", "Alt", "ContextMenu", "CapsLock", "Tab", "Home", "PageUp", "PageDown", "End", "Delete", "Clear", "Enter", "ArrowUp", "ArrowLeft", "ArrowRight", "ArrowDown"]
wins = 0;
correctWord = [];
losses = 0;
incorrectWord = [];


// Variables that need to be reset after each word
function start() {
    extractedWord = [];
    splitWord = [];
    blankDashes = [];
    correctLetters = [];
    wrongLetters = [];
    wrongLettersPrinted = [];
    correctGuessed = 0;
    wrongGuessed = 0;
    guessesLeft = 0;
    over = 0;
}

function startedGame() {
    var textCorrectWords = $("#correctWords");
    var textIncorrectWords = $("#incorrectWords");
    var textCorrectGuess = $("#text1");
    var textIncorrectGuess = $("#text2");
    var textGuesses = $("#text3");
    var textWin = $("#text4");
    var textLoss = $("#text5");
    var textWrongLetters = $("#text6");
    var textRightLetters = $("#text7");
    var textStartGame = $("#instructions");
    textCorrectWords.html("Words Guessed Correctly:");
    textIncorrectWords.html("Words Missed:");
    textCorrectGuess.html("Correct Guesses:");
    textIncorrectGuess.html("Incorrect Guesses:");
    textGuesses.html("Guesses Left:");
    textWin.html("Wins:");
    textLoss.html("Losses:");
    textStartGame.html("<h1>Hangman: Motors Edition<h1>").append("<hr>")
    textWrongLetters.html("Wrong Letters:")
    textRightLetters.html("The Word:")
    $("#wins").html(wins);
    $("#loss").html(losses);

}


function noF1() {
    // add the F1-F13 keys to the keysDontCount array
    for (i = 1; i < 14; i++) {
        keysDontCount.push("F" + i);
    }
}
noF1();

function resetCheckVariables() {
    // variables used to prevent duplicate letters from being added to array, check if upper case guess has a letter that is lower case, check if lower case guess has a letter that is upper case
    x = 0;
    y = 0;
    z = 0;
    up = 0;
    low = 0;
}

function chooseWord() {
    // if there are still words, pick random one, take it out of the array, split it into letters, and print dashes on the page for the appropriate # of blanks. otherwise print game is over and freeze all operations (wins, losses, letters guessed etc.) by assigning over = 1
    if (words.length > 0) {
        var randomNum = Math.floor(Math.random() * words.length);
        extractedWord = words.splice(randomNum, 1);
        splitWord = extractedWord[0].split("");
        guessesLeft = splitWord.length;
        for (i = 0; i < splitWord.length; i++) {
            blankDashes.push(" - ")
        }
        $("#alpha").html(blankDashes);
        $("#correctG").html(correctGuessed);
        $("#incorrectG").html(wrongGuessed);
        $("#guessLeft").html(guessesLeft);
        $("#wrong").html(wrongLettersPrinted)
    } else {
        over = 1;
        if (wins>losses) {
            $("#instructions").html("<h1>WINNER - YOU TOOK THE CHECKERED FLAG!<h1>").append("<hr>")
        } else if (losses>wins) {
            $("#instructions").html("<h1>LOSER - \"IF YOU AIN'T FIRST, YOU'RE LAST\" - RICKY BOBBY<h1>").append("<hr>")
        }
        
    }
};

function checkIfGuessed() {
    // don't push already guessed correct letters, nor count them again in the counters
    for (a = 0; a < correctLetters.length; a++) {
        if ((guessUp === correctLetters[a]) || (guessLow === correctLetters[a])) {
            x = 2;
        }
    }
    // don't push already guessed incorrect ltters, nor count them against the guesses remaining
    for (b = 0; b < wrongLetters.length; b++) {
        if (guess === wrongLetters[b]) {
            y = 2;
        }
    }
    // ignore the non-characters -- e.g. Shift, Alt, F12, etc.
    for (c = 0; c < keysDontCount.length; c++) {
        if (guess === keysDontCount[c]) {
            z = 2;
        }
    }
}

function correctGuess() {
    // if guess matches Upper Case
    if (up === 1) {
        // push into array of correct letters, replace the correct "-" with the guessed letter, refresh the board
        correctLetters.push(guessUp);
        blankDashes.splice(i, 1, guessUp);
        $("#alpha").html(blankDashes);

        // value check to prevent correct letter being pushed into wrongLetters array
        x = 1;

        // update correct guesses
        correctGuessed++;
        $("#correctG").html(correctGuessed);


    }
    // if guess matches lower case
    if (low === 1) {
        // push into array of correct letters, replace the correct "-" with the guessed letter, refresh the board
        correctLetters.push(guessLow);
        blankDashes.splice(i, 1, guessLow);
        $("#alpha").html(blankDashes);

        // value check to prevent correct letter being pushed into wrongLetters array
        x = 1;

        // update correct guesses
        correctGuessed++;
        $("#correctG").html(correctGuessed);

    }

};

function incorrectGuess() {
    // if statement to check against a correct letter---if correct letter OR already guessed, x != 0 so bypass this function; also bypass if the game is over (i.e. over !== 0)
    if ((x === 0) && (over === 0)) {
        // if x equals 0, push wrong letters into wrongLetters array, and refresh board with only lower case letters
        wrongLetters.push(guessUp);
        wrongLetters.push(guessLow);
        wrongLettersPrinted.push(guessLow)
        $("#wrong").html(wrongLettersPrinted + " ");

        // update wrong letter count and guesses left
        wrongGuessed++;
        guessesLeft--;
        $("#incorrectG").html(wrongGuessed);
        $("#guessLeft").html(guessesLeft);

    }
}

function gameCheck() {
    // if the correctLetters array is the same length of splitWord array, then the person has guessed the word correctly. Mark a win, push the word into Correct Words array, print, then reset the game. If the game is over (i.e. over !==0), then stop this function.
    if ((correctLetters.length === splitWord.length) && (over === 0)) {
        wins++
        $("#wins").html(wins);
        var one1 = splitWord.join("");
        correctWord.push(one1);
        $("#correctWords").html("Words Correctly Guessed:" + " " + correctWord);
        reset();
    }
    // if the guessesLeft variable equals 0, the person has run out of guesses and s/he loses. Mark a loss, push word into incorrectWord, print, then reset game. If game is over, do not run function. 
    else if ((guessesLeft === 0) && (over === 0)) {
        losses++;
        $("#loss").html(losses);
        var two2 = splitWord.join("");
        incorrectWord.push(two2);
        $("#incorrectWords").html("Words Missed:" + " " + incorrectWord);
        reset();
    }
}

function reset() {
    // Reset all variables, arrays, etc.
    start();
    resetCheckVariables();
    chooseWord();
}

// When keyboard key is lifted up...

document.onkeyup = function (event) {
    guess = event.key;
    guessUp = guess.toUpperCase();
    guessLow = guess.toLowerCase();
    checkIfGuessed();
    if ((x !== 2) && (y !== 2) && (z !== 2)) {
        for (i = 0; i < splitWord.length; i++) {
            up = 0;
            low = 0;
            if (guessUp === splitWord[i]) {
                up = 1;
                correctGuess();
            } else if (guessLow === splitWord[i]) {
                low = 1;
                correctGuess();
            }
        }
        incorrectGuess();

    }
    gameCheck();
    resetCheckVariables();
}