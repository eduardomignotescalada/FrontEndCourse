// CON JS5
console.log("Ejercicio empezando con JS5");

/*
0.- Crea un fichero HTML que incluya un fichero JS externo > OK
*/
/*
1.- Crea una clase llamada Animal, que tenga una propiedad  llamada edad, que sea inicializada a 0
*/
var Animal = function (edad = "0") {
    this.edad = edad;
    this.getEdad = function () {
        return this.edad;
    }
    this.setEdad = function (edad) {
        this.edad = km;
    }
}
/*
2.- Crea un objeto de la clase Aminal, llamado animalico
*/
var animalico = new Animal()
/*
3.- Imprime por pantalla el objeto animalico y la propiedad edad del objeto
*/
console.log("La edad por defecto de animalico es " + animalico.edad)
/*
4.- Cambia la edad de animalico a 3
*/
animalico.edad = 3
/*
5.- Imprime por pantalla la edad de animalico
*/
console.log("La nueva edad de animalico es " + animalico.edad)
/*
6.- Crea una nueva clase Gato que herede de Animal
*/
var Gato = function (edad, nombre="") {
    Animal.call(this, edad);
    this.nombre = nombre;
}
/*
7.-El constructor de Animal le podré pasar la edad para rellenar la edad del Animal (reescribir el constructor)
*/
/*
8.- Crea un objeto llamado animalico2 que se construya en base a la clase Animal, pasa como parámetro al constructor de Animal el número 2
*/
var animalico2 = new Animal(2);
console.log("La  edad de animalico2 es " + animalico2.edad)
/*
9.- Modificar el constructor de la clase Gato para que admita un parámetro que sea la edad del animal, dentro del constructor de Gato llamar la constructor de Animal para pasar la edad que nos pasan como parámetro al contructor de Gato
*/
/*
10.- Crear un objeto de la clase Gato, llamado gatete, pasando como parámetro la edad 1
*/
var gatete = new Gato(2, "gatete");
console.log("El nuevo gato se llama " + gatete.nombre + " y su edad es " + gatete.edad)
/*
11.- Incluir en la clase Gato un nuevo parámetro llamado nombre inicializarlo a ""
*/
/*
12.- Modificar el constructor de Gato para incluir un nuevo parámetro que sea el nombre del Gato
*/
/*
13.- Crear un nuevo objeto llamado gatete2 de la clase Gato, pasándole como parámetro 0 a la edad y nombre "Nyska"
*/
var gatete2 = new Gato(0, "Nyska");
console.log("El nuevo gato se llama "+ gatete2.nombre + " y su edad es " + gatete2.edad)
/*
14.- Imprime el objeto por pantalla, así como su edad y su nombre
*/


// CON JS6
console.log("Ejercicio empezando con JS6");
/*
0.- Crea un fichero HTML que incluya un fichero JS externo > OK
*/
/*
1.- Crea una clase llamada Animal, que tenga una propiedad  llamada edad, que sea inicializada a 0
*/
class Animala {
    constructor(edad = "0") {
        this.edad = edad;
    }
    getEdad() {
        return this.edad;
    }
    setEdad(edad) {
        this.edad = km;
    }
}
/*
2.- Crea un objeto de la clase Aminal, llamado animalico
*/
var animalica = new Animala()
/*
3.- Imprime por pantalla el objeto animalico y la propiedad edad del objeto
*/
console.log("La edad por defecto de animalico es " + animalica.edad)
/*
4.- Cambia la edad de animalico a 3
*/
animalica.edad = 3
/*
5.- Imprime por pantalla la edad de animalico
*/
console.log("La nueva edad de animalico es " + animalica.edad)
/*
6.- Crea una nueva clase Gato que herede de Animal
*/
class Gata extends Animala {
    constructor(edad, nombre = "") {
        super(edad);
        this.nombre = nombre;
    }
}

/*
7.-El constructor de Animal le podré pasar la edad para rellenar la edad del Animal (reescribir el constructor)
*/
/*
8.- Crea un objeto llamado animalico2 que se construya en base a la clase Animal, pasa como parámetro al constructor de Animal el número 2
*/
var animalica2 = new Animala(2);
console.log("La  edad de animalico2 es " + animalica2.edad)
/*
9.- Modificar el constructor de la clase Gato para que admita un parámetro que sea la edad del animal, dentro del constructor de Gato llamar la constructor de Animal para pasar la edad que nos pasan como parámetro al contructor de Gato
*/
/*
10.- Crear un objeto de la clase Gato, llamado gatete, pasando como parámetro la edad 1
*/
var gateta = new Gata(2, gateta);
console.log("El nuevo gato se llama " + gateta.nombre + " y su edad es " + gateta.edad)
/*
11.- Incluir en la clase Gato un nuevo parámetro llamado nombre inicializarlo a ""
*/
/*
12.- Modificar el constructor de Gato para incluir un nuevo parámetro que sea el nombre del Gato
*/
/*
13.- Crear un nuevo objeto llamado gatete2 de la clase Gato, pasándole como parámetro 0 a la edad y nombre "Nyska"
*/
var gateta2 = new Gata(0, "Wyska");
console.log("El nuevo gato se llama " + gateta2.nombre + " y su edad es " + gateta2.edad)
/*
14.- Imprime el objeto por pantalla, así como su edad y su nombre
*/
