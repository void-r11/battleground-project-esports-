// Scroll to specific values
// scrollTo is the same
window.scroll({
  top: 2500, 
  left: 0, 
  behavior: 'smooth'
});



let playbtn = document.querySelector("#play")
let pausebtn = document.querySelector("#pause")


let reg =  document.querySelector("#get")
let home = document.querySelector("#home")

let bleep = new Audio();
  bleep.src = 'assets/sound1.wav';
 
let music = new Audio();
music.src = 'assets/2WEI - Survivor.mp3';

function feel(){
  music.play();

  playbtn.style.display="none";
  pausebtn.style.display="block";
}
function nofeel(){
  music.pause();

  pausebtn.style.display="none";
  playbtn.style.display="block";

}
// let lets_go = new Audio();
//   lets_go.src = 'assets/Lets go.mp3';

// function letsGo(){
//   lets_go.play()
// }