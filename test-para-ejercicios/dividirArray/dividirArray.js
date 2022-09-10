/*Dado un array, dividirlo en tantos subarrays
como sea necesario basándons en un número que 
indique su tamaño.
Dividirlo en arrays de X elementos

Ejemplos:
dividirArray([7,8,9,10,5],2)
Devuelve:
[[7,8],[9,10],[5]]

*/

const dividirarray=(lista,num)=>{
    let listaDefinitiva=[]
    let listaTemporal=[]
    let contador=0
    if(lista.length>0){
        //Si la lista tiene datos retorna la lista definitiva
        for(let i in lista){
        listaTemporal.push(lista[i])
        contador++
        //Cuando contador llega al número se agrega temporal a definitiva, se vacía temporal y se pone a 0 el contador
        //para que comience a contar de 0 hasta el num
        if(contador==num){
            listaDefinitiva.push(listaTemporal)
            listaTemporal=[]
            contador=0
            }
        }
        //En caso de que queden restos de elementos en temporal se agregan a definitiva fuera del ciclo
        if(listaTemporal.length>0){
            listaDefinitiva.push(listaTemporal)
        }
    
        return listaDefinitiva
    }else{
        //En caso de que la lista sea 0
        return false
    }
    
}

module.exports=dividirarray