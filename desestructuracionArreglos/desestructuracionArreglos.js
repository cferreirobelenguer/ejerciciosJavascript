

/*  
EJERCICIO DE DESESTRUCTURACIÓN DE ARREGLOS
Tenemos una función que retorna un valor pasado por parámetro y una función
    Se pide hacer una desestructuración de arreglos:
        - El primer valor se va a llamar nombre
        - El segundo valor se va a llamar setNombre*/

const useState=(valor)=>{
    return [valor, ()=>{
        console.log("Hola mundo")
    }]
}

const [nombre,setNombre]=useState("Goku")
console.log(nombre)
setNombre()