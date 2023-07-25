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

### Ejercicio Vehículo
- Pasar por parámetro el tipo de vehículo en string y devolver true si necesita licencia para conducir; en caso contrario false.
Si es car o duck hace falta licencia.
- Pasar por parámetro el modelo de coche de una opción y de otra y devolver una u otra en función de cuál está antes 
alfabéticamente, en caso de que coincida la primera letra habrá que hacer la comparación con la segunda
- Calcular el precio de compra del coche: si tiene menos de 3 años el 80% del precio original, si está entre 3 y 10 (ambos inclusives) años 70% y más de 10 50%. La función devuelve el precio calculado.

### Asistente
Bob es un adolescente indiferente. En la conversación, sus respuestas son muy limitadas.

Bob responde 'Bien'. si le haces una pregunta, como "¿Cómo estás?".

Él responde '¡Vaya, relájate!' si le GRITAS (en mayúsculas).

Él responde '¡Cálmate, sé lo que estoy haciendo!' si le gritas una pregunta.

Él dice 'Bien. ¡Sé así! si te diriges a él sin decir nada.

Él responde 'Lo que sea'. a cualquier otra cosa

## FUNCIONES

### cocinando
En este ejercicio, escribirá más código relacionado con la preparación y cocción de su brillante lasaña de su libro de cocina favorito.

Tienes cinco tareas. El primero está relacionado con la cocción en sí, los otros cuatro tienen que ver con la preparación perfecta.

1. Determinar si la lasaña está hecha
Cuando tienes lasaña en el horno, quieres saber si ya puedes sacarla o no. Para asegurarse de que la lasaña no se queme en el horno, generalmente configura un temporizador. Pero a veces te olvidas de eso.

Escriba una función cookingStatus que acepte el tiempo restante en el temporizador en minutos como parámetro. La función tiene tres resultados posibles.

Si el temporizador muestra 0, debería devolver 'Lasagna is done.'.
Si el temporizador muestra cualquier otro número, el resultado debería ser 'No hecho, espere'.
Si se llama a la función sin un valor de temporizador, el resultado debería ser 'Olvidó configurar el temporizador'.
El temporizador nunca mostrará un valor por debajo de 0.
cookingStatus(12);
// => 'Not done, please wait.'

cookingStatus();
// => 'You forgot to set the timer.'

2. Tiempo de preparación
Para la próxima lasaña que prepararás, querrás asegurarte de tener suficiente tiempo reservado para que puedas disfrutar de la cocina. Ya hiciste un plan con todas las capas que tendrá tu lasaña. Ahora desea estimar cuánto tiempo llevará la preparación en función de eso.

Implemente una función de tiempo de preparación que acepte una matriz de capas y el tiempo de preparación promedio por capa en minutos. La función debe devolver la estimación del tiempo total de preparación en función del número de capas. Si se llama a la función sin proporcionar el tiempo medio de preparación, en su lugar se deben suponer 2 minutos.
const layers = ['sauce', 'noodles', 'sauce', 'meat', 'mozzarella', 'noodles'];
preparationTime(layers, 3);
// => 18

preparationTime(layers);
// => 12

3. Calcule las cantidades de fideos y salsa necesarias
Además de reservar el tiempo, también querrás asegurarte de tener suficiente salsa y fideos para cocinar la lasaña de tus sueños. Para cada capa de fideos en su lasaña, necesitará 50 gramos de fideos. Para cada capa de salsa en su lasaña, necesitará 0,2 litros de salsa.

Define las cantidades de la función que toma como parámetro una matriz de capas. Luego, la función determinará la cantidad de fideos y salsa necesaria para preparar su comida. El resultado debe devolverse como un objeto con llaves, fideos y salsa.
quantities(['sauce', 'noodles', 'sauce', 'meat', 'mozzarella', 'noodles']);
// => { noodles: 100, sauce: 0.4 }

4. Agrega el ingrediente secreto
Hace un tiempo visitaste a un amigo y comiste lasaña allí. Fue increíble y tenía algo especial. El amigo le envió la lista de ingredientes y le dijo que el último elemento de la lista es el "ingrediente secreto" que hizo que la comida fuera tan especial. Ahora también desea agregar ese ingrediente secreto a su receta.

Escriba una función addSecretIngredient que acepte dos matrices de ingredientes como parámetros. El primer parámetro es la lista que te envió tu amigo y el segundo es la lista de ingredientes para tu propia receta. La función debería agregar el último elemento de la lista de tus amigos al final de tu lista. La matriz que representa su receta debe modificarse directamente y la función no debe devolver nada. Sin embargo, el primer argumento no debe modificarse.
const friendsList = ['noodles', 'sauce', 'mozzarella', 'kampot pepper'];
const myList = ['noodles', 'meat', 'sauce', 'mozzarella'];

addSecretIngredient(friendsList, myList);
// => undefined

console.log(myList);
// => ['noodles', 'meat', 'sauce', 'mozzarella', 'kampot pepper']

5. Escala la receta
Las cantidades que figuran en su libro de cocina solo rinden suficiente lasaña para dos porciones. Como desea cocinar para más personas la próxima vez, desea calcular las cantidades para diferentes números de porciones.

