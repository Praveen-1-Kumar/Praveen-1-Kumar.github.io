console.log(" i am stand in offline player")

function Setsrc(a,b){
 var g=a;
 var f=b;
 console.log(g);
 console.log(f);
 var play=document.getElementById('play');
 play.src=g;
 var a= document.getElementsByTagName("body");
 var t=document.getElementsByTagName("h2");
 t.innerText=f;
 document.documentElement.scrollTop=0;
  }


  function poster(a){
 var g=a;
 console.log(g);
  var play=document.getElementById('play');
 play.poster=g;



  }
  

  let box=document.getElementById('main-box');

 
  console.log(box);
  
 


  