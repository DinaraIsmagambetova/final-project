$(document).ready(function () {
    $("#read-button").click(function () {
        $("#text-ktl").slideToggle(400);
    });
 });
 
 $(document).ready(function () {
    $("#top-button").click(function () {
        $("#text-top").slideToggle(400);
    });
 });
 
 $(document).ready(function () {
    $("#code-button").click(function () {
        $("#text-code").slideToggle(400);
    });
 });
 
 $(document).ready(function () {
    $("#young-button").click(function () {
        $("#text-young").slideToggle(400);
    });
 });
 
 
var myAudios=document.getElementsByClassName("music");
var myButtons=document.getElementsByClassName("buttons");
console.log(myButtons);
   
 
 function playMusic(n) {
     var myAudio = myAudios[n];
     var myBtn=myButtons[n]
     if(myAudio.paused) {
        myAudio.play();
        myBtn.innerHTML="Pause";
          }
     else {
        myAudio.pause();
        myBtn.innerHTML="Play";
     }
 }