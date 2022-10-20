# EJERCICIOS DE JAVASCRIPT CON TEST UNITARIOS PARA REFORZAR LÓGICA EN JAVASCRIPT

## CONTENIDO
  - ESTRUCTURAS DE CONTROL Y CADENAS DE CARACTERES
  - LISTAS, MATRICES Y MAPAS
  - DATE
  - PETICIONES ASÍNCRONAS
  - OBJETOS
  - DOM
  - TEST Y PRUEBAS UNITARIAS CON JEST

## ESTRUCTURAS DE CONTROL Y CADENAS DE CARACTERES

### generadorContra

Generador de contraseñas con salida por consola

Cada vez es más difícil cumplir con los requerimientos de los formularios 
que nos piden contraseñas seguras que incluyan números, caracteres especiales, 
minúsculas, mayúsculas, etc. Escribiremos la lógica necesaria para obtener 
contraseñas aleatorias seguras que podremos usar en cualquier cuenta que 
tengamos en internet.
La contraseña tiene que tener letras mayúsculas y minúsculas, caracteres y números
### cambiarTemperatura

Pasar de celsius a fahrenheit o a la inversa
en función de la entrada que reciba el programa.
El programa siempre debe recibir C° o F°; en caso contrario da error
### impares
Dados dos números, devolver cuantos números IMPARES hay entre ellos

### palindromo
Los palindromos son palabras que se leen igual aun
estando a la inversa. Decir si una palabra es palíndromo o no

### repetirPalabra
Dado un string y un número, repetir el
string tantas veces como el número indique. 

Ejemplos:
repiteme("victor",2)

Devuelve:
victorvictor

### BinarioDecimal
DE BINARIO A DECIMAL
Enunciado: Crea un programa se encargue de transformar un número binario
 * a decimal sin utilizar funciones propias del lenguaje que 
 * lo hagan directamente.

## LISTAS, MATRICES Y MAPAS

### escribirMovil
Escribir un mensaje de texto con el teléfono Nokia 1100

En los años 2000 los teléfonos no tenían teclado en pantalla. 
Traían números del 0 al 9 con los que se debía escribir presionando 
una o más veces cada tecla según la letra que necesitabas. 
Escribiremos un programa que nos ayudará a saber cuáles son las 
teclas necesarias para escribir la frase que le indiquemos al sistema.
### mostrarSecuencia
Dado un número mostrar todos los números desde ese al 0 de 8 en 8
en una lista con guiones donde cada número debe empezar por nª

### buscarPalabra
Dada una palabra, buscarla en una frase y devolver cuántas veces aparece la frase,
la frase y la palabra deben ser parámetros de una función.
Ejemplos:
coincidencias("hola soy una palabra en una frase, PALABRA", "palabra") Devuelve 2
coincidencias("Soy la frase","victor") //Devuelve 0

### dividirArray
Dado un array, dividirlo en tantos subarrays
como sea necesario basándons en un número que 
indique su tamaño.
Dividirlo en arrays de X elementos

Ejemplos:
dividirArray([7,8,9,10,5],2)
Devuelve:
[[7,8],[9,10],[5]]


### buscarReno

¡Hemos perdido a un reno y falta poco más de una semana para Navidad! 😱

Lo peor es que son tantos que no sabemos cuál es el que nos falta... ¡Qué lío! A ver, Elfon Musk ha hecho inventario 
y nos pasa un array con los ids de cada reno.

👍 Lo bueno: los ids son números que pueden ir del 0 al 100, no están repetidos y sólo se ha perdido un reno.

👎 Lo malo: la lista está desordenada y podría faltar el último...

Necesitamos una función que al pasarle la lista de ids de renos nos diga inmediatamente cuál es el que falta:

missingReindeer([0, 2, 3]) // -> 1
missingReindeer([5, 6, 1, 2, 3, 7, 0]) // -> 4
missingReindeer([0, 1]) // -> 2 (¡es el último el que falta!)
missingReindeer([3, 0, 1]) // -> 2
missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1]) // -> 8
missingReindeer([0]) // -> 1 (¡es el último!)

### gestionarDuplicados
Crear una función que al pasarnos un array
de nombres de archivo devolvamos un array con el
mismo número de elementos pero donde los nombres
que se repetían se anexe al final (k) donde k sería
el número de veces que se encontró repetido

