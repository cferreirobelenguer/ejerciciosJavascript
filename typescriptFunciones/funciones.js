/*
EJERCÍCIOS DE FUNCIONES:
Función con parametros obligatorios, opcionales y por defecto
donde   NOMBRE = obligatorio
        PODER  = opcional
        ARMA   = por defecto = "arco"
*/
function imprimirDatos(NOMBRE, PODER, ARMA) {
    if (ARMA === void 0) { ARMA = "arco"; }
    var mensaje;
    if (PODER) {
        mensaje = "NOMBRE: " + NOMBRE + "\nPODER: " + PODER + "\nARMA: " + ARMA;
    }
    else {
        mensaje = "NOMBRE: " + NOMBRE + "ARMA: " + ARMA;
    }
    return mensaje;
}
console.log(imprimirDatos("personaje", "fuerza"));
