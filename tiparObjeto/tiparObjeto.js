/* Tipar mediante interface la siguiente constante:
const SuperHeroe:SuperHeroeType={
    nombre:"Spiderman",
    edad:30,
    direccion:{
        calle:"Main St",
        pais:"USA",
        ciudad:"NY"
    },
    mostrarDireccion(){
        return this.nombre+", "+this.direccion.ciudad+", "+this.direccion.pais
    }
}

Y llamar al método dentro del objeto tipado
*/
var SuperHeroe = {
    nombre: "Spiderman",
    edad: 30,
    direccion: {
        calle: "Main St",
        pais: "USA",
        ciudad: "NY"
    },
    mostrarDireccion: function () {
        return this.nombre + ", " + this.direccion.ciudad + ", " + this.direccion.pais;
    }
};
var mostrar = function (SuperHeroe) {
    return SuperHeroe.mostrarDireccion();
};
console.log(mostrar(SuperHeroe));
