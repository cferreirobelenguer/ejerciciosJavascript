
/*Capturar todos los elementos de la tabla en un array de objetos
Crear un fichero table.js y enlázalo con el fichero index.html
Capturar todos los elementos de la tabla y guardarlos en un array de objetos. El nombre de las propiedades de este objeto será el nombre de cada columna
Imprimir por consola*/

function crearLista(){
    var tabla=document.querySelector("table")
    
    let todas = tabla.querySelectorAll("th");
    console.log(todas)
    claves=tabla.querySelectorAll("tr");
    
    var primer=claves[1].querySelectorAll("td");
    var second=claves[2].querySelectorAll("td")
    console.log(primer)
    console.log(second)

    let obj1 = {};
    let obj2 = {};
    for(let i = 0; i < 2; i++){
        obj1[claves[i].innerHTML] = primer[i].innerHTML;
        obj2[claves[i].innerHTML] = second[i].innerHTML;
    }

    var arrayObj1=[]

    arrayObj1.push(obj1)
    arrayObj1.push(obj2)
    console.log("Solución 1.a: ", arrayObj1)
}

crearLista()