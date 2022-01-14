console.log("hello");
let y=document.getElementById(`ulg`);
console.log(y);
document.getElementById(`bbtn`).onclick= function(){
    alert("Yahooo");
}
  /* let con=document.getElementById(`container`);
    console.log(con);
    let name=localStorage.getItem("container");
    name.push()
  console.log(name);
*/


let box= document.getElementById(`container`);
console.log(box);
HTML=box.innerHTML;
for( i=0;i<3;i++){
HTML +=`<div class="section">
<div class="desc">
    <a href=""> Python Books</a>
</div>
</div>`;

box.innerHTML=HTML;
}
let v=document.getElementById("HF");
document.getElementById("HF").addEventListener("mouseenter", function() {
  v.style.backgroundColor="red";

});
document.getElementById("HF").addEventListener("mouseout", function() {
  v.style.backgroundColor="";
  
});