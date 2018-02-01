// PARA JS5
console.log("Ejercicio empezando con JS5");
/*
1.- Crea un fichero HTML que incluya un fichero JS externo. */
/*
2.- Crea una clase que permita disponer de las características de una moto, la clase de llamará Moto.
*/
var Moto = function (matricula="", km = "O") {
    this.matricula = matricula;
    this.km = km;
    this.getMatricula = function () {
        return this.matricula;
    }
    this.setMatricula = function (matricula) {
        this.matricula = km;
    }
    this.getKm = function () {
        return this.km;
    }
    this.setKm = function (km) {
        this.km = km;
    }
}
/*
3.- Di que la clase Moto tiene una característica llamada matricula
*/

/*
4. Crea un objeto de la clase Moto llamado miburra
*/
var miburra = new Moto();
/*
5.- Cambia la propiedad matrícula de miburra por el valor "SA1234H"
*/
miburra.matricula = "SA1234H";
/*
6.- Imprime por pantalla el valor de la matrícula de miburra
*/
console.log("la matricula de mi burra es " + miburra.matricula);
/*
7.- Coloca dentro de la clase Moto otra propiedad llamada km
*/
/*
8.- Haz que cada vez que se cree un objeto de la clase Moto ese objeto tenga 0 km
*/


/*
9.- Demuéstralo creando otro objeto de la clase Moto e imprimiendo este valor por pantalla
*/

var mitwingo = new Moto();
console.log("mytwingo tiene este numero de kilometros por defecto: " + mitwingo.km)


/*
10.- Crea los getter y setter de km y matricula para la clase Moto
*/



/*
11.- Utilízalos desde el objeto miburra
*/
miburra.setKm(2);
var matriculamiburra = miburra.getMatricula(); // cuidado con los ()
console.log("matricula de mi burra es " + matriculamiburra)

/*
12.- Haz que el constructor de la clase Moto pueda disponer de dos parámetros para las dos propiedades de Moto: km y matricula
*/

/*
13.- Construye otro objeto de clase moto, llamando a este nuevo constructor con dos parámetro y comprueba que ha rellenado correctamente las propiedades de ese nuevo objeto con los parámetros del constructor
*/
var mipolo = new Moto("1234555", "120");
console.log(mipolo);
/*
14.- Crea una clase llamada Animal, que tenga una propiedad  llamada edad, que sea inicializada a 0
*/
var Animal = function (edad = "0") {
    this.edad = edad;
}
/*
15.- Crea un objeto de la clase Aminal, llamado animalico
*/
var animalico = new Animal();
/*
16.- Imprime por pantalla el objeto animalico y la propiedad edad del objeto
*/
console.log("La edad del animal por defecto es " + animalico.edad)
/*
17.- Cambia la edad de animalico a 3
*/
animalico.edad = 3;

/*
18.- Imprime por pantalla la edad de animalico
*/
console.log("La edad del animal despues de cambiar es " + animalico.edad)


// PARA JS6
console.log("Ejercicio empezando con JS6");
/*
1.- Crea un fichero HTML que incluya un fichero JS externo. */
/*
2.- Crea una clase que permita disponer de las características de una moto, la clase de llamará Moto.
*/
class Moto2 {
    constructor(matricula, km = "0") {
        this.matricula = matricula;
        this.km = km;
    }
    getMatricula() {
        return this.matricula;
    }
    setMatricula(matricula) {
        this.matricula = km;
    }
    getKm() {
        return this.km;
    }
    setKm(km) {
        this.km = km;
    }
}
/*
3.- Di que la clase Moto tiene una característica llamada matricula
*/

/*
4. Crea un objeto de la clase Moto llamado miburra
*/
var miburra2 = new Moto2();
/*
5.- Cambia la propiedad matrícula de miburra por el valor "SA1234H"
*/
miburra2.matricula = "SA1234H";
/*
6.- Imprime por pantalla el valor de la matrícula de miburra
*/
console.log("la matricula de mi burra es " + miburra2.matricula);
/*
7.- Coloca dentro de la clase Moto otra propiedad llamada km
*/
/*
8.- Haz que cada vez que se cree un objeto de la clase Moto ese objeto tenga 0 km
*/


/*
9.- Demuéstralo creando otro objeto de la clase Moto e imprimiendo este valor por pantalla
*/

var mitwingo2 = new Moto2();
console.log("mytwingo tiene este numero de kilometros por defecto: " + mitwingo2.km)


/*
10.- Crea los getter y setter de km y matricula para la clase Moto
*/



/*
11.- Utilízalos desde el objeto miburra
*/
miburra2.setKm(2);
var matriculamiburra2 = miburra.getMatricula(); // cuidado con los ()
console.log("matricula de mi burra es " + matriculamiburra)

/*
12.- Haz que el constructor de la clase Moto pueda disponer de dos parámetros para las dos propiedades de Moto: km y matricula
*/

/*
13.- Construye otro objeto de clase moto, llamando a este nuevo constructor con dos parámetro y comprueba que ha rellenado correctamente las propiedades de ese nuevo objeto con los parámetros del constructor
*/
var mipolo = new Moto("1234555", "120");
console.log(mipolo);
/*
14.- Crea una clase llamada Animal, que tenga una propiedad  llamada edad, que sea inicializada a 0
*/
class Animal2 {
    constructor(edad = "0") {
        this.edad = edad;
    }
}
/*
15.- Crea un objeto de la clase Aminal, llamado animalico
*/
var animalico2 = new Animal2();
/*
16.- Imprime por pantalla el objeto animalico y la propiedad edad del objeto
*/
console.log("La edad del animal-2 por defecto es " + animalico2.edad)
/*
17.- Cambia la edad de animalico a 3
*/
animalico2.edad = 3;

/*
18.- Imprime por pantalla la edad de animalico
*/
console.log("La edad del animal2 despues de cambiar es " + animalico2.edad)
