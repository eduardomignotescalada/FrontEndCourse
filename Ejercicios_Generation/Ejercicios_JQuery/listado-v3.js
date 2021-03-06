var app={
    resultados:[],
    resultadosFiltrados:[],
    resultadosPaginados:[],
    paginaActual:0,
    resultadosPorPagina:10,
    presentaListado:function(){
        $("#listado").html("");
        //console.log(app.resultadosFiltrados);
        $.each(app.resultadosFiltrados,function(i,item){
            if(item!=undefined){
                var nuevoLi="<li><a href='#'>"+item.titulo
                //+app.calculaBotones()
                +"</a></li>";
                $("#listado").append(nuevoLi);
            }
        });
        /*
          for( var item of app.resultados){
              var nuevoLi="<li>"+item.titulo+"</li>";
              $("#listado").append(nuevoLi);
          }
        */
    },
    calculaResultadosPorPagina:function(){
        app.resultadosPaginados=[];
        var primerResultado=app.paginaActual*app.resultadosPorPagina;
        for (var i=primerResultado;i<(primerResultado+app.resultadosPorPagina);i++){
            var item=app.resultadosFiltrados[i];
            app.resultadosPaginados.push(item);
        }
        app.resultadosFiltrados=app.resultadosPaginados;
    },
    presentaPaginador:function(){
        var paginasTotales=Math.round(app.resultados.length/app.resultadosPorPagina);
        var muestraPrevio=(app.paginaActual!=0);
        var muestraSiguiente=((app.paginaActual+1)!=paginasTotales);
        var paginadorHTML="<div>"
        +"<ul class='pagination'>";
        if(muestraPrevio){
            paginadorHTML+="<li><a id='previo' href='#' aria-label='Previous'><span aria-hidden='true'>&laquo;</span></a></li>";
        }
        for(var i=1;i<=paginasTotales;i++){
                paginadorHTML+="<li ";
                if((app.paginaActual+1)==i){
                    paginadorHTML+=" class='active' ";
                }
                paginadorHTML+=">";


                paginadorHTML+="<a href='#'>"+i+"</a></li>";
        }
        if(muestraSiguiente){
            paginadorHTML+="<li><a id='siguiente' href='#' aria-label='Next'><span aria-hidden='true'>&raquo;</span></a></li>";
        }
        paginadorHTML+="</ul>"
        +"<h4>pagina "+(app.paginaActual+1)+"/"+paginasTotales+"</h4></div>";
        $("#paginador").html("");
        console.log(paginadorHTML);
        $("#paginador").append(paginadorHTML);
    },
    presentaTabla:function(){
        $("#tabla tbody").html("");
        $.each(app.resultadosFiltrados,function(i,item){
            if(item!=undefined){
              var nuevaFila="<tr>"
              +"<td>"+item.titulo+"</td>"
              +"<td>"+item.autor+"</td>"
              +"<td>"
              +app.calculaBotones()
              +"</td>"
              +"</tr>";
              $("#tabla tbody").append(nuevaFila);
            }
          });
        $('#tabla').DataTable();
        /*
          for( var item of app.resultados){
              var nuevaFila="<tr>"
              +"<td>"+item.titulo+"</td>"
              +"<td>"+item.autor+"</td>"
              +"<td>"
              +"<button id=''>Mostrar</button>"
              +"<button id=''>Editar</button>"
              +"<button id=''>Borrar</button>"
              +"</td>"
              +"</tr>";
              $("#tabla tbody").append(nuevaFila);
          }
          */
    },
    calculaBotones:function(){
        return "<button id='' class='btn btn-success'> <span class='glyphicon glyphicon-eye-open'></span> Mostrar</button>"
                    +"<button id='' class='btn btn-warning'> <span class='glyphicon glyphicon-edit'></span> Editar</button>"
                    +"<button id='' class='btn btn-danger'> <span class='glyphicon glyphicon-trash'></span> Borrar</button>";
    },
    presentaCol:function(item){
        if(item!=undefined){
            var columna="<div class='col-md-6 borde'>"
                        +"<h2 class='text-center'>"+item.titulo+"</h2>"
                        +"<h2 class='text-center'>"+item.autor  +"</h2>"
                        +"<div class='text-center'>"
                        +app.calculaBotones()
                        +"</div>"
                        +"</div>";
                      var ultimaFila=$(".container .row:last").append(columna);
        }
    },
    presentaGrid:function(){
        var filaPar=0;
        $(".container").html("");
        for( var item of app.resultadosFiltrados){
              if(filaPar==0){
                  filaPar=1;
                  //presenta row
                  var nuevaRow="<div class='row'></div>";
                  $(".container").append(nuevaRow);
                  //presenta primer col
                  app.presentaCol(item);
                  //console.log(ultimaFila);
              }else{
                  filaPar=0;
                  //presenta segunda col
                  app.presentaCol(item);
              }
          }
    },
    /*
    6.- Colocar una caja de búsqueda que sirva de filtro para los listados donde se buscará sui el patrón indicado está presente en los dos campos
    */
    filtraPorTitulo:function(patron){
        app.resultadosFiltrados=[];
        for(var item of app.resultados){
            if(
                item.titulo.includes(patron)

            ){
                app.resultadosFiltrados.push(item);
            }
        }
    },
    filtraPorAutor:function(patron){
        app.resultadosFiltrados=[];
        for(var item of app.resultados){
            if(
                item.autor!=undefined
                    &&
                item.autor.includes(patron)
            ){
                app.resultadosFiltrados.push(item);
            }
        }
    },
    filtraPorDosCampos:function(patron){
        app.resultadosFiltrados=[];
        for(var item of app.resultados){
            if(
                item.titulo.includes(patron)
                ||
                (   item.autor!=undefined
                    &&
                    item.autor.includes(patron)
                )
            ){
                app.resultadosFiltrados.push(item);
            }
        }
    },
    filtraDatos:function(){
        var patron=$(this).val();
        app.filtraPorDosCampos(patron);
        //app.calculaResultadosPorPagina();
        console.log(app.resultadosFiltrados);
        app.presentaListado();
        app.presentaTabla();
        app.presentaGrid();

    },
    peticionAjax:function(){
        $.getJSON(
            "http://www.mocky.io/v2/5a54ae822d00005f235b1cd2",
        function(datos){
            app.resultados=datos;
            app.resultadosFiltrados=datos;
            //app.calculaResultadosPorPagina();
            //app.presentaPaginador();
            console.log(app.resultados);
            app.presentaListado();
            app.presentaTabla();
            $('#tabla').DataTable();
            app.presentaGrid();
            $("#buscar").keyup(app.filtraDatos);
        })
        .fail(function(){
            console.log("error");
        });
    },
    init:function(){
        console.log("Dom cargado");
        //gestionar la petición ajax
        app.peticionAjax();
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
2.- Descargar los datos mediante uan petición AJAX desde una URL "http://www.mocky.io/v2/5a54ae822d00005f235b1cd2" JSON y colocarlos en una variable llamada resultados
3.- Presentar los datos en un formato listado (ul+li)
4.- Presentar los datos en un formato de tabla (tr+td)
5.- Presentar los datos en un formato grid (bootstrap+col-6)
6.- Colocar una caja de búsqueda que sirva de filtro para los listados
*/
