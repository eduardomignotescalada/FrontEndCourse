function init() {
    console.log("DOM Cargado Jquery");
    $(".enlaces").click(function () {
        $(this).prev().toggleClass("hide");
        if($(this).prev().hasClass("hide")) {
            this.innerHTML="show";
        }
        else {
            this.innerHTML="hide";
        }
    });
}
$("document").ready(init);
