# EJERCICIOS DE JAVASCRIPT CON TEST UNITARIOS PARA REFORZAR LÓGICA EN JAVASCRIPT

## ESTRUCTURAS DE CONTROL Y CADENAS DE CARACTERES

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

### Peticiones asíncronas

## ApiGatos

Consulta la api de gatos catfact  https://catfact.ninja/ de la siguiente manera:
Primero consulta la api de manera que genere de manera random información de gatos, mediante setTimeOut que se imprima cada 5 segundos
Segundo el usuario introduce mediante prompt una raza y se muestra la información de esta mediante console.log, que haga esta búsqueda
hasta que el usuario escriba salir. Javascript es sensible a mayúsculas con lo cual el programa debe ser válido tanto para salir como para SALIR.
Hacer el ejercicio con funciones asíncronas.

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

