//var random1 = Math.floor(Math.random()*10) +1;
//alert(random1);
//if(random1<5){
//  document.querySelector("h1").innerHTML="nikhil";
//}
//else {
//  document.querySelector("h1").innerHTML="I'm Nikhil";
//}
function refreshTime() {
  const timeDisplay = document.getElementById("time");
  const dateString = new Date().toLocaleString();
  const formattedString = dateString.replace(", ", " - ");
  timeDisplay.textContent = formattedString;
}
  setInterval(refreshTime, 1000);
