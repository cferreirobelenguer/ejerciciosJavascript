/*
EJERCÍCIOS DE FUNCIONES:
Función con parametros obligatorios, opcionales y por defecto
donde   NOMBRE = obligatorio
        PODER  = opcional
        ARMA   = por defecto = "arco"
*/


    

function imprimirDatos (NOMBRE:string,PODER?:string,ARMA:string="arco"):string{
    let mensaje:string;
    if(PODER){
        mensaje="NOMBRE: "+NOMBRE+"\nPODER: "+PODER+"\nARMA: "+ARMA
    }else{
        mensaje="NOMBRE: "+NOMBRE+"ARMA: "+ARMA
    }
    return mensaje
}
console.log(imprimirDatos("personaje","fuerza"))

