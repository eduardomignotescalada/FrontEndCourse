/*OK 1.- Crea un html con un archivo externo JS asociado para resolver estos ejercicios
OK 2.- Crea un objeto Javascript que se llame cliente, dentro del objeto coloca las siguientes propiedades: nombre del cliente, direccion_fisica, email ,tlf y persona_contacto. Al crear el objeto colócale valores a cada propiedad.
3.- Crea otro objeto con el nombre segundoCliente con las mismas propiedades pero con distintos valores.
4.- Imprime por pantalla el nombre del primer objeto
5.- Imprime por pantalla el email del segundo objeto
6.- Cambia el nombre del primero objeto por el valor "Maderas Peralta"
7.- Imprime el valor del nombre del primer objeto
8.- Cambia el email del segundo objeto por el valor "info@micasuci.com"
9.- Imprime el email por pantalla del segundo objeto
10.- Añade al primer objeto un método (función) llamado toString, dicho método no recibe parámetros de entrada y devuelve una cadena de caracteres con los datos de las propiedades de ese objeto, indicando el nombre del objeto el nombre de cada propiedad y el valor asociado a cada propiedad
11.- Imprime por pantalla el valor devuelto por el método toString del primer objeto
12.- Añade un método toString similar en el segundo objeto
13.- Imprime por pantalla el valor devuelvo por el método toString del segundo objeto
14.- Añade un método setter y otro getter al primero objeto por cada propiedad definida en él, sin contar los métodos.
15.- Utiliza todos los métodos definidos en el primer objeto dentro de tu código JS
16.- Introduce una nueva propiedad en el objeto cliente (1º) llamada facturacion, su valor inicial será un array de 2 posiciones con dos elementos de tipo numérico 4 y 25
17.- Imprime por pantalla el valor de la primera posición del array almacenado en la propiedad facturacion del primer objeto
18.- Haz un método dentro del primer objeto llamado addFactura, al que se le pase como parámetro un número, que almacene ese valor como una nueva posición al final del array de facturacion del primer objeto
19.- Al imprimir por pantalla el número de elementos de array facturacion debería indicar que tiene 3 elementos
20.- Crea un nuevo método en el primer objeto que sea capaz de devolver el total de facturación de ese objeto, total de los valores almacenados en el array facturacion del primero objeto.El método se llamara totalFacturacion
21.- Imprime por pantalla el valor devuelto por la llamada al método totalFactuacion del primer objeto
22.- Coloca en el primer objeto una nueva propiedad llamada direccionFiscal, el valor de esta propiedad será un objeto, las propiedades de este nuevo objeto serán, calle, ciudad, piso, puerta y CP.
23.- Imprime por pantalla el valor de la ciudad de la dirección fiscal del primer objeto
24.- Cambia el CP de la dirección fiscal del primer objeto e imprime por pantalla dicho valor.
*/


/*function init() {
    console.log("DOM Cargado Normal");*/


// Primer intento con classe y constructor


/* 2. Crea un objeto Javascript que se llame cliente, dentro del objeto coloca las siguientes propiedades: nombre del cliente, direccion_fisica, email ,tlf y persona_contacto. Al crear el objeto colócale valores a cada propiedad. */
class Cliente {
    constructor(nombre, direccion, email, tlf, contacto) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.email = email;
        this.tlf = tlf;
        this.contacto = contacto;
    }
}

var clienteprimero = new Cliente('Juan', 'Calle Juan Bravo 49', 'juan.bravo@gmail.com', '687 847 111', 'Jaime');

