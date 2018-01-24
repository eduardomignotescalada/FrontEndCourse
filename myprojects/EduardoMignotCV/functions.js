function init() {
    console.log("DOM Cargado Jquery");
    //filtrando por selector
    window.onclick = function (event) {
        if (!event.target.matches('.undeploy')) {
            if (dropdown.classList.contains('show')) {
                dropdown.classList.remove('show')
            }
        }
    }
    let dropdown = document.getElementById('navbarNavAltMarkup')



}

$("document").ready(init);
