
  document.addEventListener("DOMContentLoaded", function(init) {
    console.log("Dom cargado");
  });

/*
window.addEventListener("load",function (loaded) {
   console.log("Página cargada") ;
   });
*/

window.addEventListener("load",loaded)
function loaded() {
   console.log("Página cargada") ;
   };


document.getElementById("mienlace").onclick = function(event){
    event.preventDefault()
    ;}