/* 3. Crea otro objeto con el nombre segundoCliente con las mismas propiedades pero con distintos valores. */
var clientesegundo = new Cliente('Pedro', 'Calle Diego de Leon 49', 'pedro.leon@gmail.com', '687 847 222', 'Pablo');
/* 4.- Imprime por pantalla el nombre del primer objeto */
console.log(clienteprimero.nombre);
/* 5.- Imprime por pantalla el email del segundo objeto*/
console.log(clientesegundo.email);
/* 6.  Cambia el nombre del primero objeto por el valor "Maderas Peralta" */
clienteprimero.nombre = "Maderas Peralta";
/* 7.- Imprime el valor del nombre del primer objeto */
console.log(clienteprimero.nombre);
/* 8.- Cambia el email del segundo objeto por el valor "info@micasuci.com" */
clientesegundo.email = "info@micasuci.com";
/* 9.- Imprime el email por pantalla del segundo objeto */
console.log(clientesegundo.email);
/* 10.- Añade al primer objeto un método (función) llamado toString, dicho método no recibe parámetros de entrada y devuelve una cadena de caracteres con los datos de las propiedades de ese objeto, indicando el nombre del objeto el nombre de cada propiedad y el valor asociado a cada propiedad */
Cliente.prototype.toString = function () {
    this.toString();
}
/* 11.- Imprime por pantalla el valor devuelto por el método toString del primer objeto */
console.log("'El nombre del primer cliente es " + clienteprimero.nombre.toString() + ", el email del primer cliente es " + clienteprimero.email.toString());
// correcion del profe
console.log(clienteprimero.toString());
/* 12.- Añade un método toString similar en el segundo objeto */
//coreccion del profe
toString()
/*  13.- Imprime por pantalla el valor devuelvo por el método toString del segundo objeto */
console.log("'El nombre del segundo cliente es " + clientesegundo.nombre.toString() + ", el email del segundo cliente es " + clientesegundo.email.toString());
//correcion del profe
console.log(clientesegundo.toString());
/* 14.- Añade un método setter y otro getter al primero objeto por cada propiedad definida en él, sin contar los métodos. */
//en caso del profe getnombre esta de color
getNombre: function() {
    return this.nombre;
},
setNombre: function(nombre) {
    this.nombre=nombre;
},
/* 15.- Utiliza todos los métodos definidos en el primer objeto dentro de tu código JS */
/* // La idea es gracias a los get y los set puede despues utilizar estos valores sin tocarlos realmente
// la idea es en vez de clienteprimero.apellido = Pepito podre hacer cliente.setAppelido("Pepito")
Cliente.prototype.apellido = apellido;
clienteprimero.setnombre("JuanGet");
clienteprimero.setemail("juanget@gmail.com");
console.log(clienteprimer.nombre); */

/* 16.- Introduce una nueva propiedad en el objeto cliente (1º) llamada facturacion, su valor inicial será un array de 2 posiciones con dos elementos de tipo numérico 4 y 25*/
    //el profe lo ha hecho todo distinto porque no creo una clase al principio sino un objeto normal asi que no hacia falta el prototype
Cliente.prototype.facturacion = [0, 0];
clienteprimero.facturacion = [4, 25];
/* 17.- Imprime por pantalla el valor de la primera posición del array almacenado en la propiedad facturacion del primer objeto*/
console.log("el primer numero de la factura del primer cliente es " + clienteprimero.facturacion[0]);
/* 18.- Haz un método dentro del primer objeto llamado addFactura, al que se le pase como parámetro un número, que almacene ese valor como una nueva posición al final del array de facturacion del primer objeto*/
addFactura:function(numero) {
   this.facturacion.push(numero)
},
// esto era mi metodo clienteprimero.facturacion.push(2);
/* 19.- Al imprimir por pantalla el número de elementos de array facturacion debería indicar que tiene 3 elementos*/
console.log("El array tiene " + clienteprimero.facturacion.length + " elementos dentro del array")
/* 20.- Crea un nuevo método en el primer objeto que sea capaz de devolver el total de facturación de ese objeto, total de los valores almacenados en el array facturacion del primero objeto.El método se llamara totalFacturacion*/
var totalFactura1 = 0;
for (var i = 0; i < 3; i++) {
    totalFactura1 = totalFactura1 + clienteprimero.facturacion[i];
}
console.log("el total de factura es " + totalFactura1)
/* 21.- Imprime por pantalla el valor devuelto por la llamada al método totalFactuacion del primer objeto*/
console.log(Cliente.prototype.facturacion);
/* 22.- Coloca en el primer objeto una nueva propiedad llamada direccionFiscal, el valor de esta propiedad será un objeto, las propiedades de este nuevo objeto serán, calle, ciudad, piso, puerta y CP.*/
Cliente.prototype.direccionFiscal = function direccionFiscal(calle, ciudad, piso, puerta, CP) {
    this.calle = calle;
    this.ciudad = ciudad;
    this.piso = piso;
    this.puerta = puerta;
    this.CP = CP;
}

var clienteprimero.direccionFiscal = ("calle diego leon", "madrid", "3", "4", "28028")
/* 23.- Imprime por pantalla el valor de la ciudad de la dirección fiscal del primer objeto*/
console.log(clienteprimero.direccionFiscal.ciudad)
/* 24.- Cambia el CP de la dirección fiscal del primer objeto e imprime por pantalla dicho valor.*/
clienteprimero.direccionFiscal.CP = 28020;


// Segundo intento con una funcion

function Clientebis(nombre, direccion, email, tlf, contacto) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.email = email;
    this.tlf = tlf;
    this.contacto = contacto;
}

var cliente3 = new Clientebis("Paul", "Calle Castllo 49", "paul.thames@gmail.com", "687 847 333", "Elena");
var cliente4 = new Clientebis("Marc", "Calle Diego de Leon 49", "marc.james@gmail.com", "687 847 444", "Paloma");

console.log(cliente3.nombre);
console.log(cliente4.nombre);



/*
}

document.addEventListener("DOMContentLoaded", init);*/
