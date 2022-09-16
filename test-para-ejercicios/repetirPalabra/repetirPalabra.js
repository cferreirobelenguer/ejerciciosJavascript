/* Dado un string y un número, repetir el
string tantas veces como el número indique. 

Ejemplos:
repiteme("victor",2)

Devuelve:
victorvictor
*/

const repiteme=(palabra,num)=>{
    let frase=""
    let contador=0
    if(num>0){
        while(contador!=num){
        for(let i of palabra){
            frase+=i
        }
        contador++
    }
    return frase
    }else{
        return false
    }
    
}
module.exports=repiteme