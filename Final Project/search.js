function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
var myAudios=document.getElementsByClassName("music");
var myButtons=document.getElementsByClassName("buttons");

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
var mvs=document.getElementsByClassName("news-item");

function displayBlock(n){
    mvs[n].style.display="flex";
    $(mvs[n]).animate({opacity:"1"});
    document.body.style.overflowY="hidden";
}

function closeBlock(n){
    mvs[n].style.display="none";
    $(mvs[n]).animate({opacity:"0"});
    document.body.style.overflowY="scroll";
}