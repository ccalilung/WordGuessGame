var letters = [];

document.onkeyup = function (event) {
    var guess = event.key;
    if ((guess === 'h') || (guess === 'H')) {
        document.getElementById("alpha").innerHTML = "H"
    }

    else if ((guess === 'o') || (guess === 'O')) {
        document.getElementById("bravo").innerHTML = "o"
    }

    else if ((guess === 'm') || (guess === 'M')) {
        document.getElementById("charlie").innerHTML = "m"
    }
    else if ((guess === 'e') || (guess === 'E')) {
        document.getElementById("delta").innerHTML = "e"
    }
    else if ((guess === 'r') || (guess === 'R')) {
        document.getElementById("echo").innerHTML = "r"
    }
    else {
        letters.push(guess);
        document.getElementById("wrong").innerHTML = letters;
        // console.log(letters);
    }};