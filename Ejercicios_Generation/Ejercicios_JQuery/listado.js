var app = {
    resultados: [],
    init: function () {
        console.log("Dom cargado");
        $.getJSON("http://www.mocky.io/v2/5a54ae822d00005f235b1cd2", function (data) {
            $.each(data, function (key, val) {
                var li = $('<li></li>');
                $.each(val, function (k, v) {
                    $('<span>' + k + ": " + v + ' </span>').appendTo(li);
                });
                li.appendTo('#listado');
            });
            $.each(data, function (key, val) {
                var tr = $('<tr></tr>');
                $.each(val, function (k, v) {
                    $('<td>' + v + '</td>').appendTo(tr);
                });
                tr.appendTo('#tabla');

            });
            $('#tabla').DataTable();

            $.each(data, function (key, val) {
                var grid1 = $("<div class='row'></div>");
                $.each(val, function (k, v) {
                    $("<div class='col-md-6'>' + v + '</div>").appendTo(grid1);
                });
                grid1.appendTo('#containergrid');
            });
        });
        //gestionar la petición ajax
        //en el caso de recoger los datos
        //pintar por pantalla listado
        //pintar por pantalla tabla
        //pintar por pantalla grid
        //guardar datos en indexeddb
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

https://stackoverflow.com/questions/9760661/jquery-code-to-display-json-response-to-a-html-table-using-append
https://stackoverflow.com/questions/4802091/jquery-json-read-and-print-getjson

*/
