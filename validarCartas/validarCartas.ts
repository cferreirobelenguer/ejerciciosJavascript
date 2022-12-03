
/*El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱

Las cartas son una cadena de texto que incluyen regalos y paréntesis ().

Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.

¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes [ dentro de los paréntesis que hacen que no sean válidas. Por suerte sólo los ha dejado en medio de los paréntesis...

Ejemplos:

"bici coche (balón) bici coche peluche" // -> ✅
"(muñeca) consola bici" // ✅

"bici coche (balón bici coche" // -> ❌
"peluche (bici [coche) bici coche balón" // -> ❌
"(peluche {) bici" // -> ❌
"() bici" // ❌

Crea una función que pasándole el texto de la carta, devuelva true si es válida y false si no lo es. ¡Y acaba con la travesura del Grinch!

*/
const validar=(carta:string)=>{
    let validada:boolean=false;
    //Tiene que incluir ambos paréntesis para ser validado
    if(carta.includes("(")&&(carta.includes(")"))){
        //cojo las posiciones de los paréntesis
        let posicion1:number=carta.indexOf("(")
        let posicion2:number=carta.indexOf(")")
        //cojo lo de dentro de los paréntesis sin incluir ambos para ver lo que hay dentro
        let palabra:string=carta.substring(posicion1+1,posicion2)
        console.log(palabra)
        
        if(palabra!=""){
            //Si lo de dentro de los paréntesis tiene llaves o corchetes no se valida
            if(palabra.includes("}")||palabra.includes("{")||palabra.includes("]")||palabra.includes("[")){
                validada=false
            }else{
                //Si de dentro de los paréntesis es palabra sin llaves y corchetes se valida
                validada=true
            }
        }else{
            //Si no tiene nada lo que hay entre los paréntesis no se valida
            validada=false
        }
    }else{
        //Si no se cierra el paréntesis o no tiene paréntesis no se valida
        validada=false
    }

    return validada
}

console.log(validar("() bici"))