/* 1.- Crea un fichero HTML que incluya un fichero JS externo
2.- Crea una clase que permita disponer de las características de una moto, la clase de llamará Moto.
3.- Di que la clase Moto tiene una característica llamada matricula
4.- Crea un objeto de la clase Moto llamado miburra
5.- Cambia la propiedad matrícula de miburra por el valor "SA1234H"
6.- Imprime por pantalla el valor de la matrícula de miburra
7.- Coloca dentro de la clase Moto otra propiedad llamada km
8.- Haz que cada vez que se cree un objeto de la clase Moto ese objeto tenga 0 km
9.- Demuéstralo creando otro objeto de la clase Moto e imprimiendo este valor por pantalla
10.- Crea los getter y setter de km y matricula para la clase Moto
11.- Utilízalos desde el objeto miburra
12.- Haz que el constructor de la clase Moto pueda disponer de dos parámetros para las dos propiedades de Moto: km y matricula
13.- Construye otro objeto de clase moto, llamando a este nuevo constructor con dos parámetro y comprueba que ha rellenado correctamente las propiedades de ese nuevo objeto con los parámetros del constructor
14.- Crea una clase llamada Animal, que tenga una propiedad  llamada edad, que sea inicializada a 0
15.- Crea un objeto de la clase Aminal, llamado animalico
16.- Imprime por pantalla el objeto animalico y la propiedad edad del objeto
17.- Cambia la edad de animalico a 3
18.- Imprime por pantalla la edad de animalico
*/



/*function init() {
    console.log("DOM Cargado Normal");*/


/* 1.- Crea un fichero HTML que incluya un fichero JS externo. */
// DONE BEFORE

/* 2.- Crea una clase que permita disponer de las características de una moto, la clase de llamará Moto. */
class Moto {
    /*  3.- Di que la clase Moto tiene una característica llamada matricula  */
    constructor(matricula, km) {
        this.matricula = matricula;
        /* 7.- Coloca dentro de la clase Moto otra propiedad llamada km */
        /* 8.- Haz que cada vez que se cree un objeto de la clase Moto ese objeto tenga 0 km */
        this.km = km || "0";
    }
}
/* 4. Crea un objeto de la clase Moto llamado miburra  > probando un cambio*/
var miburra = new Moto();

/* 5.- Cambia la propiedad matrícula de miburra por el valor "SA1234H" */
miburra.matricula = "SA1234H"
    /* 6.- Imprime por pantalla el valor de la matrícula de miburra */
console.log("La matricula de miburra es " + miburra.matricula)
    /* 9.- Demuéstralo creando otro objeto de la clase Moto e imprimiendo este valor por pantalla */
var miferarri = new Moto();
console.log("Los Km por defecto de de miferarri es " + miferarri.km)
    /* 10.- Crea los getter y setter de km y matricula para la clase Moto */

//Setter
/* setKm(km){
    this.km = km
};
setMatricula(matricula) {
    this.matricula = matricula
};
//Getter
getKm() {
    console.log(this.km)
};
getMatricula() {
    console.log(this.matricula);
};
*/
/* 11.- Utilízalos desde el objeto miburra */
/* 12.- Haz que el constructor de la clase Moto pueda disponer de dos parámetros para las dos propiedades de Moto: km y matricula */

/* 13.- Construye otro objeto de clase moto, llamando a este nuevo constructor con dos parámetro y comprueba que ha rellenado correctamente las propiedades de ese nuevo objeto con los parámetros del constructor */
/* 14.- Crea una clase llamada Animal, que tenga una propiedad  llamada edad, que sea inicializada a 0 */
class Animal {
    constructor(edad) {
        // https://stackoverflow.com/questions/31342290/es6-classes-default-value
        this.edad = edad || "0";
    }
}
/* 15.- Crea un objeto de la clase Aminal, llamado animalico */
var animalico = new Animal()
    /* 16.- Imprime por pantalla el objeto animalico y la propiedad edad del objeto */
console.log("La edad por defecto de mi animal es " + animalico.edad)
    /* 17.- Cambia la edad de animalico a 3 */
animalico.edad = 3
    /* 18.- Imprime por pantalla la edad de animalico */
console.log("La edad una vez cambiada de mi animal es " + animalico.edad)




/*
}

document.addEventListener("DOMContentLoaded", init);*/