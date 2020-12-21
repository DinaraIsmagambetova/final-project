const audio = document.querySelector('#audio'),
      cass = document.querySelector('.cassette');
      text = document.querySelector('.name');

audio.addEventListener('play', () => {
   cass.classList.add('active');
   text.classList.add('active-name');
});

audio.addEventListener('pause', () => {
   cass.classList.remove('active');
   text.classList.remove('active-name');
});


function Playtruwer() {
   var myAudio = document.getElementById("audio");
   if(myAudio.paused) {
      myAudio.play();
        }
   else {
      myAudio.pause();
   }
}


function Play() {
   var myAudio = document.getElementById("audio2");
   if(myAudio.paused) {
      myAudio.play();
        }
   else {
      myAudio.pause();
   }
}

function Playasap() {
   var myAudio = document.getElementById("audio3");
   if(myAudio.paused) {
      myAudio.play();
        }
   else {
      myAudio.pause();
   }
}

function Playlive() {
   var myAudio = document.getElementById("audio4");
   if(myAudio.paused) {
      myAudio.play();
        }
   else {
      myAudio.pause();
   }
}

function Playkod() {
   var myAudio = document.getElementById("audio5");
   if(myAudio.paused) {
      myAudio.play();
        }
   else {
      myAudio.pause();
   }
}

function Playredbone() {
   var myAudio = document.getElementById("audio6");
   if(myAudio.paused) {
      myAudio.play();
        }
   else {
      myAudio.pause();
   }
}

function Playcrash() {
   var myAudio = document.getElementById("audio7");
   if(myAudio.paused) {
      myAudio.play();
        }
   else {
      myAudio.pause();
   }
}

function Playjoji() {
   var myAudio = document.getElementById("audio8");
   if(myAudio.paused) {
      myAudio.play();
        }
   else {
      myAudio.pause();
   }
}

function Playout() {
   var myAudio = document.getElementById("audio9");
   if(myAudio.paused) {
      myAudio.play();
        }
   else {
      myAudio.pause();
   }
}

function Playgoing() {
   var myAudio = document.getElementById("audio10");
   if(myAudio.paused) {
      myAudio.play();
        }
   else {
      myAudio.pause();
   }
}

function Playevery() {
   var myAudio = document.getElementById("audio11");
   if(myAudio.paused) {
      myAudio.play();
        }
   else {
      myAudio.pause();
   }
}

function Playbetter() {
   var myAudio = document.getElementById("audio12");
   if(myAudio.paused) {
      myAudio.play();
        }
   else {
      myAudio.pause();
   }
}

function Playscrip() {
   var myAudio = document.getElementById("audio13");
   if(myAudio.paused) {
      myAudio.play();
        }
   else {
      myAudio.pause();
   }
}

function Playsplashin() {
   var myAudio = document.getElementById("audio14");
   if(myAudio.paused) {
      myAudio.play();
        }
   else {
      myAudio.pause();
   }
}

function Playtfest() {
   var myAudio = document.getElementById("audio15");
   if(myAudio.paused) {
      myAudio.play();
        }
   else {
      myAudio.pause();
   }
}

function Playlife() {
   var myAudio = document.getElementById("audio16");
   if(myAudio.paused) {
      myAudio.play();
        }
   else {
      myAudio.pause();
   }
}

function Play6lack() {
   var myAudio = document.getElementById("audio17");
   if(myAudio.paused) {
      myAudio.play();
        }
   else {
      myAudio.pause();
   }
}

function Playholly() {
   var myAudio = document.getElementById("audio18");
   if(myAudio.paused) {
      myAudio.play();
        }
   else {
      myAudio.pause();
   }
}



const menu = document.querySelector('.h-menu')
const nav = document.querySelector('.nav')

let isOpen = false

menu.addEventListener('click', () => {
   
   if (isOpen) {
      nav.style.display = 'none'
      isOpen = false
   } else {
      nav.style.display = 'block'
      isOpen = true
   }

   menu.classList.toggle('open')
});
