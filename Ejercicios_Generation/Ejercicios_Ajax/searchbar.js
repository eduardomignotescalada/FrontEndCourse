var criterio;

function init() {
    console.log("DOM Cargado");
    peticionGetJson();
    $("#myInput").keyup(filter)
}
$(document).ready(init);

function peticionGetJson() {
    //limpiaResultados();
    $.getJSON("http://data.colorado.gov/resource/4ykn-tg5h.json?entitystatus=Good%20Standing&principalzipcode=80001",
            function (resultados) {
                var tiendas = resultados;
                console.log("pillar los datos por get");
                console.log(resultados);
                $.each(resultados, function (i, resultado) {
                    $("#resultados-no-filtrados").append("<li>" + resultado.agentfirstname + "</li>");
                });
                console.log("presentar los resultados en HTML")

            })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("error " + textStatus);
            console.log("incoming Text " + jqXHR.responseText);
            console.log("error " + errorThrown);
        });

}

function filter() {
    criterio = $("#myInput").val();
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


/*
Correcion de elvira

var tiendas;
var criterio;
function cogeDatos(){
    $.get("http://data.colorado.gov/resource/4ykn-tg5h.json?entitystatus=Good%20Standing&principalzipcode=80001", function(datos){
        tiendas = datos;
        for(i in tiendas){
           if(tiendas[i].agentfirstname!=undefined && tiendas[i].agentfirstname.toLowerCase().includes(criterio)){
            $("#resultados").append(`<li>Hemos encontrado a ${tiendas[i].agentfirstname} en la posicion ${i}</li>`);
            }
    }
    })
};
$("#texto").keyup(function(){
    criterio = $("#texto").val();
});


*/
