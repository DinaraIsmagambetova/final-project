function info(){
    document.querySelector(".info").style.display = "flex";
    $(".info").animate({opacity: "1"});
    document.body.style.overflowY = "hidden";
 }
 
 function close_info(){
    $(".info").animate({opacity: "0"});
    document.querySelector(".info").style.display = "none";
    document.body.style.overflowY = "scroll";
 }
 
 function info2(){
    document.querySelector(".info2").style.display = "flex";
    $(".info2").animate({opacity: "1"});
    document.body.style.overflowY = "hidden";
 }
 
 function close_info2(){
    $(".info2").animate({opacity: "0"});
    document.querySelector(".info2").style.display = "none";
    document.body.style.overflowY = "scroll";
 }
 
 function info3(){
    document.querySelector(".info3").style.display = "flex";
    $(".info3").animate({opacity: "1"});
    document.body.style.overflowY = "hidden";
 }
 
 function close_info3(){
    $(".info3").animate({opacity: "0"});
    document.querySelector(".info3").style.display = "none";
    document.body.style.overflowY = "scroll";
 }
 
 function info4(){
    document.querySelector(".info4").style.display = "flex";
    $(".info4").animate({opacity: "1"});
    document.body.style.overflowY = "hidden";
 }
 
 function close_info4(){
    $(".info4").animate({opacity: "0"});
    document.querySelector(".info4").style.display = "none";
    document.body.style.overflowY = "scroll";
 }
 
 function info5(){
    document.querySelector(".info5").style.display = "flex";
    $(".info5").animate({opacity: "1"});
    document.body.style.overflowY = "hidden";
 }
 
 function close_info5(){
    $(".info5").animate({opacity: "0"});
    document.querySelector(".info5").style.display = "none";
    document.body.style.overflowY = "scroll";
 }
 
 function info6(){
    document.querySelector(".info6").style.display = "flex";
    $(".info6").animate({opacity: "1"});
    document.body.style.overflowY = "hidden";
 }
 
 function close_info6(){
    $(".info6").animate({opacity: "0"});
    document.querySelector(".info6").style.display = "none";
    document.body.style.overflowY = "scroll";
 }
 
 function info7(){
    document.querySelector(".info7").style.display = "flex";
    $(".info7").animate({opacity: "1"});
    document.body.style.overflowY = "hidden";
 }
 
 function close_info7(){
    $(".info7").animate({opacity: "0"});
    document.querySelector(".info7").style.display = "none";
    document.body.style.overflowY = "scroll";
 }
 
 function info8(){
    document.querySelector(".info8").style.display = "flex";
    $(".info8").animate({opacity: "1"});
    document.body.style.overflowY = "hidden";
 }
 
 function close_info8(){
    $(".info8").animate({opacity: "0"});
    document.querySelector(".info8").style.display = "none";
    document.body.style.overflowY = "scroll";
 }
 
 function info9(){
    document.querySelector(".info9").style.display = "flex";
    $(".info9").animate({opacity: "1"});
    document.body.style.overflowY = "hidden";
 }
 
 function close_info9(){
    $(".info9").animate({opacity: "0"});
    document.querySelector(".info9").style.display = "none";
    document.body.style.overflowY = "scroll";
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