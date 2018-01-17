   /*
1. Crea un fichero filtros.html e incluye Jquery. OK
2. Incluye 3 listados desordenado de 10 elementos de texto cada uno. OK
3. Haz que el tercer elemento del primer listado tenga el fondo amarillo. OK
4. Haz que el cuarto elemento del primer listado tenga el fondo amarillo, pero seleccionando primero el tercer elemento. OK
5. Haz que el primer ul tenga un id pero entrando desde el tercer elemento. OK
6. Haz que en el segundo listado todos los elementos tengan un fondo rojo pero entrando desde el primer elemento del segundo listado. OK
*/
function init(){
    console.log("DOM Cargado Jquery");
    //modificando los atributos
/*3. Haz que el tercer elemento del primer listado tenga el fondo amarillo. OK */
$("ul:first li:nth-child(3)").css("background","yellow");

/* 4. Haz que el cuarto elemento del primer listado tenga el fondo amarillo, pero seleccionando primero el tercer elemento. OK*/
$("ul:first li:nth-child(3)").next().css("background","yellow");

 /*5. Haz que el primer ul tenga un id pero entrando desde el tercer li del primer ul. */
$("ul:first li:nth-child(3)").parent().attr("id", "iddelprimerul");
/*5. Haz que el primer ul tenga un id pero entrando desde el tercer ul. */
// $("ul:eq(2)").prev().prev().attr("id", "iddelprimerul");;

/* 6. Haz que en el segundo listado todos los elementos tengan un fondo rojo pero entrando desde el primer elemento del segundo listado. OK*/

/*  como lo hice yo
$("ul:eq(1) li:first").css("background", "red");;
$("ul:eq(1) li:first").nextAll().css("background", "red");;
*/

//como lo hace el profe cambiando por mi
    $("ul:eq(1) li:first").parent().children().css("background-color","red");


}

$("document").ready(init);
