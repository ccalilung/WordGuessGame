var wLetters1 = ['A', 'a', 'B', 'b', 'C', 'c', 'D', 'd', 'F', 'f', 'G', 'g', 'I', 'i', 'J', 'j', 'K', 'k', 'L', 'l', 'N', 'n', 'P', 'p', 'Q', 'q', 'S', 's', 'T', 't', 'U', 'u', 'V', 'v', 'W', 'w', 'X', 'x', 'Y', 'y', 'Z', 'z'];
var wrongLetters1 = [];
var rightLetters1 = [];
var duplicates1 = [];
var rLetters1 = ['H', 'h', 'O', 'o', 'M', 'm', 'E', 'e', 'R', 'r'];

var numWrong1 = 0;
var numGuess1 = 7;
var numRight1 = 0;
var wins = 0;
document.getElementById("correctG").innerHTML = numRight1;
document.getElementById("incorrectG").innerHTML = numWrong1;
document.getElementById("guessLeft").innerHTML = numGuess1;
document.getElementById("wins").innerHTML = wins;




document.onkeyup = function (event) {
    var guess = event.key;
    guess.toLowerCase();

    if ((guess === 'h') || (guess === 'H')) {
        document.getElementById("alpha").innerHTML = "H";
        if (rightLetters1.length === 5) {
            wins++;
            document.getElementById("wins").innerHTML = wins;
        } else {rightLetters1.push(guess);}
        numRight1++
        document.getElementById("correctG").innerHTML = numRight1;
    } else if ((guess === 'o') || (guess === 'O')) {
        document.getElementById("bravo").innerHTML = "o"
        if (rightLetters1.length === 5) {
            wins++;
            document.getElementById("wins").innerHTML = wins;
        } else {rightLetters1.push(guess);}
        numRight1++;
        document.getElementById("correctG").innerHTML = numRight1;
    } else if ((guess === 'm') || (guess === 'M')) {
        document.getElementById("charlie").innerHTML = "m"
        if (rightLetters1.length === 5) {
            wins++;
            document.getElementById("wins").innerHTML = wins;
        } else {rightLetters1.push(guess);}
        numRight1++
        document.getElementById("correctG").innerHTML = numRight1;
    } else if ((guess === 'e') || (guess === 'E')) {
        document.getElementById("delta").innerHTML = "e"
        if (rightLetters1.length === 5) {
            wins++;
            document.getElementById("wins").innerHTML = wins;
        } else {rightLetters1.push(guess);}
        numRight1++
        document.getElementById("correctG").innerHTML = numRight1;
    } else if ((guess === 'r') || (guess === 'R')) {
        document.getElementById("echo").innerHTML = "r"
        if (rightLetters1.length === 5) {
            wins++;
            document.getElementById("wins").innerHTML = wins;
        } else {rightLetters1.push(guess);}
        numRight1++
        document.getElementById("correctG").innerHTML = numRight1;
    } else
        for (i = 0; i < wLetters1.length; i++) {
            if (wLetters1[i] === guess) {
                numWrong1++;
                document.getElementById("incorrectG").innerHTML = numWrong1;
                numGuess1--;
                document.getElementById("guessLeft").innerHTML = numGuess1;
                wrongLetters1.push(guess);
                wLetters1.splice(i, 1);
            }
            document.getElementById("wrong").innerHTML = wrongLetters1;

        }
};


// document.getElementById("correctG").innerHTML = emptySet.length;



// if ((guess === 'h') || (guess === 'H')) {
//     document.getElementById("alpha").innerHTML = "H"
// } else if ((guess === 'o') || (guess === 'O')) {
//     document.getElementById("bravo").innerHTML = "o"
// } else if ((guess === 'm') || (guess === 'M')) {
//     document.getElementById("charlie").innerHTML = "m"
// } else if ((guess === 'e') || (guess === 'E')) {
//     document.getElementById("delta").innerHTML = "e"
// } else if ((guess === 'r') || (guess === 'R')) {
//     document.getElementById("echo").innerHTML = "r"}
// } else if ((guess === 'a') || (guess === 'b') || (guess === 'c') || (guess === 'd') || (guess === 'f') || (guess === 'g') || (guess === 'i') || (guess === 'j') || (guess === 'k') || (guess === 'l') || (guess === 'n') || (guess === 'p') || (guess === 'q') || (guess === 's') || (guess === 't') || (guess === 'u') || (guess === 'v') || (guess === 'w') || (guess === 'x') || (guess === 'y') || (guess === 'z') || (guess === 'Shift') && (guess === 'a') || (guess === 'B') || (guess === 'C') || (guess === 'D') || (guess === 'F') || (guess === 'G') || (guess === 'I') || (guess === 'J') || (guess === 'K') || (guess === 'L') || (guess === 'N') || (guess === 'P') || (guess === 'Q') || (guess === 'S') || (guess === 'T') || (guess === 'U') || (guess === 'V') || (guess === 'W') || (guess === 'X') || (guess === 'Y') || (guess === 'Z')) {
//     letters.push(guess);
//     document.getElementById("wrong").innerHTML = letters;
// } else if ((guess === 'A') || guess === )
//     letters.push(guess);
//     // console.log(letters);