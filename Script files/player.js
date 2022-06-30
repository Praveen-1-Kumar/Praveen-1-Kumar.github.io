// these lines of code  2 to 6 are used to hide the player

 var player=document.getElementById('main-play-body');
 player.style.display="none";
 var btn=document.getElementById(`btn`);
 btn.innerText="Show Player";


// this function is used to write tittle of video
function track(a){
 var g=a;
 console.log(g);
 console.log("Key pressed") 
 var play=document.getElementById('tittle');
 play.childNodes[1].textContent=g;
 var player=document.getElementById('main-play-body');
 player.style.display="block";
 var btn=document.getElementById(`btn`);
  btn.innerText="Hide Player";
 }

 

// this function is used for hide player
function hide(){
  var btn=document.getElementById(`btn`);
 
  if(btn.innerText.localeCompare("Show Player")){
     var player=document.getElementById('main-play-body');
     player.style.display="none";
     btn.innerText="Show Player";
     console.log(btn.innerText.localeCompare("Hide Player"));
     console.log(" i am stand in first if block");
    }
    else {
    var player=document.getElementById('main-play-body');
    player.style.display="block";
    btn.innerText="Hide Player";
    console.log(" i am stand in Second if block");
  }
 // var player=document.getElementById('main-play-body');
 // player.style.display="none";
  
  //btn.innerText="Show Player";
  
 //
}

player.style.display="none";
