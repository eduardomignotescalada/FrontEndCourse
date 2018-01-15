function init() {
console.log("DOM Cargado Jquery");
$('h1').click(function(){
    $('h1').toggleClass("rojo")
    })
};

$('document').ready(init);
