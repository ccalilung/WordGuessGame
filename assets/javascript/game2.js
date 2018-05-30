words = ["Dallas Cowboys","Tom Brady Sucks","Homer Simpson", "Peter Griffin"]
chosenWord = [];
dashes = [];
displayChosenWord = [];
correctLetters = [];
wrongLetters = [];
lettersLeft = 0;
wins = 0;
losses = 0;
correctNum = 0;
lCount = 0;
x = 0;
y = 0;
a = 0;

function splitWord() {
    randomNum = Math.floor(Math.random() * words.length)
    chosenWord.push(words[randomNum]);
    chosenWord = chosenWord[0].split("");
    for (i=0;i<chosenWord.length;i++) {
        dashes.push(" - ");
    }
    $("#alpha").html(dashes);
    words.splice([randomNum],1);
};

function correctGuess() {
    // replace dashes with correct letter
    dashes.splice(i,1,guess);
    $("#alpha").html(dashes);

    
    for (k=0;k<correctLetters.length;k++) {
        if (guess !== correctLetters[k]) {
            a++
        } 
    }
    if (a > 0) {
        correctLetters.push(guess)
    }

   
    
    x++;

}

function noDuplicates() {
    for (j=0;j<wrongLetters.length;j++) {
        if (guess === wrongLetters[j]) {
            y++
        }
    }
}

function incorrectLetter() {
    // check if letter already in wrongLetters array
        if ((x === 0) && (y === 0)) {
            wrongLetters.push(guess," ");
        }  
        $("#wrong").html(wrongLetters);
        
    }

function counters() {
    // Correct Letter
    correctNum += x
    $("#correctG").html(correctNum)


    x = 0;
    y = 0;
    lCount = 0;
}


splitWord();

document.onkeyup = function (event) {
    guess = event.key;

    for (i=0;i<chosenWord.length;i++) {
        if (guess === chosenWord[i]) {
            lCount++;
            correctGuess();
        } else {noDuplicates();}
    }   incorrectLetter();
    counters();
}