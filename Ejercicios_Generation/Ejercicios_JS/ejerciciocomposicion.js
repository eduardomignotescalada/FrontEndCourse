/* 1.- Crea un fichero HTML relacionado con un fichero JS */
/* 2.- Define una clase llamada Alumno que tenga las propiedades nombre, dni, tlf, email*/
/* 3.- Crea un objeto de la clase Alumno */
/* 4.- Añade los getter y setter a las clase Alumno */
/* 5.- Haz que el constructor de la clase Alumno permita meter los 4 valores a las 4 propiedades del objeto, haz que estos parámetros sean opcionales */
/* 6.- Crea otro objeto de la clase Alumno pero utilizando el nuevo constructor de la clase, pasando los 4 parámetros */
/* 7.- Crea la clase Nota que tenga dos atributos: valor, asignatura */
/* 8.- Crea un objeto de la clase Nota */
/* 9.- Mete los getter y los setter de la clase Nota */
/* 10.- Modifica el constructor de la clase Nota para que admita 2 parámetros, uno para propiedad. Los parámetros deben poder ser opcionales.  */
/* 11.- Crea un objeto de la clase Nota pero pasando los dos parámetro sen su creación */
/* 12.- Mete un nuevo atributo en la clase alumno llamado notas. Este atributo tiene que ser del tipo Array. En el constructor inicialízalo por defecto a [] */
/* 13.- en el constructor añade un parámetro más que será el array de notas */
/* 14.- Crea un getter y un setter para notas */
/* 15.- Crea un método en Alumno que permita introducir una nueva nota (al final del array de notas) */
/* 16.- Crea un nuevo objeto Nota e introduce este nuevo objeto en un objeto de tipo Alumno mediante el método definido en el anterior ejercicio */
/* 17.- Crea un método que te haga la media de las notas de curso (todas las notas del array de notas) */
/* 18.- Haz un programa que sea capaz de decirte si el alumno ha aprobado o no el curso. */


/* 7.- Crea la clase Nota que tenga dos atributos: valor, asignatura */
/* 10.- Modifica el constructor de la clase Nota para que admita 2 parámetros, uno para cada propiedad. Los parámetros deben poder ser opcionales.  */
var Nota = function (valor=0, asignatura = "") {
    this.valor = valor;
    this.asignatura = asignatura;
    /* 9.- Mete los getter y los setter de la clase Nota */
    this.setValor = function (valor) {
        this.valor = valor;
    };
    this.setAsignatura = function (asignatura) {
        this.asignatura = asignatura;
    };
    this.getvalor = function () {
        return this.valor;
    };
    this.getAsignatura = function () {
        return this.asignatura;
    };
}



/* 1.- Crea un fichero HTML relacionado con un fichero JS > OK */
/* 2.- Define una clase llamada Alumno que tenga las propiedades nombre, dni, tlf, email*/
/* 5.- Haz que el constructor de la clase Alumno permita meter los 4 valores a las 4 propiedades del objeto, haz que estos parámetros sean opcionales */
/* 13.- en el constructor añade un parámetro más que será el array de notas */

var Alumno = function (nombre = " ", dni = " ", tlf = " ", email = " ",notas=[]) {
    this.nombre = nombre;
    this.dni = dni;
    this.tlf = tlf;
    this.email = email;
    this.notas = notas;

    /* 4.- Añade los getter y setter a las clase Alumno */
    this.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    this.setDni = function (dni) {
        this.dni = dni;
    };
    this.setTlf = function (tlf) {
        this.tlf = tlf;
    };
    this.setEmail = function (email) {
        this.email = email;
    };
    /* 14.- Crea un getter y un setter para notas */
    this.setNotas = function (notas) {
        this.notas = notas;
    };
    this.getNombre = function () {
        return this.nombre;
    };

    this.getDni = function () {
        return this.dni;
    };
    this.getTlf = function () {
        return this.tlf;
    };

    this.getEmail = function () {
        return this.email;
    };
    /* 14.- Crea un getter y un setter para notas */
    this.getNotas = function () {
        return this.notas;
    };
}

/* 3.- Crea un objeto de la clase Alumno */
var juan = new Alumno();
console.log("Los datos del alumno Juan al crearo desde cero son nombre " + juan.nombre + ", dni " + juan.dni + ", telefono" + juan.tlf + " " + juan.email + ", notas " + juan.notas)
/* 6.- Crea otro objeto de la clase Alumno pero utilizando el nuevo constructor de la clase, pasando los 4 parámetros */
var pedro = new Alumno("Pedro", "21888872B", "687 847 333", "pedro.github@gmail.com")
console.log("El email de Pedro es " + pedro.email)

/* 8.- Crea un objeto de la clase Nota */
var frances1 = new Nota();
/* 11.- Crea un objeto de la clase Nota pero pasando los dos parámetro sen su creación */
var mates1 = new Nota("10", "mates");
console.log("La nota de la asignatura " + mates1.asignatura + " es " + mates1.valor);
/* 12.- Mete un nuevo atributo en la clase alumno llamado notas. Este atributo tiene que ser del tipo Array. En el constructor inicialízalo por defecto a [] */
// Alumno.prototype.notas = [1,2];
// console.log(Alumno);

/* 15.- Crea un método en Alumno que permita introducir una nueva nota (al final del array de notas) */
/*  var nuevanota = function (nota1) {
    Alumno.notas.push(nota1);
}; */
/* 16.- Crea un nuevo objeto Nota e introduce este nuevo objeto en un objeto de tipo Alumno mediante el método definido en el anterior ejercicio */
juan.notas.push(new Nota(5,"Matematicas"));
console.log(juan.notas);

array = [];
notaTotal = 0;
notaMedia = 0;
for (i in juan.notas.valor) {
    notaTotal = notaTotal + juan.notas.valor[i];
    notaMedia = notaTotal / juan.notas.valor.length;
}
console.log("la nota media de juan es " + notaMedia);

/* 17.- Crea un método que te haga la media de las notas de curso (todas las notas del array de notas) */

/* 18.- Haz un programa que sea capaz de decirte si el alumno ha aprobado o no el curso. */

if (notaMedia > 5) {
    console.log("el alumno ha aprobado con una nota de " + notaMedia)
} else {
    console.log("el alumno ha suspendido con una nota de " + notaMedia)
}
