# EJERCICIOS DE JAVASCRIPT Y TIPESCRIPT

## CONTENIDO
  - ESTRUCTURAS DE CONTROL Y CADENAS DE CARACTERES
  - FUNCIONES
  - LISTAS, MATRICES Y MAPAS
  - DATE
  - PETICIONES ASÍNCRONAS
  - OBJETOS
  - OBJETO LITERAL
  - DOM
  - TYPESCRIPT
  - WEBCOMPONENTS
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

## FUNCIONES

### cambiarFuncion

Dado el siguiente código:

function getUsuarioActivo(nombre){
    return{
        uid:'ABC567',
        username:nombre
    }
};
const usuarioActivo=getUsuarioActivo('Fernando')
console.log(usuarioActivo)

Cambiar a función Felcha
Tiene que retornar un objeto implícito

## LISTAS, MATRICES Y MAPAS

### datosInput

Ejercício de arrays:
Introducir números separados por coma en el input del formulario
Coger esos datos mediante dom y convertirlos en una lista iterable
Al pulsar calcular se va a calcular la suma de todos los números de la lista

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

## desestructuracionArreglos

EJERCICIO DE DESESTRUCTURACIÓN DE ARREGLOS:
Tenemos una función que retorna un valor pasado por parámetro y una función
    Se pide hacer una desestructuración de arreglos:
        - El primer valor se va a llamar nombre
        - El segundo valor se va a llamar setNombre

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

### DESESTRUCTURACIÓN DE OBJETOS

DESESTRUCTURACIÓN DE OBJETOS

Tenemos un objeto superheroe y se pide desestructurarlo para poder obtener en console cada uno de sus atributos

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

## OBJETO LITERAL

### halloween

Este es un reto especial por Halloween
Deberemos realizar un programa al que le indiquemos si queremos "Truco o Trato"
y una lista de personas con las siguientes propiedades:
- Nombre de la niña o niño
- Edad
- Altura en centímetros

Si las personas han pedido truco, el programa retornará sustos (aleatorios)
siguiendo estos criterios:

- Un susto por cada 2 letras del nombre por persona
- Dos sustos por cada edad que sea un número par
- Tres sustos por cada 100 cm de altura entre todas las personas
- Sustos 🦇🕷👻☠💀🎃

Si las personas han pedido trato, el programa retornará dulces aleatorios
siguiendo los siguientes criterios:
- Un dulce por cada letra de nombre
- Un dulce por cada 3 años cumplidos hasta un mínimo de 10 años por persona
- Dos dulces por cada 50 cm de altura hasta un mínimo de 150 cm por persona
- Dulces: 🥐🧀🥞🍩🍨🍧🍦🍪🎂

### cifradoCesar

En la antigüedad no existía la encriptación ni el cifrado
de mensajes como los conocemos en la actualidad. 
Una de las primeras ideas que tuvieron para ocultar mensajes 
fue reemplazar las letras de cada palabra por otras letras, 
entonces sólo el receptor del mensaje sabía qué letra iba en 
lugar de cada otra y de esa manera entendía el mensaje que le 
fue enviado. Hagamos esto mismo pero con código.

### Deportista

Ejercício de objeto literal:
Objeto literal deportista ya definido, que tiene los siguientes atributos: 
nombre, energia, experiencia. Queremos poder pedirle al deportista que entrene. 
Para esto, nuestro trabajo va a ser completar la función entrenarHoras. 
La función entrenarHoras tiene las siguientes tres características: Recibe por 
parámetro la cantidad de horas. Resta a su energía (this.energia) la cantidad de 
horas x 5. Incrementa su experiencia (this.experiencia) la cantidad de horas x 2. 
Una vez definida la función, podemos ejecutar el código y ver cómo va variando la energía 
y experiencia del deportista por consola.

## DOM

### tabla
Capturar todos los elementos de la tabla en un array de objetos
Crear un fichero table.js y enlázalo con el fichero index.html
Capturar todos los elementos de la tabla y guardarlos en un array de objetos. El nombre de las propiedades de este objeto será el nombre de cada columna
Imprimir por consola

