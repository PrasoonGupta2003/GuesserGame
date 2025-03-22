let btn = document.querySelector("button");
let restartBtn = document.querySelector("#restart");
let input = document.querySelector("input");
let h2 = document.querySelector("h2");
let label = document.querySelector("label");
let container = document.querySelector(".input-container"); // Wrap input in a container

let numberOfGuess = 0;
let bestScore = 0;
let maxNum = 0;
let random;
let gameActive = false; // Track if the game is active

// Start the game after setting a max number
btn.addEventListener("click", function () {
    maxNum = parseInt(input.value);

    if (isNaN(maxNum) || maxNum <= 0) {
        alert("Please enter a valid number greater than 0.");
        return;
    }

    random = Math.floor(Math.random() * maxNum) + 1; // Generate a new random number
    input.value = "";
    input.placeholder = "Guess Number In Range!";
    label.innerHTML = "<b>Guess a Number</b>";

    numberOfGuess = 0; // Reset guess count for the new game
    gameActive = true;

    btn.style.display = "none"; // Hide start button
    input.disabled = false; // Enable input
});

// Handle number guessing logic
input.addEventListener("keypress", function (e) {
    if (e.key === "Enter" && gameActive) {
        let guess = parseInt(input.value);

        if (isNaN(guess)) {
            h2.innerHTML = "<b>Enter a valid number!</b>";
            input.value = ""; // Clear input
            return;
        }

        numberOfGuess++;

        if (guess === random) {
            if (bestScore === 0 || numberOfGuess < bestScore) {
                bestScore = numberOfGuess;
            }

            h2.innerHTML = `<b>🎉 Correct Guess!</b> <br> Your Score: ${numberOfGuess} <br> Best Score: ${bestScore}`;

            numberOfGuess = 0; // Reset for next round
            gameActive = false; // Stop guessing until a restart

            container.style.display = "none"; // Hide input field
        } else if (guess < random) {
            h2.innerHTML = `<b>⬆ Guess a bigger number, Try again!</b>`;
        } else {
            h2.innerHTML = `<b>⬇ Guess a smaller number, Try again!</b>`;
        }

        input.value = ""; // Clear input after guessing
    }
});

// Restart button functionality
restartBtn.addEventListener("click", function () {
    numberOfGuess = 0;
    gameActive = false;
    input.value = "";
    input.placeholder = "Enter a max number to start";
    input.disabled = false;

    h2.innerHTML = "";
    label.innerHTML = "<b>Enter max number to start a new game</b>";

    btn.style.display = "inline-block"; // Show start button again
    container.style.display = "block"; // Show input field again
});
