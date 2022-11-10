/*
Crear una interfaz Vehiculo de la cual heredan VehiculoTerrestre y VehiculoMaritimo
Vehiculo tiene un atributo fabricante y tres métodos:
    . arrancarMotor
    . repostar
    . detenerMotor
VehiculoTerrestre tiene un método específico que es conducir
VehiculoMaritulo tiene tres métodods:
    . sonarSirena
    . encenderChimenea
    . detenerChimenea

Crear un método procesarTerrestre que llame a los métodos de la clase VehiculoTerrestre
Crear un método procesarMaritimo que llame a los métodos de la clase VehículoMarítimo
*/
var OpelCorsa = /** @class */ (function () {
    function OpelCorsa() {
        this.fabricante = "Opel";
    }
    OpelCorsa.prototype.conducir = function () {
        console.log("Se está conduciendo el auto");
    };
    OpelCorsa.prototype.arrancarMotor = function () {
        console.log("El motor se ha arrancado");
    };
    OpelCorsa.prototype.repostar = function () {
        console.log("Echando 20 € de gasolina");
    };
    OpelCorsa.prototype.detenerMotor = function () {
        console.log("Se ha deternido el motor");
    };
    return OpelCorsa;
}());
var Titanic = /** @class */ (function () {
    function Titanic() {
        this.fabricante = "Barcos S.L";
    }
    Titanic.prototype.sonarSirena = function () {
        console.log("La sirena suena");
    };
    Titanic.prototype.encenderChimenea = function () {
        console.log("Se ha encendido la chimenea");
    };
    Titanic.prototype.detenerChimenea = function () {
        console.log("Se ha detenido la chimenea");
    };
    Titanic.prototype.arrancarMotor = function () {
        console.log("El motor se ha arrancado");
    };
    Titanic.prototype.repostar = function () {
        console.log("Echando 100 € de gasolina");
    };
    Titanic.prototype.detenerMotor = function () {
        console.log("Se ha deternido el motor");
    };
    return Titanic;
}());
function procesarTerrestre(v) {
    console.log("FABRICANTE: " + v.fabricante);
    v.arrancarMotor();
    v.repostar();
    v.conducir();
    v.detenerMotor();
}
function procesarMaritimo(b) {
    console.log("FABRICANTE: " + b.fabricante);
    b.arrancarMotor();
    b.encenderChimenea();
    b.detenerChimenea;
    b.repostar();
}
var cocheOpel = new OpelCorsa();
var barcoTitanic = new Titanic();
procesarTerrestre(cocheOpel);
procesarMaritimo(barcoTitanic);
