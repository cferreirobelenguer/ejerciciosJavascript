/**
 * /*
 * Crea una función que reciba una expresión matemática (String)
 * y compruebe si es correcta. Retornará true o false.
 * - Para que una expresión matemática sea correcta debe poseer
 *   un número, una operación y otro número separados por espacios.
 *   Tantos números y operaciones como queramos.
 * - Números positivos, negativos, enteros o decimales.
 * - Operaciones soportadas: + - * / % 
 *
 * Ejemplos:
 * "5 + 6 / 7 - 4" -> true
 * "5 a 6" -> false
 */

isMathematicExpression =(expresion)=> {
    const cadena = expresion.split('');
    const characters = '+-*/%()';
    const number = '0123456789';
    let isExpresion = true;
    cadena.forEach((value) => {
        if (!characters.includes(value) && !number.includes(value)) {
            isExpresion = false;
            return;
        }
    })
    console.log("La expresión es: " + (isExpresion ? "válida" : "inválida"));
}
isMathematicExpression('(5+6)*8/7-4')