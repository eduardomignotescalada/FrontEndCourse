/*
Validaciones
1. crea un formulario típico de login en el HTML, con dos campos usuario y contraseña
2. Haz que cuando se pulse el botón de enviar el formulario valide si el nombre de usuario y la contraseña están rellenados o no y sólo si es así deje enviar el formulario, en caso contrario deberá informar al usuario de qué campo o campos faltan por rellenar.
3. Haz el típico formulario de registro con los campos: nombre, email, repetir email, contraseña, repetir contraseña y aceptar condiciones del servicio. Con el botón de enviar el formulario
4. Valida el formulario, haciendo que el nombre tenga al menos 2 caracteres y sea requerido, el email sea valido y coincida en ambos campos, la contraseña tenga al menos 8 caracteres y coincidan y haya aceptado las condiciones del servicio.
(validador equalTo())
*/

function init(){
    $("#commentForm").validate({
        rules: {
            username: {
                required:true,
                minlength:2
            },
            password: {
                required: true,
                email: true,
                minlength:2
            }
        },
        messages: {
            username: {
                required:"Por favor introduzca un nombre",
                minlength: "Son necesarios al menos 5 caracteres!"
            },
            password: {
                required: "Necesitamos su email para poder ponernos en contacto con usted",
                email: "Su email debe tener el formato similar a usuario@dominio.com"
            }
        }
    });
    //Revisar la documentación del plugin para más datos https://jqueryvalidation.org/documentation/
}

$("document").ready(init);