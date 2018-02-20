/*0.- Crea un fichero HTML que incluya un fichero JS externo */
/*1.- Crea una clase llamada Animal, que tenga una propiedad  llamada edad, que sea inicializada a 0 */
/*2.- Crea un objeto de la clase Aminal, llamado animalico */
/*3.- Imprime por pantalla el objeto animalico y la propiedad edad del objeto */
/*4.- Cambia la edad de animalico a 3 */
/*5.- Imprime por pantalla la edad de animalico */
/*6.- Crea una nueva clase Gato que herede de Animal */
/*7.-El constructor de Animal le podré pasar la edad para rellenar la edad del Animal (reescribir el constructor) */
/*8.- Crea un objeto llamado animalico2 que se construya en base a la clase Animal, pasa como parámetro al constructor de Animal el número 2 */
/*9.- Modificar el constructor de la clase Gato para que admita un parámetro que sea la edad del animal, dentro del constructor de Gato llamar la constructor de Animal para pasar la edad que nos pasan como parámetro al contructor de Gato  */
/*10.- Crear un objeto de la clase Gato, llamado gatete, pasando como parámetro la edad 1 */
/*11.- Incluir en la clase Gato un nuevo parámetro llamado nombre inicializarlo a "" */
/*12.- Modificar el constructor de Gato para incluir un nuevo parámetro que sea el nombre del Gato */
/*13.- Crear un nuevo objeto llamado gatete2 de la clase Gato, pasándole como parámetro 0 a la edad y nombre "Nyska" */
/*14.- Imprime el objeto por pantalla, así como su edad y su nombre */


// OLD VERSION para declarar una classe

/*0.- Crea un fichero HTML que incluya un fichero JS externo >> OK*/
/*1.- Crea una clase llamada Animal, que tenga una propiedad  llamada edad, que sea inicializada a 0 */
var Animal = function (edad = "0") {
    this.edad = edad;
};

/*2.- Crea un objeto de la clase Aminal, llamado animalico */
var animalico = new Animal()
/*3.- Imprime por pantalla el objeto animalico y la propiedad edad del objeto */
console.log("La propiedad edad de animalico es "+animalico.edad)
/*4.- Cambia la edad de animalico a 3 */
animalico.edad = 3;
/*5.- Imprime por pantalla la edad de animalico */
console.log("La nueva propiedad edad de animalico es "+animalico.edad)
/*6.- Crea una nueva clase Gato que herede de Animal */
var Gato = function () {
    /*7.-El constructor de Animal le podré pasar la edad para rellenar la edad del Animal (reescribir el constructor) */
    Animal.call(this);
};
/*8.- Crea un objeto llamado animalico2 que se construya en base a la clase Animal, pasa como parámetro al constructor de Animal el número 2 */
var animalico2 = new Animal("2");
/*9.- Modificar el constructor de la clase Gato para que admita un parámetro que sea la edad del animal, dentro del constructor de Gato llamar la constructor de Animal para pasar la edad que nos pasan como parámetro al contructor de Gato  */
Gato = function (edad) {
    Animal.call(this, edad);
};
/*10.- Crear un objeto de la clase Gato, llamado gatete, pasando como parámetro la edad 1 */
var gatete = new Gato("1");
console.log("la edad del gatete es " + gatete.edad)
/*11.- Incluir en la clase Gato un nuevo parámetro llamado nombre inicializarlo a "" */
Gato.prototype.nombre = "";
/*12.- Modificar el constructor de Gato para incluir un nuevo parámetro que sea el nombre del Gato */
var Gato = function (edad, nombre) {
    Animal.call(this, edad);
    this.nombre = nombre;
};
/*13.- Crear un nuevo objeto llamado gatete2 de la clase Gato, pasándole como parámetro 0 a la edad y nombre "Nyska" */
gatete2 = new Gato("0", "Nyska")
/*14.- Imprime el objeto por pantalla, así como su edad y su nombre */
console.log("El nombre de gatete2 es " + gatete2.nombre + " y la edad es " + gatete2.edad);


