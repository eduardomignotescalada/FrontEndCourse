document.getElementById("primero").addEventListener("click", function(borrar){
    document.getElementById("parafo1").style.display = "none"
});

document.getElementById("segundo").addEventListener("click", function(borrar){
    document.getElementById("parafo2").style.display = "none"
});

document.getElementById("tercero").addEventListener("click", function(borrar){
    document.getElementById("parafo3").style.display = "none"
});

document.getElementById("primero").removeEventListener("click", function(borrar){
    document.getElementById("parafo1").style.display = "none"
});

document.getElementById("segundo").removeEventListener("click", function(borrar){
    document.getElementById("parafo2").style.display = "none"
});

document.getElementById("tercero").removeEventListener("click", function(borrar){
    document.getElementById("parafo3").style.display = "none"
});