Implemente una función scaleRecipe que tome dos parámetros.

Un objeto de receta que contiene las cantidades necesarias para 2 porciones. El formato del objeto se puede ver en el siguiente ejemplo.
El número de porciones que desea cocinar.
La función debe devolver un objeto de receta con las cantidades necesarias para el número deseado de porciones. Sin embargo, desea mantener la receta original. Esto significa que en esta tarea no se debe modificar el argumento de la receta.
const recipe = {
  noodles: 200,
  sauce: 0.5,
  mozzarella: 1,
  meat: 100,
};

scaleRecipe(recipe, 4);
// =>
// {
//   noodles: 400,
//   sauce: 1,
//   mozzarella: 2,
//   meat: 200,
// };

console.log(recipe);
// =>
// {
//   noodles: 200,
//   sauce: 0.5,
//   mozzarella: 1,
//   meat: 100,
// };

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

### Lenguaje Hacker
Escribe un programa que reciba un texto y transforme lenguaje natural a
"lenguaje hacker" (conocido realmente como "leet" o "1337"). Este lenguaje
se caracteriza por sustituir caracteres alfanuméricos.
- Utiliza esta tabla (https://www.gamehouse.com/blog/leet-speak-cheat-sheet/)
con el alfabeto y los números en "leet".
(Usa la primera opción de cada transformación. Por ejemplo "4" para la "a")

### Expresión matemática
Crea una función que reciba una expresión matemática (String)
y compruebe si es correcta. Retornará true o false.
  - Para que una expresión matemática sea correcta debe poseer
    un número, una operación y otro número separados por espacios.
    Tantos números y operaciones como queramos.
  - Números positivos, negativos, enteros o decimales.
  - Operaciones soportadas: + - * / % 
 
 Ejemplos:
 "5 + 6 / 7 - 4" -> true
 "5 a 6" -> false

### empaquetarRegalos

Este año los elfos han comprado una máquina que envuelve regalos. Pero… ¡no viene programada! Necesitamos crear un algoritmo que le ayude en la tarea.

A la máquina se le pasa un array con los regalos. Cada regalo es un string. Necesitamos que la máquina envuelva cada regalo en papel de regalo y lo coloque en un array de regalos envueltos.

El papel de regalo es el símbolo * y para envolver un regalo se coloca el símbolo * de forma que rodee totalmente al string por todos los lados. Por ejemplo:

const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

console.log(wrapped)
[
  "*****\\n*cat*\\n*****",
  "******\\n*game*\\n******",
  "*******\\n*socks*\\n*******"
] 
Como ves, el papel de regalo envuelve el string. Por arriba y por abajo, para no dejar ningún hueco, las esquinas también están cubiertas por el papel de regalo.

Nota: El carácter \n representa un salto de línea.

¡Ojo! Asegúrate que pones el número correcto de * para envolver completamente el string. Pero no demasiados. Sólo los necesarios para cubrir el string.

Ah, y no modifiques (mutes) el array original.

### datosInput

Ejercício de arrays:
Introducir números separados por coma en el input del formulario
Coger esos datos mediante dom y convertirlos en una lista iterable
Al pulsar calcular se va a calcular la suma de todos los números de la lista

### escribirMovil
Escribir un mensaje de texto con el teléfono Nokia 3310

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

### cardType

As a budding magician, Elyse needs to analyze her deck in lots of different ways. To keep things simple, she only uses cards with values 1-10.

# 1. Determine how many cards of a certain type are in the deck
Elyse wants to know how many cards of a particular type she has in her deck.

Write a function cardTypeCheck that takes two parameters: an array of cards (Elyse's deck) and the type of card to count. The function should use forEach and return the number of cards in the deck of the specified type.

const cardType = 3;
cardTypeCheck([1, 2, 3, 4], cardType); ->1

# 2. Determine how many odd or even cards there are
For another trick, Elyse needs to know how many odd or even cards there are in her deck.

Implement a function determineOddEvenCards that takes in two parameters: an array of cards (Elyse's deck), and a boolean (true is analogous to 'even', and false is analogous to 'odd').

This function should return a single number: the number of odd or even cards there are (depending on the value of the second argument) in the deck. To practice, use a for...of loop in the function implementation this time.



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

### API DICCIONARIO
Llamar a una API es una de las tareas más comunes en programación.
 Implementa una llamada HTTP a una API (la que tú quieras) y muestra su
 resultado a través de la terminal. Por ejemplo: Pokémon, Marvel...
 
 Aquí tienes un listado de posibles APIs:
 https://github.com/public-apis/public-apis
 API DICCIONARIO

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

## VOCAL COMÚN
Crea una función que reciba un texto y retorne la vocal que
más veces se repita.
    - Ten cuidado con algunos casos especiales
    - Si no hay vocales podrá devolver vacío
    - Hacer test unitarios con jest

## DESESTRUCTURACIÓN DE OBJETOS

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

### santaClaus

Tienes una caja de regalos de Navidad que Santa Claus quiere entregar a los niños. Cada regalo está representado por una cadena. Santa Claus tiene un trineo que puede llevar un peso limitado, y cada regalo dentro de la caja tiene un peso que es igual al número de letras en el nombre del regalo.

Santa Claus también tiene una lista de renos que pueden ayudarlo a entregar los regalos. Cada reno tiene un límite de peso máximo que puede llevar. El límite de peso máximo de cada reno es igual a dos veces el número de letras en su nombre.

Tu tarea es implementar una función distributeGifts(packOfGifts, reindeers) que recibe una caja de regalos y una lista de renos y devuelve el número máximo de cajas de estos regalos que Santa Claus puede entregar a los niños. Las cajas de regalos no se pueden dividir.

const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

el pack de regalos pesa 4 + 4 + 4 = 12
los renos pueden llevar (2 * 6) + (2 * 6) = 24
por lo tanto, Santa Claus puede entregar 2 cajas de regalos

distributeGifts(packOfGifts, reindeers) // 2
Cosas a tener en cuenta:

Las cajas de regalos no se pueden dividir.
Los nombres de los regalos y los renos siempre serán mayores que 0.

### detectorHandler

Crear función que sea capaz de detectar y retornar todos los handles
de un texto usando solamente expresiones regulares:
    - handle usuario: los que comienzan por @
    - handle hashtag: los que comienzan por #
    - handle web: los que comienzan por wwww. ,http://, https://

### tiparObjeto

Tipar mediante interface la siguiente constante:
const SuperHeroe:SuperHeroeType={
    nombre:"Spiderman",
    edad:30,
    direccion:{
        calle:"Main St",
        pais:"USA",
        ciudad:"NY"
    },
    mostrarDireccion(){
        return this.nombre+", "+this.direccion.ciudad+", "+this.direccion.pais
    }
}

Desestructurar el objeto y llamar al método dentro del objeto tipado

### typescript buscarAlmacen

Mi amigo Dani está trabajando en una tienda y con la llegada de las navidades tiene el almacén hecho un desastre y no encuentra nada.

Vamos a crear una función contains que recibe dos parámetros: un objeto que define el almacén y el producto que buscamos.

La función debe devolver un booleano que indique si se encuentra el string como valor en algún nivel del objeto. Veamos unos ejemplos:

const almacen = {
  'estanteria1': {
    'cajon1': {
      'producto1': 'coca-cola',
      'producto2': 'fanta',
      'producto3': 'sprite'
    }
  },
  'estanteria2': {
    'cajon1': 'vacio',
    'cajon2': {
      'producto1': 'pantalones',
      'producto2': 'camiseta' // <- ¡Está aquí!
    }
  }
}
            
contains(almacen, 'camiseta') // true

const otroAlmacen = {
  'baul': {
    'fondo': {
      'objeto': 'cd-rom',
      'otro-objeto': 'disquette',
      'otra-cosa': 'mando'
    }
  }
}
  
contains(otroAlmacen, 'gameboy') // false

### typescript validarCartas

El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱

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

### typescript contadorOvejas

Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. Haz una función que devuelva una lista con todas las ovejas que sean de color rojo y que además su nombre contenga tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios.

Por ejemplo, si tenemos las ovejas:

const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'},
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo'}
]
Al ejecutar el método debería devolver lo siguiente:

const ovejasFiltradas = contarOvejas(ovejas)

console.log(ovejasFiltradas)

// [{ name: 'Navidad', color: 'rojo' },
//  { name: 'Ki Na Ma', color: 'rojo' }]
Recuerda. Debe contener las dos letras 'a' y 'n' en el nombre. No cuentes ovejas que sólo tenga una de las letras, debe tener ambas.

### typescript contarRegalos

Te ha llegado una carta ✉️ con todos los regalos que debes preparar. El tema es que es una cadena de texto y es muy difícil de leer 😱. ¡Menos mal que han puesto cada regalo separado por espacio! (aunque ten cuidado, porque al ser niños, igual han colado más espacios de la cuenta)

Encima nos hemos dado cuenta que algunas palabras vienen con un _ delante de la palabra, por ejemplo _playstation, que significa que está tachado y no se tiene que contar.

Transforma el texto a un objeto que contenga el nombre de cada regalo y las veces que aparece. Por ejemplo, si tenemos el texto:

const carta = 'bici coche balón _playstation bici coche peluche'
Al ejecutar el método debería devolver lo siguiente:

const regalos = listGifts(carta)

console.log(regalos)

{
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}

Ten en cuenta que los tests pueden ser más exhaustivos... 😝 ¡Cuidado con contar espacios vacíos!

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

### typescript apiGithub

Hacer una petición asíncrona en la api de github
    - Se pide buscar el id 109515496
    - Imprimir los resultados en la web por medio de dom

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
### testSimpson
Hacer test a peticiones asíncronas, se pide:
    -Comprobar si el dato que se devuelve es de tipo object
    -Comprobar si la url que se pasa por parámetro es de tipo string

## VOCAL COMÚN
Crea una función que reciba un texto y retorne la vocal que
más veces se repita.
    - Ten cuidado con algunos casos especiales
    - Si no hay vocales podrá devolver vacío
    - Hacer test unitarios con jest
    
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