### fetchAPI

EJERCÍCIO DE FETCH API Y DOM
Consultar api en GIPHY y escribir los resultados a través del dom
    - Usar async await en la petición
    - Poner un título e imagen de gif a través del dom


## TYPESCRIPT

### typescriptBanderas
crear un objeto usando la api de paises en el que cojamos los siguientes atributos:
nombre
capital
moneda
region
independiente

Imprimir los resultados con console.log

### typescriptCarrito

Crear tres artículos
Crear una función que cree un carrito con artículos repes y calcule su importe total a pagar.

### typescriptRombo

Crear una clase rombo con dos propiedades
diagonal vertical y diagonal horizontal, crear función
que calcule area.
Retornar el resultado

### typescriptPersonajes

EJERCÍCIO DE TIPADO DE VARIABLES EN TYPESCRIPT
Este código está hecho en JavaScript y hay que pasarlo a TypeScript empleando variables “let” y constantes.
Crear función que retorne el nombre y la edad a través del objeto. Afición es opcional en la función.

El código javaScript sería así:

var nombre;
var aficion="fútbol"
nombre = "Miguelo";
var edad;
edad = 30;
var PERSONAJE = {
    nombre: nombre,
    edad: edad
    aficion:aficion
};

### typescriptSpiderman

Crear una interface en TypeScript a partir de este código JavaScript:

