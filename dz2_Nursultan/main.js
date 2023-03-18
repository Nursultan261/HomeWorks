//1
function animation() {
  var $ = {
      radius  :     250,
      speed   :     20
  }
  var krug = document.querySelector('.circle');
  var f = 0;
  var s = 2 * Math.PI / 180;
  setInterval(function() {
      f += s;
      krug.style.left =  235 + $.radius * Math.sin(f)  + 'px';
      krug.style.top =   235 + $.radius * Math.cos(f) + 'px';
  }, $.speed)
  setTimeout(function (){
      clearInterval(interval);
  },5000)
}
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

