  /*
    <li>1.- Crea un fichero eventos.html e incluye JQuery. OK </li>
    <li>2.- Incluye un botón con el id miboton, haz que cuando se pulse el botón saque un mensaje por pantalla</li>
    <li>3.- Incluye otro botón con el id otroboton, haz que cuando se pulse el botón coloque un borde de color rojo al botón</li>
    <li>3.- Incluye otro botón con el id tercerboton, haz que cuando se pulse el botón coloque un fondo verde al botón</li>
    <li>4.- Incluye un campo de texto con el id campo, haz que cuando adquiera el foco saque un mensaje por consola</li>
    <li>5.- Haz que al perder el foco en el campo de texto, saque un mensaje por pantalla</li>
    <li>6.- Incluye un formulario de login en el HTML, haz que no envíe el formulario si no se han rellenado los dos campos</li>
    <li>7.- Coloca un botón en el HTML y haz que cuando me hagan click en el saque un mensaje por consola</li>
    <li>8.- Coloca un enlace en el HTML a google, haz que cuando entre el ratón saque un mensaje por consola y cuando salga el ratón también</li>
    <li>9.- Haz que cuando se salga del campo del nombre del formulario valide si está rellenado</li>
    $("#otroboton").addClass("bottonrojo");
    */

  function init() {
      console.log("DOM Cargado Jquery");
      //modificando los atributos
      $("#boton1").click(function () {
          alert("The boton was clicked.");
      });
      $("#boton2").click(function () {
          $("#boton2").addClass("bottonrojo");
      });

       $("#boton3").click(function () {
          $("#boton3").addClass("bottonverde");
      });
  }

  $("document").ready(init);
