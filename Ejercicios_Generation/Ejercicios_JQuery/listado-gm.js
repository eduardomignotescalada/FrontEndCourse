
var app={
    init:function(){
        console.log("Dom cargado");
        //gestionar la petición ajax
        $.getJSON('http://www.mocky.io/v2/5a54ae822d00005f235b1cd2', function(ev){
          var resultado = ev;
          //pintar por pantalla listado
          for (var i in resultado) {
              $('#listado').append(`<li>El título del libro es: ${resultado[i].titulo}|| El autor es: ${resultado[i].autor}`)
          }
          for (var o in resultado) {
              //$('#tabla tr').filter(`<li>El título del libro es: ${resultado[i].titulo}|| El autor es: ${resultado[i].autor}`)
                $(`#tabla tbody`).append(`<tr><th>${resultado[o].titulo}</th>
                                          <th>${resultado[o].autor}</th></tr>`)
          }
          for (var e in resultado) {
              //$('#tabla tr').filter(`<li>El título del libro es: ${resultado[i].titulo}|| El autor es: ${resultado[i].autor}`)
                $(`.container`).append(`<div class="row">
                                          <div class="col-6">
                                            <h3>Título: ${resultado[e].titulo}</h3>
                                            <h3 style='border-bottom: 1px solid black'>Autor: ${resultado[e].autor}</h3>
                                          </div>
                                        </div>`)
          }
        })
        //en el caso de recoger los datos

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
*/
