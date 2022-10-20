/* Escribir un mensaje de texto con el teléfono Nokia 1100

En los años 2000 los teléfonos no tenían teclado en pantalla. 
Traían números del 0 al 9 con los que se debía escribir presionando 
una o más veces cada tecla según la letra que necesitabas. 
Escribiremos un programa que nos ayudará a saber cuáles son las 
teclas necesarias para escribir la frase que le indiquemos al sistema.*/

const escribir=(palabra)=>{
    totalTeclas=[]
    var datos=[[" "],[],["a","b","c"],["d","e","f"],["g","h","i"],["j","k","l"],["m","n","o"],["p","q","r","s"],["t","u","v"],["w","x","y","z"]]
    for(let i in palabra){
        //console.log(i)
        for(let j in datos){
            //console.log(datos[j])
            for(let letra in datos[j]){
                if(palabra[i]===datos[j][letra]){
                    let tecla=parseInt(j)
                    console.log(datos[j][letra])
                    totalTeclas.push(tecla)
                }
            }
        }
    }
    return totalTeclas
}

console.log(escribir("pepito perez"))