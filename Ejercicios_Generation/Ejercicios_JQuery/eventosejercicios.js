  /*
          <li>1.- Crea un fichero eventos.html e incluye JQuery. OK </li>
          <li>2.- Incluye un botón con el id miboton, haz que cuando se pulse el botón saque un mensaje por pantalla. OK</li>
          <li>3.- Incluye otro botón con el id otroboton, haz que cuando se pulse el botón coloque un borde de color rojo al botón. OK</li>
          <li>3.- Incluye otro botón con el id tercerboton, haz que cuando se pulse el botón coloque un fondo verde al botón. OK</li>
          <li>4.- Incluye un campo de texto con el id campo, haz que cuando adquiera el foco saque un mensaje por consola. OK</li>
          <li>5.- Haz que al perder el foco en el campo de texto, saque un mensaje por pantalla. OK</li>

          <li>6.- Incluye un formulario de login en el HTML, haz que no envíe el formulario si no se han rellenado los dos campos. OK</li>
          <li>7.- Coloca un botón en el HTML y haz que cuando me hagan click en el saque un mensaje por consola. OK </li>
          <li>8.- Coloca un enlace en el HTML a google, haz que cuando entre el ratón saque un mensaje por consola y cuando salga el ratón también. OK</li>
          <li>9.- Haz que cuando se salga del campo del nombre del formulario valide si está rellenado</li>

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
      // tambien se puede hacer con this >  $(this).addClass("bottonverde");

      $("#input1").focus(function () {
          console.log("you focus on the input");
      });
      $("#input1").blur(function () {
          console.log("you defocus on the input");
      });
      $('#formulario3submit').click(function () {
          if ($.trim($('#input2').val()) == '' || $.trim($('#input3').val()) == '') {
              alert('Los dos campos del formulario tienen que estar rellenados')
              event.preventDefault();;
          }
      });

      $("#boton4").hover(function () {
              console.log("The button 4 was clicked.");
          });
       $("#linktToGoogle").mouseover(function () {
          console.log("you focus on the link");
      });

      $("#linktToGoogle").mouseleave(function () {
          console.log("you defocus on the link");
      });

      $('#input2').blur(function () {
          if ($.trim($('#input2').val()) == '') {
              console.log('el nombre es vacio')
              event.preventDefault();;}
          else {
              console.log('el nombre no esta vacio')
          }
      });

  }
  $("document").ready(init);
