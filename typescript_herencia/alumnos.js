/*
Enunciado:

Crea 4 clases,
Usuario (clase abstracta),
Estudiante (hereda de Usuario),
Invitado (hereda de Usuario)
Administrador (hereda de Usuario y tiene nivel),
Cada uno con sus atributos (no hacen falta métodos).
Debes crear un objeto literal con una lista de nombres y passwords.

Para cada elemento:
Si es de tipo Invitado, debes mostrarle el mensaje "No estás autorizado a entrar en esta lección".
Si es de tipo Estudiante, debes comprobar que su $nombre y $password existe y mostrar el mensaje "Bienvenid@ a OpenVitae, $nombre".
Si es de tipo Administrador y su nivel es 1, debes mostrar el mensaje "Tu nivel es insuficiente".
Si es de tipo Administrador y su nivel es 2, debes mostrar el mensaje "Tu nivel es el correcto".

*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UserList = {
    nombres: ["Paula", "Claudia", "Pepe", "Carlos"],
    passwords: ["paula5", "claudia34", "pepe878", "carlos3423"]
};
//Usuarios es una clase abstracta con constructor vacío
var Usuarios = /** @class */ (function () {
    function Usuarios() {
    }
    return Usuarios;
}());
//Estudiante hereda de Usuarios
//Estudiante tiene como atributos nombre y password
var Estudiante = /** @class */ (function (_super) {
    __extends(Estudiante, _super);
    function Estudiante(nombre, password) {
        var _this = _super.call(this) || this;
        _this.nombre = nombre;
        _this.password = password;
        _this.verify = function () {
            var verifyName = false;
            var verifyPassword = false;
            for (var _i = 0, _a = UserList.nombres; _i < _a.length; _i++) {
                var i = _a[_i];
                if (i === this.nombre) {
                    verifyName = true;
                    break;
                }
            }
            for (var _b = 0, _c = UserList.passwords; _b < _c.length; _b++) {
                var j = _c[_b];
                if (j === this.password) {
                    verifyPassword = true;
                    break;
                }
            }
            if (verifyName === true && verifyPassword === true) {
                console.log("Bienvenid@ a OpenVitae, " + this.nombre);
            }
            else {
                console.log("Necesita registrarse para acceder al curso");
            }
        };
        return _this;
    }
    return Estudiante;
}(Usuarios));
//Invitado hereda de Usuarios
//Invitado tiene como atributo action que indica que administrador no está autorizado para entrar en esa lección
var Invitado = /** @class */ (function (_super) {
    __extends(Invitado, _super);
    function Invitado() {
        var _this = _super.call(this) || this;
        _this.action = function () {
            console.log("No estás autorizado a entrar en esta lección");
        };
        return _this;
    }
    return Invitado;
}(Usuarios));
//Administrador hereda de Usuarios
//Si es administrador tiene nivel 1 o nivel 2 como atributos que son booleanos
var Administrador = /** @class */ (function (_super) {
    __extends(Administrador, _super);
    function Administrador(nivel1, nivel2) {
        var _this = _super.call(this) || this;
        _this.nivel1 = nivel1;
        _this.nivel2 = nivel2;
        _this.saberNivel = function () {
            //Método que indica que si nivel1 es true el nivel es insuficiente y si nivel 2 es true el nivel es correcto
            if (this.nivel1) {
                console.log("Tu nivel es insuficiente");
            }
            else if (this.nivel2) {
                console.log("Tu nivel es correcto");
            }
            else {
                console.log("Debe de especificar un nivel");
            }
        };
        return _this;
    }
    return Administrador;
}(Usuarios));
//método main que crea los objetos y llama a los métodos
function main() {
    //creando objeto alumna1 de la clase Estudiante
    var alumna1 = new Estudiante("Claudia", "claudia34");
    alumna1.verify();
    //creando objeto administrador2 de la clase Administrador
    var administrador2 = new Administrador(false, true);
    administrador2.saberNivel();
    //creando objeto invitado3 de la clase Invitado
    var invitado3 = new Invitado();
    invitado3.action();
}
main();
