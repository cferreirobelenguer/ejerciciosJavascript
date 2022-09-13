/*¡Hemos perdido a un reno y falta poco más de una semana para Navidad! 😱

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
missingReindeer([0]) // -> 1 (¡es el último!) */

const missingReindeer=(lista)=>{
    //Si la lista está definida se ejecuta el programa, en caso contrario devuelve false
    if(lista.length>0){
        let ultimo=lista.length
    console.log(ultimo)
    //Ordenamos el array
    lista.sort()
    //Variable que va a contener el reno que falta
    let reno=0
    let faltaReno=false
    for(let i in lista){
        //Se recorre la lista y se compara el valor con la posición para ver el valor que falta
        if(lista[i]!=i){
            console.log("esto es el orden: "+i)
            console.log("esto es el valor de la lista: "+lista[i])
            reno=i
            faltaReno=true
            //Como el programa dice que sólo se ha perdido un reno, a la primera ocurrencia se hace break en la iteración
            break
        }
    }
    //Si reno no falta dentro del array; es que el reno que falta es el último
    if(faltaReno!=true){
        faltaUltimo=parseInt(lista[ultimo-1])+1
        return "El reno que falta es el último: "+faltaUltimo
    }else{
    //Si reno falta dentro del array, retorna el reno que falta
        return "El reno que falta es: "+reno
    }
    }else{
        //Retorna false cuando la lista no devuelve nada
        return false
    }
    
}
    

module.exports=missingReindeer