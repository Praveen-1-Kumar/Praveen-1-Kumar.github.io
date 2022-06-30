
 var btns=document.getElementById(`btn-sr`);

 console.log(btns);

 btns.addEventListener("click",src);
 function src(){
    var dom=document.getElementById("search");
    var srch= dom.value;
    console.log("Hello");
    console.log(srch);
    var con=document.getElementsByClassName(`p`);
    let a=0;
    let text=con[0].innerText;
    console.log(text.length);
    while(a<text.length){
        text[a].localeCompare()
        console.log(text[a]);
        a=a+1;

    }
    
   // while(con[a].innerText)
 }





