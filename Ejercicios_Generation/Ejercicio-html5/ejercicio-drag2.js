//functions defined in init
function comenzar(event) {
    console.log("empezando");
    //transfiriendo datos
    event.dataTransfer.setData("iden", event.target.id);
}

function sobrevolar(event) {
    console.log("Sobrevolando");
    //evitando problemas al soltar
    event.preventDefault()
}


function soltar(event) {
    console.log("soltando");
    //evitando problemas al soltar
    event.preventDefault()
    //cogiendo datos
    var data = event.dataTransfer.getData("iden");
    event.target.appendChild(document.getElementById(data))
}


//function init
function init() {
    console.log("Dom cargado");
    var o1 = document.getElementById("item-origen-1");
    var o2 = document.getElementById("item-origen-2");
    var o3 = document.getElementById("item-origen-3");
    var d1 = document.getElementById("destino");
    o1.addEventListener("dragstart", comenzar);
    o2.addEventListener("dragstart", comenzar);
    o3.addEventListener("dragstart", comenzar);
    d1.addEventListener("dragover", sobrevolar);
    d1.addEventListener("drop", soltar);

}
document.addEventListener("DOMContentLoaded", init);
