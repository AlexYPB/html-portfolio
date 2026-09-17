var randomNumber1 = Math.floor((Math.random() * 6)+1);
document.querySelector(".img1").src = "images/dice" + randomNumber1 + ".png";

var randomNumber2 = Math.floor((Math.random() * 6)+1);
document.querySelector(".img2").src = "images/dice" + randomNumber2 + ".png";

if (randomNumber1 > randomNumber2) {
    document.querySelector(".container h1").textContent = "Player 1 Wins! 🎾";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector(".container h1").textContent = "🎾 Player 2 Wins!";
} else {
    document.querySelector(".container h1").textContent = "🎾 Draw! 🎾";
}

