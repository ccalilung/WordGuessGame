// Functions!
function winLoss() {
   if ((correctG === 0) && (incorrectG !== 0)) {
       wins++
        $("#wins").html(wins)
        reset();
   } else if (incorrectG === 0) {
       loss++;
    $("#loss").html(loss)
   }
};

function count() {
    for (i=0;i<splitWords.length;i++) {
        theWord.push(" - ")
        $("#alpha").html(theWord);
        if (wins > 0 || loss > 0) {
            theGame();
        }
    }
};

function correctGuess() {
    // Update the HTML Display
    theWord.splice(i,1,splitWords[i]);
    noCommas = theWord.join("");
    $("#alpha").html(noCommas);

    // Push correct letters into array used to calculate Guesses left -- toss any duplicates
    for (m=0;m<correctLetters.length;m++) {
        if (guess === correctLetters[m]) {
            correctLetters.splice(m,1);
        }
    }
    correctLetters.push(splitWords[i]);
    
    // For words with multiple instances of same letter, push duplicate(s) in
    y++
    if (y>1) {
        var a = y-1
        for (k=0;k<a;k++) {
        correctLetters.push(guess)
        }
    }

};

function noDuplicateKeystrokes() {
    // Check if wrong letter has already been guessed; if so, assign variable 'x' non-zero value to be called later
    for (j=0;j<wrongLetters.length;j++) {
        if (guess === wrongLetters[j]) {
            x = 1;
        }
    }
};

function incorrectGuess () {
    // Push unique, wrong letters into array; y > 0 indicates letter was correct; x > 0 indicates wrong letter already guessed
    if ((y === 0) && (x === 0)) {
        wrongLetters.push(guess," ");
        $("#wrong").html(wrongLetters);
        incorrectG--
        $("#incorrectG").html(incorrectG)
        if (incorrectG === 0) {
            reset();
        }
    }
};

function printWord() {
    randomNumber = Math.floor(Math.random() * 6);
    splitWords = words[randomNumber].split("");
    words.splice(randomNumber,1);

};

function reset() {
    // Reset Letter Counts and Arrays
    correctLetters = [];
    theWord = [];
    splitWords = [];
    wrongLetters = [];
    correctG = splitWords.length - correctLetters.length;
    incorrectG = splitWords.length + 5;
    // Print them
    $("#wrong").html(wrongLetters);
    $("correctG").html(correctG);
    $("incorrectG").html(incorrectG);

    // Setup new word
    randomNumber = Math.floor(Math.random() * words.length);
    splitWords = words[randomNumber].split("");
    words.splice(randomNumber,1);
    count();

};



function correctCounter() {
    correctG = splitWords.length - correctLetters.length
    $("#correctG").html(correctG);
}

// variables
var words = ["homer","marge","peter","stewie","Dallas Cowboys","Tom Brady Sucks"]
var theWord = [];
var wrongLetters = [];
var correctLetters = [];
var loss = 0;
var wins = 0;


printWord();
count();

var correctG = splitWords.length - correctLetters.length;
$("#correctG").html(correctG);
var incorrectG = splitWords.length + 5;
$("#incorrectG").html(incorrectG);
$("#wins").html(wins);
$("#loss").html(loss);

function theGame() {
document.onkeyup = function (event) {
    guess = event.key;
    y = 0;
    x = 0;
    for (i=0;i<splitWords.length;i++) {
        var index = [];
        index.push[i];
        if ((guess === splitWords[i])) {
            correctGuess();
            correctCounter();
        } else {noDuplicateKeystrokes ();}
    }   
        incorrectGuess();
        winLoss(); 
}};
    
theGame();
    
   
        