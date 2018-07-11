const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");

let player1Pos = 0;
let player2Pos = 0;


document.addEventListener('keypress', function(l) {
    player1Pos = player1Pos + 25;
    player1.setAttribute("style", "left: " + player1Pos + "px");
});
