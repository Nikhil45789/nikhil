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

setInterval(thunder1, 1500);
//thunder2image----------------------------------------------------
var image = document.querySelector(".cloud2");
var currentPos = 0;
var images = ["images/cloud.png", "thunder.png", "images/cloud.png"]

function thunder2() {
  if (++currentPos >= images.length)
    currentPos = 0;

  image.src = images[currentPos];
}

setInterval(thunder2, 1500);
//thunder sound-----------------disabled--to enable crt sound-------------------------------------------
function thundersound(){
  var audio = new Audio("thunder s ound.mp3");
  audio.play();
}
setInterval(thundersound, 15000);
//contact button allert-------------------------------------------------------------------
const button=document.querySelector(".button")
button.addEventListener('click', contactallert);
function contactallert(){
  alert("Thank you for contacting me");
}
//typing--------------------------------------
function typing(){
  var typed= new Typed(".typing",{
    strings:["Programmer","Coder","Web Developer","Designer"],
    typeSpeed:100,
    loop:true,
    backSpeed:60,
    loopCount: 5000
  });

}
typing();

//up butto----------------------------------------------------------------
var upbtn = $('#upbutton');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    upbtn.addClass('show');
  } else {
    upbtn.removeClass('show');
  }
});

upbtn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
