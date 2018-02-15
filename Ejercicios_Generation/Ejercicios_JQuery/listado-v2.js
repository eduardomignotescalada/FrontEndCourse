function gettingData() {
    $.getJSON('http://www.mocky.io/v2/5a54ae822d00005f235b1cd2', function (ev) {
        var resultado = ev;
        //pintar por pantalla listado
        for (var i in resultado) {
            $('#listado').append(`<li>El título del libro es: ${resultado[i].titulo} y el autor es: ${resultado[i].autor}`)
        }
    });
    console.log("function gettingData used");
}

function filter() {
    criterio = $("#myInputTitle").val();
    console.log(criterio);
    $("#resultados-filtrados").html("");
    console.log("borrar");
    $.getJSON("http://data.colorado.gov/resource/4ykn-tg5h.json?entitystatus=Good%20Standing&principalzipcode=80001",
        function (resultados) {
            var tiendas = resultados;
            $.each(resultados, function (i, results) {
                if (results.agentfirstname != undefined && results.agentfirstname.includes(criterio)) {
                    $("#resultados-filtrados").append("<li>" + results.agentfirstname + "</li>");
                }
            });
            console.log("presentar los resultados en HTML")

        })
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
4.- Colocar una caja de búsqueda que sirva de filtro para los listados
*/
