var db;

function pintaDatos(datos){
    listado.innerHTML="";
        for (var item of datos){
            listado.innerHTML+="<li>"+item.name+"<button class='borrar' id='item-"+item.id+"' data-id='"+item.id+"'>borrar</button</li>";
           var botonid="item-"+item.id;
            console.log(botonid);
            var miboton=document.getElementById(botonid);
            miboton.addEventListener("click",function(event){
                console.log("borrando");
                var id=event.target.data-id;
                transaction = db.transaction(["employee"]);
                objectStore = transaction.objectStore("employee");
                var cogido=objectStore.get(item.id);
                cogido.onsuccess=function(){
                    console.log("objeto encontrado");
                    transaction = db.transaction(["employee"],"readwrite");
                    objectStore = transaction.objectStore("employee");
                    var borrado=objectStore.delete(item.id);
                    borrado.onsuccess=function(){
                        console.log("borrado");
                        miboton.parentElement.parentElement.removeChild(miboton.parentElement);
                    }
                }

            });
        }
}
function cogeTodos(){
    var transaction = db.transaction(["employee"]);
    var objectStore = transaction.objectStore("employee");
    var datos=[];
    var miCursor=objectStore.openCursor();
    miCursor.onsuccess = function(event) {
        var cursor = event.target.result;
        if(cursor) {
            console.log(cursor.value);
            datos.push(cursor.value);
            cursor.continue();
        } else {
            console.log('Entries all displayed.');
            pintaDatos(datos);
        }

    };
    miCursor.onerror=function(evento){
        console.log("Algo ha ido chungo");
    };

    /*
    Con la especifiación v2 tenemos el getAll()
    var peticion=objectStore.getAll();
    console.log(peticion);
    peticion.onsuccess=function(evento){
        console.log(peticion.result);
        var listado=document.getElementById("listado");
        pintaDatos(peticion.result);
    }
    peticion.onerror=function(evento){
        console.log("Algo ha ido chungo");
    }
    */
}

function lee() {
    var transaction = db.transaction(["employee"]);
    var objectStore = transaction.objectStore("employee");
    var request = objectStore.get("02");

    request.onerror = function (event) {
        console.log("Error de lectura de la bbdd");
    };

    request.onsuccess = function (event) {
        if (request.result) {
            console.log("Name: " + request.result.name + ", Age: " + request.result.age + ", Email: " + request.result.email);
        } else {
            console.log("No se ha podido leer de la bbdd");
        }
    };
}

function escribe() {
    var request = db.transaction(["employee"], "readwrite")
        .objectStore("employee")
        .add({
            id: "02",
            name: "Pepe",
            age: 39,
            email: "pepesan@gmail.com"
        });

    request.onsuccess = function (event) {
        console.log("Dato añadido a la BBDD");
    };

    request.onerror = function (event) {
        console.log("No se ha podido añadir a la BBDD");
    }
}
function modifica() {
    var request = db.transaction(["employee"], "readwrite")
        .objectStore("employee")
        .put({
            id: "02",
            name: "Pepe",
            age: 40,
            email: "pepesan@gmail.com"
        });

    request.onsuccess = function (event) {
        console.log("Dato modificado a la BBDD");
    };

    request.onerror = function (event) {
        console.log("No se ha podido modificar la BBDD");
    }
}

function conectaDB() {
    console.log("conecta DDBB");
    window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

    window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
    window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange
    var request = window.indexedDB.open("newDatabase", 1);

    request.onerror = function (event) {
        console.log("error: ");
    };

    request.onsuccess = function (event) {
        db = request.result;
        console.log("success: " + db);
    };

    request.onupgradeneeded = function (event) {
        var db = event.target.result;
        var objectStore = db.createObjectStore("employee", {
            keyPath: "id"
        });
        /*
        for (var i in employeeData) {
            objectStore.add(employeeData[i]);
        }
        */
    }
}

function init() {
    console.log("init");
    conectaDB();

    if (!window.indexedDB) {
        console.log("Your browser doesn't support a stable version of IndexedDB.")
    } else {
        console.log("IndexedDB HTML5 está soportada en este navegador.");
        document.getElementById("escribeDB").addEventListener("click", escribe);
        document.getElementById("leeDB").addEventListener("click", lee);
        document.getElementById("cogeTodos").addEventListener("click", cogeTodos);
        document.getElementById("modificaDB").addEventListener("click", modifica);
    }



}
document.addEventListener("DOMContentLoaded", init);
