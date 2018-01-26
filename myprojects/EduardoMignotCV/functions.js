function init() {
    console.log("DOM Cargado Jquery");
    baguetteBox.run('.tz-gallery');
    //function for the nav-bar
    window.onclick = function (event) {
        if (!event.target.matches(".undeploy")) {
            if (dropdown.classList.contains("show")) {
                dropdown.classList.remove("show")
            }
        }
    }
    let dropdown = document.getElementById("navbarNavAltMarkup");
    //function for lightbox
    $(document).on('click', '[data-toggle="lightbox"]', function (event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });
}
$("document").ready(init);
