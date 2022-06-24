//var random1 = Math.floor(Math.random()*10) +1;
//alert(random1);
//if(random1<5){
//  document.querySelector("h1").innerHTML="nikhil";
//}
//else {
//  document.querySelector("h1").innerHTML="I'm Nikhil";
//}
//time--------------------------------------------------------------------------
function refreshTime() {
  const timeDisplay = document.getElementById("time");
  const dateString = new Date().toLocaleString();
  const formattedString = dateString.replace(", ", " - ");
  timeDisplay.textContent = formattedString;
}
setInterval(refreshTime, 1000);
//time------------------------------------------------------------------------
var image1 = document.querySelector(".cloud1");
var currentPos1 = 0;
var images1 = ["images/cloud.png", "thunder.png", "images/cloud.png"]
//thunder1 image---------------------------------------------------------------
function thunder1() {
  if (++currentPos1 >= images1.length)
    currentPos1 = 0;

  image1.src = images1[currentPos1];
}

setInterval(thunder1, 3000);
//thunder2image----------------------------------------------------
var image = document.querySelector(".cloud2");
var currentPos = 0;
var images = ["images/cloud.png", "thunder.png", "images/cloud.png"]

function thunder2() {
  if (++currentPos >= images.length)
    currentPos = 0;

  image.src = images[currentPos];
}

setInterval(thunder2, 3000);
//thunder sound--------------------------------------------------------------
function thundersound(){
  var audio = new Audio("thunder sound.mp3");
  audio.play();
}
setInterval(thundersound, 15000);
