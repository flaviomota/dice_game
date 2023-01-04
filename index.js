// Image 1
let randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6

let randomDiceImage = 'dice' + randomNumber1 + '.png'; // dice1.png - dice6.png
let randomImageSource = 'images/' + randomDiceImage;  // images/dice1.png - images/dice6.png

let image1 = document.querySelectorAll('img')[0]; // Selects the first image
image1.setAttribute('src', randomImageSource); // Sets the first image to the random dice image


// Image 2
let randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1-6

let randomImageSource2 = 'images/dice' + randomNumber2 + '.png'; // images/dice1.png - images/dice6.png

document.querySelectorAll('img')[1].setAttribute('src', randomImageSource2); // Selects the second image and sets the second image to the random dice image

// If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
// If player 2 wins
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
// If draw
else {
  document.querySelector("h1").innerHTML = "Draw!";
}