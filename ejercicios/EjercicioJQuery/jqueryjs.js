/*
Selecciones
1. Crea un proyecto donde poder resolver los ejercicios de esta unidad
2. Crea un selectores.html e incluye el fichero de jquery
3. Haz que según se cargue la página saque un mensaje por consola
4.  Coloca dos párrafos en el HTML
5. Haz que los dos párrafos tengan el fondo amarillo
6. Asigna una clase al primer párrafo y un identificativo al segundo, coloca un fondo de un color distinto al primer párrafo y al segundo, uno por la clase y otro por el id
7. Coloca un par de enlaces en el HTML y haz que uno de ellos apunte a google, modifica el color de fondo del que apunta a google
8. Coloca un listado desordenado de 10 elementos con un texto, haz que el primero tenga fondo rojo,  el último fondo azul y el 5º tenga fondo amarillo
9. Coloca en el HTML un formulario de login, haz que todos los input tengan un fondo azul
*/

/* Haz que según se cargue la página saque un mensaje por consola*/

function init() {
console.log("DOM Cargado Jquery");
$('p').css("background", "yellow");
$('.parafo1').css("background", "green");
$('#parafo2').css("background", "blue");
$("#enlacegoogle").css("background", "red");
$("#listado li:first").css("background","red");
$("#listado li:last").css("background","blue");
$("#listado li:nth-child(5)").css("background","yellow");
/* Intentando hacer el Togle*/
$("h1").click(function() {
$("h1").toggleClass( "rojo" );
});

}
$('document').ready(init);




/*
  $("h1").css("display","block");
    $("h1,h2").css("display","block");
    //buscar por identificativo
    $("#main_menu").css("background-color","green");
    //buscar por clase
    $(".logo").css("background-color","black");
    //buscar por descendiente
    $("p a").css("color","red");
    //buscar por hijo directo
    $("p > a").css("color","blue");
    //incluya un atributo
    $("a[href]").css("background-color","black");
    //por valor de un atributo
    $("a[href='#']").css("color","green");
    //por posición
    $("#listado li").css("color","red");
    //impares
    $("#listado li:odd").css("color","grey");
    //pares
    $("#listado li:even").css("color","yellow");
    //primero
    $("#listado li:first").css("color","blue");
    //último
    $("#listado li:last").css("color","green");
    //enésimo
    $("#listado li:nth-child(3)").css("color","green");
    //enésimo empezando por el final
    $("#listado li:nth-last-child(2)").css("color","green");
    //posición mayor que o menor que
    $("tr:gt(5)").css("background-color", "yellow");
    $("tr:lt(2)").css("background-color", "yellow");
    //buscar los ocultos
    $(":hidden").show();

    */
