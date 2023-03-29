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
function change() {
 home.style.backgroundColor="#e50e1d36"
}
function rever() {
  home.style.backgroundColor="#0000008e"
}