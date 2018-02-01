// EJERCICIO CON JS5
console.log("Ejercicio con JS5")

/*
1.- Crea un fichero HTML relacionado con un fichero JS > OK
*/
/*
2.- Define una clase llamada Alumno que tenga las propiedades nombre, dni, tlf, email
*/
var Alumno = function (nombre = "", dni = "", tlf = "", email = "", notas = []) {
    this.nombre = nombre;
    this.dni = dni;
    this.tlf = tlf;
    this.email = email;
    this.notas = notas;
    this.getNombre = function () {
        return this.nombre;
    }
    this.getDni = function () {
        return this.dni;
    }
    this.getTlf = function () {
        return this.tlf;
    }
    this.getEmail = function () {
        return this.email;
    }
    this.getNotas = function () {
        return this.notas;
    }
    this.setNombre = function (nombre) {
        return this.nombre;
    }
    this.setDni = function (dni) {
        return this.dni;
    }
    this.setTlf = function (tlf) {
        return this.tlf;
    }
    this.setEmail = function (email) {
        return this.email;
    }
    this.setNotas = function (notas) {
        return this.notas;
    }
    this.addNota = function (nota) {
        this.notas.push(nota);
    }
    this.calculaNota = function () {
        var sumaNota = 0;
        var mediaNota = 0;
        for (i in this.notas) {
            sumaNota = sumaNota + this.notas[i].valor;
            return sumaNota;
        }
        mediaNota = sumaNota / this.notas[i].lenght;
        return mediaNota;
    }
    this.aprobado = function () {
        if (mediaNota < 5) {
            console.log("El alumno ha aprobado")
        } else {
            console.log("El alumno ha suspendido")
        }
    }

}

/*
3.- Crea un objeto de la clase Alumno
*/
var gian = new Alumno();
console.log(gian);
/*
4.- Añade los getter y setter a las clase Alumno
*/
/*
5.- Haz que el constructor de la clase Alumno permita meter los 4 valores a las 4 propiedades del objeto, haz que estos parámetros sean opcionales
*/
/*
6.- Crea otro objeto de la clase Alumno pero utilizando el nuevo constructor de la clase, pasando los 4 parámetros
*/
var eli = new Alumno("Elias", "2188891V", "687823111", "elias@generation.org")
console.log(eli);
/*
7.- Crea la clase Nota que tenga dos atributos: valor, asignatura
*/
var Nota = function (valor = "", asignatura = "") {
    this.valor = valor;
    this.asignatura = asignatura;
    this.getValor = function () {
        return this.valor;
    }
    this.getAsignatura = function () {
        return this.asignatura;
    }
    this.setValor = function (valor) {
        return this.valor;
    }
    this.setAsignatura = function (asignatura) {
        return this.asignatura;
    }
}
/*
8.- Crea un objeto de la clase Nota
*/
var mates1 = new Nota(2, "mates")
console.log(mates1)
/*
9.- Mete los getter y los setter de la clase Nota
*/
/*
10.- Modifica el constructor de la clase Nota para que admita 2 parámetros, uno para propiedad. Los parámetros deben poder ser opcionales.
*/
/*
11.- Crea un objeto de la clase Nota pero pasando los dos parámetro sen su creación
*/
var frances1 = new Nota(4, "frances")
console.log(frances1)
/*
12.- Mete un nuevo atributo en la clase alumno llamado notas. Este atributo tiene que ser del tipo Array. En el constructor inicialízalo por defecto a []
*/
/*
13.- en el constructor añade un parámetro más que será el array de notas
*/
/*
14.- Crea un getter y un setter para notas
*/
/*
15.- Crea un método en Alumno que permita introducir una nueva nota (al final del array de notas)
*/
/* // ESTO ES LA VERSION INCORECTA > SE TIENE QUE PONER LA FUNCION DENTRO DE LA CLASE VER L46
var addNota = function (nota) {
    Alumno.notas.push(nota);
}
*/
/*
16.- Crea un nuevo objeto Nota e introduce este nuevo objeto en un objeto de tipo Alumno mediante el método definido en el anterior ejercicio */
var filo1 = new Nota(9, "filo");
eli.addNota(filo1);
eli.addNota(mates1);
eli.addNota(frances1);
/*
17.- Crea un método que te haga la media de las notas de curso (todas las notas del array de notas)
*/

// ESTO ES LA VERSION INCORECTA > SE TIENE QUE PONER LA FUNCION DENTRO DE LA CLASE VER L46

/*
notaMedia = 0;
sumaNota = 0;
var calculoNotaMedia = function () {
    for (i in eli.notas) {
        sumaNota = sumaNota + eli.notas[i];
        return sumaNota;
    }
    notaMedia = sumaNota / eli.notas[i].length;
}
*/


console.log(eli.calculaNota());
/*
18.- Haz un programa que sea capaz de decirte si el alumno ha aprobado o no el curso.
*/


// EJERCICIO CON JS6
console.log(eli.aprobado())

/*
1.- Crea un fichero HTML relacionado con un fichero JS > OK
*/
/*
2.- Define una clase llamada Alumno que tenga las propiedades nombre, dni, tlf, email
*/
/*
3.- Crea un objeto de la clase Alumno
*/
/*
4.- Añade los getter y setter a las clase Alumno
*/
/*
5.- Haz que el constructor de la clase Alumno permita meter los 4 valores a las 4 propiedades del objeto, haz que estos parámetros sean opcionales
*/
/*
6.- Crea otro objeto de la clase Alumno pero utilizando el nuevo constructor de la clase, pasando los 4 parámetros
*/
/*
7.- Crea la clase Nota que tenga dos atributos: valor, asignatura
*/
/*
8.- Crea un objeto de la clase Nota
*/
/*
9.- Mete los getter y los setter de la clase Nota
*/
/*
10.- Modifica el constructor de la clase Nota para que admita 2 parámetros, uno para propiedad. Los parámetros deben poder ser opcionales.
*/
/*
11.- Crea un objeto de la clase Nota pero pasando los dos parámetro sen su creación
*/
/*
12.- Mete un nuevo atributo en la clase alumno llamado notas. Este atributo tiene que ser del tipo Array. En el constructor inicialízalo por defecto a []
*/
/*
13.- en el constructor añade un parámetro más que será el array de notas
*/
/*
14.- Crea un getter y un setter para notas
*/
/*
15.- Crea un método en Alumno que permita introducir una nueva nota (al final del array de notas)
*/
/*
16.- Crea un nuevo objeto Nota e introduce este nuevo objeto en un objeto de tipo Alumno mediante el método definido en el anterior ejercicio */
/*
17.- Crea un método que te haga la media de las notas de curso (todas las notas del array de notas)
*/
/*
18.- Haz un programa que sea capaz de decirte si el alumno ha aprobado o no el curso.
*/
