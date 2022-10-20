// the code below uses a for each loop to apply the same event on multiple elements
let click = document.querySelectorAll(".close");
let dropdown =document.querySelector(".drops");

click.forEach(function(i){
  i.addEventListener("click",function(){
dropdown.classList.toggle("dropdown");
     });
});



