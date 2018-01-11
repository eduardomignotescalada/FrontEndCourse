/*
1.- Crea una función llamada calculaTotalLinea a la cual se le pasen dos parámetros llamados importe y unidades, deberá de devolver el total de multiplicar ambas cantidades
2.- Llama a la función calculaTotalLínea pasándole como parámetros 2 y 5 almacena el resultado en una variable llamada línea1
3.- Llama a la función calculaTotalLínea pasándole como parámetros 4 y 7 almacena el resultado en una variable llamada línea2
4.- Declara una variable de tipo Array llamada lineas
5.- Mete las dos variables linea1 y linea2 en el array lineas
6.- Crea una función llamada calculaBaseImponible que sea capaz de sumar todos los números almacenados en un array y devolver el resultado
7.- Llama a la función calculaBaseImponible pasándole como parámetro el array lineas, almacena el resultado en una variable llamada baseImponible
8.- Crea una función calculaIVA que calcule el IVA de la factura, para ello le meteremos dos parámetros: el primero será la base imponible y el segundo el % de IVA a calcular, devolverá el resultado de la fórmula: r=b*X%IVA donde X es el segundo parámetro, b es la base imponible y r es el resultado de la cuenta. Ejemplo si la base imponible es 100 y el IVA es del 21% el resultado deberá ser 21
9.- Llama a la función calculaIVA pasándole como parámetro la variable BaseImponible y 21 como % de IVA, almacena el resultado en una variable llamada totalFactura
10.- Crea una función calculaIRPF que calcule la retención de IRPF, se le pasarán dos parámetros, el primero es la baseImponible y el segundo es el % de retención, devolverá el resultado de la siguiente fórmula: -r=b*X%IRFP r es el resultado final, X es el % de IRPF y b es la base imponible. Por ejemplo si la base imponible es 100 y el % de IRPF es el 15 el resultado será -15
11.- Llama a la función calculaIRPF pasándole como parámetros la variable baseImponible y 15 como % de IRPF almacena el valor en la variable retencion
Para calcular el precio total de la factura a pagar es necesario realizar la siguiente cuenta: totalFactura=baseimponible+IVA-IRPF. Ejemplo baseImponible  100, IVA 21% e IRPF 15% = 100+21-15=106. Para ello crearemos una función llamada calculaTotalFactura a la que se le pasan los tres parámetros, base imponible, la cantidad de IVA y la cantidad de retención. Devolverá el valor del total a pagar de la factura
12.- Llama a la función calculaTotalFactura pasándole las variables baseImponible, totalIVA y totalIRFP, almacena el valor que devuelve la función en una variable llamada totalARecibir
*/



var calculaTotalLinea = function calculaTotalLinea(importe,unidades) {
    return (importe*unidades)
}
var linea1=calculaTotalLinea(2,5);
var linea2=calculaTotalLinea(4,7);
lineas=[];
lineas[0]=linea1;
lineas[1]=linea2;

var BaseImponible=0;
var tuarray=[];
tuarray=[1,2,3];
function calculaBaseImponible(tuarray) {
    for (i in tuarray) {
        BaseImponible = BaseImponible + tuarray[i];}
        console.log("La base Imponible es de: "+BaseImponible);
return BaseImponible;};

calculaBaseImponible(tuarray)

var BaseImponible1=0;
lineas;
function calculaBaseImponible1(lineas) {
for (i in lineas){
    BaseImponible1 = BaseImponible1 + lineas[i];}
    console.log("La base Imponible es de: "+BaseImponible1);
return BaseImponible1;};

calculaBaseImponible1(lineas);

var PorcentageIva = 0.21;

function calculaIVA (BaseImponible1,PorcentageIva) {
r = BaseImponible1 * PorcentageIva;
    console.log("El importe del IVA es de: "+r);
return r;}

calculaIVA (BaseImponible1,PorcentageIva);

var PorcentageIRPF = 0.15;

function calculaIRPF (BaseImponible1,PorcentageIRPF) {
r2= BaseImponible1 * PorcentageIRPF;
    console.log("El importe del IRPF es de: "+r2);
return r2;}

calculaIRPF (BaseImponible1,PorcentageIRPF) ;

var TotalFactura = 0;

function calculaTotalFactura (BaseImponible1,r,r2) {
TotalFactura = BaseImponible1 + r - r2;
    console.log("El Total de la factura: "TotalFactura);
return TotalFactura; }

calculaTotalFactura (BaseImponible1,r,r2)

TotalFactura


var ingresos=[10,28];
var iva=0.21;
var irpf=0.15;
var BaseImpon=0;
var TotalFacture=0;
var i = 0;

/*Para hacer que sea haga en dos funciones unicamente */
function calculaBaseImpon (ingresos) {
    for (i in ingresos){
    BaseImpon = BaseImpon + ingresos[i];}
    console.log("La base Imponible es de:"+BaseImpon)
    return BaseImpon;}

calculaBaseImpon (ingresos)

function CalculaTotalFacture (BaseImpon,iva,irpf) {
    TotalFacture= BaseImpon + (BaseImpon*iva) - (BaseImpon*irpf);
     console.log("La Factura Total es de:"+TotalFacture)
return TotalFacture;}

CalculaTotalFacture (BaseImpon,iva,irpf)

/*La coreccione esta en el git hub del profe */


var michoche= {
marca:”Toyata”,
matricula:”SADSAdas”,
modelo:”Auris”,
Km:1200,
recorrer:function(numKm) { this.km+=numKm;}
};
console.log(micoche.marca);

/*Para obetener el dominio y el usuario */
var email = "pepesan@gmail.com";
var p = email.indexOf("@");
var emailend = email.substr(p+1);
var emailbegin = email.substring(0,p);

/*Para entender la differencia entre subst y substring */
var teststring = "Hello World ";
test2 = teststring.substr(4,5);
test3 = teststring.substring(4,5);
test2;
test3;

var paratrim = "  dos   tres    cuatro     cinco    seis   "
trimthetext = paratrim.trim();









