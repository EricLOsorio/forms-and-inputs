window.onload = (function() {

var colorForm=document.getElementById("colorform");
var colorArea=document.getElementById("color-area");
var colors=document.getElementsByName("colors");


colorForm.addEventListener('change', function(event) {
  colorArea.innerHTML="R = "+(colors[0].value) + 
  " G = " + colors[1].value + " B = " + colors[2].value +
   " alpha = " + colors[3].value;
 });

}(window.console));