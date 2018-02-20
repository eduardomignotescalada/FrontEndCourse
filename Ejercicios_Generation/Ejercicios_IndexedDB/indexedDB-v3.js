/*
Ejercicio IndexedDB
Crea un HTML y asociarlo con un fichero JS
Descarga los datos desde la URL del examen y almacenarlos en la base de datos indexedDB http://www.mocky.io/v2/5a54ae822d00005f235b1cd2
Utiliza los datos de la base de datos para pintarlos en pantalla en un formato listado (UL)
Haz que aunque no funcione la petición AJAX pueda coger los datos de la base de datos para presentarlos por pantalla
*/
function peticionGetJson() {
    //limpiaResultados();
    $.getJSON("http://www.mocky.io/v2/5a54ae822d00005f235b1cd2",
            function (resultados) {
            })

        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("error " + textStatus);
            console.log("incoming Text " + jqXHR.responseText);
            console.log("error " + errorThrown);
        });
}


function init() {
    console.log("init");
    conectaDB();

    if (!window.indexedDB) {
        console.log("Your browser doesn't support a stable version of IndexedDB.")
    } else {
        console.log("IndexedDB HTML5 está soportada en este navegador.");
        document.getElementById("escribeDB").addEventListener("click", escribe);
        document.getElementById("leeDB").addEventListener("click", lee);
        document.getElementById("cogeTodos").addEventListener("click", cogeTodos);
        document.getElementById("modificaDB").addEventListener("click", modifica);
    }



}
document.addEventListener("DOMContentLoaded", init);
