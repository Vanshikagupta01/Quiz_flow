// highScore.js

// Function to print the highscores
function printHighscores() {
    // Retrieve scores from localStorage
    let highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

    // Sort the scores in descending order
    highscores.sort(function (a, b) {
        return b.score - a.score;
    });

    // Clear previous scores in the list
    let olEl = document.getElementById("highscores");
    olEl.innerHTML = "";  // Clears the existing list

    // Add each score to the list
    highscores.forEach(function (score) {
        let liTag = document.createElement("li");
        liTag.textContent = score.name + " - " + score.score;
        olEl.appendChild(liTag);
    });
}

// Function to clear the highscores from localStorage
function clearHighscores() {
    // Remove highscores from localStorage
    window.localStorage.removeItem("highscores");

    // Clear the displayed list on the page
    let olEl = document.getElementById("highscores");
    olEl.innerHTML = "";

    console.log("Highscores cleared!"); // Debugging log
}

// Wait for DOM content to load before running the script
document.addEventListener("DOMContentLoaded", function() {
    // Add event listener to the 'view-high-scores' button
    let scoresBtn = document.querySelector("#view-high-scores");
    if (scoresBtn) {
        scoresBtn.addEventListener("click", printHighscores);
    }

    // Add event listener to the 'clear' button
    let clearBtn = document.getElementById("clear");
    if (clearBtn) {
        clearBtn.addEventListener("click", clearHighscores);
    } else {
        console.error("Clear button not found!");
    }

    // Print highscores on page load if any exist
    printHighscores();
});
