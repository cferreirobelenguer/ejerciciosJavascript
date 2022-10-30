/*Crear una interface en TypeScript a partir de este código JavaScript:

var spiderman = {
    nombre: "Peter parket",
    poderes: ["trepar", "fuerza", "agilidad", "telas de araña"]

Crear función que imprima todos los datos sin return
};*/
var spiderman = {
    nombre: "Peter parket",
    poderes: ["trepar", "fuerza", "agilidad", "telas de araña"]
};
function imprimirSpider(spiderman) {
    console.log("NOMBRE: " + spiderman.nombre);
    console.log("PODERES:");
    for (var _i = 0, _a = spiderman.poderes; _i < _a.length; _i++) {
        var i = _a[_i];
        console.log(i);
    }
}
imprimirSpider(spiderman);
