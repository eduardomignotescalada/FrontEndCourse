function init(){
    console.log("DOM Cargado Jquery");
    modificacionContenido();
    //modificando los atributos
    $("#parrafo1").html("Nuevo contenido del parafo1");
    $("#parrafo2").after("<p id='parrafo3'>párrafo metido con after que sera el parrafo 3</p>");
    $("#parrafo3").after("<p>párrafo metido con after que sera despues del parafo 3</p>");
    $("#parrafo2").before("<p>párrafo metido entre el 1 y el 2 que sera el párrafo 1 bis</p>");
    $("#parrafo3").css("background", "yellow");
    $("#p:last").attr("id", "parrafoultimo");
    $("#p:last").addClass('rojo');
    console.log("#p:last");
     $("#p:first").attr("id", "iddelnombre");
    console.log($("input:first").val());


    /*
    $("h1").attr("id","mititulo");
    //coger valor de atributo
    var valor=$("h1").attr("id");
    console.log(valor);
    //borrar atributo
    $("h1").removeAttr("id");
    //añadir una clase
    $("p").addClass("roja");
    //quitar una clase
    $("p").removeClass("roja");
    //saber si una clase está añadida
    var valor=$("p").hasClass("roja");
    console.log(valor);
    //cambiar la presencia de la clase
    // si esta metida se saca
    // si no está metida se mete
    $("p").toggleClass("roja");
    $("button").click(cambiaActive);

    //insertar contenido (injerto)
    //al final de la etiqueta
    $("#inserciones").append("<p id='parrafo1'>mi párrafo guay</p>");
    $("#inserciones").append("<p>mi otro párrafo</p>");
    $("#parrafo1").after("<p>párrafo metido con after</p>");
    $("#parrafo1").append("<strong>hijo de hijo</strong>");
    $("#inserciones").append("<p>mi párrafo final</p>");
    $("#parrafo1").before("<p>párrafo metido con before</p>");
    $("#inserciones").prepend("<p>Primer párrafo</p>");
    $("#inserciones p").eq(2).after("<p>eq + after</p>");
    $("#inserciones p:nth-child(3)").after("<p>nth-child + after</p>");
    //Eliminar elementos definitivamente (poda)
    $("#parrafo1").remove();
    //ocultar un elemento
    $("#inserciones").hide();
    //presentar un elemento ocultado previamente
    $("#inserciones").show();

    */
}

$("document").ready(init);
