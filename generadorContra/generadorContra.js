/* Generador de contraseñas con salida por consola

Cada vez es más difícil cumplir con los requerimientos de los formularios 
que nos piden contraseñas seguras que incluyan números, caracteres especiales, 
minúsculas, mayúsculas, etc. Escribiremos la lógica necesaria para obtener 
contraseñas aleatorias seguras que podremos usar en cualquier cuenta que 
tengamos en internet.
la contraseña tiene que tener letras mayúsculas y minúsculas, caracteres y números*/


const generarContra=()=>{
    var abecedario =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
    var caracteresTotales=[",",".","-","_",":",";","}","{","´","+","`","*","¡","¿","?",")","(","/","&","%","$","#","!"]
    var randomCaracteres=Math.round(Math.random()*(caracteresTotales.length-1)).toFixed(0)
    var randomNumeros=Math.round(Math.random()*1000)
    var randomMinus=Math.round(Math.random()*(abecedario.length-1)).toFixed(0)
    var randomMayus=(Math.round(Math.random()*(abecedario.length-1)).toFixed(0))
    var mayus=abecedario[randomMayus].toString().toUpperCase()
    var minus=abecedario[randomMinus]
    var caracteres=caracteresTotales[randomCaracteres]
    
    var contra=randomNumeros+mayus+minus+caracteres
    return contra;
}
console.log(generarContra())