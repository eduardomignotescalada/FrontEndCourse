
function init(){
    $("#commentForm").validate({
        rules: {
            name: {
                "required":true,
                minlength:5
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                required:"Por favor introduzca un nombre",
                minlength: "Son necesarios al menos 5 caracteres!"
            },
            email: {
                required: "Necesitamos su email para poder ponernos en contacto con usted",
                email: "Su email debe tener el formato similar a usuario@dominio.com"
            }
        }
    });
    //Revisar la documentación del plugin para más datos https://jqueryvalidation.org/documentation/
}
$(document).ready(init);
