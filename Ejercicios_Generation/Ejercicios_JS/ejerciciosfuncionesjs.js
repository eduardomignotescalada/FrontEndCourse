
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


/* Hacer que no se vaya a google cuando se hace click en el link con el addEventListener */

document.getElementById("mienlace").addEventListener("click", function(event){
     event.preventDefault();
    console.log("test")
});

/* Hacer que no se vaya a google cuando se hace click en el link con el onclick */

/*
document.getElementById("mienlace").onclick = function(event){
    event.preventDefault()
    ;}
    */

/* Hacer que en vez de ir a Google va a Youtube.com */

/*
document.getElementById("mienlace").onclick = function(event){
    document.getElementById("mienlace").href="https://www.youtube.com"
    ;}
*/

document.getElementById("miboton").onclick = function(risaMalvada){
    console.log("MUAHHAHA")
    ;}





