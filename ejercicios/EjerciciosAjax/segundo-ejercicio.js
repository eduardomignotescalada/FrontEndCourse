/*
1.- crea un html y asocia un fochero JS
2.- Descarga desde la URL: http://data.colorado.gov/resource/4ykn-tg5h.json?entitystatus=Good%20Standing&principalzipcode=80001 y colócalos en un variable llamada tiendas
3.- Presenta los resultados en la petición ajax por pantalla en un formato de listado, donde debe parecer exclusivamente el dato "agentfirstname" en cada elementos visual
4.- Incluye un campo de texto de formulario llamado id:"texto" y haz que cada vez que se pulse una tecla almacene el valor del campo en la variable criterio
5.- Crea una función que sea capaz de filtrar los resultados de una búsqueda de tiendas mediante un texto. En los resultados que debe devolver la función sólo deberán estar aquellos que contengan dicho texto en el campo "agentfirstname"
6.- Aplicar a que se presenten sólo los resultados que contengan el texto de la variable criterio, según vaya cambiándose (tecla a tecla)
*/



var tiendas = [];
var criterio;
var listado_original = [];
var listado_filtrado = [];


function teclea() {
    $("#busqueda").keyup(buscar);
}

function buscar() {
    console.log("esta buscando")
    var criterio = this.value;
    console.log(criterio)
};

function filtra() {
    var listado_filtrado = [];
    for (var item of tiendas) {
        if (
            (item.agentfirstname != null && agentfirstname.includes(criterio))
        ) {
            listado_filtrado.push(item);
        }
    }
    return listado_filtrado;
    console.log(listado_filtrado)
};


function peticionGetJson() {
    //limpiaResultados();
    $.getJSON("http://data.colorado.gov/resource/4ykn-tg5h.json?entitystatus=Good%20Standing&principalzipcode=80001",
            function (resultados) {
                var tiendas = resultados;
                console.log("pillar los datos por get");
                console.log(resultados);
                $.each(resultados, function (i, resultado) {
                    $("#resultados-get").append("<li>" + resultado.agentfirstname + "</li>");
                });
                console.log("presentar los resultados en HTML")
                var listado_filtrado = function filtra(tiendas, $("#busqueda").val())
                console.log("entro en success");
                console.log(resultados);
                var tiendasfiltradas = pintaResultados(listado_filtrado) {
                    $.each(listado_filtrado, function (i, resultado) {
                        $("#resultados-filtrados").append("<li>" + resultado.agentfirstname + "</li>");
                    });
                };
            })

        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("error " + textStatus);
            console.log("incoming Text " + jqXHR.responseText);
            console.log("error " + errorThrown);
        });

}

function init() {
    console.log("DOM Cargado");
    peticionGetJson();
    teclea();
}
$(document).ready(init);
