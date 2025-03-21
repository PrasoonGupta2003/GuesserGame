let btn = document.querySelector("button");
let restartBtn = document.querySelector("#restart");
let numberOfGuess = 0;
let bestScore = 0;
let maxNum = 0;
let clicked = false;
let random;

btn.addEventListener("click", function () {
    maxNum = parseInt(document.querySelector("input").value);

    if (isNaN(maxNum) || maxNum <= 0) {
        alert("Please enter a valid number greater than 0.");
        return;
    }

    random = Math.floor(Math.random() * maxNum) + 1; // Generate new random number
    document.querySelector("input").value = "";
    document.querySelector("label").innerHTML = "<b>Guess a Number</b>";

    numberOfGuess = 0; // Reset guess count for new game
    clicked = true;
    btn.remove();
    document.querySelector("input").placeholder="Guess Number In Range!"
});

document.querySelector("input").addEventListener("keypress", function (e) {
    if (e.key === "Enter" && clicked) {
        let guess = parseInt(document.querySelector("input").value);
        let h2 = document.querySelector("h2");

        if (isNaN(guess)) {
            h2.innerHTML = "<b>Enter a valid number!</b>";
            document.querySelector("input").value = ""; // Clear input
            return;
        }

        numberOfGuess++;

        if (guess === random) {
            if (bestScore === 0 || numberOfGuess < bestScore) {
                bestScore = numberOfGuess; // Update best score before displaying message
            }

            h2.innerHTML = `<b>Correct Guess!</b> <br> Your Score: ${numberOfGuess} <br> Best Score: ${bestScore}`;
            
            numberOfGuess = 0; // Reset for next round
        } else if (guess < random) {
            h2.innerHTML = `<b>Guess a bigger number, Try again!</b>`;
        } else {
            h2.innerHTML = `<b>Guess a smaller number, Try again!</b>`;
        }

        document.querySelector("input").value = ""; // Clear input after guessing
    }
});
// Restart button functionality
restartBtn.addEventListener("click", function () {
    numberOfGuess = 0;
    clicked = false;
    document.querySelector("input").value = "";
    document.querySelector("h2").innerHTML = "";
    document.querySelector("label").innerHTML = "<b>Enter a max number and start a new game</b>";
});




