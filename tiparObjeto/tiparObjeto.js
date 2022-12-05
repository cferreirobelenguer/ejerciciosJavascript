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
Desestructurar el objeto y llamar al método dentro del objeto tipado
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
    //Desestructuración del objeto
    var nombre = SuperHeroe.nombre, edad = SuperHeroe.edad, direccion = SuperHeroe.direccion;
    var calle = direccion.calle, pais = direccion.pais, ciudad = direccion.ciudad;
    //La función retorna el método
    return SuperHeroe.mostrarDireccion();
};
console.log(mostrar(SuperHeroe));
