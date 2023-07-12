//Getting an random number within the range from 1-6
const randomNum = () => {
  return Math.floor(Math.random() * 6) + 1;
}
//with the random number/ imgaes are selected
let randomNum1 = randomNum();
let movePlayer1 = "images/dice" + randomNum1 + ".png"; //dice1.png - dice6.png
let randomNum2 = randomNum();
let movePlayer2 = "images/dice" + randomNum2 + ".png"; //dice1.png - dice6.png

//accessing element to showcase the resulting Image
let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", movePlayer1);

document.querySelectorAll("img")[1].setAttribute("src", movePlayer2);

//Results
if (movePlayer1 > movePlayer2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (movePlayer1 <  movePlayer2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}






















