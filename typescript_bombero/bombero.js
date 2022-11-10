/*
TRABAJANDO CON GETTER Y SETTER:
Define una clase Bombero considerando los siguientes atributos de clase: nombre (String), apellidos (String),
edad (int), casado (boolean), especialista (boolean). Define un constructor que reciba los parámetros necesarios
para la inicialización y los métodos para poder establecer y obtener los valores de los atributos.
Compila el código para comprobar que no presenta errores, crea un objeto y comprueba que se inicializa correctamente
consultando el valor de sus atributos después de haber creado el objeto.

*/
//Hay que cambiar el target en tscongi a es5 y ejecutar tsc -t es5 bombero.ts -w
//ya que getter y setter está en ECMASCRIPT ES5
var Bombero = /** @class */ (function () {
    function Bombero() {
        this._nombre = "Paul";
        this._edad = 34;
        this._casado = false;
        this._especialista = true;
    }
    Bombero.prototype.contructor = function () {
    };
    Object.defineProperty(Bombero.prototype, "mostrarNombre", {
        //getter
        get: function () {
            return this._nombre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bombero.prototype, "mostrarEdad", {
        get: function () {
            return this._edad;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bombero.prototype, "mostrarCasado", {
        get: function () {
            return this._casado;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bombero.prototype, "mostrarEspecialista", {
        get: function () {
            return this._especialista;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bombero.prototype, "cambiarNombre", {
        //setter
        set: function (nombre_) {
            this._nombre = nombre_;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bombero.prototype, "cambiarEdad", {
        set: function (edad_) {
            this._edad = edad_;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bombero.prototype, "cambiarCasado", {
        set: function (casado_) {
            this._casado = casado_;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bombero.prototype, "cambiarEspecialidad", {
        set: function (especialista_) {
            this._especialista = especialista_;
        },
        enumerable: false,
        configurable: true
    });
    return Bombero;
}());
function main() {
    var bombero1 = new Bombero();
    console.log(bombero1.mostrarNombre);
    console.log(bombero1.mostrarEdad);
    console.log(bombero1.mostrarCasado);
    console.log(bombero1.mostrarEspecialista);
    bombero1.cambiarNombre = "Charles";
    bombero1.cambiarEdad = 45;
    bombero1.cambiarCasado = true;
    bombero1.cambiarEspecialidad = false;
    console.log(bombero1.mostrarNombre);
    console.log(bombero1.mostrarEdad);
    console.log(bombero1.mostrarCasado);
    console.log(bombero1.mostrarEspecialista);
}
main();
