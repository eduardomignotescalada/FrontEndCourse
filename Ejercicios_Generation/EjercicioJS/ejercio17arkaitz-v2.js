function init() {
    console.log("DOM Cargado Jquery");
    $(".enlaces").click(function () {
        $(this).prev().toggleClass("hide");
        //prev es el anterior hermano pero si pones prev("p") para especificar el antiguo hermano
        if($(this).prev().hasClass("hide")) {
            this.innerHTML="show";
            // en vez de innerHTML puedes utilizar HTML en Jquery
        }
        else {
            this.innerHTML="hide";
        }
    });
}
$("document").ready(init);


