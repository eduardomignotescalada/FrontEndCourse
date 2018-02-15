
function gettingData() {
     $.getJSON('http://www.mocky.io/v2/5a54ae822d00005f235b1cd2', function (ev) {
            var resultado = ev;
            //pintar por pantalla listado
            for (var i in resultado) {
                $('#listado').append(`<li>El título del libro es: ${resultado[i].titulo}|| El autor es: ${resultado[i].autor}`)
            }
        });
    console.log("function gettingData used");
}


var app = {
    init: function () {
        console.log("Dom cargado");
        //gestionar la petición ajax;
        gettingData();
    }
}
$(document).ready(app.init);

/*
1.- Crear un código html con un JS asociado
2.- Descargar los datos mediante uan petición AJAX desde una URL "http://www.mocky.io/v2/5a54ae822d00005f235b1cd2" JSON y colocarlos en una variable llamada datos
3.- Presentar los datos en un formato listado (ul+li)
4.- Presentar los datos en un formato de tabla (tr+td)
5.- Presentar los datos en un formato grid (bootstrap+col-6)
6.- Guardar los datos en indexeddb para luego consultarlos antes de hacer la petición ajax
*/
