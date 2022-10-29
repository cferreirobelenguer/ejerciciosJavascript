/*Crear una clase rombo con dos propiedades
diagonal vertical y diagonal horizontal, crear función
que calcule area.
Retornar el resultado*/
var calculorombo = {
    diagonal_vertical: 12,
    diagonal_horizontal: 20,
    calcularArea: function () {
        var calculo;
        calculo = (calculorombo.diagonal_horizontal * calculorombo.diagonal_vertical) / 2;
        return calculo;
    }
};
console.log(calculorombo.calcularArea());
