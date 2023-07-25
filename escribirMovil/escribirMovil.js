// Escribir un mensaje de texto con el teléfono Nokia 3310

// En los años 2000 los teléfonos no tenían teclado en pantalla. 
// Traían números del 0 al 9 con los que se debía escribir presionando 
// una o más veces cada tecla según la letra que necesitabas. 
// Escribiremos un programa que nos ayudará a saber cuáles son las 
// teclas necesarias para escribir la frase que le indiquemos al sistema.
const nokia3310Keyboard = [
    { key: '1', letters: [' '] },
    { key: '2', letters: ['A','B','C'] },
    { key: '3', letters: ['D','E','F'] },
    { key: '4', letters: ['G','H','I'] },
    { key: '5', letters: ['J','K','L'] },
    { key: '6', letters: ['M','N','O'] },
    { key: '7', letters: ['P','Q','R','S'] },
    { key: '8', letters: ['T','U','V'] },
    { key: '9', letters: ['W','Y','Z'] },
    { key: '*', letters: ['*'] },
    { key: '0', letters: ['+'] },
    { key: '#', letters: ['#'] }
];

const getCode = (nokia3310Keyboard,word) => {
    let totalKeys = []
    //uppercase word
    const uppercase = word.toUpperCase();
    for (let i = 0; i<= uppercase.length-1; i++) {
        for(let item of  nokia3310Keyboard) {
            const {key,letters} = item;
            const position = letters.indexOf(uppercase[i])
            if(position !== -1) {
                for ( let j = 0; j<= position; j++) {
                    totalKeys.push(key)
                }
            }
        }
    }
    return totalKeys
}

console.log(getCode(nokia3310Keyboard,'hola'))