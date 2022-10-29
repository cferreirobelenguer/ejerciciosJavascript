
/*Crear una clase rombo con dos propiedades
diagonal vertical y diagonal horizontal, crear función
que calcule area.
Retornar el resultado*/

interface Rombo{
    diagonal_vertical:number,
    diagonal_horizontal:number,
    calcularArea:Function
}

let calculorombo:Rombo={
    diagonal_vertical:12,
    diagonal_horizontal:20,
    calcularArea:():number=>{
        let calculo:number
        calculo=(calculorombo.diagonal_horizontal*calculorombo.diagonal_vertical)/2
        return calculo
    }
}
console.log(calculorombo.calcularArea())