document.getElementById("enlace1").addEventListener("click", function(borrar){
    if (document.getElementById("parafo1").style.display === "none")
        {
        document.getElementById("parafo1").style.display = "block";
        document.getElementById("enlace1").textContent = "Ocultar contenidos";
    } else {
        document.getElementById("parafo1").style.display = "none";
        document.getElementById("enlace1").textContent = "Show";
    }
}
    );

document.getElementById("enlace2").addEventListener("click", function(borrar){
    if (document.getElementById("parafo2").style.display === "hidden")
        {
        document.getElementById("parafo2").style.display = "block";
        document.getElementById("enlace2").textContent = "Ocultar contenidos";
    } else {
        document.getElementById("parafo2").style.display = "none";
        document.getElementById("enlace2").textContent = "Show";
    }
}
    );

document.getElementById("enlace3").addEventListener("click", function(borrar){
    if (document.getElementById("parafo3").style.display === "none")
        {
        document.getElementById("parafo3").style.display = "block";
        document.getElementById("enlace3").textContent = "Ocultar contenidos";
    } else {
        document.getElementById("parafo3").style.display = "none";
        document.getElementById("enlace3").textContent = "Show";
    }
}
    );



/*

document.getElementById("enlace1").addEventListener("click", function(borrar){

    document.getElementById("parafo1").style.display = "none"
});


document.getElementById("enlace2").addEventListener("click", function(borrar){
    document.getElementById("parafo2").style.display = "none"
});

document.getElementById("enlace3").addEventListener("click", function(borrar){
    document.getElementById("parafo3").style.display = "none"
});


*/
