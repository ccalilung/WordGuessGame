var wLetters = ['A','a','B','b','C','c','D','d','F','f','G','g','I','i','J','j','K','k','L','l','N','n','P','p','Q','q','S','s','T','t','U','u','V','v','W','w','X','x','Y','y','Z','z'];
var wrongLetters = [];
var rLetters = ['H','h','O','o','M','m','E','e','R','r'];

var numWrong = 0;
var numGuess = 0;
var numRight = 0;




document.onkeyup = function (event) {
    var guess = event.key;
    
    
    for(i=0;i<rLetters.length;i++) {
       
        if  ((guess === 'h') || (guess === 'H')) {
            document.getElementById("alpha").innerHTML = "H";

            numRight++;
            document.getElementById("correctG").innerHTML = numRight;
            } 
        else if ((guess === 'o') || (guess === 'O')) {
            document.getElementById("bravo").innerHTML = "o"
            numRight = numRight + 1;            
            document.getElementById("correctG").innerHTML = numRight;
            } else if ((guess === 'm') || (guess === 'M')) {
                document.getElementById("charlie").innerHTML = "m"
            } else if ((guess === 'e') || (guess === 'E')) {
                document.getElementById("delta").innerHTML = "e"
            } else if ((guess === 'r') || (guess === 'R')) {
                document.getElementById("echo").innerHTML = "r"
        }
        else for (i=0;i<wLetters.length;i++) {
            if (wLetters[i] === guess) {
                wrongLetters.push(guess)
            } document.getElementById("wrong").innerHTML = wrongLetters;
        }
    }};



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

    
