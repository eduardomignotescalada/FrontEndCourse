$("div.module")

$("#myListItem").css("color","blue")
$("#myList li:nth-child(3)").css("color","yellow")
$("ul li:nth-child(3)").css("color","purple")

$("label").css("color","yellow");
$("tr:odd").css("color","red");
/* numero de imagenes que tengan un atributo alt */
var numimg = $('img[alt]').length;
console.log(numimg);
/* numero de imagenes que tengan un atributo alt que sea igual a fruit */
var numimgfruit = $('img[alt="fruit"]').length;
console.log(numimgfruit);
/* numero de imagenes que tengan un atributo alt que sea igual a fruit */
var numhidden = $('#blog p.excerpt').length;
console.log(numhidden);
