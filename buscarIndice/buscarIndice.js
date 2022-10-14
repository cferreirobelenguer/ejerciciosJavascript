/* Crear una función find que dado un array 
de números desordenados y un número cualquiera
devuelva el índice del array del elemento o -1 
si no lo encuentra*/


const find=(lista,num)=>{
    let resultado=lista.indexOf(num)
        return resultado
    
}

console.log(find([3,5,65,7,45,34],4545))