Ejemplo:

const files=["photo","postcard","photo","photo","video"]
fixFiles(files)

Devuelve:
["photo","postcard","photo(1)","photo(2)",video]

## buscarIndice

Crear una función find que dado un array 
de números desordenados y un número cualquiera
devuelva el índice del array del elemento o -1 
si no lo encuentra

## EJERCICIOS DE CALCULAR TIEMPO

### juegoZelda
¡Han anunciado un nuevo "The Legend of Zelda"! 
Se llamará "Tears of the Kingdom" y se lanzará el 12 de mayo de 2023.
Pero, ¿recuerdas cuánto tiempo ha pasado entre los distintos
"The Legend of Zelda" de la historia?
Crea un programa que calcule cuántos años y días hay entre 2 juegos de Zelda
que tú selecciones.
- Debes buscar cada uno de los títulos y su día de lanzamiento 
(si no encuentras el día exacto puedes usar el mes, o incluso inventártelo)

## Peticiones asíncronas

### ApiGatos

Consulta la api de gatos catfact  https://catfact.ninja/ de la siguiente manera:
Primero consulta la api de manera que genere de manera random información de gatos, mediante setTimeOut que se imprima cada 5 segundos
Segundo el usuario introduce mediante prompt una raza y se muestra la información de esta mediante console.log, que haga esta búsqueda
hasta que el usuario escriba salir. Javascript es sensible a mayúsculas con lo cual el programa debe ser válido tanto para salir como para SALIR.
Hacer el ejercicio con funciones asíncronas.

### funcionesAsincronas

Hacer función asíncrona con fetch  y asyn await sin .then

## OBJETOS

### Tamatgochi

EJERCICIO TAMAGOTCHI

- El tamagotchi tiene tres atributos: hambre (`hunger`), energía (`energy`) y humor (`mood`).
- **La puntuación inicial de cada uno de los atributos es `4` .**
- Cuando el tamagotchi realiza una acción (comer, jugar o dormir), responde mostrando su estado:
    - `:-)` (contento) **cuando el humor está por encima de 8**
    - `(-_-)` (cansado) **cuando la energía esté por debajo de 3**
    - `(-_-) zZZ` (dormido) **cuando la energía llega a 0 o cuando se le ordena dormir.**
    - `ఠ_ఠ` (enfadado) **cuando el humor esté por debajo de 2**
    - `:-|` (normal) **resto de casos**
- Cuando el tamagotchi juega, el hambre y el humor aumentan en un punto, la energía disminuye en un punto.
- Cuando el tamagotchi come, el hambre disminuye 2 puntos, la energía disminuye en 1 punto.
- Cuando el tamagotchi duerme, la energía aumenta dos puntos.
### objetosCoche

Crear un componente Coche. El coche 
tendrá como atributos, el color, marca,
velocidad, matrícula, número de km, un 
estado para ver si está apagado o encendido.
Como acciones tendrá arrancar, acelerar, frenar
y apagar

### cifradoCesar

En la antigüedad no existía la encriptación ni el cifrado
de mensajes como los conocemos en la actualidad. 
Una de las primeras ideas que tuvieron para ocultar mensajes 
fue reemplazar las letras de cada palabra por otras letras, 
entonces sólo el receptor del mensaje sabía qué letra iba en 
lugar de cada otra y de esa manera entendía el mensaje que le 
fue enviado. Hagamos esto mismo pero con código.

## DOM

### tabla
Capturar todos los elementos de la tabla en un array de objetos
Crear un fichero table.js y enlázalo con el fichero index.html
Capturar todos los elementos de la tabla y guardarlos en un array de objetos. El nombre de las propiedades de este objeto será el nombre de cada columna
Imprimir por consola


## TEST Y PRUEBAS UNITARIAS DE EJERCICIOS CON JEST

## INSTALACIÓN
npm init -> para crear proyecto de nodeJS

npm install --save-dev jest -> para instalar JEST

package.json:

{
  "scripts": {
    "test": "jest"
  }
}


## EJECUCIÓN DE TEST DESDE LA LÍNEA DE COMANDOS

npm test

## DOCUMENTACIÓN

https://jestjs.io/es-ES/docs/getting-started