var spiderman = {
    nombre: "Peter parket",
    poderes: ["trepar", "fuerza", "agilidad", "telas de araña"]

Crear función que imprima todos los datos sin return

### typescriptFunciones

EJERCÍCIOS DE FUNCIONES:
Función con parametros obligatorios, opcionales y por defecto
donde   NOMBRE = obligatorio
        PODER  = opcional
        ARMA   = por defecto = "arco"

### typescriptProgramas

EJERCÍCIO DE DOM Y TYPESCRIPT
Se introducen datos en un input y se meten automáticamente dentro de un listado que se lee
dentro del html en formato lista <li></li>
Utilizar DOM y typescript

### typescript_dictionary

Diccionario
El usuario introduce una palabra en inglés en el formulario y el programa
dice su significado, antónimos y sinónimos (estos últimos en caso de que los tenga)
Se usa la API https://dictionaryapi.dev/

### typescript_contenedorAgua

Enunciado: Dado un array de números enteros positivos, donde cada uno representa unidades
de bloques apilados, debemos calcular cuantas unidades de agua quedarán atrapadas entre ellos.

- Ejemplo: Dado el array [4, 0, 3, 6, 1, 3].
         ⏹
         ⏹
   ⏹💧💧⏹
   ⏹💧⏹⏹💧⏹
   ⏹💧⏹⏹💧⏹
   ⏹💧⏹⏹⏹⏹
  Representando bloque con ⏹︎ y agua con 💧

### typescript_objetoLiteral

En una nueva línea después del código existente,
cambia el valor de la propiedad 'suTurno' para
player1 a true, usando la notación de puntos para
ver este mensaje en consola: "Bob esta jugando ahora!
Trabajar el código en typescript tipando cada una de las variables.

const player1 = {
    nombre: 'Bob',
    color: 'Amarillo',
    suTurno: false,
    play: function(){
        if (this.suTurno) {
            console.log(`${this.nombre} esta jugando ahora!`);
         }
    }
}

const player2 = {
    nombre: 'Patricio',
    color: 'Rosa',
    suTurno: false,
    play: function(){
        if (this.suTurno) {
            console.log(`${this.nombre} esta jugando ahora!`);
         }
    }
}

player1.play();
player2.play();

### typescript_herencia


Enunciado:

Crea 4 clases,
Usuario (clase abstracta),
Estudiante (hereda de Usuario),
Invitado (hereda de Usuario)
Administrador (hereda de Usuario y tiene nivel),
Cada uno con sus atributos (no hacen falta métodos).
Debes crear un objeto literal con una lista de nombres y passwords.

Para cada elemento:
Si es de tipo Invitado, debes mostrarle el mensaje "No estás autorizado a entrar en esta lección".
Si es de tipo Estudiante, debes comprobar que su $nombre y $password existe y mostrar el mensaje "Bienvenid@ a OpenVitae, $nombre".
Si es de tipo Administrador y su nivel es 1, debes mostrar el mensaje "Tu nivel es insuficiente".
Si es de tipo Administrador y su nivel es 2, debes mostrar el mensaje "Tu nivel es el correcto".

### typescript_imprimirFactura

Construir una clase Factura que descienda de la clase Precio (Precio tiene los atributos precio e iva) y que incluya dos atributos
específicos llamados emisor y cliente y, al menos, un método llamado
imprimirFactura.

### typescript_Coche

Crear una interfaz Vehiculo de la cual heredan VehiculoTerrestre y VehiculoMaritimo
Vehiculo tiene un atributo fabricante y tres métodos:
    . arrancarMotor
    . repostar
    . detenerMotor
VehiculoTerrestre tiene un método específico que es conducir
VehiculoMaritulo tiene tres métodods:
    . sonarSirena
    . encenderChimenea
    . detenerChimenea

Crear un método procesarTerrestre que llame a los métodos de la clase VehiculoTerrestre
Crear un método procesarMaritimo que llame a los métodos de la clase VehículoMarítimo

### typescript_bombero

TRABAJANDO CON GETTER Y SETTER:
Define una clase Bombero considerando los siguientes atributos de clase: nombre (String), apellidos (String), 
edad (int), casado (boolean), especialista (boolean). Define un constructor que reciba los parámetros necesarios 
para la inicialización y los métodos para poder establecer y obtener los valores de los atributos. 
Compila el código para comprobar que no presenta errores, crea un objeto y comprueba que se inicializa correctamente 
consultando el valor de sus atributos después de haber creado el objeto. 

## WEB COMPONENTS

## WebComponents

Crear un custom element que trabaje con slots y tenga dos imágenes de dos apis de animales. Aplicar estilos con shadow root.

## TEST Y PRUEBAS UNITARIAS DE EJERCICIOS CON JEST
### testObject
Ejercício de función que devuelve objeto y se pide hacer su test con jest que verifique 
que se retorna un objeto

### getUsuarioActivo
Función que retorna objeto, se pide hacer test que verifique que retorna objeto
y que el surname que retorna es el nombre que le pasa por parámetro en la función

### returnObject
Función que devuelve un objeto al que se le pasan por parámetro clave, nombre, edad
y rango que tiene por defecto el valor Capitán.
Se pide hacer test que verifique que retorne objeto con los valores pasados por parámetro

### retornarArreglo
Función que retorna un arreglo de un string y un number,
verificar con un test que devuelve un string y un number

### heroesFind
Hacer los siguientes test de estas dos funciones que la primera
realiza una búsqueda por id del objeto literal heroes, y la segunda 
filtra los datos de heroes que tenga el owner pasado por parámetro.
Se pide:
    - Hacer test que verifique que el objeto que se devuelve pasando como id 3 en la primera función 
    es el correcto
    - Hacer test que verifique que el objeto que se devuelve pasando como id 3 en la primera función 
    es de tipo Object
    - Hacer test que verifique que el array que se devuelve pasando como parámetro owner DC en la 
    segunda función es de tipo Object
    - Hacer test que verifique que el array que se devuelve pasando como parámetro owner DC en la 
    segunda función tiene una longitud de 3
    - Hacer test que verifique que el array que se devuelve pasando como parámetro owner Marvel en la 
    segunda función es el correcto
    - Hacer test que verifique que el array que se devuelve pasando como parámetro owner Marvel en la 
    segunda función tiene una longitud de 2
## INSTALACIÓN
npm init -> para crear proyecto de nodeJS
npm install --save-dev jest -> para instalar JEST
yarn add -D @types/jest -g -> para instalar ayuda visual studio code jest

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

