/* Time set with setTimeOut

function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
*/

/* Time set sin delay*/


function init() {
    console.log("DOM Cargado Jquery");
    //filtrando por selector
    $("#busqueda").on("keyup change", function () {
        var value = this.value;
        $("#dom_element").text(value);
        console.log("esta buscando")
    });

}

$("document").ready(init);

var lista_articulos = $.get('http://www.mocky.io/v2/5a54ae822d00005f235b1cd2', function (data) {
    $(".result").html(data);
    alert("Load was performed.");
});


/* Time set with delay

$("#busqueda").delay(8).on("keyup change", function () {
    var value = this.value;
    $("#dom_element").text(value);
    console.log("esta buscando")
});


*/


/* Time set with setTimeOut



$("#busqueda").delay(800).on("keyup change", function () {
    var value = this.value;
    $("#dom_element").text(value);
});

*/
