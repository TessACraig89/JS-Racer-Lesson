const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");

let player1Pos = 0;
let player2Pos = 0;
let finishLinePos = window.screen.width - 100;

// set finishLine styled position to match the finishLinePos
document.getElementById('finishLine').setAttribute("style", "left: " + finishLinePos + "px");
//

// target.addEventListener(type, listener[, options]);
document.addEventListener('keypress', (event) => {
  if (event.key === "l") {
    player1Pos = player1Pos + 25;
    player1.setAttribute("style", "left: " + player1Pos + "px");
  } else if (event.key === "k") {
    player2Pos = player2Pos + 25;
    player2.setAttribute("style", "left: " + player2Pos + "px");
  }
});
