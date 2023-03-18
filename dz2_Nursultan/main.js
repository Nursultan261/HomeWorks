//1
const circle = document.getElementById("circle");
const square = document.getElementById("идщсл");

let x = 0;
let y = 0;
let directionX = 1;
let directionY = 1;

function moveCircle() {
  x += 5 * directionX;
  y += 5 * directionY;

  if (x > 450 || x < 0) {
    directionX *= -1;
  }

  if (y > 450 || y < 0) {
    directionY *= -1;
  }

  circle.style.left = x + "px";
  circle.style.top = y + "px";
setTimeout(moveCircle, 50)
}

setTimeout(moveCircle, 50)

//2
const timer = document.getElementById("timer");
const countdown = document.getElementById("countdown");


let seconds = 60;

let sekunda = setInterval(function() {
  seconds--;

  countdown.textContent = seconds;

  if (seconds === 0) {
    timer.textContent = "Поздравляю прошло 1 минута";
    clearInterval(sekunda);
  }
}, 1000);

let audio = new Audio('Ice Cube-It Was A Good Day');
audio.play();
audio.pause(); 

