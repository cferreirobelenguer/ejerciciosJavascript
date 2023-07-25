/*
 * Crea una función que reciba dos cadenas de texto casi iguales,
 * a excepción de uno o varios caracteres. 
 * La función debe encontrarlos y retornarlos en formato lista/array.
 * - Ambas cadenas de texto deben ser iguales en longitud.
 * - Las cadenas de texto son iguales elemento a elemento.
 * - No se pueden utilizar operaciones propias del lenguaje
 *   que lo resuelvan directamente.
 * 
 * Ejemplos:
 * - Me llamo mouredev / Me llemo mouredov -> ["e", "o"]
 * - Me llamo.Brais Moure / Me llamo brais moure -> [" ", "b", "m"]
 */

const compareStrings = (word1, word2) => {
    let words = [];
    const maxLength = Math.max(word1.length, word2.length);
    for (let i = 0; i < maxLength; i++) {
        if (word1[i] !== word2[i]) {
            if (word1[i] === ' ') {
                words.push(word1[i]);
            } else if (word2[i] === ' ') {
                words.push(word2[i]);
            } else if (word1[i] !== word1[i].toLowerCase()) {
                words.push(word2[i]);
            } else if (word2[i] !== word2[i].toLowerCase()) {
                words.push(word1[i]);
            } else {
                words.push(word1[i], word2[i]);
            }
        }
    }
    
    return words
}
console.log(compareStrings('Me llamo.Brais Moure','Me llamo brais moure'))