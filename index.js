// Image 1
let randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6

let randomDiceImage = 'dice' + randomNumber1 + '.png'; // dice1.png - dice6.png
let randomImageSource = 'images/' + randomDiceImage;  // images/dice1.png - images/dice6.png

let image1 = document.querySelectorAll('img')[0]; // Selects the first image
image1.setAttribute('src', randomImageSource); // Sets the first image to the random dice image


// Image 2
let randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1-6

let randomDiceImage2 = 'dice' + randomNumber2 + '.png'; // dice1.png - dice6.png
let randomImageSource2 = 'images/' + randomDiceImage2; // images/dice1.png - images/dice6.png

let image2 = document.querySelectorAll('img')[1]; // Selects the second image
image2.setAttribute('src', randomImageSource2); // Sets the second image to the random dice image

