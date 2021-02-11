import { render } from "@testing-library/react";
import React, { Component } from "react";
import './index.css';

var lives = 8;
var cows = 0;
var bulls = 0;
var code = [];
var guess;

// JSX User Interface
class UI extends Component {
  render() {
    return (
      <div>
        <h1>4 Digits</h1>
        <br></br>
        <br></br>
        <h3>Enter 4 unique digits to guess the secret code.</h3>
        <h5>Bulls: number of digits correct in the right position</h5>
        <h5>Cows: number of digits correct but in the wrong position</h5>
        <br></br>
        <h1 id="gameOver"></h1>
        <br></br>
        <form>
          <input type="text" id="guess"></input>
        </form>
        <button onClick={check}>Check</button>
        <br></br>
        <br></br>
        <div id="counters">
          <div class="counterBox">
            <div>Cows:</div>
            <div id="cows">0</div>
          </div>
          <br></br>
          <div class="counterBox">
            <div>Bulls:</div>
            <div id="bulls">0</div>
          </div>
          <br></br>
          <div class="counterBox">
            <div>Lives:</div>
            <div id="lives">8</div>
          </div>
        </div>
        <br></br>
        <div id="guesses">
          <div id="1"></div>
          <div id="2"></div>
          <div id="3"></div>
          <div id="4"></div>
          <div id="5"></div>
          <div id="6"></div>
          <div id="7"></div>
          <div id="8"></div>
        </div>
        <br></br>
      </div>
    );
  }
}
export default UI;

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

// Check funciton runs when check button is clicked
function check() {
  bulls = 0;
  cows = 0;

  if(lives <= 0) {
    if (bulls == 4) {
      document.getElementById("gameOver").innerText = "You Win!";
    }
    
    if (lives == 0 && bulls != 4){
      document.getElementById("gameOver").innerText = "You Lose!";
    }
    return;
  }

  if (code.length == 0) {
    code = getCode();
  }

  // Get input entered by user
  guess = document.getElementById("guess").value;
  for (var i = 0; i < guess.length; i++) {}
  console.log("length: " + guess.length);

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

    document.getElementById("cows").innerText = cows;
    document.getElementById("bulls").innerText = bulls;
  }

  if (bulls == 4) {
    document.getElementById("gameOver").innerText = "You Win!";
  }

  lives--;
  document.getElementById("lives").innerText = lives;
}

function updateGuesses() {
  document.getElementById(8 - lives).innerText = "Guess " + (8 - lives) + ": " + guess + " Cows: " + cows + " Bulls: " + bulls;
}