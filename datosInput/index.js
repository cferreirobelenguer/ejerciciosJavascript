

/*
Ejercício de arrays:
Introducir números separados por coma en el input del formulario
Coger esos datos mediante dom y convertirlos en una lista iterable
Al pulsar calcular se va a calcular la suma de todos los números de la lista*/
var listado=[]
var suma=0
function cargarDatos(){
    var datos=document.getElementById("datos").value
    listado=datos.split(',')
    
}

function sumar(){
    console.log(listado)
    listado.map((i)=>{
        let number=parseInt(i)
        suma+=number
    })
    console.log(suma)
}