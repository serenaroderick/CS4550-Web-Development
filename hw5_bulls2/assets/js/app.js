import "../css/app.scss";
 
// webpack automatically bundles all modules in your
// entry points. Those entry points can be configured
// in "webpack.config.js".
//
// Import deps with the dep name or local files with a relative path, for example:
//
//     import {Socket} from "phoenix"
//     import socket from "./socket"
//
import "phoenix_html";
 
var lives = 8;
var cows = 0;
var bulls = 0;
var code = [];
var guess;
 
// Check funciton runs when check button is clicked
document.addEventListener('onload', loaded())

function loaded() {
    var button = document.querySelector('#check');
    console.log(button.innerText);
    button.onclick = check;

}
   
function check() {
  console.log("click");
  bulls = 0;
  cows = 0;
 
  if (lives <= 0) {
    if (bulls == 4) {
        document.querySelector('#gameOver').innerText = "You Win!";
    }
 
    if (lives == 0 && bulls != 4) {
        document.querySelector('#gameOver').innerText = "You Lose!";
    }
    return;
  }
 
  if (code.length == 0) {
    code = getCode();
  }
 
  // Get input entered by user
  guess = document.querySelector('#guess').value;
 
  // Check if input has length of 4
  if (guess.length != 4) {
    alert("Input length must be 4 but was " + guess.length);
  } else {
    var inArr = [
      guess.charAt(0),
      guess.charAt(1),
      guess.charAt(2),
      guess.charAt(3),
    ];
 
    // Throws error if there are duplicates in the user's input
    if (noDupes(inArr).length < 4) {
      console.log("w/o dupes length: " + noDupes(inArr).length);
      alert("Input must contain 4 unique digits from 0-9");
    }
 
    updateCounts();
    updateGuesses();
  }
}
 
// Create unique four digit code
function getCode() {
    while (code.length < 4) {
      var num = Math.floor(Math.random() * 10);
      code.push(num);
      code = noDupes(code);
    }
  
    // Log code array to the console
    for (var i = 0; i < code.length; i++) {
      console.log(code[i]);
    }
    return code;
}
 
//Returns a copy of the input with any duplicates removed
function noDupes(arr) {
  var i,
    len = arr.length,
    out = [],
    obj = {};
 
  for (i = 0; i < len; i++) {
    obj[arr[i]] = 0;
  }
  for (i in obj) {
    out.push(i);
  }
  return out;
}
 
// Updates the counts for lives, cows, and bulls
function updateCounts() {
  for (var i = 0; i < 4; i++) {
    if (code[i] == guess[i]) {
      bulls++;
    }
    if (code.includes(guess[i])) {
      cows++;
    }
 
    document.querySelector('#cows').innerText = cows;
    document.querySelector('#bulls').innerText = bulls;
  }
 
  if (bulls == 4) {
    document.querySelector('#gameOver').innerText = "You Win!";
  }
 
  lives--;
  document.querySelector('#lives').innerText = lives;
}
 
function updateGuesses() {
    var lives = document.querySelector('#lives').innerText;
    var livesInt = Number.parseInt(lives);
    document.querySelector('#lives').innerText = 8 - livesInt;
    "Guess " +
    (8 - lives) +
    ": " +
    guess +
    " Cows: " +
    cows +
    " Bulls: " +
    bulls;
}
 

